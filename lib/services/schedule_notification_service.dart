import 'dart:async';
import 'package:flutter/foundation.dart';
import '../models/schedule.dart';
import 'database_service.dart';
import 'notification_service.dart';

/// 日程通知调度服务
/// 负责监控日程并在到期时发送通知
class ScheduleNotificationService {
  final DatabaseService _dbService;
  final NotificationService _notificationService;
  
  Timer? _checkTimer;
  DateTime? _lastCheckDate;
  final Set<String> _notifiedScheduleIds = {};

  ScheduleNotificationService(this._dbService, this._notificationService);

  /// 开始监控日程
  void startMonitoring() {
    // 每分钟检查一次是否有到期的日程
    _checkTimer?.cancel();
    _checkTimer = Timer.periodic(const Duration(minutes: 1), (_) {
      _checkSchedules();
    });
    
    // 立即执行一次检查
    _checkSchedules();
  }

  /// 停止监控
  void stopMonitoring() {
    _checkTimer?.cancel();
    _checkTimer = null;
  }

  /// 检查是否有到期的日程
  Future<void> _checkSchedules() async {
    try {
      final now = DateTime.now();
      final today = DateTime(now.year, now.month, now.day);
      
      // 如果日期变了，清空已通知的日程ID列表
      if (_lastCheckDate != null && _lastCheckDate != today) {
        _notifiedScheduleIds.clear();
      }
      _lastCheckDate = today;
      
      // 获取今天的所有日程
      final schedules = await _dbService.getSchedulesByDate(today);
      
      // 检查每个日程是否到期
      for (final schedule in schedules) {
        if (schedule.startTime == null) continue;
        if (_notifiedScheduleIds.contains(schedule.id)) continue;
        if (schedule.isCompleted) continue;
        
        // 检查是否到了日程开始时间（允许1分钟误差）
        final timeDiff = schedule.startTime!.difference(now).inMinutes;
        
        if (timeDiff <= 0 && timeDiff >= -1) {
          // 日程已到期，发送通知
          await _sendScheduleNotification(schedule);
          _notifiedScheduleIds.add(schedule.id);
        }
      }
    } catch (e) {
      debugPrint('检查日程失败: $e');
    }
  }

  /// 发送日程通知
  Future<void> _sendScheduleNotification(Schedule schedule) async {
    try {
      final timeStr = _formatTime(schedule.startTime);
      final endTimeStr = schedule.endTime != null ? _formatTime(schedule.endTime) : null;
      
      String body;
      if (endTimeStr != null) {
        body = '时间: $timeStr - $endTimeStr';
      } else {
        body = '时间: $timeStr';
      }
      
      if (schedule.description != null && schedule.description!.isNotEmpty) {
        body += '\n${schedule.description}';
      }
      
      await _notificationService.showNotification(
        id: schedule.id.hashCode,
        title: '📅 ${schedule.title}',
        body: body,
        payload: schedule.id,
      );
      
      debugPrint('已发送日程通知: ${schedule.title}');
    } catch (e) {
      debugPrint('发送日程通知失败: $e');
    }
  }

  /// 取消指定日程的通知
  Future<void> cancelScheduleNotification(String scheduleId) async {
    try {
      await _notificationService.cancelNotification(scheduleId.hashCode);
      _notifiedScheduleIds.remove(scheduleId);
    } catch (e) {
      debugPrint('取消日程通知失败: $e');
    }
  }

  /// 格式化时间
  String _formatTime(DateTime? time) {
    if (time == null) return '';
    return '${time.hour.toString().padLeft(2, '0')}:${time.minute.toString().padLeft(2, '0')}';
  }

  /// 清理资源
  void dispose() {
    stopMonitoring();
  }
}
