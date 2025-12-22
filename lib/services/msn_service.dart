import 'package:flutter/foundation.dart';
import 'dart:convert';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:http/http.dart' as http;

/// MSN数据服务 - 天气、日历等综合数据
/// 使用MSN API获取天气和日历信息
class MsnService extends ChangeNotifier {
  static const String _cacheKeyWeather = 'msn_cache_weather';
  static const String _cacheKeyCalendar = 'msn_cache_calendar';
  static const String _cacheKeyHourly = 'msn_cache_hourly';
  static const String _cacheKeyTimestamp = 'msn_cache_timestamp';
  static const Duration _cacheExpiration = Duration(minutes: 15);

  Map<String, dynamic>? _weatherData;
  Map<String, dynamic>? _calendarData;
  DateTime? _lastUpdateTime;
  bool _isLoading = false;

  Map<String, dynamic>? get weatherData => _weatherData;
  Map<String, dynamic>? get calendarData => _calendarData;
  bool get isLoading => _isLoading;
  DateTime? get lastUpdateTime => _lastUpdateTime;

  /// 预加载缓存数据
  Future<void> preloadCache() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final timestampStr = prefs.getString(_cacheKeyTimestamp);

      if (timestampStr != null) {
        final timestamp = DateTime.parse(timestampStr);
        final now = DateTime.now();

        // 检查缓存是否过期
        if (now.difference(timestamp) < _cacheExpiration) {
          final weatherJson = prefs.getString(_cacheKeyWeather);
          final calendarJson = prefs.getString(_cacheKeyCalendar);

          if (weatherJson != null && calendarJson != null) {
            _weatherData = jsonDecode(weatherJson);
            _calendarData = jsonDecode(calendarJson);
            _lastUpdateTime = timestamp;
            debugPrint(
              '✓ MSN数据从缓存加载成功 (${now.difference(timestamp).inMinutes}分钟前)',
            );
            notifyListeners();
            return;
          }
        } else {
          debugPrint('MSN缓存已过期，将在后台刷新');
        }
      }
    } catch (e) {
      debugPrint('预加载MSN缓存失败: $e');
    }
  }

  /// 获取MSN数据（智能缓存）
  /// [forceRefresh] 强制刷新数据
  Future<bool> fetchData({bool forceRefresh = false}) async {
    // 如果有有效缓存且非强制刷新，直接返回
    if (!forceRefresh && _weatherData != null && _calendarData != null) {
      final now = DateTime.now();
      if (_lastUpdateTime != null &&
          now.difference(_lastUpdateTime!) < _cacheExpiration) {
        debugPrint(
          '使用MSN内存缓存 (${now.difference(_lastUpdateTime!).inMinutes}分钟前)',
        );
        return true;
      }
    }

    if (_isLoading) {
      debugPrint('MSN数据正在加载中，跳过重复请求');
      return false;
    }

    _isLoading = true;
    notifyListeners();

    try {
      final data = await _fetchFromMsnApi();
      if (data != null) {
        _weatherData = data['weather'];
        _calendarData = data['calendar'];

        // 同步获取hourly数据
        final coordinates = _weatherData?['location']?['coordinates'];
        if (coordinates != null) {
          final hourlyData = await _fetchHourlyWeather(
            coordinates['lat'],
            coordinates['lon'],
          );
          if (hourlyData != null) {
            _weatherData!['hourly'] = hourlyData;
          }
        }

        _lastUpdateTime = DateTime.now();

        // 保存到持久化缓存
        await _saveCache();

        debugPrint('✓ MSN数据获取成功');
        _isLoading = false;
        notifyListeners();
        return true;
      }
    } catch (e) {
      debugPrint('获取MSN数据失败: $e');
    }

    _isLoading = false;
    notifyListeners();
    return false;
  }

  /// 从MSN API获取数据
  Future<Map<String, dynamic>?> _fetchFromMsnApi() async {
    const String apiKey = '0QfOX3Vn51YCzitbLaRkTTBadtWpgTN8NZLW0C1SEM';
    const String feedApiUrl =
        'https://assets.msn.cn/service/news/feed/pages/weblayout';

    // 生成随机Activity ID
    String generateActivityId() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replaceAllMapped(
        RegExp(r'[xy]'),
        (match) {
          final r = (DateTime.now().microsecondsSinceEpoch % 16);
          final v = match.group(0) == 'x' ? r : (r & 0x3 | 0x8);
          return v.toRadixString(16);
        },
      );
    }

    final params = {
      'User': 'm-13A1CAFD74C4677709ACDC3875B96665',
      'activityId': generateActivityId(),
      'apikey': apiKey,
      'audienceMode': 'adult',
      'cm': 'zh-cn',
      'it': 'edgeid',
      'ocid': 'hponeservicefeed',
      'column': 'c2',
      'colwidth': '300',
      'contentType': 'article,video,slideshow,webcontent',
      'newsTop': '48',
      'newsSkip': '0',
    };

    final uri = Uri.parse(feedApiUrl).replace(queryParameters: params);

    try {
      debugPrint('🌐 请求MSN API...');
      final response = await http
          .get(
            uri,
            headers: {
              'User-Agent':
                  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            },
          )
          .timeout(const Duration(seconds: 15));

      if (response.statusCode != 200) {
        debugPrint('MSN API请求失败: ${response.statusCode}');
        return null;
      }

      final feedData = jsonDecode(utf8.decode(response.bodyBytes));

      // 提取天气和日历数据
      final weather = _extractWeatherData(feedData);
      final calendar = _extractCalendarData(feedData);

      if (weather != null || calendar != null) {
        return {'weather': weather, 'calendar': calendar};
      }

      return null;
    } catch (e) {
      debugPrint('MSN API请求异常: $e');
      return null;
    }
  }

  /// 提取天气数据
  Map<String, dynamic>? _extractWeatherData(Map<String, dynamic> feedData) {
    try {
      final sections = feedData['sections'] as List?;
      if (sections == null || sections.length < 2) return null;

      final section1 = sections[1] as Map<String, dynamic>;
      final cards = section1['cards'] as List?;
      if (cards == null) return null;

      final weatherCard = cards.firstWhere(
        (card) => card['type'] == 'WeatherSummary',
        orElse: () => null,
      );

      if (weatherCard == null) return null;

      final weatherData = jsonDecode(weatherCard['data']);
      final userProfile = weatherData['userProfile'];
      final response = weatherData['responses'][0];
      final weather = response['weather'][0];

      // 提取城市信息（优先使用 IP 检测位置）
      final city =
          userProfile?['detectedLocation']?['City'] ??
          userProfile?['location']?['City'] ??
          '未知';

      return {
        'current': {
          'temperature': weather['current']['temp'],
          'feelsLike': weather['current']['feels'],
          'condition': weather['current']['cap'],
          'icon': weather['current']['icon'],
          'humidity': weather['current']['rh'],
          'windSpeed': weather['current']['windSpd'],
          'windDirection': weather['current']['windDir'],
          'pressure': weather['current']['baro'],
          'uvIndex': weather['current']['uv'],
          'uvDescription': weather['current']['uvDesc'],
        },
        'airQuality': {
          'aqi': weather['current']['aqi'],
          'level': weather['current']['aqLevel'],
          'severity': weather['current']['aqiSeverity'],
        },
        'forecast': (weather['forecast']['days'] as List).take(5).map((day) {
          return {
            'date': day['daily']['valid'],
            'highTemp': day['daily']['tempHi'],
            'lowTemp': day['daily']['tempLo'],
            'condition': day['daily']['pvdrCap'],
            'icon': day['daily']['icon'],
            'precipitation': day['daily']['precip'],
            'aqi': day['daily']['aqi'],
          };
        }).toList(),
        'location': {
          'city': city,
          'cityCode': response['source']['id'],
          'coordinates': response['source']['coordinates'],
          'timezone': response['source']['location']['TimezoneName'],
        },
      };
    } catch (e) {
      debugPrint('提取天气数据失败: $e');
      return null;
    }
  }

  /// 提取日历数据
  Map<String, dynamic>? _extractCalendarData(Map<String, dynamic> feedData) {
    try {
      final sections = feedData['sections'] as List?;
      if (sections == null || sections.length < 2) return null;

      final section1 = sections[1] as Map<String, dynamic>;
      final cards = section1['cards'] as List?;
      if (cards == null) return null;

      final calendarCard = cards.firstWhere(
        (card) => card['type'] == 'RichCalendarSD',
        orElse: () => null,
      );

      if (calendarCard == null) return null;

      final calendarData = jsonDecode(calendarCard['data']);
      final today = calendarData['TodayInfo'];

      // 调试：打印原始数据
      debugPrint('📅 农历原始数据:');
      debugPrint('  LunarMonth: ${today['DateTag']['LunarMonth']}');
      debugPrint('  LunarDay: ${today['DateTag']['LunarDay']}');
      debugPrint('  Alias: ${today['Alias']}');
      debugPrint('  FestivalNames: ${today['FestivalNames']}');

      return {
        'date': {
          'year': today['Date']['Year'],
          'month': today['Date']['Month'],
          'day': today['Date']['Day'],
        },
        'lunar': {
          'year': today['DateTag']['LunarYear'],
          'month': today['DateTag']['LunarMonth'],
          'day': today['DateTag']['LunarDay'],
          'alias': today['Alias'],
        },
        'ganZhi': {
          'year': today['DateTag']['GanZhiYear'],
          'month': today['DateTag']['GanZhiMonth'],
          'day': today['DateTag']['GanZhiDay'],
        },
        'zodiac': today['DateTag']['Animal'],
        'constellation': today['DateTag']['Constellation'],
        'dayOfWeek': today['DayOfWeek'],
        'festivals': today['FestivalNames'] ?? [],
        'suitable': today['RichInfo']?['YiList'] ?? [],
        'unsuitable': today['RichInfo']?['JiList'] ?? [],
        'dailyQuote': today['DailyQuote'] != null
            ? {
                'text': today['DailyQuote']['Text'],
                'author': today['DailyQuote']['Author'],
              }
            : null,
        'progressBar': {
          'dayOfYear': today['ProgressBar']['DayOfYear'],
          'weekOfYear': today['ProgressBar']['WeekOfYear'],
          'progress': today['ProgressBar']['Progress'],
        },
      };
    } catch (e) {
      debugPrint('提取日历数据失败: $e');
      return null;
    }
  }

  /// 保存缓存
  Future<void> _saveCache() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      if (_weatherData != null) {
        await prefs.setString(_cacheKeyWeather, jsonEncode(_weatherData));

        // 单独保存hourly数据（方便管理）
        final hourlyData = _weatherData!['hourly'];
        if (hourlyData != null) {
          await prefs.setString(_cacheKeyHourly, jsonEncode(hourlyData));
        }
      }
      if (_calendarData != null) {
        await prefs.setString(_cacheKeyCalendar, jsonEncode(_calendarData));
      }
      if (_lastUpdateTime != null) {
        await prefs.setString(
          _cacheKeyTimestamp,
          _lastUpdateTime!.toIso8601String(),
        );
      }
    } catch (e) {
      debugPrint('保存MSN缓存失败: $e');
    }
  }

  /// 清除缓存
  Future<void> clearCache() async {
    _weatherData = null;
    _calendarData = null;
    _lastUpdateTime = null;

    final prefs = await SharedPreferences.getInstance();
    await prefs.remove(_cacheKeyWeather);
    await prefs.remove(_cacheKeyCalendar);
    await prefs.remove(_cacheKeyHourly);
    await prefs.remove(_cacheKeyTimestamp);

    notifyListeners();
  }

  /// 从 MSN hourlyforecast 页面获取分时数据
  Future<List<Map<String, dynamic>>?> _fetchHourlyWeather(
    double lat,
    double lon,
  ) async {
    try {
      final url =
          'https://www.msn.cn/zh-cn/weather/hourlyforecast/in-$lat,$lon';
      debugPrint('获取hourly数据: $url');

      final response = await http
          .get(
            Uri.parse(url),
            headers: {
              'User-Agent':
                  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            },
          )
          .timeout(const Duration(seconds: 10));

      if (response.statusCode != 200) {
        debugPrint('Hourly API调用失败: ${response.statusCode}');
        return null;
      }

      final html = response.body;

      // 从 HTML 中提取包含天气数据的 script 标签
      final scriptMatches = RegExp(
        r'<script[^>]*>([\s\S]*?)</script>',
      ).allMatches(html);

      String? weatherStateJson;
      for (final match in scriptMatches) {
        final scriptContent = match.group(1) ?? '';
        if (scriptContent.contains('WeatherData') &&
            scriptContent.contains('forecast')) {
          // 找到包含数据的script，提取JSON部分
          final jsonStart = scriptContent.indexOf('{');
          final jsonEnd = scriptContent.lastIndexOf('}');

          if (jsonStart >= 0 && jsonEnd > jsonStart) {
            final jsonStr = scriptContent.substring(jsonStart, jsonEnd + 1);
            try {
              final stateData = jsonDecode(jsonStr);
              final weatherData = stateData['WeatherData']?['_@STATE@_'];
              if (weatherData != null && weatherData['forecast'] != null) {
                weatherStateJson = jsonEncode(weatherData);
                break;
              }
            } catch (e) {
              // 继续查找下一个script
              continue;
            }
          }
        }
      }

      if (weatherStateJson == null) {
        debugPrint('Hourly数据解析失败: 未找到WeatherData');
        return null;
      }

      final weatherState = jsonDecode(weatherStateJson);
      final forecast = weatherState['forecast'] as List?;

      if (forecast == null || forecast.isEmpty) {
        return null;
      }

      final hourlyData = <Map<String, dynamic>>[];

      // 提取所有hourly数据
      for (final day in forecast) {
        final hourly = day['hourly'] as List?;
        if (hourly != null) {
          for (final hour in hourly) {
            hourlyData.add({
              'time': hour['timeStr'],
              'temperature': hour['temperature'],
              'feelsLike': hour['feels'],
              'condition': hour['cap'],
              'icon': hour['icon'],
              'humidity': hour['rh'],
              'windSpeed': hour['windSpeed'],
              'precipitation': hour['precipitation'],
              'aqi': hour['aqi'],
            });
          }
        }
      }

      // 只返回前48小时
      return hourlyData.take(48).toList();
    } catch (e) {
      debugPrint('Hourly天气获取异常: $e');
      return null;
    }
  }
}
