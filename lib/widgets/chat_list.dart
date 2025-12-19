import 'package:flutter/material.dart';
import '../models/chat_message.dart';
import 'chat_bubble.dart';

class ChatList extends StatelessWidget {
  final List<ChatMessage> messages;
  final ScrollController controller;
  final bool isLoading;
  final void Function()? onCheckApiConfig;
  final VoidCallback? onClearChat;

  const ChatList({
    super.key,
    required this.messages,
    required this.controller,
    this.isLoading = false,
    this.onCheckApiConfig,
    this.onClearChat,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Expanded(
          child: Scrollbar(
            controller: controller,
            thumbVisibility: true,
            child: ListView.builder(
              controller: controller,
              itemCount: messages.length,
              itemBuilder: (context, index) {
                final message = messages[index];
                final total = messages.length;
                final fadeStartIndex = (total * 0.25).floor().clamp(1, total);
                double opacity = 1.0;
                if (total > 1 && index < fadeStartIndex) {
                  opacity = ((index + 1) / fadeStartIndex).clamp(0.2, 1.0);
                }

                return Opacity(
                  opacity: opacity,
                  child: Container(
                    margin: const EdgeInsets.symmetric(
                      horizontal: 16,
                      vertical: 6,
                    ),
                    child: ChatBubble(
                      message: message,
                      useThemeForUser: false,
                      avatarRadius: 12.0,
                      contentPadding: const EdgeInsets.symmetric(
                        horizontal: 14,
                        vertical: 10,
                      ),
                      onCheckApiConfig: onCheckApiConfig,
                      onClearChat: onClearChat,
                    ),
                  ),
                );
              },
            ),
          ),
        ),
        if (isLoading)
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
                  '正在思考...',
                  style: TextStyle(color: Colors.grey.shade600, fontSize: 12),
                ),
              ],
            ),
          ),
      ],
    );
  }
}
