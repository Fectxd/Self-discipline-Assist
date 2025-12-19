// MSN 卡片渲染 - 使用真实MSN数据结构
const API_BASE = 'http://localhost:3000/api';

// MSN图标基础URL（从提取的数据中获得）
const ICON_BASE = 'https://assets.msn.cn/weathermapdata/1/static/weather/Icons/MSIAWwA=/';

// 渲染天气卡片 - MSN真实结构
async function renderWeatherCard() {
    try {
        const response = await fetch(`${API_BASE}/weather`);
        const { data } = await response.json();
        
        const card = document.getElementById('weather-card');
        const isNight = data.current.daytime === 'n';
        
        // AQI等级
        const aqiClass = getAQIClass(data.airQuality.aqi);
        
        // 天气图标
        const iconUrl = `${ICON_BASE}Condition/${data.current.iconSymbol || 'AAehwh2.svg'}`;
        
        card.className = `msn-card weather-summary-card ${isNight ? 'night-mode' : ''}`;
        
        card.innerHTML = `
            <div class="weather-header">
                <div class="weather-location">
                    <span>📍</span>
                    <span>${data.location.city || '天津市'}</span>
                </div>
                ${data.alerts && data.alerts.length > 0 ? `
                    <div class="weather-alert">
                        <span class="weather-alert-icon">⚠️</span>
                        <span>${data.alerts[0].abbreviation[0]} ${data.alerts[0].abbreviation[1]}</span>
                    </div>
                ` : ''}
            </div>
            
            <div class="weather-current">
                <div class="weather-temp-main">${Math.round(data.current.temperature)}°</div>
                <div class="weather-condition-text">${data.current.condition}</div>
                ${data.airQuality ? `
                    <div class="weather-aqi-badge ${aqiClass}">
                        AQI ${Math.round(data.airQuality.aqi)} · ${data.airQuality.severity}
                    </div>
                ` : ''}
            </div>
            
            <div class="weather-details-grid">
                <div class="weather-detail">
                    <div class="weather-detail-label">体感温度</div>
                    <div class="weather-detail-value">${Math.round(data.current.feelsLike)}°</div>
                </div>
                <div class="weather-detail">
                    <div class="weather-detail-label">湿度</div>
                    <div class="weather-detail-value">${Math.round(data.current.humidity)}%</div>
                </div>
                <div class="weather-detail">
                    <div class="weather-detail-label">风速</div>
                    <div class="weather-detail-value">${Math.round(data.current.windSpeed)}km/h</div>
                </div>
            </div>
            
            <div class="weather-forecast-row">
                ${data.forecast.slice(0, 3).map((day, i) => {
                    const dayNames = ['今天', '明天', '后天'];
                    return `
                        <div class="forecast-day-item">
                            <div class="forecast-day-name">${dayNames[i]}</div>
                            <div class="forecast-temp-range">
                                ${Math.round(day.highTemp)}° / ${Math.round(day.lowTemp)}°
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    } catch (error) {
        console.error('加载天气失败:', error);
        showError('weather-card', '天气加载失败');
    }
}

// 渲染日历卡片 - MSN真实结构
async function renderCalendarCard() {
    try {
        const response = await fetch(`${API_BASE}/calendar`);
        const { data } = await response.json();
        
        const card = document.getElementById('calendar-card');
        
        card.innerHTML = `
            <div class="calendar-header">
                📅 日历
            </div>
            
            <div class="calendar-date-display">
                <div class="calendar-day-number">${data.today.date.day}</div>
                <div class="calendar-month-year">
                    ${data.today.date.year}年${data.today.date.month}月
                </div>
            </div>
            
            <div class="calendar-lunar-info">
                <div class="calendar-lunar-text">
                    农历${data.today.lunar.month}月${data.today.lunar.day}
                    ${data.today.lunar.alias ? '· ' + data.today.lunar.alias : ''}
                </div>
                <div class="calendar-zodiac-row">
                    <span>🐍 ${data.today.zodiac}</span>
                    <span>♐ ${data.today.constellation}</span>
                </div>
                <div class="calendar-ganzhi">
                    ${data.today.ganZhi.year}年 ${data.today.ganZhi.month}月 ${data.today.ganZhi.day}日
                </div>
            </div>
            
            ${data.dailyQuote ? `
                <div class="calendar-quote-section">
                    <div class="calendar-quote-text">
                        "${data.dailyQuote.text}"
                    </div>
                    <div class="calendar-quote-author">
                        —— ${data.dailyQuote.author}
                    </div>
                </div>
            ` : ''}
        `;
    } catch (error) {
        console.error('加载日历失败:', error);
        showError('calendar-card', '日历加载失败');
    }
}

// 渲染热搜卡片
async function renderTrendingCard() {
    try {
        const response = await fetch('../data/trending_search.json');
        const trending = await response.json();
        
        const card = document.getElementById('trending-card');
        
        card.innerHTML = `
            <div class="trending-header">
                🔥 热搜榜
            </div>
            
            <div class="trending-list-container">
                ${trending.slice(0, 8).map((item, i) => `
                    <div class="trending-item">
                        <div class="trending-rank ${i < 3 ? 'top-3' : ''}">${i + 1}</div>
                        <div class="trending-text">${item.Query}</div>
                    </div>
                `).join('')}
            </div>
        `;
    } catch (error) {
        console.error('加载热搜失败:', error);
        showError('trending-card', '热搜加载失败');
    }
}

// 渲染股票卡片
async function renderMoneyCard() {
    try {
        const response = await fetch('../data/stock_data.json');
        const stockData = await response.json();
        
        const card = document.getElementById('money-card');
        
        // 获取推荐股票
        const stocks = stockData.tabListDetails?.recommend?.quoteItems || [];
        
        card.innerHTML = `
            <div class="money-header">
                📈 股市行情
            </div>
            
            <div class="money-list-container">
                ${stocks.slice(0, 5).map(stock => {
                    const isUp = stock.gain;
                    const changeSymbol = isUp ? '▲' : '▼';
                    
                    return `
                        <div class="money-item">
                            <div class="money-info">
                                <div class="money-name">${stock.shortName || stock.displayName}</div>
                                <div class="money-symbol">${stock.symbol || ''}</div>
                            </div>
                            <div class="money-values">
                                <div class="money-price">${stock.price}</div>
                                <div class="money-change ${isUp ? 'up' : 'down'}">
                                    <span>${changeSymbol}</span>
                                    <span>${stock.changePcnt}</span>
                                </div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    } catch (error) {
        console.error('加载股票失败:', error);
        showError('money-card', '股票加载失败');
    }
}

// 获取AQI等级样式类
function getAQIClass(aqi) {
    if (aqi <= 50) return 'aqi-good';
    if (aqi <= 100) return 'aqi-moderate';
    if (aqi <= 150) return 'aqi-unhealthy';
    return 'aqi-severe';
}

// 显示错误
function showError(cardId, message) {
    const card = document.getElementById(cardId);
    card.innerHTML = `
        <div class="card-loading">
            <span style="color: #ef4444;">❌ ${message}</span>
        </div>
    `;
}

// 初始化 - 页面加载时
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎨 加载MSN原版卡片...');
    
    // 并行加载所有卡片
    Promise.all([
        renderWeatherCard(),
        renderCalendarCard(),
        renderTrendingCard(),
        renderMoneyCard()
    ]).then(() => {
        console.log('✅ 所有卡片加载完成！');
    });
    
    // 定时刷新天气和日历（每5分钟）
    setInterval(() => {
        renderWeatherCard();
        renderCalendarCard();
    }, 5 * 60 * 1000);
});
