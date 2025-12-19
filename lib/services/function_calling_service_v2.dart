import 'dart:convert';
import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;
import '../models/schedule.dart';
import '../models/schedule_rule.dart';
import '../models/schedule_override.dart';
import '../models/day_type.dart';
import '../models/user_memory.dart';
import '../utils/schedule_rule_converter.dart';
import 'api_config_service.dart';
import 'database_service.dart';
import 'day_service.dart';
import 'work_schedule_service.dart';
import 'memory_service.dart';
import 'ai_service.dart';
import 'msn_service.dart';
import '../models/pending_action.dart';

/// Function Calling 服务 V2 - 基于 demo_openai_compatible.py 的规范实现
///
/// 核心改进：
/// 1. 清晰的架构分离（函数转换、对话循环、函数执行）
/// 2. 规范的函数声明格式转换（Gemini schema -> OpenAI tool format）
/// 3. 正确的对话循环处理（无历史混乱问题）
/// 4. 保留所有现有的 tools 和 prompt
class FunctionCallingServiceV2 implements AIService {
  final ApiConfigService _configService;
  final DatabaseService _dbService;
  final DayService _dayService;
  final WorkScheduleService _workScheduleService;
  final MsnService _msnService;

  // 对话历史（OpenAI messages 格式）
  final List<Map<String, dynamic>> _messages = [];

  // 工具声明（OpenAI tool 格式）
  List<Map<String, dynamic>>? _tools;

  late final MemoryService _memoryService;

  String get _apiKey => _configService.apiKey;
  String get _baseUrl => _configService.baseUrl;
  String get _model => _configService.model;

  /// 待审批的操作列表
  @override
  final List<PendingAction> pendingActions = [];

  /// ID 计数器
  int _actionIdCounter = 0;

  /// 对话中断标志
  bool _isCancelled = false;

  /// 当收到新审批时的回调
  @override
  VoidCallback? onNewApproval;

  FunctionCallingServiceV2(
    this._configService,
    this._dbService,
    this._dayService,
    this._workScheduleService,
    this._msnService,
  ) {
    _initMemoryService();
  }

  /// 初始化记忆服务
  Future<void> _initMemoryService() async {
    final db = await _dbService.database;
    _memoryService = MemoryService(db);
  }

  /// 构建系统提示词
  String _buildSystemPrompt(MemorySummary? memory) {
    final basePrompt = """你是体贴的时间管理助手，帮助用户健康生活、完成目标。

🚨 关键规则 - 严格遵守：
1. 每个函数最多调用一次！拿到返回值后立即进入下一步
2. 标准流程: context → schedules → 分析 → propose_action → 完成
3. 已调用过的函数不要再调用（特别是 get_current_context 和 get_recent_schedules）
4. 拿到数据后必须立即分析并调用 propose_action，不要在循环中打转

示例流程（用户："12点45分跑步"）：
→ 调用 get_current_context (✅ 一次)
→ 调用 get_recent_schedules (✅ 一次)
→ 分析冲突
→ 调用 propose_action 提交操作
→ ✅ 完成

核心规则：
1. 创建/修改/删除日程必须调用 propose_action，禁止只回复"好的"
2. 批量删除：用户说"删除所有日程"时，调用 propose_action(action_type="delete_all")
3. 查询限制：
   - 7天内具体日程：get_recent_schedules
   - 了解规则概况：get_rules_summary（返回规则而非展开日程）
   - 禁止询问超过7天的具体日程
4. 时间判断：
   - "10点"等模糊时间必须确认上午/下午
   - 00:00-04:00说"明早"=当天早晨；04:00-07:00需询问；07:00后=次日
   - 禁止安排过去的时间
5. 时间字段：
   - time 必填（HH:mm格式）
   - 持续性活动（运动/会议/学习/工作/睡觉/吃饭/洗澡）必填 end_time
   - 瞬时事件（吃药/提醒/起床/出门）可不填 end_time
6. 尊重自主性：优先用户需求，提供建议而非强制

冲突检测优先级（创建前必检查）：

健康冲突（最高）：睡眠不足(<7h)、作息紊乱、深夜进食(>22点)、运动过度(>2h) → 必须调整，告知风险
逻辑矛盾（高）：时间顺序错误（起床前运动、睡觉后吃饭） → 立即建议调整
时间冲突（中）：同时段多任务 → 调整或询问优先级
任务超载（中）：一天10+任务或总时长超清醒时间 → 建议分散
缓冲不足（低）：任务间隔<15分钟 → 可提醒但不强制

日常状态处理：
- "我还没睡"（深夜）→ get_current_context + 睡眠建议
- "今天没洗澡"/"想运动" → query_schedules 分析空闲时段（对比 startTime/endTime）
- "今天好累" → 查询日程，建议取消非必要任务
- 时间紧迫时灵活建议（如半小时后开会但想睡 → 建议喝咖啡/伸展）

回复风格：自然语言，不提函数名、id等技术细节。

当前：${DateTime.now().toString().split(' ')[0]}""";

    if (memory != null && !memory.isEmpty) {
      return basePrompt + memory.toPromptText();
    }
    return basePrompt;
  }

  /// 将 Gemini 格式的函数声明转换为 OpenAI tool 格式
  ///
  /// 参考 demo_openai_compatible.py 中的 function_to_openai_tool 函数
  Map<String, dynamic> _convertToOpenAITool(Map<String, dynamic> geminiFunc) {
    return {
      'type': 'function',
      'function': {
        'name': geminiFunc['name'],
        'description': geminiFunc['description'],
        'parameters': _convertParameters(geminiFunc['parameters']),
      },
    };
  }

  /// 转换参数格式（Gemini -> OpenAI）
  Map<String, dynamic> _convertParameters(dynamic params) {
    final result = <String, dynamic>{};

    // 确保 params 是 Map
    if (params is! Map) return result;

    final paramsMap = Map<String, dynamic>.from(params);

    // 转换类型：OBJECT -> object, STRING -> string
    if (paramsMap['type'] != null) {
      result['type'] = paramsMap['type'].toString().toLowerCase();
    }

    // 转换 properties
    if (paramsMap['properties'] != null) {
      final props = Map<String, dynamic>.from(paramsMap['properties'] as Map);
      result['properties'] = props.map(
        (key, value) => MapEntry(key, _convertParameterValue(value)),
      );
    }

    // 转换 required
    if (paramsMap['required'] != null) {
      result['required'] = paramsMap['required'];
    }

    return result;
  }

  /// 递归转换参数值
  dynamic _convertParameterValue(dynamic value) {
    if (value is Map) {
      final converted = <String, dynamic>{};
      // 先转换为 Map<String, dynamic>
      final valueMap = Map<String, dynamic>.from(value);

      for (var entry in valueMap.entries) {
        if (entry.key == 'type') {
          // 类型转小写
          converted['type'] = entry.value.toString().toLowerCase();
        } else if (entry.key == 'properties') {
          // 递归转换 properties
          if (entry.value is Map) {
            final propsMap = Map<String, dynamic>.from(entry.value as Map);
            converted['properties'] = propsMap.map(
              (k, v) => MapEntry(k, _convertParameterValue(v)),
            );
          } else {
            converted['properties'] = entry.value;
          }
        } else {
          converted[entry.key] = entry.value;
        }
      }
      return converted;
    }
    return value;
  }

  /// 定义可用的函数工具（Gemini 格式 - 与原版完全相同）
  List<Map<String, dynamic>> get _functionDeclarations => [
    {
      "name": "get_current_context",
      "description": "获取当前上下文信息：当前时间、今天是星期几、是否工作日/休息日、用户的工作制等。此函数无需参数。",
      "parameters": {
        "type": "OBJECT",
        "properties": {},
        "required": [],
      },
    },
    {
      "name": "get_recent_schedules",
      "description": "获取最近几天的日程（最多7天）。用于查看今天/明天/最近的具体日程安排",
      "parameters": {
        "type": "OBJECT",
        "properties": {
          "date": {
            "type": "STRING",
            "description":
                "查询日期，只能是 'today'、'tomorrow'、'yesterday' 或 YYYY-MM-DD 格式的日期（距今不超过7天）",
          },
          "days_count": {
            "type": "INTEGER",
            "description": "连续查询的天数（1-7），默认1天。如 days_count=3 表示查询从指定日期开始的3天",
          },
        },
        "required": ["date"],
      },
    },
    {
      "name": "get_rules_summary",
      "description": "获取所有日程规则的摘要信息（不生成具体日程）。用于了解用户设置了哪些规则。超过7天的日程查询应使用此功能获取规则+覆盖信息，避免输入过长",
      "parameters": {
        "type": "OBJECT",
        "properties": {
          "include_disabled": {
            "type": "BOOLEAN",
            "description": "是否包含已禁用的规则，默认 false",
          },
        },
      },
    },
    {
      "name": "analyze_busyness",
      "description": "分析指定日期范围内每天的繁忙程度（事件数量和总时长）。用于判断哪些天比较空闲，适合安排新任务",
      "parameters": {
        "type": "OBJECT",
        "properties": {
          "start_date": {"type": "STRING", "description": "开始日期，格式 YYYY-MM-DD"},
          "end_date": {"type": "STRING", "description": "结束日期，格式 YYYY-MM-DD"},
        },
        "required": ["start_date", "end_date"],
      },
    },
    {
      "name": "get_weather_cache",
      "description": "读取MSN缓存的天气信息。用于规划户外活动时参考天气情况",
      "parameters": {
        "type": "OBJECT",
        "properties": {
          "date_type": {
            "type": "STRING",
            "enum": ["today", "forecast"],
            "description": "today=当日天气，forecast=未来5天预报",
          },
        },
        "required": ["date_type"],
      },
    },
    {
      "name": "get_lunar_cache",
      "description": "读取MSN缓存的黄历信息（农历、宜忌、生肖等）。用户迷信或好奇时可参考",
      "parameters": {
        "type": "OBJECT",
        "properties": {
          "placeholder": {"type": "STRING", "description": "占位符，无需填写"},
        },
      },
    },
    {
      "name": "save_memory",
      "description": "保存用户的偏好、习惯或重要信息到长期记忆。当用户明确表达'我喜欢'、'我习惯'、'我总是'等偏好时调用",
      "parameters": {
        "type": "OBJECT",
        "properties": {
          "memory_type": {
            "type": "STRING",
            "enum": ["preference", "habit", "fact"],
            "description": "记忆类型：preference=偏好，habit=习惯模式，fact=重要事实",
          },
          "content": {
            "type": "STRING",
            "description": "记忆内容，用简洁的陈述句，如'喜欢早上运动'、'每周三没时间健身'、'工作制是大小周'",
          },
          "importance": {
            "type": "NUMBER",
            "description": "重要性(0-1)，默认0.5。明确的偏好用0.7-0.9，一般习惯用0.4-0.6",
          },
        },
        "required": ["memory_type", "content"],
      },
    },
    {
      "name": "propose_action",
      "description":
          "提交一个待审批的操作（创建、修改或删除日程）。用户会在界面上看到并决定是否执行。\n\n⚠️ 重要：持续性活动（运动、会议、学习、工作、睡觉、吃饭等）必须填写 end_time！",
      "parameters": {
        "type": "OBJECT",
        "properties": {
          "action_type": {
            "type": "STRING",
            "enum": ["create", "modify", "modify_once", "delete", "delete_all"],
            "description":
                "【必填】操作类型：create=创建规则, modify=修改规则, modify_once=仅修改某天, delete=删除单个日程, delete_all=删除所有日程规则",
          },
          "description": {
            "type": "STRING",
            "description": "【必填】操作描述，显示给用户看的，如：'创建每天早上7点的晨跑日程'",
          },
          "schedule_data": {
            "type": "OBJECT",
            "description": "【必填】日程数据对象",
            "properties": {
              "id": {"type": "STRING", "description": "【modify/delete时必填】日程ID"},
              "title": {
                "type": "STRING",
                "description": "【create时必填】日程标题，如'晨跑'、'周会'、'吃药'",
              },
              "time": {
                "type": "STRING",
                "description": "【create时必填】开始时间，格式必须是 HH:mm（如 08:30）",
              },
              "end_time": {
                "type": "STRING",
                "description":
                    "【条件必填】结束时间，格式 HH:mm。\n规则：\n✅ 持续性活动必填（运动、会议、学习、工作、睡觉、吃饭、洗澡等）\n❌ 瞬时事件可不填（吃药、提醒、闹钟、起床、出门等）\n\n示例：\n- 晨跑 07:00-08:00 → end_time: '08:00' ✅\n- 周会 09:00-10:00 → end_time: '10:00' ✅\n- 吃药 08:00 → end_time: null ✅\n- 起床 07:00 → end_time: null ✅",
              },
              "description": {"type": "STRING", "description": "【可选】详细描述"},
              "condition_type": {
                "type": "STRING",
                "enum": [
                  "daily",
                  "workday",
                  "restday",
                  "weekend",
                  "holiday",
                  "weekday",
                  "interval",
                  "specific_date",
                ],
                "description":
                    "【create时必填】条件类型：daily=每天, workday=工作日, restday=休息日, weekend=周末, holiday=节假日, weekday=特定星期几, interval=每隔N天, specific_date=特定日期",
              },
              "weekday": {
                "type": "INTEGER",
                "description":
                    "【condition_type=weekday时必填】1=周一, 2=周二, ..., 7=周日（取值范围 1-7）",
              },
              "interval_days": {
                "type": "INTEGER",
                "minimum": 1,
                "description": "【condition_type=interval时必填】间隔天数，如3表示每隔3天",
              },
              "start_date": {
                "type": "STRING",
                "description":
                    "【condition_type=interval时必填】起始日期 YYYY-MM-DD，从这天开始计算间隔",
              },
              "specific_date": {
                "type": "STRING",
                "description":
                    "【condition_type=specific_date时必填】特定日期 YYYY-MM-DD",
              },
              "end_date": {
                "type": "STRING",
                "description": "【可选】结束日期 YYYY-MM-DD，如'持续3周'、'到月底'等",
              },
              "max_count": {
                "type": "INTEGER",
                "minimum": 1,
                "description": "【可选】最大重复次数，如'共10次'、'重复5次'等",
              },
              "date": {
                "type": "STRING",
                "description": "【modify_once时必填】要修改的日期 YYYY-MM-DD",
              },
              "new_time": {
                "type": "STRING",
                "description": "【modify_once时可选】新的开始时间 HH:mm",
              },
              "new_end_time": {
                "type": "STRING",
                "description":
                    "【modify_once时可选】新的结束时间 HH:mm。如果原日程有 end_time，修改时也应该提供！",
              },
              "new_title": {
                "type": "STRING",
                "description": "【modify_once时可选】新的标题",
              },
              "new_description": {
                "type": "STRING",
                "description": "【modify_once时可选】新的描述",
              },
              "metadata": {
                "type": "OBJECT",
                "description": "【可选】附加信息，如地点、参与人等",
              },
            },
          },
        },
        "required": ["action_type", "description", "schedule_data"],
      },
    },
  ];

  /// 发送消息并处理函数调用
  ///
  /// 这是主入口，参考 demo_openai_compatible.py 中的 send_message 方法
  @override
  Future<String> chat(String userMessage) async {
    debugPrint('\n========== Chat Start ==========');
    debugPrint('用户消息: $userMessage');

    // 重置中断标志
    _isCancelled = false;

    try {
      // 首次初始化：加载记忆并创建会话
      if (_messages.isEmpty) {
        await _createChatSession();
      }

      // 添加用户消息
      _messages.add(<String, dynamic>{
        'role': 'user',
        'content': userMessage,
      });

      // 开始对话循环
      final response = await _handleConversation();

      debugPrint('最终回复: $response');
      debugPrint('当前 pendingActions 数量: ${pendingActions.length}');
      debugPrint('========== Chat End ==========\n');

      return response;
    } catch (e, stackTrace) {
      debugPrint('错误: $e');
      debugPrint('堆栈跟踪:\n$stackTrace');
      return '抱歉，发生了错误：${e.toString()}';
    }
  }

  /// 创建聊天会话
  Future<void> _createChatSession() async {
    // 加载用户记忆
    MemorySummary? memory;
    try {
      memory = await _memoryService.getMemorySummary(
        maxPreferences: 5,
        maxHabits: 3,
        maxFacts: 5,
        maxEpisodes: 2,
      );
    } catch (e) {
      debugPrint('加载记忆失败: $e');
    }

    // 添加系统消息
    final systemPrompt = _buildSystemPrompt(memory);
    _messages.add(<String, dynamic>{
      'role': 'system',
      'content': systemPrompt,
    });

    // 转换工具声明为 OpenAI 格式
    _tools = _functionDeclarations.map(_convertToOpenAITool).toList();

    debugPrint('[OK] 聊天会话创建成功');
    debugPrint('  - 模型: $_model');
    debugPrint('  - API Base: $_baseUrl');
    debugPrint('  - 可用工具数量: ${_tools!.length}');
  }

  /// 处理对话循环
  ///
  /// 参考 demo_openai_compatible.py 中的主循环逻辑
  Future<String> _handleConversation({int maxIterations = 5}) async {
    int iteration = 0;

    while (iteration < maxIterations) {
      // 检查是否被中断
      if (_isCancelled) {
        debugPrint('对话已被中断');
        return '对话已中断';
      }

      iteration++;
      debugPrint('\n处理循环，迭代: $iteration');

      // 调用 API
      // 注意：gemini-2.5-flash 正常工作，通常1-2次迭代即可完成
      // 如果使用 gemini-3-flash-preview 会出现循环问题（需要 thought_signature 支持）
      final response = await _callAPI();

      // 检查响应
      final choices = response['choices'] as List?;
      if (choices == null || choices.isEmpty) {
        return '抱歉，API 没有返回任何内容。';
      }

      final message = choices[0]['message'] as Map<String, dynamic>;
      final finishReason = choices[0]['finish_reason'] as String?;
      final toolCalls = message['tool_calls'] as List?;
      final content = message['content'] as String?;

      debugPrint('finish_reason: $finishReason');
      debugPrint('有 tool_calls: ${toolCalls != null && toolCalls.isNotEmpty}');
      debugPrint('有 content: ${content != null && content.isNotEmpty}');

      // 情况1: 有 tool_calls，需要执行函数
      if (toolCalls != null && toolCalls.isNotEmpty) {
        debugPrint('\n检测到 ${toolCalls.length} 个函数调用:');

        // 添加 assistant 的响应到历史
        _messages.add(<String, dynamic>{
          'role': 'assistant',
          'content': content,
          'tool_calls': toolCalls.map((tc) => <String, dynamic>{
            'id': tc['id'],
            'type': tc['type'],
            'function': <String, dynamic>{
              'name': tc['function']['name'],
              'arguments': tc['function']['arguments'],
            },
          }).toList(),
        });

        // 执行每个工具调用
        for (var toolCall in toolCalls) {
          var funcName = toolCall['function']['name'] as String;
          final funcArgsStr = toolCall['function']['arguments'] as String;
          final funcArgs = Map<String, dynamic>.from(jsonDecode(funcArgsStr));

          // 去掉可能的前缀（如 "plugin_calendar:"）
          if (funcName.contains(':')) {
            funcName = funcName.split(':').last;
          }

          debugPrint('  - $funcName(${jsonEncode(funcArgs)})');

          // 执行函数
          final result = await _executeFunction(funcName, funcArgs);

          debugPrint('    -> ${jsonEncode(result)}');

          // 添加工具响应到历史
          _messages.add(<String, dynamic>{
            'role': 'tool',
            'tool_call_id': toolCall['id'],
            'content': jsonEncode(result),
          });
        }

        // 继续循环，让模型基于工具结果生成回答
        continue;
      }

      // 情况2: 没有 tool_calls，返回最终回答
      if (content != null && content.isNotEmpty) {
        // 添加到历史
        _messages.add(<String, dynamic>{
          'role': 'assistant',
          'content': content,
        });

        debugPrint('\n助手: $content');
        return content;
      }

      // 情况3: 既没有 tool_calls 也没有 content
      return '抱歉，API 返回了空内容。';
    }

    // 超过最大迭代次数
    return '抱歉，处理您的请求时遇到了问题，请重试或使用更简单的指令。';
  }

  /// 调用 API
  Future<Map<String, dynamic>> _callAPI() async {
    // 检查配置
    if (!_configService.isConfigured) {
      throw Exception('API 未配置，请先在设置中配置 API');
    }

    final validationError = _configService.validateConfig();
    if (validationError != null) {
      throw Exception('API 配置错误: $validationError');
    }

    // 构建 URL
    final url = Uri.parse('$_baseUrl/chat/completions');

    // 构建 headers
    final headers = {
      'Content-Type': 'application/json',
      'Authorization': '${_configService.authPrefix} $_apiKey',
    };

    // 构建请求体
    final requestBody = <String, dynamic>{
      'model': _model,
      'messages': _messages,
    };

    // 添加工具参数
    if (_tools != null && _tools!.isNotEmpty) {
      requestBody['tools'] = _tools;
      requestBody['tool_choice'] = 'auto';
    }

    debugPrint('\n发送请求:');
    debugPrint('Messages 数量: ${_messages.length}');
    debugPrint('最后一条消息: role=${_messages.last['role']}');

    // 发送请求
    final response = await http.post(
      url,
      headers: headers,
      body: jsonEncode(requestBody),
    );

    debugPrint('Response Status: ${response.statusCode}');

    if (response.statusCode != 200) {
      throw Exception('API 调用失败: ${response.statusCode} - ${response.body}');
    }

    // 使用深度转换确保所有嵌套 Map 都是正确类型
    final decoded = jsonDecode(response.body);
    return _deepConvertMap(decoded) as Map<String, dynamic>;
  }

  /// 递归转换 Map 类型，确保所有嵌套 Map 都是 Map&lt;String, dynamic&gt;
  dynamic _deepConvertMap(dynamic value) {
    if (value is Map) {
      return Map<String, dynamic>.from(
        value.map((k, v) => MapEntry(k.toString(), _deepConvertMap(v))),
      );
    } else if (value is List) {
      return value.map(_deepConvertMap).toList();
    }
    return value;
  }

  /// 执行函数调用
  Future<Map<String, dynamic>> _executeFunction(
    String functionName,
    Map<String, dynamic> arguments,
  ) async {
    try {
      dynamic result;
      switch (functionName) {
        case 'get_current_context':
          result = await _getCurrentContext();
          break;
        case 'get_recent_schedules':
          result = await _getRecentSchedules(arguments);
          break;
        case 'get_rules_summary':
          result = await _getRulesSummary(arguments);
          break;
        case 'analyze_busyness':
          result = await _analyzeBusyness(arguments);
          break;
        case 'get_weather_cache':
          result = await _getWeatherCache(arguments);
          break;
        case 'get_lunar_cache':
          result = await _getLunarCache();
          break;
        case 'save_memory':
          result = await _saveMemory(arguments);
          break;
        case 'propose_action':
          result = await _proposeAction(arguments);
          break;
        default:
          result = <String, dynamic>{'error': '未知的函数: $functionName'};
      }
      // 深度转换，确保所有嵌套 Map 都是正确类型
      return _deepConvertMap(result) as Map<String, dynamic>;
    } catch (e) {
      return <String, dynamic>{'error': '执行失败: $e'};
    }
  }

  // ========== 工具函数实现（与原版完全相同，保留所有逻辑）==========

  Future<Map<String, dynamic>> _getCurrentContext() async {
    final now = DateTime.now();
    final today = DateTime(now.year, now.month, now.day);
    final tomorrow = today.add(const Duration(days: 1));

    final workScheduleType = _workScheduleService.currentType;
    final todayType = await _dayService.getDayType(today);
    final tomorrowType = await _dayService.getDayType(tomorrow);

    final weekdays = ['一', '二', '三', '四', '五', '六', '日'];

    return {
      'current_time': now.toString(),
      'hour': now.hour,
      'minute': now.minute,
      'today': {
        'date': today.toString().split(' ')[0],
        'weekday': '星期${weekdays[today.weekday - 1]}',
        'day_type': todayType.toString().split('.').last,
        'is_rest': todayType == DayType.weekend || todayType == DayType.holiday,
      },
      'tomorrow': {
        'date': tomorrow.toString().split(' ')[0],
        'weekday': '星期${weekdays[tomorrow.weekday - 1]}',
        'day_type': tomorrowType.toString().split('.').last,
        'is_rest':
            tomorrowType == DayType.weekend || tomorrowType == DayType.holiday,
      },
      'work_schedule': workScheduleType.toString().split('.').last,
      'sleep_suggestion': _getSleepSuggestion(now),
    };
  }

  String _getSleepSuggestion(DateTime now) {
    final hour = now.hour;
    if (hour >= 0 && hour < 6) {
      return 'very_late';
    } else if (hour >= 22 && hour < 24) {
      return 'should_sleep';
    } else if (hour >= 6 && hour < 9) {
      return 'morning';
    } else {
      return 'normal';
    }
  }

  Future<Map<String, dynamic>> _getRecentSchedules(
    Map<String, dynamic> args,
  ) async {
    final now = DateTime.now();
    DateTime startDate;

    final dateStr = args['date'].toString().toLowerCase();
    if (dateStr == 'today') {
      startDate = DateTime(now.year, now.month, now.day);
    } else if (dateStr == 'tomorrow') {
      startDate = DateTime(
        now.year,
        now.month,
        now.day,
      ).add(const Duration(days: 1));
    } else if (dateStr == 'yesterday') {
      startDate = DateTime(
        now.year,
        now.month,
        now.day,
      ).subtract(const Duration(days: 1));
    } else {
      try {
        startDate = DateTime.parse(args['date']);
      } catch (e) {
        return {'error': '日期格式错误: ${args['date']}'};
      }
    }

    final daysDiff = startDate
        .difference(DateTime(now.year, now.month, now.day))
        .inDays
        .abs();
    if (daysDiff > 7) {
      return {
        'error': '日期超出范围',
        'message': '只能查询距今7天内的日程。如需了解更远的日程规则，请使用 get_rules_summary。',
        'requested_date': startDate.toString().split(' ')[0],
      };
    }

    final daysCount = (args['days_count'] as int? ?? 1).clamp(1, 7);

    final allSchedules = <Schedule>[];
    for (var i = 0; i < daysCount; i++) {
      final date = startDate.add(Duration(days: i));
      final schedules = await _dbService.getSchedulesByDate(date);
      allSchedules.addAll(schedules);
    }

    return {
      'success': true,
      'date_range': daysCount == 1
          ? startDate.toString().split(' ')[0]
          : '${startDate.toString().split(' ')[0]} 至 ${startDate.add(Duration(days: daysCount - 1)).toString().split(' ')[0]}',
      'count': allSchedules.length,
      'schedules': allSchedules
          .map(
            (s) => {
              'id': s.id,
              'date': s.date.toString().split(' ')[0],
              'title': s.title,
              'startTime': s.startTime
                  ?.toString()
                  .split(' ')[1]
                  .substring(0, 5),
              'endTime': s.endTime?.toString().split(' ')[1].substring(0, 5),
              'description': s.description,
              'isCompleted': s.isCompleted,
            },
          )
          .toList(),
    };
  }

  Future<Map<String, dynamic>> _getRulesSummary(
    Map<String, dynamic> args,
  ) async {
    final includeDisabled = args['include_disabled'] as bool? ?? false;

    final allRules = await _dbService.getAllRules();
    final rules = includeDisabled
        ? allRules
        : allRules.where((r) => r.isEnabled).toList();

    return {
      'success': true,
      'total_rules': rules.length,
      'rules': rules
          .map(
            (r) => {
              'id': r.id,
              'title': r.title,
              'time': r.time,
              'endTime': r.endTime,
              'conditionType': r.condition.type.name,
              'description': r.description,
              'isEnabled': r.isEnabled,
            },
          )
          .toList(),
    };
  }

  Future<Map<String, dynamic>> _analyzeBusyness(
    Map<String, dynamic> args,
  ) async {
    DateTime startDate;
    DateTime endDate;

    try {
      startDate = DateTime.parse(args['start_date']);
      endDate = DateTime.parse(args['end_date']);
    } catch (e) {
      return {'error': '日期格式错误'};
    }

    final busynessByDate = <String, Map<String, dynamic>>{};

    var currentDate = startDate;
    while (currentDate.isBefore(endDate.add(const Duration(days: 1)))) {
      final schedules = await _dbService.getSchedulesByDate(currentDate);

      int eventCount = schedules.length;
      double totalMinutes = 0.0;

      for (var schedule in schedules) {
        if (schedule.startTime != null) {
          totalMinutes += 60.0;
        }
      }

      final dateStr = currentDate.toString().split(' ')[0];
      busynessByDate[dateStr] = {
        'event_count': eventCount,
        'total_duration_minutes': totalMinutes,
        'is_busy': eventCount > 5 || totalMinutes > 360,
      };

      currentDate = currentDate.add(const Duration(days: 1));
    }

    final sortedDays = busynessByDate.entries.toList()
      ..sort(
        (a, b) => (a.value['event_count'] as int).compareTo(
          b.value['event_count'] as int,
        ),
      );

    final leastBusyDays = sortedDays.take(3).map((e) => e.key).toList();

    return {
      'success': true,
      'date_range':
          '${startDate.toString().split(' ')[0]} 至 ${endDate.toString().split(' ')[0]}',
      'busyness_by_date': busynessByDate,
      'least_busy_days': leastBusyDays,
      'summary': {
        'total_days': busynessByDate.length,
        'busy_days': busynessByDate.values
            .where((v) => v['is_busy'] == true)
            .length,
        'average_events_per_day':
            busynessByDate.values
                .map((v) => v['event_count'] as int)
                .reduce((a, b) => a + b) /
            busynessByDate.length,
      },
    };
  }

  Future<Map<String, dynamic>> _getWeatherCache(
    Map<String, dynamic> args,
  ) async {
    try {
      final dateType = args['date_type'] as String;
      final weatherData = _msnService.weatherData;

      if (weatherData == null) {
        return {
          'error': '天气数据不可用',
          'message': '请稍后重试或刷新天气数据',
        };
      }

      if (dateType == 'today') {
        final current = weatherData['current'] as Map<String, dynamic>?;
        final location = weatherData['location'] as Map<String, dynamic>?;
        final airQuality = weatherData['airQuality'] as Map<String, dynamic>?;

        return {
          'success': true,
          'date_type': 'today',
          'location': location?['city'] ?? '未知',
          'temperature': current?['temperature'],
          'feels_like': current?['feelsLike'],
          'condition': current?['condition'],
          'humidity': current?['humidity'],
          'wind_speed': current?['windSpeed'],
          'uv_index': current?['uvIndex'],
          'uv_desc': current?['uvDescription'],
          'aqi': airQuality?['aqi'],
          'aqi_level': airQuality?['severity'],
          'summary': '${location?['city'] ?? '当地'} ${current?['temperature']}°C ${current?['condition']}，体感${current?['feelsLike']}°C，空气质量${airQuality?['severity']}',
        };
      } else if (dateType == 'forecast') {
        final forecast = weatherData['forecast'] as List?;
        if (forecast == null || forecast.isEmpty) {
          return {'error': '未来预报数据不可用'};
        }

        final forecastList = forecast.take(5).map((day) {
          return {
            'date': day['date'],
            'high': day['highTemp'],
            'low': day['lowTemp'],
            'condition': day['condition'],
            'precipitation': day['precipitation'],
            'aqi': day['aqi'],
          };
        }).toList();

        return {
          'success': true,
          'date_type': 'forecast',
          'forecast_days': forecastList.length,
          'forecast': forecastList,
          'summary': '未来${forecastList.length}天预报已获取',
        };
      }

      return {'error': '未知的日期类型'};
    } catch (e) {
      debugPrint('获取天气缓存失败: $e');
      return {'error': '获取天气缓存失败: $e'};
    }
  }

  Future<Map<String, dynamic>> _getLunarCache() async {
    try {
      final calendarData = _msnService.calendarData;

      if (calendarData == null) {
        return {
          'error': '黄历数据不可用',
          'message': '请稍后重试或刷新日历数据',
        };
      }

      final date = calendarData['date'] as Map<String, dynamic>?;
      final lunar = calendarData['lunar'] as Map<String, dynamic>?;
      final ganZhi = calendarData['ganZhi'] as Map<String, dynamic>?;
      final suitable = calendarData['suitable'] as List?;
      final unsuitable = calendarData['unsuitable'] as List?;
      final festivals = calendarData['festivals'] as List?;

      return {
        'success': true,
        'solar': {
          'year': date?['year'],
          'month': date?['month'],
          'day': date?['day'],
        },
        'lunar': {
          'year': lunar?['year'],
          'month': lunar?['month'],
          'day': lunar?['day'],
          'alias': lunar?['alias'],
        },
        'gan_zhi': {
          'year': ganZhi?['year'],
          'month': ganZhi?['month'],
          'day': ganZhi?['day'],
        },
        'zodiac': calendarData['zodiac'],
        'constellation': calendarData['constellation'],
        'suitable_activities': suitable ?? [],
        'unsuitable_activities': unsuitable ?? [],
        'festivals': festivals ?? [],
        'summary':
            '农历${lunar?['month']}月${lunar?['day']} ${lunar?['alias'] ?? ''} ${calendarData['zodiac'] ?? ''}年，'
            '${suitable != null && suitable.isNotEmpty ? '宜${suitable.take(3).join("、")}' : ''}'
            '${unsuitable != null && unsuitable.isNotEmpty ? '，忌${unsuitable.take(3).join("、")}' : ''}',
      };
    } catch (e) {
      debugPrint('获取黄历缓存失败: $e');
      return {'error': '获取黄历缓存失败: $e'};
    }
  }

  Future<Map<String, dynamic>> _saveMemory(Map<String, dynamic> args) async {
    try {
      final memoryTypeStr = args['memory_type'] as String;
      final content = args['content'] as String;
      final importance = args['importance'] as double? ?? 0.5;

      final memoryType = MemoryType.values.firstWhere(
        (e) => e.toString().split('.').last == memoryTypeStr,
        orElse: () => MemoryType.fact,
      );

      final memory = MemoryEntry(
        id: '${DateTime.now().millisecondsSinceEpoch}_${memoryType.toString().split('.').last}',
        type: memoryType,
        content: content,
        createdAt: DateTime.now(),
        importance: importance,
      );

      await _memoryService.saveMemory(memory);

      debugPrint('已保存记忆: [$memoryTypeStr] $content');

      return {
        'success': true,
        'message': '已记住：$content',
        'memory_id': memory.id,
      };
    } catch (e) {
      debugPrint('保存记忆失败: $e');
      return {'success': false, 'error': '保存记忆失败: $e'};
    }
  }

  Future<Map<String, dynamic>> _proposeAction(Map<String, dynamic> args) async {
    debugPrint('\n_proposeAction 被调用');
    debugPrint('参数: $args');

    final actionType = args['action_type'];
    final description = args['description'];
    final scheduleData = args['schedule_data'] as Map<String, dynamic>;

    ActionType type;
    switch (actionType) {
      case 'create':
        type = ActionType.create;
        break;
      case 'modify':
        type = ActionType.modify;
        break;
      case 'modify_once':
        type = ActionType.modifyOnce;
        break;
      case 'delete':
        type = ActionType.delete;
        break;
      case 'delete_all':
        type = ActionType.deleteAll;
        break;
      default:
        debugPrint('错误: 未知的操作类型 $actionType');
        return {'success': false, 'error': '未知的操作类型'};
    }

    final action = PendingAction(
      id: '${DateTime.now().millisecondsSinceEpoch}_${_actionIdCounter++}',
      type: type,
      description: description,
      data: scheduleData,
    );

    pendingActions.add(action);
    debugPrint('已添加到 pendingActions，当前数量: ${pendingActions.length}');
    debugPrint('Action ID: ${action.id}');

    onNewApproval?.call();

    return {
      'success': true,
      'message': '已提交审批请求，等待用户确认',
      'action_id': action.id,
    };
  }

  // ========== 操作执行方法（与原版完全相同）==========

  @override
  Future<void> executeAction(String actionId) async {
    final action = pendingActions.firstWhere(
      (a) => a.id == actionId,
      orElse: () => throw Exception('操作不存在'),
    );

    try {
      switch (action.type) {
        case ActionType.create:
          await _createSchedule(action.data);
          break;
        case ActionType.modify:
          await _modifySchedule(action.data);
          break;
        case ActionType.modifyOnce:
          await _modifyOnce(action.data);
          break;
        case ActionType.delete:
          await _deleteSchedule(action.data);
          break;
        case ActionType.deleteAll:
          await _executeDeleteAll();
          break;
        case ActionType.toggleComplete:
          await _toggleComplete(action.data);
          break;
      }

      pendingActions.removeWhere((a) => a.id == actionId);
    } catch (e) {
      pendingActions.removeWhere((a) => a.id == actionId);
      rethrow;
    }
  }

  @override
  void rejectAction(String actionId) {
    pendingActions.removeWhere((a) => a.id == actionId);
  }

  Future<void> _createSchedule(Map<String, dynamic> data) async {
    debugPrint('_createSchedule 被调用，数据: $data');

    if (data['time'] == null || (data['time'] as String).trim().isEmpty) {
      throw Exception('日程创建失败：缺少必需的 time 字段。每个日程必须指定具体的时间（格式 HH:mm）');
    }

    final rule = ScheduleRuleConverter.fromAIJson(data);

    debugPrint(
      '创建 ScheduleRule: ${rule.title}, 时间: ${rule.time}, 类型: ${rule.condition.type}',
    );

    await _dbService.insertRule(rule);
    debugPrint('规则已插入数据库');
  }

  Future<void> _modifyOnce(Map<String, dynamic> data) async {
    debugPrint('执行 modifyOnce: $data');

    late DateTime date;
    String? ruleId;

    if (data.containsKey('id')) {
      final scheduleId = data['id'] as String;

      final parts = scheduleId.split('_');
      bool dateParsed = false;
      if (parts.length > 1) {
        try {
          date = DateTime.parse(parts[1]);
          dateParsed = true;
        } catch (e) {
          debugPrint('无法从id解析日期: $e');
        }
      }

      if (!dateParsed) {
        if (data.containsKey('date')) {
          date = DateTime.parse(data['date'] as String);
        } else {
          throw Exception('无法确定日期，请提供 date 参数');
        }
      }

      final schedules = await _dbService.getSchedulesByDate(date);
      final schedule = schedules.firstWhere(
        (s) => s.id == scheduleId,
        orElse: () => throw Exception('未找到日程: $scheduleId'),
      );
      ruleId = schedule.sourceTemplateId;
      if (ruleId == null) {
        throw Exception('该日程不是由规则生成的，无法使用modify_once');
      }
    } else if (data.containsKey('title')) {
      final title = data['title'] as String;
      ruleId = await _dbService.findRuleId(title, null);
      if (ruleId == null) {
        throw Exception('未找到匹配的规则: $title');
      }
      if (!data.containsKey('date')) {
        throw Exception('使用 title 查找时必须提供 date 参数');
      }
      date = DateTime.parse(data['date'] as String);
    } else {
      throw Exception('modify_once 需要提供 id 或 title 参数');
    }

    debugPrint('找到规则ID: $ruleId, 日期: $date');

    if (data.containsKey('end_date') && data['end_date'] != null) {
      if (!data.containsKey('new_end_time') || data['new_end_time'] == null) {
        throw Exception('范围覆盖必须有结束时间（new_end_time），以防止永久覆盖');
      }
    }

    OverrideType type;
    String? newTime;
    String? newEndTime;
    String? newTitle;
    String? newDescription;

    final hasMultipleChanges =
        [
          data.containsKey('new_time'),
          data.containsKey('new_end_time'),
          data.containsKey('new_title'),
          data.containsKey('new_description'),
        ].where((x) => x).length >
        1;

    if (hasMultipleChanges || data.containsKey('new_description')) {
      type = OverrideType.modify;
      newTime = data['new_time'] as String?;
      newEndTime = data['new_end_time'] as String?;
      newTitle = data['new_title'] as String?;
      newDescription = data['new_description'] as String?;
      debugPrint(
        '修改多个属性: time=$newTime, endTime=$newEndTime, title=$newTitle, desc=$newDescription',
      );
    } else if (data.containsKey('new_time') ||
        data.containsKey('new_end_time')) {
      type = OverrideType.modifyTime;
      newTime = data['new_time'] as String?;
      newEndTime = data['new_end_time'] as String?;
      debugPrint('修改时间为: $newTime - $newEndTime');
    } else if (data.containsKey('new_title')) {
      type = OverrideType.replace;
      newTitle = data['new_title'] as String;
      newTime = data['new_time'] as String?;
      newEndTime = data['new_end_time'] as String?;
      debugPrint('替换为: $newTitle @ $newTime - $newEndTime');
    } else {
      type = OverrideType.skip;
      debugPrint('跳过该日程');
    }

    final override = ScheduleOverride(
      startDate: date,
      endDate: date,
      ruleId: ruleId,
      type: type,
      newTime: newTime,
      newEndTime: newEndTime,
      newTitle: newTitle,
      newDescription: newDescription,
    );

    await _dbService.insertOverride(override);
    debugPrint('覆盖记录已创建');
  }

  Future<void> _modifySchedule(Map<String, dynamic> data) async {
    debugPrint('执行 modifySchedule: $data');

    String? ruleId;
    if (data.containsKey('id')) {
      final scheduleId = data['id'].toString();
      final parts = scheduleId.split('_');
      if (parts.isNotEmpty) {
        ruleId = parts[0];
      }
    } else if (data.containsKey('title')) {
      ruleId = await _dbService.findRuleId(data['title'] as String, null);
    }

    if (ruleId == null) {
      throw Exception('无法找到要修改的规则，请提供日程ID或标题');
    }

    debugPrint('找到规则ID: $ruleId');

    final rule = await _dbService.getRuleById(ruleId);
    if (rule == null) {
      throw Exception('规则不存在: $ruleId');
    }

    final updatedRule = ScheduleRule(
      id: rule.id,
      title: data['title'] as String? ?? rule.title,
      description: data['description'] as String? ?? rule.description,
      time: data['time'] as String? ?? rule.time,
      endTime: data['end_time'] as String? ?? rule.endTime,
      condition: rule.condition,
      createdAt: rule.createdAt,
      isEnabled: rule.isEnabled,
    );

    await _dbService.updateRule(updatedRule);
    debugPrint('规则已更新');
  }

  Future<void> _deleteSchedule(Map<String, dynamic> data) async {
    final scheduleId = data['id'].toString();
    await _dbService.deleteSchedule(scheduleId);
  }

  Future<void> _executeDeleteAll() async {
    final db = await _dbService.database;

    await db.delete('schedule_rules');
    await db.delete('schedule_overrides');
  }

  Future<void> _toggleComplete(Map<String, dynamic> data) async {
    final scheduleId = data['id'].toString();

    Schedule? originalSchedule;
    final today = DateTime.now();
    for (var i = -365; i <= 365; i++) {
      final date = today.add(Duration(days: i));
      final schedules = await _dbService.getSchedulesByDate(date);
      try {
        originalSchedule = schedules.firstWhere((s) => s.id == scheduleId);
        break;
      } catch (e) {
        continue;
      }
    }

    if (originalSchedule == null) {
      throw Exception('未找到日程');
    }

    final updated = originalSchedule.copyWith(
      isCompleted: !originalSchedule.isCompleted,
    );

    await _dbService.updateSchedule(updated);
  }

  @override
  void clearHistory() {
    debugPrint('清空对话历史，重置所有状态');
    
    // 设置中断标志，停止正在进行的对话
    _isCancelled = true;
    
    // 清空所有状态
    _messages.clear();
    _tools = null;
    pendingActions.clear();
    _actionIdCounter = 0;
    
    debugPrint('对话历史已清空，上下文已重置');
  }
}
