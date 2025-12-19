const fs = require('fs');

// 读取Feed API数据
const feedData = JSON.parse(fs.readFileSync('feed_api_from_deep_capture.json', 'utf8'));

console.log('======= 提取天气和日历数据 =======\n');

// 从Section 1中提取
const section1 = feedData.sections[1];

// 提取天气卡片 (Card 24)
const weatherCard = section1.cards[24];
console.log('🌤️ 天气卡片 (Card 24):');
console.log('类型:', weatherCard.type);
fs.writeFileSync('weather_card.json', JSON.stringify(weatherCard, null, 2));
console.log('✅ 已保存到 weather_card.json\n');

// 提取日历卡片 (Card 27)
const calendarCard = section1.cards[27];
console.log('📅 日历卡片 (Card 27):');
console.log('类型:', calendarCard.type);
fs.writeFileSync('calendar_card.json', JSON.stringify(calendarCard, null, 2));
console.log('✅ 已保存到 calendar_card.json\n');

// 分析天气卡片结构
console.log('--- 天气卡片结构 ---');
console.log('顶层键:', Object.keys(weatherCard));
if (weatherCard.data) {
    console.log('data键:', Object.keys(weatherCard.data));
}

// 分析日历卡片结构
console.log('\n--- 日历卡片结构 ---');
console.log('顶层键:', Object.keys(calendarCard));
if (calendarCard.data) {
    console.log('data键:', Object.keys(calendarCard.data));
    
    // 查找农历信息
    const calData = calendarCard.data;
    if (calData.CalendarInfo) {
        console.log('✅ 找到 CalendarInfo');
        console.log('CalendarInfo键:', Object.keys(calData.CalendarInfo));
        
        if (calData.CalendarInfo.Days) {
            console.log(`Days数组长度: ${calData.CalendarInfo.Days.length}`);
            
            // 显示第一天的数据示例
            if (calData.CalendarInfo.Days[0]) {
                console.log('\n示例: Days[0] 的数据:');
                const day0 = calData.CalendarInfo.Days[0];
                console.log(JSON.stringify(day0, null, 2).substring(0, 500));
            }
        }
    }
}

console.log('\n✅ 提取完成！');
console.log('\n现在可以基于这些数据创建API了。');
