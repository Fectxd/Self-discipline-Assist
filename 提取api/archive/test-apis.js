const axios = require('axios');
const fs = require('fs');

/**
 * 测试从深度抓取中发现的 API 端点
 */

// MSN 公开 API Key
const APIKEY = '0QfOX3Vn51YCzitbLaRkTTBadtWpgTN8NZLW0C1SEM';

/**
 * 测试配置 API - 可能包含天气和日历的初始数据
 */
async function testConfigAPI() {
  console.log('\n🧪 测试配置 API...\n');
  
  const targetScope = {
    audienceMode: "adult",
    browser: {
      browserType: "edgeChromium",
      version: "120",
      ismobile: "false"
    },
    deviceFormFactor: "desktop",
    domain: "www.msn.cn",
    locale: {
      content: { language: "zh", market: "cn" },
      display: { language: "zh", market: "cn" }
    },
    os: "windows",
    modes: { audienceMode: "adult" },
    platform: "web",
    pageType: "hp"
  };

  try {
    const response = await axios.get('https://assets.msn.cn/resolver/api/resolve/v3/config/', {
      params: {
        expType: 'AppConfig',
        expInstance: 'default',
        apptype: 'homePage',
        v: new Date().toISOString().split('T')[0].replace(/-/g, '') + '.31',
        targetScope: JSON.stringify(targetScope)
      },
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'application/json'
      }
    });

    console.log('✅ 配置 API 响应成功');
    console.log('响应大小:', JSON.stringify(response.data).length, '字节');
    
    // 查找天气相关配置
    const configStr = JSON.stringify(response.data);
    if (configStr.includes('weather') || configStr.includes('Weather')) {
      console.log('✨ 发现天气相关配置！');
    }
    if (configStr.includes('calendar') || configStr.includes('Calendar')) {
      console.log('✨ 发现日历相关配置！');
    }

    // 保存完整响应
    fs.writeFileSync('config_api_response.json', JSON.stringify(response.data, null, 2));
    console.log('💾 响应已保存到 config_api_response.json\n');

    return response.data;
  } catch (error) {
    console.error('❌ 错误:', error.message);
  }
}

/**
 * 从捕获数据中提取和测试 API
 */
async function analyzeAndTestAPIs() {
  console.log('='.repeat(80));
  console.log('🔬 分析深度抓取数据并测试 API');
  console.log('='.repeat(80));

  // 查找最新的深度抓取文件
  const files = fs.readdirSync('.').filter(f => f.startsWith('deep_capture_'));
  
  if (files.length === 0) {
    console.log('\n❌ 未找到深度抓取文件！');
    console.log('请先运行: npm run deep\n');
    return;
  }

  files.sort().reverse();
  const latestFile = files[0];
  
  console.log(`\n📂 读取文件: ${latestFile}\n`);
  
  const data = JSON.parse(fs.readFileSync(latestFile, 'utf8'));

  console.log(`📊 统计:`);
  console.log(`   总数据 API: ${data.dataAPIs.length}`);
  console.log(`   内嵌数据片段: ${data.pageData?.length || 0}`);

  // 分析数据 API
  console.log('\n' + '-'.repeat(80));
  console.log('🔍 分析数据 API:');
  console.log('-'.repeat(80));

  const weatherAPIs = [];
  const calendarAPIs = [];
  const otherAPIs = [];

  data.dataAPIs.forEach(api => {
    const url = api.url.toLowerCase();
    const dataStr = JSON.stringify(api.data || '').toLowerCase();

    if (url.includes('weather') || dataStr.includes('temperature') || dataStr.includes('天气')) {
      weatherAPIs.push(api);
    } else if (url.includes('calendar') || url.includes('lunar') || dataStr.includes('农历')) {
      calendarAPIs.push(api);
    } else {
      otherAPIs.push(api);
    }
  });

  console.log(`\n✅ 天气相关 API: ${weatherAPIs.length} 个`);
  weatherAPIs.forEach((api, i) => {
    console.log(`   [${i + 1}] ${api.url.substring(0, 80)}...`);
    if (api.data) {
      console.log(`       状态: ${api.status}, 数据大小: ${JSON.stringify(api.data).length} 字节`);
    }
  });

  console.log(`\n✅ 日历相关 API: ${calendarAPIs.length} 个`);
  calendarAPIs.forEach((api, i) => {
    console.log(`   [${i + 1}] ${api.url.substring(0, 80)}...`);
    if (api.data) {
      console.log(`       状态: ${api.status}, 数据大小: ${JSON.stringify(api.data).length} 字节`);
    }
  });

  // 保存分类结果
  const result = {
    weather: weatherAPIs,
    calendar: calendarAPIs,
    other: otherAPIs.slice(0, 10) // 只保存前10个其他API
  };

  fs.writeFileSync('classified_apis.json', JSON.stringify(result, null, 2));
  console.log('\n💾 分类结果已保存到 classified_apis.json');

  // 测试配置 API
  await testConfigAPI();

  // 如果发现了天气 API，尝试复现第一个
  if (weatherAPIs.length > 0 && weatherAPIs[0].data) {
    console.log('\n' + '-'.repeat(80));
    console.log('🌤️  天气 API 详细信息:');
    console.log('-'.repeat(80));
    console.log('\nURL:', weatherAPIs[0].url);
    console.log('方法:', weatherAPIs[0].method);
    console.log('数据预览:');
    console.log(JSON.stringify(weatherAPIs[0].data, null, 2).substring(0, 500));
  }

  // 如果发现了日历 API
  if (calendarAPIs.length > 0 && calendarAPIs[0].data) {
    console.log('\n' + '-'.repeat(80));
    console.log('📅 日历 API 详细信息:');
    console.log('-'.repeat(80));
    console.log('\nURL:', calendarAPIs[0].url);
    console.log('方法:', calendarAPIs[0].method);
    console.log('数据预览:');
    console.log(JSON.stringify(calendarAPIs[0].data, null, 2).substring(0, 500));
  }

  console.log('\n' + '='.repeat(80));
  console.log('✅ 分析完成！');
  console.log('='.repeat(80));
}

// 运行分析
if (require.main === module) {
  analyzeAndTestAPIs().catch(console.error);
}

module.exports = {
  testConfigAPI,
  analyzeAndTestAPIs
};
