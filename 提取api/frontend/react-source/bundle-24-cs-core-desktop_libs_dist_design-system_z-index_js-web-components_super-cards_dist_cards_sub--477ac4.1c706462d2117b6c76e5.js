"use strict";(self.homePageWebpackChunks=self.homePageWebpackChunks||[]).push([["cs-core-desktop_libs_dist_design-system_z-index_js-web-components_super-cards_dist_cards_sub--477ac4"],{1413:function(t,e,i){i.d(e,{P:function(){return r},y:function(){return a}});var o=i(96950),n=i(82774);function r(t,e){return e?.some(e=>e.slot===t)}function a(t){const e=t.slotName??"";return o.qy`
        <div id="${e}" class="${e}" part="${e}">
            <slot
                name="${e}"
                ${t.slottedRef?(0,n.e)(t.slottedRef):""}
            >
                ${t.slottedDefault??""}
            </slot>
        </div>
    `}},1590:function(t,e,i){i.d(e,{J:function(){return s}});var o=i(59836),n=i(73893),r=i(80090),a=i(65614);function s(){o.m.define(a.G.registry),n.m.define(a.G.registry),r.m.define(a.G.registry)}},10840:function(t,e,i){i.d(e,{B:function(){return y},X:function(){return w}});var o=i(61138),n=i(95239),r=i(48751),a=i(74849),s=i(17254),d=i(43103),c=i(50130);const l=`${s.T3.StaticsUrl}latest/`,h=`${l}common/icons/PopupArrowDark.svg`,u=`${l}common/icons/PopupArrowLight.svg`,g=`${l}common/icons/DisclaimerDark.svg `,p=`${l}common/icons/DisclaimerLight.svg `,v=`${l}icons-wc/icons/AdChoice.svg`,m=`${l}icons-wc/icons/AdChoiceDark.svg`,f=`${l}icons-wc/icons/AdChoiceLight.svg`,x=a.A` .disclaimer .disclaimer-svg{background:url(${g}) no-repeat center}.popup-arrow-svg{background:url(${h}) no-repeat center}.ad-choice-mono > .ad-choice-svg{background:url(${m}) no-repeat center}@media (forced-colors:active) and (prefers-color-scheme:light){.ad-choice-mono > .ad-choice-svg{background:url(${f}) no-repeat center;
        }
    }
`,$=a.A` .disclaimer .disclaimer-svg{background:url(${p}) no-repeat center}.popup-arrow .popup-arrow-svg{background:url(${u}) no-repeat center}.ad-choice-mono > .ad-choice-svg{background:url(${f}) no-repeat center}@media (forced-colors:active) and (prefers-color-scheme:dark){.ad-choice-mono > .ad-choice-svg{background:url(${m}) no-repeat center;
        }
    }
`,y=a.A` .ad-choice-hidden{max-width:0px;min-width:0px;visibility:hidden;width:0;padding:0;margin:0;border:0}.ad-choice,.${(0,c.nP)("ad-choice")}{margin-inline-start:10px}.ad-choice > .ad-choice-svg{background:url(${v}) no-repeat center}@media (forced-colors:active) and (prefers-color-scheme:dark){.ad-choice > .ad-choice-svg{background:url(${m}) no-repeat center}}@media (forced-colors:active) and (prefers-color-scheme:light){.ad-choice > .ad-choice-svg{background:url(${f}) no-repeat center}}.ad-choice-mono > .ad-choice-svg{opacity:0.53}.ad-choice-mono-wide > .ad-choice-svg{opacity:0.67;background:url(${m}) no-repeat center}@media (forced-colors:active) and (prefers-color-scheme:dark){.ad-choice-mono-wide > .ad-choice-svg{background:url(${m}) no-repeat center}}@media (forced-colors:active) and (prefers-color-scheme:light){.ad-choice-mono-wide > .ad-choice-svg{background:url(${f}) no-repeat center}}.ad-choice-svg{display:inline-block;width:12px;height:12px}.ad-choice-mobile{margin-inline-start:6px;padding-inline-start:4px;height:20px;margin-bottom:1px}.ad-footer,.${(0,c.nP)("ad-footer")}{align-items:center;display:flex;flex-direction:row}.disclaimer{cursor:pointer;margin-inline-end:2px}.disclaimer .container{display:none}.disclaimer .popup-arrow{bottom:36px;position:absolute}.disclaimer .popup-offset{background:${n.p};
        border-radius: 2px;
        bottom: 48px;
        color: ${r.l};
        font-size: ${o.k};margin-inline:-120px;max-width:152px;max-height:48px;padding:8px;position:absolute;width:152px;z-index:1}.disclaimer .popup-text{display:-webkit-box;overflow:hidden;white-space:normal;text-align:center;text-overflow:ellipsis;-webkit-line-clamp:2;-webkit-box-orient:vertical}.disclaimer .disclaimer-svg,.popup-arrow .popup-arrow-svg{display:inline-block;width:15px;height:15px}.disclaimer:hover .container{display:block}.popup{filter:drop-shadow(0px 0px 2px rgba(0,0,0,0.12)) drop-shadow(0px 4px 8px rgba(0,0,0,0.14))}`.withBehaviors(new d.N($,x)),b=a.A` .disclaimer .disclaimer-svg{background:url(${p}) no-repeat center}.popup-arrow .popup-arrow-svg{background:url(${u}) no-repeat center}.ad-choice-mono > .ad-choice-svg{background:url(${f}) no-repeat center}.ad-choice-mono > .ad-choice-svg{opacity:0.8}`,w=a.A`
    ${y}
`.withBehaviors(new d.N(b,b))},32542:function(t,e,i){i.d(e,{T:function(){return r}});var o=i(65022),n=i(93468);const r=(0,i(44449).sx)(o.WQp,"sendAdImageLoadError")(t=>{let{isBoost:e,...i}=t;(0,n.vV)(e?o.H77:o.MxD,"Ads image is not loaded properly",a(i),{shouldSampleErrorsForTreatement1:!e})}),a=t=>{let{id:e,rLink:i,imgLink:o,event:n,retryCount:r,isRetrySuccessful:a,status:s,statusText:d,type:c,redirected:l,errorMessage:h}=t;return JSON.stringify({id:e,rLink:i,imgLink:o||n&&n.target.src,retryCount:r,isRetrySuccessful:a,status:s,statusText:d,type:c,redirected:l,errorMessage:h})}},37416:function(t,e,i){i.d(e,{D:function(){return s}});var o=i(16091),n=i(17720),r=i(74180);class a extends r.f{constructor(){super(...arguments),this.configRef={experienceType:"SuperComponentData",instanceSrc:"default"}}static getInstance(){return n.vv.get("__SuperComponentDataHelper__",()=>new a)}}const s=(0,o.G)(a)},42792:function(t,e,i){i.d(e,{R7:function(){return v},e:function(){return g},kc:function(){return p},nH:function(){return u}});var o=i(57416),n=i(55153),r=i(95239),a=i(26920),s=i(48751),d=i(64187),c=i(22131),l=i(74849),h=i(50882);const u=l.A`
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
`,g=l.A`
    ${(0,d.V)("flex")} :host {
        background: ${r.p};
        outline: calc(${a.XA} * 1px) solid ${n.cu};
        border-radius: calc((${o.JU} - ${a.XA}) * 1px);
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
        box-sizing: border-box;
        color: ${s.l};
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
            box-shadow: 0 0 0 calc(${a.XA} * 1px) ${n.cu},
                0px 2px 4px rgba(0, 0, 0, 0.04);
        }

        :host(:hover) {
            box-shadow: 0 0 0 calc(${a.XA} * 1px) ${n.cu},
                0px 4px 8px rgba(0, 0, 0, 0.14);
        }

        @media (prefers-color-scheme: dark) {
            :host(:hover) {
                box-shadow: 0 0 0 calc(${a.XA} * 1px) ${n.cu},
                    0px 4px 8px rgba(0, 0, 0, 0.26);
            }
        }
    }

    :host([size="_1x_1y"]) {
        width: calc(${n.QG} * 1px);
        height: calc(${n.l8} * 1px);
    }

    :host([size="_1x_2y"]) {
        width: calc(${n.QG} * 1px);
        height: calc((${n.l8} * 2px) + (${n.Sn} * 1px));
    }

    :host([size="_2x_2y"]) {
        width: calc((${n.QG} * 2px) + (${n.Sn} * 1px));
        height: calc((${n.l8} * 2px) + (${n.Sn} * 1px));
    }

    :host([size="_2x_1y"]) {
        width: calc((${n.QG} * 2px) + (${n.Sn} * 1px));
        height: calc(${n.l8} * 1px);
    }

    ::slotted(*) {
        color: inherit;
    }
`,p=(0,c.mr)(l.A`
            :host {
                background: ${h.A.Canvas};
                color: ${h.A.CanvasText};
            }
        `),v=l.A`
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
`.withBehaviors(p)},48520:function(t,e,i){i.d(e,{D:function(){return d},G:function(){return s}});var o=i(65022),n=i(98216);let r,a;const s=()=>{a=new Map,r=new IntersectionObserver(t=>{for(const[t,e]of a.entries()){if(!(t&&e&&e.cardElement&&e.extTelemetry))return;const i=c(e.cardElement),o=i&&JSON.parse(i),n=o&&o.ext;if(!n||!n.row||!n.col)return;const r=`${n.row}-${n.col}`;t!==r&&(a.delete(t),a.set(r,{cardElement:e.cardElement,extTelemetry:n}))}t.forEach(t=>{const e=t.target,i=e&&c(e),o=i&&JSON.parse(i),n=o&&o.ext;if(!n||!n.row||!n.col)return;const r=`${n.row}-${n.col}`;t.isIntersecting?a.set(r,{cardElement:e,extTelemetry:n}):a.has(r)&&a.delete(r)})},{threshold:.99}),window.addEventListener("beforeunload",()=>{if("hidden"!==document.visibilityState)for(const[t,e]of a.entries()){if(!(t&&e&&e.cardElement&&e.extTelemetry))return;const i=t.split("-");if(isNaN(Number(i[0]))||isNaN(Number(i[1])))return;const o=parseFloat(i[0]),n=parseFloat(i[1]);l(e,a.get(`${o+1}-${n}`));l(e,a.get(`${o}-${n+1}`))}})},d=t=>{r&&t&&r.observe(t)};function c(t){if(t.classList&&t.classList.contains("infopane")){const e=t.querySelector("cs-article-card"),i=e&&e.shadowRoot&&e.shadowRoot.querySelector("cs-content-card");return i&&i.anchorTelemetryTag}return t.anchorTelemetryTag?t.anchorTelemetryTag:t.getAttribute("data-t")?t.getAttribute("data-t"):void 0}function l(t,e){if(!(t&&e&&e.cardElement&&e.extTelemetry&&t!==e))return;const i=t.cardElement.getBoundingClientRect(),r=e.cardElement.getBoundingClientRect();if(0===i.height||0===i.width||0===r.height||0===r.width)return;if(!(i.top>r.bottom||i.right<r.left||i.bottom<r.top||i.left>r.right)){const a=t.extTelemetry,s=e.extTelemetry;n.YT.sendAppErrorEvent({...o.ABd,message:"Feed cards are overlapping",pb:{...o.ABd.pb,customMessage:`{"${t.cardElement.id}": { "position": ${JSON.stringify(i)}, "slot": ${a.slot}, "template": "${a.template}", "row": ${a.row}, "col": ${a.col} },"${e.cardElement.id}": { "position": ${JSON.stringify(r)}, "slot": ${s.slot}, "template": "${s.template}", "row": ${s.row}, "col": ${s.col}}}`}})}}},49513:function(t,e,i){i.d(e,{RG:function(){return c},mQ:function(){return l}});var o=i(12870),n=i(65022),r=i(93468),a=i(17720);var s;!function(t){t.InterstitialNativeAdCard="InterstitialNativeAdCard",t.LinearFeedNativeAdCard="LinearFeedNativeAdCard",t.ViewsNativeAd="ViewsNativeAd",t.InfopaneCardTemplate="InfopaneCardTemplate",t.NativeAdCardTemplate="NativeAdCardTemplate",t.SuperNativeAdCard="SuperNativeAdCard",t.NativeAdCardT1Full="NativeAdCardT1Full",t.MobileAdCardTemplate="MobileAdCardTemplate",t.SuperMobileNativeAdCardNeutron="SuperMobileNativeAdCardNeutron",t.EdgeMobileInfopaneCard="EdgeMobileInfopaneCard",t.MobileEOABCard="MobileEOABCard"}(s||(s={}));const d=t=>{var e;let{id:i,destinationUrl:o,imgLink:s,renderAreaSize:d}=t;if(null==s||!s.startsWith("https://www.bing.com/th?")||!d)return;const c=function(t){const e=new URLSearchParams(t.split("?")[1]),i=Number(e.get("w")),o=Number(e.get("h"));return isNaN(i)||isNaN(o)||i<=0||o<=0?null:{width:i,height:o}}(s),l=null===(e=location)||void 0===e?void 0:e.href;if(!c){const t={id:i,currentPageUrl:l,destinationUrl:o,imgLink:s,renderAreaSize:d};return void(0,r.vV)(n.Ztd,"Ad Size Mismatch: Can not found proper image size from response image URL",void 0,t)}const h=a.vv.get("AdSizeMismatchRecord")||new Map,u=(t=>t?t.replace(/\d+$/,""):"")(i);if(!h.has(u)){if(h.set(u,1),a.vv.set("AdSizeMismatchRecord",h),0===d.height||0===c.height)return;const t=d.width!==c.width||d.height!==c.height,e=d.width/d.height,g=c.width/c.height,p=Math.round(100*Math.abs(e-g))/100;if(t&&p>.03){const t={id:i,currentPageUrl:l,destinationUrl:o,imgLink:s,renderAreaSize:d,renderAreaSizeRatio:e.toFixed(2),responseImageSize:c,responseImageSizeRatio:g.toFixed(2)};(0,r.vV)(n.Ztd,"Ad Size Mismatch: Detected size mismatch between response image VS render area",void 0,t)}}},c=(t,e,i,o)=>{if(!o||!i)return;const n=o.offsetWidth||Number(o.width),r=o.offsetHeight||Number(o.height);n&&r&&d({id:t,destinationUrl:e,imgLink:i,renderAreaSize:{width:n,height:r}})},l=(t,e,i)=>{var n,r,a,s,d,l,h,u,g,p,v;if(o.Rb.CurrentFlightSet.has("prg-ad-size-mis"))try{switch(i){case"LinearFeedNativeAdCard":case"NativeAdCardTemplate":case"SuperNativeAdCard":case"NativeAdCardT1Full":case"MobileAdCardTemplate":case"SuperMobileNativeAdCardNeutron":case"MobileEOABCard":c(t.id,t.destinationUrl,null===(n=t.imageData)||void 0===n?void 0:n.source,null===(r=e.parent)||void 0===r||null===(r=r.shadowRoot)||void 0===r||null===(a=r.querySelector)||void 0===a?void 0:a.call(r,`#${t.id}-img`));break;case"EdgeMobileInfopaneCard":c(t.id,t.destinationUrl,null===(s=t.imageData)||void 0===s?void 0:s.source,null===(d=e.parentContext)||void 0===d||null===(d=d.parent)||void 0===d||null===(d=d.shadowRoot)||void 0===d||null===(l=d.querySelector)||void 0===l?void 0:l.call(d,`#${t.id}-img`));break;case"ViewsNativeAd":c(t.id,t.destinationUrl,t.imageUrl,null===(h=e.parent)||void 0===h||null===(h=h.shadowRoot)||void 0===h||null===(u=h.querySelector)||void 0===u||null===(u=u.call(h,"msft-content-card"))||void 0===u?void 0:u.querySelector(`#${t.id}-img`));break;case"InfopaneCardTemplate":c(t.id,t.destinationUrl,null===(g=t.imageData)||void 0===g?void 0:g.source,null===(p=e.parentContext)||void 0===p||null===(p=p.parentContext)||void 0===p||null===(p=p.parent)||void 0===p||null===(p=p.shadowRoot)||void 0===p||null===(v=p.querySelector)||void 0===v?void 0:v.call(p,`#${t.id}-img`))}}catch(t){return null}}},50866:function(t,e,i){i.d(e,{L9:function(){return r},NZ:function(){return n},qJ:function(){return o}});const o={_1x_1y:"_1x_1y",_1x_2y:"_1x_2y",_2x_2y:"_2x_2y",_2x_1y:"_2x_1y"},n={DarkPlum:"dark-plum",DarkDesert:"dark-desert",DarkDawn:"dark-dawn",DarkSea:"dark-sea",DarkOrange:"dark-orange",DarkTropic:"dark-tropic",DarkMerlot:"dark-merlot",DarkPurple:"dark-purple",DarkGreen:"dark-green"},r={LightBlue:"light-blue",LightPurple:"light-purple",LightSky:"light-sky",LightPink:"light-pink",LightYellow:"light-yellow",LightBluebird:"light-bluebird",LightOrange:"light-orange",LightAqua:"light-aqua",LightGreen:"light-green"}},55162:function(t,e,i){i.d(e,{j:function(){return r}});var o=i(96950),n=i(91640);const r=o.qy` ${(0,n.z)(t=>t.attribution,o.qy`<cs-attribution slot="attribution"><span class="ad-attribution" style="unicode-bidi: embed;">${t=>t.attribution}</span></cs-attribution>`)}`},59646:function(t,e,i){i.d(e,{kM:function(){return h},pS:function(){return u}});var o=i(17254),n=i(19548);const r=[],a=1e3,s=1e3,d=new Map;function c(){return"vp"===n._3.getQueryParameterByName("reqsrc",location.href)||"1"===n._3.getQueryParameterByName("vptest",location.href)}function l(t){var e;return null===o.T3||void 0===o.T3||null===(e=o.T3.CurrentRequestTargetScope)||void 0===e?void 0:e.pageExperiments.some(e=>e.includes(t))}function h(t,e,i){t&&"function"==typeof e&&!r.includes(t)&&(c()||(l("prg-mousehovrev")?(r.push(t),setTimeout(()=>{!function(t,e){if(!r.includes(t))return;e();const i=r.indexOf(t);i>-1&&r.splice(i,1)}(t,e)},i??a)):function(t,e,i){const o=Date.now(),n=d.get(t)||{enterTimer:null,lastHoverTime:0,pendingLeave:!1};if(o-n.lastHoverTime<s)return;n.enterTimer&&clearTimeout(n.enterTimer);n.enterTimer=window.setTimeout(()=>{e(),n.lastHoverTime=Date.now(),n.enterTimer=null},i||a),d.set(t,n)}(t,e,i)))}function u(t,e){if(l("prg-mousehovrev")){if(!c())if(t&&r.includes(t)){const e=r.indexOf(t);e>-1&&r.splice(e,1)}else"function"==typeof e&&e()}else!function(t,e){if(!t||"function"!=typeof e||c())return;const i=d.get(t);if(!i)return void e();if(i.enterTimer)return clearTimeout(i.enterTimer),i.enterTimer=null,void d.delete(t);i.lastHoverTime>0&&e();d.delete(t)}(t,e)}},59836:function(t,e,i){i.d(e,{m:function(){return m}});var o=i(65614),n=i(92011);class r extends n.L{}var a=i(7896),s=i(61138),d=i(48751),c=i(74838),l=i(74849),h=i(64187),u=i(22131),g=i(50882);const p=l.A`
    ${(0,h.V)("inline-flex")} :host {
        box-sizing: border-box;
        font-family: ${a.O};
        font-size: ${s.k};
        font-weight: 400;
        line-height: ${s.F};
        align-items: center;
        color: ${d.l};
        min-height: 16px;
    }

    .content {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        align-self: baseline;
    }

    ::slotted([slot="image"]) {
        display: flex;
        margin-inline-end: calc(${c.vR} * 2px);
    }
`.withBehaviors((0,u.mr)(l.A`
            :host,
            .content {
                color: ${g.A.ButtonText};
                fill: currentcolor;
            }
        `));const v=i(96950).qy`
    <slot name="image"></slot>
    <span part="content" class="content">
        <slot></slot>
    </span>
`,m=r.compose({name:`${o.G.prefix}-attribution`,styles:p,template:v})},64183:function(t,e,i){i.d(e,{o:function(){return a},t:function(){return r}});var o=i(68009),n=i(49399);function r(t,e,i,n,r,a,s){const d=t.closestIndexOf(e);return null==s&&(s=(0,o.F)(e)),{rest:t.get(d+s*i),hover:t.get(d+s*n),active:t.get(d+s*r),focus:t.get(d+s*a)}}function a(t,e,i,o,a,s,d=void 0,c,l,h,u,g=void 0){return(0,n.H)(e)?r(t,e,c,l,h,u,g):r(t,e,i,o,a,s,d)}},67599:function(t,e,i){i.d(e,{qn:function(){return S},LK:function(){return E}});var o=i(96950),n=i(91640),r=i(39957),a=i(60402),s=i(930),d=i(79765),c=i(82286),l=i(17254),h=i(27942),u=i(77246),g=i(50130),p=i(49513),v=i(32542),m=i(91278),f=i(79464),x=i(56911),$=i(92011),y=i(38493),b=i(60815);const w=["src","max-retries","retry-delay","id","slot"];class _ extends $.L{constructor(){super(...arguments),this.image=null,this.fallbackImage=null,this.enableImgRetry=!1,this.src="",this.fallbackSrc="",this.maxRetries=3,this.retryDelay=1e3,this.retries=0,this.isError=!1,this.loaded=!1,this.timer=void 0,this.tempUrl=""}connectedCallback(){super.connectedCallback(),this.forwardAttributes()}disconnectedCallback(){super.disconnectedCallback(),window.clearTimeout(this.timer),URL.revokeObjectURL(this.tempUrl)}srcChanged(t,e){t!==e&&(this.retries=0,this.isError=!1,this.loaded=!1,clearTimeout(this.timer),this.timer=void 0,URL.revokeObjectURL(this.tempUrl),this.tempUrl="")}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),w.includes(y.CF.name)||this.forwardAttributes()}handleError(){this.isError=!0,this.showFallbackImage(),this.enableImgRetry?this.imgRetry():this.triggerOnErrorCallback()}imgRetry(){const t=this.maxRetries??3,e=this.retryDelay??1e3;this.retries<t?(this.retries++,clearTimeout(this.timer),this.timer=window.setTimeout(()=>{this.requestImg()},e)):(this.showFallbackImage(),this.triggerOnErrorCallback())}async requestImg(){if(this.image)try{const t=await fetch(this.src);if(t.ok){const e=await t.blob(),i=URL.createObjectURL(e);this.tempUrl=i,this.image.src=i,(0,v.T)({id:this.id,imgLink:this.src,retryCount:this.retries,isRetrySuccessful:!0})}else{const e=t.type,i=t.status,o=t.statusText;(0,v.T)({id:this.id,imgLink:this.src,retryCount:this.retries,isRetrySuccessful:!1,status:i,statusText:o,type:e}),this.imgRetry()}}catch(t){const e=t.message;(0,v.T)({id:this.id,imgLink:this.src,retryCount:this.retries,isRetrySuccessful:!1,errorMessage:e}),this.imgRetry()}}showFallbackImage(){this.image&&this.fallbackSrc&&(this.image.src=this.fallbackSrc)}triggerOnErrorCallback(){const t=new CustomEvent("error",{bubbles:!0,cancelable:!0,detail:{message:`Failed to load image after ${this.retries} retries.`}});this.dispatchEvent(t)}handleLoad(){this.isError=!1,this.loaded=!0,this.dispatchEvent(new Event("load",{bubbles:!0,composed:!0}))}forwardAttributes(){((t,e)=>t.filter(t=>!e.includes(t.name)))(Array.from(this.attributes),w).forEach(t=>{var e;null===(e=this.image)||void 0===e||e.setAttribute(t.name,t.value)})}}(0,x.Cg)([(0,y.CF)({mode:"boolean",attribute:"enable-img-retry"})],_.prototype,"enableImgRetry",void 0),(0,x.Cg)([y.CF,b.sH],_.prototype,"src",void 0),(0,x.Cg)([(0,y.CF)({attribute:"fallback-src"})],_.prototype,"fallbackSrc",void 0),(0,x.Cg)([(0,y.CF)({attribute:"max-retries",converter:y.R$})],_.prototype,"maxRetries",void 0),(0,x.Cg)([(0,y.CF)({attribute:"retry-delay",converter:y.R$})],_.prototype,"retryDelay",void 0),(0,x.Cg)([b.sH],_.prototype,"retries",void 0),(0,x.Cg)([b.sH],_.prototype,"isError",void 0),(0,x.Cg)([b.sH],_.prototype,"loaded",void 0);const k=i(74849).A`
`,z=o.qy`<template><img ${(0,a.K)("image")} part="image" :src="${t=>t.src}" @error="${t=>t.handleError()}" @load="${t=>t.handleLoad()}" /></template>`;let C=class extends _{};C=(0,x.Cg)([(0,$.E)({name:"msn-native-ad-ad-image",template:z,styles:k})],C);const A=(t,e)=>{(t.enableBuyDirectAd||t.isShoppingInfopaneAd)&&(0,f.LG)(t.cardElement),e.event&&e.parent.handleTelemetryMouseEnter(e.event.currentTarget),e.parent.deferRenderAfterHover&&e.parent.startRenderInvisibaleElementAfterHover()};function S(t){return o.qy`${(0,n.z)(t=>(0,u.S)()?t.data:t.data&&t.data.title&&t.data.destinationUrl,o.qy`${(0,r.ux)(t=>[t.data],o.qy`<cs-card ${(0,a.K)("outerCSCard")} class="card-outer ${(t,e)=>e.parent.isWindowIntraArticle()?"card-full-size":""} ${t=>t.isInfopaneComplexAd?"complex-ad":""} ${(t,e)=>e.parent.config&&e.parent.config.showShadow?"shadow":""} ${(t,e)=>e.parent.columnArrangement&&e.parent.columnArrangement===h.j1.c1?"col-1-ad":""} ${(t,e)=>e.parent.isSmallScreen?"small-screen":""} ${t=>t.reduceActionTrayPadding?"redTopPad":""} ${t=>t.expandTo4LinesTitle?"adaptive-image-title-4":""}${t=>t.enableCustomizeCardFillColor?" withCustomTheme ":""} ${t=>t.lightGradientClass||""} ${t=>t.fontWeightStyle||""} ${t=>t.fontTrackingStyle||""}" " card-fill-color="${t=>t.cardFillColor}" card-secondary-color="${t=>t.cardSecondaryColor}" gradient-angle="${t=>t.gradientAngle}" id="${t=>(0,g.s4)(t.enableSafeAds,"native_ad")}_${t=>t.id}" card-title-size="${t=>t.nativeAdCardTitleSize}" ?responsive-width="${t=>t.enableResponsiveWidth}" ?dwf-height="${(t,e)=>e.parent.config.use324HeightIfp&&e.parent.config.enableDynamicWaterfall}" size="${t=>t.cardSize}" style="${(t,e)=>e.parent.getResponsiveCardStyles&&e.parent.getResponsiveCardStyles(t)}" part=${t=>t.isInfopaneComplexAd?"flex":""}>${(0,n.z)(e=>e.enableAdShimmerEffect&&t.adShimmer&&void 0===e.hasLoaded,o.qy`${t.adShimmer}`,o.qy`<cs-content-card class="card-content ${t=>function(t){var e;return t.responsiveImageSizingTemplateConfig?`ris-title${null===(e=t.responsiveImageSizingTemplateConfig)||void 0===e?void 0:e.maxHeight}`:""}(t)}" id="${t=>(0,g.s4)(t.enableSafeAds,t.id)}" href="${t=>t.destinationUrl}" media-type="${(t,e)=>N(t,e.parent)?void 0:t.mediaType}" size="${t=>t.cardSize}" title="${(t,e)=>e.parent.showTitleTooltip?t.title:""}" target="${(t,e)=>e.parent.targetTag}" ?immersive-card="${t=>t.immersiveCard}" :anchorTelemetryTag="${t=>t.adTelemetryContext&&t.adTelemetryContext.destination&&t.adTelemetryContext.destination.getMetadataTag()}" data-t="${t=>{var e;return t.id&&!E(t)?null===(e=t.adTelemetryContext)||void 0===e||null===(e=e.nativeAdCard)||void 0===e?void 0:e.getMetadataTag():""}}" ${(0,m.Ib)()} use-1ucard-2line-title=${(t,e)=>t.cardSize===s.uE._2x_2y?void 0:e.parent.config.use1uCard2LineTitle} @click="${(t,e)=>!e.parent.clickHandler||e.parent.clickHandler(t,e)}" @mouseenter=${(t,e)=>{A(t,e),t.disableCardTitleTooltip&&!e.parent.tooltipIsSet&&e.parent.handleSetTitleOnMouseEnter()}} @mouseleave=${(t,e)=>{e.event&&e.parent.handleTelemetryMouseLeave(e.event.currentTarget)}} ${(0,a.K)("cardElement")}>${(0,n.z)(t=>t.videoProps,o.qy`<div slot="media" class="native-video-media" style="width:268px; height:151px;"><native-ad-video-controls region="river" width="268" height="151" :destinationUrl=${t=>t.destinationUrl} :localizedStrings=${t=>t.localizedStrings}></native-ad-video-controls><native-ad-video-player :videoProps=${t=>t.videoProps} :backgroundImg=${t=>t.imageData} region="river" immersive="true" width="268" height="151" :visualReadinessCallback=${t=>t.visualReadinessCallback}></native-ad-video-player></div>`)} ${(0,n.z)((t,e)=>!t.videoProps&&t.mediaType&&!N(t,e.parent),o.qy` ${(0,n.z)((t,e)=>e.parent.enableAdImageRetry,o.qy`<msn-native-ad-ad-image ${(0,a.K)("attributionImage")} enable-img-retry="true" id="${t=>t.id+"-img"}" alt="${t=>t.imageData&&t.imageData.altText}" class="card-image ${t=>t.useLightShadow?"lightShadow":""} ${t=>t.isViewsSquareAd?"card-image-square":""} ${t=>M(t)}" slot="media" aria-hidden="true" loading="${t=>t.enableLazyImage?"lazy":""}" decoding="${t=>t.enableLazyImage?"async":""}" src="${t=>{var e;return null===(e=t.imageData)||void 0===e?void 0:e.source}}" style="${(t,e)=>e.parent.getResponsiveCardImageHeightStyle?e.parent.getResponsiveCardImageHeightStyle(t):I(t)}" @load="${(t,e)=>T(t,e)}" @error="${(t,e)=>D(t,e)}"></msn-native-ad-ad-image>`,o.qy`<img ${(0,a.K)("attributionImage")} id="${t=>t.id+"-img"}" alt="${t=>t.imageData&&t.imageData.altText}" class="card-image ${t=>t.useLightShadow?"lightShadow":""} ${t=>t.isViewsSquareAd?"card-image-square":""} ${t=>M(t)}" slot="media" aria-hidden="true" loading="${t=>t.enableLazyImage?"lazy":""}" decoding="${t=>t.enableLazyImage?"async":""}" src="${t=>{var e;return null===(e=t.imageData)||void 0===e?void 0:e.source}}" style="${(t,e)=>e.parent.getResponsiveCardImageHeightStyle?e.parent.getResponsiveCardImageHeightStyle(t):I(t)}" @load="${(t,e)=>T(t,e)}" @error="${(t,e)=>D(t,e)}" />`)} `)} ${t=>{!t.imageData&&t.visualReadinessCallback&&t.visualReadinessCallback()}} ${t.attribution??""} ${t.provider??""} ${(0,n.z)(t=>!R(t),o.qy`${t.title}`)} ${(0,n.z)(t=>R(t),o.qy`${t.assets}`)} ${(0,n.z)(e=>e.enableNativeAdDescription&&t.description&&!M(e)&&!R(e),o.qy`${t.description}`)} ${(0,n.z)(e=>e.enableInarticleAdDesc&&t.description,o.qy`<div class="${(t,e)=>e.parent.showDescription?"":"hide-description"}">${t.description}</div>`)} ${(0,n.z)((e,i)=>e.title&&t.footerStart&&!i.parent.shouldRemoveFooterStartAndFooterEnd(),o.qy`${t.footerStart}`)} ${(0,n.z)((e,i)=>e.title&&t.footerEnd&&!i.parent.shouldRemoveFooterStartAndFooterEnd(),o.qy`${t.footerEnd}`)} ${(0,n.z)((e,i)=>!i.parent.deferRenderAfterHover&&!e.videoProps&&!e.disableHideStory&&e.feedbackUrl&&t.hideStory,o.qy`${t.hideStory}`)} ${(0,n.z)(e=>e.enableGeometricAds&&t.pattern,o.qy`${t.pattern}`)} ${(0,n.z)((t,e)=>N(t,e.parent),o.qy`<div slot="abstract">${t=>t.description}</div>`)}</cs-content-card>`)}</cs-card>`)} `)}
`}function N(t,e){const{disableAdsImage:i,disableOnly3rdPrtAdsImg:o,disable2RowAdsImg:n}=e.config||{};return!!i||(!(!o||!L(t))||!(!n||!L(t)||1!==(null==t?void 0:t.regionIndex)||"slot7"!==(null==t?void 0:t.gridArea)))}function L(t){return void 0!==(null==t?void 0:t.providerId)&&"bing"!==(null==t?void 0:t.providerId)||void 0===(null==t?void 0:t.providerId)&&void 0!==(null==t?void 0:t.adChoiceIconUrl)}function T(t,e){t.enableResponsiveWidth||(0,p.mQ)(t,e,"SuperNativeAdCard"),t&&t.visualReadinessCallback&&t.visualReadinessCallback(3,d.j.image)}function D(t,e){T(t,e),(0,v.T)({id:t.id,rLink:t.destinationUrl,imgLink:t.imageData&&t.imageData.source})}function I(t){return t.isViewsFullAd?`width: ${114*t.imageWidth/t.imageHeight}px;`:""}function M(t){var e;return t.responsiveImageSizingTemplateConfig?`ris-image${null===(e=t.responsiveImageSizingTemplateConfig)||void 0===e?void 0:e.maxHeight}`:""}function R(t){return(t.enableVA||t.enableVAPhase2)&&(t.assetOrder||t.assetColumns)}function E(t){return"ntp"!=l.T3.CurrentRequestTargetScope.pageType&&t.enableSafeAds&&c.A.getAdbStatus()}},73893:function(t,e,i){i.d(e,{m:function(){return s}});var o=i(65614),n=i(71008),r=i(42792);const a=i(96950).qy`
    <slot></slot>
`,s=n.h.compose({name:`${o.G.prefix}-card`,styles:r.R7,template:a})},74180:function(t,e,i){i.d(e,{f:function(){return n}});var o=i(56589);class n{constructor(){this.config={},this.strings={},this.initialized=!1}async initConfig(t){var e,i;this.initialized||(this.config=await this.getConfigFromRef(t)||{},this.strings=(null===(e=this.config)||void 0===e?void 0:e.localizedStrings)||{},this.initialized=!!this.config&&!(null===(i=this.config)||void 0===i||!i.localizedStrings))}getConfig(){return this.config}getLocStrings(){return this.strings}async getConfigFromRef(t){try{const e=(null==t?void 0:t.configRef)||this.configRef,i=await o.L.getConfig(e);return null==i?void 0:i.properties}catch(t){return{}}}}},75870:function(t,e,i){i.d(e,{J:function(){return o}});const o=i(74849).A`
`},79464:function(t,e,i){i.d(e,{Bl:function(){return u},Eo:function(){return c},KN:function(){return d},LG:function(){return l},Mj:function(){return g},kg:function(){return s},x8:function(){return h}});var o=i(17254),n=i(55593),r=i(98288),a=i(98216);function s(){const t=(0,n.a)();return!!t&&("1"===t.get("vptest")||"true"===t.get("vptest")||"vp"===t.get("reqsrc"))}function d(t,e){return c(t,e,"shopping/product-tracking")}function c(t,e,i){if("local"===e&&window.location.origin.indexOf("localhost")>-1)return`http://127.0.0.1:3000/shopping/${t}.svg`;if(t){const n=e?`pr-${e}`:"latest",r=i?`${i}`:"shopping";return`${(0,o.rA)().StaticsUrl}${n}/${r}/${t}.svg`}return""}function l(t){return t&&t.href&&(t.href=h(t.href)),!0}function h(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const i=(new Date).getTime()+e,o=(0,r.G)(),n=new URL(t);return n.searchParams.set("ts",i.toString()),n.searchParams.set("m_clk",`sid-${o}`),n.toString()}function u(t){return!!t&&/p4psearch\.1688\.com/.test(t)}function g(t,e){if(t&&t.href){const i=new URL(t.href);i.searchParams.set("m_ac","176674350"),i.searchParams.set("PageId",a.YT.getRequestId()),i.searchParams.set("ct",e),t.href=h(i.toString())}return!0}},80090:function(t,e,i){i.d(e,{m:function(){return L}});var o=i(65614),n=i(11310),r=i(7896),a=i(48751),s=i(41123),d=i(57416),c=i(62047),l=i(14996),h=i(89580),u=i(99657),g=i(86856),p=i(74849),v=i(73477),m=i(4126),f=i(22131),x=i(50882);const $=p.A`
    .text,
    .media-info,
    .gradient {
        transition-duration: var(--video-transition-end-duration);
        transition-property: opacity;
        opacity: 1;
    }

    .action-tray {
        transition-duration: var(--video-transition-end-duration);
        transition-property: background-color;
    }

    ::slotted([slot="media-overlay"]) {
        color: #ffffff;
        fill: #ffffff;
        height: 40px;
        min-width: 40px;
        display: grid;
        padding: 0px;
        grid-auto-flow: column;
        grid-gap: 8px;
        box-sizing: border-box;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        border: 1px solid transparent;
        transition-duration: var(--video-transition-end-duration);
        transition-property: opacity;
        opacity: 1;
        background: linear-gradient(
                    135deg,
                    rgba(0, 0, 0, 0.5) 0%,
                    rgba(0, 0, 0, 0.7) 100%
                )
                padding-box,
            linear-gradient(
                    180deg,
                    rgba(255, 255, 255, 0.4) 0%,
                    rgba(255, 255, 255, 0.2) 100%
                )
                border-box;
    }

    :host([size="_1x_1y"]) ::slotted([slot="media-overlay"]) {
        height: 22px;
        min-width: 22px;
        padding: 0 6px;
    }

    :host([size="_2x_1y"]) ::slotted([slot="media-overlay"]) {
        height: 38px;
        min-width: 38px;
        padding: 0 6px;
    }

    :host([size="_1x_1y"]) ::slotted([slot="media-overlay"]) > svg {
        height: 7px;
        width: 8px;
    }

    :host([size="_2x_1y"]) ::slotted([slot="media-overlay"]) > svg {
        height: 7px;
        width: 8px;
    }

    :host([animate-video]) .media-info,
    :host([immersive-card][animate-video]) ::slotted([slot="media-overlay"]),
    :host([size="_1x_2y"][animate-video]) ::slotted([slot="media-overlay"]),
    :host([size="_2x_2y"][animate-video]) ::slotted([slot="media-overlay"]) {
        transition-delay: var(--video-transition-delay);
        transition-duration: var(--video-transition-start-duration);
        opacity: 0;
    }
`,y=p.A`
    .preload {
        transition: none !important;
    }

    :host {
        --content-padding: 16px;
        --no-image-action-tray-padding: 20px;
        --action-tray-padding: 10px;
        width: 100%;
        height: 100%;
        font-family: ${r.O};
        --video-transition-delay: 1s;
        --video-transition-start-duration: 1s;
        --video-transition-end-duration: 1s;
    }

    :host([subscibed])::after {
        position: absolute;
        content: "";
        bottom: 0;
        left: 0;
        right: 0;
        height: 4px;
        width: 100%;
        background: linear-gradient(90deg, #ffa03d 0%, #ffdb00 100%);
    }

    :host([size="_1x_2y"]),
    :host([size="_2x_2y"]) {
        --content-card-heading-font-size: 18px;
        --content-card-heading-line-height: 24px;
    }

    :host .content {
        display: grid;
        grid-template-columns: 1fr minmax(auto, 84px);
        grid-template-rows: 1fr auto;
        row-gap: 14px var(--content-padding) var(--content-padding) var(--content-padding);
        column-gap: 12px;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        color: ${a.l};
        position: relative;
    }

    :host([size="_1x_1y"]) .content {
        row-gap: 0px;
        padding: 14px var(--content-padding) 10px var(--content-padding);
    }

    :host([size="_2x_1y"]) .content {
        row-gap: 0px;
        padding: var(--content-padding) var(--content-padding) 14px var(--content-padding);
    }

    :host([size="_1x_2y"]) .content,
    :host([size="_2x_2y"]) .content,
    :host([immersive-card]) .content {
        grid-template-columns: 1fr;
        column-gap: 0;
    }

    :host([size="_1x_2y"]) .content {
        grid-template-rows: auto 1fr auto;
    }

    :host([size="_1x_2y"]) .content.no-image {
        grid-template-rows: auto 1fr auto;
    }

    :host([size="_1x_2y"]:not([immersive-card])) .content:not(.no-image) .text {
        padding-top: 12px;
    }

    :host([immersive-card]) .text,
    :host([size="_2x_2y"]) .content:not(.no-image) .text {
        padding-top: 0;
    }

    :host([size="_2x_2y"]) .content,
    :host([immersive-card]) .content {
        align-items: end;
        grid-template-rows: 1fr auto auto;
    }

    :host([size="_2x_2y"]) .no-image {
        align-items: unset;
    }

    :host([size="_1x_2y"]) .content,
    :host([size="_2x_2y"]) .content {
        padding: 0;
        row-gap: 0;
    }

    :host([size="_1x_1y"]) .content.no-image,
    :host([size="_2x_1y"]) .content.no-image,
    :host([size="_1x_2y"]) .content.no-image,
    :host([size="_2x_2y"]) .content.no-image {
        grid-template-rows: 1fr auto;
    }

    ::slotted([slot="abstract"]) {
        display: none;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: var(--abstract-max-lines, 7);
        margin-top: var(--abstract-margin-top, 5px);
    }

    .no-image ::slotted([slot="abstract"]) {
        display: -webkit-box;
        -webkit-line-clamp: var(--abstract-max-lines, 3);
    }

    :host([size="_1x_1y"]) .no-image ::slotted([slot="abstract"]),
    :host([size="_2x_1y"]) .no-image ::slotted([slot="abstract"]) {
        --abstract-max-lines: 1;
    }

    .text {
        grid-area: 1 / 1;
        padding: var(--content-padding) var(--content-padding) 0 var(--content-padding);
        overflow: hidden;
        font-size: ${s.K};
        line-height: ${s.Z};
    }

    :host([size="_1x_1y"]) .text,
    :host([size="_2x_1y"]) .text {
        padding: 0;
    }

    :host([size="_1x_1y"]) .no-image .text,
    :host([size="_2x_1y"]) .no-image .text {
        grid-column: 1 / span 2;
    }

    :host([size="_1x_2y"]) .no-image .text,
    :host([size="_2x_2y"]) .no-image .text {
        padding: 14px var(--content-padding) 0 var(--content-padding);
        grid-row: 1;
    }

    :host([size="_2x_2y"]) .text,
    :host([size="_1x_2y"]) .text {
        grid-row: 2;
    }

    :host([immersive-card]) .text,
    :host([size="_2x_2y"]) .text {
        background-color: var(--image-gradient-overlay-end-color);
    }

    :host([size="_1x_1y"]) .action-tray,
    :host([size="_2x_1y"]) .action-tray,
    :host([size="_1x_2y"]:not([immersive-card])) .action-tray,
    :host .no-image .action-tray {
        background-color: transparent;
    }

    :host([immersive-card]) .no-image .text,
    :host([size="_2x_2y"]) .no-image .text {
        background: unset;
    }

    :host([size="_1x_2y"]) .action-tray,
    :host([size="_2x_2y"]) .action-tray {
        grid-row: 3;
        padding: 4px var(--content-padding) var(--action-tray-padding)
            var(--content-padding);
    }

    :host([immersive-card]) .action-tray,
    :host([size="_2x_2y"]) .content:not(.no-image) .action-tray {
        padding: var(--action-tray-padding) var(--content-padding)
            var(--action-tray-padding) var(--content-padding);
    }

    .action-tray {
        grid-row: 2;
        grid-column: span 2;
        display: flex;
        position: relative;
        background-color: var(--image-gradient-overlay-end-color);
        padding: var(--action-tray-padding) var(--content-padding) var(--content-padding)
            var(--content-padding);
    }

    :host([size="_1x_1y"]) .action-tray,
    :host([size="_2x_1y"]) .action-tray {
        padding: 0;
    }

    :host([size="_2x_1y"]) .content:not(.no-image) .action-tray {
        grid-area: 2 / 1 / auto / auto;
    }

    :host([size="_1x_1y"]) .no-image .action-tray {
        padding: 4px 0 0 0;
    }

    :host([size="_1x_2y"]) .no-image .action-tray,
    :host([size="_2x_2y"]) .no-image .action-tray {
        padding: var(--no-image-action-tray-padding) var(--content-padding)
            var(--action-tray-padding) var(--content-padding);
        background: none;
        grid-row: 2;
        grid-column: 1;
    }

    .media-info {
        display: grid;
        grid-auto-flow: column;
        width: fit-content;
        grid-gap: 4px;
        fill: white;
        color: white;
        margin-bottom: 8px;
    }

    :host([size="_1x_2y"]:not([immersive-card])) .media-info {
        grid-row: 1;
        grid-column: 1;
        align-self: flex-end;
        margin-bottom: 6px;
        margin-inline-start: 6px;
    }

    :host([size="_2x_1y"]:not([immersive-card])) .media-info {
        grid-area: 1 / 2 / span2 / auto;
        align-self: flex-end;
        margin-bottom: 8px;
        margin-inline-start: 6px;
    }

    ::slotted([slot="media-info"]) {
        display: grid;
        align-items: center;
        grid-auto-flow: column;
        grid-gap: 3px;
        background-color: var(--image-gradient-overlay-end-color);
        border-radius: calc(${d.Pb} * 1px);
        padding: 2px 6px;
        font-size: ${c.t};
        line-height: ${c.e};
    }

    ::slotted([slot="hide-story"]) {
        box-sizing: border-box;
        align-items: center;
        background-color: #ffffff;
        border-radius: 100%;
        border: 1px solid #e5e5e5;
        color: rgba(0, 0, 0 1);
        cursor: pointer;
        display: flex;
        fill: currentcolor;
        font-family: ${r.O};
        font-size: ${s.K};
        height: 28px;
        justify-content: center;
        line-height: ${s.Z};
        margin-inline-start: 4px;
        min-width: 28px;
        outline: none;
        padding: 0;
        position: relative;
    }

    ::slotted([slot="hide-story"]:hover) {
        background-color: #f2f2f2;
    }

    ::slotted([slot="hide-story"]:active) {
        background-color: #f7f7f7;
    }

    :host .hide-story-wrapper {
        position: absolute;
        display: flex;
        flex-direction: row;
        top: var(--content-padding);
    }

    :host .hide-story {
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: opacity 0.1s linear;
    }

    :host(:hover) .hide-story,
    :host(:focus-within) .hide-story {
        opacity: 1;
    }

    :host ::slotted([slot="hide-story"]:${v.N}) {
        border-color: ${l.WN};
    }

    ::slotted([slot="media"]) {
        grid-column: 1;
        object-fit: cover;
    }

    :host([size="_1x_1y"]) ::slotted([slot="media"]) {
        height: 84px;
        width: 84px;
        grid-row: 1;
        grid-column: 2;
        border-radius: var(--half-card-image-corner-radius, 8px);
        overflow: hidden;
    }

    :host([size="_2x_1y"]) ::slotted([slot="media"]) {
        height: 114px;
        width: 216px;
        grid-area: 1 / 2 / span2 / 2;
        border-radius: var(--half-card-image-corner-radius, 8px);
        overflow: hidden;
    }

    :host([size="_1x_2y"]) ::slotted([slot="media"]) {
        grid-row: 1;
        grid-column: 1;
        height: 157px;
        width: 100%;
        display: flex;
    }

    :host([size="_2x_2y"]) ::slotted([slot="media"]),
    :host([immersive-card]) ::slotted([slot="media"]) {
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }

    ::slotted([slot="attribution"]) {
        display: flex;
        grid-column: 1;
        grid-row: 1;
        margin-bottom: 8px;
    }

    :host([size="_1x_1y"]) .content:not(.no-image) ::slotted([slot="attribution"]),
    :host([size="_2x_1y"]) .content:not(.no-image) ::slotted([slot="attribution"]) {
        grid-column-end: 1;
    }

    .heading {
        color: ${a.l};
        fill: currentcolor;
        display: -webkit-box;
        outline: 0;
        overflow: hidden;
        text-decoration: none;
        -webkit-line-clamp: var(--heading-max-lines, 3);
        -webkit-box-orient: vertical;
        font-weight: 600;
        font-size: var(--content-card-heading-font-size, ${h.Y});
        line-height: var(--content-card-heading-line-height, ${h.v});
    }

    .heading:focus-visible {
        text-decoration: underline;
    }

    .heading:after {
        bottom: 0;
        content: "";
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        width: 100%;
        z-index: ${u.I};
    }

    :host([size="_2x_2y"][immersive-card]) .heading {
        --heading-max-lines: 2;
    }

    .media-overlay {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        pointer-events: none;
    }

    :host([size="_1x_1y"]) .media-overlay {
        grid-column: 2;
        grid-row: 1;
        height: 84px;
        width: 84px;
    }

    :host([size="_1x_2y"]) .media-overlay {
        grid-row-start: 1;
        grid-row-end: 1;
    }

    :host([size="_2x_2y"]) .media-overlay,
    :host([immersive-card]) .media-overlay {
        top: 100px;
        align-items: unset;
    }

    :host([size="_1x_2y"]) .no-image .heading,
    :host([size="_2x_2y"]) .no-image .heading {
        --heading-max-lines: 9;
    }

    :host([size="_2x_1y"]) .media-overlay {
        grid-area: 1 / 2 / span2 / 2;
        height: 114px;
        width: 216px;
    }

    ::slotted(p) {
        font-weight: 400;
        font-size: var(--abstract-font-size, 14px);
        line-height: var(--abstract-line-height, 20px);
        font-kerning: auto;
        margin: 8px 0px 0px;
    }

    ::slotted([slot="footer-start"]),
    ::slotted([slot="footer-end"]),
    ::slotted([slot="hide-story"]) {
        z-index: ${u.D};
    }

    .footer-end,
    .footer-start {
        display: flex;
        align-items: center;
    }

    .footer-end {
        margin-inline-start: auto;
    }

    .gradient {
        background: linear-gradient(
            180deg,
            var(--image-gradient-overlay-start-color) 0%,
            var(--image-gradient-overlay-end-color) 100%
        );
        grid-row: 1;
        height: 100%;
        display: none;
    }

    :host([size="_2x_2y"]) .gradient,
    :host([immersive-card]) .gradient {
        display: block;
        height: 80px;
    }

    :host([size="_2x_2y"]) .no-image .gradient,
    .no-image .gradient {
        display: none;
    }

    :host([size="_2x_1y"]) .content {
        column-gap: 24px;
    }
`.withBehaviors(new m.o("mediaType","video",$),new g.t(p.A`
            :host .hide-story-wrapper {
                right: var(--content-padding);
            }
        `,p.A`
            :host .hide-story-wrapper {
                left: var(--content-padding);
            }
        `),(0,f.mr)(p.A`
            :host {
                forced-color-adjust: auto;
            }
            .gradient {
                display: none;
            }
            :host([size="_1x_2y"]) .content,
            :host([size="_1x_1y"]) .content,
            :host([size="_2x_1y"]) .content {
                background: ${x.A.ButtonFace};
            }
            :host([size="_1x_2y"]) .text,
            :host([size="_1x_2y"]) .action-tray,
            :host([size="_2x_2y"]) .text,
            :host([size="_2x_2y"]) .action-tray,
            :host([size="_2x_2y"]) .content,
            :host([immersive-card]) .content {
                background: transparent;
            }
            ::slotted([slot="hide-story"]) {
                color: ${x.A.ButtonText};
                fill: currentcolor;
            }
        `));var b=i(96950),w=i(82774),_=i(416),k=i(10108),z=i(91640),C=i(1413);const A=b.qy`
    <slot name="media" ${(0,w.e)("mediaSlot")}></slot>
`;const S=(N={mediaTemplate:A},b.qy`
        <template
            role="article"
            ${(0,_.Y)({property:"childElements",filter:(0,k.Y)()})}
        >
            <div class="content${t=>t.mediaType?"":" no-image"}" part="content">
                ${N.mediaTemplate}
                ${(0,z.z)(t=>t&&(0,C.P)("media-info",t.childElements)&&!(t.immersiveCard||"_2x_2y"===t.size),(0,C.y)({slotName:"media-info"}))}
                <div class="gradient" part="gradient"></div>
                ${(0,C.y)({slotName:"media-overlay",slottedDefault:N.mediaOverlay})}
                <div class="text" part="text">
                    ${(0,z.z)(t=>t&&(0,C.P)("media-info",t.childElements)&&(t.immersiveCard||"_2x_2y"===t.size),(0,C.y)({slotName:"media-info"}))}
                    <slot name="attribution"></slot>
                    <a
                        id="heading"
                        class="heading"
                        part="heading"
                        href="${t=>t.href?t.href:void 0}"
                        target="${t=>t.target?t.target:void 0}"
                        @click=${(t,e)=>t.handleContentCardLinkClick(e.event)}
                        data-t="${t=>t.anchorTelemetryTag}"
                    >
                        <span role="heading" aria-level="${t=>t.headingLevel}">
                            <slot></slot>
                        </span>
                    </a>
                    ${(0,C.y)({slotName:"abstract"})}
                </div>
                <div
                    class="action-tray ${t=>t.loaded?"":"preload"}"
                    part="action-tray"
                >
                    ${(0,C.y)({slotName:"footer-start",slottedDefault:N.footerStart})}
                    ${(0,C.y)({slotName:"footer-end",slottedDefault:N.footerEnd})}
                </div>
                <div class="hide-story-wrapper" part="hide-story-wrapper">
                    ${(0,C.y)({slotName:"hide-story",slottedDefault:N.hideStory})}
                </div>
            </div>
        </template>
    `);var N;const L=n.W.compose({name:`${o.G.prefix}-content-card`,styles:y,template:S})},82588:function(t,e,i){i.d(e,{$n:function(){return u},IK:function(){return g},SF:function(){return v},U8:function(){return p}});var o=i(96950),n=i(91640),r=i(14475),a=i(930),s=i(91278),d=i(50130);const c=o.qy`<div class="container"><div class="popup"><div class="popup-offset"><span class="popup-text">${t=>t.assets&&t.assets.disclaimer}</span></div><div class="popup-arrow"><span class="popup-arrow-svg"></span></div></div></div>`,l=o.qy`<a class="disclaimer" href="${t=>t.destinationUrl}" target="${r.z._blank}" title="${t=>t.localizedStrings&&t.localizedStrings.nativeAdDisclaimerText}" ${(0,s.Ib)(!0,!1)} data-t="${t=>{var e;return null===(e=t.adTelemetryContext)||void 0===e||null===(e=e.destination)||void 0===e?void 0:e.getMetadataTag()}}"><span class="disclaimer-svg"></span>${c}</a>`,h=o.qy`<a class="${t=>t.adChoiceIconUrl&&!t.hideAdLabelAndAdChoice?(0,d.s4)(t.enableSafeAds,"ad-choice"):"ad-choice-hidden"} ${t=>t.template&&t.template.useMobileAdChoice?"ad-choice-mobile":""} ${t=>t.cardSize==a.uE._1x_2y||t.cardSize==a.uE._2x_1y?"ad-choice-mono":""} ${t=>t.cardSize==a.uE._2x_2y?"ad-choice-mono-wide":""}" href="${t=>t.adChoiceIconUrl}" target="${t=>t.isThirdParty?r.z._self:r.z._blank}" @click="${(t,e)=>!t.adCardClickCallback||t.adCardClickCallback(e.event,t.adChoiceIconUrl)}" title="${t=>t.localizedStrings&&t.localizedStrings.nativeAdAdChoiceText}" data-t="${t=>{var e;return null===(e=t.adTelemetryContext)||void 0===e||null===(e=e.adChoice)||void 0===e?void 0:e.getMetadataTag()}}"><span class="ad-choice-svg"></span></a>`,u=o.qy`<div class="${t=>(0,d.s4)(t.enableSafeAds,"ad-footer")}" slot="${t=>(t=>4===t.enableBlendInAdSlugStyle?"":(0,d.s4)(t.enableSafeAds,"footer-end"))(t)}">${(0,n.z)(t=>t.assets&&t.assets.disclaimer,l)} ${(0,n.z)(t=>{var e;return!(null!==(e=t.template)&&void 0!==e&&e.enableNewAdChoice||t.disableAdChoice)},h)}</div>`,g=o.qy`<div class="ad-choice-container ad-choice-footer-start" slot="footer-start">${(0,n.z)(t=>t.assets&&t.assets.disclaimer,l)} ${(0,n.z)(t=>{var e;return!(null!==(e=t.template)&&void 0!==e&&e.enableNewAdChoice||t.disableAdChoice)},h)}</div>`,p=o.qy`<div class="ad-choice-container" slot="attribution">${(0,n.z)(t=>t.assets&&t.assets.disclaimer,l)} ${(0,n.z)(t=>{var e;return!(null!==(e=t.template)&&void 0!==e&&e.enableNewAdChoice||t.disableAdChoice)},h)}</div>`,v=o.qy`<div class="ad-choice-container">${(0,n.z)(t=>t.assets&&t.assets.disclaimer,l)} ${(0,n.z)(t=>{var e;return!(null!==(e=t.template)&&void 0!==e&&e.enableNewAdChoice||t.disableAdChoice)},h)}</div>`},90130:function(t,e,i){i.d(e,{q:function(){return _}});var o=i(56911),n=i(14475),r=i(60815),a=i(38493),s=i(88296),d=i(79765),c=i(37416),l=i(98216),h=i(11372),u=i(28381),g=i(65679),p=i(1755),v=i(59646),m=i(50866),f=i(92011),x=i(77246),$=i(48520),y=i(70177),b=i(18731),w=i(90905);class _ extends f.L{constructor(){super(...arguments),this.deferRenderAfterHover=!1,this.showTitleTooltip=!0,this.tooltipIsSet=!1,this.enableAdImageRetry=!1,this.cardAddedForOcvTracking=!1,this.showCTA=!0,this.shouldRemoveFooterStartAndFooterEnd=()=>{var t,e;return(null===(t=this.config)||void 0===t?void 0:t.enableNTPTriverC2S)&&"nativead-triver-1"===(null===(e=this.data)||void 0===e?void 0:e.id)},this.handleResize=()=>{this.showCTA=(0,g.r7)(this,this.data)},this.handleTelemetryMouseEnter=t=>{(0,v.kM)("SuperNativeAdCard",()=>l.YT.sendActionEvent(t,h.EG.Hover,h.MS.Open))},this.handleTelemetryMouseLeave=t=>{(0,v.pS)("SuperNativeAdCard",()=>l.YT.sendActionEvent(t,h.EG.MouseLeave,h.MS.Open))},this.handleSetTitleOnMouseEnter=()=>{if(this.data&&this.data.cardElement){var t,e;const i=null===(t=this.data.cardElement.shadowRoot)||void 0===t||null===(e=t.querySelector)||void 0===e?void 0:e.call(t,".heading");this.showTitleTooltip=(0,g.lh)(i,this.data.enableTitleForTruncate),this.tooltipIsSet=!0}},this.onBreakpointCallback=t=>{t!==this.columnArrangement&&(this.columnArrangement=t)}}connectedCallback(){var t,e,i;if(this.config=c.D.getConfig(),this.deferRenderAfterHover=!!this.config.enableDeferRenderElement,this.enableAdImageRetry=!!this.config.enableAdImageRetry,null!==(t=this.data)&&void 0!==t&&t.useFeeds3Designs&&(this.feeds3Design=!0),super.connectedCallback(),(0,x.S)()&&this.data&&!this.data.useMobile&&(this.classList.contains("infopane-slide")||(0,$.D)(this.data.cardElement),this.handleXandrVisibilityTracking()),(0,x.S)()){if((0,y._Z)(this).then(async()=>{var t,e,i,o;null!==(t=this.data)&&void 0!==t&&null!==(t=t.attributionImage)&&void 0!==t&&t.complete&&(null===(i=(o=this.data).visualReadinessCallback)||void 0===i||i.call(o,3,d.j.image));u.y.subscribeThemeChange(this),this.targetTag=null!==(e=this.data)&&void 0!==e&&e.openAdInSameTab?n.z._self:n.z._blank,this.storeAdsForOcvFeedback()}),null!==(e=this.data)&&void 0!==e&&e.enableInarticleAdFullBleedImage){const t=(new b.bb).data.innerWidth();this.showDescription=(0,g.SA)(this.data,t),this.columnArrangement=(0,s.TU)().currentColumnArrangement,(0,s.TU)().subscribe(this.onBreakpointCallback),this.handleResize(),this.resizeHandler=(0,w.A)(this.handleResize,200),window.addEventListener("resize",this.resizeHandler)}}else this.targetTag=null!==(i=this.data)&&void 0!==i&&i.openAdInSameTab?n.z._self:n.z._blank}dataChanged(t,e){var i;null!==(i=this.data)&&void 0!==i&&i.useAdaptiveImageStyle&&(this.adaptiveImage=!0)}clickHandler(t,e){var i,o;return null===(i=this.data)||void 0===i||null===(o=i.onClickLink)||void 0===o||o.call(i),!0}isWindowIntraArticle(){return!!this.data.id&&(this.isIntraArticleId()&&this.data.cardSize===m.qJ._2x_1y)}disconnectedCallback(){var t;super.disconnectedCallback(),u.y.unsubscribeThemeChange(this),this.adUniqueId&&(0,p.r6)([this.adUniqueId]),null!==(t=this.data)&&void 0!==t&&t.enableInarticleAdFullBleedImage&&((0,s.TU)().unsubscribe(this.onBreakpointCallback),window.removeEventListener("resize",this.resizeHandler),this.resizeHandler=null)}get adUniqueId(){var t;return null===(t=this.data)||void 0===t||null===(t=t.items)||void 0===t||null===(t=t[0])||void 0===t?void 0:t.uniqueId}handleXandrVisibilityTracking(){this.adUniqueId&&(0,p.YW)(new Map([[this.adUniqueId,this.shadowRoot.host]]))}storeAdsForOcvFeedback(){var t;if(this.cardAddedForOcvTracking)return;const e="AllAds";window[e]||(window[e]=new Map),window[e].set(null===(t=this.data)||void 0===t?void 0:t.id,this.shadowRoot.host),this.cardAddedForOcvTracking=!0}handleThemeChange(t){var e;(0,g.CG)(t,this,[null===(e=this.data)||void 0===e?void 0:e.outerCSCard])}startRenderInvisibaleElementAfterHover(){this.deferRenderAfterHover=!1}isIntraArticleId(){return["inarticle","eoab","intranative","watchlistnative"].some(t=>this.data.id.startsWith(t))}}(0,o.Cg)([r.sH],_.prototype,"data",void 0),(0,o.Cg)([r.sH],_.prototype,"targetTag",void 0),(0,o.Cg)([r.sH],_.prototype,"deferRenderAfterHover",void 0),(0,o.Cg)([r.sH],_.prototype,"columnArrangement",void 0),(0,o.Cg)([r.sH],_.prototype,"showDescription",void 0),(0,o.Cg)([r.sH],_.prototype,"isSmallScreen",void 0),(0,o.Cg)([r.sH],_.prototype,"showTitleTooltip",void 0),(0,o.Cg)([r.sH],_.prototype,"tooltipIsSet",void 0),(0,o.Cg)([r.sH],_.prototype,"enableAdImageRetry",void 0),(0,o.Cg)([(0,a.CF)({attribute:"feeds-3-design"})],_.prototype,"feeds3Design",void 0),(0,o.Cg)([(0,a.CF)({attribute:"adaptive-image"})],_.prototype,"adaptiveImage",void 0),(0,o.Cg)([r.sH],_.prototype,"showCTA",void 0)},91459:function(t,e,i){i.d(e,{I:function(){return o}});const o="1"},92743:function(t,e,i){i.d(e,{Z:function(){return r}});var o=i(96950),n=i(17254);const r=o.qy`<button slot="hide-story" class="card-see-more" title=${t=>t.cardActionsTooltips&&t.cardActionsTooltips.seeMore} @click=${(t,e)=>t.toggleCardActionMenu&&t.toggleCardActionMenu(t,e.event)} data-t="${t=>{var e;return null===(e=t.telemetryContext)||void 0===e||null===(e=e.seeMore)||void 0===e?void 0:e.getMetadataTag()}}"><img src="${n.T3.StaticsUrl}latest/icons-wc/icons/MoreV2.svg" loading="lazy" alt="more" aria-hidden="true" /></button>`},93518:function(t,e,i){i.d(e,{X:function(){return g}});var o=i(56911),n=i(97004),r=i(64183),a=i(95239),s=i(356),d=i(31023),c=i(37302),l=i(96193),h=i(38493),u=i(50866);class g extends l.z{constructor(){super(...arguments),this.size=u.qJ._1x_2y}cardFillColorChanged(t,e){this.isDarkCardGradient()?s.l.setValueFor(this,n.y.DarkMode):this.isLightCardGradient()?s.l.setValueFor(this,n.y.LightMode):s.l.deleteValueFor(this)}isDarkCardGradient(){return Object.values(u.NZ).includes(this.cardFillColor)}isLightCardGradient(){return Object.values(u.L9).includes(this.cardFillColor)}isNamedGradientFillColor(){return this.isLightCardGradient()||this.isDarkCardGradient()}connectedCallback(){super.connectedCallback(),c.jO.setValueFor(this,{evaluate:(t,e)=>(0,r.o)(t(d.r),e||t(a.p),-1,1,0,0,void 0,2,3,1,2,void 0)})}}(0,o.Cg)([(0,h.CF)({attribute:"card-fill-color"}),(0,o.Sn)("design:type",Object)],g.prototype,"cardFillColor",void 0),(0,o.Cg)([h.CF,(0,o.Sn)("design:type",String)],g.prototype,"size",void 0)},96193:function(t,e,i){i.d(e,{z:function(){return n}});var o=i(92011);class n extends o.L{}},99657:function(t,e,i){i.d(e,{D:function(){return a},I:function(){return r}});var o=i(68136);const{create:n}=o.G,r=n("sloppy-click-z-index",1),a=n("click-z-index",1)}}]);