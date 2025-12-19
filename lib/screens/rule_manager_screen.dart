import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../models/schedule_rule.dart';
import '../services/database_service.dart';
import '../utils/snackbar_helper.dart';
import '../widgets/rule_edit_dialog.dart';
import '../widgets/override_list_dialog.dart';

/// 规则管理器屏幕
/// 用于查看、编辑、删除所有日程规则和覆盖
class RuleManagerScreen extends StatefulWidget {
  const RuleManagerScreen({super.key});

  @override
  State<RuleManagerScreen> createState() => _RuleManagerScreenState();
}

class _RuleManagerScreenState extends State<RuleManagerScreen> {
  List<ScheduleRule> _rules = [];
  bool _isLoading = true;
  bool _isSelectionMode = false; // 是否处于选择模式
  final Set<String> _selectedRules = {}; // 选中的规则ID集合

  @override
  void initState() {
    super.initState();
    _loadData();
  }

  void _enterSelectionMode(String ruleId) {
    setState(() {
      _isSelectionMode = true;
      _selectedRules.add(ruleId);
    });
  }

  void _exitSelectionMode() {
    setState(() {
      _isSelectionMode = false;
      _selectedRules.clear();
    });
  }

  void _toggleRuleSelection(String ruleId) {
    setState(() {
      if (_selectedRules.contains(ruleId)) {
        _selectedRules.remove(ruleId);
        // 如果没有选中任何项，退出选择模式
        if (_selectedRules.isEmpty) {
          _isSelectionMode = false;
        }
      } else {
        _selectedRules.add(ruleId);
      }
    });
  }

  Future<void> _deleteSelectedRules() async {
    final confirmed = await showDialog<bool>(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('确认删除'),
        content: Text('确定要删除选中的 ${_selectedRules.length} 条规则吗？此操作不可撤销。'),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context, false),
            child: const Text('取消'),
          ),
          ElevatedButton(
            onPressed: () => Navigator.pop(context, true),
            style: ElevatedButton.styleFrom(backgroundColor: Colors.red),
            child: const Text('删除'),
          ),
        ],
      ),
    );

    if (confirmed == true && mounted) {
      final db = Provider.of<DatabaseService>(context, listen: false);
      for (var ruleId in _selectedRules) {
        await db.deleteRule(ruleId);
      }
      _exitSelectionMode();
      _loadData();
      if (mounted) {
        SnackBarHelper.showMessage(
          context,
          '已删除 ${_selectedRules.length} 条规则',
        );
      }
    }
  }

  Future<void> _loadData() async {
    setState(() => _isLoading = true);
    final db = Provider.of<DatabaseService>(context, listen: false);

    final rules = await db.getAllRules();

    setState(() {
      _rules = rules;
      _isLoading = false;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          _isSelectionMode ? '已选择 ${_selectedRules.length} 项' : '规则管理',
        ),
        leading: _isSelectionMode
            ? IconButton(
                icon: const Icon(Icons.close),
                onPressed: _exitSelectionMode,
              )
            : null,
        actions: _isSelectionMode
            ? [
                IconButton(
                  icon: const Icon(Icons.delete),
                  onPressed: _selectedRules.isEmpty
                      ? null
                      : _deleteSelectedRules,
                  tooltip: '删除选中',
                ),
              ]
            : null,
      ),
      body: _isLoading
          ? const Center(child: CircularProgressIndicator())
          : _buildRulesTab(),
      floatingActionButton: _isSelectionMode
          ? null
          : FloatingActionButton(
              onPressed: () => _createNewRule(),
              child: const Icon(Icons.add),
            ),
    );
  }

  // ==================== 规则Tab ====================

  Widget _buildRulesTab() {
    if (_rules.isEmpty) {
      return Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(
              Icons.rule_outlined,
              size: 64,
              color: Theme.of(context).colorScheme.onSurfaceVariant,
            ),
            const SizedBox(height: 16),
            Text(
              '还没有任何规则',
              style: TextStyle(
                color: Theme.of(context).colorScheme.onSurfaceVariant,
              ),
            ),
            const SizedBox(height: 8),
            ElevatedButton.icon(
              onPressed: _createNewRule,
              icon: const Icon(Icons.add),
              label: const Text('创建规则'),
            ),
          ],
        ),
      );
    }

    // 按条件类型分组
    final grouped = <ConditionType, List<ScheduleRule>>{};
    for (var rule in _rules) {
      grouped.putIfAbsent(rule.condition.type, () => []).add(rule);
    }

    return RefreshIndicator(
      onRefresh: _loadData,
      child: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          // 统计信息
          _buildStatisticsCard(),
          const SizedBox(height: 16),

          // 按类型分组显示
          ...grouped.entries.map(
            (entry) => _buildRuleGroup(entry.key, entry.value),
          ),
        ],
      ),
    );
  }

  Widget _buildStatisticsCard() {
    final enabledCount = _rules.where((r) => r.isEnabled).length;
    final disabledCount = _rules.length - enabledCount;

    return Card(
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            _buildStatItem('总计', _rules.length.toString(), Colors.blue),
            _buildStatItem('启用', enabledCount.toString(), Colors.green),
            _buildStatItem('禁用', disabledCount.toString(), Colors.grey),
          ],
        ),
      ),
    );
  }

  Widget _buildStatItem(String label, String value, Color color) {
    return Builder(
      builder: (context) {
        return Column(
          children: [
            Text(
              value,
              style: TextStyle(
                fontSize: 24,
                fontWeight: FontWeight.bold,
                color: color,
              ),
            ),
            const SizedBox(height: 4),
            Text(
              label,
              style: TextStyle(
                color: Theme.of(context).colorScheme.onSurfaceVariant,
                fontSize: 12,
              ),
            ),
          ],
        );
      },
    );
  }

  Widget _buildRuleGroup(ConditionType type, List<ScheduleRule> rules) {
    return Builder(
      builder: (context) {
        return Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 8),
              child: Row(
                children: [
                  Icon(
                    _getConditionIcon(type),
                    size: 20,
                    color: Colors.orange.shade700,
                  ),
                  const SizedBox(width: 8),
                  Text(
                    _getConditionName(type),
                    style: TextStyle(
                      fontSize: 16,
                      fontWeight: FontWeight.bold,
                      color: Theme.of(context).colorScheme.onSurface,
                    ),
                  ),
                  const SizedBox(width: 8),
                  Text(
                    '(${rules.length})',
                    style: TextStyle(
                      color: Theme.of(context).colorScheme.onSurfaceVariant,
                    ),
                  ),
                ],
              ),
            ),
            ...rules.map((rule) => _buildRuleCard(rule)),
            const SizedBox(height: 16),
          ],
        );
      },
    );
  }

  Widget _buildRuleCard(ScheduleRule rule) {
    final isSelected = _selectedRules.contains(rule.id);

    return Builder(
      builder: (context) {
        return Card(
          margin: const EdgeInsets.only(bottom: 8),
          color: isSelected
              ? Theme.of(context).colorScheme.primaryContainer
              : null,
          child: ListTile(
            leading: _isSelectionMode
                ? Checkbox(
                    value: isSelected,
                    onChanged: (checked) => _toggleRuleSelection(rule.id),
                  )
                : CircleAvatar(
                    backgroundColor: rule.isEnabled
                        ? Colors.green.shade100
                        : Theme.of(context).colorScheme.surfaceContainerHighest,
                    child: Icon(
                      rule.isEnabled ? Icons.check_circle : Icons.cancel,
                      color: rule.isEnabled
                          ? Colors.green
                          : Theme.of(context).colorScheme.onSurfaceVariant,
                    ),
                  ),
            title: Row(children: [Expanded(child: Text(rule.title))]),
            subtitle: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const SizedBox(height: 4),
                Text(_formatRuleTime(rule)),
                if (rule.description != null) ...[
                  const SizedBox(height: 2),
                  Text(
                    rule.description!,
                    style: TextStyle(
                      fontSize: 12,
                      color: Theme.of(context).colorScheme.onSurfaceVariant,
                    ),
                  ),
                ],
                if (rule.condition.endDate != null ||
                    rule.condition.maxCount != null) ...[
                  const SizedBox(height: 4),
                  Text(
                    _formatRuleLimits(rule),
                    style: TextStyle(fontSize: 11, color: Colors.blue.shade700),
                  ),
                ],
              ],
            ),
            trailing: _isSelectionMode
                ? null
                : PopupMenuButton<String>(
                    onSelected: (value) => _handleRuleAction(value, rule),
                    itemBuilder: (context) => [
                      const PopupMenuItem(
                        value: 'edit',
                        child: Row(
                          children: [
                            Icon(Icons.edit),
                            SizedBox(width: 8),
                            Text('编辑'),
                          ],
                        ),
                      ),
                      PopupMenuItem(
                        value: 'toggle',
                        child: Row(
                          children: [
                            Icon(
                              rule.isEnabled
                                  ? Icons.visibility_off
                                  : Icons.visibility,
                            ),
                            const SizedBox(width: 8),
                            Text(rule.isEnabled ? '禁用' : '启用'),
                          ],
                        ),
                      ),
                      const PopupMenuItem(
                        value: 'overrides',
                        child: Row(
                          children: [
                            Icon(Icons.edit_calendar),
                            SizedBox(width: 8),
                            Text('查看覆盖'),
                          ],
                        ),
                      ),
                      const PopupMenuItem(
                        value: 'delete',
                        child: Row(
                          children: [
                            Icon(Icons.delete, color: Colors.red),
                            SizedBox(width: 8),
                            Text('删除', style: TextStyle(color: Colors.red)),
                          ],
                        ),
                      ),
                    ],
                  ),
            onTap: _isSelectionMode
                ? () => _toggleRuleSelection(rule.id)
                : () => _editRule(rule),
            onLongPress: _isSelectionMode
                ? null
                : () => _enterSelectionMode(rule.id),
          ),
        );
      },
    );
  }

  // ==================== 辅助方法 ====================

  String _getConditionName(ConditionType type) {
    switch (type) {
      case ConditionType.daily:
        return '每日';
      case ConditionType.workday:
        return '工作日';
      case ConditionType.restday:
        return '休息日';
      case ConditionType.weekend:
        return '周末';
      case ConditionType.holiday:
        return '节假日';
      case ConditionType.weekday:
        return '每周';
      case ConditionType.interval:
        return '间隔';
      case ConditionType.specificDate:
        return '特定日期';
    }
  }

  IconData _getConditionIcon(ConditionType type) {
    switch (type) {
      case ConditionType.daily:
        return Icons.today;
      case ConditionType.workday:
        return Icons.work;
      case ConditionType.restday:
        return Icons.weekend;
      case ConditionType.weekend:
        return Icons.weekend;
      case ConditionType.holiday:
        return Icons.celebration;
      case ConditionType.weekday:
        return Icons.calendar_today;
      case ConditionType.interval:
        return Icons.repeat;
      case ConditionType.specificDate:
        return Icons.event;
    }
  }

  String _formatRuleTime(ScheduleRule rule) {
    if (rule.time == null) return '无时间';
    if (rule.endTime == null) return rule.time!;
    return '${rule.time} - ${rule.endTime}';
  }

  String _formatRuleLimits(ScheduleRule rule) {
    final parts = <String>[];
    if (rule.condition.endDate != null) {
      parts.add('至 ${rule.condition.endDate!.toString().split(' ')[0]}');
    }
    if (rule.condition.maxCount != null) {
      parts.add('最多 ${rule.condition.maxCount} 次');
    }
    return parts.join(' · ');
  }

  // ==================== 操作方法 ====================

  Future<void> _createNewRule() async {
    final result = await showDialog<bool>(
      context: context,
      builder: (context) => const RuleEditDialog(),
    );

    if (result == true) {
      _loadData();
    }
  }

  Future<void> _editRule(ScheduleRule rule) async {
    final result = await showDialog<bool>(
      context: context,
      builder: (context) => RuleEditDialog(rule: rule),
    );

    if (result == true) {
      _loadData();
    }
  }

  Future<void> _handleRuleAction(String action, ScheduleRule rule) async {
    switch (action) {
      case 'edit':
        _editRule(rule);
        break;
      case 'toggle':
        await _toggleRule(rule);
        break;
      case 'overrides':
        await _showOverrides(rule);
        break;
      case 'delete':
        await _deleteRule(rule);
        break;
    }
  }

  Future<void> _toggleRule(ScheduleRule rule) async {
    final db = Provider.of<DatabaseService>(context, listen: false);
    final updated = ScheduleRule(
      id: rule.id,
      title: rule.title,
      description: rule.description,
      time: rule.time,
      endTime: rule.endTime,
      condition: rule.condition,
      createdAt: rule.createdAt,
      isEnabled: !rule.isEnabled,
    );
    await db.updateRule(updated);
    _loadData();
  }

  Future<void> _deleteRule(ScheduleRule rule) async {
    final confirmed = await showDialog<bool>(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('确认删除'),
        content: Text('确定要删除规则"${rule.title}"吗？此操作不可撤销。'),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context, false),
            child: const Text('取消'),
          ),
          ElevatedButton(
            onPressed: () => Navigator.pop(context, true),
            style: ElevatedButton.styleFrom(backgroundColor: Colors.red),
            child: const Text('删除'),
          ),
        ],
      ),
    );

    if (confirmed == true && mounted) {
      final db = Provider.of<DatabaseService>(context, listen: false);
      await db.deleteRule(rule.id);
      _loadData();
      if (mounted) {
        ScaffoldMessenger.of(
          context,
        ).showSnackBar(
          SnackBar(
            content: Text('已删除规则"${rule.title}"'),
            behavior: SnackBarBehavior.floating,
            margin: const EdgeInsets.only(bottom: 80, left: 16, right: 16),
          ),
        );
      }
    }
  }

  Future<void> _showOverrides(ScheduleRule rule) async {
    await showDialog(
      context: context,
      builder: (context) => OverrideListDialog(rule: rule),
    );
    _loadData();
  }
}
