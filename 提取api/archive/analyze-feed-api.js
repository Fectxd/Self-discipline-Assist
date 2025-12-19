const fs = require('fs');

// 读取deep_capture文件
const data = JSON.parse(fs.readFileSync('deep_capture_1765992016563.json', 'utf8'));

// API 2 是Feed API，包含农历数据
const feedAPI = data.dataAPIs[2];

console.log('======= Feed API 分析 =======\n');
console.log('URL:', feedAPI.url, '\n');

// 保存完整响应到文件
fs.writeFileSync('feed_api_from_deep_capture.json', JSON.stringify(feedAPI.data, null, 2));
console.log('✅ 完整响应已保存到 feed_api_from_deep_capture.json\n');

// 分析数据结构
const feedData = feedAPI.data;

console.log('顶层结构:');
Object.keys(feedData).forEach(key => {
    const value = feedData[key];
    const type = Array.isArray(value) ? `Array[${value.length}]` : typeof value;
    console.log(`  - ${key}: ${type}`);
});

// 查找扩展数据
if (feedData.extensions) {
    console.log('\nextensions 包含:');
    Object.keys(feedData.extensions).forEach(key => {
        const ext = feedData.extensions[key];
        console.log(`  - ${key}`);
        
        // 特别关注包含日历的扩展
        const extStr = JSON.stringify(ext);
        if (extStr.includes('LunarYear') || extStr.includes('Calendar')) {
            console.log(`    ⭐ 这个扩展包含日历数据!`);
            
            // 保存这个扩展
            fs.writeFileSync(`extension_${key}.json`, JSON.stringify(ext, null, 2));
            console.log(`    📁 已保存到 extension_${key}.json`);
        }
    });
}

// 查找Layout中的数据
if (feedData.Layout) {
    console.log('\n======= Layout 分析 =======');
    console.log('Layout类型:', Array.isArray(feedData.Layout) ? `Array[${feedData.Layout.length}]` : typeof feedData.Layout);
    
    if (Array.isArray(feedData.Layout)) {
        feedData.Layout.forEach((item, index) => {
            if (item.pageContext) {
                console.log(`\nLayout[${index}].pageContext:`, Object.keys(item.pageContext));
            }
            if (item.contentArea) {
                console.log(`Layout[${index}].contentArea:`, Object.keys(item.contentArea));
                
                // 查找日历卡片
                if (item.contentArea.columns) {
                    item.contentArea.columns.forEach((col, colIndex) => {
                        if (col.card) {
                            col.card.forEach((card, cardIndex) => {
                                const cardStr = JSON.stringify(card);
                                if (cardStr.includes('Calendar') || cardStr.includes('Lunar')) {
                                    console.log(`  ⭐ 找到日历卡片: Layout[${index}].columns[${colIndex}].card[${cardIndex}]`);
                                    console.log(`     类型: ${card.type || card.cardType || '未知'}`);
                                    
                                    // 保存卡片数据
                                    fs.writeFileSync(`calendar_card_${index}_${colIndex}_${cardIndex}.json`, JSON.stringify(card, null, 2));
                                    console.log(`     📁 已保存到 calendar_card_${index}_${colIndex}_${cardIndex}.json`);
                                }
                            });
                        }
                    });
                }
            }
        });
    }
}

console.log('\n✅ 分析完成！');
