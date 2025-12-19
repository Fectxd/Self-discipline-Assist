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

  /// 获取或设置周起始配置
  WeekStart get weekStart => _config.weekStart;

  Future<void> setWeekStart(WeekStart start) async {
    _config = _config.copyWith(weekStart: start);
    await _saveConfig();
  }

  /// 获取当前用户配置的休息日（可传入类型以获取对应类型的设置）
  List<int> getRestDays([WorkScheduleType? type]) {
    final key = (type ?? _config.type).value;
    final list = _config.restDaysMapping[key];
    if (list == null || list.isEmpty) {
      // fallback to defaults
      if (key == WorkScheduleType.singleRest.value) return [7];
      return [6, 7];
    }
    return List<int>.from(list);
  }

  /// 保存用户为某个工作制类型配置的休息日（1=周一..7=周日）
  Future<void> setRestDaysForType(WorkScheduleType type, List<int> days) async {
    final newMapping = Map<String, List<int>>.from(_config.restDaysMapping);
    newMapping[type.value] = List<int>.from(days);
    _config = _config.copyWith(restDaysMapping: newMapping);
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

  // getRestDays([type]) and setRestDaysForType already implemented above.

  /// 获取某周的大小周类型
  BiweeklyType getBiweeklyType(DateTime date) {
    final weekStart = getWeekStart(date);
    final key = _getWeekKey(weekStart);

    // 1) 如果该周有手动设置，直接使用
    if (_config.biweeklySettings.containsKey(key)) {
      return _config.biweeklySettings[key]!;
    }

    // 2) 如果存在任意手动设置，找到最近的手动设置(按周起始日最接近)
    if (_config.biweeklySettings.isNotEmpty) {
      DateTime? nearestWeekStart;
      BiweeklyType? nearestType;
      int? nearestWeekDiffAbs;

      for (final entry in _config.biweeklySettings.entries) {
        try {
          final candidate = DateTime.parse(entry.key);
          final diffWeeks = ((weekStart.difference(candidate).inDays) / 7).abs().floor();
          final diffAbs = diffWeeks;

          if (nearestWeekDiffAbs == null || diffAbs < nearestWeekDiffAbs) {
            nearestWeekDiffAbs = diffAbs;
            nearestWeekStart = candidate;
            nearestType = entry.value;
          }
        } catch (_) {
          // ignore invalid keys
        }
      }

      if (nearestWeekStart != null && nearestType != null) {
        final weeksBetween = (weekStart.difference(nearestWeekStart).inDays / 7).round();
        // 如果相距为偶数周则与锚点相同，否则取反
        final sameParity = weeksBetween % 2 == 0;
        if (sameParity) return nearestType;
        return nearestType == BiweeklyType.bigWeek ? BiweeklyType.smallWeek : BiweeklyType.bigWeek;
      }
    }

    // 3) 没有手动设置，保留原始自动判断（周六的日期偶数 -> 大周）
    final saturday = weekStart.add(const Duration(days: 5));
    return saturday.day % 2 == 0 ? BiweeklyType.bigWeek : BiweeklyType.smallWeek;
  }

  /// 获取某周是否存在手动设置的大小周类型（返回 null 表示使用自动规则）
  BiweeklyType? getManualBiweeklyType(DateTime date) {
    final weekStart = getWeekStart(date);
    final key = _getWeekKey(weekStart);
    return _config.biweeklySettings.containsKey(key) ? _config.biweeklySettings[key] : null;
  }

  /// 判断某天是否为休息日
  bool isRestDay(DateTime date) {
    final weekday = date.weekday; // 1=周一, 7=周日

    switch (_config.type) {
      case WorkScheduleType.singleRest:
        // 单休：使用用户自定义的第一个休息日（默认周日）
        final days = getRestDays(WorkScheduleType.singleRest);
        final first = days.isNotEmpty ? days.first : 7;
        return weekday == first;

      case WorkScheduleType.doubleRest:
        // 双休：使用用户自定义的前两个休息日（默认周六/周日）
        final days = getRestDays(WorkScheduleType.doubleRest);
        final two = days.length >= 2 ? days.sublist(0, 2) : days;
        return two.contains(weekday);
        
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
  DateTime getWeekStart(DateTime date) {
    final normalized = DateTime(date.year, date.month, date.day);

    if (_config.weekStart == WeekStart.sunday) {
      // week starting Sunday: subtract current weekday % 7
      final daysToSubtract = normalized.weekday % 7;
      return normalized.subtract(Duration(days: daysToSubtract));
    }

    // default: week starting Monday
    final daysToSubtract = normalized.weekday - 1;
    return normalized.subtract(Duration(days: daysToSubtract));
  }

  /// 获取周的结束日期（周日）
  DateTime getWeekEnd(DateTime date) {
    final start = getWeekStart(date);
    return start.add(const Duration(days: 6));
  }

  /// 生成周的唯一标识符
  String _getWeekKey(DateTime weekStart) {
    return '${weekStart.year}-${weekStart.month.toString().padLeft(2, '0')}-${weekStart.day.toString().padLeft(2, '0')}';
  }

  /// 获取某周的日期范围描述
  String getWeekRangeText(DateTime date) {
    final weekStart = getWeekStart(date);
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
