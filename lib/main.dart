import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'services/database_service.dart';
import 'services/holiday_service.dart';
import 'services/day_service.dart';
import 'services/work_schedule_service.dart';
import 'services/api_config_service.dart';
import 'services/gpt_service.dart';
import 'services/gemini_service.dart';
import 'services/ai_service.dart';
import 'services/msn_service.dart';
import 'services/dashboard_widget_service.dart';
import 'services/notification_service.dart';
import 'services/schedule_notification_service.dart';
import 'services/settings_service.dart' as settings;
import 'services/schedule_data_service.dart';
import 'services/memory_service.dart';
import 'services/import_export_service.dart';
import 'screens/schedule_screen.dart';
import 'screens/calendar_screen.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  try {
    // 初始化服务
    final dbService = DatabaseService();
    final holidayService = HolidayService();
    final workScheduleService = WorkScheduleService();
    final apiConfigService = ApiConfigService();

    // 初始化 SharedPreferences
    final prefs = await SharedPreferences.getInstance();

    // 初始化MSN服务和小部件管理服务
    final msnService = MsnService();
    await msnService.preloadCache();
    final dashboardWidgetService = DashboardWidgetService(prefs);

    // 初始化设置服务
    final settingsService = settings.SettingsService(prefs);

    // 初始化通知服务
    final notificationService = NotificationService();
    await notificationService.initialize();

    // 初始化日程通知调度服务
    final scheduleNotificationService = ScheduleNotificationService(
      dbService,
      notificationService,
    );
    scheduleNotificationService.startMonitoring();

    // 初始化 API 配置服务
    await apiConfigService.init();

    // 工作制服务需要先初始化
    await workScheduleService.init();

    // DayService 需要 WorkScheduleService
    final dayService = DayService(
      dbService,
      holidayService,
      workScheduleService,
    );

    // 初始化日期服务
    await dayService.init();

    // 预加载今年和明年的节假日
    final currentYear = DateTime.now().year;
    await dayService.preloadHolidays(currentYear);
    await dayService.preloadHolidays(currentYear + 1);

    // 初始化日程数据服务
    final scheduleDataService = ScheduleDataService(dbService, dayService);

    // 初始化导入导出服务
    final importExportService = ImportExportService(dbService);

    // 初始化记忆服务
    final db = await dbService.database;
    final memoryService = MemoryService(db);
    await memoryService.loadMemories();

    runApp(
      MultiProvider(
        providers: [
          Provider.value(value: dbService),
          Provider.value(value: holidayService),
          Provider.value(value: workScheduleService),
          ChangeNotifierProvider.value(value: apiConfigService),
          ChangeNotifierProvider.value(value: dayService),
          // MSN服务和小部件管理
          ChangeNotifierProvider.value(value: msnService),
          ChangeNotifierProvider.value(value: dashboardWidgetService),
          // 设置服务
          ChangeNotifierProvider.value(value: settingsService),
          // 日程数据服务
          ChangeNotifierProvider.value(value: scheduleDataService),
          // 导入导出服务
          Provider.value(value: importExportService),
          // 记忆服务
          ChangeNotifierProvider.value(value: memoryService),
          // AI 服务 (依赖 ApiConfigService, DatabaseService, DayService, WorkScheduleService, MsnService)
          ProxyProvider5<
            ApiConfigService,
            DatabaseService,
            DayService,
            WorkScheduleService,
            MsnService,
            AIService
          >(
            update: (context, config, db, day, work, msn, previous) {
              // 如果配置发生变化，重新创建服务
              if (config.isGemini) {
                return GeminiService(config, db, day, work, msn);
              } else {
                return GptService(config, db, day, work, msn);
              }
            },
          ),
        ],
        child: const MyApp(),
      ),
    );
  } catch (e, st) {
    // 捕获任何启动异常，避免应用在 release 上直接闪退
    debugPrint('应用启动初始化失败: $e\n$st');

    runApp(
      MaterialApp(
        debugShowCheckedModeBanner: false,
        home: Scaffold(
          appBar: AppBar(title: const Text('初始化失败')),
          body: Center(
            child: Padding(
              padding: const EdgeInsets.all(16.0),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  const Text(
                    '应用启动期间发生错误，请检查日志 (adb logcat) 。',
                    textAlign: TextAlign.center,
                  ),
                  const SizedBox(height: 12),
                  Text(
                    e.toString(),
                    textAlign: TextAlign.center,
                    style: const TextStyle(color: Colors.red),
                  ),
                  const SizedBox(height: 16),
                  ElevatedButton(
                    onPressed: () {
                      // 尝试简单重启应用（仅在 debug 有效），或者可以引导用户重启
                    },
                    child: const Text('重试'),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    // 监听设置服务的主题变化
    final settingsService = Provider.of<settings.SettingsService>(context);

    // 根据设置决定主题模式
    ThemeMode themeMode;
    switch (settingsService.themeMode) {
      case settings.ThemeMode.light:
        themeMode = ThemeMode.light;
        break;
      case settings.ThemeMode.dark:
        themeMode = ThemeMode.dark;
        break;
      case settings.ThemeMode.system:
        themeMode = ThemeMode.system;
        break;
    }

    return MaterialApp(
      title: '自律助手',
      debugShowCheckedModeBanner: false,

      // 主题配置 - 浅色主题
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(
          seedColor: Colors.blue,
          brightness: Brightness.light,
        ),
        useMaterial3: true,
      ),

      // 深色主题
      darkTheme: ThemeData(
        colorScheme: ColorScheme.fromSeed(
          seedColor: Colors.blue,
          brightness: Brightness.dark,
        ),
        useMaterial3: true,
      ),

      // 主题模式
      themeMode: themeMode,

      // 处理 MediaQuery 异常问题，特别是小米澎湃/HyperOS 系统
      builder: (BuildContext context, Widget? child) {
        MediaQueryData mediaQuery = MediaQuery.of(context);
        double safeTop = mediaQuery.padding.top;

        // 如果出现异常值（比如在小窗模式下），使用一个合理的默认值
        if (safeTop > 80 || safeTop < 0) {
          // 在 debug 模式下打印日志，方便排查问题
          assert(() {
            debugPrint(
              'Detected abnormal top padding: $safeTop, using fallback.',
            );
            return true;
          }());
          safeTop = 24.0; // 24.0 是一个比较常见的状态栏高度
        }

        return MediaQuery(
          data: mediaQuery.copyWith(
            padding: mediaQuery.padding.copyWith(top: safeTop),
          ),
          child: child ?? const SizedBox.shrink(),
        );
      },

      // 本地化配置
      localizationsDelegates: const [
        GlobalMaterialLocalizations.delegate,
        GlobalWidgetsLocalizations.delegate,
        GlobalCupertinoLocalizations.delegate,
      ],
      supportedLocales: const [Locale('zh', 'CN')],

      home: const MainScreen(),
    );
  }
}

class MainScreen extends StatefulWidget {
  const MainScreen({super.key});

  @override
  State<MainScreen> createState() => _MainScreenState();
}

class _MainScreenState extends State<MainScreen> {
  int _currentIndex = 0;
  DateTime? _selectedDate;
  final GlobalKey<ScheduleScreenState> _scheduleKey =
      GlobalKey<ScheduleScreenState>();

  void _onDateSelectedFromCalendar(DateTime date) {
    setState(() {
      _selectedDate = date;
      _currentIndex = 0; // 切换到 AI 日程标签页
    });
    // 通知 ScheduleScreen 更新日期
    Future.microtask(() {
      _scheduleKey.currentState?.updateSelectedDate(date);
    });
  }

  @override
  Widget build(BuildContext context) {
    // 从 Provider 获取 AIService
    final aiService = Provider.of<AIService>(context);

    return Scaffold(
      body: IndexedStack(
        index: _currentIndex,
        children: [
          ScheduleScreen(
            key: _scheduleKey,
            initialDate: _selectedDate,
            aiService: aiService,
          ),
          CalendarScreen(onDateSelected: _onDateSelectedFromCalendar),
        ],
      ),
      bottomNavigationBar: NavigationBar(
        selectedIndex: _currentIndex,
        onDestinationSelected: (index) {
          setState(() {
            _currentIndex = index;
          });
        },
        destinations: const [
          NavigationDestination(icon: Icon(Icons.smart_toy), label: 'AI 日程'),
          NavigationDestination(icon: Icon(Icons.calendar_month), label: '日历'),
        ],
      ),
    );
  }
}
