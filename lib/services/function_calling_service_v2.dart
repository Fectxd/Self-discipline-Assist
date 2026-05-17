import 'dart:convert';
import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;
import '../models/schedule.dart';
import '../models/schedule_rule.dart';
import '../models/schedule_override.dart';
import '../models/day_type.dart';
import '../models/user_memory.dart';
import '../models/pending_action.dart';
import '../utils/schedule_rule_converter.dart';
import '../core/context_manager.dart';
import 'api_config_service.dart';
import 'database_service.dart';
import 'day_service.dart';
import 'work_schedule_service.dart';
import 'memory_service.dart';
import 'ai_service.dart';
import 'msn_service.dart';

/// AI Function Calling 服务
///
/// 现代化改造要点：
/// - 工具定义静态编译（一次构造，终生使用）
/// - ContextManager 管理对话窗口（滑动窗口 + token 预算）
/// - 记忆缓存（TTL 5分钟 + 惰性刷新）
/// - 请求去重（快速重复同一用户输入可命中缓存）
/// - 干净的重试/超时
class FunctionCallingServiceV2 implements AIService {
  final ApiConfigService _configService;
  final DatabaseService _dbService;
  final DayService _dayService;
  final WorkScheduleService _workScheduleService;
  final MsnService _msnService;

  late final MemoryService _memoryService;
  late final ContextManager _ctx;

  // ─── 请求缓存（轻量级） ───
  String? _lastRequestHash;
  DateTime _lastRequestAt = DateTime(0);
  String? _lastResponse;

  // ─── 记忆缓存 ───
  MemorySummary? _cachedMemory;
  DateTime _memoryFetchedAt = DateTime(0);
  static const _memoryTTL = Duration(minutes: 5);

  // ─── 状态 ───
  @override
  final List<PendingAction> pendingActions = [];
  int _actionIdCounter = 0;
  bool _isCancelled = false;
  @override
  VoidCallback? onNewApproval;

  FunctionCallingServiceV2(
    this._configService,
    this._dbService,
    this._dayService,
    this._workScheduleService,
    this._msnService,
  ) {
    _ctx = ContextManager();
    _initMemoryService();
  }

  Future<void> _initMemoryService() async {
    final db = await _dbService.database;
    _memoryService = MemoryService(db);
  }

  // ─── 记忆缓存 ───

  Future<MemorySummary?> _getMemory({bool forceRefresh = false}) async {
    final now = DateTime.now();
    if (!forceRefresh &&
        _cachedMemory != null &&
        now.difference(_memoryFetchedAt) < _memoryTTL) {
      return _cachedMemory;
    }

    try {
      _cachedMemory = await _memoryService.getMemorySummary(
        maxPreferences: 5,
        maxHabits: 3,
        maxFacts: 5,
        maxEpisodes: 2,
      );
      _memoryFetchedAt = now;
      debugPrint('[MemoryCache] 刷新完成 — '
          '${_cachedMemory!.preferences.length} pref / '
          '${_cachedMemory!.habits.length} habit / '
          '${_cachedMemory!.facts.length} fact');
    } catch (e) {
      debugPrint('[MemoryCache] 刷新失败: $e');
      if (_cachedMemory == null) rethrow; // 首次失败必须抛
    }
    return _cachedMemory;
  }

  /// 使记忆缓存失效（保存新记忆后调用）
  void _invalidateMemory() {
    _memoryFetchedAt = DateTime(0);
  }

  // ─── 请求去重 ───

  /// 为当前对话+用户输入生成指纹
  String _buildRequestHash(String userMessage) {
    // 只对输入去重，不依赖历史（因为历史在不断变化）
    return '${_ctx.messageCount}:${userMessage.hashCode}';
  }

  bool _canUseCache(String userMessage) {
    final hash = _buildRequestHash(userMessage);
    return hash == _lastRequestHash &&
        DateTime.now().difference(_lastRequestAt).inSeconds < 3;
  }

  // ─── 主入口 ───

  @override
  Future<String> chat(String userMessage) async {
    debugPrint('\n========== Chat Start ==========');
    debugPrint('用户消息: $userMessage');

    // 去重
    if (_canUseCache(userMessage)) {
      debugPrint('[Cache] 命中请求缓存（相同输入 < 3s）');
      return _lastResponse!;
    }
    _lastRequestHash = _buildRequestHash(userMessage);
    _lastRequestAt = DateTime.now();

    _isCancelled = false;

    try {
      // 首次初始化（系统提示词 + 基础记忆）
      if (_ctx.messageCount == 0) {
        final memory = await _getMemory();
        _ctx.addSystemMessage(_ctx.buildSystemPrompt(memory?.toPromptText()));
      }

      // 上下文感知记忆加载：根据用户消息关键词加载相关记忆
      final relevantMemories = await _memoryService.searchByKeywords(
        userMessage, maxResults: 3,
      );
      if (relevantMemories.isNotEmpty) {
        final memText = relevantMemories
            .map((m) => '- ${m.content}')
            .join('\n');
        _ctx.addSystemMessage('相关记忆:\n$memText');
        debugPrint('[MemorySearch] 关键词匹配 ${relevantMemories.length} 条记忆');
      }

      _ctx.addUserMessage(userMessage);

      final response = await _handleConversation();
      _lastResponse = response;

      debugPrint('最终回复: ${response.length > 100 ? "${response.substring(0, 100)}..." : response}');
      debugPrint('pendingActions: ${pendingActions.length}');
      debugPrint('========== Chat End ==========\n');
      return response;
    } catch (e, st) {
      debugPrint('错误: $e\n$st');
      return '抱歉，发生了错误：${e.toString()}';
    }
  }

  // ─── 对话循环 ───

  Future<String> _handleConversation({int maxIterations = 5}) async {
    for (int i = 0; i < maxIterations; i++) {
      if (_isCancelled) return '对话已中断';

      debugPrint('\n--- 迭代 ${i + 1}/$maxIterations ---');

      // 修剪历史，必要时压缩摘要
      _ctx.trimIfNeeded();
      if (i == 0 && _ctx.messageCount > 30) {
        await _ctx.compressEarlyHistory(_summarizeMessages);
      }

      final response = await _sendRequest();
      final message = _extractMessage(response);
      if (message == null) return '抱歉，API 没有返回任何内容。';

      final toolCalls = message['tool_calls'] as List?;
      final content = message['content'] as String?;

      // 有 tool_calls → 执行并继续
      if (toolCalls != null && toolCalls.isNotEmpty) {
        await _handleToolCalls(message);
        continue;
      }

      // 纯文本回复 → 完成
      if (content != null && content.isNotEmpty) {
        final reasoning = message['reasoning_content'] as String?;
        _ctx.addAssistantMessage(content, reasoning);
        return content;
      }

      return '抱歉，API 返回了空内容。';
    }

    return '抱歉，处理您的请求时遇到了问题，请重试或使用更简单的指令。';
  }

  // ─── HTTP 请求 ───

  Future<Map<String, dynamic>> _sendRequest() async {
    if (!_configService.isConfigured) {
      throw Exception('API 未配置，请先在设置中配置 API');
    }
    final err = _configService.validateConfig();
    if (err != null) throw Exception('API 配置错误: $err');

    final url = Uri.parse('${_configService.baseUrl}/chat/completions');
    final headers = {
      'Content-Type': 'application/json',
      'Authorization': '${_configService.authPrefix} ${_configService.apiKey}',
    };

    final body = <String, dynamic>{
      'model': _configService.model,
      'messages': _ctx.getMessages(),
      'tools': ContextManager.tools,
      'tool_choice': 'auto',
    };

    debugPrint('[API] 发送: ${_ctx.messageCount} 条消息 + ${ContextManager.tools.length} 工具');
    debugPrint('[API] 估算 tokens: ${_ctx.estimateTokenUsage()}');

    final response = await http
        .post(url, headers: headers, body: jsonEncode(body))
        .timeout(const Duration(seconds: 60));

    debugPrint('[API] 状态: ${response.statusCode}');

    if (response.statusCode != 200) {
      throw Exception('API 调用失败: ${response.statusCode} — ${response.body}');
    }

    return _deepConvertMap(jsonDecode(response.body)) as Map<String, dynamic>;
  }

  Map<String, dynamic>? _extractMessage(Map<String, dynamic> response) {
    final choices = response['choices'] as List?;
    if (choices == null || choices.isEmpty) return null;
    return choices[0]['message'] as Map<String, dynamic>?;
  }

  // ─── 流式响应 (SSE) ───

  /// 流式对话入口
  ///
  /// 与 chat() 行为一致，但通过 onChunk 回调逐块输出文本内容。
  /// 若模型返回 tool_calls，自动降级为非流式循环并回调 onToolDetected。
  /// 返回最终完整文本。
  Future<String> chatStream(
    String userMessage, {
    required void Function(String chunk) onChunk,
    void Function()? onToolDetected,
  }) async {
    debugPrint('\n========== Stream Chat Start ==========');
    debugPrint('用户消息: $userMessage');

    _isCancelled = false;

    try {
      // 首次初始化
      if (_ctx.messageCount == 0) {
        final memory = await _getMemory();
        _ctx.addSystemMessage(_ctx.buildSystemPrompt(memory?.toPromptText()));
      }

      // 上下文感知记忆
      final relevantMemories = await _memoryService.searchByKeywords(
        userMessage, maxResults: 3,
      );
      if (relevantMemories.isNotEmpty) {
        final memText = relevantMemories
            .map((m) => '- ${m.content}')
            .join('\n');
        _ctx.addSystemMessage('相关记忆:\n$memText');
      }

      _ctx.addUserMessage(userMessage);

      // 第一次请求用流式
      _ctx.trimIfNeeded();

      final (fullContent, reasoningContent, toolCalls) = await _sendStreamRequest(
        onChunk: onChunk,
      );

      // 如果模型返回 tool_calls，降级为非流式循环
      if (toolCalls != null && toolCalls.isNotEmpty) {
        onToolDetected?.call();
        final assistantMsg = <String, dynamic>{
          'role': 'assistant',
          'content': fullContent,
          'tool_calls': toolCalls,
        };
        if (reasoningContent != null) {
          assistantMsg['reasoning_content'] = reasoningContent;
        }

        await _handleToolCalls(assistantMsg);

        // tool 执行完后发起第二轮（非流式）
        final response = await _sendRequest();
        final msg = _extractMessage(response);
        final finalText = msg?['content'] as String? ?? '';

        if (finalText.isNotEmpty) {
          _ctx.addAssistantMessage(
            finalText,
            msg?['reasoning_content'] as String?,
          );
          onChunk(finalText);
        }

        debugPrint('[Stream] 完成 (tool_calls 降级)');
        return finalText;
      }

      // 纯文本回复
      if (fullContent.isNotEmpty) {
        _ctx.addAssistantMessage(fullContent, reasoningContent);
        _lastResponse = fullContent;
        debugPrint('[Stream] 完成 (纯文本)');
        return fullContent;
      }

      return '抱歉，API 返回了空内容。';
    } catch (e, st) {
      debugPrint('[Stream] 错误: $e\n$st');
      return '抱歉，发生了错误：${e.toString()}';
    }
  }

  /// 发送流式 SSE 请求
  ///
  /// 解析 SSE `data: {...}` 行，逐块回调 onChunk。
  /// 若中途检测到 tool_calls 立即停止流式，返回已收集的数据和 tool_calls。
  Future<(String, String?, List<Map<String, dynamic>>?)> _sendStreamRequest({
    required void Function(String chunk) onChunk,
  }) async {
    if (!_configService.isConfigured) {
      throw Exception('API 未配置');
    }

    final url = Uri.parse('${_configService.baseUrl}/chat/completions');

    // 使用按需裁剪的工具
    final messages = _ctx.getMessages();
    final lastUserMsg = messages.lastWhere(
      (m) => m['role'] == 'user',
      orElse: () => <String, dynamic>{'content': ''},
    );
    final recentContent = (lastUserMsg['content'] as String?) ?? '';
    final tools = _ctx.getRelevantTools(recentContent);

    final body = jsonEncode({
      'model': _configService.model,
      'messages': messages,
      'stream': true,
      if (tools.isNotEmpty) 'tools': tools,
      'tool_choice': 'auto',
      'stream_options': {'include_usage': true},
    });

    final request = http.Request('POST', url)
      ..headers['Content-Type'] = 'application/json'
      ..headers['Authorization'] =
          '${_configService.authPrefix} ${_configService.apiKey}'
      ..body = body;

    debugPrint('[SSE] 发送: ${messages.length} 条消息 + ${tools.length} 工具');

    final response = await http.Client().send(request).timeout(
      const Duration(seconds: 120),
    );

    if (response.statusCode != 200) {
      final errBody = await response.stream.bytesToString();
      throw Exception('API 流式调用失败: ${response.statusCode} — $errBody');
    }

    final buffer = StringBuffer();
    String? reasoningContent;
    List<Map<String, dynamic>>? toolCalls;
    int? toolCallIndex;

    await for (final chunk in response.stream.transform(utf8.decoder)) {
      if (_isCancelled) break;

      final lines = chunk.split('\n');
      for (final line in lines) {
        if (!line.startsWith('data: ')) continue;
        final data = line.substring(6).trim();
        if (data == '[DONE]' || data.isEmpty) continue;

        try {
          final json = jsonDecode(data) as Map<String, dynamic>;
          final choices = json['choices'] as List?;
          if (choices == null || choices.isEmpty) continue;

          final delta = choices[0]['delta'] as Map<String, dynamic>?;
          if (delta == null) continue;

          // 文本内容
          final content = delta['content'] as String?;
          if (content != null && content.isNotEmpty) {
            buffer.write(content);
            onChunk(content);
          }

          // reasoning_content（思考过程）
          final rc = delta['reasoning_content'] as String?;
          if (rc != null && rc.isNotEmpty) {
            reasoningContent = (reasoningContent ?? '') + rc;
          }

          // tool_calls（通常在第一个 chunk 出现）
          final rawToolCalls = delta['tool_calls'] as List?;
          if (rawToolCalls != null && rawToolCalls.isNotEmpty) {
            toolCalls ??= [];
            for (final tc in rawToolCalls) {
              final idx = tc['index'] as int;
              final func = tc['function'] as Map<String, dynamic>?;

              // 新的 tool_call
              if (toolCalls!.length <= idx) {
                toolCalls!.add({
                  'id': tc['id'] ?? '',
                  'type': tc['type'] ?? 'function',
                  'function': {
                    'name': func?['name'] ?? '',
                    'arguments': func?['arguments'] ?? '',
                  },
                });
              } else {
                // 追加已有 tool_call（arguments 是流式追加的）
                final existingArg =
                    toolCalls![idx]['function']['arguments'] as String;
                toolCalls![idx]['function']['arguments'] =
                    existingArg + (func?['arguments'] as String? ?? '');
              }
            }
          }
        } catch (e) {
          debugPrint('[SSE] 解析错误: $e — 原始: $data');
        }
      }
    }

    debugPrint('[SSE] 接收完成: ${buffer.length} 字符');
    return (buffer.toString(), reasoningContent, toolCalls);
  }

  // ─── 历史摘要 ───

  /// 将早期对话压缩为一段摘要文本
  ///
  /// 由 ContextManager.compressEarlyHistory() 回调，
  /// 调用 API 不做 function_call，仅做文本总结。
  Future<String> _summarizeMessages(List<Map<String, dynamic>> messages) async {
    try {
      final url = Uri.parse('${_configService.baseUrl}/chat/completions');
      final headers = {
        'Content-Type': 'application/json',
        'Authorization': '${_configService.authPrefix} ${_configService.apiKey}',
      };

      final body = jsonEncode({
        'model': _configService.model,
        'messages': [
          {
            'role': 'system',
            'content': '请用一句简洁的话总结以下对话的历史，概括用户的核心需求和你的回复。不要超过50个字。',
          },
          ...messages,
        ],
        'max_tokens': 100,
        'temperature': 0.3,
      });

      final response = await http
          .post(url, headers: headers, body: body)
          .timeout(const Duration(seconds: 15));

      if (response.statusCode != 200) return '';

      final data = jsonDecode(response.body) as Map<String, dynamic>;
      final text = data['choices']?[0]?['message']?['content'] as String? ?? '';
      return text.trim();
    } catch (e) {
      debugPrint('[Summary] 失败: $e');
      return '';
    }
  }

  // ─── Tool Calls 处理 ───

  Future<void> _handleToolCalls(Map<String, dynamic> message) async {
    final rawCalls = message['tool_calls'] as List;
    final reasoning = message['reasoning_content'] as String?;

    // 构造 assistant 消息（含 tool_calls 原文）
    final sanitizedCalls = rawCalls.map((tc) => <String, dynamic>{
      'id': tc['id'],
      'type': tc['type'],
      'function': <String, dynamic>{
        'name': tc['function']['name'],
        'arguments': tc['function']['arguments'],
      },
    }).toList();

    _ctx.addAssistantToolCallsMessage(
      message['content'] as String?,
      sanitizedCalls,
      reasoning,
    );

    // 逐个执行
    for (final tc in rawCalls) {
      final name = (tc['function']['name'] as String).split(':').last;
      final args = Map<String, dynamic>.from(
        jsonDecode(tc['function']['arguments'] as String),
      );

      debugPrint('  → $name(${jsonEncode(args)})');

      final result = await _executeFunction(name, args);
      debugPrint('    ↳ ${jsonEncode(result).length} bytes');

      _ctx.addToolResponse(tc['id'], jsonEncode(result));
    }
  }

  // ─── 函数执行 ───

  Future<Map<String, dynamic>> _executeFunction(
    String name,
    Map<String, dynamic> args,
  ) async {
    try {
      Map<String, dynamic> result;
      switch (name) {
        case 'get_current_context':
          result = await _getCurrentContext();
          break;
        case 'get_recent_schedules':
          result = await _getRecentSchedules(args);
          break;
        case 'get_rules_summary':
          result = await _getRulesSummary(args);
          break;
        case 'analyze_busyness':
          result = await _analyzeBusyness(args);
          break;
        case 'get_weather_cache':
          result = await _getWeatherCache(args);
          break;
        case 'get_lunar_cache':
          result = await _getLunarCache();
          break;
        case 'save_memory':
          result = await _saveMemory(args);
          break;
        case 'propose_action':
          result = await _proposeAction(args);
          break;
        default:
          result = {'error': '未知的函数: $name'};
      }
      return _deepConvertMap(result) as Map<String, dynamic>;
    } catch (e) {
      return {'error': '执行失败: $e'};
    }
  }

  // ==========================================================
  //  以下工具函数实现与原版完全相同，仅做必要清理
  // ==========================================================

  Future<Map<String, dynamic>> _getCurrentContext() async {
    final now = DateTime.now();
    final today = DateTime(now.year, now.month, now.day);
    final tomorrow = today.add(const Duration(days: 1));
    final workSchedule = _workScheduleService.currentType;
    final todayType = await _dayService.getDayType(today);
    final tomorrowType = await _dayService.getDayType(tomorrow);
    final weekdays = ['一', '二', '三', '四', '五', '六', '日'];

    return {
      'current_time': now.toString(),
      'hour': now.hour,
      'minute': now.minute,
      'today': {
        'date': today.toString().split(' ')[0],
        'weekday': '星期${weekdays[today.weekday - 1]}',
        'day_type': todayType.toString().split('.').last,
        'is_rest': todayType == DayType.weekend || todayType == DayType.holiday,
      },
      'tomorrow': {
        'date': tomorrow.toString().split(' ')[0],
        'weekday': '星期${weekdays[tomorrow.weekday - 1]}',
        'day_type': tomorrowType.toString().split('.').last,
        'is_rest': tomorrowType == DayType.weekend || tomorrowType == DayType.holiday,
      },
      'work_schedule': workSchedule.toString().split('.').last,
      'sleep_suggestion': _getSleepSuggestion(now),
    };
  }

  String _getSleepSuggestion(DateTime now) {
    final h = now.hour;
    if (h >= 0 && h < 6) return 'very_late';
    if (h >= 22) return 'should_sleep';
    if (h >= 6 && h < 9) return 'morning';
    return 'normal';
  }

  Future<Map<String, dynamic>> _getRecentSchedules(Map<String, dynamic> args) async {
    final now = DateTime.now();
    DateTime startDate;

    final dateStr = args['date'].toString().toLowerCase();
    if (dateStr == 'today') {
      startDate = DateTime(now.year, now.month, now.day);
    } else if (dateStr == 'tomorrow') {
      startDate = DateTime(now.year, now.month, now.day).add(const Duration(days: 1));
    } else if (dateStr == 'yesterday') {
      startDate = DateTime(now.year, now.month, now.day).subtract(const Duration(days: 1));
    } else {
      try {
        startDate = DateTime.parse(args['date']);
      } catch (_) {
        return {'error': '日期格式错误: ${args['date']}'};
      }
    }

    final daysDiff = startDate.difference(DateTime(now.year, now.month, now.day)).inDays.abs();
    if (daysDiff > 7) {
      return {
        'error': '日期超出范围',
        'message': '只能查询距今7天内的日程。如需了解更远的日程规则，请使用 get_rules_summary。',
      };
    }

    final daysCount = (args['days_count'] as int? ?? 1).clamp(1, 7);
    final schedules = <Schedule>[];
    for (int i = 0; i < daysCount; i++) {
      schedules.addAll(await _dbService.getSchedulesByDate(startDate.add(Duration(days: i))));
    }

    return {
      'success': true,
      'date_range': daysCount == 1
          ? startDate.toString().split(' ')[0]
          : '${startDate.toString().split(' ')[0]} 至 ${startDate.add(Duration(days: daysCount - 1)).toString().split(' ')[0]}',
      'count': schedules.length,
      'schedules': schedules.map((s) => {
        'id': s.id,
        'date': s.date.toString().split(' ')[0],
        'title': s.title,
        'startTime': s.startTime?.toString().split(' ')[1].substring(0, 5),
        'endTime': s.endTime?.toString().split(' ')[1].substring(0, 5),
        'description': s.description,
        'isCompleted': s.isCompleted,
      }).toList(),
    };
  }

  Future<Map<String, dynamic>> _getRulesSummary(Map<String, dynamic> args) async {
    final includeDisabled = args['include_disabled'] as bool? ?? false;
    final rules = await _dbService.getAllRules();
    final filtered = includeDisabled ? rules : rules.where((r) => r.isEnabled).toList();

    return {
      'success': true,
      'total_rules': filtered.length,
      'rules': filtered.map((r) => {
        'id': r.id,
        'title': r.title,
        'time': r.time,
        'endTime': r.endTime,
        'conditionType': r.condition.type.name,
        'description': r.description,
        'isEnabled': r.isEnabled,
      }).toList(),
    };
  }

  Future<Map<String, dynamic>> _analyzeBusyness(Map<String, dynamic> args) async {
    DateTime start, end;
    try {
      start = DateTime.parse(args['start_date']);
      end = DateTime.parse(args['end_date']);
    } catch (_) {
      return {'error': '日期格式错误'};
    }

    final busy = <String, Map<String, dynamic>>{};
    var cur = start;
    while (!cur.isAfter(end)) {
      final list = await _dbService.getSchedulesByDate(cur);
      final ds = cur.toString().split(' ')[0];
      busy[ds] = {
        'event_count': list.length,
        'total_duration_minutes': list.length * 60.0,
        'is_busy': list.length > 5,
      };
      cur = cur.add(const Duration(days: 1));
    }

    final sorted = busy.entries.toList()
      ..sort((a, b) => (a.value['event_count'] as int).compareTo(b.value['event_count'] as int));

    return {
      'success': true,
      'date_range': '${start.toString().split(' ')[0]} 至 ${end.toString().split(' ')[0]}',
      'busyness_by_date': busy,
      'least_busy_days': sorted.take(3).map((e) => e.key).toList(),
      'summary': {
        'total_days': busy.length,
        'busy_days': busy.values.where((v) => v['is_busy'] == true).length,
        'average_events_per_day':
            busy.values.map((v) => v['event_count'] as int).reduce((a, b) => a + b) / busy.length,
      },
    };
  }

  Future<Map<String, dynamic>> _getWeatherCache(Map<String, dynamic> args) async {
    try {
      final weather = _msnService.weatherData;
      if (weather == null) return {'error': '天气数据不可用', 'message': '请稍后重试'};

      final dateType = args['date_type'] as String;
      if (dateType == 'today') {
        final c = (weather['current'] as Map?) ?? {};
        final loc = (weather['location'] as Map?) ?? {};
        final aq = (weather['airQuality'] as Map?) ?? {};
        return {
          'success': true,
          'date_type': 'today',
          'location': loc['city'] ?? '未知',
          'temperature': c['temperature'],
          'feels_like': c['feelsLike'],
          'condition': c['condition'],
          'humidity': c['humidity'],
          'wind_speed': c['windSpeed'],
          'uv_index': c['uvIndex'],
          'aqi': aq['aqi'],
          'aqi_level': aq['severity'],
          'summary': '${loc['city'] ?? '当地'} ${c['temperature']}°C ${c['condition']}，体感${c['feelsLike']}°C，空气质量${aq['severity']}',
        };
      } else if (dateType == 'forecast') {
        final fc = (weather['forecast'] as List?) ?? [];
        return {
          'success': true,
          'date_type': 'forecast',
          'forecast_days': fc.length,
          'forecast': fc.take(5).map((d) => {
            'date': d['date'],
            'high': d['highTemp'],
            'low': d['lowTemp'],
            'condition': d['condition'],
            'precipitation': d['precipitation'],
          }).toList(),
          'summary': '未来${fc.length}天预报已获取',
        };
      }
      return {'error': '未知的日期类型'};
    } catch (e) {
      return {'error': '获取天气缓存失败: $e'};
    }
  }

  Future<Map<String, dynamic>> _getLunarCache() async {
    try {
      final cal = _msnService.calendarData;
      if (cal == null) return {'error': '黄历数据不可用', 'message': '请稍后重试'};

      final lunar = (cal['lunar'] as Map?) ?? {};
      final suitable = (cal['suitable'] as List?) ?? [];
      final unsuitable = (cal['unsuitable'] as List?) ?? [];

      return {
        'success': true,
        'solar': cal['date'],
        'lunar': {
          'year': lunar['year'],
          'month': lunar['month'],
          'day': lunar['day'],
          'alias': lunar['alias'],
        },
        'zodiac': cal['zodiac'],
        'constellation': cal['constellation'],
        'suitable_activities': suitable,
        'unsuitable_activities': unsuitable,
        'summary': '农历${lunar['month']}月${lunar['day']} ${cal['zodiac'] ?? ''}年'
            '${suitable.isNotEmpty ? '，宜${suitable.take(3).join("、")}' : ''}'
            '${unsuitable.isNotEmpty ? '，忌${unsuitable.take(3).join("、")}' : ''}',
      };
    } catch (e) {
      return {'error': '获取黄历缓存失败: $e'};
    }
  }

  Future<Map<String, dynamic>> _saveMemory(Map<String, dynamic> args) async {
    try {
      final typeStr = args['memory_type'] as String;
      final content = args['content'] as String;
      final importance = args['importance'] as double? ?? 0.5;

      final mtype = MemoryType.values.firstWhere(
        (e) => e.toString().split('.').last == typeStr,
        orElse: () => MemoryType.fact,
      );

      final memory = MemoryEntry(
        id: '${DateTime.now().millisecondsSinceEpoch}_$typeStr',
        type: mtype,
        content: content,
        createdAt: DateTime.now(),
        importance: importance,
      );

      await _memoryService.saveMemory(memory);
      _invalidateMemory(); // 使缓存失效，下次对话将重新加载

      return {'success': true, 'message': '已记住：$content'};
    } catch (e) {
      return {'success': false, 'error': '保存记忆失败: $e'};
    }
  }

  Future<Map<String, dynamic>> _proposeAction(Map<String, dynamic> args) async {
    final actionType = args['action_type'];
    final description = args['description'];
    final scheduleData = args['schedule_data'] as Map<String, dynamic>;

    ActionType type;
    switch (actionType) {
      case 'create':      type = ActionType.create;      break;
      case 'modify':      type = ActionType.modify;      break;
      case 'modify_once': type = ActionType.modifyOnce;  break;
      case 'delete':      type = ActionType.delete;      break;
      case 'delete_all':  type = ActionType.deleteAll;   break;
      default:
        return {'success': false, 'error': '未知的操作类型'};
    }

    final action = PendingAction(
      id: '${DateTime.now().millisecondsSinceEpoch}_${_actionIdCounter++}',
      type: type,
      description: description,
      data: scheduleData,
    );

    pendingActions.add(action);
    onNewApproval?.call();

    return {'success': true, 'message': '已提交审批请求，等待用户确认', 'action_id': action.id};
  }

  // ─── 操作执行 ───

  @override
  Future<void> executeAction(String actionId) async {
    final action = pendingActions.firstWhere(
      (a) => a.id == actionId,
      orElse: () => throw Exception('操作不存在'),
    );

    try {
      switch (action.type) {
        case ActionType.create:
          await _createSchedule(action.data);
          break;
        case ActionType.modify:
          await _modifySchedule(action.data);
          break;
        case ActionType.modifyOnce:
          await _modifyOnce(action.data);
          break;
        case ActionType.delete:
          await _deleteSchedule(action.data);
          break;
        case ActionType.deleteAll:
          await _executeDeleteAll();
          break;
        case ActionType.toggleComplete:
          await _toggleComplete(action.data);
          break;
      }
      pendingActions.removeWhere((a) => a.id == actionId);
    } catch (e) {
      pendingActions.removeWhere((a) => a.id == actionId);
      rethrow;
    }
  }

  @override
  void rejectAction(String actionId) {
    pendingActions.removeWhere((a) => a.id == actionId);
  }

  Future<void> _createSchedule(Map<String, dynamic> data) async {
    if (data['time'] == null || (data['time'] as String).trim().isEmpty) {
      throw Exception('日程创建失败：缺少必需的 time 字段');
    }
    await _dbService.insertRule(ScheduleRuleConverter.fromAIJson(data));
  }

  Future<void> _modifyOnce(Map<String, dynamic> data) async {
    late DateTime date;
    String? ruleId;

    if (data.containsKey('id')) {
      final scheduleId = data['id'] as String;
      final parts = scheduleId.split('_');
      date = (parts.length > 1 && DateTime.tryParse(parts[1]) != null)
          ? DateTime.parse(parts[1])
          : DateTime.parse(data['date'] as String);

      final schedules = await _dbService.getSchedulesByDate(date);
      final s = schedules.firstWhere(
        (s) => s.id == scheduleId,
        orElse: () => throw Exception('未找到日程: $scheduleId'),
      );
      ruleId = s.sourceTemplateId ?? (throw Exception('该日程不是由规则生成的'));
    } else if (data.containsKey('title')) {
      ruleId = await _dbService.findRuleId(data['title'] as String, null)
          ?? (throw Exception('未找到匹配的规则'));
      date = DateTime.parse(data['date'] as String);
    } else {
      throw Exception('modify_once 需要提供 id 或 title');
    }

    OverrideType type;
    String? newTime, newEndTime, newTitle, newDesc;

    final changes = [data.containsKey('new_time'), data.containsKey('new_end_time'),
        data.containsKey('new_title'), data.containsKey('new_description')];
    final multi = changes.where((x) => x).length > 1;

    if (multi || data.containsKey('new_description')) {
      type = OverrideType.modify;
    } else if (data.containsKey('new_time') || data.containsKey('new_end_time')) {
      type = OverrideType.modifyTime;
    } else if (data.containsKey('new_title')) {
      type = OverrideType.replace;
    } else {
      type = OverrideType.skip;
    }

    newTime = data['new_time'] as String?;
    newEndTime = data['new_end_time'] as String?;
    newTitle = data['new_title'] as String?;
    newDesc = data['new_description'] as String?;

    await _dbService.insertOverride(ScheduleOverride(
      startDate: date, endDate: date,
      ruleId: ruleId, type: type,
      newTime: newTime, newEndTime: newEndTime,
      newTitle: newTitle, newDescription: newDesc,
    ));
  }

  Future<void> _modifySchedule(Map<String, dynamic> data) async {
    String? ruleId;
    if (data.containsKey('id')) {
      ruleId = (data['id'] as String).split('_').first;
    } else if (data.containsKey('title')) {
      ruleId = await _dbService.findRuleId(data['title'] as String, null);
    }
    if (ruleId == null) throw Exception('无法找到要修改的规则');

    final rule = await _dbService.getRuleById(ruleId);
    if (rule == null) throw Exception('规则不存在');

    await _dbService.updateRule(ScheduleRule(
      id: rule.id,
      title: data['title'] as String? ?? rule.title,
      description: data['description'] as String? ?? rule.description,
      time: data['time'] as String? ?? rule.time,
      endTime: data['end_time'] as String? ?? rule.endTime,
      condition: rule.condition,
      createdAt: rule.createdAt,
      isEnabled: rule.isEnabled,
    ));
  }

  Future<void> _deleteSchedule(Map<String, dynamic> data) async {
    await _dbService.deleteSchedule(data['id'].toString());
  }

  Future<void> _executeDeleteAll() async {
    final db = await _dbService.database;
    await db.delete('schedule_rules');
    await db.delete('schedule_overrides');
  }

  Future<void> _toggleComplete(Map<String, dynamic> data) async {
    final scheduleId = data['id'].toString();
    final today = DateTime.now();
    for (int i = -365; i <= 365; i++) {
      final schedules = await _dbService.getSchedulesByDate(today.add(Duration(days: i)));
      try {
        final s = schedules.firstWhere((s) => s.id == scheduleId);
        await _dbService.updateSchedule(s.copyWith(isCompleted: !s.isCompleted));
        return;
      } catch (_) {}
    }
    throw Exception('未找到日程');
  }

  @override
  void clearHistory() {
    debugPrint('[Service] 清空对话');
    _isCancelled = true;
    _ctx.clear();
    pendingActions.clear();
    _actionIdCounter = 0;
    _lastRequestHash = null;
  }

  // ─── 工具 ───

  dynamic _deepConvertMap(dynamic value) {
    if (value is Map) {
      return Map<String, dynamic>.from(
        value.map((k, v) => MapEntry(k.toString(), _deepConvertMap(v))),
      );
    } else if (value is List) {
      return value.map(_deepConvertMap).toList();
    }
    return value;
  }
}
