import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'services/database_service.dart';
import 'services/holiday_service.dart';
import 'services/day_service.dart';
import 'services/work_schedule_service.dart';
import 'services/gpt_service.dart';
import 'screens/schedule_screen.dart';
import 'screens/calendar_screen.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  
  // 初始化服务
  final dbService = DatabaseService();
  final holidayService = HolidayService();
  final workScheduleService = WorkScheduleService();
  
  // 工作制服务需要先初始化
  await workScheduleService.init();
  
  // DayService 需要 WorkScheduleService
  final dayService = DayService(dbService, holidayService, workScheduleService);
  
  // 初始化日期服务
  await dayService.init();
  
  // 预加载今年和明年的节假日
  final currentYear = DateTime.now().year;
  await dayService.preloadHolidays(currentYear);
  await dayService.preloadHolidays(currentYear + 1);
  
  runApp(
    MultiProvider(
      providers: [
        Provider.value(value: dbService),
        Provider.value(value: holidayService),
        ChangeNotifierProvider.value(value: dayService),
        Provider.value(value: workScheduleService),
      ],
      child: const MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: '自律助手',
      debugShowCheckedModeBanner: false,
      
      // 主题配置
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.blue),
        useMaterial3: true,
      ),
      
      // 本地化配置
      localizationsDelegates: const [
        GlobalMaterialLocalizations.delegate,
        GlobalWidgetsLocalizations.delegate,
        GlobalCupertinoLocalizations.delegate,
      ],
      supportedLocales: const [
        Locale('zh', 'CN'),
      ],
      
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
  final GlobalKey<ScheduleScreenState> _scheduleKey = GlobalKey<ScheduleScreenState>();
  late GptService _gptService;

  @override
  void initState() {
    super.initState();
    // 初始化 GptService（全局单例）
    final dbService = Provider.of<DatabaseService>(context, listen: false);
    final dayService = Provider.of<DayService>(context, listen: false);
    final workScheduleService = Provider.of<WorkScheduleService>(context, listen: false);
    _gptService = GptService(dbService, dayService, workScheduleService);
  }

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
    return Scaffold(
      body: IndexedStack(
        index: _currentIndex,
        children: [
          ScheduleScreen(
            key: _scheduleKey,
            initialDate: _selectedDate,
            gptService: _gptService,
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
          NavigationDestination(
            icon: Icon(Icons.smart_toy),
            label: 'AI 日程',
          ),
          NavigationDestination(
            icon: Icon(Icons.calendar_month),
            label: '日历',
          ),
        ],
      ),
    );
  }
}
