import 'api_config_service.dart';
import 'database_service.dart';
import 'day_service.dart';
import 'work_schedule_service.dart';
import 'msn_service.dart';
import 'function_calling_service_v2.dart';

/// Gemini 服务
class GeminiService extends FunctionCallingServiceV2 {
  GeminiService(
    ApiConfigService configService,
    DatabaseService dbService,
    DayService dayService,
    WorkScheduleService workScheduleService,
    MsnService msnService,
  ) : super(configService, dbService, dayService, workScheduleService, msnService);
}
