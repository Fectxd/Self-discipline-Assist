import 'package:flutter/material.dart';
import '../models/chat_message.dart';
import 'chat_list.dart';

/// 聊天面板组件（包含拉杆和聊天列表的一体化设计）
/// 拉杆在聊天界面之上，整个组件有下外阴影
class ChatPanel extends StatelessWidget {
  final List<ChatMessage> messages;
  final ScrollController controller;
  final bool isLoading;
  final void Function()? onCheckApiConfig;
  final VoidCallback? onClearHistory;
  final Key? dismissibleKey;
  final GestureDragStartCallback? onDragStart;
  final GestureDragUpdateCallback? onDragUpdate;
  final GestureDragEndCallback? onDragEnd;
  final VoidCallback? onTap;

  const ChatPanel({
    super.key,
    required this.messages,
    required this.controller,
    this.isLoading = false,
    this.onCheckApiConfig,
    this.onClearHistory,
    this.dismissibleKey,
    this.onDragStart,
    this.onDragUpdate,
    this.onDragEnd,
    this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      // 整体容器有下外阴影
      decoration: BoxDecoration(
        color: Theme.of(context).scaffoldBackgroundColor,
        boxShadow: [
          BoxShadow(
            color: Colors.black.withAlpha((0.12 * 255).round()),
            blurRadius: 8,
            offset: const Offset(0, -4),
          ),
        ],
      ),
      child: Column(
        children: [
          // 拉杆区域（在聊天界面之上）
          GestureDetector(
            behavior: HitTestBehavior.translucent,
            onVerticalDragStart: onDragStart,
            onVerticalDragUpdate: onDragUpdate,
            onVerticalDragEnd: onDragEnd,
            onTap: onTap,
            child: Container(
              height: 18.0,
              alignment: Alignment.center,
              decoration: BoxDecoration(
                color: Theme.of(context).scaffoldBackgroundColor,
              ),
              child: Container(
                width: 40,
                height: 4,
                decoration: BoxDecoration(
                  color: Colors.grey.shade400,
                  borderRadius: BorderRadius.circular(2),
                ),
              ),
            ),
          ),
          // 聊天列表区域（支持滑动删除）
          Expanded(
            child: Dismissible(
              key: dismissibleKey ?? ValueKey('chat_history_${messages.hashCode}'),
              direction: DismissDirection.startToEnd,
              background: Container(
                color: Colors.red,
                alignment: Alignment.centerLeft,
                padding: const EdgeInsets.only(left: 20),
                child: const Icon(Icons.delete, color: Colors.white, size: 32),
              ),
              confirmDismiss: (direction) async {
                final confirmed = await showDialog<bool>(
                  context: context,
                  builder: (context) => AlertDialog(
                    title: const Text('清除聊天记录'),
                    content: const Text('确定要清除所有聊天记录吗？'),
                    actions: [
                      TextButton(
                        onPressed: () => Navigator.of(context).pop(false),
                        child: const Text('取消'),
                      ),
                      TextButton(
                        onPressed: () => Navigator.of(context).pop(true),
                        child: const Text('确定', style: TextStyle(color: Colors.red)),
                      ),
                    ],
                  ),
                ) ?? false;

                // 如果用户确认，调用清除回调，然后返回 false
                // 返回 false 可以防止 Dismissible 执行动画，避免"dismissed widget still in tree"错误
                if (confirmed && onClearHistory != null) {
                  onClearHistory!();
                  // 返回 false 以取消 dismiss 动画，因为我们已经通过 setState 更新了数据
                  return false;
                }

                return false;
              },
              child: ChatList(
                messages: messages,
                controller: controller,
                isLoading: isLoading,
                onCheckApiConfig: onCheckApiConfig,
                onClearChat: onClearHistory,
              ),
            ),
          ),
        ],
      ),
    );
  }
}
