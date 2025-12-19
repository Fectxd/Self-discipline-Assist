import 'api_config_service.dart';
import 'database_service.dart';
import 'day_service.dart';
import 'work_schedule_service.dart';
import 'msn_service.dart';
import 'function_calling_service_v2.dart';

/// GPT Function Calling 服务
class GptService extends FunctionCallingServiceV2 {
  GptService(
    ApiConfigService configService,
    DatabaseService dbService,
    DayService dayService,
    WorkScheduleService workScheduleService,
    MsnService msnService,
  ) : super(configService, dbService, dayService, workScheduleService, msnService);
}
