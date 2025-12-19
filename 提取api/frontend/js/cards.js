// MSN 卡片渲染脚本
const API_BASE = 'http://localhost:3000/api';

// 渲染天气卡片
async function renderWeatherCard() {
    try {
        const response = await fetch(`${API_BASE}/weather`);
        const { data } = await response.json();
        
        const card = document.getElementById('weather-card');
        
        // 获取AQI等级
        const aqiLevel = getAQILevel(data.airQuality.aqi);
        
        card.innerHTML = `
            <div class="card-title">
                <span>🌤️ 天气</span>
                <span class="aqi-badge ${aqiLevel}" style="float: right;">
                    AQI ${Math.round(data.airQuality.aqi)}
                </span>
            </div>
            
            <div class="weather-current">
                <div class="weather-temp">${Math.round(data.current.temperature)}°</div>
                <div class="weather-condition">${data.current.condition}</div>
            </div>
            
            <div class="weather-details">
                <div class="weather-detail-item">
                    <div class="weather-detail-label">体感</div>
                    <div class="weather-detail-value">${Math.round(data.current.feelsLike)}°</div>
                </div>
                <div class="weather-detail-item">
                    <div class="weather-detail-label">湿度</div>
                    <div class="weather-detail-value">${Math.round(data.current.humidity)}%</div>
                </div>
                <div class="weather-detail-item">
                    <div class="weather-detail-label">风速</div>
                    <div class="weather-detail-value">${Math.round(data.current.windSpeed)}km/h</div>
                </div>
            </div>
            
            <div class="weather-forecast">
                ${data.forecast.slice(0, 3).map((day, i) => `
                    <div class="forecast-day">
                        <div class="forecast-day-name">${['今天', '明天', '后天'][i]}</div>
                        <div class="forecast-temp">${Math.round(day.highTemp)}° / ${Math.round(day.lowTemp)}°</div>
                    </div>
                `).join('')}
            </div>
        `;
    } catch (error) {
        console.error('加载天气失败:', error);
        document.getElementById('weather-card').innerHTML = '<div class="card-loading">加载失败</div>';
    }
}

// 渲染日历卡片
async function renderCalendarCard() {
    try {
        const response = await fetch(`${API_BASE}/calendar`);
        const { data } = await response.json();
        
        const card = document.getElementById('calendar-card');
        
        card.innerHTML = `
            <div class="card-title">📅 日历</div>
            
            <div class="calendar-date">
                <div class="calendar-day">${data.today.date.day}</div>
                <div class="calendar-month">${data.today.date.year}年${data.today.date.month}月</div>
            </div>
            
            <div class="calendar-lunar">
                <div class="calendar-lunar-text">
                    ${data.today.lunar.month}月${data.today.lunar.day} ${data.today.lunar.alias}
                </div>
                <div class="calendar-zodiac">
                    <span>🐍 ${data.today.zodiac}</span>
                    <span>♐ ${data.today.constellation}</span>
                </div>
                <div style="margin-top: 10px; font-size: 0.9rem;">
                    ${data.today.ganZhi.year}年 ${data.today.ganZhi.month}月 ${data.today.ganZhi.day}日
                </div>
            </div>
            
            ${data.dailyQuote ? `
                <div class="calendar-quote">
                    "${data.dailyQuote.text}"
                    <div style="text-align: right; margin-top: 5px; font-size: 0.85rem;">
                        —— ${data.dailyQuote.author}
                    </div>
                </div>
            ` : ''}
        `;
    } catch (error) {
        console.error('加载日历失败:', error);
        document.getElementById('calendar-card').innerHTML = '<div class="card-loading">加载失败</div>';
    }
}

// 渲染热搜卡片
async function renderTrendingCard() {
    try {
        const response = await fetch('../data/trending_search.json');
        const trending = await response.json();
        
        const card = document.getElementById('trending-card');
        
        card.innerHTML = `
            <div class="card-title">🔥 热搜</div>
            
            <ul class="trending-list">
                ${trending.slice(0, 8).map((item, i) => `
                    <li class="trending-item">
                        <span class="trending-rank ${i < 3 ? 'top3' : ''}">${i + 1}</span>
                        <span class="trending-text">${item.Query}</span>
                    </li>
                `).join('')}
            </ul>
        `;
    } catch (error) {
        console.error('加载热搜失败:', error);
        document.getElementById('trending-card').innerHTML = '<div class="card-loading">暂无数据</div>';
    }
}

// 渲染股票卡片
async function renderStockCard() {
    try {
        const response = await fetch('../data/stock_data.json');
        const stockData = await response.json();
        
        const card = document.getElementById('stock-card');
        
        // 获取推荐股票
        const stocks = stockData.tabListDetails?.recommend?.quoteItems || [];
        
        card.innerHTML = `
            <div class="card-title">📈 股市</div>
            
            <div class="stock-list">
                ${stocks.slice(0, 5).map(stock => {
                    const isUp = stock.gain;
                    return `
                        <div class="stock-item">
                            <div class="stock-name">${stock.shortName || stock.displayName}</div>
                            <div class="stock-price">
                                <div class="stock-value">${stock.price}</div>
                                <div class="stock-change ${isUp ? 'up' : 'down'}">
                                    ${isUp ? '↑' : '↓'} ${stock.changePcnt}
                                </div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    } catch (error) {
        console.error('加载股票失败:', error);
        document.getElementById('stock-card').innerHTML = '<div class="card-loading">暂无数据</div>';
    }
}

// 获取AQI等级
function getAQILevel(aqi) {
    if (aqi <= 50) return 'good';
    if (aqi <= 100) return 'moderate';
    if (aqi <= 150) return 'unhealthy';
    return 'severe';
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    renderWeatherCard();
    renderCalendarCard();
    renderTrendingCard();
    renderStockCard();
    
    // 定时刷新
    setInterval(() => {
        renderWeatherCard();
        renderCalendarCard();
    }, 5 * 60 * 1000); // 5分钟刷新一次
});
