"""
Gemini Function Calling Demo 运行示例

这个文件演示了如何使用 ScheduleAssistantAgent 来创建一个智能日程助手。

运行方式：
    python demo.py
"""

import sys
from agent import create_agent


def print_header():
    """打印欢迎信息"""
    print("\n" + "="*70)
    print("  Gemini Function Calling Demo - 智能日程助手")
    print("="*70)
    print("\n这个 demo 展示了如何使用 Google Gemini API 的 Function Calling 功能")
    print("来创建一个能够获取时间和日程信息的智能助手。\n")
    print("当前场景设定：")
    print("  - 当前时间: 2025年12月19日 18:20")
    print("  - 今日日程: 8-9点吃早饭, 12-14点吃午饭, 18-19点吃晚饭")
    print("\n" + "="*70 + "\n")


def demo_automatic_function_calling():
    """演示自动函数调用模式"""
    print("\n【演示 1: 自动函数调用模式】")
    print("-" * 70)
    print("在这个模式下，SDK 会自动处理函数调用流程。")
    print("你只需要发送消息，SDK 会自动：")
    print("  1. 识别需要调用的函数")
    print("  2. 执行函数")
    print("  3. 将结果返回给模型")
    print("  4. 返回最终响应")
    print("-" * 70)

    try:
        # 创建 Agent
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
        print(f"\n✗ Demo 运行失败: {e}")
        print("\n可能的原因：")
        print("  1. API 密钥配置错误")
        print("  2. 网络连接问题")
        print("  3. API Base URL 不正确")
        print("  4. 未安装依赖: pip install -r requirements.txt")
        sys.exit(1)


def demo_manual_function_calling():
    """演示手动函数调用模式"""
    print("\n【演示 2: 手动函数调用模式】")
    print("-" * 70)
    print("在这个模式下，你可以完全控制函数调用流程。")
    print("这对于需要在函数执行前后添加自定义逻辑的场景很有用。")
    print("-" * 70)

    try:
        # 创建 Agent（不创建会话，因为我们要手动处理）
        from agent import ScheduleAssistantAgent
        agent = ScheduleAssistantAgent()

        # 发送消息并手动处理函数调用
        agent.send_message_with_manual_function_calling(
            "现在几点了？我今天还有什么安排？"
        )

    except Exception as e:
        print(f"\n✗ Demo 运行失败: {e}")
        sys.exit(1)


def demo_interactive_mode():
    """演示交互式对话模式"""
    print("\n【演示 3: 交互式对话模式】")
    print("-" * 70)
    print("你可以与助手进行多轮对话。")
    print("输入 'quit' 或 'exit' 退出。")
    print("-" * 70)

    try:
        # 创建 Agent
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
                agent.send_message(user_input, verbose=False)
            except Exception as e:
                print(f"✗ 发送失败: {e}")

    except KeyboardInterrupt:
        print("\n\n再见！")
    except Exception as e:
        print(f"\n✗ Demo 运行失败: {e}")
        sys.exit(1)


def main():
    """主函数"""
    print_header()

    # 检查是否有命令行参数
    if len(sys.argv) > 1:
        mode = sys.argv[1].lower()
        if mode == "auto":
            demo_automatic_function_calling()
        elif mode == "manual":
            demo_manual_function_calling()
        elif mode == "interactive":
            demo_interactive_mode()
        else:
            print(f"未知模式: {mode}")
            print("\n可用模式:")
            print("  python demo.py auto         - 自动函数调用演示")
            print("  python demo.py manual       - 手动函数调用演示")
            print("  python demo.py interactive  - 交互式对话演示")
            sys.exit(1)
    else:
        # 默认运行所有演示
        print("提示: 你可以使用命令行参数选择特定演示:")
        print("  python demo.py auto         - 自动函数调用演示")
        print("  python demo.py manual       - 手动函数调用演示")
        print("  python demo.py interactive  - 交互式对话演示")
        print("\n现在运行默认演示...\n")

        demo_automatic_function_calling()

        # 询问是否继续其他演示
        print("\n" + "="*70)
        choice = input("\n是否运行手动函数调用演示? (y/n): ").strip().lower()
        if choice == 'y':
            demo_manual_function_calling()

        print("\n" + "="*70)
        choice = input("\n是否进入交互式模式? (y/n): ").strip().lower()
        if choice == 'y':
            demo_interactive_mode()

    print("\n" + "="*70)
    print("  演示结束，感谢使用！")
    print("="*70 + "\n")


if __name__ == "__main__":
    main()
