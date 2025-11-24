import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:table_calendar/table_calendar.dart';
import 'package:intl/intl.dart';
import '../models/day_type.dart';
import '../models/work_schedule.dart';
import '../services/day_service.dart';
import '../services/work_schedule_service.dart';

/// 日历页面
class CalendarScreen extends StatefulWidget {
  final void Function(DateTime)? onDateSelected;
  
  const CalendarScreen({super.key, this.onDateSelected});

  @override
  State<CalendarScreen> createState() => _CalendarScreenState();
}

class _CalendarScreenState extends State<CalendarScreen> {
  DateTime _focusedDay = DateTime.now();
  DateTime? _selectedDay;
  
  Map<DateTime, DayType> _dayTypes = {};

  @override
  void initState() {
    super.initState();
    _selectedDay = _focusedDay;
    _loadDayTypes();
  }

  Future<void> _loadDayTypes() async {
    final dayService = Provider.of<DayService>(context, listen: false);
    
    // 获取当前月份的所有日期
    final lastDay = DateTime(_focusedDay.year, _focusedDay.month + 1, 0);
    
    final dates = <DateTime>[];
    for (var i = 0; i < lastDay.day; i++) {
      dates.add(DateTime(_focusedDay.year, _focusedDay.month, i + 1));
    }
    
    final dayTypes = await dayService.getDayTypes(dates);
    
    setState(() {
      _dayTypes = dayTypes;
    });
  }

  Future<void> _showDayTypeDialog(DateTime day) async {
    final dayService = Provider.of<DayService>(context, listen: false);
    final normalizedDay = DateTime(day.year, day.month, day.day);
    
    // 获取当前设置和默认日期类型
    final currentOverride = dayService.getDayOverride(normalizedDay);
    final defaultDayType = await dayService.getDayType(normalizedDay);
    
    // 判断默认是工作日还是休息日
    final isDefaultWorkday = defaultDayType == DayType.workday;
    
    final result = await showDialog<DayType?>(
      context: context,
      builder: (context) => AlertDialog(
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
                color: currentOverride != null ? Colors.orange.shade50 : Colors.blue.shade50,
                borderRadius: BorderRadius.circular(8),
                border: Border.all(
                  color: currentOverride != null ? Colors.orange.shade200 : Colors.blue.shade200,
                ),
              ),
              child: Row(
                children: [
                  Icon(
                    currentOverride != null ? Icons.edit_calendar : Icons.info_outline,
                    size: 20,
                    color: currentOverride != null ? Colors.orange.shade700 : Colors.blue.shade700,
                  ),
                  const SizedBox(width: 8),
                  Expanded(
                    child: Text(
                      currentOverride != null 
                          ? '已手动设置为：${currentOverride.dayType.displayName}'
                          : '默认为：${defaultDayType.displayName}',
                      style: TextStyle(
                        fontSize: 13,
                        color: currentOverride != null ? Colors.orange.shade900 : Colors.blue.shade900,
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
    );

    if (result != null) {
      // 用户选择了新的类型
      await dayService.setDayOverride(normalizedDay, result);
      _loadDayTypes();
    } else if (currentOverride != null && result == null) {
      // 用户选择恢复默认
      await dayService.removeDayOverride(normalizedDay);
      _loadDayTypes();
    }
  }

  /// 处理工作制切换
  Future<void> _handleWorkScheduleChange(WorkScheduleType type) async {
    final workScheduleService = Provider.of<WorkScheduleService>(context, listen: false);
    
    if (type == WorkScheduleType.biweekly) {
      // 如果选择大小周，显示设置对话框
      await _showBiweeklySettingDialog();
    } else {
      // 直接设置单休或双休
      await workScheduleService.setWorkScheduleType(type);
      _loadDayTypes();
      
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('已切换为${type.label}')),
        );
      }
    }
  }

  /// 显示大小周设置对话框
  Future<void> _showBiweeklySettingDialog() async {
    final workScheduleService = Provider.of<WorkScheduleService>(context, listen: false);
    final now = DateTime.now();
    final weekStart = _getWeekStart(now);
    final weekEnd = workScheduleService.getWeekEnd(now);
    
    final result = await showDialog<BiweeklyType>(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('设置本周'),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              '本周日期范围',
              style: TextStyle(
                fontSize: 14,
                color: Colors.grey.shade600,
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 8),
            Text(
              '${DateFormat('M月d日').format(weekStart)} 星期一 - ${DateFormat('M月d日').format(weekEnd)} 星期天',
              style: const TextStyle(fontSize: 16),
            ),
            const SizedBox(height: 24),
            const Text(
              '本周是：',
              style: TextStyle(
                fontSize: 14,
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 8),
          ],
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('取消'),
          ),
          OutlinedButton(
            onPressed: () => Navigator.pop(context, BiweeklyType.bigWeek),
            child: const Text('大周（2休）'),
          ),
          FilledButton(
            onPressed: () => Navigator.pop(context, BiweeklyType.smallWeek),
            child: const Text('小周（1休）'),
          ),
        ],
      ),
    );
    
    if (result != null) {
      await workScheduleService.setWorkScheduleType(WorkScheduleType.biweekly);
      await workScheduleService.setBiweeklyType(weekStart, result);
      _loadDayTypes();
      
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('已设置为${result.label}')),
        );
      }
    }
  }

  /// 获取周的起始日期（周一）
  DateTime _getWeekStart(DateTime date) {
    final weekday = date.weekday;
    return DateTime(date.year, date.month, date.day).subtract(
      Duration(days: weekday - 1),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('日历'),
        actions: [
          IconButton(
            icon: const Icon(Icons.today),
            onPressed: () {
              setState(() {
                _focusedDay = DateTime.now();
                _selectedDay = DateTime.now();
              });
              _loadDayTypes();
            },
          ),
          PopupMenuButton<WorkScheduleType>(
            icon: const Icon(Icons.more_vert),
            onSelected: (type) => _handleWorkScheduleChange(type),
            itemBuilder: (context) => [
              const PopupMenuItem(
                value: WorkScheduleType.singleRest,
                child: Text('单休'),
              ),
              const PopupMenuItem(
                value: WorkScheduleType.biweekly,
                child: Text('大小周'),
              ),
              const PopupMenuItem(
                value: WorkScheduleType.doubleRest,
                child: Text('双休'),
              ),
            ],
          ),
        ],
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [
            TableCalendar(
              firstDay: DateTime(2020),
              lastDay: DateTime(2030),
              focusedDay: _focusedDay,
              selectedDayPredicate: (day) => isSameDay(_selectedDay, day),
              calendarFormat: CalendarFormat.month,
              availableCalendarFormats: const {
                CalendarFormat.month: '月',
              },
              locale: 'zh_CN',
              
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
              
              onPageChanged: (focusedDay) {
                _focusedDay = focusedDay;
                _loadDayTypes();
              },
              
              onDayLongPressed: (selectedDay, focusedDay) {
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
            
            // 图例
            Padding(
              padding: const EdgeInsets.all(16),
              child: Wrap(
                spacing: 16,
                runSpacing: 8,
                children: [
                  _buildLegendItem(Icons.work, '工作日', Colors.blue),
                  _buildLegendItem(Icons.weekend, '周末', Colors.green),
                  _buildLegendItem(Icons.celebration, '节假日', Colors.red),
                ],
              ),
            ),
            
            const Divider(),
            
            // 提示信息
            Padding(
              padding: const EdgeInsets.all(16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    '长按日期设置：',
                    style: TextStyle(
                      fontSize: 12,
                      fontWeight: FontWeight.bold,
                      color: Colors.grey.shade700,
                    ),
                  ),
                const SizedBox(height: 4),
                Text(
                  '• 工作日 → 设置休假',
                  style: TextStyle(fontSize: 12, color: Colors.grey.shade600),
                ),
                Text(
                  '• 休息日 → 设置加班',
                  style: TextStyle(fontSize: 12, color: Colors.grey.shade600),
                ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildDayCell(DateTime day, bool isToday, bool isSelected, {bool isOutside = false}) {
    final normalizedDay = DateTime(day.year, day.month, day.day);
    final dayType = _dayTypes[normalizedDay];
    
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
          textColor = Colors.red.shade900;
          break;
      }
    }
    
    if (isOutside) {
      textColor = Colors.grey.shade400;
      backgroundColor = null;
    }

    return Container(
      margin: const EdgeInsets.all(4),
      decoration: BoxDecoration(
        color: backgroundColor,
        shape: BoxShape.circle,
      ),
      child: Center(
        child: Text(
          '${day.day}',
          style: TextStyle(
            color: textColor,
            fontWeight: isToday || isSelected ? FontWeight.bold : null,
          ),
        ),
      ),
    );
  }

  Widget _buildLegendItem(IconData icon, String label, Color color) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        Container(
          width: 24,
          height: 24,
          decoration: BoxDecoration(
            color: color.withOpacity(0.2),
            shape: BoxShape.circle,
          ),
          child: Icon(icon, size: 14, color: color),
        ),
        const SizedBox(width: 4),
        Text(label, style: const TextStyle(fontSize: 12)),
      ],
    );
  }
}
