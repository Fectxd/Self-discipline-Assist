"use strict";(self.homePageWebpackChunks=self.homePageWebpackChunks||[]).push([["money-quote-vertical-watchlist"],{4968:function(t,e,i){i.d(e,{f:function(){return l}});var o=i(64187),s=i(74849),r=i(42792),n=i(99657),a=i(36452);const l=s.A.partial`position: relative; z-index: ${n.D};`;s.A`
    ${r.e}
    ${r.nH}

    ${(0,o.V)("grid")} :host {
        grid-template-rows: auto 1fr minMax(16px, auto);
        grid-template-columns: 100%;
        ${l}
    }

    .content {
        padding: 0 var(--sd-card-content-padding-inline, 16px);
        overflow: hidden;
    }

    ::slotted([slot="header"]) {
        grid-row: 1;
    }
    ::slotted([slot="footer"]) {
        grid-row: 3;
    }

    ::slotted([slot="image"]) {
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
    }

    /* Ensure neutral buttons have a stroke per the design */
    ::slotted(fluent-button[appearance="neutral"]),
    ::slotted(fluent-anchor[appearance="neutral"]) {
        border: 1px solid ${a.I2};
    }

    ::slotted(fluent-button[appearance="neutral"]:hover),
    ::slotted(fluent-anchor[appearance="neutral"]:hover) {
        border-color: ${a.mb};
    }

    ::slotted(fluent-button[appearance="neutral"]:active),
    ::slotted(fluent-anchor[appearance="neutral"]:active) {
        border-color: ${a.MY};
    }

    .header-overlay,
    .footer-overlay {
        position: absolute;
        background: rgba(255, 255, 255, 0.46);
        height: 100%;
        width: 100%;
        opacity: 0;
    }

    .header-overlay {
        grid-row: 1 / span 1;
    }

    .footer-overlay {
        grid-row: 3 / span 1;
    }

    .gradient {
        position: absolute;
        grid-row: 2 / span 1;
        height: 100%;
        width: 100%;
        opacity: 0;
        background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.46) 0%,
            rgba(255, 255, 255, 0) 22%,
            rgba(255, 255, 255, 0) 86%,
            rgba(255, 255, 255, 0.46) 100%
        );
    }

    @media (prefers-color-scheme: dark) {
        .header-overlay,
        .footer-overlay {
            background: rgba(0, 0, 0, 0.54);
        }

        .gradient {
            background: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.54) 0%,
                rgba(0, 0, 0, 0) 22%,
                rgba(0, 0, 0, 0) 86%,
                rgba(0, 0, 0, 0.54) 100%
            );
        }
    }

    :host([immersive-card]) .header-overlay,
    :host([immersive-card]) .footer-overlay,
    :host([immersive-card]) .gradient {
        opacity: 1;
    }
`.withBehaviors(r.kc)},6376:function(t,e,i){i.r(e),i.d(e,{MoneyInfoStockChart:function(){return v}});var o=i(56911),s=i(92011),r=i(60815),n=i(93468),a=i(65022),l=i(37918),d=i(27261);let h=class extends s.L{connected(){try{this.initializeChart()}catch(t){(0,n.vV)(a.npu,t?t.message:"Unknown error")}}initializeChart(){if(this.canvasEl){const t=(0,d.mZ)();this.canvasEl.width=this.width*t,this.canvasEl.height=this.height*t,this.ctx=this.canvasEl.getContext("2d"),this.ctx.scale(t,t),this.canvasEl.style.width=`${this.width}px`,this.canvasEl.style.height=`${this.height}px`,this.drawChart()}}shouldShowBaseline(){if("number"!=typeof this.baselinePrice)return!1;const t=Math.min(...this.prices),e=Math.max(...this.prices);if(t===e)return!0;const i=t>this.baselinePrice?t-this.baselinePrice:this.baselinePrice-e;return i/(i+(e-t))<.5}drawChart(){if(!this.prices)return;const t=this.prices.slice();this.shouldShowBaseline()&&t.push(this.baselinePrice);let e=Math.min(...t),i=Math.max(...t);e===i&&(e-=1,i+=1);const o=Math.round(1e4*(i-e))/1e4,s=Math.max(this.pricesMaxCount||0,this.prices.length),r=this.prices.length/s,n=this.width*(this.isFullWidth?1:r);this.ctx.beginPath(),this.ctx.moveTo(0,this.height-(this.prices[0]-e)/o*this.height);for(let t=1;t<this.prices.length;t++){const i=t/(this.prices.length-1)*n,s=this.height-(this.prices[t]-e)/o*this.height;this.ctx.lineTo(i,s)}this.ctx.lineWidth=1.2,this.ctx.strokeStyle=this.lineColor,this.ctx.stroke(),this.ctx.lineTo(this.width,this.height),this.ctx.lineTo(0,this.height),this.ctx.closePath(),this.ctx.save(),this.ctx.clip();const a=this.ctx.createLinearGradient(0,0,0,this.height);a.addColorStop(0,`${this.lineColor}4D`),a.addColorStop(1,`${this.lineColor}00`),this.ctx.fillStyle=a,this.ctx.fillRect(0,0,n,this.height),this.ctx.restore(),this.ctx.beginPath(),this.ctx.moveTo(0,this.height-(this.baselinePrice-e)/o*this.height),this.ctx.lineTo(this.width,this.height-(this.baselinePrice-e)/o*this.height),this.ctx.strokeStyle=this.baselineColor,this.ctx.setLineDash(this.lineDash||[5,5]),this.ctx.stroke()}};(0,o.Cg)([r.sH],h.prototype,"prices",void 0),(0,o.Cg)([r.sH],h.prototype,"baselinePrice",void 0),(0,o.Cg)([r.sH],h.prototype,"width",void 0),(0,o.Cg)([r.sH],h.prototype,"height",void 0),(0,o.Cg)([r.sH],h.prototype,"lineColor",void 0),(0,o.Cg)([r.sH],h.prototype,"baselineColor",void 0),(0,o.Cg)([r.sH],h.prototype,"lineDash",void 0),h=(0,o.Cg)([l.x],h);const c=i(74849).A` 
`;var u=i(96950),g=i(60402);const p=u.qy`<template><canvas ${(0,g.K)("canvasEl")}></canvas></template>`;let v=class extends h{};v=(0,o.Cg)([(0,s.E)({name:"money-info-stock-chart",template:p,styles:c,shadowOptions:{delegatesFocus:!0}})],v)},7755:function(t,e,i){i.r(e),i.d(e,{QuoteItem:function(){return N}});var o=i(56911),s=i(73638),r=i(37918),n=i(60815);let a=class extends s.z{get isNotfVisible(){return Boolean(this.viewModel.notification)}get isRotationVisible(){return Boolean(this.viewModel.notification)&&Boolean(this.showNotificationText)}get chartCntrStyle(){var t,e;return`width: ${null===(t=this.viewModel.chartData)||void 0===t?void 0:t.chartWidth}px; height: ${null===(e=this.viewModel.chartData)||void 0===e?void 0:e.chartHeight}px`}get chartData(){return this.viewModel.chartData}contentTemplate(t,e,i){return this.isSeeMore?t:"_1x_1y"===this.viewModel.cardSize?e:i}onChartDictChange(t){var e;const i=null===(e=this.viewModel)||void 0===e?void 0:e.chartData;var o,s;i&&t&&(i.chartSeries=null==t||null===(o=t[this.viewModel.id])||void 0===o||null===(o=o.chartData)||void 0===o?void 0:o.series,i.chartBaseline=null==t||null===(s=t[this.viewModel.id])||void 0===s?void 0:s.pricePreviousClose,this.viewModel={...this.viewModel,chartData:i})}onQuoteItemDictChange(t){var e,i,o;const s=null===(e=this.viewModel)||void 0===e?void 0:e.id,r=null==t||null===(i=t[s])||void 0===i?void 0:i.price,n=null==t||null===(o=t[s])||void 0===o?void 0:o.changePcnt;r&&n&&(this.viewModel={...this.viewModel,price:r,pricePctChange:n})}onShowNotificationTextChange(t){this.showNotificationText=t}stockNames(t){const{showStockNameOnFirstLine:e,shortName:i,displayName:o,symbol:s}=this.viewModel;return e?[i||o||"",s||""][t]:[s||"",i||o||""][t]}};(0,o.Cg)([n.sH],a.prototype,"showNotificationText",void 0),a=(0,o.Cg)([r.x],a);var l=i(92011),d=i(4968),h=i(43103),c=i(74849),u=i(48751),g=i(4283);const p=c.A` .card .disp-name{color:${u.l}}.see-more-text{color:#5FAFFF}`,v=c.A` .quote-item{display:grid;grid-gap:8px;grid-template-columns:var(--quote-grid-template-columns);column-gap:8px;background:var(--quote-background);border-radius:4px;padding:5px 10px;box-sizing:border-box;text-decoration:none;color:${u.l};
        outline-offset: -2px;
        ${d.f}}.quote-item.large{padding:10px 10px}.quote-item.card{height:66px;width:116px;border-radius:4px;grid-gap:6px;padding:6px}.quote-item.card .notf{max-width:104px;display:flex}.quote-item.card .notf-text{margin:0 4px}.top{height:12px;width:104px;display:flex;justify-content:space-between;align-items:center}.top-left{display:inline-block;width:calc(100% - 20px);font-size:10px}.icn{display:flex;align-items:center}.icn img{width:24px;height:24px}.middle{height:14px;display:flex;justify-content:space-between;align-items:center}.middle-right .prct-change{font-size:10px}.quote-item:hover{background:var(--quote-hover-background)}.quote-item:active{background:var(--quote-active-background)}.right{text-align:end}.notf-icon{width:12px;height:12px}.symb,.prct-change{font-size:var(--type-ramp-minus-1-font-size,12px);line-height:var(--type-ramp-minus-1-line-height,16px);font-weight:600}.symb{display:flex;align-items:center;column-gap:4px;white-space:nowrap}.symb-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0}.disp-name,.price,.notf-text{font-size:var(--type-ramp-minus-2-font-size,10px);line-height:var(--type-ramp-minus-2-line-height,14px);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.notf{font-weight:600}.add-button{display:flex;align-items:center}.price{font-weight:600}.disp-name{color:${u.l}}.card .disp-name{font-weight:600}.see-more-container{height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}.see-more-text{font-size:var(--type-ramp-minus-1-font-size,12px);line-height:var(--type-ramp-minus-1-line-height,16px);color:${g.OS};
    }
`.withBehaviors(new h.N(null,p));var f=i(96950),m=i(91640),x=i(17254);const b=f.qy`<div class="notf-text" style="color: ${t=>t.viewModel.notification.accentColor}">${t=>t.viewModel.notification.shortHeadline}</div>`,w=f.qy`<img class="notf-icon" src="${t=>t.viewModel.notification.iconUrl}" alt=${t=>t.viewModel.displayName} />`,$=f.qy`<div class="notf">${w} ${b}</div>`,y=f.qy`<money-info-stock-chart :width=${t=>{var e;return null===(e=t.chartData)||void 0===e?void 0:e.chartWidth}} :height=${t=>{var e;return null===(e=t.chartData)||void 0===e?void 0:e.chartHeight}} :prices=${t=>{var e;return null===(e=t.chartData)||void 0===e?void 0:e.chartSeries}} :baselinePrice=${t=>{var e;return null===(e=t.chartData)||void 0===e?void 0:e.chartBaseline}} :lineColor=${t=>{var e;return null===(e=t.chartData)||void 0===e?void 0:e.chartFillColor}} :baselineColor=${t=>{var e;return null===(e=t.chartData)||void 0===e?void 0:e.baselineFillColor}} :pricesMaxCount=${()=>40}></money-info-stock-chart>`,k=f.qy`<div style="${t=>t.chartCntrStyle}">${(0,m.z)(t=>{var e;return(null===(e=t.viewModel.chartData)||void 0===e||null===(e=e.chartSeries)||void 0===e?void 0:e.length)>0},y)}</div>`,C=f.qy` ${(0,m.z)(t=>t.viewModel.followButton,f.qy`<div class="add-button"><follow-button :viewModel="${t=>{var e;return null===(e=t.viewModel.followButton)||void 0===e?void 0:e.viewModel}}"></follow-button></div>`)}
`,z=t=>f.qy`<div class="disp-name">${t}</div>`,M=f.qy`<a class="quote-item card" href="${t=>t.viewModel.quoteUrl}" title="${t=>t.viewModel.tooltipText}" target="_blank" data-t="${t=>t.viewModel.telemetryTag}"><div class="top"><div class="top-left">${t=>z(t.stockNames(0))}</div>${C}</div><div class="middle"><div class="middle-left"><div class="price">${t=>t.viewModel.price}</div></div><div class="middle-right"><div class="prct-change" style="color: ${t=>t.viewModel.accentColor}">${t=>t.viewModel.pricePctChange}</div></div></div><div class="bottom">${t=>t.isRotationVisible?$:k}</div></a>`,q=f.qy`<div class="icn"><img src="${t=>t.viewModel.iconUrl}" alt="${t=>t.viewModel.displayName}" loading=lazy /></div>`,T=f.qy`<a class="quote-item ${t=>"_1x_3y"===t.viewModel.cardSize?"large":""}" style="${t=>t.viewModel.gridTemplateColumns+(t=>{const e=(t-40)/2+5;return` height:${t}px; padding-top: ${e}px; padding-bottom: ${e}px; `})(t.viewModel.quoteHeight)}" href="${t=>t.viewModel.quoteUrl}" title="${t=>t.viewModel.tooltipText}" target="_blank" data-t="${t=>t.viewModel.telemetryTag}">${(0,m.z)(t=>t.viewModel.isIconVisible&&t.viewModel.iconUrl,q)}<div class="left"><div class="symb"><div class="symb-text">${t=>t.stockNames(0)}</div>${(0,m.z)(t=>t.isNotfVisible,w)}</div><div class="left-bottom">${(0,m.z)(t=>t.isNotfVisible,b)} ${(0,m.z)(t=>!t.isNotfVisible,f.qy`${t=>z(t.stockNames(1))}`)}</div></div>${(0,m.z)(t=>t.viewModel.isChartDataReady,f.qy`<div class="chart">${k}</div>`)}<div class="right"><div class="prct-change" style="color: ${t=>t.viewModel.accentColor}">&lrm;${t=>t.viewModel.pricePctChange}&lrm;</div><div class="price">${t=>t.viewModel.price}</div></div>${C}</a>`,F=f.qy` ${t=>t.contentTemplate(_,M,T)}
`,_=f.qy`<a class="quote-item card" href="${t=>t.viewModel.seeMoreLink}" title="${t=>t.viewModel.seeMoreText}" target="_blank" data-t="${t=>t.viewModel.telemetryTag}"><div class="see-more-container"><div aria-hidden="true" role="presentation"><img src="${(0,x.rA)().StaticsUrl}/latest/money/icons/SeeMoreArrow.svg" alt=${t=>t.viewModel.seeMoreText}></div><div class="see-more-text">${t=>t.viewModel.seeMoreText}</div></div></a>`,S=f.qy` ${(0,m.z)(t=>t&&null!=t.viewModel,F)}
`;let N=class extends a{};N=(0,o.Cg)([(0,l.E)({name:"quote-item",template:S,styles:v,shadowOptions:{delegatesFocus:!0}})],N)},31347:function(t,e,i){i.d(e,{m:function(){return n}});var o=i(56911),s=i(60815),r=i(92011);class n extends r.L{}(0,o.Cg)([s.sH],n.prototype,"viewModel",void 0)},38650:function(t,e,i){i.d(e,{j:function(){return s}});var o=i(81725);class s extends o.IB{async transform(t){return{viewModel:await this.getViewModel(t)}}followClickHandler(t,e,i){this.transformerProvider.followClickHandler&&this.transformerProvider.followClickHandler(t,!0,e,i)}getViewModel(t){return{followClickHandler:()=>this.followClickHandler(t.itemId,t.itemName,t.itemUrl),isFollowed:t.isFollowed,itemId:t.itemId,size:t.size,telemetryTag:t.telemetryTag,followButtonTooltip:t.followButtonTooltip}}}},42792:function(t,e,i){i.d(e,{R7:function(){return v},e:function(){return g},kc:function(){return p},nH:function(){return u}});var o=i(57416),s=i(55153),r=i(95239),n=i(26920),a=i(48751),l=i(64187),d=i(22131),h=i(74849),c=i(50882);const u=h.A`
    :host([size][card-fill-color="light-blue"]) {
        background: linear-gradient(140.53deg, #f0e1f7 9.32%, #cddfff 58.45%);
    }

    :host([size][card-fill-color="light-purple"]) {
        background: linear-gradient(139.03deg, #ffe9e1 5.05%, #f0e1f7 51.71%);
    }

    :host([size][card-fill-color="light-sky"]) {
        background: linear-gradient(140.53deg, #f5f7e1 9.32%, #cdf0ff 58.45%);
    }

    :host([size][card-fill-color="light-pink"]) {
        background: linear-gradient(139.03deg, #fff1cd 5.05%, #ffe8ed 51.71%);
    }

    :host([size][card-fill-color="light-yellow"]) {
        background: linear-gradient(140.53deg, #fffedc 9.32%, #fff4d7 58.45%);
    }

    :host([size][card-fill-color="light-bluebird"]) {
        background: linear-gradient(139.03deg, #e1e6f8 5.05%, #ebfefb 51.71%);
    }

    :host([size][card-fill-color="light-orange"]) {
        background: linear-gradient(140.56deg, #f0e1f7 5.42%, #ffe9e1 51.68%);
    }

    :host([size][card-fill-color="light-aqua"]) {
        background: linear-gradient(140.56deg, #cef9ff 5.42%, #e3f9f3 51.68%);
    }

    :host([size][card-fill-color="light-green"]) {
        background: linear-gradient(140.56deg, #fffee9 5.42%, #d0f0e1 51.68%);
    }

    :host([size][card-fill-color="dark-plum"]) {
        background: linear-gradient(138.52deg, #512c2c -1.32%, #252c4e 85.77%);
    }

    :host([size][card-fill-color="dark-desert"]) {
        background: linear-gradient(138.25deg, #553f2b -1.2%, #372d54 84.27%);
    }

    :host([size][card-fill-color="dark-dawn"]) {
        background: linear-gradient(140.02deg, #58314f -2.33%, #29203c 84.75%);
    }

    :host([size][card-fill-color="dark-sea"]) {
        background: linear-gradient(138.52deg, #264b50 0.44%, #292448 85.15%);
    }

    :host([size][card-fill-color="dark-orange"]) {
        background: linear-gradient(140.69deg, #514c28 -7.13%, #482b24 87.33%);
    }

    :host([size][card-fill-color="dark-tropic"]) {
        background: linear-gradient(140.08deg, #0b4b4f 1.27%, #39371e 85.21%);
    }

    :host([size][card-fill-color="dark-merlot"]) {
        background: linear-gradient(140.02deg, #5c452f -2.33%, #3a1b26 84.75%);
    }

    :host([size][card-fill-color="dark-purple"]) {
        background: linear-gradient(140.02deg, #283266 -2.33%, #351740 84.75%);
    }

    :host([size][card-fill-color="dark-green"]) {
        background: linear-gradient(138.44deg, #57511f 0.35%, #17352f 83.81%);
    }
`,g=h.A`
    ${(0,l.V)("flex")} :host {
        background: ${r.p};
        outline: calc(${n.XA} * 1px) solid ${s.cu};
        border-radius: calc((${o.JU} - ${n.XA}) * 1px);
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
        box-sizing: border-box;
        color: ${a.l};
        contain: content;
        content-visibility: auto;
    }

    :host(:hover) {
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.14);
    }

    @media (prefers-color-scheme: dark) {
        :host(:hover) {
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.26);
        }
    }

    /* Safari specific styles because border-radius and outline aren't compatible in current version  */
    @supports selector(:nth-child(1 of x)) {
        :host {
            outline: none;
            box-shadow: 0 0 0 calc(${n.XA} * 1px) ${s.cu},
                0px 2px 4px rgba(0, 0, 0, 0.04);
        }

        :host(:hover) {
            box-shadow: 0 0 0 calc(${n.XA} * 1px) ${s.cu},
                0px 4px 8px rgba(0, 0, 0, 0.14);
        }

        @media (prefers-color-scheme: dark) {
            :host(:hover) {
                box-shadow: 0 0 0 calc(${n.XA} * 1px) ${s.cu},
                    0px 4px 8px rgba(0, 0, 0, 0.26);
            }
        }
    }

    :host([size="_1x_1y"]) {
        width: calc(${s.QG} * 1px);
        height: calc(${s.l8} * 1px);
    }

    :host([size="_1x_2y"]) {
        width: calc(${s.QG} * 1px);
        height: calc((${s.l8} * 2px) + (${s.Sn} * 1px));
    }

    :host([size="_2x_2y"]) {
        width: calc((${s.QG} * 2px) + (${s.Sn} * 1px));
        height: calc((${s.l8} * 2px) + (${s.Sn} * 1px));
    }

    :host([size="_2x_1y"]) {
        width: calc((${s.QG} * 2px) + (${s.Sn} * 1px));
        height: calc(${s.l8} * 1px);
    }

    ::slotted(*) {
        color: inherit;
    }
`,p=(0,d.mr)(h.A`
            :host {
                background: ${c.A.Canvas};
                color: ${c.A.CanvasText};
            }
        `),v=h.A`
    ${g}
    ${u}

        :host([card-secondary-color]) {
        background: linear-gradient(
            var(--gradient-angle),
            var(--gradient-start-color) 35.59%,
            var(--gradient-end-color) 100%
        );
        background-clip: padding-box;
    }
`.withBehaviors(p)},50793:function(t,e,i){i.d(e,{M:function(){return n}});var o=i(81725),s=i(38346),r=i(13141);class n extends o.IB{async transform(t){return{viewModel:await this.getViewModel(t)}}getChartFillColor(t){return t?(0,r.BK)((0,r.jJ)(),t.changePcntNumber||0,this.transformerProvider.config.swapGainLossColor):""}chartPricePreviousClose(t){return t?t.pricePreviousClose:void 0}getChartWidth(t){return t.width?t.width:t.cardSize===s.uE._1x_1y?104:32}getChartHeight(t){return t.height?t.height:t.cardSize===s.uE._1x_1y?18:28}async getViewModel(t){var e,i;return{chartId:t.quote.id,chartWidth:this.getChartWidth(t),chartHeight:this.getChartHeight(t),chartFillColor:this.getChartFillColor(t.quote),baselineFillColor:this.getChartFillColor(t.quote),isFullWidth:t.isFullWidth,lineDash:t.lineDash,chartBaseline:this.chartPricePreviousClose(null==t?void 0:t.chartData),chartBaselineLoc:null==t||null===(e=t.chartData)||void 0===e?void 0:e.pricePreviousCloseLoc,chartSeries:null==t||null===(i=t.chartData)||void 0===i||null===(i=i.chartData)||void 0===i?void 0:i.series,cardSize:t.cardSize,telemetryTag:""}}}},67151:function(t,e,i){i.r(e),i.d(e,{VerticalWatchlist:function(){return m}});var o=i(56911),s=i(81725),r=i(60815),n=i(73638),a=i(77246);class l extends n.z{constructor(){super(...arguments),this.currentMargin=0,this.onFocusIn=t=>{var e;const i=Array.from(this.verticalWatchlist.querySelectorAll("quote-item")).findIndex(t=>{var e,i,o,s,r,n;if(!t.shadowRoot)return!1;if(null!==(e=t.shadowRoot)&&void 0!==e&&null!==(i=e.querySelector)&&void 0!==i&&i.call(e,".quote-item:focus-visible"))return!0;const a=null===(o=t.shadowRoot)||void 0===o||null===(s=o.querySelector)||void 0===s?void 0:s.call(o,".quote-item follow-button");return!(null==a||null===(r=a.shadowRoot)||void 0===r||null===(n=r.querySelector)||void 0===n||!n.call(r,".follow-button:focus-visible"))});if(-1===i)return;const o=Math.floor(i/2)+1,r=null===(e=this.getState())||void 0===e?void 0:e.get(s.Xe.CurrentPageIndex);var n,a;o!==r&&(null===(n=(a=this.viewModel).flipperHandler)||void 0===n||n.call(a,o>r,t))}}get quotes(){return this.viewModel.watchlistQuotes.concat(this.viewModel.recommendQuotes)}onCurrentPageIndexChange(t){const e=124*(this.quotes.length+1)-8-268,i=248*(t-1);this.currentMargin=Math.min(i,e)}initHandlers(){super.initHandlers(),this.onCurrentPageIndexChangeScoped=this.onCurrentPageIndexChange.bind(this)}connected(){super.connected(),"_1x_1y"===this.viewModel.cardSize&&(0,a.S)()&&this.verticalWatchlist.addEventListener("focusin",this.onFocusIn)}disconnected(){super.disconnected(),this.currentMargin=0,(0,a.S)()&&this.verticalWatchlist.removeEventListener("focusin",this.onFocusIn)}addSubscriptions(){if(super.addSubscriptions(),"_1x_1y"===this.viewModel.cardSize){const t=s.vP.get(this.viewModel.experienceName);if(!t)return;t.subscribe(s.Xe.CurrentPageIndex,this.onCurrentPageIndexChangeScoped,{signal:this.subscriptionController.signal})}}get listStyles(){let t=`height: ${this.viewModel.listHeight};`;return"_1x_1y"===this.viewModel.cardSize&&(t+=`inset-inline-end: ${this.currentMargin}px;`),t}}(0,o.Cg)([r.sH],l.prototype,"currentMargin",void 0),(0,o.Cg)([r.Jg],l.prototype,"listStyles",null);var d=i(92011);const h=i(74849).A` .wrap{position:relative}.vertical-watchlist{width:268px;display:flex;justify-content:space-between;flex-direction:column;transition:left 700ms,right 700ms}.sfy-text{font-size:var(--type-ramp-minus-2-font-size,10px);line-height:var(--type-ramp-minus-2-line-height,14px);margin-top:26px}.vertical-watchlist.small{display:flex;flex-direction:row;flex-wrap:nowrap;gap:8px;position:absolute}`;var c=i(96950),u=i(60402),g=i(39957),p=i(91640);const v=c.qy`<div class="wrap"><div class="vertical-watchlist ${t=>{var e;return"_1x_1y"===(null===(e=t.viewModel)||void 0===e?void 0:e.cardSize)?"small":""}}" style="${t=>t.listStyles}" ${(0,u.K)("verticalWatchlist")}>${(0,g.ux)(t=>t.viewModel.watchlistQuotes,c.qy`<quote-item :viewModel="${t=>t.viewModel}"></quote-item>`)} ${(0,p.z)(t=>t.viewModel.isSeparatorVisible,c.qy`<div class="sfy-text">${t=>t.viewModel.strings.suggestedForYouText}</div>`)} ${(0,g.ux)(t=>t.viewModel.recommendQuotes,c.qy`<quote-item :viewModel="${t=>t.viewModel}"></quote-item>`)} ${(0,p.z)(t=>{var e;return"_1x_1y"===(null===(e=t.viewModel)||void 0===e?void 0:e.cardSize)},c.qy`<quote-item :viewModel="${t=>({isSeeMore:!0,seeMoreText:t.viewModel.seeMoreText,seeMoreLink:t.viewModel.seeMoreLink,telemetryTag:t.viewModel.seeMoreTelemetryTag})}" :isSeeMore="${()=>!0}"></quote-item>`)}</div></div>`,f=c.qy` ${(0,p.z)(t=>null!=t.viewModel,v)}
`;let m=class extends l{};m=(0,o.Cg)([(0,d.E)({name:"vertical-watchlist",template:f,styles:h,shadowOptions:{delegatesFocus:!0}})],m)},71718:function(t,e,i){i.d(e,{Z:function(){return a}});var o=i(81725),s=i(38346),r=i(13141),n=i(7087);class a extends o.IB{async transform(t){return{viewModel:await this.getViewModel(t)}}get swapGainLossColor(){return this.transformerProvider.config.swapGainLossColor||!1}getNotificationData(t){var e;if(null!==(e=t.quoteNotifications)&&void 0!==e&&e.length){const e=t.quoteNotifications[0],i=e.notificationType;return[o.Ex.EarningRelease,o.Ex.PriceDrop,o.Ex.PriceSpike,o.Ex.PriceMovement,o.Ex.WatchlistSummary,o.Ex.MarketBrief,o.Ex.TechnicalIndicator,o.Ex.Sentiment,o.Ex.InstitutionalHolding].includes(i)?e:void 0}{const{pricePctNotfThresholdMarket:e,pricePctNotfBaseline:i,disableNotificationForVp:o}=this.transformerProvider.config;if((0,r.Uj)(t.quote,e,i,o))return(0,r.nW)(t.quote,[],this.transformerProvider.strings)}}getNotificationsInfo(t){const e=this.getNotificationData(t);return e?{iconUrl:this.getNotfIconUrl(t,e),shortHeadline:e.shortHeadline,accentColor:(0,r.bQ)(e,t.quote,(0,r.jJ)(),this.swapGainLossColor)}:null}getAccentColor(t){return(0,r.BK)((0,r.jJ)(),t.quote.changePcntNumber||0,this.transformerProvider.config.swapGainLossColor)}async getFollowButton(t){if(t.showWatchlistButton){const e=(0,n.Xe)(this.transformerProvider.config.urls,o.Rf.Watchlist,t.quote.id),i={isFollowed:t.isFollowed,itemId:t.quote.id,itemName:t.quote.displayName||"",itemUrl:e,telemetryTag:this.transformerProvider.telemetryBuilder.createAddClickTelemetryTag(t.parentTelemetryObject,{name:o.CD.quoteAddedToWatchlist,signature:t.signature,headline:t.quote.id}),size:t.cardSize===s.uE._1x_1y?"sm":"m",followButtonTooltip:this.transformerProvider.strings.watchlistTooltipText};return await this.transformerProvider.generateView(i,o.Ai.FollowButton)}}getIconUrl(t){const{cryptos:e,deprecatedToNewCryptos:i}=this.transformerProvider.config;return t.quote.iconUrl?t.quote.iconUrl:t.quote.icon?t.quote.icon:t.tabName===o.Rf.Crypto?(0,r.ue)(e,i,t.quote.id):t.tabName===o.Rf.Currencies?(0,r.A0)(t.quote.currency||""):""}getNotfIconUrl(t,e){var i,o;return(0,n.kX)(this.transformerProvider.config.urls,(null===(i=t.quote)||void 0===i?void 0:i.changePcntNumber)||0,null==e?void 0:e.notificationType,this.transformerProvider.config.swapGainLossColor,null==e||null===(o=e.notification)||void 0===o?void 0:o.signal)}async getViewModel(t){(0,r.ih)(t.quote,t.tabName);const e=this.getNotificationsInfo(t),i=await this.getFollowButton(t),s=(0,n.Xe)(this.transformerProvider.config.urls,t.tabName||o.Rf.Watchlist,t.quote.id,this.getNotificationData(t),!0),a={quote:t.quote,chartData:t.chartData,cardSize:t.cardSize},l=o.Ai.MoneyInfoStockChart,d=await this.transformerProvider.generateView(a,l);return{accentColor:this.getAccentColor(t),experienceName:t.experienceName,cardSize:t.cardSize,chartData:d.viewModel,displayName:t.quote.displayName||"",followButton:i,gridTemplateColumns:t.gridTemplateColumns||"",hoverTelemetryTag:this.transformerProvider.telemetryBuilder.createHoverShowTelemetryTag(t.parentTelemetryObject,{name:o.CD.quoteItemClick,signature:t.signature,headline:t.quote.symbol,id:t.quote.id}),iconUrl:this.getIconUrl(t),id:t.quote.id,isChartDataReady:!0,isIconVisible:t.isIconVisible,notification:e,paddingVertical:(t.quoteHeight-40)/2,price:t.quote.price,pricePctChange:t.quote.changePcnt||"",quoteHeight:t.quoteHeight,quoteUrl:s,seeMoreText:this.transformerProvider.strings.seeMore,showChart:this.transformerProvider.config.enableInlineStockChart,symbol:t.quote.symbol,telemetryTag:this.transformerProvider.telemetryBuilder.createNavClickTelemetryTag(t.parentTelemetryObject,{name:o.CD.quoteItemClick,signature:t.signature,headline:t.quote.symbol,id:t.quote.id}),tooltipText:t.tooltipText,shortName:t.quote.shortName||"",showStockNameOnFirstLine:t.quote.securityType.toLowerCase()!==o.tr.Currency.toLowerCase()}}}},72024:function(t,e,i){i.r(e),i.d(e,{FollowButtonTransformer:function(){return o.j},MoneyInfoStockChartTransformer:function(){return s.M},QuoteItemTransformer:function(){return r.Z},VerticalWatchlistTransformer:function(){return h}});var o=i(38650),s=i(50793),r=i(71718),n=i(38346),a=i(81725),l=i(13141),d=i(96950);class h extends a.IB{constructor(){super(...arguments),this.watchlistQuotes=[],this.recommendQuotes=[],this.cardSize=""}async transform(t){this.fullWatchlistQuoteIds=new Set(t.fullWatchlistQuoteIds),this.notifications=t.quoteNotificationDetails,this.cardSize=t.cardSize;const e=await this.getCurrentViewModel(t);return{viewTemplate:d.qy`
                <vertical-watchlist
                    :viewModel="${e}"
                ></vertical-watchlist>`}}get isSeparatorVisible(){return this.cardSize!==n.uE._1x_1y&&(Boolean(this.watchlistQuotes.length)&&Boolean(this.recommendQuotes.length))}get quoteHeight(){return(0,l.Wl)(this.cardSize,this.watchlistQuotes.length===this.getMaxQuoteItemCount()-1)}async getCurrentViewModel(t){this.prepareQuoteLists(t);const e=await this.getQuoteListVMs(t,this.watchlistQuotes,!1),i=await this.getQuoteListVMs(t,this.recommendQuotes,!0);return{cardSize:t.cardSize,experienceName:t.experienceName,isSeparatorVisible:this.isSeparatorVisible,listHeight:(0,l.cf)(this.cardSize),recommendQuotes:i,strings:{...this.transformerProvider.strings},tabName:t.tabName,telemetryTag:"",watchlistQuotes:e,seeMoreText:this.transformerProvider.strings.seeMore,seeMoreLink:t.seeMoreLink,seeMoreTelemetryTag:this.transformerProvider.telemetryBuilder.createNavClickTelemetryTag(t.telemetryObject,{name:a.CD.seeMoreClick,signature:t.signature,headline:this.transformerProvider.strings.seeMore}),flipperHandler:this.transformerProvider.paginationFlipperClickHandler}}prepareQuoteLists(t){const e=this.getMaxQuoteItemCount(),i=t.watchlistItems,o=this.getRecommended(t),s=Math.min(i.length,e),r=this.cardSize===n.uE._1x_1y,a=Math.min(o.length,e-s-(s&&!r?1:0));this.watchlistQuotes=i.slice(0,s),this.recommendQuotes=a>0?o.slice(0,a):[]}getRecommended(t){return t.recommendTabData&&t.recommendTabData.quoteItems?t.recommendTabData.quoteItems.filter(e=>!t.fullWatchlistQuoteIds||!t.fullWatchlistQuoteIds.includes(e.id)):[]}getMaxQuoteItemCount(){switch(this.cardSize){case"_1x_3y":case"large":return this.transformerProvider.config.maxNumberOfQuotesLarge;case"_1x_1y":case"small":return this.transformerProvider.config.maxNumberOfQuotesSmall;default:return this.transformerProvider.config.maxNumberOfQuotesMedium}}async getQuoteListVMs(t,e,i){const o=this.getGridTemplateColumns(e,i),s=e.map(async(e,s)=>{var r,n,d;const h=(0,l.EL)(e);if(!h)return;const c=null===(r=this.notifications)||void 0===r?void 0:r[h],u=(null===(n=this.fullWatchlistQuoteIds)||void 0===n?void 0:n.has(h))??!1,g=(0,l.jX)(e.displayName||"",e.symbol,u,this.transformerProvider.strings),p=null===(d=t.chartItemDict)||void 0===d?void 0:d[h],v={experienceName:t.experienceName,isFollowed:u,cardSize:t.cardSize,tooltipText:g,tabName:t.tabName,isIconVisible:!1,quoteNotifications:c,quoteHeight:this.quoteHeight,quote:e,chartData:p,showWatchlistButton:i,gridTemplateColumns:o,signature:t.signature,parentTelemetryObject:t.telemetryObject};return this.transformerProvider.generateView(v,a.Ai.QuoteItem)});return(await Promise.all(s)).filter(l.z2)}getGridTemplateColumns(t,e){let i=this.transformerProvider.config.maxChangeStringLength,o=this.transformerProvider.config.maxValueStringLength;t.forEach(t=>{t.changePcnt&&t.changePcnt.length>i&&(i=t.changePcnt.length),t.price&&t.price.length>o&&(o=t.price.length)});const s=e?4:3,r=this.transformerProvider.config.sdCardWidth-26-26-8*(s-1),n=e?16:0,a=32,l=Math.max(8*i,6*o);return`--quote-grid-template-columns: ${[r-a-l-n,a,l,n].filter(t=>t>0).map(t=>`${t}px`).join(" ")};`}}Promise.resolve().then(i.bind(i,67151)),Promise.resolve().then(i.bind(i,7755)),Promise.resolve().then(i.bind(i,6376)),Promise.resolve().then(i.bind(i,76713))},73638:function(t,e,i){i.d(e,{z:function(){return l}});var o=i(56911),s=i(81725),r=i(60815),n=i(92011),a=i(37918);let l=class extends n.L{constructor(){super(...arguments),this.subscriptionController=new AbortController}connected(){this.initHandlers(),this.addSubscriptions()}disconnected(){this.removeSubscriptions()}removeSubscriptions(){this.subscriptionController.abort()}getState(){return s.vP.get(this.viewModel.experienceName)||null}addSubscriptions(){if(this.viewModel.experienceName){const t=this.getState();t&&(t.subscribe(s.Xe.CardSize,this.onSizeChangeHandlerScoped,{signal:this.subscriptionController.signal}),t.subscribe(s.Xe.ChartItemDict,this.onChartItemDictChangeScoped,{signal:this.subscriptionController.signal}),t.subscribe(s.Xe.showNotificationText,this.onShowNotificationTextChangeScoped,{signal:this.subscriptionController.signal}),t.subscribe(s.Xe.QuoteItemDict,this.onQuoteItemDictChangeScoped,{signal:this.subscriptionController.signal}),t.subscribe(s.Xe.CardWidth,this.onCardWidthChangedScoped,{signal:this.subscriptionController.signal}))}}initHandlers(){this.onSizeChangeHandlerScoped=this.onSizeChange.bind(this),this.onChartItemDictChangeScoped=this.onChartDictChange.bind(this),this.onShowNotificationTextChangeScoped=this.onShowNotificationTextChange.bind(this),this.onQuoteItemDictChangeScoped=this.onQuoteItemDictChange.bind(this),this.onCardWidthChangedScoped=this.onCardWidthChanged.bind(this)}onSizeChange(t){}onChartDictChange(t){}onShowNotificationTextChange(t){}onQuoteItemDictChange(t){}onCardWidthChanged(t){}};(0,o.Cg)([r.sH],l.prototype,"viewModel",void 0),l=(0,o.Cg)([a.x],l)},75624:function(t,e){e.A='<svg width="20" height="20" viewBox="0 0 20 20" type="circle-add"><path d="M6 10c0-.28.22-.5.5-.5h3v-3a.5.5 0 0 1 1 0v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3A.5.5 0 0 1 6 10Z"/><path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0-1a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z"/></svg>'},76713:function(t,e,i){i.r(e),i.d(e,{FollowButton:function(){return m}});var o=i(56911),s=i(31347),r=i(60815);class n extends s.m{constructor(){super(...arguments),this.justFollowed=!1}get isFollowed(){return this.viewModel.isFollowed||this.justFollowed}handleClick(){this.viewModel.followClickHandler&&(this.viewModel.followClickHandler(),this.justFollowed=!0)}}(0,o.Cg)([r.sH],n.prototype,"justFollowed",void 0);var a=i(92011),l=i(43103),d=i(74849);const h=d.A` :host{--add-border:#666666;--plus-sign:#FFFFFF;--completed:#3B4EC3}`,c=d.A` :host{--add-border:#D1D1D1;--plus-sign:#242424;--completed:#405CE8}.follow-button{height:16px;width:16px;display:flex;align-items:center;justify-content:center;padding:0;border:none;background:transparent;cursor:pointer}.follow-button.m{height:16px;width:16px}.follow-button.sm{height:12px;width:12px}.follow-button.m svg{min-width:20px;min-height:20px}.follow-button.m svg path{min-width:20px;min-height:20px}.follow-button.sm svg{min-width:16px;min-height:16px}.follow-button.sm svg path{min-width:12px;min-height:12px}.follow-button svg path:first-child{fill:var(--plus-sign)}.follow-button svg path:nth-child(2){fill:var(--add-border)}.follow-button.followed svg path:first-child{fill:var(--completed)}`.withBehaviors(new l.N(null,h));var u=i(75624),g=i(96950);const p=g.qy`${g.qy.partial('<svg width="20" height="20" viewBox="0 0 20 20" type="circle-completed"><path d="M10 1.67a8.33 8.33 0 1 1 0 16.66 8.33 8.33 0 0 1 0-16.66Zm2.68 5.8L8.96 11.2 7.32 9.56a.62.62 0 1 0-.89.88l2.09 2.09c.24.24.64.24.88 0l4.17-4.17a.62.62 0 1 0-.89-.89Z"/></svg>')}`,v=g.qy`${g.qy.partial(u.A)}`,f=g.qy`<button class="follow-button ${t=>t.isFollowed?"followed":""} ${t=>t.viewModel.size}" data-t="${t=>t.viewModel.telemetryTag}" @click=${t=>t.handleClick()} title="${t=>t.viewModel.followButtonTooltip}">${t=>t.isFollowed?p:v}</button>`;let m=class extends n{};m=(0,o.Cg)([(0,a.E)({name:"follow-button",template:f,styles:c,shadowOptions:{delegatesFocus:!0}})],m)},99657:function(t,e,i){i.d(e,{D:function(){return n},I:function(){return r}});var o=i(68136);const{create:s}=o.G,r=s("sloppy-click-z-index",1),n=s("click-z-index",1)}}]);