import 'dart:convert';
import 'dart:io';
import 'package:flutter/foundation.dart';
import 'package:path_provider/path_provider.dart';
import 'package:intl/intl.dart';
import 'package:path/path.dart' as path;
import 'package:shared_preferences/shared_preferences.dart';
import '../models/schedule_rule.dart';
import '../models/schedule_override.dart';
import 'database_service.dart';

/// 日程导入导出服务
class ImportExportService {
  final DatabaseService _dbService;

  ImportExportService(this._dbService);

  /// 导出所有规则、覆盖和设置到JSON文件（保存到 Documents/SelfDiscipline 目录）
  Future<String?> exportToJson() async {
    try {
      // 获取所有规则
      final db = await _dbService.database;
      final rulesMaps = await db.query('schedule_rules');
      final rules = rulesMaps.map((m) => ScheduleRule.fromMap(m)).toList();

      // 获取所有覆盖
      final overridesMaps = await db.query('schedule_overrides');
      final overrides = overridesMaps.map((m) => ScheduleOverride.fromMap(m)).toList();

      // 获取所有设置参数
      final prefs = await SharedPreferences.getInstance();
      final settings = <String, dynamic>{};

      // 导出相关设置
      final keys = prefs.getKeys();
      for (final key in keys) {
        final value = prefs.get(key);
        if (value != null) {
          settings[key] = value;
        }
      }

      // 构建导出数据
      final exportData = {
        'export_time': DateTime.now().toIso8601String(),
        'rules': rules.map((r) => r.toMap()).toList(),
        'overrides': overrides.map((o) => o.toMap()).toList(),
        'settings': settings,
      };

        // 生成文件名
      final timestamp = DateFormat('yyyyMMdd_HHmmss').format(DateTime.now());
      final fileName = 'schedule_rules_$timestamp.json';

      // 获取 Documents 目录并创建 SelfDiscipline 子目录
      final directory = await getApplicationDocumentsDirectory();
      final exportDir = Directory(path.join(directory.path, 'SelfDiscipline'));
      if (!await exportDir.exists()) {
        await exportDir.create(recursive: true);
      }

      final filePath = path.join(exportDir.path, fileName);

      // 写入文件
      final file = File(filePath);
      await file.writeAsString(
        const JsonEncoder.withIndent('  ').convert(exportData),
      );

      return filePath;
    } catch (e) {
        debugPrint('导出失败: $e');
      rethrow;
    }
  }

  /// 从JSON文件导入规则和覆盖
  /// [merge] 为 true 时合并，为 false 时清空后导入
  /// [filePath] 可选的文件路径，如果不提供则从 Documents/SelfDiscipline 目录查找最新的导出文件
  Future<ImportResult> importFromJson({bool merge = true, String? filePath}) async {
    try {
      File file;

      if (filePath != null) {
        // 使用提供的文件路径
        file = File(filePath);
        if (!await file.exists()) {
          return ImportResult(success: false, message: '文件不存在: $filePath');
        }
      } else {
        // 从 Documents/SelfDiscipline 目录查找最新的导出文件
        final directory = await getApplicationDocumentsDirectory();
        final exportDir = Directory(path.join(directory.path, 'SelfDiscipline'));

        if (!await exportDir.exists()) {
          return ImportResult(success: false, message: '未找到导出目录');
        }

        // 获取所有 JSON 文件
        final files = await exportDir
            .list()
            .where((entity) => entity is File && entity.path.endsWith('.json'))
            .cast<File>()
            .toList();

        if (files.isEmpty) {
          return ImportResult(success: false, message: '未找到导出文件');
        }

        // 按修改时间排序，获取最新的文件
        files.sort((a, b) => b.lastModifiedSync().compareTo(a.lastModifiedSync()));
        file = files.first;
      }

      // 读取文件
      final jsonString = await file.readAsString();
      final data = jsonDecode(jsonString) as Map<String, dynamic>;

      // 解析数据
      final rulesList = data['rules'] as List<dynamic>;
      final overridesList = data['overrides'] as List<dynamic>;
      final settingsMap = data['settings'] as Map<String, dynamic>;
      
      int rulesImported = 0;
      int overridesImported = 0;
      int settingsImported = 0;

      final db = await _dbService.database;

      // 开始事务
      await db.transaction((txn) async {
        // 如果不是合并模式，清空现有数据
        if (!merge) {
          await txn.delete('schedule_rules');
          await txn.delete('schedule_overrides');
        }
        
        // 导入规则
        for (var ruleMap in rulesList) {
          try {
            final rule = ScheduleRule.fromMap(ruleMap as Map<String, dynamic>);
            
            if (merge) {
              // 合并模式：检查是否已存在相同ID的规则
              final existing = await txn.query(
                'schedule_rules',
                where: 'id = ?',
                whereArgs: [rule.id],
              );
              
              if (existing.isEmpty) {
                await txn.insert('schedule_rules', rule.toMap());
                rulesImported++;
              } else {
                // 已存在，跳过或更新？这里选择跳过
                debugPrint('规则 ${rule.id} 已存在，跳过');
              }
            } else {
              await txn.insert('schedule_rules', rule.toMap());
              rulesImported++;
            }
          } catch (e) {
            debugPrint('导入规则失败: $e');
          }
        }
        
        // 导入覆盖
        for (var overrideMap in overridesList) {
          try {
            final override = ScheduleOverride.fromMap(overrideMap as Map<String, dynamic>);
            
            if (merge) {
              final existing = await txn.query(
                'schedule_overrides',
                where: 'id = ?',
                whereArgs: [override.id],
              );
              
              if (existing.isEmpty) {
                await txn.insert('schedule_overrides', override.toMap());
                overridesImported++;
              }
            } else {
              await txn.insert('schedule_overrides', override.toMap());
              overridesImported++;
            }
          } catch (e) {
            debugPrint('导入覆盖失败: $e');
          }
        }
      });

      // 导入设置（在事务外执行）
      if (settingsMap.isNotEmpty) {
        try {
          final prefs = await SharedPreferences.getInstance();

          for (final entry in settingsMap.entries) {
            final key = entry.key;
            final value = entry.value;

            if (value is String) {
              await prefs.setString(key, value);
              settingsImported++;
            } else if (value is int) {
              await prefs.setInt(key, value);
              settingsImported++;
            } else if (value is double) {
              await prefs.setDouble(key, value);
              settingsImported++;
            } else if (value is bool) {
              await prefs.setBool(key, value);
              settingsImported++;
            } else if (value is List<String>) {
              await prefs.setStringList(key, value);
              settingsImported++;
            }
          }
          debugPrint('导入设置成功: $settingsImported 项');
        } catch (e) {
          debugPrint('导入设置失败: $e');
        }
      }

      return ImportResult(
        success: true,
        message: '导入成功：$rulesImported 条规则，$overridesImported 条覆盖，$settingsImported 项设置',
        rulesCount: rulesImported,
        overridesCount: overridesImported,
      );
    } catch (e) {
      debugPrint('导入失败: $e');
      return ImportResult(
        success: false,
        message: '导入失败: $e',
      );
    }
  }

}

/// 导入结果
class ImportResult {
  final bool success;
  final String message;
  final int rulesCount;
  final int overridesCount;

  ImportResult({
    required this.success,
    required this.message,
    this.rulesCount = 0,
    this.overridesCount = 0,
  });
}
