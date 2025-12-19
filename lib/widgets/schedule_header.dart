import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:intl/intl.dart';
import 'package:provider/provider.dart';
import 'dart:async';
import '../models/day_type.dart';
import '../models/holiday.dart';
import '../services/msn_service.dart';

typedef VoidCallbackAsync = Future<void> Function();

class ScheduleHeader extends StatefulWidget {
  final DateTime selectedDate;
  final DayType? dayType;
  final Holiday? holiday;
  final bool isToday;
  final VoidCallback? onLongPressDayType;
  final VoidCallback? onAddSchedule;

  const ScheduleHeader({
    super.key,
    required this.selectedDate,
    this.dayType,
    this.holiday,
    required this.isToday,
    this.onLongPressDayType,
    this.onAddSchedule,
  });

  @override
  State<ScheduleHeader> createState() => _ScheduleHeaderState();
}

class _ScheduleHeaderState extends State<ScheduleHeader>
    with WidgetsBindingObserver {
  Timer? _dateCheckTimer;
  String _currentDate = '';

  @override
  void initState() {
    super.initState();
    _currentDate = _formatDate(DateTime.now());
    WidgetsBinding.instance.addObserver(this);

    // 延迟到构建完成后加载数据，避免在build阶段调用notifyListeners
    WidgetsBinding.instance.addPostFrameCallback((_) {
      _loadMsnData();
    });

    // 启动定时检查（每分钟检查一次日期变更）
    if (widget.isToday) {
      _startDateCheckTimer();
    }
  }

  @override
  void dispose() {
    _dateCheckTimer?.cancel();
    WidgetsBinding.instance.removeObserver(this);
    super.dispose();
  }

  void _startDateCheckTimer() {
    _dateCheckTimer?.cancel();
    _dateCheckTimer = Timer.periodic(const Duration(minutes: 1), (timer) {
      final newDate = _formatDate(DateTime.now());
      if (_currentDate != newDate) {
        debugPrint('🔄 检测到日期变更: $_currentDate -> $newDate，刷新数据');
        _currentDate = newDate;
        _loadMsnData();
      }
    });
  }

  String _formatDate(DateTime date) {
    return '${date.year}-${date.month.toString().padLeft(2, '0')}-${date.day.toString().padLeft(2, '0')}';
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    super.didChangeAppLifecycleState(state);
    if (state == AppLifecycleState.resumed && widget.isToday) {
      // App 回到前台，刷新数据
      _loadMsnData();
    }
  }

  @override
  void didUpdateWidget(ScheduleHeader oldWidget) {
    super.didUpdateWidget(oldWidget);

    // 当 isToday 状态变化时，管理定时器
    if (widget.isToday != oldWidget.isToday) {
      if (widget.isToday) {
        _currentDate = _formatDate(DateTime.now());
        _startDateCheckTimer();
        _loadMsnData();
      } else {
        _dateCheckTimer?.cancel();
      }
    }
  }

  Future<void> _loadMsnData() async {
    if (!widget.isToday || !mounted) return;

    final msnService = Provider.of<MsnService>(context, listen: false);
    // 异步加载，使用智能缓存
    msnService.fetchData();
  }

  Widget _buildDayTypeChip() {
    if (widget.dayType == null) return const SizedBox.shrink();

    Color bgColor;
    Color textColor;
    IconData icon;

    switch (widget.dayType!) {
      case DayType.workday:
        bgColor = Colors.blue.shade100;
        textColor = Colors.blue.shade900;
        icon = Icons.work_outline;
        break;
      case DayType.weekend:
        bgColor = Colors.green.shade100;
        textColor = Colors.green.shade900;
        icon = Icons.weekend;
        break;
      case DayType.holiday:
        bgColor = Colors.red.shade100;
        textColor = Colors.red.shade900;
        icon = Icons.celebration;
        break;
    }

    final chip = Chip(
      avatar: Icon(icon, size: 14, color: textColor),
      label: Text(widget.dayType!.displayName),
      backgroundColor: bgColor,
      labelStyle: TextStyle(color: textColor, fontSize: 12),
      padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 0),
      labelPadding: const EdgeInsets.only(left: 0, right: 6),
      materialTapTargetSize: MaterialTapTargetSize.shrinkWrap,
      visualDensity: VisualDensity.compact,
    );

    if (widget.onLongPressDayType == null) return chip;

    return InkWell(
      onLongPress: () {
        HapticFeedback.mediumImpact();
        widget.onLongPressDayType?.call();
      },
      borderRadius: BorderRadius.circular(16),
      child: chip,
    );
  }

  Widget _buildHolidayChip() {
    final bgColor = widget.holiday!.isWorkday
        ? Colors.orange.shade100
        : Colors.red.shade100;
    final textColor = widget.holiday!.isWorkday
        ? Colors.orange.shade900
        : Colors.red.shade900;
    final icon = widget.holiday!.isWorkday ? Icons.work : Icons.celebration;
    final label = widget.holiday!.isWorkday ? '补班' : widget.holiday!.name;

    // 只有补班时才显示图标，节假日名称不显示图标
    return Chip(
      avatar: widget.holiday!.isWorkday
          ? Icon(icon, size: 14, color: textColor)
          : null,
      label: Text(label),
      backgroundColor: bgColor,
      labelStyle: TextStyle(color: textColor, fontSize: 12),
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 0),
      labelPadding: widget.holiday!.isWorkday
          ? const EdgeInsets.only(left: 0, right: 6)
          : EdgeInsets.zero,
      materialTapTargetSize: MaterialTapTargetSize.shrinkWrap,
      visualDensity: VisualDensity.compact,
    );
  }

  Widget _buildDateRelativeChip() {
    final now = DateTime.now();
    final today = DateTime(now.year, now.month, now.day);
    final selected = DateTime(
      widget.selectedDate.year,
      widget.selectedDate.month,
      widget.selectedDate.day,
    );
    final diff = selected.difference(today).inDays;

    if (diff == 0) {
      return Chip(
        avatar: Icon(Icons.star, size: 14, color: Colors.orange.shade900),
        label: const Text('今天'),
        backgroundColor: Colors.orange.shade100,
        labelStyle: TextStyle(color: Colors.orange.shade900, fontSize: 12),
        padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 0),
        labelPadding: const EdgeInsets.only(left: 0, right: 6),
        materialTapTargetSize: MaterialTapTargetSize.shrinkWrap,
        visualDensity: VisualDensity.compact,
      );
    } else if (diff == -1) {
      return Chip(
        avatar: Icon(Icons.arrow_back, size: 14, color: Colors.grey.shade700),
        label: const Text('昨天'),
        backgroundColor: Colors.grey.shade200,
        labelStyle: TextStyle(color: Colors.grey.shade700, fontSize: 12),
        padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 0),
        labelPadding: const EdgeInsets.only(left: 0, right: 6),
        materialTapTargetSize: MaterialTapTargetSize.shrinkWrap,
        visualDensity: VisualDensity.compact,
      );
    } else if (diff == 1) {
      return Chip(
        avatar: Icon(
          Icons.arrow_forward,
          size: 14,
          color: Colors.blue.shade900,
        ),
        label: const Text('明天'),
        backgroundColor: Colors.blue.shade100,
        labelStyle: TextStyle(color: Colors.blue.shade900, fontSize: 12),
        padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 0),
        labelPadding: const EdgeInsets.only(left: 0, right: 6),
        materialTapTargetSize: MaterialTapTargetSize.shrinkWrap,
        visualDensity: VisualDensity.compact,
      );
    }
    return const SizedBox.shrink();
  }

  IconData _getWeatherIcon(String weather) {
    if (weather.contains('晴')) return Icons.wb_sunny;
    if (weather.contains('云')) return Icons.wb_cloudy;
    if (weather.contains('雨')) return Icons.umbrella;
    if (weather.contains('雪')) return Icons.ac_unit;
    if (weather.contains('雾') || weather.contains('霾')) return Icons.cloud;
    return Icons.wb_cloudy;
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: Theme.of(context).colorScheme.primaryContainer,
        boxShadow: [
          BoxShadow(
            color: Colors.black.withAlpha((0.05 * 255).round()),
            blurRadius: 4,
            offset: const Offset(0, 2),
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // 第一行：日期和天气（天气图标、温度在同一行）
          Row(
            children: [
              Expanded(
                child: Text(
                  DateFormat(
                    'yyyy年MM月dd日',
                    'zh_CN',
                  ).format(widget.selectedDate),
                  style: Theme.of(context).textTheme.titleLarge,
                ),
              ),
              // 今天显示天气（图标、温度在同一行）
              if (widget.isToday)
                Consumer<MsnService>(
                  builder: (context, msnService, child) {
                    final weather = msnService.weatherData;
                    if (weather == null) return const SizedBox.shrink();

                    final current = weather['current'] as Map<String, dynamic>?;
                    if (current == null) return const SizedBox.shrink();

                    final temp = current['temperature'];
                    final condition = current['condition'] ?? '';

                    return Padding(
                      padding: const EdgeInsets.only(right: 8.0),
                      child: Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Icon(
                            _getWeatherIcon(condition),
                            size: 20,
                            color: Theme.of(
                              context,
                            ).colorScheme.onSurfaceVariant,
                          ),
                          const SizedBox(width: 4),
                          Text(
                            '$temp°',
                            style: TextStyle(
                              fontSize: 13,
                              color: Theme.of(
                                context,
                              ).colorScheme.onSurfaceVariant,
                            ),
                          ),
                        ],
                      ),
                    );
                  },
                ),
            ],
          ),
          const SizedBox(height: 8),
          // 第二行：星期几
          Text(
            DateFormat('EEEE', 'zh_CN').format(widget.selectedDate),
            style: Theme.of(context).textTheme.titleMedium?.copyWith(
              color: Theme.of(context).colorScheme.onSurfaceVariant,
              fontSize: 14,
            ),
          ),
          const SizedBox(height: 8),
          // 第三行：标签和添加日程按钮
          Row(
            children: [
              Expanded(
                child: Wrap(
                  spacing: 6,
                  runSpacing: 4,
                  children: [
                    if (widget.dayType != null) _buildDayTypeChip(),
                    if (widget.holiday != null) _buildHolidayChip(),
                    _buildDateRelativeChip(),
                  ].where((w) => w is! SizedBox || w.width != 0).toList(),
                ),
              ),
              // 添加日程按钮
              if (widget.onAddSchedule != null)
                SizedBox(
                  height: 32,
                  child: OutlinedButton.icon(
                    onPressed: widget.onAddSchedule,
                    icon: const Icon(Icons.add, size: 18),
                    label: const Text('添加日程', style: TextStyle(fontSize: 13)),
                    style: OutlinedButton.styleFrom(
                      padding: const EdgeInsets.symmetric(
                        horizontal: 12,
                        vertical: 4,
                      ),
                      minimumSize: Size.zero,
                      tapTargetSize: MaterialTapTargetSize.shrinkWrap,
                    ),
                  ),
                ),
            ],
          ),
        ],
      ),
    );
  }
}
