import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

/// 统一的 Service 访问工具类
/// 消除重复代码，统一访问方式
extension ServiceProvider on BuildContext {
  // 只读访问（不监听变化）
  T read<T>() => Provider.of<T>(this, listen: false);
  
  // 监听访问（自动重建）
  T watch<T>() => Provider.of<T>(this, listen: true);
}

/// 使用示例：
/// 
/// 之前（混乱）：
/// final db = Provider.of<DatabaseService>(context, listen: false);
/// final config = context.read<ApiConfigService>();
/// 
/// 之后（统一）：
/// final db = context.read<DatabaseService>();
/// final config = context.read<ApiConfigService>();
