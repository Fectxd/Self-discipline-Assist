/// Token 估算器
///
/// 无需调 API 就能估算 token 用量，用于上下文窗口管理。
/// 对中文按 ~1.5 字符/token，英文按 ~4 字符/token 估算。
class TokenEstimator {
  TokenEstimator._();

  /// 中文 Unicode 码点范围
  static bool _isChinese(int codeUnit) =>
      (codeUnit >= 0x4E00 && codeUnit <= 0x9FFF) ||
      (codeUnit >= 0x3400 && codeUnit <= 0x4DBF);

  static const double _chineseRate = 1.5; // 中文: ~1.5 char/token
  static const double _otherRate = 4.0; // 英文/数字: ~4 char/token

  /// 估算单段文本的 token 数
  static int estimate(String text) {
    if (text.isEmpty) return 0;

    int chinese = 0;
    int other = 0;

    for (var i = 0; i < text.length; i++) {
      if (_isChinese(text.codeUnitAt(i))) {
        chinese++;
      } else {
        other++;
      }
    }

    return (chinese / _chineseRate).ceil() + (other / _otherRate).ceil();
  }

  /// 估算 JSON 序列化后文本的 token 数（对 messages/tools 通用）
  static int estimateJson(Map<String, dynamic> json) {
    // 直接序列化估算，JSON key 和符号的平均 token 成本
    return estimate(json.toString());
  }

  /// 估算一个完整 API 请求的 token 成本
  static int estimateRequest({
    required String? systemPrompt,
    required List<Map<String, dynamic>> messages,
    required List<Map<String, dynamic>>? tools,
  }) {
    int total = 0;

    if (systemPrompt != null && systemPrompt.isNotEmpty) {
      total += estimate(systemPrompt) + 4; // 4 tokens overhead
    }

    // 格式开销: 每轮约 5 tokens（role, name 等标记）
    for (final msg in messages) {
      final content = msg['content'];
      if (content is String) {
        total += estimate(content) + 5;
      } else if (content == null && msg['tool_calls'] != null) {
        // tool_calls 消息
        for (final tc in msg['tool_calls'] as List) {
          total += estimate(jsonEncode(tc)) + 5;
          // tool_call_id overhead
        }
      } else if (msg['role'] == 'tool') {
        total += estimate(msg['content'] as String? ?? '') + 5;
      }
    }

    // Tools: 每个约 2 tokens overhead
    if (tools != null) {
      total += estimate(jsonEncode(tools)) + 2;
    }

    return total;
  }
}
