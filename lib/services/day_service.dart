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

  /// 月度视图缓存（用于日历页面）
  Map<DateTime, DayType>? _monthDayTypes;
  Map<DateTime, Holiday>? _monthHolidays;
  DateTime? _cachedMonthDate; // 缓存的月份

  /// 初始化，加载用户覆盖配置
  Future<void> init() async {
    await _loadOverrides();
  }

  /// 加载月度视图数据（日历页面专用）
  Future<void> loadMonthView(DateTime monthDate) async {
    final normalizedMonth = DateTime(monthDate.year, monthDate.month, 1);
    
    // 如果已缓存当前月份，直接返回
    if (_cachedMonthDate != null && 
        _cachedMonthDate!.year == normalizedMonth.year && 
        _cachedMonthDate!.month == normalizedMonth.month) {
      debugPrint('使用缓存的月度数据: ${monthDate.year}-${monthDate.month}');
      return;
    }

    debugPrint('加载月度数据: ${monthDate.year}-${monthDate.month}');

    // 获取当月的所有日期
    final lastDay = DateTime(monthDate.year, monthDate.month + 1, 0);
    final dates = <DateTime>[];
    for (var i = 0; i < lastDay.day; i++) {
      dates.add(DateTime(monthDate.year, monthDate.month, i + 1));
    }

    // 并行加载日期类型和节假日
    final results = await Future.wait([
      getDayTypes(dates),
      _holidayService.getHolidays(monthDate.year),
    ]);

    final dayTypes = results[0] as Map<DateTime, DayType>;
    final holidays = results[1] as List<Holiday>;
    
    // 构建节假日Map
    final holidayMap = <DateTime, Holiday>{};
    for (final holiday in holidays) {
      final normalized = DateTime(holiday.date.year, holiday.date.month, holiday.date.day);
      holidayMap[normalized] = holiday;
    }

    _monthDayTypes = dayTypes;
    _monthHolidays = holidayMap;
    _cachedMonthDate = normalizedMonth;
    
    notifyListeners();
  }

  /// 获取缓存的月度日期类型
  Map<DateTime, DayType> get monthDayTypes => _monthDayTypes ?? {};
  
  /// 获取缓存的月度节假日
  Map<DateTime, Holiday> get monthHolidays => _monthHolidays ?? {};

  /// 加载所有用户覆盖配置
  Future<void> _loadOverrides() async {
    final overrides = await _dbService.getAllDayOverrides();
    _overrides = {for (var o in overrides) o.id: o};
    notifyListeners();
  }

  /// 刷新月度视图（用户修改覆盖后调用）
  Future<void> refreshMonthView() async {
    if (_cachedMonthDate != null) {
      final oldCache = _cachedMonthDate;
      _cachedMonthDate = null; // 清空缓存
      await loadMonthView(oldCache!); // 重新加载
    }
  }

  /// 获取指定日期的类型
  /// 优先级：用户手动覆盖（休假/加班）> 节假日API > 工作制设置 > 默认判断
  Future<DayType> getDayType(DateTime date) async {
    // 规范化日期（去除时分秒）
    final normalizedDate = DateTime(date.year, date.month, date.day);
    final dateId = '${normalizedDate.year}-${normalizedDate.month}-${normalizedDate.day}';

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
    
    // 刷新月度视图缓存
    await refreshMonthView();
  }

  /// 删除用户手动覆盖
  Future<void> removeDayOverride(DateTime date) async {
    final normalizedDate = DateTime(date.year, date.month, date.day);
    final dateId = '${normalizedDate.year}-${normalizedDate.month}-${normalizedDate.day}';
    
    if (_overrides.containsKey(dateId)) {
      await _dbService.deleteDayOverride(dateId);
      _overrides.remove(dateId);
      
      // 刷新月度视图缓存
      await refreshMonthView();
    }
  }

  /// 获取用户手动覆盖配置
  DayOverride? getDayOverride(DateTime date) {
    final normalizedDate = DateTime(date.year, date.month, date.day);
    final dateId = '${normalizedDate.year}-${normalizedDate.month}-${normalizedDate.day}';
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
