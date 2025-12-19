import 'package:flutter/material.dart';
import '../models/pending_action.dart';

/// 审批卡片列表 - 卷帘式显示（最多显示3个）- 带动画版
class ApprovalCardList extends StatefulWidget {
  final List<PendingAction> actions;
  final Function(PendingAction) onApprove;
  final Function(PendingAction) onReject;

  const ApprovalCardList({
    super.key,
    required this.actions,
    required this.onApprove,
    required this.onReject,
  });

  @override
  State<ApprovalCardList> createState() => _ApprovalCardListState();
}

class _ApprovalCardListState extends State<ApprovalCardList> 
    with SingleTickerProviderStateMixin {
  final Map<String, GlobalKey<_AnimatedItemState>> _itemKeys = {};
  late AnimationController _entranceController;
  late Animation<double> _scaleAnimation;
  late Animation<double> _fadeAnimation;
  late Animation<Offset> _slideAnimation;

  @override
  void initState() {
    super.initState();
    _updateKeys();
    
    // 初始化入场动画控制器
    _entranceController = AnimationController(
      duration: const Duration(milliseconds: 500),
      vsync: this,
    );
    
    // 缩放动画：从0.8到1.0
    _scaleAnimation = Tween<double>(
      begin: 0.85,
      end: 1.0,
    ).animate(CurvedAnimation(
      parent: _entranceController,
      curve: Curves.easeOutBack, // 回弹效果
    ));
    
    // 淡入动画
    _fadeAnimation = Tween<double>(
      begin: 0.0,
      end: 1.0,
    ).animate(CurvedAnimation(
      parent: _entranceController,
      curve: const Interval(0.0, 0.6, curve: Curves.easeOut),
    ));
    
    // 从上方滑入
    _slideAnimation = Tween<Offset>(
      begin: const Offset(0, -0.3),
      end: Offset.zero,
    ).animate(CurvedAnimation(
      parent: _entranceController,
      curve: Curves.easeOutCubic,
    ));
    
    // 启动入场动画
    _entranceController.forward();
  }
  
  @override
  void dispose() {
    _entranceController.dispose();
    super.dispose();
  }

  @override
  void didUpdateWidget(ApprovalCardList oldWidget) {
    super.didUpdateWidget(oldWidget);
    _updateKeys();
  }

  void _updateKeys() {
    for (var action in widget.actions) {
      if (!_itemKeys.containsKey(action.id)) {
        _itemKeys[action.id] = GlobalKey<_AnimatedItemState>();
      }
    }
  }

  Future<void> _handleApprove(PendingAction action) async {
    final key = _itemKeys[action.id];
    if (key?.currentState != null) {
      await key!.currentState!.animateOut(isApprove: true);
    }
    widget.onApprove(action);
  }

  Future<void> _handleReject(PendingAction action) async {
    final key = _itemKeys[action.id];
    if (key?.currentState != null) {
      await key!.currentState!.animateOut(isApprove: false);
    }
    widget.onReject(action);
  }

  @override
  Widget build(BuildContext context) {
    if (widget.actions.isEmpty) return const SizedBox.shrink();

    final isDark = Theme.of(context).brightness == Brightness.dark;
    const int maxVisible = 3;
    final visibleActions = widget.actions.take(maxVisible).toList();
    final remainingCount = widget.actions.length - maxVisible;

    return SlideTransition(
      position: _slideAnimation,
      child: FadeTransition(
        opacity: _fadeAnimation,
        child: ScaleTransition(
          scale: _scaleAnimation,
          child: Container(
            margin: const EdgeInsets.fromLTRB(12, 0, 12, 4),
            decoration: BoxDecoration(
              color: isDark ? Color(0xFF1E293B) : Colors.white, // 深色模式：深蓝灰色
              borderRadius: const BorderRadius.only(
                bottomLeft: Radius.circular(12),
                bottomRight: Radius.circular(12),
              ),
              border: Border(
                left: BorderSide(color: isDark ? Color(0xFF10B981) : Colors.green.shade400, width: 1.5),
                right: BorderSide(color: isDark ? Color(0xFF10B981) : Colors.green.shade400, width: 1.5),
                bottom: BorderSide(color: isDark ? Color(0xFF10B981) : Colors.green.shade400, width: 1.5),
              ),
              boxShadow: [
                BoxShadow(
                  color: Colors.black.withValues(alpha: isDark ? 0.3 : 0.08),
                  blurRadius: 8,
                  offset: const Offset(0, 2),
                ),
              ],
            ),
      child: Stack(
        children: [
          // 渐变背景装饰
          Positioned.fill(
            child: Container(
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                  colors: isDark ? [
                    Color(0xFF10B981).withValues(alpha: 0.1),
                    Color(0xFF3B82F6).withValues(alpha: 0.1),
                  ] : [
                    Colors.green.shade50.withValues(alpha: 0.3),
                    Colors.blue.shade50.withValues(alpha: 0.3),
                  ],
                ),
                borderRadius: const BorderRadius.only(
                  bottomLeft: Radius.circular(11),
                  bottomRight: Radius.circular(11),
                ),
              ),
            ),
          ),
          // 内容区域
          Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              ...visibleActions.asMap().entries.map((entry) {
                final index = entry.key;
                final action = entry.value;
                return Column(
                  children: [
                    Padding(
                      padding: const EdgeInsets.fromLTRB(10, 4, 10, 4),
                      child: _AnimatedItem(
                        key: _itemKeys[action.id],
                        action: action,
                        onApprove: () => _handleApprove(action),
                        onReject: () => _handleReject(action),
                      ),
                    ),
                    if (index < visibleActions.length - 1 || remainingCount > 0)
                      Divider(
                        height: 1,
                        thickness: 0.5,
                        color: isDark ? Color(0xFF475569) : Colors.grey.shade300,
                        indent: 0,
                        endIndent: 0,
                      ),
                  ],
                );
              }),
              if (remainingCount > 0)
                Container(
                  width: double.infinity,
                  padding: const EdgeInsets.symmetric(vertical: 6),
                  decoration: BoxDecoration(
                    color: isDark ? Color(0xFF334155) : Colors.grey.shade100,
                    borderRadius: const BorderRadius.only(
                      bottomLeft: Radius.circular(11),
                      bottomRight: Radius.circular(11),
                    ),
                  ),
                  child: Text(
                    '...  还有 $remainingCount 项',
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      fontSize: 9,
                      color: isDark ? Color(0xFF94A3B8) : Colors.grey.shade600,
                      height: 1.2,
                    ),
                  ),
                ),
            ],
          ),
        ],
      ),
          ),
        ),
      ),
    );
  }
}

/// 可动画的审批项
class _AnimatedItem extends StatefulWidget {
  final PendingAction action;
  final VoidCallback onApprove;
  final VoidCallback onReject;

  const _AnimatedItem({
    super.key,
    required this.action,
    required this.onApprove,
    required this.onReject,
  });

  @override
  State<_AnimatedItem> createState() => _AnimatedItemState();
}

class _AnimatedItemState extends State<_AnimatedItem>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _fadeAnimation;
  late Animation<Offset> _slideAnimation;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      duration: const Duration(milliseconds: 200),
      vsync: this,
    );

    _fadeAnimation = Tween<double>(begin: 1.0, end: 0.0).animate(
      CurvedAnimation(
        parent: _controller,
        curve: const Interval(0.0, 0.6, curve: Curves.easeOut),
      ),
    );

    _slideAnimation = Tween<Offset>(
      begin: Offset.zero,
      end: const Offset(0, -1),
    ).animate(CurvedAnimation(parent: _controller, curve: Curves.easeInOut));
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  Future<void> animateOut({required bool isApprove}) async {
    setState(() {
      _slideAnimation = Tween<Offset>(
        begin: Offset.zero,
        end: isApprove ? const Offset(0, 1) : const Offset(0, -1),
      ).animate(CurvedAnimation(parent: _controller, curve: Curves.easeInOut));
    });
    await _controller.forward();
  }

  @override
  Widget build(BuildContext context) {
    // 解析时间信息
    String timeInfo = '';
    String endTime = '';

    if (widget.action.data.containsKey('time')) {
      timeInfo = widget.action.data['time'] as String? ?? '';
    }
    if (widget.action.data.containsKey('end_time')) {
      endTime = widget.action.data['end_time'] as String? ?? '';
    }

    // 组合时间范围
    String timeRange = '';
    if (timeInfo.isNotEmpty) {
      timeRange = timeInfo;
      if (endTime.isNotEmpty) {
        timeRange += '-$endTime';
      }
    }

    return FadeTransition(
      opacity: _fadeAnimation,
      child: SlideTransition(
        position: _slideAnimation,
        child: Padding(
          padding: const EdgeInsets.symmetric(vertical: 3),
          child: Row(
            children: [
              // 时间范围
              if (timeRange.isNotEmpty)
                SizedBox(
                  width: 90,
                  child: Text(
                    timeRange,
                    style: TextStyle(
                      fontSize: 10,
                      color: Theme.of(context).colorScheme.onSurfaceVariant,
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                ),
              // 描述
              Expanded(
                child: Text(
                  widget.action.description,
                  style: TextStyle(
                    fontSize: 11,
                    color: Theme.of(context).colorScheme.onSurface,
                  ),
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                ),
              ),
              const SizedBox(width: 6),
              // 拒绝按钮
              TextButton(
                onPressed: widget.onReject,
                style: TextButton.styleFrom(
                  padding: const EdgeInsets.symmetric(
                    horizontal: 8,
                    vertical: 2,
                  ),
                  minimumSize: Size.zero,
                  tapTargetSize: MaterialTapTargetSize.shrinkWrap,
                  foregroundColor: Theme.of(context).colorScheme.onSurfaceVariant,
                ),
                child: const Text('拒绝', style: TextStyle(fontSize: 10)),
              ),
              const SizedBox(width: 2),
              // 接受按钮
              ElevatedButton(
                onPressed: widget.onApprove,
                style: ElevatedButton.styleFrom(
                  padding: const EdgeInsets.symmetric(
                    horizontal: 10,
                    vertical: 2,
                  ),
                  minimumSize: Size.zero,
                  tapTargetSize: MaterialTapTargetSize.shrinkWrap,
                  backgroundColor: Color(0xFF10B981), // 深浅模式统一使用鲜明的绿色
                  foregroundColor: Colors.white,
                  elevation: 0,
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(4),
                  ),
                ),
                child: const Text('接受', style: TextStyle(fontSize: 10)),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
