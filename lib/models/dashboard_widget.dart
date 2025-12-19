/// 仪表盘小部件类型
enum WidgetType {
  weather,   // 天气小部件
  calendar,  // 日历小部件
}

/// 仪表盘小部件配置
class DashboardWidget {
  final String id;
  final WidgetType type;
  final int order;
  final bool isVisible;

  DashboardWidget({
    required this.id,
    required this.type,
    required this.order,
    this.isVisible = true,
  });

  DashboardWidget copyWith({
    String? id,
    WidgetType? type,
    int? order,
    bool? isVisible,
  }) {
    return DashboardWidget(
      id: id ?? this.id,
      type: type ?? this.type,
      order: order ?? this.order,
      isVisible: isVisible ?? this.isVisible,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'type': type.name,
      'order': order,
      'isVisible': isVisible,
    };
  }

  factory DashboardWidget.fromJson(Map<String, dynamic> json) {
    return DashboardWidget(
      id: json['id'] as String,
      type: WidgetType.values.firstWhere(
        (e) => e.name == json['type'],
        orElse: () => WidgetType.weather,
      ),
      order: json['order'] as int,
      isVisible: json['isVisible'] as bool? ?? true,
    );
  }
}
