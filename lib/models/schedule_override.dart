import 'package:uuid/uuid.dart';

/// 日程覆盖模型 - 用于特定日期的例外情况
/// 例如：规则是"每天9点起床"，但今天想11点起 → 创建覆盖
class ScheduleOverride {
  final String id;
  
  /// 覆盖的日期
  final DateTime date;
  
  /// 规则ID（如果是修改规则的某次实例）
  final String? ruleId;
  
  /// 覆盖类型
  final OverrideType type;
  
  /// 如果是修改时间，新的时间
  final String? newTime;
  
  /// 如果是完全替换，新的标题
  final String? newTitle;
  
  /// 创建时间
  final DateTime createdAt;

  ScheduleOverride({
    String? id,
    required this.date,
    this.ruleId,
    required this.type,
    this.newTime,
    this.newTitle,
    DateTime? createdAt,
  })  : id = id ?? const Uuid().v4(),
        createdAt = createdAt ?? DateTime.now();

  factory ScheduleOverride.fromMap(Map<String, dynamic> map) {
    return ScheduleOverride(
      id: map['id'] as String,
      date: DateTime.parse(map['date'] as String),
      ruleId: map['rule_id'] as String?,
      type: OverrideType.values.firstWhere(
        (t) => t.name == map['type'],
        orElse: () => OverrideType.skip,
      ),
      newTime: map['new_time'] as String?,
      newTitle: map['new_title'] as String?,
      createdAt: DateTime.parse(map['created_at'] as String),
    );
  }

  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'date': date.toIso8601String(),
      'rule_id': ruleId,
      'type': type.name,
      'new_time': newTime,
      'new_title': newTitle,
      'created_at': createdAt.toIso8601String(),
    };
  }
}

/// 覆盖类型
enum OverrideType {
  /// 跳过这一天（删除）
  skip,
  
  /// 修改时间
  modifyTime,
  
  /// 完全替换
  replace,
}
