// 从MSN.cn提取weather-card和rich-calendar-card的完整实现
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

async function downloadResource(url, filepath) {
    return new Promise((resolve, reject) => {
        const protocol = url.startsWith('https') ? https : http;
        const file = fs.createWriteStream(filepath);
        protocol.get(url, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filepath, () => {});
            reject(err);
        });
    });
}

async function extractCardComponents() {
    console.log('🚀 启动浏览器...');
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: { width: 1920, height: 1080 }
    });

    const page = await browser.newPage();
    
    // 捕获所有资源请求
    const resources = {
        images: [],
        fonts: [],
        css: [],
        js: []
    };

    page.on('response', async (response) => {
        const url = response.url();
        const type = response.request().resourceType();
        
        if (type === 'image' && (url.includes('weather') || url.includes('calendar'))) {
            resources.images.push(url);
        } else if (type === 'font') {
            resources.fonts.push(url);
        } else if (type === 'stylesheet') {
            resources.css.push(url);
        }
    });

    console.log('🌐 访问 www.msn.cn...');
    await page.goto('https://www.msn.cn', {
        waitUntil: 'networkidle2',
        timeout: 60000
    });

    console.log('⏳ 等待页面加载完成...');
    await page.waitForTimeout(5000);

    // 提取天气卡片
    console.log('\n📦 提取天气卡片 (weather-card)...');
    const weatherCardData = await page.evaluate(() => {
        // 查找天气卡片
        const weatherCard = document.querySelector('[data-card-type="WeatherSummary"], .weather-card, [class*="weather"]');
        
        if (!weatherCard) return null;

        // 获取计算后的样式
        const styles = window.getComputedStyle(weatherCard);
        const styleObj = {};
        for (let i = 0; i < styles.length; i++) {
            const prop = styles[i];
            styleObj[prop] = styles.getPropertyValue(prop);
        }

        // 获取所有子元素及其样式
        const elements = [];
        const getAllElements = (element) => {
            const elem = {
                tag: element.tagName.toLowerCase(),
                classes: Array.from(element.classList),
                id: element.id,
                attributes: {},
                styles: {},
                innerHTML: element.innerHTML,
                innerText: element.innerText,
                children: []
            };

            // 获取所有属性
            for (let attr of element.attributes) {
                elem.attributes[attr.name] = attr.value;
            }

            // 获取计算样式
            const elemStyles = window.getComputedStyle(element);
            for (let i = 0; i < elemStyles.length; i++) {
                const prop = elemStyles[i];
                elem.styles[prop] = elemStyles.getPropertyValue(prop);
            }

            // 递归获取子元素
            for (let child of element.children) {
                elem.children.push(getAllElements(child));
            }

            return elem;
        };

        return {
            html: weatherCard.outerHTML,
            structure: getAllElements(weatherCard),
            computedStyles: styleObj,
            boundingBox: weatherCard.getBoundingClientRect()
        };
    });

    // 提取日历卡片
    console.log('📦 提取日历卡片 (rich-calendar-card)...');
    const calendarCardData = await page.evaluate(() => {
        // 查找日历卡片
        const calendarCard = document.querySelector('[data-card-type="RichCalendarSD"], .calendar-card, .rich-calendar-card, [class*="calendar"]');
        
        if (!calendarCard) return null;

        const styles = window.getComputedStyle(calendarCard);
        const styleObj = {};
        for (let i = 0; i < styles.length; i++) {
            const prop = styles[i];
            styleObj[prop] = styles.getPropertyValue(prop);
        }

        const getAllElements = (element) => {
            const elem = {
                tag: element.tagName.toLowerCase(),
                classes: Array.from(element.classList),
                id: element.id,
                attributes: {},
                styles: {},
                innerHTML: element.innerHTML,
                innerText: element.innerText,
                children: []
            };

            for (let attr of element.attributes) {
                elem.attributes[attr.name] = attr.value;
            }

            const elemStyles = window.getComputedStyle(element);
            for (let i = 0; i < elemStyles.length; i++) {
                const prop = elemStyles[i];
                elem.styles[prop] = elemStyles.getPropertyValue(prop);
            }

            for (let child of element.children) {
                elem.children.push(getAllElements(child));
            }

            return elem;
        };

        return {
            html: calendarCard.outerHTML,
            structure: getAllElements(calendarCard),
            computedStyles: styleObj,
            boundingBox: calendarCard.getBoundingClientRect()
        };
    });

    // 提取所有CSS规则
    console.log('\n🎨 提取CSS样式...');
    const cssRules = await page.evaluate(() => {
        const allRules = [];
        for (let sheet of document.styleSheets) {
            try {
                for (let rule of sheet.cssRules) {
                    if (rule.cssText && (
                        rule.selectorText?.includes('weather') ||
                        rule.selectorText?.includes('calendar') ||
                        rule.selectorText?.includes('card')
                    )) {
                        allRules.push(rule.cssText);
                    }
                }
            } catch (e) {
                // CORS限制
            }
        }
        return allRules;
    });

    // 截取卡片截图
    console.log('\n📸 截取卡片截图...');
    
    if (weatherCardData) {
        const weatherElement = await page.$('[data-card-type="WeatherSummary"], .weather-card, [class*="weather"]');
        if (weatherElement) {
            await weatherElement.screenshot({
                path: path.join(__dirname, '../frontend/assets/weather-card-original.png')
            });
        }
    }

    if (calendarCardData) {
        const calendarElement = await page.$('[data-card-type="RichCalendarSD"], .calendar-card, .rich-calendar-card, [class*="calendar"]');
        if (calendarElement) {
            await calendarElement.screenshot({
                path: path.join(__dirname, '../frontend/assets/calendar-card-original.png')
            });
        }
    }

    // 保存提取的数据
    console.log('\n💾 保存提取的数据...');
    const outputDir = path.join(__dirname, '../frontend/extracted');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    // 保存天气卡片数据
    if (weatherCardData) {
        fs.writeFileSync(
            path.join(outputDir, 'weather-card-full.json'),
            JSON.stringify(weatherCardData, null, 2)
        );
        console.log('✅ 天气卡片数据已保存');
    } else {
        console.log('⚠️  未找到天气卡片');
    }

    // 保存日历卡片数据
    if (calendarCardData) {
        fs.writeFileSync(
            path.join(outputDir, 'calendar-card-full.json'),
            JSON.stringify(calendarCardData, null, 2)
        );
        console.log('✅ 日历卡片数据已保存');
    } else {
        console.log('⚠️  未找到日历卡片');
    }

    // 保存CSS规则
    fs.writeFileSync(
        path.join(outputDir, 'extracted-styles.css'),
        cssRules.join('\n\n')
    );
    console.log('✅ CSS样式已保存');

    // 保存资源列表
    fs.writeFileSync(
        path.join(outputDir, 'resources.json'),
        JSON.stringify(resources, null, 2)
    );
    console.log('✅ 资源列表已保存');

    // 下载图片资源
    console.log('\n📥 下载图片资源...');
    const imageDir = path.join(__dirname, '../frontend/assets/msn-images');
    if (!fs.existsSync(imageDir)) {
        fs.mkdirSync(imageDir, { recursive: true });
    }

    for (let i = 0; i < Math.min(resources.images.length, 20); i++) {
        const imageUrl = resources.images[i];
        try {
            const filename = path.basename(new URL(imageUrl).pathname) || `image-${i}.png`;
            await downloadResource(imageUrl, path.join(imageDir, filename));
            console.log(`  ✓ ${filename}`);
        } catch (err) {
            console.log(`  ✗ 下载失败: ${imageUrl}`);
        }
    }

    console.log('\n✨ 提取完成！');
    console.log('\n📂 提取的文件:');
    console.log('  - frontend/extracted/weather-card-full.json (天气卡片完整数据)');
    console.log('  - frontend/extracted/calendar-card-full.json (日历卡片完整数据)');
    console.log('  - frontend/extracted/extracted-styles.css (CSS样式)');
    console.log('  - frontend/extracted/resources.json (资源列表)');
    console.log('  - frontend/assets/weather-card-original.png (天气卡片截图)');
    console.log('  - frontend/assets/calendar-card-original.png (日历卡片截图)');
    console.log(`  - frontend/assets/msn-images/ (${resources.images.length}张图片)`);

    await browser.close();
}

extractCardComponents().catch(console.error);
