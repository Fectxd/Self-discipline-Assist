import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../models/schedule.dart';
import '../models/schedule_override.dart';
import '../services/database_service.dart';

Future<bool?> showScheduleDeleteDialog(BuildContext rootContext, Schedule schedule) {
  final isFromRule = schedule.sourceTemplateId != null;

  return showDialog<bool>(
    context: rootContext,
    builder: (dialogContext) {
      bool deleteEntireRule = false;

      return StatefulBuilder(
        builder: (context, setState) => AlertDialog(
          title: const Text('删除日程'),
          content: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text('确定要删除「${schedule.title}」吗？'),
              if (isFromRule) ...[
                const SizedBox(height: 12),
                Container(
                  padding: const EdgeInsets.all(8),
                  decoration: BoxDecoration(
                    color: Colors.orange.shade50,
                    borderRadius: BorderRadius.circular(4),
                    border: Border.all(color: Colors.orange.shade200),
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        children: [
                          Icon(Icons.info_outline, size: 16, color: Colors.orange.shade700),
                          const SizedBox(width: 8),
                          Expanded(
                            child: Text(
                              '这是规则生成的日程',
                              style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold, color: Colors.orange.shade900),
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 8),
                      CheckboxListTile(
                        dense: true,
                        contentPadding: EdgeInsets.zero,
                        value: deleteEntireRule,
                        onChanged: (val) => setState(() => deleteEntireRule = val ?? false),
                        title: Text('删除整个规则', style: TextStyle(fontSize: 12, color: Colors.red.shade700)),
                        subtitle: Text(
                          deleteEntireRule ? '将永久删除此规则及所有相关日程' : '只跳过今天，不影响其他日程',
                          style: TextStyle(fontSize: 11, color: Colors.grey.shade700),
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ],
          ),
          actions: [
            TextButton(onPressed: () => Navigator.pop(dialogContext, false), child: const Text('取消')),
            ElevatedButton(
              onPressed: () async {
                final navigator = Navigator.of(dialogContext);
                final dbService = Provider.of<DatabaseService>(dialogContext, listen: false);

                if (isFromRule) {
                  if (deleteEntireRule) {
                    // 删除整个规则
                    await dbService.deleteRule(schedule.sourceTemplateId!);
                  } else {
                    // 只跳过今�?
                    final override = ScheduleOverride(
                      startDate: schedule.date,
                      endDate: schedule.date, // 单日覆盖：endDate 等于 startDate
                      ruleId: schedule.sourceTemplateId!,
                      type: OverrideType.skip,
                    );
                    await dbService.insertOverride(override);
                  }
                } else {
                  await dbService.deleteSchedule(schedule.id);
                }

                if (navigator.mounted) navigator.pop(true);
              },
              style: ElevatedButton.styleFrom(backgroundColor: Colors.red),
              child: const Text('删除'),
            ),
          ],
        ),
      );
    },
  );
}
