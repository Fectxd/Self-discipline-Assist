const fs = require('fs');

// 读取刚才保存的Feed API数据
const feedData = JSON.parse(fs.readFileSync('feed_api_from_deep_capture.json', 'utf8'));

console.log('======= 深入分析 Feed API Sections =======\n');

if (feedData.sections) {
    console.log(`共有 ${feedData.sections.length} 个 sections\n`);
    
    feedData.sections.forEach((section, sectionIndex) => {
        console.log(`\n--- Section ${sectionIndex} ---`);
        console.log('结构:', Object.keys(section));
        
        if (section.data) {
            console.log('  data类型:', typeof section.data);
            console.log('  data键:', Object.keys(section.data));
            
            // 检查是否包含日历数据
            const sectionStr = JSON.stringify(section);
            if (sectionStr.includes('LunarYear') || sectionStr.includes('Calendar')) {
                console.log('  ⭐⭐⭐ 找到了！这个section包含日历数据！');
                
                // 保存这个section
                fs.writeFileSync(`section_${sectionIndex}_with_calendar.json`, JSON.stringify(section, null, 2));
                console.log(`  📁 已保存到 section_${sectionIndex}_with_calendar.json`);
                
                // 尝试提取具体的日历信息
                if (section.data && section.data.CalendarInfo) {
                    console.log('  ✅ 找到 CalendarInfo!');
                    fs.writeFileSync('calendar_info.json', JSON.stringify(section.data.CalendarInfo, null, 2));
                    console.log('  📁 CalendarInfo 已保存到 calendar_info.json');
                }
                
                // 查找其他可能的日历数据
                if (section.data) {
                    Object.keys(section.data).forEach(key => {
                        const keyStr = JSON.stringify(section.data[key]);
                        if (keyStr && keyStr.includes('LunarYear')) {
                            console.log(`  ✅ 在 data.${key} 中找到农历数据`);
                        }
                    });
                }
            }
            
            // 检查天气数据
            if (sectionStr.includes('weather') || sectionStr.includes('temperature') || sectionStr.includes('Temperature')) {
                console.log('  🌤️ 这个section包含天气数据');
                
                if (section.data && section.data.WeatherData) {
                    console.log('  ✅ 找到 WeatherData!');
                    fs.writeFileSync('weather_data.json', JSON.stringify(section.data.WeatherData, null, 2));
                    console.log('  📁 WeatherData 已保存到 weather_data.json');
                }
            }
        }
        
        if (section.cards && Array.isArray(section.cards)) {
            console.log(`  cards: Array[${section.cards.length}]`);
            
            section.cards.forEach((card, cardIndex) => {
                const cardStr = JSON.stringify(card);
                if (cardStr.includes('LunarYear') || cardStr.includes('Calendar')) {
                    console.log(`    ⭐ Card ${cardIndex}: 包含日历数据`);
                    console.log(`       类型: ${card.type || card.cardType || '未知'}`);
                }
                if (cardStr.includes('weather') || cardStr.includes('Temperature')) {
                    console.log(`    🌤️ Card ${cardIndex}: 包含天气数据`);
                    console.log(`       类型: ${card.type || card.cardType || '未知'}`);
                }
            });
        }
    });
}

console.log('\n✅ 深入分析完成！');
