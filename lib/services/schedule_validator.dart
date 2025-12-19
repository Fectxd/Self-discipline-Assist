/// 日程参数验证器
///
/// 用于验证AI输出的日程参数，确保数据完整性和合法性
/// 三层架构：
/// 1. 必填项验证 - 确保关键字段存在
/// 2. 业务逻辑验证 - 检查参数组合是否合理
/// 3. 自动修复 - 尝试修复可修复的错误
class ValidationResult {
  final bool isValid;
  final String? error;
  final Map<String, dynamic>? fixedData;
  final List<String> warnings;

  ValidationResult.success({this.fixedData, this.warnings = const []})
    : isValid = true,
      error = null;

  ValidationResult.error(this.error, {this.warnings = const []})
    : isValid = false,
      fixedData = null;

  /// 是否有自动修复
  bool get hasAutoFix => fixedData != null;
}

/// 需要持续时间的日程类型（关键字匹配）
const _durationRequiredKeywords = [
  '运动',
  '跑步',
  '健身',
  '锻炼',
  '游泳',
  '瑜伽',
  '打球',
  '会议',
  '开会',
  '讨论',
  '面试',
  '学习',
  '上课',
  '培训',
  '阅读',
  '看书',
  '工作',
  '加班',
  '编程',
  '写代码',
  '睡觉',
  '午睡',
  '休息',
  '做饭',
  '吃饭',
  '早餐',
  '午餐',
  '晚餐',
  '洗澡',
  '洗漱',
];

/// 瞬时事件类型（不需要end_time）
const _instantEventKeywords = [
  '吃药',
  '提醒',
  '闹钟',
  '打卡',
  '签到',
  '起床',
  '出门',
  '到达',
  '离开',
];

class ScheduleValidator {
  /// 验证创建日程的参数
  static ValidationResult validateCreateSchedule(Map<String, dynamic> data) {
    final warnings = <String>[];
    final errors = <String>[];

    // 1. 【必填项验证】title
    final title = data['title'] as String?;
    if (title == null || title.trim().isEmpty) {
      errors.add('缺少必填字段：title（日程标题）');
    }

    // 2. 【必填项验证】time
    final time = data['time'] as String?;
    if (time == null || time.trim().isEmpty) {
      errors.add('缺少必填字段：time（开始时间，格式 HH:mm）');
    } else if (!_isValidTimeFormat(time)) {
      errors.add('time 格式错误：应为 HH:mm 格式（如 08:30）');
    }

    // 3. 【业务逻辑验证】end_time
    final endTime = data['end_time'] as String?;
    final needsDuration = _requiresEndTime(title ?? '');

    if (needsDuration && (endTime == null || endTime.trim().isEmpty)) {
      // 这是关键验证：有持续时间的日程必须有结束时间
      errors.add('该类型日程需要指定结束时间（end_time）："$title" 是持续性活动');
    } else if (endTime != null && !_isValidTimeFormat(endTime)) {
      errors.add('end_time 格式错误：应为 HH:mm 格式（如 09:30）');
    }

    // 4. 【业务逻辑验证】recurrence 相关
    final recurrence = data['recurrence'] as String?;
    if (recurrence == 'weekly' && data['weekday'] == null) {
      errors.add('recurrence=weekly 时必须指定 weekday（1-7）');
    }
    if (recurrence == 'interval') {
      if (data['interval_days'] == null) {
        errors.add('recurrence=interval 时必须指定 interval_days');
      }
      if (data['start_date'] == null) {
        errors.add('recurrence=interval 时必须指定 start_date');
      }
    }

    // 5. 【业务逻辑验证】template_type 与 recurrence 冲突
    final templateType = data['template_type'] as String?;
    if (templateType != null &&
        templateType != 'none' &&
        recurrence != null &&
        recurrence != 'none') {
      warnings.add('同时指定了 template_type 和 recurrence，可能导致混淆');
    }

    // 6. 【业务逻辑验证】action_type 是否合法
    // 这个验证应该在外层进行，这里假设 action_type 已验证

    if (errors.isNotEmpty) {
      return ValidationResult.error(
        '参数验证失败：\n${errors.join('\n')}',
        warnings: warnings,
      );
    }

    if (warnings.isNotEmpty) {
      return ValidationResult.success(warnings: warnings);
    }

    return ValidationResult.success();
  }

  /// 验证修改单次日程的参数
  static ValidationResult validateModifyOnce(Map<String, dynamic> data) {
    final errors = <String>[];
    final warnings = <String>[];

    // 必须有 id 或 title
    if (data['id'] == null && data['title'] == null) {
      errors.add('modify_once 必须提供 id 或 title 参数');
    }

    // 必须有 date（使用 title 查找时）
    if (data['title'] != null && data['date'] == null) {
      errors.add('使用 title 查找时必须提供 date 参数');
    }

    // date 格式验证
    final date = data['date'] as String?;
    if (date != null && !_isValidDateFormat(date)) {
      errors.add('date 格式错误：应为 YYYY-MM-DD 格式（如 2025-12-01）');
    }

    // new_time 格式验证
    final newTime = data['new_time'] as String?;
    if (newTime != null && !_isValidTimeFormat(newTime)) {
      errors.add('new_time 格式错误：应为 HH:mm 格式（如 08:30）');
    }

    // new_end_time 验证（如果修改的是有持续时间的日程）
    final newEndTime = data['new_end_time'] as String?;
    final title = data['title'] as String? ?? data['new_title'] as String?;
    if (title != null && _requiresEndTime(title)) {
      if (newEndTime == null && newTime != null) {
        warnings.add('修改了有持续时间的日程 "$title"，但未指定 new_end_time');
      }
    }

    if (errors.isNotEmpty) {
      return ValidationResult.error(
        '参数验证失败：\n${errors.join('\n')}',
        warnings: warnings,
      );
    }

    return ValidationResult.success(warnings: warnings);
  }

  /// 验证修改规则的参数
  static ValidationResult validateModifyRule(Map<String, dynamic> data) {
    final errors = <String>[];

    if (data['id'] == null) {
      errors.add('modify 操作必须提供 id 参数');
    }

    // time 格式验证
    final time = data['time'] as String?;
    if (time != null && !_isValidTimeFormat(time)) {
      errors.add('time 格式错误：应为 HH:mm 格式');
    }

    // end_time 格式验证
    final endTime = data['end_time'] as String?;
    if (endTime != null && !_isValidTimeFormat(endTime)) {
      errors.add('end_time 格式错误：应为 HH:mm 格式');
    }

    if (errors.isNotEmpty) {
      return ValidationResult.error('参数验证失败：\n${errors.join('\n')}');
    }

    return ValidationResult.success();
  }

  /// 验证删除操作的参数
  static ValidationResult validateDelete(Map<String, dynamic> data) {
    if (data['id'] == null) {
      return ValidationResult.error('delete 操作必须提供 id 参数');
    }
    return ValidationResult.success();
  }

  /// 尝试自动修复数据（智能推断）
  static ValidationResult autoFix(
    String actionType,
    Map<String, dynamic> data,
  ) {
    final fixedData = Map<String, dynamic>.from(data);
    final warnings = <String>[];

    if (actionType == 'create') {
      // 修复1: 自动填充默认的 recurrence
      if (fixedData['recurrence'] == null &&
          fixedData['template_type'] == null) {
        fixedData['recurrence'] = 'none';
        fixedData['template_type'] = 'none';
        warnings.add('自动修复：添加了默认的 recurrence=none, template_type=none');
      }

      // 修复2: 自动推断 end_time（基于常见活动时长）
      final title = fixedData['title'] as String?;
      final endTime = fixedData['end_time'] as String?;

      if (title != null && _requiresEndTime(title) && endTime == null) {
        final time = fixedData['time'] as String?;
        if (time != null && _isValidTimeFormat(time)) {
          final estimatedDuration = _estimateDuration(title);
          final startParts = time.split(':');
          final startHour = int.parse(startParts[0]);
          final startMinute = int.parse(startParts[1]);

          final endHour = (startHour + estimatedDuration ~/ 60) % 24;
          final endMinute = (startMinute + estimatedDuration % 60) % 60;

          fixedData['end_time'] =
              '${endHour.toString().padLeft(2, '0')}:${endMinute.toString().padLeft(2, '0')}';

          warnings.add(
            '自动修复：为 "$title" 推断了结束时间 ${fixedData['end_time']} '
            '(估算时长: $estimatedDuration分钟)',
          );
        }
      }

      // 修复3: 规范化 template_type 和 recurrence 的冲突
      if (fixedData['template_type'] != null &&
          fixedData['template_type'] != 'none' &&
          (fixedData['recurrence'] == null ||
              fixedData['recurrence'] == 'none')) {
        // template_type 优先，清空 recurrence
        fixedData['recurrence'] = 'none';
        warnings.add('自动修复：template_type 优先，设置 recurrence=none');
      }
    }

    // 再次验证修复后的数据
    ValidationResult result;
    switch (actionType) {
      case 'create':
        result = validateCreateSchedule(fixedData);
        break;
      case 'modify_once':
        result = validateModifyOnce(fixedData);
        break;
      case 'modify':
        result = validateModifyRule(fixedData);
        break;
      case 'delete':
        result = validateDelete(fixedData);
        break;
      default:
        return ValidationResult.error('未知的操作类型: $actionType');
    }

    if (result.isValid) {
      return ValidationResult.success(
        fixedData: fixedData,
        warnings: [...warnings, ...result.warnings],
      );
    } else {
      return ValidationResult.error(result.error!, warnings: warnings);
    }
  }

  /// 判断日程是否需要结束时间
  static bool _requiresEndTime(String title) {
    final lowerTitle = title.toLowerCase();

    // 先检查瞬时事件（优先级高）
    for (var keyword in _instantEventKeywords) {
      if (lowerTitle.contains(keyword)) {
        return false;
      }
    }

    // 检查持续时间事件
    for (var keyword in _durationRequiredKeywords) {
      if (lowerTitle.contains(keyword)) {
        return true;
      }
    }

    // 默认：保守策略，建议填写 end_time
    return true;
  }

  /// 根据活动类型估算时长（分钟）
  static int _estimateDuration(String title) {
    final lowerTitle = title.toLowerCase();

    if (lowerTitle.contains('睡觉') || lowerTitle.contains('午睡')) {
      return 480; // 8小时
    }
    if (lowerTitle.contains('工作') || lowerTitle.contains('加班')) {
      return 240; // 4小时
    }
    if (lowerTitle.contains('学习') || lowerTitle.contains('上课')) {
      return 120; // 2小时
    }
    if (lowerTitle.contains('运动') || lowerTitle.contains('健身')) {
      return 60; // 1小时
    }
    if (lowerTitle.contains('会议') || lowerTitle.contains('面试')) {
      return 60; // 1小时
    }
    if (lowerTitle.contains('吃饭') ||
        lowerTitle.contains('早餐') ||
        lowerTitle.contains('午餐') ||
        lowerTitle.contains('晚餐')) {
      return 30; // 30分钟
    }
    if (lowerTitle.contains('洗澡') || lowerTitle.contains('洗漱')) {
      return 20; // 20分钟
    }

    // 默认1小时
    return 60;
  }

  /// 验证时间格式 HH:mm
  static bool _isValidTimeFormat(String time) {
    final regex = RegExp(r'^([01]\d|2[0-3]):([0-5]\d)$');
    return regex.hasMatch(time);
  }

  /// 验证日期格式 YYYY-MM-DD
  static bool _isValidDateFormat(String date) {
    try {
      DateTime.parse(date);
      return true;
    } catch (e) {
      return false;
    }
  }

  /// 生成人类可读的错误提示（用于反馈给AI）
  static String generateAIFeedback(ValidationResult result) {
    if (result.isValid) {
      return '参数验证通过';
    }

    final buffer = StringBuffer();
    buffer.writeln('❌ 参数错误，请重新生成：');
    buffer.writeln(result.error);
    buffer.writeln();
    buffer.writeln('💡 修正建议：');
    buffer.writeln('1. 检查必填字段：title, time');
    buffer.writeln('2. 持续性活动（运动、会议、学习等）必须填写 end_time');
    buffer.writeln('3. 时间格式：HH:mm（如 08:30）');
    buffer.writeln('4. 日期格式：YYYY-MM-DD（如 2025-12-01）');

    return buffer.toString();
  }
}
