import 'dart:convert';
import 'package:http/http.dart' as http;
import '../models/holiday.dart';

/// 中国节假日服务
/// 使用免费 API: https://timor.tech/api/holiday/
class HolidayService {
  static const String baseUrl = 'https://timor.tech/api/holiday';
  
  /// 缓存节假日数据，避免频繁请求
  final Map<int, List<Holiday>> _cache = {};

  /// 获取指定年份的节假日
  Future<List<Holiday>> getHolidays(int year) async {
    // 先检查缓存
    if (_cache.containsKey(year)) {
      return _cache[year]!;
    }

    try {
      final response = await http.get(
        Uri.parse('$baseUrl/year/$year'),
      );

      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        
        if (data['code'] == 0) {
          final List<Holiday> holidays = [];
          final Map<String, dynamic> holidayData = data['holiday'];

          // 解析每个月的节假日
          holidayData.forEach((key, value) {
            if (value is Map<String, dynamic>) {
              final holiday = Holiday.fromMap({
                'date': value['date'],
                'name': value['name'],
                'isOffDay': value['isOffDay'],
                'wage': value['wage']?.toString(),
                'rest': value['rest']?.toString(),
              });
              holidays.add(holiday);
            }
          });

          // 存入缓存
          _cache[year] = holidays;
          return holidays;
        }
      }

      throw Exception('获取节假日数据失败: ${response.statusCode}');
    } catch (e) {
      print('获取节假日错误: $e');
      // 返回空列表而不是抛出异常，保证程序继续运行
      return [];
    }
  }

  /// 获取指定日期的节假日信息
  Future<Holiday?> getHolidayForDate(DateTime date) async {
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

  /// 清除缓存
  void clearCache() {
    _cache.clear();
  }

  /// 清除指定年份的缓存
  void clearYearCache(int year) {
    _cache.remove(year);
  }
}
