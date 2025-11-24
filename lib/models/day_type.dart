/// 日期类型枚举
enum DayType {
  workday,   // 工作日
  weekend,   // 周末
  holiday,   // 节假日
}

/// 日期类型扩展方法
extension DayTypeExtension on DayType {
  String get displayName {
    switch (this) {
      case DayType.workday:
        return '工作日';
      case DayType.weekend:
        return '周末';
      case DayType.holiday:
        return '节假日';
    }
  }

  String get value {
    switch (this) {
      case DayType.workday:
        return 'workday';
      case DayType.weekend:
        return 'weekend';
      case DayType.holiday:
        return 'holiday';
    }
  }

  static DayType fromString(String value) {
    switch (value) {
      case 'workday':
        return DayType.workday;
      case 'weekend':
        return DayType.weekend;
      case 'holiday':
        return DayType.holiday;
      default:
        return DayType.workday;
    }
  }
}

/// 日期覆盖配置（用户手动设置的优先级更高）
class DayOverride {
  final String id;
  final DateTime date;
  final DayType dayType;
  final String? note;
  final DateTime createdAt;

  DayOverride({
    String? id,
    required this.date,
    required this.dayType,
    this.note,
    DateTime? createdAt,
  })  : id = id ?? '${date.year}-${date.month}-${date.day}',
        createdAt = createdAt ?? DateTime.now();

  /// 从数据库 Map 创建对象
  factory DayOverride.fromMap(Map<String, dynamic> map) {
    return DayOverride(
      id: map['id'] as String,
      date: DateTime.parse(map['date'] as String),
      dayType: DayTypeExtension.fromString(map['day_type'] as String),
      note: map['note'] as String?,
      createdAt: DateTime.parse(map['created_at'] as String),
    );
  }

  /// 转换为数据库 Map
  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'date': date.toIso8601String(),
      'day_type': dayType.value,
      'note': note,
      'created_at': createdAt.toIso8601String(),
    };
  }

  @override
  String toString() {
    return 'DayOverride(date: $date, type: ${dayType.displayName})';
  }
}
