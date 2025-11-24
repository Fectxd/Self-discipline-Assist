# 自律助手 - 智能日程管理系统

一个基于 Flutter 开发的智能日程管理应用，集成 GPT AI 助手，支持规则化日程管理、节假日识别、自动冲突检测等功能。

## ✨ 核心特性

### 🤖 AI 智能助手
- **自然语言交互**：用人话创建日程，如"每天9点起床"、"周末12点起"
- **智能冲突检测**：自动检测时间、逻辑、健康、过载、缓冲等5类冲突
- **待审批机制**：所有AI建议需用户确认后执行
- **上下文理解**：理解"明天"、"周末"、"工作日"等时间表达

### 📅 规则化日程系统
- **5级优先级体系**：
  1. 每天（所有日期）
  2. 工作日/休息日/每隔N天
  3. 周末/节假日
  4. 周X（特定星期几）
  5. 特定日期（单个日期）
  
- **自动覆盖机制**：同一事项在不同日期自动应用不同规则
  - 示例："每天9点起床" + "周末12点起" = 工作日9点，周末12点
  
- **临时修改**：可仅修改某一天，不影响整体规则

### 🎯 智能功能
- ✅ **当前/下一项高亮**：自动突出显示当前和下一个待办事项
- ✅ **节假日识别**：自动获取中国法定节假日并调整日程
- ✅ **手动覆盖**：可手动设置某天为工作日/休息日
- ✅ **导入导出**：支持JSON/文本格式的规则备份和迁移
- ✅ **快速备份**：一键备份所有规则到文档目录

### 📊 日历视图
- 月度/周视图切换
- 自动标记工作日、周末、节假日
- 长按日期手动覆盖日期类型
- 显示每日日程数量

## 🏗️ 技术架构

### 规则引擎
```
用户输入 → GPT解析 → 创建规则 → 数据库存储 → 动态生成日程
```

### 优先级覆盖
```
同一天多个规则 → 按title分组 → 选择优先级最高 → 应用临时覆盖 → 显示最终日程
```

### 数据结构
- **schedule_rules**: 核心规则表（title, time, priority, condition）
- **schedule_overrides**: 临时覆盖表（rule_id, date, type, new_time）
- **holidays**: 节假日缓存表

## 📦 项目结构

```
lib/
├── models/              # 数据模型
│   ├── schedule.dart         # 日程模型
│   ├── schedule_rule.dart    # 规则模型
│   ├── schedule_priority.dart # 优先级枚举
│   ├── schedule_override.dart # 覆盖模型
│   ├── day_type.dart         # 日期类型
│   └── holiday.dart          # 节假日模型
├── services/            # 业务逻辑层
│   ├── database_service.dart      # 数据库服务
│   ├── gpt_service.dart           # GPT AI服务
│   ├── holiday_service.dart       # 节假日API
│   ├── day_service.dart           # 日期管理
│   └── import_export_service.dart # 导入导出
├── screens/             # 界面
│   ├── schedule_screen.dart  # 日程+AI聊天界面
│   └── calendar_screen.dart  # 日历视图
└── main.dart            # 应用入口
```

## 🚀 快速开始

### 1. 环境要求

- Flutter SDK: >=3.10.1
- Dart SDK: >=3.0.0
- Windows 10/11 (ARM64/x64)
- Visual Studio 2022 (用于Windows桌面编译)

### 2. 安装依赖

```bash
flutter pub get
```

### 3. 配置API密钥 ⚠️ **必须**

**首次运行必须配置！**

```bash
# 复制模板文件
cp lib/config/api_keys.dart.template lib/config/api_keys.dart
```

编辑 `lib/config/api_keys.dart`，填入你的真实配置：

```dart
class ApiKeys {
  // 从你的API服务商获取
  static const String gptApiKey = 'sk-your-real-api-key-here';
  
  // 根据服务商填写，例如：
  // OneChats: https://api.gptsapi.net/v1
  // OpenAI: https://api.openai.com/v1
  static const String gptBaseUrl = 'https://api.gptsapi.net/v1';
  
  // 模型名称，例如：gpt-5-nano, gpt-4
  static const String gptModel = 'gpt-5-nano';
}
```

⚠️ **安全提示**：
- `api_keys.dart` 已在 `.gitignore` 中，不会被提交到Git
- 请勿将此文件分享给他人
- 定期更换API密钥

### 4. 运行应用

```bash
# Windows桌面版
flutter run -d windows

# Web版
flutter run -d chrome

# 编译发布版本
flutter build windows
```

## 💡 使用示例

### 与AI助手对话

```
用户："每天9点起床"
AI：已创建规则：每天 09:00 起床

用户："周末我要睡到12点"
AI：检测到同名规则"起床"，我会创建周末专用规则。
    工作日：09:00起床
    周末：12:00起床
    已提交审批。

用户："每周一下午3点开会"
AI：已创建规则：每周一 15:00 开会

用户："明天11点起"
AI：已创建临时修改：明天 11:00 起床（不影响后天）
```

### 导入导出

1. **快速备份**：点击⋮菜单 → 快速备份
2. **导出JSON**：点击⋮菜单 → 导出JSON → 选择位置
3. **导入规则**：点击⋮菜单 → 导入规则 → 选择合并/替换模式

## 🎨 界面预览

- **日程视图**：左侧3/5显示日程列表，右侧2/5显示AI聊天
- **当前高亮**：正在进行的事项绿色边框+标签
- **下一项提示**：下一个待办橙色边框+标签
- **优先级标签**：每个日程显示类型标签（每天/工作日/周末等）

## 📚 文档

- [架构说明（简化版）](架构说明-简化版.md) - 系统整体设计
- [快速开始](快速开始.md) - 详细使用指南
- [日程优先级体系](日程优先级体系-v2.md) - 优先级规则说明

## 🛠️ 技术栈

- **框架**: Flutter 3.38.3
- **状态管理**: Provider
- **数据库**: SQLite (sqflite_common_ffi)
- **AI**: GPT-5-nano (可配置)
- **日历**: table_calendar
- **国际化**: intl

## 🔧 配置说明

### Windows ARM64 编译

已配置 CMake 支持 ARM64 原生编译：
```cmake
set(CMAKE_GENERATOR_PLATFORM "ARM64" CACHE STRING "Platform" FORCE)
```

### 数据库位置

- Windows: `%LOCALAPPDATA%\SelfDiscipline\databases\`
- Linux: `~/.local/share/self_discipline/databases/`
- macOS: `~/Library/Application Support/SelfDiscipline/databases/`

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

## 🙏 致谢

- [Flutter](https://flutter.dev/) - UI框架
- [节假日API](https://www.mxnzp.com/) - 中国节假日数据
- OneChats - GPT API服务

## ⚠️ 注意事项

1. **API密钥安全**：不要将API密钥提交到Git仓库
2. **数据备份**：建议定期使用"快速备份"功能
3. **规则冲突**：系统会自动检测，但请注意审查AI建议
4. **时间格式**：时间必须使用HH:mm格式（如"09:00"）

## 📞 联系方式

如有问题或建议，欢迎提交Issue。

```powershell
flutter run -d chrome
```

## 依赖包

- **provider**: 状态管理
- **table_calendar**: 日历组件
- **intl**: 国际化和日期格式化
- **http**: HTTP请求
- **uuid**: 生成唯一ID
- **sqflite_common_ffi**: SQLite数据库（桌面版）
- **path_provider**: 获取系统路径
- **path**: 路径操作

## 使用说明

### 日程管理

1. 在"日程"标签页点击右下角的 ➕ 按钮添加新日程
2. 填写日程标题、描述、开始/结束时间
3. 点击日程可查看详情，长按可编辑或删除
4. 勾选复选框标记日程为完成

### 日历视图

1. 在"日历"标签页查看月度日历
2. 不同颜色标记表示：
   - 🔵 蓝色：工作日
   - 🟢 绿色：周末
   - 🔴 红色：法定节假日
3. **长按日期**可手动设置工作日/休息日
4. 手动设置后会优先显示，可选择"恢复默认"取消覆盖

## 后续开发计划

- [ ] 集成 GPT API 进行智能日程规划
- [ ] 日程智能调整功能
- [ ] 数据云端同步
- [ ] Android/iOS 移动端适配
- [ ] 习惯追踪功能
- [ ] 数据统计和分析

## 问题排查

### 依赖安装失败

如果 `flutter pub get` 失败，可以尝试：
```powershell
# 设置国内镜像
$env:PUB_HOSTED_URL="https://pub.flutter-io.cn"
$env:FLUTTER_STORAGE_BASE_URL="https://storage.flutter-io.cn"
flutter pub get
```
