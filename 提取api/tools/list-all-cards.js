const fs = require('fs');

// 读取deep_capture文件
const data = JSON.parse(fs.readFileSync('deep_capture_1765992016563.json', 'utf8'));

// 获取Feed API (索引2)
const feedAPI = data.dataAPIs[2];
const feedData = feedAPI.data;

console.log('======= 所有卡片列表 =======\n');

const section1 = feedData.sections[1];
console.log(`Section 1 共有 ${section1.cards.length} 个卡片:\n`);

section1.cards.forEach((card, index) => {
    console.log(`Card ${index}:`);
    console.log(`  类型: ${card.type || '未知'}`);
    console.log(`  ID: ${card.id || '无'}`);
    console.log(`  高度: ${card.height}`);
    
    // 检查data字段
    if (card.data) {
        const dataStr = typeof card.data === 'string' ? card.data : JSON.stringify(card.data);
        const dataSize = Math.round(dataStr.length / 1024);
        console.log(`  数据大小: ${dataSize} KB`);
        
        // 尝试检测内容类型
        if (dataStr.includes('weather') || dataStr.includes('Weather')) {
            console.log(`  🌤️  包含天气相关数据`);
        }
        if (dataStr.includes('Lunar') || dataStr.includes('Calendar')) {
            console.log(`  📅 包含日历相关数据`);
        }
        if (dataStr.includes('news') || dataStr.includes('article')) {
            console.log(`  📰 包含新闻相关数据`);
        }
        if (dataStr.includes('stock') || dataStr.includes('Stock')) {
            console.log(`  📈 包含股票相关数据`);
        }
        if (dataStr.includes('video') || dataStr.includes('Video')) {
            console.log(`  🎬 包含视频相关数据`);
        }
    }
    
    console.log('');
});

// 统计卡片类型
console.log('\n======= 卡片类型统计 =======\n');
const typeCount = {};
section1.cards.forEach(card => {
    const type = card.type || '未知';
    typeCount[type] = (typeCount[type] || 0) + 1;
});

Object.entries(typeCount)
    .sort((a, b) => b[1] - a[1])
    .forEach(([type, count]) => {
        console.log(`${type}: ${count} 个`);
    });

// 保存详细信息到文件
const cardList = section1.cards.map((card, index) => ({
    index,
    type: card.type,
    id: card.id,
    height: card.height,
    dataSize: card.data ? (typeof card.data === 'string' ? card.data.length : JSON.stringify(card.data).length) : 0
}));

fs.writeFileSync('all_cards_list.json', JSON.stringify(cardList, null, 2));
console.log('\n✅ 详细卡片列表已保存到 all_cards_list.json');
