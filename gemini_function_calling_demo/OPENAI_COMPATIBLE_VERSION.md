# OpenAI 兼容接口版本说明

## 问题背景

你的 API 密钥 (`sk-yzBFahYSBiVKQRSMg4duBrarciAdZ51uIIjacCSvMjA8npOZ`) 和 API Base (`https://chatapi.onechats.ai/v1`) 是第三方的 **OpenAI 兼容接口**，而不是 Google 官方的 Gemini API。

`google-genai` SDK 只能连接到 Google 官方服务器，无法使用自定义 API Base URL。

## 解决方案

我创建了一个使用 **OpenAI SDK** 的兼容版本，它可以：
- ✅ 连接到你的自定义 API Base URL
- ✅ 使用你的 API 密钥
- ✅ 实现完整的 Function Calling 功能
- ✅ 与 OpenAI 的 function calling 格式兼容

## 两个版本对比

### 版本 1: Google 官方版本（原版）

**文件**:
- `agent.py`
- `demo.py`

**适用场景**:
- 使用 Google 官方 Gemini API
- API 密钥格式：`AIza...`
- API 端点：`generativelanguage.googleapis.com`

**依赖**:
```bash
pip install google-genai
```

### 版本 2: OpenAI 兼容版本（新增）⭐

**文件**:
- `agent_openai_compatible.py` ← 新增
- `demo_openai_compatible.py` ← 新增

**适用场景**:
- 使用第三方 OpenAI 兼容接口
- 你的配置：
  - API 密钥：`sk-yzBFahYSBiVKQRSMg4duBrarciAdZ51uIIjacCSvMjA8npOZ`
  - API Base：`https://chatapi.onechats.ai/v1`
  - 模型：`gemini-3-flash-review`

**依赖**:
```bash
pip install openai
```

## 快速开始（OpenAI 兼容版本）

### 1. 安装依赖

```bash
pip install openai
```

### 2. 确认配置

打开 [config.py](config.py)，确保配置正确：

```python
API_KEY = "sk-yzBFahYSBiVKQRSMg4duBrarciAdZ51uIIjacCSvMjA8npOZ"
API_BASE = "https://chatapi.onechats.ai/v1"
MODEL_ID = "gemini-3-flash-review"
```

### 3. 运行 Demo

```bash
# 自动模式
python demo_openai_compatible.py auto

# 交互模式
python demo_openai_compatible.py interactive
```

## 技术实现差异

### Google 官方版本

```python
from google import genai
from google.genai import types

client = genai.Client(api_key=API_KEY)

chat = client.chats.create(
    model=MODEL_ID,
    config={
        "tools": AVAILABLE_FUNCTIONS,  # SDK 自动转换
        "automatic_function_calling": {"disable": False}
    }
)

response = chat.send_message("消息")
```

### OpenAI 兼容版本

```python
from openai import OpenAI

client = OpenAI(
    api_key=API_KEY,
    base_url=API_BASE  # 自定义端点
)

response = client.chat.completions.create(
    model=MODEL_ID,
    messages=messages,
    tools=tools,  # OpenAI 格式的工具定义
    tool_choice="auto"
)

# 手动处理 tool_calls
```

## 功能对比

| 功能 | Google 版本 | OpenAI 兼容版本 |
|------|------------|----------------|
| 自定义 API Base | ❌ | ✅ |
| 自动函数调用 | ✅ | ✅ |
| 手动函数调用 | ✅ | ✅ |
| 函数声明自动生成 | ✅ | ✅ |
| 多轮对话 | ✅ | ✅ |
| 你的 API 可用 | ❌ | ✅ |

## 代码结构

### 核心文件

```
gemini_function_calling_demo/
├── config.py                      # 配置（两个版本共用）
├── functions.py                   # 函数定义（两个版本共用）
│
├── 【Google 官方版本】
│   ├── agent.py                   # Google SDK 实现
│   └── demo.py                    # Google 版本 Demo
│
└── 【OpenAI 兼容版本】⭐
    ├── agent_openai_compatible.py # OpenAI SDK 实现
    └── demo_openai_compatible.py  # OpenAI 版本 Demo
```

## 使用建议

### 推荐使用 OpenAI 兼容版本 ⭐

因为你的 API 配置是 OpenAI 兼容格式，建议使用：

```bash
# 安装依赖
pip install openai

# 运行 Demo
python demo_openai_compatible.py auto
```

### Google 官方版本

如果将来你获得了 Google 官方的 Gemini API 密钥，可以使用：

```bash
# 安装依赖
pip install google-genai

# 修改 config.py 中的 API_KEY 为 Google 官方密钥
# 运行 Demo
python demo.py auto
```

## 常见问题

### Q1: 为什么有两个版本？

**A**: 因为 API 接口格式不同：
- Google 官方使用 `google-genai` SDK，有特定的格式
- 第三方 OpenAI 兼容接口使用标准的 OpenAI 格式

### Q2: 功能有区别吗？

**A**: 核心功能完全相同：
- ✅ Function Calling
- ✅ 自动/手动模式
- ✅ 多轮对话
- ✅ 工具调用

只是底层 SDK 和 API 格式不同。

### Q3: 我应该用哪个？

**A**: 根据你的 API 来源：
- 使用 `https://chatapi.onechats.ai` → OpenAI 兼容版本 ⭐
- 使用 Google 官方 API → Google 版本

### Q4: 两个版本可以共存吗？

**A**: 可以！它们使用不同的文件名，互不冲突。

## 测试

### 测试 OpenAI 兼容版本

```bash
python demo_openai_compatible.py auto
```

预期输出：
```
======================================================================
  Gemini Function Calling Demo - OpenAI 兼容接口版本
======================================================================

[OK] 客户端初始化成功
  - 模型: gemini-3-flash-review
  - API Base: https://chatapi.onechats.ai/v1
  - 可用工具数量: 2

[OK] 聊天会话创建成功

============================================================
用户: 我现在应该做什么？
============================================================

检测到 2 个函数调用:
  - get_current_time({})
    -> {"date": "2025-12-19", "time": "18:20", ...}
  - get_today_schedule({})
    -> {"schedules": [...]}

助手: 现在是 18:20，正好是晚饭时间...
============================================================
```

## 扩展说明

### 添加新功能

无论使用哪个版本，添加新功能的方式**完全相同**：

1. 在 `functions.py` 中定义函数
2. 添加到 `AVAILABLE_FUNCTIONS`
3. 测试

两个版本都会自动识别新函数。

### 修改配置

在 `config.py` 中修改配置，两个版本都会生效。

## 总结

对于你的使用场景（第三方 OpenAI 兼容接口），**推荐使用 OpenAI 兼容版本**：

```bash
# 1. 安装
pip install openai

# 2. 运行
python demo_openai_compatible.py auto

# 3. 交互
python demo_openai_compatible.py interactive
```

这个版本完全支持你的 API 配置，功能与 Google 官方版本一致！🚀
