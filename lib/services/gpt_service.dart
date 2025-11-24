import 'dart:convert';
import 'package:http/http.dart' as http;
import '../models/schedule.dart';
import '../models/schedule_rule.dart';
import '../models/schedule_override.dart';
import '../models/schedule_priority.dart';
import '../config/api_keys.dart';
import 'database_service.dart';
import 'day_service.dart';
import 'work_schedule_service.dart';

/// 待审批的操作
class PendingAction {
  final String id;
  final ActionType type;
  final String description;
  final Map<String, dynamic> data;
  final DateTime timestamp;

  PendingAction({
    required this.id,
    required this.type,
    required this.description,
    required this.data,
    DateTime? timestamp,
  }) : timestamp = timestamp ?? DateTime.now();
}

enum ActionType {
  create,
  modify,
  modifyOnce,  // 新增：仅修改某一天
  delete,
  toggleComplete,
}

/// GPT Function Calling 服务
class GptService {
  static String get _apiKey => ApiKeys.gptApiKey;
  static String get _endpoint => '${ApiKeys.gptBaseUrl}/chat/completions';
  static String get _model => ApiKeys.gptModel;
  
  final DatabaseService _dbService;
  final DayService _dayService;
  final WorkScheduleService _workScheduleService;
  final List<Map<String, dynamic>> _conversationHistory = [];
  
  /// 待审批的操作列表
  final List<PendingAction> pendingActions = [];
  
  GptService(this._dbService, this._dayService, this._workScheduleService) {
    _conversationHistory.add({
      "role": "system",
      "content": """你是日程助手。重要概念：

**规则 vs 临时修改**
- 规则：长期有效（"每天9点起床"）
- 临时修改：仅某一天（"明天11点起"）

**处理流程（重要）**：
1. 用户说要创建日程时，**必须先调用 query_schedules** 检查当天是否有冲突
2. **即使 query_schedules 返回错误，也要继续提交 propose_action**
3. 如有冲突，给出建议但仍然提交 propose_action
4. 没有冲突则直接提交

**冲突检测（必做）**：
检查以下类型的冲突：

1. **时间冲突** - 同一时段有多个任务
   示例："10点开会" + "10点健身"
   建议：调整其中一个时间

2. **逻辑矛盾** - 时间顺序不合理
   示例："9点睡觉" vs "11点吃饭"（睡觉后还吃饭）
   建议：调整时间或取消其中一个

3. **健康问题** - 违反健康规律
   示例：
   - 睡眠不足："凌晨2点睡" + "早上6点起"（仅4小时）
   - 饮食不当："晚上11点吃夜宵"（太晚进食）
   - 运动过度："连续3小时健身"（过量运动）
   建议：调整时间以保证健康

4. **任务超载** - 一天安排太满，做不完
   示例：一天有10+个任务，总时长超过清醒时间
   建议：分散到多天或删减任务

5. **时间不足** - 任务间隔太短
   示例："9:00-10:00开会" + "10:00出门去机场"（无缓冲）
   建议：预留至少15-30分钟间隔

**用户意图识别：**

1. "每天X点..." → 创建规则（daily条件）
   - 先 query_schedules 检查今天（失败也继续）
   - 分析冲突（时间/逻辑/健康/超载）
   - **必须** propose_action{ action_type: "create", schedule_data: { title, time, recurrence: "daily" } }

2. "每周X（一到日）X点..." → 创建规则（weekday条件）
   - 先 query_schedules 检查下个该星期几的日期（失败也继续）
   - 分析冲突
   - **必须** propose_action{ action_type: "create", schedule_data: { title, time, recurrence: "weekly", weekday: 1-7 } }
   - weekday: 1=周一, 2=周二, ..., 7=周日

3. "每隔X天..." → 创建间隔规则（interval条件）
   - 先 query_schedules 检查下一个应该发生的日期
   - 分析冲突
   - **必须** propose_action{ action_type: "create", schedule_data: { title, time, recurrence: "interval", interval_days: N, start_date: "2025-11-24" } }
   - 示例："每隔3天吃药" → interval_days: 3, start_date: 今天

4. "明天/今天X点..." → 创建临时修改（特定日期）
   - 先 query_schedules 检查目标日期（失败也继续）
   - 分析冲突
   - **必须** propose_action{ action_type: "create", schedule_data: { title, time, specific_date: "2025-11-25" } }

5. "明天晚点起/11点起" → 修改已有规则的某天
   - 先 get_current_context 获取日期
   - 再 propose_action{ action_type: "modify_once", description: "明天起床改为11:00", schedule_data: { title: "起床", new_time: "11:00", date: "2025-11-25" } }

关键：
- "明天多睡会" = modify_once（不影响后天）
- "以后都9点起" = create/modify规则（长期生效）
- "每周一X点" = weekly规则，weekday=1
- "每隔3天" = interval规则，interval_days=3
- **无论 query_schedules 成功或失败，都必须调用 propose_action**
- **创建前必须 query_schedules 检查全部5类冲突**

## 优先级体系（5级，覆盖范围越广级别越低）：
1. **每天** - 所有日期 (自动priority=1)
2. **工作日/休息日/每隔N天** - 特定类型 (自动priority=2)
3. **周末/节假日** - 周末或节假日 (自动priority=3)
4. **周X** - 特定星期几 (自动priority=4)
5. **特定日期** - 单个日期 (自动priority=5)

**重要：不需要手动指定priority，系统会根据条件类型自动推断！**

回复格式（有冲突时）：
"检测到冲突：
⚠️ [冲突类型]：[具体问题]
建议：[解决方案]

是否仍要创建此日程？已提交审批。"

示例：
用户："每天9点起床"
你：先 query_schedules，然后 propose_action{ action_type: "create", schedule_data: { title: "起床", time: "09:00", recurrence: "daily" } }

用户："周末12点起"
你：检测到同名规则“起床”，创建周末专用规则。工作日：09:00起床，周末：12:00起床。propose_action{ action_type: "create", schedule_data: { title: "起床", time: "12:00", template_type: "weekend" } }

用户："每周一下午3点跑步"
你：先 query_schedules，然后 propose_action{ action_type: "create", schedule_data: { title: "跑步", time: "15:00", recurrence: "weekly", weekday: 1 } }

用户："每隔3天吃药"
你：先 query_schedules，然后 propose_action{ action_type: "create", schedule_data: { title: "吃药", time: "08:00", recurrence: "interval", interval_days: 3, start_date: "2025-11-24" } }

用户："明早11点起"
你：propose_action{ action_type: "modify_once", schedule_data: { title: "起床", new_time: "11:00", date: "2025-11-25" } }

- date 必须是 YYYY-MM-DD 格式
- time 必须是 HH:mm 格式

当前日期：${DateTime.now().toString().split(' ')[0]}"""
    });
  }
  
  /// 定义可用的函数工具
  List<Map<String, dynamic>> get _tools => [
    // 上下文获取函数
    {
      "type": "function",
      "function": {
        "name": "get_current_context",
        "description": "获取当前上下文信息：当前时间、今天是星期几、是否工作日/休息日、用户的工作制等",
        "parameters": {
          "type": "object",
          "properties": {},
        }
      }
    },
    {
      "type": "function",
      "function": {
        "name": "query_schedules",
        "description": "查询日程安排，用于了解用户的日程",
        "parameters": {
          "type": "object",
          "properties": {
            "start_date": {
              "type": "string",
              "description": "开始日期，格式 YYYY-MM-DD。可以是'today'或'tomorrow'",
            },
            "end_date": {
              "type": "string",
              "description": "结束日期，格式 YYYY-MM-DD，可选",
            }
          },
          "required": ["start_date"]
        }
      }
    },
    {
      "type": "function",
      "function": {
        "name": "propose_action",
        "description": "提交一个待审批的操作（创建、修改或删除日程）。用户会在界面上看到并决定是否执行",
        "parameters": {
          "type": "object",
          "properties": {
            "action_type": {
              "type": "string",
              "enum": ["create", "modify", "modify_once", "delete"],
              "description": "操作类型：create=创建规则，modify=修改规则，modify_once=仅修改某天，delete=删除",
            },
            "description": {
              "type": "string",
              "description": "操作描述，显示给用户看的，如：'创建明天8点的晨跑日程'",
            },
            "schedule_data": {
              "type": "object",
              "description": "日程数据，根据 action_type 不同而不同",
              "properties": {
                "id": {"type": "string", "description": "修改/删除时需要的日程ID"},
                "date": {"type": "string", "description": "日期 YYYY-MM-DD"},
                "title": {"type": "string", "description": "标题"},
                "time": {"type": "string", "description": "时间 HH:mm"},
                "new_time": {"type": "string", "description": "modify_once时的新时间 HH:mm"},
                "new_title": {"type": "string", "description": "modify_once时的新标题（可选）"},
                "description": {"type": "string", "description": "描述"},
                "priority": {
                  "type": "integer", 
                  "description": "优先级（可选，系统会自动推断）: 1=每天, 2=工作日/休息日/每隔N天, 3=周末/节假日, 4=周X, 5=特定日期",
                  "enum": [1, 2, 3, 4, 5]
                },
                "template_type": {
                  "type": "string",
                  "description": "模板类型: none=普通, workday=工作日, restday=休息日, weekend=周末, holiday=节假日",
                  "enum": ["none", "workday", "restday", "weekend", "holiday"]
                },
                "recurrence": {
                  "type": "string",
                  "description": "重复周期: none=不重复, daily=每天, weekly=每周某天, interval=每隔N天, monthly=每月",
                  "enum": ["none", "daily", "weekly", "interval", "monthly"]
                },
                "weekday": {
                  "type": "integer",
                  "description": "当recurrence=weekly时必填：1=周一, 2=周二, 3=周三, 4=周四, 5=周五, 6=周六, 7=周日",
                  "enum": [1, 2, 3, 4, 5, 6, 7]
                },
                "interval_days": {
                  "type": "integer",
                  "description": "当recurrence=interval时必填：间隔天数，如3表示每隔3天"
                },
                "start_date": {
                  "type": "string",
                  "description": "当recurrence=interval时必填：起始日期 YYYY-MM-DD，从这天开始计算间隔"
                }
              }
            }
          },
          "required": ["action_type", "description", "schedule_data"]
        }
      }
    },
  ];
  
  /// 发送消息并处理函数调用
  Future<String> chat(String userMessage) async {
    print('\n========== GPT Chat Start ==========');
    print('用户消息: $userMessage');
    
    _conversationHistory.add({
      "role": "user",
      "content": userMessage,
    });
    
    try {
      print('调用 GPT API...');
      final response = await _callGptApi();
      print('GPT API 调用成功');
      
      final result = await _handleResponse(response);
      print('GPT 最终回复: $result');
      print('当前 pendingActions 数量: ${pendingActions.length}');
      if (pendingActions.isNotEmpty) {
        print('pendingActions 列表:');
        for (var action in pendingActions) {
          print('  - ID: ${action.id}, Type: ${action.type}, Desc: ${action.description}');
        }
      }
      print('========== GPT Chat End ==========\n');
      
      return result;
    } catch (e) {
      print('错误: $e');
      print('========== GPT Chat End (Error) ==========\n');
      return "抱歉，处理你的请求时出错了：$e";
    }
  }
  
  /// 调用 GPT API
  Future<Map<String, dynamic>> _callGptApi() async {
    final response = await http.post(
      Uri.parse(_endpoint),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer $_apiKey',
      },
      body: jsonEncode({
        'model': _model,
        'messages': _conversationHistory,
        'tools': _tools,
        'tool_choice': 'auto',
      }),
    );
    
    if (response.statusCode != 200) {
      throw Exception('API 调用失败: ${response.statusCode} - ${response.body}');
    }
    
    return jsonDecode(response.body);
  }
  
  /// 处理 GPT 响应
  Future<String> _handleResponse(Map<String, dynamic> response) async {
    final message = response['choices'][0]['message'];
    print('GPT 消息: ${jsonEncode(message)}');
    
    _conversationHistory.add(message);
    
    if (message['tool_calls'] != null) {
      final toolCalls = message['tool_calls'] as List;
      print('检测到 ${toolCalls.length} 个函数调用');
      
      // 检查是否调用了 propose_action
      bool hasProposeAction = false;
      
      for (var toolCall in toolCalls) {
        final functionName = toolCall['function']['name'];
        final argumentsStr = toolCall['function']['arguments'];
        print('\n函数调用: $functionName');
        print('参数字符串: $argumentsStr');
        
        if (functionName == 'propose_action') {
          hasProposeAction = true;
        }
        
        final arguments = jsonDecode(argumentsStr);
        print('解析后的参数: $arguments');
        
        final result = await _executeFunction(functionName, arguments);
        print('函数执行结果: $result');
        
        _conversationHistory.add({
          "role": "tool",
          "tool_call_id": toolCall['id'],
          "name": functionName,
          "content": jsonEncode(result),
        });
      }
      
      // 如果只调用了 get_current_context 但没有 propose_action，直接返回提示
      if (!hasProposeAction && toolCalls.any((t) => t['function']['name'] == 'get_current_context')) {
        print('⚠️ 警告：GPT只调用了get_current_context但没有propose_action');
        print('强制要求GPT调用propose_action...');
        
        // 添加强制提示
        _conversationHistory.add({
          "role": "user",
          "content": "你必须调用propose_action来创建这个日程！请立即调用propose_action函数。",
        });
        
        // 再次调用GPT
        final retryResponse = await _callGptApi();
        return await _handleResponse(retryResponse);
      }
      
      // 再次调用 GPT 生成最终回复
      print('\n再次调用 GPT 生成最终回复...');
      final finalResponse = await _callGptApi();
      final finalMessage = finalResponse['choices'][0]['message'];
      final content = finalMessage['content'];
      
      print('最终消息 content: $content');
      
      if (content == null || content.toString().trim().isEmpty) {
        print('警告: GPT 没有返回 content，使用默认回复');
        return '好的，请查看上方的审批卡片~';
      }
      
      return content;
    }
    
    final content = message['content'];
    print('直接回复 content: $content');
    return content ?? '好的';
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
        case 'query_schedules':
          return await _querySchedules(arguments);
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
    final isTodayRest = _workScheduleService.isRestDay(today);
    final isTomorrowRest = _workScheduleService.isRestDay(tomorrow);
    
    final weekdays = ['一', '二', '三', '四', '五', '六', '日'];
    
    return {
      'current_time': now.toString(),
      'hour': now.hour,
      'minute': now.minute,
      'today': {
        'date': today.toString().split(' ')[0],
        'weekday': '星期${weekdays[today.weekday - 1]}',
        'is_rest': isTodayRest,
      },
      'tomorrow': {
        'date': tomorrow.toString().split(' ')[0],
        'weekday': '星期${weekdays[tomorrow.weekday - 1]}',
        'is_rest': isTomorrowRest,
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
  
  /// 查询日程
  Future<Map<String, dynamic>> _querySchedules(Map<String, dynamic> args) async {
    DateTime startDate;
    
    // 处理特殊关键词
    final startDateStr = args['start_date'].toString().toLowerCase();
    if (startDateStr == 'today') {
      final now = DateTime.now();
      startDate = DateTime(now.year, now.month, now.day);
    } else if (startDateStr == 'tomorrow') {
      final now = DateTime.now();
      startDate = DateTime(now.year, now.month, now.day).add(const Duration(days: 1));
    } else {
      try {
        startDate = DateTime.parse(args['start_date']);
      } catch (e) {
        return {'error': '日期格式错误: ${args['start_date']}'};
      }
    }
    
    DateTime endDate;
    if (args['end_date'] != null) {
      final endDateStr = args['end_date'].toString().toLowerCase();
      if (endDateStr == 'today') {
        final now = DateTime.now();
        endDate = DateTime(now.year, now.month, now.day);
      } else if (endDateStr == 'tomorrow') {
        final now = DateTime.now();
        endDate = DateTime(now.year, now.month, now.day).add(const Duration(days: 1));
      } else {
        try {
          endDate = DateTime.parse(args['end_date']);
        } catch (e) {
          return {'error': '日期格式错误: ${args['end_date']}'};
        }
      }
    } else {
      endDate = startDate;
    }
    
    if (startDate == endDate) {
      final schedules = await _dbService.getSchedulesByDate(startDate);
      return {
        'success': true,
        'date': startDate.toString().split(' ')[0],
        'count': schedules.length,
        'schedules': schedules.map((s) => {
          'id': s.id,
          'title': s.title,
          'startTime': s.startTime?.toString().split(' ')[1].substring(0, 5),
          'description': s.description,
          'isCompleted': s.isCompleted,
        }).toList(),
      };
    }
    
    // 范围查询
    final allSchedules = <Schedule>[];
    var currentDate = startDate;
    while (currentDate.isBefore(endDate.add(const Duration(days: 1)))) {
      final schedules = await _dbService.getSchedulesByDate(currentDate);
      allSchedules.addAll(schedules);
      currentDate = currentDate.add(const Duration(days: 1));
    }
    
    return {
      'success': true,
      'count': allSchedules.length,
      'schedules': allSchedules.map((s) => {
        'id': s.id,
        'date': s.date.toString().split(' ')[0],
        'title': s.title,
        'startTime': s.startTime?.toString().split(' ')[1].substring(0, 5),
        'description': s.description,
        'isCompleted': s.isCompleted,
      }).toList(),
    };
  }
  
  /// 提交待审批操作
  Future<Map<String, dynamic>> _proposeAction(Map<String, dynamic> args) async {
    print('\n_proposeAction 被调用');
    print('参数: $args');
    
    final actionType = args['action_type'];
    final description = args['description'];
    final scheduleData = args['schedule_data'] as Map<String, dynamic>;
    
    print('操作类型: $actionType');
    print('描述: $description');
    print('日程数据: $scheduleData');
    
    ActionType type;
    switch (actionType) {
      case 'create':
        type = ActionType.create;
        break;
      case 'modify':
        type = ActionType.modify;
        break;
      case 'delete':
        type = ActionType.delete;
        break;
      default:
        print('错误: 未知的操作类型 $actionType');
        return {'success': false, 'error': '未知的操作类型'};
    }
    
    final action = PendingAction(
      id: DateTime.now().millisecondsSinceEpoch.toString(),
      type: type,
      description: description,
      data: scheduleData,
    );
    
    pendingActions.add(action);
    print('已添加到 pendingActions，当前数量: ${pendingActions.length}');
    print('Action ID: ${action.id}');
    
    return {
      'success': true,
      'message': '已提交审批请求，等待用户确认',
      'action_id': action.id,
    };
  }
  
  /// 执行已批准的操作
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
  void rejectAction(String actionId) {
    pendingActions.removeWhere((a) => a.id == actionId);
  }
  
  /// 创建日程规则
  Future<void> _createSchedule(Map<String, dynamic> data) async {
    print('_createSchedule 被调用，数据: $data');
    
    // 解析优先级（根据条件自动推断）
    SchedulePriority priority;
    if (data['priority'] != null) {
      priority = SchedulePriority.fromValue(data['priority']);
    } else {
      // 自动推断：根据条件类型决定优先级
      final templateType = data['template_type'] as String?;
      final recurrence = data['recurrence'] as String?;
      final dateStr = data['date'] as String?;
      final specificDate = data['specific_date'] as String?;
      
      if (specificDate != null || (dateStr != null && recurrence == 'none')) {
        priority = SchedulePriority.specific; // 5 - 特定日期
      } else if (recurrence == 'weekly') {
        priority = SchedulePriority.weekly; // 4 - 周X
      } else if (templateType == 'weekend' || templateType == 'holiday') {
        priority = SchedulePriority.weekendOrHoliday; // 3 - 周末/节假日
      } else if (templateType == 'workday' || templateType == 'restday' || recurrence == 'interval') {
        priority = SchedulePriority.template; // 2 - 工作日/休息日/每隔N天
      } else {
        priority = SchedulePriority.daily; // 1 - 每天
      }
    }
    
    print('优先级: $priority');
    
    // 解析条件
    RuleCondition condition;
    final templateType = data['template_type'] as String?;
    final recurrence = data['recurrence'] as String?;
    final dateStr = data['date'] as String?;
    final specificDate = data['specific_date'] as String?;
    
    if (specificDate != null || (dateStr != null && recurrence == 'none')) {
      final date = DateTime.parse(specificDate ?? dateStr!);
      condition = RuleCondition.specificDate(date);
      print('条件: 特定日期 ${date.toString().split(' ')[0]}');
    } else if (recurrence == 'weekly' && data['weekday'] != null) {
      final weekday = data['weekday'] as int;
      condition = RuleCondition.weekday(weekday);
      print('条件: 每周星期$weekday');
    } else if (templateType == 'holiday') {
      condition = RuleCondition.holiday();
      print('条件: 节假日');
    } else if (templateType == 'weekend') {
      condition = RuleCondition.weekend();
      print('条件: 周末');
    } else if (recurrence == 'interval' && data['interval_days'] != null && data['start_date'] != null) {
      final intervalDays = data['interval_days'] as int;
      final startDate = DateTime.parse(data['start_date'] as String);
      condition = RuleCondition.interval(intervalDays, startDate);
      print('条件: 每隔${intervalDays}天，从${startDate.toString().split(' ')[0]}开始');
    } else if (templateType == 'workday') {
      condition = RuleCondition.workday();
      print('条件: 工作日');
    } else if (templateType == 'restday') {
      condition = RuleCondition.restday();
      print('条件: 休息日');
    } else if (recurrence == 'daily') {
      condition = RuleCondition.daily();
      print('条件: 每日');
    } else if (data['weekday'] != null) {
      condition = RuleCondition.weekday(data['weekday'] as int);
      print('条件: 星期${data['weekday']}');
    } else {
      if (dateStr != null) {
        final date = DateTime.parse(dateStr);
        condition = RuleCondition.specificDate(date);
        print('条件: 特定日期(默认) ${date.toString().split(' ')[0]}');
      } else {
        condition = RuleCondition.daily();
        print('条件: 每日(默认)');
      }
    }
    
    // 创建规则
    final rule = ScheduleRule(
      title: data['title'],
      description: data['description'],
      time: data['time'],
      priority: priority,
      condition: condition,
    );
    
    print('创建 ScheduleRule: ${rule.title}, 时间: ${rule.time}, 优先级: ${rule.priority.label}');
    print('条件类型: ${rule.condition.type}');
    
    await _dbService.insertRule(rule);
    print('规则已插入数据库');
  }
  
  /// 仅修改某一天的日程（不影响规则）
  Future<void> _modifyOnce(Map<String, dynamic> data) async {
    print('执行 modifyOnce: $data');
    
    final title = data['title'] as String;
    final dateStr = data['date'] as String;
    final date = DateTime.parse(dateStr);
    
    // 查找规则ID
    final ruleId = await _dbService.findRuleId(title, null);
    if (ruleId == null) {
      throw Exception('未找到匹配的规则: $title');
    }
    
    print('找到规则ID: $ruleId');
    
    // 确定覆盖类型和新值
    OverrideType type;
    String? newTime;
    String? newTitle;
    
    if (data.containsKey('new_time')) {
      type = OverrideType.modifyTime;
      newTime = data['new_time'] as String;
      print('修改时间为: $newTime');
    } else if (data.containsKey('new_title')) {
      type = OverrideType.replace;
      newTitle = data['new_title'] as String;
      newTime = data['new_time'] as String?;
      print('替换为: $newTitle @ $newTime');
    } else {
      type = OverrideType.skip;
      print('跳过该日程');
    }
    
    // 创建覆盖记录
    final override = ScheduleOverride(
      date: date,
      ruleId: ruleId,
      type: type,
      newTime: newTime,
      newTitle: newTitle,
    );
    
    await _dbService.insertOverride(override);
    print('覆盖记录已创建');
  }
  
  /// 修改日程
  Future<void> _modifySchedule(Map<String, dynamic> data) async {
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
    
    DateTime? newStartTime = originalSchedule.startTime;
    if (data['time'] != null) {
      final timeStr = data['time'] as String;
      final parts = timeStr.split(':');
      if (parts.length == 2) {
        newStartTime = DateTime(
          originalSchedule.date.year,
          originalSchedule.date.month,
          originalSchedule.date.day,
          int.parse(parts[0]),
          int.parse(parts[1]),
        );
      }
    }
    
    final updated = Schedule(
      id: originalSchedule.id,
      title: data['title'] ?? originalSchedule.title,
      date: originalSchedule.date,
      startTime: newStartTime,
      description: data['description'] ?? originalSchedule.description,
      priority: data['priority'] != null 
          ? SchedulePriority.fromValue(data['priority'])
          : originalSchedule.priority,
      isCompleted: originalSchedule.isCompleted,
    );
    
    await _dbService.updateSchedule(updated);
  }
  
  /// 删除日程
  Future<void> _deleteSchedule(Map<String, dynamic> data) async {
    final scheduleId = data['id'].toString();
    await _dbService.deleteSchedule(scheduleId);
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
  void clearHistory() {
    _conversationHistory.clear();
    _conversationHistory.add({
      "role": "system",
      "content": """你是一个智能的日程管理助手。

重要：当用户要求创建日程时，必须调用 propose_action 函数！

示例：
用户："每天9点起床"
→ 调用 propose_action 提交审批
→ 回复："好的！我建议创建每天9点的起床日程，请查看上方的审批卡片确认~"

当前日期：${DateTime.now().toString().split(' ')[0]}"""
    });
  }
}
