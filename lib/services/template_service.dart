import 'package:intl/intl.dart';
import '../models/schedule.dart';
import '../models/schedule_template.dart';
import '../models/schedule_priority.dart';
import '../models/day_type.dart';
import 'database_service.dart';
import 'day_service.dart';

/// 模板服务
/// 处理日程模板的创建、应用和优先级覆盖逻辑
class TemplateService {
  final DatabaseService _dbService;
  final DayService _dayService;

  TemplateService(this._dbService, this._dayService);

  // ==================== 模板管理 ====================

  /// 创建或更新模板
  Future<void> saveTemplate(ScheduleTemplate template) async {
    final existing = await _dbService.getAllTemplates();
    final exists = existing.any((t) => t.id == template.id);
    
    if (exists) {
      await _dbService.updateTemplate(template);
    } else {
      await _dbService.insertTemplate(template);
    }
  }

  /// 批量保存某个类型的所有模板
  Future<void> saveTemplates(TemplateType type, List<ScheduleTemplate> templates) async {
    // 删除该类型的旧模板
    final oldTemplates = await _dbService.getTemplatesByType(type);
    for (final old in oldTemplates) {
      await _dbService.deleteTemplate(old.id);
    }
    
    // 保存新模板
    for (final template in templates) {
      await _dbService.insertTemplate(template);
    }
  }

  /// 获取指定类型的模板
  Future<List<ScheduleTemplate>> getTemplates(TemplateType type) async {
    return await _dbService.getTemplatesByType(type);
  }

  /// 删除模板
  Future<void> deleteTemplate(String id) async {
    await _dbService.deleteTemplate(id);
  }

  // ==================== 日程生成与覆盖逻辑 ====================

  /// 为指定日期生成日程
  /// 根据优先级层级自动应用模板
  Future<List<Schedule>> generateSchedulesForDate(DateTime date) async {
    final schedules = <Schedule>[];
    
    // 1. 检查是否已有特殊日程（优先级4）
    final existingSchedules = await _dbService.getSchedulesByDate(date);
    final specialSchedules = existingSchedules
        .where((s) => s.priority == SchedulePriority.specific)
        .toList();
    
    if (specialSchedules.isNotEmpty) {
      // 如果有特殊日程，直接返回（最高优先级）
      return specialSchedules;
    }

    // 2. 检查大小周模板（优先级3）
    final biweeklySchedules = await _generateBiweeklySchedules(date);
    if (biweeklySchedules.isNotEmpty) {
      schedules.addAll(biweeklySchedules);
    }

    // 3. 检查工作日/休息日模板（优先级2）
    if (schedules.isEmpty) {
      final weekdaySchedules = await _generateWeekdaySchedules(date);
      schedules.addAll(weekdaySchedules);
    }

    // 4. 返回生成的日程（如果没有任何模板，返回空列表）
    return schedules;
  }

  /// 生成大小周日程
  Future<List<Schedule>> _generateBiweeklySchedules(DateTime date) async {
    // 判断是大周还是小周
    final weekNumber = _getWeekNumber(date);
    final isBigWeek = weekNumber % 2 == 1;
    
    final templateType = isBigWeek ? TemplateType.bigWeek : TemplateType.smallWeek;
    final templates = await getTemplates(templateType);
    
    return _createSchedulesFromTemplates(templates, date, SchedulePriority.weekly);
  }

  /// 生成工作日/休息日日程
  Future<List<Schedule>> _generateWeekdaySchedules(DateTime date) async {
    final dayType = await _dayService.getDayType(date);
    
    TemplateType templateType;
    if (dayType == DayType.workday) {
      templateType = TemplateType.workday;
    } else {
      templateType = TemplateType.restday;
    }
    
    final templates = await getTemplates(templateType);
    return _createSchedulesFromTemplates(templates, date, SchedulePriority.template);
  }

  /// 从模板创建日程
  List<Schedule> _createSchedulesFromTemplates(
    List<ScheduleTemplate> templates,
    DateTime date,
    SchedulePriority priority,
  ) {
    return templates.map((template) {
      DateTime? startTime;
      DateTime? endTime;
      
      if (template.startTime != null) {
        final parts = template.startTime!.split(':');
        startTime = DateTime(
          date.year,
          date.month,
          date.day,
          int.parse(parts[0]),
          int.parse(parts[1]),
        );
      }
      
      if (template.endTime != null) {
        final parts = template.endTime!.split(':');
        endTime = DateTime(
          date.year,
          date.month,
          date.day,
          int.parse(parts[0]),
          int.parse(parts[1]),
        );
      }
      
      return Schedule(
        title: template.title,
        description: template.description,
        date: date,
        startTime: startTime,
        endTime: endTime,
        priority: priority,
        templateType: template.templateType,
        sourceTemplateId: template.id,
      );
    }).toList();
  }

  /// 应用模板到指定日期
  /// 会根据优先级覆盖现有日程
  Future<void> applyTemplatesToDate(DateTime date) async {
    final generatedSchedules = await generateSchedulesForDate(date);
    final existingSchedules = await _dbService.getSchedulesByDate(date);
    
    // 删除可被覆盖的低优先级日程
    for (final existing in existingSchedules) {
      if (existing.allowOverride && generatedSchedules.isNotEmpty) {
        final newPriority = generatedSchedules.first.priority;
        if (newPriority.canOverride(existing.priority)) {
          await _dbService.deleteSchedule(existing.id);
        }
      }
    }
    
    // 插入新生成的日程
    for (final schedule in generatedSchedules) {
      await _dbService.insertSchedule(schedule);
    }
  }

  /// 批量应用模板到日期范围
  Future<void> applyTemplatesToRange(DateTime startDate, DateTime endDate) async {
    DateTime current = startDate;
    while (current.isBefore(endDate) || current.isAtSameMomentAs(endDate)) {
      await applyTemplatesToDate(current);
      current = current.add(const Duration(days: 1));
    }
  }

  // ==================== 辅助方法 ====================

  /// 获取指定日期是一年中的第几周
  int _getWeekNumber(DateTime date) {
    final firstDayOfYear = DateTime(date.year, 1, 1);
    final daysSinceFirstDay = date.difference(firstDayOfYear).inDays;
    return (daysSinceFirstDay / 7).ceil() + 1;
  }

  /// 获取某日期所属的大小周类型
  Future<TemplateType> getBiweeklyType(DateTime date) async {
    final weekNumber = _getWeekNumber(date);
    return weekNumber % 2 == 1 ? TemplateType.bigWeek : TemplateType.smallWeek;
  }

  /// 验证时间格式 "HH:mm"
  bool isValidTimeFormat(String time) {
    final pattern = RegExp(r'^([01]\d|2[0-3]):([0-5]\d)$');
    return pattern.hasMatch(time);
  }

  /// 格式化时间为 "HH:mm"
  String formatTime(DateTime time) {
    return DateFormat('HH:mm').format(time);
  }
}
