# Edge 主页 API 逆向工程指南

## 🎯 目标
完全复制中国版 Edge 主页的天气和日历功能，提取真实的 API 接口。

## 📋 步骤

### 第一步：安装依赖

```bash
npm install
```

### 第二步：抓取真实 API

```bash
npm run capture
```

**这个命令会：**
1. 启动一个 Chrome 浏览器
2. 访问 MSN 中国版主页（Edge 新标签页的数据源）
3. 监控所有网络请求
4. 自动识别天气和日历相关的 API
5. 保存所有请求和响应数据到 `msn_api_capture_*.json`
6. 生成分析报告

**注意观察：**
- 浏览器会自动打开，请勿关闭
- 终端会实时显示捕获的 API 请求
- 看到 "🌤️ 发现天气API！" 或 "📅 发现日历API！" 说明找到了目标
- 等待约 15-20 秒后自动关闭

### 第三步：分析 API 结构

```bash
npm run analyze
```

**这个命令会：**
1. 读取刚才捕获的数据
2. 分析所有 API 的结构和参数
3. 自动生成可用的 API 调用代码
4. 输出到 `extracted-apis.js`
5. 创建使用示例 `usage-example.js`

### 第四步：查看提取的 API

查看生成的文件：
- `msn_api_capture_*.json` - 原始捕获数据
- `api_report_*.txt` - 详细分析报告
- `extracted-apis.js` - 可直接使用的 API 函数
- `usage-example.js` - 调用示例

### 第五步：测试提取的 API

```bash
node usage-example.js
```

或者在自己的代码中导入：

```javascript
const { getWeather1, getCalendar1 } = require('./extracted-apis');

// 使用真实的参数调用
const data = await getWeather1('参数1', '参数2');
console.log(data);
```

## 🔍 手动分析（可选）

如果自动分析不够详细，可以手动检查：

```javascript
// 读取捕获数据
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('msn_api_capture_*.json', 'utf8'));

// 查看所有响应
data.responses.forEach(res => {
  console.log('URL:', res.url);
  console.log('Data:', JSON.stringify(res.data, null, 2));
  console.log('---');
});
```

## 📊 预期结果

### 天气 API 可能的形式：
```
https://weather.microsoft.com/api/...
https://assets.msn.com/...weather...
https://www.msn.cn/api/weather/...
```

### 日历 API 可能的形式：
```
https://www.msn.cn/api/calendar/...
https://assets.msn.com/...lunar...
```

## 🛠️ 进阶使用

### 1. 监控特定城市
修改 `capture-apis.js`，在访问页面后添加城市切换逻辑

### 2. 捕获更多交互
修改等待时间，或添加鼠标点击事件

### 3. 导出为 Postman
捕获数据可以转换为 Postman Collection：

```javascript
// 使用 analyze-response.js 生成的数据
// 手动整理成 Postman 格式
```

## ⚠️ 注意事项

1. **合法性**：仅用于学习研究，请遵守相关服务的使用条款
2. **频率限制**：不要频繁请求，避免被封禁
3. **数据结构变化**：API 可能随时更新，需要重新捕获
4. **认证问题**：某些 API 可能需要认证 token

## 🐛 故障排除

### 问题1：浏览器无法启动
```bash
# 检查 Puppeteer 安装
npx puppeteer browsers install chrome
```

### 问题2：没有捕获到 API
- 等待时间可能不够，增加 `waitForTimeout` 时间
- 某些 API 可能需要特定交互触发
- 检查网络环境，确保能访问 MSN

### 问题3：API 返回 403/401
- 可能需要添加更多 headers
- 某些 API 需要 Referer
- 可能需要 cookies 或 token

## 📝 下一步

1. 运行 `npm run capture` 开始捕获
2. 分析捕获结果
3. 测试提取的 API
4. 集成到你的手机 App

祝你挖掘顺利！🎉
