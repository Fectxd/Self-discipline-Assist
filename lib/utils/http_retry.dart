import 'package:http/http.dart' as http;

const String _cfUserAgent =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36';

/// 发起 HTTP GET 请求，失败时自动重试一次（附带浏览器 User-Agent）
/// 
/// 用于绕过 Cloudflare 等简单的反爬机制：
/// - 首次尝试：普通 GET 请求
/// - 失败或非 200：重试一次，附加常见浏览器 User-Agent
/// 
/// 示例：
/// ```dart
/// final response = await httpGet(Uri.parse('https://api.example.com/data'));
/// ```
Future<http.Response> httpGet(
  Uri uri, {
  Map<String, String>? headers,
  Duration timeout = const Duration(seconds: 10),
}) async {
  // 首次尝试
  try {
    final resp = await http.get(uri, headers: headers).timeout(timeout);
    if (resp.statusCode == 200) {
      return resp;
    }
    // 非 200 也视为需要重试的情况（例如 Cloudflare 返回 403/503）
  } catch (e) {
    // 第一次请求出现异常，继续进行重试
  }

  // 准备重试时的 headers：合并并确保包含 User-Agent
  final newHeaders = <String, String>{};
  if (headers != null) newHeaders.addAll(headers);
  newHeaders.putIfAbsent('User-Agent', () => _cfUserAgent);

  // 第二次重试（若仍然抛出异常，将向上抛出）
  final retryResp = await http.get(uri, headers: newHeaders).timeout(timeout);
  return retryResp;
}
