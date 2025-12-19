const axios = require('axios');

// MSN API配置
const MSN_API_KEY = '0QfOX3Vn51YCzitbLaRkTTBadtWpgTN8NZLW0C1SEM';
const FEED_API_URL = 'https://assets.msn.cn/service/news/feed/pages/weblayout';

/**
 * 获取MSN Feed API数据
 */
async function getMSNFeed() {
    const params = {
        User: 'm-13A1CAFD74C4677709ACDC3875B96665', // 可以是任意ID
        activityId: generateActivityId(),
        apikey: MSN_API_KEY,
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

    const response = await axios.get(FEED_API_URL, { params });
    return response.data;
}

/**
 * 生成随机Activity ID
 */
function generateActivityId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

/**
 * 从Feed数据中提取天气信息
 */
function extractWeatherData(feedData) {
    try {
        const section1 = feedData.sections[1];
        const weatherCard = section1.cards.find(card => card.type === 'WeatherSummary');
        
        if (!weatherCard) {
            console.log('未找到天气卡片');
            return null;
        }

        // data是JSON字符串，需要解析
        const weatherData = JSON.parse(weatherCard.data);
        
        // 提取关键天气信息
        const response = weatherData.responses[0];
        const weather = response.weather[0];
        
        return {
            location: {
                id: response.source.id,
                coordinates: response.source.coordinates,
                timezone: response.source.location.TimezoneName
            },
            current: {
                temperature: weather.current.temp,
                feelsLike: weather.current.feels,
                condition: weather.current.cap,
                conditionAbbr: weather.current.capAbbr,
                icon: weather.current.icon,
                symbol: weather.current.symbol,
                humidity: weather.current.rh,
                windSpeed: weather.current.windSpd,
                windDirection: weather.current.windDir,
                pressure: weather.current.baro,
                visibility: weather.current.vis,
                uvIndex: weather.current.uv,
                uvDescription: weather.current.uvDesc,
                updated: weather.current.created
            },
            airQuality: {
                aqi: weather.current.aqi,
                level: weather.current.aqLevel,
                severity: weather.current.aqiSeverity,
                primaryPollutant: weather.current.primaryPollutant,
                validTime: weather.current.aqiValidTime
            },
            forecast: weather.forecast.days.map((day, index) => ({
                dayIndex: index,
                valid: day.daily.valid,
                highTemp: day.daily.tempHi,
                lowTemp: day.daily.tempLo,
                condition: day.daily.pvdrCap,
                icon: day.daily.icon,
                symbol: day.daily.symbol,
                precipitation: day.daily.precip,
                humidity: {
                    high: day.daily.rhHi,
                    low: day.daily.rhLo
                },
                wind: {
                    day: day.daily.day.windSpd,
                    night: day.daily.night.windSpd
                },
                uvIndex: day.daily.uv,
                uvDescription: day.daily.uvDesc,
                sunrise: day.almanac?.sunrise,
                sunset: day.almanac?.sunset,
                aqi: day.daily.aqi
            })),
            alerts: weather.alerts || [],
            provider: {
                name: weather.provider.name,
                url: weather.provider.url
            }
        };
    } catch (error) {
        console.error('提取天气数据失败:', error);
        return null;
    }
}

/**
 * 从Feed数据中提取日历信息
 */
function extractCalendarData(feedData) {
    try {
        const section1 = feedData.sections[1];
        const calendarCard = section1.cards.find(card => card.type === 'RichCalendarSD');
        
        if (!calendarCard) {
            console.log('未找到日历卡片');
            return null;
        }

        // data是JSON字符串，需要解析
        const calendarData = JSON.parse(calendarCard.data);
        
        return {
            today: {
                date: {
                    year: calendarData.TodayInfo.Date.Year,
                    month: calendarData.TodayInfo.Date.Month,
                    day: calendarData.TodayInfo.Date.Day
                },
                lunar: {
                    year: calendarData.TodayInfo.DateTag.LunarYear,
                    month: calendarData.TodayInfo.DateTag.LunarMonth,
                    day: calendarData.TodayInfo.DateTag.LunarDay,
                    alias: calendarData.TodayInfo.Alias  // 廿九
                },
                ganZhi: {
                    year: calendarData.TodayInfo.DateTag.GanZhiYear,  // 乙巳
                    month: calendarData.TodayInfo.DateTag.GanZhiMonth,  // 戊子
                    day: calendarData.TodayInfo.DateTag.GanZhiDay  // 辛酉
                },
                zodiac: calendarData.TodayInfo.DateTag.Animal,  // 蛇
                constellation: calendarData.TodayInfo.DateTag.Constellation,  // 射手座
                dayOfWeek: calendarData.TodayInfo.DayOfWeek,
                isHoliday: calendarData.TodayInfo.IsHoliday,
                isWorkday: calendarData.TodayInfo.IsWorkday,
                isWeekend: calendarData.TodayInfo.IsWeekend,
                festivals: calendarData.TodayInfo.FestivalNames || [],
                suitableActivities: calendarData.TodayInfo.RichInfo.YiList || [],
                unsuitableActivities: calendarData.TodayInfo.RichInfo.JiList || []
            },
            nextFestivals: (calendarData.TodayInfo.NextFestivals || []).map(festival => ({
                name: festival.Name,
                date: {
                    year: festival.Year,
                    month: festival.Month,
                    day: festival.Day
                },
                countdown: festival.Countdown,
                daysOff: festival.DaysOff,
                link: festival.Link
            })),
            dailyQuote: calendarData.TodayInfo.DailyQuote ? {
                text: calendarData.TodayInfo.DailyQuote.Text,
                author: calendarData.TodayInfo.DailyQuote.Author
            } : null,
            historyEvents: (calendarData.TodayInfo.TodayInHistoryList || []).map(event => ({
                title: event.Title,
                year: event.Year,
                imageUrl: event.ImageUrl,
                url: event.Url
            })),
            horoscope: calendarData.TodayInfo.HoroscopeV2 ? {
                defaultIndex: calendarData.TodayInfo.HoroscopeV2.DefaultIndex,
                signs: calendarData.TodayInfo.HoroscopeV2.ZodiacSigns.map(sign => ({
                    name: sign.Name,
                    timeRange: sign.TimeRange,
                    fortune: {
                        today: sign.TodayFortune,
                        money: sign.MoneyFortune,
                        career: sign.CareerFortune,
                        love: sign.LoveFortune
                    },
                    spotlight: sign.SpotlightTitle,
                    loveText: sign.LoveFortuneText
                }))
            } : null,
            progressBar: {
                dayOfYear: calendarData.TodayInfo.ProgressBar.DayOfYear,
                weekOfYear: calendarData.TodayInfo.ProgressBar.WeekOfYear,
                progress: calendarData.TodayInfo.ProgressBar.Progress
            }
        };
    } catch (error) {
        console.error('提取日历数据失败:', error);
        return null;
    }
}

/**
 * 获取天气信息
 */
async function getWeather() {
    try {
        const feedData = await getMSNFeed();
        return extractWeatherData(feedData);
    } catch (error) {
        console.error('获取天气失败:', error);
        throw error;
    }
}

/**
 * 获取日历信息
 */
async function getCalendar() {
    try {
        const feedData = await getMSNFeed();
        return extractCalendarData(feedData);
    } catch (error) {
        console.error('获取日历失败:', error);
        throw error;
    }
}

/**
 * 同时获取天气和日历信息
 */
async function getWeatherAndCalendar() {
    try {
        const feedData = await getMSNFeed();
        return {
            weather: extractWeatherData(feedData),
            calendar: extractCalendarData(feedData)
        };
    } catch (error) {
        console.error('获取数据失败:', error);
        throw error;
    }
}

// 导出函数
module.exports = {
    getWeather,
    getCalendar,
    getWeatherAndCalendar,
    getHourlyWeather
};

/**
 * 获取小时级天气预报
 * @param {number} latitude - 纬度
 * @param {number} longitude - 经度
 * @returns {Promise<Object>} 小时级天气数据
 */
async function getHourlyWeather(latitude, longitude) {
    const url = `https://www.msn.cn/zh-cn/weather/hourlyforecast/in-${latitude},${longitude}`;
    
    try {
        const response = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
        });
        
        const html = response.data;
        
        // 提取包含天气数据的script标签
        const scripts = html.match(/<script[^>]*>[\s\S]*?<\/script>/g);
        
        if (!scripts) {
            throw new Error('未找到script标签');
        }

        // 查找包含WeatherData的script
        const dataScript = scripts.find(s => 
            s.includes('WeatherData') && 
            s.includes('forecast')
        );

        if (!dataScript) {
            throw new Error('未找到天气数据');
        }

        // 提取JSON数据
        const jsonStart = dataScript.indexOf('{');
        const jsonEnd = dataScript.lastIndexOf('}');
        
        if (jsonStart < 0 || jsonEnd < 0) {
            throw new Error('无法提取JSON数据');
        }

        const jsonStr = dataScript.substring(jsonStart, jsonEnd + 1);
        const stateData = JSON.parse(jsonStr);
        
        // 提取 WeatherData
        const weatherData = stateData.WeatherData?.['_@STATE@_'];
        
        if (!weatherData || !weatherData.forecast) {
            throw new Error('数据结构异常');
        }

        // 收集所有小时数据
        const allHourlyData = [];
        for (const day of weatherData.forecast) {
            if (day.hourly && Array.isArray(day.hourly)) {
                allHourlyData.push(...day.hourly);
            }
        }

        // 格式化数据
        const formattedData = allHourlyData.map(item => ({
            time: item.timeStr || item.time?.dataValue,
            temperature: item.temperature,
            feelsLike: item.feels,
            condition: item.cap,
            symbol: item.symbol,
            icon: item.pvdrIcon,
            humidity: typeof item.humidity === 'string' ? parseInt(item.humidity) : item.humidity,
            dewPoint: item.dewPt,
            windSpeed: item.windSpeed,
            windDirection: item.windDir,
            windDesc: item.windDesc,
            windGust: item.windGust,
            airPressure: item.airPressure,
            visibility: item.visibility || item.vis,
            cloudCover: item.cloudCover,
            precipitation: item.rainAmount,
            rainAmount: item.rainAmount,
            snowAmount: item.snowAmount,
            uv: item.uv,
            aqi: item.aqi
        }));

        return {
            location: {
                latitude: weatherData.currentLocation?.latitude || latitude,
                longitude: weatherData.currentLocation?.longitude || longitude,
                displayName: weatherData.currentLocation?.localizedName,
                locality: weatherData.currentLocation?.locality,
                region: weatherData.currentLocation?.adminDistrict,
                country: weatherData.currentLocation?.countryName
            },
            totalHours: formattedData.length,
            hourly: formattedData,
            unit: weatherData.unit,
            lastUpdated: weatherData.lastUpdated
        };
        
    } catch (error) {
        throw new Error(`获取小时级天气失败: ${error.message}`);
    }
}

// 如果直接运行此文件，执行测试
if (require.main === module) {
    (async () => {
        console.log('🚀 开始测试MSN API...\n');
        
        try {
            const data = await getWeatherAndCalendar();
            
            console.log('=== 天气信息 ===');
            console.log(`位置: ${data.weather.location.coordinates.lat}, ${data.weather.location.coordinates.lon}`);
            console.log(`当前温度: ${data.weather.current.temperature}°C`);
            console.log(`体感温度: ${data.weather.current.feelsLike}°C`);
            console.log(`天气状况: ${data.weather.current.condition}`);
            console.log(`空气质量: AQI ${data.weather.current.aqi} (${data.weather.airQuality.severity})`);
            console.log(`预报天数: ${data.weather.forecast.length}天\n`);
            
            console.log('=== 日历信息 ===');
            console.log(`日期: ${data.calendar.today.date.year}年${data.calendar.today.date.month}月${data.calendar.today.date.day}日`);
            console.log(`农历: ${data.calendar.today.lunar.year}年${data.calendar.today.lunar.month}月${data.calendar.today.lunar.day} (${data.calendar.today.lunar.alias})`);
            console.log(`干支: ${data.calendar.today.ganZhi.year}年 ${data.calendar.today.ganZhi.month}月 ${data.calendar.today.ganZhi.day}日`);
            console.log(`生肖: ${data.calendar.today.zodiac}`);
            console.log(`星座: ${data.calendar.today.constellation}`);
            console.log(`节日: ${data.calendar.today.festivals.join(', ') || '无'}`);
            if (data.calendar.dailyQuote) {
                console.log(`\n每日格言: ${data.calendar.dailyQuote.text}`);
                console.log(`作者: ${data.calendar.dailyQuote.author}`);
            }
            console.log(`\n年进度: ${data.calendar.progressBar.progress.toFixed(2)}% (第${data.calendar.progressBar.dayOfYear}天)`);
            
            // 保存完整数据到文件
            const fs = require('fs');
            fs.writeFileSync('stolen_data.json', JSON.stringify(data, null, 2));
            console.log('\n✅ 完整数据已保存到 stolen_data.json');
            
        } catch (error) {
            console.error('❌ 测试失败:', error.message);
        }
    })();
}
