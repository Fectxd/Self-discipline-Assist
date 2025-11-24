import 'package:flutter/foundation.dart';
import '../models/day_type.dart';
import '../models/holiday.dart';
import 'database_service.dart';
import 'holiday_service.dart';
import 'work_schedule_service.dart';

/// 日期管理服务
/// 整合节假日API、工作制和用户手动覆盖，提供统一的日期类型查询
class DayService extends ChangeNotifier {
  final DatabaseService _dbService;
  final HolidayService _holidayService;
  final WorkScheduleService _workScheduleService;

  DayService(this._dbService, this._holidayService, this._workScheduleService);

  /// 缓存的覆盖配置
  Map<String, DayOverride> _overrides = {};

  /// 初始化，加载用户覆盖配置
  Future<void> init() async {
    await _loadOverrides();
  }

  /// 加载所有用户覆盖配置
  Future<void> _loadOverrides() async {
    final overrides = await _dbService.getAllDayOverrides();
    _overrides = {for (var o in overrides) o.id: o};
    notifyListeners();
  }

  /// 获取指定日期的类型
  /// 优先级：用户手动覆盖（休假/加班）> 节假日API > 工作制设置 > 默认判断
  Future<DayType> getDayType(DateTime date) async {
    // 规范化日期（去除时分秒）
    final normalizedDate = DateTime(date.year, date.month, date.day);
    final dateId = '${date.year}-${date.month}-${date.day}';

    // 1. 最高优先级：用户手动覆盖（休假或加班）
    if (_overrides.containsKey(dateId)) {
      return _overrides[dateId]!.dayType;
    }

    // 2. 检查节假日API
    final holiday = await _holidayService.getHolidayForDate(normalizedDate);
    if (holiday != null) {
      if (holiday.isWorkday) {
        return DayType.workday; // 调休需要上班
      } else {
        return DayType.holiday; // 节假日
      }
    }

    // 3. 根据工作制判断
    final isRestDay = _workScheduleService.isRestDay(normalizedDate);
    if (isRestDay) {
      return DayType.weekend;
    }

    return DayType.workday;
  }

  /// 批量获取日期类型（用于日历显示）
  Future<Map<DateTime, DayType>> getDayTypes(List<DateTime> dates) async {
    final Map<DateTime, DayType> result = {};
    
    for (final date in dates) {
      result[date] = await getDayType(date);
    }
    
    return result;
  }

  /// 设置用户手动覆盖
  Future<void> setDayOverride(DateTime date, DayType dayType, {String? note}) async {
    final normalizedDate = DateTime(date.year, date.month, date.day);
    final override = DayOverride(
      date: normalizedDate,
      dayType: dayType,
      note: note,
    );

    await _dbService.upsertDayOverride(override);
    _overrides[override.id] = override;
    notifyListeners();
  }

  /// 删除用户手动覆盖
  Future<void> removeDayOverride(DateTime date) async {
    final dateId = '${date.year}-${date.month}-${date.day}';
    
    if (_overrides.containsKey(dateId)) {
      await _dbService.deleteDayOverride(dateId);
      _overrides.remove(dateId);
      notifyListeners();
    }
  }

  /// 获取用户手动覆盖配置
  DayOverride? getDayOverride(DateTime date) {
    final dateId = '${date.year}-${date.month}-${date.day}';
    return _overrides[dateId];
  }

  /// 预加载指定年份的节假日数据
  Future<void> preloadHolidays(int year) async {
    final holidays = await _holidayService.getHolidays(year);
    await _dbService.insertHolidays(holidays);
  }

  /// 获取节假日信息
  Future<Holiday?> getHoliday(DateTime date) async {
    return await _holidayService.getHolidayForDate(date);
  }
}
