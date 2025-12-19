# MSN React 源码分析报告

## 📦 成功提取的Bundle文件

### 日历组件 (Rich Calendar Card)
- **文件**: `bundle-80-rich-calendar-card.bfcc0b279034ad916223.js`
- **大小**: 170.10 KB
- **特征**:
  - Webpack chunk: `["rich-calendar-card"]`
  - 主要模块ID: 22260, 35798
  - 组件名称: `RichCalendarCard`, `RichCalendarCardLogo`, `RichCalendarCardTemplate`

### 天气组件 (Weather Card WC)
- **文件**: `bundle-48-weather-card-wc.76ebf5490ea6ae213073.js`  
- **大小**: ~100-150 KB
- **特征**:
  - Webpack chunk: `["weather-card-wc"]`
  - 主要模块ID: 4218, 7014, 7332, 9299
  - 组件名称: `WeatherCardWC`, `WeatherCardWCTemplate`, `WeatherCardWCStyles`

---

## 🔍 关键代码发现

### 1. 日历组件结构

#### 主组件类 (RichCalendarCard)
```javascript
// 来自 bundle-80 line 1
class RichCalendarCard extends CustomElement {
    constructor() {
        // 使用 Web Components API
        // Observable 属性绑定
    }
    
    // 核心属性
    titleViewModel: {
        telemetry, href, calendarTitleDate
    }
    cardSize: OneU | OneHalfU | TwoU
    
    // 子组件
    - rich-calendar-card-title
    - rich-calendar-see-more  
    - rich-calendar-tips
    - rich-calendar-tab-countdown
    - rich-calendar-tab-current
    - rich-calendar-horoscope-selection
}
```

#### 数据结构
```javascript
// 日历数据格式 (line 1, 模拟数据)
{
    FocusedDayInfo: {
        Date: { Year, Month, Day },
        IsHoliday, IsWorkday, IsToday,
        FestivalNames: ["元旦"],
        Alias: "元旦",
        RichInfoMap: {
            宜: ["安床", "祭祀", ...],
            忌: ["安门", "栽种", ...]
        },
        DateTag: {
            LunarYear, LunarMonth, LunarDay,
            GanZhiYear, Animal, Constellation
        }
    },
    TodayInfo: { ... },
    DayInfoList: [ {...}, {...} ], // 14天数据
    HolidaySchedule: [ ... ]
}
```

#### 模板系统 (使用 lit-html)
```javascript
// 使用 P.qy`` tagged template
const W = P.qy`
<a class="calendar-title" 
   data-t="${e => e.titleViewModel?.telemetry}"
   target="_blank" 
   href="${e => e.titleViewModel?.href}"
   title="${e => e.titleViewModel?.calendarTitleDate}">
    <span>${e => e.titleViewModel?.calendarTitleDate}</span>
</a>`;
```

---

### 2. 天气组件结构

#### 主组件类 (WeatherCardWC)
```javascript
// 来自 bundle-48 line 233
class Y extends U.U { // Y 是混淆后的类名
    constructor() {
        // 初始化属性
        this.loadedExps = {};
        this.isActionMenuOpen = false;
        this.isAnimationsEnabled = true;
        this.cardSize = "full" | "half" | "large";
        
        // 组件状态
        this.weatherData = {};
        this.telemetryContext = {};
        this.minimap = undefined;
    }
    
    // 生命周期
    async experienceConnected() { ... }
    shadowDomPopulated() { ... }
    disconnectedCallback() { ... }
    
    // 核心方法
    extractFeedData() { ... }
    initDataConnector() { ... }
    loadLegacyCard() { ... }
}
```

#### 天气数据处理
```javascript
// 模块 4218 - 数据转换
function et(t, e) { // extractTransform?
    const {
        unit,              // 温度单位
        currentLocation,   // 当前位置
        currentCondition,  // 当前天气
        forecast,          // 预报数据
        alertsInfo,        // 预警信息
        nowcasting,        // 实时预报
        insights           // 天气洞察
    } = e;
    
    // 处理温度单位转换
    const it = f.Od.NONE; // NONE/FTOC/CTOF
    
    // 生成天气链接
    const lt = (0,n.fS)(g, ot, ct, st);
    
    // 构建组件属性
    t.weatherData = {
        link: lt,
        locationName: It,
        temperature: bt,
        precipitation: gt,
        aqi: mt,
        forecastData: Tt,
        hourlyForecast: kt,
        ...
    };
}
```

#### 地图组件集成
```javascript
// 迷你地图集成 (line 428)
t.minimap = {
    mapType: n,            // normalmap/雷达图等
    weatherData: e,
    cardConfig: {...config},
    isSmallCard: (0,d.cw)(t.cardSize),
    displayContent: t.displayContent,
    buildMapUrl: a,        // URL构建函数
    loadAfterTTVR: t.config.disableMinimapPreload
};
```

---

## 🏗️ 技术栈分析

### 前端框架
1. **不是标准React** - 而是使用 **Web Components + lit-html**
   - `@microsoft/fast-element` (类似 LitElement)
   - Tagged template literals `P.qy``
   - Shadow DOM
   
2. **状态管理**
   - 使用 `@observable` 装饰器
   - 属性观察者模式
   - 单向数据流

3. **样式系统**
   - CSS-in-JS (使用 `U.A``` tagged template)
   - Shadow DOM 样式隔离
   - 动态主题切换支持

### 构建工具
- **Webpack 5**
- **Babel** (转译到 ES5)
- **UglifyJS / Terser** (代码混淆)

---

## 📊 组件依赖关系

```
rich-calendar-card (主组件)
├── rich-calendar-card-title (标题)
├── rich-calendar-see-more (更多按钮)
├── rich-calendar-tips (提示图标)
├── rich-calendar-tab-countdown (倒计时标签)
├── rich-calendar-tab-current (当天信息)
├── rich-calendar-horoscope-selection (星座选择)
└── rich-calendar-star (星级评分)

weather-card-wc (主组件)
├── msft-weather-super-sd-card (超级卡片包装)
│   ├── weather-summary (天气摘要)
│   ├── weather-minimap-wc (迷你地图)
│   └── weather-video-entry-wc (视频入口)
├── responsive-sd-card (响应式卡片)
├── fluent-button (Fluent UI按钮)
├── fluent-anchor (Fluent UI链接)
└── fluent-switch (Fluent UI开关)
```

---

## 🔧 关键功能实现

### 1. 农历计算
```javascript
// DateTag 结构
{
    LunarYear: "2022",
    LunarMonth: "腊",
    LunarDay: "初十",
    GanZhiYear: "壬寅",  // 干支纪年
    Animal: "虎",        // 生肖
    Constellation: "摩羯座"
}
```

### 2. 宜忌数据
```javascript
RichInfoMap: {
    宜: ["安床", "祭祀", "祈福", ...],
    忌: ["安门", "栽种", "作灶", ...]
}
```

### 3. 温度单位转换
```javascript
function m(t, e) { // 温度转换
    let i = parseFloat(t);
    if (e === f.CTOF) {
        i = 1.8 * i + 32;  // 摄氏转华氏
    } else if (e === f.FTOC) {
        i = (i - 32) / 1.8; // 华氏转摄氏
    }
    return Math.round(i);
}
```

### 4. 天气图标映射
```javascript
const pt = (t, i) => W.E.getWeatherGlyphBySymbolOrSkyCode(
    t,  // symbol
    i,  // skycode
    et.skycodeIconPath,
    e.iconMap
);
```

---

## 📱 移动端适配

### 卡片尺寸系统
```javascript
// 支持的尺寸
cardSize: {
    "_1x_1y": "small",   // 1x1 小卡片
    "_1x_2y": "medium",  // 1x2 中卡片  
    "_1x_3y": "large",   // 1x3 大卡片
    "half": "small",
    "full": "medium"
}
```

### 响应式断点
```javascript
// 检测小卡片
isSmallCard: (0,d.cw)(t.cardSize)

// 启用超级Feed UX
enableSuperfeedUx: config.enableSuperfeedUx
```

---

## 🎨 主题系统

### 深色模式支持
```javascript
// 主题检测
this.isThemeDarkMode = (0,G.ud)();

// 监听系统主题变化
window.matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", this.ThemeChangeHandler);
```

### 动态背景
```javascript
weatherData.backgroundData: {
    animationSource: ...,  // 动画源
    textColor: "#FFFFFF",  // 文字颜色
    ...
}
```

---

## 🔐 遥测(Telemetry)集成

### 点击追踪
```javascript
// 每个可点击元素都有 data-t 属性
<a data-t="${e => e.titleViewModel?.telemetry}" ...>

// 遥测上下文
t.telemetryContext = (0,S.i)(
    t.telemetryObject,
    t.weatherData,
    t.strings,
    Nt
);
```

### 性能标记
```javascript
// TTVR (Time To Visually Ready)
this.fireTtvr = () => {
    (0,d.c)("WeatherCardWC.Ready", this.config.isDynamicFeed);
    this.markVisuallyReadyRaf();
};
```

---

## ⚠️ 代码提取难点

### 1. 高度混淆
- 变量名单字母 (t, e, i, o, n, r, a, s)
- 函数名混淆
- 模块ID数字化

### 2. 模块依赖复杂
- 92个bundle文件相互依赖
- 动态import()
- Webpack runtime

### 3. 缺少源映射
- 没有 .map 文件
- 无法还原原始代码结构

---

## 💡 移植建议

### 方案A: 直接使用编译后代码
**优点:**
- 开箱即用
- 包含所有功能

**缺点:**  
- 体积大 (~500KB)
- 无法定制
- 依赖MSN基础设施

### 方案B: 重写核心组件 ⭐推荐
**基于已提取的:**
1. 数据结构 - 直接复用API返回格式
2. 样式系统 - 复用CSS变量和布局
3. 功能逻辑 - 参考实现重写

**技术栈建议:**
```javascript
// React + TypeScript
import React from 'react';

interface CalendarData {
    focusedDayInfo: DayInfo;
    todayInfo: DayInfo;
    dayInfoList: DayInfo[];
}

const RichCalendar: React.FC<{data: CalendarData}> = ({data}) => {
    return (
        <div className="rich-calendar-card">
            <header>{data.todayInfo.alias}</header>
            <div className="yi-ji">
                <div>宜: {data.todayInfo.richInfoMap.宜.join('、')}</div>
                <div>忌: {data.todayInfo.richInfoMap.忌.join('、')}</div>
            </div>
        </div>
    );
};
```

### 方案C: 混合方案
- 使用MSN API获取数据
- 自定义UI组件
- 保留关键功能(农历、宜忌、星座)

---

## 📚 下一步行动

1. **反混淆工具**
   ```bash
   npm install -g webcrack
   webcrack bundle-80-rich-calendar-card.js -o calendar-deobfuscated/
   ```

2. **提取核心逻辑**
   - 日历计算算法
   - 天气数据转换
   - 农历转换函数

3. **API适配层**
   - 创建数据适配器
   - 处理API响应
   - 状态管理

4. **React组件封装**
   - 创建纯净的React组件
   - TypeScript类型定义
   - Props接口设计

---

## 🎯 结论

MSN使用的不是React,而是**Microsoft FAST Framework** (基于Web Components)。要在React Native移动应用中使用,建议:

1. **数据层**: 直接使用MSN Feed API (已成功提取)
2. **UI层**: 用React Native重写组件
3. **样式**: 参考MSN的CSS实现Fluent Design
4. **功能**: 提取核心算法逻辑重写

完整bundle文件已保存在 `frontend/react-source/` 目录,可以作为实现参考。
