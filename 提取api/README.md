# MSN卡片提取项目 ✨

> 逆向工程MSN主页，提取天气、日历、热搜等卡片数据和样式

## 🚀 快速开始

### 方法1: 打开前端页面 (最简单)
```bash
# 简洁版 (推荐) ⭐
start frontend\index.html

# MSN原版风格
start frontend\msn-authentic.html
```

### 方法2: 启动API服务器
```bash
npm install
node server.js
# 访问 http://localhost:3000
```

---

## 📦 项目结构

```
提取api/
├── msn-api.js           # ⭐ MSN API封装库
├── server.js            # 🚀 Express服务器
├── frontend/            # 📱 前端展示
│   ├── index.html      # 简洁版 (推荐)
│   ├── msn-authentic.html  # MSN风格版
│   ├── css/            # 样式文件
│   ├── js/             # 脚本文件
│   └── react-source/   # React源码(92个文件)
├── tools/              # 🛠️ 提取工具
├── docs/               # 📚 详细文档
├── data/               # 💾 数据缓存
└── SUMMARY.md          # 📋 项目总结
```

---

## 🎨 两种展示风格

### 简洁版 (index.html) ⭐
- 渐变背景 + 悬浮卡片
- 现代简洁设计
- 易于定制

### MSN原版 (msn-authentic.html)
- Fluent Design风格
- 完全还原MSN设计
- Segoe UI字体

---

## 📡 API使用

### 获取所有数据
```javascript
const response = await fetch('http://localhost:3000/api/all');
const data = await response.json();

console.log(data.weather);   // 天气数据
console.log(data.calendar);  // 日历数据
console.log(data.trending);  // 热搜数据
```

### API端点列表
```bash
GET /api/all       # 所有数据 (推荐)
GET /api/weather   # 天气信息
GET /api/calendar  # 日历信息
GET /api/trending  # 热搜话题
GET /api/stocks    # 股票财经
GET /api/sports    # 体育赛事
```

### 小时级天气预报 ✨ **新增**
```javascript
const { getHourlyWeather } = require('./msn-api');

// 获取指定坐标的小时级天气（226小时）
const hourly = await getHourlyWeather(39.103, 117.158);

console.log(`总小时数: ${hourly.totalHours}`);
console.log(`未来24小时:`, hourly.hourly.slice(0, 24));
```

**完整示例：**
```javascript
const { getCompleteWeather } = require('./complete-weather');

// 同时获取日级和小时级天气
const weather = await getCompleteWeather();

// 包含: current, daily(5天), hourly(226小时)
```

详细文档: [小时级天气API](docs/HOURLY_WEATHER_API.md)

### IP定位功能 ✨
```bash
# 提取MSN的IP定位信息
node extract-location.js
```

**输出示例：**
```
📍 IP 检测位置:
   国家: 中华人民共和国 (CN)
   城市: 天津市
   精度: 321.91 米

🌤️  天气服务:
   城市代码: 101031500
   数据来源: 中国天气网
```

详细文档: [IP定位完整总结](docs/LOCATION_EXTRACTION_SUMMARY.md)
IP定位总结](docs/LOCATION_EXTRACTION_SUMMARY.md)** - ✨ IP定位完整指南 (新增)
- **[IP定位更正](docs/MSN_LOCATION_CORRECTION.md)** - API结构更正说明
- **[
---

## 🎯 核心功能

✅ **天气卡片**: 温度、预报、空气质量  
✅ **小时级天气**: 226小时逐小时预报 ✨ **新增**  
✅ **日历卡片**: 农历、宜忌、节气、星座  
✅ **热搜卡片**: 实时热门话题  
✅ **股票卡片**: 股市行情  
✅ **体育卡片**: 赛事信息  
✅ **IP定位**: 根据请求IP自动检测城市  
✅ **React源码**: 92个bundle文件完整提取

---

## 📚 详细文档

- **[API文档](docs/01-API文档.md)** - API接口说明
- **[数据结构](docs/02-卡片数据结构.md)** - 数据格式文档
- **[源码分析](docs/03-React源码分析.md)** - React源码分析
- **[小时级天气API](docs/HOURLY_WEATHER_API.md)** - ✨ 逐小时天气预报 (新增)
- **[IP定位总结](docs/LOCATION_EXTRACTION_SUMMARY.md)** - IP定位完整指南
- **[IP定位更正](docs/MSN_LOCATION_CORRECTION.md)** - API结构更正说明
- **[项目总结](SUMMARY.md)** - 完整项目总结

---

## 💡 技术栈

- **后端**: Node.js + Express
- **前端**: 原生HTML/CSS/JS
- **MSN技术**: Microsoft FAST Framework (非React)
- **工具**: Puppeteer (数据提取)

---

## 📱 移植到移动应用

### React Native建议
```javascript
// 1. 使用msn-api.js作为数据层
import { getMSNFeed } from './msn-api';

// 2. React Native组件
const WeatherCard = ({data}) => (
    <View style={styles.card}>
        <Text style={styles.temp}>{data.temperature}°</Text>
    </View>
);
```

详见: [React源码分析报告](docs/03-React源码分析.md)

---

## ⚠️ 注意事项

- 本项目仅用于学习研究
- 请勿用于商业用途
- 尊重MSN的服务条款
- MSN可能随时更改API结构

---

## 🌟 特别说明

MSN使用的不是标准React，而是 **Microsoft FAST Framework**！

---

**版本**: v1.0.0  
**完成时间**: 2025-12-18  
**状态**: ✅ 已完成

---

**Happy Coding! 🎉**
