import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../models/schedule_rule.dart';
import '../models/schedule_override.dart';
import '../services/database_service.dart';

/// 覆盖编辑对话框
class OverrideEditDialog extends StatefulWidget {
  final ScheduleRule rule;
  final ScheduleOverride? existingOverride;

  const OverrideEditDialog({
    super.key,
    required this.rule,
    this.existingOverride,
  });

  @override
  State<OverrideEditDialog> createState() => _OverrideEditDialogState();
}

class _OverrideEditDialogState extends State<OverrideEditDialog> {
  late OverrideType _type;
  late DateTime _startDate;
  DateTime? _endDate;
  TimeOfDay? _newStartTime;
  TimeOfDay? _newEndTime;
  String? _newTitle;
  String? _newDescription;

  final _newTitleController = TextEditingController();
  final _newDescriptionController = TextEditingController();

  @override
  void initState() {
    super.initState();

    if (widget.existingOverride != null) {
      _type = widget.existingOverride!.type;
      _startDate = widget.existingOverride!.startDate;
      _endDate = widget.existingOverride!.endDate;

      // 解析时间字符串为 TimeOfDay
      if (widget.existingOverride!.newTime != null) {
        final parts = widget.existingOverride!.newTime!.split(':');
        if (parts.length == 2) {
          _newStartTime = TimeOfDay(
            hour: int.parse(parts[0]),
            minute: int.parse(parts[1]),
          );
        }
      }
      if (widget.existingOverride!.newEndTime != null) {
        final parts = widget.existingOverride!.newEndTime!.split(':');
        if (parts.length == 2) {
          _newEndTime = TimeOfDay(
            hour: int.parse(parts[0]),
            minute: int.parse(parts[1]),
          );
        }
      }

      _newTitle = widget.existingOverride!.newTitle;
      _newDescription = widget.existingOverride!.newDescription;

      _newTitleController.text = _newTitle ?? '';
      _newDescriptionController.text = _newDescription ?? '';
    } else {
      _type = OverrideType.modify;
      _startDate = DateTime.now();
      _endDate = DateTime.now(); // 初始化为单日覆盖
    }
  }

  @override
  void dispose() {
    _newTitleController.dispose();
    _newDescriptionController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Dialog(
      child: Container(
        constraints: const BoxConstraints(maxWidth: 500, maxHeight: 700),
        child: Column(
          children: [
            _buildHeader(),
            Expanded(child: _buildBody()),
            _buildActions(),
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
                Text(
                  widget.existingOverride == null ? '添加覆盖' : '编辑覆盖',
                  style: const TextStyle(
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
        ],
      ),
    );
  }

  Widget _buildBody() {
    return ListView(
      padding: const EdgeInsets.all(16),
      children: [
        const Text(
          '覆盖类型',
          style: TextStyle(fontSize: 14, fontWeight: FontWeight.bold),
        ),
        const SizedBox(height: 8),
        DropdownButtonFormField<OverrideType>(
          initialValue: _type,
          decoration: const InputDecoration(
            border: OutlineInputBorder(),
            contentPadding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
          ),
          items: const [
            DropdownMenuItem(value: OverrideType.skip, child: Text('跳过')),
            DropdownMenuItem(
              value: OverrideType.modifyTime,
              child: Text('修改时间'),
            ),
            DropdownMenuItem(value: OverrideType.modify, child: Text('修改多项')),
            DropdownMenuItem(value: OverrideType.replace, child: Text('完全替换')),
            DropdownMenuItem(
              value: OverrideType.complete,
              child: Text('标记已完成'),
            ),
          ],
          onChanged: (value) {
            setState(() => _type = value!);
          },
        ),

        const SizedBox(height: 16),

        const Text(
          '应用日期 *',
          style: TextStyle(fontSize: 14, fontWeight: FontWeight.bold),
        ),
        const SizedBox(height: 8),
        OutlinedButton.icon(
          onPressed: () async {
            final date = await showDatePicker(
              context: context,
              initialDate: _startDate,
              firstDate: DateTime(2020),
              lastDate: DateTime(2030),
            );
            if (date != null) {
              setState(() {
                _startDate = date;
                // 自动将结束日期设置为同一天（单日覆盖）
                _endDate = date;
              });
            }
          },
          icon: const Icon(Icons.calendar_today),
          label: Text('开始日期：${_startDate.toString().split(' ')[0]}'),
          style: OutlinedButton.styleFrom(
            alignment: Alignment.centerLeft,
            minimumSize: const Size(double.infinity, 48),
          ),
        ),
        const SizedBox(height: 8),
        Row(
          children: [
            Expanded(
              child: OutlinedButton.icon(
                onPressed: () async {
                  final date = await showDatePicker(
                    context: context,
                    initialDate: _endDate ?? _startDate,
                    firstDate: _startDate, // 不能早于开始日期
                    lastDate: DateTime(2030),
                  );
                  if (date != null) {
                    setState(() => _endDate = date);
                  }
                },
                icon: const Icon(Icons.calendar_today),
                label: Text(
                  _endDate == null || (_endDate!.year == _startDate.year && 
                                       _endDate!.month == _startDate.month && 
                                       _endDate!.day == _startDate.day)
                      ? '仅一次（单日）'
                      : '至：${_endDate!.toString().split(' ')[0]}',
                ),
                style: OutlinedButton.styleFrom(
                  alignment: Alignment.centerLeft,
                ),
              ),
            ),
            const SizedBox(width: 8),
            if (_endDate != null && 
                !(_endDate!.year == _startDate.year && 
                  _endDate!.month == _startDate.month && 
                  _endDate!.day == _startDate.day))
              IconButton(
                icon: const Icon(Icons.clear),
                onPressed: () => setState(() => _endDate = _startDate),
                tooltip: '清除（仅一次）',
              ),
          ],
        ),

        const SizedBox(height: 16),

        if (_type == OverrideType.modifyTime ||
            _type == OverrideType.modify ||
            _type == OverrideType.replace) ...[
          Text(
            (_endDate == null || 
             (_endDate!.year == _startDate.year && 
              _endDate!.month == _startDate.month && 
              _endDate!.day == _startDate.day))
                ? '新时间（可选）' 
                : '新时间（结束时间必填）',
            style: const TextStyle(fontSize: 14, fontWeight: FontWeight.bold),
          ),
          const SizedBox(height: 8),
          Row(
            children: [
              Expanded(
                child: OutlinedButton.icon(
                  onPressed: () async {
                    // 解析规则的默认时间作为初始值
                    TimeOfDay initialTime = _newStartTime ?? TimeOfDay.now();
                    if (_newStartTime == null && widget.rule.time != null) {
                      final parts = widget.rule.time!.split(':');
                      if (parts.length == 2) {
                        initialTime = TimeOfDay(
                          hour: int.parse(parts[0]),
                          minute: int.parse(parts[1]),
                        );
                      }
                    }

                    final time = await showTimePicker(
                      context: context,
                      initialTime: initialTime,
                    );
                    if (time != null) {
                      setState(() => _newStartTime = time);
                    }
                  },
                  icon: const Icon(Icons.access_time),
                  label: Text(
                    _newStartTime?.format(context) ??
                        widget.rule.time ??
                        '选择时间',
                  ),
                  style: OutlinedButton.styleFrom(
                    alignment: Alignment.centerLeft,
                    padding: const EdgeInsets.symmetric(
                      horizontal: 12,
                      vertical: 12,
                    ),
                  ),
                ),
              ),
              if (_newStartTime != null)
                IconButton(
                  icon: const Icon(Icons.clear, size: 20),
                  onPressed: () => setState(() => _newStartTime = null),
                  padding: EdgeInsets.zero,
                  constraints: const BoxConstraints(),
                ),
              const SizedBox(width: 8),
              Expanded(
                child: OutlinedButton.icon(
                  onPressed: () async {
                    // 解析规则的默认结束时间作为初始值
                    TimeOfDay initialTime = _newEndTime ?? TimeOfDay.now();
                    if (_newEndTime == null && widget.rule.endTime != null) {
                      final parts = widget.rule.endTime!.split(':');
                      if (parts.length == 2) {
                        initialTime = TimeOfDay(
                          hour: int.parse(parts[0]),
                          minute: int.parse(parts[1]),
                        );
                      }
                    }

                    final time = await showTimePicker(
                      context: context,
                      initialTime: initialTime,
                    );
                    if (time != null) {
                      setState(() => _newEndTime = time);
                    }
                  },
                  icon: const Icon(Icons.access_time),
                  label: Text(
                    _newEndTime?.format(context) ??
                        widget.rule.endTime ??
                        '选择时间',
                  ),
                  style: OutlinedButton.styleFrom(
                    alignment: Alignment.centerLeft,
                    padding: const EdgeInsets.symmetric(
                      horizontal: 12,
                      vertical: 12,
                    ),
                  ),
                ),
              ),
              if (_newEndTime != null)
                IconButton(
                  icon: const Icon(Icons.clear, size: 20),
                  onPressed: () => setState(() => _newEndTime = null),
                  padding: EdgeInsets.zero,
                  constraints: const BoxConstraints(),
                ),
            ],
          ),
          const SizedBox(height: 16),
        ],

        if (_type == OverrideType.modify || _type == OverrideType.replace) ...[
          const Text(
            '新标题（可选）',
            style: TextStyle(fontSize: 14, fontWeight: FontWeight.bold),
          ),
          const SizedBox(height: 8),
          TextField(
            controller: _newTitleController,
            decoration: InputDecoration(
              border: const OutlineInputBorder(),
              hintText: widget.rule.title,
              contentPadding: const EdgeInsets.symmetric(
                horizontal: 12,
                vertical: 8,
              ),
            ),
            onChanged: (value) => _newTitle = value.isEmpty ? null : value,
          ),
          const SizedBox(height: 16),

          const Text(
            '新描述（可选）',
            style: TextStyle(fontSize: 14, fontWeight: FontWeight.bold),
          ),
          const SizedBox(height: 8),
          TextField(
            controller: _newDescriptionController,
            decoration: InputDecoration(
              border: const OutlineInputBorder(),
              hintText: widget.rule.description ?? '输入描述',
              contentPadding: const EdgeInsets.symmetric(
                horizontal: 12,
                vertical: 8,
              ),
            ),
            maxLines: 3,
            onChanged: (value) =>
                _newDescription = value.isEmpty ? null : value,
          ),
        ],
      ],
    );
  }

  Widget _buildActions() {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        border: Border(top: BorderSide(color: Colors.grey.shade300)),
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.end,
        children: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('取消'),
          ),
          const SizedBox(width: 8),
          ElevatedButton(onPressed: _save, child: const Text('保存')),
        ],
      ),
    );
  }

  Future<void> _save() async {
    final db = Provider.of<DatabaseService>(context, listen: false);

    // 验证：如果是范围覆盖（endDate 不等于 startDate），必须有结束时间
    final isRangeOverride = _endDate != null && 
        !(_endDate!.year == _startDate.year && 
          _endDate!.month == _startDate.month && 
          _endDate!.day == _startDate.day);
    
    if (isRangeOverride && _newEndTime == null) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text('范围覆盖必须设置结束时间，以防止永久覆盖'),
          backgroundColor: Colors.red,
        ),
      );
      return;
    }

    // 将 TimeOfDay 转换为字符串
    final newTimeStr = _newStartTime != null
        ? '${_newStartTime!.hour.toString().padLeft(2, '0')}:${_newStartTime!.minute.toString().padLeft(2, '0')}'
        : null;
    final newEndTimeStr = _newEndTime != null
        ? '${_newEndTime!.hour.toString().padLeft(2, '0')}:${_newEndTime!.minute.toString().padLeft(2, '0')}'
        : null;

    // 单日覆盖：endDate 等于 startDate
    final actualEndDate = _endDate ?? _startDate;

    final override = ScheduleOverride(
      id: widget.existingOverride?.id,
      startDate: _startDate,
      endDate: actualEndDate,
      ruleId: widget.rule.id,
      type: _type,
      newTime: newTimeStr,
      newEndTime: newEndTimeStr,
      newTitle: _newTitle,
      newDescription: _newDescription,
    );

    if (widget.existingOverride == null) {
      await db.insertOverride(override);
    } else {
      await db.updateOverride(override);
    }

    if (!mounted) return;
    Navigator.pop(context, true);
  }
}
