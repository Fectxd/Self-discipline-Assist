import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../models/schedule.dart';
import '../models/schedule_rule.dart';
import '../models/schedule_override.dart';
import '../services/database_service.dart';

class EditDialogResult {
  final bool changed;
  final String? message;

  EditDialogResult({required this.changed, this.message});
}

/// Show the edit dialog for a schedule and return a result indicating whether anything changed.
Future<EditDialogResult?> showScheduleEditDialog(BuildContext rootContext, Schedule schedule) {
  final scaffoldMessenger = ScaffoldMessenger.of(rootContext);

  return showDialog<EditDialogResult>(
    context: rootContext,
    builder: (dialogContext) {
      // capture a stable NavigatorState for the dialog so we don't use BuildContext across async gaps
      final dialogNavigator = Navigator.of(dialogContext);
      final titleController = TextEditingController(text: schedule.title);
      final descController = TextEditingController(text: schedule.description ?? '');
      TimeOfDay? selectedTime = schedule.startTime != null
          ? TimeOfDay(hour: schedule.startTime!.hour, minute: schedule.startTime!.minute)
          : null;
      TimeOfDay? selectedEndTime = schedule.endTime != null
          ? TimeOfDay(hour: schedule.endTime!.hour, minute: schedule.endTime!.minute)
          : null;

      final isFromRule = schedule.sourceTemplateId != null;
      bool modifyOnlyToday = true;

      return StatefulBuilder(
        builder: (innerContext, setState) {
          Widget scopeOption({required bool value, required String title, required String subtitle}) {
            final selected = modifyOnlyToday == value;
            return ListTile(
              dense: true,
              contentPadding: EdgeInsets.zero,
              leading: Icon(selected ? Icons.radio_button_checked : Icons.radio_button_unchecked, color: Colors.orange.shade700),
              title: Text(title, style: const TextStyle(fontSize: 14)),
              subtitle: Text(subtitle, style: TextStyle(fontSize: 11, color: Colors.grey.shade600)),
              onTap: () => setState(() => modifyOnlyToday = value),
            );
          }

          return AlertDialog(
            title: const Text('编辑日程'),
            content: SingleChildScrollView(
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  TextField(
                    controller: titleController,
                    decoration: const InputDecoration(labelText: '标题', border: OutlineInputBorder()),
                  ),
                  const SizedBox(height: 16),
                  TextField(
                    controller: descController,
                    decoration: const InputDecoration(labelText: '描述（可选）', border: OutlineInputBorder()),
                    maxLines: 2,
                  ),
                  const SizedBox(height: 16),
                  ListTile(
                    contentPadding: EdgeInsets.zero,
                    title: Text(selectedTime != null ? '开始时间: ${selectedTime!.format(innerContext)}' : '未设置开始时间'),
                    trailing: const Icon(Icons.access_time),
                    onTap: () async {
                      final time = await showTimePicker(context: innerContext, initialTime: selectedTime ?? TimeOfDay.now());
                      if (time != null) setState(() => selectedTime = time);
                    },
                  ),
                  const SizedBox(height: 8),
                  ListTile(
                    contentPadding: EdgeInsets.zero,
                    title: Text(selectedEndTime != null ? '结束时间: ${selectedEndTime!.format(innerContext)}' : '未设置结束时间'),
                    trailing: const Icon(Icons.access_time),
                    onTap: () async {
                      final time = await showTimePicker(context: innerContext, initialTime: selectedEndTime ?? (selectedTime ?? TimeOfDay.now()));
                      if (time != null) setState(() => selectedEndTime = time);
                    },
                  ),

                  if (isFromRule) ...[
                    const Divider(height: 24),
                    Container(
                      padding: const EdgeInsets.all(12),
                      decoration: BoxDecoration(color: Colors.orange.shade50, borderRadius: BorderRadius.circular(8), border: Border.all(color: Colors.orange.shade200)),
                      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                        Row(children: [Icon(Icons.info_outline, size: 16, color: Colors.orange.shade700), const SizedBox(width: 8), Text('修改范围', style: TextStyle(fontWeight: FontWeight.w600, color: Colors.orange.shade900))]),
                        const SizedBox(height: 8),
                        scopeOption(value: true, title: '仅修改今天', subtitle: '创建临时覆盖，不影响其他日期'),
                        scopeOption(value: false, title: '修改整个规则', subtitle: '永久修改，影响所有适用日期'),
                      ]),
                    ),
                  ],
                ],
              ),
            ),
            actions: [
              TextButton(onPressed: () => Navigator.pop(innerContext), child: const Text('取消')),
              ElevatedButton(
                onPressed: () async {
                  if (titleController.text.trim().isEmpty) {
                    scaffoldMessenger.showSnackBar(
                      const SnackBar(
                        content: Text('标题不能为空'),
                        behavior: SnackBarBehavior.floating,
                        margin: EdgeInsets.only(bottom: 80, left: 16, right: 16),
                      ),
                    );
                    return;
                  }

                  final dbService = Provider.of<DatabaseService>(innerContext, listen: false);

                  if (isFromRule && modifyOnlyToday) {
                    final ruleId = schedule.sourceTemplateId ?? await dbService.findRuleId(schedule.title, null);
                    if (ruleId != null) {
                      final hasChanges = titleController.text.trim() != schedule.title ||
                          descController.text.trim() != (schedule.description ?? '') ||
                          (selectedTime != null && schedule.startTime != null && (selectedTime!.hour != schedule.startTime!.hour || selectedTime!.minute != schedule.startTime!.minute)) ||
                          (selectedEndTime != null && schedule.endTime != null && (selectedEndTime!.hour != schedule.endTime!.hour || selectedEndTime!.minute != schedule.endTime!.minute));

                      if (hasChanges) {
                        // 使用 ScheduleOverride.modify 类型记录今天的修改
                        final override = ScheduleOverride(
                          startDate: schedule.date,
                          endDate: schedule.date, // 单日覆盖：endDate 等于 startDate
                          ruleId: ruleId,
                          type: OverrideType.modify,
                          newTime: selectedTime != null ? '${selectedTime!.hour.toString().padLeft(2, '0')}:${selectedTime!.minute.toString().padLeft(2, '0')}' : null,
                          newTitle: titleController.text.trim() != schedule.title ? titleController.text.trim() : null,
                          newDescription: descController.text.trim() != (schedule.description ?? '') ? descController.text.trim() : null,
                          newEndTime: selectedEndTime != null ? '${selectedEndTime!.hour.toString().padLeft(2, '0')}:${selectedEndTime!.minute.toString().padLeft(2, '0')}' : null,
                        );

                        await dbService.insertOverride(override);
                        if (dialogNavigator.mounted) dialogNavigator.pop(EditDialogResult(changed: true, message: '已创建今日覆盖'));
                        return;
                      }
                    }
                  }

                  // 修改整个规则
                  if (isFromRule && !modifyOnlyToday) {
                    final ruleId = schedule.sourceTemplateId ?? await dbService.findRuleId(schedule.title, null);
                    if (ruleId != null) {
                      final rule = await dbService.getRuleById(ruleId);
                      if (rule != null) {
                        final updatedRule = ScheduleRule(
                          id: rule.id,
                          title: titleController.text.trim(),
                          description: descController.text.trim().isEmpty ? null : descController.text.trim(),
                          time: selectedTime != null ? '${selectedTime!.hour.toString().padLeft(2, '0')}:${selectedTime!.minute.toString().padLeft(2, '0')}' : rule.time,
                          endTime: selectedEndTime != null ? '${selectedEndTime!.hour.toString().padLeft(2, '0')}:${selectedEndTime!.minute.toString().padLeft(2, '0')}' : rule.endTime,
                          condition: rule.condition,
                          createdAt: rule.createdAt,
                          isEnabled: rule.isEnabled,
                        );
                        await dbService.updateRule(updatedRule);
                        if (dialogNavigator.mounted) dialogNavigator.pop(EditDialogResult(changed: true, message: '规则已更新'));
                        return;
                      }
                    }
                  }

                  // 修改单个日程实例（非规则来源）
                  DateTime? newStartTime;
                  if (selectedTime != null) newStartTime = DateTime(schedule.date.year, schedule.date.month, schedule.date.day, selectedTime!.hour, selectedTime!.minute);

                  DateTime? newEndTime;
                  if (selectedEndTime != null) newEndTime = DateTime(schedule.date.year, schedule.date.month, schedule.date.day, selectedEndTime!.hour, selectedEndTime!.minute);

                  final updated = schedule.copyWith(title: titleController.text.trim(), description: descController.text.trim().isEmpty ? null : descController.text.trim(), startTime: newStartTime, endTime: newEndTime);

                  await dbService.updateSchedule(updated);
                  if (dialogNavigator.mounted) dialogNavigator.pop(EditDialogResult(changed: true, message: '日程已更新'));
                },
                child: const Text('保存'),
              ),
            ],
          );
        },
      );
    },
  );
}
