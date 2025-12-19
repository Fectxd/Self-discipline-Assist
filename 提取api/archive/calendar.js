/**
 * 日历功能模块
 * 提供中国农历、节假日、节气等信息
 */

/**
 * 获取日历信息（包括农历、节假日等）
 * @param {string} date - 日期，格式：YYYY-MM-DD，默认今天
 * @returns {Promise<Object>} 日历数据
 */
async function getCalendar(date = null) {
  try {
    const targetDate = date ? new Date(date) : new Date();
    
    // 格式化日期
    const year = targetDate.getFullYear();
    const month = String(targetDate.getMonth() + 1).padStart(2, '0');
    const day = String(targetDate.getDate()).padStart(2, '0');
    const dateStr = `${year}-${month}-${day}`;
    
    // 获取星期
    const weekDays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    const weekDay = weekDays[targetDate.getDay()];
    
    return {
      success: true,
      date: dateStr,
      year,
      month,
      day,
      weekDay,
      lunar: await getLunarDate(targetDate),
      holiday: getHoliday(month, day),
      solarTerm: getSolarTerm(month, day),
      timestamp: new Date().toISOString()
    };
    
  } catch (error) {
    console.error('获取日历失败:', error.message);
    return {
      success: false,
      error: error.message
    };
  }
}

/**
 * 获取农历信息
 * 简化版本，实际应用建议使用专业的农历库如 lunar-javascript
 */
async function getLunarDate(date) {
  // 这里可以集成第三方农历API或使用 lunar-javascript 库
  // 示例使用简单的返回格式
  
  // 推荐使用的库：
  // npm install lunar-javascript
  // const {Solar, Lunar} = require('lunar-javascript');
  
  return {
    year: '甲辰年',  // 示例数据
    month: '腊月',
    day: '初八',
    zodiac: '龙',
    note: '建议使用 lunar-javascript 库获取准确的农历信息'
  };
}

/**
 * 获取节假日信息
 */
function getHoliday(month, day) {
  const holidays = {
    '01-01': '元旦',
    '02-14': '情人节',
    '03-08': '妇女节',
    '03-12': '植树节',
    '04-04': '清明节',  // 实际日期会变动
    '04-05': '清明节',
    '05-01': '劳动节',
    '05-04': '青年节',
    '06-01': '儿童节',
    '07-01': '建党节',
    '08-01': '建军节',
    '09-10': '教师节',
    '10-01': '国庆节',
    '12-25': '圣诞节'
  };
  
  const key = `${month}-${day}`;
  return holidays[key] || null;
}

/**
 * 获取二十四节气
 */
function getSolarTerm(month, day) {
  // 2024年节气日期（每年略有不同）
  const solarTerms = {
    '01-05': '小寒', '01-20': '大寒',
    '02-04': '立春', '02-19': '雨水',
    '03-05': '惊蛰', '03-20': '春分',
    '04-04': '清明', '04-19': '谷雨',
    '05-05': '立夏', '05-20': '小满',
    '06-05': '芒种', '06-21': '夏至',
    '07-06': '小暑', '07-22': '大暑',
    '08-07': '立秋', '08-22': '处暑',
    '09-07': '白露', '09-22': '秋分',
    '10-08': '寒露', '10-23': '霜降',
    '11-07': '立冬', '11-22': '小雪',
    '12-06': '大雪', '12-21': '冬至'
  };
  
  const key = `${month}-${day}`;
  return solarTerms[key] || null;
}

/**
 * 获取月历信息
 * @param {number} year - 年份
 * @param {number} month - 月份
 */
function getMonthCalendar(year, month) {
  const firstDay = new Date(year, month - 1, 1);
  const lastDay = new Date(year, month, 0);
  const daysInMonth = lastDay.getDate();
  const startWeekDay = firstDay.getDay();
  
  const calendar = [];
  let week = new Array(7).fill(null);
  
  // 填充第一周之前的空白
  for (let i = 0; i < startWeekDay; i++) {
    week[i] = null;
  }
  
  // 填充日期
  for (let day = 1; day <= daysInMonth; day++) {
    const weekDay = (startWeekDay + day - 1) % 7;
    week[weekDay] = {
      day,
      date: `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`,
      holiday: getHoliday(String(month).padStart(2, '0'), String(day).padStart(2, '0'))
    };
    
    if (weekDay === 6 || day === daysInMonth) {
      calendar.push([...week]);
      week = new Array(7).fill(null);
    }
  }
  
  return {
    success: true,
    year,
    month,
    daysInMonth,
    weeks: calendar
  };
}

module.exports = {
  getCalendar,
  getMonthCalendar,
  getLunarDate,
  getHoliday,
  getSolarTerm
};
