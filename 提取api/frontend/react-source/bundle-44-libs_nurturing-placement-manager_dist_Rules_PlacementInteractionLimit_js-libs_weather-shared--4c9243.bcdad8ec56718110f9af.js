"use strict";(self.homePageWebpackChunks=self.homePageWebpackChunks||[]).push([["libs_nurturing-placement-manager_dist_Rules_PlacementInteractionLimit_js-libs_weather-shared--4c9243"],{121:function(e,t,a){a.d(t,{m:function(){return $}});var r=a(56911),i=a(92011),n=a(38493),o=a(60815),l=a(83781),s=a(55230),d=a(31157),h=a(42938);class c extends i.L{constructor(){super(...arguments),this.orientation=l.t.horizontal,this.radioChangeHandler=e=>{const t=e.target;t.checked&&(this.slottedRadioButtons.forEach(e=>{e!==t&&(e.checked=!1,this.isInsideFoundationToolbar||e.setAttribute("tabindex","-1"))}),this.selectedRadio=t,this.value=t.value,t.setAttribute("tabindex","0"),this.focusedRadio=t),e.stopPropagation()},this.moveToRadioByIndex=(e,t)=>{const a=e[t];this.isInsideToolbar||(a.setAttribute("tabindex","0"),a.readOnly?this.slottedRadioButtons.forEach(e=>{e!==a&&e.setAttribute("tabindex","-1")}):(a.checked=!0,this.selectedRadio=a)),this.focusedRadio=a,a.focus()},this.moveRightOffGroup=()=>{this.nextElementSibling?.focus()},this.moveLeftOffGroup=()=>{this.previousElementSibling?.focus()},this.focusOutHandler=e=>{const t=this.slottedRadioButtons,a=e.target,r=null!==a?t.indexOf(a):0,i=this.focusedRadio?t.indexOf(this.focusedRadio):-1;return(0===i&&r===i||i===t.length-1&&i===r)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),t.forEach(e=>{e!==this.selectedRadio&&e.setAttribute("tabindex","-1")}))):(this.focusedRadio=t[0],this.focusedRadio.setAttribute("tabindex","0"),t.forEach(e=>{e!==this.focusedRadio&&e.setAttribute("tabindex","-1")}))),!0},this.clickHandler=e=>{const t=e.target;if(t){const e=this.slottedRadioButtons;t.checked||0===e.indexOf(t)?(t.setAttribute("tabindex","0"),this.selectedRadio=t):(t.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=t}e.preventDefault()},this.shouldMoveOffGroupToTheRight=(e,t,a)=>e===t.length&&this.isInsideToolbar&&a===s.bb,this.shouldMoveOffGroupToTheLeft=(e,t)=>(this.focusedRadio?e.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&t===s.kT,this.checkFocusedRadio=()=>{null===this.focusedRadio||this.focusedRadio.readOnly||this.focusedRadio.checked||(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=e=>{const t=this.slottedRadioButtons;let a=0;if(a=this.focusedRadio?t.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(a,t,e.key))this.moveRightOffGroup();else for(a===t.length&&(a=0);a<t.length&&t.length>1;){if(!t[a].disabled){this.moveToRadioByIndex(t,a);break}if(this.focusedRadio&&a===t.indexOf(this.focusedRadio))break;if(a+1>=t.length){if(this.isInsideToolbar)break;a=0}else a+=1}},this.moveLeft=e=>{const t=this.slottedRadioButtons;let a=0;if(a=this.focusedRadio?t.indexOf(this.focusedRadio)-1:0,a=a<0?t.length-1:a,this.shouldMoveOffGroupToTheLeft(t,e.key))this.moveLeftOffGroup();else for(;a>=0&&t.length>1;){if(!t[a].disabled){this.moveToRadioByIndex(t,a);break}if(this.focusedRadio&&a===t.indexOf(this.focusedRadio))break;a-1<0?a=t.length-1:a-=1}},this.keydownHandler=e=>{const t=e.key;if(t in s.Is&&this.isInsideFoundationToolbar)return!0;switch(t){case s.Mm:this.checkFocusedRadio();break;case s.bb:case s.HX:this.direction===d.O.ltr?this.moveRight(e):this.moveLeft(e);break;case s.kT:case s.I5:this.direction===d.O.ltr?this.moveLeft(e):this.moveRight(e);break;default:return!0}}}readOnlyChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach(e=>{this.readOnly?e.readOnly=!0:e.readOnly=!1})}disabledChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach(e=>{this.disabled?e.disabled=!0:e.disabled=!1})}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(e=>{e.setAttribute("name",this.name)})}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(e=>{e.value===this.value&&(e.checked=!0,this.selectedRadio=e)}),this.$emit("change")}slottedRadioButtonsChanged(e,t){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){return this.parentToolbar??!1}get isInsideFoundationToolbar(){return!!this.parentToolbar?.$fastController}connectedCallback(){super.connectedCallback(),this.direction=(0,h.u)(this),this.setupRadioButtons()}disconnectedCallback(){super.disconnectedCallback(),this.slottedRadioButtons.forEach(e=>{e.removeEventListener("change",this.radioChangeHandler)})}setupRadioButtons(){const e=this.slottedRadioButtons.filter(e=>e.hasAttribute("checked")),t=e?e.length:0;if(t>1){e[t-1].checked=!0}let a=!1;if(this.slottedRadioButtons.forEach(e=>{void 0!==this.name&&e.setAttribute("name",this.name),this.disabled&&(e.disabled=!0),this.readOnly&&(e.readOnly=!0),this.value&&this.value===e.value?(this.selectedRadio=e,this.focusedRadio=e,e.checked=!0,e.setAttribute("tabindex","0"),a=!0):(this.isInsideFoundationToolbar||e.setAttribute("tabindex","-1"),e.checked=!1),e.addEventListener("change",this.radioChangeHandler)}),void 0===this.value&&this.slottedRadioButtons.length>0){const e=this.slottedRadioButtons.filter(e=>e.hasAttribute("checked")),t=null!==e?e.length:0;if(t>0&&!a){const a=e[t-1];a.checked=!0,this.focusedRadio=a,a.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}}(0,r.Cg)([(0,n.CF)({attribute:"readonly",mode:"boolean"}),(0,r.Sn)("design:type",Boolean)],c.prototype,"readOnly",void 0),(0,r.Cg)([(0,n.CF)({attribute:"disabled",mode:"boolean"}),(0,r.Sn)("design:type",Boolean)],c.prototype,"disabled",void 0),(0,r.Cg)([n.CF,(0,r.Sn)("design:type",String)],c.prototype,"name",void 0),(0,r.Cg)([n.CF,(0,r.Sn)("design:type",String)],c.prototype,"value",void 0),(0,r.Cg)([n.CF,(0,r.Sn)("design:type",String)],c.prototype,"orientation",void 0),(0,r.Cg)([o.sH,(0,r.Sn)("design:type",Array)],c.prototype,"childItems",void 0),(0,r.Cg)([o.sH,(0,r.Sn)("design:type",Array)],c.prototype,"slottedRadioButtons",void 0);var p=a(37180),u=a(74849),m=a(64187),v=a(74838);const w=u.A`
    ${(0,m.V)("flex")} :host {
        align-items: flex-start;
        margin: calc(${v.vR} * 1px) 0;
        flex-direction: column;
    }

    .positioning-region {
        display: flex;
        flex-wrap: wrap;
    }

    :host([orientation="vertical"]) .positioning-region {
        flex-direction: column;
    }

    :host([orientation="horizontal"]) .positioning-region {
        flex-direction: row;
    }
`;var g=a(96950),x=a(82774),f=a(10108);const b=g.qy`
        <template
            role="radiogroup"
            aria-disabled="${e=>e.disabled}"
            aria-readonly="${e=>e.readOnly}"
            @click="${(e,t)=>e.clickHandler(t.event)}"
            @keydown="${(e,t)=>e.keydownHandler(t.event)}"
            @focusout="${(e,t)=>e.focusOutHandler(t.event)}"
        >
            <slot name="label"></slot>
            <div
                class="positioning-region ${e=>e.orientation===l.t.horizontal?"horizontal":"vertical"}"
                part="positioning-region"
            >
                <slot
                    ${(0,x.e)({property:"slottedRadioButtons",filter:(0,f.Y)("[role=radio]")})}
                ></slot>
            </div>
        </template>
    `,$=c.compose({name:`${p.c.prefix}-radio-group`,template:b,styles:w})},4968:function(e,t,a){a.d(t,{f:function(){return s}});var r=a(64187),i=a(74849),n=a(42792),o=a(99657),l=a(36452);const s=i.A.partial`position: relative; z-index: ${o.D};`;i.A`
    ${n.e}
    ${n.nH}

    ${(0,r.V)("grid")} :host {
        grid-template-rows: auto 1fr minMax(16px, auto);
        grid-template-columns: 100%;
        ${s}
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
        border: 1px solid ${l.I2};
    }

    ::slotted(fluent-button[appearance="neutral"]:hover),
    ::slotted(fluent-anchor[appearance="neutral"]:hover) {
        border-color: ${l.mb};
    }

    ::slotted(fluent-button[appearance="neutral"]:active),
    ::slotted(fluent-anchor[appearance="neutral"]:active) {
        border-color: ${l.MY};
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
`.withBehaviors(n.kc)},8238:function(e,t,a){a.d(t,{O:function(){return r}});const r=a(74849).A`
    .sd-action:not([appearance="lightweight"]) {
        --control-corner-radius: 999;
        font-size: var(--type-ramp-minus-1-font-size);
        line-height: var(--type-ramp-minus-1-line-height);
    }

    .sd-action::part(control) {
        width: 100%;
    }

    .sd-action::part(content) {
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        text-overflow: ellipsis;
        overflow: hidden;
    }
`},11548:function(e,t,a){a.d(t,{NV:function(){return g},j5:function(){return v}});var r=a(56911),i=a(60815),n=a(23429),o=a(92011),l=a(38493),s=a(15410),d=a(17469),h=a(98216),c=a(58325),p=a(32122),u=a(89151),m=a(77246);class v extends o.L{constructor(){super(...arguments),this.enableEPlant=!1,this.ePlantLabel="",this.ePlantIcon="",this.showSummary=!1,this.tabIdx=0,this.isDailyWithChartUX=!1,this.minimapLoading=!1,this.minimapLoaded=!1,this.trendChartTemplateLoading=!1,this.trendChartTemplateLoaded=!1}layoutChanged(){this.updateShowSummary()}enableEPlantChanged(e,t){t&&t!==e&&this.loadDynamicTemplateByScenario()}minimapChanged(){this.loadDynamicTemplateByScenario()}weatherDataChanged(e,t){var a;this.updateSummarySize(),this.updateShowSummary(),this.isDailyWithChartUX="listWithChart"===(null===(a=this.weatherData)||void 0===a?void 0:a.uxFormat),h.YT.removeTmplProperty("WeatherSummaryHovered"),this.tabIdx=t&&t.teaserCustomData&&t.teaserCustomData.tabIdx,this.loadDynamicTemplateByScenario()}sourceLoadError(e){e&&e.style&&(e.style.display="none")}updateSummarySize(){var e,t,a,r,i;const n=null===(e=this.weatherData)||void 0===e||null===(e=e.temperature)||void 0===e||null===(e=e.toString())||void 0===e?void 0:e.length,o=(null===(t=this.weatherData)||void 0===t||null===(t=t.summaryData)||void 0===t?void 0:t.summaryLine1)&&(null===(a=this.weatherData)||void 0===a||null===(a=a.summaryData)||void 0===a?void 0:a.summaryLine2)&&this.weatherData.summaryData.summaryLine1.length,l=(null===(r=this.weatherData)||void 0===r||null===(r=r.summaryData)||void 0===r?void 0:r.summaryLine1)&&(null===(i=this.weatherData)||void 0===i||null===(i=i.summaryData)||void 0===i?void 0:i.summaryLine2)&&this.weatherData.summaryData.summaryLine2.length;this.longSummary=!!(n&&o&&n>2&&o>9||n&&l&&n>1&&l>18)}updateShowSummary(){this.weatherData&&this.weatherData.summaryData?this.weatherData.summaryData.disable1U?this.showSummary="half"===this.layout||"small"===this.layout:this.showSummary=!0:this.showSummary=!1}connectedCallback(){super.connectedCallback(),this.focusToCard&&n.L.enqueue(()=>{this.focus()}),this.layout||(this.layout="half"),this.target||(this.target="_blank"),this.updateSummarySize(),this.loadDynamicTemplateByScenario()}async loadDynamicTemplate(){await a.e("weather-shared-wc-deferred-dev").then(a.bind(a,54803)),"eplantSpecialDay"===this.primaryCarousel&&await a.e("weather-shared-wc-deferred-dev").then(a.bind(a,79996))}async loadDynamicTemplateByScenario(){var e;const{teaserCustomData:t,summaryData:r,uxFormat:i}=this.weatherData||{},{tabs:n}=t||{};if(!(0,m.S)())return;if(this.minimap&&!this.minimapLoading&&!this.minimapLoaded){this.minimapLoading=!0,this.minimap.loadAfterTTVR&&await(0,u.dT)();const{msftMiniMap:e}=await Promise.all([a.e("experiences_weather-minimap-wc_dist_index_js"),a.e("weather-minimap-wc")]).then(a.bind(a,98707));e.define(d.i.registry),this.minimapLoading=!1,this.minimapLoaded=!0}if(this.enableEplantIcon()){const{msftEplantButton:e}=await a.e("weather-shared-wc-deferred-content").then(a.bind(a,66362));e.define(d.i.registry)}if("matchAndCurve"===i||"curve"===i){await a.e("weather-shared-wc-deferred-trend-chart").then(a.bind(a,60626));const{msftTrendCurve:e}=await a.e("weather-shared-wc-deferred-content").then(a.bind(a,83133));e.define(d.i.registry)}if("tideExtremeCurve"===i||null!=n&&n.some(e=>"tide"===(null==e?void 0:e.type))){const{msftTideChart:e}=await a.e("weather-shared-wc-deferred-tide-chart").then(a.bind(a,49284));e.define(d.i.registry)}"dailySummary"!==i&&"listWithChart"!==i||await a.e("weather-shared-wc-deferred-dailysummary-chart").then(a.bind(a,35187));const o=(0,p.ck)(this.layout)&&Array.isArray(null===(e=this.weatherData)||void 0===e?void 0:e.rotationDisplayContentType)&&this.weatherData.rotationDisplayContentType.some(e=>"aqiWeek"==e||"aqiToday"==e);if(Array.isArray(n)&&n.some(e=>e&&("aqiWeek"===e.type||"aqiToday"===e.type))||o){const{msftAqForecast:e}=await a.e("weather-shared-wc-deferred-content").then(a.bind(a,89076));e.define(d.i.registry),await Promise.all([a.e("weather-svg-chart"),a.e("weather-shared-wc-deferred-svgchart-content")]).then(a.bind(a,94669))}(null!=n&&n.some(e=>"precipitation"===(null==e?void 0:e.type))||"temperatureRisk"===this.primaryCarousel)&&await Promise.all([a.e("weather-svg-chart"),a.e("weather-shared-wc-deferred-svgchart-content")]).then(a.bind(a,94669));const l=["running","hiking","stargazing","cycling","picnic"];if((null!=n&&n.some(e=>l.includes(null==e?void 0:e.type))||"activities"===this.primaryCarousel)&&await Promise.all([a.e("weather-svg-chart"),a.e("weather-shared-wc-deferred-svgchart-content")]).then(a.bind(a,94669)),null==n||!n.some(e=>"nowcastacc"===(null==e?void 0:e.type))||this.trendChartTemplateLoading||this.trendChartTemplateLoaded||(this.trendChartTemplateLoading=!0,await a.e("weather-shared-wc-deferred-trend-chart").then(a.bind(a,60626)),this.trendChartTemplateLoading=!1,this.trendChartTemplateLoaded=!0),null!=r&&r.boldUx){const{msftWeatherSummaryBold:e}=await a.e("weather-shared-wc-deferred-content").then(a.bind(a,64123));e.define(d.i.registry)}}disconnectedCallback(){super.disconnectedCallback()}t(e){return(0,s.Il)(this.telemetry,e)}telemetryWithIndex(e,t){return(0,s.tp)(this.telemetry,e,t)}showRotationUX(){return!!(this.weatherData&&this.weatherData.rotationDisplayContentType&&this.weatherData.rotationDisplayContentType.length)}getDynamicTemplateType(){return this.primaryCarousel?w.has(this.primaryCarousel)?"specialUx":!this.minimap||this.weatherData&&this.weatherData.teaserCustomData&&this.weatherData.teaserCustomData.disableAnimateMinimap?this.minimap&&this.weatherData&&this.weatherData.rotationDisplayContentType&&"minimap"===this.weatherData.rotationDisplayContentType[0]?"minimap":"forecastlist":"minimap":"forecastlist"}handleMiniL1TabClick(e){this.$emit("handleTabClick",e)}handleMobileUpsellClick(){this.$emit("setMobileUpsellPopup",!0)}onKeyDown(e,t){return e&&"Enter"==e.key&&this.$emit("handleTabClick",t),!0}onUpsellKeyDown(e){return e&&"Enter"==e.key&&this.$emit("setMobileUpsellPopup",!0),!0}showDailyForecast(){return!!this.weatherData.forecastData&&this.weatherData.forecastData.length>0&&(!this.weatherData.showOnlyList||!(!this.weatherData||!this.weatherData.rotationDisplayContentType||"daily"!==this.weatherData.rotationDisplayContentType[0]))}enableEplantIcon(){const e=this.enableEPlant&&!!this.ePlantIcon&&((0,p.cw)(this.layout)||"eplantSpecialDay"!==this.primaryCarousel);return h.YT.removeTmplProperty(c.ie),e&&h.YT.addOrUpdateTmplProperty(c.ie,"1"),e}getMiniL1TabStyle(e,t){var a;return e?"wea_tab_a":"#2B2B2B"===(null==t||null===(a=t.backgroundData)||void 0===a?void 0:a.textColor)?"wea_tab_b":""}}(0,r.Cg)([l.CF],v.prototype,"layout",void 0),(0,r.Cg)([l.CF],v.prototype,"target",void 0),(0,r.Cg)([(0,l.CF)({mode:"boolean"})],v.prototype,"focusToCard",void 0),(0,r.Cg)([(0,l.CF)({mode:"boolean"})],v.prototype,"isRubyCard",void 0),(0,r.Cg)([i.sH],v.prototype,"enableEPlant",void 0),(0,r.Cg)([l.CF],v.prototype,"ePlantLabel",void 0),(0,r.Cg)([l.CF],v.prototype,"ePlantIcon",void 0),(0,r.Cg)([(0,l.CF)({mode:"boolean"})],v.prototype,"showSummary",void 0),(0,r.Cg)([l.CF],v.prototype,"cardType",void 0),(0,r.Cg)([i.sH],v.prototype,"minimap",void 0),(0,r.Cg)([l.CF],v.prototype,"tabIdx",void 0),(0,r.Cg)([(0,l.CF)({mode:"boolean"})],v.prototype,"isDailyWithChartUX",void 0),(0,r.Cg)([i.sH],v.prototype,"weatherData",void 0),(0,r.Cg)([i.sH],v.prototype,"telemetry",void 0),(0,r.Cg)([i.sH],v.prototype,"primaryCarousel",void 0),(0,r.Cg)([i.sH],v.prototype,"longSummary",void 0),(0,r.Cg)([i.sH],v.prototype,"animationSource",void 0),(0,r.Cg)([i.sH],v.prototype,"mobileUpsellImg",void 0),(0,r.Cg)([i.sH],v.prototype,"mobileUpsellDesc",void 0),(0,r.Cg)([i.sH],v.prototype,"mouseEnter",void 0),(0,r.Cg)([i.sH],v.prototype,"minimapWce",void 0),(0,r.Cg)([i.sH],v.prototype,"videoEntryWce",void 0);const w=new Set(["dailyforecast","eplantSpecialDay","video"]);function g(e){if(!e)return"";const t=function(e){let t=0;for(let a=0;a<e.length;a++)e.charCodeAt(a)>=0&&e.charCodeAt(a)<=127?t+=1:t+=2;return t}(e);let a="119px;";return 1==t?a="163px;":2==t&&(a="140px;"),`--summaryLen:${a}`}},25717:function(e,t,a){a.d(t,{T:function(){return i}});var r=a(96950);function i(){return r.qy`
        <slot></slot>
    `}},36861:function(e,t,a){a.d(t,{N3:function(){return ge},KP:function(){return we}});var r=a(96950),i=a(91640);const n=r.qy`<div class="nowcast-animation-bg nowcast-animation-bg-${e=>e.layout}" part="super-sd-nowcast-animation-bg"><img class="nowcast-animation-img" src="${e=>e.animationSource}" @error=${(e,t)=>e.sourceLoadError(t.event.target)}/></div>`;var o=a(39957),l=a(24909),s=a(72326);function d(e){return r.qy`<li>${(0,i.z)((e,t)=>!(0==t.index&&t.parent.isDailyWithChartUX),r.qy`<fluent-anchor class="weather-forecast-item" part="weather-forecast-item" href="${e=>e.forecastLink}" title="${(e,t)=>0!=t.index&&t.parent.isDailyWithChartUX?t.parent.weatherData.ctaContent:""}" tabIndex=0 target=${(e,t)=>t.parent.target} aria-label=${t=>e?`${t.itemAriaLabel} ${t.time} ${(t.highTempLabel?t.highTempLabel+" ":"")+(0,l.lM)(t.highTemp)} ${(t.lowTempLabel?t.lowTempLabel+" ":"")+(0,l.lM)(t.lowTemp)}`:`${t.itemAriaLabel} ${t.time} ${t.temperature}° ${t.precipitation}`} data-t="${(t,a)=>e?a.parent.telemetryWithIndex("forecastDayTelemetryTags",a.index)||a.parent.t("forecastDayTelemetryTag"):a.parent.telemetryWithIndex("forecastHourTelemetryTags",a.index)}">${h(e)}</fluent-anchor>`)} ${(0,i.z)((e,t)=>0==t.index&&t.parent.isDailyWithChartUX,r.qy`<div class="weather-forecast-item weather-forecast-item-nonnav" part="weather-forecast-item" tabIndex=0 @click="${(e,t)=>t.event.preventDefault()}" @keydown="${(e,t)=>t.event.preventDefault()}" aria-label=${t=>e?`${t.itemAriaLabel} ${t.time} ${(t.highTempLabel?t.highTempLabel+" ":"")+(0,l.lM)(t.highTemp)} ${(t.lowTempLabel?t.lowTempLabel+" ":"")+(0,l.lM)(t.lowTemp)}`:`${t.itemAriaLabel} ${t.time} ${t.temperature}° ${t.precipitation}`} data-t="${(t,a)=>e?a.parent.telemetryWithIndex("forecastDayTelemetryTags",a.index)||a.parent.t("forecastDayTelemetryTag"):a.parent.telemetryWithIndex("forecastHourTelemetryTags",a.index)}">${h(e)}</div>`)}</li>`}function h(e){return r.qy`<div class="weather-forecast-day" part="weather-forecast-day" aria-label=${e=>e.time}>${e=>e.time}</div><div class="weather-forecast-icon">${e=>e.skyCodeIcon}</div>${(t,a)=>{return e?(n=!a.parent.isDailyWithChartUX,r.qy`<div><div class="weather-forecast-high" part="weather-forecast-high" aria-label="${e=>(e.highTempLabel?e.highTempLabel+" ":"")+(0,l.lM)(e.highTemp)}">&lrm;${e=>(0,l.lM)(e.highTemp)}&lrm;</div>${(0,i.z)(e=>n,r.qy`<div class="weather-forecast-low" part="weather-forecast-low" aria-label="${e=>(e.lowTempLabel?e.lowTempLabel+" ":"")+(0,l.lM)(e.lowTemp)}">&lrm;${e=>(0,l.lM)(e.lowTemp)}&lrm;</div>`)}</div>`):c;var n}} `}const c=r.qy`<div><div class="weather-forecast-temperature" part="weather-forecast-temperature" aria-label="${e=>e.temperature+"°"}">&lrm;${e=>e.temperature}°&lrm;</div><div class="weather-forecast-precipitation" part="weather-forecast-precipitation" aria-label="${e=>e.precipitation}">${s.x} &lrm;${e=>e.precipitation}&lrm;</div></div>`;function p(e){return r.qy`<a class="weather-forecast-container" href="${e=>e.weatherData.link}" data-t="${e=>e.t("forecastDayTelemetryTag")}"><ul class="weather-forecast" part="weather-forecast">${(0,i.z)(()=>!e,e=>function(e){const t=Array.isArray(e)&&e.length>0?e.slice(0,5):[];return r.qy`${(0,o.ux)(e=>t,d(!1),{positioning:!0})}`}(e.weatherData.hourlyForecast))} ${(0,i.z)(()=>e,r.qy` ${(0,o.ux)(e=>e.weatherData.forecastData,d(!0),{positioning:!0})}`)}</ul></a>`}var u=a(14939);const m=r.qy`<a class="wea_tc_container" data-t="${e=>e.t("trendChartTelemetryTag")}" style="text-decoration: none;" href="${e=>{var t,a;return(null===(t=e.weatherData)||void 0===t||null===(t=t.summaryData)||void 0===t?void 0:t.summaryLink)||(null===(a=e.weatherData)||void 0===a?void 0:a.link)}}" target=${e=>e.target} tabIndex="0"><div class="wea_trend_body"><weather-card-chart id="weather-card-chart" :weatherData="${e=>e.weatherData}" :chartDataType=${e=>"nowcastAcc"} :telemetry="${e=>e.telemetry.trendChartNonNav}" :isRtl="${e=>"rtl"==document.dir}" @chartDataError=${(e,t)=>{(0,u.nu)(t.event,"weather-card-chart",!1)}} @chartError=${(e,t)=>{(0,u.nu)(t.event,"weather-card-chart",!0)}}></weather-card-chart></div></a>`;var v=a(59537),w=a(17254);const g=r.qy`<div class="mobile-upsell-container" data-t="${e=>e.t("mobileUpsellTelemetryTag")}"><img class="mobile-device-img" src=${e=>(0,v.VG)("mobile/division/entry-device.gif")}></img><div class="mobile-info"><img class="qr-code" src=${e=>`https://${w.T3.StaticDomain}/staticsb/statics/latest/weather/img/pwa-promo/${e.mobileUpsellImg}.png`}></img><div class="mobile-upsell-desc" title=${e=>e.mobileUpsellDesc}>${e=>e.mobileUpsellDesc}</div></div></div>`,x=r.qy`<li key="tab_${e=>e.type}" class="tab ${(e,t)=>t.parent.getMiniL1TabStyle(e.idx==t.parent.tabIdx,t.parent.weatherData)}" part="weather-miniL1-tab" tabIndex="${0}" aria-label="${e=>e.title}" data-index="${e=>e.idx}" title="${e=>e.title}" data-t="${(e,t)=>t.parent.telemetryWithIndex("miniL1TabTelemetryTags",t.index)||e.type}" role="tab" aria-selected="${(e,t)=>e.idx==t.parent.tabIdx}" @click="${(e,t)=>{var a;return null===(a=t.parent)||void 0===a?void 0:a.handleMiniL1TabClick(e.idx)}}" @keydown="${(e,t)=>{var a;return null===(a=t.parent)||void 0===a?void 0:a.onKeyDown(t.event,e.idx)}}"><span>${e=>e.title}</span><span class="${(e,t)=>e.idx==t.parent.tabIdx?"pill":""}"></span></li>`,f=r.qy` ${(0,i.z)(e=>e&&e.type,x)}
`,b=r.qy`<div class="wea_tab_container"><ul class="wea_tab_list">${(0,o.ux)(e=>e.weatherData.teaserCustomData.tabs,f,{positioning:!0})}</ul></div>`;var $=a(11622),y=a(98907);const k=r.qy`<weather-tide-chart :weatherData=${e=>e.weatherData}
 :target=${e=>e.target} :t=${e=>e.t.bind(e)}></weather-tide-chart>`;function C(e){return r.qy`
    <weather-aq-forecast :tabType="${t=>e}" :weatherData=${e=>e.weatherData} :createSVG="${e=>e.createSVG}" :t=${e=>e.t.bind(e)} :layout=${e=>e.layout} :target=${e=>e.target}></weather-aq-forecast>
`}const T=r.qy`
    <weather-eplant-special-day
        :weatherData=${e=>e.weatherData} :ePlantLabel=${e=>e.ePlantLabel} :ePlantIcon=${e=>e.ePlantIcon}
       :t=${e=>e.t.bind(e)}
    ></weather-eplant-special-day>
`,_=r.qy`
    <weather-eplant-button
        :weatherData=${e=>e.weatherData} :ePlantLabel=${e=>e.ePlantLabel} :ePlantIcon=${e=>e.ePlantIcon}
       :t=${e=>e.t.bind(e)}
    ></weather-eplant-button>
`,z=r.qy`
    <weather-trend-curve
        :weatherData=${e=>e.weatherData} :target=${e=>e.target} :t=${e=>e.t.bind(e)}
    ></weather-trend-curve>
`,D=r.qy`
<a class="wea_bc_container" data-t="${e=>e.t("precipitationChartTelemetryTag")}"
    href="${e=>{var t,a;return(null===(t=e.weatherData)||void 0===t||null===(t=t.teaserCustomData)||void 0===t?void 0:t.chartLink)||(null===(a=e.weatherData)||void 0===a?void 0:a.link)}}"
    target=${e=>e.target} tabIndex="0">
    <weather-svg-chart :svgWidth="${e=>256}" :svgHeight="${e=>124}" :type=${e=>y.dQ.PrecipBar}
        :data="${e=>{var t;return null===(t=e.weatherData)||void 0===t?void 0:t.weatherState}}" :createSVG="${e=>e.createSVG}"></weather-svg-chart>
</a>
`,S=r.qy`
<weather-mini-map
    :weatherData=${e=>e.weatherData} 
    :target=${e=>e.target}
    :minimap=${e=>e.minimap}
    :minimapWce=${e=>e.minimapWce}
    :cardType=${e=>e.cardType}
></weather-mini-map>`,I=r.qy`
    <div class="video-entry-wce-container"> 
        ${e=>{var t;return(0,$.yN)(e.videoEntryWce,{properties:{target:e.target,telemetryExt:null===(t=e.telemetry)||void 0===t||null===(t=t.weatherCard)||void 0===t||null===(t=t.contract)||void 0===t?void 0:t.ext,link:e.weatherData.link,videoData:e.weatherData.teaserCustomData}})}}
    </div>`,W=r.qy`
    <weather-summary-bold
        :weatherData=${e=>e.weatherData} 
        :layout=${e=>e.layout}
        :target=${e=>e.target}
        :t=${e=>e.t.bind(e)}
    ></weather-summary-bold>`,R=r.qy`
    <a class="wea_bc_container" data-t="${e=>e.t.bind(e)}" href="${e=>{var t,a;return(null===(t=e.weatherData)||void 0===t||null===(t=t.teaserCustomData)||void 0===t?void 0:t.chartLink)||(null===(a=e.weatherData)||void 0===a?void 0:a.link)}}" target=${e=>e.target} tabIndex="0">
        <weather-svg-chart :svgWidth="${e=>256}" :svgHeight="${e=>124}" :type=${e=>y.dQ.TemperatureRisk} :displayContent="${e=>{var t;return null===(t=e.weatherData)||void 0===t?void 0:t.displayContent}}"
            :data="${e=>{var t;return null===(t=e.weatherData)||void 0===t?void 0:t.weatherState}}" :createSVG="${e=>e.createSVG}" :strings="${e=>{var t;return null===(t=e.weatherData)||void 0===t||null===(t=t.teaserCustomData)||void 0===t?void 0:t.strings}}">
        </weather-svg-chart>
    </a>`;var E=a(32122);const q=r.qy`
    ${(0,i.z)(e=>e.minimap,S)}
`,P=r.qy`
    ${(0,i.z)(e=>"eplantSpecialDay"===e.primaryCarousel,T)}
    ${(0,i.z)(e=>"video"===e.primaryCarousel,I)}
    ${(0,i.z)(e=>"temperatureRisk"===e.primaryCarousel,R)}
    ${(0,i.z)(e=>"eplantSpecialDay"!==e.primaryCarousel&&"video"!==e.primaryCarousel&&"temperatureRisk"!==e.primaryCarousel,q)}
`,U=r.qy`
    <div class="weather-forecast-region-container">
        ${(0,i.z)(e=>"minimap"==e.getDynamicTemplateType(),S)}
        ${(0,i.z)(e=>"forecastlist"==e.getDynamicTemplateType(),e=>p(e.showDailyForecast()))}
        ${(0,i.z)(e=>"specialUx"==e.getDynamicTemplateType(),P)}
    </div>
`,B=r.qy`
    ${(0,i.z)(e=>(0,E.Cy)(e.layout),r.qy`
        ${(0,i.z)(e=>!e.primaryCarousel,e=>p(e.showDailyForecast()))}
        ${(0,i.z)(e=>e.primaryCarousel,U)}
    `)}
    ${(0,i.z)(e=>(0,E.ck)(e.layout),r.qy`
        <div class="weather-large-more-container">
            ${P}
        </div>
    `)}
`,A=r.qy`
    <div class="weather-TkRt-content ${e=>(0,E.ck)(e.layout)?"weather-TkRt-content-large":"weather-TkRt-content-medium"}">
        ${(0,i.z)(e=>e.weatherData.rotationDisplayContentType&&"minimap"==e.weatherData.rotationDisplayContentType[0],P)}
        ${(0,i.z)(e=>e.weatherData.rotationDisplayContentType&&"minimap"!=e.weatherData.rotationDisplayContentType[0],e=>p(e.showDailyForecast()))}
    </div>
`;function j(e){const t=e&&e.type||"";if(["hiking","running","cycling","stargazing","gardening","picnic"].includes(t))return a=t,r.qy`
    <a class="wea_bc_container" data-t="${e=>e.t("activityTelemetryTag")}"
        href="${e=>{var t,a;return(null===(t=e.weatherData)||void 0===t||null===(t=t.summaryData)||void 0===t?void 0:t.summaryLink)||(null===(a=e.weatherData)||void 0===a?void 0:a.link)}}"
        target=${e=>e.target} tabIndex="0">
        <weather-svg-chart :svgWidth="${e=>256}" :svgHeight="${e=>124}" :type=${e=>a}
            :params="${e=>{var t,a;return{lifeActivityData:null===(t=e.weatherData)||void 0===t?void 0:t.lifeActivityData,hourlyForecast:null===(a=e.weatherData)||void 0===a?void 0:a.hourlyForecast}}}"
            :strings="${e=>{var t;return null===(t=e.weatherData)||void 0===t?void 0:t.activityLabel}}"
            :data="${e=>{var t;return null===(t=e.weatherData)||void 0===t?void 0:t.weatherState}}"
            :tabType="${e=>a}"
            :displayContent="${e=>{var t;return null===(t=e.weatherData)||void 0===t?void 0:t.displayContent}}"
            :createSVG="${e=>e.createSVG}"></weather-svg-chart>
    </a>
    `;var a;switch(t){case"aqiWeek":case"aqiToday":return C(t);case"map":return S;case"precipitation":return D;case"nowcastacc":return m;case"upsell":return g;case"tide":return k;case"daily":return p(!0);default:return p(!1)}}const L=r.qy`
    ${(0,i.z)(e=>e.weatherData&&e.weatherData.teaserCustomData&&e.weatherData.teaserCustomData.tabs&&e.weatherData.teaserCustomData.tabs[e.tabIdx],r.qy`
        ${b}
        <div class="wea_main_content">
            <div class="wea_content wea_content_a">
                ${e=>j(e.weatherData.teaserCustomData.tabs[e.tabIdx])}
            </div>
        </div>
    `)}
`,X=r.qy`
    <div class="weather-middle-template">
        ${(0,i.z)(e=>!e.showRotationUX(),B)}
        ${(0,i.z)(e=>e.showRotationUX(),A)}
    </div>
`,M=r.qy`
    ${e=>p(e.showDailyForecast())}
`;const F=r.qy`
    <div class="weather-bottom-template">
        ${(0,i.z)(e=>!e.showRotationUX(),M)}
        <div class="weather-TkRt-content">
            ${(0,i.z)(e=>e.showRotationUX(),e=>function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const a=e&&e.rotationDisplayContentType&&e.rotationDisplayContentType[1];switch(a){case"minimap":return P;case"aqiToday":case"aqiWeek":return C(a);default:return p(t)}}(e.weatherData,e.showDailyForecast()))}
        <div>
    </div>
`;let H=r.qy``,N=r.qy``;const O=r.qy` ${H} ${N} `,V=r.qy`<div class="weather-top-daily-summary-template"><div class="weather-top-daily-summary-title"><div class="weather-top-daily-summary-icon">${e=>{var t;return null===(t=e.weatherData.teaserCustomData)||void 0===t?void 0:t.currentIconGlyph}}</div><div class="weather-top-daily-summary-cap weather-top-daily-summary">${e=>{var t;return null===(t=e.weatherData.teaserCustomData)||void 0===t||null===(t=t.content)||void 0===t?void 0:t.cap}}</div></div><div class="weather-top-daily-summary-body weather-top-daily-summary">${e=>{var t;return null===(t=e.weatherData.teaserCustomData)||void 0===t||null===(t=t.content)||void 0===t?void 0:t.body}}</div></div>`,G=r.qy`<a class="wea_tc_container wea_summary_container" data-t="${e=>e.t("trendChartTelemetryTag")}" href="${e=>{var t,a;return(null===(t=e.weatherData)||void 0===t||null===(t=t.summaryData)||void 0===t?void 0:t.summaryLink)||(null===(a=e.weatherData)||void 0===a?void 0:a.link)}}" target=${e=>e.target} tabIndex="0"><div class="wea_trend_body"><weather-daily-chart id="weather-daily-chart" :weatherData="${e=>e.weatherData}" :chartDataType="${e=>{var t;return null===(t=e.weatherData)||void 0===t||null===(t=t.teaserCustomData)||void 0===t?void 0:t.chartDataType}}" :weatherDataOrigin="${e=>{var t;return null===(t=e.weatherData)||void 0===t?void 0:t.weatherState}}" :height="${e=>{var t;return null===(t=e.weatherData)||void 0===t||null===(t=t.teaserCustomData)||void 0===t?void 0:t.height}}" @chartDataError=${(e,t)=>{(0,u.nu)(t.event,"weather-daily-chart",!1)}} @chartError=${(e,t)=>{(0,u.nu)(t.event,"weather-daily-chart",!0)}}></weather-daily-chart></div></a>`,K=r.qy`<div class="weather-summary-container" style="height: 100%;">${V} ${(0,i.z)(e=>"dailySummary"==e.weatherData.uxFormat,r.qy`${G}`)}<div></div></div>`;var J=a(11548);var Q=a(31951),Y=a(32830);const Z=(0,v.xm)("AqiNoColor.svg",Q.q2),ee=r.qy` ${(0,i.z)(e=>{var t;return!(null!==(t=e.weatherData.summaryData)&&void 0!==t&&t.disableArrow)},r.qy`<a class="weather-alert-arrow" part="weather-alert-arrow" href="${e=>{var t;return(null===(t=e.weatherData.summaryData)||void 0===t?void 0:t.summaryLink)||e.weatherData.link}}" target=${e=>e.target} data-t="${e=>e.t("summaryTelemetryTag")}" title="${e=>e.weatherData.ctaContent||""}" aria-label="${e=>e.weatherData.ctaContent||""}" tabIndex="-1">${s.y}</a>`)}
`,te=r.qy`<div class="summary-oneline part="summary-oneline"><div><a class="summary-oneline-info" part="summary-oneline-info" title="${e=>{var t,a;return(null===(t=e.weatherData.summaryData)||void 0===t?void 0:t.summaryHint)||(null===(a=e.weatherData.summaryData)||void 0===a?void 0:a.summaryLine1)||""}}" href="${e=>{var t;return(null===(t=e.weatherData.summaryData)||void 0===t?void 0:t.summaryLink)||e.weatherData.link}}" target=${e=>e.target} data-t="${e=>e.t("summaryTelemetryTag")}">${(0,i.z)(e=>{var t;return null===(t=e.weatherData.summaryData)||void 0===t?void 0:t.summaryIcon},r.qy`<span>${e=>{var t;return null===(t=e.weatherData.summaryData)||void 0===t?void 0:t.summaryIcon}}</span>`)}<span>${e=>{var t;return null===(t=e.weatherData.summaryData)||void 0===t?void 0:t.summaryLine1}}</span></a></div>${ee}</div>`,ae=r.qy`<a class="summary-twoline ${e=>"aqi"===e.primaryCarousel?"aqi-summary-twoline":""} ${e=>{var t;return(null===(t=e.weatherData.summaryData)||void 0===t?void 0:t.additionalCss)??""}}" part=""summary-twoline" title="${e=>{var t;return(null===(t=e.weatherData.summaryData)||void 0===t?void 0:t.summaryHint)||""}}" href="${e=>{var t;return(null===(t=e.weatherData.summaryData)||void 0===t?void 0:t.summaryLink)||e.weatherData.link}}" target=${e=>e.target} data-t="${e=>e.t("summaryTelemetryTag")}"><div class="summary-twoline-info" part="summary-twoline-info">${(0,i.z)(e=>{var t;return null===(t=e.weatherData.summaryData)||void 0===t?void 0:t.summaryIcon},r.qy`<div class="summary-twoline-icon" part="summary-twoline-icon">${e=>e.weatherData.summaryData.summaryIcon}</div>`)}<span class="summary-twoline-item1">${e=>{var t;return null===(t=e.weatherData.summaryData)||void 0===t?void 0:t.summaryLine1}}</span></div><div class="summary-twoline-sig" part="summary-twoline-sig"><span class="summary-twoline-item2">${e=>{var t;return null===(t=e.weatherData.summaryData)||void 0===t?void 0:t.summaryLine2}}</span></div></a>${ee}
`,re=r.qy` ${(0,i.z)(e=>{var t,a;return(null===(t=e.weatherData.summaryData)||void 0===t?void 0:t.summaryLine1)&&!(null!==(a=e.weatherData.summaryData)&&void 0!==a&&a.summaryLine2)},te)} ${(0,i.z)(e=>{var t,a;return(null===(t=e.weatherData.summaryData)||void 0===t?void 0:t.summaryLine1)&&(null===(a=e.weatherData.summaryData)||void 0===a?void 0:a.summaryLine2)},ae)}
`,ie=r.qy`<div style="z-index: 2; display: flex;">${re}</div>`,ne=r.qy` ${(0,i.z)(e=>e.weatherData.precipitation,r.qy`<li class="weather-current-container-item" part="weather-current-container-item" title="${e=>(e.weatherData.precipitationLabel?e.weatherData.precipitationLabel+" ":"")+e.weatherData.precipitation}" aria-label="${e=>(e.weatherData.precipitationLabel?e.weatherData.precipitationLabel+" ":"")+e.weatherData.precipitation}">${s.x}<span class="weather-current-container-item-text" part="weather-current-container-item-text">${e=>e.weatherData.precipitation}</span></li>`)} ${(0,i.z)(e=>e.weatherData.aqi,r.qy`<li class="weather-current-container-item" part="weather-current-container-item"><a class="weather-current-container-item" part="weather-current-container-item" href="${e=>e.weatherData.link}" target=${e=>e.target} title="${e=>(e.weatherData.aqiLabel?e.weatherData.aqiLabel+" ":"")+e.weatherData.aqi}" aria-label="${e=>(e.weatherData.aqiLabel?e.weatherData.aqiLabel+" ":"")+e.weatherData.aqi}" data-t="${e=>e.t("weatherAqiTelemetryTag")}"><img src="${e=>Z}" class="nocolor-img-nm-aqi"></img><span class="weather-current-container-item-text" part="weather-current-container-item-text">${e=>e.weatherData.aqi}</span></a></li>`)}
`,oe=r.qy`<div class="weather-current-info" part="weather-current-info">${(0,i.z)(e=>e.weatherData.weatherSummary,r.qy`<span class="weather-current-summary" part="weather-current-summary" title="${e=>e.weatherData.weatherSummary}">${e=>e.weatherData.weatherSummary}</span>`)} ${(0,i.z)(e=>!e.weatherData.weatherSummary,r.qy`<span class="weather-current-skycode" part="weather-current-skycode" title="${e=>e.weatherData.skycode}">${e=>e.weatherData.skycode}</span>`)} ${(0,i.z)(e=>(e.weatherData.precipitation||e.weatherData.aqi)&&(!e.weatherData.weatherSummary||e.weatherData.weatherSummary.length<=15)&&(!e.minimap||e.minimap.mapType!==Y.iM.Precipitation),r.qy`<div><ul class="weather-current-container" part="weather-current-container">${ne}</ul></div>`)}</div>`,le=r.qy` ${(0,i.z)(e=>!e.showSummary,oe)} ${(0,i.z)(e=>e.showSummary,ie)}
`,se=r.qy`
    <div class="weather-current-leftpane">
        <div class="weather-current-temp-container">
            ${de={tabIndex:0},r.qy`<a class="weather-current-image" part="weather-current-image" style="text-decoration: none;" tabIndex="-1" href="${e=>e.weatherData.link}" target=${e=>e.target} title="${e=>e.weatherData.skycode}" data-t="${e=>e.t("weaConditionTelemetryTag")}">${e=>e.weatherData.skycodeIcon}</a><a class="${e=>e.longSummary?"weather-current-temperature-lsummary":"weather-current-temperature"}" part="${e=>e.longSummary?"weather-current-temperature-lsummary":"weather-current-temperature"}" aria-label="${e=>e.weatherData.temperature+e.weatherData.unitSetting}" title="${e=>e.weatherData.temperature+e.weatherData.unitSetting}" tabIndex="${de.tabIndex}" href="${e=>e.weatherData.link}" target=${e=>e.target} data-t="${e=>e.t("weaConditionTelemetryTag")}"><span class="weather-current-temperature-num part="weather-current-temperature-num">&lrm;${e=>e.weatherData.temperature}&lrm;</span><div class="${e=>e.longSummary?"weather-degree-switch-lsummary":"weather-degree-switch"}" part="${e=>e.longSummary?"weather-degree-switch-lsummary":"weather-degree-switch"}"><span class="weather-degree-current weather-degree-no-switch part="weather-degree-current">&lrm;${e=>e.weatherData.unitSetting}&lrm;</span></div></a>`}
        </div>
    </div>
    ${le}
`;var de;const he=r.qy`
    <div class="weather-top-template weather-top-margin" part="weather-top-template" style=${e=>(0,J.NV)(e.weatherData.temperature)}>
        ${(0,i.z)(e=>e.weatherData&&e.weatherData.summaryData&&e.weatherData.summaryData.boldUx,W)}
        ${(0,i.z)(e=>{var t;return!(null!==(t=e.weatherData.summaryData)&&void 0!==t&&t.boldUx)},se)}
    </div>
`,ce=r.qy`<div class="weather-top-template" style=${e=>(0,J.NV)(e.weatherData.temperature)}>${se}</div><div class="weather-listchart-mid">${p(!0)}</div><a class="weather-listchart-bottom" data-t="${e=>e.t("trendChartTelemetryTag")}" href="${e=>{var t;return null===(t=e.weatherData)||void 0===t?void 0:t.link}}" target=${e=>e.target} tabIndex="0"><weather-daily-chart id="weather-daily-chart" :weatherData="${e=>e.weatherData}" :chartDataType="${()=>"24hTrend"}" :weatherDataOrigin="${e=>{var t;return null===(t=e.weatherData)||void 0===t?void 0:t.weatherState}}" :height="${()=>108}" @chartDataError=${(e,t)=>{(0,u.nu)(t.event,"weather-daily-chart",!1)}} @chartError=${(e,t)=>{(0,u.nu)(t.event,"weather-daily-chart",!0)}}></weather-daily-chart></a>`,pe=r.qy`
${(0,i.z)(e=>{var t;return(0,E.cw)(e.layout)&&(null===(t=e.weatherData)||void 0===t||null===(t=t.backgroundData)||void 0===t?void 0:t.backgroundMask)},r.qy`<div class="weather-background-mask-${e=>{var t;return null===(t=e.weatherData)||void 0===t||null===(t=t.backgroundData)||void 0===t?void 0:t.backgroundMask}}" part="weather-background-mask""></div>`)}
`,ue=r.qy` ${he} ${(0,i.z)(e=>!(0,E.cw)(e.layout),X)} ${(0,i.z)(e=>(0,E.ck)(e.layout),F)}
`,me=r.qy`<div class="weather-minil1-template">${he} ${L}</div>`;const ve=r.qy` ${(0,i.z)(e=>"teaserPanel"==e.weatherData.uxFormat,O)} ${(0,i.z)(e=>"miniL1"==e.weatherData.uxFormat&&e.weatherData.teaserCustomData&&e.weatherData.teaserCustomData.tabs,me)} ${(0,i.z)(e=>"matchAndCurve"==e.weatherData.uxFormat,z)} ${(0,i.z)(e=>"curve"==e.weatherData.uxFormat,z)} ${(0,i.z)(e=>"tideExtremeCurve"==e.weatherData.uxFormat,k)} ${(0,i.z)(e=>"dailySummary"==e.weatherData.uxFormat,K)} ${(0,i.z)(e=>"listWithChart"==e.weatherData.uxFormat,ce)}
`,we=r.qy`
${(0,i.z)(e=>e.animationSource,n)}
${(0,i.z)(e=>e.weatherData&&e.weatherData.uxFormat&&"default"!=e.weatherData.uxFormat,ve)}
${(0,i.z)(e=>e.weatherData&&!(e.weatherData.uxFormat&&"default"!=e.weatherData.uxFormat),ue)}
`,ge=r.qy` ${(0,i.z)(e=>null==e?void 0:e.weatherData,r.qy`<div class="weather-container" part="weather-container">${(0,i.z)(e=>e.animationSource,n)} ${e=>function(e){const{uxFormat:t="default",teaserCustomData:a}=e||{};switch(t){case"teaserPanel":return O;case"matchAndCurve":case"curve":return z;case"tideExtremeCurve":return k;case"dailySummary":return K;case"listWithChart":return ce;case"miniL1":return a&&a.tabs?me:ue;default:return ue}}(e.weatherData)} ${(0,i.z)(e=>e.enableEplantIcon(),_)} ${pe}</div>`)}
`},37256:function(e,t,a){a.d(t,{R:function(){return c}});var r=a(64187),i=a(22131),n=a(74849),o=a(50882),l=a(37998),s=a(57416),d=a(95239),h=a(48751);const c=n.A`
    ${(0,r.V)("block")} :host {
        --elevation: 4;
        display: block;
        contain: content;
        height: var(--card-height, 100%);
        width: var(--card-width, 100%);
        box-sizing: border-box;
        background: ${d.p};
        color: ${h.l};
        border-radius: calc(${s.JU} * 1px);
        ${l.ET}
    }

    :host(:hover) {
        --elevation: 8;
    }

    :host(:focus-within) {
        --elevation: 8;
    }

    :host {
        content-visibility: auto;
    }
`.withBehaviors((0,i.mr)(n.A`
            :host {
                forced-color-adjust: none;
                background: ${o.A.Canvas};
                box-shadow: 0 0 0 1px ${o.A.CanvasText};
            }
        `))},38380:function(e,t,a){a.d(t,{v:function(){return r}});const r=(0,a(25717).T)()},43774:function(e,t,a){a.d(t,{p4:function(){return v},ls:function(){return w},vA:function(){return m},nF:function(){return u}});var r=a(68136),i=a(68009);var n=a(95239);const{create:o}=r.G,l=o("neutral-stroke-strong-hover-delta",40),s=o("neutral-stroke-strong-active-delta",16),d=o("neutral-stroke-strong-focus-delta",25);var h=a(31023);const{create:c}=r.G,p=c({name:"neutral-stroke-strong-recipe"},{evaluate:e=>function(e,t,a,r,n,o){const l=(0,i.F)(t),s=e.colorContrast(t,a),d=e.closestIndexOf(s);return{rest:s,hover:e.get(d+l*r),active:e.get(d+l*n),focus:e.get(d+l*o)}}(e(h.r),e(n.p),3,e(l),e(s),e(d))}),u=c("neutral-stroke-strong-rest",e=>e(p).evaluate(e).rest),m=c("neutral-stroke-strong-hover",e=>e(p).evaluate(e).hover),v=c("neutral-stroke-strong-active",e=>e(p).evaluate(e).active),w=c("neutral-stroke-strong-focus",e=>e(p).evaluate(e).focus)},58242:function(e,t,a){function r(e,t,a){if(!e||!t)throw new Error("PlacementInteractionLimit: Invalid parameters.");return(r,i)=>{var n;if(!r)return!1;let o=(null==i?void 0:i[r.id])||[];const{relatedPlacementIds:l,repeat:s}=a||{};if(null!=l&&l.length){const e=l.filter(e=>e!==r.id).flatMap(e=>(null==i?void 0:i[e])||[]);o=[...o,...e]}const d=null===(n=o)||void 0===n?void 0:n.filter(t=>t.type===e);if(!d.length)return!0;if(!s)return d.length<t;const{lookbackIntervalMS:h,repeatsNumber:c}=s;return!(d.length>=c*t)&&o.filter(e=>e.ts>Date.now()-h).length<t}}a.d(t,{n:function(){return r}})},64958:function(e,t,a){a.d(t,{vV:function(){return B}});var r=a(11548),i=a(36861),n=a(74849),o=a(89580);const l=n.A` .weather-current-temperature{flex-direction:row-reverse}.weather-degree-switch{margin-left:8px}`,s=n.A` .weather-current-image{box-sizing:border-box;display:flex;align-items:center;z-index:2}.weather-current-temperature{font-size:46px;text-decoration:none}.weather-current-temperature-lsummary{font-size:44px;text-decoration:none}.weather-current-temperature,.weather-current-temperature-lsummary{line-height:44px;color:var(--textStyle);text-shadow:0px 0.4px 0.9px rgba(0,0,0,0.13),0px 0px 2.22px rgba(0,0,0,0.11);display:flex;align-items:flex-start;z-index:2;margin-inline-start:4px;margin-inline-end:0px}.weather-current-temperature-num{line-height:44px;font-size:46px;overflow:hidden}.weather-degree-switch,.weather-degree-switch-lsummary{display:flex;flex-flow:column nowrap;align-items:center;margin-inline-start:2px;height:44px}.weather-degree-current{font-size:${o.Y};
        line-height: ${o.v};position:relative;top:2px;color:var(--textStyle);text-shadow:0px 0.4px 0.9px rgba(0,0,0,0.13),0px 0px 2.22px rgba(0,0,0,0.11)}.weather-degree-no-switch{font-size:16px;line-height:24px;top:0px;margin-inline-start:0px}`;var d=a(64187),h=a(22131);const c=n.A` .weather-arrow-glyph{transform:rotate(180deg)}`,p=n.A` .weather-current-precipitation-glyph{margin-inline-start:auto;margin-inline-end:4px;fill:currentcolor;filter:invert(var(--iconInvert))}.weather-arrow-glyph{height:12px;width:auto;position:relative;top:0px;filter:invert(var(--iconInvert));flex-shrink:0;width:7px}`;var u=a(73477),m=a(41123);const v=n.A` .weather-current-container{float:right}.weather-alert-arrow{padding-left:6px}.weather-alert-arrow:${u.N}{text-decoration:underline;outline:none !important;border:1px solid var(--textStyle)}.summary-oneline-info{text-align:right}`,w=n.A` .weather-current-container{float:left}.weather-alert-arrow{padding-right:6px}.weather-alert-arrow:${u.N}{text-decoration:underline;outline:none !important;border:1px solid var(--textStyle)}.summary-oneline-info{text-align:left}`,g=n.A` .weather-current-info,.summary-twoline,.summary-oneline{max-width:var(--summaryLen);max-height:48px;font-size:12px;line-height:16px}.summary-twoline{margin-inline-start:auto;margin-inline-end:0px;color:var(--textStyle);fill:var(--textStyle);text-shadow:0px 0.4px 0.9px rgba(0,0,0,0.13),0px 0px 2.22px rgba(0,0,0,0.11);font-weight:600;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;text-align:end;text-decoration:none}.summary-twoline-info{display:flex;align-items:center;margin-inline-start:auto;margin-inline-end:0px;height:16px}.summary-twoline-icon{margin-inline:auto 4px;display:flex}.summary-twoline-sig{display:flex}.summary-twoline-icon img{margin-top:0px;height:16px;width:16px}.weather-lightning-icon img{height:13px !important;width:13px !important}.summary-twoline-item1,.summary-twoline-item2{overflow:hidden;text-overflow:ellipsis}.summary-twoline-item2{margin-inline-start:auto;margin-inline-end:0px}.weather-alert-arrow{z-index:2;display:flex;flex-direction:column;justify-content:center}.weather-alert-arrow:${u.N}{text-decoration:underline;outline:none !important;border:1px solid var(--textStyle)}.summary-oneline{z-index:2;margin-inline-start:auto;margin-inline-end:0px;display:flex;flex-direction:row;align-items:center;overflow:hidden;text-overflow:ellipsis;color:var(--textStyle)}.summary-oneline-info{text-decoration:none;color:var(--textStyle);font-size:12px;line-height:16px;letter-spacing:0.12px;font-weight:400;-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box;text-align:right}.summary-oneline-info .weather-current-precipitation-glyph{margin-bottom:3px}.summary-oneline-info:hover,.summary-oneline-info:active,.summary-oneline-info:${u.N}{text-decoration:underline;outline:none !important}.summary-oneline-info img{vertical-align:bottom;margin-inline-end:4px;margin-top:0px;max-height:16px;max-width:16px}.nocolor-img-precipitation{height:14px !important;width:7px !important}.summary-twoline{z-index:2;text-transform:none}.summary-twoline:hover,.summary-twoline:active,.summary-twoline:${u.N}{text-decoration:underline;outline:none !important}.aqi-summary-twoline{font-weight:400 !important;font-size:12px !important}.tide-summary{overflow:inherit}.tide-summary .summary-twoline-item2{opacity:0.6;position:relative;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;white-space:normal;padding-inline-end:9px;box-sizing:border-box;margin-inline-end:-9px}.weather-current-container-item{display:flex;align-items:center;text-decoration:none}.weather-current-container-item-text{font-size:12px;line-height:20px;display:flex;margin-inline-end:0px;color:var(--textStyle);text-shadow:0px 0.4px 0.9px rgba(0,0,0,0.13),0px 0px 2.22px rgba(0,0,0,0.11)}.weather-current-info{margin-inline-start:auto;margin-inline-end:0px;color:var(--textStyle);text-shadow:0px 0.4px 0.9px rgba(0,0,0,0.13),0px 0px 2.22px rgba(0,0,0,0.11);flex-flow:column nowrap;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;text-align:end}.weather-current-skycode,.weather-current-summary{color:var(--textStyle);text-shadow:0px 0.4px 0.9px rgba(0,0,0,0.13),0px 0px 2.22px rgba(0,0,0,0.11)}.weather-current-skycode{line-height:20px;font-size:12px;display:inline-block}.weather-current-summary{font-size:${m.K};
        line-height: ${m.Z};display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.weather-current-container{display:flex;margin:0px;float:right}.weather-current-container > li{padding-inline-start:10px;padding-inline-end:1px;padding-bottom:0px}.nocolor-img-aqi,.nocolor-img-nm-aqi{filter:invert(var(--iconInvert))}.nocolor-img-aqi{width:12px !important;height:12px !important}.nocolor-img-nm-aqi{margin-inline:auto 4px}`;var x=a(7896),f=a(57416),b=a(86856);const $=n.A` .tab:first-child{border-radius:0px 3px 3px 0px}.tab:last-child{border-radius:3px 0px 0px 3px}`,y=n.A` .wea_tab_container{display:flex}.wea_tab_list{height:26px;max-width:268px;color:var(--textStyle);padding:0;margin:0;font-size:12px;line-height:20px;display:flex;flex-wrap:nowrap}.tab{height:26px;display:inline-block;padding:0 11px;background:var(--weather-card-forecast-background);border:1px solid rgba(255,255,255,0.0698);cursor:pointer;position:relative;line-height:24px;min-width:59px;text-align:center;box-sizing:border-box;z-index:2;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.tab:first-child{border-radius:3px 0px 0px 3px}.tab:last-child{border-radius:0px 3px 3px 0px}.tab:not(:first-child){border-left:none}.tab:hover{background:var(--weather-card-forecast-hover-background)}.tab:${u.N}{outline:none;offset:none;border:1px solid var(--textStyle);border-radius:0}.wea_tab_a{border:1px solid rgba(255,255,255,0.1);background:var(--weather-card-forecast-hover-background)}.wea_tab_b{border:1px solid rgba(255,255,255,0.3)}.pill{width:16px;height:3px;background:rgba(96,205,255,1);border-radius:3px;position:absolute;bottom:0;left:calc(50% - 8px)}.wea_main_content{position:relative;width:268px;height:136px;margin:4px 0 0 0;padding:0}.wea_content{position:relative;width:268px;height:136px;display:none;z-index:1}.wea_content_a{display:block}`,k=n.A` .weather-forecast-container{z-index:2;overflow:hidden;text-decoration:none}.weather-forecast{list-style:none;display:flex;justify-content:space-between;padding:0px;margin:0px}.weather-forecast-item{width:50px;min-width:50px;border-radius:4px;height:136px;text-align:center;background:var(--weather-card-forecast-background)}.weather-forecast-item:hover,.weather-forecast-item:active,.weather-forecast-item:${u.N}{background:var(--weather-card-forecast-hover-background)}.weather-forecast-item::part(control){padding:10px 0 12px;border:0;color:var(--textStyle)}.weather-forecast-icon{display:inline-flex;margin:14px 0 12px}.weather-forecast-day{font-size:12px;line-height:16px;text-transform:uppercase;font-weight:500;text-transform:none}.weather-forecast-temperature,.weather-forecast-high,.weather-forecast-low{font-size:14px;line-height:22px}.weather-forecast-high,.weather-forecast-temperature{font-weight:600}.weather-forecast-high{margin-bottom:4px}.weather-forecast-temperature{margin-bottom:6px}.weather-forecast-precipitation{font-size:12px;letter-spacing:0.12px}.weather-forecast-precipitation img{width:6px;height:8px;margin:0}`,C=n.A` .nowcast-animation-bg-large{height:128px}.nowcast-animation-bg-medium,.nowcast-animation-bg-full{height:118px}.nowcast-animation-bg-small,.nowcast-animation-bg-half{bottom:0}.nowcast-animation-bg{position:absolute;overflow:hidden;top:-48px;left:-16px;right:-16px}.nowcast-animation-img{width:3104px;height:206px;opacity:0.45;top:0;position:absolute;animation:NowcastingAnimationMedium 1s infinite;animation-timing-function:steps(1)}@keyframes NowcastingAnimationMedium{0%,6.25%{left:0px}6.85%,13.1%{left:-207px}13.7%,19.95%{left:-414px}20.55%,26.8%{left:-621px}27.4%,33.65%{left:-828px}34.25%,40.5%{left:-1035px}41.1%,47.35%{left:-1242px}47.95%,54.2%{left:-1449px}54.8%,61.05%{left:-1656px}61.65%,67.9%{left:-1863px}68.5%,74.75%{left:-2070px}75.35%,81.6%{left:-2277px}82.2%,88.45%{left:-2484px}89.05%,95.3%{left:-2691px}95.9%,100%{left:-2898px}}`,T=n.A`
.wea_tc_container{padding:8px;box-sizing:border-box;text-decoration:none;display:flex;flex-direction:column;position:relative;overflow:hidden;border-radius:6px;width:268px;height:136px;background:rgba(255,255,255,.06)}.wea_tc_container:${u.N}{border:1px solid #fff;border-radius:0;background:rgba(255,255,255,0.1);outline-offset:-2px},.wea_trend_body{position:relative;overflow:hidden;flex:auto;display:flex;flex-direction:row}`,_=n.A`
.mobile-upsell-container{height:100%;width:100%;background:linear-gradient(135.49deg,#e4f0fb -5.04%,#faf0f8 59.39%);border-radius:4px;display:flex;color:#2B2B2B}.mobile-device-img{height:121px;width:56px;align-self:center;margin-left:20px}.qr-code{margin-top:3px;height:80px;width:80px}.mobile-info{height:121px;margin-left:10px;align-self:center;align-items:center;display:flex;flex-direction:column;max-width:180px}.mobile-upsell-desc{font-size:10px;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;margin-top:auto}`;var z=a(8238);const D=n.A` .weather-summary-container{display:flex;flex-direction:column;justify-content:space-between;height:100%}.weather-top-daily-summary-template{letter-spacing:0.12px;font-size:12px}.weather-top-daily-summary-title{display:flex;align-items:center;color:rgba(255,255,255,1)}.weather-top-daily-summary-icon{padding-right:8px;display:flex}.weather-top-daily-summary-cap{font-weight:600;-webkit-line-clamp:2}.weather-top-daily-summary-body{font-size:12px;color:rgba(255,255,255,0.8);-webkit-line-clamp:3}.weather-top-daily-summary{display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;line-height:16px}.wea_summary_container{padding:0;z-index:1}`,S=n.A` .weather-listchart-top{margin:4px 0 6px}.weather-listchart-mid{margin-bottom:4px}:host([isDailyWithChartUX]) .weather-current-image img{width:32px;height:32px}:host([isDailyWithChartUX]) .weather-current-temperature-num{line-height:28px;font-size:32px}:host([isDailyWithChartUX]) .weather-current-temperature,.weather-current-temperature-lsummary{line-height:initial}:host([isDailyWithChartUX]) .weather-degree-switch,.weather-degree-switch-lsummary{margin-inline-start:2px;height:initial}:host([isDailyWithChartUX]) .weather-degree-no-switch{font-size:14px;line-height:19px}:host([isDailyWithChartUX]) .summary-oneline-info{-webkit-line-clamp:2}:host([isDailyWithChartUX]) .weather-forecast-item{height:66px;width:52px;min-width:52px;border-radius:6px}:host([isDailyWithChartUX]) .weather-forecast-icon{margin:2px 0;display:flex;justify-content:center}:host([isDailyWithChartUX]) .weather-forecast-icon img{width:20px;height:20px}:host([isDailyWithChartUX]) .weather-forecast-item::part(control){padding:4px 0}:host([isDailyWithChartUX]) .weather-forecast-day{font-weight:400}:host([isDailyWithChartUX]) .weather-forecast-high{line-height:18px;margin:0px}.weather-listchart-bottom{width:100%;height:108px;z-index:2;cursor:pointer;border-radius:6px;background:rgba(255,255,255,0.08);overflow:hidden;text-decoration:none}.weather-forecast-item-nonnav{padding:4px 0;color:var(--textStyle);box-sizing:border-box;z-index:2}`;var I=a(4968);const W=n.A` :host([layout="small"][isRubyCard=true]) .weather-top-margin,:host([layout="half"][isRubyCard=true]) .weather-top-margin{margin:20px 0 0px}:host([layout="large"][isRubyCard=true]) .weather-top-margin{margin:0px 0px 5px}:host([layout="large"][isRubyCard=true]) .weather-middle-template{margin:0 0 8px}:host([layout="large"][isRubyCard=true]) .weather-bottom-template{margin:0}:host([isRubyCard=true]) .weather-forecast-icon{margin:4px 0 2px}:host([isRubyCard=true]) .weather-bottom-template{height:116px}:host([isRubyCard=true]) .weather-forecast-item{height:116px}`,R=n.A`
    ${v}
`,E=n.A`
    ${$}
    ${w}
    ${l}
    ${c}
`,q=n.A` :host{forced-color-adjust:auto}`,P=n.A`
    ${y}
    ${z.O}
    ${(0,d.V)("flex")}
    ${g}
    ${p}
    
    ${k}
    ${s}
    ${C}
    ${T}
    ${_}
    ${D}
    ${S}
    ${W} :host{position:relative;width:auto;height:100%;box-sizing:border-box;font-family:${x.O};flex-direction:column;outline:none}.weather-background-mask-wildfire{position:absolute;bottom:0px;left:0px;top:0px;right:0px;border-radius:8px;background:linear-gradient(245.69deg,rgba(235,235,235,0) -2.63%,#EBEBEB 71.96%)}.weather-container{overflow:hidden;padding:0px;display:flex;flex-direction:column;justify-content:space-between;border-radius:calc(${f.Pb} * 1px);height:100%;background:transparent;width:268px}.weather-top-template{text-decoration:none;display:flex;align-items:center;justify-content:space-between}:host([layout="small"]) .weather-top-margin,:host([layout="half"]) .weather-top-margin{margin:2px 0 16px}:host([layout="full"]) .weather-top-margin,:host([layout="medium"]) .weather-top-margin{margin:4px 0 16px}:host([layout="large"]) .weather-top-margin{margin:4px 0px 18px}.weather-middle-template{height:136px;padding:0px}:host([layout="full"]) .weather-middle-template,:host([layout="medium"]) .weather-middle-template{margin:0 0 20px}:host([layout="large"]) .weather-middle-template{margin:0 0 18px}.weather-bottom-template{height:136px;padding:0px}:host([layout="large"]) .weather-bottom-template{margin:0 0 22px}.weather-top-panel-template{height:224px;width:268px;z-index:2}.weather-minil1-template .weather-top-template{margin-bottom:6px !important}.weather-large-more-container{height:100%;position:relative;z-index:2;display:flex;justify-content:center}.weather-forecast-region-container{position:relative;height:100%;z-index:2;overflow:hidden}.weather-current-temp-container{display:flex;flex-direction:row;align-items:center;justify-content:space-between}.weather-current-leftpane{display:flex;flex-direction:column;gap:4px;margin:2px 0px}.weather-TkRt-content{height:100%;position:relative;z-index:2}.wea_bc_container{text-decoration:none;display:block;position:relative;overflow:hidden;height:136px;width:268px;border-radius:8px;background:rgba(255,255,255,0.0605);padding-top:12px;padding-inline-end:12px;box-sizing:border-box}.wea_bc_container:${u.N}{border:1px solid var(--textStyle) !important}.minimap-wce-container,.video-entry-wce-container{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(240,240,240,0.1);border-radius:6px}`,U=n.A`
    ${P} a,button,fluent-button,fluent-anchor{${I.f}
    }

`.withBehaviors(new b.t(R,E),(0,h.mr)(q)),B=r.j5.compose({name:"msft-weather-super-sd-card",template:i.N3,styles:U,shadowOptions:{delegatesFocus:!0}})},72326:function(e,t,a){a.d(t,{x:function(){return o},y:function(){return l}});var r=a(31951),i=a(59537),n=a(96950);const o=n.qy`<img src="${e=>(0,i.xm)("waterDrop.svg",r.q2)}" class="weather-current-precipitation-glyph" alt="precipitation"></img>`,l=n.qy`<img src="${e=>(0,i.xm)("rightArrow.svg",r.q2)}" class="weather-arrow-glyph" alt="arrow"></img>`},72526:function(e,t,a){a.d(t,{L:function(){return m}});var r=a(56911),i=a(96193),n=a(47429),o=a(60815),l=a(22870),s=a(38493),d=a(95239),h=a(31023),c=a(24458),p=a(5291),u=a(57606);class m extends i.z{cardFillColorChanged(e,t){if(t){const e=(0,l.Hs)(t);null!==e&&(this.neutralPaletteSource=t,d.p.setValueFor(this,p.q.create(e.r,e.g,e.b)))}}neutralPaletteSourceChanged(e,t){if(t){const e=(0,l.Hs)(t),a=p.q.create(e.r,e.g,e.b);h.r.setValueFor(this,u.p.create(a))}}handleChange(e,t){this.cardFillColor||d.p.setValueFor(this,e=>e(c.M3).evaluate(e,e(d.p)))}connectedCallback(){super.connectedCallback();const e=(0,n.Zo)(this);if(e){const t=o.cP.getNotifier(e);t.subscribe(this,"fillColor"),t.subscribe(this,"neutralPalette"),this.handleChange(e,"fillColor")}}}(0,r.Cg)([(0,s.CF)({attribute:"card-fill-color",mode:"fromView"}),(0,r.Sn)("design:type",String)],m.prototype,"cardFillColor",void 0),(0,r.Cg)([(0,s.CF)({attribute:"neutral-palette-source",mode:"fromView"}),(0,r.Sn)("design:type",String)],m.prototype,"neutralPaletteSource",void 0)},75003:function(e,t,a){a.d(t,{m:function(){return l}});var r=a(37180),i=a(72526),n=a(37256),o=a(38380);const l=i.L.compose({name:`${r.c.prefix}-card`,template:o.v,styles:n.R})},88817:function(e,t,a){a.d(t,{m:function(){return U}});var r=a(56911),i=a(38493),n=a(60815),o=a(55230),l=a(92011),s=a(56863);class d extends l.L{}class h extends((0,s.dx)(d)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class c extends h{constructor(){super(),this.initialValue="on",this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=this.defaultChecked??!1,this.dirtyChecked=!1))}connectedCallback(){super.connectedCallback(),this.validate(),"radiogroup"!==this.parentElement?.getAttribute("role")&&null===this.getAttribute("tabindex")&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=this.defaultChecked??!1,this.dirtyChecked=!1))}isInsideRadioGroup(){return null!==this.closest("[role=radiogroup]")}keypressHandler(e){if(e.key!==o.gG)return!0;this.checked||this.readOnly||(this.checked=!0)}clickHandler(e){this.disabled||this.readOnly||this.checked||(this.checked=!0)}}(0,r.Cg)([(0,i.CF)({attribute:"readonly",mode:"boolean"}),(0,r.Sn)("design:type",Boolean)],c.prototype,"readOnly",void 0),(0,r.Cg)([n.sH,(0,r.Sn)("design:type",String)],c.prototype,"name",void 0),(0,r.Cg)([n.sH,(0,r.Sn)("design:type",Array)],c.prototype,"defaultSlottedNodes",void 0);var p=a(37180),u=a(74849),m=a(64187),v=a(73477),w=a(60993),g=a(22131),x=a(50882),f=a(48196),b=a(74838),$=a(26920),y=a(43774),k=a(46203),C=a(7896),T=a(48751),_=a(41123),z=a(95239),D=a(14996),S=a(79288);const I=u.A`
    ${(0,m.V)("inline-flex")} :host {
        --input-size: calc((${f.D} / 2) + ${b.vR});
        align-items: center;
        outline: none;
        margin: calc(${b.vR} * 1px) 0;
        ${""} user-select: none;
        position: relative;
        flex-direction: row;
        transition: all 0.2s ease-in-out;
    }

    .control {
        position: relative;
        width: calc(var(--input-size) * 1px);
        height: calc(var(--input-size) * 1px);
        box-sizing: border-box;
        border-radius: 50%;
        border: calc(${$.XA} * 1px) solid ${y.nF};
        background: ${k.le};
        outline: none;
        cursor: pointer;
    }

    .label__hidden {
        display: none;
        visibility: hidden;
    }

    .label {
        font-family: ${C.O};
        color: ${T.l};
        ${""} padding-inline-start: calc(${b.vR} * 2px + 2px);
        margin-inline-end: calc(${b.vR} * 2px + 2px);
        cursor: pointer;
        font-size: ${_.K};
        line-height: ${_.Z};
    }

    .control,
    .checked-indicator {
        flex-shrink: 0;
    }

    .checked-indicator {
        position: absolute;
        top: 5px;
        left: 5px;
        right: 5px;
        bottom: 5px;
        border-radius: 50%;
        display: inline-block;
        background: ${T.l};
        fill: ${T.l};
        opacity: 0;
        pointer-events: none;
    }

    :host(:enabled) .control:hover {
        background: ${k.jM};
        border-color: ${y.vA};
    }

    :host(:enabled) .control:active {
        background: ${k.RS};
        border-color: ${y.p4};
    }

    :host(:${v.N}) .control {
        box-shadow: 0 0 0 2px ${z.p}, 0 0 0 4px ${D.WN};
        border-color: ${D.WN};
    }

    :host([disabled]) .label,
    :host([readonly]) .label,
    :host([readonly]) .control,
    :host([disabled]) .control {
        cursor: ${w.Z};
    }

    :host([aria-checked="true"]) .checked-indicator {
        opacity: 1;
    }

    :host([disabled]) {
        opacity: ${S.q};
    }
`.withBehaviors((0,g.mr)(u.A`
            .control {
                forced-color-adjust: none;
                border-color: ${x.A.FieldText};
                background: ${x.A.Field};
            }
            :host(:enabled) .control:hover,
            .control:active {
                border-color: ${x.A.Highlight};
                background: ${x.A.Field};
            }
            :host(:${v.N}) .control {
                border-color: ${x.A.Highlight};
                box-shadow: 0 0 0 2px ${x.A.Field},
                    0 0 0 4px ${x.A.FieldText};
            }
            :host([aria-checked="true"]:${v.N}:enabled) .control {
                border-color: ${x.A.Highlight};
                box-shadow: 0 0 0 2px ${x.A.Field},
                    0 0 0 4px ${x.A.FieldText};
            }
            :host([aria-checked="true"]:enabled) .control:hover,
            .control:active {
                border-color: ${x.A.Highlight};
                background: ${x.A.Highlight};
            }
            :host([aria-checked="true"]) .checked-indicator {
                background: ${x.A.Highlight};
                fill: ${x.A.Highlight};
            }
            :host([aria-checked="true"]) .control:hover .checked-indicator {
                background: ${x.A.HighlightText};
                fill: ${x.A.HighlightText};
            }
            :host([disabled]) {
                forced-color-adjust: none;
                opacity: 1;
            }
            :host([disabled]) .label {
                color: ${x.A.GrayText};
            }
            :host([disabled]) .control,
            :host([aria-checked="true"][disabled]) .control:hover,
            .control:active {
                background: ${x.A.Field};
                border-color: ${x.A.GrayText};
            }
            :host([disabled]) .checked-indicator,
            :host([aria-checked="true"][disabled]) .control:hover .checked-indicator {
                fill: ${x.A.GrayText};
                background: ${x.A.GrayText};
            }
        `));var W=a(96950),R=a(82774),E=a(79109),q=a(18893);const P=function(e={}){return W.qy`
        <template
            role="radio"
            aria-checked="${e=>e.checked}"
            aria-required="${e=>e.required}"
            aria-disabled="${e=>e.disabled}"
            aria-readonly="${e=>e.readOnly}"
            @keypress="${(e,t)=>e.keypressHandler(t.event)}"
            @click="${(e,t)=>e.clickHandler(t.event)}"
        >
            <div part="control" class="control">
                <slot name="checked-indicator">
                    ${(0,q.R)(e.checkedIndicator)}
                </slot>
            </div>
            <label
                part="label"
                class="${e=>["label",!e.defaultSlottedNodes?.length&&"label__hidden"].filter(Boolean).join(" ")}"
            >
                <slot
                    ${(0,R.e)({property:"defaultSlottedNodes",filter:E.g})}
                ></slot>
            </label>
        </template>
    `}({checkedIndicator:W.qy`
        <div part="checked-indicator" class="checked-indicator"></div>
    `}),U=c.compose({name:`${p.c.prefix}-radio`,template:P,styles:I})}}]);