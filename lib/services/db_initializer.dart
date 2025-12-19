import 'dart:io';
import 'package:flutter/foundation.dart';
import 'package:sqflite/sqflite.dart' as sqflite;
import 'package:sqflite_common_ffi/sqflite_ffi.dart' as ffi;

/// 初始化 sqflite 数据库工厂（根据平台）
/// - 在桌面端（Windows/Linux/macOS）配置 sqflite 使用 FFI 实现（sqflite_common_ffi）。
/// - 在移动端（Android/iOS）无需操作，平台会自动使用 sqflite 实现。
Future<void> initDatabaseFactoryIfNeeded() async {
  try {
    if (kIsWeb) return; // web unsupported for local sqlite via these packages

    if (Platform.isWindows || Platform.isLinux || Platform.isMacOS) {
      // Configure FFI for desktop
      ffi.sqfliteFfiInit();
      sqflite.databaseFactory = ffi.databaseFactoryFfi;
      debugPrint('db_initializer: configured sqflite FFI factory for desktop');
    } else {
      debugPrint('db_initializer: using platform sqflite implementation');
    }
  } catch (e) {
    debugPrint('db_initializer: failed to initialize database factory: $e');
  }
}
