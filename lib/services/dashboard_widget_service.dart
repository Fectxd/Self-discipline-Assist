import 'package:flutter/foundation.dart';
import 'dart:convert';
import 'package:shared_preferences/shared_preferences.dart';
import '../models/dashboard_widget.dart';

/// 仪表盘小部件管理服务
class DashboardWidgetService extends ChangeNotifier {
  static const String _cacheKey = 'dashboard_widgets';

  final SharedPreferences _prefs;
  List<DashboardWidget> _widgets = [];

  List<DashboardWidget> get widgets => List.unmodifiable(_widgets);
  List<DashboardWidget> get visibleWidgets =>
      _widgets.where((w) => w.isVisible).toList()
        ..sort((a, b) => a.order.compareTo(b.order));

  DashboardWidgetService(this._prefs) {
    _loadWidgets();
  }

  /// 加载小部件配置
  void _loadWidgets() {
    try {
      final jsonStr = _prefs.getString(_cacheKey);
      if (jsonStr != null) {
        final List<dynamic> jsonList = jsonDecode(jsonStr);
        _widgets = jsonList
            .map((json) => DashboardWidget.fromJson(json))
            .toList();
        debugPrint('加载小部件配置: ${_widgets.length}个');
      } else {
        // 默认配置
        _widgets = [
          DashboardWidget(
            id: 'weather_1',
            type: WidgetType.weather,
            order: 0,
            isVisible: true,
          ),
          DashboardWidget(
            id: 'calendar_1',
            type: WidgetType.calendar,
            order: 1,
            isVisible: true,
          ),
        ];
        _saveWidgets();
      }
    } catch (e) {
      debugPrint('加载小部件配置失败: $e');
      _widgets = [];
    }
  }

  /// 保存小部件配置
  Future<void> _saveWidgets() async {
    try {
      final jsonList = _widgets.map((w) => w.toJson()).toList();
      await _prefs.setString(_cacheKey, jsonEncode(jsonList));
    } catch (e) {
      debugPrint('保存小部件配置失败: $e');
    }
  }

  /// 添加小部件（每种类型只能有一个）
  Future<void> addWidget(WidgetType type) async {
    // 检查是否已存在该类型的小部件
    final existing = _widgets.where((w) => w.type == type).toList();
    if (existing.isNotEmpty) {
      // 如果已存在，确保它可见
      if (!existing.first.isVisible) {
        await toggleVisibility(existing.first.id);
      }
      debugPrint('小部件已存在: ${type.name}');
      return;
    }

    final newId = '${type.name}_${DateTime.now().millisecondsSinceEpoch}';
    final maxOrder = _widgets.isEmpty
        ? 0
        : _widgets.map((w) => w.order).reduce((a, b) => a > b ? a : b);

    final newWidget = DashboardWidget(
      id: newId,
      type: type,
      order: maxOrder + 1,
      isVisible: true,
    );

    _widgets.add(newWidget);
    await _saveWidgets();
    notifyListeners();
  }

  /// 删除小部件
  Future<void> removeWidget(String id) async {
    _widgets.removeWhere((w) => w.id == id);
    await _saveWidgets();
    notifyListeners();
  }

  /// 切换小部件可见性
  Future<void> toggleVisibility(String id) async {
    final index = _widgets.indexWhere((w) => w.id == id);
    if (index != -1) {
      _widgets[index] = _widgets[index].copyWith(
        isVisible: !_widgets[index].isVisible,
      );
      await _saveWidgets();
      notifyListeners();
    }
  }

  /// 重新排序小部件
  Future<void> reorderWidgets(int oldIndex, int newIndex) async {
    final visibleList = visibleWidgets;
    if (oldIndex < newIndex) {
      newIndex -= 1;
    }

    final item = visibleList.removeAt(oldIndex);
    visibleList.insert(newIndex, item);

    // 更新所有可见小部件的order
    for (int i = 0; i < visibleList.length; i++) {
      final widgetId = visibleList[i].id;
      final index = _widgets.indexWhere((w) => w.id == widgetId);
      if (index != -1) {
        _widgets[index] = _widgets[index].copyWith(order: i);
      }
    }

    await _saveWidgets();
    notifyListeners();
  }
}
