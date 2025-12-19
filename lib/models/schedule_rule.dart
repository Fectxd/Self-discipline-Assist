import 'package:uuid/uuid.dart';
import '../utils/schedule_rule_converter.dart';

/// 日程规则模型 - 核心存储单元
/// 存储的是"规则"而非具体日程实例
class ScheduleRule {
  final String id;
  final String title;
  final String? description;
  final String? time; // 格式: "HH:mm"，开始时间
  final String? endTime; // 格式: "HH:mm"，结束时间（可选）

  /// 应用条件（类型即分类）
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
    this.endTime,
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

    final targetDate = DateTime(date.year, date.month, date.day);

    // 🔥 新增: 检查结束日期限制
    if (condition.endDate != null) {
      final endDate = DateTime(
        condition.endDate!.year,
        condition.endDate!.month,
        condition.endDate!.day,
      );
      if (targetDate.isAfter(endDate)) return false;
    }

    // 🔥 新增: 检查最大次数限制
    if (condition.maxCount != null && condition.maxCount! > 0) {
      final occurrenceCount = _countOccurrencesUpTo(targetDate, isWorkday: isWorkday, isHoliday: isHoliday);
      if (occurrenceCount > condition.maxCount!) return false;
    }

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

  /// 计算从起始日期到目标日期的事件发生次数（用于 maxCount 限制）
  int _countOccurrencesUpTo(DateTime targetDate, {required bool isWorkday, required bool isHoliday}) {
    final start = condition.startDate ?? createdAt;
    final startDate = DateTime(start.year, start.month, start.day);
    final target = DateTime(targetDate.year, targetDate.month, targetDate.day);

    // 如果目标日期早于起始日期，返回 0
    if (target.isBefore(startDate)) return 0;

    int count = 0;

    switch (condition.type) {
      case ConditionType.daily:
        // 每天：计算天数差 + 1
        count = target.difference(startDate).inDays + 1;
        break;

      case ConditionType.interval:
        // 每隔N天：计算符合间隔的天数
        if (condition.intervalDays != null && condition.intervalDays! > 0) {
          final daysDiff = target.difference(startDate).inDays;
          count = (daysDiff / condition.intervalDays!).floor() + 1;
        }
        break;

      case ConditionType.weekday:
        // 特定星期几：逐天扫描计数
        DateTime current = startDate;
        while (!current.isAfter(target)) {
          if (current.weekday == condition.weekday) {
            count++;
          }
          current = current.add(const Duration(days: 1));
        }
        break;

      case ConditionType.workday:
        // 工作日：逐天扫描计数（需要节假日信息）
        // 注意：这里简化处理，实际应该查询节假日数据库
        DateTime current = startDate;
        while (!current.isAfter(target)) {
          final isWeekend = current.weekday >= 6;
          // 简化：假设周末不是工作日，节假日信息需要实时查询
          if (!isWeekend) {
            count++;
          }
          current = current.add(const Duration(days: 1));
        }
        break;

      case ConditionType.restday:
        // 休息日：逐天扫描计数
        DateTime current = startDate;
        while (!current.isAfter(target)) {
          final isWeekend = current.weekday >= 6;
          if (isWeekend) {
            count++;
          }
          current = current.add(const Duration(days: 1));
        }
        break;

      case ConditionType.weekend:
        // 周末：逐天扫描计数
        DateTime current = startDate;
        while (!current.isAfter(target)) {
          if (current.weekday >= 6) {
            count++;
          }
          current = current.add(const Duration(days: 1));
        }
        break;

      case ConditionType.holiday:
        // 节假日：需要查询节假日数据库，这里返回简化值
        count = 1;
        break;

      case ConditionType.specificDate:
        // 特定日期：只有1次
        count = 1;
        break;
    }

    return count;
  }

  /// 从数据库 Map 创建对象
  factory ScheduleRule.fromMap(Map<String, dynamic> map) {
    return ScheduleRuleConverter.fromDatabaseMap(map);
  }

  /// 转换为数据库 Map
  Map<String, dynamic> toMap() {
    return ScheduleRuleConverter.toDatabaseMap(this);
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

  /// 结束日期（时间范围限制）- 对应 RRULE 的 UNTIL
  final DateTime? endDate;

  /// 最大重复次数（时间范围限制）- 对应 RRULE 的 COUNT
  final int? maxCount;

  const RuleCondition({
    required this.type,
    this.weekday,
    this.specificDate,
    this.intervalDays,
    this.startDate,
    this.endDate,
    this.maxCount,
  });

  factory RuleCondition.daily({DateTime? endDate, int? maxCount}) => RuleCondition(
    type: ConditionType.daily,
    endDate: endDate,
    maxCount: maxCount,
  );

  factory RuleCondition.restday({DateTime? endDate, int? maxCount}) => RuleCondition(
    type: ConditionType.restday,
    endDate: endDate,
    maxCount: maxCount,
  );

  factory RuleCondition.workday({DateTime? endDate, int? maxCount}) => RuleCondition(
    type: ConditionType.workday,
    endDate: endDate,
    maxCount: maxCount,
  );

  factory RuleCondition.interval(
    int days,
    DateTime start, {
    DateTime? end,
    int? maxCount,
  }) => RuleCondition(
    type: ConditionType.interval,
    intervalDays: days,
    startDate: start,
    endDate: end,
    maxCount: maxCount,
  );

  factory RuleCondition.weekend({DateTime? endDate, int? maxCount}) => RuleCondition(
    type: ConditionType.weekend,
    endDate: endDate,
    maxCount: maxCount,
  );

  factory RuleCondition.holiday({DateTime? endDate, int? maxCount}) => RuleCondition(
    type: ConditionType.holiday,
    endDate: endDate,
    maxCount: maxCount,
  );

  factory RuleCondition.weekday(
    int weekday, {
    DateTime? endDate,
    int? maxCount,
  }) => RuleCondition(
    type: ConditionType.weekday,
    weekday: weekday,
    endDate: endDate,
    maxCount: maxCount,
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
      endDate: map['end_date'] != null
          ? DateTime.parse(map['end_date'] as String)
          : null,
      maxCount: map['max_count'] as int?,
    );
  }

  Map<String, dynamic> toMap() {
    return {
      'type': type.name,
      'weekday': weekday,
      'specific_date': specificDate?.toIso8601String(),
      'interval_days': intervalDays,
      'start_date': startDate?.toIso8601String(),
      'end_date': endDate?.toIso8601String(),
      'max_count': maxCount,
    };
  }
}

/// 条件类型枚举（日程模式分类）
enum ConditionType {
  /// 每天
  daily,

  /// 休息日（周末+节假日）
  restday,

  /// 工作日
  workday,

  /// 每隔N天
  interval,

  /// 周末（周六日）
  weekend,

  /// 节假日
  holiday,

  /// 特定星期几（周一到周日）
  weekday,

  /// 特定日期
  specificDate,
}
