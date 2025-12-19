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

/// 基础函数调用服务 - 支持 Gemini 和 GPT 两种 API 格式
class BaseFunctionCallingService implements AIService {
  final ApiConfigService _configService;
  final DatabaseService _dbService;
  final DayService _dayService;
  final WorkScheduleService _workScheduleService;
  final MsnService _msnService;

  // Gemini 聊天历史
  final List<Map<String, dynamic>> _contents = [];
  // System Instruction
  String? _systemInstruction;

  late final MemoryService _memoryService;

  String get _apiKey => _configService.apiKey;
  String get _endpoint => _configService.endpoint;
  String get _model => _configService.model;

  /// 待审批的操作列表
  @override
  final List<PendingAction> pendingActions = [];

  /// ID 计数器，确保在同一毫秒内生成的 ID 也是唯一的
  int _actionIdCounter = 0;

  /// 对话中断标志
  bool _isCancelled = false;

  /// 当收到新审批时的回调
  @override
  VoidCallback? onNewApproval;

  BaseFunctionCallingService(
    this._configService,
    this._dbService,
    this._dayService,
    this._workScheduleService,
    this._msnService,
  ) {
    _initMemoryService();
    _initSystemPrompt();
  }

  /// 初始化记忆服务
  Future<void> _initMemoryService() async {
    final db = await _dbService.database;
    _memoryService = MemoryService(db);
  }

  /// 初始化系统提示词（不含记忆）
  void _initSystemPrompt() {
    _systemInstruction = _buildSystemPrompt(null);
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
   - !!!注意！用户说"明天"/"明早"的特殊处理：在凌晨0-4点时，用户说"明天/明早"通常指的是当天（因为还没睡）；在4-7点时需询问确认；7点后按常规理解为次日。但如果用户直接说"今天X点"或"12月X日X点"，则按字面意思理解，无需特殊处理!!!
   - 禁止安排过去的时间（判断时要用当前完整时间对比，而不是只看日期）
5. 时间字段：
   - time 必填（HH:mm格式）
   - 持续性活动（运动/会议/学习/工作/睡觉/吃饭/洗澡）必填 end_time
   - 瞬时事件（吃药/提醒/起床/出门）可不填 end_time
6. 工作日程：涉及工作内容时确认是否仅工作日（用weekdays而非daily）
7. 修改/删除日程：
   - 必须先确认用户意图：永久生效 vs 临时调整
   - 临时调整（今天跳过/这次改时间）→ 用 modify_once，只影响指定日期（调整日程时优先使用）
   - 永久修改（以后都改/永久取消）→ 用 modify 或 delete，影响规则本身
8. 记忆管理：
   - 保存时机：明确的偏好（"我喜欢/不喜欢"）、习惯（"我总是/一般"）、目标（"我要XX"）、重要约束（"对XX过敏/疾病"）
   - 不保存：临时状态、一次性事件、已在日程中的信息
9. 尊重自主性：优先用户需求，提供建议而非强制

冲突检测优先级（创建前必检查，发现多个冲突时/要做的修改会导致连锁冲突时必须全部列出并完整处理）：

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

回复风格：自然语言，不提函数名、日程id等技术细节。

当前：${DateTime.now().toString().split(' ')[0]}""";

    // 如果有记忆，追加到 prompt
    if (memory != null && !memory.isEmpty) {
      return basePrompt + memory.toPromptText();
    }
    return basePrompt;
  }

  /// 定义可用的函数工具 (Gemini 格式)
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

  /// 发送消息并处理函数调用（重写版本 - 无历史管理）
  @override
  Future<String> chat(String userMessage) async {
    debugPrint('\n========== Gemini Chat Start ==========');
    debugPrint('用户消息: $userMessage');

    // 重置中断标志
    _isCancelled = false;

    try {
      // 加载用户记忆（仅首次）
      if (_systemInstruction == null) {
        await _loadAndInjectMemory();
      }

      // 构建单次对话
      final messages = [
        {
          'role': 'user',
          'parts': [{'text': userMessage}],
        },
      ];

      // 处理对话（包含函数调用循环）
      final response = await _handleConversation(messages, 0);
      
      debugPrint('Gemini 最终回复: $response');
      debugPrint('当前 pendingActions 数量: ${pendingActions.length}');
      debugPrint('========== Gemini Chat End ==========\n');
      
      return response;
    } catch (e) {
      debugPrint('❌ 错误: $e');
      return '抱歉，发生了错误：${e.toString()}';
    }
  }

  /// 处理对话（递归处理函数调用）
  Future<String> _handleConversation(List<Map<String, dynamic>> messages, int depth) async {
    // 检查是否被中断
    if (_isCancelled) {
      debugPrint('对话已被中断');
      return '对话已中断';
    }

    if (depth > 10) {
      return '抱歉，处理过程过于复杂，请稍后重试。';
    }

    debugPrint('\n🔄 处理深度: $depth');

    // 调用 API
    final response = await _callGeminiApiSimple(messages);
    
    final candidates = response['candidates'] as List?;
    if (candidates == null || candidates.isEmpty) {
      return '抱歉，API 没有返回任何内容。';
    }

    final content = candidates[0]['content'];
    final parts = content['parts'] as List?;

    if (parts == null || parts.isEmpty) {
      return '抱歉，API 返回了空内容。';
    }

    // 检查是否有函数调用
    final hasFunctionCalls = parts.any((p) => p.containsKey('functionCall'));
    
    if (!hasFunctionCalls) {
      // 没有函数调用，返回文本
      final textParts = parts.where((p) => p.containsKey('text') && p['thought'] != true);
      return textParts.map((p) => p['text'] as String).join('\n');
    }

    // 深度超过 2 时，强制要求模型返回文本
    if (depth >= 2) {
      debugPrint('⚠️ 深度超过2，强制要求返回文本（禁用函数调用）');
      
      // 直接用已有信息总结回复，不再调用API
      return '已收到你的请求：12点45分跑步。但由于处理复杂度限制，请稍后重试或使用更简单的指令。';
    }

    // 执行所有函数调用
    final functionResponses = <Map<String, dynamic>>[];
    
    for (var part in parts) {
      if (part.containsKey('functionCall')) {
        final functionCall = part['functionCall'];
        final functionName = functionCall['name'] as String;
        final args = (functionCall['args'] as Map?)?.cast<String, dynamic>() ?? {};

        debugPrint('✅ 执行函数: $functionName');

        final result = await _executeFunction(functionName, args);

        // 按照 Gemini 文档格式构建函数响应
        functionResponses.add({
          'functionResponse': {
            'name': functionName,
            'response': result,
          },
        });
      }
    }

    // 构建下一轮消息：保留完整的 parts（包括 thoughtSignature）
    final newMessages = [
      ...messages,
      {'role': 'model', 'parts': parts}, // 保留所有 parts，包括 thoughtSignature
      {'role': 'user', 'parts': functionResponses},
    ];

    // 递归处理
    return await _handleConversation(newMessages, depth + 1);
  }

  /// 简化的 API 调用
  Future<Map<String, dynamic>> _callGeminiApiSimple(List<Map<String, dynamic>> messages) async {
    final url = Uri.parse('$_endpoint?key=$_apiKey');

    final requestBody = {
      'systemInstruction': {
        'parts': [
          {'text': _systemInstruction ?? ''},
        ],
      },
      'contents': messages,
      'tools': [
        {'functionDeclarations': _functionDeclarations},
      ],
      'generationConfig': {
        'temperature': 0.0,
      },
    };

    debugPrint('\n📤 发送请求:');
    debugPrint('Messages 数量: ${messages.length}');
    for (var i = 0; i < messages.length; i++) {
      final msg = messages[i];
      debugPrint('  [$i] role: ${msg['role']}, parts: ${msg['parts'].length}');
      for (var j = 0; j < (msg['parts'] as List).length; j++) {
        final part = msg['parts'][j];
        if (part.containsKey('text')) {
          debugPrint('    - text: ${part['text']}');
        } else if (part.containsKey('functionCall')) {
          debugPrint('    - functionCall: ${part['functionCall']['name']}');
        } else if (part.containsKey('functionResponse')) {
          debugPrint('    - functionResponse: ${part['functionResponse']['name']}');
          debugPrint('      response: ${part['functionResponse']['response']}');
        } else if (part.containsKey('thought_signature')) {
          debugPrint('    - thought_signature: ${part['thought_signature']}');
        } else {
          debugPrint('    - other: ${part.keys}');
        }
      }
    }

    final response = await http.post(
      url,
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode(requestBody),
    );

    if (response.statusCode != 200) {
      throw Exception('API 调用失败: ${response.statusCode} - ${response.body}');
    }

    final responseData = jsonDecode(response.body);
    
    debugPrint('\n📥 收到响应:');
    final candidates = responseData['candidates'] as List?;
    if (candidates != null && candidates.isNotEmpty) {
      final content = candidates[0]['content'];
      final parts = content['parts'] as List?;
      debugPrint('Parts 数量: ${parts?.length}');
      if (parts != null) {
        for (var i = 0; i < parts.length; i++) {
          final part = parts[i];
          debugPrint('  [$i] 完整结构: ${part.keys.toList()}');
          if (part.containsKey('text')) {
            debugPrint('    text: ${part['text']}');
          }
          if (part.containsKey('functionCall')) {
            debugPrint('    functionCall: ${part['functionCall']['name']}');
          }
          if (part.containsKey('thought_signature')) {
            debugPrint('    thought_signature: ${part['thought_signature']}');
          }
          if (part.containsKey('thought')) {
            debugPrint('    thought: ${part['thought']}');
          }
        }
      }
    }

    return responseData;
  }

  /// 调用 AI API (支持 Gemini 和 GPT)
  Future<Map<String, dynamic>> _callGeminiApi() async {
    // 检查配置
    if (!_configService.isConfigured) {
      throw Exception('API 未配置，请先在设置中配置 API');
    }

    final validationError = _configService.validateConfig();
    if (validationError != null) {
      throw Exception('API 配置错误: $validationError');
    }

    // 构建 URL
    final url = Uri.parse('$_endpoint?key=$_apiKey');

    final headers = {'Content-Type': 'application/json'};

    if (_configService.useBearerAuth) {
      headers['Authorization'] = '${_configService.authPrefix} $_apiKey';
    }

    // 根据模型类型构建不同格式的请求体
    final requestBody = <String, dynamic>{};

    if (_configService.isGemini) {
      // Gemini 格式
      // 限制历史长度：保留最近的10轮对话（user+model配对）
      final limitedContents = _limitHistoryLength(_contents, maxPairs: 10);
      
      requestBody.addAll({
        'system_instruction': {
          'parts': [
            {'text': _systemInstruction ?? ''},
          ],
        },
        'contents': limitedContents,
        'tools': [
          {'functionDeclarations': _functionDeclarations},
        ],
        'tool_config': {
          'function_calling_config': {'mode': 'AUTO'},
        },
        // Gemini 3 最佳实践：使用默认温度1.0，使用low思考级别加快简单任务
        'generationConfig': {
          'temperature': 1.0,
          'thinkingLevel': 'low', // minimal/low/medium/high，low适合大多数对话场景
        },
      });
    } else {
      // GPT/OpenAI 格式
      final messages = <Map<String, dynamic>>[];

      // 添加系统消息
      if (_systemInstruction != null && _systemInstruction!.isNotEmpty) {
        messages.add({'role': 'system', 'content': _systemInstruction});
      }

      // 转换 contents 到 messages
      for (final content in _contents) {
        final role = content['role'] as String;
        final parts = content['parts'] as List;

        if (parts.isNotEmpty) {
          final firstPart = parts[0] as Map<String, dynamic>;
          if (firstPart.containsKey('text')) {
            // 文本消息：将 'model' 角色转换为 'assistant'
            final gptRole = role == 'model' ? 'assistant' : role;
            messages.add({'role': gptRole, 'content': firstPart['text']});
          } else if (firstPart.containsKey('functionCall')) {
            // 函数调用消息
            messages.add({
              'role': 'assistant',
              'content': null,
              'tool_calls': [
                {
                  'id': 'call_${DateTime.now().millisecondsSinceEpoch}',
                  'type': 'function',
                  'function': {
                    'name': firstPart['functionCall']['name'],
                    'arguments': jsonEncode(firstPart['functionCall']['args']),
                  },
                },
              ],
            });
          } else if (firstPart.containsKey('functionResponse')) {
            // 函数响应消息
            messages.add({
              'role': 'tool',
              'tool_call_id': 'call_${DateTime.now().millisecondsSinceEpoch}',
              'content': jsonEncode(firstPart['functionResponse']['response']),
            });
          }
        }
      }

      requestBody.addAll({
        'model': _model,
        'messages': messages,
        'tools': _functionDeclarations
            .map(
              (func) => {
                'type': 'function',
                'function': _convertSchemaForGpt(func),
              },
            )
            .toList(),
        'tool_choice': 'auto',
      });
    }

    assert(() {
      debugPrint('\n========== API 请求 ==========');
      debugPrint('Model: $_model');
      debugPrint('💬 历史消息数: ${_contents.length}');
      // 诊断：打印最后一条消息的结构
      if (_contents.isNotEmpty) {
        final lastMsg = _contents.last;
        debugPrint('🔍 最后一条消息: role=${lastMsg['role']}, parts=${jsonEncode(lastMsg['parts'])}');
      }
      return true;
    }());

    final response = await http.post(
      url,
      headers: headers,
      body: jsonEncode(requestBody),
    );

    assert(() {
      debugPrint('Response Status: ${response.statusCode}');
      // 简化输出：不打印完整响应体
      debugPrint('========== API 请求结束 ==========\n');
      return true;
    }());

    if (response.statusCode != 200) {
      throw Exception('API 调用失败: ${response.statusCode} - ${response.body}');
    }

    return jsonDecode(response.body);
  }

  /// 将 Gemini 的 schema 转换为 GPT 格式
  Map<String, dynamic> _convertSchemaForGpt(Map<String, dynamic> func) {
    final converted = Map<String, dynamic>.from(func);

    if (converted.containsKey('parameters')) {
      converted['parameters'] = _convertSchemaTypes(converted['parameters']);
    }

    return converted;
  }

  /// 递归转换 schema 中的类型
  dynamic _convertSchemaTypes(dynamic schema) {
    if (schema is Map<String, dynamic>) {
      final converted = <String, dynamic>{};

      for (var entry in schema.entries) {
        if (entry.key == 'type') {
          // 转换类型名称：OBJECT -> object, STRING -> string 等
          final type = entry.value.toString();
          converted['type'] = type.toLowerCase();
        } else if (entry.key == 'properties') {
          // 递归处理 properties
          final props = entry.value as Map<String, dynamic>;
          converted['properties'] = props.map(
            (key, value) => MapEntry(key, _convertSchemaTypes(value)),
          );
        } else if (entry.key == 'items') {
          // 递归处理 items (数组类型)
          converted['items'] = _convertSchemaTypes(entry.value);
        } else {
          // 其他字段保持不变
          converted[entry.key] = entry.value;
        }
      }

      return converted;
    } else if (schema is List) {
      return schema.map((item) => _convertSchemaTypes(item)).toList();
    } else {
      return schema;
    }
  }

  // 用于检测重复函数调用
  final List<String> _recentFunctionCalls = [];
  
  /// 处理 API 响应
  Future<String> _handleResponse(
    Map<String, dynamic> response, [
    int depth = 0,
  ]) async {
    assert(() {
      debugPrint('🔄 响应处理深度: $depth');
      return true;
    }());
    
    if (depth > 15) {
      debugPrint('❌ 达到最大递归深度限制');
      return '抱歉，处理过程过于复杂，请稍后重试。';
    }

    if (_configService.isGemini) {
      return await _handleGeminiResponse(response, depth);
    } else {
      return await _handleGptResponse(response, depth);
    }
  }

  /// 处理 Gemini 响应（新版本 - 严格按照官方文档）
  /// 
  /// 官方文档要求：
  /// 1. 模型响应中的 thoughtSignature 必须在后续请求中原封不动地返回
  /// 2. functionCall 的 part 必须完整保留（包括 thoughtSignature）
  /// 3. functionResponse 必须包含与 functionCall 相同的 thoughtSignature
  /// 4. 不要过滤或修改任何包含 functionCall/functionResponse 的 part
  Future<String> _handleGeminiResponse(
    Map<String, dynamic> response,
    int depth,
  ) async {
    final candidates = response['candidates'] as List?;
    if (candidates == null || candidates.isEmpty) {
      return '抱歉，API 没有返回任何内容。';
    }

    final content = candidates[0]['content'];
    final parts = content['parts'] as List?;

    if (parts == null || parts.isEmpty) {
      return '抱歉，API 返回了空内容。';
    }

    assert(() {
      debugPrint('\n📥 收到响应，parts 数量: ${parts.length}');
      for (var i = 0; i < parts.length; i++) {
        final part = parts[i];
        debugPrint('  Part $i: ${part.keys.join(", ")}');
      }
      return true;
    }());

    // 🔑 关键改变：根据 Gemini 官方文档，我们需要：
    // 1. 保留所有 functionCall parts（包括完整的 thoughtSignature）
    // 2. 只过滤掉纯 thought 文本（既没有 text 也没有 functionCall 的 thought）
    // 3. 保留普通文本响应
    
    final modelParts = <Map<String, dynamic>>[];
    bool hasFunctionCall = false;
    
    for (var part in parts) {
      // 类型1: functionCall - 必须完整保留
      if (part.containsKey('functionCall')) {
        modelParts.add(Map<String, dynamic>.from(part)); // 深拷贝，完整保留
        hasFunctionCall = true;
        continue;
      }
      
      // 类型2: 普通文本（非 thought）- 保留
      if (part.containsKey('text')) {
        if (part['thought'] != true) {
          modelParts.add({'text': part['text']});
        }
        // 跳过 thought: true 的纯思考文本
        continue;
      }
      
      // 类型3: 其他（如只有 thoughtSignature 但没有 functionCall）- 跳过
    }

    assert(() {
      debugPrint('📦 保留的 parts 数量: ${modelParts.length}');
      return true;
    }());

    if (modelParts.isEmpty) {
      debugPrint('❌ 过滤后没有有效内容');
      return '抱歉，AI 响应异常，请重试。';
    }

    // 将模型响应添加到历史（使用过滤后的 parts）
    _contents.add({
      'role': 'model',
      'parts': modelParts,
    });

    // 如果包含函数调用，需要执行并继续对话
    if (hasFunctionCall) {
      // 构建 functionResponse parts
      final responseParts = <Map<String, dynamic>>[];

      for (var part in modelParts) {
        if (part.containsKey('functionCall')) {
          final functionCall = part['functionCall'];
          final functionName = functionCall['name'] as String;
          final args = (functionCall['args'] as Map?)?.cast<String, dynamic>() ?? {};

          // 🔍 循环检测
          _recentFunctionCalls.add(functionName);
          if (_recentFunctionCalls.length > 10) {
            _recentFunctionCalls.removeAt(0);
          }

          // 检测连续 5 次相同调用
          if (_recentFunctionCalls.length >= 5) {
            final last5 = _recentFunctionCalls.sublist(_recentFunctionCalls.length - 5);
            if (last5.every((name) => name == functionName)) {
              debugPrint('❌ 检测到死循环: 连续5次调用 $functionName');
              debugPrint('历史调用: $_recentFunctionCalls');
              _recentFunctionCalls.clear();
              return 'AI出现了重复调用错误。请重新表达你的需求,或者换一种方式说明。';
            }
          }

          assert(() {
            debugPrint('\n✅ 执行函数: $functionName');
            debugPrint('参数: $args');
            return true;
          }());

          // 执行函数
          final result = await _executeFunction(functionName, args);

          assert(() {
            final preview = result.toString().length > 200 
                ? result.toString().substring(0, 200) + '...' 
                : result.toString();
            debugPrint('📤 函数返回: $preview');
            return true;
          }());

          // 🔑 关键：构建 functionResponse part，包含 thoughtSignature
          final responsePart = <String, dynamic>{
            'functionResponse': {
              'name': functionName,
              'response': {
                'name': functionName,
                'content': result,
              },
            },
          };

          // 如果原 functionCall part 包含 thoughtSignature，必须复制到 response
          if (part.containsKey('thoughtSignature')) {
            responsePart['thoughtSignature'] = part['thoughtSignature'];
            assert(() {
              debugPrint('🔐 复制 thoughtSignature: ${part['thoughtSignature']}');
              return true;
            }());
          }

          responseParts.add(responsePart);
        }
      }

      // 将 functionResponse 作为 user 消息添加到历史
      _contents.add({
        'role': 'user',
        'parts': responseParts,
      });

      // 🔑 关键优化：立即限制历史长度，防止上下文过长导致模型混乱
      final limitedContents = _limitHistoryLength(_contents, maxPairs: 5);
      _contents.clear();
      _contents.addAll(limitedContents);

      assert(() {
        debugPrint('\n🔄 继续对话，深度: ${depth + 1}');
        debugPrint('📋 历史记录结构 (${_contents.length} 条):');
        for (var i = 0; i < _contents.length; i++) {
          final msg = _contents[i];
          final role = msg['role'];
          final parts = msg['parts'] as List;
          final summary = <String>[];
          for (var part in parts) {
            if (part.containsKey('functionCall')) {
              final hasTS = part.containsKey('thoughtSignature') ? '+TS' : '';
              summary.add('Call:${part['functionCall']['name']}$hasTS');
            } else if (part.containsKey('functionResponse')) {
              final hasTS = part.containsKey('thoughtSignature') ? '+TS' : '';
              summary.add('Resp:${part['functionResponse']['name']}$hasTS');
            } else if (part.containsKey('text')) {
              summary.add('Text');
            }
          }
          debugPrint('  [$i] $role: [${summary.join(", ")}]');
        }
        return true;
      }());

      // 递归调用 API 获取下一步响应
      final nextResponse = await _callGeminiApi();
      return await _handleResponse(nextResponse, depth + 1);
    }

    // 没有函数调用，返回文本响应
    final textParts = modelParts.where((p) => p.containsKey('text'));
    final text = textParts.map((p) => p['text'] as String).join('\n');
    
    return text.isNotEmpty ? text : '...';
  }

  /// 处理 Gemini 响应（旧版本 - 仅作参考）
  // ignore: unused_element
  Future<String> _handleGeminiResponseOld(
    Map<String, dynamic> response,
    int depth,
  ) async {
    final candidates = response['candidates'] as List?;
    if (candidates == null || candidates.isEmpty) {
      return '抱歉，API 没有返回任何内容。';
    }

    final content = candidates[0]['content'];
    final parts = content['parts'] as List?;

    if (parts == null || parts.isEmpty) return '抱歉，API 返回了空内容。';

    // 关键发现：根据Gemini官方文档，对于函数调用，**必须**保留thoughtSignature！
    // 只过滤掉纯thought文本，但保留完整的functionCall part（包括thoughtSignature）
    final filteredParts = <Map<String, dynamic>>[];
    
    for (var part in parts) {
      // 如果有functionCall，保留整个part（包括thoughtSignature）
      if (part.containsKey('functionCall')) {
        filteredParts.add(part);  // 完整保留，不修改
        continue;
      }
      
      // 如果有普通文本（非thought），保留
      if (part.containsKey('text') && part['thought'] != true) {
        filteredParts.add(part);
        continue;
      }
      
      // 跳过纯thought文本（thought: true但没有functionCall的part）
    }
    
    assert(() {
      debugPrint('📦 过滤后的parts数量: ${filteredParts.length}');
      return true;
    }());

    assert(() {
      debugPrint('📦 过滤后的parts数量: ${filteredParts.length}');
      return true;
    }());

    // 如果过滤后没有任何有效内容，说明API返回异常
    if (filteredParts.isEmpty) {
      debugPrint('❌ 过滤后没有有效内容，原始parts: $parts');
      return '抱歉，AI响应异常，请重试。';
    }

    // 将过滤后的模型回复添加到历史
    _contents.add({
      'role': content['role'],
      'parts': filteredParts,
    });

    // 检查是否有 function call
    bool hasFunctionCall = false;
    for (var part in filteredParts) {
      if (part.containsKey('functionCall')) {
        hasFunctionCall = true;
        break;
      }
    }

    if (hasFunctionCall) {
      // 处理 function call
      final functionResponses = <Map<String, dynamic>>[];

      for (var part in filteredParts) {
        if (part.containsKey('functionCall')) {
          final functionCall = part['functionCall'];
          final functionName = functionCall['name'];
          final args = functionCall['args'] as Map<String, dynamic>;
          
          // 检测是否在重复调用同一函数
          _recentFunctionCalls.add(functionName);
          if (_recentFunctionCalls.length > 10) {
            _recentFunctionCalls.removeAt(0);
          }
          
          // 如果最近5次都是同一个函数，阻止循环
          if (_recentFunctionCalls.length >= 5) {
            final last5 = _recentFunctionCalls.sublist(_recentFunctionCalls.length - 5);
            if (last5.every((name) => name == functionName)) {
              debugPrint('❌ 检测到死循环: 连续5次调用 $functionName');
              debugPrint('历史调用: $_recentFunctionCalls');
              // 清空历史并返回错误
              _recentFunctionCalls.clear();
              return 'AI出现了重复调用错误。请重新表达你的需求,或者换一种方式说明。';
            }
          }

          assert(() {
            debugPrint('\n✅ 函数调用: $functionName');
            debugPrint('参数: $args');
            return true;
          }());

          final result = await _executeFunction(functionName, args);
          
          assert(() {
            debugPrint('📤 函数返回: ${result.toString().length > 200 ? result.toString().substring(0, 200) + '...' : result}');
            return true;
          }());

          // ⚠️ 关键修复：根据Gemini文档，functionResponse也需要包含thoughtSignature
          final responsePartMap = <String, dynamic>{
            'functionResponse': {
              'name': functionName,
              'response': {'name': functionName, 'content': result},
            },
          };
          
          // 如果原始part包含thoughtSignature，复制到response中
          if (part.containsKey('thoughtSignature')) {
            responsePartMap['thoughtSignature'] = part['thoughtSignature'];
          }
          
          functionResponses.add(responsePartMap);
        }
      }

      // 添加 function response 到历史
      _contents.add({'role': 'user', 'parts': functionResponses});

      assert(() {
        debugPrint('\n🔄 准备再次调用API，当前深度: $depth, 历史消息数: ${_contents.length}');
        debugPrint('📦 本轮返回了${functionResponses.length}个函数响应');
        return true;
      }());

      // 再次调用 API
      final nextResponse = await _callGeminiApi();
      return await _handleResponse(nextResponse, depth + 1);
    } else {
      // 只是文本回复
      final text = filteredParts.map((p) => p['text'] ?? '').join('\n');
      return text;
    }
  }

  /// 处理 GPT 响应
  Future<String> _handleGptResponse(
    Map<String, dynamic> response,
    int depth,
  ) async {
    final choices = response['choices'] as List?;
    if (choices == null || choices.isEmpty) {
      return '抱歉，API 没有返回任何内容。';
    }

    final message = choices[0]['message'] as Map<String, dynamic>;
    final toolCalls = message['tool_calls'] as List?;
    final content = message['content'] as String?;

    // 将助手回复添加到历史
    if (toolCalls != null && toolCalls.isNotEmpty) {
      _contents.add({
        'role': 'model',
        'parts': toolCalls.map((call) {
          final func = call['function'];
          return {
            'functionCall': {
              'name': func['name'],
              'args': jsonDecode(func['arguments']),
            },
          };
        }).toList(),
      });

      // 执行工具调用
      final functionResponses = <Map<String, dynamic>>[];
      for (var call in toolCalls) {
        final func = call['function'];
        final functionName = func['name'] as String;
        final args = jsonDecode(func['arguments']) as Map<String, dynamic>;

        assert(() {
          debugPrint('\n函数调用: $functionName');
          debugPrint('参数: $args');
          return true;
        }());

        final result = await _executeFunction(functionName, args);
        functionResponses.add({
          'functionResponse': {
            'name': functionName,
            'response': {'name': functionName, 'content': result},
          },
        });
      }

      // 添加工具响应到历史
      _contents.add({'role': 'user', 'parts': functionResponses});

      // 再次调用 API
      final nextResponse = await _callGeminiApi();
      return await _handleResponse(nextResponse, depth + 1);
    } else if (content != null && content.isNotEmpty) {
      // 文本回复
      _contents.add({
        'role': 'model',
        'parts': [
          {'text': content},
        ],
      });
      return content;
    } else {
      return '抱歉，API 返回了空内容。';
    }
  }

  /// 执行函数调用
  Future<Map<String, dynamic>> _executeFunction(
    String functionName,
    Map<String, dynamic> arguments,
  ) async {
    try {
      switch (functionName) {
        case 'get_current_context':
          return await _getCurrentContext();
        case 'get_recent_schedules':
          return await _getRecentSchedules(arguments);
        case 'get_rules_summary':
          return await _getRulesSummary(arguments);
        case 'analyze_busyness':
          return await _analyzeBusyness(arguments);
        case 'get_weather_cache':
          return await _getWeatherCache(arguments);
        case 'get_lunar_cache':
          return await _getLunarCache();
        case 'save_memory':
          return await _saveMemory(arguments);
        case 'propose_action':
          return await _proposeAction(arguments);
        default:
          return {'error': '未知的函数: $functionName'};
      }
    } catch (e) {
      return {'error': '执行失败: $e'};
    }
  }

  /// 获取当前上下文
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

  /// 获取睡眠建议
  String _getSleepSuggestion(DateTime now) {
    final hour = now.hour;
    if (hour >= 0 && hour < 6) {
      return 'very_late'; // 深夜，建议立即睡觉
    } else if (hour >= 22 && hour < 24) {
      return 'should_sleep'; // 该睡了
    } else if (hour >= 6 && hour < 9) {
      return 'morning'; // 早晨
    } else {
      return 'normal'; // 正常时间
    }
  }

  /// 加载记忆并注入到 System Prompt
  Future<void> _loadAndInjectMemory() async {
    try {
      final memory = await _memoryService.getMemorySummary(
        maxPreferences: 5,
        maxHabits: 3,
        maxFacts: 5,
        maxEpisodes: 2,
      );

      if (!memory.isEmpty) {
        // 更新 System Prompt
        _systemInstruction = _buildSystemPrompt(memory);

        debugPrint('✅ 已加载用户记忆到 System Prompt');
        debugPrint(
          '偏好: ${memory.preferences.length}, 习惯: ${memory.habits.length}, 事实: ${memory.facts.length}',
        );
      }
    } catch (e) {
      debugPrint('⚠️ 加载记忆失败: $e');
    }
  }

  /// 保存记忆
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

      debugPrint('💾 已保存记忆: [$memoryTypeStr] $content');

      return {
        'success': true,
        'message': '已记住：$content',
        'memory_id': memory.id,
      };
    } catch (e) {
      debugPrint('❌ 保存记忆失败: $e');
      return {'success': false, 'error': '保存记忆失败: $e'};
    }
  }

  /// 获取天气缓存
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
      debugPrint('❌ 获取天气缓存失败: $e');
      return {'error': '获取天气缓存失败: $e'};
    }
  }

  /// 获取黄历缓存
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
      debugPrint('❌ 获取黄历缓存失败: $e');
      return {'error': '获取黄历缓存失败: $e'};
    }
  }

  /// 分析繁忙程度
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

    // 统计每天的事件数和总时长
    final busynessByDate = <String, Map<String, dynamic>>{};

    var currentDate = startDate;
    while (currentDate.isBefore(endDate.add(const Duration(days: 1)))) {
      final schedules = await _dbService.getSchedulesByDate(currentDate);

      int eventCount = schedules.length;
      double totalMinutes = 0.0;

      for (var schedule in schedules) {
        if (schedule.startTime != null) {
          // 假设每个事件默认1小时，如果有结束时间则计算实际时长
          // TODO: 如果 Schedule 模型有 endTime 字段，使用实际时长
          totalMinutes += 60.0; // 暂时假设每个事件1小时
        }
      }

      final dateStr = currentDate.toString().split(' ')[0];
      busynessByDate[dateStr] = {
        'event_count': eventCount,
        'total_duration_minutes': totalMinutes,
        'is_busy': eventCount > 5 || totalMinutes > 360, // 超过6小时或5个事件算繁忙
      };

      currentDate = currentDate.add(const Duration(days: 1));
    }

    // 找出最空闲的几天
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

  /// 获取最近几天的日程（最多7天）
  Future<Map<String, dynamic>> _getRecentSchedules(
    Map<String, dynamic> args,
  ) async {
    final now = DateTime.now();
    DateTime startDate;

    // 处理日期参数
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

    // 严格限制：只能查询距今7天内的日期
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

    // 天数限制：最多连续7天
    final daysCount = (args['days_count'] as int? ?? 1).clamp(1, 7);

    // 收集日程
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

  /// 获取规则摘要
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

  /// 提交待审批操作
  Future<Map<String, dynamic>> _proposeAction(Map<String, dynamic> args) async {
    assert(() {
      debugPrint('\n_proposeAction 被调用');
      debugPrint('参数: $args');
      return true;
    }());

    final actionType = args['action_type'];
    final description = args['description'];
    final scheduleData = args['schedule_data'] as Map<String, dynamic>;

    assert(() {
      debugPrint('操作类型: $actionType');
      debugPrint('描述: $description');
      debugPrint('日程数据: $scheduleData');
      return true;
    }());

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
        assert(() {
          debugPrint('错误: 未知的操作类型 $actionType');
          return true;
        }());
        return {'success': false, 'error': '未知的操作类型'};
    }

    final action = PendingAction(
      id: '${DateTime.now().millisecondsSinceEpoch}_${_actionIdCounter++}',
      type: type,
      description: description,
      data: scheduleData,
    );

    pendingActions.add(action);
    assert(() {
      debugPrint('已添加到 pendingActions，当前数量: $pendingActions.length');
      debugPrint('Action ID: ${action.id}');
      return true;
    }());

    // 触发回调通知有新审批
    onNewApproval?.call();

    return {
      'success': true,
      'message': '已提交审批请求，等待用户确认',
      'action_id': action.id,
    };
  }

  /// 执行已批准的操作
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
      // 移除异常操作
      pendingActions.removeWhere((a) => a.id == actionId);
      rethrow; // 重新抛出异常以便 UI 层捕捉
    }
  }

  /// 拒绝操作
  @override
  void rejectAction(String actionId) {
    pendingActions.removeWhere((a) => a.id == actionId);
  }

  /// 创建日程规则
  Future<void> _createSchedule(Map<String, dynamic> data) async {
    debugPrint('_createSchedule 被调用，数据: $data');

    // 验证必须字段：time
    if (data['time'] == null || (data['time'] as String).trim().isEmpty) {
      throw Exception('日程创建失败：缺少必需的 time 字段。每个日程必须指定具体的时间（格式 HH:mm）');
    }

    // 使用转换器从 AI JSON 创建规则
    final rule = ScheduleRuleConverter.fromAIJson(data);

    debugPrint(
      '创建 ScheduleRule: ${rule.title}, 时间: ${rule.time}, 类型: ${rule.condition.type}',
    );

    await _dbService.insertRule(rule);
    debugPrint('规则已插入数据库');
  }

  /// 仅修改某一天的日程（不影响规则）
  Future<void> _modifyOnce(Map<String, dynamic> data) async {
    debugPrint('执行 modifyOnce: $data');

    late DateTime date;
    String? ruleId;

    // 方式1: 如果提供了id，从Schedule中获取日期和sourceTemplateId
    if (data.containsKey('id')) {
      final scheduleId = data['id'] as String;

      // 先尝试从id中解析日期 (格式: uuid_日期)
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

      // 如果无法从id解析日期，尝试通过遍历查找
      if (!dateParsed) {
        // 从所有日程中查找（这会比较慢，建议AI提供date参数）
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
    }
    // 方式2: 如果提供了title，使用title查找
    else if (data.containsKey('title')) {
      final title = data['title'] as String;
      ruleId = await _dbService.findRuleId(title, null);
      if (ruleId == null) {
        throw Exception('未找到匹配的规则: $title');
      }
      // 必须提供date
      if (!data.containsKey('date')) {
        throw Exception('使用 title 查找时必须提供 date 参数');
      }
      date = DateTime.parse(data['date'] as String);
    } else {
      throw Exception('modify_once 需要提供 id 或 title 参数');
    }

    debugPrint('找到规则ID: $ruleId, 日期: $date');

    // 安全检查：如果AI试图设置end_date，必须有end_time
    if (data.containsKey('end_date') && data['end_date'] != null) {
      if (!data.containsKey('new_end_time') || data['new_end_time'] == null) {
        throw Exception('范围覆盖必须有结束时间（new_end_time），以防止永久覆盖');
      }
    }

    // 确定覆盖类型和新值
    OverrideType type;
    String? newTime;
    String? newEndTime;
    String? newTitle;
    String? newDescription;

    // 检查是否有多个修改字段
    final hasMultipleChanges =
        [
          data.containsKey('new_time'),
          data.containsKey('new_end_time'),
          data.containsKey('new_title'),
          data.containsKey('new_description'),
        ].where((x) => x).length >
        1;

    if (hasMultipleChanges || data.containsKey('new_description')) {
      // 修改多个属性
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
      // 只修改时间
      type = OverrideType.modifyTime;
      newTime = data['new_time'] as String?;
      newEndTime = data['new_end_time'] as String?;
      debugPrint('修改时间为: $newTime - $newEndTime');
    } else if (data.containsKey('new_title')) {
      // 替换标题
      type = OverrideType.replace;
      newTitle = data['new_title'] as String;
      newTime = data['new_time'] as String?;
      newEndTime = data['new_end_time'] as String?;
      debugPrint('替换为: $newTitle @ $newTime - $newEndTime');
    } else {
      // 跳过
      type = OverrideType.skip;
      debugPrint('跳过该日程');
    }

    // 创建覆盖记录（单日）
    final override = ScheduleOverride(
      startDate: date,
      endDate: date, // 单日覆盖：endDate 等于 startDate，确保只影响单日
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

  /// 修改日程规则
  Future<void> _modifySchedule(Map<String, dynamic> data) async {
    debugPrint('执行 modifySchedule: $data');

    // 获取规则ID
    String? ruleId;
    if (data.containsKey('id')) {
      // 如果提供了日程ID，从中提取规则ID（格式：ruleId_date）
      final scheduleId = data['id'].toString();
      final parts = scheduleId.split('_');
      if (parts.isNotEmpty) {
        ruleId = parts[0];
      }
    } else if (data.containsKey('title')) {
      // 通过标题查找规则
      ruleId = await _dbService.findRuleId(data['title'] as String, null);
    }

    if (ruleId == null) {
      throw Exception('无法找到要修改的规则，请提供日程ID或标题');
    }

    debugPrint('找到规则ID: $ruleId');

    // 获取原规则
    final rule = await _dbService.getRuleById(ruleId);
    if (rule == null) {
      throw Exception('规则不存在: $ruleId');
    }

    // 更新规则
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

  /// 删除日程
  Future<void> _deleteSchedule(Map<String, dynamic> data) async {
    final scheduleId = data['id'].toString();
    await _dbService.deleteSchedule(scheduleId);
  }

  /// 执行删除所有规则
  Future<void> _executeDeleteAll() async {
    final db = await _dbService.database;

    // 删除所有规则和覆盖
    await db.delete('schedule_rules');
    await db.delete('schedule_overrides');
  }

  /// 切换完成状态
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

  /// 清空对话历史
  @override
  void clearHistory() {
    debugPrint('清空对话历史，重置所有状态');
    
    // 设置中断标志，停止正在进行的对话
    _isCancelled = true;
    
    // 清空所有状态
    _contents.clear();
    pendingActions.clear();
    _actionIdCounter = 0;
    
    // 重新初始化系统提示词
    _initSystemPrompt();
    
    debugPrint('对话历史已清空，上下文已重置');
  }

  /// 限制历史长度，保留最近的N对user-model对话
  /// 每对包含：user消息 + model回复 + 可能的函数响应
  List<Map<String, dynamic>> _limitHistoryLength(
    List<Map<String, dynamic>> contents, {
    int maxPairs = 10,
  }) {
    if (contents.length <= maxPairs * 3) {
      // 如果历史较短，直接返回（每对最多3条：user、model、user(functionResponse)）
      return contents;
    }

    // 从后往前保留最近的对话
    // 确保保留完整的对话对（不截断user-model配对）
    final result = <Map<String, dynamic>>[];
    int pairCount = 0;
    
    for (int i = contents.length - 1; i >= 0 && pairCount < maxPairs; i--) {
      final content = contents[i];
      result.insert(0, content);
      
      // 当遇到user角色且parts中有text（用户消息）时，计为一对的开始
      if (content['role'] == 'user') {
        final parts = content['parts'] as List?;
        if (parts != null && parts.any((p) => p.containsKey('text'))) {
          pairCount++;
        }
      }
    }
    
    assert(() {
      debugPrint('📊 历史消息限制：原有${contents.length}条，保留${result.length}条（最近$pairCount对对话）');
      return true;
    }());
    
    return result;
  }
}
