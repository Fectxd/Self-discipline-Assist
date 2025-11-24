/// 节假日信息
class Holiday {
  final DateTime date;
  final String name;
  final bool isWorkday; // 是否需要上班（调休）
  final String? wage; // 加班工资倍数
  final String? rest; // 连休天数

  Holiday({
    required this.date,
    required this.name,
    this.isWorkday = false,
    this.wage,
    this.rest,
  });

  /// 从 API 返回的 Map 创建对象
  factory Holiday.fromMap(Map<String, dynamic> map) {
    return Holiday(
      date: DateTime.parse(map['date'] as String),
      name: map['name'] as String,
      isWorkday: (map['isOffDay'] as int?) == 0, // 0表示需要上班
      wage: map['wage'] as String?,
      rest: map['rest'] as String?,
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
    };
  }

  /// 从数据库 Map 创建对象
  factory Holiday.fromDbMap(Map<String, dynamic> map) {
    return Holiday(
      date: DateTime.parse(map['date'] as String),
      name: map['name'] as String,
      isWorkday: (map['is_workday'] as int) == 1,
      wage: map['wage'] as String?,
      rest: map['rest'] as String?,
    );
  }

  @override
  String toString() {
    return 'Holiday(date: $date, name: $name, isWorkday: $isWorkday)';
  }
}
