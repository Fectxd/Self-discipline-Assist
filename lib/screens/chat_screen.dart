import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../services/gpt_service.dart';
import '../services/api_config_service.dart';
import '../services/database_service.dart';
import '../services/day_service.dart';
import '../services/work_schedule_service.dart';
import '../services/msn_service.dart';
import '../models/chat_message.dart';
import '../models/pending_action.dart';
import '../widgets/chat_bubble.dart';
import '../widgets/chat_input_bar.dart';

/// AI 助手聊天界面
class ChatScreen extends StatefulWidget {
  const ChatScreen({super.key});

  @override
  State<ChatScreen> createState() => _ChatScreenState();
}

class _ChatScreenState extends State<ChatScreen> {
  late GptService _gptService;
  final TextEditingController _textController = TextEditingController();
  final ScrollController _scrollController = ScrollController();
  final List<ChatMessage> _messages = [];
  bool _isLoading = false;
  final Set<String> _processingActions = {}; // 正在处理的操作ID

  @override
  void initState() {
    super.initState();
    final apiConfigService = context.read<ApiConfigService>();
    final dbService = context.read<DatabaseService>();
    final dayService = context.read<DayService>();
    final workScheduleService = context.read<WorkScheduleService>();
    final msnService = context.read<MsnService>();

    _gptService = GptService(
      apiConfigService,
      dbService,
      dayService,
      workScheduleService,
      msnService,
    );

    // 添加欢迎消息
    _messages.add(
      ChatMessage(
        text:
            '嗨！我是你的智能助手 🤖\n\n你可以随便跟我聊天，比如：\n• "还没睡呢"\n• "明天干什么"\n• "周末有安排吗"\n\n我会根据你的日程和作息给出建议~',
        isUser: false,
        timestamp: DateTime.now(),
      ),
    );
  }

  @override
  void dispose() {
    _textController.dispose();
    _scrollController.dispose();
    super.dispose();
  }

  Future<void> _handleSubmit(String text) async {
    if (text.trim().isEmpty) return;

    final userMessage = text.trim();
    _textController.clear();

    setState(() {
      _messages.add(
        ChatMessage(text: userMessage, isUser: true, timestamp: DateTime.now()),
      );
      _isLoading = true;
    });

    _scrollToBottom();

    try {
      final response = await _gptService.chat(userMessage);

      if (!mounted) return;

      setState(() {
        _messages.add(
          ChatMessage(text: response, isUser: false, timestamp: DateTime.now()),
        );
        _isLoading = false;
      });

      _scrollToBottom();
    } catch (e) {
      if (!mounted) return;
      setState(() {
        _messages.add(
          ChatMessage(
            text: '抱歉，处理你的请求时出错了：$e',
            isUser: false,
            timestamp: DateTime.now(),
            isError: true,
          ),
        );
        _isLoading = false;
      });

      _scrollToBottom();
    }
  }

  void _scrollToBottom() {
    Future.delayed(const Duration(milliseconds: 100), () {
      if (_scrollController.hasClients) {
        _scrollController.animateTo(
          _scrollController.position.maxScrollExtent,
          duration: const Duration(milliseconds: 300),
          curve: Curves.easeOut,
        );
      }
    });
  }

  Future<void> _approveAction(PendingAction action) async {
    // 防止重复点击
    if (_processingActions.contains(action.id)) return;

    setState(() {
      _processingActions.add(action.id);
    });

    try {
      await _gptService.executeAction(action.id);
      if (!mounted) return;
      setState(() {
        _processingActions.remove(action.id);
        _messages.add(
          ChatMessage(
            text: '✅ 已执行：${action.description}',
            isUser: false,
            timestamp: DateTime.now(),
          ),
        );
      });
      _scrollToBottom();
      ScaffoldMessenger.of(
        context,
      ).showSnackBar(
        SnackBar(
          content: const Text('操作已执行'),
          behavior: SnackBarBehavior.floating,
          margin: const EdgeInsets.only(bottom: 80, left: 16, right: 16),
        ),
      );
    } catch (e) {
      if (!mounted) return;
      setState(() {
        _processingActions.remove(action.id);
      });
      ScaffoldMessenger.of(
        context,
      ).showSnackBar(
        SnackBar(
          content: Text('执行失败：$e'),
          behavior: SnackBarBehavior.floating,
          margin: const EdgeInsets.only(bottom: 80, left: 16, right: 16),
        ),
      );
    }
  }

  void _rejectAction(PendingAction action) {
    // 防止重复点击
    if (_processingActions.contains(action.id)) return;

    setState(() {
      _processingActions.add(action.id);
    });

    _gptService.rejectAction(action.id);
    setState(() {
      _processingActions.remove(action.id);
      _messages.add(
        ChatMessage(
          text: '❌ 已拒绝：${action.description}',
          isUser: false,
          timestamp: DateTime.now(),
        ),
      );
    });
    _scrollToBottom();
  }

  void _clearHistory() {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('清空对话'),
        content: const Text('将清空所有对话记录、待审批操作和AI上下文，强制中断当前对话轮次。下次对话将重新开始。'),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('取消'),
          ),
          TextButton(
            onPressed: () {
              setState(() {
                _messages.clear();
                _gptService.clearHistory(); // 已经包含了清空 pendingActions 和中断对话
                _messages.add(
                  ChatMessage(
                    text: '✅ 对话已完全重置！\n\n所有上下文已清空，这是一个全新的对话。\n\n有什么可以帮你的吗？',
                    isUser: false,
                    timestamp: DateTime.now(),
                  ),
                );
              });
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
        title: const Text('AI 助手'),
        actions: [
          IconButton(
            icon: const Icon(Icons.delete_outline),
            onPressed: _clearHistory,
            tooltip: '清空对话',
          ),
        ],
      ),
      body: Column(
        children: [
          // 待审批操作卡片区域
          if (_gptService.pendingActions.isNotEmpty)
            Flexible(
              flex: 0,
              child: Container(
                constraints: const BoxConstraints(maxHeight: 200),
                child: ListView.builder(
                  padding: const EdgeInsets.all(8),
                  itemCount: _gptService.pendingActions.length,
                  itemBuilder: (context, index) {
                    final action = _gptService.pendingActions[index];
                    return KeyedSubtree(
                      key: ValueKey(action.id),
                      child: _buildApprovalCard(action),
                    );
                  },
                ),
              ),
            ),

          // 消息列表
          Expanded(
            child: ListView.builder(
              controller: _scrollController,
              padding: const EdgeInsets.all(16),
              itemCount: _messages.length,
              itemBuilder: (context, index) {
                return _buildMessageBubble(_messages[index]);
              },
            ),
          ),

          // 加载指示器
          if (_isLoading)
            Flexible(
              flex: 0,
              child: Padding(
                padding: const EdgeInsets.all(8.0),
                child: Row(
                  children: [
                    const SizedBox(width: 16),
                    SizedBox(
                      width: 20,
                      height: 20,
                      child: CircularProgressIndicator(
                        strokeWidth: 2,
                        color: Theme.of(context).colorScheme.primary,
                      ),
                    ),
                    const SizedBox(width: 12),
                    Flexible(
                      child: Text(
                        '正在思考...',
                        style: TextStyle(
                          color: Theme.of(context).colorScheme.onSurfaceVariant,
                          fontSize: 14,
                        ),
                        overflow: TextOverflow.ellipsis,
                      ),
                    ),
                  ],
                ),
              ),
            ),

          // 输入框
          ChatInputBar(
            controller: _textController,
            onSubmit: _handleSubmit,
            isLoading: _isLoading,
          ),
        ],
      ),
    );
  }

  /// 构建审批卡片
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
      case ActionType.delete:
        icon = Icons.delete_outline;
        color = Colors.red;
        break;
      case ActionType.deleteAll:
        icon = Icons.delete_sweep;
        color = Colors.red.shade900;
        break;
      case ActionType.modifyOnce:
        icon = Icons.schedule_outlined;
        color = Colors.purple;
        break;
      case ActionType.toggleComplete:
        icon = Icons.check_circle_outline;
        color = Colors.blue;
        break;
    }

    // 解析属性标签
    String? priorityLabel;
    String? templateLabel;
    String? recurrenceLabel;

    if (action.data['priority'] != null) {
      final priority = action.data['priority'] as int;
      switch (priority) {
        case 1:
          priorityLabel = '每日日程';
          break;
        case 2:
          priorityLabel = '工作日/休息日模板';
          break;
        case 3:
          priorityLabel = '大小周模板';
          break;
        case 4:
          priorityLabel = '特殊日程';
          break;
      }
    }

    if (action.data['template_type'] != null) {
      final template = action.data['template_type'] as String;
      switch (template) {
        case 'none':
          templateLabel = '普通日程';
          break;
        case 'workday':
          templateLabel = '工作日模板';
          break;
        case 'restday':
          templateLabel = '休息日模板';
          break;
        case 'big_week':
          templateLabel = '大周模板';
          break;
        case 'small_week':
          templateLabel = '小周模板';
          break;
      }
    }

    if (action.data['recurrence'] != null) {
      final recurrence = action.data['recurrence'] as String;
      switch (recurrence) {
        case 'none':
          recurrenceLabel = null;
          break;
        case 'daily':
          recurrenceLabel = '每天重复';
          break;
        case 'weekly':
          recurrenceLabel = '每周重复';
          break;
        case 'monthly':
          recurrenceLabel = '每月重复';
          break;
      }
    }

    return Card(
      margin: const EdgeInsets.symmetric(vertical: 4, horizontal: 8),
      elevation: 2,
      child: Padding(
        padding: const EdgeInsets.all(12),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Icon(icon, color: color, size: 20),
                const SizedBox(width: 8),
                Expanded(
                  child: Text(
                    action.description,
                    style: const TextStyle(
                      fontSize: 14,
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 8),
            // 显示详细信息
            if (action.data['title'] != null)
              Padding(
                padding: const EdgeInsets.only(left: 28),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      '${action.data['title']}',
                      style: const TextStyle(
                        fontSize: 15,
                        fontWeight: FontWeight.w500,
                      ),
                    ),
                    const SizedBox(height: 4),
                    if (action.data['date'] != null &&
                        action.data['time'] != null)
                      Row(
                        children: [
                          Icon(
                            Icons.access_time,
                            size: 14,
                            color: Colors.grey.shade600,
                          ),
                          const SizedBox(width: 4),
                          Text(
                            '${action.data['date']} ${action.data['time']}',
                            style: TextStyle(
                              fontSize: 13,
                              color: Colors.grey.shade700,
                            ),
                          ),
                        ],
                      ),
                    // 显示属性标签
                    const SizedBox(height: 6),
                    Wrap(
                      spacing: 6,
                      runSpacing: 4,
                      children: [
                        if (priorityLabel != null)
                          _buildPropertyChip(priorityLabel, Colors.blue),
                        if (templateLabel != null && templateLabel != '普通日程')
                          _buildPropertyChip(templateLabel, Colors.purple),
                        if (recurrenceLabel != null)
                          _buildPropertyChip(recurrenceLabel, Colors.orange),
                      ],
                    ),
                  ],
                ),
              ),
            const SizedBox(height: 8),
            Row(
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                TextButton.icon(
                  onPressed: _processingActions.contains(action.id)
                      ? null
                      : () => _rejectAction(action),
                  icon: const Icon(Icons.close, size: 18),
                  label: const Text('拒绝'),
                  style: TextButton.styleFrom(
                    foregroundColor: Colors.grey.shade700,
                  ),
                ),
                const SizedBox(width: 8),
                ElevatedButton.icon(
                  onPressed: _processingActions.contains(action.id)
                      ? null
                      : () => _approveAction(action),
                  icon: _processingActions.contains(action.id)
                      ? const SizedBox(
                          width: 18,
                          height: 18,
                          child: CircularProgressIndicator(
                            strokeWidth: 2,
                            valueColor: AlwaysStoppedAnimation<Color>(
                              Colors.white,
                            ),
                          ),
                        )
                      : const Icon(Icons.check, size: 18),
                  label: const Text('批准'),
                  style: ElevatedButton.styleFrom(
                    backgroundColor: color,
                    foregroundColor: Colors.white,
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }

  /// 构建属性标签
  Widget _buildPropertyChip(String label, Color color) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
      decoration: BoxDecoration(
        color: color.withAlpha((0.1 * 255).round()),
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: color.withAlpha((0.3 * 255).round())),
      ),
      child: Text(
        label,
        style: TextStyle(
          fontSize: 11,
          color: color.withAlpha((1.0 * 255).round()),
          fontWeight: FontWeight.w500,
        ),
      ),
    );
  }

  Widget _buildMessageBubble(ChatMessage message) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 12),
      child: ChatBubble(
        message: message,
        useThemeForUser: true,
        avatarRadius: 16.0,
        contentPadding: const EdgeInsets.symmetric(
          horizontal: 16,
          vertical: 12,
        ),
      ),
    );
  }

  // Format function moved to lib/utils/format_time.dart
}

// ChatMessage model moved to lib/models/chat_message.dart
