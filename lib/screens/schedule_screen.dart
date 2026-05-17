import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:provider/provider.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:flutter/services.dart';
import 'package:intl/intl.dart';
import 'dart:convert';
import 'dart:async';
import 'package:pull_to_refresh/pull_to_refresh.dart';
import '../models/schedule.dart';
import '../models/chat_message.dart';
import '../widgets/schedule_header.dart';
import '../widgets/chat_panel.dart';
import '../widgets/chat_input_bar.dart';
import '../widgets/schedule_delete_dialog.dart';
import '../widgets/override_list_dialog.dart';
import '../widgets/rule_edit_dialog.dart';
import '../widgets/approval_card_list.dart';
import '../widgets/schedule_item.dart';
import '../widgets/switch_refresh_indicator.dart';
import '../widgets/custom_pull_footer.dart';
import '../models/schedule_rule.dart';
import '../models/schedule_override.dart';
import '../services/database_service.dart';
import '../services/day_service.dart';
import '../services/work_schedule_service.dart';
import '../services/holiday_service.dart';
import '../services/ai_service.dart';
import '../services/date_change_service.dart';
import '../config/api_keys.dart';
import '../models/day_type.dart';
import '../models/holiday.dart';
import '../models/pending_action.dart';
import '../utils/snackbar_helper.dart';
import 'settings_screen.dart';

// 聊天/日程面板三档状态
enum PanelSizeState { expanded, normal, minimized }

/// AI 日程页面（集成聊天助手）
class ScheduleScreen extends StatefulWidget {
  final DateTime? initialDate;
  final AIService aiService;

  const ScheduleScreen({super.key, this.initialDate, required this.aiService});

  @override
  State<ScheduleScreen> createState() => ScheduleScreenState();
}

class ScheduleScreenState extends State<ScheduleScreen> {
  DateTime _selectedDate = DateTime.now();
  List<Schedule> _schedules = [];
  List<Schedule> _prevSchedules = []; // 前一天的日程（向上滚动预览）
  List<Schedule> _nextSchedules = []; // 次日前4个 + 更多（向下滚动时加载）
  Map<String, ScheduleRule> _rulesCache = {};
  List<ScheduleOverride> _overridesCache = []; // 当天的覆盖记录
  DayType? _dayType;
  Holiday? _holiday;

  late AIService _aiService;
  final TextEditingController _textController = TextEditingController();
  final ScrollController _scheduleScrollController = ScrollController();
  final ScrollController _messageScrollController = ScrollController();
  final List<GlobalKey> _scheduleItemKeys = <GlobalKey>[];
  final List<ChatMessage> _messages = [];
  bool _isLoading = false;

  // 下拉刷新控制器
  final RefreshController _refreshController = RefreshController(
    initialRefresh: false,
  );

  // 日期切换方向：-1表示前一天，1表示后一天，0表示无切换
  int _dateChangeDirection = 0;

  static const String _keyMessages = 'chat_messages';

  // 三档面板状态与拖动控制
  PanelSizeState _panelState = PanelSizeState.normal;
  double _chatFraction = 0.40;
  bool _isDragging = false;

  // Dismissible key 计数器，每次清除聊天记录时递增，确保 widget 完全重建
  int _dismissibleKeyCounter = 0;

  // 标记是否应该滚动到当前任务（仅在从外部导航进入时为true）
  bool _shouldScrollToCurrent = false;

  // 记录上次审批数量，用于判断审批窗是否首次弹出
  int _lastPendingActionsCount = 0;

  // 日程时间点检查定时器
  Timer? _scheduleTimeCheckTimer;

  @override
  void initState() {
    super.initState();
    if (widget.initialDate != null) {
      _selectedDate = widget.initialDate!;
    }
    // 使用从 MainScreen 传入的 AIService
    _aiService = widget.aiService;

    // 页面初始化时需要滚动到当前任务
    _shouldScrollToCurrent = true;

    _loadSchedules();
    _loadMessages();

    // 监听日期变更服务
    DateChangeService().addListener(_onDateChanged);

    // 启动日程时间点检查（仅在有今天的日程时）
    _startScheduleTimeCheck();
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
        _scrollMessagesToBottom();
      } catch (e) {
        // 解析失败，添加欢迎消息
        _addWelcomeMessage();
      }
    } else {
      _addWelcomeMessage();
    }
  }

  void _addWelcomeMessage() {
    _addChatMessage(
      ChatMessage(
        text:
            '嗨！我是你的智能助手 🤖\n\n你可以随便跟我聊天，比如：\n• "还没睡呢"\n• "明天干什么"\n• "帮我安排工作日晨练"\n\n我会根据你的日程给出建议~',
        isUser: false,
        timestamp: DateTime.now(),
      ),
    );
  }

  Future<void> _saveMessages() async {
    final prefs = await SharedPreferences.getInstance();
    final jsonList = _messages.map((m) => m.toJson()).toList();
    await prefs.setString(_keyMessages, jsonEncode(jsonList));
  }

  /// 外部更新选中日期
  void updateSelectedDate(DateTime date) async {
    final oldYear = _selectedDate.year;
    setState(() {
      _selectedDate = date;
      _shouldScrollToCurrent = true; // 从外部导航进入，需要滚动
    });

    // 如果切换到了新的年份，确保该年份的节假日已缓存
    if (date.year != oldYear) {
      final holidayService = Provider.of<HolidayService>(
        context,
        listen: false,
      );
      await holidayService.ensureYearCached(date.year);
    }

    _loadSchedules();
  }

  @override
  void dispose() {
    DateChangeService().removeListener(_onDateChanged);
    _scheduleTimeCheckTimer?.cancel();
    _textController.dispose();
    _scheduleScrollController.dispose();
    _messageScrollController.dispose();
    super.dispose();
  }

  /// 启动日程时间点检查
  void _startScheduleTimeCheck() {
    _scheduleTimeCheckTimer?.cancel();

    // 只在今天且有带时间的日程时才启动定时器
    if (!_isToday() || _schedules.isEmpty) {
      return;
    }

    // 检查是否有任何带时间的日程
    final hasTimedSchedules = _schedules.any(
      (s) => s.startTime != null || s.endTime != null,
    );

    if (!hasTimedSchedules) {
      return;
    }

    // 每30秒检查一次
    _scheduleTimeCheckTimer = Timer.periodic(
      const Duration(seconds: 30),
      (_) => _checkScheduleTimeUpdate(),
    );
  }

  /// 检查是否需要更新日程高亮
  void _checkScheduleTimeUpdate() {
    if (!_isToday() || !mounted) {
      _scheduleTimeCheckTimer?.cancel();
      return;
    }

    // 触发重建以更新高亮状态
    setState(() {});
  }

  /// 日期变更回调
  void _onDateChanged() {
    debugPrint('🔄 日程页收到日期变更通知');

    // 日期变更时只刷新数据，不改变用户选择的日期
    // 避免在0点时强制跳转打断用户操作
    _shouldScrollToCurrent = false; // 日期自然变更不需要滚动
    _loadSchedules();
  }

  /// 将消息加入并保存，同时滚动到底部
  void _addChatMessage(ChatMessage msg) {
    setState(() {
      _messages.add(msg);
      // 当有新消息时，将聊天窗口最大化
      if (_panelState != PanelSizeState.expanded) {
        _setPanelState(PanelSizeState.expanded);
      }
    });
    _saveMessages();
    _scrollMessagesToBottom();
  }

  void _scrollMessagesToBottom() {
    Future.delayed(const Duration(milliseconds: 100), () {
      if (_messageScrollController.hasClients) {
        _messageScrollController.animateTo(
          _messageScrollController.position.maxScrollExtent,
          duration: const Duration(milliseconds: 300),
          curve: Curves.easeOut,
        );
      }
    });
  }

  // --- 运行时 API 配置存储键 ---
  static const String _keyRuntimeApiKey = 'runtime_gpt_api_key';
  static const String _keyRuntimeBaseUrl = 'runtime_gpt_base_url';
  static const String _keyRuntimeModel = 'runtime_gpt_model';

  // (配置读取由对话打开时直接从 SharedPreferences 获取，无需单独公开方法)

  Future<void> _saveRuntimeApiConfig({
    String? apiKey,
    String? baseUrl,
    String? model,
  }) async {
    final prefs = await SharedPreferences.getInstance();
    if (apiKey == null) {
      await prefs.remove(_keyRuntimeApiKey);
    } else {
      await prefs.setString(_keyRuntimeApiKey, apiKey);
    }
    if (baseUrl == null) {
      await prefs.remove(_keyRuntimeBaseUrl);
    } else {
      await prefs.setString(_keyRuntimeBaseUrl, baseUrl);
    }
    if (model == null) {
      await prefs.remove(_keyRuntimeModel);
    } else {
      await prefs.setString(_keyRuntimeModel, model);
    }
  }

  bool _apiConfigHighlight = false;

  Future<void> _openApiConfigDialog({bool highlight = false}) async {
    final prefs = await SharedPreferences.getInstance();
    if (!mounted) return;
    final currentKey = prefs.getString(_keyRuntimeApiKey) ?? '';
    final currentBase =
        prefs.getString(_keyRuntimeBaseUrl) ?? ApiKeys.gptBaseUrl;
    final currentModel = prefs.getString(_keyRuntimeModel) ?? ApiKeys.gptModel;

    final keyCtrl = TextEditingController(text: currentKey);
    final baseCtrl = TextEditingController(text: currentBase);
    final modelCtrl = TextEditingController(text: currentModel);

    if (highlight) {
      setState(() {
        _apiConfigHighlight = true;
      });
    }

    await showDialog(
      context: context,
      builder: (dialogContext) {
        return AlertDialog(
          title: const Text('API 配置'),
          content: SingleChildScrollView(
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                AnimatedContainer(
                  duration: const Duration(milliseconds: 300),
                  decoration: BoxDecoration(
                    border: Border.all(
                      color: _apiConfigHighlight
                          ? Colors.orange
                          : Colors.transparent,
                      width: 2,
                    ),
                    borderRadius: BorderRadius.circular(6),
                  ),
                  padding: const EdgeInsets.all(6),
                  child: TextField(
                    controller: keyCtrl,
                    decoration: const InputDecoration(
                      labelText: 'API Key',
                      hintText: '在此粘贴你的 API Key（可留空使用内置）',
                    ),
                    obscureText: true,
                  ),
                ),
                const SizedBox(height: 12),
                TextField(
                  controller: baseCtrl,
                  decoration: const InputDecoration(
                    labelText: 'Base URL',
                    hintText: '例如: https://api.openai.com/v1',
                  ),
                ),
                const SizedBox(height: 12),
                TextField(
                  controller: modelCtrl,
                  decoration: const InputDecoration(
                    labelText: 'Model',
                    hintText: '例如: gpt-4o-mini',
                  ),
                ),
                const SizedBox(height: 8),
                Row(
                  children: [
                    Expanded(
                      child: TextButton(
                        onPressed: () {
                          // 清除运行时配置，回退到内置值
                          keyCtrl.clear();
                          baseCtrl.text = ApiKeys.gptBaseUrl;
                          modelCtrl.text = ApiKeys.gptModel;
                          _saveRuntimeApiConfig(
                            apiKey: null,
                            baseUrl: null,
                            model: null,
                          );
                          Navigator.pop(dialogContext);
                        },
                        child: const Text('恢复默认'),
                      ),
                    ),
                    const SizedBox(width: 8),
                    ElevatedButton(
                      onPressed: () async {
                        await _saveRuntimeApiConfig(
                          apiKey: keyCtrl.text.trim().isEmpty
                              ? null
                              : keyCtrl.text.trim(),
                          baseUrl: baseCtrl.text.trim().isEmpty
                              ? null
                              : baseCtrl.text.trim(),
                          model: modelCtrl.text.trim().isEmpty
                              ? null
                              : modelCtrl.text.trim(),
                        );
                        if (!mounted || !dialogContext.mounted) return;
                        SnackBarHelper.showMessage(context, 'API 配置已保存');
                        Navigator.pop(dialogContext);
                      },
                      child: const Text('保存'),
                    ),
                  ],
                ),
              ],
            ),
          ),
        );
      },
    );

    // 取消高亮（短暂展示）
    if (highlight) {
      Future.delayed(const Duration(seconds: 3), () {
        if (mounted) setState(() => _apiConfigHighlight = false);
      });
    }
  }

  Future<void> _loadSchedules() async {
    final dbService = Provider.of<DatabaseService>(context, listen: false);
    final dayService = Provider.of<DayService>(context, listen: false);

    // 加载当天全部日程
    final schedules = await dbService.getSchedulesByDate(_selectedDate);

    // 加载次日全部日程（前4个作为边界，5+用于overscroll显示）
    final nextDay = DateTime(
      _selectedDate.year,
      _selectedDate.month,
      _selectedDate.day,
    ).add(const Duration(days: 1));
    final nextSchedules = await dbService.getSchedulesByDate(nextDay);

    // 加载前一天的全部日程（用于向上超出边界时显示）
    final prevDay = DateTime(
      _selectedDate.year,
      _selectedDate.month,
      _selectedDate.day,
    ).subtract(const Duration(days: 1));
    final prevSchedules = await dbService.getSchedulesByDate(prevDay);

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

    // 加载当天的覆盖记录（直接查询当天的，更高效）
    final todayOverrides = await dbService.getOverridesByDate(_selectedDate);

    setState(() {
      _schedules = schedules;
      _prevSchedules = prevSchedules;
      _nextSchedules = nextSchedules;
      _dayType = dayType;
      _holiday = holiday;
      _rulesCache = rulesCache;
      _overridesCache = todayOverrides;

      // 更新 item keys
      _scheduleItemKeys.clear();
      _scheduleItemKeys.addAll(
        List.generate(_schedules.length, (_) => GlobalKey()),
      );
    });

    // 重新启动时间检查（根据当前日程情况）
    _startScheduleTimeCheck();

    // 滚动到合适的位置
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (!_scheduleScrollController.hasClients) return;

      // 检查是否有当前日程需要滚动到
      final (currentIndex, isPrev) = _getCurrentScheduleInfo();
      final hasCurrentSchedule =
          currentIndex != null &&
          !isPrev &&
          currentIndex < _scheduleItemKeys.length;

      // 如果是日期切换触发的加载
      if (_dateChangeDirection != 0) {
        final direction = _dateChangeDirection;
        _dateChangeDirection = 0; // 重置方向标记

        if (_schedules.isEmpty) {
          return; // 如果没有日程，不执行动画
        }

        // 如果有当前日程，直接滚动到它，不使用边界外动画（避免触发下拉刷新）
        if (hasCurrentSchedule) {
          final ctx = _scheduleItemKeys[currentIndex].currentContext;
          if (ctx != null) {
            final RenderBox? box = ctx.findRenderObject() as RenderBox?;
            if (box != null) {
              final viewport = RenderAbstractViewport.of(box);
              final double target = viewport
                  .getOffsetToReveal(box, 0.0)
                  .offset - 15; // 距顶部 15px 间距
              _scheduleScrollController.jumpTo(target.clamp(0.0, _scheduleScrollController.position.maxScrollExtent));
            } else {
              Scrollable.ensureVisible(
                ctx,
                duration: const Duration(milliseconds: 300),
                alignment: 0.0,
              );
            }
          } else {
            _scheduleScrollController.jumpTo(0);
          }
          return;
        }

        // 没有当前日程时，使用滚动动画
        final maxScrollExtent =
            _scheduleScrollController.position.maxScrollExtent;
        final viewportHeight =
            _scheduleScrollController.position.viewportDimension;

        if (direction == -1) {
          // 切换到前一天：从顶部滚入
          _scheduleScrollController.jumpTo(-viewportHeight * 0.3);
          _scheduleScrollController.animateTo(
            0,
            duration: const Duration(milliseconds: 400),
            curve: Curves.easeOutCubic,
          );
        } else {
          // 切换到后一天：从底部滚入
          final startPosition = maxScrollExtent + viewportHeight * 0.3;
          _scheduleScrollController.jumpTo(
            startPosition.clamp(0.0, double.infinity),
          );
          _scheduleScrollController.animateTo(
            0,
            duration: const Duration(milliseconds: 400),
            curve: Curves.easeOutCubic,
          );
        }
        return;
      }

      // 非日期切换的常规滚动逻辑
      if (!_isToday()) {
        // 非今天，滚动到顶部第一个
        if (_schedules.isNotEmpty) {
          _scheduleScrollController.jumpTo(0);
        }
        return;
      }

      // 今天：检查是否有"当前"日程
      if (hasCurrentSchedule && _shouldScrollToCurrent) {
        // 有当前正在进行的日程（在今天）且需要滚动
        final ctx = _scheduleItemKeys[currentIndex].currentContext;
        if (ctx != null) {
          // 手动计算目标位置，避免触发footer
          WidgetsBinding.instance.addPostFrameCallback((_) {
            if (!_scheduleScrollController.hasClients) return;

            final RenderBox? box = ctx.findRenderObject() as RenderBox?;
            if (box == null) return;

            final RenderAbstractViewport viewport = RenderAbstractViewport.of(
              box,
            );
            // 对齐到顶部 + 15px 间距，避免贴边
            final double revealOffset = viewport
                .getOffsetToReveal(box, 0.0)
                .offset;
            final double targetOffset = revealOffset - 15;

            // 获取最大滚动范围
            final maxScrollExtent =
                _scheduleScrollController.position.maxScrollExtent;

            // 保留更大的安全边距，避免触发footer（50px安全边距）
            // 如果当前任务在最后，宁可不完全显示也不要触发翻页
            final maxSafeOffset = maxScrollExtent > 50
                ? maxScrollExtent - 50
                : 0.0;

            // 如果目标位置会超出安全范围，只滚动到安全边界
            final safeOffset = targetOffset > maxSafeOffset
                ? maxSafeOffset
                : targetOffset;

            debugPrint(
              '滚动到当前任务: targetOffset=$targetOffset, maxScrollExtent=$maxScrollExtent, safeOffset=$safeOffset',
            );

            _scheduleScrollController.animateTo(
              safeOffset.clamp(0.0, maxSafeOffset),
              duration: const Duration(milliseconds: 350),
              curve: Curves.easeOut,
            );
          });
        }
        _shouldScrollToCurrent = false; // 滚动后重置标记
      } else if (_schedules.isNotEmpty && _shouldScrollToCurrent) {
        // 没有当前日程，滚动到第一个
        _scheduleScrollController.jumpTo(0);
        _shouldScrollToCurrent = false; // 滚动后重置标记
      }
    });
  }

  void _backToToday() {
    setState(() {
      _selectedDate = DateTime.now();
      _shouldScrollToCurrent = true; // 点击回到今天时需要滚动
    });
    _loadSchedules();
  }

  void _clearChatHistory() {
    widget.aiService.clearHistory(); // 已经包含了清空 pendingActions 和中断对话
    setState(() {
      _messages.clear();
      _messages.add(
        ChatMessage(
          text:
              '✅ 对话已完全重置！\n\n所有上下文已清空，这是一个全新的对话。\n\n你可以随便跟我聊天，比如：\n• "还没睡呢"\n• "明天干什么"\n• "帮我安排工作日晨练"\n\n我会根据你的日程给出建议~',
          isUser: false,
          timestamp: DateTime.now(),
        ),
      );
      // 递增计数器以确保 Dismissible widget 使用新的 key
      _dismissibleKeyCounter++;
    });
  }

  Future<void> _handleSubmit(String text) async {
    if (text.trim().isEmpty) return;

    final userMessage = text.trim();
    _textController.clear();

    _addChatMessage(
      ChatMessage(text: userMessage, isUser: true, timestamp: DateTime.now()),
    );
    setState(() {
      _isLoading = true;
    });

    try {
      final response = await _aiService.chat(userMessage);

      _addChatMessage(
        ChatMessage(text: response, isUser: false, timestamp: DateTime.now()),
      );
      setState(() {
        _isLoading = false;
      });

      // 如果有新的审批操作，打印日志
      if (_aiService.pendingActions.isNotEmpty) {
        debugPrint('检测到 ${_aiService.pendingActions.length} 个待审批操作');
        for (var action in _aiService.pendingActions) {
          debugPrint('  - ${action.description}');
        }
      }
    } catch (e) {
      _addChatMessage(
        ChatMessage(
          text: '抱歉，处理你的请求时出错了：$e\n[CHECK_API_CONFIG]',
          isUser: false,
          timestamp: DateTime.now(),
          isError: true,
        ),
      );
      setState(() {
        _isLoading = false;
      });
    }
  }

  // 注意：日程列表使用 `_scheduleScrollController`，聊天消息使用 `_messageScrollController`。

  // 切换面板状态并同步聊天区比例
  void _setPanelState(PanelSizeState state) {
    setState(() {
      _panelState = state;
      switch (state) {
        case PanelSizeState.expanded:
          _chatFraction = 0.75;
          break;
        case PanelSizeState.normal:
          _chatFraction = 0.40;
          break;
        case PanelSizeState.minimized:
          // 最小状态：完全贴合底边（chat 区高度为 0）
          _chatFraction = 0.0;
          break;
      }
    });
  }

  // 将当前 _chatFraction 捕捉到最近的三档之一
  void _snapToNearest() {
    final Map<PanelSizeState, double> cand = {
      PanelSizeState.expanded: 0.75,
      PanelSizeState.normal: 0.40,
      // 最小状态：0.0 使面板完全收起并把拉杠贴合在底部
      PanelSizeState.minimized: 0.0,
    };

    PanelSizeState best = PanelSizeState.normal;
    double bestDiff = double.infinity;
    cand.forEach((k, v) {
      final d = (v - _chatFraction).abs();
      if (d < bestDiff) {
        bestDiff = d;
        best = k;
      }
    });

    _setPanelState(best);
  }

  Future<void> _approveAction(PendingAction action) async {
    try {
      debugPrint(
        '开始执行操作 ${action.id}, 类型: ${action.type}, 描述: ${action.description}',
      );
      debugPrint('操作数据: ${action.data}');

      await _aiService.executeAction(action.id);

      debugPrint('操作执行成功');

      _shouldScrollToCurrent = false; // 审批操作刷新不触发滚动
      await _loadSchedules(); // 刷新日程列表
      // 重置滚动位置到有效范围，避免日程数量变化后无法滑动
      WidgetsBinding.instance.addPostFrameCallback((_) {
        if (_scheduleScrollController.hasClients &&
            _scheduleScrollController.offset >
                _scheduleScrollController.position.maxScrollExtent) {
          _scheduleScrollController.jumpTo(
            _scheduleScrollController.position.maxScrollExtent,
          );
        }
      });
      setState(() {}); // 触发重建以更新审批列表

      debugPrint('日程列表已刷新，当前日程数量: ${_schedules.length}');

      // 检查是否所有审批都完成了
      if (_aiService.pendingActions.isEmpty) {
        _addChatMessage(
          ChatMessage(
            text: '✅ 需求已完成！建议清空对话以提高反应速度。',
            isUser: false,
            timestamp: DateTime.now(),
            showClearButton: true,
          ),
        );
      }

      if (mounted) {
        SnackBarHelper.showMessage(context, '✓ 已执行：${action.description}');
      }
    } catch (e) {
      debugPrint('执行操作失败: $e');
      debugPrint('堆栈跟踪: ${StackTrace.current}');

      if (mounted) {
        SnackBarHelper.showError(
          context,
          '执行失败：$e',
          duration: const Duration(seconds: 5),
        );
      }
    }
  }

  Future<void> _showDayTypeDialog() async {
    final dayService = Provider.of<DayService>(context, listen: false);

    // 规范化日期（去除时间部分）
    final normalizedDay = DateTime(
      _selectedDate.year,
      _selectedDate.month,
      _selectedDate.day,
    );

    // 获取当前的覆盖设置
    final currentOverride = dayService.getDayOverride(normalizedDay);

    // 获取默认日期类型（临时移除覆盖后获取）
    DayType defaultDayType;
    if (currentOverride != null) {
      // 如果有覆盖，暂时移除以获取默认类型
      final holiday = await dayService.getHoliday(normalizedDay);
      if (holiday != null) {
        defaultDayType = holiday.isWorkday ? DayType.workday : DayType.holiday;
      } else {
        // 根据工作制判断
        if (!mounted) return;
        final workScheduleService = Provider.of<WorkScheduleService>(
          context,
          listen: false,
        );
        final isRestDay = workScheduleService.isRestDay(normalizedDay);
        defaultDayType = isRestDay ? DayType.weekend : DayType.workday;
      }
    } else {
      // 没有覆盖，直接使用当前类型
      defaultDayType = _dayType ?? DayType.workday;
    }

    if (!mounted) return;

    // 判断默认是工作日还是休息日
    final isDefaultWorkday = defaultDayType == DayType.workday;

    final result = await showDialog<DayType?>(
      context: context,
      builder: (context) => AlertDialog(
        title: Text(DateFormat('yyyy年MM月dd日').format(normalizedDay)),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // 显示当前状态
            Container(
              padding: const EdgeInsets.all(12),
              margin: const EdgeInsets.only(bottom: 16),
              decoration: BoxDecoration(
                color: currentOverride != null
                    ? Theme.of(context).colorScheme.secondaryContainer
                    : Theme.of(context).colorScheme.primaryContainer,
                borderRadius: BorderRadius.circular(8),
                border: Border.all(
                  color: currentOverride != null
                      ? Theme.of(context).colorScheme.secondary
                      : Theme.of(context).colorScheme.primary,
                ),
              ),
              child: Row(
                children: [
                  Icon(
                    currentOverride != null
                        ? Icons.edit_calendar
                        : Icons.info_outline,
                    size: 20,
                    color: currentOverride != null
                        ? Theme.of(context).colorScheme.secondary
                        : Theme.of(context).colorScheme.primary,
                  ),
                  const SizedBox(width: 8),
                  Expanded(
                    child: Text(
                      currentOverride != null
                          ? '已手动设置为：${currentOverride.dayType.displayName}'
                          : '默认为：${defaultDayType.displayName}',
                      style: TextStyle(
                        fontSize: 13,
                        color: currentOverride != null
                            ? Theme.of(context).colorScheme.onSecondaryContainer
                            : Theme.of(context).colorScheme.onPrimaryContainer,
                      ),
                    ),
                  ),
                ],
              ),
            ),

            // 根据默认类型显示不同选项
            if (isDefaultWorkday) ...[
              // 工作日：显示"设置休假"
              ListTile(
                leading: Icon(Icons.beach_access, color: Colors.green.shade600),
                title: const Text('设置休假'),
                subtitle: const Text('今天休息，不工作'),
                onTap: () => Navigator.pop(context, DayType.weekend),
              ),
            ] else ...[
              // 休息日：显示"设置加班"
              ListTile(
                leading: Icon(Icons.work, color: Colors.blue.shade600),
                title: const Text('设置加班'),
                subtitle: const Text('今天需要工作'),
                onTap: () => Navigator.pop(context, DayType.workday),
              ),
            ],

            const Divider(),

            // 恢复默认选项
            if (currentOverride != null)
              ListTile(
                leading: Icon(Icons.restore, color: Colors.grey.shade600),
                title: const Text('恢复默认'),
                subtitle: Text('按工作制自动判断（${defaultDayType.displayName}）'),
                onTap: () => Navigator.pop(context, null),
              ),
          ],
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('取消'),
          ),
        ],
      ),
    );

    if (result != null) {
      // 用户选择了新的类型
      await dayService.setDayOverride(normalizedDay, result);
      _shouldScrollToCurrent = false; // 类型切换刷新不触发滚动
      _loadSchedules();
    } else if (currentOverride != null && result == null) {
      // 用户选择恢复默认
      await dayService.removeDayOverride(normalizedDay);
      _shouldScrollToCurrent = false; // 类型切换刷新不触发滚动
      _loadSchedules();
    }
  }

  void _rejectAction(PendingAction action) {
    _aiService.rejectAction(action.id);
    setState(() {}); // 触发重建以更新审批列表

    // 检查是否所有审批都完成了
    if (_aiService.pendingActions.isEmpty) {
      _addChatMessage(
        ChatMessage(
          text: '✅ 需求已完成！建议清空对话以提高反应速度。',
          isUser: false,
          timestamp: DateTime.now(),
          showClearButton: true,
        ),
      );
    }

    if (mounted) {
      SnackBarHelper.showMessage(context, '✗ 已拒绝：${action.description}');
    }
  }

  /// 构建窄屏聊天组件（包含拉杆、聊天面板、输入框）
  Widget _buildNarrowChatWidget(double totalH) {
    const double expandedFraction = 0.75;
    const double normalFraction = 0.40;
    const double minimizedFraction = 0.0;

    double chatFraction;
    if (_panelState == PanelSizeState.expanded) {
      chatFraction = expandedFraction;
    } else if (_panelState == PanelSizeState.minimized) {
      chatFraction = minimizedFraction;
    } else {
      chatFraction = normalFraction;
    }

    if (_isDragging) chatFraction = _chatFraction;

    const double handleH = 18.0;
    final double maxChatH = (totalH - 80.0) <= 0.0 ? 0.0 : (totalH - 80.0);
    final double chatH = (totalH * chatFraction).clamp(0.0, maxChatH);

    return SizedBox(
      height: chatH + handleH,
      child: ChatPanel(
        messages: _messages,
        controller: _messageScrollController,
        isLoading: _isLoading,
        onCheckApiConfig: () => _openApiConfigDialog(highlight: true),
        onClearHistory: _clearChatHistory,
        dismissibleKey: ValueKey('dismissible_$_dismissibleKeyCounter'),
        onDragStart: (details) {
          setState(() {
            _isDragging = true;
          });
        },
        onDragUpdate: (details) {
          setState(() {
            _chatFraction = (_chatFraction - details.delta.dy / totalH).clamp(
              minimizedFraction,
              expandedFraction,
            );
          });
        },
        onDragEnd: (details) {
          setState(() {
            _isDragging = false;
            _snapToNearest();
          });
        },
        onTap: () {
          setState(() {
            if (_panelState == PanelSizeState.normal) {
              _setPanelState(PanelSizeState.expanded);
            } else if (_panelState == PanelSizeState.expanded) {
              _setPanelState(PanelSizeState.minimized);
            } else {
              _setPanelState(PanelSizeState.normal);
            }
          });
        },
      ),
    );
  }

  /// 构建日程列表区域（包含header、审批卡片、日程列表）
  /// [forWideLayout] 为true时使用普通ScrollView（避免RefreshController冲突）
  Widget _buildScheduleSection({bool forWideLayout = false}) {
    return Column(
      children: [
        ScheduleHeader(
          selectedDate: _selectedDate,
          dayType: _dayType,
          holiday: _holiday,
          isToday: _isToday(),
          onLongPressDayType: _showDayTypeDialog,
          onAddSchedule: _showAddScheduleDialog,
        ),
        if (_aiService.pendingActions.isNotEmpty)
          ApprovalCardList(
            actions: _aiService.pendingActions,
            onApprove: _approveAction,
            onReject: _rejectAction,
          ),
        Expanded(
          child: forWideLayout
              ? _buildScheduleListForWideLayout()
              : _buildScheduleListWithRefresh(),
        ),
      ],
    );
  }

  /// 构建带下拉刷新的日程列表（窄屏模式）
  Widget _buildScheduleListWithRefresh() {
    return _schedules.isEmpty
        ? SmartRefresher(
            controller: _refreshController,
            enablePullDown: true,
            enablePullUp: true,
            header: buildSwitchRefreshHeader(isTop: true),
            footer: buildCustomPullFooter(),
            onRefresh: _onRefresh,
            onLoading: _onLoading,
            child: LayoutBuilder(
              builder: (context, constraints) {
                return SingleChildScrollView(
                  physics: const NeverScrollableScrollPhysics(),
                  child: ConstrainedBox(
                    constraints: BoxConstraints(
                      minHeight: constraints.maxHeight,
                    ),
                    child: Center(
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Icon(
                            Icons.event_note,
                            size: 48,
                            color: Colors.grey.shade400,
                          ),
                          const SizedBox(height: 12),
                          Text(
                            '暂无日程',
                            style: TextStyle(
                              fontSize: 16,
                              color: Colors.grey.shade600,
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                );
              },
            ),
          )
        : SmartRefresher(
            controller: _refreshController,
            enablePullDown: true,
            enablePullUp: true,
            header: buildSwitchRefreshHeader(isTop: true),
            footer: buildCustomPullFooter(),
            onRefresh: _onRefresh,
            onLoading: _onLoading,
            child: ListView.builder(
              controller: _scheduleScrollController,
              itemCount: _getScheduleItemCount(),
              itemBuilder: (context, index) => _buildScheduleItemAtIndex(index),
            ),
          );
  }

  /// 构建不带下拉刷新的日程列表（宽屏模式）
  Widget _buildScheduleListForWideLayout() {
    return _schedules.isEmpty
        ? LayoutBuilder(
            builder: (context, constraints) {
              return SingleChildScrollView(
                physics: const AlwaysScrollableScrollPhysics(),
                child: ConstrainedBox(
                  constraints: BoxConstraints(minHeight: constraints.maxHeight),
                  child: Center(
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Icon(
                          Icons.event_note,
                          size: 48,
                          color: Colors.grey.shade400,
                        ),
                        const SizedBox(height: 12),
                        Text(
                          '暂无日程',
                          style: TextStyle(
                            fontSize: 16,
                            color: Colors.grey.shade600,
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              );
            },
          )
        : ListView.builder(
            controller: _scheduleScrollController,
            itemCount: _getScheduleItemCount(),
            itemBuilder: (context, index) => _buildScheduleItemAtIndex(index),
          );
  }

  /// 获取日程列表项数量
  int _getScheduleItemCount() {
    final (currentInfoIndex, isPrevCurrent) = _getCurrentScheduleInfo();
    final showPrevLast = isPrevCurrent && _prevSchedules.isNotEmpty;
    final hasPrev = showPrevLast;
    final hasNext = _nextSchedules.isNotEmpty;

    return (hasPrev ? 2 : 0) + _schedules.length + (hasNext ? 2 : 0);
  }

  /// 构建指定索引的日程列表项
  Widget _buildScheduleItemAtIndex(int index) {
    int currentIndex = index;
    final (currentInfoIndex, isPrevCurrent) = _getCurrentScheduleInfo();
    final showPrevLast = isPrevCurrent && _prevSchedules.isNotEmpty;
    final hasPrev = showPrevLast;
    final hasNext = _nextSchedules.isNotEmpty;

    if (hasPrev) {
      if (currentIndex == 0) {
        return _buildScheduleItemPrevAsCurrent(_prevSchedules.last);
      }
      currentIndex -= 1;
      if (currentIndex == 0 && _schedules.isNotEmpty) {
        return _buildSectionDivider('—今天—');
      }
      if (_schedules.isNotEmpty) {
        currentIndex -= 1;
      }
    }

    if (currentIndex < _schedules.length) {
      return _buildScheduleItem(_schedules[currentIndex]);
    }
    currentIndex -= _schedules.length;

    if (hasNext) {
      if (currentIndex == 0) {
        return _buildSectionDivider('—后一天—');
      }
      if (currentIndex == 1) {
        return _buildScheduleItemGrey(_nextSchedules.first);
      }
    }

    return const SizedBox.shrink();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('AI 日程'),
        actions: [
          if (!_isToday())
            IconButton(
              icon: const Icon(Icons.today),
              tooltip: '返回今天',
              onPressed: _backToToday,
            ),
          IconButton(
            icon: const Icon(Icons.settings),
            tooltip: '设置',
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (context) => const SettingsScreen()),
              );
            },
          ),
        ],
      ),
      body: LayoutBuilder(
        builder: (context, constraints) {
          final screenWidth = constraints.maxWidth;
          final screenHeight = constraints.maxHeight;
          final isWideLayout = screenWidth >= screenHeight;

          // 宽屏布局：日程表左侧，聊天框右侧
          if (isWideLayout) {
            return Row(
              key: const ValueKey('wide_layout'),
              children: [
                // 左侧：日程列表区域（固定宽度 380）
                SizedBox(
                  width: 380,
                  child: _buildScheduleSection(forWideLayout: true),
                ),
                // 右侧：聊天区域（占据剩余空间）
                Expanded(
                  child: Column(
                    children: [
                      Expanded(
                        child: ChatPanel(
                          messages: _messages,
                          controller: _messageScrollController,
                          isLoading: _isLoading,
                          onCheckApiConfig: () =>
                              _openApiConfigDialog(highlight: true),
                          onClearHistory: _clearChatHistory,
                          dismissibleKey: ValueKey(
                            'dismissible_$_dismissibleKeyCounter',
                          ),
                          // 宽屏模式不需要拉杆功能
                          onDragStart: null,
                          onDragUpdate: null,
                          onDragEnd: null,
                          onTap: null,
                        ),
                      ),
                      ChatInputBar(
                        controller: _textController,
                        isLoading: _isLoading,
                        onSubmit: _handleSubmit,
                        onTap: null, // 宽屏模式不需要点击展开功能
                      ),
                    ],
                  ),
                ),
              ],
            );
          }

          // 窄屏布局：保持原有的上下排列布局
          return Column(
            key: const ValueKey('narrow_layout'),
            children: [
              ScheduleHeader(
                selectedDate: _selectedDate,
                dayType: _dayType,
                holiday: _holiday,
                isToday: _isToday(),
                onLongPressDayType: _showDayTypeDialog,
                onAddSchedule: _showAddScheduleDialog,
              ),
              if (_aiService.pendingActions.isNotEmpty)
                ApprovalCardList(
                  actions: _aiService.pendingActions,
                  onApprove: _approveAction,
                  onReject: _rejectAction,
                ),
              Expanded(
                child: LayoutBuilder(
                  builder: (context, constraints) {
                    const double expandedFraction = 0.75;
                    const double normalFraction = 0.40;
                    const double minimizedFraction = 0.0;

                    double chatFraction;
                    if (_panelState == PanelSizeState.expanded) {
                      chatFraction = expandedFraction;
                    } else if (_panelState == PanelSizeState.minimized) {
                      chatFraction = minimizedFraction;
                    } else {
                      chatFraction = normalFraction;
                    }

                    if (_isDragging) chatFraction = _chatFraction;

                    final double totalH = constraints.maxHeight;
                    const double handleH = 18.0;
                    final double maxChatH = (totalH - 80.0) <= 0.0
                        ? 0.0
                        : (totalH - 80.0);
                    final double chatH = (totalH * chatFraction).clamp(
                      0.0,
                      maxChatH,
                    );
                    final double maxScheduleH = (totalH - handleH) <= 0.0
                        ? 0.0
                        : (totalH - handleH);
                    final double scheduleH = (totalH - chatH - handleH).clamp(
                      0.0,
                      maxScheduleH,
                    );

                    // 仅在审批窗首次弹出时自动调整到第二档
                    WidgetsBinding.instance.addPostFrameCallback((_) {
                      final currentCount = _aiService.pendingActions.length;
                      if (mounted &&
                          _lastPendingActionsCount == 0 &&
                          currentCount > 0 &&
                          _panelState != PanelSizeState.normal) {
                        _setPanelState(PanelSizeState.normal);
                      }
                      _lastPendingActionsCount = currentCount;
                    });

                    return Column(
                      children: [
                        SizedBox(
                          height: scheduleH,
                          child: _schedules.isEmpty
                              ? SmartRefresher(
                                  controller: _refreshController,
                                  enablePullDown: true,
                                  enablePullUp: true,
                                  header: buildSwitchRefreshHeader(isTop: true),
                                  footer: buildCustomPullFooter(),
                                  onRefresh: _onRefresh,
                                  onLoading: _onLoading,
                                  child: LayoutBuilder(
                                    builder: (context, constraints) {
                                      return SingleChildScrollView(
                                        physics:
                                            const NeverScrollableScrollPhysics(),
                                        child: ConstrainedBox(
                                          constraints: BoxConstraints(
                                            minHeight: constraints.maxHeight,
                                          ),
                                          child: Center(
                                            child: Column(
                                              mainAxisAlignment:
                                                  MainAxisAlignment.center,
                                              mainAxisSize: MainAxisSize.min,
                                              children: [
                                                Icon(
                                                  Icons.event_note,
                                                  size: 48,
                                                  color: Colors.grey.shade400,
                                                ),
                                                const SizedBox(height: 12),
                                                Text(
                                                  '暂无日程',
                                                  style: TextStyle(
                                                    fontSize: 16,
                                                    color: Colors.grey.shade600,
                                                  ),
                                                ),
                                              ],
                                            ),
                                          ),
                                        ),
                                      );
                                    },
                                  ),
                                )
                              : SmartRefresher(
                                  controller: _refreshController,
                                  enablePullDown: true,
                                  enablePullUp: true,
                                  header: buildSwitchRefreshHeader(isTop: true),
                                  footer: buildCustomPullFooter(),
                                  onRefresh: _onRefresh,
                                  onLoading: _onLoading,
                                  child: ListView.builder(
                                    controller: _scheduleScrollController,
                                    itemCount: () {
                                      // 检查昨天最后一个是否是当前项
                                      final (currentInfoIndex, isPrevCurrent) =
                                          _getCurrentScheduleInfo();
                                      final showPrevLast =
                                          isPrevCurrent &&
                                          _prevSchedules.isNotEmpty;
                                      final hasPrev = showPrevLast;
                                      final hasNext = _nextSchedules.isNotEmpty;

                                      return (hasPrev ? 2 : 0) +
                                          _schedules.length +
                                          (hasNext ? 2 : 0);
                                    }(),
                                    itemBuilder: (context, index) {
                                      int currentIndex = index;
                                      final (currentInfoIndex, isPrevCurrent) =
                                          _getCurrentScheduleInfo();
                                      final showPrevLast =
                                          isPrevCurrent &&
                                          _prevSchedules.isNotEmpty;
                                      final hasPrev = showPrevLast;
                                      final hasNext = _nextSchedules.isNotEmpty;

                                      if (hasPrev) {
                                        // 前一天最后一个作为当前项时，显示在今天第一个之前
                                        if (currentIndex == 0) {
                                          return _buildScheduleItemPrevAsCurrent(
                                            _prevSchedules.last,
                                          );
                                        }
                                        currentIndex -= 1;
                                        // 在前一天最后一项和今天第一项之间添加分隔符
                                        if (currentIndex == 0 &&
                                            _schedules.isNotEmpty) {
                                          return _buildSectionDivider('—今天—');
                                        }
                                        if (_schedules.isNotEmpty) {
                                          currentIndex -= 1;
                                        }
                                      }

                                      // 今天的日程
                                      if (currentIndex < _schedules.length) {
                                        return _buildScheduleItem(
                                          _schedules[currentIndex],
                                        );
                                      }
                                      currentIndex -= _schedules.length;

                                      if (hasNext) {
                                        if (currentIndex == 0) {
                                          return _buildSectionDivider('—后一天—');
                                        }
                                        if (currentIndex == 1) {
                                          return _buildScheduleItemGrey(
                                            _nextSchedules.first,
                                          );
                                        }
                                      }

                                      return const SizedBox.shrink();
                                    },
                                  ),
                                ),
                        ),
                        _buildNarrowChatWidget(totalH),
                      ],
                    );
                  },
                ),
              ),

              // 输入框（固定底部）
              ChatInputBar(
                controller: _textController,
                isLoading: _isLoading,
                onSubmit: _handleSubmit,
                onTap: () =>
                    setState(() => _setPanelState(PanelSizeState.expanded)),
              ),
            ],
          );
        },
      ),
    );
  }

  // 切换日期函数
  void _changeDateByDays(int days) async {
    final oldYear = _selectedDate.year;
    setState(() {
      _selectedDate = _selectedDate.add(Duration(days: days));
    });

    // 如果切换到了新的年份，确保该年份的节假日已缓存
    if (_selectedDate.year != oldYear) {
      final holidayService = Provider.of<HolidayService>(
        context,
        listen: false,
      );
      await holidayService.ensureYearCached(_selectedDate.year);
    }

    _loadSchedules();
  }

  // _performFinalOverscrollCheck 已弃用：翻页决策统一由松手时的即时提示状态决定（_readyToSwitch / _hintOpacity）

  // Day type chip is handled by ScheduleHeader now.

  /// 判断选中的日期是否为今天
  bool _isToday() {
    final now = DateTime.now();
    return _selectedDate.year == now.year &&
        _selectedDate.month == now.month &&
        _selectedDate.day == now.day;
  }

  /// 导出JSON

  /// 获取下一项待办日程索引（如果是今天）
  int? _getNextScheduleIndex() {
    if (!_isToday()) return null;

    final now = DateTime.now();

    // 找第一个未开始的日程（不管是否完成）
    for (int i = 0; i < _schedules.length; i++) {
      final schedule = _schedules[i];

      // 如果没有开始时间，或者开始时间在未来
      if (schedule.startTime == null || now.isBefore(schedule.startTime!)) {
        return i;
      }
    }

    return null;
  }

  /// 计算日程的嵌套层级（被多少个任务包含）
  int _getNestedLevel(int index) {
    if (index <= 0) return 0;

    final current = _schedules[index];
    int level = 0;

    // 从当前任务往前查找，计算被包含的层级
    for (int i = index - 1; i >= 0; i--) {
      if (_isContainedBy(_schedules[i], current)) {
        // 当前任务被第i个任务包含
        // 递归计算第i个任务的层级，然后加1
        level = _getNestedLevel(i) + 1;
        break; // 找到最近的包含任务就停止
      }
    }

    return level;
  }

  /// 检查日程b是否被a包含
  bool _isContainedBy(Schedule a, Schedule b) {
    if (a.startTime == null || b.startTime == null) return false;

    // a必须有结束时间才能包含其他任务
    if (a.endTime == null) return false;

    // b在a的时间范围内开始
    final bStartsInside =
        (b.startTime!.isAfter(a.startTime!) ||
            b.startTime!.isAtSameMomentAs(a.startTime!)) &&
        b.startTime!.isBefore(a.endTime!);

    if (!bStartsInside) return false;

    // 如果b有结束时间，必须在a结束前结束
    if (b.endTime != null) {
      return b.endTime!.isBefore(a.endTime!) ||
          b.endTime!.isAtSameMomentAs(a.endTime!);
    }

    // b是瞬时任务且在a范围内开始
    return true;
  }

  /// 获取当前正在进行的日程索引和来源（如果是今天）
  /// 返回: (索引, 是否来自前一天) - 如果索引为null则没有当前日程
  (int?, bool) _getCurrentScheduleInfo() {
    if (!_isToday()) return (null, false);

    final now = DateTime.now();

    // 优先检查前一天是否有跨日日程（正在进行中）
    if (_prevSchedules.isNotEmpty) {
      final lastPrev = _prevSchedules.last;

      // 检查前一天最后一项是否有结束时间且还在进行中
      if (lastPrev.endTime != null && lastPrev.startTime != null) {
        // 如果当前时间在开始和结束之间，说明跨日日程还在进行中
        if (now.isAfter(lastPrev.startTime!) &&
            now.isBefore(lastPrev.endTime!)) {
          return (_prevSchedules.length - 1, true);
        }
      }
    }

    // 方法1：优先找时间匹配的当前项（正在进行中的）
    int? matchedIndex;
    for (int i = _schedules.length - 1; i >= 0; i--) {
      final schedule = _schedules[i];

      if (schedule.startTime != null) {
        // 检查是否已开始
        if (now.isAfter(schedule.startTime!) ||
            now.isAtSameMomentAs(schedule.startTime!)) {
          // 如果有结束时间，检查是否还未结束
          if (schedule.endTime != null) {
            if (now.isBefore(schedule.endTime!)) {
              matchedIndex = i; // 正在进行中，从后往前找第一个
              break;
            }
          } else {
            // 没有结束时间，检查下一项是否已开始
            bool nextStarted = false;
            if (i + 1 < _schedules.length) {
              final next = _schedules[i + 1];
              if (next.startTime != null &&
                  (now.isAfter(next.startTime!) ||
                      now.isAtSameMomentAs(next.startTime!))) {
                nextStarted = true;
              }
            }
            if (!nextStarted) {
              matchedIndex = i;
              break;
            }
          }
        }
      }
    }

    if (matchedIndex != null) {
      return (matchedIndex, false);
    }

    // 方法2：没有时间匹配的，用"下一项的前一个"作为当前项
    final nextIndex = _getNextScheduleIndex();
    if (nextIndex != null && nextIndex > 0) {
      return (nextIndex - 1, false);
    } else if (nextIndex == null && _schedules.isNotEmpty) {
      // 没有下一项，最后一项作为当前
      return (_schedules.length - 1, false);
    }

    // 当天没有正在进行的日程
    return (null, false);
  }

  /// 兼容性方法：获取当前正在进行的日程索引
  int? _getCurrentScheduleIndex() {
    final (index, isPrev) = _getCurrentScheduleInfo();
    return isPrev ? null : index; // 只返回当天的索引
  }

  Widget _buildSectionDivider(String text) {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 8, horizontal: 16),
      child: Text(
        text,
        style: TextStyle(
          fontSize: 12,
          color: Colors.grey.shade500,
          fontWeight: FontWeight.w500,
        ),
        textAlign: TextAlign.center,
      ),
    );
  }

  Widget _buildScheduleItem(Schedule schedule) {
    final index = _schedules.indexOf(schedule);
    final currentIndex = _getCurrentScheduleIndex();
    final nextIndex = _getNextScheduleIndex();

    final isCurrent = index == currentIndex;
    final isNext = index == nextIndex;

    // 计算嵌套层级
    int nestedLevel = 0;

    return FutureBuilder<bool>(
      future: SharedPreferences.getInstance().then(
        (prefs) => prefs.getBool('show_nested_schedules') ?? false,
      ),
      builder: (context, snapshot) {
        if (snapshot.hasData && snapshot.data == true) {
          nestedLevel = _getNestedLevel(index);
        }

        return ScheduleItem(
          key: index >= 0 && index < _scheduleItemKeys.length
              ? _scheduleItemKeys[index]
              : null,
          schedule: schedule,
          isCurrent: isCurrent,
          isNext: isNext,
          readOnly: false,
          prevAsCurrent: false,
          nestedLevel: nestedLevel,
          priorityLabel: _getPriorityLabel(schedule),
          priorityColor: _getPriorityColor(schedule),
          hasOverride: _hasOverride(schedule),
          onEdit: () async {
            // 当点击编辑按钮时，最小化聊天窗口
            if (_panelState != PanelSizeState.minimized) {
              setState(() {
                _setPanelState(PanelSizeState.minimized);
              });
            }
            // 显示动作菜单
            await _showScheduleActionMenu(schedule);
          },
          onToggleComplete: (value) async {
            final dbService = Provider.of<DatabaseService>(
              context,
              listen: false,
            );

            // 如果是规则生成的日程,使用 override 记录完成状态
            if (schedule.sourceTemplateId != null) {
              await dbService.toggleScheduleComplete(
                schedule.date,
                schedule.sourceTemplateId!,
                value ?? false,
              );
            } else {
              // 独立日程(非规则生成) — 创建 complete override
              final ruleId = schedule.sourceTemplateId ?? (schedule.id.split('_').first);
              final rule = await dbService.getRuleById(ruleId);
              if (rule != null) {
                final override = ScheduleOverride(
                  startDate: schedule.date,
                  endDate: schedule.date,
                  ruleId: rule.id,
                  type: OverrideType.complete,
                );
                await dbService.insertOverride(override);
              }
            }

            await _loadSchedules();
          },
        );
      },
    );
  }

  /// 渲染灰色（仅查看）风格的日程项，点击不生效
  Widget _buildScheduleItemGrey(Schedule schedule) {
    return ScheduleItem(
      schedule: schedule,
      readOnly: true,
      prevAsCurrent: false,
      priorityLabel: _getPriorityLabel(schedule),
      priorityColor: _getPriorityColor(schedule),
    );
  }

  /// 渲染前一天的日程作为"当前"（当今天所有日程都过期时）
  Widget _buildScheduleItemPrevAsCurrent(Schedule schedule) {
    return ScheduleItem(
      schedule: schedule,
      readOnly: true,
      prevAsCurrent: true,
      priorityLabel: _getPriorityLabel(schedule),
      priorityColor: _getPriorityColor(schedule),
    );
  }

  /// 获取日程类型颜色（基于规则条件类型）
  Color _getPriorityColor(Schedule schedule) {
    if (schedule.sourceTemplateId != null) {
      final rule = _rulesCache[schedule.sourceTemplateId];
      if (rule != null) {
        switch (rule.condition.type) {
          case ConditionType.daily:
            return Colors.grey.shade400; // 每天 - 灰色
          case ConditionType.restday:
          case ConditionType.workday:
            return Colors.green.shade400; // 工作日/休息日 - 绿色
          case ConditionType.weekend:
          case ConditionType.holiday:
            return Colors.pink.shade300; // 周末/节假日 - 粉色
          case ConditionType.weekday:
            return Colors.orange.shade400; // 周X - 橙色
          case ConditionType.interval:
          case ConditionType.specificDate:
            return Colors.purple.shade400; // 间隔/特定日期 - 紫色
        }
      }
    }
    // 默认颜色
    return Colors.grey.shade400;
  }

  /// 检查日程是否有覆盖（非完成状态覆盖）
  bool _hasOverride(Schedule schedule) {
    if (schedule.sourceTemplateId == null) return false;
    return _overridesCache.any(
      (o) =>
          o.ruleId == schedule.sourceTemplateId &&
          o.type != OverrideType.complete,
    );
  }

  /// 获取日程类型标签（基于规则条件类型）
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

    // 默认显示
    return '单次';
  }

  Future<void> _showScheduleActionMenu(Schedule schedule) async {
    if (schedule.sourceTemplateId == null) {
      // 独立日程，只能删除
      await _showDeleteDialog(schedule);
      return;
    }

    // 规则日程，显示编辑规则或管理覆盖的选项
    final action = await showDialog<String>(
      context: context,
      builder: (context) => AlertDialog(
        title: Text(schedule.title),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            ListTile(
              leading: Icon(Icons.edit),
              title: Text('编辑规则'),
              onTap: () => Navigator.pop(context, 'editRule'),
            ),
            ListTile(
              leading: Icon(Icons.event_note),
              title: Text('管理覆盖'),
              onTap: () => Navigator.pop(context, 'manageOverride'),
            ),
            Divider(),
            ListTile(
              leading: Icon(Icons.delete, color: Colors.red),
              title: Text('删除', style: TextStyle(color: Colors.red)),
              onTap: () => Navigator.pop(context, 'delete'),
            ),
          ],
        ),
      ),
    );

    if (!mounted || action == null) return;

    if (action == 'editRule') {
      // 直接打开规则编辑对话框
      final dbService = Provider.of<DatabaseService>(context, listen: false);
      final rule = await dbService.getRuleById(schedule.sourceTemplateId!);
      if (rule != null && mounted) {
        final result = await showDialog<bool>(
          context: context,
          builder: (context) => RuleEditDialog(rule: rule),
        );
        if (result == true) {
          _shouldScrollToCurrent = false; // 编辑规则刷新不触发滚动
          await _loadSchedules();
        }
      }
    } else if (action == 'manageOverride') {
      // 打开覆盖管理对话框
      final dbService = Provider.of<DatabaseService>(context, listen: false);
      final rule = await dbService.getRuleById(schedule.sourceTemplateId!);
      if (rule != null && mounted) {
        await showDialog(
          context: context,
          builder: (context) => OverrideListDialog(rule: rule),
        );
        _shouldScrollToCurrent = false; // 管理覆盖刷新不触发滚动
        await _loadSchedules();
      }
    } else if (action == 'delete') {
      await _showDeleteDialog(schedule);
    }
  }

  /// 显示删除确认对话框
  Future<void> _showDeleteDialog(Schedule schedule) async {
    final deleted = await showScheduleDeleteDialog(context, schedule);
    if (deleted == true) {
      _shouldScrollToCurrent = false; // 删除后刷新不触发滚动
      await _loadSchedules();
      if (!mounted) return;
      ScaffoldMessenger.of(context);
      SnackBarHelper.showMessage(context, '已删除「${schedule.title}」');
    }
  }

  /// 显示添加日程对话框
  Future<void> _showAddScheduleDialog() async {
    final result = await showDialog<bool>(
      context: context,
      builder: (context) => const RuleEditDialog(),
    );
    if (result == true) {
      _shouldScrollToCurrent = false;
      await _loadSchedules();
    }
  }

  /// 下拉刷新 - 切换到前一天
  void _onRefresh() async {
    HapticFeedback.mediumImpact();
    _dateChangeDirection = -1; // 标记从前一天切换
    _shouldScrollToCurrent = true; // 滑动切换日期需要滚动到当前
    _changeDateByDays(-1);
    _refreshController.refreshCompleted();
  }

  /// 上拉加载 - 切换到后一天
  void _onLoading() async {
    HapticFeedback.mediumImpact();
    _dateChangeDirection = 1; // 标记从后一天切换
    _shouldScrollToCurrent = true; // 滑动切换日期需要滚动到当前
    _changeDateByDays(1);
    _refreshController.loadComplete();
  }

  // Message bubble rendering moved into ChatList widget
}

// ChatMessage model at lib/models/chat_message.dart
