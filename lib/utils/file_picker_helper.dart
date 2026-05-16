import 'dart:io';
import 'package:flutter/foundation.dart';
import 'package:path_provider/path_provider.dart';
import 'package:file_picker/file_picker.dart';

/// 文件选择器辅助类
class FilePickerHelper {
  /// 使用系统文件选择器选择 JSON 文件
  static Future<File?> pickJsonFile() async {
    // 优先使用系统文件选择器
    try {
      final result = await FilePicker.platform.pickFiles(
        type: FileType.custom,
        allowedExtensions: ['json'],
      );
      if (result != null && result.files.isNotEmpty) {
        return File(result.files.single.path!);
      }
    } catch (e) {
      debugPrint('FilePicker failed: $e');
    }
    return null;
  }

  /// 获取应用内部存储中的可用备份文件（保留旧功能供内部使用）
  static Future<List<File>> getAvailableBackups() async {
    try {
      final directory = await getApplicationDocumentsDirectory();
      final exportDir = Directory('${directory.path}/SelfDiscipline');

      if (!await exportDir.exists()) {
        return [];
      }

      final files = await exportDir
          .list()
          .where((entity) => entity is File && entity.path.endsWith('.json'))
          .cast<File>()
          .toList();

      files.sort((a, b) => b.lastModifiedSync().compareTo(a.lastModifiedSync()));
      return files;
    } catch (e) {
      debugPrint('获取备份文件列表失败: $e');
      return [];
    }
  }
}
