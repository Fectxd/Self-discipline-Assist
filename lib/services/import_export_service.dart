import 'dart:convert';
import 'dart:io';
import 'package:file_picker/file_picker.dart';
import 'package:path_provider/path_provider.dart';
import 'package:intl/intl.dart';
import '../models/schedule_rule.dart';
import '../models/schedule_override.dart';
import 'database_service.dart';

/// 日程导入导出服务
class ImportExportService {
  final DatabaseService _dbService;

  ImportExportService(this._dbService);

  /// 导出所有规则和覆盖到JSON文件
  Future<String?> exportToJson() async {
    try {
      // 获取所有规则
      final db = await _dbService.database;
      final rulesMaps = await db.query('schedule_rules');
      final rules = rulesMaps.map((m) => ScheduleRule.fromMap(m)).toList();
      
      // 获取所有覆盖
      final overridesMaps = await db.query('schedule_overrides');
      final overrides = overridesMaps.map((m) => ScheduleOverride.fromMap(m)).toList();
      
      // 构建导出数据
      final exportData = {
        'version': '1.0',
        'export_time': DateTime.now().toIso8601String(),
        'rules': rules.map((r) => r.toMap()).toList(),
        'overrides': overrides.map((o) => o.toMap()).toList(),
      };
      
      // 生成文件名
      final timestamp = DateFormat('yyyyMMdd_HHmmss').format(DateTime.now());
      final fileName = 'schedule_rules_$timestamp.json';
      
      // 选择保存路径
      String? outputPath = await FilePicker.platform.saveFile(
        dialogTitle: '导出日程规则',
        fileName: fileName,
        type: FileType.custom,
        allowedExtensions: ['json'],
      );
      
      if (outputPath == null) {
        return null; // 用户取消
      }
      
      // 写入文件
      final file = File(outputPath);
      await file.writeAsString(
        const JsonEncoder.withIndent('  ').convert(exportData),
      );
      
      return outputPath;
    } catch (e) {
      print('导出失败: $e');
      rethrow;
    }
  }

  /// 从JSON文件导入规则和覆盖
  /// [merge] 为true时合并，为false时清空后导入
  Future<ImportResult> importFromJson({bool merge = true}) async {
    try {
      // 选择文件
      FilePickerResult? result = await FilePicker.platform.pickFiles(
        type: FileType.custom,
        allowedExtensions: ['json'],
        dialogTitle: '导入日程规则',
      );
      
      if (result == null || result.files.isEmpty) {
        return ImportResult(success: false, message: '未选择文件');
      }
      
      // 读取文件
      final file = File(result.files.first.path!);
      final jsonString = await file.readAsString();
      final data = jsonDecode(jsonString) as Map<String, dynamic>;
      
      // 验证版本
      if (data['version'] != '1.0') {
        return ImportResult(
          success: false,
          message: '不支持的文件版本: ${data['version']}',
        );
      }
      
      // 解析数据
      final rulesList = data['rules'] as List<dynamic>;
      final overridesList = data['overrides'] as List<dynamic>;
      
      int rulesImported = 0;
      int overridesImported = 0;
      
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
                print('规则 ${rule.id} 已存在，跳过');
              }
            } else {
              await txn.insert('schedule_rules', rule.toMap());
              rulesImported++;
            }
          } catch (e) {
            print('导入规则失败: $e');
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
            print('导入覆盖失败: $e');
          }
        }
      });
      
      return ImportResult(
        success: true,
        message: '导入成功：$rulesImported 条规则，$overridesImported 条覆盖',
        rulesCount: rulesImported,
        overridesCount: overridesImported,
      );
    } catch (e) {
      print('导入失败: $e');
      return ImportResult(
        success: false,
        message: '导入失败: $e',
      );
    }
  }

  /// 快速导出到默认位置（文档目录）
  Future<String> quickExport() async {
    try {
      // 获取所有规则
      final db = await _dbService.database;
      final rulesMaps = await db.query('schedule_rules');
      final rules = rulesMaps.map((m) => ScheduleRule.fromMap(m)).toList();
      
      // 获取所有覆盖
      final overridesMaps = await db.query('schedule_overrides');
      final overrides = overridesMaps.map((m) => ScheduleOverride.fromMap(m)).toList();
      
      // 构建导出数据
      final exportData = {
        'version': '1.0',
        'export_time': DateTime.now().toIso8601String(),
        'rules': rules.map((r) => r.toMap()).toList(),
        'overrides': overrides.map((o) => o.toMap()).toList(),
      };
      
      // 获取文档目录
      final directory = await getApplicationDocumentsDirectory();
      final timestamp = DateFormat('yyyyMMdd_HHmmss').format(DateTime.now());
      final fileName = 'schedule_backup_$timestamp.json';
      final filePath = '${directory.path}/$fileName';
      
      // 写入文件
      final file = File(filePath);
      await file.writeAsString(
        const JsonEncoder.withIndent('  ').convert(exportData),
      );
      
      return filePath;
    } catch (e) {
      print('快速导出失败: $e');
      rethrow;
    }
  }

  /// 导出为人类可读的文本格式
  Future<String?> exportToText() async {
    try {
      // 获取所有规则
      final db = await _dbService.database;
      final rulesMaps = await db.query('schedule_rules', orderBy: 'priority ASC, time ASC');
      final rules = rulesMaps.map((m) => ScheduleRule.fromMap(m)).toList();
      
      // 生成文本
      final buffer = StringBuffer();
      buffer.writeln('=' * 50);
      buffer.writeln('日程规则导出');
      buffer.writeln('导出时间: ${DateFormat('yyyy-MM-dd HH:mm:ss').format(DateTime.now())}');
      buffer.writeln('规则总数: ${rules.length}');
      buffer.writeln('=' * 50);
      buffer.writeln();
      
      // 按优先级分组
      final grouped = <int, List<ScheduleRule>>{};
      for (var rule in rules) {
        grouped.putIfAbsent(rule.priority.value, () => []).add(rule);
      }
      
      final priorityNames = {
        1: '每天',
        2: '工作日/休息日/每隔N天',
        3: '周末/节假日',
        4: '周X',
        5: '特定日期',
      };
      
      for (var priority in grouped.keys.toList()..sort()) {
        final rulesList = grouped[priority]!;
        buffer.writeln('【${priorityNames[priority] ?? "未知"}】 (优先级 $priority)');
        buffer.writeln('-' * 50);
        
        for (var rule in rulesList) {
          buffer.writeln('  ✓ ${rule.title}');
          if (rule.time != null) {
            buffer.writeln('    时间: ${rule.time}');
          }
          if (rule.description != null && rule.description!.isNotEmpty) {
            buffer.writeln('    描述: ${rule.description}');
          }
          
          // 显示条件
          final conditionDesc = _getConditionDescription(rule.condition);
          buffer.writeln('    条件: $conditionDesc');
          buffer.writeln();
        }
        buffer.writeln();
      }
      
      // 生成文件名
      final timestamp = DateFormat('yyyyMMdd_HHmmss').format(DateTime.now());
      final fileName = 'schedule_rules_$timestamp.txt';
      
      // 选择保存路径
      String? outputPath = await FilePicker.platform.saveFile(
        dialogTitle: '导出日程规则（文本格式）',
        fileName: fileName,
        type: FileType.custom,
        allowedExtensions: ['txt'],
      );
      
      if (outputPath == null) {
        return null;
      }
      
      // 写入文件
      final file = File(outputPath);
      await file.writeAsString(buffer.toString());
      
      return outputPath;
    } catch (e) {
      print('导出文本失败: $e');
      rethrow;
    }
  }

  String _getConditionDescription(RuleCondition condition) {
    switch (condition.type) {
      case ConditionType.daily:
        return '每天';
      case ConditionType.workday:
        return '工作日';
      case ConditionType.restday:
        return '休息日（周末+节假日）';
      case ConditionType.weekend:
        return '周末';
      case ConditionType.holiday:
        return '节假日';
      case ConditionType.weekday:
        final weekdayNames = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
        return weekdayNames[(condition.weekday ?? 1) - 1];
      case ConditionType.interval:
        final start = condition.startDate != null
            ? DateFormat('yyyy-MM-dd').format(condition.startDate!)
            : '未知';
        return '每隔${condition.intervalDays}天（从$start开始）';
      case ConditionType.specificDate:
        final date = condition.specificDate != null
            ? DateFormat('yyyy-MM-dd').format(condition.specificDate!)
            : '未知';
        return '特定日期: $date';
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
