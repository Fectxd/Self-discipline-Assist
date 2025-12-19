"""
Gemini Function Calling Demo - OpenAI 兼容接口版本

这个 demo 使用 OpenAI SDK 连接到 Gemini 兼容的第三方接口。

运行方式：
    python demo_openai_compatible.py
"""

import sys
from agent_openai_compatible import create_agent


def print_header():
    """打印欢迎信息"""
    print("\n" + "="*70)
    print("  Gemini Function Calling Demo - OpenAI 兼容接口版本")
    print("="*70)
    print("\n这个 demo 使用 OpenAI SDK 连接到 Gemini 兼容的第三方接口。\n")
    print("当前场景设定：")
    print("  - 当前时间: 2025年12月19日 18:20")
    print("  - 今日日程: 8-9点吃早饭, 12-14点吃午饭, 18-19点吃晚饭")
    print("\n" + "="*70 + "\n")


def demo_automatic_function_calling():
    """演示自动函数调用"""
    print("\n【演示：自动函数调用】")
    print("-" * 70)
    print("Agent 会自动调用需要的函数并基于结果给出建议。")
    print("-" * 70)

    try:
        # 创建 Agent
        print("\n正在初始化 Agent...")
        agent = create_agent()

        # 测试消息
        test_messages = [
            "我现在应该做什么？",
            "帮我看看今天还有什么安排",
            "现在几点了？"
        ]

        for msg in test_messages:
            agent.send_message(msg)

    except Exception as e:
        print(f"\n[FAIL] Demo 运行失败: {e}")
        print("\n可能的原因：")
        print("  1. API 密钥配置错误")
        print("  2. 网络连接问题")
        print("  3. API Base URL 不正确")
        print("  4. 未安装依赖: pip install openai")
        import traceback
        traceback.print_exc()
        sys.exit(1)


def demo_interactive_mode():
    """交互式对话"""
    print("\n【演示：交互式对话】")
    print("-" * 70)
    print("你可以与助手进行多轮对话。")
    print("输入 'quit' 或 'exit' 退出。")
    print("-" * 70)

    try:
        # 创建 Agent
        print("\n正在初始化 Agent...")
        agent = create_agent()

        while True:
            # 获取用户输入
            user_input = input("\n你: ").strip()

            # 检查退出命令
            if user_input.lower() in ['quit', 'exit', '退出', 'q']:
                print("\n再见！")
                break

            # 检查空输入
            if not user_input:
                continue

            # 发送消息
            try:
                agent.send_message(user_input, verbose=True)
            except Exception as e:
                print(f"[FAIL] 发送失败: {e}")

    except KeyboardInterrupt:
        print("\n\n再见！")
    except Exception as e:
        print(f"\n[FAIL] Demo 运行失败: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)


def main():
    """主函数"""
    print_header()

    # 检查命令行参数
    if len(sys.argv) > 1:
        mode = sys.argv[1].lower()
        if mode == "auto":
            demo_automatic_function_calling()
        elif mode == "interactive":
            demo_interactive_mode()
        else:
            print(f"未知模式: {mode}")
            print("\n可用模式:")
            print("  python demo_openai_compatible.py auto         - 自动函数调用演示")
            print("  python demo_openai_compatible.py interactive  - 交互式对话演示")
            sys.exit(1)
    else:
        # 默认运行自动模式
        print("提示: 你可以使用命令行参数选择特定演示:")
        print("  python demo_openai_compatible.py auto         - 自动函数调用演示")
        print("  python demo_openai_compatible.py interactive  - 交互式对话演示")
        print("\n现在运行默认演示...\n")

        demo_automatic_function_calling()

        # 询问是否进入交互模式
        print("\n" + "="*70)
        choice = input("\n是否进入交互式模式? (y/n): ").strip().lower()
        if choice == 'y':
            demo_interactive_mode()

    print("\n" + "="*70)
    print("  演示结束，感谢使用！")
    print("="*70 + "\n")


if __name__ == "__main__":
    main()
