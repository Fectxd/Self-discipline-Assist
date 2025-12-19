# MSN 卡片前端展示

这个目录包含MSN卡片的前端渲染页面，还原了真实的MSN主页卡片样式。

## 📁 结构

```
frontend/
├── index.html          # 主页面
├── css/
│   └── cards.css      # 卡片样式
├── js/
│   └── cards.js       # 卡片渲染逻辑
└── assets/            # 图片资源（预留）
```

## 🚀 使用方法

### 1. 启动后端API服务器

```bash
# 在项目根目录
npm start
```

服务器将在 `http://localhost:3000` 启动

### 2. 打开前端页面

直接用浏览器打开 `frontend/index.html`

或者使用 Live Server（推荐）：
```bash
# 如果安装了http-server
cd frontend
npx http-server -p 8080
```

然后访问 `http://localhost:8080`

## 🎨 已实现的卡片

- ✅ **天气卡片** - 显示当前天气、AQI、预报
- ✅ **日历卡片** - 公历、农历、干支、每日格言
- ✅ **热搜卡片** - 实时热搜榜单
- ✅ **股票卡片** - 主要股指行情

## 🎯 特性

- 💯 **高度还原** - 仿照MSN真实卡片样式
- 🎨 **美观设计** - 渐变背景、阴影效果
- 📱 **响应式** - 支持移动端和桌面端
- ⚡ **实时数据** - 从API获取真实数据
- 🔄 **自动刷新** - 5分钟自动更新一次

## 🛠️ 自定义

### 修改样式
编辑 `css/cards.css`

### 添加新卡片
1. 在 `index.html` 添加卡片容器
2. 在 `css/cards.css` 添加样式
3. 在 `js/cards.js` 添加渲染函数

### 使用图片
将图片放到 `assets/` 目录，然后在CSS中引用：
```css
background-image: url('../assets/weather-bg.jpg');
```

## 📸 截图预览

天气卡片样式：
- 渐变紫色背景
- 大号温度显示
- AQI徽章
- 3天预报

日历卡片样式：
- 渐变粉红背景
- 大号日期显示
- 农历信息
- 每日格言

## 🔧 技术栈

- 纯原生 HTML/CSS/JavaScript
- Fetch API 获取数据
- CSS Grid 布局
- CSS 渐变和动画

## 📝 注意事项

1. 需要先启动后端API服务器（`npm start`）
2. 热搜和股票数据来自本地JSON文件
3. 天气和日历数据来自API实时获取
4. 如遇CORS错误，请使用http-server或Live Server

## 🎨 配色方案

- 天气卡片: `#667eea` → `#764ba2`
- 日历卡片: `#f093fb` → `#f5576c`
- 热搜卡片: `#fa709a` → `#fee140`
- 股票卡片: `#4facfe` → `#00f2fe`

---

**完美还原MSN卡片体验！** 🎉
