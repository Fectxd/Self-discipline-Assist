# JSON 转换器架构说明

## 📋 概述

为了更好地维护和管理 JSON 序列化/反序列化逻辑，我们将相关代码抽离成独立的转换器类。

## 🏗️ 架构设计

### 转换器类

#### 1. ScheduleRuleConverter
**位置**: `lib/utils/schedule_rule_converter.dart`

**职责**: 
- 处理 `ScheduleRule` 和 `RuleCondition` 的 JSON 转换
- 支持两种来源的 JSON：
  - **AI JSON**: 来自 GPT Function Calling 的参数
  - **Database JSON**: 数据库存储的格式

**API**:
```dart
// 从 AI JSON 创建规则
ScheduleRule fromAIJson(Map<String, dynamic> json)

// 从数据库 Map 创建规则
ScheduleRule fromDatabaseMap(Map<String, dynamic> map)

// 转换为数据库 Map
Map<String, dynamic> toDatabaseMap(ScheduleRule rule)
```

#### 2. ScheduleOverrideConverter
**位置**: `lib/utils/schedule_override_converter.dart`

**职责**:
- 处理 `ScheduleOverride` 的 JSON 转换
- 支持 AI 和数据库两种格式

**API**:
```dart
// 从 AI JSON 创建覆盖
ScheduleOverride fromAIJson(Map<String, dynamic> json)

// 从数据库 Map 创建覆盖
ScheduleOverride fromDatabaseMap(Map<String, dynamic> map)

// 转换为数据库 Map
Map<String, dynamic> toDatabaseMap(ScheduleOverride override)
```

---

## 📊 JSON 格式对照

### ScheduleRule 格式

#### AI JSON 格式
```json
{
  "title": "晨跑",
  "time": "07:00",
  "end_time": "08:00",
  "description": "每天早上跑步",
  
  // 重复规则
  "recurrence": "daily",           // daily | weekly | interval | monthly | none
  "template_type": "workday",      // workday | restday | weekend | holiday | none
  
  // 条件参数
  "weekday": 1,                    // 1-7 (周一到周日)
  "interval_days": 3,              // 间隔天数
  "start_date": "2025-01-01",      // 开始日期
  
  // 时间范围限制
  "end_date": "2025-12-31",        // 结束日期
  "max_count": 100,                // 最大重复次数
  
  // 特殊情况
  "date": "2025-12-25",            // 特定日期
  "specific_date": "2025-12-25"    // 特定日期（备选）
}
```

#### 数据库 JSON 格式
```json
{
  "id": "uuid-xxx-xxx",
  "title": "晨跑",
  "time": "07:00",
  "end_time": "08:00",
  "description": "每天早上跑步",
  "condition": "{\"type\":\"daily\",\"end_date\":\"2025-12-31\",\"max_count\":100}",
  "created_at": "2025-01-01T00:00:00.000Z",
  "updated_at": "2025-01-01T00:00:00.000Z",
  "is_enabled": 1
}
```

### ScheduleOverride 格式

#### AI JSON 格式
```json
{
  "date": "2025-12-25",           // 单日覆盖
  "end_date": "2025-12-31",       // 区间覆盖（可选）
  "rule_id": "uuid-xxx-xxx",
  "type": "modify",               // skip | modify_time | modify | replace | complete
  
  // 修改的属性
  "new_time": "10:00",
  "new_end_time": "11:00",
  "new_title": "新标题",
  "new_description": "新描述",
  
  // 扩展数据
  "metadata": {
    "location": "xxx",
    "participants": ["A", "B"]
  }
}
```

#### 数据库 JSON 格式
```json
{
  "id": "uuid-xxx-xxx",
  "start_date": "2025-12-25T00:00:00.000Z",
  "end_date": "2025-12-31T00:00:00.000Z",
  "rule_id": "uuid-xxx-xxx",
  "type": "modify",
  "new_time": "10:00",
  "new_end_time": "11:00",
  "new_title": "新标题",
  "new_description": "新描述",
  "metadata": "{\"location\":\"xxx\"}",
  "created_at": "2025-01-01T00:00:00.000Z"
}
```

---

## 🔄 数据流

### 创建日程流程

```
AI 调用 propose_action
         ↓
GPT Service 接收 AI JSON
         ↓
ScheduleRuleConverter.fromAIJson() ← 转换
         ↓
ScheduleRule 对象
         ↓
ScheduleRule.toMap() → ScheduleRuleConverter.toDatabaseMap()
         ↓
Database Service 存储
```

### 读取日程流程

```
Database Service 查询
         ↓
数据库 Map
         ↓
ScheduleRule.fromMap() → ScheduleRuleConverter.fromDatabaseMap()
         ↓
ScheduleRule 对象
         ↓
UI 显示
```

---

## ✅ 优势

### 1. **集中管理**
所有 JSON 格式定义和转换逻辑都在转换器类中，便于维护。

### 2. **职责分离**
- **模型类**: 只关注数据结构和业务逻辑
- **转换器类**: 专门处理 JSON 转换
- **服务类**: 只调用转换器，不关心具体格式

### 3. **易于测试**
转换器类是纯函数，容易编写单元测试。

### 4. **格式兼容**
同时支持 AI JSON 和数据库 JSON 两种格式，自动处理转换。

### 5. **扩展性强**
需要支持新格式（如导入导出）时，只需在转换器中添加新方法。

---

## 🔧 使用示例

### GPT Service 中创建规则
```dart
Future<void> _createSchedule(Map<String, dynamic> data) async {
  // 直接使用转换器，无需手动解析
  final rule = ScheduleRuleConverter.fromAIJson(data);
  await _dbService.insertRule(rule);
}
```

### 手动编辑界面创建覆盖
```dart
final override = ScheduleOverride(
  startDate: date,
  ruleId: ruleId,
  type: OverrideType.modify,
  newTime: "10:00",
  newEndTime: "11:00",
);

// 转换器自动处理序列化
await dbService.insertOverride(override);
```

### 数据库查询
```dart
// 数据库返回 Map，自动转换为对象
final rules = await db.query('schedule_rules');
final scheduleRules = rules.map((m) => ScheduleRule.fromMap(m)).toList();
```

---

## 📝 维护指南

### 添加新字段

1. **在模型类中添加字段**
```dart
class ScheduleRule {
  final String? location;  // 新字段
}
```

2. **在转换器中处理**
```dart
static ScheduleRule fromAIJson(Map<String, dynamic> json) {
  return ScheduleRule(
    // ...
    location: json['location'] as String?,  // 添加解析
  );
}
```

3. **更新数据库 Map 转换**
```dart
static Map<String, dynamic> toDatabaseMap(ScheduleRule rule) {
  return {
    // ...
    'location': rule.location,  // 添加存储
  };
}
```

### 支持新的 JSON 格式

在转换器中添加新方法：
```dart
static ScheduleRule fromExportJson(Map<String, dynamic> json) {
  // 处理导出格式
}

static Map<String, dynamic> toExportJson(ScheduleRule rule) {
  // 转换为导出格式
}
```

---

## 🎯 最佳实践

1. ✅ **所有 JSON 转换都通过转换器**
2. ✅ **模型类不直接处理 JSON 细节**
3. ✅ **转换器方法保持为静态方法**
4. ✅ **添加详细的注释说明格式**
5. ✅ **编写单元测试验证转换正确性**

---

## 🔍 相关文件

- `lib/utils/schedule_rule_converter.dart`
- `lib/utils/schedule_override_converter.dart`
- `lib/models/schedule_rule.dart`
- `lib/models/schedule_override.dart`
- `lib/services/gpt_service.dart`
- `lib/services/database_service.dart`
