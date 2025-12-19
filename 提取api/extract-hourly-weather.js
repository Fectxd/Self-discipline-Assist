/**
 * MSN 小时级天气数据提取器
 * 从 MSN 天气详情页面提取hourly数据
 */

const axios = require('axios');
const cheerio = require('cheerio');

class MSNHourlyWeatherExtractor {
    constructor() {
        this.baseUrl = 'https://www.msn.cn/zh-cn/weather/hourlyforecast';
    }

    /**
     * 提取小时级天气数据
     * @param {number} lat - 纬度
     * @param {number} lon - 经度
     * @param {string} locationName - 位置名称（如"天津市"）
     * @returns {Promise<Object>} 小时级天气数据
     */
    async getHourlyWeather(lat, lon, locationName = '') {
        const url = `${this.baseUrl}/in-${lat},${lon}`;
        
        console.log(`📡 正在获取小时级天气: ${url}`);
        
        try {
            const response = await axios.get(url, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
                }
            });

            const html = response.data;
            
            // 从HTML中提取包含天气数据的script标签
            const scripts = html.match(/<script[^>]*>[\s\S]*?<\/script>/g);
            
            if (!scripts) {
                throw new Error('未找到script标签');
            }

            // 查找包含forecast和hourly数据的script
            const dataScript = scripts.find(s => 
                s.includes('WeatherData') && 
                s.includes('forecast')
            );

            if (!dataScript) {
                throw new Error('未找到天气数据脚本');
            }

            // 提取JSON数据
            const jsonStart = dataScript.indexOf('{');
            const jsonEnd = dataScript.lastIndexOf('}');
            
            if (jsonStart < 0 || jsonEnd < 0) {
                throw new Error('无法提取JSON数据');
            }

            const jsonStr = dataScript.substring(jsonStart, jsonEnd + 1);
            const stateData = JSON.parse(jsonStr);
            
            // 提取 WeatherData 中的数据
            const weatherData = stateData.WeatherData?.['_@STATE@_'];
            
            if (!weatherData || !weatherData.forecast) {
                throw new Error('数据结构不符');
            }

            return this.parseHourlyData(weatherData);
            
        } catch (error) {
            console.error('❌ 获取失败:', error.message);
            throw error;
        }
    }

    /**
     * 解析小时级天气数据
     */
    parseHourlyData(weatherState) {
        const forecast = weatherState.forecast || [];
        const hourlyData = [];

        for (const day of forecast) {
            if (day.hourly && day.hourly.length > 0) {
                for (const hour of day.hourly) {
                    hourlyData.push({
                        time: hour.timeStr,
                        temperature: hour.temperature,
                        feelsLike: hour.feels,
                        condition: hour.cap,
                        symbol: hour.symbol,
                        icon: hour.icon,
                        humidity: hour.rh,
                        dewPoint: hour.dewPt,
                        windSpeed: hour.windSpeed,
                        windDirection: hour.windDir,
                        windDesc: hour.windDesc,
                        windGust: hour.windGust,
                        airPressure: hour.airPressure,
                        visibility: hour.visibility,
                        cloudCover: hour.cloudCover,
                        precipitation: hour.precipitation,
                        rainAmount: hour.rainAmount,
                        snowAmount: hour.snowAmount,
                        uv: hour.uv,
                        aqi: hour.aqi
                    });
                }
            }
        }

        return {
            location: weatherState.currentLocation,
            totalHours: hourlyData.length,
            hourly: hourlyData,
            rawForecast: forecast  // 保留原始数据
        };
    }

    /**
     * 格式化输出小时天气
     */
    static formatHourly(hourlyData) {
        const { location, totalHours, hourly } = hourlyData;
        
        let output = `
╔════════════════════════════════════════╗
║     MSN 小时级天气预报 (${totalHours}小时)     ║
╚════════════════════════════════════════╝

📍 位置: ${location.displayName}
🌐 坐标: ${location.latitude}, ${location.longitude}

`;

        // 显示前24小时
        const displayHours = hourly.slice(0, Math.min(24, hourly.length));
        
        output += '⏰ 未来24小时预报:\n\n';
        output += '时间\t\t温度\t体感\t天气\t\t湿度\t风速\tAQI\n';
        output += '─'.repeat(80) + '\n';

        for (const hour of displayHours) {
            const time = new Date(hour.time).toLocaleString('zh-CN', {
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit'
            });
            
            output += `${time}\t${hour.temperature}°\t${hour.feelsLike}°\t${hour.condition}\t\t${hour.humidity}%\t${hour.windSpeed}\t${hour.aqi || 'N/A'}\n`;
        }

        return output;
    }
}

// 使用示例
async function main() {
    const extractor = new MSNHourlyWeatherExtractor();
    
    try {
        // 使用之前从IP定位获取的坐标
        const hourlyData = await extractor.getHourlyWeather(39.103, 117.158, '天津市');
        
        console.log(MSNHourlyWeatherExtractor.formatHourly(hourlyData));
        
        // 保存完整数据到文件
        const fs = require('fs');
        fs.writeFileSync(
            'data/hourly_weather_data.json',
            JSON.stringify(hourlyData, null, 2)
        );
        
        console.log('\n💾 完整数据已保存到: data/hourly_weather_data.json');
        console.log(`📊 共获取 ${hourlyData.totalHours} 小时的天气数据`);
        
    } catch (error) {
        console.error('执行失败:', error);
        process.exit(1);
    }
}

// 如果直接运行此脚本
if (require.main === module) {
    main();
}

module.exports = MSNHourlyWeatherExtractor;
