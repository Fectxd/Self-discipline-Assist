import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:provider/provider.dart';
import 'package:table_calendar/table_calendar.dart';
import 'package:intl/intl.dart';
import 'dart:async';
import '../models/day_type.dart';
import '../models/work_schedule.dart';
import '../models/holiday.dart';
import '../models/dashboard_widget.dart';
import '../services/day_service.dart';
import '../services/work_schedule_service.dart';
import '../services/msn_service.dart';
import '../services/dashboard_widget_service.dart';
import '../services/holiday_service.dart';
import '../services/date_change_service.dart';
import '../widgets/weather_widget_card.dart';
import '../widgets/calendar_widget_card.dart';
import 'settings_screen.dart';

/// 日历页面
class CalendarScreen extends StatefulWidget {
  final void Function(DateTime)? onDateSelected;

  const CalendarScreen({super.key, this.onDateSelected});

  @override
  State<CalendarScreen> createState() => _CalendarScreenState();
}

class _CalendarScreenState extends State<CalendarScreen>
    with WidgetsBindingObserver {
  DateTime _focusedDay = DateTime.now();
  DateTime? _selectedDay;

  @override
  void initState() {
    super.initState();
    _selectedDay = _focusedDay;

    // 监听应用生命周期，前台时刷新
    WidgetsBinding.instance.addObserver(this);

    // 延迟到构建完成后加载数据，避免在build阶段调用notifyListeners
    WidgetsBinding.instance.addPostFrameCallback((_) {
      _initMsnData();
    });
    _loadDayTypes();

    // 监听日期变更服务
    DateChangeService().addListener(_onDateChanged);
  }

  @override
  void dispose() {
    DateChangeService().removeListener(_onDateChanged);
    WidgetsBinding.instance.removeObserver(this);
    super.dispose();
  }

  /// 日期变更回调
  void _onDateChanged() {
    debugPrint('🔄 日历页收到日期变更通知，刷新数据和日历状态');

    // 更新日历的焦点日期和选中日期为当前日期
    setState(() {
      _focusedDay = DateTime.now();
      _selectedDay = DateTime.now();
    });

    _refreshMsnDataOnResume();
    _loadDayTypes();
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    super.didChangeAppLifecycleState(state);
    if (state == AppLifecycleState.resumed) {
      // App 回到前台，刷新数据
      _refreshMsnDataOnResume();
    }
  }

  Future<void> _initMsnData() async {
    final msnService = context.read<MsnService>();
    // 异步加载，不阻塞UI
    msnService.fetchData();
  }

  Future<void> _refreshMsnDataOnResume() async {
    final msnService = context.read<MsnService>();
    // 异步刷新，使用智能缓存
    msnService.fetchData();
  }

  Future<void> _loadDayTypes() async {
    final dayService = context.read<DayService>();
    await dayService.loadMonthView(_focusedDay);
  }

  /// 显示小部件管理对话框
  Future<void> _showWidgetManagementDialog(
    DashboardWidgetService widgetService,
  ) async {
    final allTypes = WidgetType.values;

    await showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('管理小部件'),
        content: StatefulBuilder(
          builder: (context, setState) {
            // 在setState内部重新获取，确保实时更新
            final currentWidgets = widgetService.widgets;

            return SingleChildScrollView(
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: allTypes.map((type) {
                  // 查找该类型的所有小部件
                  final widgetsOfType = currentWidgets
                      .where((w) => w.type == type)
                      .toList();
                  final isEnabled = widgetsOfType.any((w) => w.isVisible);

                  return CheckboxListTile(
                    title: Text(_getWidgetTypeName(type)),
                    subtitle: Text(_getWidgetTypeDescription(type)),
                    secondary: Icon(_getWidgetTypeIcon(type)),
                    value: isEnabled,
                    onChanged: (bool? value) {
                      if (value == true) {
                        // 如果该类型还没有小部件，或者都不可见，则添加或显示
                        if (widgetsOfType.isEmpty) {
                          widgetService.addWidget(type);
                        } else {
                          // 显示第一个该类型的小部件
                          widgetService.toggleVisibility(
                            widgetsOfType.first.id,
                          );
                        }
                      } else {
                        // 隐藏所有该类型的可见小部件
                        for (final widget in widgetsOfType) {
                          if (widget.isVisible) {
                            widgetService.toggleVisibility(widget.id);
                          }
                        }
                      }
                      setState(() {}); // 更新对话框状态
                    },
                  );
                }).toList(),
              ),
            );
          },
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('完成'),
          ),
        ],
      ),
    );
  }

  String _getWidgetTypeName(WidgetType type) {
    switch (type) {
      case WidgetType.weather:
        return '实时天气';
      case WidgetType.calendar:
        return '黄历信息';
    }
  }

  String _getWidgetTypeDescription(WidgetType type) {
    switch (type) {
      case WidgetType.weather:
        return '显示当前天气、温度和空气质量';
      case WidgetType.calendar:
        return '显示农历日期和黄历宜忌';
    }
  }

  IconData _getWidgetTypeIcon(WidgetType type) {
    switch (type) {
      case WidgetType.weather:
        return Icons.wb_sunny;
      case WidgetType.calendar:
        return Icons.calendar_today;
    }
  }

  Future<void> _showDayTypeDialog(DateTime day) async {
    final dayService = context.read<DayService>();
    final normalizedDay = DateTime(day.year, day.month, day.day);

    // 获取当前设置和默认日期类型
    final currentOverride = dayService.getDayOverride(normalizedDay);
    final defaultDayType = await dayService.getDayType(normalizedDay);

    // 防止在异步等待后继续使用已经 dispose 的 context
    if (!mounted) return;

    // 判断默认是工作日还是休息日
    final isDefaultWorkday = defaultDayType == DayType.workday;

    final result = await showDialog<DayType?>(
      context: context,
      barrierDismissible: true, // 允许点击外部关闭
      builder: (context) => PopScope(
        canPop: true, // 允许返回键关闭对话框
        child: AlertDialog(
          title: Text(DateFormat('yyyy年MM月dd日').format(day)),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // 显示当前状态
            Container(
              padding: const EdgeInsets.all(12),
              margin: const EdgeInsets.only(bottom: 16),
              decoration: BoxDecoration(
                color: currentOverride != null
                    ? Colors.orange.shade50
                    : Colors.blue.shade50,
                borderRadius: BorderRadius.circular(8),
                border: Border.all(
                  color: currentOverride != null
                      ? Colors.orange.shade200
                      : Colors.blue.shade200,
                ),
              ),
              child: Row(
                children: [
                  Icon(
                    currentOverride != null
                        ? Icons.edit_calendar
                        : Icons.info_outline,
                    size: 20,
                    color: currentOverride != null
                        ? Colors.orange.shade700
                        : Colors.blue.shade700,
                  ),
                  const SizedBox(width: 8),
                  Expanded(
                    child: Text(
                      currentOverride != null
                          ? '已手动设置为：${currentOverride.dayType.displayName}'
                          : '默认为：${defaultDayType.displayName}',
                      style: TextStyle(
                        fontSize: 13,
                        color: currentOverride != null
                            ? Colors.orange.shade900
                            : Colors.blue.shade900,
                      ),
                    ),
                  ),
                ],
              ),
            ),

            // 根据默认类型显示不同选项
            if (isDefaultWorkday) ...[
              // 工作日：显示"设置休假"
              ListTile(
                leading: Icon(Icons.beach_access, color: Colors.green.shade600),
                title: const Text('设置休假'),
                subtitle: const Text('今天休息，不工作'),
                onTap: () => Navigator.pop(context, DayType.weekend),
              ),
            ] else ...[
              // 休息日：显示"设置加班"
              ListTile(
                leading: Icon(Icons.work, color: Colors.blue.shade600),
                title: const Text('设置加班'),
                subtitle: const Text('今天需要工作'),
                onTap: () => Navigator.pop(context, DayType.workday),
              ),
            ],

            const Divider(),

            // 恢复默认选项
            if (currentOverride != null)
              ListTile(
                leading: Icon(Icons.restore, color: Colors.grey.shade600),
                title: const Text('恢复默认'),
                subtitle: Text('按工作制自动判断（${defaultDayType.displayName}）'),
                onTap: () => Navigator.pop(context, null),
              ),
          ],
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('取消'),
          ),
        ],
        ),
      ),
    );

    if (result != null) {
      // 用户选择了新的类型
      await dayService.setDayOverride(normalizedDay, result);
      // DayService 会自动刷新并通知 Consumer
    } else if (currentOverride != null && result == null) {
      // 用户选择恢复默认
      await dayService.removeDayOverride(normalizedDay);
      // DayService 会自动刷新并通知 Consumer
    }
  }

  @override
  Widget build(BuildContext context) {
    final workScheduleService = context.read<WorkScheduleService>();

    return Scaffold(
      appBar: AppBar(
        title: const Text('日历'),
        actions: [
          // 只在非本月时显示"回到当月"按钮
          if (_focusedDay.year != DateTime.now().year ||
              _focusedDay.month != DateTime.now().month)
            IconButton(
              icon: const Icon(Icons.today),
              tooltip: '回到当月',
              onPressed: () {
                setState(() {
                  _focusedDay = DateTime.now();
                  _selectedDay = DateTime.now();
                });
                _loadDayTypes();
              },
            ),
          IconButton(
            icon: const Icon(Icons.settings),
            tooltip: '设置',
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (context) => const SettingsScreen()),
              );
            },
          ),
        ],
      ),
      body: Consumer<DayService>(
        builder: (context, dayService, child) {
          return SingleChildScrollView(
            child: Column(
              children: [
                TableCalendar(
                  firstDay: DateTime(2020),
                  lastDay: DateTime(2030),
                  focusedDay: _focusedDay,
                  selectedDayPredicate: (day) => isSameDay(_selectedDay, day),
                  calendarFormat: CalendarFormat.month,
                  availableCalendarFormats: const {CalendarFormat.month: '月'},
                  locale: 'zh_CN',
                  startingDayOfWeek:
                      workScheduleService.weekStart == WeekStart.monday
                      ? StartingDayOfWeek.monday
                      : StartingDayOfWeek.sunday,

                  // 样式配置
                  headerStyle: const HeaderStyle(
                    formatButtonVisible: false,
                    titleCentered: true,
                  ),

                  calendarStyle: CalendarStyle(
                    todayDecoration: BoxDecoration(
                      color: Colors.blue.shade200,
                      shape: BoxShape.circle,
                    ),
                    selectedDecoration: BoxDecoration(
                      color: Colors.blue.shade600,
                      shape: BoxShape.circle,
                    ),
                    weekendTextStyle: const TextStyle(color: Colors.red),
                  ),

                  // 事件回调
                  onDaySelected: (selectedDay, focusedDay) {
                    // 通知主页面切换到 AI 日程并显示选中日期
                    widget.onDateSelected?.call(selectedDay);
                  },

                  onPageChanged: (focusedDay) async {
                    final oldYear = _focusedDay.year;
                    setState(() {
                      _focusedDay = focusedDay;
                    });

                    // 如果切换到了新的年份，确保该年份的节假日已缓存
                    if (focusedDay.year != oldYear) {
                      final holidayService = context.read<HolidayService>();
                      await holidayService.ensureYearCached(focusedDay.year);
                    }

                    _loadDayTypes();
                  },

                  onDayLongPressed: (selectedDay, focusedDay) {
                    HapticFeedback.mediumImpact();
                    _showDayTypeDialog(selectedDay);
                  },

                  // 自定义日期构建器
                  calendarBuilders: CalendarBuilders(
                    defaultBuilder: (context, day, focusedDay) {
                      return _buildDayCell(day, false, false);
                    },
                    todayBuilder: (context, day, focusedDay) {
                      return _buildDayCell(day, true, false);
                    },
                    selectedBuilder: (context, day, focusedDay) {
                      return _buildDayCell(day, false, true);
                    },
                    outsideBuilder: (context, day, focusedDay) {
                      return _buildDayCell(day, false, false, isOutside: true);
                    },
                  ),
                ),

                const Divider(),

                // 图例和提示合并
                Padding(
                  padding: const EdgeInsets.symmetric(
                    horizontal: 16,
                    vertical: 12,
                  ),
                  child: Column(
                    children: [
                      // 图例和提示 - 自适应换行
                      Wrap(
                        alignment: WrapAlignment.center,
                        crossAxisAlignment: WrapCrossAlignment.center,
                        spacing: 12,
                        runSpacing: 8,
                        children: [
                          _buildLegendItem(Icons.work, '工作日', Colors.blue),
                          _buildLegendItem(Icons.weekend, '周末', Colors.green),
                          _buildLegendItem(
                            Icons.celebration,
                            '节假日',
                            Colors.red,
                          ),
                          Row(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              Container(
                                width: 6,
                                height: 6,
                                decoration: BoxDecoration(
                                  color: Colors.grey.shade400,
                                  shape: BoxShape.circle,
                                ),
                              ),
                              const SizedBox(width: 6),
                              Text(
                                '长按可修改工作日/休息日',
                                style: TextStyle(
                                  fontSize: 11,
                                  color: Colors.grey.shade600,
                                  height: 1.2,
                                ),
                              ),
                            ],
                          ),
                        ],
                      ),
                      const SizedBox(height: 10),
                      // 小部件区域（可配置的天气和日历卡片）
                      Consumer2<MsnService, DashboardWidgetService>(
                        builder: (context, msnService, widgetService, child) {
                          final widgets = widgetService.visibleWidgets;

                          return Column(
                            children: [
                              // 可拖动的小部件列表
                              ReorderableListView(
                                shrinkWrap: true,
                                physics: const NeverScrollableScrollPhysics(),
                                buildDefaultDragHandles: false,
                                padding: EdgeInsets.zero,
                                onReorderStart: (index) {
                                  // 长按进入可拖动状态时震动
                                  HapticFeedback.mediumImpact();
                                },
                                onReorder: (oldIndex, newIndex) {
                                  // 调整顺序时震动反馈
                                  HapticFeedback.lightImpact();
                                  widgetService.reorderWidgets(
                                    oldIndex,
                                    newIndex,
                                  );
                                },
                                children: widgets.asMap().entries.map((entry) {
                                  final index = entry.key;
                                  final widget = entry.value;
                                  Widget card;
                                  switch (widget.type) {
                                    case WidgetType.weather:
                                      card = WeatherWidgetCard(
                                        weatherData: msnService.weatherData,
                                        isLoading: msnService.isLoading,
                                        onRefresh: () => msnService.fetchData(
                                          forceRefresh: true,
                                        ),
                                      );
                                      break;
                                    case WidgetType.calendar:
                                      card = CalendarWidgetCard(
                                        calendarData: msnService.calendarData,
                                        isLoading: msnService.isLoading,
                                        onRefresh: () => msnService.fetchData(
                                          forceRefresh: true,
                                        ),
                                      );
                                      break;
                                  }
                                  return ReorderableDelayedDragStartListener(
                                    key: ValueKey(widget.id),
                                    index: index,
                                    child: card,
                                  );
                                }).toList(),
                              ),

                              // 管理按钮
                              const SizedBox(height: 16),
                              Center(
                                child: OutlinedButton.icon(
                                  onPressed: () => _showWidgetManagementDialog(
                                    widgetService,
                                  ),
                                  icon: const Icon(Icons.add),
                                  label: const Text('管理小部件'),
                                  style: OutlinedButton.styleFrom(
                                    padding: const EdgeInsets.symmetric(
                                      horizontal: 24,
                                      vertical: 12,
                                    ),
                                  ),
                                ),
                              ),
                              const SizedBox(height: 16),
                            ],
                          );
                        },
                      ),
                    ],
                  ),
                ),
              ],
            ),
          );
        },
      ),
    );
  }

  Widget _buildDayCell(
    DateTime day,
    bool isToday,
    bool isSelected, {
    bool isOutside = false,
  }) {
    final dayService = context.read<DayService>();
    final normalizedDay = DateTime(day.year, day.month, day.day);
    final dayType = dayService.monthDayTypes[normalizedDay];
    final holiday = dayService.monthHolidays[normalizedDay];

    Color? backgroundColor;
    Color? textColor;

    if (isSelected) {
      backgroundColor = Colors.blue.shade600;
      textColor = Colors.white;
    } else if (isToday) {
      backgroundColor = Colors.blue.shade200;
      textColor = Colors.white;
    } else if (dayType != null) {
      switch (dayType) {
        case DayType.workday:
          backgroundColor = Colors.blue.shade50;
          textColor = Colors.blue.shade900;
          break;
        case DayType.weekend:
          backgroundColor = Colors.green.shade50;
          textColor = Colors.green.shade900;
          break;
        case DayType.holiday:
          backgroundColor = Colors.red.shade50;
          textColor = Colors.red; // 节假日用红色
          break;
      }
    }

    if (isOutside) {
      textColor = Colors.grey.shade400;
      backgroundColor = null;
    }

    return Container(
      margin: const EdgeInsets.all(4),
      decoration: BoxDecoration(color: backgroundColor, shape: BoxShape.circle),
      child: Stack(
        children: [
          Center(
            child: Text(
              '${day.day}',
              style: TextStyle(
                color: textColor,
                fontWeight: isToday || isSelected ? FontWeight.bold : null,
                fontSize: 14,
              ),
            ),
          ),
          // 节假日标记
          if (holiday != null && !isOutside)
            Positioned(
              top: 2,
              left: 0,
              right: 0,
              child: Center(
                child: Container(
                  padding: const EdgeInsets.symmetric(
                    horizontal: 3,
                    vertical: 1,
                  ),
                  decoration: BoxDecoration(
                    color: holiday.isWorkday
                        ? Colors
                              .orange
                              .shade100 // 补班用橙色背景
                        : Colors.red.shade100, // 假日用红色背景
                    borderRadius: BorderRadius.circular(3),
                  ),
                  child: Text(
                    _getHolidayLabel(holiday),
                    style: TextStyle(
                      color: holiday.isWorkday
                          ? Colors
                                .orange
                                .shade900 // 补班文字用深橙色
                          : Colors.red.shade900, // 假日文字用深红色
                      fontSize: 8,
                      height: 1.0,
                      fontWeight: FontWeight.w600,
                    ),
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                  ),
                ),
              ),
            ),
        ],
      ),
    );
  }

  /// 获取节假日显示标签
  String _getHolidayLabel(Holiday holiday) {
    if (!holiday.isWorkday) {
      return holiday.name; // 真正的节假日显示名称
    }

    // 补班日：根据 after 字段区分
    if (holiday.after != null && holiday.target != null) {
      return holiday.after! ? '节后班' : '节前班';
    }

    return '补班'; // 兜底
  }

  Widget _buildLegendItem(IconData icon, String label, Color color) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        Container(
          width: 20,
          height: 20,
          decoration: BoxDecoration(
            color: color.withAlpha((0.2 * 255).round()),
            shape: BoxShape.circle,
          ),
          child: Icon(icon, size: 12, color: color),
        ),
        const SizedBox(width: 4),
        Text(label, style: const TextStyle(fontSize: 11)),
      ],
    );
  }
}
