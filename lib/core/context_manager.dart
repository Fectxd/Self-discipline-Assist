import 'dart:convert';
import 'package:flutter/foundation.dart';
import 'token_estimator.dart';

/// 上下文管理器
///
/// 负责：
/// 1. 对话历史滑动窗口（保留最近 N 轮）
/// 2. Token 预算分配（system + tools + history）
/// 3. 历史摘要压缩（超出预算时压缩早期轮次）
/// 4. 系统提示词缓存（规则文本只编译一次）
class ContextManager {
  // ─── 配置 ───
  static const int maxContextTokens = 128000; // 模型上限
  static const double historyBudgetRatio = 0.75; // history 占 75%

  // 滑动窗口
  static const int maxHistoryPairs = 30; // 最多保留 30 轮对话
  static const int trimThreshold = 20; // 超过 20 轮时开始裁剪

  // ─── 状态 ───
  final List<Map<String, dynamic>> _messages = [];
  String? _cachedRulesText; // 系统规则（不变部分）
  String? _lastSystemPrompt; // 完整的系统提示词缓存

  /// 当前消息数
  int get messageCount => _messages.length;

  /// 估算的 history token 数
  int get estimatedTokens =>
      TokenEstimator.estimateRequest(
        systemPrompt: null,
        messages: _messages,
        tools: null,
      );

  // ─── 系统提示词 ───

  /// 获取（并缓存）系统规则文本
  String _getRulesText() {
    _cachedRulesText ??= _buildRulesText();
    return _cachedRulesText!;
  }

  /// 构建系统提示词（规则 + 时间 + 可选记忆）
  String buildSystemPrompt([String? memoryAppend]) {
    final now = DateTime.now();
    final ts = now.toString().split('.')[0];
    final memorySuffix = (memoryAppend != null && memoryAppend.isNotEmpty)
        ? '\n\n---\n用户记忆:\n$memoryAppend'
        : '';

    _lastSystemPrompt = '${_getRulesText()}\n\n当前：$ts$memorySuffix';
    return _lastSystemPrompt!;
  }

  /// 规则文本（静态，只编译一次）
  String _buildRulesText() {
    return """你是体贴的时间管理助手，帮助用户健康生活、完成目标。

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
2. 查询限制：
   - 7天内具体日程：get_recent_schedules
   - 了解规则概况：get_rules_summary（返回规则而非展开日程）
   - 禁止询问超过7天的具体日程
3. 时间判断：
   - "10点"等模糊时间必须确认上午/下午
   - 00:00-04:00说"明早"=当天早晨；04:00-07:00需询问；07:00后=次日
   - 禁止安排过去的时间
4. 时间字段：
   - time 必填（HH:mm格式）
   - 持续性活动（运动/会议/学习/工作/睡觉/吃饭/洗澡）必填 end_time
   - 瞬时事件（吃药/提醒/起床/出门）可不填 end_time
5. 尊重自主性：优先用户需求，提供建议而非强制

📌 删除/修改日程 - 区分单次 vs 永久（严格遵循）：

   A. 用户说"今天不做了/取消今天的X"/"把这个日程删掉（针对某一天）"
      → 这是【单次跳过】，用 action_type="modify_once"
      → 只传 id 和 date，不传 new_time/new_title 等字段
      → 系统会创建 OverrideType.skip，只跳过这一天
      → 示例: {"action_type":"modify_once","schedule_data":{"id":"ruleId_2026-05-17","date":"2026-05-17"}}

   B. 用户说"取消这个规则/以后都不做X了/把这个删掉（针对整个规则）"
      → 这是【永久删除规则】，用 action_type="delete"
      → 传 schedule_data.id 为规则ID
      → 这个规则的每一天都会被永久删除
      → 示例: {"action_type":"delete","schedule_data":{"id":"ruleId"}}

   C. 用户说"把所有日程都删了/清空所有日程"
      → 这是【批量删除】，用 action_type="delete_all"
      → 不需要 schedule_data

   D. 用户说"今天把X改个时间"
      → 这是【单次修改】，用 action_type="modify_once"
      → 传 id、date，加上 new_time/new_end_time 等

   辨别口诀：
   - 说"今天/这次" → 单次 (modify_once)
   - 说"以后/每次/永远" → 永久 (delete/modify)
   - 只说"删掉X"但没有时间限定 → 必须反问用户：今天这次删掉，还是以后都取消？
   - 用户命令模糊时：优先问清楚，不要猜测

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

回复风格：自然语言，不提函数名、id等技术细节。""";
  }

  // ─── 消息管理 ───

  /// 添加系统消息
  void addSystemMessage(String content) {
    _messages.add({
      'role': 'system',
      'content': content,
    });
  }

  /// 添加用户消息
  void addUserMessage(String content) {
    _messages.add({
      'role': 'user',
      'content': content,
    });
  }

  /// 添加助手消息（不含 tool_calls）
  void addAssistantMessage(String content, [String? reasoningContent]) {
    final msg = <String, dynamic>{
      'role': 'assistant',
      'content': content,
    };
    if (reasoningContent != null && reasoningContent.isNotEmpty) {
      msg['reasoning_content'] = reasoningContent;
    }
    _messages.add(msg);
  }

  /// 添加带 tool_calls 的助手消息
  void addAssistantToolCallsMessage(
    String? content,
    List<Map<String, dynamic>> toolCalls,
    [String? reasoningContent,
  ]) {
    final msg = <String, dynamic>{
      'role': 'assistant',
      'content': content,
    };
    if (reasoningContent != null && reasoningContent.isNotEmpty) {
      msg['reasoning_content'] = reasoningContent;
    }
    msg['tool_calls'] = toolCalls;
    _messages.add(msg);
  }

  /// 添加工具响应
  void addToolResponse(String toolCallId, String content) {
    _messages.add({
      'role': 'tool',
      'tool_call_id': toolCallId,
      'content': content,
    });
  }

  /// 获取当前消息列表（已修剪）
  List<Map<String, dynamic>> getMessages() {
    return List.unmodifiable(_messages);
  }

  /// 检查并修剪消息
  ///
  /// 策略：
  /// 1. 保留 system 消息不变
  /// 2. 如果超过了 maxHistoryPairs，从最早的非 system 轮次开始裁剪
  /// 3. 裁剪时优先去掉早期的 user+assistant 对
  /// 4. 保留最新的完整对话
  void trimIfNeeded() {
    if (_messages.length <= trimThreshold + 1) return; // +1 for system

    final systemMessages = <Map<String, dynamic>>[];
    final historyMessages = <Map<String, dynamic>>[];

    // 分离 system 和其他消息
    for (final msg in _messages) {
      if (msg['role'] == 'system') {
        systemMessages.add(msg);
      } else {
        historyMessages.add(msg);
      }
    }

    // 统计完整对话对 (user+assistant)
    int pairCount = 0;
    for (final msg in historyMessages) {
      if (msg['role'] == 'assistant' ||
          (msg['role'] == 'user' &&
              msg['tool_calls'] == null &&
              msg['content'] is String)) {
        if (msg['role'] == 'assistant') {
          pairCount++;
        }
      }
    }

    if (pairCount <= maxHistoryPairs) return;

    // 需要裁剪：保留最近的 maxHistoryPairs 对
    final excessPairs = pairCount - maxHistoryPairs;
    int pairsRemoved = 0;
    int removeUntil = 0;

    for (int i = 0; i < historyMessages.length && pairsRemoved < excessPairs;
        i++) {
      final msg = historyMessages[i];
      if (msg['role'] == 'assistant') {
        pairsRemoved++;
      }
      removeUntil = i + 1;
    }

    // 确保不截断在对话对中间: 找到下一个 user 消息或结束
    while (removeUntil < historyMessages.length &&
        historyMessages[removeUntil]['role'] == 'tool') {
      removeUntil++;
    }

    final trimmed = historyMessages.sublist(removeUntil);

    _messages
      ..clear()
      ..addAll(systemMessages)
      ..addAll(trimmed);

    debugPrint(
      '[ContextManager] 修剪: ${systemMessages.length + historyMessages.length} → ${_messages.length} 条 '
      '(移除了 $removeUntil 条早期历史)',
    );
  }

  /// 估算当前 context 的 token 用量
  int estimateTokenUsage() {
    return TokenEstimator.estimateRequest(
      systemPrompt: _lastSystemPrompt,
      messages: _messages,
      tools: null,
    );
  }

  // ─── 工具定义缓存（OpenAI 原生格式） ───

  static final List<Map<String, dynamic>> tools = [
    {
      "type": "function",
      "function": {
        "name": "get_current_context",
        "description": "获取当前上下文信息：当前时间、今天是星期几、是否工作日/休息日、用户的工作制等。此函数无需参数。",
        "parameters": {
          "type": "object",
          "properties": {},
          "required": [],
        },
      },
    },
    {
      "type": "function",
      "function": {
        "name": "get_recent_schedules",
        "description": "获取最近几天的日程（最多7天）。用于查看今天/明天/最近的具体日程安排",
        "parameters": {
          "type": "object",
          "properties": {
            "date": {
              "type": "string",
              "description":
                  "查询日期，只能是 'today'、'tomorrow'、'yesterday' 或 YYYY-MM-DD 格式的日期（距今不超过7天）",
            },
            "days_count": {
              "type": "integer",
              "description": "连续查询的天数（1-7），默认1天。如 days_count=3 表示查询从指定日期开始的3天",
            },
          },
          "required": ["date"],
        },
      },
    },
    {
      "type": "function",
      "function": {
        "name": "get_rules_summary",
        "description": "获取所有日程规则的摘要信息（不生成具体日程）。用于了解用户设置了哪些规则。超过7天的日程查询应使用此功能获取规则+覆盖信息，避免输入过长",
        "parameters": {
          "type": "object",
          "properties": {
            "include_disabled": {
              "type": "boolean",
              "description": "是否包含已禁用的规则，默认 false",
            },
          },
        },
      },
    },
    {
      "type": "function",
      "function": {
        "name": "analyze_busyness",
        "description": "分析指定日期范围内每天的繁忙程度（事件数量和总时长）。用于判断哪些天比较空闲，适合安排新任务",
        "parameters": {
          "type": "object",
          "properties": {
            "start_date": {"type": "string", "description": "开始日期，格式 YYYY-MM-DD"},
            "end_date": {"type": "string", "description": "结束日期，格式 YYYY-MM-DD"},
          },
          "required": ["start_date", "end_date"],
        },
      },
    },
    {
      "type": "function",
      "function": {
        "name": "get_weather_cache",
        "description": "读取MSN缓存的天气信息。用于规划户外活动时参考天气情况",
        "parameters": {
          "type": "object",
          "properties": {
            "date_type": {
              "type": "string",
              "enum": ["today", "forecast"],
              "description": "today=当日天气，forecast=未来5天预报",
            },
          },
          "required": ["date_type"],
        },
      },
    },
    {
      "type": "function",
      "function": {
        "name": "get_lunar_cache",
        "description": "读取MSN缓存的黄历信息（农历、宜忌、生肖等）。用户迷信或好奇时可参考",
        "parameters": {
          "type": "object",
          "properties": {
            "placeholder": {"type": "string", "description": "占位符，无需填写"},
          },
        },
      },
    },
    {
      "type": "function",
      "function": {
        "name": "save_memory",
        "description": "保存用户的偏好、习惯或重要信息到长期记忆。当用户明确表达'我喜欢'、'我习惯'、'我总是'等偏好时调用",
        "parameters": {
          "type": "object",
          "properties": {
            "memory_type": {
              "type": "string",
              "enum": ["preference", "habit", "fact"],
              "description": "记忆类型：preference=偏好，habit=习惯模式，fact=重要事实",
            },
            "content": {
              "type": "string",
              "description": "记忆内容，用简洁的陈述句，如'喜欢早上运动'、'每周三没时间健身'、'工作制是大小周'",
            },
            "importance": {
              "type": "number",
              "description": "重要性(0-1)，默认0.5。明确的偏好用0.7-0.9，一般习惯用0.4-0.6",
            },
          },
          "required": ["memory_type", "content"],
        },
      },
    },
    {
      "type": "function",
      "function": {
        "name": "propose_action",
        "description":
            "提交一个待审批的操作（创建、修改或删除日程）。用户会在界面上看到并决定是否执行。\n\n⚠️ 重要：持续性活动（运动、会议、学习、工作、睡觉、吃饭等）必须填写 end_time！",
        "parameters": {
          "type": "object",
          "properties": {
            "action_type": {
              "type": "string",
              "enum": [
                "create",
                "modify",
                "modify_once",
                "delete",
                "delete_all",
              ],
              "description":
                  "【必填】操作类型：create=创建规则, modify=永久修改规则, modify_once=仅当天跳过/修改(不传new_*即为跳过这天), delete=永久删除整个规则, delete_all=删除所有日程规则",
            },
            "description": {
              "type": "string",
              "description": "【必填】操作描述，显示给用户看的，如：'创建每天早上7点的晨跑日程'",
            },
            "schedule_data": {
              "type": "object",
              "description": "【必填】日程数据对象",
              "properties": {
                "id": {"type": "string", "description": "【modify/delete时必填】日程ID"},
                "title": {
                  "type": "string",
                  "description": "【create时必填】日程标题，如'晨跑'、'周会'、'吃药'",
                },
                "time": {
                  "type": "string",
                  "description": "【create时必填】开始时间，格式必须是 HH:mm（如 08:30）",
                },
                "end_time": {
                  "type": "string",
                  "description":
                      "【条件必填】结束时间，格式 HH:mm。\n规则：\n✅ 持续性活动必填（运动、会议、学习、工作、睡觉、吃饭、洗澡等）\n❌ 瞬时事件可不填（吃药、提醒、闹钟、起床、出门等）",
                },
                "description": {"type": "string", "description": "【可选】详细描述"},
                "condition_type": {
                  "type": "string",
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
                  "type": "integer",
                  "description":
                      "【condition_type=weekday时必填】1=周一, 2=周二, ..., 7=周日（取值范围 1-7）",
                },
                "interval_days": {
                  "type": "integer",
                  "minimum": 1,
                  "description": "【condition_type=interval时必填】间隔天数，如3表示每隔3天",
                },
                "start_date": {
                  "type": "string",
                  "description":
                      "【condition_type=interval时必填】起始日期 YYYY-MM-DD，从这天开始计算间隔",
                },
                "specific_date": {
                  "type": "string",
                  "description": "【condition_type=specific_date时必填】特定日期 YYYY-MM-DD",
                },
                "end_date": {
                  "type": "string",
                  "description": "【可选】结束日期 YYYY-MM-DD，如'持续3周'、'到月底'等",
                },
                "max_count": {
                  "type": "integer",
                  "minimum": 1,
                  "description": "【可选】最大重复次数，如'共10次'、'重复5次'等",
                },
                "date": {
                  "type": "string",
                  "description": "【modify_once时必填】要修改的日期 YYYY-MM-DD",
                },
                "new_time": {
                  "type": "string",
                  "description": "【modify_once时可选】新的开始时间 HH:mm",
                },
                "new_end_time": {
                  "type": "string",
                  "description": "【modify_once时可选】新的结束时间 HH:mm",
                },
                "new_title": {
                  "type": "string",
                  "description": "【modify_once时可选】新的标题",
                },
                "new_description": {
                  "type": "string",
                  "description": "【modify_once时可选】新的描述",
                },
                "metadata": {
                  "type": "object",
                  "description": "【可选】附加信息，如地点、参与人等",
                },
              },
            },
          },
          "required": ["action_type", "description", "schedule_data"],
        },
      },
    },
  ];

  // ─── 工具按需裁剪 ───

  /// 关键词集合，用于判断工具相关性
  static const _saveMemoryKeywords = [
    '喜欢', '不喜欢', '偏好', '习惯', '总是', '从不', '一般',
    'prefer', 'like', 'habit', 'always', 'never', 'usually',
    '记住', '别忘了', '记得', '重要',
  ];

  /// 根据最近对话内容选择相关工具
  ///
  /// 策略：
  /// - get_current_context, get_recent_schedules 始终带上（核心功能）
  /// - get_rules_summary, analyze_busyness, get_weather_cache, get_lunar_cache
  ///   在历史有相关调用痕迹时才带（首次不带）
  /// - save_memory 在检测到偏好/习惯关键词时才带
  /// - propose_action 始终带上（可能随时需要）
  List<Map<String, dynamic>> getRelevantTools(String recentContent) {
    // 始终需要的核心工具
    final result = <Map<String, dynamic>>[];

    for (final tool in tools) {
      final name = tool['function']['name'] as String;

      switch (name) {
        case 'get_current_context':
        case 'get_recent_schedules':
        case 'propose_action':
          // 始终带上
          result.add(tool);
          break;

        case 'get_rules_summary':
        case 'analyze_busyness':
          // 用户可能在问时间/规则相关
          if (_mentionsTimeOrSchedule(recentContent)) {
            result.add(tool);
          }
          break;

        case 'get_weather_cache':
          // 用户提到天气/户外
          if (_mentionsWeather(recentContent)) {
            result.add(tool);
          }
          break;

        case 'get_lunar_cache':
          // 用户提到农历/黄历
          if (_mentionsLunar(recentContent)) {
            result.add(tool);
          }
          break;

        case 'save_memory':
          // 用户表达偏好/习惯
          if (_mentionsPreference(recentContent)) {
            result.add(tool);
          }
          break;

        default:
          result.add(tool);
      }
    }

    return result;
  }

  bool _mentionsTimeOrSchedule(String text) {
    final keywords = [
      '日程', '安排', '计划', '规则', '明天', '今天', '后天', '星期',
      'schedule', 'plan', 'rule', 'busy', 'free',
      'timetable', 'routine',
    ];
    return keywords.any((k) => text.toLowerCase().contains(k));
  }

  bool _mentionsWeather(String text) {
    final keywords = [
      '天气', '下雨', '晴天', '温度', '户外', '出去',
      'weather', 'rain', 'sunny', 'outside', 'outdoor',
    ];
    return keywords.any((k) => text.toLowerCase().contains(k));
  }

  bool _mentionsLunar(String text) {
    final keywords = [
      '农历', '黄历', '宜', '忌', '运势', '星座', '生肖',
      'lunar', 'zodiac', 'constellation', 'fortune',
    ];
    return keywords.any((k) => text.toLowerCase().contains(k));
  }

  bool _mentionsPreference(String text) {
    return _saveMemoryKeywords.any((k) => text.toLowerCase().contains(k));
  }

  // ─── 历史摘要压缩回调 ───

  /// 用回调将早期对话压缩为摘要
  ///
  /// 当需要裁剪时，不直接丢弃，而是：
  /// 1. 收集要被裁剪的对话对
  /// 2. 调用回调（由 FunctionCallingServiceV2 提供）生成摘要
  /// 3. 用一条 system 摘要消息替代
  Future<void> compressEarlyHistory(Future<String> Function(List<Map<String, dynamic>>) summarizer) async {
    if (_messages.length <= trimThreshold + 1) return;

    final systemMessages = <Map<String, dynamic>>[];
    final historyMessages = <Map<String, dynamic>>[];

    for (final msg in _messages) {
      if (msg['role'] == 'system') {
        systemMessages.add(msg);
      } else {
        historyMessages.add(msg);
      }
    }

    // 统计对话对数
    int pairCount = 0;
    for (final msg in historyMessages) {
      if (msg['role'] == 'assistant') pairCount++;
    }

    if (pairCount <= maxHistoryPairs) return;

    final excessPairs = pairCount - maxHistoryPairs;
    int pairsRemoved = 0;
    int removeUntil = 0;

    for (int i = 0; i < historyMessages.length && pairsRemoved < excessPairs;
        i++) {
      if (historyMessages[i]['role'] == 'assistant') pairsRemoved++;
      removeUntil = i + 1;
    }

    // 不要截断 tool 响应
    while (removeUntil < historyMessages.length &&
        historyMessages[removeUntil]['role'] == 'tool') {
      removeUntil++;
    }

    // 收集被裁剪的部分
    final removed = historyMessages.sublist(0, removeUntil);
    final kept = historyMessages.sublist(removeUntil);

    // 生成摘要
    String summary;
    try {
      summary = await summarizer(removed);
    } catch (e) {
      debugPrint('[ContextManager] 摘要生成失败: $e，直接裁剪');
      _messages
        ..clear()
        ..addAll(systemMessages)
        ..addAll(kept);
      return;
    }

    // 用摘要消息替代被裁剪的部分
    _messages
      ..clear()
      ..addAll(systemMessages)
      ..add({
        'role': 'system',
        'content': '[对话摘要] 之前讨论过: $summary',
      })
      ..addAll(kept);

    debugPrint(
      '[ContextManager] 摘要压缩: ${systemMessages.length + removed.length + kept.length} '
      '→ ${_messages.length} 条 (摘要: "${summary.substring(0, min(summary.length, 80))}...")',
    );
  }

  int min(int a, int b) => a < b ? a : b;

  // ─── 重置 ───

  /// 清空所有消息
  void clear() {
    _messages.clear();
  }
}
