import 'package:flutter/material.dart';
import '../models/pending_action.dart';

class ApprovalCard extends StatelessWidget {
  final PendingAction action;
  final VoidCallback onApprove;
  final VoidCallback onReject;

  const ApprovalCard({super.key, required this.action, required this.onApprove, required this.onReject});

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    IconData icon;
    Color color;

    switch (action.type) {
      case ActionType.create:
        icon = Icons.add_circle_outline;
        color = isDark ? Color(0xFF10B981) : Colors.green; // emerald-500
        break;
      case ActionType.modify:
        icon = Icons.edit_outlined;
        color = isDark ? Color(0xFFF97316) : Colors.orange; // orange-500
        break;
      case ActionType.modifyOnce:
        icon = Icons.schedule_outlined;
        color = isDark ? Color(0xFFA855F7) : Colors.purple; // purple-500
        break;
      case ActionType.delete:
        icon = Icons.delete_outline;
        color = isDark ? Color(0xFFEF4444) : Colors.red; // red-500
        break;
      case ActionType.deleteAll:
        icon = Icons.delete_sweep;
        color = isDark ? Color(0xFFDC2626) : Colors.red.shade900; // red-600
        break;
      case ActionType.toggleComplete:
        icon = Icons.check_circle_outline;
        color = isDark ? Color(0xFF3B82F6) : Colors.blue; // blue-500
        break;
    }

    return Container(
      margin: const EdgeInsets.only(bottom: 4),
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
      decoration: BoxDecoration(
        color: isDark 
            ? color.withAlpha((0.15 * 255).round()) // 深色模式：半透明彩色背景
            : Colors.transparent,
        borderRadius: BorderRadius.circular(6),
        border: Border.all(
          color: color.withAlpha((isDark ? 0.5 : 0.4 * 255).round()), 
          width: 1.5,
        ),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(icon, color: color, size: 15),
          const SizedBox(width: 8),
          Flexible(
            child: Text(
              action.description,
              style: TextStyle(
                fontSize: 11, 
                fontWeight: FontWeight.w500, 
                color: isDark 
                    ? Theme.of(context).colorScheme.onSurface
                    : Colors.grey.shade900,
              ),
              overflow: TextOverflow.ellipsis,
              maxLines: 1,
            ),
          ),
          const SizedBox(width: 6),
          TextButton(
            onPressed: onReject,
            style: TextButton.styleFrom(
              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
              minimumSize: const Size(0, 0),
              tapTargetSize: MaterialTapTargetSize.shrinkWrap,
              foregroundColor: isDark 
                  ? Theme.of(context).colorScheme.onSurfaceVariant
                  : Colors.grey.shade600,
            ),
            child: const Text('拒绝', style: TextStyle(fontSize: 10)),
          ),
          const SizedBox(width: 2),
          ElevatedButton(
            onPressed: onApprove,
            style: ElevatedButton.styleFrom(
              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 2),
              minimumSize: const Size(0, 0),
              tapTargetSize: MaterialTapTargetSize.shrinkWrap,
              backgroundColor: color,
              foregroundColor: Colors.white,
              elevation: 0,
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(4)),
            ),
            child: const Text('确认', style: TextStyle(fontSize: 10)),
          ),
        ],
      ),
    );
  }
}
