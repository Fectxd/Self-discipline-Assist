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

/// 工作制配置模型
class WorkScheduleConfig {
  final WorkScheduleType type;
  
  /// 大小周的周配置 Map<周起始日期, 是否为大周>
  final Map<String, BiweeklyType> biweeklySettings;

  WorkScheduleConfig({
    required this.type,
    Map<String, BiweeklyType>? biweeklySettings,
  }) : biweeklySettings = biweeklySettings ?? {};

  Map<String, dynamic> toMap() {
    return {
      'type': type.value,
      'biweekly_settings': biweeklySettings.map(
        (key, value) => MapEntry(key, value.value),
      ),
    };
  }

  factory WorkScheduleConfig.fromMap(Map<String, dynamic> map) {
    final biweeklyMap = map['biweekly_settings'] as Map<String, dynamic>?;
    
    return WorkScheduleConfig(
      type: WorkScheduleType.fromString(map['type'] as String),
      biweeklySettings: biweeklyMap?.map(
        (key, value) => MapEntry(key, BiweeklyType.fromString(value as String)),
      ) ?? {},
    );
  }

  WorkScheduleConfig copyWith({
    WorkScheduleType? type,
    Map<String, BiweeklyType>? biweeklySettings,
  }) {
    return WorkScheduleConfig(
      type: type ?? this.type,
      biweeklySettings: biweeklySettings ?? this.biweeklySettings,
    );
  }
}
