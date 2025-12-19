import 'package:uuid/uuid.dart';
import '../utils/schedule_override_converter.dart';

/// 日程覆盖模型 - 用于临时修改日程规则
/// 支持单日或日期区间覆盖
/// 例如：规则“每天9点”，覆盖“本周改 10点” → startDate=周一, endDate=周日
/// 单日覆盖：endDate 等于 startDate
class ScheduleOverride {
  final String id;

  /// 覆盖开始日期
  final DateTime startDate;

  /// 覆盖结束日期（单日覆盖时等于 startDate）
  final DateTime endDate;

  /// 规则ID（如果是修改规则的某次实例）
  final String? ruleId;

  /// 覆盖类型
  final OverrideType type;

  /// 如果是修改时间，新的时间
  final String? newTime;

  /// 如果是完全替换，新的标题
  final String? newTitle;

  /// 新的描述（用于 modify 类型）
  final String? newDescription;

  /// 新的结束时间（用于 modify 类型）
  final String? newEndTime;

  /// 任意附加数据（JSON格式），例如地点、参与人等
  final Map<String, dynamic>? metadata;

  /// 创建时间
  final DateTime createdAt;

  ScheduleOverride({
    String? id,
    required this.startDate,
    required this.endDate,
    this.ruleId,
    required this.type,
    this.newTime,
    this.newTitle,
    this.newDescription,
    this.newEndTime,
    this.metadata,
    DateTime? createdAt,
  })  : id = id ?? const Uuid().v4(),
        createdAt = createdAt ?? DateTime.now();

  /// 判断指定日期是否在覆盖范围内
  bool appliesTo(DateTime date) {
    final targetDate = DateTime(date.year, date.month, date.day);
    final start = DateTime(startDate.year, startDate.month, startDate.day);
    final end = DateTime(endDate.year, endDate.month, endDate.day);

    return !targetDate.isBefore(start) && !targetDate.isAfter(end);
  }

  factory ScheduleOverride.fromMap(Map<String, dynamic> map) {
    return ScheduleOverrideConverter.fromDatabaseMap(map);
  }

  Map<String, dynamic> toMap() {
    return ScheduleOverrideConverter.toDatabaseMap(this);
  }
}

/// 覆盖类型
enum OverrideType {
  /// 跳过这一天（删除）
  skip,

  /// 修改时间
  modifyTime,

  /// 修改多个属性（时间、描述、附加信息等）
  modify,

  /// 完全替换
  replace,

  /// 标记为已完成
  complete,
}
