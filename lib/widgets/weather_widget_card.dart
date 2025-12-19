import 'package:flutter/material.dart';

/// 天气小部件卡片
class WeatherWidgetCard extends StatefulWidget {
  final Map<String, dynamic>? weatherData;
  final VoidCallback? onRefresh;
  final bool isLoading;

  const WeatherWidgetCard({
    super.key,
    this.weatherData,
    this.onRefresh,
    this.isLoading = false,
  });

  @override
  State<WeatherWidgetCard> createState() => _WeatherWidgetCardState();
}

class _WeatherWidgetCardState extends State<WeatherWidgetCard>
    with SingleTickerProviderStateMixin {
  late AnimationController _rotationController;

  @override
  void initState() {
    super.initState();
    _rotationController = AnimationController(
      duration: const Duration(milliseconds: 1000),
      vsync: this,
    );
  }

  @override
  void didUpdateWidget(WeatherWidgetCard oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (widget.isLoading && !oldWidget.isLoading) {
      _rotationController.repeat();
    } else if (!widget.isLoading && oldWidget.isLoading) {
      _rotationController.stop();
      _rotationController.reset();
    }
  }

  @override
  void dispose() {
    _rotationController.dispose();
    super.dispose();
  }

  /// 格式化数字，去除不必要的小数点
  String _formatNumber(dynamic value) {
    if (value == null) return 'N/A';
    final number = value is num ? value : double.tryParse(value.toString());
    if (number == null) return value.toString();

    // 如果是整数或小数部分为0，返回整数形式
    if (number == number.toInt()) {
      return number.toInt().toString();
    }
    // 否则保留小数
    return number.toString();
  }

  @override
  Widget build(BuildContext context) {
    if (widget.weatherData == null) {
      return Card(
        margin: const EdgeInsets.symmetric(vertical: 4),
        child: Container(
          padding: const EdgeInsets.all(16),
          height: 150,
          child: const Center(child: CircularProgressIndicator()),
        ),
      );
    }

    final current = widget.weatherData!['current'] as Map<String, dynamic>?;
    final airQuality =
        widget.weatherData!['airQuality'] as Map<String, dynamic>?;
    final forecast = widget.weatherData!['forecast'] as List?;
    final hourly = widget.weatherData!['hourly'] as List?;
    final location = widget.weatherData!['location'] as Map<String, dynamic>?;
    final city = location?['city'] ?? '未知';

    return Card(
      margin: const EdgeInsets.symmetric(vertical: 4),
      elevation: 2,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // 标题栏
          Padding(
            padding: const EdgeInsets.only(
              left: 16,
              right: 4,
              top: 8,
              bottom: 8,
            ),
            child: Row(
              children: [
                const Icon(Icons.wb_sunny, color: Colors.orange, size: 24),
                const SizedBox(width: 16),
                Text(
                  '实时天气 · $city',
                  style: const TextStyle(
                    fontSize: 16,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                const Spacer(),
                if (widget.onRefresh != null)
                  RotationTransition(
                    turns: _rotationController,
                    child: IconButton(
                      icon: const Icon(Icons.refresh, size: 20),
                      onPressed: widget.isLoading ? null : widget.onRefresh,
                      tooltip: '刷新',
                      padding: const EdgeInsets.all(8),
                      constraints: const BoxConstraints(),
                    ),
                  ),
              ],
            ),
          ),
          const Divider(height: 1),

          // 当前天气
          if (current != null)
            Padding(
              padding: const EdgeInsets.all(16),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  // 温度和天气状况
                  Expanded(
                    flex: 2,
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Row(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              '${_formatNumber(current['temperature'])}°',
                              style: const TextStyle(
                                fontSize: 48,
                                fontWeight: FontWeight.w300,
                              ),
                            ),
                            const SizedBox(width: 8),
                            Expanded(
                              child: Padding(
                                padding: const EdgeInsets.only(top: 8),
                                child: Text(
                                  current['condition'] ?? '',
                                  style: TextStyle(
                                    fontSize: 16,
                                    color: Colors.grey[700],
                                  ),
                                  maxLines: 2,
                                  overflow: TextOverflow.ellipsis,
                                ),
                              ),
                            ),
                          ],
                        ),
                        const SizedBox(height: 4),
                        Text(
                          '体感 ${_formatNumber(current['feelsLike'])}°',
                          style: TextStyle(
                            fontSize: 14,
                            color: Colors.grey[600],
                          ),
                        ),
                      ],
                    ),
                  ),

                  // 详细信息
                  Expanded(
                    flex: 3,
                    child: Wrap(
                      spacing: 12,
                      runSpacing: 8,
                      alignment: WrapAlignment.end,
                      children: [
                        _buildInfoChip(
                          Icons.water_drop,
                          '湿度',
                          '${_formatNumber(current['humidity'])}%',
                        ),
                        _buildInfoChip(
                          Icons.air,
                          '风速',
                          '${_formatNumber(current['windSpeed'])}km/h',
                        ),
                        _buildInfoChip(
                          Icons.wb_sunny_outlined,
                          'UV',
                          current['uvDescription'] ?? 'N/A',
                        ),
                        if (airQuality != null)
                          _buildInfoChip(
                            Icons.eco,
                            'AQI',
                            _formatNumber(airQuality['aqi']),
                            color: _getAqiColor(airQuality['aqi']),
                          ),
                      ],
                    ),
                  ),
                ],
              ),
            ),

          // 未来天气预报（日）
          if (forecast != null && forecast.isNotEmpty)
            SizedBox(
              height: 70,
              child: ListView.builder(
                scrollDirection: Axis.horizontal,
                padding: const EdgeInsets.symmetric(
                  horizontal: 12,
                  vertical: 0,
                ),
                itemCount: forecast.length,
                physics: const ClampingScrollPhysics(),
                itemBuilder: (context, index) {
                  final day = forecast[index] as Map<String, dynamic>;
                  return _buildForecastItem(day, index);
                },
              ),
            ),

          // 分割线
          if (hourly != null && hourly.isNotEmpty)
            Builder(
              builder: (context) {
                return Padding(
                  padding: const EdgeInsets.symmetric(
                    horizontal: 12,
                    vertical: 8,
                  ),
                  child: Row(
                    children: [
                      Expanded(
                        child: Divider(
                          color: Theme.of(context).colorScheme.outlineVariant,
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 8),
                        child: Container(
                          width: 6,
                          height: 6,
                          decoration: BoxDecoration(
                            color: Theme.of(context).colorScheme.outline,
                            shape: BoxShape.circle,
                          ),
                        ),
                      ),
                      Expanded(
                        child: Divider(
                          color: Theme.of(context).colorScheme.outlineVariant,
                        ),
                      ),
                    ],
                  ),
                );
              },
            ),

          // 分时天气
          if (hourly != null && hourly.isNotEmpty)
            _buildHourlyWeatherChart(hourly, forecast),
        ],
      ),
    );
  }

  /// 构建分时天气图表
  Widget _buildHourlyWeatherChart(List hourly, List? forecast) {
    // 获取今天的日落时间
    String? sunsetTime;
    if (forecast != null && forecast.isNotEmpty) {
      final today = forecast[0] as Map<String, dynamic>;
      sunsetTime = today['sunset'] as String?;
    }

    // 提取所有温度数据
    final List<double> temperatures = hourly
        .map<double>((hour) => hour['temperature']?.toDouble() ?? 0.0)
        .toList();

    // 计算所有温度的最大值和最小值
    double? minTemp;
    double? maxTemp;
    for (var temp in temperatures) {
      if (minTemp == null || temp < minTemp) minTemp = temp;
      if (maxTemp == null || temp > maxTemp) maxTemp = temp;
    }

    const itemWidth = 70.0;
    final totalWidth = hourly.length * itemWidth;
    final curveScrollController = ScrollController();

    // 计算曲线区域的位置：天气(11) + gap(2) + 温度(14) + gap(4) + 调整(4)
    const curveTop = 11.0 + 2.0 + 14.0 + 4.0 + 4.0; // 35
    // 曲线区域高度
    const curveHeight = 56.0;

    return Container(
      height: 140,
      padding: const EdgeInsets.symmetric(horizontal: 0, vertical: 4),
      child: Stack(
        children: [
          // 温度曲线层（整条曲线）- 对齐Expanded区域
          Positioned(
            top: curveTop,
            left: 0,
            right: 0,
            height: curveHeight,
            child: SingleChildScrollView(
              controller: curveScrollController,
              scrollDirection: Axis.horizontal,
              physics: const NeverScrollableScrollPhysics(), // 禁止直接滚动
              child: CustomPaint(
                size: Size(totalWidth, curveHeight),
                painter: _TemperatureCurvePainter(
                  temperatures: temperatures,
                  minTemp: minTemp ?? 0,
                  maxTemp: maxTemp ?? 0,
                  itemWidth: itemWidth,
                  color: Colors.green,
                ),
              ),
            ),
          ),
          // 数据项层
          NotificationListener<ScrollNotification>(
            onNotification: (notification) {
              // 同步曲线层的滚动位置
              if (notification is ScrollUpdateNotification) {
                curveScrollController.jumpTo(notification.metrics.pixels);
              }
              return false;
            },
            child: ListView.builder(
              scrollDirection: Axis.horizontal,
              itemCount: hourly.length,
              physics: const ClampingScrollPhysics(),
              itemBuilder: (context, index) {
                final hour = hourly[index] as Map<String, dynamic>;
                return _buildHourlyChartItem(hour, index, sunsetTime);
              },
            ),
          ),
        ],
      ),
    );
  }

  /// 构建单个分时天气图表项
  Widget _buildHourlyChartItem(
    Map<String, dynamic> hour,
    int index,
    String? sunsetTime,
  ) {
    final temp = hour['temperature'];
    final condition = hour['condition'] ?? '';
    final aqi = hour['aqi'];
    final time = hour['time'] as String?;

    String timeLabel = '';
    bool isNow = false;
    bool isSunset = false;

    if (time != null && time.length >= 16) {
      final now = DateTime.now();
      final hourTime = DateTime.parse(time);
      final hourStr = time.substring(11, 13);
      final minuteStr = time.substring(14, 16);

      timeLabel = '${hourStr}:${minuteStr}';

      // 判断是否是当前时间（1小时内）
      if (hourTime.difference(now).abs().inMinutes < 30) {
        isNow = true;
        timeLabel = '现在';
      }

      // 判断是否接近日落时间
      if (sunsetTime != null && sunsetTime.contains(':')) {
        final sunsetParts = sunsetTime.split(':');
        if (sunsetParts.length >= 2) {
          final sunsetHour = int.tryParse(sunsetParts[0]) ?? 0;
          final currentHour = int.parse(hourStr);
          if ((currentHour - sunsetHour).abs() <= 1) {
            isSunset = true;
            if (!isNow) timeLabel = '日落';
          }
        }
      }
    }

    return Builder(
      builder: (context) {
        return SizedBox(
          width: 70,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              // 天气状况
              Text(
                condition.length > 4 ? condition.substring(0, 4) : condition,
                style: TextStyle(
                  fontSize: 11,
                  color: Theme.of(context).colorScheme.onSurfaceVariant,
                ),
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
              ),
              const SizedBox(height: 2),

              // 温度
              Text(
                '${_formatNumber(temp)}°',
                style: TextStyle(
                  fontSize: 14,
                  fontWeight: FontWeight.w600,
                  color: Theme.of(context).colorScheme.onSurface,
                ),
              ),
              const SizedBox(height: 4),

              // 曲线区域（固定高度，给曲线留空间）
              const SizedBox(height: 50),

              // AQI等级
              SizedBox(
                height: 14,
                child: aqi != null
                    ? Text(
                        '${_getAqiLevel(aqi)}级',
                        style: TextStyle(
                          fontSize: 10,
                          color: Theme.of(context).colorScheme.onSurfaceVariant,
                        ),
                      )
                    : const SizedBox(),
              ),

              // 时间标签
              Text(
                timeLabel,
                style: TextStyle(
                  fontSize: 11,
                  fontWeight: isNow || isSunset
                      ? FontWeight.bold
                      : FontWeight.normal,
                  color: isNow || isSunset
                      ? Theme.of(context).colorScheme.primary
                      : Theme.of(context).colorScheme.onSurfaceVariant,
                ),
              ),
            ],
          ),
        );
      },
    );
  }

  /// 获取AQI等级
  int _getAqiLevel(num aqi) {
    if (aqi <= 50) return 1;
    if (aqi <= 100) return 2;
    if (aqi <= 150) return 3;
    if (aqi <= 200) return 4;
    if (aqi <= 300) return 5;
    return 6;
  }

  Widget _buildInfoChip(
    IconData icon,
    String label,
    String value, {
    Color? color,
  }) {
    return Builder(
      builder: (context) {
        final chipColor = color ?? Theme.of(context).colorScheme.primary;
        return Container(
          padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 4),
          decoration: BoxDecoration(
            color: chipColor.withOpacity(0.15),
            borderRadius: BorderRadius.circular(12),
          ),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              Icon(icon, size: 14, color: chipColor),
              const SizedBox(width: 4),
              Text(
                '$label: $value',
                style: TextStyle(fontSize: 12, color: chipColor),
              ),
            ],
          ),
        );
      },
    );
  }

  Widget _buildForecastItem(Map<String, dynamic> day, int index) {
    final date = day['date'] as String?;
    final highTemp = day['highTemp'];
    final lowTemp = day['lowTemp'];
    final condition = day['condition'] ?? '';

    String dayLabel = index == 0
        ? '今天'
        : index == 1
        ? '明天'
        : '';
    if (dayLabel.isEmpty && date != null && date.length >= 10) {
      dayLabel = '${date.substring(5, 7)}/${date.substring(8, 10)}';
    }

    return Builder(
      builder: (context) {
        return Container(
          width: 70,
          margin: const EdgeInsets.symmetric(horizontal: 4),
          padding: const EdgeInsets.symmetric(horizontal: 2, vertical: 4),
          decoration: BoxDecoration(
            color: index == 0
                ? Theme.of(context).colorScheme.primaryContainer
                : Theme.of(context).colorScheme.surfaceContainerHighest,
            borderRadius: BorderRadius.circular(8),
          ),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              Text(
                dayLabel,
                style: TextStyle(
                  fontSize: 11,
                  fontWeight: index == 0 ? FontWeight.bold : FontWeight.normal,
                  color: index == 0
                      ? Theme.of(context).colorScheme.onPrimaryContainer
                      : Theme.of(context).colorScheme.onSurface,
                ),
              ),
              Text(
                condition.length > 4 ? condition.substring(0, 4) : condition,
                style: TextStyle(
                  fontSize: 10,
                  color: Theme.of(context).colorScheme.onSurface,
                ),
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
              ),
              Text(
                '${_formatNumber(highTemp)}°/${_formatNumber(lowTemp)}°',
                style: TextStyle(
                  fontSize: 11,
                  fontWeight: FontWeight.w500,
                  color: Theme.of(context).colorScheme.onSurface,
                ),
              ),
            ],
          ),
        );
      },
    );
  }

  Color _getAqiColor(num? aqi) {
    if (aqi == null) return Colors.grey;
    if (aqi <= 50) return Colors.green;
    if (aqi <= 100) return Colors.yellow.shade700;
    if (aqi <= 150) return Colors.orange;
    if (aqi <= 200) return Colors.red;
    return Colors.purple;
  }
}

/// 温度曲线绘制器
class _TemperatureCurvePainter extends CustomPainter {
  final List<double> temperatures;
  final double minTemp;
  final double maxTemp;
  final double itemWidth;
  final Color color;

  _TemperatureCurvePainter({
    required this.temperatures,
    required this.minTemp,
    required this.maxTemp,
    required this.itemWidth,
    required this.color,
  });

  @override
  void paint(Canvas canvas, Size size) {
    if (temperatures.length < 2) return;

    final paint = Paint()
      ..color = color
      ..strokeWidth = 2.5
      ..style = PaintingStyle.stroke
      ..strokeCap = StrokeCap.round
      ..strokeJoin = StrokeJoin.round;

    // 计算温度范围，确保至少有3度的跨度
    final tempRange = (maxTemp - minTemp).clamp(3.0, double.infinity);

    // 留出上下边距
    final chartHeight = size.height - 10;

    // 计算每个温度点的坐标
    final points = <Offset>[];
    for (int i = 0; i < temperatures.length; i++) {
      final x = i * itemWidth + itemWidth / 2; // 在每个item的中心
      final y = 5 + chartHeight * (1 - (temperatures[i] - minTemp) / tempRange);
      points.add(Offset(x, y));
    }

    // 使用Catmull-Rom样条曲线绘制平滑曲线
    final path = Path();
    path.moveTo(points[0].dx, points[0].dy);

    for (int i = 0; i < points.length - 1; i++) {
      final p0 = i > 0 ? points[i - 1] : points[i];
      final p1 = points[i];
      final p2 = points[i + 1];
      final p3 = i < points.length - 2 ? points[i + 2] : p2;

      // Catmull-Rom样条曲线的控制点
      final cp1x = p1.dx + (p2.dx - p0.dx) / 6;
      final cp1y = p1.dy + (p2.dy - p0.dy) / 6;
      final cp2x = p2.dx - (p3.dx - p1.dx) / 6;
      final cp2y = p2.dy - (p3.dy - p1.dy) / 6;

      path.cubicTo(cp1x, cp1y, cp2x, cp2y, p2.dx, p2.dy);
    }

    canvas.drawPath(path, paint);

    // 绘制所有温度点
    final pointPaint = Paint()
      ..color = color
      ..style = PaintingStyle.fill;

    for (final point in points) {
      canvas.drawCircle(point, 3, pointPaint);
    }
  }

  @override
  bool shouldRepaint(_TemperatureCurvePainter oldDelegate) {
    return oldDelegate.temperatures != temperatures ||
        oldDelegate.minTemp != minTemp ||
        oldDelegate.maxTemp != maxTemp;
  }
}
