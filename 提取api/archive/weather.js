const axios = require('axios');

/**
 * 获取天气信息
 * @param {string} city - 城市名称，如 "北京市"
 * @returns {Promise<Object>} 天气数据
 */
async function getWeather(city = '北京市') {
  try {
    // MSN 天气 API (中国版 Edge 使用的服务)
    const encodedCity = encodeURIComponent(city);
    
    // 方法1: 使用 MSN 天气 API
    const response = await axios.get(`https://www.msn.cn/zh-cn/weather/forecast/in-${encodedCity}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0',
        'Accept-Language': 'zh-CN,zh;q=0.9'
      }
    });

    // 如果需要解析HTML，可以使用 cheerio
    // 这里提供一个备用方案：使用微软天气API
    const apiUrl = 'https://weather.microsoft.com/api/weather/v1/forecast/daily';
    const params = {
      locale: 'zh-cn',
      units: 'C',
      location: city,
      days: 7
    };

    const weatherData = await axios.get(apiUrl, {
      params,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'application/json'
      }
    }).catch(() => null);

    // 方法2: 使用公开的天气API (如果上面的不行)
    // 可以使用和风天气、心知天气等中国服务
    const fallbackUrl = `https://api.weatherapi.com/v1/forecast.json`;
    const fallbackParams = {
      key: 'YOUR_API_KEY', // 需要申请 API key
      q: city,
      days: 7,
      lang: 'zh'
    };

    return {
      success: true,
      city: city,
      data: weatherData?.data || {
        message: '需要配置具体的天气API服务',
        suggestion: '建议使用：和风天气(qweather.com)、心知天气(seniverse.com)等中国天气服务'
      },
      timestamp: new Date().toISOString()
    };

  } catch (error) {
    console.error('获取天气失败:', error.message);
    return {
      success: false,
      error: error.message,
      suggestion: '建议使用第三方天气API服务，如：和风天气、心知天气'
    };
  }
}

/**
 * 使用和风天气API (推荐)
 * 注册地址: https://dev.qweather.com/
 */
async function getQWeather(city = '北京', apiKey) {
  try {
    // 先获取城市ID
    const geoResponse = await axios.get('https://geoapi.qweather.com/v2/city/lookup', {
      params: {
        location: city,
        key: apiKey,
        lang: 'zh'
      }
    });

    if (geoResponse.data.code !== '200' || !geoResponse.data.location?.[0]) {
      throw new Error('城市查询失败');
    }

    const locationId = geoResponse.data.location[0].id;

    // 获取实时天气
    const nowResponse = await axios.get('https://devapi.qweather.com/v7/weather/now', {
      params: {
        location: locationId,
        key: apiKey,
        lang: 'zh'
      }
    });

    // 获取7天预报
    const forecastResponse = await axios.get('https://devapi.qweather.com/v7/weather/7d', {
      params: {
        location: locationId,
        key: apiKey,
        lang: 'zh'
      }
    });

    return {
      success: true,
      city: geoResponse.data.location[0].name,
      province: geoResponse.data.location[0].adm1,
      current: nowResponse.data.now,
      forecast: forecastResponse.data.daily,
      updateTime: nowResponse.data.updateTime
    };

  } catch (error) {
    console.error('和风天气API错误:', error.message);
    return {
      success: false,
      error: error.message
    };
  }
}

module.exports = {
  getWeather,
  getQWeather
};
