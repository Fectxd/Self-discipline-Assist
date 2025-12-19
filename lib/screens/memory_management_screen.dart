import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../models/user_memory.dart';
import '../services/memory_service.dart';

/// 记忆管理界面
class MemoryManagementScreen extends StatefulWidget {
  const MemoryManagementScreen({super.key});

  @override
  State<MemoryManagementScreen> createState() => _MemoryManagementScreenState();
}

class _MemoryManagementScreenState extends State<MemoryManagementScreen> {
  @override
  void initState() {
    super.initState();
    // 数据由 MemoryService 管理，不需要本地加载
  }

  @override
  Widget build(BuildContext context) {
    return Consumer<MemoryService>(
      builder: (context, memoryService, _) {
        final allMemories = memoryService.memories;
        final isLoading = memoryService.isLoading;

        return Scaffold(
          appBar: AppBar(
            title: const Text('记忆管理'),
            actions: [
              IconButton(
                icon: const Icon(Icons.add),
                onPressed: _showAddMemoryDialog,
                tooltip: '添加记忆',
              ),
              PopupMenuButton<String>(
                icon: const Icon(Icons.more_vert),
                onSelected: (value) {
                  if (value == 'clear_all') {
                    _confirmClearAll();
                  } else if (value == 'cleanup') {
                    _performCleanup();
                  }
                },
                itemBuilder: (context) => [
                  const PopupMenuItem(
                    value: 'cleanup',
                    child: Row(
                      children: [
                        Icon(Icons.cleaning_services, size: 20),
                        SizedBox(width: 8),
                        Text('清理低价值记忆'),
                      ],
                    ),
                  ),
                  const PopupMenuItem(
                    value: 'clear_all',
                    child: Row(
                      children: [
                        Icon(Icons.delete_forever, size: 20, color: Colors.red),
                        SizedBox(width: 8),
                        Text('清空所有记忆', style: TextStyle(color: Colors.red)),
                      ],
                    ),
                  ),
                ],
              ),
            ],
          ),
          body: Column(
            children: [
              // 筛选器
              _buildFilterBar(),

              // 统计卡片
              _buildStatisticsCard(),

              // 记忆列表
              Expanded(
                child: isLoading
                    ? const Center(child: CircularProgressIndicator())
                    : allMemories.isEmpty
                    ? _buildEmptyState()
                    : _buildMemoryList(),
              ),
            ],
          ),
        );
      },
    );
  }

  /// 构建筛选栏
  Widget _buildFilterBar() {
    return Container(
      padding: const EdgeInsets.all(16),
      child: SingleChildScrollView(
        scrollDirection: Axis.horizontal,
        child: Row(
          children: [
            _buildFilterChip('全部', null),
            const SizedBox(width: 8),
            _buildFilterChip('偏好', MemoryType.preference),
            const SizedBox(width: 8),
            _buildFilterChip('习惯', MemoryType.habit),
            const SizedBox(width: 8),
            _buildFilterChip('事实', MemoryType.fact),
            const SizedBox(width: 8),
            _buildFilterChip('情景', MemoryType.episode),
          ],
        ),
      ),
    );
  }

  /// 构建筛选芯片
  Widget _buildFilterChip(String label, MemoryType? type) {
    final memoryService = context.read<MemoryService>();
    final isSelected = memoryService.filterType == type;
    return FilterChip(
      label: Text(label),
      selected: isSelected,
      onSelected: (selected) {
        memoryService.loadMemories(filterType: selected ? type : null);
      },
      selectedColor: Theme.of(context).colorScheme.primaryContainer,
    );
  }

  /// 构建统计卡片
  Widget _buildStatisticsCard() {
    final allMemories = context.read<MemoryService>().memories;
    final stats = <MemoryType, int>{};
    for (var memory in allMemories) {
      stats[memory.type] = (stats[memory.type] ?? 0) + 1;
    }

    return Card(
      margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            _buildStatItem('总计', allMemories.length, Icons.memory),
            _buildStatItem(
              '偏好',
              stats[MemoryType.preference] ?? 0,
              Icons.favorite,
            ),
            _buildStatItem('习惯', stats[MemoryType.habit] ?? 0, Icons.loop),
            _buildStatItem('事实', stats[MemoryType.fact] ?? 0, Icons.info),
            _buildStatItem('情景', stats[MemoryType.episode] ?? 0, Icons.history),
          ],
        ),
      ),
    );
  }

  /// 构建统计项
  Widget _buildStatItem(String label, int count, IconData icon) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Icon(icon, size: 20, color: Theme.of(context).colorScheme.primary),
        const SizedBox(height: 4),
        Text(
          count.toString(),
          style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        Text(label, style: TextStyle(fontSize: 12, color: Colors.grey[600])),
      ],
    );
  }

  /// 构建空状态
  Widget _buildEmptyState() {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(Icons.memory, size: 64, color: Colors.grey[400]),
          const SizedBox(height: 16),
          Text(
            '还没有保存的记忆',
            style: TextStyle(fontSize: 16, color: Colors.grey[600]),
          ),
          const SizedBox(height: 8),
          Text(
            'AI 会在对话中自动学习和保存你的偏好',
            style: TextStyle(fontSize: 14, color: Colors.grey[500]),
          ),
          const SizedBox(height: 24),
          ElevatedButton.icon(
            onPressed: _showAddMemoryDialog,
            icon: const Icon(Icons.add),
            label: const Text('手动添加记忆'),
          ),
        ],
      ),
    );
  }

  /// 构建记忆列表
  Widget _buildMemoryList() {
    final allMemories = context.read<MemoryService>().memories;
    return ListView.builder(
      padding: const EdgeInsets.all(16),
      itemCount: allMemories.length,
      itemBuilder: (context, index) {
        return _buildMemoryCard(allMemories[index]);
      },
    );
  }

  /// 构建记忆卡片
  Widget _buildMemoryCard(MemoryEntry memory) {
    final typeInfo = _getTypeInfo(memory.type);
    final importanceStars = (memory.importance * 5).round();

    return Card(
      margin: const EdgeInsets.only(bottom: 12),
      child: InkWell(
        onTap: () => _showEditMemoryDialog(memory),
        borderRadius: BorderRadius.circular(12),
        child: Padding(
          padding: const EdgeInsets.all(16),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // 标题
              Row(
                children: [
                  Icon(
                    typeInfo['icon'] as IconData,
                    size: 20,
                    color: typeInfo['color'] as Color,
                  ),
                  const SizedBox(width: 8),
                  Text(
                    typeInfo['label'] as String,
                    style: TextStyle(
                      fontSize: 12,
                      color: typeInfo['color'] as Color,
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                  const Spacer(),
                  // 重要性星级
                  Row(
                    children: List.generate(5, (i) {
                      return Icon(
                        i < importanceStars ? Icons.star : Icons.star_border,
                        size: 14,
                        color: Colors.amber,
                      );
                    }),
                  ),
                ],
              ),
              const SizedBox(height: 12),

              // 内容
              Text(memory.content, style: const TextStyle(fontSize: 15)),
              const SizedBox(height: 12),

              // 元信息
              Row(
                children: [
                  Icon(Icons.access_time, size: 14, color: Colors.grey[600]),
                  const SizedBox(width: 4),
                  Text(
                    _formatDate(memory.createdAt),
                    style: TextStyle(fontSize: 12, color: Colors.grey[600]),
                  ),
                  const SizedBox(width: 16),
                  Icon(Icons.visibility, size: 14, color: Colors.grey[600]),
                  const SizedBox(width: 4),
                  Text(
                    '使用 ${memory.useCount} 次',
                    style: TextStyle(fontSize: 12, color: Colors.grey[600]),
                  ),
                  const Spacer(),
                  IconButton(
                    icon: const Icon(Icons.delete_outline, size: 20),
                    onPressed: () => _confirmDelete(memory),
                    color: Colors.red,
                    tooltip: '删除',
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }

  /// 获取类型信息
  Map<String, dynamic> _getTypeInfo(MemoryType type) {
    switch (type) {
      case MemoryType.preference:
        return {'label': '偏好', 'icon': Icons.favorite, 'color': Colors.pink};
      case MemoryType.habit:
        return {'label': '习惯', 'icon': Icons.loop, 'color': Colors.blue};
      case MemoryType.fact:
        return {'label': '事实', 'icon': Icons.info, 'color': Colors.green};
      case MemoryType.episode:
        return {'label': '情景', 'icon': Icons.history, 'color': Colors.orange};
    }
  }

  /// 格式化日期
  String _formatDate(DateTime date) {
    final now = DateTime.now();
    final diff = now.difference(date);

    if (diff.inDays == 0) {
      return '今天';
    } else if (diff.inDays == 1) {
      return '昨天';
    } else if (diff.inDays < 7) {
      return '${diff.inDays} 天前';
    } else if (diff.inDays < 30) {
      return '${(diff.inDays / 7).floor()} 周前';
    } else {
      return '${date.month}月${date.day}日';
    }
  }

  /// 显示添加记忆对话框
  void _showAddMemoryDialog() {
    final memoryService = context.read<MemoryService>();
    showDialog(
      context: context,
      builder: (context) => _MemoryEditDialog(
        memoryService: memoryService,
        onSaved: () {}, // 不需要手动刷新，MemoryService 会自动通知
      ),
    );
  }

  /// 显示编辑记忆对话框
  void _showEditMemoryDialog(MemoryEntry memory) {
    final memoryService = context.read<MemoryService>();
    showDialog(
      context: context,
      builder: (context) => _MemoryEditDialog(
        memoryService: memoryService,
        memory: memory,
        onSaved: () {}, // 不需要手动刷新
      ),
    );
  }

  /// 确认删除
  void _confirmDelete(MemoryEntry memory) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('删除记忆'),
        content: Text('确定要删除这条记忆吗？\n\n"${memory.content}"'),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('取消'),
          ),
          TextButton(
            onPressed: () async {
              final navigator = Navigator.of(context);
              final messenger = ScaffoldMessenger.of(context);
              final memoryService = context.read<MemoryService>();
              navigator.pop();
              await memoryService.deleteMemory(memory.id);
              // MemoryService 会自动刷新
              if (mounted) {
                messenger.showSnackBar(const SnackBar(content: Text('已删除')));
              }
            },
            child: const Text('删除', style: TextStyle(color: Colors.red)),
          ),
        ],
      ),
    );
  }

  /// 确认清空所有记忆
  void _confirmClearAll() {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('清空所有记忆'),
        content: const Text('⚠️ 此操作将删除所有保存的记忆，包括偏好、习惯、事实等。此操作不可撤销。'),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('取消'),
          ),
          TextButton(
            onPressed: () async {
              final navigator = Navigator.of(context);
              final messenger = ScaffoldMessenger.of(context);
              final memoryService = context.read<MemoryService>();
              navigator.pop();
              await memoryService.clearAllMemories();
              // MemoryService 会自动刷新
              if (mounted) {
                messenger.showSnackBar(
                  const SnackBar(content: Text('已清空所有记忆')),
                );
              }
            },
            child: const Text('确定清空', style: TextStyle(color: Colors.red)),
          ),
        ],
      ),
    );
  }

  /// 执行清理
  void _performCleanup() async {
    final messenger = ScaffoldMessenger.of(context);
    final result = await showDialog<bool>(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('清理低价值记忆'),
        content: const Text(
          '将删除满足以下条件的记忆：\n'
          '— 重要性 < 0.3\n'
          '— 使用次数 < 1\n'
          '— 创建时间 > 90天\n\n'
          '这可以帮助保持记忆库的高质量。',
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context, false),
            child: const Text('取消'),
          ),
          TextButton(
            onPressed: () => Navigator.pop(context, true),
            child: const Text('开始清理'),
          ),
        ],
      ),
    );

    if (result == true && mounted) {
      final memoryService = context.read<MemoryService>();
      await memoryService.cleanupOldMemories(
        minImportance: 0.3,
        minUseCount: 1,
        keepDays: 90,
      );
      // MemoryService 会自动刷新
      if (mounted) {
        messenger.showSnackBar(const SnackBar(content: Text('清理完成')));
      }
    }
  }
}

/// 记忆编辑对话框
class _MemoryEditDialog extends StatefulWidget {
  final MemoryService memoryService;
  final MemoryEntry? memory; // null 表示新建
  final VoidCallback onSaved;

  const _MemoryEditDialog({
    required this.memoryService,
    required this.onSaved,
    this.memory,
  });

  @override
  State<_MemoryEditDialog> createState() => _MemoryEditDialogState();
}

class _MemoryEditDialogState extends State<_MemoryEditDialog> {
  late TextEditingController _contentController;
  late MemoryType _selectedType;
  late double _importance;

  @override
  void initState() {
    super.initState();
    _contentController = TextEditingController(
      text: widget.memory?.content ?? '',
    );
    _selectedType = widget.memory?.type ?? MemoryType.preference;
    _importance = widget.memory?.importance ?? 0.5;
  }

  @override
  void dispose() {
    _contentController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: Text(widget.memory == null ? '添加记忆' : '编辑记忆'),
      content: SingleChildScrollView(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // 内容输入
            TextField(
              controller: _contentController,
              decoration: const InputDecoration(
                labelText: '记忆内容',
                hintText: '例如：喜欢早上运动',
                border: OutlineInputBorder(),
              ),
              maxLines: 3,
              autofocus: widget.memory == null,
            ),
            const SizedBox(height: 16),

            // 类型选择
            const Text('记忆类型', style: TextStyle(fontWeight: FontWeight.w500)),
            const SizedBox(height: 8),
            Wrap(
              spacing: 8,
              children: [
                _buildTypeChip(MemoryType.preference, '偏好', Icons.favorite),
                _buildTypeChip(MemoryType.habit, '习惯', Icons.loop),
                _buildTypeChip(MemoryType.fact, '事实', Icons.info),
                _buildTypeChip(MemoryType.episode, '情景', Icons.history),
              ],
            ),
            const SizedBox(height: 16),

            // 重要性滑块
            const Text('重要性', style: TextStyle(fontWeight: FontWeight.w500)),
            Row(
              children: [
                Expanded(
                  child: Slider(
                    value: _importance,
                    min: 0.1,
                    max: 1.0,
                    divisions: 9,
                    label: (_importance * 10).toInt().toString(),
                    onChanged: (value) {
                      setState(() => _importance = value);
                    },
                  ),
                ),
                SizedBox(
                  width: 50,
                  child: Text(
                    '${(_importance * 100).toInt()}%',
                    textAlign: TextAlign.right,
                    style: const TextStyle(fontWeight: FontWeight.bold),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
      actions: [
        TextButton(
          onPressed: () => Navigator.pop(context),
          child: const Text('取消'),
        ),
        ElevatedButton(onPressed: _save, child: const Text('保存')),
      ],
    );
  }

  Widget _buildTypeChip(MemoryType type, String label, IconData icon) {
    final isSelected = _selectedType == type;
    return ChoiceChip(
      label: Row(
        mainAxisSize: MainAxisSize.min,
        children: [Icon(icon, size: 16), const SizedBox(width: 4), Text(label)],
      ),
      selected: isSelected,
      onSelected: (selected) {
        if (selected) {
          setState(() => _selectedType = type);
        }
      },
    );
  }

  void _save() async {
    final content = _contentController.text.trim();
    if (content.isEmpty) {
      ScaffoldMessenger.of(
        context,
      ).showSnackBar(const SnackBar(content: Text('请输入记忆内容')));
      return;
    }

    final memory = MemoryEntry(
      id:
          widget.memory?.id ??
          '${DateTime.now().millisecondsSinceEpoch}_manual',
      type: _selectedType,
      content: content,
      createdAt: widget.memory?.createdAt ?? DateTime.now(),
      importance: _importance,
      useCount: widget.memory?.useCount ?? 0,
      lastUsed: widget.memory?.lastUsed,
    );

    await widget.memoryService.saveMemory(memory);
    widget.onSaved();
    if (mounted) {
      Navigator.pop(context);
      ScaffoldMessenger.of(
        context,
      ).showSnackBar(const SnackBar(content: Text('已保存')));
    }
  }
}
