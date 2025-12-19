"""
可调用函数定义模块

所有函数必须遵循以下规范：
1. 完整的类型注解（参数和返回值）
2. 详细的文档字符串（包括功能描述、参数说明、返回值说明）
3. 返回值类型必须是 JSON 可序列化的（dict, list, str, int, float, bool）

SDK 会自动从这些信息生成 FunctionDeclaration
"""

from datetime import datetime
from typing import Dict, List


def get_current_time() -> Dict[str, str]:
    """获取当前的日期和时间.

    这个函数返回格式化的当前日期和时间信息，包括：
    - 日期（YYYY-MM-DD 格式）
    - 时间（HH:MM 24小时制）
    - 星期几

    Returns:
        包含当前日期时间信息的字典，格式如下：
        {
            "date": "2025-12-19",
            "time": "18:20",
            "weekday": "星期四"
        }
    """
    # 在 demo 中，我们使用固定的时间
    # 在实际应用中，应该使用 datetime.now()
    demo_time = datetime(2025, 12, 19, 18, 20)

    weekdays = ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"]

    return {
        "date": demo_time.strftime("%Y-%m-%d"),
        "time": demo_time.strftime("%H:%M"),
        "weekday": weekdays[demo_time.weekday()],
        "datetime_full": demo_time.strftime("%Y-%m-%d %H:%M")
    }


def get_today_schedule() -> Dict[str, List[Dict[str, str]]]:
    """获取当天的日程安排.

    这个函数返回用户当天所有已安排的事项，包括时间和具体内容。
    每个事项包含开始时间、结束时间和事项描述。

    Returns:
        包含当天日程列表的字典，格式如下：
        {
            "date": "2025-12-19",
            "schedules": [
                {
                    "start_time": "08:00",
                    "end_time": "09:00",
                    "title": "吃早饭"
                },
                ...
            ]
        }
    """
    # 在 demo 中，我们使用固定的日程数据
    # 在实际应用中，应该从数据库或其他数据源读取
    demo_schedules = [
        {
            "start_time": "08:00",
            "end_time": "09:00",
            "title": "吃早饭",
            "description": "早餐时间"
        },
        {
            "start_time": "12:00",
            "end_time": "14:00",
            "title": "吃午饭",
            "description": "午餐时间"
        },
        {
            "start_time": "18:00",
            "end_time": "19:00",
            "title": "吃晚饭",
            "description": "晚餐时间"
        }
    ]

    return {
        "date": "2025-12-19",
        "total_count": len(demo_schedules),
        "schedules": demo_schedules
    }


# ============================================================================
# 函数注册表
# ============================================================================

# 所有可供 Gemini 调用的函数列表
# 添加新函数时，只需在上面定义函数，然后将其添加到这个列表中
AVAILABLE_FUNCTIONS = [
    get_current_time,
    get_today_schedule,
]


# ============================================================================
# 辅助函数
# ============================================================================

def get_function_by_name(name: str):
    """根据函数名获取函数对象.

    Args:
        name: 函数名称

    Returns:
        函数对象，如果未找到则返回 None
    """
    for func in AVAILABLE_FUNCTIONS:
        if func.__name__ == name:
            return func
    return None


def call_function(function_name: str, arguments: dict):
    """执行指定的函数.

    Args:
        function_name: 要调用的函数名
        arguments: 函数参数字典

    Returns:
        函数执行结果

    Raises:
        ValueError: 如果函数不存在
    """
    func = get_function_by_name(function_name)
    if func is None:
        raise ValueError(f"函数 '{function_name}' 不存在")

    try:
        result = func(**arguments)
        return result
    except Exception as e:
        return {
            "error": str(e),
            "function": function_name,
            "arguments": arguments
        }
