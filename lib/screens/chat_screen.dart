import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../services/gpt_service.dart';
import '../services/database_service.dart';
import '../services/day_service.dart';
import '../services/work_schedule_service.dart';

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

  @override
  void initState() {
    super.initState();
    final dbService = Provider.of<DatabaseService>(context, listen: false);
    final dayService = Provider.of<DayService>(context, listen: false);
    final workScheduleService = Provider.of<WorkScheduleService>(context, listen: false);
    
    _gptService = GptService(dbService, dayService, workScheduleService);
    
    // 添加欢迎消息
    _messages.add(ChatMessage(
      text: '嗨！我是你的智能助手 🤖\n\n你可以随便跟我聊天，比如：\n• "还没睡呢"\n• "明天干什么"\n• "周末有安排吗"\n\n我会根据你的日程和作息给出建议~',
      isUser: false,
      timestamp: DateTime.now(),
    ));
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
      _messages.add(ChatMessage(
        text: userMessage,
        isUser: true,
        timestamp: DateTime.now(),
      ));
      _isLoading = true;
    });

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
      });

      _scrollToBottom();
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
    try {
      await _gptService.executeAction(action.id);
      setState(() {
        _messages.add(ChatMessage(
          text: '✅ 已执行：${action.description}',
          isUser: false,
          timestamp: DateTime.now(),
        ));
      });
      
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('操作已执行')),
      );
    } catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('执行失败：$e')),
      );
    }
  }

  void _rejectAction(PendingAction action) {
    _gptService.rejectAction(action.id);
    setState(() {
      _messages.add(ChatMessage(
        text: '❌ 已拒绝：${action.description}',
        isUser: false,
        timestamp: DateTime.now(),
      ));
    });
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
                _messages.add(ChatMessage(
                  text: '对话已清空，有什么可以帮你的吗？',
                  isUser: false,
                  timestamp: DateTime.now(),
                ));
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
            Container(
              constraints: const BoxConstraints(maxHeight: 200),
              child: ListView.builder(
                padding: const EdgeInsets.all(8),
                itemCount: _gptService.pendingActions.length,
                itemBuilder: (context, index) {
                  return _buildApprovalCard(_gptService.pendingActions[index]);
                },
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
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: Row(
                children: [
                  const SizedBox(width: 16),
                  SizedBox(
                    width: 20,
                    height: 20,
                    child: CircularProgressIndicator(
                      strokeWidth: 2,
                      color: Colors.grey.shade600,
                    ),
                  ),
                  const SizedBox(width: 12),
                  Text(
                    '正在思考...',
                    style: TextStyle(
                      color: Colors.grey.shade600,
                      fontSize: 14,
                    ),
                  ),
                ],
              ),
            ),

          // 输入框
          Container(
            decoration: BoxDecoration(
              color: Theme.of(context).colorScheme.surface,
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
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(24),
                        borderSide: BorderSide.none,
                      ),
                      filled: true,
                      fillColor: Colors.grey.shade100,
                      contentPadding: const EdgeInsets.symmetric(
                        horizontal: 20,
                        vertical: 12,
                      ),
                    ),
                    maxLines: null,
                    textInputAction: TextInputAction.send,
                    onSubmitted: _handleSubmit,
                  ),
                ),
                const SizedBox(width: 8),
                IconButton(
                  icon: const Icon(Icons.send),
                  onPressed: () => _handleSubmit(_textController.text),
                  color: Theme.of(context).colorScheme.primary,
                  iconSize: 28,
                ),
              ],
            ),
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
        case 1: priorityLabel = '每日日程'; break;
        case 2: priorityLabel = '工作日/休息日模板'; break;
        case 3: priorityLabel = '大小周模板'; break;
        case 4: priorityLabel = '特殊日程'; break;
      }
    }
    
    if (action.data['template_type'] != null) {
      final template = action.data['template_type'] as String;
      switch (template) {
        case 'none': templateLabel = '普通日程'; break;
        case 'workday': templateLabel = '工作日模板'; break;
        case 'restday': templateLabel = '休息日模板'; break;
        case 'big_week': templateLabel = '大周模板'; break;
        case 'small_week': templateLabel = '小周模板'; break;
      }
    }
    
    if (action.data['recurrence'] != null) {
      final recurrence = action.data['recurrence'] as String;
      switch (recurrence) {
        case 'none': recurrenceLabel = null; break;
        case 'daily': recurrenceLabel = '每天重复'; break;
        case 'weekly': recurrenceLabel = '每周重复'; break;
        case 'monthly': recurrenceLabel = '每月重复'; break;
      }
    }
    
    return Card(
      margin: const EdgeInsets.symmetric(vertical: 4, horizontal: 8),
      elevation: 2,
      child: Padding(
        padding: const EdgeInsets.all(12),
        child: Column(
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
                    if (action.data['date'] != null && action.data['time'] != null)
                      Row(
                        children: [
                          Icon(Icons.access_time, size: 14, color: Colors.grey.shade600),
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
                  onPressed: () => _rejectAction(action),
                  icon: const Icon(Icons.close, size: 18),
                  label: const Text('拒绝'),
                  style: TextButton.styleFrom(
                    foregroundColor: Colors.grey.shade700,
                  ),
                ),
                const SizedBox(width: 8),
                ElevatedButton.icon(
                  onPressed: () => _approveAction(action),
                  icon: const Icon(Icons.check, size: 18),
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
        color: color.withOpacity(0.1),
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: color.withOpacity(0.3)),
      ),
      child: Text(
        label,
        style: TextStyle(
          fontSize: 11,
          color: color.withOpacity(1.0),
          fontWeight: FontWeight.w500,
        ),
      ),
    );
  }

  Widget _buildMessageBubble(ChatMessage message) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 12),
      child: Row(
        mainAxisAlignment:
            message.isUser ? MainAxisAlignment.end : MainAxisAlignment.start,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          if (!message.isUser) ...[
            CircleAvatar(
              radius: 16,
              backgroundColor: message.isError 
                  ? Colors.red.shade100 
                  : Colors.blue.shade100,
              child: Icon(
                message.isError ? Icons.error_outline : Icons.smart_toy,
                size: 18,
                color: message.isError 
                    ? Colors.red.shade700 
                    : Colors.blue.shade700,
              ),
            ),
            const SizedBox(width: 8),
          ],
          Flexible(
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
              decoration: BoxDecoration(
                color: message.isUser
                    ? Theme.of(context).colorScheme.primary
                    : message.isError
                        ? Colors.red.shade50
                        : Colors.grey.shade200,
                borderRadius: BorderRadius.circular(16),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    message.text,
                    style: TextStyle(
                      color: message.isUser
                          ? Colors.white
                          : message.isError
                              ? Colors.red.shade900
                              : Colors.black87,
                      fontSize: 15,
                    ),
                  ),
                  const SizedBox(height: 4),
                  Text(
                    _formatTime(message.timestamp),
                    style: TextStyle(
                      color: message.isUser
                          ? Colors.white.withOpacity(0.7)
                          : Colors.grey.shade600,
                      fontSize: 11,
                    ),
                  ),
                ],
              ),
            ),
          ),
          if (message.isUser) ...[
            const SizedBox(width: 8),
            CircleAvatar(
              radius: 16,
              backgroundColor: Theme.of(context).colorScheme.primary.withOpacity(0.2),
              child: Icon(
                Icons.person,
                size: 18,
                color: Theme.of(context).colorScheme.primary,
              ),
            ),
          ],
        ],
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
}
