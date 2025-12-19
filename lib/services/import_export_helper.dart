import 'dart:io';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:intl/intl.dart';
import '../services/database_service.dart';
import '../services/import_export_service.dart';
import '../utils/file_picker_helper.dart';

/// 导出到 JSON 的辅助函数
Future<void> exportToJsonHelper(BuildContext context) async {
  final messenger = ScaffoldMessenger.maybeOf(context);
  try {
    final dbService = context.read<DatabaseService>();
    final exportService = ImportExportService(dbService);
    final path = await exportService.exportToJson();
    if (path != null && messenger != null) {
      messenger.showSnackBar(SnackBar(content: Text('已导出至: $path'), backgroundColor: Colors.green, duration: const Duration(seconds:3)));
    }
  } catch (e) {
    if (messenger != null) messenger.showSnackBar(SnackBar(content: Text('导出失败: $e'), backgroundColor: Colors.red));
  }
}

/// 从 JSON 导入的辅助函数
Future<ImportResult?> importFromJsonHelper(BuildContext context) async {
  final messenger = ScaffoldMessenger.maybeOf(context);

  // 第一步：获取可用的备份文件列表
  final backupFiles = await FilePickerHelper.getAvailableBackups();

  if (backupFiles.isEmpty) {
    if (messenger != null) {
      messenger.showSnackBar(
        const SnackBar(
          content: Text('未找到备份文件'),
          backgroundColor: Colors.orange,
        ),
      );
    }
    return null;
  }

  // 第二步：显示文件选择对话框
  File? selectedFile;
  if (context.mounted) {
    selectedFile = await showDialog<File>(
      context: context,
      builder: (dialogContext) => AlertDialog(
        title: const Text('选择备份文件'),
        content: SizedBox(
          width: double.maxFinite,
          child: ListView.builder(
            shrinkWrap: true,
            itemCount: backupFiles.length,
            itemBuilder: (context, index) {
              final file = backupFiles[index];
              final fileName = file.path.split(Platform.pathSeparator).last;
              final modifiedTime = file.lastModifiedSync();
              final timeStr = DateFormat('yyyy-MM-dd HH:mm:ss').format(modifiedTime);

              return ListTile(
                leading: const Icon(Icons.insert_drive_file, color: Colors.blue),
                title: Text(fileName),
                subtitle: Text('修改时间: $timeStr'),
                onTap: () => Navigator.pop(dialogContext, file),
              );
            },
          ),
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(dialogContext),
            child: const Text('取消'),
          ),
        ],
      ),
    );
  }

  if (selectedFile == null || !context.mounted) return null;

  // 第三步：选择导入模式
  final merge = await showDialog<bool>(
    context: context,
    builder: (dialogContext) => AlertDialog(
      title: const Text('导入方式'),
      content: const Text('选择导入模式'),
      actions: [
        TextButton(onPressed: () => Navigator.pop(dialogContext), child: const Text('取消')),
        TextButton(onPressed: () => Navigator.pop(dialogContext, false), child: const Text('清空后导入')),
        TextButton(onPressed: () => Navigator.pop(dialogContext, true), child: const Text('合并导入')),
      ],
    ),
  );

  if (merge == null || !context.mounted) return null;

  // 第四步：执行导入
  try {
    final dbService = context.read<DatabaseService>();
    final exportService = ImportExportService(dbService);
    final result = await exportService.importFromJson(
      merge: merge,
      filePath: selectedFile.path,
    );
    if (messenger != null) {
      messenger.showSnackBar(
        SnackBar(
          content: Text(result.message),
          backgroundColor: result.success ? Colors.green : Colors.red,
          duration: const Duration(seconds: 3),
        ),
      );
    }
    return result;
  } catch (e) {
    if (messenger != null) {
      messenger.showSnackBar(
        SnackBar(
          content: Text('导入失败: $e'),
          backgroundColor: Colors.red,
        ),
      );
    }
    return ImportResult(success: false, message: '导入失败: $e');
  }
}
