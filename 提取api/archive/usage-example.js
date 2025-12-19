// 使用示例

// 1. 引入生成的 API 函数
const { getWeather1, getCalendar1 } = require('./extracted-apis');

// 2. 调用 API
async function main() {
  const weather = await getWeather1();
  console.log(weather);

  const calendar = await getCalendar1();
  console.log(calendar);
}

main();
