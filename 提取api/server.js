const express = require('express');
const cors = require('cors');
const { getWeather, getCalendar, getWeatherAndCalendar } = require('./msn-api');

const app = express();
const PORT = process.env.PORT || 3000;

// 中间件
app.use(cors());
app.use(express.json());

// 根路径 - API文档
app.get('/', (req, res) => {
  res.json({
    name: 'MSN天气与日历API',
    description: '从MSN中国主页"偷"的真实API数据',
    version: '1.0.0',
    endpoints: {
      '/api/weather': {
        method: 'GET',
        description: '获取天气信息',
        response: {
          location: '位置信息',
          current: '当前天气',
          airQuality: '空气质量',
          forecast: '天气预报(5天)',
          alerts: '天气预警',
          provider: '数据提供商'
        }
      },
      '/api/calendar': {
        method: 'GET',
        description: '获取日历信息',
        response: {
          today: '今日信息(公历、农历、干支、生肖、星座、节日、宜忌)',
          nextFestivals: '即将到来的节日',
          dailyQuote: '每日格言',
          historyEvents: '历史上的今天',
          horoscope: '星座运势',
          progressBar: '年度进度'
        }
      },
      '/api/all': {
        method: 'GET',
        description: '同时获取天气和日历信息',
        response: {
          weather: '天气信息',
          calendar: '日历信息'
        }
      }
    },
    dataSource: 'www.msn.cn (中国天气网)',
    author: 'API偷窃计划',
    github: '欢迎Star⭐'
  });
});

// 获取天气
app.get('/api/weather', async (req, res) => {
    try {
        const weather = await getWeather();
        res.json({
            success: true,
            data: weather,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
            timestamp: new Date().toISOString()
        });
    }
});

// 获取日历
app.get('/api/calendar', async (req, res) => {
    try {
        const calendar = await getCalendar();
        res.json({
            success: true,
            data: calendar,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
            timestamp: new Date().toISOString()
        });
    }
});

// 同时获取天气和日历
app.get('/api/all', async (req, res) => {
    try {
        const data = await getWeatherAndCalendar();
        res.json({
            success: true,
            data,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
            timestamp: new Date().toISOString()
        });
    }
});

// 健康检查
app.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
});

// 404处理
app.use((req, res) => {
    res.status(404).json({
        success: false,
        error: 'Endpoint not found',
        message: '请访问 / 查看API文档'
    });
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`\n🎉 MSN API服务器已启动！`);
  console.log(`\n📡 服务地址: http://localhost:${PORT}`);
  console.log(`\n📖 API文档: http://localhost:${PORT}/`);
  console.log(`\n可用端点:`);
  console.log(`  - GET http://localhost:${PORT}/api/weather  (天气)`);
  console.log(`  - GET http://localhost:${PORT}/api/calendar (日历)`);
  console.log(`  - GET http://localhost:${PORT}/api/all      (全部)`);
  console.log(`\n数据来源: MSN中国 (www.msn.cn)`);
  console.log(`提供商: 中国天气网\n`);
});

module.exports = app;
