/**
 * MSN 位置提取器 - 实际可用版本
 * 基于 2025年12月 实测的 API 结构
 */

const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

class MSNLocationExtractor {
  constructor() {
    this.apiUrl = 'https://assets.msn.cn/service/news/feed/pages/weblayout';
    this.apiKey = '0QfOX3Vn51YCzitbLaRkTTBadtWpgTN8NZLW0C1SEM';
  }

  /**
   * 从 MSN Feed API 提取位置信息
   * @returns {Promise<Object>} 位置数据
   */
  async extractLocationFromIP() {
    const params = {
      User: 'm-13A1CAFD74C4677709ACDC3875B96665',
      activityId: uuidv4(),
      apikey: this.apiKey,
      audienceMode: 'adult',
      cm: 'zh-cn',
      it: 'edgeid',
      ocid: 'hponeservicefeed',
      column: 'c2',
      colwidth: 300,
      contentType: 'article,video,slideshow,webcontent',
      newsTop: 48,
      newsSkip: 0
    };

    try {
      console.log('📡 正在调用 MSN Feed API...');
      const response = await axios.get(this.apiUrl, { params });
      
      console.log('✅ API 响应成功');
      console.log(`📦 返回 ${response.data.sections?.length || 0} 个 sections`);

      // 查找天气卡片（通常在 sections[1]）
      let weatherCard = null;
      
      for (const section of response.data.sections || []) {
        weatherCard = section.cards?.find(card => card.type === 'WeatherSummary');
        if (weatherCard) break;
      }

      if (!weatherCard) {
        throw new Error('❌ 未找到 WeatherSummary 卡片');
      }

      console.log('🌤️  找到天气卡片');

      // ⚠️ 关键：card.data 是 JSON 字符串，必须解析
      if (typeof weatherCard.data !== 'string') {
        throw new Error('❌ weatherCard.data 不是字符串，API 结构可能变更');
      }

      const weatherData = JSON.parse(weatherCard.data);
      console.log('📝 成功解析天气数据');

      // 提取位置信息
      const result = this.parseLocationData(weatherData);
      
      return result;

    } catch (error) {
      console.error('❌ 位置提取失败:', error.message);
      throw error;
    }
  }

  /**
   * 解析天气数据中的位置信息
   */
  parseLocationData(weatherData) {
    const userProfile = weatherData.userProfile;
    const weatherResponse = weatherData.responses?.[0];
    
    if (!userProfile) {
      throw new Error('userProfile 不存在');
    }

    if (!weatherResponse) {
      throw new Error('weather responses 不存在');
    }

    return {
      // IP 检测的用户位置
      ipDetection: {
        country: userProfile.detectedLocation?.Country,
        countryCode: userProfile.detectedLocation?.CountryCode,
        state: userProfile.detectedLocation?.State,
        city: userProfile.detectedLocation?.City,
        postalCode: userProfile.detectedLocation?.PostalCode,
        latitude: userProfile.detectedLocation?.Latitude,
        longitude: userProfile.detectedLocation?.Longitude,
        accuracy: userProfile.detectedLocation?.Accuracy,  // 单位：米
        isLocalized: userProfile.detectedLocation?.IsLocalized
      },

      // 当前使用的位置
      currentLocation: {
        country: userProfile.location?.Country,
        city: userProfile.location?.City,
        latitude: userProfile.location?.Latitude,
        longitude: userProfile.location?.Longitude
      },

      // 天气服务数据
      weatherService: {
        cityCode: weatherResponse.source?.id,  // 中国天气网城市代码
        coordinates: weatherResponse.source?.coordinates,  // 气象站坐标
        timezone: weatherResponse.source?.location?.TimezoneName,
        provider: weatherResponse.weather?.[0]?.provider?.name,
        providerUrl: weatherResponse.weather?.[0]?.provider?.url
      },

      // 元数据
      metadata: {
        locationMode: userProfile.locationSettingMode,
        followedLocations: userProfile.followedLocations || [],
        extractTime: new Date().toISOString()
      }
    };
  }

  /**
   * 格式化输出位置信息
   */
  static formatLocation(locationData) {
    const { ipDetection, weatherService } = locationData;
    
    return `
╔════════════════════════════════════════╗
║        MSN IP 定位提取结果            ║
╚════════════════════════════════════════╝

📍 IP 检测位置:
   国家: ${ipDetection.country} (${ipDetection.countryCode})
   省份: ${ipDetection.state}
   城市: ${ipDetection.city}
   邮编: ${ipDetection.postalCode}
   
📊 坐标信息:
   纬度: ${ipDetection.latitude}
   经度: ${ipDetection.longitude}
   精度: ${ipDetection.accuracy?.toFixed(2)} 米
   
🌤️  天气服务:
   城市代码: ${weatherService.cityCode}
   气象站坐标: ${weatherService.coordinates?.lat}, ${weatherService.coordinates?.lon}
   时区: ${weatherService.timezone}
   数据来源: ${weatherService.provider}
   
🔗 API 地址:
   ${weatherService.providerUrl}
   
⏰ 提取时间: ${locationData.metadata.extractTime}
`;
  }
}

// 使用示例
async function main() {
  const extractor = new MSNLocationExtractor();
  
  try {
    const locationData = await extractor.extractLocationFromIP();
    console.log(MSNLocationExtractor.formatLocation(locationData));
    
    // 返回 JSON 格式（可用于 API）
    console.log('\n📄 JSON 格式:');
    console.log(JSON.stringify(locationData, null, 2));
    
  } catch (error) {
    console.error('程序执行失败:', error);
    process.exit(1);
  }
}

// 如果直接运行此脚本
if (require.main === module) {
  main();
}

// 导出供其他模块使用
module.exports = MSNLocationExtractor;
