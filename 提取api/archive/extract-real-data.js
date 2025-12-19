const fs = require('fs');
const axios = require('axios');

/**
 * 从捕获的 API 中提取真实的天气和日历数据
 */

const APIKEY = '0QfOX3Vn51YCzitbLaRkTTBadtWpgTN8NZLW0C1SEM';

/**
 * 分析配置API，找出天气和日历组件的数据源配置
 */
function analyzeConfigAPI() {
  console.log('📖 分析配置 API...\n');
  
  const config = JSON.parse(fs.readFileSync('config_api_response.json', 'utf8'));
  const configStr = JSON.stringify(config);
  
  // 搜索天气相关配置
  console.log('🔍 搜索天气卡片配置...');
  const weatherMatches = configStr.match(/"WeatherCardWC[^}]*}/g) || [];
  console.log(`找到 ${weatherMatches.length} 处天气配置`);
  
  // 搜索日历相关配置
  console.log('🔍 搜索日历卡片配置...');
  const calendarMatches = configStr.match(/"RichCalendarCard[^}]*}/g) || [];
  console.log(`找到 ${calendarMatches.length} 处日历配置`);
  
  // 尝试找到数据端点
  console.log('\n🔍 搜索可能的数据端点...');
  
  // 搜索所有URL
  const urlPattern = /"(https?:\/\/[^"]+)"/g;
  const urls = [];
  let match;
  while ((match = urlPattern.exec(configStr)) !== null) {
    const url = match[1];
    if (url.includes('weather') || url.includes('Weather') || 
        url.includes('calendar') || url.includes('Calendar') ||
        url.includes('lunar')) {
      urls.push(url);
    }
  }
  
  console.log(`\n找到 ${urls.length} 个相关 URL:`);
  urls.slice(0, 10).forEach((url, i) => {
    console.log(`  [${i + 1}] ${url.substring(0, 100)}...`);
  });
  
  return { weatherMatches, calendarMatches, urls };
}

/**
 * 深度搜索所有捕获数据中的实际天气/日历信息
 */
function deepSearchCapturedData() {
  console.log('\n' + '='.repeat(80));
  console.log('🔬 深度搜索捕获数据');
  console.log('='.repeat(80) + '\n');
  
  const data = JSON.parse(fs.readFileSync('deep_capture_1765992016563.json', 'utf8'));
  
  console.log(`总共捕获 ${data.dataAPIs.length} 个数据 API\n`);
  
  // 逐个分析每个API的响应
  const results = {
    weatherData: [],
    calendarData: [],
    potentialAPIs: []
  };
  
  data.dataAPIs.forEach((api, index) => {
    if (!api.data) return;
    
    const dataStr = JSON.stringify(api.data).toLowerCase();
    const url = api.url.toLowerCase();
    
    // 搜索天气相关数据
    if (dataStr.includes('temperature') || dataStr.includes('temp') ||
        dataStr.includes('weather') || dataStr.includes('天气') ||
        dataStr.includes('forecast') || dataStr.includes('humidity')) {
      
      console.log(`\n✨ [${index + 1}] 发现可能的天气数据！`);
      console.log(`URL: ${api.url.substring(0, 80)}...`);
      console.log(`数据大小: ${JSON.stringify(api.data).length} 字节`);
      
      results.weatherData.push({
        url: api.url,
        method: api.method,
        data: api.data,
        keywords: extractKeywords(api.data, ['temperature', 'temp', 'weather', 'humidity', 'wind'])
      });
    }
    
    // 搜索日历/农历数据
    if (dataStr.includes('lunar') || dataStr.includes('农历') ||
        dataStr.includes('calendar') || dataStr.includes('日历') ||
        dataStr.includes('节气') || dataStr.includes('zodiac')) {
      
      console.log(`\n✨ [${index + 1}] 发现可能的日历数据！`);
      console.log(`URL: ${api.url.substring(0, 80)}...`);
      console.log(`数据大小: ${JSON.stringify(api.data).length} 字节`);
      
      results.calendarData.push({
        url: api.url,
        method: api.method,
        data: api.data,
        keywords: extractKeywords(api.data, ['lunar', 'calendar', '农历', '节气', 'zodiac'])
      });
    }
    
    // 记录所有看起来像数据API的端点
    if (url.includes('service') || url.includes('api') || url.includes('feed')) {
      results.potentialAPIs.push({
        url: api.url,
        method: api.method,
        hasData: !!api.data,
        size: api.data ? JSON.stringify(api.data).length : 0
      });
    }
  });
  
  return results;
}

/**
 * 提取包含关键词的数据片段
 */
function extractKeywords(data, keywords) {
  const found = [];
  const dataStr = JSON.stringify(data, null, 2);
  
  keywords.forEach(keyword => {
    const regex = new RegExp(`"[^"]*${keyword}[^"]*"\\s*:\\s*[^,}]+`, 'gi');
    const matches = dataStr.match(regex);
    if (matches) {
      found.push(...matches.slice(0, 3)); // 只取前3个
    }
  });
  
  return found;
}

/**
 * 构建反向工程的 API
 */
async function buildProxyAPI(results) {
  console.log('\n' + '='.repeat(80));
  console.log('🏗️  构建代理 API');
  console.log('='.repeat(80) + '\n');
  
  const proxyFunctions = [];
  
  // 如果找到了包含天气数据的API
  if (results.weatherData.length > 0) {
    console.log(`✅ 找到 ${results.weatherData.length} 个天气相关 API`);
    
    results.weatherData.forEach((item, i) => {
      console.log(`\n[${i + 1}] ${item.url.substring(0, 80)}...`);
      console.log(`关键词预览:`);
      item.keywords.slice(0, 5).forEach(kw => console.log(`  - ${kw}`));
      
      // 生成代理函数
      const funcCode = generateProxyFunction(item, 'weather', i + 1);
      proxyFunctions.push(funcCode);
    });
  } else {
    console.log('⚠️  未找到直接的天气数据');
  }
  
  // 如果找到了包含日历数据的API
  if (results.calendarData.length > 0) {
    console.log(`\n✅ 找到 ${results.calendarData.length} 个日历相关 API`);
    
    results.calendarData.forEach((item, i) => {
      console.log(`\n[${i + 1}] ${item.url.substring(0, 80)}...`);
      console.log(`关键词预览:`);
      item.keywords.slice(0, 5).forEach(kw => console.log(`  - ${kw}`));
      
      const funcCode = generateProxyFunction(item, 'calendar', i + 1);
      proxyFunctions.push(funcCode);
    });
  } else {
    console.log('\n⚠️  未找到直接的日历数据');
  }
  
  // 保存代理函数
  if (proxyFunctions.length > 0) {
    const code = `const axios = require('axios');\n\n` + proxyFunctions.join('\n\n');
    fs.writeFileSync('stolen-apis.js', code);
    console.log('\n💾 代理函数已保存到 stolen-apis.js');
  }
  
  // 列出所有潜在的API端点供参考
  console.log('\n📋 所有潜在的数据 API:');
  results.potentialAPIs.slice(0, 10).forEach((api, i) => {
    console.log(`\n[${i + 1}] ${api.method} ${api.url.substring(0, 80)}...`);
    console.log(`    数据: ${api.hasData ? `${api.size} 字节` : '无'}`);
  });
}

/**
 * 生成代理函数代码
 */
function generateProxyFunction(apiInfo, type, index) {
  const url = new URL(apiInfo.url);
  const params = Object.fromEntries(url.searchParams);
  
  let code = `/**\n * ${type === 'weather' ? '天气' : '日历'} API ${index}\n`;
  code += ` * URL: ${apiInfo.url}\n */\n`;
  code += `async function get${type.charAt(0).toUpperCase() + type.slice(1)}${index}(`;
  
  // 添加参数
  const paramNames = Object.keys(params).filter(k => 
    !k.includes('apikey') && !k.includes('activityId') && !k.includes('User')
  );
  code += paramNames.map(p => `${p} = '${params[p]}'`).join(', ');
  code += `) {\n`;
  code += `  const response = await axios.get('${url.origin}${url.pathname}', {\n`;
  code += `    params: {\n`;
  
  Object.keys(params).forEach(key => {
    if (paramNames.includes(key)) {
      code += `      ${key}: ${key},\n`;
    } else {
      code += `      ${key}: '${params[key]}',\n`;
    }
  });
  
  code += `    },\n`;
  code += `    headers: {\n`;
  code += `      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',\n`;
  code += `      'Accept': 'application/json'\n`;
  code += `    }\n`;
  code += `  });\n`;
  code += `  return response.data;\n`;
  code += `}\n`;
  
  return code;
}

/**
 * 测试通过配置API获取组件数据
 */
async function testConfigBasedApproach() {
  console.log('\n' + '='.repeat(80));
  console.log('🧪 测试基于配置的方法');
  console.log('='.repeat(80) + '\n');
  
  try {
    // 获取配置
    const targetScope = {
      audienceMode: "adult",
      locale: {
        content: { language: "zh", market: "cn" },
        display: { language: "zh", market: "cn" }
      },
      deviceFormFactor: "desktop",
      platform: "web",
      pageType: "hp"
    };
    
    console.log('📡 请求配置 API...');
    const configResponse = await axios.get('https://assets.msn.cn/resolver/api/resolve/v3/config/', {
      params: {
        expType: 'AppConfig',
        expInstance: 'default',
        apptype: 'homePage',
        v: '20251218.31',
        targetScope: JSON.stringify(targetScope)
      }
    });
    
    console.log('✅ 配置获取成功');
    
    // 尝试从配置中找到天气和日历的实际数据端点
    const configStr = JSON.stringify(configResponse.data);
    
    // 搜索可能的数据URL模式
    const dataUrlPatterns = [
      /weatherapi/gi,
      /weather.*service/gi,
      /calendar.*api/gi,
      /lunar.*api/gi
    ];
    
    console.log('\n🔍 在配置中搜索数据端点...');
    dataUrlPatterns.forEach(pattern => {
      const matches = configStr.match(pattern);
      if (matches) {
        console.log(`  找到模式 ${pattern}: ${matches.length} 处`);
      }
    });
    
  } catch (error) {
    console.error('❌ 错误:', error.message);
  }
}

/**
 * 主函数
 */
async function main() {
  console.log('🚀 开始提取真实数据...\n');
  
  // 1. 分析配置API
  const configAnalysis = analyzeConfigAPI();
  
  // 2. 深度搜索捕获数据
  const searchResults = deepSearchCapturedData();
  
  // 3. 构建代理API
  await buildProxyAPI(searchResults);
  
  // 4. 测试基于配置的方法
  await testConfigBasedApproach();
  
  // 5. 生成总结报告
  console.log('\n' + '='.repeat(80));
  console.log('📊 总结报告');
  console.log('='.repeat(80));
  console.log(`\n天气数据源: ${searchResults.weatherData.length} 个`);
  console.log(`日历数据源: ${searchResults.calendarData.length} 个`);
  console.log(`潜在API: ${searchResults.potentialAPIs.length} 个`);
  
  if (searchResults.weatherData.length === 0 && searchResults.calendarData.length === 0) {
    console.log('\n⚠️  结论: 未在捕获数据中找到直接的天气/日历数据');
    console.log('\n💡 建议：');
    console.log('   1. 天气和日历数据可能通过客户端 JavaScript 动态生成');
    console.log('   2. 或者需要特定的用户交互才能触发数据加载');
    console.log('   3. 考虑分析 JavaScript 文件或使用第三方 API');
  } else {
    console.log('\n✅ 成功提取数据源！查看 stolen-apis.js');
  }
  
  console.log('\n' + '='.repeat(80));
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { analyzeConfigAPI, deepSearchCapturedData, buildProxyAPI };
