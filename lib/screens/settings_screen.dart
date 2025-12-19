import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:intl/intl.dart';
import '../services/api_config_service.dart';
import '../services/work_schedule_service.dart';
import '../services/import_export_helper.dart';
import '../services/notification_service.dart';
import '../services/settings_service.dart' as settings;
import '../services/msn_service.dart';
import '../services/dashboard_widget_service.dart';
import '../models/work_schedule.dart';
import '../models/dashboard_widget.dart';
import '../utils/snackbar_helper.dart';
import 'memory_management_screen.dart';
import 'rule_manager_screen.dart';

/// 综合设置页面
class SettingsScreen extends StatefulWidget {
  const SettingsScreen({super.key});

  @override
  State<SettingsScreen> createState() => _SettingsScreenState();
}

class _SettingsScreenState extends State<SettingsScreen> {
  final _apiKeyController = TextEditingController();
  final _baseUrlController = TextEditingController();
  String _selectedModel = ApiConfigService.supportedModels.first;
  bool _useBearerAuth = true;
  bool _obscureApiKey = true;

  @override
  void initState() {
    super.initState();
    _loadConfig();

    // 添加自动保存监听器
    _apiKeyController.addListener(_autoSaveConfig);
    _baseUrlController.addListener(_autoSaveConfig);
  }

  void _loadConfig() async {
    final config = context.read<ApiConfigService>();
    _apiKeyController.text = config.apiKey;
    _baseUrlController.text = config.baseUrl;
    if (ApiConfigService.supportedModels.contains(config.model)) {
      _selectedModel = config.model;
    } else {
      _selectedModel = ApiConfigService.supportedModels.first;
    }
    _useBearerAuth = config.useBearerAuth;
  }

  void _autoSaveConfig() async {
    final config = context.read<ApiConfigService>();
    await config.saveConfig(
      apiKey: _apiKeyController.text.trim(),
      baseUrl: _baseUrlController.text.trim(),
      model: _selectedModel,
      useBearerAuth: _useBearerAuth,
    );
  }

  @override
  void dispose() {
    _apiKeyController.dispose();
    _baseUrlController.dispose();
    super.dispose();
  }

  Future<void> _testConnection() async {
    if (!mounted) return;

    final config = context.read<ApiConfigService>();
    // 显示加载提示
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(
        content: Text('正在测试连接...'),
        duration: Duration(seconds: 1),
      ),
    );

    try {
      final result = await config.testConnection();
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text('测试响应: $result'),
            backgroundColor:
                result.toLowerCase().contains('错误') || result.contains('失败')
                ? Colors.red
                : Colors.green,
            duration: const Duration(seconds: 3),
          ),
        );
      }
    } catch (e) {
      if (mounted) {
        SnackBarHelper.showError(context, '测试失败: $e');
      }
    }
  }

  Future<void> _exportJson() async {
    await exportToJsonHelper(context);
  }

  Future<void> _importRules() async {
    await importFromJsonHelper(context);
  }

  Future<void> _showWorkScheduleDialog(WorkScheduleType type) async {
    final workScheduleService = context.read<WorkScheduleService>();
    final now = DateTime.now();

    List<int> selectedDays = workScheduleService.getRestDays(type);
    if (type == WorkScheduleType.singleRest) {
      selectedDays = selectedDays.isNotEmpty ? [selectedDays.first] : [7];
    } else if (type == WorkScheduleType.doubleRest) {
      selectedDays = selectedDays.length >= 2
          ? selectedDays.sublist(0, 2)
          : selectedDays;
    }

    final weekStart = workScheduleService.getWeekStart(now);
    final weekEnd = workScheduleService.getWeekEnd(now);
    BiweeklyType? biweeklyType = workScheduleService.getManualBiweeklyType(now);

    String? lawTip;
    if (type != WorkScheduleType.doubleRest) {
      lawTip =
          '休息是法律赋予劳动者的权利。根据《劳动法》第三十六条及国务院相关规定，劳动者的平均每周工作时间不超过44小时。请注意生活与工作的平衡。';
    }

    final result = await showDialog<bool>(
      context: context,
      builder: (context) => StatefulBuilder(
        builder: (context, setState) {
          final isBiweekly = type == WorkScheduleType.biweekly;
          return AlertDialog(
            content: SingleChildScrollView(
              child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    '${type.label}设置',
                    style: const TextStyle(
                      fontSize: 16,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  const SizedBox(height: 8),

                  if (isBiweekly) ...[
                    const Text('请选择大小周类型:', style: TextStyle(fontSize: 15)),
                    const SizedBox(height: 8),
                    Text(
                      '本周日期范围 ${weekStart.month}月${weekStart.day}日 - ${weekEnd.month}月${weekEnd.day}日',
                      style: TextStyle(
                        fontSize: 13,
                        color: Colors.grey.shade700,
                      ),
                    ),
                    const SizedBox(height: 8),
                    Wrap(
                      spacing: 8,
                      runSpacing: 8,
                      children: [
                        ChoiceChip(
                          label: const Text('本周大周(2休)'),
                          selected: biweeklyType == BiweeklyType.bigWeek,
                          onSelected: (_) => setState(
                            () => biweeklyType = BiweeklyType.bigWeek,
                          ),
                        ),
                        ChoiceChip(
                          label: const Text('本周小周(1休)'),
                          selected: biweeklyType == BiweeklyType.smallWeek,
                          onSelected: (_) => setState(
                            () => biweeklyType = BiweeklyType.smallWeek,
                          ),
                        ),
                        ChoiceChip(
                          label: const Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text('自动（根据周六）'),
                              Text(
                                '奇数小周，偶数大周',
                                style: TextStyle(
                                  fontSize: 12,
                                  color: Colors.grey,
                                ),
                              ),
                            ],
                          ),
                          selected: biweeklyType == null,
                          onSelected: (_) =>
                              setState(() => biweeklyType = null),
                        ),
                      ],
                    ),
                  ],

                  if (!isBiweekly) ...[
                    const Text('请选择休息日:', style: TextStyle(fontSize: 15)),
                    const SizedBox(height: 8),
                    Wrap(
                      spacing: 8,
                      runSpacing: 8,
                      children: List.generate(7, (i) {
                        final weekday = i + 1;
                        final label = ['一', '二', '三', '四', '五', '六', '日'][i];
                        return FilterChip(
                          label: Text('周$label'),
                          selected: selectedDays.contains(weekday),
                          onSelected: (selected) {
                            setState(() {
                              if (type == WorkScheduleType.singleRest) {
                                selectedDays = [weekday];
                              } else {
                                if (selected) {
                                  if (selectedDays.length < 2) {
                                    selectedDays.add(weekday);
                                  }
                                } else {
                                  selectedDays.remove(weekday);
                                }
                              }
                            });
                          },
                        );
                      }),
                    ),
                  ],

                  if (lawTip != null) ...[
                    const SizedBox(height: 12),
                    Container(
                      padding: const EdgeInsets.all(8),
                      decoration: BoxDecoration(
                        color: Colors.orange.shade50,
                        borderRadius: BorderRadius.circular(6),
                        border: Border.all(color: Colors.orange.shade200),
                      ),
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Icon(
                            Icons.warning_amber_rounded,
                            color: Colors.orange.shade700,
                            size: 18,
                          ),
                          const SizedBox(width: 8),
                          Expanded(
                            child: Text(
                              lawTip,
                              style: TextStyle(
                                fontSize: 11,
                                color: Colors.orange.shade900,
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],

                  const SizedBox(height: 16),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.end,
                    children: [
                      TextButton(
                        onPressed: () => Navigator.pop(context, false),
                        child: const Text('取消'),
                      ),
                      const SizedBox(width: 8),
                      FilledButton(
                        onPressed: () => Navigator.pop(context, true),
                        child: const Text('确定'),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          );
        },
      ),
    );

    if (result == true) {
      await workScheduleService.setWorkScheduleType(type);
      if (type == WorkScheduleType.biweekly) {
        final finalType = biweeklyType;
        if (finalType != null) {
          await workScheduleService.setBiweeklyType(weekStart, finalType);
        } else {
          await workScheduleService.clearBiweeklySetting(weekStart);
        }
      } else {
        final normalized = type == WorkScheduleType.singleRest
            ? (selectedDays.isNotEmpty ? [selectedDays.first] : [7])
            : (selectedDays.length >= 2
                  ? selectedDays.sublist(0, 2)
                  : selectedDays);
        await workScheduleService.setRestDaysForType(type, normalized);
      }

      if (mounted) {
        SnackBarHelper.showMessage(context, '已切换为${type.label}');
      }
    }
  }

  Future<void> _showWeekStartDialog() async {
    final workScheduleService = context.read<WorkScheduleService>();
    final current = workScheduleService.weekStart;

    final result = await showDialog<WeekStart>(
      context: context,
      builder: (context) {
        WeekStart selected = current;
        return StatefulBuilder(
          builder: (context, setState) {
            return AlertDialog(
              title: const Text('周起始设置'),
              content: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  ListTile(
                    title: const Text('周一开始（默认）'),
                    trailing: selected == WeekStart.monday
                        ? const Icon(Icons.check, color: Colors.blue)
                        : null,
                    onTap: () => setState(() => selected = WeekStart.monday),
                  ),
                  ListTile(
                    title: const Text('周日开始'),
                    trailing: selected == WeekStart.sunday
                        ? const Icon(Icons.check, color: Colors.blue)
                        : null,
                    onTap: () => setState(() => selected = WeekStart.sunday),
                  ),
                ],
              ),
              actions: [
                TextButton(
                  onPressed: () => Navigator.pop(context),
                  child: const Text('取消'),
                ),
                TextButton(
                  onPressed: () => Navigator.pop(context, selected),
                  child: const Text('确定'),
                ),
              ],
            );
          },
        );
      },
    );

    if (result != null) {
      await workScheduleService.setWeekStart(result);
      if (mounted) {
        SnackBarHelper.showMessage(context, '已设置周起始为：${result.label}');
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('设置')),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          // API 设置
          _buildSection('AI 接口设置', Icons.cloud, [
            Row(
              children: [
                const Text(
                  'AI 接口',
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
                ),
                const SizedBox(width: 8),
                IconButton(
                  icon: const Icon(Icons.help_outline, size: 20),
                  tooltip: '如何申请',
                  onPressed: () {
                    showDialog(
                      context: context,
                      builder: (context) => AlertDialog(
                        title: const Text('申请AI API密钥'),
                        content: const SelectableText(
                          '推荐以下服务商：\n\n1. OpenAI 官方\nhttps://platform.openai.com\n\n2. GPTSApi (国内访问友好)\nhttps://gptsapi.net\n\n3. OneChats\nhttps://onechats.top\n\n注册后在控制台创建 API Key，然后填入下方配置。',
                        ),
                        actions: [
                          TextButton(
                            onPressed: () => Navigator.pop(context),
                            child: const Text('知道了'),
                          ),
                        ],
                      ),
                    );
                  },
                ),
              ],
            ),
            const SizedBox(height: 12),
            TextField(
              controller: _apiKeyController,
              decoration: InputDecoration(
                labelText: 'API 密钥',
                hintText: 'sk-xxxxxxxxxxxxxxxx',
                border: const OutlineInputBorder(),
                suffixIcon: IconButton(
                  icon: Icon(
                    _obscureApiKey ? Icons.visibility : Icons.visibility_off,
                  ),
                  onPressed: () =>
                      setState(() => _obscureApiKey = !_obscureApiKey),
                ),
              ),
              obscureText: _obscureApiKey,
            ),
            const SizedBox(height: 12),
            TextField(
              controller: _baseUrlController,
              decoration: const InputDecoration(
                labelText: 'API 地址',
                hintText: 'https://api.openai.com/v1',
                border: OutlineInputBorder(),
              ),
            ),
            const SizedBox(height: 12),
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text(
                  '模型选择',
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.w500),
                ),
                const SizedBox(height: 8),
                ...ApiConfigService.supportedModels.map((model) {
                  final isSelected = _selectedModel == model;
                  final isGemini = model.toLowerCase().contains('gemini');
                  return Padding(
                    padding: const EdgeInsets.only(bottom: 8),
                    child: InkWell(
                      onTap: () {
                        setState(() => _selectedModel = model);
                        _autoSaveConfig();
                      },
                      borderRadius: BorderRadius.circular(12),
                      child: Container(
                        padding: const EdgeInsets.all(12),
                        decoration: BoxDecoration(
                          border: Border.all(
                            color: isSelected
                                ? Theme.of(context).colorScheme.primary
                                : Colors.grey.shade300,
                            width: isSelected ? 2 : 1,
                          ),
                          borderRadius: BorderRadius.circular(12),
                          color: isSelected
                              ? Theme.of(
                                  context,
                                ).colorScheme.primary.withOpacity(0.05)
                              : null,
                        ),
                        child: Row(
                          children: [
                            Icon(
                              isGemini ? Icons.auto_awesome : Icons.psychology,
                              color: isSelected
                                  ? Theme.of(context).colorScheme.primary
                                  : Colors.grey.shade600,
                              size: 20,
                            ),
                            const SizedBox(width: 12),
                            Expanded(
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text(
                                    model,
                                    style: TextStyle(
                                      fontWeight: isSelected
                                          ? FontWeight.w600
                                          : FontWeight.w500,
                                      color: isSelected
                                          ? Theme.of(
                                              context,
                                            ).colorScheme.primary
                                          : null,
                                    ),
                                  ),
                                  if (model.contains('nothinking'))
                                    Text(
                                      '无思维链版本',
                                      style: TextStyle(
                                        fontSize: 12,
                                        color: Colors.grey.shade600,
                                      ),
                                    ),
                                ],
                              ),
                            ),
                            if (isSelected)
                              Icon(
                                Icons.check_circle,
                                color: Theme.of(context).colorScheme.primary,
                                size: 20,
                              ),
                          ],
                        ),
                      ),
                    ),
                  );
                }).toList(),
              ],
            ),
            const SizedBox(height: 12),
            SwitchListTile(
              title: const Text('使用 Bearer 认证'),
              value: _useBearerAuth,
              onChanged: (value) {
                setState(() => _useBearerAuth = value);
                _autoSaveConfig();
              },
            ),
            const SizedBox(height: 8),
            Row(
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                OutlinedButton.icon(
                  onPressed: _testConnection,
                  icon: const Icon(Icons.wifi_find),
                  label: const Text('连通测试'),
                ),
              ],
            ),
          ]),

          const SizedBox(height: 24),

          // 导入导出
          _buildSection('数据管理', Icons.storage, [
            _buildActionButton('导出日程及设置', Icons.file_download, _exportJson),
            const SizedBox(height: 8),
            _buildActionButton('导入日程及设置', Icons.file_upload, _importRules),
          ]),

          const SizedBox(height: 24),

          // 工作制设置
          _buildSection('工作制设置', Icons.work, [
            _buildActionButton(
              '单休',
              Icons.event_busy,
              () => _showWorkScheduleDialog(WorkScheduleType.singleRest),
            ),
            const SizedBox(height: 8),
            _buildActionButton(
              '大小周',
              Icons.calendar_today,
              () => _showWorkScheduleDialog(WorkScheduleType.biweekly),
            ),
            const SizedBox(height: 8),
            _buildActionButton(
              '双休',
              Icons.event_available,
              () => _showWorkScheduleDialog(WorkScheduleType.doubleRest),
            ),
            const SizedBox(height: 8),
            _buildActionButton(
              '周起始设置',
              Icons.calendar_view_week,
              _showWeekStartDialog,
            ),
          ]),

          const SizedBox(height: 24),

          // 日程规则管理
          _buildSection('日程规则', Icons.rule, [
            ListTile(
              leading: const Icon(Icons.edit_calendar, color: Colors.orange),
              title: const Text('规则管理'),
              subtitle: const Text('查看和编辑所有日程规则及覆盖'),
              trailing: const Icon(Icons.arrow_forward_ios, size: 16),
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => const RuleManagerScreen(),
                  ),
                );
              },
            ),
          ]),

          const SizedBox(height: 24),

          // 小部件管理
          Consumer2<DashboardWidgetService, MsnService>(
            builder: (context, widgetService, msnService, _) {
              return _buildSection('卡片小部件', Icons.widgets, [
                ListTile(
                  leading: const Icon(Icons.info_outline, color: Colors.blue),
                  title: const Text('小部件说明'),
                  subtitle: const Text('长按卡片可拖动排序'),
                  dense: true,
                ),
                const Divider(),
                ...widgetService.widgets.map((widget) {
                  return SwitchListTile(
                    title: Text(_getWidgetTypeName(widget.type)),
                    subtitle: Text('显示顺序: ${widget.order + 1}'),
                    value: widget.isVisible,
                    onChanged: (value) {
                      widgetService.toggleVisibility(widget.id);
                    },
                    secondary: Icon(
                      _getWidgetTypeIcon(widget.type),
                      color: Colors.blue,
                    ),
                  );
                }).toList(),
                const Divider(),
                ListTile(
                  leading: msnService.isLoading
                      ? const SizedBox(
                          width: 24,
                          height: 24,
                          child: CircularProgressIndicator(strokeWidth: 2),
                        )
                      : const Icon(Icons.refresh, color: Colors.green),
                  title: const Text('刷新卡片小部件数据'),
                  subtitle: Text(
                    msnService.lastUpdateTime != null
                        ? '上次更新: ${_formatTime(msnService.lastUpdateTime!)}'
                        : '从未更新',
                  ),
                  enabled: !msnService.isLoading,
                  onTap: () async {
                    final messenger = ScaffoldMessenger.of(context);
                    final success = await msnService.fetchData(
                      forceRefresh: true,
                    );
                    if (!mounted) return;
                    messenger.showSnackBar(
                      SnackBar(
                        content: Text(success ? '数据刷新成功' : '数据刷新失败'),
                        duration: const Duration(seconds: 2),
                      ),
                    );
                  },
                ),
              ]);
            },
          ),

          const SizedBox(height: 24),

          // 通知设置
          FutureBuilder<bool>(
            future: NotificationService().isNotificationEnabled(),
            builder: (context, snapshot) {
              final enabled = snapshot.data ?? true;
              return _buildSection('通知设置', Icons.notifications, [
                SwitchListTile(
                  title: const Text('日程提醒'),
                  subtitle: const Text('当日程到期时发送通知提醒'),
                  value: enabled,
                  onChanged: (value) async {
                    // 在异步操作前保存 context 引用
                    final messenger = ScaffoldMessenger.of(context);

                    final notificationService = NotificationService();
                    await notificationService.setNotificationEnabled(value);
                    if (value) {
                      final granted = await notificationService
                          .requestPermission();
                      if (!granted && mounted) {
                        messenger.showSnackBar(
                          const SnackBar(
                            content: Text('通知权限未授予，请在系统设置中手动开启'),
                            backgroundColor: Colors.orange,
                          ),
                        );
                      }
                    }
                    if (mounted) setState(() {}); // 触发重建
                  },
                  secondary: const Icon(Icons.alarm, color: Colors.orange),
                ),
              ]);
            },
          ),

          const SizedBox(height: 24),

          // 显示设置
          Consumer<settings.SettingsService>(
            builder: (context, settingsService, _) {
              return _buildSection('显示设置', Icons.visibility, [
                // 主题模式选择
                ListTile(
                  leading: const Icon(Icons.palette, color: Colors.blue),
                  title: const Text('主题模式'),
                  subtitle: Text(_getThemeModeLabel(settingsService.themeMode)),
                  trailing: const Icon(Icons.arrow_forward_ios, size: 16),
                  onTap: () => _showThemeModeDialog(settingsService),
                ),
                const Divider(),
                SwitchListTile(
                  title: const Text('显示嵌套日程'),
                  subtitle: const Text('将包含在其他日程时间范围内的任务缩进显示'),
                  value: settingsService.showNestedSchedules,
                  onChanged: settingsService.setShowNestedSchedules,
                  secondary: const Icon(
                    Icons.subdirectory_arrow_right,
                    color: Colors.blue,
                  ),
                ),
              ]);
            },
          ),

          const SizedBox(height: 24),

          // AI 记忆管理
          _buildSection('AI 记忆', Icons.memory, [
            ListTile(
              leading: const Icon(Icons.psychology, color: Colors.purple),
              title: const Text('AI 记忆管理'),
              subtitle: const Text('查看和管理 AI 保存的偏好、习惯等记忆'),
              trailing: const Icon(Icons.arrow_forward_ios, size: 16),
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => const MemoryManagementScreen(),
                  ),
                );
              },
            ),
          ]),
        ],
      ),
    );
  }

  Widget _buildSection(String title, IconData icon, List<Widget> children) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Icon(icon, color: Colors.blue),
                const SizedBox(width: 8),
                Text(
                  title,
                  style: const TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ],
            ),
            const SizedBox(height: 16),
            ...children,
          ],
        ),
      ),
    );
  }

  Widget _buildActionButton(
    String label,
    IconData icon,
    VoidCallback onPressed,
  ) {
    return OutlinedButton.icon(
      onPressed: onPressed,
      icon: Icon(icon),
      label: Text(label),
      style: OutlinedButton.styleFrom(
        alignment: Alignment.centerLeft,
        padding: const EdgeInsets.all(16),
      ),
    );
  }

  String _getWidgetTypeName(WidgetType type) {
    switch (type) {
      case WidgetType.weather:
        return '天气卡片';
      case WidgetType.calendar:
        return '日历卡片';
    }
  }

  IconData _getWidgetTypeIcon(WidgetType type) {
    switch (type) {
      case WidgetType.weather:
        return Icons.wb_sunny;
      case WidgetType.calendar:
        return Icons.calendar_today;
    }
  }

  String _formatTime(DateTime time) {
    return DateFormat('HH:mm').format(time);
  }

  /// 获取主题模式标签
  String _getThemeModeLabel(settings.ThemeMode mode) {
    switch (mode) {
      case settings.ThemeMode.system:
        return '跟随系统';
      case settings.ThemeMode.light:
        return '浅色模式';
      case settings.ThemeMode.dark:
        return '深色模式';
    }
  }

  /// 显示主题模式选择对话框
  void _showThemeModeDialog(settings.SettingsService settingsService) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('选择主题模式'),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            RadioListTile<settings.ThemeMode>(
              title: const Text('跟随系统'),
              subtitle: const Text('根据系统设置自动切换'),
              value: settings.ThemeMode.system,
              groupValue: settingsService.themeMode,
              onChanged: (value) {
                if (value != null) {
                  settingsService.setThemeMode(value);
                  Navigator.pop(context);
                }
              },
            ),
            RadioListTile<settings.ThemeMode>(
              title: const Text('浅色模式'),
              subtitle: const Text('始终使用浅色主题'),
              value: settings.ThemeMode.light,
              groupValue: settingsService.themeMode,
              onChanged: (value) {
                if (value != null) {
                  settingsService.setThemeMode(value);
                  Navigator.pop(context);
                }
              },
            ),
            RadioListTile<settings.ThemeMode>(
              title: const Text('深色模式'),
              subtitle: const Text('始终使用深色主题'),
              value: settings.ThemeMode.dark,
              groupValue: settingsService.themeMode,
              onChanged: (value) {
                if (value != null) {
                  settingsService.setThemeMode(value);
                  Navigator.pop(context);
                }
              },
            ),
          ],
        ),
      ),
    );
  }
}
