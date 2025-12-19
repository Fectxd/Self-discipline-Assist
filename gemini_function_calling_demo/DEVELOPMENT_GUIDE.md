# 开发指南

这份文档提供了如何基于这个 demo 进行扩展和定制的详细说明。

## 目录

1. [添加新函数](#添加新函数)
2. [配置函数调用模式](#配置函数调用模式)
3. [自定义系统提示词](#自定义系统提示词)
4. [错误处理](#错误处理)
5. [测试指南](#测试指南)
6. [最佳实践](#最佳实践)

---

## 添加新函数

### 步骤 1: 在 `functions.py` 中定义函数

```python
def get_weather(city: str) -> Dict[str, Any]:
    """获取指定城市的天气信息.

    Args:
        city: 城市名称

    Returns:
        包含天气信息的字典，格式如下：
        {
            "city": "北京",
            "temperature": 15,
            "condition": "晴"
        }
    """
    # 你的实现
    return {
        "city": city,
        "temperature": 15,
        "condition": "晴"
    }
```

**规范要求**：
- ✅ 必须有完整的类型注解（参数和返回值）
- ✅ 必须有详细的文档字符串
- ✅ 返回值必须是 JSON 可序列化的
- ✅ 参数类型必须是 Gemini 支持的类型

**支持的参数类型**：
- `str` - 字符串
- `int` - 整数
- `float` - 浮点数
- `bool` - 布尔值
- `List[T]` - 列表
- `Dict[str, T]` - 字典

### 步骤 2: 注册函数

在 `functions.py` 的 `AVAILABLE_FUNCTIONS` 列表中添加你的函数：

```python
AVAILABLE_FUNCTIONS = [
    get_current_time,
    get_today_schedule,
    get_weather,  # 新添加的函数
]
```

### 步骤 3: 测试

创建测试代码：

```python
from agent import create_agent

agent = create_agent()
response = agent.send_message("北京今天天气怎么样？")
print(response)
```

---

## 配置函数调用模式

在 `config.py` 中修改 `FUNCTION_CALLING_MODE`：

### AUTO 模式（推荐）

```python
FUNCTION_CALLING_MODE = "auto"
```

**特点**：
- 模型自主决定是否调用函数
- 适合大多数场景
- 如果不需要函数，模型会直接回答

**示例**：
```
用户: "你好"
模型: "你好！有什么可以帮你的吗？" （不调用函数）

用户: "现在几点？"
模型: 调用 get_current_time() → "现在是 18:20"
```

### ANY 模式

```python
FUNCTION_CALLING_MODE = "any"
```

**特点**：
- 强制模型至少调用一个函数
- 适合必须获取数据的场景
- 即使问候语也会尝试调用函数

### NONE 模式

```python
FUNCTION_CALLING_MODE = "none"
```

**特点**：
- 禁用所有函数调用
- 模型仅使用文本回答
- 适合纯对话场景

---

## 自定义系统提示词

系统提示词定义了 Agent 的行为和个性。在 `config.py` 中修改：

```python
SYSTEM_INSTRUCTION = """你是一个专业的财务顾问助手。

你的职责：
1. 使用提供的工具查询用户的账户信息
2. 基于数据给出专业的理财建议
3. 用专业但易懂的语言解释财务概念

注意事项：
- 始终先获取数据再给建议
- 保护用户隐私
- 避免给出过于激进的投资建议
"""
```

**最佳实践**：
- ✅ 明确定义 Agent 的角色
- ✅ 列出具体的职责
- ✅ 说明何时使用工具
- ✅ 添加注意事项和限制

---

## 错误处理

### 函数执行错误

在 `functions.py` 中处理错误：

```python
def risky_function(param: str) -> Dict[str, Any]:
    """可能失败的函数.

    Args:
        param: 参数

    Returns:
        结果或错误信息
    """
    try:
        # 可能失败的操作
        result = some_risky_operation(param)
        return {"success": True, "data": result}
    except Exception as e:
        # 返回错误信息，让模型知道发生了什么
        return {
            "success": False,
            "error": str(e),
            "message": "操作失败，请稍后重试"
        }
```

### API 调用错误

在 `agent.py` 中捕获错误：

```python
try:
    response = agent.send_message(message)
except Exception as e:
    print(f"错误: {e}")
    # 重试逻辑
    # 日志记录
    # 用户通知
```

---

## 测试指南

### 单元测试函数

创建 `test_functions.py`：

```python
import unittest
from functions import get_current_time, get_today_schedule

class TestFunctions(unittest.TestCase):

    def test_get_current_time(self):
        """测试获取当前时间"""
        result = get_current_time()

        self.assertIn("date", result)
        self.assertIn("time", result)
        self.assertIn("weekday", result)

        # 验证格式
        self.assertRegex(result["date"], r"\d{4}-\d{2}-\d{2}")
        self.assertRegex(result["time"], r"\d{2}:\d{2}")

    def test_get_today_schedule(self):
        """测试获取日程"""
        result = get_today_schedule()

        self.assertIn("schedules", result)
        self.assertIsInstance(result["schedules"], list)
        self.assertGreater(len(result["schedules"]), 0)

if __name__ == "__main__":
    unittest.main()
```

### 集成测试

创建 `test_agent.py`：

```python
from agent import create_agent

def test_agent_basic_conversation():
    """测试基本对话"""
    agent = create_agent()

    # 测试函数调用
    response = agent.send_message("现在几点？", verbose=False)
    assert response is not None
    assert len(response) > 0

    # 测试普通对话
    response = agent.send_message("你好", verbose=False)
    assert response is not None

if __name__ == "__main__":
    test_agent_basic_conversation()
    print("✓ 所有测试通过")
```

---

## 最佳实践

### 1. 函数设计原则

**单一职责**：
```python
# ✅ 好的设计
def get_user_name(user_id: str) -> str:
    """只获取用户名"""
    pass

def get_user_email(user_id: str) -> str:
    """只获取邮箱"""
    pass

# ❌ 不好的设计
def get_user_everything(user_id: str) -> dict:
    """返回所有信息，太宽泛"""
    pass
```

**明确的返回格式**：
```python
# ✅ 结构化返回
{
    "success": true,
    "data": {...},
    "message": "操作成功"
}

# ❌ 不一致的返回
有时返回字符串，有时返回字典
```

### 2. 提示词工程

**使用示例引导模型**：
```python
SYSTEM_INSTRUCTION = """你是日程助手。

示例对话：
用户: "我现在该做什么？"
助手: [调用 get_current_time 和 get_today_schedule]
     "现在是 18:20，你应该准备吃晚饭了（18:00-19:00）。"
"""
```

### 3. 性能优化

**并行函数调用**：
```python
# Gemini 会自动并行调用独立的函数
用户: "告诉我现在的时间和今天的日程"
模型: 同时调用 get_current_time() 和 get_today_schedule()
```

**缓存结果**：
```python
from functools import lru_cache

@lru_cache(maxsize=128)
def expensive_function(param: str) -> dict:
    """缓存昂贵的计算结果"""
    pass
```

### 4. 安全性

**输入验证**：
```python
def delete_schedule(schedule_id: int) -> dict:
    """删除日程（危险操作）"""

    # 验证 ID
    if schedule_id <= 0:
        return {"error": "无效的 ID"}

    # 权限检查
    if not has_permission(schedule_id):
        return {"error": "无权限"}

    # 执行操作
    # ...
```

**敏感信息保护**：
```python
# ❌ 不要返回敏感信息
return {"password": "123456", ...}

# ✅ 只返回必要信息
return {"user_id": "123", "name": "张三"}
```

---

## 常见问题

### Q: 模型不调用我的函数怎么办？

**A**: 检查以下几点：
1. 函数是否在 `AVAILABLE_FUNCTIONS` 中注册
2. 文档字符串是否清晰描述了函数功能
3. 用户消息是否明确需要这个功能
4. 尝试使用 `ANY` 模式强制调用

### Q: 如何调试函数调用？

**A**: 使用手动模式查看详细信息：
```python
agent.send_message_with_manual_function_calling(
    "你的消息",
    verbose=True  # 打印详细的调用信息
)
```

### Q: 如何处理多轮对话？

**A**: 使用 `ChatSession`（已内置）：
```python
agent = create_agent()
agent.send_message("第一个问题")
agent.send_message("第二个问题")  # 会记住上下文
```

---

## 下一步

现在你已经掌握了基础，可以：

1. 🔧 根据你的需求添加自定义函数
2. 🎨 调整系统提示词以适应你的场景
3. 📊 连接真实的数据源（数据库、API 等）
4. 🚀 部署为 Web 服务或聊天机器人
5. 📱 集成到你的应用中

祝你开发顺利！
