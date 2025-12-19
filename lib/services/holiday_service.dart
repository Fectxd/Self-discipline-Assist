import 'dart:convert';
import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';
import '../models/holiday.dart';
import '../utils/http_retry.dart';

/// 中国节假日服务
/// 使用免费 API: https://timor.tech/api/holiday/
class HolidayService {
  static const String baseUrl = 'https://timor.tech/api/holiday';
  static const String _cacheKeyPrefix = 'holiday_cache_';
  static const String _cacheDateKey = 'holiday_cache_date';

  /// 内存缓存节假日数据
  final Map<int, List<Holiday>> _cache = {};
  String? _cacheDate;

  /// 获取指定年份的节假日（优先返回缓存，后台异步更新）
  Future<List<Holiday>> getHolidays(int year, {bool forceRefresh = false}) async {
    final today = DateTime.now();
    final todayStr = '${today.year}-${today.month.toString().padLeft(2, '0')}-${today.day.toString().padLeft(2, '0')}';

    // 检查内存缓存
    if (!forceRefresh && _cache.containsKey(year) && _cacheDate == todayStr) {
      debugPrint('使用内存缓存的节假日数据: $year年');
      return _cache[year]!;
    }

    // 尝试从持久化缓存加载
    final prefs = await SharedPreferences.getInstance();
    final cacheKey = '$_cacheKeyPrefix$year';
    final cachedDate = prefs.getString(_cacheDateKey);
    final cachedData = prefs.getString(cacheKey);

    List<Holiday>? cachedHolidays;
    if (!forceRefresh && cachedDate == todayStr && cachedData != null) {
      try {
        final List<dynamic> jsonList = jsonDecode(cachedData);
        cachedHolidays = jsonList.map((json) => Holiday.fromMap(json as Map<String, dynamic>)).toList();
        _cache[year] = cachedHolidays;
        _cacheDate = todayStr;
        debugPrint('使用持久化缓存的节假日数据: $year年, 共${cachedHolidays.length}个');
      } catch (e) {
        debugPrint('解析缓存节假日数据失败: $e');
      }
    }

    // 如果有缓存，后台异步更新；如果没有缓存，等待获取
    if (cachedDate != todayStr || forceRefresh) {
      if (cachedHolidays != null && cachedHolidays.isNotEmpty) {
        // 有缓存，后台异步更新
        _fetchAndCacheHolidays(year, todayStr).then((holidays) {
          if (holidays != null) {
            _cache[year] = holidays;
            _cacheDate = todayStr;
          }
        });
      } else {
        // 没有缓存，同步等待获取
        final newHolidays = await _fetchAndCacheHolidays(year, todayStr);
        if (newHolidays != null) {
          _cache[year] = newHolidays;
          _cacheDate = todayStr;
          return newHolidays;
        }
      }
    }

    // 返回缓存数据
    return cachedHolidays ?? [];
  }

  /// 获取并缓存节假日数据
  Future<List<Holiday>?> _fetchAndCacheHolidays(int year, String dateStr) async {
    try {
      debugPrint('开始请求节假日API: $year年 - $baseUrl/year/$year');
      final startTime = DateTime.now();
      
      final response = await httpGet(
        Uri.parse('$baseUrl/year/$year'),
        timeout: const Duration(seconds: 20), // 延长超时到20秒
      ).timeout(
        const Duration(seconds: 20),
        onTimeout: () {
          debugPrint('❌ 请求超时: $year年');
          throw Exception('请求超时');
        },
      );

      final duration = DateTime.now().difference(startTime);
      debugPrint('API响应耗时: ${duration.inMilliseconds}ms, 状态码: ${response.statusCode}');

      if (response.statusCode == 200) {
        final data = json.decode(response.body);

        if (data['code'] == 0) {
          final List<Holiday> holidays = [];
          final Map<String, dynamic> holidayData = data['holiday'];

          // 解析每个月的节假日
          holidayData.forEach((key, value) {
            if (value is Map<String, dynamic>) {
              try {
                final holiday = Holiday.fromApiResponse(value);
                holidays.add(holiday);
              } catch (e) {
                debugPrint('解析节假日数据失败: $key - $e');
              }
            }
          });

          // 保存到持久化缓存
          final prefs = await SharedPreferences.getInstance();
          final cacheKey = '$_cacheKeyPrefix$year';
          final jsonList = holidays.map((h) => h.toMap()).toList();
          await prefs.setString(cacheKey, jsonEncode(jsonList));
          await prefs.setString(_cacheDateKey, dateStr);

          debugPrint('✅ 节假日数据已缓存: $year年, 共${holidays.length}个');
          return holidays;
        } else {
          debugPrint('❌ API返回错误码: ${data['code']}');
        }
      } else {
        debugPrint('❌ HTTP错误: ${response.statusCode}');
      }
    } catch (e) {
      debugPrint('❌ 获取节假日异常: $e');
    }

    return null;
  }

  /// 获取指定日期的节假日信息
  Future<Holiday?> getHolidayForDate(DateTime date) async {
    final today = DateTime.now();
    final todayStr = '${today.year}-${today.month.toString().padLeft(2, '0')}-${today.day.toString().padLeft(2, '0')}';

    // 优先从内存缓存读取（避免重复打印日志）
    if (_cache.containsKey(date.year) && _cacheDate == todayStr) {
      final holidays = _cache[date.year]!;
      try {
        return holidays.firstWhere(
          (h) => h.date.year == date.year &&
                 h.date.month == date.month &&
                 h.date.day == date.day,
        );
      } catch (e) {
        return null;
      }
    }

    // 缓存未命中，通过getHolidays获取
    final holidays = await getHolidays(date.year);
    try {
      return holidays.firstWhere(
        (h) => h.date.year == date.year &&
               h.date.month == date.month &&
               h.date.day == date.day,
      );
    } catch (e) {
      return null;
    }
  }

  /// 判断指定日期是否为节假日（不需要上班）
  Future<bool> isHoliday(DateTime date) async {
    final holiday = await getHolidayForDate(date);
    return holiday != null && !holiday.isWorkday;
  }

  /// 判断指定日期是否为调休工作日
  Future<bool> isWorkdayAdjusted(DateTime date) async {
    final holiday = await getHolidayForDate(date);
    return holiday != null && holiday.isWorkday;
  }

  /// 获取缓存的节假日信息（供AI调用）
  Future<List<Holiday>?> getCachedHolidays(int year) async {
    final today = DateTime.now();
    final todayStr = '${today.year}-${today.month.toString().padLeft(2, '0')}-${today.day.toString().padLeft(2, '0')}';

    // 优先从内存缓存读取
    if (_cache.containsKey(year) && _cacheDate == todayStr) {
      return _cache[year];
    }

    // 从持久化缓存读取
    final prefs = await SharedPreferences.getInstance();
    final cacheKey = '$_cacheKeyPrefix$year';
    final cachedDate = prefs.getString(_cacheDateKey);
    final cachedData = prefs.getString(cacheKey);

    if (cachedDate == todayStr && cachedData != null) {
      try {
        final List<dynamic> jsonList = jsonDecode(cachedData);
        return jsonList.map((json) => Holiday.fromMap(json as Map<String, dynamic>)).toList();
      } catch (e) {
        debugPrint('解析缓存节假日数据失败: $e');
      }
    }

    // 没有今天的缓存，返回null触发实时获取
    return null;
  }

  /// 清除缓存
  Future<void> clearCache() async {
    _cache.clear();
    _cacheDate = null;

    final prefs = await SharedPreferences.getInstance();
    final keys = prefs.getKeys().where((k) => k.startsWith(_cacheKeyPrefix));
    for (final key in keys) {
      await prefs.remove(key);
    }
    await prefs.remove(_cacheDateKey);
  }

  /// 清除指定年份的缓存
  Future<void> clearYearCache(int year) async {
    _cache.remove(year);

    final prefs = await SharedPreferences.getInstance();
    final cacheKey = '$_cacheKeyPrefix$year';
    await prefs.remove(cacheKey);
  }

  /// 检查指定年份是否已有缓存
  Future<bool> hasYearCached(int year) async {
    final today = DateTime.now();
    final todayStr = '${today.year}-${today.month.toString().padLeft(2, '0')}-${today.day.toString().padLeft(2, '0')}';

    // 检查内存缓存
    if (_cache.containsKey(year) && _cacheDate == todayStr) {
      return true;
    }

    // 检查持久化缓存
    final prefs = await SharedPreferences.getInstance();
    final cacheKey = '$_cacheKeyPrefix$year';
    final cachedDate = prefs.getString(_cacheDateKey);
    final cachedData = prefs.getString(cacheKey);

    return cachedDate == todayStr && cachedData != null && cachedData.isNotEmpty;
  }

  /// 确保指定年份已缓存（如果没有则获取）
  Future<void> ensureYearCached(int year) async {
    final isCached = await hasYearCached(year);
    if (!isCached) {
      debugPrint('🔄 检测到未缓存的年份: $year，开始获取节假日数据...');
      try {
        await getHolidays(year, forceRefresh: true);
        debugPrint('✅ 成功缓存 $year 年节假日');
      } catch (e) {
        debugPrint('❌ 获取 $year 年节假日失败: $e');
      }
    } else {
      debugPrint('✓ 年份 $year 已缓存，跳过获取');
    }
  }
}
