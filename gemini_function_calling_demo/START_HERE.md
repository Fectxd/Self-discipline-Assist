# 从这里开始 🚀

欢迎使用 Gemini Function Calling Demo！

## 📋 你已经获得了什么

一个**完整、规范、可扩展**的 Gemini Function Calling 示例项目，包含：

✅ **完整的代码实现**（4个核心文件，约 400 行代码）
✅ **详细的文档**（6个文档文件，覆盖各个方面）
✅ **测试工具**（基础功能测试）
✅ **运行示例**（3种演示模式）

## 🎯 只需 3 步开始使用

### 步骤 1: 安装依赖

```bash
cd gemini_function_calling_demo
pip install -r requirements.txt
```

### 步骤 2: 确认配置

打开 [config.py](config.py)，检查以下配置：

```python
API_KEY = "sk-yzBFahYSBiVKQRSMg4duBrarciAdZ51uIIjacCSvMjA8npOZ"
API_BASE = "https://chatapi.onechats.ai/v1"
MODEL_ID = "gemini-3-flash-review"
```

### 步骤 3: 运行 Demo

```bash
python demo.py auto
```

**就这么简单！** 🎉

## 📖 接下来做什么？

### 选项 1: 继续探索 Demo

```bash
# 查看手动函数调用流程
python demo.py manual

# 进入交互式对话
python demo.py interactive
```

### 选项 2: 学习如何扩展

阅读 [DEVELOPMENT_GUIDE.md](DEVELOPMENT_GUIDE.md) 学习：
- 如何添加新功能
- 如何修改 Agent 行为
- 错误处理最佳实践

### 选项 3: 理解项目架构

阅读 [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) 了解：
- 项目结构设计
- 各模块职责
- 数据流向

### 选项 4: 基于此开发你的应用

1. 修改 [functions.py](functions.py) 添加你的业务函数
2. 调整 [config.py](config.py) 中的系统提示词
3. 在 [agent.py](agent.py) 基础上添加业务逻辑

## 📚 完整文档列表

| 文档 | 用途 | 何时阅读 |
|------|------|---------|
| **[INDEX.md](INDEX.md)** | 📑 文档索引 | 需要快速找到某个信息时 |
| **[README.md](README.md)** | 📖 项目总览 | 想了解项目全貌时 |
| **[QUICKSTART.md](QUICKSTART.md)** | 🚀 快速开始 | 第一次使用时 |
| **[DEVELOPMENT_GUIDE.md](DEVELOPMENT_GUIDE.md)** | 🔧 开发指南 | 需要扩展功能时 |
| **[PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)** | 🏗️ 项目结构 | 想理解架构时 |
| **[SUMMARY.md](SUMMARY.md)** | 📊 项目总结 | 想快速了解亮点时 |

## 💻 代码文件说明

```
核心代码（约 400 行）：
├── config.py          - 配置中心（约 60 行）
├── functions.py       - 工具函数定义（约 150 行）
├── agent.py          - Function Calling 主逻辑（约 250 行）
└── demo.py           - 运行示例（约 180 行）

测试文件：
└── test_basic.py     - 基础功能测试（约 230 行）

配置文件：
├── requirements.txt  - Python 依赖
└── .gitignore       - Git 配置
```

## 🎓 学习路径建议

### 路径 A: 快速上手型（30分钟）

1. ✅ 你在这里 → [START_HERE.md](START_HERE.md)
2. 📖 阅读 [QUICKSTART.md](QUICKSTART.md)（5分钟）
3. 🚀 运行 `python demo.py auto`（5分钟）
4. 💬 运行 `python demo.py interactive` 尝试对话（10分钟）
5. 📝 查看 [functions.py](functions.py) 了解函数定义（10分钟）

### 路径 B: 深入理解型（2小时）

1. ✅ 你在这里 → [START_HERE.md](START_HERE.md)
2. 📖 阅读 [README.md](README.md)（15分钟）
3. 🏗️ 阅读 [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)（30分钟）
4. 💻 通读所有代码文件（45分钟）
5. 🔧 阅读 [DEVELOPMENT_GUIDE.md](DEVELOPMENT_GUIDE.md)（30分钟）

### 路径 C: 实战开发型（半天）

1. ✅ 你在这里 → [START_HERE.md](START_HERE.md)
2. 🚀 快速运行 Demo（30分钟）
3. 🔧 阅读 [DEVELOPMENT_GUIDE.md](DEVELOPMENT_GUIDE.md)（1小时）
4. 💡 添加一个新函数（1小时）
5. 🧪 测试你的新功能（30分钟）
6. 📚 查阅文档完善实现（1小时）

## ✨ 项目亮点

🌟 **规范性**
- 严格遵循 Google Gemini 官方文档
- 完整的类型注解和文档字符串

🌟 **易用性**
- 开箱即用的 Demo
- 详细的文档和注释

🌟 **可扩展性**
- 模块化设计
- 添加新功能只需 3 步

🌟 **灵活性**
- 支持自动/手动两种模式
- 可配置的函数调用策略

## 🆘 遇到问题？

### 问题 1: 导入失败

```
ModuleNotFoundError: No module named 'google.genai'
```

**解决**: `pip install google-genai`

### 问题 2: API 调用失败

**检查**:
1. [config.py](config.py) 中的 API_KEY 是否正确
2. API_BASE 地址是否可访问
3. 网络连接是否正常

### 问题 3: 函数未被调用

**尝试**:
1. 使用更明确的问题
2. 检查函数是否在 `AVAILABLE_FUNCTIONS` 中注册
3. 尝试 `ANY` 模式强制调用

更多问题请查看 [QUICKSTART.md](QUICKSTART.md) 的"常见问题"章节。

## 🎯 下一步目标

根据你的需求选择：

**🎓 学习目标**
→ 通读所有文档，理解 Function Calling 的工作原理

**🔧 开发目标**
→ 基于这个 Demo 开发你自己的应用

**🚀 部署目标**
→ 将其改造为生产级服务

## 📞 资源链接

- 📖 [Google Gemini Cookbook](https://github.com/google-gemini/cookbook)
- 💻 [Google GenAI Python SDK](https://github.com/google/genai-python)
- 🌐 [Google AI Studio](https://aistudio.google.com/)

## 🎉 开始你的旅程

现在你已经了解了全局，选择一条适合你的路径开始吧！

**推荐起点**：
- 🚀 想快速看到效果 → 运行 `python demo.py auto`
- 📖 想系统学习 → 阅读 [README.md](README.md)
- 🔧 想直接开发 → 查看 [DEVELOPMENT_GUIDE.md](DEVELOPMENT_GUIDE.md)
- 📑 想找特定信息 → 查阅 [INDEX.md](INDEX.md)

祝你使用愉快！🚀

---

**提示**: 如果这是你第一次打开这个项目，建议：
1. 先运行 `python test_basic.py` 确保环境正常
2. 然后运行 `python demo.py auto` 看看效果
3. 最后根据需要阅读相关文档

**Good luck!** 💪
