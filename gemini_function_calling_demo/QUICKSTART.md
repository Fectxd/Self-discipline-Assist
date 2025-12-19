# 快速开始指南

5 分钟让你的 Gemini Function Calling Agent 跑起来！

## 前置要求

- Python 3.8 或更高版本
- Gemini API 密钥

## 步骤 1: 安装依赖

```bash
cd gemini_function_calling_demo
pip install -r requirements.txt
```

## 步骤 2: 配置 API 密钥

打开 `config.py`，确认以下配置：

```python
API_KEY = "sk-yzBFahYSBiVKQRSMg4duBrarciAdZ51uIIjacCSvMjA8npOZ"
API_BASE = "https://chatapi.onechats.ai/v1"
MODEL_ID = "gemini-3-flash-review"
```

## 步骤 3: 运行 Demo

### 方式 1: 自动模式（推荐）

```bash
python demo.py auto
```

**效果**：
- SDK 自动处理函数调用
- 最简单的使用方式
- 适合大多数场景

### 方式 2: 手动模式

```bash
python demo.py manual
```

**效果**：
- 完全控制函数调用流程
- 可以看到详细的调用过程
- 适合学习和调试

### 方式 3: 交互模式

```bash
python demo.py interactive
```

**效果**：
- 与 Agent 实时对话
- 可以测试各种问题
- 输入 `quit` 退出

## 步骤 4: 测试功能

尝试以下问题：

```
现在几点了？
我今天有什么安排？
我现在应该做什么？
帮我看看接下来的日程
```

## 预期输出

```
============================================================
用户: 我现在应该做什么？
============================================================

✓ 检测到 2 个函数调用:
  - get_current_time({})
    → {"date": "2025-12-19", "time": "18:20", ...}
  - get_today_schedule({})
    → {"date": "2025-12-19", "schedules": [...]}

助手: 现在是 18:20，正好是晚饭时间（18:00-19:00）。
建议您现在去吃晚饭，保持规律的饮食对身体很重要。
============================================================
```

## 常见问题

### 问题 1: 导入错误

```
ModuleNotFoundError: No module named 'google.genai'
```

**解决**：
```bash
pip install google-genai
```

### 问题 2: API 连接失败

```
✗ 客户端初始化失败: ...
```

**解决**：
1. 检查 API 密钥是否正确
2. 检查网络连接
3. 确认 API_BASE 地址正确

### 问题 3: 函数未被调用

**可能原因**：
1. 问题不够明确 → 尝试更具体的问题
2. 函数未注册 → 检查 `AVAILABLE_FUNCTIONS`
3. 模式设置错误 → 尝试使用 `ANY` 模式

## 下一步

✅ 运行成功后，你可以：

1. **阅读完整文档**：查看 [README.md](README.md) 了解项目架构
2. **学习扩展**：阅读 [DEVELOPMENT_GUIDE.md](DEVELOPMENT_GUIDE.md) 学习如何添加功能
3. **自定义功能**：修改 `functions.py` 添加你自己的函数
4. **调整行为**：修改 `config.py` 中的系统提示词

## 需要帮助？

- 📖 查看 [官方文档](https://github.com/google-gemini/cookbook)
- 💻 查看 [代码注释](agent.py)
- 🔧 运行测试：`python demo.py manual` 查看详细调用过程

祝你使用愉快！🚀
