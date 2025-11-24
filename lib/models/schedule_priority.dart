/// 日程优先级枚举
/// 5级优先级体系，覆盖范围越广优先级越低
enum SchedulePriority {
  /// 优先级 1: 每天（最低，覆盖所有日期）
  daily(1, '每天'),
  
  /// 优先级 2: 工作日/休息日/每隔N天
  template(2, '模板'),
  
  /// 优先级 3: 周末/节假日
  weekendOrHoliday(3, '周末节假日'),
  
  /// 优先级 4: 特定星期几（周一到周日）
  weekly(4, '周X'),
  
  /// 优先级 5: 特定日期（最高）
  specific(5, '特定日期');

  final int value;
  final String label;

  const SchedulePriority(this.value, this.label);

  /// 从数值获取优先级
  static SchedulePriority fromValue(int value) {
    return SchedulePriority.values.firstWhere(
      (p) => p.value == value,
      orElse: () => SchedulePriority.daily,
    );
  }

  /// 判断是否可以覆盖另一个优先级
  bool canOverride(SchedulePriority other) {
    return value >= other.value;
  }
}

/// 模板类型枚举
enum TemplateType {
  /// 无模板（普通日程）
  none('none', '普通日程'),
  
  /// 工作日模板
  workday('workday', '工作日'),
  
  /// 休息日模板
  restday('restday', '休息日'),
  
  /// 大周模板（双周的第一周）
  bigWeek('big_week', '大周'),
  
  /// 小周模板（双周的第二周）
  smallWeek('small_week', '小周');

  final String value;
  final String label;

  const TemplateType(this.value, this.label);

  /// 从字符串获取模板类型
  static TemplateType fromString(String value) {
    return TemplateType.values.firstWhere(
      (t) => t.value == value,
      orElse: () => TemplateType.none,
    );
  }
}

/// 重复周期枚举
enum RecurrencePattern {
  /// 不重复
  none('none', '不重复'),
  
  /// 每天
  daily('daily', '每天'),
  
  /// 每周
  weekly('weekly', '每周'),
  
  /// 每两周
  biweekly('biweekly', '每两周'),
  
  /// 每月
  monthly('monthly', '每月');

  final String value;
  final String label;

  const RecurrencePattern(this.value, this.label);

  /// 从字符串获取重复周期
  static RecurrencePattern fromString(String value) {
    return RecurrencePattern.values.firstWhere(
      (r) => r.value == value,
      orElse: () => RecurrencePattern.none,
    );
  }
}
