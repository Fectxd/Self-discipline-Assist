# MSN 天气与日历 API 项目

## 🎯 项目简介

成功从 MSN 中国主页（www.msn.cn）逆向工程提取真实的天气和日历数据API，现已封装成RESTful API服务，可直接集成到移动应用中。

## ✨ 核心特性

### 天气功能
- ✅ 实时天气（温度、体感、天气状况）
- ✅ 空气质量（AQI、污染物、等级）
- ✅ 5天天气预报
- ✅ 天气预警信息
- ✅ 日出日落时间
- ✅ 风力、湿度、气压等详细数据

### 日历功能
- ✅ 公历日期
- ✅ 农历信息（年月日、别名）
- ✅ 天干地支（年月日）
- ✅ 生肖与星座
- ✅ 节日节气
- ✅ 宜忌事项
- ✅ 每日格言
- ✅ 历史上的今天
- ✅ 12星座运势
- ✅ 年度进度条

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 启动服务

```bash
npm start
# 或
node server.js
```

服务将在 `http://localhost:3000` 启动

## 📡 API 接口文档

### 1. 获取天气信息

**请求**
```
GET http://localhost:3000/api/weather
```

**响应示例**
```json
{
  "success": true,
  "data": {
    "location": {
      "id": "101030100",
      "coordinates": {
        "lat": 39.13822,
        "lon": 117.14997
      },
      "timezone": "Asia/Shanghai"
    },
    "current": {
      "temperature": 0,
      "feelsLike": 0,
      "condition": "晴朗",
      "icon": 28,
      "humidity": 93,
      "windSpeed": 3,
      "windDirection": 225,
      "pressure": 1024,
      "visibility": 2.9,
      "uvIndex": 0,
      "uvDescription": "低"
    },
    "airQuality": {
      "aqi": 110,
      "level": 3,
      "severity": "轻度污染",
      "primaryPollutant": "PM2.5"
    },
    "forecast": [
      {
        "dayIndex": 0,
        "highTemp": 7,
        "lowTemp": -1,
        "condition": "晴朗",
        "precipitation": 0,
        "uvIndex": 1
      }
    ]
  },
  "timestamp": "2025-12-18T01:30:00.000Z"
}
```

### 2. 获取日历信息

**请求**
```
GET http://localhost:3000/api/calendar
```

**响应示例**
```json
{
  "success": true,
  "data": {
    "today": {
      "date": {
        "year": 2025,
        "month": 12,
        "day": 18
      },
      "lunar": {
        "year": "2025",
        "month": "十",
        "day": "廿九",
        "alias": "廿九"
      },
      "ganZhi": {
        "year": "乙巳",
        "month": "戊子",
        "day": "辛酉"
      },
      "zodiac": "蛇",
      "constellation": "射手座",
      "festivals": ["国际移徙者日", "联合国阿拉伯文日"],
      "suitableActivities": ["祭祀", "开光", "理发"],
      "unsuitableActivities": ["伐木", "纳畜", "破土"]
    },
    "nextFestivals": [
      {
        "name": "冬至",
        "date": { "year": 2025, "month": 12, "day": 21 },
        "countdown": 3
      }
    ],
    "dailyQuote": {
      "text": "一个人使劲踮起脚尖靠近太阳的时候，全世界都挡不住她的阳光。",
      "author": "《人民日报》"
    },
    "progressBar": {
      "dayOfYear": 352,
      "weekOfYear": 51,
      "progress": 96.44
    }
  },
  "timestamp": "2025-12-18T01:30:00.000Z"
}
```

### 3. 同时获取天气和日历

**请求**
```
GET http://localhost:3000/api/all
```

**响应**
```json
{
  "success": true,
  "data": {
    "weather": { ... },
    "calendar": { ... }
  },
  "timestamp": "2025-12-18T01:30:00.000Z"
}
```

### 4. 健康检查

**请求**
```
GET http://localhost:3000/health
```

**响应**
```json
{
  "status": "ok",
  "uptime": 123.456,
  "timestamp": "2025-12-18T01:30:00.000Z"
}
```

## 🔧 技术实现

### 核心文件

- **msn-api.js** - 核心API提取逻辑，解析MSN Feed数据
- **server.js** - Express服务器，提供RESTful API
- **deep-capture.js** - Puppeteer网络捕获工具
- **analyze-feed-api.js** - Feed API分析工具

### 技术栈

- Node.js
- Express.js
- Axios
- Puppeteer (用于数据捕获)

### 数据来源

- **主API**: `https://assets.msn.cn/service/news/feed/pages/weblayout`
- **API Key**: `0QfOX3Vn51YCzitbLaRkTTBadtWpgTN8NZLW0C1SEM` (MSN公开密钥)
- **数据提供商**: 中国天气网
- **数据结构**: 
  - 天气数据位于 `sections[1].cards[24]` (类型: WeatherSummary)
  - 日历数据位于 `sections[1].cards[27]` (类型: RichCalendarSD)

## 📊 数据结构发现过程

### 1. 网络捕获
使用Puppeteer捕获MSN主页的所有API请求（20个数据API）

### 2. 数据定位
通过字符串搜索找到包含 "LunarYear" 的响应（Feed API）

### 3. 结构分析
发现数据以JSON字符串形式嵌入在 `card.data` 字段中

### 4. 解析提取
创建专门的提取函数解析天气和日历卡片数据

## 🎨 使用示例

### Node.js

```javascript
const axios = require('axios');

// 获取天气
const weather = await axios.get('http://localhost:3000/api/weather');
console.log(weather.data);

// 获取日历
const calendar = await axios.get('http://localhost:3000/api/calendar');
console.log(calendar.data);
```

### Python

```python
import requests

# 获取天气
response = requests.get('http://localhost:3000/api/weather')
weather = response.json()
print(weather['data']['current']['temperature'])

# 获取日历
response = requests.get('http://localhost:3000/api/calendar')
calendar = response.json()
print(calendar['data']['today']['lunar'])
```

### cURL

```bash
# 获取天气
curl http://localhost:3000/api/weather

# 获取日历
curl http://localhost:3000/api/calendar

# 同时获取
curl http://localhost:3000/api/all
```

## 📝 开发笔记

### 关键发现

1. **MSN主页架构**: 使用单一Feed API聚合所有数据，包括新闻、天气、日历
2. **数据嵌入方式**: Card数据以JSON字符串形式存储，需要二次解析
3. **卡片定位**: 天气卡片索引24，日历卡片索引27（可能会变化）
4. **API密钥**: MSN使用公开的API密钥，无需额外认证

### 技术挑战

- ❌ PowerShell无法解析大JSON文件（>300KB）
- ✅ 使用Node.js成功解析
- ❌ 初始尝试从配置API获取数据失败（只有配置无数据）
- ✅ 最终在Feed API中找到完整数据

## ⚠️ 注意事项

1. **API稳定性**: MSN可能随时更改API结构或密钥
2. **数据更新**: 天气数据每小时更新，日历数据每日更新
3. **请求限制**: 建议添加缓存机制，避免频繁请求
4. **卡片索引**: sections[1].cards 的索引可能会变化，建议通过类型查找

## 🔮 未来改进

- [ ] 添加数据缓存（Redis）
- [ ] 支持城市选择
- [ ] 添加请求限流
- [ ] 错误重试机制
- [ ] Docker容器化
- [ ] 监控与日志
- [ ] 自动检测卡片位置变化

## 📜 许可证

本项目仅供学习研究使用。数据版权归MSN和中国天气网所有。

## 🙏 致谢

- MSN中国提供的公开API
- 中国天气网提供的天气数据
- Puppeteer团队提供的网络捕获工具

---

**项目状态**: ✅ 运行正常 | **最后测试**: 2025-12-18 | **数据来源**: www.msn.cn
