import 'dart:io';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:share_plus/share_plus.dart';
import 'package:file_picker/file_picker.dart';
import 'package:path_provider/path_provider.dart';
import '../services/database_service.dart';
import '../services/import_export_service.dart';
import '../utils/file_picker_helper.dart';

/// 导出到 JSON 并在导出后分享文件（Android 上可存到 Downloads）
Future<void> exportToJsonHelper(BuildContext context) async {
  final messenger = ScaffoldMessenger.maybeOf(context);
  try {
    final dbService = context.read<DatabaseService>();
    final exportService = ImportExportService(dbService);
    final path = await exportService.exportToJson();
    if (path == null) {
      if (messenger != null) {
        messenger.showSnackBar(const SnackBar(
          content: Text('导出失败'),
          backgroundColor: Colors.red,
        ));
      }
      return;
    }

    // 分享文件（用户可保存到 Downloads、发送等）
    await Share.shareXFiles(
      [XFile(path)],
      subject: 'Self-discipline Assist 备份',
    );

    if (messenger != null && context.mounted) {
      messenger.showSnackBar(SnackBar(
        content: Text('已导出，可保存至任意位置'),
        backgroundColor: Colors.green,
      ));
    }
  } catch (e) {
    if (messenger != null) {
      messenger.showSnackBar(SnackBar(
        content: Text('导出失败: $e'),
        backgroundColor: Colors.red,
      ));
    }
  }
}

/// 从 JSON 导入（使用系统文件选择器）
Future<ImportResult?> importFromJsonHelper(BuildContext context) async {
  final messenger = ScaffoldMessenger.maybeOf(context);

  // 使用系统文件选择器让用户选择备份文件
  final result = await FilePicker.platform.pickFiles(
    type: FileType.custom,
    allowedExtensions: ['json'],
    dialogTitle: '选择备份文件',
  );

  if (result == null || result.files.isEmpty) {
    if (messenger != null) {
      messenger.showSnackBar(const SnackBar(
        content: Text('未选择文件'),
        backgroundColor: Colors.orange,
      ));
    }
    return null;
  }

  final selectedFile = File(result.files.single.path!);
  if (!await selectedFile.exists()) {
    if (messenger != null) {
      messenger.showSnackBar(const SnackBar(
        content: Text('文件不存在'),
        backgroundColor: Colors.red,
      ));
    }
    return null;
  }

  if (!context.mounted) return null;

  // 选择导入模式
  final merge = await showDialog<bool>(
    context: context,
    builder: (dialogContext) => AlertDialog(
      title: const Text('导入方式'),
      content: const Text('选择导入模式'),
      actions: [
        TextButton(
          onPressed: () => Navigator.pop(dialogContext),
          child: const Text('取消'),
        ),
        TextButton(
          onPressed: () => Navigator.pop(dialogContext, false),
          child: const Text('清空后导入'),
        ),
        TextButton(
          onPressed: () => Navigator.pop(dialogContext, true),
          child: const Text('合并导入'),
        ),
      ],
    ),
  );

  if (merge == null || !context.mounted) return null;

  // 执行导入
  try {
    final dbService = context.read<DatabaseService>();
    final exportService = ImportExportService(dbService);
    final importResult = await exportService.importFromJson(
      merge: merge,
      filePath: selectedFile.path,
    );
    if (messenger != null) {
      messenger.showSnackBar(SnackBar(
        content: Text(importResult.message),
        backgroundColor: importResult.success ? Colors.green : Colors.red,
      ));
    }
    return importResult;
  } catch (e) {
    if (messenger != null) {
      messenger.showSnackBar(SnackBar(
        content: Text('导入失败: $e'),
        backgroundColor: Colors.red,
      ));
    }
    return ImportResult(success: false, message: '导入失败: $e');
  }
}
