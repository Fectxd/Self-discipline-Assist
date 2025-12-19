import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../models/schedule_rule.dart';
import '../services/database_service.dart';

/// 规则编辑对话框
/// 支持创建和编辑所有规则参数
class RuleEditDialog extends StatefulWidget {
  final ScheduleRule? rule; // null = 创建新规则

  const RuleEditDialog({super.key, this.rule});

  @override
  State<RuleEditDialog> createState() => _RuleEditDialogState();
}

class _RuleEditDialogState extends State<RuleEditDialog> {
  late TextEditingController _titleController;
  late TextEditingController _descriptionController;
  TimeOfDay? _startTime;
  TimeOfDay? _endTime;

  // 条件类型
  ConditionType _conditionType = ConditionType.daily;

  // 每周某天
  int? _weekday;

  // 间隔天数
  int? _intervalDays;
  DateTime? _intervalStartDate;

  // 特定日期
  DateTime? _specificDate;

  // 时间范围限制
  DateTime? _endDate;
  int? _maxCount;

  // 启用状态
  bool _isEnabled = true;

  @override
  void initState() {
    super.initState();

    if (widget.rule != null) {
      // 编辑模式 - 加载现有数据
      final rule = widget.rule!;
      _titleController = TextEditingController(text: rule.title);
      _descriptionController = TextEditingController(
        text: rule.description ?? '',
      );

      if (rule.time != null) {
        final parts = rule.time!.split(':');
        _startTime = TimeOfDay(
          hour: int.parse(parts[0]),
          minute: int.parse(parts[1]),
        );
      }

      if (rule.endTime != null) {
        final parts = rule.endTime!.split(':');
        _endTime = TimeOfDay(
          hour: int.parse(parts[0]),
          minute: int.parse(parts[1]),
        );
      }

      _conditionType = rule.condition.type;
      _weekday = rule.condition.weekday;
      _intervalDays = rule.condition.intervalDays;
      _intervalStartDate = rule.condition.startDate;
      _specificDate = rule.condition.specificDate;
      _endDate = rule.condition.endDate;
      _maxCount = rule.condition.maxCount;
      _isEnabled = rule.isEnabled;
    } else {
      // 创建模式
      _titleController = TextEditingController();
      _descriptionController = TextEditingController();
    }
  }

  @override
  void dispose() {
    _titleController.dispose();
    _descriptionController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Dialog(
      child: Container(
        constraints: const BoxConstraints(maxWidth: 600, maxHeight: 700),
        child: Column(
          children: [
            // 标题�?
            Container(
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
                  const Icon(Icons.edit, color: Colors.white),
                  const SizedBox(width: 12),
                  Expanded(
                    child: Text(
                      widget.rule == null ? '创建新规则' : '编辑规则',
                      style: const TextStyle(
                        color: Colors.white,
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                  IconButton(
                    icon: const Icon(Icons.close, color: Colors.white),
                    onPressed: () => Navigator.pop(context),
                  ),
                ],
              ),
            ),

            // 内容
            Expanded(
              child: SingleChildScrollView(
                padding: const EdgeInsets.all(16),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    // 基本信息
                    _buildSection('基本信息', [
                      TextField(
                        controller: _titleController,
                        decoration: const InputDecoration(
                          labelText: '标题 *',
                          border: OutlineInputBorder(),
                          hintText: '例如：晨跑、周末聚会',
                        ),
                      ),
                      const SizedBox(height: 12),
                      TextField(
                        controller: _descriptionController,
                        decoration: const InputDecoration(
                          labelText: '描述（可选）',
                          border: OutlineInputBorder(),
                          hintText: '补充说明',
                        ),
                        maxLines: 2,
                      ),
                    ]),

                    const SizedBox(height: 24),

                    // 时间设置
                    _buildSection('时间设置', [
                      Row(
                        children: [
                          Expanded(
                            child: ListTile(
                              title: const Text('开始时间'),
                              subtitle: Text(
                                _startTime?.format(context) ?? '未设定',
                              ),
                              trailing: const Icon(Icons.access_time),
                              onTap: () => _pickTime(true),
                            ),
                          ),
                          Expanded(
                            child: ListTile(
                              title: const Text('结束时间'),
                              subtitle: Text(
                                _endTime?.format(context) ?? '未设定',
                              ),
                              trailing: const Icon(Icons.access_time),
                              onTap: () => _pickTime(false),
                            ),
                          ),
                        ],
                      ),
                    ]),

                    const SizedBox(height: 24),

                    // 重复规则
                    _buildSection('重复规则', [
                      DropdownButtonFormField<ConditionType>(
                        initialValue: _conditionType,
                        decoration: const InputDecoration(
                          labelText: '规则类型',
                          border: OutlineInputBorder(),
                        ),
                        items: ConditionType.values.map((type) {
                          return DropdownMenuItem(
                            value: type,
                            child: Text(_getConditionName(type)),
                          );
                        }).toList(),
                        onChanged: (value) {
                          setState(() => _conditionType = value!);
                        },
                      ),
                      const SizedBox(height: 12),

                      // 根据类型显示不同的参数
                      ..._buildConditionFields(),
                    ]),

                    const SizedBox(height: 24),

                    // 时间范围限制
                    _buildSection('时间范围限制（可选）', [
                      ListTile(
                        title: const Text('结束日期'),
                        subtitle: Text(
                          _endDate == null
                              ? '无限制'
                              : _endDate!.toString().split(' ')[0],
                        ),
                        trailing: const Icon(Icons.calendar_today),
                        onTap: () => _pickEndDate(),
                      ),
                      ListTile(
                        title: const Text('最大重复次数'),
                        subtitle: Text(
                          _maxCount == null ? '无限制' : '$_maxCount 次',
                        ),
                        trailing: const Icon(Icons.edit),
                        onTap: () => _pickMaxCount(),
                      ),
                    ]),

                    const SizedBox(height: 24),

                    // 其他设置
                    _buildSection('其他设置', [
                      SwitchListTile(
                        title: const Text('启用此规则'),
                        subtitle: Text(_isEnabled ? '规则将生成日程' : '规则已禁用'),
                        value: _isEnabled,
                        onChanged: (value) =>
                            setState(() => _isEnabled = value),
                      ),
                    ]),
                  ],
                ),
              ),
            ),

            // 底部按钮
            Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: Theme.of(context).colorScheme.surfaceContainerHighest,
                border: Border(
                  top: BorderSide(
                    color: Theme.of(context).colorScheme.outlineVariant,
                  ),
                ),
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.end,
                children: [
                  TextButton(
                    onPressed: () => Navigator.pop(context),
                    child: const Text('取消'),
                  ),
                  const SizedBox(width: 12),
                  ElevatedButton(
                    onPressed: _save,
                    child: Text(widget.rule == null ? '创建' : '保存'),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildSection(String title, List<Widget> children) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          title,
          style: TextStyle(
            fontSize: 16,
            fontWeight: FontWeight.bold,
            color: Colors.grey.shade800,
          ),
        ),
        const SizedBox(height: 12),
        ...children,
      ],
    );
  }

  List<Widget> _buildConditionFields() {
    switch (_conditionType) {
      case ConditionType.weekday:
        return [
          DropdownButtonFormField<int>(
            initialValue: _weekday,
            decoration: const InputDecoration(
              labelText: '星期',
              border: OutlineInputBorder(),
            ),
            items: [
              for (int i = 1; i <= 7; i++)
                DropdownMenuItem(value: i, child: Text(_getWeekdayName(i))),
            ],
            onChanged: (value) => setState(() => _weekday = value),
          ),
        ];

      case ConditionType.interval:
        return [
          ListTile(
            title: const Text('间隔天数'),
            subtitle: Text(
              _intervalDays == null ? '未设定' : '每隔 $_intervalDays 天',
            ),
            trailing: const Icon(Icons.edit),
            onTap: () async {
              final controller = TextEditingController(
                text: _intervalDays?.toString() ?? '',
              );

              final result = await showDialog<int>(
                context: context,
                builder: (context) => AlertDialog(
                  title: const Text('间隔天数'),
                  content: TextField(
                    controller: controller,
                    keyboardType: TextInputType.number,
                    decoration: const InputDecoration(
                      labelText: '天数',
                      hintText: '例如：3（每隔3天）',
                      border: OutlineInputBorder(),
                    ),
                    autofocus: true,
                  ),
                  actions: [
                    TextButton(
                      onPressed: () => Navigator.pop(context),
                      child: const Text('取消'),
                    ),
                    ElevatedButton(
                      onPressed: () {
                        final days = int.tryParse(controller.text);
                        if (days != null && days > 0) {
                          Navigator.pop(context, days);
                        } else {
                          ScaffoldMessenger.of(context).showSnackBar(
                            const SnackBar(
                              content: Text('请输入有效的天数'),
                              behavior: SnackBarBehavior.floating,
                              margin: EdgeInsets.only(bottom: 80, left: 16, right: 16),
                            ),
                          );
                        }
                      },
                      child: const Text('确定'),
                    ),
                  ],
                ),
              );

              if (result != null) {
                setState(() => _intervalDays = result);
              }
            },
          ),
          const SizedBox(height: 12),
          ListTile(
            title: const Text('起始日期'),
            subtitle: Text(
              _intervalStartDate == null
                  ? '未设定'
                  : _intervalStartDate!.toString().split(' ')[0],
            ),
            trailing: const Icon(Icons.calendar_today),
            onTap: () => _pickIntervalStartDate(),
          ),
        ];

      case ConditionType.specificDate:
        return [
          ListTile(
            title: const Text('日期'),
            subtitle: Text(
              _specificDate == null
                  ? '未设定'
                  : _specificDate!.toString().split(' ')[0],
            ),
            trailing: const Icon(Icons.calendar_today),
            onTap: () => _pickSpecificDate(),
          ),
        ];

      default:
        return [
          Text(
            _getConditionHint(_conditionType),
            style: TextStyle(fontSize: 13, color: Colors.grey.shade600),
          ),
        ];
    }
  }

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
        return '每周某天';
      case ConditionType.interval:
        return '每隔N天';
      case ConditionType.specificDate:
        return '特定日期';
    }
  }

  String _getConditionHint(ConditionType type) {
    switch (type) {
      case ConditionType.daily:
        return '每天都生成日程';
      case ConditionType.workday:
        return '只在工作日生成日程';
      case ConditionType.restday:
        return '只在休息日（周末+节假日）生成';
      case ConditionType.weekend:
        return '只在周末生成';
      case ConditionType.holiday:
        return '只在节假日生成日程';
      default:
        return '';
    }
  }

  String _getWeekdayName(int weekday) {
    const names = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
    return names[weekday - 1];
  }

  Future<void> _pickTime(bool isStart) async {
    final time = await showTimePicker(
      context: context,
      initialTime: (isStart ? _startTime : _endTime) ?? TimeOfDay.now(),
    );

    if (time != null) {
      setState(() {
        if (isStart) {
          _startTime = time;
        } else {
          _endTime = time;
        }
      });
    }
  }

  Future<void> _pickEndDate() async {
    final result = await showDialog<DateTime?>(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('设置结束日期'),
        content: const Text('选择规则生效的最后日期'),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('取消'),
          ),
          TextButton(
            onPressed: () => Navigator.pop(context, null), // 返回 null 表示无限制
            child: const Text('无限制'),
          ),
          ElevatedButton(
            onPressed: () async {
              Navigator.pop(context); // 先关闭对话框
              final date = await showDatePicker(
                context: context,
                initialDate:
                    _endDate ?? DateTime.now().add(const Duration(days: 30)),
                firstDate: DateTime.now(),
                lastDate: DateTime.now().add(const Duration(days: 3650)),
              );
              if (date != null && mounted) {
                setState(() => _endDate = date);
              }
            },
            child: const Text('选择日期'),
          ),
        ],
      ),
    );

    // 如果用户点击“无限制”按钮，result 会是 null
    if (result == null && mounted) {
      setState(() => _endDate = null);
    }
  }

  Future<void> _pickIntervalStartDate() async {
    final date = await showDatePicker(
      context: context,
      initialDate: _intervalStartDate ?? DateTime.now(),
      firstDate: DateTime(2000),
      lastDate: DateTime.now().add(const Duration(days: 3650)),
    );

    if (date != null) {
      setState(() => _intervalStartDate = date);
    }
  }

  Future<void> _pickSpecificDate() async {
    final date = await showDatePicker(
      context: context,
      initialDate: _specificDate ?? DateTime.now(),
      firstDate: DateTime(2000),
      lastDate: DateTime.now().add(const Duration(days: 3650)),
    );

    if (date != null) {
      setState(() => _specificDate = date);
    }
  }

  Future<void> _pickMaxCount() async {
    final controller = TextEditingController(text: _maxCount?.toString() ?? '');

    final result = await showDialog<int?>(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('最大重复次数'),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              '留空表示无限制重复次数',
              style: TextStyle(fontSize: 13, color: Colors.grey.shade600),
            ),
            const SizedBox(height: 12),
            TextField(
              controller: controller,
              keyboardType: TextInputType.number,
              decoration: const InputDecoration(
                labelText: '次数',
                hintText: '例如：10（留空表示无限制）',
                border: OutlineInputBorder(),
              ),
              autofocus: true,
            ),
          ],
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('取消'),
          ),
          TextButton(
            onPressed: () => Navigator.pop(context, null), // 无限制
            child: const Text('无限制'),
          ),
          ElevatedButton(
            onPressed: () {
              if (controller.text.trim().isEmpty) {
                Navigator.pop(context, null); // 留空=无限制
              } else {
                final count = int.tryParse(controller.text);
                if (count != null && count > 0) {
                  Navigator.pop(context, count);
                } else {
                  ScaffoldMessenger.of(
                    context,
                  ).showSnackBar(
                    const SnackBar(
                      content: Text('请输入有效的正整数'),
                      behavior: SnackBarBehavior.floating,
                      margin: EdgeInsets.only(bottom: 80, left: 16, right: 16),
                    ),
                  );
                }
              }
            },
            child: const Text('确定'),
          ),
        ],
      ),
    );

    // 处理结果：null 表示无限制，数字表示具体次数
    if (result != null || (result == null && _maxCount != null)) {
      setState(() => _maxCount = result);
    }
  }

  Future<void> _save() async {
    // 验证
    if (_titleController.text.trim().isEmpty) {
      ScaffoldMessenger.of(
        context,
      ).showSnackBar(
        const SnackBar(
          content: Text('请输入标题'),
          behavior: SnackBarBehavior.floating,
          margin: EdgeInsets.only(bottom: 80, left: 16, right: 16),
        ),
      );
      return;
    }

    // 创建条件
    RuleCondition condition;

    switch (_conditionType) {
      case ConditionType.weekday:
        if (_weekday == null) {
          ScaffoldMessenger.of(
            context,
          ).showSnackBar(
            const SnackBar(
              content: Text('请选择星期几'),
              behavior: SnackBarBehavior.floating,
              margin: EdgeInsets.only(bottom: 80, left: 16, right: 16),
            ),
          );
          return;
        }
        condition = RuleCondition.weekday(
          _weekday!,
          endDate: _endDate,
          maxCount: _maxCount,
        );
        break;

      case ConditionType.interval:
        if (_intervalDays == null || _intervalStartDate == null) {
          ScaffoldMessenger.of(
            context,
          ).showSnackBar(
            const SnackBar(
              content: Text('请设置间隔天数和起始日期'),
              behavior: SnackBarBehavior.floating,
              margin: EdgeInsets.only(bottom: 80, left: 16, right: 16),
            ),
          );
          return;
        }
        condition = RuleCondition.interval(
          _intervalDays!,
          _intervalStartDate!,
          end: _endDate,
          maxCount: _maxCount,
        );
        break;

      case ConditionType.specificDate:
        if (_specificDate == null) {
          ScaffoldMessenger.of(
            context,
          ).showSnackBar(
            const SnackBar(
              content: Text('请选择日期'),
              behavior: SnackBarBehavior.floating,
              margin: EdgeInsets.only(bottom: 80, left: 16, right: 16),
            ),
          );
          return;
        }
        condition = RuleCondition.specificDate(_specificDate!);
        break;

      case ConditionType.daily:
        condition = RuleCondition.daily(endDate: _endDate, maxCount: _maxCount);
        break;

      case ConditionType.workday:
        condition = RuleCondition.workday(
          endDate: _endDate,
          maxCount: _maxCount,
        );
        break;

      case ConditionType.restday:
        condition = RuleCondition.restday(
          endDate: _endDate,
          maxCount: _maxCount,
        );
        break;

      case ConditionType.weekend:
        condition = RuleCondition.weekend(
          endDate: _endDate,
          maxCount: _maxCount,
        );
        break;

      case ConditionType.holiday:
        condition = RuleCondition.holiday(
          endDate: _endDate,
          maxCount: _maxCount,
        );
        break;
    }

    // 创建或更新规则
    final rule = ScheduleRule(
      id: widget.rule?.id,
      title: _titleController.text.trim(),
      description: _descriptionController.text.trim().isEmpty
          ? null
          : _descriptionController.text.trim(),
      time: _startTime != null
          ? '${_startTime!.hour.toString().padLeft(2, '0')}:${_startTime!.minute.toString().padLeft(2, '0')}'
          : null,
      endTime: _endTime != null
          ? '${_endTime!.hour.toString().padLeft(2, '0')}:${_endTime!.minute.toString().padLeft(2, '0')}'
          : null,
      condition: condition,
      createdAt: widget.rule?.createdAt,
      isEnabled: _isEnabled,
    );

    final db = context.read<DatabaseService>();

    if (widget.rule == null) {
      await db.insertRule(rule);
    } else {
      await db.updateRule(rule);
    }

    if (mounted) {
      Navigator.pop(context, true);
    }
  }
}
