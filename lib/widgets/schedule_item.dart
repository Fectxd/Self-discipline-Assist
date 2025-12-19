import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import '../models/schedule.dart';

typedef ToggleCompleteCallback = Future<void> Function(bool? value);

class ScheduleItem extends StatelessWidget {
  final Schedule schedule;
  final bool isCurrent;
  final bool isNext;
  final bool readOnly;
  final bool prevAsCurrent;
  final int nestedLevel; // 嵌套层级（0=不嵌套，1=一级嵌套，2=二级嵌套...）
  final ToggleCompleteCallback? onToggleComplete;
  final VoidCallback? onEdit;
  final VoidCallback? onLongPress;
  final VoidCallback? onTap;
  final String? priorityLabel;
  final Color? priorityColor;
  final bool hasOverride; // 是否有覆盖

  const ScheduleItem({
    super.key,
    required this.schedule,
    this.isCurrent = false,
    this.isNext = false,
    this.readOnly = false,
    this.prevAsCurrent = false,
    this.nestedLevel = 0,
    this.onToggleComplete,
    this.onEdit,
    this.onLongPress,
    this.onTap,
    this.priorityLabel,
    this.priorityColor,
    this.hasOverride = false,
  });

  Color _getBgColor(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;

    if (prevAsCurrent || isCurrent) {
      return isDark
          ? Color(0xFF1B4D3E) // 深绿色背景，更加突出
          : Colors.green.shade50;
    }
    if (isNext) {
      return isDark
          ? Color(0xFF4D3419) // 深橙色背景，温暖且突出
          : Colors.orange.shade50;
    }
    if (readOnly) {
      return isDark
          ? Theme.of(context).colorScheme.surfaceContainerHigh
          : Colors.grey.shade100;
    }
    return isDark
        ? Color(0xFF1E2A35) // 深蓝灰色背景，与head区域区分
        : Colors.blue.shade50;
  }

  Color? _getBorderColor(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;

    if (prevAsCurrent || isCurrent) {
      return isDark
          ? Color(0xFF34D399) // 鲜明的绿色边框，类似 Tailwind emerald-400
          : Colors.green.shade300;
    }
    if (isNext) {
      return isDark
          ? Color(0xFFFB923C) // 鲜明的橙色边框，类似 Tailwind orange-400
          : Colors.orange.shade300;
    }
    if (readOnly) {
      return isDark
          ? Color(0xFF4B5563) // 深灰色边框，类似 Tailwind gray-600
          : Colors.grey.shade300;
    }
    return isDark
        ? Color(0xFF374151) // 普通卡片也添加淡淡的边框以增加层次感
        : null;
  }

  Widget? _buildStatusBadge(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    
    if (prevAsCurrent || isCurrent) {
      return Container(
        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
        decoration: BoxDecoration(
          color: isDark ? Color(0xFF10B981) : Colors.green.shade500, // 深色模式使用更亮的绿色
          borderRadius: BorderRadius.circular(12),
        ),
        child: const Text(
          '当前',
          style: TextStyle(
            fontSize: 11,
            color: Colors.white,
            fontWeight: FontWeight.bold,
          ),
        ),
      );
    }
    if (isNext) {
      return Container(
        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
        decoration: BoxDecoration(
          color: isDark ? Color(0xFFF97316) : Colors.orange.shade500, // 深色模式使用更亮的橙色
          borderRadius: BorderRadius.circular(12),
        ),
        child: const Text(
          '下一项',
          style: TextStyle(
            fontSize: 11,
            color: Colors.white,
            fontWeight: FontWeight.bold,
          ),
        ),
      );
    }
    return null;
  }

  String _formatTimeRange() {
    if (schedule.startTime == null) return '';
    if (schedule.endTime != null) {
      return '${DateFormat('HH:mm').format(schedule.startTime!)} - ${DateFormat('HH:mm').format(schedule.endTime!)}';
    }
    return DateFormat('HH:mm').format(schedule.startTime!);
  }

  @override
  Widget build(BuildContext context) {
    final statusBadge = _buildStatusBadge(context);
    final borderColor = _getBorderColor(context);

    return GestureDetector(
      onTap: onTap,
      onLongPress: onLongPress,
      child: Container(
        margin: EdgeInsets.only(
          left: 16 + (nestedLevel * 12.0), // 每层嵌套增加12px缩进
          right: 16,
          top: 4,
          bottom: 4,
        ),
        padding: const EdgeInsets.all(14),
        decoration: BoxDecoration(
          color: _getBgColor(context),
          borderRadius: BorderRadius.circular(12),
          border: borderColor != null
              ? Border.all(
                  color: borderColor,
                  width: prevAsCurrent || isCurrent ? 2 : 1,
                )
              : null,
          boxShadow: [
            BoxShadow(
              color: Colors.black.withValues(
                alpha: isCurrent ? 0.15 : (isNext ? 0.1 : 0.05),
              ),
              blurRadius: isCurrent ? 8 : 4,
              offset: Offset(0, isCurrent ? 3 : 2),
            ),
          ],
        ),
        child: Row(
          children: [
            // 如果是嵌套任务，显示小箭头
            if (nestedLevel > 0) ...[
              Icon(
                Icons.subdirectory_arrow_right,
                size: 16,
                color: Theme.of(context).colorScheme.onSurfaceVariant,
              ),
              const SizedBox(width: 4),
            ],
            Checkbox(
              value: schedule.isCompleted,
              onChanged: readOnly ? null : onToggleComplete,
            ),
            const SizedBox(width: 8),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      if (statusBadge != null) ...[
                        statusBadge,
                        const SizedBox(width: 8),
                      ],
                      Expanded(
                        child: Text(
                          schedule.title,
                          style: TextStyle(
                            decoration: schedule.isCompleted
                                ? TextDecoration.lineThrough
                                : null,
                            fontSize: prevAsCurrent ? 14 : 15,
                            fontWeight: (prevAsCurrent || isCurrent || isNext)
                                ? FontWeight.w600
                                : FontWeight.w500,
                          ),
                        ),
                      ),
                      const SizedBox(width: 8),
                      if (hasOverride)
                        Container(
                          padding: const EdgeInsets.symmetric(
                            horizontal: 8,
                            vertical: 2,
                          ),
                          decoration: BoxDecoration(
                            color: Colors.green.shade500,
                            borderRadius: BorderRadius.circular(12),
                          ),
                          child: const Text(
                            '改',
                            style: TextStyle(
                              fontSize: 10,
                              color: Colors.white,
                              fontWeight: FontWeight.w600,
                            ),
                          ),
                        ),
                      if (hasOverride) const SizedBox(width: 4),
                      Container(
                        padding: const EdgeInsets.symmetric(
                          horizontal: 8,
                          vertical: 2,
                        ),
                        decoration: BoxDecoration(
                          color: priorityColor ?? Colors.grey.shade400,
                          borderRadius: BorderRadius.circular(12),
                        ),
                        child: Text(
                          priorityLabel ?? '日程',
                          style: const TextStyle(
                            fontSize: 10,
                            color: Colors.white,
                            fontWeight: FontWeight.w600,
                          ),
                        ),
                      ),
                    ],
                  ),
                  if (schedule.startTime != null) ...[
                    const SizedBox(height: 4),
                    Text(
                      _formatTimeRange(),
                      style: TextStyle(
                        fontSize: 13,
                        color: Theme.of(context).colorScheme.onSurfaceVariant,
                      ),
                    ),
                  ],
                  if (schedule.description != null) ...[
                    const SizedBox(height: 4),
                    Text(
                      schedule.description!,
                      style: TextStyle(
                        fontSize: 12,
                        color: Theme.of(context).colorScheme.onSurfaceVariant,
                      ),
                      maxLines: 2,
                      overflow: TextOverflow.ellipsis,
                    ),
                  ],
                ],
              ),
            ),
            // 编辑按钮（只在非只读模式出现）
            if (!readOnly)
              IconButton(
                icon: Icon(
                  Icons.edit_outlined,
                  size: 20,
                  color: Theme.of(context).colorScheme.onSurfaceVariant,
                ),
                onPressed: onEdit,
                padding: EdgeInsets.zero,
                constraints: const BoxConstraints(),
              ),
          ],
        ),
      ),
    );
  }

  // Note: Priority-related helpers removed.
  // Color and label are now passed from parent widget via priorityColor/priorityLabel props
}
