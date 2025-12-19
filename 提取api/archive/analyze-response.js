const fs = require('fs');
const axios = require('axios');

/**
 * 分析捕获的 API 数据，提取可复用的接口
 */
class APIAnalyzer {
  constructor(captureFile) {
    this.data = JSON.parse(fs.readFileSync(captureFile, 'utf8'));
    this.weatherAPIs = [];
    this.calendarAPIs = [];
    this.otherAPIs = [];
  }

  /**
   * 分类和分析 API
   */
  analyze() {
    console.log('🔍 开始分析捕获的 API...\n');

    this.data.responses.forEach(response => {
      const url = response.url;
      const urlLower = url.toLowerCase();

      // 分类
      if (urlLower.includes('weather') || urlLower.includes('天气')) {
        this.weatherAPIs.push(this.analyzeAPI(response));
      } else if (urlLower.includes('calendar') || urlLower.includes('lunar') || 
                 urlLower.includes('日历') || urlLower.includes('农历')) {
        this.calendarAPIs.push(this.analyzeAPI(response));
      } else {
        this.otherAPIs.push(this.analyzeAPI(response));
      }
    });

    this.printResults();
    this.generateAPICode();
  }

  /**
   * 分析单个 API
   */
  analyzeAPI(response) {
    const url = new URL(response.url);
    const request = this.data.requests.find(r => r.url === response.url);

    return {
      name: this.guessAPIName(response.url),
      baseURL: `${url.protocol}//${url.host}`,
      path: url.pathname,
      fullURL: response.url,
      method: request?.method || 'GET',
      queryParams: Object.fromEntries(url.searchParams),
      headers: this.filterHeaders(request?.headers || {}),
      responseStatus: response.status,
      responseType: response.contentType,
      responseData: response.data,
      responseStructure: this.analyzeStructure(response.data)
    };
  }

  /**
   * 猜测 API 名称
   */
  guessAPIName(url) {
    const urlLower = url.toLowerCase();
    if (urlLower.includes('weather')) return 'Weather API';
    if (urlLower.includes('calendar')) return 'Calendar API';
    if (urlLower.includes('lunar')) return 'Lunar API';
    if (urlLower.includes('forecast')) return 'Forecast API';
    if (urlLower.includes('current')) return 'Current Weather API';
    return 'Unknown API';
  }

  /**
   * 过滤敏感请求头
   */
  filterHeaders(headers) {
    const important = ['user-agent', 'accept', 'accept-language', 'content-type', 
                       'referer', 'origin', 'accept-encoding'];
    const filtered = {};
    important.forEach(key => {
      if (headers[key]) {
        filtered[key] = headers[key];
      }
    });
    return filtered;
  }

  /**
   * 分析响应数据结构
   */
  analyzeStructure(data) {
    if (!data) return null;
    if (typeof data !== 'object') return typeof data;

    const structure = {};
    for (const key in data) {
      const value = data[key];
      if (Array.isArray(value)) {
        structure[key] = `Array[${value.length}]`;
        if (value.length > 0) {
          structure[key + '_sample'] = this.analyzeStructure(value[0]);
        }
      } else if (typeof value === 'object' && value !== null) {
        structure[key] = this.analyzeStructure(value);
      } else {
        structure[key] = typeof value;
      }
    }
    return structure;
  }

  /**
   * 打印分析结果
   */
  printResults() {
    console.log('='.repeat(80));
    console.log('🌤️  天气 API 分析');
    console.log('='.repeat(80));
    this.weatherAPIs.forEach((api, i) => {
      console.log(`\n[${i + 1}] ${api.name}`);
      console.log(`URL: ${api.fullURL}`);
      console.log(`方法: ${api.method}`);
      console.log(`参数: ${JSON.stringify(api.queryParams, null, 2)}`);
      console.log(`响应状态: ${api.responseStatus}`);
      console.log(`数据结构: ${JSON.stringify(api.responseStructure, null, 2).substring(0, 300)}`);
    });

    console.log('\n' + '='.repeat(80));
    console.log('📅 日历 API 分析');
    console.log('='.repeat(80));
    this.calendarAPIs.forEach((api, i) => {
      console.log(`\n[${i + 1}] ${api.name}`);
      console.log(`URL: ${api.fullURL}`);
      console.log(`方法: ${api.method}`);
      console.log(`参数: ${JSON.stringify(api.queryParams, null, 2)}`);
      console.log(`响应状态: ${api.responseStatus}`);
      console.log(`数据结构: ${JSON.stringify(api.responseStructure, null, 2).substring(0, 300)}`);
    });
  }

  /**
   * 生成可用的 API 代码
   */
  generateAPICode() {
    console.log('\n' + '='.repeat(80));
    console.log('💻 生成 API 调用代码');
    console.log('='.repeat(80));

    let code = '// 自动生成的 API 调用代码\n';
    code += 'const axios = require(\'axios\');\n\n';

    // 生成天气 API 代码
    if (this.weatherAPIs.length > 0) {
      code += '// ===== 天气 API =====\n\n';
      this.weatherAPIs.forEach((api, i) => {
        code += this.generateFunctionCode(api, `getWeather${i + 1}`);
      });
    }

    // 生成日历 API 代码
    if (this.calendarAPIs.length > 0) {
      code += '\n// ===== 日历 API =====\n\n';
      this.calendarAPIs.forEach((api, i) => {
        code += this.generateFunctionCode(api, `getCalendar${i + 1}`);
      });
    }

    // 保存代码
    fs.writeFileSync('extracted-apis.js', code);
    console.log('\n✅ API 代码已保存到: extracted-apis.js');

    // 生成使用示例
    this.generateUsageExample();
  }

  /**
   * 生成单个函数代码
   */
  generateFunctionCode(api, functionName) {
    const params = Object.keys(api.queryParams);
    const paramStr = params.length > 0 ? params.join(', ') : '';
    
    let code = `/**\n * ${api.name}\n * URL: ${api.fullURL}\n */\n`;
    code += `async function ${functionName}(${paramStr}) {\n`;
    code += `  try {\n`;
    code += `    const response = await axios({\n`;
    code += `      method: '${api.method}',\n`;
    code += `      url: '${api.baseURL}${api.path}',\n`;
    
    if (params.length > 0) {
      code += `      params: {\n`;
      params.forEach(param => {
        code += `        ${param}: ${param},\n`;
      });
      code += `      },\n`;
    }
    
    code += `      headers: ${JSON.stringify(api.headers, null, 8)}\n`;
    code += `    });\n`;
    code += `    return response.data;\n`;
    code += `  } catch (error) {\n`;
    code += `    console.error('API 错误:', error.message);\n`;
    code += `    throw error;\n`;
    code += `  }\n`;
    code += `}\n\n`;

    return code;
  }

  /**
   * 生成使用示例
   */
  generateUsageExample() {
    let example = '// 使用示例\n\n';
    example += '// 1. 引入生成的 API 函数\n';
    example += 'const { getWeather1, getCalendar1 } = require(\'./extracted-apis\');\n\n';
    example += '// 2. 调用 API\n';
    example += 'async function main() {\n';
    
    if (this.weatherAPIs.length > 0) {
      const params = Object.keys(this.weatherAPIs[0].queryParams);
      const exampleParams = params.map(p => `'示例值'`).join(', ');
      example += `  const weather = await getWeather1(${exampleParams});\n`;
      example += `  console.log(weather);\n\n`;
    }
    
    if (this.calendarAPIs.length > 0) {
      const params = Object.keys(this.calendarAPIs[0].queryParams);
      const exampleParams = params.map(p => `'示例值'`).join(', ');
      example += `  const calendar = await getCalendar1(${exampleParams});\n`;
      example += `  console.log(calendar);\n`;
    }
    
    example += '}\n\n';
    example += 'main();\n';

    fs.writeFileSync('usage-example.js', example);
    console.log('✅ 使用示例已保存到: usage-example.js\n');
  }
}

/**
 * 命令行使用
 */
if (require.main === module) {
  const captureFiles = fs.readdirSync('.').filter(f => f.startsWith('msn_api_capture_'));
  
  if (captureFiles.length === 0) {
    console.log('❌ 未找到捕获文件！请先运行: npm run capture');
    process.exit(1);
  }

  // 使用最新的捕获文件
  captureFiles.sort().reverse();
  const latestFile = captureFiles[0];
  
  console.log(`📂 分析文件: ${latestFile}\n`);
  
  const analyzer = new APIAnalyzer(latestFile);
  analyzer.analyze();
}

module.exports = APIAnalyzer;
