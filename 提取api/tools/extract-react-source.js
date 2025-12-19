// 提取MSN React源码
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function extractReactSource() {
    console.log('🚀 启动浏览器提取React源码...');
    
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: { width: 1920, height: 1080 }
    });

    const page = await browser.newPage();
    
    // 捕获所有JavaScript文件
    const jsFiles = [];
    
    page.on('response', async (response) => {
        const url = response.url();
        const type = response.request().resourceType();
        
        if (type === 'script' && url.includes('.js')) {
            try {
                const text = await response.text();
                jsFiles.push({
                    url: url,
                    size: text.length,
                    content: text
                });
                console.log(`📦 捕获JS: ${path.basename(url)} (${(text.length / 1024).toFixed(2)} KB)`);
            } catch (e) {
                console.log(`⚠️  无法读取: ${url}`);
            }
        }
    });

    console.log('🌐 访问 www.msn.cn...');
    await page.goto('https://www.msn.cn', {
        waitUntil: 'networkidle0',
        timeout: 60000
    });

    console.log('⏳ 等待React组件加载...');
    await page.waitForTimeout(8000);

    // 尝试从window对象中提取React信息
    console.log('\n🔍 分析页面中的React组件...');
    const reactInfo = await page.evaluate(() => {
        const info = {
            hasReact: false,
            reactVersion: null,
            components: [],
            stateData: {}
        };

        // 检查React
        if (window.React) {
            info.hasReact = true;
            info.reactVersion = window.React.version;
        }

        // 查找所有React根节点
        const roots = document.querySelectorAll('[data-reactroot], [data-reactid]');
        info.components.push(`找到 ${roots.length} 个React根节点`);

        // 尝试提取fiber节点
        try {
            const allElements = document.querySelectorAll('*');
            let fiberNodes = 0;
            
            for (let elem of allElements) {
                const keys = Object.keys(elem);
                for (let key of keys) {
                    if (key.startsWith('__reactFiber') || key.startsWith('__reactProps')) {
                        fiberNodes++;
                        
                        // 尝试提取组件名
                        if (elem[key] && elem[key].type && elem[key].type.name) {
                            info.components.push(elem[key].type.name);
                        }
                        break;
                    }
                }
            }
            
            info.components.push(`找到 ${fiberNodes} 个Fiber节点`);
        } catch (e) {
            info.components.push('Fiber分析失败: ' + e.message);
        }

        // 提取全局状态
        if (window.__INITIAL_STATE__) {
            info.stateData.initialState = window.__INITIAL_STATE__;
        }
        if (window.__PRELOADED_STATE__) {
            info.stateData.preloadedState = window.__PRELOADED_STATE__;
        }

        return info;
    });

    console.log('\nReact信息:');
    console.log('  - React存在:', reactInfo.hasReact);
    console.log('  - React版本:', reactInfo.reactVersion || '未知');
    console.log('  - 组件信息:', reactInfo.components.join(', '));

    // 保存目录
    const outputDir = path.join(__dirname, '../frontend/react-source');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    console.log('\n💾 保存JavaScript文件...');
    
    // 保存所有JS文件
    const jsSummary = [];
    for (let i = 0; i < jsFiles.length; i++) {
        const jsFile = jsFiles[i];
        const filename = `bundle-${i}-${path.basename(new URL(jsFile.url).pathname).replace(/[^a-zA-Z0-9.-]/g, '_')}`;
        
        fs.writeFileSync(
            path.join(outputDir, filename),
            jsFile.content
        );
        
        jsSummary.push({
            index: i,
            filename: filename,
            url: jsFile.url,
            size: jsFile.size,
            // 检查是否包含关键词
            hasWeather: jsFile.content.includes('weather') || jsFile.content.includes('Weather'),
            hasCalendar: jsFile.content.includes('calendar') || jsFile.content.includes('Calendar'),
            hasReact: jsFile.content.includes('react') || jsFile.content.includes('React'),
            hasWeatherCard: jsFile.content.includes('WeatherCard') || jsFile.content.includes('WeatherSummary'),
            hasCalendarCard: jsFile.content.includes('CalendarCard') || jsFile.content.includes('RichCalendar')
        });
        
        console.log(`  ✓ ${filename} (${(jsFile.size / 1024).toFixed(2)} KB)`);
    }

    // 保存摘要
    fs.writeFileSync(
        path.join(outputDir, 'js-files-summary.json'),
        JSON.stringify(jsSummary, null, 2)
    );

    // 保存React信息
    fs.writeFileSync(
        path.join(outputDir, 'react-info.json'),
        JSON.stringify(reactInfo, null, 2)
    );

    // 分析哪些文件最可能包含卡片组件
    console.log('\n🎯 最可能包含卡片组件的文件:');
    const candidates = jsSummary.filter(f => 
        (f.hasWeatherCard || f.hasCalendarCard) && f.size > 10000
    ).sort((a, b) => b.size - a.size);

    if (candidates.length > 0) {
        candidates.forEach(f => {
            console.log(`\n  📦 ${f.filename}`);
            console.log(`     大小: ${(f.size / 1024).toFixed(2)} KB`);
            console.log(`     天气卡片: ${f.hasWeatherCard ? '✓' : '✗'}`);
            console.log(`     日历卡片: ${f.hasCalendarCard ? '✓' : '✗'}`);
        });
    } else {
        console.log('  未找到明确的卡片组件文件，尝试搜索包含"weather"或"calendar"的文件:');
        const weatherOrCalendar = jsSummary.filter(f => 
            (f.hasWeather || f.hasCalendar) && f.size > 50000
        ).sort((a, b) => b.size - a.size).slice(0, 5);
        
        weatherOrCalendar.forEach(f => {
            console.log(`\n  📦 ${f.filename}`);
            console.log(`     大小: ${(f.size / 1024).toFixed(2)} KB`);
            console.log(`     包含weather: ${f.hasWeather ? '✓' : '✗'}`);
            console.log(`     包含calendar: ${f.hasCalendar ? '✓' : '✗'}`);
        });
    }

    console.log('\n✨ 提取完成！');
    console.log(`\n📂 已保存 ${jsFiles.length} 个JavaScript文件到:`);
    console.log(`   ${outputDir}`);
    console.log('\n💡 下一步:');
    console.log('   1. 查看 js-files-summary.json 找到目标文件');
    console.log('   2. 使用 webcrack 或 webpack-unpack 反编译打包文件');
    console.log('   3. 搜索 WeatherSummary 和 RichCalendarSD 组件');

    await browser.close();
}

extractReactSource().catch(console.error);
