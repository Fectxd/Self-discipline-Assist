/**
 * 抓取MSN天气"逐小时"预报API
 * 通过Puppeteer模拟点击天气卡片的"逐小时"按钮，捕获网络请求
 */

const puppeteer = require('puppeteer');
const fs = require('fs');

async function captureHourlyWeatherAPI() {
    console.log('🚀 启动浏览器...');
    
    const browser = await puppeteer.launch({
        headless: false,  // 显示浏览器，方便观察
        defaultViewport: { width: 1920, height: 1080 }
    });

    const page = await browser.newPage();
    
    // 捕获的API请求
    const capturedAPIs = [];
    
    // 监听所有网络请求
    page.on('request', request => {
        const url = request.url();
        if (url.includes('weather') || url.includes('hourly') || url.includes('forecast')) {
            console.log('📡 [请求]', request.method(), url);
        }
    });

    page.on('response', async response => {
        const url = response.url();
        
        // 捕获天气相关的API
        if (url.includes('weather') || url.includes('hourly') || url.includes('forecast')) {
            try {
                const contentType = response.headers()['content-type'] || '';
                
                if (contentType.includes('json')) {
                    const data = await response.json();
                    
                    console.log('✅ [响应]', response.status(), url);
                    
                    capturedAPIs.push({
                        url: url,
                        method: response.request().method(),
                        status: response.status(),
                        headers: response.headers(),
                        data: data,
                        timestamp: new Date().toISOString()
                    });
                }
            } catch (error) {
                console.log('⚠️  解析响应失败:', error.message);
            }
        }
    });

    try {
        console.log('\n📄 正在访问 MSN 主页...');
        await page.goto('https://www.msn.cn/zh-cn/', {
            waitUntil: 'networkidle2',
            timeout: 60000
        });

        console.log('⏳ 等待页面加载完成...');
        await page.waitForTimeout(5000);

        console.log('\n🔍 查找天气卡片...');
        
        // 尝试多种选择器查找天气卡片
        const selectors = [
            'msft-weather-card-wc',
            '[data-card-type="WeatherSummary"]',
            '.weather-card',
            'weather-card',
            '[class*="weather"]'
        ];

        let weatherCard = null;
        for (const selector of selectors) {
            try {
                weatherCard = await page.$(selector);
                if (weatherCard) {
                    console.log(`✅ 找到天气卡片: ${selector}`);
                    break;
                }
            } catch (e) {
                // 继续尝试下一个选择器
            }
        }

        if (weatherCard) {
            // 截图保存
            await weatherCard.screenshot({ path: 'data/weather-card-before-click.png' });
            console.log('📸 天气卡片截图已保存');

            // 尝试查找"逐小时"或"小时"按钮
            console.log('\n🔍 查找"逐小时"按钮...');
            
            const hourlyButtonSelectors = [
                'text/逐小时',
                'text/小时',
                'text/hourly',
                '[aria-label*="小时"]',
                '[title*="小时"]',
                'button:has-text("小时")',
                'a:has-text("小时")'
            ];

            let clicked = false;
            for (const selector of hourlyButtonSelectors) {
                try {
                    const button = await page.$(selector);
                    if (button) {
                        console.log(`✅ 找到按钮: ${selector}`);
                        console.log('🖱️  点击"逐小时"按钮...');
                        
                        await button.click();
                        clicked = true;
                        
                        console.log('⏳ 等待API响应...');
                        await page.waitForTimeout(5000);
                        
                        break;
                    }
                } catch (e) {
                    // 继续尝试
                }
            }

            if (!clicked) {
                console.log('⚠️  未找到"逐小时"按钮，尝试点击卡片展开');
                await weatherCard.click();
                await page.waitForTimeout(3000);
            }

            // 再次截图
            await page.screenshot({ path: 'data/weather-card-after-click.png', fullPage: true });
            console.log('📸 点击后截图已保存');
        } else {
            console.log('❌ 未找到天气卡片');
        }

        console.log('\n⏳ 继续监听5秒，捕获延迟加载的API...');
        await page.waitForTimeout(5000);

    } catch (error) {
        console.error('❌ 错误:', error);
    }

    // 保存捕获的API
    if (capturedAPIs.length > 0) {
        const outputFile = `data/hourly_weather_apis_${Date.now()}.json`;
        fs.writeFileSync(outputFile, JSON.stringify(capturedAPIs, null, 2));
        console.log(`\n💾 已保存 ${capturedAPIs.length} 个API到: ${outputFile}`);
        
        console.log('\n📋 捕获的API列表:');
        capturedAPIs.forEach((api, i) => {
            console.log(`\n[${i + 1}] ${api.method} ${api.url}`);
            console.log(`    状态: ${api.status}`);
        });
    } else {
        console.log('\n⚠️  未捕获到天气相关API');
    }

    console.log('\n浏览器将保持打开30秒，请手动操作天气卡片...');
    console.log('如果看到"逐小时"选项，请点击它！');
    
    await page.waitForTimeout(30000);

    await browser.close();
    console.log('\n✅ 完成！');
}

// 运行
captureHourlyWeatherAPI().catch(console.error);
