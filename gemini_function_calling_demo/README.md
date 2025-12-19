# Gemini Function Calling Demo

这是一个基于 Google Gemini API 官方文档的 Function Calling 示例项目。

## 功能说明

该 demo 实现了一个智能助手，可以：
- 获取当前时间
- 查询当天的日程安排
- 根据时间和日程给出建议

## 项目结构

```
gemini_function_calling_demo/
├── README.md                 # 项目说明文档
├── requirements.txt          # Python 依赖
├── config.py                 # 配置文件（API 密钥等）
├── functions.py              # 定义所有可调用的函数
├── agent.py                  # Function Calling 主逻辑
└── demo.py                   # 运行示例
```

## 技术规范

- **模型**: gemini-3-flash-review
- **API Base**: https://chatapi.onechats.ai/v1
- **实现方式**: 严格遵循 [Google Gemini Cookbook](https://github.com/google-gemini/cookbook) 的 Function Calling 规范
- **语言**: Python 3.8+

## 安装依赖

```bash
pip install -r requirements.txt
```

## 配置

1. 在 `config.py` 中配置您的 API 密钥
2. 确保 API base URL 正确

## 运行示例

```bash
python demo.py
```

## 核心概念

### 1. 函数声明 (Function Declaration)
每个可调用函数都需要明确的类型注解和文档字符串，SDK 会自动生成函数声明。

### 2. 工具配置 (Tool Config)
- **AUTO 模式**: 模型自主决定是否调用函数
- **ANY 模式**: 强制至少调用一个函数
- **NONE 模式**: 禁用函数调用

### 3. 自动执行 vs 手动执行
- **自动模式**: SDK 自动执行函数并返回结果
- **手动模式**: 开发者控制函数执行流程

## 扩展指南

要添加新功能：

1. 在 `functions.py` 中定义新函数，遵循规范：
   ```python
   def new_function(param: str) -> dict:
       """函数功能描述.

       Args:
           param: 参数说明

       Returns:
           返回值说明
       """
       # 实现
       return {"result": "value"}
   ```

2. 在 `agent.py` 中将函数添加到工具列表

3. 测试新功能

## 参考资料

- [Google Gemini Function Calling Quickstart](https://github.com/google-gemini/cookbook/blob/main/quickstarts/Function_calling.ipynb)
- [Google Gemini API Documentation](https://ai.google.dev/api)
