import 'package:uuid/uuid.dart';
import 'schedule_priority.dart';

/// 日程模板模型
/// 用于存储可重用的日程模板（工作日、休息日、大小周等）
class ScheduleTemplate {
  final String id;
  final String title;
  final String? description;
  final TemplateType templateType;
  final SchedulePriority priority;
  
  /// 开始时间（时:分，如 "09:00"）
  final String? startTime;
  
  /// 结束时间（时:分，如 "18:00"）
  final String? endTime;
  
  /// 在模板中的排序顺序
  final int sortOrder;
  
  /// 是否启用此模板项
  final bool isEnabled;
  
  final DateTime createdAt;
  final DateTime updatedAt;

  ScheduleTemplate({
    String? id,
    required this.title,
    this.description,
    required this.templateType,
    required this.priority,
    this.startTime,
    this.endTime,
    this.sortOrder = 0,
    this.isEnabled = true,
    DateTime? createdAt,
    DateTime? updatedAt,
  })  : id = id ?? const Uuid().v4(),
        createdAt = createdAt ?? DateTime.now(),
        updatedAt = updatedAt ?? DateTime.now();

  /// 从数据库 Map 创建对象
  factory ScheduleTemplate.fromMap(Map<String, dynamic> map) {
    return ScheduleTemplate(
      id: map['id'] as String,
      title: map['title'] as String,
      description: map['description'] as String?,
      templateType: TemplateType.fromString(map['template_type'] as String),
      priority: SchedulePriority.fromValue(map['priority'] as int),
      startTime: map['start_time'] as String?,
      endTime: map['end_time'] as String?,
      sortOrder: map['sort_order'] as int? ?? 0,
      isEnabled: (map['is_enabled'] as int) == 1,
      createdAt: DateTime.parse(map['created_at'] as String),
      updatedAt: DateTime.parse(map['updated_at'] as String),
    );
  }

  /// 转换为数据库 Map
  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'title': title,
      'description': description,
      'template_type': templateType.value,
      'priority': priority.value,
      'start_time': startTime,
      'end_time': endTime,
      'sort_order': sortOrder,
      'is_enabled': isEnabled ? 1 : 0,
      'created_at': createdAt.toIso8601String(),
      'updated_at': updatedAt.toIso8601String(),
    };
  }

  /// 复制并修改部分字段
  ScheduleTemplate copyWith({
    String? title,
    String? description,
    TemplateType? templateType,
    SchedulePriority? priority,
    String? startTime,
    String? endTime,
    int? sortOrder,
    bool? isEnabled,
  }) {
    return ScheduleTemplate(
      id: id,
      title: title ?? this.title,
      description: description ?? this.description,
      templateType: templateType ?? this.templateType,
      priority: priority ?? this.priority,
      startTime: startTime ?? this.startTime,
      endTime: endTime ?? this.endTime,
      sortOrder: sortOrder ?? this.sortOrder,
      isEnabled: isEnabled ?? this.isEnabled,
      createdAt: createdAt,
      updatedAt: DateTime.now(),
    );
  }

  @override
  String toString() {
    return 'ScheduleTemplate(id: $id, title: $title, type: ${templateType.label})';
  }
}
