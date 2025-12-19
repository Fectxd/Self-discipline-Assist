// 深度提取MSN卡片 - 通过DOM遍历和数据属性查找
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function deepExtractCards() {
    console.log('🚀 启动浏览器...');
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: { width: 1920, height: 1080 }
    });

    const page = await browser.newPage();

    console.log('🌐 访问 www.msn.cn...');
    await page.goto('https://www.msn.cn', {
        waitUntil: 'networkidle0',
        timeout: 60000
    });

    console.log('⏳ 等待页面完全加载...');
    await page.waitForTimeout(8000);

    // 滚动页面确保所有卡片加载
    console.log('📜 滚动页面加载所有卡片...');
    await page.evaluate(async () => {
        await new Promise((resolve) => {
            let totalHeight = 0;
            const distance = 100;
            const timer = setInterval(() => {
                window.scrollBy(0, distance);
                totalHeight += distance;
                if (totalHeight >= document.body.scrollHeight) {
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });

    await page.waitForTimeout(3000);

    // 查找所有可能的卡片元素
    console.log('\n🔍 搜索所有卡片元素...');
    const allCards = await page.evaluate(() => {
        const cards = [];
        
        // 方法1: 通过data属性查找
        const dataCards = document.querySelectorAll('[data-card-type]');
        dataCards.forEach((card, i) => {
            cards.push({
                method: 'data-card-type',
                index: i,
                type: card.getAttribute('data-card-type'),
                id: card.id,
                classes: Array.from(card.classList),
                html: card.outerHTML.substring(0, 500) + '...',
                selector: `[data-card-type="${card.getAttribute('data-card-type')}"]`
            });
        });

        // 方法2: 通过class名查找
        const classPatterns = ['weather', 'calendar', 'card'];
        classPatterns.forEach(pattern => {
            const elements = document.querySelectorAll(`[class*="${pattern}"]`);
            elements.forEach((elem, i) => {
                if (elem.offsetHeight > 100) { // 过滤小元素
                    cards.push({
                        method: 'class-pattern',
                        pattern: pattern,
                        index: i,
                        id: elem.id,
                        classes: Array.from(elem.classList),
                        html: elem.outerHTML.substring(0, 500) + '...',
                        height: elem.offsetHeight,
                        width: elem.offsetWidth
                    });
                }
            });
        });

        return cards;
    });

    console.log(`\n找到 ${allCards.length} 个可能的卡片元素:`);
    allCards.forEach((card, i) => {
        console.log(`\n[${i}] ${card.method} - ${card.type || card.pattern}`);
        console.log(`    ID: ${card.id || '无'}`);
        console.log(`    Classes: ${card.classes.join(', ')}`);
        if (card.height) console.log(`    尺寸: ${card.width}x${card.height}`);
    });

    // 保存所有卡片信息
    const outputDir = path.join(__dirname, '../frontend/extracted');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(
        path.join(outputDir, 'all-cards-found.json'),
        JSON.stringify(allCards, null, 2)
    );

    // 提取完整页面HTML
    console.log('\n📄 提取完整页面HTML...');
    const fullHTML = await page.content();
    fs.writeFileSync(
        path.join(outputDir, 'msn-full-page.html'),
        fullHTML
    );

    // 提取所有内联样式和CSS
    console.log('🎨 提取所有CSS...');
    const allStyles = await page.evaluate(() => {
        const styles = [];
        // 内联样式
        document.querySelectorAll('style').forEach(style => {
            styles.push({
                type: 'inline',
                content: style.textContent
            });
        });
        
        // 外部样式表
        for (let sheet of document.styleSheets) {
            try {
                const rules = [];
                for (let rule of sheet.cssRules) {
                    rules.push(rule.cssText);
                }
                styles.push({
                    type: 'external',
                    href: sheet.href,
                    rules: rules
                });
            } catch (e) {
                // CORS
            }
        }
        
        return styles;
    });

    fs.writeFileSync(
        path.join(outputDir, 'all-styles.json'),
        JSON.stringify(allStyles, null, 2)
    );

    // 截取整个页面
    console.log('\n📸 截取页面截图...');
    await page.screenshot({
        path: path.join(__dirname, '../frontend/assets/msn-fullpage.png'),
        fullPage: true
    });

    console.log('\n✨ 提取完成！请查看:');
    console.log('  - frontend/extracted/all-cards-found.json (所有找到的卡片)');
    console.log('  - frontend/extracted/msn-full-page.html (完整页面HTML)');
    console.log('  - frontend/extracted/all-styles.json (所有CSS样式)');
    console.log('  - frontend/assets/msn-fullpage.png (页面截图)');
    console.log('\n💡 现在分析all-cards-found.json找到weather和calendar卡片的选择器');

    await browser.close();
}

deepExtractCards().catch(console.error);
