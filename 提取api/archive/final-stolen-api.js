const axios = require('axios');
const fs = require('fs');

/**
 * 从 MSN Feed API "偷" 天气和日历数据
 * 这是真正可用的 API！
 */

const APIKEY = '0QfOX3Vn51YCzitbLaRkTTBadtWpgTN8NZLW0C1SEM';

/**
 * 核心 API - MSN Feed (包含天气和日历数据)
 */
async function getMSNFeed() {
  try {
    const response = await axios.get('https://assets.msn.cn/service/news/feed/pages/weblayout', {
      params: {
        User: 'm-' + generateRandomId(),
        activityId: generateUUID(),
        adoffsets: 'c1:-1,c2:-1',
        apikey: APIKEY,
        audienceMode: 'adult',
        cm: 'zh-cn',
        colstatus: 'c1:0,c2:0',
        column: 'c2',
        colwidth: '300',
        contentType: 'article,video,slideshow,webcontent',
        dprValue: '1',
        it: 'edgeid',
        l3v: '2',
        layout: 'c2',
        memory: '8',
        newsSkip: '0',
        newsTop: '48',
        ocid: 'hponeservicefeed',
        pgc: '1035',
        private: '1',
        timeOut: '1000',
        vpSize: '800x600',
        wposchema: 'byregion'
      },
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0',
        'Accept': 'application/json',
        'Referer': 'https://www.msn.cn/',
        'Accept-Language': 'zh-CN,zh;q=0.9'
      }
    });

    return response.data;
  } catch (error) {
    console.error('获取 Feed 失败:', error.message);
    throw error;
  }
}

/**
 * 从 Feed 中提取天气数据
 */
function extractWeatherData(feedData) {
  console.log('🔍 提取天气数据...\n');
  
  const dataStr = JSON.stringify(feedData);
  const weatherData = {};

  // 搜索温度网格数据
  const tempGridMatch = dataStr.match(/"TemperatureGrid":\{[^}]+\}/);
  if (tempGridMatch) {
    console.log('✅ 找到温度网格数据');
    weatherData.temperatureGrid = JSON.parse('{' + tempGridMatch[0].substring(19));
  }

  // 搜索天气卡片数据
  const weatherCardPattern = /"WeatherCard[^}]*":/g;
  const weatherCards = dataStr.match(weatherCardPattern);
  if (weatherCards) {
    console.log(`✅ 找到 ${weatherCards.length} 个天气卡片引用`);
  }

  // 提取实际的天气数据结构
  // 在 Feed 中搜索包含实际天气信息的部分
  try {
    const cards = feedData.cards || feedData.value || [];
    const weatherCards = cards.filter(card => 
      card.type && (
        card.type.toLowerCase().includes('weather') ||
        JSON.stringify(card).toLowerCase().includes('temperature')
      )
    );

    if (weatherCards.length > 0) {
      console.log(`✅ 找到 ${weatherCards.length} 个天气卡片`);
      weatherData.weatherCards = weatherCards;
    }
  } catch (e) {
    console.log('⚠️  解析天气卡片时出错:', e.message);
  }

  // 搜索地图瓦片URL（天气地图数据）
  const tileUrlPattern = /assets\.msn\.com\/weathermapdata\/[^"]+/g;
  const tileUrls = dataStr.match(tileUrlPattern);
  if (tileUrls) {
    console.log(`✅ 找到 ${tileUrls.length} 个天气地图瓦片`);
    weatherData.mapTiles = [...new Set(tileUrls)].slice(0, 5);
  }

  return weatherData;
}

/**
 * 从 Feed 中提取日历数据
 */
function extractCalendarData(feedData) {
  console.log('\n🔍 提取日历数据...\n');
  
  const calendarData = {};

  // 查找响应中的日历扩展数据
  try {
    // 方法1: 在extensions中查找CalendarCardWC
    if (feedData.content && feedData.content.extensions) {
      const extensions = feedData.content.extensions;
      
      // 查找CalendarCardWC扩展
      const calendarExt = Object.values(extensions).find(ext => 
        ext && ext.CalendarInfo
      );
      
      if (calendarExt && calendarExt.CalendarInfo) {
        console.log('✅ 找到日历信息扩展');
        const calInfo = calendarExt.CalendarInfo;
        
        // 提取今日信息
        if (calInfo.Days && calInfo.Days.length > 0) {
          const today = calInfo.Days.find(day => day.IsToday) || calInfo.Days[0];
          
          if (today && today.DateTag) {
            calendarData.today = {
              lunar: {
                year: today.DateTag.LunarYear,
                month: today.DateTag.LunarMonth,
                day: today.DateTag.LunarDay,
                fullText: `${today.DateTag.LunarYear}年 农历${today.DateTag.LunarMonth}月${today.DateTag.LunarDay}`,
                ganZhi: {
                  year: today.DateTag.GanZhiYear,
                  month: today.DateTag.GanZhiMonth,
                  day: today.DateTag.GanZhiDay
                },
                animal: today.DateTag.Animal
              },
              solar: {
                year: today.Date.Year,
                month: today.Date.Month,
                day: today.Date.Day,
                dayOfWeek: today.DayOfWeek
              },
              constellation: today.DateTag.Constellation,
              alias: today.Alias,
              isHoliday: today.IsHoliday,
              festivalNames: today.FestivalNames || []
            };
            
            console.log(`✅ 今日: ${calendarData.today.lunar.fullText}`);
          }
        }
        
        // 显示日历
        if (calInfo.ShowBottomCalendar !== undefined) {
          calendarData.showBottomCalendar = calInfo.ShowBottomCalendar;
        }
        
        // 节假日信息
        if (calInfo.HolidaySchedule) {
          calendarData.holidays = calInfo.HolidaySchedule.map(h => ({
            name: h.Name,
            date: `${h.Date.Year}-${h.Date.Month}-${h.Date.Day}`,
            daysOff: h.DaysOff
          }));
          console.log(`✅ 找到 ${calendarData.holidays.length} 个节假日`);
        }
      }
    }
  } catch (e) {
    console.log('⚠️  提取日历扩展失败:', e.message);
  }

  // 如果上面没找到，尝试从字符串搜索
  if (!calendarData.today) {
    const dataStr = JSON.stringify(feedData);
    
    const lunarYearMatch = dataStr.match(/"LunarYear":"([^"]+)"/);
    const lunarMonthMatch = dataStr.match(/"LunarMonth":"([^"]+)"/);
    const lunarDayMatch = dataStr.match(/"LunarDay":"([^"]+)"/);

    if (lunarYearMatch && lunarMonthMatch && lunarDayMatch) {
      console.log('✅ 从字符串匹配找到农历数据');
      calendarData.lunar = {
        year: lunarYearMatch[1],
        month: lunarMonthMatch[1],
        day: lunarDayMatch[1],
        fullText: `${lunarYearMatch[1]}年 农历${lunarMonthMatch[1]}月${lunarDayMatch[1]}`
      };
    }
  }

  return calendarData;
}

/**
 * 生成随机用户ID
 */
function generateRandomId() {
  return Array.from({ length: 32 }, () => 
    Math.floor(Math.random() * 16).toString(16).toUpperCase()
  ).join('');
}

/**
 * 生成 UUID
 */
function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

/**
 * 主要导出的天气API
 */
async function getWeather(city = '北京') {
  console.log(`\n🌤️  获取天气数据（城市: ${city}）...\n`);
  
  const feedData = await getMSNFeed();
  const weatherData = extractWeatherData(feedData);
  
  // 保存原始响应供调试
  fs.writeFileSync('feed_response_weather.json', JSON.stringify(feedData, null, 2));
  console.log('\n💾 原始响应已保存到 feed_response_weather.json');
  
  return {
    success: true,
    city: city,
    source: 'MSN Feed API',
    data: weatherData,
    timestamp: new Date().toISOString()
  };
}

/**
 * 主要导出的日历API
 */
async function getCalendar(date = null) {
  console.log(`\n📅 获取日历数据...\n`);
  
  const feedData = await getMSNFeed();
  const calendarData = extractCalendarData(feedData);
  
  // 保存原始响应供调试
  fs.writeFileSync('feed_response_calendar.json', JSON.stringify(feedData, null, 2));
  console.log('\n💾 原始响应已保存到 feed_response_calendar.json');
  
  return {
    success: true,
    date: date || new Date().toISOString().split('T')[0],
    source: 'MSN Feed API',
    data: calendarData,
    timestamp: new Date().toISOString()
  };
}

/**
 * 组合API - 同时获取天气和日历
 */
async function getWeatherAndCalendar(city = '北京') {
  console.log('\n⚡ 同时获取天气和日历数据...\n');
  
  const feedData = await getMSNFeed();
  
  const weatherData = extractWeatherData(feedData);
  const calendarData = extractCalendarData(feedData);
  
  // 保存完整响应
  fs.writeFileSync('feed_response_full.json', JSON.stringify(feedData, null, 2));
  console.log('\n💾 完整响应已保存到 feed_response_full.json');
  
  return {
    success: true,
    city: city,
    source: 'MSN Feed API',
    weather: weatherData,
    calendar: calendarData,
    timestamp: new Date().toISOString()
  };
}

/**
 * 测试函数
 */
async function test() {
  console.log('='.repeat(80));
  console.log('🧪 测试"偷来"的 MSN API');
  console.log('='.repeat(80));
  
  try {
    // 测试组合API
    const result = await getWeatherAndCalendar('北京');
    
    console.log('\n' + '='.repeat(80));
    console.log('📊 提取结果');
    console.log('='.repeat(80));
    
    console.log('\n🌤️  天气数据:');
    console.log(JSON.stringify(result.weather, null, 2));
    
    console.log('\n📅 日历数据:');
    console.log(JSON.stringify(result.calendar, null, 2));
    
    // 保存提取结果
    fs.writeFileSync('extracted_data.json', JSON.stringify(result, null, 2));
    console.log('\n✅ 提取结果已保存到 extracted_data.json');
    
    console.log('\n' + '='.repeat(80));
    console.log('💡 使用说明');
    console.log('='.repeat(80));
    console.log('\n在你的代码中导入：');
    console.log('  const { getWeather, getCalendar } = require("./final-stolen-api");');
    console.log('\n调用：');
    console.log('  const weather = await getWeather("上海");');
    console.log('  const calendar = await getCalendar();');
    
  } catch (error) {
    console.error('\n❌ 测试失败:', error.message);
    if (error.response) {
      console.error('状态码:', error.response.status);
      console.error('响应:', error.response.data);
    }
  }
}

if (require.main === module) {
  test();
}

module.exports = {
  getWeather,
  getCalendar,
  getWeatherAndCalendar,
  getMSNFeed
};
