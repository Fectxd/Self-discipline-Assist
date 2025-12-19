import 'dart:io';
import 'package:flutter/foundation.dart';
import 'package:path_provider/path_provider.dart';

/// 原生文件选择器辅助类
/// 使用系统原生对话框，无需第三方插件
class FilePickerHelper {
  /// 选择 JSON 文件进行导入
  /// 在 Windows 上打开文件浏览器
  static Future<File?> pickJsonFile() async {
    try {
      // 获取文档目录
      final directory = await getApplicationDocumentsDirectory();
      final exportDir = Directory('${directory.path}/SelfDiscipline');

      if (!await exportDir.exists()) {
        debugPrint('导出目录不存在');
        return null;
      }

      // 获取所有 JSON 文件
      final files = await exportDir
          .list()
          .where((entity) => entity is File && entity.path.endsWith('.json'))
          .cast<File>()
          .toList();

      if (files.isEmpty) {
        debugPrint('未找到备份文件');
        return null;
      }

      // 按修改时间排序（最新的在前面）
      files.sort((a, b) => b.lastModifiedSync().compareTo(a.lastModifiedSync()));

      return files.first; // 返回最新的文件
    } catch (e) {
      debugPrint('选择文件失败: $e');
      return null;
    }
  }

  /// 获取所有可用的备份文件
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

      // 按修改时间排序（最新的在前面）
      files.sort((a, b) => b.lastModifiedSync().compareTo(a.lastModifiedSync()));

      return files;
    } catch (e) {
      debugPrint('获取备份文件列表失败: $e');
      return [];
    }
  }

  /// 选择保存位置（导出）
  /// 返回保存路径
  static Future<String?> pickSaveLocation(String defaultFileName) async {
    try {
      // 获取文档目录
      final directory = await getApplicationDocumentsDirectory();
      final exportDir = Directory('${directory.path}/SelfDiscipline');

      if (!await exportDir.exists()) {
        await exportDir.create(recursive: true);
      }

      // 返回默认保存路径
      return '${exportDir.path}/$defaultFileName';
    } catch (e) {
      debugPrint('选择保存位置失败: $e');
      return null;
    }
  }
}
