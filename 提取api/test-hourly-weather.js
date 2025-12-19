const { getHourlyWeather } = require('./msn-api');

async function test() {
    console.log('🚀 测试小时级天气API...\n');
    
    try {
        // 使用天津的坐标
        const latitude = 39.103;
        const longitude = 117.158;
        
        console.log(`📍 获取位置 (${latitude}, ${longitude}) 的小时级天气...\n`);
        
        const data = await getHourlyWeather(latitude, longitude);
        
        console.log('=== 位置信息 ===');
        console.log(`位置: ${data.location.displayName || `${data.location.region}, ${data.location.locality}`}`);
        console.log(`坐标: ${data.location.latitude}, ${data.location.longitude}`);
        console.log(`总小时数: ${data.totalHours}`);
        console.log(`单位: ${data.unit}\n`);
        
        console.log('=== 未来24小时预报 ===');
        const next24Hours = data.hourly.slice(0, 24);
        
        console.log('时间\t\t\t温度\t体感\t天气\t\t湿度\t风速\tAQI');
        console.log('─'.repeat(80));
        
        for (const hour of next24Hours) {
            const time = hour.time.substring(0, 16).replace('T', ' ');
            const temp = `${hour.temperature}°`;
            const feels = `${hour.feelsLike}°`;
            const condition = hour.condition.padEnd(12, ' ');
            const humidity = hour.humidity ? `${hour.humidity}%` : 'N/A';
            const wind = hour.windSpeed || 'N/A';
            const aqi = hour.aqi || 'N/A';
            
            console.log(`${time}\t${temp}\t${feels}\t${condition}\t${humidity}\t${wind}\t${aqi}`);
        }
        
        // 统计信息
        console.log('\n=== 统计信息 ===');
        const temps = data.hourly.map(h => h.temperature).filter(t => t !== undefined);
        const maxTemp = Math.max(...temps);
        const minTemp = Math.min(...temps);
        const avgTemp = (temps.reduce((a, b) => a + b, 0) / temps.length).toFixed(1);
        
        console.log(`最高温度: ${maxTemp}°`);
        console.log(`最低温度: ${minTemp}°`);
        console.log(`平均温度: ${avgTemp}°`);
        
        const aqiValues = data.hourly.map(h => h.aqi).filter(a => a !== undefined && a !== null);
        if (aqiValues.length > 0) {
            const avgAqi = (aqiValues.reduce((a, b) => a + b, 0) / aqiValues.length).toFixed(0);
            console.log(`平均AQI: ${avgAqi}`);
        }
        
        // 保存完整数据
        const fs = require('fs');
        fs.writeFileSync('data/hourly_weather_test.json', JSON.stringify(data, null, 2));
        console.log('\n✅ 完整数据已保存到 data/hourly_weather_test.json');
        
    } catch (error) {
        console.error('❌ 测试失败:', error.message);
        console.error(error.stack);
    }
}

test();
