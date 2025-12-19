const fs = require('fs');

const html = fs.readFileSync('data/hourly_page.html', 'utf8');

// 提取所有script标签
const scripts = html.match(/<script[^>]*>[\s\S]*?<\/script>/g);

// 找到包含天气数据的script
const dataScript = scripts.find(s => 
    s.includes('forecast') && 
    s.includes('hourly') && 
    s.includes('temperature')
);

// 提取JSON
const jsonStart = dataScript.indexOf('{');
const jsonEnd = dataScript.lastIndexOf('}');
const json = dataScript.substring(jsonStart, jsonEnd + 1);

// 解析JSON
const data = JSON.parse(json);

console.log('=== 数据结构分析 ===\n');
console.log('顶级键:', Object.keys(data));
console.log('\nWeatherData的键:', Object.keys(data.WeatherData));

// 获取实际的天气数据
const weatherData = data.WeatherData['_@STATE@_'];
console.log('\nWeatherData._@STATE@_的键:', Object.keys(weatherData));

if (weatherData.forecast) {
    console.log('\n✅ forecast数组存在');
    console.log('forecast长度:', weatherData.forecast.length);
    
    // 检查第一天的数据
    const firstDay = weatherData.forecast[0];
    console.log('\n第一天的键:', Object.keys(firstDay));
    
    if (firstDay.hourly) {
        console.log('\n✅ hourly数组存在');
        console.log('第一天hourly长度:', firstDay.hourly.length);
        
        if (firstDay.hourly.length > 0) {
            console.log('\n第一条hourly数据的键:', Object.keys(firstDay.hourly[0]));
            console.log('\n示例数据:');
            console.log(JSON.stringify(firstDay.hourly[0], null, 2));
        }
    } else {
        console.log('\n❌ 第一天没有hourly数组');
    }
} else {
    console.log('\n❌ forecast不存在');
}
