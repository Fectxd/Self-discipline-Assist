const puppeteer = require('puppeteer');
const fs = require('fs');

/**
 * 深度抓取：等待更长时间，并拦截所有 XHR/Fetch 请求
 * 专门寻找数据 API，而不是静态资源
 */
async function deepCapture() {
  console.log('🚀 启动深度抓取模式...\n');
  
  const browser = await puppeteer.launch({
    headless: false,
    args: [
      '--lang=zh-CN',
      '--disable-blink-features=AutomationControlled'
    ]
  });

  const page = await browser.newPage();
  
  // 设置中文环境和真实浏览器特征
  await page.setExtraHTTPHeaders({
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0'
  });

  const apiCalls = [];
  const dataAPIs = [];

  // 监听所有请求 - 只关注数据 API
  page.on('request', request => {
    const url = request.url();
    const type = request.resourceType();
    const method = request.method();
    
    // 过滤出真正的 API 调用
    const isDataAPI = (
      type === 'xhr' || 
      type === 'fetch' ||
      url.includes('/api/') ||
      url.includes('service/') ||
      url.includes('weather.') ||
      (url.includes('assets.msn') && (url.includes('Weather') || url.includes('Calendar'))) ||
      method === 'POST'
    ) && !url.includes('.js') && !url.includes('.css') && !url.includes('.svg') && !url.includes('.png') && !url.includes('.jpg');
    
    if (isDataAPI) {
      console.log(`🎯 [数据API] ${method} ${url}`);
      apiCalls.push({
        url,
        method,
        headers: request.headers(),
        postData: request.postData(),
        type
      });
    }
  });

  // 监听响应
  page.on('response', async response => {
    const url = response.url();
    const type = response.request().resourceType();
    const method = response.request().method();
    
    const isDataAPI = (
      type === 'xhr' || 
      type === 'fetch' ||
      url.includes('/api/') ||
      url.includes('service/') ||
      method === 'POST'
    ) && !url.includes('.js') && !url.includes('.css') && !url.includes('.svg') && !url.includes('.png') && !url.includes('.jpg');

    if (isDataAPI) {
      try {
        const contentType = response.headers()['content-type'] || '';
        let data = null;
        
        if (contentType.includes('json')) {
          data = await response.json();
          console.log(`✅ [JSON响应] ${url.substring(0, 80)}...`);
        } else if (contentType.includes('text')) {
          data = await response.text();
        }

        dataAPIs.push({
          url,
          method,
          status: response.status(),
          contentType,
          data,
          request: apiCalls.find(r => r.url === url)
        });

        // 特别标记
        if (url.toLowerCase().includes('weather') || data && JSON.stringify(data).toLowerCase().includes('temperature')) {
          console.log('   ⭐ 这可能是天气 API！');
        }
        if (url.toLowerCase().includes('calendar') || url.toLowerCase().includes('lunar') || 
            (data && (JSON.stringify(data).includes('农历') || JSON.stringify(data).includes('lunar')))) {
          console.log('   ⭐ 这可能是日历 API！');
        }

      } catch (error) {
        // 忽略解析错误
      }
    }
  });

  try {
    console.log('🌐 访问 MSN 主页...\n');
    await page.goto('https://www.msn.cn/zh-cn', {
      waitUntil: 'networkidle0',
      timeout: 60000
    });

    console.log('⏳ 等待 30 秒，让所有组件加载...\n');
    await page.waitForTimeout(30000);

    // 尝试点击天气卡片
    console.log('🖱️  尝试与页面交互（点击天气和日历）...\n');
    try {
      // 滚动并点击可能触发 API 的元素
      await page.evaluate(() => {
        // 尝试找到并点击天气相关元素
        const elements = document.querySelectorAll('[class*="weather"], [class*="Weather"], [data-t*="weather"]');
        elements.forEach(el => el.click?.());
        
        // 尝试找到并点击日历相关元素
        const calElements = document.querySelectorAll('[class*="calendar"], [class*="Calendar"], [data-t*="calendar"]');
        calElements.forEach(el => el.click?.());
      });
      
      await page.waitForTimeout(5000);
    } catch (e) {
      console.log('   交互可能失败，继续...');
    }

    // 检查页面中内嵌的数据
    console.log('\n🔍 检查页面内嵌数据...\n');
    const pageData = await page.evaluate(() => {
      const scripts = Array.from(document.querySelectorAll('script'));
      const data = [];
      
      scripts.forEach(script => {
        const text = script.textContent;
        // 查找可能包含天气数据的 JSON
        if (text.includes('weather') || text.includes('temperature') || 
            text.includes('calendar') || text.includes('lunar')) {
          // 尝试提取 JSON 对象
          const jsonMatches = text.match(/\{[^{}]*(?:"(?:weather|temperature|calendar|lunar)")[^{}]*\}/g);
          if (jsonMatches) {
            data.push(...jsonMatches);
          }
        }
      });
      
      return data;
    });

    console.log(`找到 ${pageData.length} 个可能包含数据的脚本片段\n`);

    // 保存结果
    const results = {
      dataAPIs,
      apiCalls,
      pageData,
      summary: {
        totalDataAPIs: dataAPIs.length,
        totalCalls: apiCalls.length,
        weatherAPIs: dataAPIs.filter(a => 
          a.url.toLowerCase().includes('weather') || 
          JSON.stringify(a.data).toLowerCase().includes('temperature')
        ).length,
        calendarAPIs: dataAPIs.filter(a =>
          a.url.toLowerCase().includes('calendar') ||
          a.url.toLowerCase().includes('lunar')
        ).length
      }
    };

    const filename = `deep_capture_${Date.now()}.json`;
    fs.writeFileSync(filename, JSON.stringify(results, null, 2));
    console.log(`\n💾 数据已保存到: ${filename}`);

    // 打印发现的数据 API
    console.log('\n' + '='.repeat(80));
    console.log('📊 发现的数据 API:');
    console.log('='.repeat(80));
    
    dataAPIs.forEach((api, i) => {
      console.log(`\n[${i + 1}] ${api.url}`);
      console.log(`    方法: ${api.method}`);
      console.log(`    状态: ${api.status}`);
      if (api.data) {
        const preview = JSON.stringify(api.data).substring(0, 200);
        console.log(`    数据: ${preview}...`);
      }
    });

    if (dataAPIs.length === 0) {
      console.log('\n⚠️  未发现明显的数据 API 调用');
      console.log('可能的原因：');
      console.log('1. 数据直接内嵌在 HTML/JS 中');
      console.log('2. 使用 WebSocket 或其他协议');
      console.log('3. 需要登录或特定交互');
      console.log('\n建议：检查 deep_capture_*.json 文件中的 pageData 部分');
    }

    console.log('\n⏸️  按任意键关闭浏览器...');
    await page.waitForTimeout(10000);

  } catch (error) {
    console.error('❌ 错误:', error.message);
  } finally {
    await browser.close();
  }

  return results;
}

if (require.main === module) {
  deepCapture().catch(console.error);
}

module.exports = { deepCapture };
