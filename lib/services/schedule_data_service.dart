import 'package:flutter/foundation.dart';
import 'database_service.dart';
import 'day_service.dart';
import '../models/schedule.dart';
import '../models/day_type.dart';
import '../models/holiday.dart';
import '../models/schedule_rule.dart';
import '../models/schedule_override.dart';

/// 日程数据服务 - 统一管理日程相关的所有数据和操作
/// 
/// 优势：
/// 1. 单一数据源 - 所有日程操作都通过这里
/// 2. 自动刷新 - 数据变化自动通知 UI
/// 3. 缓存管理 - 减少数据库查询
/// 4. 业务封装 - UI 不需要关心数据库细节
class ScheduleDataService extends ChangeNotifier {
  final DatabaseService _dbService;
  final DayService _dayService;

  ScheduleDataService(this._dbService, this._dayService);

  // ========== 当前日期的数据 ==========
  DateTime? _currentDate;
  List<Schedule> _schedules = [];
  List<Schedule> _prevSchedules = [];
  List<Schedule> _nextSchedules = [];
  DayType? _dayType;
  Holiday? _holiday;
  Map<String, ScheduleRule> _rulesCache = {};
  List<ScheduleOverride> _overridesCache = [];

  // ========== Getters ==========
  DateTime? get currentDate => _currentDate;
  List<Schedule> get schedules => _schedules;
  List<Schedule> get prevSchedules => _prevSchedules;
  List<Schedule> get nextSchedules => _nextSchedules;
  DayType? get dayType => _dayType;
  Holiday? get holiday => _holiday;
  Map<String, ScheduleRule> get rulesCache => _rulesCache;
  List<ScheduleOverride> get overridesCache => _overridesCache;

  bool get hasData => _currentDate != null;
  bool get isEmpty => _schedules.isEmpty;

  /// 加载指定日期的完整数据（日程+上下文）
  Future<void> loadDate(DateTime date) async {
    _currentDate = date;

    // 并行加载所有数据
    await Future.wait<void>([
      _loadSchedules(date),
      _loadRulesCache(),
      _loadOverridesCache(),
    ]);

    notifyListeners();
  }

  Future<void> _loadSchedules(DateTime date) async {
    _schedules = await _dbService.getSchedulesByDate(date);
    _prevSchedules = await _dbService.getSchedulesByDate(_prevDay(date));
    _nextSchedules = await _dbService.getSchedulesByDate(_nextDay(date));
    _dayType = await _dayService.getDayType(date);
    _holiday = await _dayService.getHoliday(date);
  }

  Future<void> _loadRulesCache() async {
    final db = await _dbService.database;
    final ruleMaps = await db.query('schedule_rules');
    final cache = <String, ScheduleRule>{};
    for (var map in ruleMaps) {
      final rule = ScheduleRule.fromMap(map);
      cache[rule.id] = rule;
    }
    _rulesCache = cache;
  }

  Future<void> _loadOverridesCache() async {
    final db = await _dbService.database;
    final overrideMaps = await db.query('schedule_overrides');
    _overridesCache = overrideMaps.map((m) => ScheduleOverride.fromMap(m)).toList();
  }

  DateTime _prevDay(DateTime date) =>
      DateTime(date.year, date.month, date.day).subtract(const Duration(days: 1));

  DateTime _nextDay(DateTime date) =>
      DateTime(date.year, date.month, date.day).add(const Duration(days: 1));

  /// 添加日程（自动刷新）
  Future<void> addSchedule(Schedule schedule) async {
    await _dbService.insertSchedule(schedule);
    if (_shouldRefresh(schedule.date)) {
      await loadDate(_currentDate!);
    }
  }

  /// 更新日程（自动刷新）
  Future<void> updateSchedule(Schedule schedule) async {
    await _dbService.updateSchedule(schedule);
    if (_shouldRefresh(schedule.date)) {
      await loadDate(_currentDate!);
    }
  }

  /// 删除日程（自动刷新）
  Future<void> deleteSchedule(String id, DateTime date) async {
    await _dbService.deleteSchedule(id);
    if (_shouldRefresh(date)) {
      await loadDate(_currentDate!);
    }
  }

  /// 批量删除日程（自动刷新）
  Future<void> deleteSchedules(List<String> ids, DateTime date) async {
    final db = await _dbService.database;
    await db.transaction((txn) async {
      for (final id in ids) {
        await txn.delete('schedules', where: 'id = ?', whereArgs: [id]);
      }
    });
    if (_shouldRefresh(date)) {
      await loadDate(_currentDate!);
    }
  }

  /// 手动刷新当前日期
  Future<void> refresh() async {
    if (_currentDate != null) {
      await loadDate(_currentDate!);
    }
  }

  /// 切换到指定日期
  Future<void> switchToDate(DateTime date) async {
    if (!_isSameDay(date, _currentDate)) {
      await loadDate(date);
    }
  }

  /// 切换到今天
  Future<void> switchToToday() async {
    await switchToDate(DateTime.now());
  }

  /// 判断是否需要刷新当前显示
  bool _shouldRefresh(DateTime scheduleDate) {
    return _currentDate != null && _isSameDay(scheduleDate, _currentDate!);
  }

  /// 判断两个日期是否是同一天
  bool _isSameDay(DateTime? a, DateTime? b) {
    if (a == null || b == null) return false;
    return a.year == b.year && a.month == b.month && a.day == b.day;
  }

  /// 清空数据
  void clear() {
    _currentDate = null;
    _schedules = [];
    _prevSchedules = [];
    _nextSchedules = [];
    _dayType = null;
    _holiday = null;
    _rulesCache = {};
    _overridesCache = [];
    notifyListeners();
  }
}
