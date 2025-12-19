import 'package:flutter/material.dart';

/// 日历信息小部件卡片
/// 注意：不显示日历本身，只显示日历相关的额外信息（农历、宜忌等）
class CalendarWidgetCard extends StatefulWidget {
  final Map<String, dynamic>? calendarData;
  final VoidCallback? onRefresh;
  final bool isLoading;

  const CalendarWidgetCard({
    super.key,
    this.calendarData,
    this.onRefresh,
    this.isLoading = false,
  });

  @override
  State<CalendarWidgetCard> createState() => _CalendarWidgetCardState();
}

class _CalendarWidgetCardState extends State<CalendarWidgetCard>
    with SingleTickerProviderStateMixin {
  late AnimationController _rotationController;

  @override
  void initState() {
    super.initState();
    _rotationController = AnimationController(
      duration: const Duration(milliseconds: 1000),
      vsync: this,
    );
  }

  @override
  void didUpdateWidget(CalendarWidgetCard oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (widget.isLoading && !oldWidget.isLoading) {
      _rotationController.repeat();
    } else if (!widget.isLoading && oldWidget.isLoading) {
      _rotationController.stop();
      _rotationController.reset();
    }
  }

  @override
  void dispose() {
    _rotationController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    if (widget.calendarData == null) {
      return Card(
        margin: const EdgeInsets.symmetric(vertical: 4),
        child: Container(
          padding: const EdgeInsets.all(16),
          height: 120,
          child: const Center(child: CircularProgressIndicator()),
        ),
      );
    }

    final lunar = widget.calendarData!['lunar'] as Map<String, dynamic>?;
    final ganZhi = widget.calendarData!['ganZhi'] as Map<String, dynamic>?;
    final zodiac = widget.calendarData!['zodiac'];
    final constellation = widget.calendarData!['constellation'];
    final suitable = widget.calendarData!['suitable'] as List?;
    final unsuitable = widget.calendarData!['unsuitable'] as List?;
    final dailyQuote =
        widget.calendarData!['dailyQuote'] as Map<String, dynamic>?;
    final progressBar =
        widget.calendarData!['progressBar'] as Map<String, dynamic>?;

    // 获取当前日期
    final now = DateTime.now();
    final dateStr = '${now.month}月${now.day}号';

    return Card(
      margin: const EdgeInsets.symmetric(vertical: 4),
      elevation: 2,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // 标题栏
          Padding(
            padding: const EdgeInsets.only(
              left: 16,
              right: 4,
              top: 8,
              bottom: 8,
            ),
            child: Row(
              children: [
                const Icon(Icons.calendar_today, color: Colors.blue, size: 24),
                const SizedBox(width: 16),
                Text(
                  '日历信息 · $dateStr',
                  style: const TextStyle(
                    fontSize: 16,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                const Spacer(),
                if (widget.onRefresh != null)
                  RotationTransition(
                    turns: _rotationController,
                    child: IconButton(
                      icon: const Icon(Icons.refresh, size: 20),
                      onPressed: widget.isLoading ? null : widget.onRefresh,
                      tooltip: '刷新',
                      padding: const EdgeInsets.all(8),
                      constraints: const BoxConstraints(),
                    ),
                  ),
              ],
            ),
          ),
          const Divider(height: 1),

          Padding(
            padding: const EdgeInsets.all(16),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                // 农历和干支信息
                if (lunar != null)
                  Wrap(
                    spacing: 8,
                    runSpacing: 4,
                    children: [
                      _buildInfoTag(
                        '农历',
                        '${lunar['month']}月${lunar['day']} (${lunar['alias']})',
                        Colors.purple,
                      ),
                      if (ganZhi != null)
                        _buildInfoTag('干支', '${ganZhi['year']}年', Colors.brown),
                      if (zodiac != null)
                        _buildInfoTag('生肖', zodiac, Colors.orange),
                      if (constellation != null)
                        _buildInfoTag('星座', constellation, Colors.pink),
                    ],
                  ),

                const SizedBox(height: 12),

                // 宜忌
                if (suitable != null && suitable.isNotEmpty)
                  Padding(
                    padding: const EdgeInsets.only(bottom: 6),
                    child: Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Container(
                          padding: const EdgeInsets.symmetric(
                            horizontal: 8,
                            vertical: 2,
                          ),
                          decoration: BoxDecoration(
                            color: Colors.green.shade100,
                            borderRadius: BorderRadius.circular(4),
                          ),
                          child: const Text(
                            '宜',
                            style: TextStyle(
                              color: Colors.green,
                              fontSize: 12,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                        ),
                        const SizedBox(width: 8),
                        Expanded(
                          child: Text(
                            suitable.take(5).join('、'),
                            style: const TextStyle(fontSize: 13),
                            maxLines: 2,
                            overflow: TextOverflow.ellipsis,
                          ),
                        ),
                      ],
                    ),
                  ),

                if (unsuitable != null && unsuitable.isNotEmpty)
                  Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Container(
                        padding: const EdgeInsets.symmetric(
                          horizontal: 8,
                          vertical: 2,
                        ),
                        decoration: BoxDecoration(
                          color: Colors.red.shade100,
                          borderRadius: BorderRadius.circular(4),
                        ),
                        child: const Text(
                          '忌',
                          style: TextStyle(
                            color: Colors.red,
                            fontSize: 12,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                      ),
                      const SizedBox(width: 8),
                      Expanded(
                        child: Text(
                          unsuitable.take(5).join('、'),
                          style: const TextStyle(fontSize: 13),
                          maxLines: 2,
                          overflow: TextOverflow.ellipsis,
                        ),
                      ),
                    ],
                  ),

                // 每日格言
                if (dailyQuote != null) ...[
                  const SizedBox(height: 12),
                  Container(
                    padding: const EdgeInsets.all(12),
                    decoration: BoxDecoration(
                      color: Theme.of(context).colorScheme.secondaryContainer,
                      borderRadius: BorderRadius.circular(8),
                      border: Border(
                        left: BorderSide(
                          color: Theme.of(context).colorScheme.secondary,
                          width: 3,
                        ),
                      ),
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          dailyQuote['text'] ?? '',
                          style: TextStyle(
                            fontSize: 13,
                            fontStyle: FontStyle.italic,
                            color: Theme.of(
                              context,
                            ).colorScheme.onSecondaryContainer,
                          ),
                        ),
                        if (dailyQuote['author'] != null) ...[
                          const SizedBox(height: 4),
                          Align(
                            alignment: Alignment.centerRight,
                            child: Text(
                              '—— ${dailyQuote['author']}',
                              style: TextStyle(
                                fontSize: 11,
                                color: Theme.of(context)
                                    .colorScheme
                                    .onSecondaryContainer
                                    .withOpacity(0.7),
                              ),
                            ),
                          ),
                        ],
                      ],
                    ),
                  ),
                ],

                // 年度进度
                if (progressBar != null) ...[
                  const SizedBox(height: 12),
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text(
                            '年度进度',
                            style: TextStyle(
                              fontSize: 12,
                              color: Colors.grey[700],
                            ),
                          ),
                          Text(
                            '${(progressBar['progress'] as num).toStringAsFixed(1)}% (第${progressBar['dayOfYear']}天)',
                            style: TextStyle(
                              fontSize: 12,
                              color: Colors.grey[700],
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 4),
                      ClipRRect(
                        borderRadius: BorderRadius.circular(4),
                        child: LinearProgressIndicator(
                          value: (progressBar['progress'] as num) / 100,
                          backgroundColor: Colors.grey.shade200,
                          valueColor: AlwaysStoppedAnimation<Color>(
                            Colors.blue.shade400,
                          ),
                          minHeight: 6,
                        ),
                      ),
                    ],
                  ),
                ],
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildInfoTag(String label, String value, Color color) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
      decoration: BoxDecoration(
        color: color.withOpacity(0.1),
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: color.withOpacity(0.3)),
      ),
      child: Text(
        '$label: $value',
        style: TextStyle(
          fontSize: 12,
          color: Color.lerp(color, Colors.black, 0.3)!,
        ),
      ),
    );
  }
}
