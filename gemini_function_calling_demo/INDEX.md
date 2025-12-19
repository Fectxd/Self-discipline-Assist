# 文档索引

快速找到你需要的信息！

## 🚀 我想快速开始

➡️ [QUICKSTART.md](QUICKSTART.md) - 5分钟运行起来

**包含内容**：
- 安装依赖
- 配置 API
- 运行 Demo
- 常见问题

---

## 📖 我想了解项目

➡️ [README.md](README.md) - 项目总览

**包含内容**：
- 功能说明
- 项目结构
- 技术规范
- 核心概念
- 参考资料

---

## 🔧 我想扩展功能

➡️ [DEVELOPMENT_GUIDE.md](DEVELOPMENT_GUIDE.md) - 开发指南

**包含内容**：
- 添加新函数的详细步骤
- 配置函数调用模式
- 自定义系统提示词
- 错误处理
- 测试指南
- 最佳实践

---

## 🏗️ 我想理解架构

➡️ [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) - 项目结构

**包含内容**：
- 完整的文件树
- 各模块职责
- 数据流向
- 依赖关系
- 扩展路径

---

## 📊 我想查看总结

➡️ [SUMMARY.md](SUMMARY.md) - 项目总结

**包含内容**：
- 完成的内容清单
- 关键特性
- 技术亮点
- 学习价值
- 使用建议

---

## 💻 代码文件说明

### 核心代码

| 文件 | 说明 | 何时查看 |
|------|------|---------|
| [config.py](config.py) | 配置中心 | 需要修改 API 密钥或系统提示词时 |
| [functions.py](functions.py) | 工具函数定义 | 需要添加新功能时 |
| [agent.py](agent.py) | Function Calling 主逻辑 | 想了解实现细节或添加业务逻辑时 |
| [demo.py](demo.py) | 运行示例 | 想看如何使用 Agent 时 |

### 测试文件

| 文件 | 说明 | 运行命令 |
|------|------|---------|
| [test_basic.py](test_basic.py) | 基础功能测试 | `python test_basic.py` |

### 配置文件

| 文件 | 说明 |
|------|------|
| [requirements.txt](requirements.txt) | Python 依赖清单 |
| [.gitignore](.gitignore) | Git 忽略配置 |

---

## 🎯 按任务查找

### 任务：第一次运行

1. [QUICKSTART.md](QUICKSTART.md) - 安装和配置
2. `python demo.py auto` - 运行自动模式

### 任务：添加新功能

1. [DEVELOPMENT_GUIDE.md](DEVELOPMENT_GUIDE.md) → "添加新函数"章节
2. [functions.py](functions.py) - 查看示例
3. [test_basic.py](test_basic.py) - 测试

### 任务：修改 Agent 行为

1. [config.py](config.py) → `SYSTEM_INSTRUCTION`
2. [DEVELOPMENT_GUIDE.md](DEVELOPMENT_GUIDE.md) → "自定义系统提示词"章节

### 任务：调试问题

1. `python demo.py manual` - 查看详细调用过程
2. [DEVELOPMENT_GUIDE.md](DEVELOPMENT_GUIDE.md) → "错误处理"章节
3. [QUICKSTART.md](QUICKSTART.md) → "常见问题"章节

### 任务：部署到生产

1. [DEVELOPMENT_GUIDE.md](DEVELOPMENT_GUIDE.md) → "最佳实践"章节
2. [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) → "扩展路径"章节
3. [SUMMARY.md](SUMMARY.md) → "下一步扩展方向"章节

---

## 📚 推荐阅读顺序

### 对于初学者

1. [README.md](README.md) - 先了解项目
2. [QUICKSTART.md](QUICKSTART.md) - 快速上手
3. [functions.py](functions.py) - 看看函数怎么写
4. [DEVELOPMENT_GUIDE.md](DEVELOPMENT_GUIDE.md) - 学习扩展

### 对于开发者

1. [QUICKSTART.md](QUICKSTART.md) - 快速运行
2. [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) - 理解架构
3. [agent.py](agent.py) - 深入代码
4. [DEVELOPMENT_GUIDE.md](DEVELOPMENT_GUIDE.md) - 最佳实践

### 对于架构师

1. [SUMMARY.md](SUMMARY.md) - 技术亮点
2. [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) - 架构设计
3. [agent.py](agent.py) - 实现细节
4. [DEVELOPMENT_GUIDE.md](DEVELOPMENT_GUIDE.md) - 扩展方案

---

## 🔍 常见问题快速定位

| 问题 | 查看文档 | 章节 |
|------|---------|------|
| 如何安装依赖？ | [QUICKSTART.md](QUICKSTART.md) | 步骤 1 |
| API 密钥在哪配置？ | [QUICKSTART.md](QUICKSTART.md) | 步骤 2 |
| 如何运行 Demo？ | [QUICKSTART.md](QUICKSTART.md) | 步骤 3 |
| 如何添加新函数？ | [DEVELOPMENT_GUIDE.md](DEVELOPMENT_GUIDE.md) | 添加新函数 |
| 函数调用模式有哪些？ | [DEVELOPMENT_GUIDE.md](DEVELOPMENT_GUIDE.md) | 配置函数调用模式 |
| 如何修改系统提示词？ | [DEVELOPMENT_GUIDE.md](DEVELOPMENT_GUIDE.md) | 自定义系统提示词 |
| 如何处理错误？ | [DEVELOPMENT_GUIDE.md](DEVELOPMENT_GUIDE.md) | 错误处理 |
| 项目结构是什么？ | [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) | 文件树 |
| 各模块是什么作用？ | [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) | 核心模块详解 |
| 如何扩展项目？ | [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) | 扩展路径 |

---

## 💡 提示

- 📌 第一次使用？从 [QUICKSTART.md](QUICKSTART.md) 开始
- 🔧 想要定制？查看 [DEVELOPMENT_GUIDE.md](DEVELOPMENT_GUIDE.md)
- 🏗️ 想要理解？阅读 [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)
- 📊 想要总览？参考 [SUMMARY.md](SUMMARY.md)

---

## 📞 需要帮助？

1. 查看 [QUICKSTART.md](QUICKSTART.md) 的"常见问题"章节
2. 阅读 [DEVELOPMENT_GUIDE.md](DEVELOPMENT_GUIDE.md) 的相关章节
3. 运行 `python demo.py manual` 查看详细调用过程
4. 查看 [官方文档](https://github.com/google-gemini/cookbook)

祝你使用愉快！🚀
