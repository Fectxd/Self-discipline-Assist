import 'package:sqflite/sqflite.dart' as sqflite;
import 'package:flutter/foundation.dart';
import '../models/user_memory.dart';
import 'dart:convert';

/// 用户记忆管理服务
class MemoryService extends ChangeNotifier {
  final sqflite.Database _db;
  
  List<MemoryEntry> _allMemories = [];
  MemoryType? _filterType;
  bool _isLoading = false;

  MemoryService(this._db);
  
  // Getters
  List<MemoryEntry> get memories => _allMemories;
  MemoryType? get filterType => _filterType;
  bool get isLoading => _isLoading;
  
  /// 加载记忆列表
  Future<void> loadMemories({MemoryType? filterType}) async {
    _isLoading = true;
    _filterType = filterType;
    notifyListeners();
    
    try {
      final memories = filterType == null
          ? await getAllMemories()
          : await getMemoriesByType(filterType);

      // 按重要性和使用次数排序
      memories.sort((a, b) {
        final importanceCompare = b.importance.compareTo(a.importance);
        if (importanceCompare != 0) return importanceCompare;
        return b.useCount.compareTo(a.useCount);
      });

      _allMemories = memories;
      _isLoading = false;
      notifyListeners();
    } catch (e) {
      _isLoading = false;
      notifyListeners();
      rethrow;
    }
  }

  /// 初始化数据库
  static Future<void> createTables(sqflite.Database db) async {
    await db.execute('''
      CREATE TABLE IF NOT EXISTS user_memories (
        id TEXT PRIMARY KEY,
        type TEXT NOT NULL,
        content TEXT NOT NULL,
        created_at TEXT NOT NULL,
        last_used TEXT,
        use_count INTEGER DEFAULT 0,
        importance REAL DEFAULT 0.5,
        metadata TEXT
      )
    ''');

    // 创建索引以加速查询
    await db.execute('''
      CREATE INDEX IF NOT EXISTS idx_memories_type
      ON user_memories(type)
    ''');

    await db.execute('''
      CREATE INDEX IF NOT EXISTS idx_memories_importance
      ON user_memories(importance DESC)
    ''');
  }

  /// 保存记忆
  Future<void> saveMemory(MemoryEntry memory) async {
    final map = memory.toMap();
    // 将 metadata 转换为 JSON 字符串
    if (map['metadata'] != null) {
      map['metadata'] = jsonEncode(map['metadata']);
    }

    await _db.insert(
      'user_memories',
      map,
      conflictAlgorithm: sqflite.ConflictAlgorithm.replace,
    );
    
    // 刷新列表
    await loadMemories(filterType: _filterType);
  }
  
  /// 删除记忆
  Future<void> deleteMemory(String id) async {
    await _db.delete(
      'user_memories',
      where: 'id = ?',
      whereArgs: [id],
    );
    
    // 刷新列表
    await loadMemories(filterType: _filterType);
  }
  
  /// 清空所有记忆
  Future<void> clearAllMemories() async {
    await _db.delete('user_memories');
    
    // 刷新列表
    await loadMemories(filterType: _filterType);
  }

  /// 批量保存记忆
  Future<void> saveMemories(List<MemoryEntry> memories) async {
    final batch = _db.batch();
    for (var memory in memories) {
      final map = memory.toMap();
      if (map['metadata'] != null) {
        map['metadata'] = jsonEncode(map['metadata']);
      }
      batch.insert(
        'user_memories',
        map,
        conflictAlgorithm: sqflite.ConflictAlgorithm.replace,
      );
    }
    await batch.commit(noResult: true);
  }

  /// 获取所有记忆
  Future<List<MemoryEntry>> getAllMemories() async {
    final List<Map<String, dynamic>> maps = await _db.query('user_memories');
    return _parseMemories(maps);
  }

  /// 按类型获取记忆
  Future<List<MemoryEntry>> getMemoriesByType(MemoryType type) async {
    final List<Map<String, dynamic>> maps = await _db.query(
      'user_memories',
      where: 'type = ?',
      whereArgs: [type.toString().split('.').last],
      orderBy: 'importance DESC, use_count DESC',
    );
    return _parseMemories(maps);
  }

  /// 获取最重要的记忆（用于注入 Prompt）
  Future<MemorySummary> getMemorySummary({
    int maxPreferences = 5,
    int maxHabits = 3,
    int maxFacts = 5,
    int maxEpisodes = 3,
  }) async {
    final preferences = await _getTopMemories(MemoryType.preference, maxPreferences);
    final habits = await _getTopMemories(MemoryType.habit, maxHabits);
    final facts = await _getTopMemories(MemoryType.fact, maxFacts);

    // 获取最近的情景记忆
    final episodes = await _getRecentEpisodes(maxEpisodes);

    return MemorySummary(
      preferences: preferences.map((m) => m.content).toList(),
      habits: habits.map((m) => m.content).toList(),
      facts: facts.map((m) => m.content).toList(),
      recentEpisodes: episodes.map((m) => m.content).toList(),
    );
  }

  /// 获取最重要的记忆
  Future<List<MemoryEntry>> _getTopMemories(MemoryType type, int limit) async {
    final List<Map<String, dynamic>> maps = await _db.query(
      'user_memories',
      where: 'type = ?',
      whereArgs: [type.toString().split('.').last],
      orderBy: 'importance DESC, use_count DESC',
      limit: limit,
    );
    return _parseMemories(maps);
  }

  /// 获取最近的情景记忆
  Future<List<MemoryEntry>> _getRecentEpisodes(int limit) async {
    final List<Map<String, dynamic>> maps = await _db.query(
      'user_memories',
      where: 'type = ?',
      whereArgs: ['episode'],
      orderBy: 'created_at DESC',
      limit: limit,
    );
    return _parseMemories(maps);
  }

  /// 更新记忆的使用记录
  Future<void> markMemoryUsed(String memoryId) async {
    final memory = await getMemoryById(memoryId);
    if (memory != null) {
      final updated = memory.incrementUse();
      await saveMemory(updated);
    }
  }

  /// 根据 ID 获取记忆
  Future<MemoryEntry?> getMemoryById(String id) async {
    final List<Map<String, dynamic>> maps = await _db.query(
      'user_memories',
      where: 'id = ?',
      whereArgs: [id],
      limit: 1,
    );
    if (maps.isEmpty) return null;
    return _parseMemory(maps.first);
  }

  /// 搜索记忆（模糊匹配）
  Future<List<MemoryEntry>> searchMemories(String keyword) async {
    final List<Map<String, dynamic>> maps = await _db.query(
      'user_memories',
      where: 'content LIKE ?',
      whereArgs: ['%$keyword%'],
      orderBy: 'importance DESC, use_count DESC',
    );
    return _parseMemories(maps);
  }

  /// 清理低重要性且少使用的记忆（定期清理）
  Future<void> cleanupOldMemories({
    double minImportance = 0.3,
    int minUseCount = 1,
    int keepDays = 90,
  }) async {
    final cutoffDate = DateTime.now().subtract(Duration(days: keepDays));

    await _db.delete(
      'user_memories',
      where: 'importance < ? AND use_count < ? AND created_at < ?',
      whereArgs: [minImportance, minUseCount, cutoffDate.toIso8601String()],
    );
  }

  /// 解析记忆列表
  List<MemoryEntry> _parseMemories(List<Map<String, dynamic>> maps) {
    return maps.map(_parseMemory).toList();
  }

  /// 解析单个记忆
  MemoryEntry _parseMemory(Map<String, dynamic> map) {
    // 解析 metadata JSON
    if (map['metadata'] != null && map['metadata'] is String) {
      try {
        map['metadata'] = jsonDecode(map['metadata'] as String);
      } catch (e) {
        map['metadata'] = null;
      }
    }
    return MemoryEntry.fromMap(map);
  }

  /// 自动从对话中提取记忆（简单版本）
  /// 这个方法会被 GPT Service 在对话后调用
  Future<void> extractMemoriesFromConversation({
    required String userMessage,
    required String assistantResponse,
    List<String>? detectedPatterns,
  }) async {
    final memories = <MemoryEntry>[];
    final now = DateTime.now();

    // 检测偏好相关的关键词
    if (_containsPreferenceKeywords(userMessage)) {
      memories.add(MemoryEntry(
        id: '${now.millisecondsSinceEpoch}_pref',
        type: MemoryType.preference,
        content: _extractPreference(userMessage),
        createdAt: now,
        importance: 0.7,
      ));
    }

    // 检测习惯模式
    if (detectedPatterns != null && detectedPatterns.isNotEmpty) {
      for (var pattern in detectedPatterns) {
        memories.add(MemoryEntry(
          id: '${now.millisecondsSinceEpoch}_habit_${pattern.hashCode}',
          type: MemoryType.habit,
          content: pattern,
          createdAt: now,
          importance: 0.6,
        ));
      }
    }

    // 保存情景记忆（最近的对话摘要）
    memories.add(MemoryEntry(
      id: '${now.millisecondsSinceEpoch}_episode',
      type: MemoryType.episode,
      content: '用户说: "$userMessage"；助手建议: "${_summarizeResponse(assistantResponse)}"',
      createdAt: now,
      importance: 0.4,
    ));

    if (memories.isNotEmpty) {
      await saveMemories(memories);
    }
  }

  /// 检测是否包含偏好关键词
  bool _containsPreferenceKeywords(String message) {
    final keywords = ['喜欢', '不喜欢', '偏好', '习惯', '总是', '从不', '一般'];
    return keywords.any((k) => message.contains(k));
  }

  /// 提取偏好语句
  String _extractPreference(String message) {
    // 简单实现：按中文句号分割，提取含有偏好关键词的句子
    return message.split('。').firstWhere(
      (s) => _containsPreferenceKeywords(s),
      orElse: () => message,
    ).trim();
  }

  /// 总结响应（简单截取前100字）
  String _summarizeResponse(String response) {
    if (response.length <= 100) return response;
    return '${response.substring(0, 100)}...';
  }
}
