# MSN API 提取项目 - 文件结构说明

## 📁 项目结构

```
提取api/
├── 📄 核心文件 (根目录)
│   ├── msn-api.js          # ⭐ 核心API封装 - 提取天气、日历等数据
│   ├── server.js           # 🚀 Express REST API服务器
│   ├── package.json        # 📦 项目依赖配置
│   ├── .gitignore          # Git忽略配置
│   └── .env.example        # 环境变量示例
│
├── 📂 docs/ (5个文件)      # 📚 项目文档
│   ├── PROJECT_SUMMARY.md  # 项目完整总结文档
│   ├── README.md           # 项目说明
│   ├── API_DISCOVERIES.md  # API发现记录
│   ├── FINAL_REPORT.md     # 最终报告
│   └── REVERSE_GUIDE.md    # 逆向工程指南
│
├── 📂 data/ (6个文件)      # 💾 核心数据文件
│   ├── deep_capture_1765992016563.json  # ⭐ 完整API捕获数据(20个API)
│   ├── weather_card.json                # 天气卡片原始数据
│   ├── calendar_card.json               # 日历卡片原始数据
│   ├── trending_search.json             # 热搜数据
│   ├── stock_data.json                  # 股票数据
│   └── sports_data.json                 # 体育赛事数据
│
├── 📂 tools/ (3个文件)     # 🛠️ 工具脚本
│   ├── deep-capture.js         # Puppeteer网络捕获工具
│   ├── list-all-cards.js       # 列出所有卡片
│   └── extract-other-cards.js  # 提取其他卡片数据
│
└── 📂 archive/ (24个文件)  # 📦 归档文件(过程文件)
    ├── 分析脚本 (analyze-*.js, extract-*.js等)
    ├── 临时数据 (各种response.json)
    ├── 旧版API (weather.js, calendar.js)
    └── 其他临时文件

└── 📂 node_modules/        # Node.js依赖包
```

## 🎯 核心文件说明

### msn-api.js
**用途**: 核心API封装，从MSN Feed API提取数据
**功能**:
- `getWeather()` - 获取天气信息
- `getCalendar()` - 获取日历信息  
- `getWeatherAndCalendar()` - 同时获取两者

**使用**:
```javascript
const { getWeather, getCalendar } = require('./msn-api');
const weather = await getWeather();
```

### server.js
**用途**: Express REST API服务器
**端点**:
- `GET /api/weather` - 天气API
- `GET /api/calendar` - 日历API
- `GET /api/all` - 全部数据

**启动**:
```bash
npm start
```

## 📊 数据文件说明

### deep_capture_1765992016563.json
**重要性**: ⭐⭐⭐⭐⭐
**大小**: ~1MB
**内容**: 
- 完整的MSN主页API捕获数据
- 包含20个数据API的完整响应
- 所有卡片的原始数据
- 用于继续挖掘新功能

**结构**:
```json
{
  "dataAPIs": [
    { "url": "...", "data": {...} },  // 20个API
  ],
  "apiCalls": [...],
  "pageData": {...},
  "summary": {...}
}
```

### *_card.json
提取的各类卡片原始数据，用于调试和分析

## 🛠️ 工具脚本说明

### deep-capture.js
**用途**: 使用Puppeteer捕获MSN主页网络请求
**运行**: `npm run capture`
**输出**: 新的 deep_capture_*.json 文件

### list-all-cards.js
**用途**: 列出Feed API中所有35个卡片
**运行**: `node tools/list-all-cards.js`

### extract-other-cards.js
**用途**: 提取热搜、股票、体育等其他卡片数据
**运行**: `node tools/extract-other-cards.js`

## 🎯 快速开始

### 1. 安装依赖
```bash
npm install
```

### 2. 启动服务器
```bash
npm start
# 或
node server.js
```

### 3. 访问API
```
http://localhost:3000
```

## 🔄 继续挖掘新数据

如果想添加热搜、股票等新功能：

1. 查看 `data/deep_capture_*.json` 找到对应卡片
2. 在 `msn-api.js` 中添加提取函数
3. 在 `server.js` 中添加新端点
4. 重启服务器

示例：
```javascript
// 在 msn-api.js 中
function extractTrendingSearch(feedData) {
    const card = feedData.sections[1].cards[23];
    return JSON.parse(card.data);
}

// 在 server.js 中
app.get('/api/trending', async (req, res) => {
    const data = await getMSNFeed();
    res.json(extractTrendingSearch(data));
});
```

## 📌 已发现的卡片索引

| 索引 | 类型 | 内容 | 状态 |
|------|------|------|------|
| 0-22 | article/webcontent | 新闻文章 | - |
| 23 | TrendingSearchCard | 热搜话题 | 已提取数据 |
| 24 | WeatherSummary | 天气信息 | ✅ 已集成API |
| 25 | MoneyInfo | 股票财经 | 已提取数据 |
| 26 | SportsMatch | 体育赛事 | 已提取数据 |
| 27 | RichCalendarSD | 日历信息 | ✅ 已集成API |
| 28-29 | TopicFeed | 话题流 | - |
| 30-34 | nativead | 广告 | - |

## 🔑 关键信息

- **MSN API Key**: `0QfOX3Vn51YCzitbLaRkTTBadtWpgTN8NZLW0C1SEM`
- **Feed API**: `https://assets.msn.cn/service/news/feed/pages/weblayout`
- **数据提供商**: 中国天气网
- **更新频率**: 天气每小时，日历每日

## ⚠️ 注意事项

1. **保留 data/ 目录**: 包含原始捕获数据，删除将无法恢复
2. **archive/ 可删**: 都是过程文件，已不需要
3. **定期重新捕获**: MSN可能更新API，建议定期运行 `deep-capture.js`

## 📝 更新日志

- **2025-12-18**: 
  - ✅ 成功提取天气和日历API
  - ✅ 发现热搜、股票、体育等其他数据
  - ✅ 整理项目结构
  - 📦 创建docs、data、tools、archive目录

---

**项目状态**: ✅ 生产就绪  
**维护建议**: 每月重新捕获一次数据，检查API变化
