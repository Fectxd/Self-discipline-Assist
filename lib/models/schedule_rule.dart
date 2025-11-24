import 'package:uuid/uuid.dart';
import 'dart:convert';
import 'schedule_priority.dart';

/// 日程规则模型 - 核心存储单元
/// 存储的是"规则"而非具体日程实例
class ScheduleRule {
  final String id;
  final String title;
  final String? description;
  final String? time; // 格式: "HH:mm"
  
  /// 优先级层级
  /// 1: 每日日程（最低）
  /// 2: 工作日/休息日模板
  /// 3: 特定星期某天（周一到周日）
  /// 4: 特殊日程（最高，指定具体日期）
  final SchedulePriority priority;
  
  /// 应用条件
  final RuleCondition condition;
  
  /// 创建时间（用于"从X日期开始"的判断）
  final DateTime createdAt;
  final DateTime updatedAt;
  
  /// 是否启用
  final bool isEnabled;

  ScheduleRule({
    String? id,
    required this.title,
    this.description,
    this.time,
    required this.priority,
    required this.condition,
    DateTime? createdAt,
    DateTime? updatedAt,
    this.isEnabled = true,
  })  : id = id ?? const Uuid().v4(),
        createdAt = createdAt ?? DateTime.now(),
        updatedAt = updatedAt ?? DateTime.now();

  /// 判断此规则是否适用于指定日期
  /// [date] 目标日期
  /// [isWorkday] 是否为工作日
  /// [isHoliday] 是否为节假日
  bool appliesTo(DateTime date, {required bool isWorkday, required bool isHoliday}) {
    if (!isEnabled) return false;
    
    final isWeekend = date.weekday >= 6; // 周六日
    
    switch (condition.type) {
      case ConditionType.daily:
        // 每日规则：所有日期都适用
        return !date.isBefore(DateTime(createdAt.year, createdAt.month, createdAt.day));
        
      case ConditionType.restday:
        // 休息日规则：周末或节假日
        return (isWeekend || isHoliday) && !date.isBefore(DateTime(createdAt.year, createdAt.month, createdAt.day));
        
      case ConditionType.workday:
        // 工作日规则：只在工作日适用
        return isWorkday && !date.isBefore(DateTime(createdAt.year, createdAt.month, createdAt.day));
        
      case ConditionType.interval:
        // 每隔N天规则
        if (condition.intervalDays == null || condition.startDate == null) return false;
        
        final start = DateTime(
          condition.startDate!.year,
          condition.startDate!.month,
          condition.startDate!.day,
        );
        final target = DateTime(date.year, date.month, date.day);
        
        // 日期必须在起始日期之后
        if (target.isBefore(start)) return false;
        
        // 计算天数差
        final daysDiff = target.difference(start).inDays;
        
        // 判断是否为间隔的倍数
        return daysDiff % condition.intervalDays! == 0;
        
      case ConditionType.weekend:
        // 周末规则：只在周六日适用
        return isWeekend && !date.isBefore(DateTime(createdAt.year, createdAt.month, createdAt.day));
        
      case ConditionType.holiday:
        // 节假日规则：只在节假日适用
        return isHoliday && !date.isBefore(DateTime(createdAt.year, createdAt.month, createdAt.day));
        
      case ConditionType.weekday:
        // 特定星期几规则
        return condition.weekday == date.weekday && 
               !date.isBefore(DateTime(createdAt.year, createdAt.month, createdAt.day));
        
      case ConditionType.specificDate:
        // 特定日期规则：只在该日期适用
        final targetDate = condition.specificDate!;
        return date.year == targetDate.year &&
               date.month == targetDate.month &&
               date.day == targetDate.day;
    }
  }

  /// 从数据库 Map 创建对象
  factory ScheduleRule.fromMap(Map<String, dynamic> map) {
    // condition 以 JSON 字符串形式存储
    final conditionJson = jsonDecode(map['condition'] as String) as Map<String, dynamic>;
    
    return ScheduleRule(
      id: map['id'] as String,
      title: map['title'] as String,
      description: map['description'] as String?,
      time: map['time'] as String?,
      priority: SchedulePriority.fromValue(map['priority'] as int),
      condition: RuleCondition.fromMap(conditionJson),
      createdAt: DateTime.parse(map['created_at'] as String),
      updatedAt: DateTime.parse(map['updated_at'] as String),
      isEnabled: (map['is_enabled'] as int? ?? 1) == 1,
    );
  }

  /// 转换为数据库 Map
  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'title': title,
      'description': description,
      'time': time,
      'priority': priority.value,
      'condition': jsonEncode(condition.toMap()), // JSON序列化
      'created_at': createdAt.toIso8601String(),
      'updated_at': updatedAt.toIso8601String(),
      'is_enabled': isEnabled ? 1 : 0,
    };
  }
}

/// 规则应用条件
class RuleCondition {
  final ConditionType type;
  
  /// 当 type = weekday 时使用 (1=周一, 7=周日)
  final int? weekday;
  
  /// 当 type = specificDate 时使用
  final DateTime? specificDate;
  
  /// 当 type = interval 时使用：间隔天数
  final int? intervalDays;
  
  /// 当 type = interval 时使用：起始日期
  final DateTime? startDate;

  const RuleCondition({
    required this.type,
    this.weekday,
    this.specificDate,
    this.intervalDays,
    this.startDate,
  });

  factory RuleCondition.daily() => const RuleCondition(type: ConditionType.daily);
  
  factory RuleCondition.restday() => const RuleCondition(type: ConditionType.restday);
  
  factory RuleCondition.workday() => const RuleCondition(type: ConditionType.workday);
  
  factory RuleCondition.interval(int days, DateTime start) => RuleCondition(
    type: ConditionType.interval,
    intervalDays: days,
    startDate: start,
  );
  
  factory RuleCondition.weekend() => const RuleCondition(type: ConditionType.weekend);
  
  factory RuleCondition.holiday() => const RuleCondition(type: ConditionType.holiday);
  
  factory RuleCondition.weekday(int weekday) => RuleCondition(
    type: ConditionType.weekday,
    weekday: weekday,
  );
  
  factory RuleCondition.specificDate(DateTime date) => RuleCondition(
    type: ConditionType.specificDate,
    specificDate: date,
  );

  factory RuleCondition.fromMap(Map<String, dynamic> map) {
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
    );
  }

  Map<String, dynamic> toMap() {
    return {
      'type': type.name,
      'weekday': weekday,
      'specific_date': specificDate?.toIso8601String(),
      'interval_days': intervalDays,
      'start_date': startDate?.toIso8601String(),
    };
  }
}

/// 条件类型枚举
enum ConditionType {
  /// 每天 - Priority 1
  daily,
  
  /// 休息日（周末+节假日） - Priority 2
  restday,
  
  /// 工作日 - Priority 3
  workday,
  
  /// 每隔N天 - Priority 4
  interval,
  
  /// 周末（周六日） - Priority 5
  weekend,
  
  /// 节假日 - Priority 6
  holiday,
  
  /// 特定星期几（周一到周日） - Priority 7
  weekday,
  
  /// 特定日期 - Priority 8
  specificDate,
}
