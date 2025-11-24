import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:intl/intl.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'dart:convert';
import '../models/schedule.dart';
import '../models/schedule_priority.dart';
import '../models/schedule_rule.dart';
import '../services/database_service.dart';
import '../services/day_service.dart';
import '../services/gpt_service.dart';
import '../services/import_export_service.dart';
import '../models/day_type.dart';
import '../models/holiday.dart';

/// AI 日程页面（集成聊天助手）
class ScheduleScreen extends StatefulWidget {
  final DateTime? initialDate;
  final GptService gptService;
  
  const ScheduleScreen({
    super.key,
    this.initialDate,
    required this.gptService,
  });

  @override
  State<ScheduleScreen> createState() => ScheduleScreenState();
}

class ScheduleScreenState extends State<ScheduleScreen> {

  DateTime _selectedDate = DateTime.now();
  List<Schedule> _schedules = [];
  Map<String, ScheduleRule> _rulesCache = {};
  DayType? _dayType;
  Holiday? _holiday;
  
  late GptService _gptService;
  final TextEditingController _textController = TextEditingController();
  final ScrollController _scheduleScrollController = ScrollController();
  final List<ChatMessage> _messages = [];
  bool _isLoading = false;

  static const String _keyMessages = 'chat_messages';

  @override
  void initState() {
    super.initState();
    if (widget.initialDate != null) {
      _selectedDate = widget.initialDate!;
    }
    // 使用从 MainScreen 传入的 GptService
    _gptService = widget.gptService;
    _loadSchedules();
    _loadMessages();
  }

  Future<void> _loadMessages() async {
    final prefs = await SharedPreferences.getInstance();
    final jsonStr = prefs.getString(_keyMessages);
    
    if (jsonStr != null) {
      try {
        final List<dynamic> jsonList = jsonDecode(jsonStr);
        setState(() {
          _messages.clear();
          _messages.addAll(jsonList.map((json) => ChatMessage.fromJson(json)));
        });
      } catch (e) {
        // 解析失败，添加欢迎消息
        _addWelcomeMessage();
      }
    } else {
      _addWelcomeMessage();
    }
  }

  void _addWelcomeMessage() {
    setState(() {
      _messages.add(ChatMessage(
        text: '嗨！我是你的智能助手 🤖\n\n你可以随便跟我聊天，比如：\n• "还没睡呢"\n• "明天干什么"\n• "帮我安排工作日晨练"\n\n我会根据你的日程给出建议~',
        isUser: false,
        timestamp: DateTime.now(),
      ));
    });
  }

  Future<void> _saveMessages() async {
    final prefs = await SharedPreferences.getInstance();
    final jsonList = _messages.map((m) => m.toJson()).toList();
    await prefs.setString(_keyMessages, jsonEncode(jsonList));
  }

  /// 外部更新选中日期
  void updateSelectedDate(DateTime date) {
    setState(() {
      _selectedDate = date;
    });
    _loadSchedules();
  }

  @override
  void dispose() {
    _textController.dispose();
    _scheduleScrollController.dispose();
    super.dispose();
  }

  Future<void> _loadSchedules() async {
    final dbService = Provider.of<DatabaseService>(context, listen: false);
    final dayService = Provider.of<DayService>(context, listen: false);
    
    final schedules = await dbService.getSchedulesByDate(_selectedDate);
    final dayType = await dayService.getDayType(_selectedDate);
    final holiday = await dayService.getHoliday(_selectedDate);
    
    // 加载所有规则到缓存
    final db = await dbService.database;
    final ruleMaps = await db.query('schedule_rules');
    final rulesCache = <String, ScheduleRule>{};
    for (var map in ruleMaps) {
      final rule = ScheduleRule.fromMap(map);
      rulesCache[rule.id] = rule;
    }
    
    setState(() {
      _schedules = schedules;
      _dayType = dayType;
      _holiday = holiday;
      _rulesCache = rulesCache;
    });
  }

  Future<void> _selectDate() async {
    final picked = await showDatePicker(
      context: context,
      initialDate: _selectedDate,
      firstDate: DateTime(2020),
      lastDate: DateTime(2030),
      locale: const Locale('zh', 'CN'),
    );

    if (picked != null && picked != _selectedDate) {
      setState(() {
        _selectedDate = picked;
      });
      _loadSchedules();
    }
  }

  Future<void> _handleSubmit(String text) async {
    if (text.trim().isEmpty) return;

    final userMessage = text.trim();
    _textController.clear();

    setState(() {
      _messages.add(ChatMessage(
        text: userMessage,
        isUser: true,
        timestamp: DateTime.now(),
      ));
      _isLoading = true;
    });

    await _saveMessages();
    _scrollToBottom();

    try {
      final response = await _gptService.chat(userMessage);

      setState(() {
        _messages.add(ChatMessage(
          text: response,
          isUser: false,
          timestamp: DateTime.now(),
        ));
        _isLoading = false;
        // 强制重建以显示新的审批卡片
      });

      await _saveMessages();
      _scrollToBottom();
      
      // 如果有新的审批操作，打印日志
      if (_gptService.pendingActions.isNotEmpty) {
        print('检测到 ${_gptService.pendingActions.length} 个待审批操作');
        for (var action in _gptService.pendingActions) {
          print('  - ${action.description}');
        }
      }
    } catch (e) {
      setState(() {
        _messages.add(ChatMessage(
          text: '抱歉，处理你的请求时出错了：$e',
          isUser: false,
          timestamp: DateTime.now(),
          isError: true,
        ));
        _isLoading = false;
      });

      await _saveMessages();
      _scrollToBottom();
    }
  }

  void _scrollToBottom() {
    Future.delayed(const Duration(milliseconds: 300), () {
      if (_scheduleScrollController.hasClients) {
        _scheduleScrollController.animateTo(
          _scheduleScrollController.position.maxScrollExtent,
          duration: const Duration(milliseconds: 300),
          curve: Curves.easeOut,
        );
      }
    });
  }

  Future<void> _approveAction(PendingAction action) async {
    try {
      print('开始执行操作 ${action.id}, 类型: ${action.type}, 描述: ${action.description}');
      print('操作数据: ${action.data}');
      
      await _gptService.executeAction(action.id);
      
      print('操作执行成功，清空聊天记录');
      
      setState(() {
        _messages.clear();
        _messages.add(ChatMessage(
          text: '✓ 已执行：${action.description}\n\n有其他需要帮忙的吗？',
          isUser: false,
          timestamp: DateTime.now(),
        ));
      });
      
      await _saveMessages();
      await _loadSchedules(); // 刷新日程列表
      
      print('日程列表已刷新，当前日程数量: ${_schedules.length}');
      
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('操作已执行，聊天记录已清空')),
        );
      }
    } catch (e) {
      print('执行操作失败: $e');
      print('堆栈跟踪: ${StackTrace.current}');
      
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text('执行失败：$e'),
            backgroundColor: Colors.red,
            duration: const Duration(seconds: 5),
          ),
        );
      }
    }
  }

  void _rejectAction(PendingAction action) {
    _gptService.rejectAction(action.id);
    setState(() {
      _messages.add(ChatMessage(
        text: '✗ 已拒绝：${action.description}',
        isUser: false,
        timestamp: DateTime.now(),
      ));
    });
    _saveMessages();
  }

  void _clearHistory() {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('清空对话'),
        content: const Text('确定要清空所有对话记录吗？'),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('取消'),
          ),
          TextButton(
            onPressed: () {
              setState(() {
                _messages.clear();
                _gptService.clearHistory();
                _gptService.pendingActions.clear();
                _addWelcomeMessage();
              });
              _saveMessages();
              Navigator.pop(context);
            },
            child: const Text('确定'),
          ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('AI 日程'),
        actions: [
          IconButton(
            icon: const Icon(Icons.today),
            onPressed: () {
              setState(() {
                _selectedDate = DateTime.now();
              });
              _loadSchedules();
            },
          ),
          IconButton(
            icon: const Icon(Icons.delete_outline),
            onPressed: _clearHistory,
            tooltip: '清空对话',
          ),
        ],
      ),
      body: Column(
        children: [
          // 日期选择器（固定顶部）
          Container(
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(
              color: Theme.of(context).colorScheme.primaryContainer,
              boxShadow: [
                BoxShadow(
                  color: Colors.black.withOpacity(0.05),
                  blurRadius: 4,
                  offset: const Offset(0, 2),
                ),
              ],
            ),
            child: Row(
              children: [
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        DateFormat('yyyy年MM月dd日 EEEE', 'zh_CN').format(_selectedDate),
                        style: Theme.of(context).textTheme.titleLarge,
                      ),
                      const SizedBox(height: 4),
                      Row(
                        children: [
                          _buildDayTypeChip(),
                          if (_holiday != null) ...[
                            const SizedBox(width: 8),
                            Chip(
                              label: Text(_holiday!.name),
                              backgroundColor: Colors.red.shade100,
                              padding: EdgeInsets.zero,
                              visualDensity: VisualDensity.compact,
                            ),
                          ],
                          // 如果是当天，显示"当天"标签（放在最后）
                          if (_isToday()) ...[
                            const SizedBox(width: 8),
                            Chip(
                              label: const Text('当天', style: TextStyle(fontSize: 12)),
                              backgroundColor: Colors.blue.shade100,
                              padding: EdgeInsets.zero,
                              visualDensity: VisualDensity.compact,
                            ),
                          ],
                        ],
                      ),
                    ],
                  ),
                ),
                IconButton(
                  icon: const Icon(Icons.calendar_today),
                  onPressed: _selectDate,
                  tooltip: '选择日期',
                ),
                PopupMenuButton<String>(
                  icon: const Icon(Icons.more_vert),
                  tooltip: '更多操作',
                  onSelected: (value) {
                    switch (value) {
                      case 'export_json':
                        _exportToJson();
                        break;
                      case 'export_text':
                        _exportToText();
                        break;
                      case 'import':
                        _importFromJson();
                        break;
                      case 'quick_backup':
                        _quickBackup();
                        break;
                    }
                  },
                  itemBuilder: (context) => [
                    const PopupMenuItem(
                      value: 'export_json',
                      child: Row(
                        children: [
                          Icon(Icons.upload_file, size: 20),
                          SizedBox(width: 8),
                          Text('导出JSON'),
                        ],
                      ),
                    ),
                    const PopupMenuItem(
                      value: 'export_text',
                      child: Row(
                        children: [
                          Icon(Icons.description, size: 20),
                          SizedBox(width: 8),
                          Text('导出文本'),
                        ],
                      ),
                    ),
                    const PopupMenuItem(
                      value: 'import',
                      child: Row(
                        children: [
                          Icon(Icons.download, size: 20),
                          SizedBox(width: 8),
                          Text('导入规则'),
                        ],
                      ),
                    ),
                    const PopupMenuDivider(),
                    const PopupMenuItem(
                      value: 'quick_backup',
                      child: Row(
                        children: [
                          Icon(Icons.backup, size: 20),
                          SizedBox(width: 8),
                          Text('快速备份'),
                        ],
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),

          // 待审批操作卡片区域（固定在日期下方）
          if (_gptService.pendingActions.isNotEmpty)
            Container(
              constraints: const BoxConstraints(maxHeight: 120),
              child: ListView.builder(
                padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                itemCount: _gptService.pendingActions.length,
                itemBuilder: (context, index) {
                  return _buildApprovalCard(_gptService.pendingActions[index]);
                },
              ),
            ),

          // 日程区域（占3/5高度，独立滚动）
          Expanded(
            flex: 3,
            child: _schedules.isEmpty
                ? Center(
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Icon(
                          Icons.event_note,
                          size: 64,
                          color: Colors.grey.shade400,
                        ),
                        const SizedBox(height: 16),
                        Text(
                          '暂无日程',
                          style: TextStyle(
                            fontSize: 16,
                            color: Colors.grey.shade600,
                          ),
                        ),
                      ],
                    ),
                  )
                : ListView.builder(
                    controller: _scheduleScrollController,
                    itemCount: _schedules.length,
                    itemBuilder: (context, index) => _buildScheduleItem(_schedules[index]),
                  ),
          ),

          // 几乎看不见的分割线
          Container(
            height: 1,
            color: Colors.grey.shade200,
          ),

          // AI对话区域（占2/5高度，独立滚动）
          Expanded(
            flex: 2,
            child: Column(
              children: [
                Expanded(
                  child: ListView.builder(
                    itemCount: _messages.length,
                    itemBuilder: (context, index) => _buildMessageBubble(_messages[index], index),
                  ),
                ),
                // 加载指示器
                if (_isLoading)
                  Padding(
                    padding: const EdgeInsets.symmetric(vertical: 8, horizontal: 16),
                    child: Row(
                      children: [
                        SizedBox(
                          width: 16,
                          height: 16,
                          child: CircularProgressIndicator(
                            strokeWidth: 2,
                            color: Colors.grey.shade600,
                          ),
                        ),
                        const SizedBox(width: 8),
                        Text(
                          '正在思考..',
                          style: TextStyle(
                            color: Colors.grey.shade600,
                            fontSize: 12,
                          ),
                        ),
                      ],
                    ),
                  ),
              ],
            ),
          ),

          // 输入框（固定底部）
          Container(
            decoration: BoxDecoration(
              color: Colors.white,
              boxShadow: [
                BoxShadow(
                  color: Colors.black.withOpacity(0.05),
                  blurRadius: 4,
                  offset: const Offset(0, -2),
                ),
              ],
            ),
            padding: const EdgeInsets.all(8),
            child: Row(
              children: [
                Expanded(
                  child: TextField(
                    controller: _textController,
                    decoration: InputDecoration(
                      hintText: '随便聊聊...',
                      hintStyle: TextStyle(fontSize: 14, color: Colors.grey.shade500),
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(20),
                        borderSide: BorderSide.none,
                      ),
                      filled: true,
                      fillColor: Colors.grey.shade100,
                      contentPadding: const EdgeInsets.symmetric(
                        horizontal: 16,
                        vertical: 8,
                      ),
                      isDense: true,
                    ),
                    style: const TextStyle(fontSize: 14),
                    maxLines: null,
                    textInputAction: TextInputAction.send,
                    onSubmitted: _handleSubmit,
                  ),
                ),
                const SizedBox(width: 8),
                IconButton(
                  icon: const Icon(Icons.send, size: 22),
                  onPressed: () => _handleSubmit(_textController.text),
                  color: Theme.of(context).colorScheme.primary,
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildDayTypeChip() {
    if (_dayType == null) return const SizedBox.shrink();

    Color bgColor;
    Color textColor;
    IconData icon;

    switch (_dayType!) {
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

    return Chip(
      avatar: Icon(icon, size: 16, color: textColor),
      label: Text(_dayType!.displayName),
      backgroundColor: bgColor,
      labelStyle: TextStyle(color: textColor, fontSize: 12),
      padding: EdgeInsets.zero,
      visualDensity: VisualDensity.compact,
    );
  }

  /// 判断选中的日期是否为今天
  bool _isToday() {
    final now = DateTime.now();
    return _selectedDate.year == now.year &&
           _selectedDate.month == now.month &&
           _selectedDate.day == now.day;
  }

  /// 导出JSON
  Future<void> _exportToJson() async {
    try {
      final dbService = Provider.of<DatabaseService>(context, listen: false);
      final exportService = ImportExportService(dbService);
      
      final path = await exportService.exportToJson();
      
      if (path != null && mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text('已导出至: $path'),
            backgroundColor: Colors.green,
            duration: const Duration(seconds: 3),
          ),
        );
      }
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text('导出失败: $e'),
            backgroundColor: Colors.red,
          ),
        );
      }
    }
  }

  /// 导出文本
  Future<void> _exportToText() async {
    try {
      final dbService = Provider.of<DatabaseService>(context, listen: false);
      final exportService = ImportExportService(dbService);
      
      final path = await exportService.exportToText();
      
      if (path != null && mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text('已导出至: $path'),
            backgroundColor: Colors.green,
            duration: const Duration(seconds: 3),
          ),
        );
      }
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text('导出失败: $e'),
            backgroundColor: Colors.red,
          ),
        );
      }
    }
  }

  /// 导入JSON
  Future<void> _importFromJson() async {
    // 显示选择对话框
    final merge = await showDialog<bool>(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('导入方式'),
        content: const Text('选择导入模式：'),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('取消'),
          ),
          TextButton(
            onPressed: () => Navigator.pop(context, false),
            child: const Text('清空后导入'),
          ),
          TextButton(
            onPressed: () => Navigator.pop(context, true),
            child: const Text('合并导入'),
          ),
        ],
      ),
    );
    
    if (merge == null) return;
    
    try {
      final dbService = Provider.of<DatabaseService>(context, listen: false);
      final exportService = ImportExportService(dbService);
      
      final result = await exportService.importFromJson(merge: merge);
      
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text(result.message),
            backgroundColor: result.success ? Colors.green : Colors.red,
            duration: const Duration(seconds: 3),
          ),
        );
        
        if (result.success) {
          // 重新加载日程
          _loadSchedules();
        }
      }
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text('导入失败: $e'),
            backgroundColor: Colors.red,
          ),
        );
      }
    }
  }

  /// 快速备份
  Future<void> _quickBackup() async {
    try {
      final dbService = Provider.of<DatabaseService>(context, listen: false);
      final exportService = ImportExportService(dbService);
      
      final path = await exportService.quickExport();
      
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text('已备份至文档目录: $path'),
            backgroundColor: Colors.green,
            duration: const Duration(seconds: 4),
            action: SnackBarAction(
              label: '复制路径',
              textColor: Colors.white,
              onPressed: () {
                // TODO: 复制路径到剪贴板
              },
            ),
          ),
        );
      }
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text('备份失败: $e'),
            backgroundColor: Colors.red,
          ),
        );
      }
    }
  }

  /// 获取当前正在进行的日程索引（如果是今天）
  int? _getCurrentScheduleIndex() {
    if (!_isToday()) return null;
    
    final now = DateTime.now();
    for (int i = 0; i < _schedules.length; i++) {
      final schedule = _schedules[i];
      if (schedule.isCompleted) continue;
      
      if (schedule.startTime != null) {
        // 有开始时间
        if (schedule.endTime != null) {
          // 有结束时间：在时间范围内
          if (now.isAfter(schedule.startTime!) && now.isBefore(schedule.endTime!)) {
            return i;
          }
        } else {
          // 无结束时间：开始时间已到且下一项未开始
          if (now.isAfter(schedule.startTime!)) {
            // 检查下一项是否已开始
            if (i + 1 < _schedules.length) {
              final next = _schedules[i + 1];
              if (next.startTime == null || now.isBefore(next.startTime!)) {
                return i;
              }
            } else {
              return i; // 最后一项
            }
          }
        }
      }
    }
    return null;
  }

  /// 获取下一项待办日程索引（如果是今天）
  int? _getNextScheduleIndex() {
    if (!_isToday()) return null;
    
    final current = _getCurrentScheduleIndex();
    if (current != null) {
      // 有当前项，返回下一个未完成的
      for (int i = current + 1; i < _schedules.length; i++) {
        if (!_schedules[i].isCompleted) {
          return i;
        }
      }
    } else {
      // 无当前项，返回第一个未开始且未完成的
      final now = DateTime.now();
      for (int i = 0; i < _schedules.length; i++) {
        final schedule = _schedules[i];
        if (schedule.isCompleted) continue;
        if (schedule.startTime == null || now.isBefore(schedule.startTime!)) {
          return i;
        }
      }
    }
    return null;
  }

  Widget _buildScheduleItem(Schedule schedule) {
    final index = _schedules.indexOf(schedule);
    final currentIndex = _getCurrentScheduleIndex();
    final nextIndex = _getNextScheduleIndex();
    
    final isCurrent = index == currentIndex;
    final isNext = index == nextIndex;
    
    // 确定卡片样式
    Color bgColor;
    Color borderColor;
    Widget? statusBadge;
    
    if (isCurrent) {
      bgColor = Colors.green.shade50;
      borderColor = Colors.green.shade400;
      statusBadge = Container(
        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
        decoration: BoxDecoration(
          color: Colors.green.shade500,
          borderRadius: BorderRadius.circular(12),
        ),
        child: const Text(
          '当前',
          style: TextStyle(
            fontSize: 11,
            color: Colors.white,
            fontWeight: FontWeight.bold,
          ),
        ),
      );
    } else if (isNext) {
      bgColor = Colors.orange.shade50;
      borderColor = Colors.orange.shade400;
      statusBadge = Container(
        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
        decoration: BoxDecoration(
          color: Colors.orange.shade500,
          borderRadius: BorderRadius.circular(12),
        ),
        child: const Text(
          '下一项',
          style: TextStyle(
            fontSize: 11,
            color: Colors.white,
            fontWeight: FontWeight.bold,
          ),
        ),
      );
    } else {
      bgColor = Colors.blue.shade50;
      borderColor = Colors.transparent;
      statusBadge = null;
    }
    
    return GestureDetector(
      onLongPress: () => _showDeleteDialog(schedule),
      child: Container(
        margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
        padding: const EdgeInsets.all(14),
        decoration: BoxDecoration(
          color: bgColor,
          borderRadius: BorderRadius.circular(12),
          border: (isCurrent || isNext) ? Border.all(color: borderColor, width: 2) : null,
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(isCurrent ? 0.15 : (isNext ? 0.1 : 0.05)),
              blurRadius: isCurrent ? 8 : 4,
              offset: Offset(0, isCurrent ? 3 : 2),
            ),
          ],
        ),
        child: Row(
          children: [
            Checkbox(
              value: schedule.isCompleted,
              onChanged: (value) async {
                final dbService = Provider.of<DatabaseService>(context, listen: false);
                final updated = schedule.copyWith(isCompleted: value);
                await dbService.updateSchedule(updated);
                _loadSchedules();
              },
            ),
            const SizedBox(width: 8),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      if (statusBadge != null) ...[
                        statusBadge,
                        const SizedBox(width: 8),
                      ],
                      Expanded(
                        child: Text(
                          schedule.title,
                          style: TextStyle(
                            decoration: schedule.isCompleted ? TextDecoration.lineThrough : null,
                            fontSize: 15,
                            fontWeight: (isCurrent || isNext) ? FontWeight.w600 : FontWeight.w500,
                          ),
                        ),
                      ),
                      const SizedBox(width: 8),
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
                        decoration: BoxDecoration(
                          color: _getPriorityColor(schedule.priority),
                          borderRadius: BorderRadius.circular(12),
                        ),
                        child: Text(
                          _getPriorityLabel(schedule),
                          style: const TextStyle(
                            fontSize: 10,
                            color: Colors.white,
                            fontWeight: FontWeight.w600,
                          ),
                        ),
                      ),
                    ],
                  ),
                  if (schedule.startTime != null) ...[
                    const SizedBox(height: 4),
                    Text(
                      DateFormat('HH:mm').format(schedule.startTime!),
                      style: TextStyle(
                        fontSize: 13,
                        color: Colors.grey.shade600,
                      ),
                    ),
                  ],
                  if (schedule.description != null) ...[
                    const SizedBox(height: 4),
                    Text(
                      schedule.description!,
                      style: TextStyle(
                        fontSize: 12,
                        color: Colors.grey.shade600,
                      ),
                      maxLines: 2,
                      overflow: TextOverflow.ellipsis,
                    ),
                  ],
                ],
              ),
            ),
            // 编辑按钮
            IconButton(
              icon: Icon(Icons.edit_outlined, size: 20, color: Colors.grey.shade600),
              onPressed: () => _showEditDialog(schedule),
              padding: EdgeInsets.zero,
              constraints: const BoxConstraints(),
            ),
          ],
        ),
      ),
    );
  }

  /// 获取优先级颜色
  Color _getPriorityColor(SchedulePriority priority) {
    switch (priority) {
      case SchedulePriority.daily:
        return Colors.grey.shade400; // 每天 - 灰色
      case SchedulePriority.template:
        return Colors.green.shade400; // 工作日/休息日 - 绿色
      case SchedulePriority.weekendOrHoliday:
        return Colors.pink.shade300; // 周末/节假日 - 粉色
      case SchedulePriority.weekly:
        return Colors.orange.shade400; // 周X - 橙色
      case SchedulePriority.specific:
        return Colors.purple.shade400; // 特定日期 - 紫色
    }
  }

  /// 获取优先级标签
  String _getPriorityLabel(Schedule schedule) {
    // 如果有源规则ID，从规则获取精确类型
    if (schedule.sourceTemplateId != null) {
      final rule = _rulesCache[schedule.sourceTemplateId];
      if (rule != null) {
        switch (rule.condition.type) {
          case ConditionType.daily:
            return '每天';
          case ConditionType.restday:
            return '休息日';
          case ConditionType.workday:
            return '工作日';
          case ConditionType.interval:
            return '每${rule.condition.intervalDays}天';
          case ConditionType.weekend:
            return '周末';
          case ConditionType.holiday:
            return '节假日';
          case ConditionType.weekday:
            final weekdayNames = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
            return weekdayNames[(rule.condition.weekday ?? 1) - 1];
          case ConditionType.specificDate:
            return '单次';
        }
      }
    }
    
    // 降级到优先级显示
    switch (schedule.priority) {
      case SchedulePriority.daily:
        return '每天';
      case SchedulePriority.template:
        return '模板';
      case SchedulePriority.weekendOrHoliday:
        return '周末节假日';
      case SchedulePriority.weekly:
        return '每周';
      case SchedulePriority.specific:
        return '特殊';
    }
  }

  /// 显示编辑对话框
  void _showEditDialog(Schedule schedule) {
    final titleController = TextEditingController(text: schedule.title);
    final descController = TextEditingController(text: schedule.description ?? '');
    TimeOfDay? selectedTime = schedule.startTime != null
        ? TimeOfDay(hour: schedule.startTime!.hour, minute: schedule.startTime!.minute)
        : null;
    
    // 判断是否为规则生成的日程（有sourceTemplateId或priority不为specific）
    final isFromRule = schedule.sourceTemplateId != null || 
                       schedule.priority != SchedulePriority.specific;
    bool modifyOnlyToday = true; // 默认仅修改今天

    showDialog(
      context: context,
      builder: (context) => StatefulBuilder(
        builder: (context, setState) => AlertDialog(
          title: const Text('编辑日程'),
          content: SingleChildScrollView(
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                TextField(
                  controller: titleController,
                  decoration: const InputDecoration(
                    labelText: '标题',
                    border: OutlineInputBorder(),
                  ),
                ),
                const SizedBox(height: 16),
                TextField(
                  controller: descController,
                  decoration: const InputDecoration(
                    labelText: '描述（可选）',
                    border: OutlineInputBorder(),
                  ),
                  maxLines: 2,
                ),
                const SizedBox(height: 16),
                ListTile(
                  contentPadding: EdgeInsets.zero,
                  title: Text(
                    selectedTime != null
                        ? '时间: ${selectedTime!.format(context)}'
                        : '未设置时间',
                  ),
                  trailing: const Icon(Icons.access_time),
                  onTap: () async {
                    final time = await showTimePicker(
                      context: context,
                      initialTime: selectedTime ?? TimeOfDay.now(),
                    );
                    if (time != null) {
                      setState(() => selectedTime = time);
                    }
                  },
                ),
                // 如果是规则生成的日程，显示修改范围选项
                if (isFromRule) ...[
                  const Divider(height: 24),
                  Container(
                    padding: const EdgeInsets.all(12),
                    decoration: BoxDecoration(
                      color: Colors.orange.shade50,
                      borderRadius: BorderRadius.circular(8),
                      border: Border.all(color: Colors.orange.shade200),
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Row(
                          children: [
                            Icon(Icons.info_outline, size: 16, color: Colors.orange.shade700),
                            const SizedBox(width: 8),
                            Text(
                              '修改范围',
                              style: TextStyle(
                                fontWeight: FontWeight.w600,
                                color: Colors.orange.shade900,
                              ),
                            ),
                          ],
                        ),
                        const SizedBox(height: 8),
                        RadioListTile<bool>(
                          dense: true,
                          contentPadding: EdgeInsets.zero,
                          title: const Text('仅修改今天', style: TextStyle(fontSize: 14)),
                          subtitle: Text(
                            '创建临时覆盖，不影响其他日期',
                            style: TextStyle(fontSize: 11, color: Colors.grey.shade600),
                          ),
                          value: true,
                          groupValue: modifyOnlyToday,
                          onChanged: (value) => setState(() => modifyOnlyToday = value!),
                        ),
                        RadioListTile<bool>(
                          dense: true,
                          contentPadding: EdgeInsets.zero,
                          title: const Text('修改整个规则', style: TextStyle(fontSize: 14)),
                          subtitle: Text(
                            '永久修改，影响所有适用日期',
                            style: TextStyle(fontSize: 11, color: Colors.grey.shade600),
                          ),
                          value: false,
                          groupValue: modifyOnlyToday,
                          onChanged: (value) => setState(() => modifyOnlyToday = value!),
                        ),
                      ],
                    ),
                  ),
                ],
              ],
            ),
          ),
          actions: [
            TextButton(
              onPressed: () => Navigator.pop(context),
              child: const Text('取消'),
            ),
            ElevatedButton(
              onPressed: () async {
                if (titleController.text.trim().isEmpty) {
                  ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(content: Text('标题不能为空')),
                  );
                  return;
                }

                final dbService = Provider.of<DatabaseService>(context, listen: false);
                final gptService = Provider.of<GptService>(context, listen: false);
                
                if (isFromRule && modifyOnlyToday) {
                  // 仅修改今天 - 创建覆盖
                  final ruleId = schedule.sourceTemplateId ?? await dbService.findRuleId(schedule.title, null);
                  
                  if (ruleId != null) {
                    final hasChanges = titleController.text.trim() != schedule.title ||
                                      descController.text.trim() != (schedule.description ?? '') ||
                                      (selectedTime != null && schedule.startTime != null &&
                                       (selectedTime!.hour != schedule.startTime!.hour ||
                                        selectedTime!.minute != schedule.startTime!.minute));
                    
                    if (hasChanges) {
                      // 使用 GptService 的 _modifyOnce 逻辑创建覆盖
                      final data = {
                        'title': schedule.title,
                        'date': schedule.date.toIso8601String().split('T')[0],
                        if (selectedTime != null && 
                            (schedule.startTime == null ||
                             selectedTime!.hour != schedule.startTime!.hour ||
                             selectedTime!.minute != schedule.startTime!.minute))
                          'new_time': '${selectedTime!.hour.toString().padLeft(2, '0')}:${selectedTime!.minute.toString().padLeft(2, '0')}',
                        if (titleController.text.trim() != schedule.title)
                          'new_title': titleController.text.trim(),
                      };
                      
                      await gptService.executeAction(PendingAction(
                        id: DateTime.now().millisecondsSinceEpoch.toString(),
                        type: ActionType.modifyOnce,
                        description: '仅修改今天的日程',
                        data: data,
                      ).id);
                      
                      Navigator.pop(context);
                      _loadSchedules();
                      ScaffoldMessenger.of(context).showSnackBar(
                        const SnackBar(content: Text('已创建今日覆盖')),
                      );
                      return;
                    }
                  }
                }
                
                // 修改整个规则或普通日程
                DateTime? newStartTime;
                if (selectedTime != null) {
                  newStartTime = DateTime(
                    schedule.date.year,
                    schedule.date.month,
                    schedule.date.day,
                    selectedTime!.hour,
                    selectedTime!.minute,
                  );
                }

                final updated = schedule.copyWith(
                  title: titleController.text.trim(),
                  description: descController.text.trim().isEmpty ? null : descController.text.trim(),
                  startTime: newStartTime,
                );

                await dbService.updateSchedule(updated);
                _loadSchedules();
                Navigator.pop(context);
                
                ScaffoldMessenger.of(context).showSnackBar(
                  SnackBar(content: Text(isFromRule && !modifyOnlyToday ? '规则已更新' : '日程已更新')),
                );
              },
              child: const Text('保存'),
            ),
          ],
        ),
      ),
    );
  }

  /// 显示删除确认对话框
  void _showDeleteDialog(Schedule schedule) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('删除日程'),
        content: Text('确定要删除「${schedule.title}」吗？'),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('取消'),
          ),
          ElevatedButton(
            onPressed: () async {
              final dbService = Provider.of<DatabaseService>(context, listen: false);
              await dbService.deleteSchedule(schedule.id);
              _loadSchedules();
              Navigator.pop(context);
              
              ScaffoldMessenger.of(context).showSnackBar(
                SnackBar(content: Text('已删除「${schedule.title}」')),
              );
            },
            style: ElevatedButton.styleFrom(backgroundColor: Colors.red),
            child: const Text('删除'),
          ),
        ],
      ),
    );
  }

  /// 构建审批卡片（紧凑版）
  Widget _buildApprovalCard(PendingAction action) {
    IconData icon;
    Color color;
    
    switch (action.type) {
      case ActionType.create:
        icon = Icons.add_circle_outline;
        color = Colors.green;
        break;
      case ActionType.modify:
        icon = Icons.edit_outlined;
        color = Colors.orange;
        break;
      case ActionType.modifyOnce:
        icon = Icons.schedule_outlined;
        color = Colors.purple;
        break;
      case ActionType.delete:
        icon = Icons.delete_outline;
        color = Colors.red;
        break;
      case ActionType.toggleComplete:
        icon = Icons.check_circle_outline;
        color = Colors.blue;
        break;
    }
    
    return Container(
      margin: const EdgeInsets.only(bottom: 8),
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(12),
        gradient: LinearGradient(
          colors: [color.withOpacity(0.1), color.withOpacity(0.05)],
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
        ),
        boxShadow: [
          BoxShadow(
            color: color.withOpacity(0.2),
            blurRadius: 8,
            offset: const Offset(0, 2),
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Container(
                padding: const EdgeInsets.all(8),
                decoration: BoxDecoration(
                  color: color.withOpacity(0.15),
                  borderRadius: BorderRadius.circular(8),
                ),
                child: Icon(icon, color: color, size: 20),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: Text(
                  action.description,
                  style: TextStyle(
                    fontSize: 14,
                    fontWeight: FontWeight.w600,
                    color: Colors.grey.shade800,
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(height: 12),
          Row(
            mainAxisAlignment: MainAxisAlignment.end,
            children: [
              TextButton(
                onPressed: () => _rejectAction(action),
                style: TextButton.styleFrom(
                  padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                  minimumSize: const Size(0, 0),
                  tapTargetSize: MaterialTapTargetSize.shrinkWrap,
                  foregroundColor: Colors.red.shade600,
                ),
                child: const Text('拒绝', style: TextStyle(fontSize: 13, fontWeight: FontWeight.w500)),
              ),
              const SizedBox(width: 8),
              ElevatedButton(
                onPressed: () => _approveAction(action),
                style: ElevatedButton.styleFrom(
                  padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
                  minimumSize: const Size(0, 0),
                  tapTargetSize: MaterialTapTargetSize.shrinkWrap,
                  backgroundColor: color,
                  foregroundColor: Colors.white,
                  elevation: 2,
                  shadowColor: color.withOpacity(0.5),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(8),
                  ),
                ),
                child: const Text('确认', style: TextStyle(fontSize: 13, fontWeight: FontWeight.w600)),
              ),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildMessageBubble(ChatMessage message, int index) {
    // 计算透明度（从 1/4 处开始渐变）
    final totalMessages = _messages.length;
    final fadeStartIndex = (totalMessages * 0.25).floor().clamp(1, totalMessages);
    double opacity = 1.0;
    
    if (totalMessages > 1 && index < fadeStartIndex) {
      // �?1/4 之前的消息渐变透明，最�?0.2
      opacity = ((index + 1) / fadeStartIndex).clamp(0.2, 1.0);
    }
    
    return Opacity(
      opacity: opacity,
      child: Container(
        margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 6),
        child: Row(
          mainAxisAlignment:
              message.isUser ? MainAxisAlignment.end : MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            if (!message.isUser) ...[
              CircleAvatar(
                radius: 12,
                backgroundColor: message.isError 
                    ? Colors.red.shade100 
                    : Colors.blue.shade100,
                child: Icon(
                  message.isError ? Icons.error_outline : Icons.smart_toy,
                  size: 14,
                  color: message.isError 
                      ? Colors.red.shade700 
                      : Colors.blue.shade700,
                ),
              ),
              const SizedBox(width: 8),
            ],
            Flexible(
              child: Container(
                padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
                decoration: BoxDecoration(
                  color: message.isUser
                      ? Colors.blue.shade500
                      : message.isError
                          ? Colors.red.shade100
                          : Colors.grey.shade100,
                  borderRadius: BorderRadius.circular(16),
                  boxShadow: [
                    BoxShadow(
                      color: Colors.black.withOpacity(0.08),
                      blurRadius: 4,
                      offset: const Offset(0, 1),
                    ),
                  ],
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      message.text,
                      style: TextStyle(
                        color: message.isUser 
                            ? Colors.white 
                            : (message.isError ? Colors.red.shade900 : Colors.black87),
                        fontSize: 14,
                      ),
                    ),
                    const SizedBox(height: 4),
                    Text(
                      _formatTime(message.timestamp),
                      style: TextStyle(
                        color: message.isUser ? Colors.white70 : Colors.grey.shade500,
                        fontSize: 10,
                      ),
                    ),
                  ],
                ),
              ),
            ),
            if (message.isUser) ...[
              const SizedBox(width: 8),
              CircleAvatar(
                radius: 12,
                backgroundColor: Colors.blue.shade100,
                child: Icon(
                  Icons.person,
                  size: 14,
                  color: Colors.blue.shade700,
                ),
              ),
            ],
          ],
        ),
      ),
    );
  }

  String _formatTime(DateTime time) {
    final now = DateTime.now();
    final diff = now.difference(time);

    if (diff.inSeconds < 60) {
      return '刚刚';
    } else if (diff.inMinutes < 60) {
      return '${diff.inMinutes}分钟前';
    } else if (diff.inHours < 24 && time.day == now.day) {
      return '${time.hour}:${time.minute.toString().padLeft(2, '0')}';
    } else {
      return '${time.month}/${time.day} ${time.hour}:${time.minute.toString().padLeft(2, '0')}';
    }
  }
}

/// 聊天消息模型
class ChatMessage {
  final String text;
  final bool isUser;
  final DateTime timestamp;
  final bool isError;

  ChatMessage({
    required this.text,
    required this.isUser,
    required this.timestamp,
    this.isError = false,
  });

  Map<String, dynamic> toJson() => {
    'text': text,
    'isUser': isUser,
    'timestamp': timestamp.toIso8601String(),
    'isError': isError,
  };

  factory ChatMessage.fromJson(Map<String, dynamic> json) => ChatMessage(
    text: json['text'],
    isUser: json['isUser'],
    timestamp: DateTime.parse(json['timestamp']),
    isError: json['isError'] ?? false,
  );
}

