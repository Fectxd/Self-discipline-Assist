import 'package:flutter/material.dart';
import '../services/database_service.dart';
import '../services/template_service.dart';
import '../services/nlp_command_parser.dart';
import '../services/day_service.dart';
import '../services/holiday_service.dart';
import '../models/schedule.dart';
import '../models/schedule_template.dart';
import '../models/schedule_priority.dart';

/// 日程层级体系使用示例
/// 演示如何使用新的优先级系统和自然语言命令
void main() async {
  // 初始化服务
  final dbService = DatabaseService();
  final holidayService = HolidayService();
  final dayService = DayService(dbService, holidayService);
  final templateService = TemplateService(dbService, dayService);
  final nlpParser = NLPCommandParser(dbService, templateService);

  // ==================== 示例 1: 设置工作日模板 ====================
  print('=== 示例 1: 设置工作日模板 ===');
  
  final workdayTemplates = [
    ScheduleTemplate(
      title: '晨跑',
      templateType: TemplateType.workday,
      priority: SchedulePriority.weekdayTemplate,
      startTime: '06:00',
      endTime: '07:00',
      sortOrder: 0,
    ),
    ScheduleTemplate(
      title: '工作',
      templateType: TemplateType.workday,
      priority: SchedulePriority.weekdayTemplate,
      startTime: '09:00',
      endTime: '18:00',
      sortOrder: 1,
    ),
    ScheduleTemplate(
      title: '学习',
      templateType: TemplateType.workday,
      priority: SchedulePriority.weekdayTemplate,
      startTime: '19:00',
      endTime: '21:00',
      sortOrder: 2,
    ),
  ];

  await templateService.saveTemplates(TemplateType.workday, workdayTemplates);
  print('✓ 工作日模板已设置');

  // ==================== 示例 2: 设置大小周模板 ====================
  print('\n=== 示例 2: 设置大小周模板 ===');
  
  // 大周（工作强度较大）
  final bigWeekTemplates = [
    ScheduleTemplate(
      title: '晨跑',
      templateType: TemplateType.bigWeek,
      priority: SchedulePriority.biweeklyTemplate,
      startTime: '06:30',
      endTime: '07:30',
      sortOrder: 0,
    ),
    ScheduleTemplate(
      title: '工作(加班)',
      templateType: TemplateType.bigWeek,
      priority: SchedulePriority.biweeklyTemplate,
      startTime: '09:00',
      endTime: '19:00',
      sortOrder: 1,
    ),
  ];

  await templateService.saveTemplates(TemplateType.bigWeek, bigWeekTemplates);
  print('✓ 大周模板已设置');

  // ==================== 示例 3: 使用自然语言命令 ====================
  print('\n=== 示例 3: 使用自然语言命令 ===');
  
  // 创建日程
  String result = await nlpParser.parseAndExecute('创建 今天 团队会议 在 14:00-15:30 描述:讨论Q4目标');
  print('命令: 创建 今天 团队会议 在 14:00-15:30 描述:讨论Q4目标');
  print('结果: $result');

  // 修改日程
  result = await nlpParser.parseAndExecute('修改 今天 的 团队会议 时间为 15:00-16:00');
  print('\n命令: 修改 今天 的 团队会议 时间为 15:00-16:00');
  print('结果: $result');

  // 查询日程
  result = await nlpParser.parseAndExecute('查询 今天 的日程');
  print('\n命令: 查询 今天 的日程');
  print('结果:\n$result');

  // ==================== 示例 4: 优先级覆盖演示 ====================
  print('\n=== 示例 4: 优先级覆盖演示 ===');
  
  final today = DateTime.now();
  
  // 1. 先应用工作日模板
  await templateService.applyTemplatesToDate(today);
  print('✓ 已应用工作日模板');
  
  // 2. 创建特殊日程（高优先级）
  final specialSchedule = Schedule(
    title: '紧急会议',
    description: '客户需求讨论',
    date: today,
    startTime: DateTime(today.year, today.month, today.day, 10, 0),
    endTime: DateTime(today.year, today.month, today.day, 11, 30),
    priority: SchedulePriority.special,  // 特殊日程，最高优先级
    allowOverride: false,  // 不允许被覆盖
  );
  
  await dbService.insertSchedule(specialSchedule);
  print('✓ 已创建特殊日程（不会被模板覆盖）');

  // 3. 再次应用模板，特殊日程不会被覆盖
  await templateService.applyTemplatesToDate(today);
  
  final schedules = await dbService.getSchedulesByDate(today);
  print('\n最终日程列表:');
  for (final s in schedules) {
    print('- ${s.title} (优先级: ${s.priority.label})');
  }

  // ==================== 示例 5: 生成日期范围的日程 ====================
  print('\n=== 示例 5: 批量生成未来7天的日程 ===');
  
  final startDate = DateTime.now();
  final endDate = startDate.add(const Duration(days: 7));
  
  await templateService.applyTemplatesToRange(startDate, endDate);
  print('✓ 已为未来7天生成日程模板');

  // ==================== 示例 6: 智能调整场景 ====================
  print('\n=== 示例 6: 突发情况智能调整 ===');
  
  // 用户: "今天下午2点有个医院预约"
  // GPT 应该:
  // 1. 创建高优先级日程
  // 2. 检测冲突
  // 3. 调整其他日程
  
  final hospitalSchedule = Schedule(
    title: '医院预约',
    date: today,
    startTime: DateTime(today.year, today.month, today.day, 14, 0),
    endTime: DateTime(today.year, today.month, today.day, 16, 0),
    priority: SchedulePriority.special,
    allowOverride: false,
  );
  
  await dbService.insertSchedule(hospitalSchedule);
  print('✓ 已创建医院预约（特殊日程）');
  
  // 获取冲突的日程并调整
  final allSchedules = await dbService.getSchedulesByDate(today);
  print('\n当天所有日程:');
  for (final s in allSchedules) {
    final timeStr = s.startTime != null && s.endTime != null
        ? '${s.startTime!.hour}:${s.startTime!.minute.toString().padLeft(2, '0')}-${s.endTime!.hour}:${s.endTime!.minute.toString().padLeft(2, '0')}'
        : '全天';
    print('- $timeStr ${s.title} [${s.priority.label}]');
  }

  print('\n=== 所有示例完成 ===');
}

/// 在 Flutter Widget 中使用的示例
class ScheduleExampleWidget extends StatefulWidget {
  const ScheduleExampleWidget({super.key});

  @override
  State<ScheduleExampleWidget> createState() => _ScheduleExampleWidgetState();
}

class _ScheduleExampleWidgetState extends State<ScheduleExampleWidget> {
  final _commandController = TextEditingController();
  String _result = '';
  
  late DatabaseService _dbService;
  late TemplateService _templateService;
  late NLPCommandParser _nlpParser;

  @override
  void initState() {
    super.initState();
    _initServices();
  }

  void _initServices() {
    _dbService = DatabaseService();
    final holidayService = HolidayService();
    final dayService = DayService(_dbService, holidayService);
    _templateService = TemplateService(_dbService, dayService);
    _nlpParser = NLPCommandParser(_dbService, _templateService);
  }

  Future<void> _executeCommand() async {
    final command = _commandController.text.trim();
    if (command.isEmpty) return;

    final result = await _nlpParser.parseAndExecute(command);
    setState(() {
      _result = result;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('自然语言命令示例'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            TextField(
              controller: _commandController,
              decoration: const InputDecoration(
                labelText: '输入命令',
                hintText: '例如: 创建 今天 晨跑 在 06:00-07:00',
                border: OutlineInputBorder(),
              ),
            ),
            const SizedBox(height: 16),
            ElevatedButton(
              onPressed: _executeCommand,
              child: const Text('执行命令'),
            ),
            const SizedBox(height: 16),
            if (_result.isNotEmpty)
              Card(
                child: Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Text(_result),
                ),
              ),
            const SizedBox(height: 16),
            const Text(
              '常用命令示例:',
              style: TextStyle(fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 8),
            _buildCommandExample('创建 今天 晨跑 在 06:00-07:00'),
            _buildCommandExample('修改 今天 的 晨跑 时间为 06:30-07:30'),
            _buildCommandExample('删除 今天 的 晨跑'),
            _buildCommandExample('完成 晨跑'),
            _buildCommandExample('查询 今天 的日程'),
            _buildCommandExample('设置工作日模板: 06:00-07:00 晨跑, 09:00-18:00 工作'),
          ],
        ),
      ),
    );
  }

  Widget _buildCommandExample(String command) {
    return ListTile(
      title: Text(command),
      trailing: IconButton(
        icon: const Icon(Icons.copy),
        onPressed: () {
          _commandController.text = command;
        },
      ),
    );
  }

  @override
  void dispose() {
    _commandController.dispose();
    super.dispose();
  }
}
