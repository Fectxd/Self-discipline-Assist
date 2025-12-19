// 用户记忆数据模型

/// 记忆类型
enum MemoryType {
  preference,   // 偏好（语义记忆）
  habit,        // 习惯（情景记忆）
  fact,         // 事实（语义记忆）
  episode,      // 事件（情景记忆）
}

/// 记忆条目
class MemoryEntry {
  final String id;
  final MemoryType type;
  final String content;      // 记忆内容
  final DateTime createdAt;  // 创建时间
  final DateTime? lastUsed;  // 最后使用时间
  final int useCount;        // 使用次数
  final double importance;   // 重要性（0-1）
  final Map<String, dynamic>? metadata; // 额外元数据

  MemoryEntry({
    required this.id,
    required this.type,
    required this.content,
    required this.createdAt,
    this.lastUsed,
    this.useCount = 0,
    this.importance = 0.5,
    this.metadata,
  });

  /// 从数据库记录创建
  factory MemoryEntry.fromMap(Map<String, dynamic> map) {
    return MemoryEntry(
      id: map['id'] as String,
      type: MemoryType.values.firstWhere(
        (e) => e.toString() == 'MemoryType.${map['type']}',
        orElse: () => MemoryType.fact,
      ),
      content: map['content'] as String,
      createdAt: DateTime.parse(map['created_at'] as String),
      lastUsed: map['last_used'] != null
          ? DateTime.parse(map['last_used'] as String)
          : null,
      useCount: map['use_count'] as int? ?? 0,
      importance: (map['importance'] is num)
          ? (map['importance'] as num).toDouble()
          : 0.5,
      metadata: map['metadata'] != null
          ? Map<String, dynamic>.from(map['metadata'] as Map)
          : null,
    );
  }

  /// 转换为数据库记录
  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'type': type.toString().split('.').last,
      'content': content,
      'created_at': createdAt.toIso8601String(),
      'last_used': lastUsed?.toIso8601String(),
      'use_count': useCount,
      'importance': importance,
      'metadata': metadata,
    };
  }

  /// 复制并更新
  MemoryEntry copyWith({
    DateTime? lastUsed,
    int? useCount,
    double? importance,
    Map<String, dynamic>? metadata,
  }) {
    return MemoryEntry(
      id: id,
      type: type,
      content: content,
      createdAt: createdAt,
      lastUsed: lastUsed ?? this.lastUsed,
      useCount: useCount ?? this.useCount,
      importance: importance ?? this.importance,
      metadata: metadata ?? this.metadata,
    );
  }

  /// 增加使用次数
  MemoryEntry incrementUse() {
    return copyWith(
      lastUsed: DateTime.now(),
      useCount: useCount + 1,
    );
  }
}

/// 记忆摘要（用于注入到 System Prompt）
class MemorySummary {
  final List<String> preferences;  // 用户偏好
  final List<String> habits;       // 用户习惯
  final List<String> facts;        // 重要事实
  final List<String> recentEpisodes; // 最近的重要事件

  MemorySummary({
    this.preferences = const [],
    this.habits = const [],
    this.facts = const [],
    this.recentEpisodes = const [],
  });

  /// 是否为空
  bool get isEmpty =>
      preferences.isEmpty &&
      habits.isEmpty &&
      facts.isEmpty &&
      recentEpisodes.isEmpty;

  /// 转换为文本格式（用于注入 Prompt）
  String toPromptText() {
    if (isEmpty) return '';

    final buffer = StringBuffer('\n\n**关于用户的记忆**：\n');

    if (preferences.isNotEmpty) {
      buffer.writeln('偏好：');
      for (var pref in preferences) {
        buffer.writeln('- $pref');
      }
    }

    if (habits.isNotEmpty) {
      buffer.writeln('习惯模式：');
      for (var habit in habits) {
        buffer.writeln('- $habit');
      }
    }

    if (facts.isNotEmpty) {
      buffer.writeln('重要信息：');
      for (var fact in facts) {
        buffer.writeln('- $fact');
      }
    }

    if (recentEpisodes.isNotEmpty) {
      buffer.writeln('最近的互动：');
      for (var episode in recentEpisodes) {
        buffer.writeln('- $episode');
      }
    }

    return buffer.toString();
  }
}
