"""
AI 日程助手错误收集器

自动化测试脚本，用于收集 AI 在创建日程时的常见错误：
1. 缺失 end_time
2. 非法 action_type
3. 参数格式错误
4. 其他违反规则的输出

生成详细的错误报告供优化 prompt 使用。
"""

import json
import requests
import time
from datetime import datetime
from typing import List, Dict, Any, Optional
from dataclasses import dataclass, asdict
from collections import defaultdict

# API 配置
API_ENDPOINT = "https://chatapi.onechats.ai/v1/chat/completions"
API_KEY = "sk-oJfLigrdHv2zKYRfwk4gIz9CFHJAdZt0bEyCFSr8fOdIWSJ5"
MODEL = "gpt-5-nano"

# 需要 end_time 的活动类型关键词
DURATION_REQUIRED = [
    '运动', '跑步', '健身', '锻炼', '游泳', '瑜伽', '打球',
    '会议', '开会', '讨论', '面试',
    '学习', '上课', '培训', '阅读', '看书',
    '工作', '加班', '编程', '写代码',
    '睡觉', '午睡', '休息',
    '做饭', '吃饭', '早餐', '午餐', '晚餐',
    '洗澡', '洗漱',
]

# 瞬时事件（不需要 end_time）
INSTANT_EVENTS = [
    '吃药', '提醒', '闹钟', '打卡', '签到',
    '起床', '出门', '到达', '离开',
]

# 合法的操作类型
VALID_ACTION_TYPES = ['create', 'modify', 'modify_once', 'delete']

@dataclass
class ErrorCase:
    """错误案例"""
    test_input: str
    ai_response: str
    tool_calls: List[Dict[str, Any]]
    error_type: str
    error_detail: str
    timestamp: str
    
@dataclass
class TestResult:
    """测试结果统计"""
    total_tests: int = 0
    total_errors: int = 0
    missing_end_time: int = 0
    invalid_action_type: int = 0
    invalid_time_format: int = 0
    missing_required_fields: int = 0
    other_errors: int = 0
    error_cases: List[ErrorCase] = None
    
    def __post_init__(self):
        if self.error_cases is None:
            self.error_cases = []

# System Prompt（从 Flutter 代码复制）
SYSTEM_PROMPT = """你是一个体贴的时间管理助手。

## 核心职责
1. 帮助用户健康生活、完成目标
2. 科学规划日程安排
3. 灵活建议缓解焦虑

## 工作流程
1. 理解需求 → 2. 查询数据 → 3. 分析权衡 → 4. 提交审批

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## ⚠️ 强制规则（必须遵守）
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 1. 时间字段规则
✅ 必填：time（格式 HH:mm，如 "08:30"）
✅ 条件必填：end_time（持续性活动必须填写）

**需要 end_time 的活动类型：**
- 运动类：跑步、健身、锻炼、游泳、瑜伽、打球
- 工作类：工作、加班、编程、会议、开会、面试
- 学习类：学习、上课、培训、阅读、看书
- 生活类：睡觉、午睡、做饭、吃饭、洗澡

**不需要 end_time 的瞬时事件：**
- 吃药、提醒、闹钟、打卡、签到、起床、出门

### 2. 操作类型规则
✅ 只能使用以下 action_type：
- create（创建规则）
- modify（修改规则）
- modify_once（仅修改某一天）
- delete（删除）

❌ 禁止：其他任何自创的操作类型

### 3. 多时间点处理
❌ 错误：一条日程包含多个时间（"早中晚三餐"）
✅ 正确：分别创建3条日程

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 📝 标准操作示例
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

示例1：每天运动（需要 end_time）
```json
{
  "action_type": "create",
  "schedule_data": {
    "title": "晨跑",
    "time": "07:00",
    "end_time": "08:00",  // 必填！
    "recurrence": "daily"
  }
}
```

示例2：每天吃药（瞬时事件）
```json
{
  "action_type": "create",
  "schedule_data": {
    "title": "吃药",
    "time": "08:00",
    "end_time": null,  // 可不填
    "recurrence": "daily"
  }
}
```

示例3：工作日会议（需要 end_time）
```json
{
  "action_type": "create",
  "schedule_data": {
    "title": "周会",
    "time": "09:00",
    "end_time": "10:00",  // 必填！
    "template_type": "workday"
  }
}
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 其他功能
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 记忆保存 (save_memory)
触发时机：
- 用户表达偏好："我喜欢..."、"我更愿意..."
- 用户说明习惯："我习惯..."、"我通常..."
- 重要事实："我工作制是..."、"我周X没空"

### 位置与时间
- 可查询当前位置和日出日落时间
- 安排晨间活动时，考虑实际日出时间
- 凌晨时段的"明天"优先理解为当天

### 决策原则
- 基于真实数据，不凭空猜测
- 给具体方案，不抛选择题
- 急事可暂缓健康需求，但要提醒补救

### 回复风格
- 用自然语言，如"我帮你安排了..."、"建议改到..."
- 禁止提及技术术语、函数名、参数名
- 说明原因而非操作步骤

当前日期：2025-12-01"""

# Function Tools 定义
TOOLS = [
    {
        "type": "function",
        "function": {
            "name": "get_current_context",
            "description": "获取当前上下文信息：当前时间、今天是星期几、是否工作日/休息日、用户的工作制等",
            "parameters": {
                "type": "object",
                "properties": {},
            }
        }
    },
    {
        "type": "function",
        "function": {
            "name": "query_schedules",
            "description": "查询日程安排。用于了解用户的具体日程列表和时间安排",
            "parameters": {
                "type": "object",
                "properties": {
                    "start_date": {
                        "type": "string",
                        "description": "开始日期，格式 YYYY-MM-DD。可以是'today'、'tomorrow'、'now'",
                    },
                    "end_date": {
                        "type": "string",
                        "description": "结束日期，格式 YYYY-MM-DD，可选",
                    },
                    "hours_ahead": {
                        "type": "integer",
                        "description": "查询接下来N小时内的日程（当start_date='now'时使用），如2表示接下来2小时",
                    }
                },
                "required": ["start_date"]
            }
        }
    },
    {
        "type": "function",
        "function": {
            "name": "propose_action",
            "description": "提交一个待审批的操作（创建、修改或删除日程）。用户会在界面上看到并决定是否执行。\n\n⚠️ 重要：持续性活动（运动、会议、学习、工作、睡觉、吃饭等）必须填写 end_time！",
            "parameters": {
                "type": "object",
                "properties": {
                    "action_type": {
                        "type": "string",
                        "enum": ["create", "modify", "modify_once", "delete"],
                        "description": "【必填】操作类型，只能是这4种：create=创建规则, modify=修改规则, modify_once=仅修改某天, delete=删除。禁止使用其他值！"
                    },
                    "description": {
                        "type": "string",
                        "description": "【必填】操作描述，显示给用户看的，如：'创建每天早上7点的晨跑日程'"
                    },
                    "schedule_data": {
                        "type": "object",
                        "description": "【必填】日程数据对象",
                        "properties": {
                            "id": {
                                "type": "string",
                                "description": "【modify/delete时必填】日程ID"
                            },
                            "title": {
                                "type": "string",
                                "description": "【create时必填】日程标题，如'晨跑'、'周会'、'吃药'"
                            },
                            "time": {
                                "type": "string",
                                "description": "【create时必填】开始时间，格式必须是 HH:mm（如 08:30）"
                            },
                            "end_time": {
                                "type": "string",
                                "description": "【条件必填】结束时间，格式 HH:mm。\n规则：\n✅ 持续性活动必填（运动、会议、学习、工作、睡觉、吃饭、洗澡等）\n❌ 瞬时事件可不填（吃药、提醒、闹钟、起床、出门等）\n\n示例：\n- 晨跑 07:00-08:00 → end_time: '08:00' ✅\n- 周会 09:00-10:00 → end_time: '10:00' ✅\n- 吃药 08:00 → end_time: null ✅\n- 起床 07:00 → end_time: null ✅"
                            },
                            "description": {
                                "type": "string",
                                "description": "【可选】详细描述"
                            },
                            "template_type": {
                                "type": "string",
                                "enum": ["none", "workday", "restday", "weekend", "holiday"],
                                "description": "【可选】模板类型：none=普通（默认）, workday=工作日, restday=休息日, weekend=周末, holiday=节假日"
                            },
                            "recurrence": {
                                "type": "string",
                                "enum": ["none", "daily", "weekly", "interval", "monthly"],
                                "description": "【可选】重复周期：none=不重复（默认）, daily=每天, weekly=每周某天, interval=每隔N天, monthly=每月"
                            },
                            "weekday": {
                                "type": "integer",
                                "enum": [1, 2, 3, 4, 5, 6, 7],
                                "description": "【recurrence=weekly时必填】1=周一, 2=周二, ..., 7=周日"
                            },
                            "interval_days": {
                                "type": "integer",
                                "minimum": 1,
                                "description": "【recurrence=interval时必填】间隔天数，如3表示每隔3天"
                            },
                            "start_date": {
                                "type": "string",
                                "description": "【recurrence=interval时必填】起始日期 YYYY-MM-DD，从这天开始计算间隔"
                            },
                        }
                    }
                },
                "required": ["action_type", "description", "schedule_data"]
            }
        }
    }
]

# 测试用例集合
TEST_CASES = [
    # 运动类（需要 end_time）
    "每天早上7点跑步",
    "每周三晚上8点健身",
    "工作日早上6点半锻炼",
    "每隔两天游泳一次",
    "周末下午打篮球",
    
    # 工作类（需要 end_time）
    "每周一早上9点开周会",
    "工作日晚上7点加班",
    "每天上午10点写代码",
    "周五下午3点面试",
    
    # 学习类（需要 end_time）
    "每天晚上8点学习",
    "工作日早上6点看书",
    "周末上午上课",
    "每周二下午培训",
    
    # 生活类（需要 end_time）
    "每天晚上11点睡觉",
    "工作日中午12点吃午饭",
    "每天早上7点吃早餐",
    "晚上8点洗澡",
    
    # 瞬时事件（不需要 end_time）
    "每天早上8点吃药",
    "工作日早上7点起床",
    "每天晚上9点提醒喝水",
    "每天早上6点半闹钟",
    
    # 边界测试
    "早中晚三餐",  # 应该拆分成3条
    "每天上午下午各运动一次",  # 应该拆分成2条
    "工作日上下班打卡",  # 应该拆分成2条
    
    # 复杂场景
    "每周一三五跑步",  # 可能需要创建3条规则
    "除了周末每天学习",  # 应该用 workday
    "每隔3天吃药",  # interval 类型
]


class AITester:
    """AI 测试器"""
    
    def __init__(self):
        self.conversation_history = []
        self.result = TestResult()
        
    def call_api(self, user_message: str) -> Dict[str, Any]:
        """调用 GPT API"""
        # 构建消息历史
        if not self.conversation_history:
            self.conversation_history.append({
                "role": "system",
                "content": SYSTEM_PROMPT
            })
        
        self.conversation_history.append({
            "role": "user",
            "content": user_message
        })
        
        # 调用 API
        response = requests.post(
            API_ENDPOINT,
            headers={
                "Content-Type": "application/json",
                "Authorization": f"Bearer {API_KEY}"
            },
            json={
                "model": MODEL,
                "messages": self.conversation_history,
                "tools": TOOLS,
                "tool_choice": "auto"
            }
        )
        
        if response.status_code != 200:
            raise Exception(f"API 调用失败: {response.status_code} - {response.text}")
        
        return response.json()
    
    def check_requires_end_time(self, title: str) -> bool:
        """检查是否需要 end_time"""
        title_lower = title.lower()
        
        # 先检查瞬时事件（优先级高）
        for keyword in INSTANT_EVENTS:
            if keyword in title_lower:
                return False
        
        # 检查持续时间事件
        for keyword in DURATION_REQUIRED:
            if keyword in title_lower:
                return True
        
        # 默认需要
        return True
    
    def validate_tool_call(self, tool_call: Dict[str, Any], user_input: str) -> Optional[ErrorCase]:
        """验证单个 tool_call"""
        function_name = tool_call.get('function', {}).get('name')
        
        # 只检查 propose_action
        if function_name != 'propose_action':
            return None
        
        args_str = tool_call.get('function', {}).get('arguments', '{}')
        try:
            args = json.loads(args_str)
        except json.JSONDecodeError:
            return ErrorCase(
                test_input=user_input,
                ai_response="",
                tool_calls=[tool_call],
                error_type="invalid_json",
                error_detail="参数 JSON 解析失败",
                timestamp=datetime.now().isoformat()
            )
        
        action_type = args.get('action_type')
        schedule_data = args.get('schedule_data', {})
        
        errors = []
        
        # 检查1: action_type 是否合法
        if action_type not in VALID_ACTION_TYPES:
            errors.append(f"非法 action_type: {action_type}")
            self.result.invalid_action_type += 1
        
        # 检查2: 必填字段
        if action_type == 'create':
            if not schedule_data.get('title'):
                errors.append("缺少必填字段: title")
                self.result.missing_required_fields += 1
            
            if not schedule_data.get('time'):
                errors.append("缺少必填字段: time")
                self.result.missing_required_fields += 1
            else:
                # 检查时间格式
                time_str = schedule_data.get('time')
                if not self.is_valid_time_format(time_str):
                    errors.append(f"time 格式错误: {time_str}")
                    self.result.invalid_time_format += 1
            
            # 检查3: end_time
            title = schedule_data.get('title', '')
            end_time = schedule_data.get('end_time')
            
            if self.check_requires_end_time(title):
                if not end_time or end_time == 'null':
                    errors.append(f"'{title}' 需要 end_time 但未提供")
                    self.result.missing_end_time += 1
                elif not self.is_valid_time_format(end_time):
                    errors.append(f"end_time 格式错误: {end_time}")
                    self.result.invalid_time_format += 1
        
        if errors:
            self.result.total_errors += 1
            self.result.other_errors += len([e for e in errors if '非法' not in e and '缺少' not in e and '格式错误' not in e])
            return ErrorCase(
                test_input=user_input,
                ai_response="",
                tool_calls=[tool_call],
                error_type="validation_error",
                error_detail="; ".join(errors),
                timestamp=datetime.now().isoformat()
            )
        
        return None
    
    def is_valid_time_format(self, time_str: str) -> bool:
        """检查时间格式 HH:mm"""
        if not isinstance(time_str, str):
            return False
        parts = time_str.split(':')
        if len(parts) != 2:
            return False
        try:
            hour = int(parts[0])
            minute = int(parts[1])
            return 0 <= hour < 24 and 0 <= minute < 60
        except ValueError:
            return False
    
    def test_one_case(self, test_input: str) -> None:
        """测试单个用例"""
        print(f"\n{'='*60}")
        print(f"测试输入: {test_input}")
        print(f"{'='*60}")
        
        self.result.total_tests += 1
        
        try:
            # 重置对话历史（每个测试独立）
            self.conversation_history = []
            
            # 最多进行 3 轮对话，直到 AI 调用 propose_action
            max_rounds = 3
            found_propose = False
            
            for round_num in range(max_rounds):
                # 调用 API
                response = self.call_api(test_input)
                message = response['choices'][0]['message']
                
                # 添加到对话历史
                self.conversation_history.append(message)
                
                # 检查是否有 tool_calls
                tool_calls = message.get('tool_calls', [])
                
                if not tool_calls:
                    if round_num == 0:
                        print("⚠️  警告：AI 没有调用任何函数")
                    break
                
                print(f"✓ AI 调用了 {len(tool_calls)} 个函数")
                
                # 处理每个 tool_call
                for tool_call in tool_calls:
                    function_name = tool_call.get('function', {}).get('name')
                    print(f"  - {function_name}")
                    
                    # 模拟函数响应
                    tool_response = self.mock_function_call(function_name, tool_call)
                    
                    # 添加 tool 响应到对话历史
                    self.conversation_history.append({
                        "role": "tool",
                        "tool_call_id": tool_call['id'],
                        "name": function_name,
                        "content": json.dumps(tool_response, ensure_ascii=False)
                    })
                    
                    if function_name == 'propose_action':
                        found_propose = True
                        args = json.loads(tool_call.get('function', {}).get('arguments', '{}'))
                        print(f"    action_type: {args.get('action_type')}")
                        print(f"    title: {args.get('schedule_data', {}).get('title')}")
                        print(f"    time: {args.get('schedule_data', {}).get('time')}")
                        print(f"    end_time: {args.get('schedule_data', {}).get('end_time')}")
                        
                        error = self.validate_tool_call(tool_call, test_input)
                        if error:
                            print(f"    ❌ 错误: {error.error_detail}")
                            self.result.error_cases.append(error)
                        else:
                            print(f"    ✅ 验证通过")
                
                # 如果找到了 propose_action，就结束
                if found_propose:
                    break
                
                # 否则继续下一轮（让 AI 基于 tool 响应继续思考）
                # 注意：用户不再说话，只是让 AI 继续处理
            
            if not found_propose and tool_calls:
                print(f"⚠️  注意：{max_rounds} 轮对话后仍未调用 propose_action")
            
            # 小延迟，避免 API 限流
            time.sleep(0.5)
            
        except Exception as e:
            print(f"❌ 测试失败: {e}")
            self.result.total_errors += 1
    
    def mock_function_call(self, function_name: str, tool_call: Dict) -> Dict[str, Any]:
        """模拟函数调用响应"""
        if function_name == 'get_current_context':
            return {
                'current_time': '2025-12-01 14:30:00',
                'hour': 14,
                'minute': 30,
                'today': {
                    'date': '2025-12-01',
                    'weekday': '星期日',
                    'day_type': 'weekend',
                    'is_rest': True,
                },
                'tomorrow': {
                    'date': '2025-12-02',
                    'weekday': '星期一',
                    'day_type': 'workday',
                    'is_rest': False,
                },
                'work_schedule': 'double_rest',
                'sleep_suggestion': 'normal',
            }
        elif function_name == 'query_schedules':
            return {
                'success': True,
                'count': 0,
                'schedules': []
            }
        elif function_name == 'propose_action':
            return {
                'success': True,
                'message': '已提交审批请求，等待用户确认',
                'action_id': 'mock_action_id'
            }
        else:
            return {'success': False, 'error': 'Unknown function'}

    
    def run_all_tests(self) -> None:
        """运行所有测试"""
        print(f"\n{'#'*60}")
        print(f"# AI 日程助手错误收集器")
        print(f"# 共 {len(TEST_CASES)} 个测试用例")
        print(f"{'#'*60}\n")
        
        for i, test_case in enumerate(TEST_CASES, 1):
            print(f"\n[{i}/{len(TEST_CASES)}] ", end="")
            self.test_one_case(test_case)
        
        self.print_summary()
        self.save_report()
    
    def print_summary(self) -> None:
        """打印统计摘要"""
        print(f"\n\n{'='*60}")
        print(f"测试摘要")
        print(f"{'='*60}")
        print(f"总测试数: {self.result.total_tests}")
        print(f"总错误数: {self.result.total_errors}")
        print(f"错误率: {self.result.total_errors / self.result.total_tests * 100:.1f}%")
        print(f"\n错误类型分布:")
        print(f"  - 缺失 end_time: {self.result.missing_end_time}")
        print(f"  - 非法 action_type: {self.result.invalid_action_type}")
        print(f"  - 时间格式错误: {self.result.invalid_time_format}")
        print(f"  - 缺失必填字段: {self.result.missing_required_fields}")
        print(f"  - 其他错误: {self.result.other_errors}")
        print(f"{'='*60}\n")
    
    def save_report(self) -> None:
        """保存详细报告"""
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        
        # JSON 报告（供程序分析）
        json_file = f"error_report_{timestamp}.json"
        with open(json_file, 'w', encoding='utf-8') as f:
            json.dump({
                'summary': {
                    'total_tests': self.result.total_tests,
                    'total_errors': self.result.total_errors,
                    'error_rate': f"{self.result.total_errors / self.result.total_tests * 100:.1f}%",
                    'missing_end_time': self.result.missing_end_time,
                    'invalid_action_type': self.result.invalid_action_type,
                    'invalid_time_format': self.result.invalid_time_format,
                    'missing_required_fields': self.result.missing_required_fields,
                    'other_errors': self.result.other_errors,
                },
                'error_cases': [asdict(case) for case in self.result.error_cases]
            }, f, ensure_ascii=False, indent=2)
        
        # Markdown 报告（供人阅读）
        md_file = f"error_report_{timestamp}.md"
        with open(md_file, 'w', encoding='utf-8') as f:
            f.write(f"# AI 日程助手错误报告\n\n")
            f.write(f"生成时间: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n\n")
            
            f.write(f"## 统计摘要\n\n")
            f.write(f"- **总测试数**: {self.result.total_tests}\n")
            f.write(f"- **总错误数**: {self.result.total_errors}\n")
            f.write(f"- **错误率**: {self.result.total_errors / self.result.total_tests * 100:.1f}%\n\n")
            
            f.write(f"### 错误类型分布\n\n")
            f.write(f"| 错误类型 | 数量 | 占比 |\n")
            f.write(f"|---------|------|------|\n")
            total = self.result.total_errors or 1
            f.write(f"| 缺失 end_time | {self.result.missing_end_time} | {self.result.missing_end_time/total*100:.1f}% |\n")
            f.write(f"| 非法 action_type | {self.result.invalid_action_type} | {self.result.invalid_action_type/total*100:.1f}% |\n")
            f.write(f"| 时间格式错误 | {self.result.invalid_time_format} | {self.result.invalid_time_format/total*100:.1f}% |\n")
            f.write(f"| 缺失必填字段 | {self.result.missing_required_fields} | {self.result.missing_required_fields/total*100:.1f}% |\n")
            f.write(f"| 其他错误 | {self.result.other_errors} | {self.result.other_errors/total*100:.1f}% |\n\n")
            
            f.write(f"## 错误案例详情\n\n")
            
            # 按错误类型分组
            cases_by_type = defaultdict(list)
            for case in self.result.error_cases:
                if '缺少' in case.error_detail or '缺失' in case.error_detail:
                    if 'end_time' in case.error_detail:
                        cases_by_type['缺失 end_time'].append(case)
                    else:
                        cases_by_type['缺失必填字段'].append(case)
                elif '非法' in case.error_detail:
                    cases_by_type['非法 action_type'].append(case)
                elif '格式错误' in case.error_detail:
                    cases_by_type['格式错误'].append(case)
                else:
                    cases_by_type['其他'].append(case)
            
            for error_type, cases in cases_by_type.items():
                f.write(f"### {error_type} ({len(cases)} 个)\n\n")
                for i, case in enumerate(cases, 1):
                    f.write(f"#### 案例 {i}\n\n")
                    f.write(f"- **用户输入**: {case.test_input}\n")
                    f.write(f"- **错误详情**: {case.error_detail}\n")
                    f.write(f"- **时间**: {case.timestamp}\n")
                    
                    # 显示 tool_call
                    if case.tool_calls:
                        tool_call = case.tool_calls[0]
                        args = json.loads(tool_call.get('function', {}).get('arguments', '{}'))
                        f.write(f"- **AI 输出**:\n")
                        f.write(f"  ```json\n")
                        f.write(f"  {json.dumps(args, ensure_ascii=False, indent=2)}\n")
                        f.write(f"  ```\n\n")
        
        print(f"✅ 报告已保存:")
        print(f"   - JSON: {json_file}")
        print(f"   - Markdown: {md_file}")


if __name__ == "__main__":
    # 设置 UTF-8 编码（Windows 兼容性）
    import sys
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
    sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8')
    
    tester = AITester()
    tester.run_all_tests()
