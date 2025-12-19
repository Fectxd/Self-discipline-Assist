const puppeteer = require('puppeteer');
const fs = require('fs');

/**
 * 抓取 MSN/Edge 主页的所有网络请求
 * 找出天气和日历的真实 API 接口
 */
async function captureMSNRequests() {
  console.log('🚀 启动浏览器，准备抓取 MSN 页面...\n');
  
  const browser = await puppeteer.launch({
    headless: false, // 显示浏览器，方便观察
    args: ['--lang=zh-CN']
  });

  const page = await browser.newPage();
  
  // 设置中文环境
  await page.setExtraHTTPHeaders({
    'Accept-Language': 'zh-CN,zh;q=0.9'
  });

  const requests = [];
  const responses = [];

  // 监听所有网络请求
  page.on('request', request => {
    const url = request.url();
    const type = request.resourceType();
    
    // 记录 API 请求
    if (type === 'xhr' || type === 'fetch' || url.includes('api') || url.includes('weather') || url.includes('calendar')) {
      requests.push({
        url: url,
        method: request.method(),
        headers: request.headers(),
        postData: request.postData(),
        resourceType: type,
        timestamp: new Date().toISOString()
      });
      
      console.log(`📡 [请求] ${request.method()} ${url}`);
    }
  });

  // 监听所有响应
  page.on('response', async response => {
    const url = response.url();
    const type = response.request().resourceType();
    
    // 只记录 API 响应
    if (type === 'xhr' || type === 'fetch' || url.includes('api') || url.includes('weather') || url.includes('calendar')) {
      try {
        const contentType = response.headers()['content-type'] || '';
        let data = null;
        
        if (contentType.includes('application/json')) {
          data = await response.json();
        } else if (contentType.includes('text')) {
          data = await response.text();
        }

        responses.push({
          url: url,
          status: response.status(),
          headers: response.headers(),
          contentType: contentType,
          data: data,
          timestamp: new Date().toISOString()
        });

        console.log(`✅ [响应] ${response.status()} ${url}`);
        
        // 特别标记天气和日历相关的请求
        if (url.includes('weather') || url.includes('天气')) {
          console.log('   🌤️  发现天气API！');
        }
        if (url.includes('calendar') || url.includes('日历') || url.includes('lunar')) {
          console.log('   📅 发现日历API！');
        }

      } catch (error) {
        // 某些响应可能无法解析，忽略
      }
    }
  });

  try {
    console.log('📍 访问 MSN 中国版主页...\n');
    await page.goto('https://www.msn.cn/zh-cn', {
      waitUntil: 'networkidle2',
      timeout: 60000
    });

    console.log('\n⏳ 等待页面完全加载（10秒）...\n');
    await page.waitForTimeout(10000);

    // 尝试滚动页面，触发更多请求
    console.log('📜 滚动页面，触发更多内容加载...\n');
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight / 2);
    });
    await page.waitForTimeout(3000);

    // 保存结果
    const results = {
      summary: {
        totalRequests: requests.length,
        totalResponses: responses.length,
        weatherAPIs: responses.filter(r => 
          r.url.includes('weather') || r.url.includes('天气')
        ).length,
        calendarAPIs: responses.filter(r => 
          r.url.includes('calendar') || r.url.includes('日历') || r.url.includes('lunar')
        ).length,
        captureTime: new Date().toISOString()
      },
      requests: requests,
      responses: responses
    };

    // 保存到文件
    const filename = `msn_api_capture_${Date.now()}.json`;
    fs.writeFileSync(filename, JSON.stringify(results, null, 2));
    console.log(`\n💾 数据已保存到: ${filename}`);

    // 生成分析报告
    generateReport(results);

    console.log('\n🎯 按任意键关闭浏览器...');
    await page.waitForTimeout(5000);

  } catch (error) {
    console.error('❌ 错误:', error.message);
  } finally {
    await browser.close();
  }

  return { requests, responses };
}

/**
 * 生成分析报告
 */
function generateReport(results) {
  console.log('\n' + '='.repeat(80));
  console.log('📊 API 分析报告');
  console.log('='.repeat(80));
  
  console.log(`\n总请求数: ${results.summary.totalRequests}`);
  console.log(`总响应数: ${results.summary.totalResponses}`);
  console.log(`天气相关: ${results.summary.weatherAPIs} 个`);
  console.log(`日历相关: ${results.summary.calendarAPIs} 个`);

  // 分析天气 API
  console.log('\n' + '-'.repeat(80));
  console.log('🌤️  天气 API 端点:');
  console.log('-'.repeat(80));
  
  const weatherAPIs = results.responses.filter(r => 
    r.url.includes('weather') || r.url.includes('天气') || r.url.toLowerCase().includes('weather')
  );
  
  weatherAPIs.forEach((api, index) => {
    console.log(`\n[${index + 1}] ${api.url}`);
    console.log(`    状态: ${api.status}`);
    console.log(`    类型: ${api.contentType}`);
    if (api.data) {
      console.log(`    数据预览: ${JSON.stringify(api.data).substring(0, 200)}...`);
    }
  });

  // 分析日历 API
  console.log('\n' + '-'.repeat(80));
  console.log('📅 日历 API 端点:');
  console.log('-'.repeat(80));
  
  const calendarAPIs = results.responses.filter(r => 
    r.url.includes('calendar') || r.url.includes('日历') || r.url.includes('lunar')
  );
  
  calendarAPIs.forEach((api, index) => {
    console.log(`\n[${index + 1}] ${api.url}`);
    console.log(`    状态: ${api.status}`);
    console.log(`    类型: ${api.contentType}`);
    if (api.data) {
      console.log(`    数据预览: ${JSON.stringify(api.data).substring(0, 200)}...`);
    }
  });

  // 保存报告
  const reportFilename = `api_report_${Date.now()}.txt`;
  const report = generateTextReport(results);
  fs.writeFileSync(reportFilename, report);
  console.log(`\n📄 详细报告已保存: ${reportFilename}`);
}

/**
 * 生成文本报告
 */
function generateTextReport(results) {
  let report = '='.repeat(80) + '\n';
  report += 'MSN/Edge 主页 API 逆向分析报告\n';
  report += '='.repeat(80) + '\n\n';
  report += `生成时间: ${results.summary.captureTime}\n`;
  report += `总请求数: ${results.summary.totalRequests}\n`;
  report += `总响应数: ${results.summary.totalResponses}\n\n`;

  // 所有 API 端点
  report += '所有 API 端点列表:\n';
  report += '-'.repeat(80) + '\n';
  results.responses.forEach((res, i) => {
    report += `\n[${i + 1}] ${res.url}\n`;
    report += `    方法: ${results.requests.find(req => req.url === res.url)?.method || 'GET'}\n`;
    report += `    状态: ${res.status}\n`;
    report += `    类型: ${res.contentType}\n`;
    
    if (res.data) {
      const dataStr = JSON.stringify(res.data, null, 2);
      report += `    响应数据:\n${dataStr.substring(0, 500)}\n`;
      if (dataStr.length > 500) {
        report += `    ... (省略 ${dataStr.length - 500} 字符)\n`;
      }
    }
    report += '\n';
  });

  return report;
}

// 运行抓取
if (require.main === module) {
  captureMSNRequests().catch(console.error);
}

module.exports = { captureMSNRequests };
