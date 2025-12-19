# Edge 主页 API 逆向工程 - 真实接口挖掘

## 🎯 发现的关键 API 端点

### 1. 核心配置 API
```
GET https://assets.msn.cn/resolver/api/resolve/v3/config/
```

**说明：** 这是 MSN 主页的核心配置接口，包含天气、日历等所有组件的配置信息。

**参数：**
- `expType=AppConfig`
- `expInstance=default`
- `apptype=homePage`
- `v=20251216.31` (版本号)
- `targetScope` - JSON 对象包含：
  - `audienceMode`: "adult"
  - `locale`: {"content": {"language": "zh", "market": "cn"}}
  - `deviceFormFactor`: "desktop"
  - `platform`: "web"

**用途：** 获取页面配置，可能包含天气和日历组件的初始化数据。

---

### 2. 新闻Feed API (可能包含天气数据)
```
GET https://assets.msn.cn/service/news/feed/pages/weblayout
```

**参数：**
- `User=m-xxxxx` (用户ID)
- `activityId` (活动ID)
- `apikey=0QfOX3Vn51YCzitbLaRkTTBadtWpgTN8NZLW0C1SEM`
- `audienceMode=adult`
- `cm=zh-cn` (语言/市场)
- `layout=c2`
- `ocid=hponeservicefeed`

---

### 3. 用户服务 API
```
GET https://assets.msn.cn/service/msn/user
```

**参数：**
- `apikey=0QfOX3Vn51YCzitbLaRkTTBadtWpgTN8NZLW0C1SEM`
- `activityId` (UUID)
- `user=m-xxxxx`
- `scn=APP_ANON`
- `source=market-consolidation`

---

## 📦 下一步行动

### 方案 A：直接请求这些 API

运行深度抓取完成后，我们将：
1. 检查 `deep_capture_*.json` 文件
2. 找到包含天气/日历数据的响应
3. 复制其请求参数
4. 编写代理函数

### 方案 B：分析 JavaScript 代码

如果 API 数据不直接可用，可能需要：
1. 下载并分析 JS 文件（如 `weather-card-wc.js`）
2. 反混淆代码找出 API 端点
3. 提取认证逻辑

### 方案 C：检查内嵌数据

天气和日历数据可能直接内嵌在 HTML 中作为初始状态。

---

## 🔑 关键发现

### API Key
所有 MSN 服务使用相同的 API Key：
```
0QfOX3Vn51YCzitbLaRkTTBadtWpgTN8NZLW0C1SEM
```

这是公开的 API Key，可直接使用。

### 域名
- 主域名：`assets.msn.cn`
- 配置：`assets.msn.cn/resolver`
- 服务：`assets.msn.cn/service`
- API：`api.msn.com`

---

## 📝 使用方法

等待 `npm run deep` 完成后：

### 1. 查看捕获数据
```bash
# 查看最新的捕获文件
dir deep_capture_*.json | sort | select -last 1
```

### 2. 提取特定 API 数据
```javascript
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('deep_capture_xxxxx.json', 'utf8'));

// 查找天气 API
const weatherAPIs = data.dataAPIs.filter(api => 
  api.url.includes('weather') || 
  api.url.includes('Weather')
);

// 查找日历 API
const calendarAPIs = data.dataAPIs.filter(api =>
  api.url.includes('calendar') ||
  api.url.includes('Calendar') ||
  api.url.includes('lunar')
);

console.log('天气 API:', weatherAPIs);
console.log('日历 API:', calendarAPIs);
```

### 3. 测试 API
```javascript
const axios = require('axios');

// 测试配置 API
async function testConfigAPI() {
  const response = await axios.get('https://assets.msn.cn/resolver/api/resolve/v3/config/', {
    params: {
      expType: 'AppConfig',
      expInstance: 'default',
      apptype: 'homePage',
      v: '20251216.31',
      targetScope: JSON.stringify({
        audienceMode: "adult",
        locale: {
          content: { language: "zh", market: "cn" },
          display: { language: "zh", market: "cn" }
        },
        deviceFormFactor: "desktop",
        platform: "web",
        pageType: "hp"
      })
    }
  });
  
  console.log(response.data);
}

testConfigAPI();
```

---

## ⏳ 等待深度抓取完成...

当前状态：正在运行，已发现多个数据 API 端点。
预计完成时间：约 30-40 秒后。
