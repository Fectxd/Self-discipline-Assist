import 'dart:async';
import 'package:flutter/foundation.dart';

/// 日期变更检测服务
///
/// 单例服务，负责检测日期变更并通知所有监听者。
/// 每分钟检查一次当前日期，当日期发生变化时触发回调。
class DateChangeService extends ChangeNotifier {
  static final DateChangeService _instance = DateChangeService._internal();

  factory DateChangeService() {
    return _instance;
  }

  DateChangeService._internal() {
    _startDateCheckTimer();
  }

  Timer? _dateCheckTimer;
  String _currentDate = '';

  /// 当前日期（格式：yyyy-MM-dd）
  String get currentDate => _currentDate;

  /// 启动日期检测定时器
  void _startDateCheckTimer() {
    _currentDate = _formatDate(DateTime.now());

    _dateCheckTimer?.cancel();
    _dateCheckTimer = Timer.periodic(const Duration(minutes: 1), (timer) {
      final newDate = _formatDate(DateTime.now());
      if (_currentDate != newDate) {
        debugPrint('🔄 DateChangeService检测到日期变更: $_currentDate -> $newDate');
        _currentDate = newDate;

        // 通知所有监听者
        notifyListeners();
      }
    });
  }

  /// 格式化日期为 yyyy-MM-dd
  String _formatDate(DateTime date) {
    return '${date.year}-${date.month.toString().padLeft(2, '0')}-${date.day.toString().padLeft(2, '0')}';
  }

  @override
  void dispose() {
    _dateCheckTimer?.cancel();
    super.dispose();
  }
}
