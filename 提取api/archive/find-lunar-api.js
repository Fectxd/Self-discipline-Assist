const fs = require('fs');

// 读取deep_capture文件
const data = JSON.parse(fs.readFileSync('deep_capture_1765992016563.json', 'utf8'));

console.log('总共捕获了', data.dataAPIs.length, '个API\n');

// 查找包含农历数据的API
data.dataAPIs.forEach((api, index) => {
    if (!api.data) {
        console.log(`API ${index}: 没有data字段`);
        return;
    }
    
    const responseStr = JSON.stringify(api.data);
    
    if (responseStr.includes('LunarYear') || responseStr.includes('lunar')) {
        console.log(`\n======= API ${index} =======`);
        console.log('URL:', api.url);
        console.log('响应大小:', Math.round(responseStr.length / 1024), 'KB');
        console.log('包含关键字: LunarYear 或 lunar');
        
        // 尝试找到具体的数据结构
        try {
            const resp = api.data;
            if (resp.extensions) {
                console.log('包含 extensions:');
                Object.keys(resp.extensions).forEach(key => {
                    const extStr = JSON.stringify(resp.extensions[key]);
                    if (extStr.includes('LunarYear') || extStr.includes('lunar')) {
                        console.log(`  - ${key} (包含农历数据)`);
                    }
                });
            }
        } catch (e) {
            console.log('解析错误:', e.message);
        }
    }
});

// 同时查找包含天气数据的API
console.log('\n\n======= 查找天气数据 =======');
data.dataAPIs.forEach((api, index) => {
    if (!api.data) return;
    const responseStr = JSON.stringify(api.data);
    
    if (responseStr.includes('weather') || responseStr.includes('temperature') || responseStr.includes('Temperature')) {
        console.log(`\nAPI ${index}:`, api.url.substring(0, 100));
        console.log('响应大小:', Math.round(responseStr.length / 1024), 'KB');
    }
});
