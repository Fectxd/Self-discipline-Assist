"""
Gemini Function Calling Agent - OpenAI 兼容接口版本

这个版本使用 OpenAI SDK 连接到 Gemini 兼容的第三方接口。
适用于使用 OpenAI 兼容格式的 Gemini API 服务。

主要功能：
1. 使用 OpenAI SDK 连接到自定义 API 端点
2. 实现 Function Calling 功能
3. 支持自动和手动两种模式

注意：这个版本使用 OpenAI 的 function calling 格式，
而不是 Google 官方的 genai SDK。
"""

import json
from typing import List, Dict, Any, Optional

try:
    from openai import OpenAI
except ImportError:
    raise ImportError(
        "请先安装 OpenAI SDK: pip install openai"
    )

import config
from functions import AVAILABLE_FUNCTIONS, call_function


def function_to_openai_tool(func) -> dict:
    """将 Python 函数转换为 OpenAI Tool 格式.

    Args:
        func: Python 函数对象

    Returns:
        OpenAI Tool 定义字典
    """
    import inspect
    from typing import get_type_hints

    # 获取函数签名
    sig = inspect.signature(func)
    type_hints = get_type_hints(func)

    # 解析文档字符串
    doc = func.__doc__ or ""
    lines = [line.strip() for line in doc.split('\n') if line.strip()]
    description = lines[0] if lines else func.__name__

    # 构建参数定义
    properties = {}
    required = []

    for param_name, param in sig.parameters.items():
        if param_name == 'self':
            continue

        param_type = type_hints.get(param_name, str)

        # 映射 Python 类型到 JSON Schema 类型
        type_mapping = {
            str: "string",
            int: "integer",
            float: "number",
            bool: "boolean",
            list: "array",
            dict: "object",
        }

        json_type = type_mapping.get(param_type, "string")

        properties[param_name] = {
            "type": json_type,
            "description": f"{param_name} parameter"
        }

        # 如果参数没有默认值，则为必需
        if param.default == inspect.Parameter.empty:
            required.append(param_name)

    # 构建 OpenAI Tool 格式
    tool_def = {
        "type": "function",
        "function": {
            "name": func.__name__,
            "description": description,
            "parameters": {
                "type": "object",
                "properties": properties,
                "required": required
            }
        }
    }

    return tool_def


class ScheduleAssistantAgent:
    """日程助手 Agent - OpenAI 兼容接口版本

    使用 OpenAI SDK 连接到 Gemini 兼容的第三方服务。
    """

    def __init__(
        self,
        api_key: str = config.API_KEY,
        model_id: str = config.MODEL_ID,
        api_base: str = config.API_BASE,
    ):
        """初始化 Agent.

        Args:
            api_key: API 密钥
            model_id: 使用的模型 ID
            api_base: API 基础 URL
        """
        self.api_key = api_key
        self.model_id = model_id
        self.api_base = api_base
        self.client = None
        self.messages = []
        self.tools = []

        # 初始化客户端
        self._initialize_client()

    def _initialize_client(self):
        """初始化 OpenAI 客户端."""
        try:
            self.client = OpenAI(
                api_key=self.api_key,
                base_url=self.api_base
            )

            # 转换函数为 OpenAI Tool 格式
            self.tools = [
                function_to_openai_tool(func)
                for func in AVAILABLE_FUNCTIONS
            ]

            print(f"[OK] 客户端初始化成功")
            print(f"  - 模型: {self.model_id}")
            print(f"  - API Base: {self.api_base}")
            print(f"  - 可用工具数量: {len(self.tools)}")

        except Exception as e:
            print(f"[FAIL] 客户端初始化失败: {e}")
            raise

    def create_chat_session(self) -> None:
        """创建聊天会话.

        初始化消息历史，添加系统提示词。
        """
        self.messages = [
            {
                "role": "system",
                "content": config.SYSTEM_INSTRUCTION
            }
        ]
        print(f"[OK] 聊天会话创建成功")

    def send_message(self, message: str, verbose: bool = True) -> str:
        """发送消息并自动处理函数调用.

        Args:
            message: 用户消息
            verbose: 是否打印详细信息

        Returns:
            Agent 的文本响应
        """
        if not self.messages:
            self.create_chat_session()

        if verbose:
            print(f"\n{'='*60}")
            print(f"用户: {message}")
            print(f"{'='*60}")

        # 添加用户消息
        self.messages.append({
            "role": "user",
            "content": message
        })

        max_iterations = 5  # 防止无限循环
        iteration = 0

        while iteration < max_iterations:
            iteration += 1

            try:
                # 调用 API
                response = self.client.chat.completions.create(
                    model=self.model_id,
                    messages=self.messages,
                    tools=self.tools if self.tools else None,
                    tool_choice="auto" if self.tools else None
                )

                message_response = response.choices[0].message

                # 检查是否有工具调用
                if message_response.tool_calls:
                    if verbose:
                        print(f"\n检测到 {len(message_response.tool_calls)} 个函数调用:")

                    # 添加 assistant 的响应到历史
                    self.messages.append({
                        "role": "assistant",
                        "content": message_response.content,
                        "tool_calls": [
                            {
                                "id": tc.id,
                                "type": tc.type,
                                "function": {
                                    "name": tc.function.name,
                                    "arguments": tc.function.arguments
                                }
                            }
                            for tc in message_response.tool_calls
                        ]
                    })

                    # 执行每个工具调用
                    for tool_call in message_response.tool_calls:
                        func_name = tool_call.function.name
                        func_args = json.loads(tool_call.function.arguments)

                        if verbose:
                            print(f"  - {func_name}({json.dumps(func_args, ensure_ascii=False)})")

                        # 执行函数
                        result = call_function(func_name, func_args)

                        if verbose:
                            print(f"    -> {json.dumps(result, ensure_ascii=False)}")

                        # 添加工具响应到历史
                        self.messages.append({
                            "role": "tool",
                            "tool_call_id": tool_call.id,
                            "content": json.dumps(result, ensure_ascii=False)
                        })

                    # 继续循环，让模型基于工具结果生成回答
                    continue

                else:
                    # 没有工具调用，返回最终回答
                    final_response = message_response.content

                    # 添加到历史
                    self.messages.append({
                        "role": "assistant",
                        "content": final_response
                    })

                    if verbose:
                        print(f"\n助手: {final_response}")
                        print(f"{'='*60}\n")

                    return final_response

            except Exception as e:
                error_msg = f"消息发送失败: {e}"
                print(f"[FAIL] {error_msg}")
                raise

        # 超过最大迭代次数
        return "抱歉，处理您的请求时遇到了问题。"

    def get_chat_history(self) -> List[Dict[str, Any]]:
        """获取聊天历史.

        Returns:
            聊天历史列表
        """
        return self.messages.copy()


def create_agent() -> ScheduleAssistantAgent:
    """创建并初始化一个 Agent 实例.

    Returns:
        已初始化的 ScheduleAssistantAgent 实例
    """
    agent = ScheduleAssistantAgent()
    agent.create_chat_session()
    return agent
