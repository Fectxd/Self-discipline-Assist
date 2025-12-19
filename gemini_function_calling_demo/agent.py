"""
Gemini Function Calling Agent 主逻辑

这个模块实现了完整的 Function Calling 流程，严格遵循 Google Gemini 官方文档规范。

主要功能：
1. 初始化 Gemini 客户端
2. 配置工具和函数调用
3. 管理对话会话
4. 处理函数调用请求和响应

参考：https://github.com/google-gemini/cookbook/blob/main/quickstarts/Function_calling.ipynb
"""

import json
from typing import List, Dict, Any, Optional

try:
    from google import genai
    from google.genai import types
except ImportError:
    raise ImportError(
        "请先安装 Google GenAI SDK: pip install google-genai"
    )

import config
from functions import AVAILABLE_FUNCTIONS, call_function


class ScheduleAssistantAgent:
    """日程助手 Agent

    这个类封装了完整的 Function Calling 流程，包括：
    - 客户端初始化
    - 会话管理
    - 函数调用处理
    - 对话历史管理
    """

    def __init__(
        self,
        api_key: str = config.API_KEY,
        model_id: str = config.MODEL_ID,
        api_base: str = config.API_BASE,
    ):
        """初始化 Agent.

        Args:
            api_key: Gemini API 密钥
            model_id: 使用的模型 ID
            api_base: API 基础 URL
        """
        self.api_key = api_key
        self.model_id = model_id
        self.api_base = api_base
        self.client = None
        self.chat = None

        # 初始化客户端
        self._initialize_client()

    def _initialize_client(self):
        """初始化 Gemini 客户端.

        配置 API 密钥和基础 URL。
        """
        try:
            # 创建客户端
            self.client = genai.Client(
                api_key=self.api_key,
                http_options={'api_version': 'v1alpha'}  # 使用支持 function calling 的版本
            )
            print(f"✓ Gemini 客户端初始化成功")
            print(f"  - 模型: {self.model_id}")
            print(f"  - API Base: {self.api_base}")
        except Exception as e:
            print(f"✗ 客户端初始化失败: {e}")
            raise

    def create_chat_session(self) -> None:
        """创建聊天会话.

        配置：
        - 系统指令
        - 可用工具（函数）
        - 函数调用模式
        - 自动执行设置
        """
        try:
            # 配置 Function Calling
            tool_config = types.ToolConfig(
                function_calling_config=types.FunctionCallingConfig(
                    mode=config.FUNCTION_CALLING_MODE.upper()
                )
            )

            # 创建聊天会话
            self.chat = self.client.chats.create(
                model=self.model_id,
                config=types.GenerateContentConfig(
                    system_instruction=config.SYSTEM_INSTRUCTION,
                    tools=AVAILABLE_FUNCTIONS,
                    tool_config=tool_config,
                    # 自动执行函数
                    automatic_function_calling=types.AutomaticFunctionCallingConfig(
                        disable=not config.AUTO_FUNCTION_CALLING
                    )
                )
            )

            print(f"✓ 聊天会话创建成功")
            print(f"  - 函数调用模式: {config.FUNCTION_CALLING_MODE}")
            print(f"  - 自动执行: {config.AUTO_FUNCTION_CALLING}")
            print(f"  - 可用函数数量: {len(AVAILABLE_FUNCTIONS)}")

        except Exception as e:
            print(f"✗ 会话创建失败: {e}")
            raise

    def send_message(self, message: str, verbose: bool = True) -> str:
        """发送消息并获取响应.

        如果启用了自动函数调用，SDK 会自动处理函数调用流程。
        如果禁用，需要手动处理函数调用。

        Args:
            message: 用户消息
            verbose: 是否打印详细信息

        Returns:
            Agent 的文本响应
        """
        if self.chat is None:
            raise ValueError("聊天会话未创建，请先调用 create_chat_session()")

        try:
            if verbose:
                print(f"\n{'='*60}")
                print(f"用户: {message}")
                print(f"{'='*60}")

            # 发送消息
            response = self.chat.send_message(message)

            if verbose:
                print(f"\n助手: {response.text}")
                print(f"{'='*60}\n")

            return response.text

        except Exception as e:
            error_msg = f"消息发送失败: {e}"
            print(f"✗ {error_msg}")
            raise

    def send_message_with_manual_function_calling(
        self,
        message: str,
        verbose: bool = True
    ) -> str:
        """发送消息并手动处理函数调用.

        这个方法演示了如何手动处理函数调用流程，适合需要完全控制的场景。

        流程：
        1. 发送用户消息
        2. 检查响应中是否有函数调用
        3. 执行函数
        4. 将结果返回给模型
        5. 获取最终响应

        Args:
            message: 用户消息
            verbose: 是否打印详细信息

        Returns:
            Agent 的文本响应
        """
        if verbose:
            print(f"\n{'='*60}")
            print(f"用户: {message}")
            print(f"{'='*60}")

        try:
            # 步骤 1: 发送初始消息
            response = self.client.models.generate_content(
                model=self.model_id,
                contents=message,
                config=types.GenerateContentConfig(
                    system_instruction=config.SYSTEM_INSTRUCTION,
                    tools=AVAILABLE_FUNCTIONS,
                    automatic_function_calling=types.AutomaticFunctionCallingConfig(
                        disable=True  # 禁用自动执行
                    )
                )
            )

            # 步骤 2: 检查是否有函数调用
            function_calls = []
            for part in response.candidates[0].content.parts:
                if part.function_call:
                    function_calls.append(part)

            if not function_calls:
                # 没有函数调用，直接返回文本
                if verbose:
                    print(f"\n助手: {response.text}")
                    print(f"{'='*60}\n")
                return response.text

            # 步骤 3: 执行函数
            if verbose:
                print(f"\n检测到 {len(function_calls)} 个函数调用:")

            function_responses = []
            for fc_part in function_calls:
                func_name = fc_part.function_call.name
                func_args = dict(fc_part.function_call.args)

                if verbose:
                    print(f"  - {func_name}({json.dumps(func_args, ensure_ascii=False)})")

                # 执行函数
                result = call_function(func_name, func_args)

                if verbose:
                    print(f"    → {json.dumps(result, ensure_ascii=False)}")

                # 构建函数响应
                function_responses.append(
                    types.Part.from_function_response(
                        name=func_name,
                        response={"output": result}
                    )
                )

            # 步骤 4: 构建对话历史
            messages = [
                types.Content(
                    role="user",
                    parts=[types.Part.from_text(message)]
                ),
                types.Content(
                    role="model",
                    parts=function_calls
                ),
                types.Content(
                    role="function",
                    parts=function_responses
                )
            ]

            # 步骤 5: 获取最终响应
            final_response = self.client.models.generate_content(
                model=self.model_id,
                contents=messages,
                config=types.GenerateContentConfig(
                    system_instruction=config.SYSTEM_INSTRUCTION,
                    tools=AVAILABLE_FUNCTIONS
                )
            )

            if verbose:
                print(f"\n助手: {final_response.text}")
                print(f"{'='*60}\n")

            return final_response.text

        except Exception as e:
            error_msg = f"消息发送失败: {e}"
            print(f"✗ {error_msg}")
            raise

    def get_chat_history(self) -> List[Dict[str, Any]]:
        """获取聊天历史.

        Returns:
            聊天历史列表
        """
        if self.chat is None:
            return []

        history = []
        for message in self.chat.messages:
            history.append({
                "role": message.role,
                "content": str(message.parts)
            })
        return history


def create_agent() -> ScheduleAssistantAgent:
    """创建并初始化一个 Agent 实例.

    这是推荐的创建 Agent 的方式。

    Returns:
        已初始化的 ScheduleAssistantAgent 实例
    """
    agent = ScheduleAssistantAgent()
    agent.create_chat_session()
    return agent
