const { getWeather, getHourlyWeather } = require('./msn-api');

/**
 * 获取完整的天气信息（日级 + 小时级）
 */
async function getCompleteWeather() {
    console.log('🌤️  MSN 完整天气信息获取\n');
    
    try {
        // 1. 先获取日级天气（包含位置信息）
        console.log('📡 正在获取日级天气预报...');
        const dailyWeather = await getWeather();
        
        const { lat, lon } = dailyWeather.location.coordinates;
        console.log(`✅ 获取成功: ${dailyWeather.location.displayName}`);
        console.log(`📍 坐标: ${lat}, ${lon}\n`);
        
        // 2. 使用坐标获取小时级天气
        console.log('📡 正在获取小时级天气预报...');
        const hourlyWeather = await getHourlyWeather(lat, lon);
        console.log(`✅ 获取成功: ${hourlyWeather.totalHours} 小时数据\n`);
        
        // 3. 整合数据
        const completeWeather = {
            location: dailyWeather.location,
            current: dailyWeather.current,
            airQuality: dailyWeather.airQuality,
            daily: {
                totalDays: dailyWeather.forecast.length,
                forecast: dailyWeather.forecast
            },
            hourly: {
                totalHours: hourlyWeather.totalHours,
                forecast: hourlyWeather.hourly
            },
            lastUpdated: new Date().toISOString()
        };
        
        // 4. 显示摘要
        displayWeatherSummary(completeWeather);
        
        // 5. 保存数据
        const fs = require('fs');
        fs.writeFileSync('data/complete_weather.json', JSON.stringify(completeWeather, null, 2));
        console.log('\n💾 完整数据已保存到: data/complete_weather.json');
        
        return completeWeather;
        
    } catch (error) {
        console.error('❌ 获取失败:', error.message);
        throw error;
    }
}

/**
 * 显示天气摘要
 */
function displayWeatherSummary(weather) {
    console.log('╔════════════════════════════════════════════════════╗');
    console.log('║              天气信息摘要                          ║');
    console.log('╚════════════════════════════════════════════════════╝\n');
    
    // 当前天气
    console.log('【当前天气】');
    console.log(`位置: ${weather.location.displayName}`);
    console.log(`温度: ${weather.current.temperature}°C (体感 ${weather.current.feelsLike}°C)`);
    console.log(`天气: ${weather.current.condition}`);
    console.log(`湿度: ${weather.current.humidity}%`);
    console.log(`风速: ${weather.current.windSpeed} (${weather.current.windDirection})`);
    console.log(`空气质量: AQI ${weather.current.aqi} - ${weather.airQuality.severity}`);
    
    // 未来3天预报
    console.log('\n【未来3天预报】');
    const next3Days = weather.daily.forecast.slice(0, 3);
    for (const day of next3Days) {
        const date = day.valid || `第${day.dayIndex + 1}天`;
        console.log(`${date}: ${day.highTemp}°/${day.lowTemp}° ${day.condition}`);
    }
    
    // 今天小时预报
    console.log('\n【今天剩余时间预报】');
    const now = new Date();
    const todayHours = weather.hourly.forecast.filter(h => {
        const hourTime = new Date(h.time);
        return hourTime.getDate() === now.getDate() && hourTime > now;
    }).slice(0, 6);
    
    for (const hour of todayHours) {
        const time = new Date(hour.time);
        const timeStr = `${String(time.getHours()).padStart(2, '0')}:00`;
        console.log(`${timeStr} - ${hour.temperature}° ${hour.condition} (体感${hour.feelsLike}°)`);
    }
    
    // 统计信息
    console.log('\n【统计信息】');
    console.log(`日级预报: ${weather.daily.totalDays} 天`);
    console.log(`小时预报: ${weather.hourly.totalHours} 小时`);
    
    const temps24h = weather.hourly.forecast.slice(0, 24).map(h => h.temperature);
    const max24h = Math.max(...temps24h);
    const min24h = Math.min(...temps24h);
    console.log(`未来24小时温度范围: ${min24h}° ~ ${max24h}°`);
}

// 如果直接运行
if (require.main === module) {
    getCompleteWeather()
        .then(() => console.log('\n✅ 完成'))
        .catch(err => console.error('\n❌ 错误:', err));
}

module.exports = { getCompleteWeather };
