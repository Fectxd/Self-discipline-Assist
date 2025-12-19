/// 工作制类型枚举
enum WorkScheduleType {
  /// 单休（周日休息）
  singleRest('single_rest', '单休'),
  
  /// 双休（周六周日休息）
  doubleRest('double_rest', '双休'),
  
  /// 大小周（大周2休，小周1休）
  biweekly('biweekly', '大小周');

  final String value;
  final String label;

  const WorkScheduleType(this.value, this.label);

  static WorkScheduleType fromString(String value) {
    return WorkScheduleType.values.firstWhere(
      (t) => t.value == value,
      orElse: () => WorkScheduleType.doubleRest,
    );
  }
}

/// 大小周类型
enum BiweeklyType {
  /// 大周（2天休息）
  bigWeek('big', '大周'),
  
  /// 小周（1天休息）
  smallWeek('small', '小周');

  final String value;
  final String label;

  const BiweeklyType(this.value, this.label);

  static BiweeklyType fromString(String value) {
    return BiweeklyType.values.firstWhere(
      (t) => t.value == value,
      orElse: () => BiweeklyType.bigWeek,
    );
  }
}

/// 一周的起始日配置（用于日历显示）
enum WeekStart {
  sunday('sunday', '周日'),
  monday('monday', '周一');

  final String value;
  final String label;
  const WeekStart(this.value, this.label);

  static WeekStart fromString(String value) {
    return WeekStart.values.firstWhere((w) => w.value == value, orElse: () => WeekStart.monday);
  }
}

/// 工作制配置模型
class WorkScheduleConfig {
  final WorkScheduleType type;
  
  /// 大小周的周配置 Map<周起始日期, 是否为大周>
  final Map<String, BiweeklyType> biweeklySettings;

  final WeekStart weekStart;
  /// 用户为单休/双休自定义的休息日配置
  /// key: WorkScheduleType.value -> list of weekdays (1=Mon..7=Sun)
  final Map<String, List<int>> restDaysMapping;

  WorkScheduleConfig({
    required this.type,
    Map<String, BiweeklyType>? biweeklySettings,
    WeekStart? weekStart,
    Map<String, List<int>>? restDaysMapping,
  })  : biweeklySettings = biweeklySettings ?? {},
        weekStart = weekStart ?? WeekStart.monday,
        restDaysMapping = restDaysMapping ?? {
          WorkScheduleType.singleRest.value: [7],
          WorkScheduleType.doubleRest.value: [6, 7],
        };

  Map<String, dynamic> toMap() {
    return {
      'type': type.value,
      'biweekly_settings': biweeklySettings.map(
        (key, value) => MapEntry(key, value.value),
      ),
      'week_start': weekStart.value,
      'rest_days': restDaysMapping,
    };
  }

  factory WorkScheduleConfig.fromMap(Map<String, dynamic> map) {
    final biweeklyMap = map['biweekly_settings'] as Map<String, dynamic>?;
    
    return WorkScheduleConfig(
      type: WorkScheduleType.fromString(map['type'] as String),
      biweeklySettings: biweeklyMap?.map(
        (key, value) => MapEntry(key, BiweeklyType.fromString(value as String)),
      ) ?? {},
      weekStart: map['week_start'] != null ? WeekStart.fromString(map['week_start'] as String) : null,
      restDaysMapping: (map['rest_days'] as Map<String, dynamic>?)?.map((k, v) => MapEntry(k, (v as List).map((e) => e as int).toList())),
    );
  }

  WorkScheduleConfig copyWith({
    WorkScheduleType? type,
    Map<String, BiweeklyType>? biweeklySettings,
    WeekStart? weekStart,
    Map<String, List<int>>? restDaysMapping,
  }) {
    return WorkScheduleConfig(
      type: type ?? this.type,
      biweeklySettings: biweeklySettings ?? this.biweeklySettings,
      weekStart: weekStart ?? this.weekStart,
      restDaysMapping: restDaysMapping ?? this.restDaysMapping,
    );
  }
}
