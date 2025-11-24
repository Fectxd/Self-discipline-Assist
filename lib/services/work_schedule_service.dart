import 'package:shared_preferences/shared_preferences.dart';
import 'dart:convert';
import '../models/work_schedule.dart';
import '../models/day_type.dart';

/// 工作制管理服务
class WorkScheduleService {
  static const String _keyWorkSchedule = 'work_schedule_config';
  
  WorkScheduleConfig _config = WorkScheduleConfig(type: WorkScheduleType.doubleRest);

  /// 初始化
  Future<void> init() async {
    await _loadConfig();
  }

  /// 加载配置
  Future<void> _loadConfig() async {
    final prefs = await SharedPreferences.getInstance();
    final jsonStr = prefs.getString(_keyWorkSchedule);
    
    if (jsonStr != null) {
      try {
        final map = jsonDecode(jsonStr) as Map<String, dynamic>;
        _config = WorkScheduleConfig.fromMap(map);
      } catch (e) {
        // 解析失败，使用默认配置
        _config = WorkScheduleConfig(type: WorkScheduleType.doubleRest);
      }
    }
  }

  /// 保存配置
  Future<void> _saveConfig() async {
    final prefs = await SharedPreferences.getInstance();
    final jsonStr = jsonEncode(_config.toMap());
    await prefs.setString(_keyWorkSchedule, jsonStr);
  }

  /// 获取当前工作制类型
  WorkScheduleType get currentType => _config.type;

  /// 设置工作制类型
  Future<void> setWorkScheduleType(WorkScheduleType type) async {
    _config = _config.copyWith(type: type);
    await _saveConfig();
  }

  /// 设置某周为大周或小周
  Future<void> setBiweeklyType(DateTime weekStart, BiweeklyType type) async {
    final key = _getWeekKey(weekStart);
    final newSettings = Map<String, BiweeklyType>.from(_config.biweeklySettings);
    newSettings[key] = type;
    
    _config = _config.copyWith(biweeklySettings: newSettings);
    await _saveConfig();
  }

  /// 获取某周的大小周类型
  BiweeklyType getBiweeklyType(DateTime date) {
    final weekStart = _getWeekStart(date);
    final key = _getWeekKey(weekStart);
    
    // 如果有手动设置，使用手动设置
    if (_config.biweeklySettings.containsKey(key)) {
      return _config.biweeklySettings[key]!;
    }
    
    // 否则根据周数自动判断（周六的日期是偶数为大周）
    final saturday = weekStart.add(const Duration(days: 5));
    return saturday.day % 2 == 0 ? BiweeklyType.bigWeek : BiweeklyType.smallWeek;
  }

  /// 判断某天是否为休息日
  bool isRestDay(DateTime date) {
    final weekday = date.weekday; // 1=周一, 7=周日

    switch (_config.type) {
      case WorkScheduleType.singleRest:
        // 单休：只有周日休息
        return weekday == 7;
        
      case WorkScheduleType.doubleRest:
        // 双休：周六周日休息
        return weekday == 6 || weekday == 7;
        
      case WorkScheduleType.biweekly:
        // 大小周：根据设置决定
        final biweeklyType = getBiweeklyType(date);
        if (biweeklyType == BiweeklyType.bigWeek) {
          // 大周：周六周日都休息
          return weekday == 6 || weekday == 7;
        } else {
          // 小周：只有周日休息
          return weekday == 7;
        }
    }
  }

  /// 根据工作制判断日期类型
  DayType getDayType(DateTime date) {
    return isRestDay(date) ? DayType.weekend : DayType.workday;
  }

  /// 获取周的起始日期（周一）
  DateTime _getWeekStart(DateTime date) {
    final weekday = date.weekday;
    return DateTime(date.year, date.month, date.day).subtract(
      Duration(days: weekday - 1),
    );
  }

  /// 获取周的结束日期（周日）
  DateTime getWeekEnd(DateTime date) {
    final weekday = date.weekday;
    return DateTime(date.year, date.month, date.day).add(
      Duration(days: 7 - weekday),
    );
  }

  /// 生成周的唯一标识符
  String _getWeekKey(DateTime weekStart) {
    return '${weekStart.year}-${weekStart.month.toString().padLeft(2, '0')}-${weekStart.day.toString().padLeft(2, '0')}';
  }

  /// 获取某周的日期范围描述
  String getWeekRangeText(DateTime date) {
    final weekStart = _getWeekStart(date);
    final weekEnd = getWeekEnd(date);
    
    return '${weekStart.month}月${weekStart.day}日 - ${weekEnd.month}月${weekEnd.day}日';
  }

  /// 清除某周的手动设置
  Future<void> clearBiweeklySetting(DateTime weekStart) async {
    final key = _getWeekKey(weekStart);
    final newSettings = Map<String, BiweeklyType>.from(_config.biweeklySettings);
    newSettings.remove(key);
    
    _config = _config.copyWith(biweeklySettings: newSettings);
    await _saveConfig();
  }
}
