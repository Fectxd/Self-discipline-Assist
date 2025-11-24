import 'package:intl/intl.dart';
import '../models/schedule.dart';
import '../models/schedule_template.dart';
import '../models/schedule_priority.dart';
import 'database_service.dart';
import 'template_service.dart';

/// 自然语言命令解析器
/// 提供标准化的命令格式，便于 GPT 集成
class NLPCommandParser {
  final DatabaseService _dbService;
  final TemplateService _templateService;

  NLPCommandParser(this._dbService, this._templateService);

  /// 解析并执行命令
  Future<String> parseAndExecute(String command) async {
    try {
      final normalizedCmd = command.trim().toLowerCase();
      
      if (normalizedCmd.startsWith('创建')) {
        return await _handleCreateCommand(command);
      } else if (normalizedCmd.startsWith('修改')) {
        return await _handleUpdateCommand(command);
      } else if (normalizedCmd.startsWith('删除')) {
        return await _handleDeleteCommand(command);
      } else if (normalizedCmd.startsWith('完成')) {
        return await _handleCompleteCommand(command);
      } else if (normalizedCmd.contains('设置') && normalizedCmd.contains('模板')) {
        return await _handleSetTemplateCommand(command);
      } else if (normalizedCmd.startsWith('查询') || normalizedCmd.startsWith('显示')) {
        return await _handleQueryCommand(command);
      }
      
      return '无法识别的命令格式';
    } catch (e) {
      return '命令执行失败: $e';
    }
  }

  // ==================== 日程操作 ====================

  /// 处理创建命令
  /// 格式: 创建 [范围] [标题] 在 [时间]
  /// 示例: 创建 今天 晨跑 在 06:00-07:00
  /// 示例: 创建 2024-11-25 开会 在 14:00-15:30 描述:讨论项目进度
  Future<String> _handleCreateCommand(String command) async {
    final parts = _parseCommand(command);
    
    // 提取日期
    DateTime? date = _extractDate(parts);
    if (date == null) return '无法识别日期';
    
    // 提取标题
    String? title = _extractTitle(parts);
    if (title == null || title.isEmpty) return '缺少日程标题';
    
    // 提取时间
    final timeRange = _extractTimeRange(parts);
    DateTime? startTime = timeRange['start'];
    DateTime? endTime = timeRange['end'];
    
    // 提取描述
    String? description = _extractDescription(parts);
    
    // 提取优先级
    SchedulePriority priority = _extractPriority(parts);
    
    // 创建日程
    final schedule = Schedule(
      title: title,
      description: description,
      date: date,
      startTime: startTime,
      endTime: endTime,
      priority: priority,
    );
    
    await _dbService.insertSchedule(schedule);
    
    final timeStr = startTime != null && endTime != null
        ? '${DateFormat('HH:mm').format(startTime)}-${DateFormat('HH:mm').format(endTime)}'
        : '全天';
    
    return '已创建日程: ${DateFormat('yyyy-MM-dd').format(date)} $timeStr $title';
  }

  /// 处理修改命令
  /// 格式: 修改 [日期] 的 [标题] 为 [新内容]
  /// 示例: 修改 今天 的 晨跑 为 晨跑+冥想
  /// 示例: 修改 2024-11-25 的 开会 时间为 15:00-16:00
  Future<String> _handleUpdateCommand(String command) async {
    final parts = _parseCommand(command);
    
    DateTime? date = _extractDate(parts);
    if (date == null) return '无法识别日期';
    
    String? title = _extractTitle(parts);
    if (title == null || title.isEmpty) return '缺少日程标题';
    
    // 查找现有日程
    final schedules = await _dbService.getSchedulesByDate(date);
    final schedule = schedules.where((s) => s.title.contains(title)).firstOrNull;
    
    if (schedule == null) return '未找到指定日程';
    
    // 解析修改内容
    String? newTitle;
    DateTime? newStartTime;
    DateTime? newEndTime;
    String? newDescription;
    
    if (command.contains('为 ')) {
      final newContent = command.split('为 ').last.trim();
      
      if (command.contains('时间为')) {
        final timeRange = _extractTimeRange({'时间': newContent});
        newStartTime = timeRange['start'];
        newEndTime = timeRange['end'];
      } else if (command.contains('描述为')) {
        newDescription = newContent;
      } else {
        newTitle = newContent;
      }
    }
    
    final updated = schedule.copyWith(
      title: newTitle,
      startTime: newStartTime,
      endTime: newEndTime,
      description: newDescription,
    );
    
    await _dbService.updateSchedule(updated);
    
    return '已更新日程: ${updated.title}';
  }

  /// 处理删除命令
  /// 格式: 删除 [日期] 的 [标题]
  /// 示例: 删除 今天 的 晨跑
  Future<String> _handleDeleteCommand(String command) async {
    final parts = _parseCommand(command);
    
    DateTime? date = _extractDate(parts);
    if (date == null) return '无法识别日期';
    
    String? title = _extractTitle(parts);
    if (title == null || title.isEmpty) return '缺少日程标题';
    
    final schedules = await _dbService.getSchedulesByDate(date);
    final schedule = schedules.where((s) => s.title.contains(title)).firstOrNull;
    
    if (schedule == null) return '未找到指定日程';
    
    await _dbService.deleteSchedule(schedule.id);
    
    return '已删除日程: ${schedule.title}';
  }

  /// 处理完成命令
  /// 格式: 完成 [标题]
  /// 示例: 完成 晨跑
  Future<String> _handleCompleteCommand(String command) async {
    final title = command.replaceFirst('完成', '').trim();
    if (title.isEmpty) return '缺少日程标题';
    
    final today = DateTime.now();
    final schedules = await _dbService.getSchedulesByDate(today);
    final schedule = schedules.where((s) => s.title.contains(title)).firstOrNull;
    
    if (schedule == null) return '未找到指定日程';
    
    final updated = schedule.copyWith(isCompleted: true);
    await _dbService.updateSchedule(updated);
    
    return '已完成日程: ${schedule.title}';
  }

  // ==================== 模板操作 ====================

  /// 处理设置模板命令
  /// 格式: 设置工作日模板: [日程列表]
  /// 示例: 设置工作日模板: 06:00-07:00 晨跑, 09:00-18:00 工作, 19:00-20:00 学习
  Future<String> _handleSetTemplateCommand(String command) async {
    TemplateType? type;
    
    if (command.contains('工作日模板')) {
      type = TemplateType.workday;
    } else if (command.contains('休息日模板')) {
      type = TemplateType.restday;
    } else if (command.contains('大周模板')) {
      type = TemplateType.bigWeek;
    } else if (command.contains('小周模板')) {
      type = TemplateType.smallWeek;
    } else {
      return '无法识别的模板类型';
    }
    
    // 提取日程列表
    final content = command.split(':').last.trim();
    final items = content.split(',');
    
    final templates = <ScheduleTemplate>[];
    int sortOrder = 0;
    
    for (final item in items) {
      final itemParts = item.trim().split(' ');
      if (itemParts.isEmpty) continue;
      
      String? startTime;
      String? endTime;
      String title = '';
      
      // 解析时间和标题
      if (itemParts[0].contains('-')) {
        final times = itemParts[0].split('-');
        startTime = times[0];
        endTime = times.length > 1 ? times[1] : null;
        title = itemParts.skip(1).join(' ');
      } else {
        title = itemParts.join(' ');
      }
      
      if (title.isEmpty) continue;
      
      final priority = type == TemplateType.bigWeek || type == TemplateType.smallWeek
          ? SchedulePriority.weekly
          : SchedulePriority.template;
      
      templates.add(ScheduleTemplate(
        title: title,
        templateType: type,
        priority: priority,
        startTime: startTime,
        endTime: endTime,
        sortOrder: sortOrder++,
      ));
    }
    
    await _templateService.saveTemplates(type, templates);
    
    return '已设置${type.label}: ${templates.length}个日程';
  }

  /// 处理查询命令
  /// 格式: 查询 [日期] 的日程
  /// 示例: 查询 今天 的日程
  Future<String> _handleQueryCommand(String command) async {
    final parts = _parseCommand(command);
    
    DateTime? date = _extractDate(parts);
    date ??= DateTime.now();
    
    final schedules = await _dbService.getSchedulesByDate(date);
    
    if (schedules.isEmpty) {
      return '${DateFormat('yyyy-MM-dd').format(date)} 没有日程';
    }
    
    final buffer = StringBuffer('${DateFormat('yyyy-MM-dd').format(date)} 的日程:\n');
    for (final schedule in schedules) {
      final timeStr = schedule.startTime != null && schedule.endTime != null
          ? '${DateFormat('HH:mm').format(schedule.startTime!)} - ${DateFormat('HH:mm').format(schedule.endTime!)}'
          : '全天';
      final status = schedule.isCompleted ? '✓' : '○';
      buffer.writeln('$status $timeStr ${schedule.title}');
    }
    
    return buffer.toString();
  }

  // ==================== 辅助方法 ====================

  /// 解析命令为键值对
  Map<String, String> _parseCommand(String command) {
    final result = <String, String>{};
    
    // 提取关键词
    result['原文'] = command;
    
    // 提取日期相关
    if (command.contains('今天') || command.contains('今日')) {
      result['日期'] = '今天';
    } else if (command.contains('明天')) {
      result['日期'] = '明天';
    } else if (command.contains('后天')) {
      result['日期'] = '后天';
    }
    
    // 提取数字日期 yyyy-MM-dd
    final datePattern = RegExp(r'(\d{4})-(\d{1,2})-(\d{1,2})');
    final dateMatch = datePattern.firstMatch(command);
    if (dateMatch != null) {
      result['日期'] = dateMatch.group(0)!;
    }
    
    // 提取时间
    final timePattern = RegExp(r'(\d{1,2}):(\d{2})');
    final timeMatches = timePattern.allMatches(command);
    if (timeMatches.isNotEmpty) {
      result['时间'] = timeMatches.map((m) => m.group(0)).join('-');
    }
    
    // 提取描述
    if (command.contains('描述:') || command.contains('描述：')) {
      final descParts = command.split(RegExp(r'描述[:：]'));
      if (descParts.length > 1) {
        result['描述'] = descParts[1].trim();
      }
    }
    
    // 提取优先级
    if (command.contains('特殊') || command.contains('重要')) {
      result['优先级'] = 'special';
    }
    
    return result;
  }

  /// 提取日期
  DateTime? _extractDate(Map<String, String> parts) {
    final dateStr = parts['日期'];
    if (dateStr == null) return null;
    
    final now = DateTime.now();
    
    switch (dateStr) {
      case '今天':
      case '今日':
        return DateTime(now.year, now.month, now.day);
      case '明天':
        return DateTime(now.year, now.month, now.day).add(const Duration(days: 1));
      case '后天':
        return DateTime(now.year, now.month, now.day).add(const Duration(days: 2));
      default:
        try {
          return DateTime.parse(dateStr);
        } catch (_) {
          return null;
        }
    }
  }

  /// 提取标题
  String? _extractTitle(Map<String, String> parts) {
    final original = parts['原文']!;
    
    // 移除命令关键词和日期时间等
    String title = original
        .replaceFirst(RegExp(r'^(创建|修改|删除|完成)\s*'), '')
        .replaceAll(RegExp(r'(今天|明天|后天|\d{4}-\d{1,2}-\d{1,2})'), '')
        .replaceAll(RegExp(r'在\s*\d{1,2}:\d{2}(-\d{1,2}:\d{2})?'), '')
        .replaceAll(RegExp(r'的\s*'), '')
        .replaceAll(RegExp(r'为\s*.+$'), '')
        .replaceAll(RegExp(r'描述[:：].+$'), '')
        .trim();
    
    return title.isNotEmpty ? title : null;
  }

  /// 提取时间范围
  Map<String, DateTime?> _extractTimeRange(Map<String, String> parts) {
    final timeStr = parts['时间'];
    if (timeStr == null) return {'start': null, 'end': null};
    
    final times = timeStr.split('-');
    DateTime? start;
    DateTime? end;
    
    if (times.isNotEmpty) {
      final startParts = times[0].split(':');
      if (startParts.length == 2) {
        final now = DateTime.now();
        start = DateTime(
          now.year,
          now.month,
          now.day,
          int.parse(startParts[0]),
          int.parse(startParts[1]),
        );
      }
    }
    
    if (times.length > 1) {
      final endParts = times[1].split(':');
      if (endParts.length == 2) {
        final now = DateTime.now();
        end = DateTime(
          now.year,
          now.month,
          now.day,
          int.parse(endParts[0]),
          int.parse(endParts[1]),
        );
      }
    }
    
    return {'start': start, 'end': end};
  }

  /// 提取描述
  String? _extractDescription(Map<String, String> parts) {
    return parts['描述'];
  }

  /// 提取优先级
  SchedulePriority _extractPriority(Map<String, String> parts) {
    final priorityStr = parts['优先级'];
    if (priorityStr == 'special') {
      return SchedulePriority.specific;
    }
    return SchedulePriority.daily;
  }
}

/// 命令模板类
/// 提供给 GPT 的标准命令格式参考
class CommandTemplates {
  static const String createSchedule = '''
创建 [日期] [标题] 在 [时间]
日期: 今天|明天|后天|yyyy-MM-dd
时间: HH:mm-HH:mm (可选)
示例: 创建 今天 晨跑 在 06:00-07:00
示例: 创建 2024-11-25 开会 在 14:00-15:30 描述:讨论项目进度
''';

  static const String updateSchedule = '''
修改 [日期] 的 [标题] 为 [新内容]
示例: 修改 今天 的 晨跑 为 晨跑+冥想
示例: 修改 2024-11-25 的 开会 时间为 15:00-16:00
''';

  static const String deleteSchedule = '''
删除 [日期] 的 [标题]
示例: 删除 今天 的 晨跑
''';

  static const String completeSchedule = '''
完成 [标题]
示例: 完成 晨跑
''';

  static const String setTemplate = '''
设置[模板类型]: [日程列表]
模板类型: 工作日模板|休息日模板|大周模板|小周模板
日程格式: HH:mm-HH:mm 标题, ...
示例: 设置工作日模板: 06:00-07:00 晨跑, 09:00-18:00 工作, 19:00-20:00 学习
''';

  static const String querySchedule = '''
查询 [日期] 的日程
示例: 查询 今天 的日程
示例: 查询 2024-11-25 的日程
''';

  static String getAllTemplates() {
    return '''
=== 日程管理命令模板 ===

1. $createSchedule

2. $updateSchedule

3. $deleteSchedule

4. $completeSchedule

5. $setTemplate

6. $querySchedule
''';
  }
}
