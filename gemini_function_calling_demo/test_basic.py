# -*- coding: utf-8 -*-
"""
基础功能测试

这个脚本测试所有核心组件，确保它们能正常工作。
运行方式：python test_basic.py
"""

import sys


def test_imports():
    """测试所有必要的导入"""
    print("[测试 1] 检查模块导入...")

    try:
        import config
        print("  [OK] config.py 导入成功")
    except Exception as e:
        print(f"  [FAIL] config.py 导入失败: {e}")
        return False

    try:
        import functions
        print("  [OK] functions.py 导入成功")
    except Exception as e:
        print(f"  [FAIL] functions.py 导入失败: {e}")
        return False

    try:
        import agent
        print("  [OK] agent.py 导入成功")
    except Exception as e:
        print(f"  [FAIL] agent.py 导入失败: {e}")
        return False

    try:
        from google import genai
        print("  [OK] google-genai SDK 导入成功")
    except Exception as e:
        print(f"  [FAIL] google-genai SDK 导入失败: {e}")
        print("  提示: 运行 pip install google-genai")
        return False

    return True


def test_config():
    """测试配置"""
    print("\n[测试 2] 检查配置...")

    import config

    # 检查必要的配置项
    required_configs = [
        ("API_KEY", str),
        ("API_BASE", str),
        ("MODEL_ID", str),
        ("SYSTEM_INSTRUCTION", str),
        ("FUNCTION_CALLING_MODE", str),
        ("AUTO_FUNCTION_CALLING", bool),
    ]

    for name, expected_type in required_configs:
        if not hasattr(config, name):
            print(f"  [FAIL] 缺少配置项: {name}")
            return False

        value = getattr(config, name)
        if not isinstance(value, expected_type):
            print(f"  [FAIL] 配置项 {name} 类型错误，期望 {expected_type}")
            return False

        print(f"  [OK] {name}: {type(value).__name__}")

    return True


def test_functions():
    """测试函数定义"""
    print("\n[测试 3] 检查函数定义...")

    from functions import (
        get_current_time,
        get_today_schedule,
        AVAILABLE_FUNCTIONS,
        call_function
    )

    # 测试函数列表
    print(f"  [OK] 已注册 {len(AVAILABLE_FUNCTIONS)} 个函数")

    # 测试 get_current_time
    print("\n  测试 get_current_time()...")
    try:
        result = get_current_time()
        assert isinstance(result, dict), "返回值应该是字典"
        assert "date" in result, "应该包含 date 字段"
        assert "time" in result, "应该包含 time 字段"
        assert "weekday" in result, "应该包含 weekday 字段"
        print(f"    [OK] 返回值格式正确: {result}")
    except Exception as e:
        print(f"    [FAIL] 测试失败: {e}")
        return False

    # 测试 get_today_schedule
    print("\n  测试 get_today_schedule()...")
    try:
        result = get_today_schedule()
        assert isinstance(result, dict), "返回值应该是字典"
        assert "schedules" in result, "应该包含 schedules 字段"
        assert isinstance(result["schedules"], list), "schedules 应该是列表"
        assert len(result["schedules"]) > 0, "应该有至少一个日程"
        print(f"    [OK] 返回值格式正确: {len(result['schedules'])} 个日程")
    except Exception as e:
        print(f"    [FAIL] 测试失败: {e}")
        return False

    # 测试 call_function
    print("\n  测试 call_function()...")
    try:
        result = call_function("get_current_time", {})
        assert isinstance(result, dict), "返回值应该是字典"
        print(f"    [OK] 函数调用成功")
    except Exception as e:
        print(f"    [FAIL] 测试失败: {e}")
        return False

    return True


def test_function_declarations():
    """测试函数声明格式"""
    print("\n[测试 4] 检查函数声明...")

    from functions import AVAILABLE_FUNCTIONS

    for func in AVAILABLE_FUNCTIONS:
        print(f"\n  检查函数: {func.__name__}")

        # 检查文档字符串
        if not func.__doc__:
            print(f"    [FAIL] 缺少文档字符串")
            return False
        print(f"    [OK] 有文档字符串")

        # 检查类型注解
        if not hasattr(func, '__annotations__'):
            print(f"    [FAIL] 缺少类型注解")
            return False

        annotations = func.__annotations__
        if 'return' not in annotations:
            print(f"    [FAIL] 缺少返回值类型注解")
            return False

        print(f"    [OK] 有类型注解: {annotations}")

    return True


def test_agent_initialization():
    """测试 Agent 初始化（不需要真实 API）"""
    print("\n[测试 5] 检查 Agent 类...")

    from agent import ScheduleAssistantAgent

    # 检查类的必要方法
    required_methods = [
        '_initialize_client',
        'create_chat_session',
        'send_message',
        'send_message_with_manual_function_calling',
        'get_chat_history'
    ]

    for method_name in required_methods:
        if not hasattr(ScheduleAssistantAgent, method_name):
            print(f"  [FAIL] 缺少方法: {method_name}")
            return False
        print(f"  [OK] 方法存在: {method_name}")

    return True


def main():
    """运行所有测试"""
    print("="*70)
    print("  Gemini Function Calling Demo - 基础功能测试")
    print("="*70)

    tests = [
        ("模块导入", test_imports),
        ("配置检查", test_config),
        ("函数定义", test_functions),
        ("函数声明", test_function_declarations),
        ("Agent 类", test_agent_initialization),
    ]

    passed = 0
    failed = 0

    for name, test_func in tests:
        try:
            if test_func():
                passed += 1
            else:
                failed += 1
                print(f"\n[FAIL] {name} 测试失败")
        except Exception as e:
            failed += 1
            print(f"\n[FAIL] {name} 测试异常: {e}")

    # 总结
    print("\n" + "="*70)
    print(f"  测试完成: {passed} 通过, {failed} 失败")
    print("="*70)

    if failed == 0:
        print("\n[OK] 所有基础测试通过!")
        print("\n下一步:")
        print("  1. 确保你的 API 密钥配置正确")
        print("  2. 运行: python demo.py auto")
        print("  3. 测试实际的 API 调用")
        return 0
    else:
        print("\n[FAIL] 部分测试失败，请检查上面的错误信息")
        return 1


if __name__ == "__main__":
    sys.exit(main())
