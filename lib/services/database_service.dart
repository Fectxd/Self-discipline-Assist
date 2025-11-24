import 'package:sqflite_common_ffi/sqflite_ffi.dart';
import 'package:path/path.dart';
import 'dart:io';
import '../models/schedule.dart';
import '../models/schedule_rule.dart';
import '../models/schedule_override.dart';
import '../models/schedule_template.dart';
import '../models/schedule_priority.dart';
import '../models/day_type.dart';
import '../models/holiday.dart';

/// 数据库服务
class DatabaseService {
  static Database? _database;
  
  /// 获取数据库实例
  Future<Database> get database async {
    if (_database != null) return _database!;
    _database = await _initDatabase();
    return _database!;
  }

  /// 初始化数据库
  Future<Database> _initDatabase() async {
    // 初始化 FFI（用于桌面平台）
    sqfliteFfiInit();
    databaseFactory = databaseFactoryFfi;

    // 获取数据库路径
    final dbPath = await getDatabasesPath();
    final path = join(dbPath, 'self_discipline.db');

    final db = await openDatabase(
      path,
      version: 3,  // 升级到版本 3：添加规则表
      onCreate: _onCreate,
      onUpgrade: _onUpgrade,
    );
    
    // 检查关键表是否存在，不存在则创建
    await _ensureTablesExist(db);
    
    return db;
  }
  
  /// 确保所有必需的表都存在
  Future<void> _ensureTablesExist(Database db) async {
    final tables = await db.rawQuery(
      "SELECT name FROM sqlite_master WHERE type='table' AND name='schedule_overrides'"
    );
    
    if (tables.isEmpty) {
      print('检测到缺失的表，正在创建...');
      
      // 创建规则表
      await db.execute('''
        CREATE TABLE IF NOT EXISTS schedule_rules (
          id TEXT PRIMARY KEY,
          title TEXT NOT NULL,
          description TEXT,
          time TEXT,
          priority INTEGER NOT NULL,
          condition TEXT NOT NULL,
          created_at TEXT NOT NULL,
          updated_at TEXT NOT NULL,
          is_enabled INTEGER NOT NULL DEFAULT 1
        )
      ''');
      
      await db.execute('CREATE INDEX IF NOT EXISTS idx_rules_priority ON schedule_rules(priority)');
      
      // 创建覆盖表
      await db.execute('''
        CREATE TABLE IF NOT EXISTS schedule_overrides (
          id TEXT PRIMARY KEY,
          date TEXT NOT NULL,
          rule_id TEXT,
          type TEXT NOT NULL,
          new_time TEXT,
          new_title TEXT,
          created_at TEXT NOT NULL
        )
      ''');
      
      await db.execute('CREATE INDEX IF NOT EXISTS idx_overrides_date ON schedule_overrides(date)');
      await db.execute('CREATE INDEX IF NOT EXISTS idx_overrides_rule ON schedule_overrides(rule_id)');
      
      print('表创建完成');
    }
  }

  /// 数据库升级
  Future<void> _onUpgrade(Database db, int oldVersion, int newVersion) async {
    if (oldVersion < 2) {
      // 添加新字段到 schedules 表
      await db.execute('ALTER TABLE schedules ADD COLUMN priority INTEGER NOT NULL DEFAULT 1');
      await db.execute('ALTER TABLE schedules ADD COLUMN template_type TEXT NOT NULL DEFAULT "none"');
      await db.execute('ALTER TABLE schedules ADD COLUMN recurrence TEXT NOT NULL DEFAULT "none"');
      await db.execute('ALTER TABLE schedules ADD COLUMN source_template_id TEXT');
      await db.execute('ALTER TABLE schedules ADD COLUMN allow_override INTEGER NOT NULL DEFAULT 1');
      
      // 创建模板表
      await db.execute('''
        CREATE TABLE schedule_templates (
          id TEXT PRIMARY KEY,
          title TEXT NOT NULL,
          description TEXT,
          template_type TEXT NOT NULL,
          priority INTEGER NOT NULL,
          start_time TEXT,
          end_time TEXT,
          sort_order INTEGER NOT NULL DEFAULT 0,
          is_enabled INTEGER NOT NULL DEFAULT 1,
          created_at TEXT NOT NULL,
          updated_at TEXT NOT NULL
        )
      ''');
      
      await db.execute('CREATE INDEX idx_templates_type ON schedule_templates(template_type)');
    }
    
    if (oldVersion < 3) {
      // 创建规则表（核心存储）
      await db.execute('''
        CREATE TABLE schedule_rules (
          id TEXT PRIMARY KEY,
          title TEXT NOT NULL,
          description TEXT,
          time TEXT,
          priority INTEGER NOT NULL,
          condition TEXT NOT NULL,
          created_at TEXT NOT NULL,
          updated_at TEXT NOT NULL,
          is_enabled INTEGER NOT NULL DEFAULT 1
        )
      ''');
      
      await db.execute('CREATE INDEX idx_rules_priority ON schedule_rules(priority)');
      
      // 创建覆盖表（特定日期的例外）
      await db.execute('''
        CREATE TABLE schedule_overrides (
          id TEXT PRIMARY KEY,
          date TEXT NOT NULL,
          rule_id TEXT,
          type TEXT NOT NULL,
          new_time TEXT,
          new_title TEXT,
          created_at TEXT NOT NULL
        )
      ''');
      
      await db.execute('CREATE INDEX idx_overrides_date ON schedule_overrides(date)');
      await db.execute('CREATE INDEX idx_overrides_rule ON schedule_overrides(rule_id)');
    }
  }

  /// 创建数据库表
  Future<void> _onCreate(Database db, int version) async {
    // 创建日程表
    await db.execute('''
      CREATE TABLE schedules (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT,
        date TEXT NOT NULL,
        start_time TEXT,
        end_time TEXT,
        is_completed INTEGER NOT NULL DEFAULT 0,
        priority INTEGER NOT NULL DEFAULT 1,
        template_type TEXT NOT NULL DEFAULT 'none',
        recurrence TEXT NOT NULL DEFAULT 'none',
        source_template_id TEXT,
        allow_override INTEGER NOT NULL DEFAULT 1,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL
      )
    ''');

    // 创建模板表
    await db.execute('''
      CREATE TABLE schedule_templates (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT,
        template_type TEXT NOT NULL,
        priority INTEGER NOT NULL,
        start_time TEXT,
        end_time TEXT,
        sort_order INTEGER NOT NULL DEFAULT 0,
        is_enabled INTEGER NOT NULL DEFAULT 1,
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
        rest TEXT
      )
    ''');

    // 创建规则表（核心存储 - v3新增）
    await db.execute('''
      CREATE TABLE schedule_rules (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT,
        time TEXT,
        priority INTEGER NOT NULL,
        condition TEXT NOT NULL,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        is_enabled INTEGER NOT NULL DEFAULT 1
      )
    ''');

    // 创建覆盖表（特定日期例外 - v3新增）
    await db.execute('''
      CREATE TABLE schedule_overrides (
        id TEXT PRIMARY KEY,
        date TEXT NOT NULL,
        rule_id TEXT,
        type TEXT NOT NULL,
        new_time TEXT,
        new_title TEXT,
        created_at TEXT NOT NULL
      )
    ''');

    // 创建索引
    await db.execute('CREATE INDEX idx_schedules_date ON schedules(date)');
    await db.execute('CREATE INDEX idx_templates_type ON schedule_templates(template_type)');
    await db.execute('CREATE INDEX idx_day_overrides_date ON day_overrides(date)');
    await db.execute('CREATE INDEX idx_rules_priority ON schedule_rules(priority)');
    await db.execute('CREATE INDEX idx_overrides_date ON schedule_overrides(date)');
    await db.execute('CREATE INDEX idx_overrides_rule ON schedule_overrides(rule_id)');
  }

  /// 获取数据库路径
  Future<String> getDatabasesPath() async {
    if (Platform.isWindows) {
      final home = Platform.environment['USERPROFILE'];
      return join(home!, 'AppData', 'Local', 'SelfDiscipline', 'databases');
    } else if (Platform.isLinux) {
      final home = Platform.environment['HOME'];
      return join(home!, '.local', 'share', 'self_discipline', 'databases');
    } else if (Platform.isMacOS) {
      final home = Platform.environment['HOME'];
      return join(home!, 'Library', 'Application Support', 'SelfDiscipline', 'databases');
    }
    throw UnsupportedError('Unsupported platform');
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
    final List<Map<String, dynamic>> overrideMaps = await db.query(
      'schedule_overrides',
      where: 'date LIKE ?',
      whereArgs: ['$dateStr%'],
    );
    
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
      
      // 使用 title+time 作为唯一标识，优先级高的覆盖低的
      final key = '${rule.title}_${rule.time}';
      final existing = rulesByTitle[key];
      
      if (existing == null || rule.priority.canOverride(existing.priority)) {
        rulesByTitle[key] = rule;
      }
    }
    
    // 5. 应用时间修改覆盖
    final timeOverrides = overrides.where((o) => o.type == OverrideType.modifyTime);
    for (var override in timeOverrides) {
      if (override.ruleId != null) {
        // 找到对应的规则并修改时间
        for (var entry in rulesByTitle.entries) {
          if (entry.value.id == override.ruleId && override.newTime != null) {
            // 创建修改后的规则副本
            rulesByTitle[entry.key] = ScheduleRule(
              id: entry.value.id,
              title: entry.value.title,
              description: entry.value.description,
              time: override.newTime, // 使用新时间
              priority: SchedulePriority.specific, // 临时提升优先级
              condition: RuleCondition.specificDate(targetDate),
              createdAt: entry.value.createdAt,
            );
          }
        }
      }
    }
    
    // 6. 将规则转换为日程
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
      
      schedules.add(Schedule(
        id: '${rule.id}_${targetDate.toIso8601String()}',
        title: rule.title,
        description: rule.description,
        date: targetDate,
        startTime: startTime,
        priority: rule.priority,
        isCompleted: false,
        sourceTemplateId: rule.id,
      ));
    }
    
    // 7. 按时间排序
    schedules.sort((a, b) {
      if (a.startTime == null && b.startTime == null) return 0;
      if (a.startTime == null) return 1;
      if (b.startTime == null) return -1;
      return a.startTime!.compareTo(b.startTime!);
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
      conflictAlgorithm: ConflictAlgorithm.replace,
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
        conflictAlgorithm: ConflictAlgorithm.replace,
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

    return List.generate(maps.length, (i) => Holiday.fromDbMap(maps[i]));
  }

  // ==================== 模板相关操作 ====================

  /// 插入模板
  Future<void> insertTemplate(ScheduleTemplate template) async {
    final db = await database;
    await db.insert('schedule_templates', template.toMap());
  }

  /// 更新模板
  Future<void> updateTemplate(ScheduleTemplate template) async {
    final db = await database;
    await db.update(
      'schedule_templates',
      template.toMap(),
      where: 'id = ?',
      whereArgs: [template.id],
    );
  }

  /// 删除模板
  Future<void> deleteTemplate(String id) async {
    final db = await database;
    await db.delete(
      'schedule_templates',
      where: 'id = ?',
      whereArgs: [id],
    );
  }

  /// 获取指定类型的所有模板
  Future<List<ScheduleTemplate>> getTemplatesByType(TemplateType type) async {
    final db = await database;
    final List<Map<String, dynamic>> maps = await db.query(
      'schedule_templates',
      where: 'template_type = ? AND is_enabled = 1',
      whereArgs: [type.value],
      orderBy: 'sort_order ASC',
    );

    return List.generate(maps.length, (i) => ScheduleTemplate.fromMap(maps[i]));
  }

  /// 获取所有模板
  Future<List<ScheduleTemplate>> getAllTemplates() async {
    final db = await database;
    final List<Map<String, dynamic>> maps = await db.query(
      'schedule_templates',
      orderBy: 'template_type, sort_order ASC',
    );

    return List.generate(maps.length, (i) => ScheduleTemplate.fromMap(maps[i]));
  }

  /// 批量更新模板排序
  Future<void> updateTemplateSortOrder(List<String> templateIds) async {
    final db = await database;
    final batch = db.batch();
    
    for (int i = 0; i < templateIds.length; i++) {
      batch.update(
        'schedule_templates',
        {'sort_order': i, 'updated_at': DateTime.now().toIso8601String()},
        where: 'id = ?',
        whereArgs: [templateIds[i]],
      );
    }
    
    await batch.commit(noResult: true);
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
      orderBy: 'priority DESC, created_at DESC',
    );
    return maps.map((m) => ScheduleRule.fromMap(m)).toList();
  }

  /// 获取指定优先级的规则
  Future<List<ScheduleRule>> getRulesByPriority(SchedulePriority priority) async {
    final db = await database;
    final List<Map<String, dynamic>> maps = await db.query(
      'schedule_rules',
      where: 'priority = ?',
      whereArgs: [priority.value],
      orderBy: 'created_at DESC',
    );
    return maps.map((m) => ScheduleRule.fromMap(m)).toList();
  }

  // ==================== 覆盖相关操作 ====================

  /// 插入覆盖
  Future<void> insertOverride(ScheduleOverride override) async {
    final db = await database;
    await db.insert('schedule_overrides', override.toMap());
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
    final List<Map<String, dynamic>> maps = await db.query(
      'schedule_overrides',
      where: 'date LIKE ?',
      whereArgs: ['$dateStr%'],
    );
    return maps.map((m) => ScheduleOverride.fromMap(m)).toList();
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

  /// 关闭数据库
  Future<void> close() async {
    final db = await database;
    await db.close();
    _database = null;
  }
}
