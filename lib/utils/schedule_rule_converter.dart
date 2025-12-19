import 'dart:convert';
import '../models/schedule_rule.dart';

/// 日程规则 JSON 转换器
/// 集中处理 ScheduleRule 和 RuleCondition 的序列化/反序列化
class ScheduleRuleConverter {
  /// 从 AI 传来的 JSON 创建规则
  /// 
  /// AI JSON 格式示例：
  /// ```json
  /// {
  ///   "title": "晨跑",
  ///   "time": "07:00",
  ///   "end_time": "08:00",
  ///   "description": "每天早上跑步",
  ///   "recurrence": "daily",
  ///   "template_type": "workday",
  ///   "weekday": 1,
  ///   "interval_days": 3,
  ///   "start_date": "2025-01-01",
  ///   "end_date": "2025-12-31",
  ///   "max_count": 100
  /// }
  /// ```
  static ScheduleRule fromAIJson(Map<String, dynamic> json) {
    return ScheduleRule(
      title: json['title'] as String,
      description: json['description'] as String?,
      time: json['time'] as String?,
      endTime: json['end_time'] as String?,
      condition: _parseConditionFromAI(json),
    );
  }

  /// 解析 AI JSON 中的条件信息
  static RuleCondition _parseConditionFromAI(Map<String, dynamic> json) {
    final templateType = json['template_type'] as String?;
    final recurrence = json['recurrence'] as String?;
    final dateStr = json['date'] as String?;
    final specificDate = json['specific_date'] as String?;
    
    // 解析时间范围限制
    final DateTime? endDate = json['end_date'] != null 
        ? DateTime.parse(json['end_date'] as String)
        : null;
    final int? maxCount = json['max_count'] as int?;

    // 特定日期
    if (specificDate != null || (dateStr != null && recurrence == 'none')) {
      final date = DateTime.parse(specificDate ?? dateStr!);
      return RuleCondition.specificDate(date);
    }
    
    // 每周某天
    if (recurrence == 'weekly' && json['weekday'] != null) {
      final weekday = json['weekday'] as int;
      return RuleCondition.weekday(
        weekday,
        endDate: endDate,
        maxCount: maxCount,
      );
    }
    
    // 节假日
    if (templateType == 'holiday') {
      return RuleCondition.holiday(
        endDate: endDate,
        maxCount: maxCount,
      );
    }
    
    // 周末
    if (templateType == 'weekend') {
      return RuleCondition.weekend(
        endDate: endDate,
        maxCount: maxCount,
      );
    }
    
    // 每隔N天
    if (recurrence == 'interval' && json['interval_days'] != null && json['start_date'] != null) {
      final intervalDays = json['interval_days'] as int;
      final startDate = DateTime.parse(json['start_date'] as String);
      return RuleCondition.interval(
        intervalDays,
        startDate,
        end: endDate,
        maxCount: maxCount,
      );
    }
    
    // 工作日
    if (templateType == 'workday') {
      return RuleCondition.workday(
        endDate: endDate,
        maxCount: maxCount,
      );
    }
    
    // 休息日
    if (templateType == 'restday') {
      return RuleCondition.restday(
        endDate: endDate,
        maxCount: maxCount,
      );
    }
    
    // 每日
    if (recurrence == 'daily') {
      return RuleCondition.daily(
        endDate: endDate,
        maxCount: maxCount,
      );
    }
    
    // 单个周几（兼容旧格式）
    if (json['weekday'] != null) {
      return RuleCondition.weekday(
        json['weekday'] as int,
        endDate: endDate,
        maxCount: maxCount,
      );
    }
    
    // 默认：特定日期或每日
    if (dateStr != null) {
      final date = DateTime.parse(dateStr);
      return RuleCondition.specificDate(date);
    }
    
    return RuleCondition.daily(
      endDate: endDate,
      maxCount: maxCount,
    );
  }

  /// 从数据库 Map 创建规则
  static ScheduleRule fromDatabaseMap(Map<String, dynamic> map) {
    // condition 字段已经是 Map，不需要 jsonDecode（由数据库服务处理）
    final conditionJson = map['condition'] is String
        ? json.decode(map['condition'] as String) as Map<String, dynamic>
        : map['condition'] as Map<String, dynamic>;

    return ScheduleRule(
      id: map['id'] as String,
      title: map['title'] as String,
      description: map['description'] as String?,
      time: map['time'] as String?,
      endTime: map['end_time'] as String?,
      condition: _parseConditionFromDatabase(conditionJson),
      createdAt: DateTime.parse(map['created_at'] as String),
      updatedAt: DateTime.parse(map['updated_at'] as String),
      isEnabled: (map['is_enabled'] as int? ?? 1) == 1,
    );
  }

  /// 解析数据库中的条件 JSON
  static RuleCondition _parseConditionFromDatabase(Map<String, dynamic> map) {
    final type = ConditionType.values.firstWhere(
      (t) => t.name == map['type'],
      orElse: () => ConditionType.daily,
    );

    return RuleCondition(
      type: type,
      weekday: map['weekday'] as int?,
      specificDate: map['specific_date'] != null
          ? DateTime.parse(map['specific_date'] as String)
          : null,
      intervalDays: map['interval_days'] as int?,
      startDate: map['start_date'] != null
          ? DateTime.parse(map['start_date'] as String)
          : null,
      endDate: map['end_date'] != null
          ? DateTime.parse(map['end_date'] as String)
          : null,
      maxCount: map['max_count'] as int?,
    );
  }

  /// 转换为数据库 Map
  static Map<String, dynamic> toDatabaseMap(ScheduleRule rule) {
    return {
      'id': rule.id,
      'title': rule.title,
      'description': rule.description,
      'time': rule.time,
      'end_time': rule.endTime,
      'condition': json.encode(_conditionToMap(rule.condition)),
      'created_at': rule.createdAt.toIso8601String(),
      'updated_at': rule.updatedAt.toIso8601String(),
      'is_enabled': rule.isEnabled ? 1 : 0,
    };
  }

  /// 将条件转换为 Map
  static Map<String, dynamic> _conditionToMap(RuleCondition condition) {
    return {
      'type': condition.type.name,
      'weekday': condition.weekday,
      'specific_date': condition.specificDate?.toIso8601String(),
      'interval_days': condition.intervalDays,
      'start_date': condition.startDate?.toIso8601String(),
      'end_date': condition.endDate?.toIso8601String(),
      'max_count': condition.maxCount,
    };
  }
}
