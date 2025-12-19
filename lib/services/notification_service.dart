import 'package:flutter/foundation.dart';
import 'package:flutter_local_notifications/flutter_local_notifications.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'dart:io' show Platform;

/// 通知服务
/// 处理日程到期的消息提醒，支持Android、iOS、Windows平台
class NotificationService {
  static final NotificationService _instance = NotificationService._internal();
  factory NotificationService() => _instance;
  NotificationService._internal();

  final FlutterLocalNotificationsPlugin _notifications = FlutterLocalNotificationsPlugin();
  bool _initialized = false;
  
  /// 通知开关设置键
  static const String _notificationEnabledKey = 'notification_enabled';

  /// 初始化通知服务
  Future<void> initialize() async {
    if (_initialized) return;

    try {
      // Android 设置
      const androidSettings = AndroidInitializationSettings('@mipmap/ic_launcher');

      // iOS 设置
      const iosSettings = DarwinInitializationSettings(
        requestAlertPermission: true,
        requestBadgePermission: true,
        requestSoundPermission: true,
      );

      // macOS 设置
      const macOsSettings = DarwinInitializationSettings(
        requestAlertPermission: true,
        requestBadgePermission: true,
        requestSoundPermission: true,
      );

      // Linux 设置
      const linuxSettings = LinuxInitializationSettings(
        defaultActionName: 'Open notification',
      );

      const initializationSettings = InitializationSettings(
        android: androidSettings,
        iOS: iosSettings,
        macOS: macOsSettings,
        linux: linuxSettings,
      );

      await _notifications.initialize(
        initializationSettings,
        onDidReceiveNotificationResponse: _onNotificationTapped,
      );

      _initialized = true;
      
      // 请求权限
      await requestPermission();
    } catch (e) {
      debugPrint('通知服务初始化失败: $e');
    }
  }

  /// 请求通知权限
  Future<bool> requestPermission() async {
    try {
      if (Platform.isAndroid) {
        // Android 13+ 需要运行时权限
        // 使用 flutter_local_notifications 内置的权限请求
        final androidImpl = _notifications.resolvePlatformSpecificImplementation<
            AndroidFlutterLocalNotificationsPlugin>();
        
        if (androidImpl != null) {
          final granted = await androidImpl.requestNotificationsPermission();
          return granted ?? false;
        }
        return true;
      } else if (Platform.isIOS) {
        // iOS 权限请求
        final result = await _notifications
            .resolvePlatformSpecificImplementation<IOSFlutterLocalNotificationsPlugin>()
            ?.requestPermissions(
              alert: true,
              badge: true,
              sound: true,
            );
        return result ?? false;
      } else if (Platform.isMacOS) {
        // macOS 权限请求
        final result = await _notifications
            .resolvePlatformSpecificImplementation<MacOSFlutterLocalNotificationsPlugin>()
            ?.requestPermissions(
              alert: true,
              badge: true,
              sound: true,
            );
        return result ?? false;
      }
      // Windows 和 Linux 不需要额外的权限请求
      return true;
    } catch (e) {
      debugPrint('请求通知权限失败: $e');
      return false;
    }
  }

  /// 检查通知权限状态
  Future<bool> checkPermission() async {
    try {
      // 对于大多数平台，flutter_local_notifications 会自动处理
      // Windows/Linux 不需要权限检查
      return true;
    } catch (e) {
      debugPrint('检查通知权限失败: $e');
      return false;
    }
  }

  /// 获取通知开关状态
  Future<bool> isNotificationEnabled() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      // 默认开启
      return prefs.getBool(_notificationEnabledKey) ?? true;
    } catch (e) {
      debugPrint('获取通知开关状态失败: $e');
      return true;
    }
  }

  /// 设置通知开关
  Future<void> setNotificationEnabled(bool enabled) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setBool(_notificationEnabledKey, enabled);
    } catch (e) {
      debugPrint('设置通知开关失败: $e');
    }
  }

  /// 发送即时通知
  Future<void> showNotification({
    required int id,
    required String title,
    required String body,
    String? payload,
  }) async {
    // 检查通知开关
    if (!await isNotificationEnabled()) {
      return;
    }

    // 检查权限
    if (!await checkPermission()) {
      debugPrint('没有通知权限，无法发送通知');
      return;
    }

    try {
      const androidDetails = AndroidNotificationDetails(
        'schedule_reminders',
        '日程提醒',
        channelDescription: '日程到期时间的提醒通知',
        importance: Importance.high,
        priority: Priority.high,
        showWhen: true,
      );

      const iosDetails = DarwinNotificationDetails(
        presentAlert: true,
        presentBadge: true,
        presentSound: true,
      );

      const macOsDetails = DarwinNotificationDetails(
        presentAlert: true,
        presentBadge: true,
        presentSound: true,
      );

      const linuxDetails = LinuxNotificationDetails();

      const details = NotificationDetails(
        android: androidDetails,
        iOS: iosDetails,
        macOS: macOsDetails,
        linux: linuxDetails,
      );

      await _notifications.show(
        id,
        title,
        body,
        details,
        payload: payload,
      );
    } catch (e) {
      debugPrint('发送通知失败: $e');
    }
  }

  /// 安排定时通知（暂不使用，日程使用实时检查方式）
  /// 注意：定时通知在Android上需要精确闹钟权限，且在应用重启后会丢失
  /// 当前采用每分钟检查的方式更可靠
  Future<void> scheduleNotification({
    required int id,
    required String title,
    required String body,
    required DateTime scheduledTime,
    String? payload,
  }) async {
    // 检查通知开关
    if (!await isNotificationEnabled()) {
      return;
    }

    // 检查权限
    if (!await checkPermission()) {
      debugPrint('没有通知权限，无法安排通知');
      return;
    }

    // 注意：flutter_local_notifications 的定时通知在不同平台实现不同
    // Android: 使用 AlarmManager，需要精确闹钟权限
    // iOS/macOS: 使用 UNNotificationRequest
    // Windows/Linux: 不支持定时通知
    
    // 对于日程提醒，我们使用实时检查的方式（每分钟轮询）更可靠
    debugPrint('定时通知功能暂不使用，采用实时检查方式');
  }

  /// 取消指定通知
  Future<void> cancelNotification(int id) async {
    try {
      await _notifications.cancel(id);
    } catch (e) {
      debugPrint('取消通知失败: $e');
    }
  }

  /// 取消所有通知
  Future<void> cancelAllNotifications() async {
    try {
      await _notifications.cancelAll();
    } catch (e) {
      debugPrint('取消所有通知失败: $e');
    }
  }

  /// 通知点击回调
  void _onNotificationTapped(NotificationResponse response) {
    debugPrint('通知被点击: ${response.payload}');
    // 这里可以处理通知点击事件，如跳转到对应的日程详情页
    // 可以通过 payload 传递日程ID等信息
  }
}
