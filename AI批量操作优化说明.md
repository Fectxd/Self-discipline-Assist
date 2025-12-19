# AI 批量操作优化说明 - 完全重构版

## 问题背景

当用户要求 AI "删除所有日程" 时,AI 会:
1. 调用 `query_schedules` 查询所有日程 (endTime 为 2099 年)
2. 获取从 2025 到 2099 年**每一天**的所有日程数据
3. 将这些日程逐条传递给用户界面
4. 造成数据传输量巨大,甚至可能导致界面卡死

**示例**: 75年 × 365天 × 每天20条日程 = 约55万条日程数据被传输!

## 根本原因

`query_schedules` 接口设计存在根本性缺陷:
- ❌ 允许查询任意日期范围 (即使限制到90天仍不够安全)
- ❌ 返回生成的日程实例而非规则本身
- ❌ AI 可能误用来查询长期数据

## 解决方案: 完全重构接口

## 解决方案: 完全重构接口

### ❌ 删除的危险接口

**`query_schedules`** - 已完全移除
- 原因: 允许查询任意日期范围,即使有90天限制仍不够安全
- 问题: AI 可能误用查询大量数据

### ✅ 新增的安全接口

#### 1. `get_recent_schedules` - 查询最近日程

**严格限制:**
- ✅ 只能查询距今 **±7天** 内的日期
- ✅ 单次最多查询 **7天** 连续日程
- ✅ 超出范围直接返回错误

```json
{
  "name": "get_recent_schedules",
  "description": "获取最近几天的日程(最多7天)",
  "parameters": {
    "date": "只能是 'today'/'tomorrow'/'yesterday' 或 ±7天内的日期",
    "days_count": "连续查询天数(1-7),默认1"
  }
}
```

**使用场景:**
- ✅ 查看今天/明天的日程
- ✅ 查看最近几天的安排
- ❌ 查询下个月/明年的日程

**安全措施:**
```dart
// 严格限制: 只能查询距今7天内
final daysDiff = startDate.difference(DateTime.now()).inDays.abs();
if (daysDiff > 7) {
  return {'error': '只能查询距今7天内的日程'};
}

// 天数限制: 最多连续7天
final daysCount = (args['days_count'] ?? 1).clamp(1, 7);
```

#### 2. `get_rules_summary` - 查询规则摘要

**返回规则而非日程:**
- ✅ 直接返回规则配置信息
- ✅ 不生成具体日程实例
- ✅ 高效了解日程规划

```json
{
  "name": "get_rules_summary",
  "description": "获取所有日程规则的摘要信息(不生成具体日程)",
  "parameters": {
    "include_disabled": "是否包含已禁用的规则,默认false"
  }
}
```

**返回示例:**
```json
{
  "success": true,
  "total_rules": 15,
  "rules": [
    {
      "id": "rule_123",
      "title": "早餐",
      "time": "07:30",
      "endTime": "08:00",
      "recurrence": "DAILY",
      "isEnabled": true
    }
  ]
}
```

**使用场景:**
- ✅ 了解用户设置了哪些规则
- ✅ 检查某个活动是否有长期规划
- ✅ 分析规则冲突
- ❌ 查看具体某天的日程安排

#### 3. `delete_all_rules` - 批量删除规则

```dart
{
  "type": "function",
  "function": {
    "name": "delete_all_rules",
    "description": "删除所有日程规则。⚠️ 此操作会清空所有规则和覆盖,谨慎使用。",
    "parameters": {
      "type": "object",
      "properties": {
        "confirm": {
          "type": "boolean",
          "description": "确认删除,必须为 true"
        }
      },
      "required": ["confirm"]
    }
  }
}
```

**使用场景**: 用户明确要求"删除所有日程"、"清空所有日程"

**优势**: 
- 直接删除规则表,无需查询每条日程
- 返回删除统计: `{"deleted_rules": 10, "deleted_overrides": 5}`
- 避免大量数据传输

### 2. 限制查询范围

在 `query_schedules` 函数中添加了限制:

```dart
const maxDays = 90;        // 最多查询90天
const maxSchedules = 500;  // 最多返回500条日程

if (daysDiff > maxDays) {
  return {
    'error': '查询范围过大',
    'message': '单次查询最多支持 90 天,您请求查询了 $daysDiff 天。',
  };
}

if (allSchedules.length > maxSchedules) {
  return {
    'warning': '日程数量过多',
    'count': 500,
    'schedules': [...前500条...],
  };
}
```

**优势**:
- 避免一次查询几年的数据
- 超限时给出明确提示
- 引导用户缩小查询范围或分批查询

### 3. 更新系统提示词

在系统提示中明确告知 AI:

```
## 核心规则
2. **批量删除**: 用户说"删除所有日程"、"清空所有日程"时，
   使用 delete_all_rules 函数，**禁止**先 query_schedules 再逐条删除
   
7. **查询限制**: query_schedules 最多支持90天范围、500条日程，
   避免大范围查询
```

## 使用示例

### ❌ 之前的错误方式
```
用户: 删除所有日程
AI: [调用 query_schedules(2025-01-01, 2099-12-31)]
    [传输 50万+ 条日程数据]
    [逐条调用 propose_action 删除]
```

### ✅ 现在的正确方式
```
用户: 删除所有日程
AI: [调用 delete_all_rules(confirm=true)]
    返回: {"deleted_rules": 15, "deleted_overrides": 8}
AI: 已删除所有日程规则(15条规则,8条覆盖)
```

## 技术细节

### delete_all_rules 实现
```dart
Future<Map<String, dynamic>> _deleteAllRules(Map<String, dynamic> args) async {
  final confirm = args['confirm'] as bool? ?? false;
  
  if (!confirm) {
    return {'error': '需要确认'};
  }
  
  final db = await _dbService.database;
  
  // 获取数量统计
  final rules = await _dbService.getAllRules();
  final overrides = await _dbService.getAllOverrides();
  
  // 批量删除
  await db.delete('schedule_rules');
  await db.delete('schedule_overrides');
  
  return {
    'success': true,
    'deleted_rules': rules.length,
    'deleted_overrides': overrides.length,
  };
}
```

### query_schedules 优化
```dart
// 限制日期范围
const maxDays = 90;
if (daysDiff > maxDays) {
  return {'error': '查询范围过大', 'max_days': 90};
}

// 限制返回数量
const maxSchedules = 500;
if (allSchedules.length > maxSchedules) {
  return {
    'warning': '日程数量过多',
    'schedules': allSchedules.take(500).toList(),
  };
}
```

## 影响范围

### 新增功能
- ✅ `delete_all_rules` function
- ✅ `_deleteAllRules` 实现函数

### 修改功能
- ✅ `query_schedules` 添加范围和数量限制
- ✅ 系统提示词更新

### 兼容性
- ✅ 不影响现有功能
- ✅ 向后兼容
- ✅ 只在需要时使用新函数

## 测试建议

1. **批量删除测试**
   ```
   用户: 删除所有日程
   预期: AI 调用 delete_all_rules,返回删除统计
   ```

2. **查询范围限制测试**
   ```
   用户: 查询2025到2099年的日程
   预期: AI 返回"查询范围过大"错误
   ```

3. **查询数量限制测试**
   ```
   创建大量日程规则(日均20条,30天=600条)
   用户: 查询未来30天的日程
   预期: 返回前500条+警告信息
   ```

## 总结

这次优化解决了 AI 在处理批量操作时的核心问题:
- ⚡ **性能**: 从传输50万+条数据降为传输1条统计信息
- 🎯 **准确性**: AI 理解应该用规则操作而非逐条操作
- 🛡️ **安全性**: 限制单次查询范围,避免系统过载
- 💡 **用户体验**: 操作更快,响应更准确
