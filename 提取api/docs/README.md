# Edge 主页 API 提取服务

提取中国版 Edge 主页的日历和天气功能，提供 RESTful API 接口，方便集成到手机 App。

## 📦 功能特性

- ☁️ **天气查询**：支持全国城市天气查询，实时天气 + 7天预报
- 📅 **日历功能**：提供公历、农历、节假日、二十四节气信息
- 🚀 **简单易用**：RESTful API，JSON 格式返回
- 📱 **移动友好**：专为手机 App 集成设计

## 🚀 快速开始

### 1. 安装依赖

\`\`\`bash
npm install
\`\`\`

### 2. 启动服务

\`\`\`bash
npm start
\`\`\`

开发模式（自动重启）：
\`\`\`bash
npm run dev
\`\`\`

服务将在 `http://localhost:3000` 启动

### 3. 访问 API

打开浏览器访问：`http://localhost:3000` 查看完整 API 文档

## 📖 API 接口说明

### 天气接口

#### 1. 和风天气接口（推荐）

\`\`\`
GET /api/weather/qweather?city=北京&key=YOUR_API_KEY
\`\`\`

**参数：**
- `city`: 城市名称（可选，默认"北京"）
- `key`: 和风天气 API Key（必需）

**响应示例：**
\`\`\`json
{
  "success": true,
  "city": "北京",
  "province": "北京市",
  "current": {
    "temp": "5",
    "feelsLike": "2",
    "text": "晴",
    "windDir": "北风",
    "windScale": "3",
    "humidity": "45"
  },
  "forecast": [
    {
      "date": "2024-12-18",
      "tempMax": "8",
      "tempMin": "-2",
      "textDay": "晴",
      "textNight": "晴"
    }
  ],
  "updateTime": "2024-12-18T10:00+08:00"
}
\`\`\`

**获取 API Key：**
1. 访问 [和风天气开发平台](https://dev.qweather.com/)
2. 注册账号并创建应用
3. 获取免费 API Key（每天免费1000次请求）

#### 2. 基础天气接口

\`\`\`
GET /api/weather?city=上海市
\`\`\`

**参数：**
- `city`: 城市名称（可选，默认"北京市"）

> 注意：此接口为演示版本，建议使用和风天气接口获取真实数据

### 日历接口

#### 1. 获取指定日期信息

\`\`\`
GET /api/calendar?date=2024-12-25
\`\`\`

**参数：**
- `date`: 日期，格式 YYYY-MM-DD（可选，默认今天）

**响应示例：**
\`\`\`json
{
  "success": true,
  "date": "2024-12-25",
  "year": 2024,
  "month": "12",
  "day": "25",
  "weekDay": "星期三",
  "lunar": {
    "year": "甲辰年",
    "month": "腊月",
    "day": "廿五",
    "zodiac": "龙"
  },
  "holiday": "圣诞节",
  "solarTerm": null
}
\`\`\`

#### 2. 获取月历

\`\`\`
GET /api/calendar/month?year=2024&month=12
\`\`\`

**参数：**
- `year`: 年份（可选，默认今年）
- `month`: 月份（可选，默认本月）

**响应示例：**
\`\`\`json
{
  "success": true,
  "year": 2024,
  "month": 12,
  "daysInMonth": 31,
  "weeks": [
    [null, 1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12, 13],
    ...
  ]
}
\`\`\`

## 🔧 手机 App 集成示例

### Android (Kotlin)

\`\`\`kotlin
// 使用 Retrofit
interface ApiService {
    @GET("api/weather/qweather")
    suspend fun getWeather(
        @Query("city") city: String,
        @Query("key") apiKey: String
    ): WeatherResponse
    
    @GET("api/calendar")
    suspend fun getCalendar(
        @Query("date") date: String? = null
    ): CalendarResponse
}

// 调用示例
val weather = apiService.getWeather("北京", "YOUR_API_KEY")
val calendar = apiService.getCalendar()
\`\`\`

### iOS (Swift)

\`\`\`swift
// 使用 URLSession
func getWeather(city: String, apiKey: String) async throws -> WeatherResponse {
    let url = URL(string: "http://your-server:3000/api/weather/qweather?city=\\(city)&key=\\(apiKey)")!
    let (data, _) = try await URLSession.shared.data(from: url)
    return try JSONDecoder().decode(WeatherResponse.self, from: data)
}

func getCalendar(date: String? = nil) async throws -> CalendarResponse {
    var urlString = "http://your-server:3000/api/calendar"
    if let date = date {
        urlString += "?date=\\(date)"
    }
    let url = URL(string: urlString)!
    let (data, _) = try await URLSession.shared.data(from: url)
    return try JSONDecoder().decode(CalendarResponse.self, from: data)
}
\`\`\`

### React Native

\`\`\`javascript
// 获取天气
const getWeather = async (city, apiKey) => {
  const response = await fetch(
    \`http://your-server:3000/api/weather/qweather?city=\${city}&key=\${apiKey}\`
  );
  return await response.json();
};

// 获取日历
const getCalendar = async (date = null) => {
  const url = date 
    ? \`http://your-server:3000/api/calendar?date=\${date}\`
    : 'http://your-server:3000/api/calendar';
  const response = await fetch(url);
  return await response.json();
};
\`\`\`

## 🌟 增强功能建议

### 农历功能增强

安装专业农历库：

\`\`\`bash
npm install lunar-javascript
\`\`\`

在 [calendar.js](calendar.js) 中使用：

\`\`\`javascript
const {Solar, Lunar} = require('lunar-javascript');

async function getLunarDate(date) {
  const solar = Solar.fromDate(date);
  const lunar = solar.getLunar();
  
  return {
    year: lunar.getYearInChinese() + '年',
    month: lunar.getMonthInChinese() + '月',
    day: lunar.getDayInChinese(),
    zodiac: lunar.getYearShengXiao(),
    ganZhi: lunar.getYearInGanZhi()
  };
}
\`\`\`

### 其他天气服务

除了和风天气，还可以使用：

1. **心知天气**：https://www.seniverse.com/
2. **OpenWeatherMap**：https://openweathermap.org/
3. **高德天气**：https://lbs.amap.com/

## 📝 注意事项

1. **API Key 安全**：
   - 不要将 API Key 硬编码在客户端
   - 建议在服务器端配置环境变量
   - 使用 `.env` 文件管理密钥

2. **请求限制**：
   - 和风天气免费版：1000次/天
   - 建议实现缓存机制减少请求

3. **部署建议**：
   - 可部署到云服务器、VPS
   - 推荐：阿里云、腾讯云、华为云
   - 也可使用 Vercel、Railway 等平台

## 🚀 部署

### 使用 PM2 部署（推荐）

\`\`\`bash
# 安装 PM2
npm install -g pm2

# 启动服务
pm2 start server.js --name edge-api

# 查看状态
pm2 status

# 查看日志
pm2 logs edge-api

# 设置开机自启
pm2 startup
pm2 save
\`\`\`

### Docker 部署

创建 `Dockerfile`：

\`\`\`dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
\`\`\`

构建和运行：

\`\`\`bash
docker build -t edge-api .
docker run -p 3000:3000 edge-api
\`\`\`

## 📄 License

MIT

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 💡 常见问题

**Q: 为什么天气数据不准确？**  
A: 基础接口是演示版本，请使用和风天气等专业服务获取真实数据。

**Q: 如何在局域网访问？**  
A: 修改 [server.js](server.js#L95-L96)，将 `localhost` 改为 `0.0.0.0`，然后使用服务器 IP 地址访问。

**Q: 农历数据不对？**  
A: 当前使用的是示例数据，请安装 `lunar-javascript` 库获取准确数据。

---

**享受编码！** 🎉
