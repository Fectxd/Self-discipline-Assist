import 'dart:convert';
import '../models/schedule_override.dart';

/// 日程覆盖 JSON 转换器
/// 集中处理 ScheduleOverride 的序列化/反序列化
class ScheduleOverrideConverter {
  /// 从 AI 传来的 JSON 创建覆盖
  /// 
  /// AI JSON 格式示例：
  /// ```json
  /// {
  ///   "date": "2025-12-25",
  ///   "rule_id": "xxx-xxx-xxx",
  ///   "type": "modify",
  ///   "new_time": "10:00",
  ///   "new_end_time": "11:00",
  ///   "new_title": "新标题",
  ///   "new_description": "新描述"
  /// }
  /// ```
  static ScheduleOverride fromAIJson(Map<String, dynamic> json) {
    final startDate = DateTime.parse(json['date'] as String);
    
    // AI 必须提供 end_date 或默认为单日覆盖
    final endDate = json['end_date'] != null 
        ? DateTime.parse(json['end_date'] as String)
        : startDate; // 单日覆盖：endDate = startDate
    
    return ScheduleOverride(
      startDate: startDate,
      endDate: endDate,
      ruleId: json['rule_id'] as String?,
      type: _parseOverrideType(json['type'] as String),
      newTime: json['new_time'] as String?,
      newEndTime: json['new_end_time'] as String?,
      newTitle: json['new_title'] as String?,
      newDescription: json['new_description'] as String?,
      metadata: json['metadata'] as Map<String, dynamic>?,
    );
  }

  /// 解析覆盖类型
  static OverrideType _parseOverrideType(String typeStr) {
    switch (typeStr.toLowerCase()) {
      case 'skip':
        return OverrideType.skip;
      case 'modify_time':
      case 'modifytime':
        return OverrideType.modifyTime;
      case 'modify':
        return OverrideType.modify;
      case 'replace':
        return OverrideType.replace;
      case 'complete':
        return OverrideType.complete;
      default:
        return OverrideType.skip;
    }
  }

  /// 从数据库 Map 创建覆盖
  static ScheduleOverride fromDatabaseMap(Map<String, dynamic> map) {
    final startDate = DateTime.parse(map['start_date'] as String);
    
    // 直接要求 end_date 必须存在，不再向后兼容
    if (map['end_date'] == null) {
      throw Exception('数据损坏：schedule_overrides.end_date 不能为 NULL！请升级数据库到 v8');
    }
    
    final endDate = DateTime.parse(map['end_date'] as String);
    
    return ScheduleOverride(
      id: map['id'] as String,
      startDate: startDate,
      endDate: endDate,
      ruleId: map['rule_id'] as String?,
      type: OverrideType.values.firstWhere(
        (t) => t.name == map['type'],
        orElse: () => OverrideType.skip,
      ),
      newTime: map['new_time'] as String?,
      newTitle: map['new_title'] as String?,
      newDescription: map['new_description'] as String?,
      newEndTime: map['new_end_time'] as String?,
      metadata: map['metadata'] != null
          ? json.decode(map['metadata'] as String) as Map<String, dynamic>
          : null,
      createdAt: DateTime.parse(map['created_at'] as String),
    );
  }

  /// 转换为数据库 Map
  static Map<String, dynamic> toDatabaseMap(ScheduleOverride override) {
    // 归一化日期，只保留日期部分（去除时间）
    final startDate = DateTime(override.startDate.year, override.startDate.month, override.startDate.day);
    final endDate = DateTime(override.endDate.year, override.endDate.month, override.endDate.day);
    
    return {
      'id': override.id,
      'start_date': startDate.toIso8601String().split('T')[0],
      'end_date': endDate.toIso8601String().split('T')[0],
      'rule_id': override.ruleId,
      'type': override.type.name,
      'new_time': override.newTime,
      'new_title': override.newTitle,
      'new_description': override.newDescription,
      'new_end_time': override.newEndTime,
      'metadata': override.metadata != null 
          ? json.encode(override.metadata) 
          : null,
      'created_at': override.createdAt.toIso8601String(),
    };
  }
}
