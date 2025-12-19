import 'package:shared_preferences/shared_preferences.dart';
import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

/// API 配置服务
/// 使用 SharedPreferences 安全存储 API 配置
class ApiConfigService extends ChangeNotifier {
  static const String _keyApiKey = 'gpt_api_key';
  static const String _keyBaseUrl = 'gpt_base_url';
  static const String _keyModel = 'gpt_model';
  static const String _keyUseBearerAuth = 'gpt_use_bearer_auth';
  static const String _keyAuthPrefix = 'gpt_auth_prefix';

  // 默认值
  static const String _defaultBaseUrl = 'https://api.openai.com/v1';
  static const String _defaultModel = 'gemini-2.5-flash';
  static const bool _defaultUseBearerAuth = true;
  static const String _defaultAuthPrefix = 'Bearer';

  static const List<String> supportedModels = [
    'gpt-5-nano',
    'gemini-2.5-flash',
  ];

  late SharedPreferences _prefs;
  bool _isInitialized = false;

  /// 初始化服务
  Future<void> init() async {
    _prefs = await SharedPreferences.getInstance();
    _isInitialized = true;
    notifyListeners();
  }

  /// 是否已配置 API 密钥
  bool get isConfigured {
    if (!_isInitialized) return false;
    final apiKey = _prefs.getString(_keyApiKey);
    return apiKey != null && apiKey.isNotEmpty;
  }

  /// 获取 API 密钥
  String get apiKey => _prefs.getString(_keyApiKey) ?? '';

  /// 获取基础 URL
  String get baseUrl => _prefs.getString(_keyBaseUrl) ?? _defaultBaseUrl;

  /// 获取模型名称
  String get model => _prefs.getString(_keyModel) ?? _defaultModel;

  /// 是否使用 Bearer 认证
  bool get useBearerAuth =>
      _prefs.getBool(_keyUseBearerAuth) ?? _defaultUseBearerAuth;

  /// 获取认证前缀
  String get authPrefix =>
      _prefs.getString(_keyAuthPrefix) ?? _defaultAuthPrefix;

  /// 是否是 Gemini 模型
  bool get isGemini => model.toLowerCase().contains('gemini');

  /// 获取完整的 endpoint
  String get endpoint {
    if (isGemini) {
      // 如果 baseUrl 是默认的 OpenAI URL，则使用 Gemini 默认 URL
      if (baseUrl == _defaultBaseUrl || baseUrl.contains('api.openai.com')) {
        return 'https://generativelanguage.googleapis.com/v1beta/models/$model:generateContent';
      }
      // 如果用户配置了代理，假设代理路径兼容
      return '$baseUrl/models/$model:generateContent';
    }
    return '$baseUrl/chat/completions';
  }

  /// 保存 API 配置
  Future<void> saveConfig({
    required String apiKey,
    required String baseUrl,
    required String model,
    bool? useBearerAuth,
    String? authPrefix,
  }) async {
    await _prefs.setString(_keyApiKey, apiKey);
    await _prefs.setString(_keyBaseUrl, baseUrl);
    await _prefs.setString(_keyModel, model);
    if (useBearerAuth != null) {
      await _prefs.setBool(_keyUseBearerAuth, useBearerAuth);
    }
    if (authPrefix != null) {
      await _prefs.setString(_keyAuthPrefix, authPrefix);
    }
    notifyListeners();
  }

  /// 清除配置
  Future<void> clearConfig() async {
    await _prefs.remove(_keyApiKey);
    await _prefs.remove(_keyBaseUrl);
    await _prefs.remove(_keyModel);
    await _prefs.remove(_keyUseBearerAuth);
    await _prefs.remove(_keyAuthPrefix);
    notifyListeners();
  }

  /// 验证配置是否完整
  String? validateConfig() {
    if (apiKey.isEmpty) {
      return 'API 密钥不能为空';
    }
    if (baseUrl.isEmpty) {
      return 'API 地址不能为空';
    }
    if (!baseUrl.startsWith('http://') && !baseUrl.startsWith('https://')) {
      return 'API 地址必须以 http:// 或 https:// 开头';
    }
    if (model.isEmpty) {
      return '模型名称不能为空';
    }
    return null;
  }

  /// 测试API连接
  Future<String> testConnection() async {
    try {
      final apiKey = _prefs.getString(_keyApiKey) ?? '';
      final baseUrl = _prefs.getString(_keyBaseUrl) ?? _defaultBaseUrl;
      final useBearerAuth =
          _prefs.getBool(_keyUseBearerAuth) ?? _defaultUseBearerAuth;

      if (apiKey.isEmpty) {
        return '错误: API密钥不能为空';
      }

      final url = Uri.parse('$baseUrl/chat/completions');
      final headers = {
        'Content-Type': 'application/json',
        if (useBearerAuth)
          'Authorization': 'Bearer $apiKey'
        else
          'api-key': apiKey,
      };

      final body = jsonEncode({
        'model': 'gpt-4o-mini',
        'messages': [
          {'role': 'user', 'content': 'test'},
        ],
        'max_tokens': 5,
      });

      final response = await http
          .post(url, headers: headers, body: body)
          .timeout(const Duration(seconds: 30));

      if (response.statusCode == 200) {
        final data = jsonDecode(response.body);
        final content = data['choices']?[0]?['message']?['content'] ?? 'test';
        return content.toString().trim();
      } else {
        return '错误 ${response.statusCode}: ${response.body}';
      }
    } catch (e) {
      return '连接失败: $e';
    }
  }
}
