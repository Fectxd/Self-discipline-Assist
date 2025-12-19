import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

/// 主题模式枚举
enum ThemeMode {
  system, // 跟随系统
  light, // 浅色
  dark, // 深色
}

/// 统一的应用设置服务
/// 管理所有简单的布尔/字符串设置，避免重复代码
class SettingsService extends ChangeNotifier {
  final SharedPreferences _prefs;

  // 设置键
  static const _keyShowNestedSchedules = 'show_nested_schedules';
  static const _keyThemeMode = 'theme_mode';

  // 缓存的设置值
  bool _showNestedSchedules = false;
  ThemeMode _themeMode = ThemeMode.system;

  SettingsService(this._prefs) {
    _loadSettings();
  }

  // Getters
  bool get showNestedSchedules => _showNestedSchedules;
  ThemeMode get themeMode => _themeMode;

  // 加载所有设置
  void _loadSettings() {
    _showNestedSchedules = _prefs.getBool(_keyShowNestedSchedules) ?? false;

    // 加载主题模式设置
    final themeModeString = _prefs.getString(_keyThemeMode) ?? 'system';
    _themeMode = ThemeMode.values.firstWhere(
      (mode) => mode.name == themeModeString,
      orElse: () => ThemeMode.system,
    );
  }

  // 设置方法 - 自动保存并通知
  Future<void> setShowNestedSchedules(bool value) async {
    if (_showNestedSchedules == value) return;
    _showNestedSchedules = value;
    await _prefs.setBool(_keyShowNestedSchedules, value);
    notifyListeners();
  }

  /// 设置主题模式
  Future<void> setThemeMode(ThemeMode mode) async {
    if (_themeMode == mode) return;
    _themeMode = mode;
    await _prefs.setString(_keyThemeMode, mode.name);
    notifyListeners();
  }
}
