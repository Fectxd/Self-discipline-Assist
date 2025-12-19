/// 节假日信息
class Holiday {
  final DateTime date;
  final String name;
  final bool isWorkday; // 是否需要上班（调休）
  final String? wage; // 加班工资倍数
  final String? rest; // 连休天数
  final bool? after; // 补班标记：true=节后补班，false=节前补班，null=非补班日
  final String? target; // 补班目标节日（如"春节"、"国庆"）

  Holiday({
    required this.date,
    required this.name,
    this.isWorkday = false,
    this.wage,
    this.rest,
    this.after,
    this.target,
  });

  /// 从 API 返回的 Map 创建对象
  factory Holiday.fromApiResponse(Map<String, dynamic> map) {
    final isHoliday = map['holiday'];
    return Holiday(
      date: DateTime.parse(map['date'] as String),
      name: map['name'] as String,
      isWorkday: isHoliday == false, // holiday=false 表示补班日需要上班
      wage: map['wage']?.toString(),
      rest: map['rest']?.toString(),
      after: map['after'] as bool?, // 节前/节后补班标记
      target: map['target'] as String?, // 补班目标节日
    );
  }

  /// 从数据库 Map 创建对象
  factory Holiday.fromMap(Map<String, dynamic> map) {
    return Holiday(
      date: DateTime.parse(map['date'] as String),
      name: map['name'] as String,
      isWorkday: (map['is_workday'] as int) == 1,
      wage: map['wage'] as String?,
      rest: map['rest'] as String?,
      after: map['after'] != null ? (map['after'] as int) == 1 : null,
      target: map['target'] as String?,
    );
  }

  /// 转换为数据库 Map
  Map<String, dynamic> toMap() {
    return {
      'date': date.toIso8601String(),
      'name': name,
      'is_workday': isWorkday ? 1 : 0,
      'wage': wage,
      'rest': rest,
      'after': after != null ? (after! ? 1 : 0) : null,
      'target': target,
    };
  }


  @override
  String toString() {
    return 'Holiday(date: $date, name: $name, isWorkday: $isWorkday)';
  }
}
