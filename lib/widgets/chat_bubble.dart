import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_markdown/flutter_markdown.dart';
import '../models/chat_message.dart';
import '../utils/format_time.dart';

/// Reusable chat message bubble used by chat and schedule screens.
class ChatBubble extends StatelessWidget {
  final ChatMessage message;
  final bool useThemeForUser;
  final double avatarRadius;
  final EdgeInsets contentPadding;
  final VoidCallback? onCheckApiConfig;
  final VoidCallback? onClearChat;

  const ChatBubble({
    super.key,
    required this.message,
    this.useThemeForUser = true,
    this.avatarRadius = 16.0,
    this.contentPadding = const EdgeInsets.symmetric(
      horizontal: 16,
      vertical: 12,
    ),
    this.onCheckApiConfig,
    this.onClearChat,
  });

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: message.isUser
          ? MainAxisAlignment.end
          : MainAxisAlignment.start,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        if (!message.isUser) ...[
          CircleAvatar(
            radius: avatarRadius,
            backgroundColor: message.isError
                ? Colors.red.shade100
                : Colors.blue.shade100,
            child: Icon(
              message.isError ? Icons.error_outline : Icons.smart_toy,
              size: avatarRadius > 14 ? 18 : 14,
              color: message.isError
                  ? Colors.red.shade700
                  : Colors.blue.shade700,
            ),
          ),
          const SizedBox(width: 8),
        ],

        Flexible(
          child: GestureDetector(
            onLongPress: () {
              // 长按复制文本
              Clipboard.setData(ClipboardData(text: message.text));
              ScaffoldMessenger.of(context).showSnackBar(
                const SnackBar(
                  content: Text('已复制到剪贴板'),
                  duration: Duration(seconds: 1),
                ),
              );
            },
            child: Container(
              padding: contentPadding,
              decoration: BoxDecoration(
                color: message.isUser
                    ? (useThemeForUser
                          ? Theme.of(context).colorScheme.primary
                          : Colors.blue.shade500)
                    : (message.isError
                          ? Theme.of(context).colorScheme.errorContainer
                          : Theme.of(
                              context,
                            ).colorScheme.surfaceContainerHighest),
                borderRadius: BorderRadius.circular(16),
                boxShadow: [
                  BoxShadow(
                    color: Colors.black.withValues(alpha: 0.08),
                    blurRadius: 4,
                    offset: const Offset(0, 1),
                  ),
                ],
              ),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  if (message.isError &&
                      message.text.contains('[CHECK_API_CONFIG]') &&
                      onCheckApiConfig != null)
                    RichText(
                      text: TextSpan(
                        style: TextStyle(
                          color: message.isUser
                              ? Colors.white
                              : Theme.of(context).colorScheme.onErrorContainer,
                          fontSize: 14,
                        ),
                        children: [
                          TextSpan(
                            text: message.text.replaceAll(
                              '[CHECK_API_CONFIG]',
                              '',
                            ),
                          ),
                          TextSpan(
                            text: '\n检查 API 配置',
                            style: const TextStyle(
                              decoration: TextDecoration.underline,
                              fontWeight: FontWeight.w600,
                            ),
                            recognizer: TapGestureRecognizer()
                              ..onTap = onCheckApiConfig,
                          ),
                        ],
                      ),
                    )
                  else if (!message.isUser && _containsMarkdown(message.text))
                    // AI消息使用Markdown渲染
                    MarkdownBody(
                      data: message.text,
                      selectable: true,
                      styleSheet: MarkdownStyleSheet(
                        p: TextStyle(
                          color: message.isError
                              ? Theme.of(context).colorScheme.onErrorContainer
                              : Theme.of(context).colorScheme.onSurface,
                          fontSize: 15,
                        ),
                        code: TextStyle(
                          backgroundColor: Theme.of(context)
                              .colorScheme
                              .surfaceContainerHighest,
                          color: Theme.of(context).colorScheme.primary,
                          fontSize: 14,
                        ),
                        codeblockDecoration: BoxDecoration(
                          color: Theme.of(context)
                              .colorScheme
                              .surfaceContainerHighest,
                          borderRadius: BorderRadius.circular(8),
                        ),
                        blockquote: TextStyle(
                          color: Theme.of(context).colorScheme.onSurfaceVariant,
                          fontStyle: FontStyle.italic,
                        ),
                        listBullet: TextStyle(
                          color: Theme.of(context).colorScheme.primary,
                        ),
                      ),
                    )
                  else
                    // 用户消息或不包含Markdown的AI消息使用普通文本
                    Text(
                      message.text,
                      style: TextStyle(
                        color: message.isUser
                            ? Colors.white
                            : (message.isError
                                  ? Theme.of(context)
                                      .colorScheme
                                      .onErrorContainer
                                  : Theme.of(context).colorScheme.onSurface),
                        fontSize: 15,
                      ),
                    ),

                  const SizedBox(height: 4),
                  Text(
                    formatRelativeTime(message.timestamp),
                    style: TextStyle(
                      color: message.isUser
                          ? Colors.white.withAlpha((0.7 * 255).round())
                          : Theme.of(context).colorScheme.onSurfaceVariant,
                      fontSize: 11,
                    ),
                  ),

                  // 清空按钮
                  if (message.showClearButton && onClearChat != null) ...[
                    const SizedBox(height: 12),
                    SizedBox(
                      width: double.infinity,
                      child: OutlinedButton.icon(
                        onPressed: onClearChat,
                        icon: const Icon(Icons.cleaning_services, size: 16),
                        label: const Text('清空对话'),
                        style: OutlinedButton.styleFrom(
                          foregroundColor: Colors.orange.shade700,
                          side: BorderSide(color: Colors.orange.shade300),
                          padding: const EdgeInsets.symmetric(vertical: 8),
                        ),
                      ),
                    ),
                  ],
                ],
              ),
            ),
          ),
        ),

        if (message.isUser) ...[
          const SizedBox(width: 8),
          CircleAvatar(
            radius: avatarRadius,
            backgroundColor: useThemeForUser
                ? Theme.of(
                    context,
                  ).colorScheme.primary.withAlpha((0.2 * 255).round())
                : Colors.blue.shade100,
            child: Icon(
              Icons.person,
              size: avatarRadius > 14 ? 18 : 14,
              color: useThemeForUser
                  ? Theme.of(context).colorScheme.primary
                  : Colors.blue.shade700,
            ),
          ),
        ],
      ],
    );
  }

  /// 检测文本是否包含Markdown语法
  bool _containsMarkdown(String text) {
    // 检测常见的Markdown语法
    return text.contains('**') || // 粗体
        text.contains('*') && text.contains('\n') || // 列表或斜体
        text.contains('`') || // 代码
        text.contains('#') && text.startsWith('#') || // 标题
        text.contains('[') && text.contains('](') || // 链接
        text.contains('- ') || // 列表
        text.contains('1. '); // 有序列表
  }
}
