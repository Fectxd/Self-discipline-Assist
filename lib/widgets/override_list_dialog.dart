import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../models/schedule_rule.dart';
import '../models/schedule_override.dart';
import '../services/database_service.dart';
import 'override_edit_dialog.dart';

/// 覆盖列表对话框
/// 显示特定规则的所有覆盖
class OverrideListDialog extends StatefulWidget {
  final ScheduleRule rule;

  const OverrideListDialog({super.key, required this.rule});

  @override
  State<OverrideListDialog> createState() => _OverrideListDialogState();
}

class _OverrideListDialogState extends State<OverrideListDialog> {
  List<ScheduleOverride> _overrides = [];
  bool _isLoading = true;

  @override
  void initState() {
    super.initState();
    _loadOverrides();
  }

  Future<void> _loadOverrides() async {
    setState(() => _isLoading = true);

    final db = Provider.of<DatabaseService>(context, listen: false);
    final allOverrides = await db.getAllOverrides();

    setState(() {
      _overrides = allOverrides
          .where((o) => o.ruleId == widget.rule.id)
          .toList();
      _overrides.sort((a, b) => a.startDate.compareTo(b.startDate));
      _isLoading = false;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Dialog(
      insetPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 24),
      child: Container(
        constraints: const BoxConstraints(maxWidth: 500, maxHeight: 600),
        child: Column(
          children: [
            _buildHeader(),
            Expanded(child: _buildBody()),
          ],
        ),
      ),
    );
  }

  Widget _buildHeader() {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: Colors.orange.shade700,
        borderRadius: const BorderRadius.only(
          topLeft: Radius.circular(4),
          topRight: Radius.circular(4),
        ),
      ),
      child: Row(
        children: [
          const Icon(Icons.edit_calendar, color: Colors.white),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text(
                  '覆盖管理',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 18,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                const SizedBox(height: 4),
                Text(
                  widget.rule.title,
                  style: const TextStyle(color: Colors.white70, fontSize: 14),
                ),
              ],
            ),
          ),
          IconButton(
            icon: const Icon(Icons.add, color: Colors.white),
            onPressed: _addOverride,
            tooltip: '添加覆盖',
          ),
          IconButton(
            icon: const Icon(Icons.close, color: Colors.white),
            onPressed: () => Navigator.pop(context),
          ),
        ],
      ),
    );
  }

  Widget _buildBody() {
    if (_isLoading) {
      return const Center(child: CircularProgressIndicator());
    }

    if (_overrides.isEmpty) {
      return Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(
              Icons.edit_calendar_outlined,
              size: 64,
              color: Colors.grey.shade400,
            ),
            const SizedBox(height: 16),
            Text('此规则还没有覆盖', style: TextStyle(color: Colors.grey.shade600)),
          ],
        ),
      );
    }

    return ListView.builder(
      padding: const EdgeInsets.all(16),
      itemCount: _overrides.length,
      itemBuilder: (context, index) => _buildOverrideCard(_overrides[index]),
    );
  }

  Widget _buildOverrideCard(ScheduleOverride override) {
    return Card(
      margin: const EdgeInsets.only(bottom: 12),
      child: Padding(
        padding: const EdgeInsets.all(12),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Container(
                  padding: const EdgeInsets.symmetric(
                    horizontal: 8,
                    vertical: 4,
                  ),
                  decoration: BoxDecoration(
                    color: _getOverrideColor(override.type),
                    borderRadius: BorderRadius.circular(4),
                  ),
                  child: Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Icon(
                        _getOverrideIcon(override.type),
                        size: 16,
                        color: Colors.white,
                      ),
                      const SizedBox(width: 4),
                      Text(
                        _getOverrideName(override.type),
                        style: const TextStyle(
                          color: Colors.white,
                          fontSize: 12,
                        ),
                      ),
                    ],
                  ),
                ),
                const Spacer(),
                IconButton(
                  icon: const Icon(Icons.edit, color: Colors.blue),
                  onPressed: () => _editOverride(override),
                  tooltip: '编辑',
                ),
                IconButton(
                  icon: const Icon(Icons.delete, color: Colors.red),
                  onPressed: () => _deleteOverride(override),
                  tooltip: '删除',
                ),
              ],
            ),
            const SizedBox(height: 8),
            _buildInfoRow(Icons.calendar_today, _formatDate(override)),
            if (override.newTime != null || override.newEndTime != null)
              _buildInfoRow(
                Icons.access_time,
                '${override.newTime ?? widget.rule.time ?? ''} - ${override.newEndTime ?? widget.rule.endTime ?? ''}',
              ),
            if (override.newTitle != null)
              _buildInfoRow(Icons.title, override.newTitle!),
            if (override.newDescription != null)
              _buildInfoRow(Icons.description, override.newDescription!),
            if (override.metadata != null && override.metadata!.isNotEmpty)
              _buildInfoRow(Icons.info_outline, '有附加数据'),
          ],
        ),
      ),
    );
  }

  Widget _buildInfoRow(IconData icon, String text) {
    return Padding(
      padding: const EdgeInsets.only(top: 4),
      child: Row(
        children: [
          Icon(icon, size: 16, color: Colors.grey.shade600),
          const SizedBox(width: 8),
          Expanded(
            child: Text(
              text,
              style: TextStyle(fontSize: 14, color: Colors.grey.shade800),
            ),
          ),
        ],
      ),
    );
  }

  String _formatDate(ScheduleOverride override) {
    final start = override.startDate.toString().split(' ')[0];
    final end = override.endDate.toString().split(' ')[0];
    // 如果开始日期等于结束日期，只显示一个日期（单日覆盖）
    if (start == end) return start;
    return '$start ~ $end';
  }

  String _getOverrideName(OverrideType type) {
    switch (type) {
      case OverrideType.skip:
        return '跳过';
      case OverrideType.modifyTime:
        return '修改时间';
      case OverrideType.modify:
        return '修改多项';
      case OverrideType.replace:
        return '替换';
      case OverrideType.complete:
        return '已完成';
    }
  }

  IconData _getOverrideIcon(OverrideType type) {
    switch (type) {
      case OverrideType.skip:
        return Icons.block;
      case OverrideType.modifyTime:
        return Icons.access_time;
      case OverrideType.modify:
        return Icons.edit;
      case OverrideType.replace:
        return Icons.swap_horiz;
      case OverrideType.complete:
        return Icons.check_circle;
    }
  }

  Color _getOverrideColor(OverrideType type) {
    switch (type) {
      case OverrideType.skip:
        return Colors.red;
      case OverrideType.modifyTime:
        return Colors.blue;
      case OverrideType.modify:
        return Colors.orange;
      case OverrideType.replace:
        return Colors.purple;
      case OverrideType.complete:
        return Colors.green;
    }
  }

  Future<void> _addOverride() async {
    final result = await showDialog<bool>(
      context: context,
      builder: (context) => OverrideEditDialog(rule: widget.rule),
    );

    if (result == true) {
      _loadOverrides();
    }
  }

  Future<void> _editOverride(ScheduleOverride override) async {
    final result = await showDialog<bool>(
      context: context,
      builder: (context) =>
          OverrideEditDialog(rule: widget.rule, existingOverride: override),
    );

    if (result == true) {
      _loadOverrides();
    }
  }

  Future<void> _deleteOverride(ScheduleOverride override) async {
    final confirmed = await showDialog<bool>(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('确认删除'),
        content: const Text('确定要删除此覆盖吗？'),
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
      await db.deleteOverride(override.id);
      _loadOverrides();
    }
  }
}
