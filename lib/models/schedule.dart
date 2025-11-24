import 'package:uuid/uuid.dart';
import 'schedule_priority.dart';

/// 日程模型
class Schedule {
  final String id;
  final String title;
  final String? description;
  final DateTime date;
  final DateTime? startTime;
  final DateTime? endTime;
  final bool isCompleted;
  
  /// 日程优先级（用于覆盖逻辑）
  final SchedulePriority priority;
  
  /// 模板类型（如果是从模板生成的）
  final TemplateType templateType;
  
  /// 重复周期
  final RecurrencePattern recurrence;
  
  /// 源模板ID（如果是从模板生成的）
  final String? sourceTemplateId;
  
  /// 是否允许被模板覆盖
  final bool allowOverride;
  
  final DateTime createdAt;
  final DateTime updatedAt;

  Schedule({
    String? id,
    required this.title,
    this.description,
    required this.date,
    this.startTime,
    this.endTime,
    this.isCompleted = false,
    this.priority = SchedulePriority.daily,
    this.templateType = TemplateType.none,
    this.recurrence = RecurrencePattern.none,
    this.sourceTemplateId,
    this.allowOverride = true,
    DateTime? createdAt,
    DateTime? updatedAt,
  })  : id = id ?? const Uuid().v4(),
        createdAt = createdAt ?? DateTime.now(),
        updatedAt = updatedAt ?? DateTime.now();

  /// 从数据库 Map 创建对象
  factory Schedule.fromMap(Map<String, dynamic> map) {
    return Schedule(
      id: map['id'] as String,
      title: map['title'] as String,
      description: map['description'] as String?,
      date: DateTime.parse(map['date'] as String),
      startTime: map['start_time'] != null 
          ? DateTime.parse(map['start_time'] as String)
          : null,
      endTime: map['end_time'] != null
          ? DateTime.parse(map['end_time'] as String)
          : null,
      isCompleted: (map['is_completed'] as int) == 1,
      priority: SchedulePriority.fromValue(map['priority'] as int? ?? 1),
      templateType: TemplateType.fromString(map['template_type'] as String? ?? 'none'),
      recurrence: RecurrencePattern.fromString(map['recurrence'] as String? ?? 'none'),
      sourceTemplateId: map['source_template_id'] as String?,
      allowOverride: (map['allow_override'] as int? ?? 1) == 1,
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
      'date': date.toIso8601String(),
      'start_time': startTime?.toIso8601String(),
      'end_time': endTime?.toIso8601String(),
      'is_completed': isCompleted ? 1 : 0,
      'priority': priority.value,
      'template_type': templateType.value,
      'recurrence': recurrence.value,
      'source_template_id': sourceTemplateId,
      'allow_override': allowOverride ? 1 : 0,
      'created_at': createdAt.toIso8601String(),
      'updated_at': updatedAt.toIso8601String(),
    };
  }

  /// 复制并修改部分字段
  Schedule copyWith({
    String? title,
    String? description,
    DateTime? date,
    DateTime? startTime,
    DateTime? endTime,
    bool? isCompleted,
    SchedulePriority? priority,
    TemplateType? templateType,
    RecurrencePattern? recurrence,
    String? sourceTemplateId,
    bool? allowOverride,
  }) {
    return Schedule(
      id: id,
      title: title ?? this.title,
      description: description ?? this.description,
      date: date ?? this.date,
      startTime: startTime ?? this.startTime,
      endTime: endTime ?? this.endTime,
      isCompleted: isCompleted ?? this.isCompleted,
      priority: priority ?? this.priority,
      templateType: templateType ?? this.templateType,
      recurrence: recurrence ?? this.recurrence,
      sourceTemplateId: sourceTemplateId ?? this.sourceTemplateId,
      allowOverride: allowOverride ?? this.allowOverride,
      createdAt: createdAt,
      updatedAt: DateTime.now(),
    );
  }

  @override
  String toString() {
    return 'Schedule(id: $id, title: $title, date: $date)';
  }
}
