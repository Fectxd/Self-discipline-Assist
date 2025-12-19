# 项目结构说明

这份文档详细说明了项目的文件组织和各部分的职责。

## 文件树

```
gemini_function_calling_demo/
├── README.md                    # 项目总览和介绍
├── QUICKSTART.md                # 5分钟快速开始指南
├── DEVELOPMENT_GUIDE.md         # 详细的开发和扩展指南
├── PROJECT_STRUCTURE.md         # 本文件：项目结构说明
├── requirements.txt             # Python 依赖清单
├── .gitignore                   # Git 忽略配置
│
├── config.py                    # 配置中心
│   ├── API 密钥和 URL
│   ├── 模型配置
│   ├── 系统提示词
│   └── Function Calling 参数
│
├── functions.py                 # 函数定义模块
│   ├── get_current_time()       - 获取当前时间
│   ├── get_today_schedule()     - 获取今日日程
│   ├── AVAILABLE_FUNCTIONS      - 函数注册表
│   └── call_function()          - 函数执行辅助
│
├── agent.py                     # Function Calling 核心逻辑
│   ├── ScheduleAssistantAgent   - Agent 主类
│   │   ├── __init__()           - 初始化客户端
│   │   ├── create_chat_session()- 创建聊天会话
│   │   ├── send_message()       - 发送消息（自动模式）
│   │   └── send_message_with_manual_function_calling()
│   │                            - 手动处理函数调用
│   └── create_agent()           - Agent 工厂函数
│
└── demo.py                      # 运行示例
    ├── demo_automatic_function_calling()   - 自动模式演示
    ├── demo_manual_function_calling()      - 手动模式演示
    ├── demo_interactive_mode()             - 交互式演示
    └── main()                              - 主入口
```

## 核心模块详解

### 1. config.py - 配置中心

**职责**：集中管理所有配置项

**包含**：
- `API_KEY`: Gemini API 密钥
- `API_BASE`: API 基础 URL
- `MODEL_ID`: 使用的模型名称
- `SYSTEM_INSTRUCTION`: 系统提示词（定义 Agent 行为）
- `FUNCTION_CALLING_MODE`: 函数调用模式（auto/any/none）
- `AUTO_FUNCTION_CALLING`: 是否启用自动执行

**为什么分离配置**：
- ✅ 便于切换不同环境（开发/生产）
- ✅ 敏感信息集中管理
- ✅ 修改配置不影响代码逻辑

### 2. functions.py - 函数定义

**职责**：定义所有可供 Gemini 调用的工具函数

**规范**：
每个函数必须包含：
1. 完整的类型注解（参数和返回值）
2. 详细的文档字符串（功能、参数、返回值说明）
3. JSON 可序列化的返回值

**示例**：
```python
def function_name(param: str) -> Dict[str, Any]:
    """函数功能描述.

    Args:
        param: 参数说明

    Returns:
        返回值说明
    """
    return {"result": "value"}
```

**如何添加新函数**：
1. 按规范定义函数
2. 添加到 `AVAILABLE_FUNCTIONS` 列表
3. 测试

### 3. agent.py - 核心引擎

**职责**：实现 Function Calling 的完整流程

**关键类**：`ScheduleAssistantAgent`

**工作流程**：
```
初始化客户端
     ↓
创建聊天会话（配置工具和模式）
     ↓
发送用户消息
     ↓
[自动模式]                    [手动模式]
SDK 自动处理              →    开发者控制流程
  ↓                              ↓
  ├─ 识别函数调用                 检查函数调用
  ├─ 执行函数                     手动执行函数
  ├─ 返回结果给模型               构建函数响应
  └─ 获取最终响应                 发送给模型获取响应
     ↓                              ↓
  返回文本                      返回文本
```

**两种模式对比**：

| 特性 | 自动模式 | 手动模式 |
|------|---------|---------|
| 易用性 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| 控制力 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| 适用场景 | 大多数情况 | 需要自定义逻辑 |
| 代码量 | 少 | 多 |

### 4. demo.py - 运行示例

**职责**：提供可运行的示例和测试

**三种演示**：

1. **自动模式演示**（`demo_automatic_function_calling`）
   - 展示最简单的使用方式
   - SDK 自动处理一切

2. **手动模式演示**（`demo_manual_function_calling`）
   - 展示完全控制流程
   - 适合学习和调试

3. **交互模式**（`demo_interactive_mode`）
   - 实时与 Agent 对话
   - 可以自由测试

**运行方式**：
```bash
python demo.py              # 默认运行全部
python demo.py auto         # 只运行自动模式
python demo.py manual       # 只运行手动模式
python demo.py interactive  # 交互式模式
```

## 数据流向

```
用户输入
    ↓
demo.py (入口)
    ↓
agent.py (处理)
    ↓
Gemini API (分析)
    ↓
functions.py (执行工具)
    ↓
返回结果
    ↓
Gemini API (生成回答)
    ↓
agent.py (接收)
    ↓
demo.py (显示)
    ↓
用户看到结果
```

## 扩展路径

### 添加新功能

1. **定义函数** → `functions.py`
2. **注册函数** → `AVAILABLE_FUNCTIONS`
3. **测试** → `demo.py`

### 修改行为

1. **调整提示词** → `config.py` 中的 `SYSTEM_INSTRUCTION`
2. **改变模式** → `config.py` 中的 `FUNCTION_CALLING_MODE`

### 连接数据源

1. **修改函数实现** → `functions.py` 中的具体函数
2. **添加数据库连接** → 新建 `database.py`
3. **在函数中调用** → 使用数据库服务

### 部署为服务

1. **创建 API 端点** → 新建 `api.py`（使用 Flask/FastAPI）
2. **封装 Agent** → 使用 `agent.create_agent()`
3. **处理请求** → 调用 `agent.send_message()`

## 依赖关系

```
demo.py
   ├── agent.py
   │   ├── config.py
   │   └── functions.py
   └── functions.py

所有文件都依赖:
   ├── google-genai (SDK)
   └── python-dateutil (日期处理)
```

## 最佳实践

1. **配置和代码分离**
   - 所有可配置项都在 `config.py`
   - 代码逻辑不应包含硬编码的配置

2. **函数原子化**
   - 每个函数只做一件事
   - 便于测试和维护

3. **详细的文档**
   - 每个函数都有完整的文档字符串
   - SDK 会使用这些文档生成 Function Declaration

4. **错误处理**
   - 函数内部捕获异常
   - 返回结构化的错误信息

5. **可测试性**
   - 函数独立于 Agent
   - 可以单独测试每个函数

## 总结

这个项目的设计遵循以下原则：

- ✅ **职责分离**：每个文件有明确的职责
- ✅ **易于扩展**：添加新功能只需修改一处
- ✅ **规范优先**：严格遵循官方文档规范
- ✅ **文档完善**：代码即文档，方便理解
- ✅ **开箱即用**：可以直接运行，也可以深度定制

希望这个结构说明能帮助你更好地理解和使用这个项目！
