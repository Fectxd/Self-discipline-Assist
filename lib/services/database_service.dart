import 'package:sqflite/sqflite.dart' as sqflite;
import 'db_initializer.dart';
import 'package:path/path.dart';
import 'dart:io';
import 'package:path_provider/path_provider.dart';
import 'package:flutter/foundation.dart';
import '../models/schedule.dart';
import '../models/schedule_rule.dart';
import '../models/schedule_override.dart';
import '../models/day_type.dart';
import '../models/holiday.dart';
import 'memory_service.dart';

/// 数据库服务
class DatabaseService {
  /// If true, when opening the on-disk DB fails, service will fall back to
  /// an in-memory database to avoid crashing the app. This should be used
  /// only as a temporary safety measure - for production we recommend
  /// fixing the underlying disk DB issue instead of relying on in-memory.
  static bool enableMemoryFallback = true;

  /// When memory fallback is used, subsequent fallbacks within this window
  /// will be allowed but recorded; this avoids repeated fallback spam.
  static Duration memoryFallbackCooldown = Duration(hours: 1);
  static DateTime? _lastMemoryFallbackTime;
  static sqflite.Database? _database;
  
  /// 获取数据库实例
  Future<sqflite.Database> get database async {
    if (_database != null) return _database!;
    _database = await _initDatabase();
    return _database!;
  }

  /// 初始化数据库
  Future<sqflite.Database> _initDatabase() async {
    // Initialize the platform-appropriate database factory (desktop -> FFI).
    await initDatabaseFactoryIfNeeded();

    // 获取数据库路径
    final dbPath = await getDatabasesPath();
    final path = join(dbPath, 'self_discipline.db');
    sqflite.Database db;
    try {
      db = await sqflite.openDatabase(
      path,
      version: 1,
      onCreate: _onCreate,
    );
    } catch (e) {
      // 如果打开磁盘数据库失败（例如平台不一致或权限问题）
      debugPrint('打开数据库失败($path): $e');

      if (!DatabaseService.enableMemoryFallback) {
        debugPrint('内存回退已禁用，抛出异常以便上层处理');
        rethrow;
      }

      // 避免频繁回退导致噪音 - 仅在冷却期之后记录一次详细警告
      final now = DateTime.now();
      if (_lastMemoryFallbackTime == null || now.difference(_lastMemoryFallbackTime!) > DatabaseService.memoryFallbackCooldown) {
        debugPrint('回退到内存数据库以避免启动崩溃（仅作为临时应急方案，请修复磁盘数据库问题）');
        _lastMemoryFallbackTime = now;
      }

      db = await sqflite.openDatabase(
        ':memory:',
        version: 1,
        onCreate: _onCreate,
      );
    }
    
    // 确保所有必需的表都存在
    await _ensureTablesExist(db);
    
    return db;
  }
  
  /// 确保所有必需的表都存在
  Future<void> _ensureTablesExist(sqflite.Database db) async {
    final tables = await db.rawQuery(
      "SELECT name FROM sqlite_master WHERE type='table' AND name='schedule_overrides'"
    );

    if (tables.isEmpty) {
      debugPrint('检测到缺失的表，正在创建...');

      // 创建规则表
      await db.execute('''
        CREATE TABLE IF NOT EXISTS schedule_rules (
          id TEXT PRIMARY KEY,
          title TEXT NOT NULL,
          description TEXT,
          time TEXT,
          end_time TEXT,
          condition TEXT NOT NULL,
          created_at TEXT NOT NULL,
          updated_at TEXT NOT NULL,
          is_enabled INTEGER NOT NULL DEFAULT 1
        )
      ''');

      // 创建覆盖表
      await db.execute('''
        CREATE TABLE IF NOT EXISTS schedule_overrides (
          id TEXT PRIMARY KEY,
          start_date TEXT NOT NULL,
          end_date TEXT NOT NULL,
          rule_id TEXT,
          type TEXT NOT NULL,
          new_time TEXT,
          new_title TEXT,
          new_description TEXT,
          new_end_time TEXT,
          metadata TEXT,
          created_at TEXT NOT NULL
        )
      ''');

      await db.execute('CREATE INDEX IF NOT EXISTS idx_overrides_start_date ON schedule_overrides(start_date)');
      await db.execute('CREATE INDEX IF NOT EXISTS idx_overrides_rule ON schedule_overrides(rule_id)');

      debugPrint('表创建完成');
    }

    // 创建记忆表（如果不存在）
    await MemoryService.createTables(db);
  }



  /// 创建数据库表
  Future<void> _onCreate(sqflite.Database db, int version) async {
    // 创建日程表（手动创建的日程）
    await db.execute('''
      CREATE TABLE schedules (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT,
        date TEXT NOT NULL,
        start_time TEXT,
        end_time TEXT,
        is_completed INTEGER NOT NULL DEFAULT 0,
        source_template_id TEXT,
        allow_override INTEGER NOT NULL DEFAULT 1,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL
      )
    ''');

    // 创建日期覆盖表（用户手动设置的工作日/休息日）
    await db.execute('''
      CREATE TABLE day_overrides (
        id TEXT PRIMARY KEY,
        date TEXT NOT NULL,
        day_type TEXT NOT NULL,
        note TEXT,
        created_at TEXT NOT NULL
      )
    ''');

    // 创建节假日缓存表
    await db.execute('''
      CREATE TABLE holidays (
        date TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        is_workday INTEGER NOT NULL,
        wage TEXT,
        rest TEXT,
        after INTEGER,
        target TEXT
      )
    ''');

    // 创建规则表
    await db.execute('''
      CREATE TABLE schedule_rules (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT,
        time TEXT,
        end_time TEXT,
        condition TEXT NOT NULL,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        is_enabled INTEGER NOT NULL DEFAULT 1
      )
    ''');

    // 创建覆盖表
    await db.execute('''
      CREATE TABLE schedule_overrides (
        id TEXT PRIMARY KEY,
        start_date TEXT NOT NULL,
        end_date TEXT,
        rule_id TEXT,
        type TEXT NOT NULL,
        new_time TEXT,
        new_title TEXT,
        new_description TEXT,
        new_end_time TEXT,
        metadata TEXT,
        created_at TEXT NOT NULL
      )
    ''');

    // 创建索引
    await db.execute('CREATE INDEX idx_schedules_date ON schedules(date)');
    await db.execute('CREATE INDEX idx_day_overrides_date ON day_overrides(date)');
    await db.execute('CREATE INDEX idx_overrides_start_date ON schedule_overrides(start_date)');
    await db.execute('CREATE INDEX idx_overrides_rule ON schedule_overrides(rule_id)');
  }

  /// 获取数据库路径
  Future<String> getDatabasesPath() async {
    // Use path_provider to return a platform-appropriate application support directory
    // and store DB files under a 'databases' subfolder. This works on mobile, desktop
    // and makes the method safe for Android/iOS which previously raised UnsupportedError.
    if (kIsWeb) throw UnsupportedError('Web platform not supported for persistent DB');

    final dir = await getApplicationSupportDirectory();
    final dbDir = join(dir.path, 'databases');
    final d = Directory(dbDir);
    if (!await d.exists()) {
      await d.create(recursive: true);
    }
    return dbDir;
  }

  // ==================== 日程相关操作 ====================

  /// 检查指定日期是否为节假日
  Future<bool> _isHoliday(DateTime date) async {
    final db = await database;
    final dateStr = DateTime(date.year, date.month, date.day).toIso8601String().split('T')[0];
    
    final result = await db.query(
      'holidays',
      where: 'date LIKE ?',
      whereArgs: ['$dateStr%'],
      limit: 1,
    );
    
    return result.isNotEmpty;
  }

  /// 插入日程
  Future<void> insertSchedule(Schedule schedule) async {
    final db = await database;
    await db.insert('schedules', schedule.toMap());
  }

  /// 更新日程
  Future<void> updateSchedule(Schedule schedule) async {
    final db = await database;
    await db.update(
      'schedules',
      schedule.toMap(),
      where: 'id = ?',
      whereArgs: [schedule.id],
    );
  }

  /// 删除日程
  Future<void> deleteSchedule(String id) async {
    final db = await database;
    await db.delete(
      'schedules',
      where: 'id = ?',
      whereArgs: [id],
    );
  }

  /// 获取指定日期的日程列表（根据规则动态生成，应用覆盖）
  Future<List<Schedule>> getSchedulesByDate(DateTime date) async {
    final db = await database;
    final targetDate = DateTime(date.year, date.month, date.day);
    final dateStr = targetDate.toIso8601String().split('T')[0];
    
    // 1. 获取该日期的所有覆盖
    // complete 类型使用精确日期匹配（单日），其他类型使用日期范围查询
    final List<Map<String, dynamic>> rangeOverrideMaps = await db.query(
      'schedule_overrides',
      where: 'start_date <= ? AND end_date >= ? AND type != ?',
      whereArgs: [dateStr, dateStr, OverrideType.complete.name],
    );
    
    final List<Map<String, dynamic>> completeOverrideMaps = await db.query(
      'schedule_overrides',
      where: 'start_date = ? AND type = ?',
      whereArgs: [dateStr, OverrideType.complete.name],
    );
    
    final overrideMaps = [...rangeOverrideMaps, ...completeOverrideMaps];
    
    final overrides = overrideMaps.map((m) => ScheduleOverride.fromMap(m)).toList();
    final skippedRuleIds = overrides
        .where((o) => o.type == OverrideType.skip)
        .map((o) => o.ruleId)
        .toSet();
    
    // 2. 获取所有启用的规则
    final List<Map<String, dynamic>> ruleMaps = await db.query(
      'schedule_rules',
      where: 'is_enabled = ?',
      whereArgs: [1],
    );
    
    // 3. 判断该日期是工作日、休息日、节假日
    final isWeekend = targetDate.weekday >= 6;
    final isHoliday = await _isHoliday(targetDate);
    final isWorkday = !isWeekend && !isHoliday;
    
    // 4. 筛选适用的规则并按优先级排序
    final Map<String, ScheduleRule> rulesByTitle = {};
    
    for (var ruleMap in ruleMaps) {
      final rule = ScheduleRule.fromMap(ruleMap);
      
      // 跳过被覆盖删除的规则
      if (skippedRuleIds.contains(rule.id)) continue;
      
      if (!rule.appliesTo(targetDate, isWorkday: isWorkday, isHoliday: isHoliday)) continue;
      
      // 使用 title+time 作为唯一标识
      final key = '${rule.title}_${rule.time}';
      final existing = rulesByTitle[key];

      // 简化逻辑：后添加的覆盖先添加
      if (existing == null) {
        rulesByTitle[key] = rule;
      }
    }
    
    // 5. 应用修改覆盖(modifyTime 和 modify 类型)
    final modifyOverrides = overrides.where((o) => o.type == OverrideType.modifyTime || o.type == OverrideType.modify);
    for (var override in modifyOverrides) {
      if (override.ruleId != null) {
        // 找到对应的规则并修改
        for (var entry in rulesByTitle.entries) {
          if (entry.value.id == override.ruleId) {
            // 创建修改后的规则副本
            rulesByTitle[entry.key] = ScheduleRule(
              id: entry.value.id,
              title: override.newTitle ?? entry.value.title,
              description: override.newDescription ?? entry.value.description,
              time: override.newTime ?? entry.value.time,
              endTime: override.newEndTime ?? entry.value.endTime,
              condition: RuleCondition.specificDate(targetDate),
              createdAt: entry.value.createdAt,
            );
          }
        }
      }
    }
    
    // 6. 检查完成状态覆盖
    final completeOverrides = overrides
        .where((o) => o.type == OverrideType.complete)
        .toList();
    final completedRuleIds = completeOverrides
        .map((o) => o.ruleId)
        .where((id) => id != null)
        .toSet();

    // 7. 将规则转换为日程
    final List<Schedule> schedules = [];
    for (var rule in rulesByTitle.values) {
      DateTime? startTime;
      if (rule.time != null) {
        final parts = rule.time!.split(':');
        if (parts.length == 2) {
          startTime = DateTime(
            targetDate.year,
            targetDate.month,
            targetDate.day,
            int.parse(parts[0]),
            int.parse(parts[1]),
          );
        }
      }

      // 解析结束时间
      DateTime? endTime;
      if (rule.endTime != null) {
        final parts = rule.endTime!.split(':');
        if (parts.length == 2) {
          endTime = DateTime(
            targetDate.year,
            targetDate.month,
            targetDate.day,
            int.parse(parts[0]),
            int.parse(parts[1]),
          );
          
          // 如果结束时间小于开始时间，说明跨日，结束时间应该是次日
          if (startTime != null && endTime.isBefore(startTime)) {
            endTime = endTime.add(const Duration(days: 1));
          }
        }
      }

      // 检查该规则在这一天是否已完成
      final isCompleted = completedRuleIds.contains(rule.id);

      schedules.add(Schedule(
        id: '${rule.id}_${targetDate.toIso8601String()}',
        title: rule.title,
        description: rule.description,
        date: targetDate,
        startTime: startTime,
        endTime: endTime,
        isCompleted: isCompleted,
        sourceTemplateId: rule.id,
      ));
    }
    
    // 8. 按时间排序
    schedules.sort((a, b) {
      // 1. 无开始时间的排最后
      if (a.startTime == null && b.startTime == null) return 0;
      if (a.startTime == null) return 1;
      if (b.startTime == null) return -1;
      
      // 2. 按开始时间排序
      final startCompare = a.startTime!.compareTo(b.startTime!);
      if (startCompare != 0) return startCompare;
      
      // 3. 开始时间相同：瞬时任务（无结束时间）排前面
      if (a.endTime == null && b.endTime == null) return 0;
      if (a.endTime == null) return -1;
      if (b.endTime == null) return 1;
      
      // 4. 都有结束时间：按结束时间排序
      return a.endTime!.compareTo(b.endTime!);
    });
    
    return schedules;
  }

  /// 获取所有日程
  Future<List<Schedule>> getAllSchedules() async {
    final db = await database;
    final List<Map<String, dynamic>> maps = await db.query(
      'schedules',
      orderBy: 'date DESC, start_time ASC',
    );

    return List.generate(maps.length, (i) => Schedule.fromMap(maps[i]));
  }

  // ==================== 日期覆盖相关操作 ====================

  /// 插入或更新日期覆盖
  Future<void> upsertDayOverride(DayOverride dayOverride) async {
    final db = await database;
    await db.insert(
      'day_overrides',
      dayOverride.toMap(),
      conflictAlgorithm: sqflite.ConflictAlgorithm.replace,
    );
  }

  /// 删除日期覆盖
  Future<void> deleteDayOverride(String id) async {
    final db = await database;
    await db.delete(
      'day_overrides',
      where: 'id = ?',
      whereArgs: [id],
    );
  }

  /// 获取指定日期的覆盖配置
  Future<DayOverride?> getDayOverride(DateTime date) async {
    final db = await database;
    final id = '${date.year}-${date.month}-${date.day}';
    
    final List<Map<String, dynamic>> maps = await db.query(
      'day_overrides',
      where: 'id = ?',
      whereArgs: [id],
    );

    if (maps.isEmpty) return null;
    return DayOverride.fromMap(maps.first);
  }

  /// 获取所有日期覆盖
  Future<List<DayOverride>> getAllDayOverrides() async {
    final db = await database;
    final List<Map<String, dynamic>> maps = await db.query('day_overrides');
    return List.generate(maps.length, (i) => DayOverride.fromMap(maps[i]));
  }

  // ==================== 节假日缓存相关操作 ====================

  /// 批量插入节假日
  Future<void> insertHolidays(List<Holiday> holidays) async {
    final db = await database;
    final batch = db.batch();
    
    for (final holiday in holidays) {
      batch.insert(
        'holidays',
        holiday.toMap(),
        conflictAlgorithm: sqflite.ConflictAlgorithm.replace,
      );
    }
    
    await batch.commit(noResult: true);
  }

  /// 获取指定年份的节假日
  Future<List<Holiday>> getHolidaysByYear(int year) async {
    final db = await database;
    final List<Map<String, dynamic>> maps = await db.query(
      'holidays',
      where: 'date LIKE ?',
      whereArgs: ['$year%'],
    );

    return List.generate(maps.length, (i) => Holiday.fromMap(maps[i]));
  }

  // ==================== 规则相关操作 ====================

  /// 插入规则
  Future<void> insertRule(ScheduleRule rule) async {
    final db = await database;
    await db.insert('schedule_rules', rule.toMap());
  }

  /// 更新规则
  Future<void> updateRule(ScheduleRule rule) async {
    final db = await database;
    await db.update(
      'schedule_rules',
      rule.toMap(),
      where: 'id = ?',
      whereArgs: [rule.id],
    );
  }

  /// 删除规则
  Future<void> deleteRule(String id) async {
    final db = await database;
    await db.delete(
      'schedule_rules',
      where: 'id = ?',
      whereArgs: [id],
    );
  }

  /// 获取所有规则
  Future<List<ScheduleRule>> getAllRules() async {
    final db = await database;
    final List<Map<String, dynamic>> maps = await db.query(
      'schedule_rules',
      orderBy: 'created_at DESC',
    );
    return maps.map((m) => ScheduleRule.fromMap(m)).toList();
  }

  /// 根据ID获取规则
  Future<ScheduleRule?> getRuleById(String id) async {
    final db = await database;
    final List<Map<String, dynamic>> maps = await db.query(
      'schedule_rules',
      where: 'id = ?',
      whereArgs: [id],
    );
    if (maps.isEmpty) return null;
    return ScheduleRule.fromMap(maps.first);
  }

  // ==================== 覆盖相关操作 ====================

  /// 插入覆盖
  Future<void> insertOverride(ScheduleOverride override) async {
    final db = await database;
    await db.insert('schedule_overrides', override.toMap());
  }

  /// 更新覆盖
  Future<void> updateOverride(ScheduleOverride override) async {
    final db = await database;
    await db.update(
      'schedule_overrides',
      override.toMap(),
      where: 'id = ?',
      whereArgs: [override.id],
    );
  }

  /// 获取所有覆盖
  Future<List<ScheduleOverride>> getAllOverrides() async {
    final db = await database;
    final List<Map<String, dynamic>> maps = await db.query(
      'schedule_overrides',
      orderBy: 'start_date DESC',
    );
    return maps.map((m) => ScheduleOverride.fromMap(m)).toList();
  }

  /// 删除覆盖
  Future<void> deleteOverride(String id) async {
    final db = await database;
    await db.delete(
      'schedule_overrides',
      where: 'id = ?',
      whereArgs: [id],
    );
  }

  /// 获取指定日期的覆盖
  Future<List<ScheduleOverride>> getOverridesByDate(DateTime date) async {
    final db = await database;
    final dateStr = DateTime(date.year, date.month, date.day).toIso8601String().split('T')[0];
    
    // complete 类型使用精确日期匹配，其他类型使用日期范围查询
    final List<Map<String, dynamic>> rangeMaps = await db.query(
      'schedule_overrides',
      where: 'start_date <= ? AND end_date >= ? AND type != ?',
      whereArgs: [dateStr, dateStr, OverrideType.complete.name],
    );
    
    final List<Map<String, dynamic>> completeMaps = await db.query(
      'schedule_overrides',
      where: 'start_date = ? AND type = ?',
      whereArgs: [dateStr, OverrideType.complete.name],
    );
    
    final allMaps = [...rangeMaps, ...completeMaps];
    return allMaps.map((m) => ScheduleOverride.fromMap(m)).toList();
  }

  /// 切换日程完成状态（通过 override)
  Future<void> toggleScheduleComplete(DateTime date, String ruleId, bool isCompleted) async {
    final db = await database;
    // 归一化日期，确保时间部分为零
    final normalizedDate = DateTime(date.year, date.month, date.day);
    final dateStr = normalizedDate.toIso8601String().split('T')[0];

    // 查找是否已有该日期规则的完成状态override
    final existing = await db.query(
      'schedule_overrides',
      where: 'start_date = ? AND rule_id = ? AND type = ?',
      whereArgs: [dateStr, ruleId, OverrideType.complete.name],
    );

    if (isCompleted) {
      // 标记为完成 - 如果不存在则创建（单日覆盖）
      if (existing.isEmpty) {
        final override = ScheduleOverride(
          startDate: normalizedDate,
          endDate: normalizedDate, // 单日覆盖：endDate 等于 startDate，确保只影响单日
          ruleId: ruleId,
          type: OverrideType.complete,
          metadata: {
            'completed_at': DateTime.now().toIso8601String(),
          },
        );
        await db.insert('schedule_overrides', override.toMap());
      }
    } else {
      // 取消完成 - 删除 override
      if (existing.isNotEmpty) {
        await db.delete(
          'schedule_overrides',
          where: 'id = ?',
          whereArgs: [existing.first['id']],
        );
      }
    }
  }

  /// 查找规则ID（通过标题和时间）
  Future<String?> findRuleId(String title, String? time) async {
    final db = await database;
    final List<Map<String, dynamic>> maps = await db.query(
      'schedule_rules',
      where: 'title = ? AND time = ?',
      whereArgs: [title, time],
      limit: 1,
    );
    return maps.isEmpty ? null : maps.first['id'] as String;
  }

  /// 关闭数据库连接
  Future<void> close() async {
    final db = await database;
    await db.close();
    _database = null;
  }
}
