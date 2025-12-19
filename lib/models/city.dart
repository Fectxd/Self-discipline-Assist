/// 城市模型
class City {
  final String name; // 城市名称（中文）
  final String? nameEn; // 城市名称（英文）
  final String? country; // 国家
  final String? province; // 省份/州

  City({required this.name, this.nameEn, this.country, this.province});

  factory City.fromJson(Map<String, dynamic> json) {
    return City(
      name: json['name'] as String,
      nameEn: json['nameEn'] as String?,
      country: json['country'] as String?,
      province: json['province'] as String?,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'name': name,
      if (nameEn != null) 'nameEn': nameEn,
      if (country != null) 'country': country,
      if (province != null) 'province': province,
    };
  }

  /// 显示名称（包含省份/国家信息）
  String get displayName {
    final parts = <String>[];
    if (country != null && country != '中国') {
      parts.add(country!);
    }
    if (province != null && province != name) {
      parts.add(province!);
    }
    parts.add(name);
    return parts.join(' ');
  }

  /// 搜索匹配（中英文，含省份与国家）
  bool matches(String query) {
    final lowerQuery = query.toLowerCase();

    // 匹配中文
    if (name.toLowerCase().contains(lowerQuery)) {
      return true;
    }

    // 匹配英文
    if (nameEn != null && nameEn!.toLowerCase().contains(lowerQuery)) {
      return true;
    }

    // 匹配省份
    if (province != null && province!.toLowerCase().contains(lowerQuery)) {
      return true;
    }

    // 匹配国家
    if (country != null && country!.toLowerCase().contains(lowerQuery)) {
      return true;
    }

    return false;
  }

  @override
  String toString() => displayName;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is City &&
          runtimeType == other.runtimeType &&
          name == other.name &&
          country == other.country;

  @override
  int get hashCode => name.hashCode ^ (country?.hashCode ?? 0);
}
