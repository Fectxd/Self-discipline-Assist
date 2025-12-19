const fs = require('fs');

// 读取deep_capture文件
const data = JSON.parse(fs.readFileSync('deep_capture_1765992016563.json', 'utf8'));
const feedData = data.dataAPIs[2].data;
const section1 = feedData.sections[1];

// 提取热搜 (Card 23)
const trendingCard = section1.cards[23];
if (trendingCard && trendingCard.type === 'TrendingSearchCard') {
    const trendingData = JSON.parse(trendingCard.data);
    fs.writeFileSync('trending_search.json', JSON.stringify(trendingData, null, 2));
    console.log('✅ 热搜数据已保存到 trending_search.json');
    
    console.log('\n📊 热搜话题:');
    if (trendingData.items) {
        trendingData.items.slice(0, 10).forEach((item, i) => {
            console.log(`${i + 1}. ${item.title || item.query}`);
        });
    }
}

// 提取股票 (Card 25)
const stockCard = section1.cards[25];
if (stockCard && stockCard.type === 'MoneyInfo') {
    const stockData = JSON.parse(stockCard.data);
    fs.writeFileSync('stock_data.json', JSON.stringify(stockData, null, 2));
    console.log('\n✅ 股票数据已保存到 stock_data.json');
    
    console.log('\n📈 股票信息:');
    if (stockData.Indexes) {
        stockData.Indexes.slice(0, 5).forEach(stock => {
            console.log(`${stock.Name}: ${stock.Price} (${stock.Change > 0 ? '+' : ''}${stock.Change})`);
        });
    }
}

// 提取体育赛事 (Card 26)
const sportsCard = section1.cards[26];
if (sportsCard && sportsCard.type === 'SportsMatch') {
    const sportsData = JSON.parse(sportsCard.data);
    fs.writeFileSync('sports_data.json', JSON.stringify(sportsData, null, 2));
    console.log('\n✅ 体育赛事数据已保存到 sports_data.json');
    
    console.log('\n⚽ 体育赛事:');
    if (sportsData.Matches) {
        sportsData.Matches.slice(0, 5).forEach(match => {
            console.log(`${match.HomeTeam?.Name || '未知'} vs ${match.AwayTeam?.Name || '未知'}`);
        });
    }
}

console.log('\n📋 完整卡片列表:');
console.log('------------------');
console.log('Card 0-22: 新闻文章 (article/webcontent)');
console.log('Card 23: 热搜话题 (TrendingSearchCard) 🔥');
console.log('Card 24: 天气信息 (WeatherSummary) 🌤️');
console.log('Card 25: 股票财经 (MoneyInfo) 📈');
console.log('Card 26: 体育赛事 (SportsMatch) ⚽');
console.log('Card 27: 日历信息 (RichCalendarSD) 📅');
console.log('Card 28-29: 话题流 (TopicFeed)');
console.log('Card 30-34: 广告 (nativead)');
