"use strict";(self.homePageWebpackChunks=self.homePageWebpackChunks||[]).push([["nas-highlight-v1"],{1701:function(t,e,i){i.d(e,{TK:function(){return o},Xn:function(){return n},fT:function(){return a}});const a={defaultDarkThemeColor:"var(--neutral-foreground-rest)",defaultLightThemeColor:"var(--neutral-foreground-rest)",defaultInfoPaneColor:"var(--neutral-foreground-rest)"},n=t=>t?a.defaultInfoPaneColor:a.defaultDarkThemeColor,o=t=>t?a.defaultInfoPaneColor:a.defaultLightThemeColor},7373:function(t,e,i){i.d(e,{a:function(){return u}});var a=i(56911),n=i(26950),o=i(38493),r=i(92011),l=i(96950),d=i(91640),s=i(31756),c=i(1701),p=i(24953);s.M,p.g;const h=l.qy`<div class="special-offer-btn-container"><pure-text content="${t=>t.data}" custom-style="font-size: 12px; font-weight: 600; line-height: 16px; height: 16px;" light-theme-color=${t=>(0,c.TK)(t.isInfoPane)} dark-theme-color=${t=>(0,c.Xn)(t.isInfoPane)}></pure-text><pure-icon icon-name="rightArrow" icon-width="4.5" icon-height="8"></pure-icon></div>${(0,d.z)(t=>t.displayExpirationDate,l.qy`<pure-text content="${t=>t.expirationDate}" custom-style="font-size: 16px; font-weight: 600; margin-left: 2px;" light-theme-color=${t=>(0,c.TK)(t.isInfoPane)} dark-theme-color=${t=>(0,c.Xn)(t.isInfoPane)}></pure-text>`)}
`;const g=i(74849).A` :host{cursor:pointer}.special-offer-btn-container{font-size:12px;background:#0078D4;padding:0 8px 2px;height:16px;line-height:16px;border-radius:4px;display:inline-block;text-align:center}pure-icon{margin-left:0px}`;let u=class extends n.o{constructor(){super(...arguments),this.expirationDate="",this.displayExpirationDate=!1}};(0,a.Cg)([(0,o.CF)({attribute:"expiration-date"})],u.prototype,"expirationDate",void 0),(0,a.Cg)([(0,o.CF)({mode:"boolean",attribute:"display-expiration-date"})],u.prototype,"displayExpirationDate",void 0),u=(0,a.Cg)([(0,r.E)({name:"decoration-special-offer",template:h,styles:g})],u)},10001:function(t,e,i){i.d(e,{w:function(){return $}});var a=i(56911),n=i(38493),o=i(60815),r=i(41626),l=i(65022),d=i(44449);let s=class extends r.t{themeChangeListener(t){this.darkMode=!(null==t||!t.matches)}constructor(){super(),this.text="",this.forInfopane=!0,this.backgroundColor="",this.defaultBackgroundColor="#FFFFFF",this.color="#2065C1",this.isHovered=!1,this.ctaMode="default",this.destinationUrl="",this.telemetryMetadata=void 0,this.darkModeQuery=window.matchMedia("(prefers-color-scheme:dark)"),this.darkMode=!!this.darkModeQuery.matches}connectedCallback(){super.connectedCallback(),this.darkModeQuery.addEventListener("change",this.themeChangeListener.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.darkModeQuery.removeEventListener("change",this.themeChangeListener.bind(this))}};(0,a.Cg)([n.CF],s.prototype,"text",void 0),(0,a.Cg)([(0,n.CF)({mode:"boolean",attribute:"for-infopane"})],s.prototype,"forInfopane",void 0),(0,a.Cg)([(0,n.CF)({attribute:"background-color"})],s.prototype,"backgroundColor",void 0),(0,a.Cg)([(0,n.CF)({attribute:"default-background-color"})],s.prototype,"defaultBackgroundColor",void 0),(0,a.Cg)([n.CF],s.prototype,"color",void 0),(0,a.Cg)([(0,n.CF)({mode:"boolean",attribute:"is-hovered"})],s.prototype,"isHovered",void 0),(0,a.Cg)([(0,n.CF)({attribute:"cta-mode"})],s.prototype,"ctaMode",void 0),(0,a.Cg)([(0,n.CF)({attribute:"destination-url"})],s.prototype,"destinationUrl",void 0),(0,a.Cg)([(0,n.CF)({attribute:"tel-metadata"})],s.prototype,"telemetryMetadata",void 0),(0,a.Cg)([o.sH],s.prototype,"darkMode",void 0),s=(0,a.Cg)([(0,d.TA)(l.PDj,"msn-native-ad-call-to-action")],s);var c=i(92011),p=i(74849),h=i(59957),g=i(75096);const u=p.A`
.call-to-action {
    background-color: #FFFFFF;
    color: #2065C1;
    font-size: 14px; 
    font-weight: 600;
    height: 32px;
    line-height: 32px;
    display: inline-block;
    border-radius: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: relative;
}

.call-to-action-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    opacity: 0.3;
}

.call-to-action-txt {
    position: relative;
    border-radius: 20px;
    padding-left: 12px;
    padding-right: 12px;
}

.call-to-action-icon-container {
    background-color: #C6C0BA;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    position: relative;
}

.call-to-action-icon-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    opacity: 0.3;
}

.call-to-action-icon {
    width: 9px;
    height: 15px;
    left: 12px;
    top: 8px;
    position: absolute;
    display: flex;
}

.call-to-action-mask-container {
    background: linear-gradient(180deg, rgba(43, 43, 43, 0.9) 0%, rgba(43, 43, 43, 0.35) 100%);
    position: absolute;
    width: 100%;
    height: 304px;
    bottom: 0;
    left: 0;
    animation: fadeIn 0.1s forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.call-to-action-mask-wrapper {
    width: fit-content;
    position: absolute;
    top: 113px;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    align-items: center;
}

.call-to-action-mask-text {
    font-size: 19px;
    font-weight: 600;
    display: inline-block;
}

.call-to-action-mask-icon{
    display: inline-block;
    width: 16px;
    height: 14px;
    margin-inline: 5px;
}

.txt-button-wrapper {
    display: inline-block;
    position: relative;
    padding: 4px 12px;
    line-height: 16px;
    font-size: 12px;
    border-radius: 100px;
    font-weight: 400;
    text-decoration: none;
}

.txt-button-wrapper::before {
    content: "";
    position: absolute;
    inset: 0px;
    border-radius: 50px;
    padding: 1px;
    -webkit-mask: linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px) content-box content-box, linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px);
    -webkit-mask-composite: xor;
    pointer-events: none;
}
`.withBehaviors(new h.e("layoutStyle"),new g.X(["defaultBackgroundColor","backgroundColor","color","forInfopane","darkMode"],t=>{let e=`\n                .call-to-action.dynamic-styles {\n                    background: ${t.defaultBackgroundColor};\n                }\n                .call-to-action-txt.dynamic-styles {\n                    color: ${t.color};\n                }\n                .call-to-action-bg.dynamic-styles {\n                    background: ${t.backgroundColor};\n                }\n                .call-to-action-icon-bg.dynamic-styles {\n                    background: ${t.backgroundColor};\n                }\n            `;return t.forInfopane||(e+="\n                    .txt-button-wrapper::before {\n                        background: linear-gradient(180deg, #EFEFEF 90%, #D6D6D6 100%);\n                    }\n                "),t.darkMode?e+="\n                    .txt-button-wrapper {\n                        background: linear-gradient(0deg, rgba(255, 255, 255, 0.0605), rgba(255, 255, 255, 0.0605));\n                        color: #FFFFFF;\n                    }\n                    .txt-button-wrapper::before {\n                        background: linear-gradient(180deg, rgba(255, 255, 255, 0.093) 0%, rgba(255, 255, 255, 0.0698) 9.57%);\n                    }\n                ":e+="\n                    .txt-button-wrapper {\n                        color: #1a1a1a;\n                        background: linear-gradient(0deg, #FFFFFF, #FFFFFF);\n                    }\n                    .txt-button-wrapper::before {\n                        background: linear-gradient(rgba(239, 239, 239, 0.7) 90%, rgba(214, 214, 214, 0.7) 100%);\n                    }\n                ",p.A`${e}`}));var m=i(96950),v=i(91640);const f=m.qy`
<svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.09854 16.6761L10.6426 9.25004C10.8715 9.05109 11 8.78131 11 8.5C11 8.2187 10.8715 7.94891 10.6426 7.74997L2.09854 0.323871C1.98594 0.222547 1.85126 0.141728 1.70234 0.0861287C1.55342 0.0305295 1.39326 0.0012641 1.23119 4.0055e-05C1.06912 -0.00118399 0.908396 0.0256578 0.758391 0.0789993C0.608386 0.132341 0.472105 0.211114 0.357501 0.310722C0.242897 0.41033 0.152265 0.528778 0.0908924 0.659155C0.0295204 0.789532 -0.00136224 0.929227 4.60857e-05 1.07009C0.00145442 1.21095 0.0351258 1.35016 0.0990954 1.47959C0.163065 1.60902 0.256052 1.72608 0.37263 1.82394L8.05377 8.5L0.37263 15.1761C0.256052 15.2739 0.163065 15.391 0.0990954 15.5204C0.0351258 15.6498 0.00145442 15.7891 4.60857e-05 15.9299C-0.00136224 16.0708 0.0295204 16.2105 0.0908924 16.3408C0.152265 16.4712 0.242897 16.5897 0.357501 16.6893C0.472105 16.7889 0.608386 16.8677 0.758391 16.921C0.908396 16.9743 1.06912 17.0012 1.23119 17C1.39326 16.9987 1.55342 16.9695 1.70234 16.9139C1.85126 16.8583 1.98594 16.7775 2.09854 16.6761Z" fill="black"/>
</svg>
`,b=m.qy`
<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.5 14C6.22386 14 6 13.7761 6 13.5C6 13.2239 6.22386 13 6.5 13H13C14.1046 13 15 12.1046 15 11V3C15 1.89543 14.1046 1 13 1H6.5C6.22386 1 6 0.776142 6 0.5C6 0.223858 6.22386 0 6.5 0H13C14.6569 0 16 1.34315 16 3V11C16 12.6569 14.6569 14 13 14H6.5ZM6.64645 3.14645C6.84171 2.95118 7.15829 2.95118 7.35355 3.14645L10.8536 6.64645C11.0488 6.84171 11.0488 7.15829 10.8536 7.35355L7.35355 10.8536C7.15829 11.0488 6.84171 11.0488 6.64645 10.8536C6.45118 10.6583 6.45118 10.3417 6.64645 10.1464L9.29289 7.5H0.5C0.223858 7.5 0 7.27614 0 7C0 6.72386 0.223858 6.5 0.5 6.5H9.29289L6.64645 3.85355C6.45118 3.65829 6.45118 3.34171 6.64645 3.14645Z" fill="white"/>
</svg>
`,x=m.qy` ${(0,v.z)(t=>"arrow"===t.ctaMode,m.qy`<a class="call-to-action-click-wrapper" target = "_blank" href = ${t=>t.destinationUrl} data-t="${t=>t.telemetryMetadata}" aria-label=${t=>t.text}><div class="call-to-action-icon-container" title="${t=>t.text}"><div class="call-to-action-icon-bg dynamic-styles"></div><div class="call-to-action-icon dynamic-styles">${f}</div></div></a>`)} ${(0,v.z)(t=>"mask"===t.ctaMode,m.qy` ${(0,v.z)(t=>t.isHovered,m.qy`<div class="call-to-action-mask-container"><div class="call-to-action-mask-wrapper"><div class="call-to-action-mask-text">${t=>t.text}</div><div class="call-to-action-mask-icon">${b}</div></div></div>`)} `)} ${(0,v.z)(t=>"default"===t.ctaMode||"button"===t.ctaMode,m.qy`<a class="txt-button-wrapper" target = "_blank" href = ${t=>t.destinationUrl} data-t="${t=>t.telemetryMetadata}">${t=>t.text}</a>`)} ${(0,v.z)(t=>"text"===t.ctaMode,m.qy` ${t=>t.text} `)} `;let $=class extends s{};$=(0,a.Cg)([(0,c.E)({name:"msn-native-ad-call-to-action",template:x,styles:u})],$)},10096:function(t,e,i){i.d(e,{zN:function(){return K},cC:function(){return tt}});var a=i(10797),n=i(39619),o=i(96950),r=i(91640),l=i(56911),d=i(80831),s=i(38493),c=i(60815),p=i(41626),h=i(65022),g=i(44449);let u=class extends p.t{constructor(){super(...arguments),this.effectId="",this.intersectionRootMargin="-350px 0px -200px 0px",this.isAnimationValid=!1,this.starType="",this.isStaticMode=!1,this.updateAnimStatus=(t,e)=>{this.isAnimationValid!==t&&(this.isAnimationValid=t,t&&e&&setTimeout(()=>{e()},0))}}connectedCallback(){if(super.connectedCallback(),!this.isStaticMode){this.effectGroup=d.tb.getEffectGroup();const t={root:this.intersectionRoot,rootMargin:this.intersectionRootMargin};this.effectGroup.register(this.effectId,this.highlightingRatingContainer,this.updateAnimStatus,t,!0,0)}}disconnectedCallback(){super.disconnectedCallback(),this.effectGroup&&this.effectGroup.unregister(this.effectId)}};(0,l.Cg)([(0,s.CF)({attribute:"rating"})],u.prototype,"rating",void 0),(0,l.Cg)([s.CF],u.prototype,"effectId",void 0),(0,l.Cg)([s.CF],u.prototype,"intersectionRoot",void 0),(0,l.Cg)([s.CF],u.prototype,"intersectionRootMargin",void 0),(0,l.Cg)([c.sH],u.prototype,"isAnimationValid",void 0),(0,l.Cg)([s.CF],u.prototype,"starType",void 0),(0,l.Cg)([(0,s.CF)({mode:"boolean",attribute:"isStaticMode"})],u.prototype,"isStaticMode",void 0),u=(0,l.Cg)([(0,g.TA)(h.PDj,"msn-native-ad-highlight-rating")],u);var m=i(92011),v=i(74849),f=i(75096),b=i(59957);const x=v.A` .stars-container{display:flex;justify-content:center;gap:8px}.animated-star1{animation:fadeIn 300ms}.animated-star2{animation:fadeIn 360ms}.animated-star3{animation:fadeIn 420ms}.animated-star4{animation:fadeIn 480ms}.animated-star5{animation:fadeIn 540ms}.star1,.star2,.star3,.star4,.star5{opacity:1}@keyframes fadeIn{0%{opacity:0;-webkit-transform:translate(0,30px);transform:translate(0,30px)}80%{opacity:1;-webkit-transform:translate(0,-10px);transform:translate(0,-10px)}100%{opacity:1;-webkit-transform:translate(0,0px);transform:translate(0,0px)}}`.withBehaviors(new b.e("layoutStyle"),new f.X(["isStaticMode"],t=>{let e="";return t.isStaticMode&&(e+=".star1, .star2, .star3, .star4, .star5{\n                    opacity: 1;\n                 }"),v.A`${e}`}));var $=i(60402);const w=o.qy`
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.0627 1.25747C14.8552 -0.419156 17.1448 -0.419156 17.9372 1.25747L21.7106 9.24093L30.148 10.5211C31.9199 10.79 32.6274 13.0639 31.3453 14.3689L25.2398 20.5831L26.6812 29.3579C26.9838 31.2006 25.1315 32.6059 23.5466 31.7359L16 27.593L8.45337 31.7359C6.8685 32.6059 5.01614 31.2006 5.31883 29.3579L6.76011 20.5831L0.65476 14.3689C-0.627443 13.0639 0.0800934 10.79 1.85205 10.5211L10.2894 9.24093L14.0627 1.25747Z" fill="url(#paint0_linear)"/>
        <defs>
            <linearGradient id="paint0_linear" x1="0" y1="16" x2="32" y2="16" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF512F"/>
                <stop offset="1" stop-color="#DD2476"/>
            </linearGradient>
        </defs>
</svg>  
`,y=o.qy`
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.0014 4.79517e-07C15.2304 -0.000517523 14.4592 0.418646 14.0627 1.25746L10.2894 9.24092L1.85205 10.5211C0.0800935 10.79 -0.627443 13.0638 0.65476 14.3689L6.76011 20.5831L5.31883 29.3577C5.07924 30.8164 6.18983 32.0008 7.44924 32C7.78192 32.0002 8.12506 31.9178 8.45651 31.7358L16.0016 27.5938L23.5466 31.7358C25.1315 32.6059 26.9838 31.2006 26.6812 29.3577L25.2398 20.5831L31.3453 14.3689C32.6274 13.0638 31.9199 10.79 30.148 10.5211L21.7106 9.24092L17.9372 1.25746C17.5415 0.420067 16.7711 0.000919515 16.0014 4.79517e-07C16.0011 4.79517e-07 16.0017 4.79517e-07 16.0014 4.79517e-07ZM16.0025 25.0539V2.82752L19.614 10.4684C19.9286 11.1341 20.5368 11.5956 21.2405 11.7024L29.3214 12.9285L23.474 18.8802C22.9649 19.3985 22.7326 20.1451 22.8527 20.877L24.2331 29.281L17.0053 25.3131C16.6914 25.1408 16.3471 25.0544 16.0025 25.0539Z" fill="url(#paint0_linear)"/>
        <defs>
            <linearGradient id="paint0_linear" x1="0" y1="16" x2="32" y2="16" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF512F"/>
                <stop offset="1" stop-color="#DD2476"/>
            </linearGradient>
        </defs>
</svg>
`,C=o.qy`
<svg width=32 height=32 viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.15,10.52,21.71,9.24l-3.77-8a2.12,2.12,0,0,0-3.88,0l-3.77,8L1.85,10.52a2.29,2.29,0,0,0-1.2,3.85l6.11,6.21L5.32,29.36A2.23,2.23,0,0,0,7.45,32a2.11,2.11,0,0,0,1-.26L16,27.59l7.55,4.15a2.18,2.18,0,0,0,3.13-2.38l-1.44-8.78,6.11-6.21A2.29,2.29,0,0,0,30.15,10.52Zm-6.68,8.36a2.33,2.33,0,0,0-.62,2l1.38,8.4-7.22-4a2.14,2.14,0,0,0-1-.26,2.1,2.1,0,0,0-1,.26l-7.23,4,1.38-8.4a2.33,2.33,0,0,0-.62-2L2.68,12.93l8.08-1.23a2.15,2.15,0,0,0,1.63-1.23L16,2.83l3.61,7.64a2.18,2.18,0,0,0,1.63,1.23l8.08,1.23Z" fill="url(#paint0_linear)"/>
            <linearGradient id="paint0_linear" x1="0" y1="16" x2="32" y2="16" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF512F"/>
                <stop offset="1" stop-color="#DD2476"/>
            </linearGradient>
        </defs>
</svg>
`,k=o.qy`
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.3049 1.10028C12.9983 -0.366762 15.0017 -0.366762 15.6951 1.10028L18.9968 8.08581L26.3795 9.206C27.9299 9.44126 28.549 11.4309 27.4271 12.5728L22.0849 18.0102L23.346 25.6882C23.6108 27.3006 21.9901 28.5302 20.6033 27.7689L14 24.1439L7.3967 27.7689C6.00993 28.5302 4.38912 27.3006 4.65397 25.6882L5.9151 18.0102L0.572915 12.5728C-0.549012 11.4309 0.0700817 9.44126 1.62055 9.206L9.00326 8.08581L12.3049 1.10028Z" fill="url(#paint0_linear_75_17843)"/>
    <defs>
        <linearGradient id="paint0_linear_75_17843" x1="14" y1="0" x2="14" y2="28" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFEF4D"/>
            <stop offset="1" stop-color="#EC9E06"/>
        </linearGradient>
    </defs>
</svg>
`,L=o.qy`
<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.5012 4.04593e-07C12.8507 -0.00043666 12.2 0.353233 11.8654 1.06098L8.68171 7.79703L1.56267 8.8772C0.0675789 9.10405 -0.529405 11.0226 0.552454 12.1237L5.70384 17.367L4.48776 24.7705C4.28561 26.0014 5.22267 27.0007 6.2853 27C6.56599 27.0001 6.85552 26.9306 7.13518 26.7771L13.5013 23.2823L19.8674 26.7771C21.2047 27.5112 22.7676 26.3255 22.5122 24.7705L21.2961 17.367L26.4476 12.1237C27.5294 11.0226 26.9324 9.10405 25.4374 8.8772L18.3183 7.79703L15.1345 1.06098C14.8006 0.354431 14.1506 0.000775841 13.5012 4.04593e-07C13.5009 4.04593e-07 13.5015 4.04593e-07 13.5012 4.04593e-07ZM13.5021 21.1392V2.38572L16.5493 8.83267C16.8148 9.39443 17.328 9.7838 17.9217 9.87389L24.74 10.9084L19.8061 15.9301C19.3766 16.3675 19.1806 16.9974 19.282 17.615L20.4467 24.7058L14.3482 21.3579C14.0834 21.2126 13.7928 21.1397 13.5021 21.1392Z" fill="url(#paint0_linear_75_17845)"/>
    <defs>
        <linearGradient id="paint0_linear_75_17845" x1="13.5" y1="0" x2="13.5" y2="27" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFEC4A"/>
            <stop offset="1" stop-color="#EC9E06"/>
        </linearGradient>
    </defs>
</svg>
`,F=o.qy`
<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 0C13.5004 0 13.5008 -2.66365e-07 13.5012 0C14.1506 0.00077608 14.8006 0.354431 15.1345 1.06098L18.3183 7.79703L25.4373 8.8772C26.9324 9.10405 27.5294 11.0226 26.4476 12.1237L21.2961 17.367L22.5122 24.7705C22.7676 26.3255 21.2047 27.5112 19.8674 26.7771L13.5013 23.2823L13.5 23.283V0ZM13.5021 2.38572V21.1392C13.7928 21.1397 14.0834 21.2126 14.3482 21.3579L20.4467 24.7058L19.282 17.615C19.1806 16.9974 19.3766 16.3675 19.8061 15.9301L24.74 10.9084L17.9217 9.87389C17.328 9.78379 16.8147 9.39443 16.5493 8.83267L13.5021 2.38572Z" fill="url(#paint0_linear_75_17858)"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 0C13.4996 0 13.4992 -2.66298e-07 13.4988 0C12.8494 0.000775841 12.1994 0.354431 11.8655 1.06098L8.68165 7.79703L1.56265 8.8772C0.0675583 9.10405 -0.529369 11.0226 0.552422 12.1237L5.70389 17.367L4.48775 24.7705C4.23243 26.3255 5.7953 27.5112 7.13255 26.7771L13.4987 23.2823L13.5 23.283V0ZM13.5 0C13.5004 0 13.5008 -2.72162e-07 13.5012 0ZM13.4979 2.38572V21.1392C13.2072 21.1397 12.9166 21.2126 12.6518 21.3579L6.55331 24.7058L7.718 17.615C7.8194 16.9974 7.62335 16.3675 7.19385 15.9301L2.26004 10.9084L9.07834 9.87389C9.67203 9.78379 10.1852 9.39443 10.4507 8.83267L13.4979 2.38572Z" fill="url(#paint1_linear_75_17858)"/>
    <g clip-path="url(#clip0_75_17858)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 1.18459e-07C13.5004 1.18459e-07 13.5008 -1.48073e-07 13.5012 1.18459e-07C14.1506 0.00077608 14.8006 0.354431 15.1345 1.06098L18.3183 7.79703L25.4373 8.8772C26.9324 9.10405 27.5294 11.0226 26.4476 12.1237L21.2961 17.367L22.5122 24.7705C22.7676 26.3255 21.2047 27.5112 19.8674 26.7771L13.5013 23.2823L13.5 23.283V1.18459e-07ZM13.5021 2.38572V21.1392C13.7928 21.1397 14.0834 21.2126 14.3482 21.3579L20.4467 24.7058L19.282 17.615C19.1806 16.9974 19.3766 16.3675 19.8061 15.9301L24.74 10.9084L17.9217 9.87389C17.328 9.7838 16.8147 9.39443 16.5493 8.83267L13.5021 2.38572Z" fill="url(#paint2_linear_75_17858)"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 1.20919e-07C13.4996 1.20919e-07 13.4992 -1.45474e-07 13.4988 1.20919e-07C12.8494 0.000775962 12.1994 0.354431 11.8655 1.06098L8.68165 7.79703L1.56265 8.8772C0.0675581 9.10405 -0.529371 11.0226 0.55242 12.1237L5.70389 17.367L4.48775 24.7705C4.23243 26.3255 5.7953 27.5112 7.13255 26.7771L13.4987 23.2823L13.5 23.283V1.20919e-07ZM13.5 1.20919e-07C13.5004 1.20919e-07 13.5008 -1.51148e-07 13.5012 1.20919e-07H13.5ZM13.4979 2.38572V21.1392C13.2072 21.1397 12.9166 21.2126 12.6518 21.3579L6.55331 24.7058L7.718 17.615C7.8194 16.9974 7.62335 16.3675 7.19385 15.9301L2.26003 10.9084L9.07834 9.87389C9.67203 9.78379 10.1853 9.39443 10.4507 8.83267L13.4979 2.38572Z" fill="url(#paint3_linear_75_17858)"/>
    </g>
    <defs>
        <linearGradient id="paint0_linear_75_17858" x1="13.5" y1="0" x2="13.5" y2="27" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFEC4A"/>
            <stop offset="1" stop-color="#EC9E06"/>
        </linearGradient>
        <linearGradient id="paint1_linear_75_17858" x1="13.5012" y1="0" x2="13.5012" y2="27" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFEC4A"/>
            <stop offset="1" stop-color="#EC9E06"/>
        </linearGradient>
            <linearGradient id="paint2_linear_75_17858" x1="13.5" y1="0" x2="13.5" y2="27" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFEC4A"/>
            <stop offset="1" stop-color="#EC9E06"/>
        </linearGradient>
        <linearGradient id="paint3_linear_75_17858" x1="13.5012" y1="0" x2="13.5012" y2="27" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFEC4A"/>
            <stop offset="1" stop-color="#EC9E06"/>
        </linearGradient>
            <clipPath id="clip0_75_17858">
            <rect width="27" height="27" fill="white"/>
        </clipPath>
    </defs>
</svg>
`,S="red",_="yellow",T=o.qy`<div class="stars-container" ${(0,$.K)("highlightingRatingContainer")}><div class="${t=>t.isAnimationValid?"animated-star1":"star1"}" style="${t=>"rtl"===document.dir?"transform:rotateY(180deg)":""}">${t=>z(t.rating,t.starType)}</div><div class="${t=>t.isAnimationValid?"animated-star2":"star2"}" style="${t=>"rtl"===document.dir?"transform:rotateY(180deg)":""}">${t=>z(t.rating-2,t.starType)}</div><div class="${t=>t.isAnimationValid?"animated-star3":"star3"}" style="${t=>"rtl"===document.dir?"transform:rotateY(180deg)":""}">${t=>z(t.rating-4,t.starType)}</div><div class="${t=>t.isAnimationValid?"animated-star4":"star4"}" style="${t=>"rtl"===document.dir?"transform:rotateY(180deg)":""}">${t=>z(t.rating-6,t.starType)}</div><div class="${t=>t.isAnimationValid?"animated-star5":"star5"}" style="${t=>"rtl"===document.dir?"transform:rotateY(180deg)":""}">${t=>z(t.rating-8,t.starType)}</div><div>`,z=(t,e)=>o.qy` ${(0,r.z)(e=>t-2>=0,(t=>{switch(t){case S:return w;case _:return k;default:return w}})(e))} ${(0,r.z)(e=>t-2<0,o.qy` ${(0,r.z)(e=>t-1>=0,(t=>{switch(t){case S:return y;case _:return L;default:return y}})(e))} ${(0,r.z)(e=>t-1<0,o.qy` ${(0,r.z)(e=>t-1<0,(t=>{switch(t){case S:return C;case _:return F;default:return C}})(e))} `)} `)} `;let M=class extends u{};M=(0,l.Cg)([(0,m.E)({name:"msn-native-ad-highlight-rating",template:T,styles:x,shadowOptions:{delegatesFocus:!0}})],M);var A=i(63456);const B=t=>"msn-highlight-rating-nondr-red"===(0,a.zT)(t)||"msn-highlight-rating-nondr-yellow"===(0,a.zT)(t)||"msn-highlight-rating-nondr-yellow-static"===(0,a.zT)(t),H=()=>o.qy`
    ${(0,r.z)(t=>B(t)&&(0,A.A)(t,"assets.rating"),o.qy`
        <msn-native-ad-highlight-rating
            effectId=${t=>t.id}
            rating=${t=>t.assets&&t.assets.rating}
            starType=${t=>(t=>"msn-highlight-rating-nondr-red"===(0,a.zT)(t)?S:_)(t)}
            :isStaticMode=${t=>(t=>"msn-highlight-rating-nondr-yellow-static"===(0,a.zT)(t))(t)}
        >
        </msn-native-ad-highlight-rating>
    `)}
    ${(0,r.z)(t=>!B(t)&&(0,A.A)(t,"assets.rating"),o.qy`
        <decoration-rating
            rating=${t=>t.assets.rating}
            is-show-review=${!1}
        >
        </decoration-rating>
    `)}
`;i(56784).O;const I=()=>o.qy`
        <decoration-plain-text
            data=${t=>(t=>{const e=(0,a.zT)(t);return"msn-combo-sold-nondr"===e&&(0,A.A)(t,"assets.sold")?t.assets.sold:"msn-combo-return-policy-nondr"===e&&(0,A.A)(t,"assets.returnPolicy")?t.assets.returnPolicy:"msn-combo-condition-nondr"===e&&(0,A.A)(t,"assets.condition")?t.assets.condition:void 0})(t)}
        ></decoration-plain-text>
    `;let E=class extends p.t{constructor(){super(...arguments),this.badgeText="",this.badgeTextColor="#FFFFFF",this.badgeBackgroundColor="#0078D4",this.badgeTextSize="12",this.badgeTextLineHeight="16",this.badgeTextFontWeight="600",this.badgeBorderRadius="4",this.paddingTop="",this.paddingBottom="",this.paddingLeft="",this.paddingRight=""}};(0,l.Cg)([(0,s.CF)({attribute:"badge-text"})],E.prototype,"badgeText",void 0),(0,l.Cg)([(0,s.CF)({attribute:"badge-text-color"})],E.prototype,"badgeTextColor",void 0),(0,l.Cg)([(0,s.CF)({attribute:"badge-background-color"})],E.prototype,"badgeBackgroundColor",void 0),(0,l.Cg)([(0,s.CF)({attribute:"badge-text-size"})],E.prototype,"badgeTextSize",void 0),(0,l.Cg)([(0,s.CF)({attribute:"badge-text-line-height"})],E.prototype,"badgeTextLineHeight",void 0),(0,l.Cg)([(0,s.CF)({attribute:"badge-text-font-weight"})],E.prototype,"badgeTextFontWeight",void 0),(0,l.Cg)([(0,s.CF)({attribute:"badge-border-radius"})],E.prototype,"badgeBorderRadius",void 0),(0,l.Cg)([(0,s.CF)({attribute:"padding-top"})],E.prototype,"paddingTop",void 0),(0,l.Cg)([(0,s.CF)({attribute:"padding-bottom"})],E.prototype,"paddingBottom",void 0),(0,l.Cg)([(0,s.CF)({attribute:"padding-left"})],E.prototype,"paddingLeft",void 0),(0,l.Cg)([(0,s.CF)({attribute:"padding-right"})],E.prototype,"paddingRight",void 0),E=(0,l.Cg)([(0,g.TA)(h.PDj,"msn-native-ad-badge")],E);const D=v.A`


`.withBehaviors(new b.e("layoutStyle"),new f.X(["badgeTextSize","badgeTextLineHeight","badgeBackgroundColor","badgeBorderRadius","paddingTop","paddingBottom","paddingLeft","paddingRight","badgeTextColor","badgeTextFontWeight"],t=>{const e=` .native-ad-badge{line-height:${t.badgeTextLineHeight}px;\n                font-size: ${t.badgeTextSize}px;\n                background-color: ${t.badgeBackgroundColor};\n                border-radius: ${t.badgeBorderRadius}px;\n                padding-top:${t.paddingTop}px;\n                padding-bottom:${t.paddingBottom}px;\n                padding-left:${t.paddingLeft}px;\n                padding-right:${t.paddingRight}px;\n                color:${t.badgeTextColor};\n                font-weight:${t.badgeTextFontWeight};\n            }\n        `;return v.A`${e}`})),Z=o.qy`<span class="native-ad-badge">${t=>t.badgeText}</span>`;let V=class extends E{};V=(0,l.Cg)([(0,m.E)({name:"msn-native-ad-badge",template:Z,styles:D})],V);var P=i(10001),U=i(74333),O=i(66196),R=i(48566),N=i(50130),G=i(11396),W=i(57133);G.r,W.DecorationFreeShippingButton;const j=t=>"msn-freeshipping-inline-nondr"===(0,a.zT)(t)||"msn-freeshipping-top-left-nondr"===(0,a.zT)(t)||"msn-freeshipping-top-right-nondr"===(0,a.zT)(t)||"msn-combo-freeshipping-nondr"===(0,a.zT)(t);var J=i(91278),Q=i(36845);O.e,P.w,U.j;const Y=t=>{var e;return null!==(e=t.template)&&void 0!==e&&e.progressiveDisplay&&t.hasAnyInlineDecoration?"native-ad-content-card":""},q=(t,e)=>{var i;null!==(i=t.template)&&void 0!==i&&i.progressiveDisplay&&t.hoverState&&t.hoverState.isHovered!==e&&(t.hoverState.isHovered=e)},K=(t,e)=>{if((0,a.Ni)(t))return o.qy`
        <div class="heading" part="heading" style="display: flex; align-items: center;">
            ${(0,r.z)(t=>e,o.qy`
                <h3 class="info-pane-slide-title" style="pointer-events: none; flex: 1;" part="info-pane-slide-title">
                    ${t=>t.title}
                </h3>
            `)}
            ${(0,r.z)(t=>!e,o.qy`
                <div class="cta-title" style="flex:1; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient: vertical;">
                    <span style = "font-size: ${t=>t.feedFontSize}px; 
                        line-height: "28px";
                        "${t=>t.fontFamilyOnCardContent?`font-family:${t.fontFamilyOnCardContent}, Segoe UI, Segoe UI Midlevel, Arial, Sans-Serif;`:""}"
                    ">
                        ${t=>t.title}
                    </span>
                </div>
            `)}
            <div class="cta-button" style="margin-inline-start: 4px; z-index: 2;">
                <msn-native-ad-call-to-action 
                    text=${t=>t.localizedStrings.nativeAdLearnMoreText||"learn more"}
                    default-background-color="#C6C0BA"
                    background-color="${t=>t.layoutColor}"
                    color="#000000"
                    is-hovered=${t=>t.hoverState&&t.hoverState.isHovered}
                    cta-mode="arrow"
                    destination-url=${t=>t.destinationUrl}
                    tel-metadata=${t=>{var e;return null==t||null===(e=t.adTelemetryContext)||void 0===e||null===(e=e.destination)||void 0===e?void 0:e.getMetadataTag()}}
                    ${(0,J.Ib)(!0,!1)}
                >
                </msn-native-ad-call-to-action>
        </div>`;if((0,a.eC)(t))return o.qy`
            <div class="sale-highlight-badge" style="position: absolute; bottom: 268px;">
                <msn-native-ad-sale-highlight-badge
		            component-name="sale-highlight-badge"
                    discount-text="${t=>{var e,i;return R.Qf.Format((null===(e=t.localizedStrings)||void 0===e?void 0:e.nativeAdOnSaleTextCapital)||"{0}% OFF",null===(i=t.assets)||void 0===i?void 0:i.discount)}}"
                >
                </msn-native-ad-sale-highlight-badge>
            </div>
        `;if((0,a.Ij)(t)){const{displayedText:i="",promotionalText:n="",redemptionCode:l="",daysFromExpiration:d="",destinationURL:s=""}=t.assets.specialOffer;return o.qy`
            <style>
                ${(0,r.z)(t=>t.show&&e,o.qy`
                    msft-info-pane-slide msft-attribution[slot="attribution"] {
                        bottom: 159px;
                        position: absolute;
                        z-index: 2;
                    }
                `)}
                ${(0,r.z)(t=>!t.show&&e,o.qy`
                msft-info-pane-slide msft-attribution[slot="attribution"] {
                    bottom: 261px;
                    position: absolute;
                    z-index: 2;
                }
            `)}
            </style>
            <msft-attribution 
                slot="attribution"
                @click=${()=>t.destinationUrl&&window.open(t.destinationUrl)}
                ${(0,J.Ib)(!0,!1)}
            >
                <msn-native-ad-special-offer
                    ${(0,J.Ib)(!0,!1)}
                    :localizedStrings=${t=>t.localizedStrings}
                    displayed-text="${i}"
                    promotional-text="${n}"
                    redemption-code="${l}"
                    days-from-expiration="${d}"
                    destination-url="${s}"
                    margin-left="-6"
                    ${e?"underneath-pop-up":""}
                    display-expiration-date=${t=>(0,a.G)(t)}
                ></msn-native-ad-special-offer>
            </msft-attribution>
        `}return(t=>B(t)||["msn-default-rating-nondr-yellow-static","msn-combo-rating-nondr"].includes((0,a.zT)(t)))(t)?o.qy`
            ${(0,r.z)(t=>!e,o.qy`
                <style>
                    ${(0,r.z)(t=>(t=>"msn-highlight-rating-nondr-red"===(0,a.zT)(t))(t),o.qy`
                        msft-attribution::part(content) {
                            width: 100%;
                        }
                    `)}
                    ${(0,r.z)(t=>B(t),o.qy`
                        msft-attribution[slot="attribution"] {
                            height: 64px;
                        }
                        msn-native-ad-highlight-rating {
                            position: absolute;
                            bottom: 0;
                        }
                    `)}
                </style>
                <msft-attribution slot="attribution">
                    ${H()}
                </msft-attribution>
            `)}
            ${(0,r.z)(t=>e,o.qy`
            <msft-attribution slot="attribution">
                <decoration-rating
                    rating=${t=>t.assets.rating}
                    review-data=${t=>t.assets.review}
                    is-info-pane=${e}
                ></decoration-rating>
                </msft-attribution>
            `)}
        `:(t=>j(t)||"msn-freeshipping-plain-text-nondr"===(0,a.zT)(t))(t)?o.qy`
            <div class="native-ad-free-shipping-badge" style="position: absolute; bottom: 268px;">
                <msn-native-ad-badge badge-text="${t=>(0,A.A)(t.localizedStrings,"nativeAdFreeShippingText")}" padding-top="1" padding-bottom="3" padding-left="8" padding-right="8">
                </msn-native-ad-badge>
            </div>
        `:(t=>"msn-combo-sold-nondr"===(0,a.zT)(t)||"msn-combo-return-policy-nondr"===(0,a.zT)(t)||"msn-combo-condition-nondr"===(0,a.zT)(t))(t)?o.qy`
            <msft-attribution slot="attribution" class="margin-5-decoration">
                ${I()}
            </msft-attribution>
        `:o.qy`${t=>{var e,i,a;return(0,Q.T)("attribution",!1,null===(e=t.template)||void 0===e?void 0:e.progressiveDisplay,null!==(i=t.hoverState)&&void 0!==i&&i.isHovered?65:25,null===(a=t.hoverState)||void 0===a?void 0:a.isHovered,!1,(0,n.$q)(t),e=>(0,n.IH)(t,e))}}`},X=t=>function(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return o.qy`
    <!--
        Only use placeholder when the card size is 1x_2y
    -->
    ${(0,r.z)(t=>t.cardSize===t.FeedLayoutCardSize._1x_2y&&t.imageData,o.qy`
        <div slot="${t}" style="width: ${e.width}px;height: ${e.height}px;">
            ${t=>t.renderImageTag("anim-content",i)}
        <div>
    `)}
    ${(0,r.z)(t=>t.cardSize===t.FeedLayoutCardSize._1x_2y&&!t.imageData,o.qy`
        <div slot="${t}" style="width: ${e.width}px;height: ${e.height}px;"></div>
    `)}
    ${(0,r.z)(t=>t.cardSize!==t.FeedLayoutCardSize._1x_2y&&t.imageData,o.qy`
        <div slot="${t}">
            ${t=>t.renderImageTag("anim-content",i)}
        </div>
    `)}
`}("image",t.ContentCardImageSizes._300x225),tt=o.qy`
    <style>
        :host {
            --article-native-ad-heading-margin-bottom: -12px;
        }
        msft-ad-label {
            margin-inline-end: 8px;
        }

        ${(0,r.z)(t=>{var e;return!(null!==(e=t.assets)&&void 0!==e&&e.specialOffer)},o.qy`
        msft-article msft-attribution[slot="attribution"] {
            display: flex;
            align-self: end;
        }
        `)}

        ${(0,r.z)(t=>{var e;return null===(e=t.assets)||void 0===e?void 0:e.specialOffer},o.qy`
            msft-article msft-attribution[slot="attribution"] {
                cursor: pointer;
                display: flex;
                align-self: end;
                overflow: visible;
                max-width: 300px;
                z-index: 2;
                margin-bottom: 5px;
            }
            
            msft-article msft-attribution[slot="attribution"]::part(content) {
                overflow: visible;
            }
        `)}

        ${(0,r.z)(t=>{var e;return null===(e=t.assets)||void 0===e?void 0:e.rating},o.qy`
            msft-article msft-attribution[slot="attribution"] {
                margin-bottom: 1px;
            }
        `)}

        msft-article span.title_1x_2y,
        msft-article span.title_2x_2y {
            font-size: 20px;
        }
        
        ${(0,r.z)(t=>{var e;return"adult"===(null===(e=t.template)||void 0===e?void 0:e.nativeAdMode)},o.qy`
            msft-article div[slot="end-action"] {
                --neutral-foreground-rest: white;
            }
        `)}
        msft-article div[slot="end-action"] {
            display: flex;
            align-items: center;
            --control-corner-radius: 100;
            position: relative;
            bottom: -8px;
        }

        msft-attribution[slot="start-action"] {
            margin-top: 15px;
        }
        

        msft-article a.ad-choice-icon {
            display: inline-flex;
            justify-content: center;
            min-width: calc((var(--base-height-multiplier) + var(--density)) * var(--design-unit) * 1px); 
        }

        msft-article.native-ad, msft-article.${(0,N.nP)("native-ad")} {
            --article-native-ad-heading-margin-bottom: -1px;
            --heading-max-lines: 2;
        }

        msft-article.nativeAdVideo-river::part(image) {
            z-index: 2;
        }

        msft-article.native-ad.gradient, msft-article.${(0,N.nP)("native-ad")}.gradient {
            --article-native-ad-actions-height: 33px;
            --article-native-ad-heading-margin-bottom: 6px;
        }

        msft-article.native-ad::part(heading), msft-article.${(0,N.nP)("native-ad")}::part(heading) {
            margin-bottom: var(--article-native-ad-heading-margin-bottom);
            color: var(--msft-card-font-color);
        }

        msft-article.native-ad.long-gradient::part(gradient), msft-article.${(0,N.nP)("native-ad")}.long-gradient::part(gradient) {
            top: -55px;
        }

        ${(0,r.z)(t=>{var e;return null===(e=t.template)||void 0===e?void 0:e.immersiveThemeColor},o.qy`
            @media (prefers-color-scheme: light) {
                msft-article::part(gradient) {
                    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 45.83%, #FFFFFF 100%);
                }

                msft-article::part(article) {
                    background: #FFFFFF;
                }
                msft-article::part(heading) {
                    color: #000000;
                }
            }

            @media (prefers-color-scheme: dark) {
                msft-article::part(gradient) {
                    background: linear-gradient(180deg, transparent 0%, rgba(43, 43, 43, 0.8) 62.5%, #2E2E2E 100% );
                }

                msft-article::part(article) {
                    background: #2B2B2B;
                }
                msft-article::part(heading) {
                    color: #FFFFFF;
                }
            }
        `)}

        ${(0,r.z)(t=>t.layoutGap,o.qy`
            msft-article-card[size="_1x_2y"] msft-article::part(gradient) {
                bottom: ${t=>67+t.layoutGap}px;
            }

            msft-article-card[size="_2x_2y"] msft-article::part(gradient) {
                bottom: 0px;
            }
        `)}

        ${(0,r.z)(t=>"rtl"===document.dir,o.qy`
            msft-article-card msft-article msn-inline-group::part(inline-item) {
                padding-left: 12px;
                padding-right: unset;
            }
        `)}

        ${(0,r.z)(t=>["ltr",""].includes(document.dir),o.qy`
            msft-article-card msft-article msn-inline-group::part(inline-item) {
                padding-right: 12px;
            }
        `)}

        :host {
            grid-area:${t=>t.gridArea};
        }

        msft-article-card[size="_1x_2y"],
        msft-article-card[size="_2x_2y"] {
            --card-width: auto;
            --card-height: auto;
        }

        ${(0,r.z)(t=>{var e;return!(null!==(e=t.assets)&&void 0!==e&&e.specialOffer)},o.qy`
        msft-attribution {
            max-width: 100%;
        }
    `)}

        msft-article.native-ad::part(actions), msft-article.${(0,N.nP)("native-ad")}::part(actions) {
            height: var(--article-native-ad-actions-height);
            align-items: center;
        }
        
        msft-article.two-lines-heading::part(heading) {
            -webkit-line-clamp: 2;
        }

        msft-article.special-offer::part(heading),
        msft-article.deco-rating::part(heading),
        msft-article.deco-free-shipping::part(heading) {
            margin-bottom: -1px;
        }

        msft-article.three-lines-heading::part(heading) {
            -webkit-line-clamp: 3;
        }
        msft-article-card msft-article::part(heading):after {
            top: calc(100% - 304px - 8px);
        }

        ${(0,r.z)(t=>t.useTitleFontSize,o.qy`
            msft-article-card msft-article {
                --msft-article-heading-font-size: ${t=>t.useTitleFontSize}px;
                --msft-article-heading-line-height: 24px;
            }

            msft-article-card msft-article::part(attribution) {
                height: 28px;
            }

            msft-article-card[size="_1x_2y"] msft-article:not(.no-image)::part(heading) {
                margin-bottom: -4px;
            }

            msft-article-card[size="_1x_2y"] msft-article:not(.no-image)::part(gradient) {
                background: linear-gradient(180deg, transparent 0%, var(--gradient-mid-color) 46%, var(--gradient-color) 100%);
                top: 5px;
            }
        `)}

        msft-article-card[size="_1x_2y"] msft-article[id="native_ad_${t=>t.id}"]::part(gradient) {
            top: 11px;
            bottom: 79px;
            background: linear-gradient(180deg, transparent 0%, var(--gradient-mid-color) 56%, var(--gradient-color) 100%);
        }

    </style>
    <msft-article-card
        style="
            grid-area:${t=>t.gridArea};
            height: ${t=>t.ContentCardImageSizes._300x304.height}px;
        "
        size="${t=>t.cardSize}"
        card-fill-color=${t=>{var e;return"adult"===(null===(e=t.template)||void 0===e?void 0:e.nativeAdMode)?"#2E2E2E":t.adBackgroundColor}}
    >
        <msft-article
            id="native_ad_${t=>t.id}"
            href=${t=>t.destinationUrl}
            target="_blank"
            title=${t=>t.title}
            ?image-priority=${t=>t.imagePriority}
            class=${t=>(t=>{var e,i,a;const n=[Y(t)];return n.push("native-ad"),t.hasAnyInlineDecoration||t.adSlugGA?n.push("two-lines-heading"):n.push("three-lines-heading"),null!==(e=t.assets)&&void 0!==e&&e.specialOffer&&n.push("special-offer"),null!==(i=t.assets)&&void 0!==i&&i.rating&&n.push("deco-rating"),null!==(a=t.assets)&&void 0!==a&&a.freeShipping&&n.push("deco-free-shipping"),n.filter(t=>t).join(" ")})(t)}
            data-t="${t=>t.id?t.adTelemetryContext.nativeAdCard.getMetadataTag():""}"
            :anchorTelemetryTag=${t=>t.adTelemetryContext&&t.adTelemetryContext.destination&&t.adTelemetryContext.destination.getMetadataTag()}
            ${(0,J.Ib)()}
            @mouseenter=${t=>q(t,!0)}
            @mouseleave=${t=>q(t,!1)}
        >
            ${t=>(0,a.Ni)(t)?"":t.renderTitle()}
            ${t=>X(t)}
            ${t=>K(t)}
            ${t=>t.renderStartSection("start-action",t.destinationUrl)}
            ${t=>t.renderEndSection("end-action")}
        </msft-article>
    </msft-article-card>
`},10797:function(t,e,i){i.d(e,{EW:function(){return x},G:function(){return m},Ij:function(){return u},JF:function(){return c},NL:function(){return s},Ni:function(){return v},RB:function(){return b},Rw:function(){return d},eC:function(){return f},gJ:function(){return h},zT:function(){return g}});var a=i(39619),n=i(45084),o=i(693),r=i(6383);var l;!function(t){t.LTR="leftToRight",t.RTL="rightToLeft"}(l||(l={}));const d=t=>{var e,i;if(t.hasAnyInlineDecoration)switch(null===(e=t.template)||void 0===e?void 0:e.templateType){case"msn-river-animated-imagery-9-by-16":case"msn-river-z-index-3-by-4":case"msn-river-z-index-9-by-16":return"five-lines-heading";default:return"two-lines-heading"}else switch(null===(i=t.template)||void 0===i?void 0:i.templateType){case"msn-river-animated-imagery-9-by-16":case"msn-river-z-index-3-by-4":case"msn-river-z-index-9-by-16":return"eight-lines-heading";default:return"three-lines-heading"}},s=(t,e)=>{var i;if(["msn-river-z-index-3-by-4","msn-river-z-index-9-by-16","msn-river-animated-imagery-9-by-16"].includes(null===(i=e.template)||void 0===i?void 0:i.templateType)){if("rtl"===t)return l.RTL;if("ltr"===t)return l.LTR}return""},c=t=>e=>{var i,n,o;const r=null==e||null===(i=e.hoverState)||void 0===i?void 0:i.isHovered,l=null==e||null===(n=e.template)||void 0===n?void 0:n.progressiveDisplay,d="call-to-action";switch(null===(o=e.template)||void 0===o?void 0:o.templateType){case"msn-river-animated-imagery-9-by-16":case"msn-river-z-index-3-by-4":case"msn-river-z-index-9-by-16":return t(d,!1,l,65,r,!0,0,t=>(0,a.IH)(e,t));default:return t(d,!1,l,r?65:25,r,!1,(0,a.$q)(e),t=>(0,a.IH)(e,t))}};var p;!function(t){t.ImageAtTop="imageAtTop",t.ImageAtBottom="imageAtBottom",t.AnimatedImagery9by16="animatedImagery9by16",t.ImageAtRight9By16="imageAtRight9By16",t.ImageAtRight3By4="imageAtRight3By4"}(p||(p={}));const h=t=>{switch(t.template.templateType){case"msn-river-animated-imagery-9-by-16":return p.AnimatedImagery9by16;case"msn-river-z-index-9-by-16":return p.ImageAtRight9By16;case"msn-river-z-index-3-by-4":return p.ImageAtRight3By4;case"msn-z-index-card":return t.template.flipZIndex?p.ImageAtTop:p.ImageAtBottom}},g=t=>{var e;return(null===(e=t.template)||void 0===e?void 0:e.templateType)||"msft-content-card"},u=t=>["msn-special-offer-nondr","msn-special-offer-nondr-with-exp","msn-combo-special-offer-nondr"].includes(g(t)),m=t=>"msn-special-offer-nondr-with-exp"===g(t),v=t=>["msn-call-to-action-v3","msn-call-to-action-v3-pa"].includes(g(t)),f=t=>Boolean("msn-combo-sale-highlight-nondr"===g(t)),b=t=>{var e,i,a;t.disableRenderDecoration&&"msft-content-card"==g(t)&&(t=>{if(t.assets&&!(0,o.A)(t.assets)){const e=(0,r.A)(t.assets,(t,e,i)=>(n.rQ.includes(n.eO[i])&&(t[i]=e),t),{});t.assets=e}})(t);const l=null===(e=t.template)||void 0===e?void 0:e.immersiveThemeColor,d=t.badge,s=t.videoProps,c=!!t.assets&&!(0,o.A)(t.assets),p=(null===(i=t.template)||void 0===i?void 0:i.animatedImage)&&(null===(a=t.template)||void 0===a?void 0:a.animatedConfig),h=["msn-pseudo-video-card","msn-slideshow-card","msn-pattern-overlay-card","msn-ad-carousel","msn-z-index-card","msn-river-animated-imagery-9-by-16","msn-river-z-index-9-by-16","msn-river-z-index-3-by-4","msn-call-to-action-v3"].includes(g(t));return!(!t.isTransparentAdSlugWithBorder&&!t.enableAdsColorBleed)||!s&&!!(d||c||p||h||l)},x=t=>{const e=!!t.assets&&!(0,o.A)(t.assets),i=["msn-special-offer-nondr","msn-special-offer-nondr-with-exp","msn-highlight-rating-nondr-red","msn-highlight-rating-nondr-yellow","msn-default-rating-nondr-yellow-static","msn-highlight-rating-nondr-yellow-static","msn-freeshipping-plain-text-nondr","msn-freeshipping-inline-nondr","msn-freeshipping-top-left-nondr","msn-freeshipping-top-right-nondr","msn-condition-nondr","msn-return-policy-nondr","msn-sold-nondr","msn-combo-freeshipping-nondr","msn-combo-rating-nondr","msn-combo-special-offer-nondr","msn-combo-sold-nondr","msn-combo-return-policy-nondr","msn-combo-condition-nondr"].includes(g(t));return!(e||!i)}},11396:function(t,e,i){i.d(e,{r:function(){return c}});var a=i(56911),n=i(26950),o=i(92011),r=i(96950),l=i(31756),d=i(1701);l.M;const s=r.qy`<pure-text content="${t=>t.data}" custom-style="font-size: 16px" light-theme-color=${t=>(0,d.TK)(t.isInfoPane)} dark-theme-color=${t=>(0,d.Xn)(t.isInfoPane)} />`;let c=class extends n.o{};c=(0,a.Cg)([(0,o.E)({name:"decoration-free-shipping",template:s})],c)},17312:function(t,e,i){i.d(e,{UN:function(){return k}});var a=i(56911),n=i(38493),o=i(60815),r=i(65022),l=i(44449),d=i(41626);let s=class extends d.t{constructor(){super(...arguments),this.disclaimer="",this.disclaimerTooltip="Disclaimer",this.popupMargin=0,this.url="",this.isHovered=!1}updateDisclaimerHoverState(t){this.isHovered=t}connectedCallback(){super.connectedCallback()}};(0,a.Cg)([(0,n.CF)({attribute:"disclaimer"})],s.prototype,"disclaimer",void 0),(0,a.Cg)([(0,n.CF)({attribute:"disclaimer-tooltip"})],s.prototype,"disclaimerTooltip",void 0),(0,a.Cg)([(0,n.CF)({attribute:"popup-margin"})],s.prototype,"popupMargin",void 0),(0,a.Cg)([(0,n.CF)({attribute:"url"})],s.prototype,"url",void 0),(0,a.Cg)([(0,n.CF)({attribute:"tel-metadata"})],s.prototype,"telemetryMetadata",void 0),(0,a.Cg)([o.sH],s.prototype,"isHovered",void 0),s=(0,a.Cg)([(0,l.TA)(r.PDj,"msn-native-ad-disclaimer")],s);var c=i(92011),p=i(74849),h=i(75096),g=i(59957);const u=p.A`
.native-ad-disclaimer-container{width:32px;height:32px;cursor:pointer}.native-ad-disclaimer-container svg{position:absolute;margin-inline:9px;margin-top:9px}.disclaimer-popup-container{position:absolute;bottom:100%;width:32px;margin-inline:9px}.disclaimer-popup-container svg{margin-inline:0px;margin-top:0px}.disclaimer-popup{position:relative;color:var(--fill-color);background:var(--neutral-foreground-rest);padding:8px;font-size:12px;width:152px;max-width:152px;max-height:48px;bottom:7px;border-radius:2px;z-index:1}.disclaimer-popup-text{-webkit-line-clamp:2;text-overflow:ellipsis;overflow:hidden;white-space:normal;display:-webkit-box;-webkit-box-orient:vertical;text-align:center;font-size:12px}.disclaimer-popup-arrow{height:15px;width:15px;position:absolute;bottom:0px}.disclaimer-popup-arrow svg rect{fill:var(--neutral-foreground-rest)}.native-ad-disclaimer-container svg path{fill:var(--neutral-foreground-rest)}@media (forced-colors:active){.disclaimer-popup{color:buttonface;background:buttontext}.disclaimer-popup-arrow svg rect{fill:buttontext}.native-ad-disclaimer-container svg path{fill:buttontext}}`.withBehaviors(new g.e("layoutStyle"),new h.X(["popupMargin"],t=>{const e=(t.popupMargin?t.popupMargin-168-5:5)+"px";return p.A` .disclaimer-popup.disclaimer-popup-dynamic-style{margin-inline:${e};
            }
        `}));var m=i(96950),v=i(91640);const f=m.qy`
<svg width="15" height="15" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="12" width="16" height="16" transform="rotate(-45 0 12)" fill="white"/>
</svg>
`,b=m.qy`
<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 15C6.80729 15 6.14323 14.9115 5.50781 14.7344C4.8724 14.5573 4.27344 14.3073 3.71094 13.9844C3.14844 13.6615 2.64323 13.2708 2.19531 12.8125C1.7474 12.3542 1.35677 11.8464 1.02344 11.2891C0.690104 10.7318 0.4375 10.1354 0.265625 9.5C0.09375 8.86458 0.00520833 8.19792 0 7.5C0 6.80729 0.0885417 6.14323 0.265625 5.50781C0.442708 4.8724 0.692708 4.27344 1.01562 3.71094C1.33854 3.14844 1.72917 2.64323 2.1875 2.19531C2.64583 1.7474 3.15365 1.35677 3.71094 1.02344C4.26823 0.690104 4.86458 0.4375 5.5 0.265625C6.13542 0.09375 6.80208 0.00520833 7.5 0C8.19271 0 8.85677 0.0885417 9.49219 0.265625C10.1276 0.442708 10.7266 0.692708 11.2891 1.01562C11.8516 1.33854 12.3568 1.72917 12.8047 2.1875C13.2526 2.64583 13.6432 3.15365 13.9766 3.71094C14.3099 4.26823 14.5625 4.86458 14.7344 5.5C14.9062 6.13542 14.9948 6.80208 15 7.5C15 8.19271 14.9115 8.85677 14.7344 9.49219C14.5573 10.1276 14.3073 10.7266 13.9844 11.2891C13.6615 11.8516 13.2708 12.3568 12.8125 12.8047C12.3542 13.2526 11.8464 13.6432 11.2891 13.9766C10.7318 14.3099 10.1354 14.5625 9.5 14.7344C8.86458 14.9062 8.19792 14.9948 7.5 15ZM7.5 1C6.90104 1 6.32552 1.07812 5.77344 1.23438C5.22135 1.39062 4.70573 1.60938 4.22656 1.89062C3.7474 2.17188 3.30729 2.51042 2.90625 2.90625C2.50521 3.30208 2.16667 3.73958 1.89062 4.21875C1.61458 4.69792 1.39583 5.21615 1.23438 5.77344C1.07292 6.33073 0.994792 6.90625 1 7.5C1 8.09375 1.07812 8.66667 1.23438 9.21875C1.39062 9.77083 1.60938 10.2891 1.89062 10.7734C2.17188 11.2578 2.51042 11.6979 2.90625 12.0938C3.30208 12.4896 3.73958 12.8281 4.21875 13.1094C4.69792 13.3906 5.21615 13.6094 5.77344 13.7656C6.33073 13.9219 6.90625 14 7.5 14C8.09375 14 8.66667 13.9219 9.21875 13.7656C9.77083 13.6094 10.2891 13.3906 10.7734 13.1094C11.2578 12.8281 11.6979 12.4896 12.0938 12.0938C12.4896 11.6979 12.8281 11.2604 13.1094 10.7812C13.3906 10.3021 13.6094 9.78385 13.7656 9.22656C13.9219 8.66927 14 8.09375 14 7.5C14 6.90625 13.9219 6.33333 13.7656 5.78125C13.6094 5.22917 13.3906 4.71094 13.1094 4.22656C12.8281 3.74219 12.4896 3.30208 12.0938 2.90625C11.6979 2.51042 11.2604 2.17188 10.7812 1.89062C10.3021 1.60938 9.78385 1.39062 9.22656 1.23438C8.66927 1.07812 8.09375 1 7.5 1ZM7 6H8V11H7V6ZM7 4H8V5H7V4Z" fill="white"/>
</svg>
`,x=m.qy`
${(0,v.z)(t=>t.disclaimer,m.qy`<a href=${t=>t.url} target="_blank" data-t="${t=>t.telemetryMetadata}"><div class="native-ad-disclaimer-container native-ad-disclaimer-container-dynamic-style">${(0,v.z)(t=>t.isHovered,m.qy`<div class="disclaimer-popup-container"><div class="disclaimer-popup disclaimer-popup-offset disclaimer-popup-dynamic-style"><span class="disclaimer-popup-text">${t=>t.disclaimer}</span></div><div class="disclaimer-popup-arrow">${f}</div></div>`)}<div title="${t=>t.disclaimerTooltip}" @mouseenter=${t=>t.updateDisclaimerHoverState(!0)} @mouseleave=${t=>t.updateDisclaimerHoverState(!1)}>${b}</div></div></a>`)}
`;let $=class extends s{};$=(0,a.Cg)([(0,c.E)({name:"msn-native-ad-disclaimer",template:x,styles:u})],$);var w=i(63456),y=i(91278);const C=t=>{const e=null==t?void 0:t.adChoiceIconUrl,i=(null==t?void 0:t.isAdFeedbackV1Enabled)&&(null==t?void 0:t.feedbackUrl);return e||i?e&&i?2:1:0},k=t=>m.qy`
    <msn-native-ad-disclaimer 
        ${(0,y.Ib)(!0,!1)}
        disclaimer=${t=>t.assets&&t.assets.disclaimer}
        disclaimer-tooltip=${t=>(0,w.A)(t.localizedStrings,"nativeAdDisclaimerText")}
        popup-margin=${t=>(t=>2===C(t)?103:1===C(t)?70:35)(t)}
        :layoutConfig=${e=>null==t?void 0:t.layout}
        url=${t=>t.destinationUrl}
        tel-metadata=${t=>{var e;return null==t||null===(e=t.adTelemetryContext)||void 0===e||null===(e=e.destination)||void 0===e?void 0:e.getMetadataTag()}}
		component-name="${e=>null==t?void 0:t.name}"
    >
    </msn-native-ad-disclaimer>
`},19173:function(t,e){e.A='<svg width="11" height="3" viewBox="0 0 11 3" fill="none"><path d="M2.5 1.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM6.5 1.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM9.25 2.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"/></svg>'},21713:function(t,e,i){i.d(e,{J:function(){return h}});var a=i(56911),n=i(92011),o=i(38493);class r extends n.L{toggleSelected(){this.internalToggle&&(this.selected=!this.selected),this.$emit("selected-state-changed")}connectedCallback(){super.connectedCallback(),this.button&&(this.button.control.title=this.selectTitle||"")}}(0,a.Cg)([(0,o.CF)({attribute:"data-icon"})],r.prototype,"dataIcon",void 0),(0,a.Cg)([(0,o.CF)({attribute:"layout"})],r.prototype,"layout",void 0),(0,a.Cg)([(0,o.CF)({attribute:"fill-color-selected"})],r.prototype,"fillColorSelected",void 0),(0,a.Cg)([(0,o.CF)({attribute:"filled-icon-path"})],r.prototype,"filledIconPath",void 0),(0,a.Cg)([(0,o.CF)({attribute:"select-icon"})],r.prototype,"selectIcon",void 0),(0,a.Cg)([(0,o.CF)({attribute:"unselect-icon"})],r.prototype,"unselectIcon",void 0),(0,a.Cg)([(0,o.CF)({attribute:"select-title"})],r.prototype,"selectTitle",void 0),(0,a.Cg)([(0,o.CF)({attribute:"unselect-title"})],r.prototype,"unselectTitle",void 0),(0,a.Cg)([(0,o.CF)({attribute:"animation-text"})],r.prototype,"animationText",void 0),(0,a.Cg)([(0,o.CF)({mode:"boolean"})],r.prototype,"selected",void 0),(0,a.Cg)([(0,o.CF)({attribute:"select-telemetry-tag"})],r.prototype,"selectTelemetryTag",void 0),(0,a.Cg)([(0,o.CF)({attribute:"unselect-telemetry-tag"})],r.prototype,"unselectTelemetryTag",void 0),(0,a.Cg)([(0,o.CF)({mode:"boolean"})],r.prototype,"internalToggle",void 0);const l=i(74849).A` fluent-button{border-radius:100px}fluent-button.fill-color-selected svg{fill:var(--fill-color-selected)}fluent-button.filled-icon-hover{background:transparent;min-width:20px;height:20px}fluent-button.filled-icon-hover::part(control){width:20px}fluent-button.filled-icon-hover svg{width:20px;height:20px}fluent-button.filled-icon-hover:hover > svg > path{transition:all 0.5s;d:path(var(--filled-path))}fluent-button.filled-icon-hover,fluent-button.no-backplate:not(:hover){background:transparent}fluent-button.expand::part(control){padding:0}.button-content{display:flex;flex-direction:row;align-items:center;padding-inline-start:8px;animation:padding-icon 0.3s linear 2s 1 forwards}.button-content > span{font-size:var(--type-ramp-minus-1-font-size);padding-inline-start:6px;padding-inline-end:10px;display:inline-block;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.button-content > svg{max-height:16px}.disappear{animation:disappear 0.3s ease-out 2s forwards;max-width:165px}.expand{border-radius:100px;max-width:210px}@keyframes disappear{to{width:0;padding-inline:0;overflow:hidden;opacity:0;display:none}}@keyframes padding-icon{to{padding-inline-start:0}}`;var d=i(96950),s=i(60402),c=i(91640);const p=d.qy`<fluent-button class=${t=>`${"fillediconhover"===t.layout?"filled-icon-hover":""} ${"nobackplate"===t.layout?"no-backplate":""} ${t.fillColorSelected&&t.selected?" fill-color-selected":""}`} data-icon=${t=>t.dataIcon} appearance="neutral" style="--filled-path: '${t=>t.filledIconPath}'; --fill-color-selected: ${t=>t.fillColorSelected};" aria-label=${t=>t.selectTitle} aria-pressed=${t=>t.selected} title=${t=>t.selected?t.unselectTitle:t.selectTitle} @click=${t=>t.toggleSelected&&t.toggleSelected()} data-t="${t=>t.selected?t.unselectTelemetryTag:t.selectTelemetryTag}" ${(0,s.K)("button")}>${(0,c.z)(t=>t.selected,d.qy` ${(0,c.z)(t=>"animated"!==t.layout,d.qy` ${t=>d.qy`${d.qy.partial(t.selectIcon||"")}`} `)} ${(0,c.z)(t=>"animated"===t.layout,d.qy`<span class="button-content">${t=>d.qy`${d.qy.partial(t.selectIcon||"")}`}<span class="disappear">${t=>t.animationText}</span></span>`)} `)} ${(0,c.z)(t=>!t.selected,d.qy`${t=>d.qy`${d.qy.partial(t.unselectIcon||"")}`}`)}</fluent-button>`;let h=class extends r{};h=(0,a.Cg)([(0,n.E)({name:"msn-card-button",template:p,styles:l,shadowOptions:{delegatesFocus:!0}})],h)},24953:function(t,e,i){i.d(e,{g:function(){return p}});var a=i(56911),n=i(92011),o=i(38493);class r extends n.L{constructor(){super(...arguments),this.iconName="",this.iconColor=""}}(0,a.Cg)([o.CF],r.prototype,"data",void 0),(0,a.Cg)([(0,o.CF)({attribute:"icon-name"})],r.prototype,"iconName",void 0),(0,a.Cg)([(0,o.CF)({attribute:"icon-width"})],r.prototype,"iconWidth",void 0),(0,a.Cg)([(0,o.CF)({attribute:"icon-height"})],r.prototype,"iconHeight",void 0),(0,a.Cg)([(0,o.CF)({attribute:"icon-color"})],r.prototype,"iconColor",void 0);const l=i(74849).A`
`;var d=i(96950),s=i(91640);const c=d.qy`<template id="pure-icon">${t=>{const{iconWidth:e,iconHeight:i,iconColor:a}=t;return d.qy` ${(0,s.z)(t=>"check"===t.iconName,((t,e,i)=>d.qy`
    <svg fill=${t} width=${e} height=${i} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 12 12" enable-background="new 0 0 12 12" xml:space="preserve">
        <path d="M6,0C2.686,0,0,2.686,0,6s2.686,6,6,6s6-2.686,6-6S9.314,0,6,0z M9.207,5.207l-3.5,3.5&#xA; c-0.39,0.39-1.023,0.39-1.414,0l-1.5-1.5C2.785,7.199,2.776,7.191,2.768,7.182c-0.384-0.397-0.373-1.03,0.025-1.414&#xA; c0.397-0.384,1.03-0.373,1.414,0.025L5,6.586l2.793-2.793c0.008-0.008,0.016-0.017,0.025-0.025c0.397-0.384,1.03-0.373,1.414,0.025&#xA; C9.615,4.19,9.604,4.823,9.207,5.207z" />
    </svg>
`)(a,e,i))} ${(0,s.z)(t=>"fullStar"===t.iconName,((t,e)=>d.qy`
    <svg width=${t} height=${e} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.52351 0.471551C5.82068 -0.157184 6.6793 -0.157184 6.97646 0.471551L8.39149 3.46535L11.5555 3.94543C12.22 4.04625 12.4853 4.89895 12.0045 5.38833L9.71494 7.71866L10.2554 11.0092C10.3689 11.7002 9.67431 12.2272 9.07998 11.9009L6.24999 10.3474L3.42001 11.9009C2.82569 12.2272 2.13105 11.7002 2.24456 11.0092L2.78504 7.71866L0.495535 5.38833C0.014709 4.89895 0.280035 4.04625 0.94452 3.94543L4.10854 3.46535L5.52351 0.471551Z" fill="url(#paint0_linear)"></path>
        <defs>
            <linearGradient id="paint0_linear" x1="1.9375" y1="1.6875" x2="12.2493" y2="10.9867" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF9900"></stop>
                <stop offset="0.291667" stop-color="#FFB729"></stop>
                <stop offset="1" stop-color="#FFE975"></stop>
                <stop offset="1" stop-color="#FFE975"></stop>
            </linearGradient>
        </defs>
    </svg>
`)(e,i))} ${(0,s.z)(t=>"emptyStar"===t.iconName,((t,e)=>d.qy`
    <svg width=${t} height=${e} viewBox="0 4 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.27351 4.47155C5.57068 3.84282 6.4293 3.84281 6.72646 4.47155L8.14149 7.46535L11.3055 7.94543C11.97 8.04625 12.2353 8.89895 11.7545 9.38834L9.46494 11.7187L10.0054 15.0091C10.1189 15.7002 9.42431 16.2272 8.82998 15.9009L5.99999 14.3474L3.17001 15.9009C2.57569 16.2272 1.88105 15.7002 1.99456 15.0091L2.53504 11.7187L0.245535 9.38834C-0.235291 8.89895 0.030035 8.04625 0.69452 7.94543L3.85854 7.46535L5.27351 4.47155ZM5.99999 5.05831L4.64478 7.92564C4.52678 8.17531 4.29867 8.34836 4.0348 8.3884L1.00445 8.84819L3.19723 11.0801C3.38817 11.2745 3.4753 11.5544 3.43023 11.8289L2.91258 14.9804L5.62301 13.4924C5.85903 13.3628 6.14095 13.3628 6.37697 13.4924L9.08742 14.9804L8.56978 11.8289C8.52471 11.5544 8.61184 11.2745 8.80273 11.0801L10.9955 8.84819L7.96518 8.3884C7.70132 8.34836 7.47322 8.17531 7.35524 7.92564L5.99999 5.05831Z" fill="url(#paint0_linear)"></path>
        <defs>
            <linearGradient id="paint0_linear" x1="1.6875" y1="5.6875" x2="11.9993" y2="14.9867" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF9900"></stop>
                <stop offset="0.291667" stop-color="#FFB729"></stop>
                <stop offset="1" stop-color="#FFE975"></stop>
                <stop offset="1" stop-color="#FFE975"></stop>
            </linearGradient>
        </defs>
    </svg>
`)(e,i))} ${(0,s.z)(t=>"halfStar"===t.iconName,((t,e)=>d.qy`
    <svg width=${t} height=${e} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M5.27351 0.471548C5.57068 -0.15718 6.4293 -0.157186 6.72646 0.471548L8.14149 3.46535L11.3055 3.94543C11.97 4.04625 12.2353 4.89895 11.7545 5.38834L9.46494 7.71866L10.0054 11.0091C10.1189 11.7002 9.42431 12.2272 8.82998 11.9009L5.99999 10.3474L3.17001 11.9009C2.57569 12.2272 1.88105 11.7002 1.99456 11.0091L2.53504 7.71866L0.245535 5.38834C-0.235291 4.89895 0.030035 4.04625 0.69452 3.94543L3.85854 3.46535L5.27351 0.471548ZM5.99999 1.05831L4.64478 3.92564C4.52678 4.17531 4.29867 4.34836 4.0348 4.3884L1.00445 4.84819L3.19723 7.08007C3.38817 7.27445 3.4753 7.55442 3.43023 7.82888L2.91258 10.9804L5.62301 9.49242C5.85903 9.36284 6.14095 9.36284 6.37697 9.49242L9.08742 10.9804L8.56978 7.82888C8.52471 7.55442 8.61184 7.27445 8.80273 7.08007L10.9955 4.84819L7.96518 4.3884C7.70132 4.34836 7.47322 4.17531 7.35524 3.92564L5.99999 1.05831Z"
            fill="url(#paint0_linear)"></path>
        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="6" height="12">
            <rect width="6" height="12" fill="#C4C4C4"></rect>
        </mask>
        <g mask="url(#mask0)">
            <path
                d="M5.27351 0.471551C5.4221 0.157183 5.71104 -8.64667e-08 5.99999 0C6.28893 8.6463e-08 6.57788 0.157184 6.72646 0.471551L8.14149 3.46535L11.3055 3.94543C11.97 4.04625 12.2353 4.89895 11.7545 5.38833L9.46494 7.71866L10.0054 11.0092C10.1189 11.7002 9.42431 12.2272 8.82998 11.9009L5.99999 10.3474L3.17001 11.9009C2.57569 12.2272 1.88105 11.7002 1.99456 11.0092L2.53504 7.71866L0.245535 5.38833C-0.235291 4.89895 0.0300351 4.04625 0.69452 3.94543L3.85854 3.46535L5.27351 0.471551Z"
                fill="url(#paint1_linear)"></path>
        </g>
        <defs>
            <linearGradient id="paint0_linear" x1="1.6875" y1="1.6875" x2="11.9993" y2="10.9867"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF9900"></stop>
                <stop offset="0.291667" stop-color="#FFB729"></stop>
                <stop offset="1" stop-color="#FFE975"></stop>
                <stop offset="1" stop-color="#FFE975"></stop>
            </linearGradient>
            <linearGradient id="paint1_linear" x1="1.6875" y1="1.6875" x2="11.9993" y2="10.9867"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF9900"></stop>
                <stop offset="0.291667" stop-color="#FFB729"></stop>
                <stop offset="1" stop-color="#FFE975"></stop>
                <stop offset="1" stop-color="#FFE975"></stop>
            </linearGradient>
        </defs>
    </svg>
`)(e,i))} ${(0,s.z)(t=>"halfStarRight"===t.iconName,((t,e)=>d.qy`
    <svg width=${t} height=${e} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M6 0C5.71105 -3.2871e-06 5.4221 0.15718 5.27351 0.471548L3.85854 3.46535L0.69452 3.94543C0.030035 4.04625 -0.235291 4.89895 0.245535 5.38834L2.53504 7.71866L1.99456 11.0091C1.88105 11.7002 2.57569 12.2272 3.17001 11.9009L5.99999 10.3474L6 10.3474V9.39523C5.87051 9.39523 5.74102 9.42763 5.62301 9.49242L2.91258 10.9804L3.43023 7.82888C3.4753 7.55442 3.38817 7.27445 3.19723 7.08007L1.00445 4.84819L4.0348 4.3884C4.29867 4.34836 4.52678 4.17531 4.64478 3.92564L5.99999 1.05831L6 1.05833V0Z"
            fill="url(#paint0_linear)" />
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M6 10.3474L8.82998 11.9009C9.42431 12.2272 10.1189 11.7002 10.0054 11.0092L9.46494 7.71866L11.7545 5.38833C12.2353 4.89895 11.97 4.04625 11.3055 3.94543L8.14149 3.46535L6.72646 0.471551C6.57788 0.157188 6.28894 4.04894e-06 6 0V10.3474Z"
            fill="url(#paint1_linear)" />
        <defs>
            <linearGradient id="paint0_linear" x1="1.6875" y1="1.6875" x2="11.9993" y2="10.9867"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF9900" />
                <stop offset="0.291667" stop-color="#FFB729" />
                <stop offset="1" stop-color="#FFE975" />
                <stop offset="1" stop-color="#FFE975" />
            </linearGradient>
            <linearGradient id="paint1_linear" x1="1.6875" y1="1.68756" x2="11.9996" y2="10.9867"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF9900" />
                <stop offset="0.291667" stop-color="#FFB729" />
                <stop offset="1" stop-color="#FFE975" />
                <stop offset="1" stop-color="#FFE975" />
            </linearGradient>
        </defs>
    </svg>
`)(e,i))} ${(0,s.z)(t=>"fullStarDR"===t.iconName,((t,e,i)=>d.qy`
    <svg width=${t} height=${e} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill=${i} d="M5.52351 0.471551C5.82068 -0.157184 6.6793 -0.157184 6.97646 0.471551L8.39149 3.46535L11.5555 3.94543C12.22 4.04625 12.4853 4.89895 12.0045 5.38833L9.71494 7.71866L10.2554 11.0092C10.3689 11.7002 9.67431 12.2272 9.07998 11.9009L6.24999 10.3474L3.42001 11.9009C2.82569 12.2272 2.13105 11.7002 2.24456 11.0092L2.78504 7.71866L0.495535 5.38833C0.014709 4.89895 0.280035 4.04625 0.94452 3.94543L4.10854 3.46535L5.52351 0.471551Z"></path>
    </svg>
`)(e,i,a))} ${(0,s.z)(t=>"emptyStarDR"===t.iconName,((t,e,i)=>d.qy`
    <svg width=${t} height=${e} viewBox="0 4 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill=${i} d="M5.27351 4.47155C5.57068 3.84282 6.4293 3.84281 6.72646 4.47155L8.14149 7.46535L11.3055 7.94543C11.97 8.04625 12.2353 8.89895 11.7545 9.38834L9.46494 11.7187L10.0054 15.0091C10.1189 15.7002 9.42431 16.2272 8.82998 15.9009L5.99999 14.3474L3.17001 15.9009C2.57569 16.2272 1.88105 15.7002 1.99456 15.0091L2.53504 11.7187L0.245535 9.38834C-0.235291 8.89895 0.030035 8.04625 0.69452 7.94543L3.85854 7.46535L5.27351 4.47155ZM5.99999 5.05831L4.64478 7.92564C4.52678 8.17531 4.29867 8.34836 4.0348 8.3884L1.00445 8.84819L3.19723 11.0801C3.38817 11.2745 3.4753 11.5544 3.43023 11.8289L2.91258 14.9804L5.62301 13.4924C5.85903 13.3628 6.14095 13.3628 6.37697 13.4924L9.08742 14.9804L8.56978 11.8289C8.52471 11.5544 8.61184 11.2745 8.80273 11.0801L10.9955 8.84819L7.96518 8.3884C7.70132 8.34836 7.47322 8.17531 7.35524 7.92564L5.99999 5.05831Z"></path>
    </svg>
`)(e,i,a))} ${(0,s.z)(t=>"halfStarDR"===t.iconName,((t,e,i)=>d.qy`
    <svg width=${t} height=${e} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M5.27351 0.471548C5.57068 -0.15718 6.4293 -0.157186 6.72646 0.471548L8.14149 3.46535L11.3055 3.94543C11.97 4.04625 12.2353 4.89895 11.7545 5.38834L9.46494 7.71866L10.0054 11.0091C10.1189 11.7002 9.42431 12.2272 8.82998 11.9009L5.99999 10.3474L3.17001 11.9009C2.57569 12.2272 1.88105 11.7002 1.99456 11.0091L2.53504 7.71866L0.245535 5.38834C-0.235291 4.89895 0.030035 4.04625 0.69452 3.94543L3.85854 3.46535L5.27351 0.471548ZM5.99999 1.05831L4.64478 3.92564C4.52678 4.17531 4.29867 4.34836 4.0348 4.3884L1.00445 4.84819L3.19723 7.08007C3.38817 7.27445 3.4753 7.55442 3.43023 7.82888L2.91258 10.9804L5.62301 9.49242C5.85903 9.36284 6.14095 9.36284 6.37697 9.49242L9.08742 10.9804L8.56978 7.82888C8.52471 7.55442 8.61184 7.27445 8.80273 7.08007L10.9955 4.84819L7.96518 4.3884C7.70132 4.34836 7.47322 4.17531 7.35524 3.92564L5.99999 1.05831Z"
            fill=${i}></path>
        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="6" height="12">
            <rect width="6" height="12" fill="#C4C4C4"></rect>
        </mask>
        <g mask="url(#mask0)">
            <path
                d="M5.27351 0.471551C5.4221 0.157183 5.71104 -8.64667e-08 5.99999 0C6.28893 8.6463e-08 6.57788 0.157184 6.72646 0.471551L8.14149 3.46535L11.3055 3.94543C11.97 4.04625 12.2353 4.89895 11.7545 5.38833L9.46494 7.71866L10.0054 11.0092C10.1189 11.7002 9.42431 12.2272 8.82998 11.9009L5.99999 10.3474L3.17001 11.9009C2.57569 12.2272 1.88105 11.7002 1.99456 11.0092L2.53504 7.71866L0.245535 5.38833C-0.235291 4.89895 0.0300351 4.04625 0.69452 3.94543L3.85854 3.46535L5.27351 0.471551Z"
                fill=${i}></path>
        </g>
    </svg>
`)(e,i,a))} ${(0,s.z)(t=>"halfStarRightDR"===t.iconName,((t,e,i)=>d.qy`
    <svg width=${t} height=${e} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M6 0C5.71105 -3.2871e-06 5.4221 0.15718 5.27351 0.471548L3.85854 3.46535L0.69452 3.94543C0.030035 4.04625 -0.235291 4.89895 0.245535 5.38834L2.53504 7.71866L1.99456 11.0091C1.88105 11.7002 2.57569 12.2272 3.17001 11.9009L5.99999 10.3474L6 10.3474V9.39523C5.87051 9.39523 5.74102 9.42763 5.62301 9.49242L2.91258 10.9804L3.43023 7.82888C3.4753 7.55442 3.38817 7.27445 3.19723 7.08007L1.00445 4.84819L4.0348 4.3884C4.29867 4.34836 4.52678 4.17531 4.64478 3.92564L5.99999 1.05831L6 1.05833V0Z"
            fill=${i} />
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M6 10.3474L8.82998 11.9009C9.42431 12.2272 10.1189 11.7002 10.0054 11.0092L9.46494 7.71866L11.7545 5.38833C12.2353 4.89895 11.97 4.04625 11.3055 3.94543L8.14149 3.46535L6.72646 0.471551C6.57788 0.157188 6.28894 4.04894e-06 6 0V10.3474Z"
            fill=${i} />
    </svg>
`)(e,i,a))} ${(0,s.z)(t=>"shadowStar"===t.iconName,((t,e,i)=>d.qy`
    <svg width=${t} height=${e} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill=${i} d="M16 1L12.459 12.459H0.999998L10.2705 19.541L6.72949 31L16 23.918L25.2493 31L21.7295 19.541L31 12.459H19.541L16 1Z" />
        <g opacity="0.25">
            <path d="M15.9639 17.5773V1L12.4611 12.4507L15.9639 17.5773L0.999998 12.4507L10.2493 19.5493L15.9639 17.5773L6.71045 31L16 23.9014L15.9639 17.5773L25.2493 31L21.7105 19.5493L15.9639 17.5773L31 12.4507H19.4987L15.9639 17.5773Z" fill="black"/>
            <path d="M15.9639 17.5773V1L12.4611 12.4507L15.9639 17.5773ZM15.9639 17.5773L6.71045 31L16 23.9014L15.9639 17.5773ZM15.9639 17.5773L0.999999 12.4507L10.2493 19.5493L15.9639 17.5773ZM15.9639 17.5773L25.2493 31L21.7105 19.5493L15.9639 17.5773ZM15.9639 17.5773L31 12.4507H19.4987L15.9639 17.5773Z" stroke="black" stroke-width="0.0841596"/>
        </g>
    </svg>
`)(e,i,a))} ${(0,s.z)(t=>"location"===t.iconName,((t,e,i,a,n)=>d.qy`
    <style>
        @media (prefers-color-scheme: dark) {
            path {
                fill: ${n};
            }
        }
        @media (prefers-color-scheme: light) {
            path {
                fill: ${a};
            }
        }
    </style>
    <svg width=${t} height=${e} viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill=${i} d="M9.38909 11.6701L8.63932 12.4338C8.08675 12.9924 7.36969 13.7106 6.48803 14.5885C5.93704 15.1372 5.06295 15.1371 4.51208 14.5884L2.30692 12.3792C2.02977 12.0989 1.79778 11.8626 1.61091 11.6701C-0.536971 9.45796 -0.536971 5.87129 1.61091 3.65913C3.7588 1.44696 7.24121 1.44696 9.38909 3.65913C11.537 5.87129 11.537 9.45796 9.38909 11.6701ZM7.07926 7.84334C7.07926 6.94501 6.37218 6.21679 5.49999 6.21679C4.6278 6.21679 3.92074 6.94501 3.92074 7.84334C3.92074 8.74163 4.6278 9.46986 5.49999 9.46986C6.37218 9.46986 7.07926 8.74163 7.07926 7.84334Z" fill="white"></path>
    </svg>
`)(e,i,a,"#717171","white"))} ${(0,s.z)(t=>"rightArrow"===t.iconName,((t,e)=>d.qy`
    <svg width=${t} height=${e} viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.35179 6L1.10623 1.63651C0.961802 1.48807 0.965054 1.25065 1.11349 1.10623C1.26193 0.961801 1.49935 0.965053 1.64377 1.11349L6.14377 5.73849C6.28541 5.88406 6.28541 6.11594 6.14377 6.26151L1.64377 10.8865C1.49935 11.0349 1.26193 11.0382 1.11349 10.8938C0.965054 10.7493 0.961802 10.5119 1.10623 10.3635L5.35179 6Z" fill="white" stroke="white" stroke-width="0.4"/>
    </svg>
`)(e,i))} ${(0,s.z)(t=>"cube"===t.iconName,((t,e,i)=>d.qy`
<svg width=${t} height=${e} viewBox="0 0 58 55" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill=${i} fill-rule="evenodd" clip-rule="evenodd" d="M36.2122 0.827427L56.9267 12.2204C57.2516 12.3991 57.5225 12.6618 57.7113 12.981C57.9 13.3001 57.9996 13.6641 57.9997 14.035V40.9637C57.9996 41.3345 57.9 41.6985 57.7113 42.0177C57.5225 42.3369 57.2516 42.5996 56.9267 42.7783L36.2122 54.1712C35.9065 54.3399 35.563 54.4283 35.2138 54.4283C34.8646 54.4283 34.5211 54.3399 34.2154 54.1712L24.8566 49.0237L26.8535 45.3966L33.1424 48.8559V26.6521L13.5009 15.8495C13.1762 15.6707 12.9053 15.408 12.7167 15.0888C12.5281 14.7697 12.4286 14.4057 12.4286 14.035C12.4286 13.6642 12.5281 13.3002 12.7167 12.9811C12.9053 12.6619 13.1762 12.3992 13.5009 12.2204L34.2154 0.827427C34.5212 0.659157 34.8647 0.570923 35.2138 0.570923C35.5629 0.570923 35.9064 0.659157 36.2122 0.827427ZM51.63 14.035L35.2138 5.0076L18.7976 14.035L35.2138 23.0623L51.63 14.035ZM37.2852 48.8538L53.8568 39.7395V17.5357L37.2852 26.65V48.8538ZM0 27.4995H16.5715V23.3566H0V27.4995ZM20.7144 44.071H4.14286V39.9281H20.7144V44.071ZM8.28571 35.7852H24.8573V31.6424H8.28571V35.7852Z"/>
</svg>
`)(e,i,"#FFFFFF"))} ${(0,s.z)(t=>"box"===t.iconName,((t,e,i)=>d.qy`
<svg width=${t} height=${e} viewBox="0 0 59 63" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26.6526 3.74097C27.5277 3.25501 28.5121 3 29.5131 3C30.514 3 31.4985 3.25501 32.3736 3.74097L54.512 16.0372C54.971 16.2924 55.3534 16.6657 55.6196 17.1184C55.8858 17.5711 56.0262 18.0867 56.0262 18.6119V42.8714C56.0259 43.922 55.7447 44.9535 55.2118 45.8589C54.6788 46.7643 53.9134 47.5107 52.9949 48.0208L32.3736 59.4803C31.4985 59.9663 30.514 60.2213 29.5131 60.2213C28.5121 60.2213 27.5277 59.9663 26.6526 59.4803L6.03133 48.0208C5.11326 47.5109 4.34814 46.765 3.81517 45.8601C3.28221 44.9553 3.00077 43.9244 3 42.8743V18.6119C2.99998 18.0867 3.14035 17.5711 3.40658 17.1184C3.67281 16.6657 4.05521 16.2924 4.51419 16.0372L26.6556 3.74097H26.6526Z" stroke=${i} stroke-width="4.08717" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16.2549 9.5144L42.768 24.2439V34.5545" stroke=${i} stroke-width="4.08717" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.8369 32.5757L20.6746 37.5012" stroke=${i}" stroke-width="4.08717" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M29.5131 31.6089V59.5949M3 16.8794L29.5131 31.6089L3 16.8794ZM29.5131 31.6089L56.0262 16.8794L29.5131 31.6089Z" stroke=${i} stroke-width="4.08717" stroke-linejoin="round"/>
</svg>
`)(e,i,"#FFFFFF"))} ${(0,s.z)(t=>"truck"===t.iconName,((t,e,i)=>d.qy`
<svg width=${t} height=${e} viewBox="0 0 62 46" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill=${i} d="M49.0667 9.2H42.9333V6.13333C42.9333 4.50667 42.2871 2.94663 41.1369 1.79641C39.9867 0.646188 38.4267 0 36.8 0H6.13333C4.50667 0 2.94663 0.646188 1.79641 1.79641C0.646188 2.94663 0 4.50667 0 6.13333V36.8H6.13333C6.13333 38.0082 6.3713 39.2045 6.83364 40.3207C7.29599 41.4369 7.97365 42.4511 8.82795 43.3054C9.68225 44.1597 10.6965 44.8373 11.8126 45.2997C12.9288 45.762 14.1252 46 15.3333 46C16.5415 46 17.7378 45.762 18.854 45.2997C19.9702 44.8373 20.9844 44.1597 21.8387 43.3054C22.693 42.4511 23.3707 41.4369 23.833 40.3207C24.2954 39.2045 24.5333 38.0082 24.5333 36.8H36.8C36.8 39.24 37.7693 41.58 39.4946 43.3054C41.22 45.0307 43.56 46 46 46C48.44 46 50.7801 45.0307 52.5054 43.3054C54.2307 41.58 55.2 39.24 55.2 36.8H61.3333V21.4667L49.0667 9.2ZM15.3333 41.4C14.7291 41.3998 14.1307 41.2806 13.5725 41.0491C13.0143 40.8177 12.5072 40.4786 12.08 40.0512C11.6529 39.6237 11.3141 39.1163 11.083 38.558C10.852 37.9996 10.7331 37.4012 10.7333 36.7969C10.7335 36.1927 10.8528 35.5943 11.0842 35.0361C11.3156 34.4779 11.6547 33.9708 12.0822 33.5436C12.5096 33.1165 13.017 32.7777 13.5754 32.5466C14.1337 32.3156 14.7321 32.1967 15.3364 32.1969C16.5568 32.1973 17.7271 32.6825 18.5897 33.5458C19.4524 34.409 19.9368 35.5796 19.9364 36.8C19.936 38.0204 19.4508 39.1907 18.5876 40.0533C17.7243 40.916 16.5537 41.4004 15.3333 41.4ZM6.13333 27.6V6.13333H36.8V27.6H6.13333ZM46 41.4C45.3957 41.3998 44.7974 41.2806 44.2392 41.0491C43.681 40.8177 43.1738 40.4786 42.7467 40.0512C42.3195 39.6237 41.9807 39.1163 41.7497 38.558C41.5186 37.9996 41.3998 37.4012 41.4 36.7969C41.4002 36.1927 41.5194 35.5943 41.7509 35.0361C41.9823 34.4779 42.3214 33.9708 42.7488 33.5436C43.1763 33.1165 43.6837 32.7777 44.242 32.5466C44.8004 32.3156 45.3988 32.1967 46.0031 32.1969C47.2235 32.1973 48.3937 32.6825 49.2564 33.5458C50.1191 34.409 50.6035 35.5796 50.6031 36.8C50.6027 38.0204 50.1175 39.1907 49.2542 40.0533C48.391 40.916 47.2204 41.4004 46 41.4Z"/>
</svg>
`)(e,i,"#FFFFFF"))} `}}</template>`;let p=class extends r{};p=(0,a.Cg)([(0,n.E)({name:"pure-icon",template:c,styles:l})],p)},25879:function(t,e,i){i.d(e,{u:function(){return o}});var a=i(36173),n=i(96950);a.k;const o=n.qy`<style>.hide-story-card fluent-button::part(control) { width: 100%; } msn-hide-story-card.hide-story-card fluent-button::part(content) { text-overflow: ellipsis; overflow: hidden; } msn-hide-story-card.hide-story-card fluent-button { width: 48%; margin: 0 0 8px 0; display: flex; } msn-hide-story-card.hide-story-card::part(content-region) { display: inline-flex; align-items: center; padding: 16px 16px 0px; cursor: default; } msn-hide-story-card.hide-story-card::part(action-region) { display: flex; position: absolute; padding: 0px 16px 16px; justify-content: space-around; bottom: 0px; width: 100%; box-sizing: border-box; align-items: center; margin: 0; }</style><msn-hide-story-card class="hide-story-card" hideStoryTitle="${t=>t.hideStoryTitleData.text}" data-t="${t=>{var e;return null===(e=t.telemetryContext)||void 0===e||null===(e=e.hideStoryCard)||void 0===e?void 0:e.getMetadataTag()}}"><fluent-button autofocus aria-label=${t=>t.personalizeButtonTextData.text} title=${t=>t.personalizeButtonTextData.text} @click=${t=>t.personalizeButtonCallback&&t.personalizeButtonCallback()} slot="actions" appearance="accent" data-t="${t=>{var e;return null===(e=t.telemetryContext)||void 0===e||null===(e=e.confirmButton)||void 0===e?void 0:e.getMetadataTag()}}">${t=>t.personalizeButtonTextData.text}</fluent-button><fluent-button aria-label=${t=>t.undoHideButtonText} title=${t=>t.undoHideButtonText} @click=${t=>t.undoHideButtonCallback&&t.undoHideButtonCallback()} slot="actions" appearance="neutral" data-t="${t=>{var e;return null===(e=t.telemetryContext)||void 0===e||null===(e=e.cancelButton)||void 0===e?void 0:e.getMetadataTag()}}">${t=>t.undoHideButtonText}</fluent-button></msn-hide-story-card>`},26950:function(t,e,i){i.d(e,{o:function(){return r}});var a=i(56911),n=i(38493),o=i(41626);class r extends o.t{constructor(){super(...arguments),this.customStyle=""}}(0,a.Cg)([n.CF],r.prototype,"data",void 0),(0,a.Cg)([(0,n.CF)({mode:"boolean",attribute:"is-info-pane"})],r.prototype,"isInfoPane",void 0),(0,a.Cg)([n.CF],r.prototype,"isExpanded",void 0),(0,a.Cg)([(0,n.CF)({attribute:"custom-style"})],r.prototype,"customStyle",void 0)},31756:function(t,e,i){i.d(e,{M:function(){return v}});var a=i(56911),n=i(92011),o=i(38493),r=i(65022),l=i(1701),d=i(44449);let s=class extends n.L{constructor(){super(...arguments),this.content="",this.customStyle="",this.fontFamily="inherit",this.fontSize="14",this.fontWeight="600",this.textColor="#FFFFFF",this.darkThemeColor=l.fT.defaultDarkThemeColor,this.lightThemeColor=l.fT.defaultLightThemeColor}};(0,a.Cg)([o.CF],s.prototype,"content",void 0),(0,a.Cg)([(0,o.CF)({attribute:"custom-style"})],s.prototype,"customStyle",void 0),(0,a.Cg)([(0,o.CF)({attribute:"font-family"})],s.prototype,"fontFamily",void 0),(0,a.Cg)([(0,o.CF)({attribute:"font-size"})],s.prototype,"fontSize",void 0),(0,a.Cg)([(0,o.CF)({attribute:"font-weight"})],s.prototype,"fontWeight",void 0),(0,a.Cg)([(0,o.CF)({attribute:"text-color"})],s.prototype,"textColor",void 0),(0,a.Cg)([(0,o.CF)({attribute:"dark-theme-color"})],s.prototype,"darkThemeColor",void 0),(0,a.Cg)([(0,o.CF)({attribute:"light-theme-color"})],s.prototype,"lightThemeColor",void 0),s=(0,a.Cg)([(0,d.TA)(r.PDj,"pure-text")],s);var c=i(74849),p=i(75096);const h=c.A` .pure-text-container{display:inline-block;height:20px;line-height:20px}`.withBehaviors(new p.X(["fontFamily","fontSize","fontWeight","textColor"],t=>c.A` .pure-text-container{font-family:${t.fontFamily};
                    font-size: ${t.fontSize}px;
                    font-weight: ${t.fontWeight};
                    color: ${t.textColor};
                }
            `));var g=i(96950),u=i(91640);const m=g.qy` ${(0,u.z)(t=>t.darkThemeColor,g.qy`<style>@media (prefers-color-scheme: dark) { .pure-text-container { color: ${t=>t.darkThemeColor}; } }</style>`)} ${(0,u.z)(t=>t.lightThemeColor,g.qy`<style>@media (prefers-color-scheme: light) { .pure-text-container { color: ${t=>t.lightThemeColor}; } }</style>`)}<div class="pure-text-container" style=${t=>t.customStyle}>${t=>t.content}</div>`;let v=class extends s{};v=(0,a.Cg)([(0,n.E)({name:"pure-text",template:m,styles:h})],v)},33307:function(t,e){e.A='<svg width="20" height="20" viewBox="0 0 20 20"><path d="M6.25 10a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM11.25 10a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM15 11.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"/></svg>'},36845:function(t,e,i){i.d(e,{T:function(){return V}});var a=i(96950),n=i(91640),o=i(63456),r=i(48566),l=i(56911),d=i(92011),s=i(23429),c=i(60815),p=i(38493),h=i(10405),g=i(26555),u=i(94560),m=i(39492),v=i(45186),f=i(56988),b=(0,v.A)(function(t,e){if(null==t)return[];var i=e.length;return i>1&&(0,f.A)(t,e[0],e[1])?e=[]:i>2&&(0,f.A)(e[0],e[1],e[2])&&(e=[e[0]]),(0,m.A)(t,(0,u.A)(e,1),[])}),x=i(62966),$=i(46277),w=i(93516);class y{constructor(t,e,i,a,n){this.childElements=this.getChildren(t,!1),this.visibleChildElements=this.getChildren(t,!0),this.containerElement=this.getContainerElement(t),this.parentElement=this.getParentElement(t),this.maxCount=e?(0,h.A)(e):-1,this.maxHeight=i?(0,h.A)(i):0,this.originalHeight=a?(0,h.A)(a):0,this.onDecorationLinesExpanded=n}run(t){(0,g.A)(t,t=>{t(this)})}getChildren(t,e){const i=e?t.querySelectorAll('div[name="inline-wrapper"]:not(.hidden)>*'):t.querySelectorAll('div[name="inline-wrapper"]>*'),a=[];i.forEach(t=>{const e=(0,h.A)(t.getAttribute("priority"));a.push({item:t,priority:e})});const n=b(a,["priority"]);return(0,x.A)(n,t=>t.item)}getParentElement(t){return t.querySelector(".group-wrapper")}getContainerElement(t){return t.querySelector(".group-container")}hideElement(t){t.parentElement.className="hidden"}hideChildElements(t){for(;this.visibleChildElements.length>t;){const t=this.visibleChildElements.pop();if(t){if(!((0,h.A)(t.getAttribute("priority"))>0)){this.childElements.push(t);break}this.hideElement(t)}}}showChildElementByIndex(t){this.childElements[t]&&this.childElements[t].parentElement.classList.remove("hidden")}hideChildElementByIndex(t){this.childElements[t]&&this.childElements[t].parentElement.classList.add("hidden")}}const C=t=>{let e=t.parentElement.getBoundingClientRect().width;if(t.visibleChildElements.length>0){const i=(0,$.A)(t.visibleChildElements,t=>{const i=t.getBoundingClientRect();return e-=(0,o.A)(i,"width",0),(0,h.A)(e)<0});if(i>-1){const e=t.visibleChildElements.length;t.hideChildElements(i),e>0&&(0,w.u)(t.containerElement,"inlineGroup",`w,${e},${t.visibleChildElements.length}`,0)}}},k=t=>{if(t.maxCount>=0){const e=t.visibleChildElements.length;t.hideChildElements(t.maxCount),e>0&&(0,w.u)(t.containerElement,"inlineGroup",`c,${e},${t.visibleChildElements.length}`,0)}},L=t=>{let e=t.parentElement.getBoundingClientRect().height;if(t.originalHeight&&t.containerElement.setAttribute("style",`height: ${t.originalHeight}px;`),t.childElements.length>0){if(e<=t.maxHeight){let i=0;for(;e<=t.maxHeight&&i<=t.childElements.length-1;)t.showChildElementByIndex(i++),e=t.parentElement.getBoundingClientRect().height}if(e>t.maxHeight){const i=t.childElements.length;let a=i,n=t.childElements.length-1;for(;e>t.maxHeight&&n>=0;)t.hideChildElementByIndex(n--),a-=1,e=t.parentElement.getBoundingClientRect().height;i>0&&(0,w.u)(t.containerElement,"inlineGroup",`h,${i},${a}`,0)}}t.originalHeight&&t.originalHeight!==F(e)&&t.containerElement.setAttribute("style",`height: ${F(e)}px; transition: height 0.3s;`),t.onDecorationLinesExpanded&&S(e)&&t.onDecorationLinesExpanded(!0)},F=t=>t<25?25:t,S=t=>Math.ceil(t/25)>1;class _ extends d.L{constructor(){super(...arguments),this.verticalMode=!1,this.onUpdate=()=>{((t,e,i,a,n,o)=>{const r=new y(t,e,a,n,o),l=[];i?l.push(L):(l.push(k),l.push(C)),r.run(l)})(this.shadowRoot,this.maxCount,this.verticalMode,this.maxHeight,this.originalHeight,this.onDecorationLinesExpanded)}}connectedCallback(){super.connectedCallback(),s.L.enqueue(this.onUpdate)}}(0,l.Cg)([c.sH],_.prototype,"childElements",void 0),(0,l.Cg)([p.CF],_.prototype,"maxCount",void 0),(0,l.Cg)([(0,p.CF)({mode:"boolean"})],_.prototype,"verticalMode",void 0),(0,l.Cg)([p.CF],_.prototype,"originalHeight",void 0),(0,l.Cg)([p.CF],_.prototype,"maxHeight",void 0),(0,l.Cg)([p.CF],_.prototype,"onDecorationLinesExpanded",void 0);var T=i(416),z=i(10108),M=i(60402),A=i(39957);const B=a.qy`<template ${(0,T.Y)({property:"childElements",filter:(0,z.Y)()})}><div class="group-container" ${(0,M.K)("groupContainer")} part="group-container"><div class="group-wrapper" part="group-wrapper">${(0,A.ux)(t=>t.childElements,a.qy`<div name="inline-wrapper">${t=>a.qy`${t.outerHTML}`}</div>`)}</div></div></template>`;const H=i(74849).A` div[name="inline-wrapper"]{display:inline;white-space:normal}.group-container .group-wrapper div[name="inline-wrapper"].hidden{display:none}:host(:not(:defined)){display:none}`;let I=class extends _{};I=(0,l.Cg)([(0,d.E)({name:"msn-inline-group",template:B,styles:H})],I);const E=a.qy`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.1505 0C15.1719 0 16 0.828052 16 1.84951V6.33925C16 7.04766 15.7186 7.72707 15.2178 8.22806L8.22989 15.2176C7.1864 16.259 5.49656 16.2598 4.45167 15.2188L0.784137 11.5567C-0.260191 10.5144 -0.261529 8.82286 0.781032 7.77874L7.76778 0.783644C8.26888 0.281919 8.94889 0 9.65799 0H14.1505ZM14.1505 1.233H9.65799C9.27617 1.233 8.91001 1.38481 8.64018 1.65497L1.64315 8.66047C1.09223 9.22345 1.09641 10.1264 1.65525 10.6841L5.32239 14.3458C5.88535 14.9066 6.79643 14.9062 7.35842 14.3454L14.3458 7.3563C14.6155 7.08654 14.767 6.7207 14.767 6.33925V1.84951C14.767 1.50902 14.491 1.233 14.1505 1.233ZM11.89 2.8788C12.5709 2.8788 13.1229 3.43083 13.1229 4.11178C13.1229 4.79274 12.5709 5.34477 11.89 5.34477C11.209 5.34477 10.657 4.79274 10.657 4.11178C10.657 3.43083 11.209 2.8788 11.89 2.8788Z" fill="white" fill-opacity="0.8"/>
    </svg>`,D=a.qy`
    ${(0,n.z)(t=>t.localizedStrings&&t.localizedStrings.nativeAdShopNowText,a.qy`
        <style>
            .shop-now {
                position: relative;
            }
            .shop-now-icon {
                width: 16px;
                height: 16px;
                left: 12px;
                top: 4px;
                position: absolute;
            }
            .shop-now-text {
                position: absolute;
                left: 36px;
            }
        </style>
        <div class="shop-now" part="shop-now">
            <span class="shop-now-icon">
            ${E}
            </span>
            <span class="shop-now-text">
                ${t=>t.localizedStrings.nativeAdShopNowText}
            </span>
        </div>
    `)}
`;var Z;!function(t){t.installmentPrice="1",t.price="1",t.priceStrikeThrough="1",t.priceOff="1",t.localInventory="1",t.priceDrop="2",t.freeShipping="2",t.productRating="2",t.topViewed="2",t.sold="2",t.specialOffer="2",t.curbsidePickup="2",t.eliteBadge="3",t.condition="3"}(Z||(Z={}));const V=function(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:50,d=arguments.length>4&&void 0!==arguments[4]&&arguments[4],s=arguments.length>5&&void 0!==arguments[5]&&arguments[5],c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0,p=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null;return a.qy`
    ${(0,n.z)(t=>t.hasAnyInlineDecoration||s,a.qy`
        <!-- TODO: set blank classname to be filled for article card -->
        <msft-attribution slot="${t}" class="${""}">
            ${(0,n.z)(t=>t.hasAnyInlineDecoration,a.qy`    
                <msn-inline-group 
                    maxCount="2" 
                    verticalMode=${i||s} 
                    maxHeight=${l} 
                    originalHeight=${c} 
                    :onDecorationLinesExpanded=${t=>p}
                >
                    <!-- price -->
                    ${(0,n.z)(t=>(0,o.A)(t,"assets.price")&&!(0,o.A)(t,"assets.salePrice"),a.qy`
                        <decoration-price data=${t=>t.assets.price}
                            part="inline-item"
                            priority=${Z.price}
                            is-info-pane=${e}
                        ></decoration-price>
                    `)}
                    <!-- price strike through -->
                    ${(0,n.z)(t=>(0,o.A)(t,"assets.price")&&(0,o.A)(t,"assets.salePrice"),a.qy`
                        <decoration-price data=${t=>t.assets.salePrice}
                            part="inline-item"
                            priority=${Z.price}
                            is-info-pane=${e}
                            ></decoration-price>
                        <decoration-price-strike-through data=${t=>t.assets.price}
                            part="inline-item"
                            priority=${Z.priceStrikeThrough}
                            is-info-pane=${e}
                        ></decoration-price-strike-through>
                    `)}
                    <!-- installment price -->
                    ${(0,n.z)(t=>(0,o.A)(t,"assets.installmentPrice"),a.qy`
                        <decoration-installment-price price=${t=>t.assets.price}
                            data=${t=>t.assets.installmentPrice}
                            price-format-now=${t=>(0,o.A)(t.localizedStrings,"nativeAdInstallmentPriceFormatNow")}
                            price-format-plan=${t=>(0,o.A)(t.localizedStrings,"nativeAdInstallmentPriceFormatPlan")}
                            part="inline-item"
                            priority=${Z.installmentPrice}
                            is-info-pane=${e}
                        ></decoration-installment-price>
                    `)}
                    <!-- rating -->
                    ${(0,n.z)(t=>(0,o.A)(t,"assets.rating"),a.qy`
                        <decoration-rating
                            rating=${t=>t.assets.rating}
                            review-data=${t=>t.assets.review}
                            part="inline-item"
                            priority=${Z.productRating}
                            is-info-pane=${e}
                        ></decoration-rating>
                    `)}
                    <!-- free shipping -->
                    ${(0,n.z)(t=>(0,o.A)(t,"assets.freeShipping"),a.qy`
                        <decoration-free-shipping
                            data=${t=>(0,o.A)(t.localizedStrings,"nativeAdFreeShippingText")}
                            part="inline-item"
                            priority=${Z.freeShipping}
                            is-info-pane=${e}
                        ></decoration-free-shipping>
                    `)}
                    <!-- price-drop -->
                    ${(0,n.z)(t=>(0,o.A)(t,"assets.priceDrop"),a.qy`
                        <decoration-price-drop
                            data=${t=>t.assets.priceDrop}
                            price-drop-format-short=${t=>(0,o.A)(t.localizedStrings,"nativeAdPriceDropShortText")}
                            price-drop-format-long=${t=>(0,o.A)(t.localizedStrings,"nativeAdPriceDropLongText")}
                            part="inline-item"
                            priority=${Z.priceDrop}
                            is-info-pane=${e}
                            is-expanded=${d}
                        ></decoration-price-drop>
                    `)}
                    <!-- top-viewed -->
                    ${(0,n.z)(t=>!(0,o.A)(t,"assets.priceDrop")&&(0,o.A)(t,"assets.viewed"),a.qy`
                        <decoration-top-viewed
                            data=${t=>t.assets.viewed}
                            top-viewed-format-short=${t=>(0,o.A)(t.localizedStrings,"nativeAdTopViewedShortText")}
                            top-viewed-format-long=${t=>(0,o.A)(t.localizedStrings,"nativeAdTopViewedLongText")}
                            part="inline-item"
                            priority=${Z.topViewed}
                            is-info-pane=${e}
                            is-expanded=${d}
                        ></decoration-top-viewed>
                    `)}
                    <!-- curbside-pickup -->
                    ${(0,n.z)(t=>(0,o.A)(t,"assets.curbsidePickup")&&s,a.qy`
                        <decoration-curbside-pickup 
                            data="${t=>t.localizedStrings.nativeAdCurbsidePickupText}"
                            priority=${Z.curbsidePickup}
                            is-info-pane=${e}
                        ></decoration-curbside-pickup>
                    `)}
                    <!-- price-off -->
                    ${(0,n.z)(t=>t.assets.discount&&s,a.qy`
                        <decoration-price-off 
                            is-info-pane=${e}
                            priority=${Z.priceOff}
                            data=" &bull; ${t=>t.localizedStrings&&r.Qf.Format(t.localizedStrings.nativeAdOnSaleText,t.assets.discount)}" 
                        />
                    `)}
                </msn-inline-group>
            `)}
            ${(0,n.z)(t=>s&&e,a.qy`
                ${D}
            `)}
        </msft-attribution>
    `)}
`}},39782:function(t,e,i){i.d(e,{Y:function(){return n}});var a=i(17254);const n=new class{constructor(){this.articleCardHoverGradientStyle=this.generateArticleCardHoverGradientStyle()}generateArticleCardHoverGradientStyle(){const t='msft-article-card[size="_1x_1y"]:hover msft-article::part(image) { z-index: 0; } msft-article-card[size="_1x_1y"]:focus-within msft-article::part(image) { z-index: 0; }';return"windows"===a.T3.AppType&&a.T3.CurrentRequestTargetScope.pageType&&"windowshp"===a.T3.CurrentRequestTargetScope.pageType?t+"msft-article-card:hover msft-article::part(image) { opacity: 1; }\n                 msft-article-card:hover msft-article { filter: contrast(115%); }":t}getArticleCardHoverGradientStyle(){return this.articleCardHoverGradientStyle||(this.articleCardHoverGradientStyle=this.generateArticleCardHoverGradientStyle()),this.articleCardHoverGradientStyle}clearArticleCardHoverGradientStyle(){this.articleCardHoverGradientStyle=void 0}}},43156:function(t,e,i){i.d(e,{L:function(){return r}});var a=i(80004),n=i(88985),o=i(33307);const r=i(96950).qy`
<msn-card-button
    class="card-button"
    style="${t=>t.isInfopane||t.enableFilledIconOnHover&&(!t.enableFilledIconOnHover||t.optedOutOfReactions)?"":"display: inline-flex;"}"
    select-title=${t=>t.cardActionsTooltips&&t.cardActionsTooltips.seeMore}
    unselect-icon=${t=>o.A}
    filled-icon-path=${t=>t.useMobile&&!t.isMsnMobile?n.C2:n.i_}
    layout=${t=>t.useMobile&&!t.isMsnMobile?"fillediconhover":(0,a.V1)(t)}
    @click=${(t,e)=>!t.useMobile||t.isMsnMobile||t.isLauncher?t.toggleCardActionMenu&&t.toggleCardActionMenu(t,e.event):t.cardActionMenuClickCallback(e.event,void 0,t,t.actionMenuLocalizedStrings)}
    select-telemetry-tag=${t=>t.telemetryContext&&t.telemetryContext.seeMore&&t.telemetryContext.seeMore.getMetadataTag()}
>
</msn-card-button>
`},44070:function(t,e,i){i.d(e,{f:function(){return o}});const a={Tenorite:"https://assets.msn.com/staticsb/statics/latest/fonts/tenorite/tenorite.woff2",Lora:"https://assets.msn.com/staticsb/statics/latest/fonts/lora/lora-regular.woff2"},n=new Set,o=t=>{const e=a[t];if(!e||n.has(t))return;const i=document.createElement("style");i.setAttribute("type","text/css"),i.appendChild(document.createTextNode(`@font-face {font-family:${t};src:url("${e}") format('woff2');}`)),document.head.appendChild(i),n.add(t)}},47264:function(t,e){e.A='<svg width="20" height="20" viewBox="0 0 20 20"><path d="M6 10a1.25 1.25 0 1 1-2.5 0A1.25 1.25 0 0 1 6 10zM11.25 10a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM15.25 11.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5z"/></svg>'},49986:function(t,e,i){i.d(e,{uK:function(){return V},PB:function(){return H},Ew:function(){return N},rs:function(){return R},PS:function(){return q},fL:function(){return O},PU:function(){return Y},Vy:function(){return Z},po:function(){return I},D9:function(){return E},WH:function(){return U},Sp:function(){return D}});var a=i(30216),n=i(89710),o=i(83003),r=i(53013),l=i(930),d=i(63581),s=i(80004),c=i(19608),p=i(64884),h=i(56606),g=i(669),u=i(52656),m=i(71658),v=i(98216),f=i(11372),b=i(17254),x=i(12870),$=i(19548),w=i(51600),y=i(39620),C=i(39152),k='<svg width="14" height="14" viewBox="0 0 14 14" slot="icon"><path d="M8.5 4.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM0 3a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3Zm3-2a2 2 0 0 0-2 2v6c0 .37.1.72.28 1.02l3.3-3.31a2 2 0 0 1 2.83 0l3.31 3.3A2 2 0 0 0 11 9V3a2 2 0 0 0-2-2H3Zm3.7 6.41a1 1 0 0 0-1.4 0l-3.32 3.31A2 2 0 0 0 3 11h6a2 2 0 0 0 1.02-.28L6.7 7.42ZM5 14a3 3 0 0 1-2.24-1H9.5A3.5 3.5 0 0 0 13 9.5V2.76A3 3 0 0 1 14 5v4.5A4.5 4.5 0 0 1 9.5 14H5Z"/></svg>',L='<svg width="12" height="12" viewBox="0 0 12 12" slot="icon"><path d="M8 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM2.5 0A2.5 2.5 0 0 0 0 2.5v5A2.5 2.5 0 0 0 2.5 10h5A2.5 2.5 0 0 0 10 7.5v-5A2.5 2.5 0 0 0 7.5 0h-5ZM1 2.5C1 1.67 1.67 1 2.5 1h5C8.33 1 9 1.67 9 2.5v5c0 .23-.05.45-.15.65L6.21 5.5a1.71 1.71 0 0 0-2.42 0L1.15 8.15A1.5 1.5 0 0 1 1 7.5v-5Zm.85 6.35L4.5 6.21a.71.71 0 0 1 1 0l2.65 2.64c-.2.1-.42.15-.65.15h-5a1.5 1.5 0 0 1-.65-.15ZM5 12a2.5 2.5 0 0 1-2-1h4.5A3.5 3.5 0 0 0 11 7.5V2c.6.46 1 1.18 1 2v3.5A4.5 4.5 0 0 1 7.5 12H5Z"/></svg>',F='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" slot="icon"><g filter="url(#filter0_b_30_15226)"><circle cx="12" cy="12" r="11" fill="url(#paint0_linear_30_15226)"/><circle cx="12" cy="12" r="11.5" stroke="url(#paint1_linear_30_15226)"/></g><path d="M10.5 8a1 1 0 0 0-1.5.86v6.28a1 1 0 0 0 1.5.87l5.49-3.14a1 1 0 0 0 0-1.74L10.49 8Z" fill="#fff"/><defs><linearGradient id="paint0_linear_30_15226" x1="1" y1="1" x2="23" y2="23" gradientUnits="userSpaceOnUse"><stop stop-opacity=".5"/><stop offset="1" stop-opacity=".7"/></linearGradient><linearGradient id="paint1_linear_30_15226" x1="12" y1="1" x2="12" y2="23" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity=".4"/><stop offset="1" stop-color="#fff" stop-opacity=".2"/></linearGradient><filter id="filter0_b_30_15226" x="-10" y="-10" width="44" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feGaussianBlur in="BackgroundImage" stdDeviation="5"/><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_30_15226"/><feBlend in="SourceGraphic" in2="effect1_backgroundBlur_30_15226" result="shape"/></filter></defs></svg>',S=i(47149),_=i(29307),T=i(49093),z=i(50180),M=i(27261),A=i(64096),B=i(1732);function H(t){var e,i,n,s;const{feedName:$,additionalHeaders:C,cardActionBitMask:k,cardActionClickHandler:L,cardMetadata:M,cardSlot:B,configOptions:H={},enableRichSocialReaction:E,getReplacementCardsCallback:Z,reactionCallback:P,shareActionHandler:O,initCardAction:j,isAnaheimDesign:Y,isBlurred:K,isHubDesign:X,immersiveCard:tt,isNarrowTitleFooterGap:et,isProviderInFooter:it,isPublisherPage:at,hideCardCallback:nt,layoutGap:ot,localizedStrings:rt,mouseenterHandler:lt,mouseleaveHandler:dt,openLinksInNewTab:st,parentTelemetryObject:ct,refreshFeedCallback:pt,sdCardActionClickHandler:ht,stockImageData:gt,userSubscriptionData:ut,visualReadinessCallback:mt,displaySettings:vt,mobileCardClickCallback:ft,setShouldScrollToComments:bt,actionMenuLocalizedStrings:xt,cardActionMenuClickCallback:$t,cardAIDigestMenuClickCallback:wt,isDarkModeForMobile:yt,isEdge:Ct,isLauncher:kt,isThirdParty:Lt,feedbackHandler:Ft,shareHandler:St,hideComments:_t=!1,summaryArticleClickHandler:Tt,notificationMetadata:zt,goToPersonalizeSettingsCallback:Mt,underlineTitle:At}=t,Bt=(0,g.cZ)(M),{cardContent:Ht,metadata:It,isFirstSectionCard:Et,type:Dt}=Bt,{grid_area:Zt}=B,{abstract:Vt,badges:Pt,colorSamples:Ut,id:Ot,destinationUrl:Rt,locale:Nt,title:Gt,publishedDateTime:Wt,provider:jt,defaultAnchorTarget:Jt,videoFiles:Qt,isWorkNewsContent:Yt}=Ht,qt=(0,g.H8)(M,k),Kt=(0,g.Ie)(Bt),Xt=(null==It?void 0:It.videoMetadata)||(null==M?void 0:M.videoMetadata),te=Dt===o.pL.WebContent,ee=te&&(Boolean(Xt)||Boolean(null==It?void 0:It.externalVideoFiles)),{alignFooters:ie,availableActions:ae,childExperienceReferences:ne={},childExperienceReferencesWC:oe={},disableCardTitleTooltip:re,disableHideOnHover:le,disableSeeMoreButton:de,disableOptedOutButton:se,enableHoverCardAction:ce,enableAnimatedShowMoreBtn:pe,enableArticleTimestamps:he,enabledBadgeTypes:ge,enabledReasonBadgeTypes:ue,enableEverGreenWebContent:me=!1,enableFeedSuperCards:ve,enableFilledIconOnHover:fe,enableFlexCard:be,enableCardHideStoryIcon:xe,enableHideStoryFeedback:$e,enableImageHoverZoom:we,enableInfopaneLike2cCard:ye,enableLinearFeed2cVerticalGradientCard:Ce,enableNeutralFilledShowMoreIcon:ke,enableNewTimestampFormatForJAJP:Le,enableSaveButton:Fe,enableSuperVideoCard:Se,enableTitleClickableOnly:_e,enableVerticalGradientCard:Te,enableWCCardAction:ze,enableWCSaveButton:Me,enableWebContentSocialReactions:Ae,feedFontSize:Be,fixedCardHeight:He,gradientType:Ie,headingLineHeight:Ee,isDynamicFeed:De,isImage32:Ze,isImage43:Ve,isMsnHpExternalLinkCard:Pe,isProviderIconClickable:Ue,enablePanocard:Oe,panocardType:Re,largeFeedFontSize:Ne,miniMediaIndicatorsIcons:Ge,noBackPlateOnRest:We,noImageFeedFontSize:je,openArticleInNewTab:Je,openPersonalizeWithoutRouter:Qe,preconsumptionCardConfig:Ye,previewModeEnableLayouts:qe,showCardInfoWhenHover:Ke=!1,showColorfulHalfUContentCard:Xe,telemetryConstants:ti={},twoColumnFeedFontSize:ei,twoColumnHeadingLineHeight:ii,useArticleCardTemplate:ai,useLowQualityImage:ni,useHomepageTelemetry:oi=!1,useInfopaneSlideTemplate:ri=!1,useLargeFontSize:li,useMobile:di,usePreviewCardTemplate:si=!1,useSmallFontSize:ci,useWinSystemMode:pi,useTitleFontSize:hi,useVideoPreviewTemplate:gi=!1,isMsnMobile:ui,disableCardActionMenu:mi,disableColorSampling:vi,enableFeedSuperCardsSolidColor:fi,enableFeedSuperCardsSingleColor:bi,disableSaveButton:xi,useArrowIcons:$i,useLightShadow:wi,lightShadowVal:yi,doubleWideArticleCardTitleSize:Ci,enableHover:ki,addExtToNewsContainer:Li,enableDynamicHeightCard:Fi,enableLazyImage:Si,enableLargeImgDualtoneCard:_i,enableMediumImgQuality:Ti,enableNetworkImgQuality:zi,enableNoArticleTimestamp:Mi,enableLightDensefeedMobile:Ai,enableSimpleArticleTimestamp:Bi,enableDenseCarouselCard:Hi,enableRenderFirst2Subcards:Ii,enableLowPowerDeviceImage:Ei,enableHalfUCardForAll:Di,enableSydneySummary:Zi,enableAttrOversizing:Vi,enableWebpFormat:Pi,useFollowPublisherButtonWC:Ui,enableLargerSizeSocialBar:Oi,enableSmallerMarginBottom:Ri,enableSmallerContentPadding:Ni,enableSydneyFeaturesMenu:Gi,hasTallerAscender:Wi,enableProviderAttrNav:ji,imageOnRight:Ji,providerOnTop:Qi,providerOnTopHalfU:Yi,hideActionTrayCompletely:qi,hideAbstract:Ki,socialBarInRight:Xi}=H,ta=(0,r.dj)(ct,Ht,It||Bt,void 0,te,{...r.ZZ,...ti},be),ea=oe.socialBarWC||ne.socialBarWC,ia=(null==Bt||null===(e=Bt.metadata)||void 0===e?void 0:e.reasons)&&(oe.publisherFollowButton||ne.publisherFollowButton),aa=oe.videoCardWC||ne.videoCard,na=oe.articleTopComment,oa=oe.articleRelatedStories;!function(t,e){if(!e||!e.contentCard||0===(t&a.J.enabled))return;0!==(t&a.J.saved)&&e.contentCard.addOrUpdateChild({name:r.ZZ.undoSaveName,type:f.MJ.ActionButton,behavior:f.MS.UndoSave,content:e.save.contract.content},e.save)}(qt,ta);const ra=!kt&&!Lt&&(0!==(qt&a.J.hide)||$e&&(0!==(qt&a.J.showFewer)||0!==(qt&a.J.hidden)));let la;ai&&(la=V(null==Kt?void 0:Kt.colorSamples,Ut,null==Kt?void 0:Kt.url));const da=q(Bt,rt,Oe,Re),sa=ee||Dt===o.pL.Video,ca=sa&&gi&&!zt,pa=It?!It.reactionSummary:M&&!M.reactionSummary,ha=!qe||qe.includes(l.uE._1x_2y),ga=!qe||qe.includes(l.uE._2x_2y),ua="following"===$||null==Bt||null===(i=Bt.metadata)||void 0===i?void 0:i.reasons,{badge:ma,reasonBadge:va}=(0,u.bA)(rt,Pt,ge,ua,ue,da),fa=(0,g.nN)(rt,H,va),ba=N(rt);let xa,$a=Rt;var wa;(ee&&($a=(0,A.CW)(encodeURIComponent(Ot),$a)),"winWidgets"!==b.T3.AppType&&"windowsNewsPlus"!==b.T3.AppType||($a=(0,r._l)($a)),null!=Ht&&Ht.isPanoCard&&1==(null==da?void 0:da.type)&&(da.articleDestinationUrl=$a,$a=da.destinationUrl),It&&It.topComments&&It.topComments.length>0)&&(xa=null===(wa=It.topComments[0])||void 0===wa?void 0:wa.id);let ya=null,Ca=null;if(he){const{disable1MonPlusTimestamp:t,disableNDaysPlusTimestamp:e}=y.ew.getConfig()||{},i=(0,m.YS)(Wt),a=(0,m.Tp)(Wt,e);t&&i||a||(ya=(0,y._L)(Wt,Nt,void 0,Le,Bi),Ca=Bi&&(0,y._L)(Wt,Nt,void 0,Le,!1,!0))}const ka=M.recoReasonTag??It.recoReasonTag;!(!ka||!ka.tag)&&v.YT.addOrUpdateTmplProperty("recoReasonTag","1"),ya=te&&me&&(0,g.xk)(Wt)?null:ya;const La=""!==x.Rb.MarketDir?x.Rb.MarketDir:"ltr",Fa=di&&!ui&&!Ct&&!kt&&!Lt,Sa=di&&Oi?18:16,_a=ra?(0,p.Eb)(t,qt,Ot,ct):{id:Ot,isWorkNewsContent:Yt,telemetryContext:ta,defaultAnchorTarget:Jt,childTemplateType:Q(H,te&&!ee,zt),abstract:Vt,cardActionStatus:(!te||ze||Me)&&qt,cardActionClickHandler:L,cardActionsTooltips:fa,colorSamples:(0,g.HM)(Ut,null==Kt?void 0:Kt.url),externalVideoFiles:sa?Qt:void 0,videoMetadata:sa?Xt:void 0,destinationUrl:$a,dir:La,title:Gt,contentType:Dt,immersiveCard:tt,sdCardActionClickHandler:ht,imagePriority:!1,isWebContent:te,isFirstSectionCard:Et,contentTypeLabel:null===(n=(0,g.Ww)(rt,Dt))||void 0===n?void 0:n.toLocaleUpperCase(),contentIndicator:Kt||sa?U(Dt,Y&&Ge,Ot):void 0,metadata:It||M,openLinksInNewTab:st&&!Lt,openArticleInNewTab:Je,crawledContentLabel:null==rt?void 0:rt.crawledContentLabel,setDisplacementHandler:G,removeDisplacementHandler:W,providerData:(0,g.p_)(jt,te,H.svgLogoCards&&H.publisherSVGLogosHeight,Sa),toggleCardActionMenu:(t,e,i,a)=>D(t,e,L,j,null,!$e,pt,Qe,pa,i,a),disableSeeMoreButton:de,enableAnimatedShowMoreBtn:pe,enableRichSocialReaction:(!te||Ae||ze||Me)&&E,disableOptedOutButton:se,enableHoverCardAction:ce,isProviderIconClickable:Ue,optedOutOfReactions:pa,isAnaheimDesign:!!Y,isHubDesign:!!X,userSubscriptionData:ut,isPublisherPage:at,usePreviewCardTemplate:si,useVideoPreviewTemplate:gi,enableHover:ki,showCardInfoWhenHover:Ke,useInfopaneSlideTemplate:ri,useHomepageTelemetry:oi,locale:Nt,articleCardBackgroundColor:la,disableHideOnHover:le,publishedDateTime:ya,ariaDateTime:Ca,useSmallFontSize:ci,useLargeFontSize:li,feedFontSize:Be,noImageFeedFontSize:je,largeFeedFontSize:Ne,twoColumnFeedFontSize:ei,twoColumnHeadingLineHeight:ii,enableVerticalGradientCard:Te,gradientType:Ie,gradientDeg:Y||Ve?R():void 0,ariaLabel:(0,g.yL)(Gt,jt,rt,Dt),isProviderInFooter:it,isNarrowTitleFooterGap:et,mouseenterHandler:lt,mouseleaveHandler:dt,layoutGap:ot,socialBarWCConfigInfo:ea,publisherFollowButtonConfigInfo:ia&&{...ia,instanceId:`${ia.instanceId}-${Ot}`},fixedCardHeight:He,preconsumptionCardConfig:Ye,enableImageHoverZoom:we,enableTitleClickableOnly:_e,noBackPlateOnRest:We,alignFooters:ie,showColorfulHalfUContentCard:Xe,isImage32:Ze,isImage43:Ve,headingLineHeight:Ee,useTitleFontSize:hi,enableFilledIconOnHover:fe,enableNeutralFilledShowMoreIcon:ke,enableInfopaneLike2cCard:ye,enableLinearFeed2cVerticalGradientCard:Ce,topQuestionsHeading:rt&&rt.topQuestionsHeading,topQuestionsNote:rt&&rt.topQuestionsNote,topQuestionsBadgeTooltips:rt&&rt.topQuestionsBadgeTooltips,highlightsHeading:rt&&rt.highlightsBadgeLabel,highlightsNote:rt&&rt.highlightsNote,highlightsBadgeTooltips:rt&&rt.highlightsBadgeTooltips,followTexts:ba,isDynamicFeed:De,disableCardTitleTooltip:re,videoCardConfigInfo:aa,enableSaveButton:!1!==Fe||te&&Me,showMoreAnimationTitle:rt&&rt.showMoreAnimationTitle,isBlurred:K,useArrowIcons:$i,enabledBadgeTypes:ge,enabledReasonBadgeTypes:ue,hasTallerAscender:Wi,badge:ma,reasonBadge:va,articleTopCommentConfigInfo:na,articleTopCommentId:xa,articleRelatedStoriesConfigInfo:oa,enableWCSaveButton:!te||Me,enableWCCardAction:ui?ze:!te||ze,additionalHeaders:C,actionsArrayOverride:te&&ae||void 0,displaySettings:vt,actionMenuLocalizedStrings:xt,underlineTitle:At,useMobile:di,useWinSystemMode:pi,isMsnMobile:ui,disableCardActionMenu:mi||Lt,disableColorSampling:vi,enableFeedSuperCardsSolidColor:fi,enableFeedSuperCardsSingleColor:bi,disableSaveButton:!te&&xi,useLightShadow:wi,lightShadowVal:yi,doubleWideArticleCardTitleSize:Ci,shareActionHandler:O,enableLazyImage:Si,enableDynamicHeightCard:Fi,cardActionMenuClickCallback:$t,cardAIDigestMenuClickCallback:wt,getReplacementCardsCallback:Z,goToPersonalizeSettingsCallback:Mt,hideCardCallback:nt,mobileCardClickCallback:ft,reactionCallback:P,refreshFeedCallback:pt,visualReadinessCallback:mt,setShouldScrollToComments:bt,isDarkModeForMobile:yt,isLauncher:kt,isThirdParty:Lt,feedbackHandler:Ft,shareHandler:St,hideComments:_t,enableLargeImgDualtoneCard:_i,enableMediumImgQuality:Ti,enableNoArticleTimestamp:Mi,enableSimpleArticleTimestamp:Bi,isSpotlightUX:It&&It.isSpotlightUX,spotlightBreakingNewsTagString:null==rt?void 0:rt.topStoriesBreakingNewsTagString,enableLightDensefeedMobile:Ai,wpoMetadata:It&&It.wpoMetadata||M&&M.wpoMetadata,enableDenseCarouselCard:Hi,enableRenderFirst2Subcards:Ii,enableCardHideStoryIcon:xe,enableHalfUCardForAll:Di,enableSydneySummary:Fa&&Zi,summaryLabel:rt&&rt.summary,aiMagicBadgeLabel:rt&&rt.aiMagicBadgeLabel,summaryArticleClickHandler:Tt,enableAttrOversizing:Vi,useFollowPublisherButtonWC:Ui,enableLargerSizeSocialBar:Oi,enableSmallerMarginBottom:Ri,enableSmallerContentPadding:Ni,panoCaption:da,isPanoCard:da&&Ht.isPanoCard,clickPanocardFooterHandler:(t,e)=>(0,g.s2)(t,e),clickPanocardArticleHandler:(t,e)=>(0,g.$z)(t,e),enableSydneyFeaturesMenu:Fa&&Gi,enableSydneyBadge:Zi||"top-right"===Gi,recoReasonTag:ka,enableProviderAttrNav:!ee&&ji,slides:(null==M?void 0:M.slides)||(null==It?void 0:It.slides),isWebVideo:ee,hideActionTrayCompletely:qi,hideAbstract:Ki,socialBarInRight:Xi};!function(t,e,i){if(e){const{spotlightCardTitle:a,additionalLabelText:n,followedType:o,followedEntity:r}=e;if(t.cardTitle=a,t.additionalLabelText=n,t.followedType=o,t.followedEntity=r,i){const{bingVideoNoPreviewStr:e,bingVideoPreviewStr:a,disableNotification:n,followingButtonHoverTip:o}=i;t.followingButtonHoverTip=o&&(0,z.GP)(o,r),t.disableNotificationText=n,t.videoNoPreviewLabel=e,t.videoPreviewLabel=a}}}(_a,zt,rt),T.R.setContentIdCandidateIfNeeded(Ot,Dt,pa||!$i);const Ta=H&&H,za=(null==M?void 0:M.ri)||(null==It?void 0:It.ri),Ma=(null==M?void 0:M.recoId)||(null==It?void 0:It.recoId);return(0,c.bw)({id:Ot,experienceType:null==Ta||null===(s=Ta.configRef)||void 0===s?void 0:s.experienceType,mapperArgs:t,badgeType:ma&&ma.type,recoId:Ma,ri:za,contentId:Ot},_a,(t,e)=>{const i=e.cardSize,a=e.telemetryExt;if(ra){const t=(0,h.mY)(_a&&_a.telemetryContext,a);return{gridArea:Zt,telemetryContext:t}}const n={...ta};n&&n.contentCard&&((ki||di&&!ui||Li)&&(n.contentCard=new S.$({...n.contentCard.contract,ext:a})),n.destination&&(n.destination=n.contentCard.addOrUpdateChild({...n.destination.contract,type:f.MJ.Headline,ext:a}))),oi&&(n.contentCard=null,n.destination.contract.name="HeadlineItemViewModel");const o={gridArea:Zt,isProviderInFooter:it,isNarrowTitleFooterGap:et,telemetryContext:n};if(i===l.uE._1x_1y&&(ri?(Kt&&(o.imageData=I(Bt,d.L._300x225,mt,Y,di,Ti,zi,ni,!1,Ai,Ei,Pi)),o.abstract=void 0,o.childTemplateType="infopane-slide-card",Qi&&(o.isProviderInFooter=!1,o.socialBarInRight=!1)):si?(Kt&&(o.imageData=I(Bt,d.L._104x84,mt,Y,di,Ti,zi,ni,!1,Ai,Ei,Pi)),o.abstract=void 0,o.childTemplateType="content-card-preview-1x",Ji&&(o.imagePosition="end"),Yi&&(o.providerAboveHeader=!0,o.socialBarInRight=!1)):(Kt&&(o.imageData=I(Bt,H.enableUmfHalfUCards?d.L._100x100:d.L._82x82,mt,Y,di,Ti,zi,ni,K,Ai,Ei,Pi)),sa&&(o.contentIndicator=F,H.disableVideoCard1x1yTemplate||(o.childTemplateType="video-card")),o.abstract=te&&!H.hideHalfUAbstract?Vt:void 0,o.ariaLabel=te&&!H.hideHalfUAbstract&&(0,g.yL)(Gt,jt,rt))),i===l.uE._1x_2y)if(ri)Kt&&(o.imageData=I(Bt,d.L._300x225,mt,Y,di,Ti,zi,ni,!1,!1,Ei,Pi)),o.abstract=void 0,o.childTemplateType="infopane-slide-card",Qi&&(o.isProviderInFooter=!1,o.socialBarInRight=!1);else if(Kt)if(ca&&ha){o.abstract=void 0,o.articleCardBackgroundColor=V(null==Kt?void 0:Kt.colorSamples,Ut,!1),o.childTemplateType="video-card";let t=d.L._300x225;ve&&vt?t={width:vt.cardWidth,height:vt.imageHeight}:ve&&Se&&!vt&&(t=d.L._300x156),o.imageData=I(Bt,t,mt,Y,di&&!kt&&!ui,!1,!1,!1,!1,!1,Ei,Pi)}else if(ai){let t=d.L._300x225;if(Ze)t=d.L._300x200;else if(Ht.isPanoCard)t=d.L._300x304;else if(ve&&!vt)t=d.L._300x156;else if(ve&&vt){const e=vt.cardWidth;let i=Math.round(vt.cardWidth/1.33);di&&(i=tt?vt.cardHeight:vt.imageHeight),t={width:e,height:i}}Kt.width>=t.width&&Kt.height>=t.height?(o.abstract=void 0,o.imageData=I(Bt,t,mt,Y,di,Ti,zi,ni,K,!1,Ei,Pi)):J("revprmres")?(v.YT.addOrUpdateTmplProperty("imgdrp1u","0"),o.articleCardBackgroundColor=V(null==Kt?void 0:Kt.colorSamples,Ut,!1)):(v.YT.addOrUpdateTmplProperty("imgdrp1u","1"),o.imageData=I(Bt,t,mt,Y,di,Ti,zi,ni,K,!1,Ei,Pi))}else if(si){const t=d.L._306x197;o.imageData=I(Bt,t,mt,Y,Pi),o.abstract=void 0,o.childTemplateType="content-card",o.imagePriority=!0}else{o.childTemplateType="content-card";let t=d.L._300x156;Ze&&(t=d.L._300x200),Kt.width>=t.width&&Kt.height>=t.height?(o.abstract=void 0,o.imagePriority=!0,o.imageData=I(Bt,t,mt,Y,di,Ti,zi,ni,!1,!1,Ei,Pi)):o.imageData=null}if(i===l.uE._1x_3y&&si){if(Kt){let t=d.L._300x174;Ze&&(t=d.L._306x197),Qi&&(o.isProviderInFooter=!1,o.socialBarInRight=!1,t=d.L._306x174),o.imageData=I(Bt,t,mt,Y,di,Ti,zi,ni,!1,!1,Ei,Pi),Pe?o.isMsnHpExternalLinkCard=Pe:o.abstract=void 0,o.imagePriority=!0}else o.isProviderInFooter=!1;o.childTemplateType="content-card"}if(i===l.uE._2x_2y){let t=d.L._82x82,e=Q(H,te),i=Bt;Kt&&(ca&&ga?(t=d.L._612x304,qe&&qe.includes(l.uE._2x_2y)&&(t=d.L._468x304),o.articleCardBackgroundColor=V(null==Kt?void 0:Kt.colorSamples,Ut,!1),e="video-card",o.abstract=void 0):ai?Ce?(t=d.L._612x304,o.abstract=void 0):Y&&(Te||Ve)?Te?Kt.width>=d.L._612x304.width&&Kt.height>=d.L._612x304.height&&(t=d.L._612x304,o.abstract=void 0):Ve&&(t=d.L._406x304):Ve?t=d.L._406x304:Kt.width>=d.L._468x304.width&&Kt.height>=d.L._468x304.height&&(t=d.L._468x304):Kt.width>=d.L._612x304.width&&Kt.height>=d.L._612x304.height&&(t=d.L._612x304,e="infopane-slide-card",o.abstract=void 0));const a=!(Kt&&Kt.url)||t===d.L._82x82;if(a&&!ai&&gt){let a;t=d.L._612x304,e="infopane-slide-card",i=(0,_.A)(Bt),a=null!=H&&H.useImgGenerator?[{url:(0,w.XP)(gt.id,{width:0,height:0,enableDpiScaling:!1}),width:gt.width,height:gt.height}]:[gt],i.cardContent.images=a,o.abstract=void 0}a&&ai&&(i=(0,_.A)(Bt),i.cardContent.images=void 0,o.articleCardBackgroundColor=V(null==Kt?void 0:Kt.colorSamples,Ut,!1)),o.childTemplateType=e,o.imageData=I(i,t,mt,Y,di,Ti,zi,ni,K,!1,Ei,Pi),o.imagePriority=!1}if(i===l.uE._2x_1y){if(Kt){const t=d.L._216x114;o.imageData=I(Bt,t,mt,Y,di,Ti,zi,ni,!1,!1,Pi),o.abstract=void 0}vi?(o.articleCardBackgroundColor=void 0,o.colorSamples=void 0):o.articleCardBackgroundColor=V(null==Kt?void 0:Kt.colorSamples,Ut,null==Kt?void 0:Kt.url)}return o},!0)}function I(t,e,i,a,n,o,r,l,d,s,c,p){const h=(0,g.Ie)(t);if(!h)return null;const{attribution:u,title:m=t.cardContent.title,url:v,focalRegion:f}=h||{};if(!v)return null;const b=t.id&&t.id.includes("BuyDirectCard"),x=[];let $,y;m&&x.push(m),u&&x.push(u),x.length&&($=x.join(" - ")),y=s?30:l?20:n?function(t,e){const i=window&&window.navigator,a=null==i?void 0:i.connection,n=null==a?void 0:a.effectiveType;if(e&&n){return{"slow-2g":20,"2g":40,"3g":60,"4g":80}[n]}if((0,B.h_)())return 60;if(t||(0,g.UP)()||(0,g.LT)()||(0,g.YI)())return 70;return 90}(o,r):(c||a)&&(0,B.h_)()?60:90;const C=(0,w.oQ)(v,{width:e.width,height:e.height,focalRegion:f,enableDpiScaling:a&&!b,enableWebpFormat:p,quality:y,devicePixelRatio:n&&!s?1:(0,M.mZ)(),crop:b?5:null});let k;return d&&(k=(0,w.oQ)(v,{width:e.width,height:e.height,focalRegion:f,enableDpiScaling:!1,quality:1})),{imageWidth:e.width.toString(),imageHeight:e.height.toString(),source:C,blurredSource:k,altText:$,visualReadinessCallback:i}}function E(t,e,i,a){let n=arguments.length>4&&void 0!==arguments[4]&&arguments[4];const o=(0,g.Ie)(t);if(!o)return null;const{attribution:r,title:l=t.cardContent.title,url:d,focalRegion:s}=o||{};if(!d)return null;const c=[];let p;l&&c.push(l),r&&c.push(r),c.length&&(p=c.join(" - "));const h=n?60:90,u=(0,w.oQ)(d,{width:e.width,height:e.height,focalRegion:s,enableDpiScaling:!0,quality:h,devicePixelRatio:i,crop:null});return{imageWidth:e.width.toString(),imageHeight:e.height.toString(),source:u,altText:p,visualReadinessCallback:a}}function D(t,e,i,n){let o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],r=arguments.length>5&&void 0!==arguments[5]&&arguments[5],l=arguments.length>6?arguments[6]:void 0,d=arguments.length>7?arguments[7]:void 0,s=arguments.length>8?arguments[8]:void 0,c=arguments.length>9?arguments[9]:void 0,p=arguments.length>10?arguments[10]:void 0,h=e,g=t;e.detail&&e.detail.event&&e.detail.data&&(h=e.detail.event,g=this.getListCardMetadata(e.detail.data),o=!0),(g.isLauncher||g.isThirdParty)&&g.useMobile&&(h.preventDefault(),h.stopPropagation());const{cardSize:u,id:m,title:v,destinationUrl:f,imageData:b,providerData:x,cardActionStatus:$,telemetryContext:{seeMore:w},actionsArrayOverride:y,metadata:k,isLauncher:L,isThirdParty:F,shareHandler:S,feedbackHandler:_,panoCaption:T,isShoppingArticleCard:z}=g,M=null!=p&&p.overrideReasonsDisplay?[{type:C.QK.trending,rank:0},{type:C.QK.u2u,rank:1}]:k.reasons,A={cardSize:u,enabled:!0,buttonElement:h.currentTarget,article:{id:m,headlineTitle:v,href:f,image:{alt:b&&b.altText,src:b&&b.source},provider:{id:x.id,profileId:x.profileId,name:x.name,image:{alt:x.name,src:x.logoImage}},abstract:k.abstract,reasons:M,source:k.source},parentTelemetryObject:w,onStatusChange:i,cardStatus:$,updateFeedOnHide:o,showToast:r,refreshFeedCallback:l,openPersonalizeWithoutRouter:d,actionsArrayOverride:y,isReactionsOptedOut:s,isLauncher:L,isThirdParty:F,shareHandler:S,feedbackHandler:_,debugId:k.debugId,dialogToOpen:c};(T||z)&&(A.actionsArrayOverride=[a.X.ManageInterests,a.X.Divider,a.X.Report]),n(A)}function Z(t){const e=[];return Object.keys(a.J).forEach(i=>{a.J[i]&t&&e.push(i)}),e}function V(t,e,i){var a,n,o,r;return null!=t&&null!==(a=t.find(t=>t.isDarkMode))&&void 0!==a&&a.hexColor&&null!=t&&null!==(n=t.find(t=>!t.isDarkMode))&&void 0!==n&&n.hexColor?t:null!=e&&null!==(o=e.find(t=>t.isDarkMode))&&void 0!==o&&o.hexColor&&null!=e&&null!==(r=e.find(t=>!t.isDarkMode))&&void 0!==r&&r.hexColor?e:(0,s.mt)(i)}const P=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" slot="icon">\n        <g filter="url(#filter0_${t})">\n            <circle cx="20" cy="20" r="19" fill="url(#paint0_${t})" />\n            <circle cx="20" cy="20" r="19.5" stroke="url(#paint1_${t})" />\n        </g>\n        <path d="M27.2221 18.6846C28.2586 19.2544 28.2586 20.7437 27.2221 21.3135L17.2226 26.8105C16.2229 27.36 15 26.6367 15 25.496L15 14.5021C15 13.3614 16.2229 12.6381 17.2226 13.1877L27.2221 18.6846Z" fill="white" />\n        <defs>\n            <filter id="filter0_${t}" x="-10" y="-10" width="60" height="60" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n                <feFlood flood-opacity="0" result="BackgroundImageFix" />\n                <feGaussianBlur in="BackgroundImage" stdDeviation="5" />\n                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_30_15226" />\n                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_30_15226" result="shape" />\n            </filter>\n            <linearGradient id="paint0_${t}" x1="1" y1="1" x2="39" y2="39" gradientUnits="userSpaceOnUse">\n                <stop stop-opacity="0.5" />\n                <stop offset="1" stop-opacity="0.7" />\n            </linearGradient>\n            <linearGradient id="paint1_${t}" x1="20" y1="1" x2="20" y2="39" gradientUnits="userSpaceOnUse">\n                <stop stop-color="white" stop-opacity="0.4" />\n                <stop offset="1" stop-color="white" stop-opacity="0.2" />\n            </linearGradient>\n        </defs>\n    </svg>`};function U(t,e,i){return t===o.pL.Slideshow?e?L:k:t===o.pL.Video?e?F:P(i):void 0}function O(t,e,i,a,n){return t?(0,m.KY)(e):(0,m.sq)(e,i,a,null,null,!0,n)}function R(){return(0,n.zJ)(b.T3.CurrentMarket)?90:270}function N(t){return{followText:t&&t.followText,followingText:t&&t.followingText,undoText:t&&t.undoHideButtonText,followTooltip:t&&t.followPublisherText,followingTooltip:t&&t.unfollowPublisherText}}function G(t,e){const i=t.event?t.event.target:t.target;if(j(i,"MSFT-ATTRIBUTION"))for(const t of j(i,"MSFT-ATTRIBUTION").children)if("attribution_container"===t.id){const i=null==t?void 0:t.clientWidth,a=null==t?void 0:t.children[0].clientWidth,n=null==t?void 0:t.children[0],o=i-a<0?i-a:0;"ltr"===e?n.style.left=o+"px":n.style.right=o+"px"}}function W(t,e){const i=t.event?t.event.target:t.target;if(j(i,"MSFT-ATTRIBUTION"))for(const t of j(i,"MSFT-ATTRIBUTION").children)if("attribution_container"===t.id){const i=t.children[0];"ltr"===e?i.style.left="0px":i.style.right="0px"}}function j(t,e){if(!t.children||0===t.children.length)return null;let i=null;const a=function(t,e){if(t.children&&0!==t.children.length)for(const n of t.children)n.nodeName===e&&(i=n),a(n,e)};return a(t,e),i}function J(t){const e=b.T3.CurrentRequestTargetScope&&b.T3.CurrentRequestTargetScope.pageExperiments;return e&&e.includes(t)}function Q(t,e,i){var a;return t.enableFeedSuperCards&&e?"web-content-card":(null==i||null===(a=i.spotlightPreviewTypes)||void 0===a?void 0:a.length)>0?"article-breaking-news-card":t.useArticleCardTemplate?"article-card":"content-card"}function Y(){const t=window.location.href;return null!==$._3.getQueryParameterByName("vptest",t)}function q(t,e,i,a){if((0,g.RH)(t,i)){var n;const i=null==t?void 0:t.cardContent,r=null==t||null===(n=t.cardContent)||void 0===n?void 0:n.panoCaption,{eventId:l,title:d}=null==i?void 0:i.panoCaption,s=(null==i?void 0:i.locale)||"en-us";return r.destinationUrl=(0,g.Dv)(`https://www.msn.com/${s}/news/pano/${d}/pa-${l}`),i.isPanoCard=!0,i.panocardType=a,r.MorePublishersLoalizedString=null==e?void 0:e.morePublishers,r.NewsDigestLoalizedString=(o=null==e?void 0:e.newsDigest,J("prg-pr2-pano-w1")?"All Coverage":J("prg-pr2-pano-w2")?"360° Coverage":J("prg-pr2-pano-w3")?"News 360°":o),r.NewsDigestDescriptionLoalizedString=null==e?void 0:e.newsDigestDescription,r.DigestAllLoalizedString="See all",r.type=a,r}var o;return null}},56784:function(t,e,i){i.d(e,{O:function(){return g}});var a=i(56911),n=i(65022),o=i(44449),r=i(26950);let l=class extends r.o{dataChanged(){this.plainText=JSON.parse(this.data)}};l=(0,a.Cg)([(0,o.TA)(n.PDj,"decoration-plain-text")],l);var d=i(92011),s=i(96950),c=i(31756),p=i(1701);c.M;const h=s.qy`<pure-text content="${t=>t.plainText.displayedText}" font-size="16" font-weight="400" light-theme-color=${t=>(0,p.TK)(t.isInfoPane)} dark-theme-color=${t=>(0,p.Xn)(t.isInfoPane)} />`;let g=class extends l{};g=(0,a.Cg)([(0,d.E)({name:"decoration-plain-text",template:h})],g)},57133:function(t,e,i){i.r(e),i.d(e,{DecorationFreeShippingButton:function(){return w}});var a=i(56911),n=i(92011),o=i(38493),r=i(65022),l=i(41626),d=i(44449);let s=class extends l.t{constructor(){super(...arguments),this.color="#036AC4",this.fontFamily="inherit"}};(0,a.Cg)([o.CF],s.prototype,"color",void 0),(0,a.Cg)([(0,o.CF)({attribute:"font-family"})],s.prototype,"fontFamily",void 0),(0,a.Cg)([o.CF],s.prototype,"icon",void 0),(0,a.Cg)([o.CF],s.prototype,"data",void 0),s=(0,a.Cg)([(0,d.TA)(r.PDj,"decoration-free-shipping-button")],s);var c=i(96950),p=i(91640);let h=class extends n.L{constructor(){super(...arguments),this.color="#036AC4",this.paddingVertical="0px",this.paddingHorizontal="9px",this.borderRadius="4px"}};(0,a.Cg)([o.CF],h.prototype,"color",void 0),(0,a.Cg)([o.CF],h.prototype,"height",void 0),(0,a.Cg)([(0,o.CF)({attribute:"padding-vertical"})],h.prototype,"paddingVertical",void 0),(0,a.Cg)([(0,o.CF)({attribute:"padding-horizontal"})],h.prototype,"paddingHorizontal",void 0),(0,a.Cg)([(0,o.CF)({attribute:"border-radius"})],h.prototype,"borderRadius",void 0),h=(0,a.Cg)([(0,d.TA)(r.PDj,"color-button")],h);var g=i(74849),u=i(75096);const m=g.A` .color-button-container{border-radius:4px;text-align:center;display:inline-block}`.withBehaviors(new u.X(["color","paddingVertical","paddingHorizontal","borderRadius","height"],t=>g.A` .color-button-container{background:${t.color};
                    padding: ${t.paddingVertical} ${t.paddingHorizontal} ${t.paddingVertical} ${t.paddingHorizontal};
                    border-radius: ${t.borderRadius};
                    height: ${t.height};
                }
            `)),v=c.qy`<div class="color-button-container"><slot name="icon-section"></slot><slot name="text-section"></slot></div>`;let f=class extends h{};f=(0,a.Cg)([(0,n.E)({name:"color-button",template:v,styles:m})],f);const b=c.qy`<color-button color="${t=>t.color}" height="22px">${(0,p.z)(t=>t.icon,c.qy`<span slot="icon-section" class="freeshipping-icon"><pure-icon icon-name="${t=>t.icon}" icon-width="16" icon-height="12" /></span>`)}<span slot="text-section"><pure-text content="${t=>t.data}" custom-style="height: 28px; line-height: 20px; font-weight: 600; font-size: 16px" font-family="${t=>t.fontFamily}" /></span></color-button>`;var x=i(59957);const $=g.A` .freeshipping-icon{margin-right:3px}`.withBehaviors(new x.e("layoutStyle"));let w=class extends s{};w=(0,a.Cg)([(0,n.E)({name:"decoration-free-shipping-button",template:b,styles:$})],w)},59856:function(t,e,i){i.d(e,{DO:function(){return Ot},Bq:function(){return Ft},pK:function(){return wt}});var a=i(96950),n=i(91640),o=i(63988),r=i(4891),l=i(93468),d=i(65022),s=i(930),c=i(43156),p=i(63581),h=i(98384),g=i(56911),u=i(92011),m=i(60815);class v extends u.L{}(0,g.Cg)([m.sH],v.prototype,"data",void 0);var f=i(39957),b=i(10797),x=i(693),$=i(48566),w=i(63456),y=i(91278);const C=a.qy`
    <style>
        :host {
            grid-area:${t=>t.gridArea};
        }
        .card-button {
            border-radius: 100%;
        }
    </style>
    <fluent-card
        id="native_ad_${t=>t.id}"
        style="grid-area:${t=>t.gridArea};height: ${t=>t.ContentCardImageSizes._300x304.height}px;"
        class="${t=>t.cardSize}"
    >
        <msn-pattern-overlay-card
            href=${t=>t.destinationUrl}
            target="_blank"
            title=${t=>t.title}
            data-t="${t=>{var e;return null===(e=t.adTelemetryContext)||void 0===e||null===(e=e.nativeAdCard)||void 0===e?void 0:e.getMetadataTag()}}"
            :anchorTelemetryTag=${t=>t.adTelemetryContext&&t.adTelemetryContext.destination&&t.adTelemetryContext.destination.getMetadataTag()}
            ${(0,y.Ib)()}
            layout=${t=>(0,w.A)(t,"template.landscapeOverlay",!1)?"landscape":"default"}
            shopNowText=${t=>(0,w.A)(t.localizedStrings,"nativeAdShopNowText")}
            price=${t=>(0,w.A)(t,"assets.salePrice")||(0,w.A)(t,"assets.price")}
        >
            ${a.qy`<span>${t=>t.title}</span>`}
            ${t=>(0,w.A)(t,"template.landscapeOverlay",!1)?t.renderImage("media",t.ContentCardImageSizes._300x174,t.ContentCardImageSizes._300x174):t.renderImage("media",t.ContentCardImageSizes._300x225,t.ContentCardImageSizes._300x225)}
            ${a.qy`
    ${(0,n.z)(t=>t.template.landscapeOverlay,a.qy`
        <msft-attribution slot="${t=>t.hasAnyInlineDecoration?"call-to-action-two-lines":"call-to-action-one-line"}">
            <!-- price, when salePrice is present, use salePrice as the actual price -->
            ${(0,n.z)(t=>(0,w.A)(t,"assets.salePrice")||(0,w.A)(t,"assets.price"),a.qy`
                <decoration-price data=${t=>t.assets.salePrice||t.assets.price} largeFont="false"></decoration-price>
            `)}
            ${(0,n.z)(t=>t.hasAnyInlineDecoration,a.qy`
                <div>
                    ${t=>(t=>(0,w.A)(t,"assets.installmentPrice")&&(0,w.A)(t,"assets.price")?a.qy`
            <decoration-installment-price
                data="${t=>t.assets.installmentPrice}"
                price-format-now="${t=>(0,w.A)(t.localizedStrings,"nativeAdInstallmentPriceFormatNow")}"
                price-format-plan="${t=>(0,w.A)(t.localizedStrings,"nativeAdInstallmentPriceFormatPlan")}"
            ></decoration-installment-price>
        `:(0,w.A)(t,"assets.rating")?a.qy`<decoration-rating rating="${t.assets.rating}" count="${t.assets.likes}" />`:(0,w.A)(t,"assets.curbsidePickup")?a.qy`<decoration-curbside-pickup data="${t.localizedStrings.nativeAdCurbsidePickupText}" />`:(0,w.A)(t,"assets.freeShipping")?a.qy`<decoration-free-shipping data="${t.localizedStrings.nativeAdFreeShippingText}" />`:(0,w.A)(t,"assets.salePrice")&&(0,w.A)(t,"assets.price")?a.qy`
            <div>
                <div style="display: inline-block;"><decoration-price-strike-through data="${t.assets.price}"/></div>
                <div style="display: inline-block;"><decoration-price-off data=" &bull; ${$.Qf.Format(t.localizedStrings.nativeAdOnSaleText,t.assets.discount)}" /></div>
            </div>
        `:a.qy`<div />`)(t)}
                </div>
            `)}
        </msft-attribution>
    `)}
    ${(0,n.z)(t=>!t.template.landscapeOverlay,a.qy`
        <!-- when it's not landscape layout, only show price on left bottom if price or sale price is available, otherwise show "Shop now" -->
        <msft-attribution slot="call-to-action-two-lines">
            <decoration-price data=${t=>(0,w.A)(t,"assets.salePrice")||(0,w.A)(t,"assets.price")||t.localizedStrings.nativeAdShopNowText} largeFont="false"/>
        </msft-attribution>
    `)}
`}
            ${t=>t.renderStartSection("start-actions",t.destinationUrl)}
            ${t=>t.renderEndSection("end-actions")}
        </msn-pattern-overlay-card>
    </fluent-card>
`;var k=i(10096),L=i(86845),F=i(87677);const S=252;function _(t){var e;const i=Number(t.template&&t.template.desiredWidth||t.imageData.imageWidth),a=Number(t.template&&t.template.desiredHeight||t.imageData.imageHeight),n=Math.floor(142*i/a),o=Math.floor(a*S/i);if(t.template&&"msn-river-z-index-9-by-16"===t.template.templateType)return{w:113,h:202};if(t.template&&"msn-river-z-index-3-by-4"===t.template.templateType)return{w:113,h:150};if("msn-river-animated-imagery-9-by-16"===(null===(e=t.template)||void 0===e?void 0:e.templateType))return{w:141,h:250};if(t.template&&t.template.desiredRatio){if("1.91x1"===t.template.desiredRatio)return{w:S,h:o};if("1x1"===t.template.desiredRatio||"4x3"===t.template.desiredRatio||"16x9"===t.template.desiredRatio)return{w:n,h:142}}return n>S?{w:S,h:o}:{w:n,h:142}}var T=i(36845);L._t,L.aM,F.MsnZIndexCard;const z=a.qy`
    <div slot="image-with-badge">
        <img
            src="${t=>t.imageData.source}"
            alt="${t=>t.imageData.altText}"
            style="
                background: white;
                border-top-right-radius: ${t=>{var e;return"msn-river-animated-imagery-9-by-16"===(null===(e=t.template)||void 0===e?void 0:e.templateType)?"calc(var(--layer-corner-radius) * 1px)":"unset"}};
                border: ${t=>{var e;return"msn-river-animated-imagery-9-by-16"===(null===(e=t.template)||void 0===e?void 0:e.templateType)?"unset":"10px solid #FFFFFF"}};
                filter: ${t=>{var e;return"msn-river-animated-imagery-9-by-16"===(null===(e=t.template)||void 0===e?void 0:e.templateType)?"unset":"drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25))"}};
                width: ${t=>_(t).w}px;
                min-width: ${t=>_(t).w}px;
                height: ${t=>_(t).h}px;
                min-height: ${t=>_(t).h}px;
                object-fit: cover;
            "
        />
    </div>
`,M=a.qy`
    <fluent-card
        id="native_ad_${t=>t.id}"
        style="
            background: unset;
            border-radius: unset;
            box-shadow: unset;
            grid-area:${t=>t.gridArea};
            height: ${t=>t.ContentCardImageSizes._300x304.height+16}px;
            left: -8px;
            position: relative;
            top: -8px;
            width: ${t=>t.ContentCardImageSizes._300x304.width+16}px;
        "
        class="${t=>t.cardSize}"
    >
        <msn-z-index-card
            href=${t=>t.destinationUrl}
            target="_blank"
            title=${t=>t.title}
            ?image-priority=${t=>t.imagePriority}
            layout=${t=>(0,b.gJ)(t)}
            heading-max-lines=${t=>(0,b.Rw)(t)}
            document-direction=${t=>(0,b.NL)(document.dir,t)} 
            data-t="${t=>{var e;return null===(e=t.adTelemetryContext)||void 0===e||null===(e=e.nativeAdCard)||void 0===e?void 0:e.getMetadataTag()}}"
            :anchorTelemetryTag=${t=>t.adTelemetryContext&&t.adTelemetryContext.destination&&t.adTelemetryContext.destination.getMetadataTag()}
            ${(0,y.Ib)()}
        >
            ${t=>t.renderTitle()}
            <!--
                For now z-index only supports 1x_2y and with image data, here the assumption is that's the only configuration will be sent to z-index.
            -->
            <div slot="media">
                <style>
                    :host {
                        --z-index-image-width: ${t=>_(t).w}px;
                        --z-index-image-height: ${t=>_(t).h}px;
                        --heading-max-lines: ${t=>t.hasAnyInlineDecoration?2:3};
                    }
                </style>
                ${(0,n.z)(t=>t.badge,a.qy`
                    <msn-z-index-image-badge-decorator
                        badgeType=${t=>t.badge.type}
                        text=${t=>t.badge.text}
                        layout=${t=>(0,b.gJ)(t)}
                    >
                        <div slot="image-with-badge" part="image-with-badge">
                            ${z}
                        </div>
                    </msn-z-index-top-image-badge-decorator>
                `)}
                ${(0,n.z)(t=>!t.badge,a.qy`
                    ${z}
                `)}
            </div>
            ${t=>(0,b.JF)(T.T)(t)}
            ${t=>t.renderStartSection("start-actions",t.destinationUrl)}
            ${t=>t.renderEndSection("end-actions")}
        </msn-z-index-card>
    </fluent-card>
`,A=a.qy`
    <msn-ad-carousel-slide>
        <img slot="carousel-slide-content" class="carousel-item" src= ${t=>t.imageUrl} />
    </msn-ad-carousel-slide>
`,B=a.qy`
    .carousel-item {
        width: 100%;
        height: 100%;
        object-fit: cover; 
    }
    :host {
        border-radius: unset;
        box-shadow: unset;
        grid-area:${t=>t.gridArea};
        height: ${t=>t.ContentCardImageSizes._300x304.height+4}px;
        position: relative;
        width: ${t=>t.ContentCardImageSizes._300x304.width+4}px
    }
`,H=a.qy`
    <style>
        ${B}
    </style>
    <fluent-card 
        id="native_ad_${t=>t.id}"
        style="
            border-radius: unset;
            box-shadow: unset;
            grid-area:${t=>t.gridArea};
            height: ${t=>t.ContentCardImageSizes._300x304.height+4}px;
            position: relative;
            width: ${t=>t.ContentCardImageSizes._300x304.width+4}px
        "
        class="${t=>t.cardSize}"
    >
        <msn-ad-carousel-card
            href=${t=>t.destinationUrl}
            target="_blank"
            title=${t=>t.title}
            ?image-priority=${t=>t.imagePriority}
            data-t="${t=>{var e;return null===(e=t.adTelemetryContext)||void 0===e||null===(e=e.nativeAdCard)||void 0===e?void 0:e.getMetadataTag()}}"
            :anchorTelemetryTag=${t=>t.adTelemetryContext&&t.adTelemetryContext.destination&&t.adTelemetryContext.destination.getMetadataTag()}
            ${(0,y.Ib)()}
        >
            ${t=>t.renderTitle()}
            ${I="media",a.qy`
    <div slot="${I}" style="width: 300px;height: 180px;">
        <msn-ad-carousel 
            cardId=${t=>t.id} 
            visibleSlideCount = "3" 
            :updateActiveIndex=${t=>t.activeItemChangedHandler}
        >
            ${(0,f.ux)(t=>t.carouselData,A)}
        </msn-ad-carousel>
    </div>
`}
            ${t=>t.renderStartSection("start-actions",t.destinationUrl)}
            ${t=>t.renderEndSection("end-actions")}
        </msn-ad-carousel-card>
    </fluent-card>
`;var I;const E=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.qy`
    <style>
        msn-animation-decorator img.crop {
            position: relative;
            left: -44px;
        }
    </style>
    <msn-animation-decorator
        effectId=${t=>t.id}
        showMultiTimes
        animationType=${t=>{var e;return null===(e=t.template)||void 0===e?void 0:e.animatedImage}}
        :animationConfig=${t=>{var e;return null===(e=t.template)||void 0===e?void 0:e.animatedConfig}}
        intersectionRootMargin="-160px 0px 0px 0px"
    >
        ${e=>e.renderImageTag("anim-content",t)}
    </msn-animation-decorator>
`},D=a.qy`
    <style>
        :host {
            height: ${t=>t.ContentCardImageSizes._300x304.height}px;
            grid-area: ${t=>t.gridArea};
        }
        .card-button:not(:hover) {
            background: transparent;
        }
        msft-content-card fluent-button::part(control) {
            padding: 0;
        }
        msft-content-card.nativeAdVideo-river::part(media) {
            z-index: 2;
        }
        msft-content-card::part(footer) {
            padding: 0 16px 4px;
            margin-bottom: 0;
            height: 40px;
        }
        msft-content-card.wideIconMargin msft-ad-label {
            margin-right: 8px;
        }
        msft-attribution {
            position: relative;
            overflow: hidden;
        }
        /* override default call-to-action style from msft-content-card */
        msft-attribution.native-ad-river-card {
            z-index: unset;
            bottom: 42px;
            position: absolute;
        }
        msft-content-card span.title_1x_2y,
        msft-content-card span.title_1x_3y {
            font-size: 20px;
        }
        msft-content-card.native-ad-content-card::part(heading-container) {
            background: var(--fill-color);
        }
        msft-content-card.native-ad-content-card::part(media-wrapper) {
            height: 156px;
            transition: height  0.3s;
            overflow: hidden;
        }
        msft-content-card.two-lines-heading::part(heading) {
            --heading-max-lines: 2;
        }
    </style>
    <fluent-card
        id="native_ad_${t=>t.id}"
        style="grid-area:${t=>t.gridArea}"
        class="${t=>t.cardSize}"
    >
        <msft-content-card
            href=${t=>t.destinationUrl}
            target="_blank"
            title=${t=>t.title}
            ?image-priority=${t=>t.imagePriority}
            class="two-lines-heading ${t=>t.getContentCardClassnames(t)}"
            data-t="${t=>t.adTelemetryContext.nativeAdCard.getMetadataTag()}"
            :anchorTelemetryTag=${t=>t.adTelemetryContext&&t.adTelemetryContext.destination&&t.adTelemetryContext.destination.getMetadataTag()}
            ${(0,y.Ib)()}
        >
            ${t=>t.renderTitle()}
            ${t=>t.videoProps?t.renderVideo("media",t.ContentCardImageSizes._300x156):function(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return a.qy`
    <!--
        Only use placeholder when the card size is 1x_2y
    -->
    ${(0,n.z)(t=>t.cardSize===t.FeedLayoutCardSize._1x_2y&&t.imageData,a.qy`
        <div slot="${t}" style="width: ${e.width}px;height: ${e.height}px;">
            ${E(i)}
        <div>
    `)}
    ${(0,n.z)(t=>t.cardSize===t.FeedLayoutCardSize._1x_2y&&!t.imageData,a.qy`
        <div slot="${t}" style="width: ${e.width}px;height: ${e.height}px;"></div>
    `)}
    ${(0,n.z)(t=>t.cardSize!==t.FeedLayoutCardSize._1x_2y&&t.imageData,a.qy`
        <div slot="${t}">
            ${E(i)}
        </div>
    `)}
`}("media",t.ContentCardImageSizes._300x156)}
            ${t=>t.renderStartSection(t.isProviderInHeader?"attribution":"start-actions",t.destinationUrl)}
            ${t=>t.renderEndSection("end-actions")}
        </msft-content-card>
    </fluent-card>
`,Z=a.qy`
    <style>
        :host {
            grid-area:${t=>t.gridArea};
        }
    </style>
    <fluent-card
        id="native_ad_${t=>t.id}"
        style="
            height: ${t=>t.ContentCardImageSizes._300x304.height}px;
        "
        class="${t=>t.cardSize}"
    >
        <msn-slideshow
            :images="${t=>t.images}"
            :imageData="${t=>t.imageData}"
            :autoScroll="${t=>t.slideshowProps.autoScroll}"
            :autoScrollIntervalMs="${t=>t.slideshowProps.autoScrollIntervalMs}"
            :enableMediaControls="${t=>t.slideshowProps.enableSlideshowMediaControls}"
            :destinationUrl=${t=>t.destinationUrl}
            :anchorTelemetryTag=${t=>t.adTelemetryContext&&t.adTelemetryContext.destination&&t.adTelemetryContext.destination.getMetadataTag()}
            :badge=${t=>t.badge}
            data-t="${t=>{var e;return null===(e=t.adTelemetryContext)||void 0===e||null===(e=e.nativeAdCard)||void 0===e?void 0:e.getMetadataTag()}}"
            ${(0,y.Ib)(!0,!0,!0)}
            title=${t=>t.title}
        >
            ${t=>t.renderTitle()}
            ${t=>t.renderStartSection("start-actions",t.destinationUrl)}
            ${t=>t.renderEndSection("end-actions")}
        </msn-slideshow>
    </fluent-card>
`,V=a.qy`
    <template>
        <style>
            msft-content-card.native-ad-content-card:hover::part(media-wrapper) {
                transition: height  0.3s;
                overflow: hidden;
                height: ${t=>{var e;return null!==(e=t.data.hoverState)&&void 0!==e&&e.isDecorationLinesExpanded?"116px":""}}
            }
        </style>
        ${(0,f.ux)(t=>[t.data],a.qy`
            ${t=>(t=>{var e,i,a;const n="msn-z-index-card"===(0,b.zT)(t),o="msn-river-animated-imagery-9-by-16"===(0,b.zT)(t),r="msn-river-z-index-9-by-16"===(0,b.zT)(t),l="msn-river-z-index-3-by-4"===(0,b.zT)(t),d="msn-slideshow-card"===(0,b.zT)(t),s="msn-pseudo-video-card"===(0,b.zT)(t),c="msn-pattern-overlay-card"===(0,b.zT)(t),p="msn-ad-carousel"===(0,b.zT)(t),h=!!t.assets&&!(0,x.A)(t.assets),g="msft-content-card"===(0,b.zT)(t)&&(null===(e=t.template)||void 0===e?void 0:e.animatedImage)&&(null===(i=t.template)||void 0===i?void 0:i.animatedConfig),u="msn-call-to-action-v3"===(0,b.zT)(t),m=null===(a=t.template)||void 0===a?void 0:a.immersiveThemeColor;return c?C:h||m||u?k.cC:n||o||r||l?M:p?H:g?D:d||s?Z:void 0})(t)}
        `)}
    </template>
`;var P=i(95239),U=i(74849);const O=U.A` msft-content-card fluent-button::part(control){padding:0}msft-content-card.nativeAdVideo-river::part(media){z-index:2}msft-content-card::part(footer){padding:0 16px 4px;margin-bottom:0;height:40px}msft-content-card.wideIconMargin msft-ad-label{margin-inline-end:8px}msft-attribution{position:relative;overflow:hidden}msft-attribution.native-ad-river-card{bottom:42px;position:absolute;z-index:unset}msft-content-card span.title_1x_2y,msft-content-card span.title_1x_3y{font-size:20px}msft-content-card.native-ad-content-card::part(heading-container){background:${P.p}}msft-content-card.native-ad-content-card::part(media-wrapper){height:156px;transition:height 0.3s;overflow:hidden}msft-content-card.two-lines-heading::part(heading){--heading-max-lines:2}msft-content-card.three-lines-heading::part(heading){--heading-max-lines:3}msft-article msft-attribution[slot="attribution"].margin-5-decoration{margin-bottom:5px}`.withBehaviors(new class{constructor(t,e,i){this.propertyPath=t,this.value=e,this.styles=i}connectedCallback(t){const{source:e}=t;m.cP.getNotifier(e).subscribe(this,this.propertyPath),this.handleChange(e,this.propertyPath)}disconnectedCallback(t){const{source:e}=t;m.cP.getNotifier(e).unsubscribe(this,this.propertyPath),e.$fastController.removeStyles(this.styles)}handleChange(t,e){(0,w.A)(t,e)===this.value?t.$fastController.addStyles(this.styles):t.$fastController.removeStyles(this.styles)}}("data.template.nativeAdMode","adult",U.A` .card-button:not(:hover){background:transparent}`));class R extends v{}const N=(0,h.A)(()=>{(0,u.E)({name:"msn-native-ad-card-template-facade",template:V,styles:O})(R)});class G extends u.L{}(0,g.Cg)([m.sH],G.prototype,"nativeAdHpStripeData",void 0);const W=a.qy`
    ${(0,f.ux)(t=>[t.nativeAdHpStripeData],a.qy`
        <msft-content-card
            href=${t=>t.destinationUrl}
            target="_blank"
            title=${t=>t.title}
            ?image-priority=${t=>t.imagePriority}
            data-t="${t=>{var e;return null===(e=t.adTelemetryContext)||void 0===e||null===(e=e.nativeAdCard)||void 0===e?void 0:e.getMetadataTag()}}"
            :anchorTelemetryTag=${t=>t.adTelemetryContext&&t.adTelemetryContext.destination&&t.adTelemetryContext.destination.getMetadataTag()}
            ${(0,y.Ib)()}
        >
            ${t=>t.title}
            ${t=>t.renderImageTag("media",p.L._300x200)}
            <msft-attribution slot="start-actions">
                ${t=>t.providerData.name}
            </msft-attribution>
            <div slot="end-actions"></div>
        </msft-content-card>
    `)}
`,j=U.A` msft-content-card{--heading-max-lines:3}msft-content-card msft-attribution{margin-inline-start:-13px}msft-content-card img[slot="media"]{width:306px;height:200px;object-fit:cover}`;class J extends G{}const Q=(0,h.A)(()=>{(0,u.E)({name:"msn-native-ad-hp-stripe-card",template:W,styles:j})(J)});class Y extends u.L{}(0,g.Cg)([m.sH],Y.prototype,"nativeAdArticleData",void 0);const q=a.qy`
    ${(0,f.ux)(t=>[t.nativeAdArticleData],a.qy`
        <msft-article-card
            size="${t=>t.cardSize}"
            card-fill-color=${t=>t.adBackgroundColor}
        >
            <msft-article
                id="native_ad_${t=>t.id}"
                href=${t=>t.destinationUrl}
                target="_blank"
                title=${t=>t.title}
                ?image-priority=${t=>t.imagePriority}
                class="${t=>t.getArticleCardClassnames(t)}"
                data-t="${t=>{var e;return null===(e=t.adTelemetryContext)||void 0===e||null===(e=e.nativeAdCard)||void 0===e?void 0:e.getMetadataTag()}}"
                :anchorTelemetryTag=${t=>t.adTelemetryContext&&t.adTelemetryContext.destination&&t.adTelemetryContext.destination.getMetadataTag()}
                ${(0,y.Ib)()}
            >
                ${t=>t.createNativeAdFaviconWithProviderName}
                ${t=>t.renderTitle()}
                ${t=>t.videoProps?t.renderVideo("image",p.L._300x169,!0):t.renderImage("image",p.L._300x225)}
                ${t=>t.invertSlugPosition?t.renderStartSection("start-action",t.destinationUrl):t.renderStartSection("attribution",t.destinationUrl)}
                ${t=>t.renderEndSection("end-action")}
            </msft-article>
        </msft-article-card>
    `)}
`;var K=i(75096),X=i(50130),tt=i(39782);const et=U.A` msft-article-card{height:100%;width:100%}msft-ad-label{margin-inline-end:8px}msft-article.native-ad,msft-article.${(0,X.nP)("native-ad")}{--article-native-ad-heading-margin-bottom:40px;--heading-max-lines:3}msft-article.nativeAdVideo-river::part(image){z-index:2}msft-article.native-ad.gradient,msft-article.${(0,X.nP)("native-ad")}.gradient{--article-native-ad-actions-height:33px;--article-native-ad-heading-margin-bottom:6px}msft-article.native-ad::part(heading),msft-article.${(0,X.nP)("native-ad")}::part(heading){margin-bottom:var(--article-native-ad-heading-margin-bottom);color:var(--msft-card-font-color)}msft-article.native-ad.long-gradient::part(gradient),msft-article.${(0,X.nP)("native-ad")}.long-gradient::part(gradient){top:-55px}msft-attribution{max-width:100%}msft-article.native-ad::part(actions),msft-article.${(0,X.nP)("native-ad")}::part(actions){height:var(--article-native-ad-actions-height);align-items:center}msft-article-card[size="_1x_2y"] msft-article.native-ad[class*="zoom-ratio"]:not(.no-image)::part(gradient):after,msft-article-card[size="_1x_2y"] msft-article.${(0,X.nP)("native-ad")}[class*="zoom-ratio"]:not(.no-image)::part(gradient):after{content:"";height:10px;width:100%;bottom:-5px;position:absolute;background:var(--gradient-mid-color)}@media (prefers-color-scheme:light){.white-gradient::part(article){background:#f7f7f7;--gradient-mid-color:#f7f7f7;--gradient-color:#f7f7f7;--msft-card-font-color:black}}@media (prefers-color-scheme:dark){.white-gradient::part(article){background:#242424;--gradient-mid-color:#242424;--gradient-color:#242424;--msft-card-font-color:white}}msft-article span.title_1x_2y,msft-article span.title_2x_2y{font-size:20px}msft-article.long-gradient::part(gradient){top:-55px}msft-article-card[size="_1x_2y"] msft-article[class*="zoom-ratio"]:not(.no-image)::part(gradient):after{content:"";height:10px;width:100%;bottom:-5px;position:absolute;background:var(--gradient-mid-color)}msft-attribution{position:relative;overflow:hidden}${tt.Y.getArticleCardHoverGradientStyle()}

`.withBehaviors(new K.X(["nativeAdArticleData"],t=>{if(!t||!t.nativeAdArticleData)return U.A``;const e=t.nativeAdArticleData;let i="";return e.isAdSlugV4NonDr&&(i+=`msft-article.native-ad::part(heading), msft-article.${(0,X.nP)("native-ad")}::part(heading){--heading-max-lines:2}`),e.layoutGap&&(i+=`msft-article-card[size="_1x_2y"] msft-article::part(gradient){bottom:${67+e.layoutGap}px}msft-article-card[size="_2x_2y"] msft-article::part(gradient){bottom:0px}`),e.useTitleFontSize&&(i+=`msft-article-card msft-article.native-ad, msft-article-card msft-article.${(0,X.nP)("native-ad")}{--msft-article-heading-font-size:${e.useTitleFontSize}px;\n                    --msft-article-heading-line-height: 24px;\n                }\n            \n                msft-article-card msft-article.native-ad::part(attribution), msft-article-card msft-article.${(0,X.nP)("native-ad")}::part(attribution){height:28px}msft-article-card[size="_1x_2y"] msft-article.native-ad:not(.no-image)::part(heading),msft-article-card[size="_1x_2y"] msft-article.${(0,X.nP)("native-ad")}:not(.no-image)::part(heading){margin-bottom:11px}msft-article-card[size="_1x_2y"] msft-article.native-ad:not(.no-image)::part(gradient),msft-article-card[size="_1x_2y"] msft-article.${(0,X.nP)("native-ad")}:not(.no-image)::part(gradient){background:linear-gradient(180deg,transparent 0%,var(--gradient-mid-color) 46%,var(--gradient-color) 100%);top:5px}`),e.alignFooters&&(i+=`msft-article-card msft-article::part(heading):after{top:calc(100% - ${e.fixedCardHeight?304:292+(e.layoutGap||12)}px - 8px) !important}msft-article::part(text){margin-bottom:-8px}msft-article-card[size="_1x_2y"] msft-article:not(.no-image)::part(gradient){top:-29px;bottom:calc(${e.fixedCardHeight?79:67+(e.layoutGap||12)}px + 8px)}msft-article.no-image::part(actions){bottom:calc(var(--msft-article-padding) * 1px - 8px)}`),e.region===r.Tp.rightRail&&e.renderFlattenedDesign&&(i+="msft-article-card{box-shadow:none}"),"Bierstadt"===e.fontFamilyOnCardContent&&(i+='msft-article-card msft-article::part(heading){font-family:Bierstadt,Segoe UI,Segoe UI Midlevel,Arial,Sans-Serif;--msft-article-heading-line-height:24px;--heading-max-lines:3}msft-article-card msft-article p[slot="abstract"]{font-family:Bierstadt,Segoe UI,Segoe UI Midlevel,Arial,Sans-Serif;--abstract-font-size:15px}msft-article-card msft-article msft-attribution::part(content){font-family:Bierstadt,Segoe UI,Segoe UI Midlevel,Arial,Sans-Serif;font-size:calc(var(--type-ramp-minus-1-font-size) + 1px)}'),"Grandview"===e.fontFamilyOnCardContent&&(i+='msft-article-card msft-article::part(heading){font-family:Grandview,Segoe UI,Segoe UI Midlevel,Arial,Sans-Serif;--msft-article-heading-line-height:24px;--heading-max-lines:3}msft-article-card msft-article p[slot="abstract"]{font-family:Grandview,Segoe UI,Segoe UI Midlevel,Arial,Sans-Serif}msft-article-card msft-article msft-attribution::part(content){font-family:Grandview,Segoe UI,Segoe UI Midlevel,Arial,Sans-Serif}'),"Seaford"===e.fontFamilyOnCardContent&&(i+='msft-article-card msft-article::part(heading){font-family:Seaford,Segoe UI,Segoe UI Midlevel,Arial,Sans-Serif;--msft-article-heading-line-height:24px;--heading-max-lines:3}msft-article-card msft-article p[slot="abstract"]{font-family:Seaford,Segoe UI,Segoe UI Midlevel,Arial,Sans-Serif;--abstract-font-size:15px}msft-article-card msft-article msft-attribution::part(content){font-family:Seaford,Segoe UI,Segoe UI Midlevel,Arial,Sans-Serif;font-size:calc(var(--type-ramp-minus-1-font-size) + 1px)}'),"Tenorite"===e.fontFamilyOnCardContent&&(i+='msft-article-card msft-article::part(heading){font-family:Tenorite,Segoe UI,Segoe UI Midlevel,Arial,Sans-Serif;--msft-article-heading-line-height:24px;--heading-max-lines:3}msft-article-card msft-article p[slot="abstract"]{font-family:Tenorite,Segoe UI,Segoe UI Midlevel,Arial,Sans-Serif;--abstract-font-size:16px}msft-article-card msft-article msft-attribution::part(content){font-family:Tenorite,Segoe UI,Segoe UI Midlevel,Arial,Sans-Serif;font-size:calc(var(--type-ramp-minus-1-font-size) + 2px)}'),U.A` :host{grid-area:${e.gridArea}}msft-article-card msft-article::part(heading):after{top:calc(100% - ${e.fixedCardHeight?304:292+(e.layoutGap||12)}px)}msft-article-card[size="_1x_2y"] msft-article:not(.no-image)::part(gradient){bottom:${e.fixedCardHeight?77:65+(e.layoutGap||12)}px;
                }
                ${i}
            `}));class it extends Y{}const at=(0,h.A)(()=>{(0,u.E)({name:"msn-native-ad-article-card",template:q,styles:et})(it)});var nt=i(49513),ot=i(32542),rt=i(47264),lt=i(38493),dt=i(41626),st=i(44449);let ct=class extends dt.t{constructor(){super(...arguments),this.faviconText="",this.landingPage=""}};(0,g.Cg)([(0,lt.CF)({attribute:"favicon-text"})],ct.prototype,"faviconText",void 0),(0,g.Cg)([(0,lt.CF)({attribute:"landing-page"})],ct.prototype,"landingPage",void 0),(0,g.Cg)([(0,lt.CF)({attribute:"tel-metadata"})],ct.prototype,"telemetryMetadata",void 0),ct=(0,g.Cg)([(0,st.TA)(d.PDj,"msn-native-ad-favicon")],ct);var pt=i(59957);const ht=U.A` .native-ad-favicon-wrapper{width:16px;height:16px;background:#F2F2F2;border-radius:4px;align-items:center;text-align:center;justify-content:center;display:flex}.native-ad-favicon-text{color:#4D1C3A;font-size:12px;width:100%;height:100%;text-decoration:none}`.withBehaviors(new pt.e("layoutStyle")),gt=a.qy`<div class="native-ad-favicon-wrapper"><a class="native-ad-favicon-text" href=${t=>t.landingPage} data-t="${t=>t.telemetryMetadata}">${t=>t.faviconText}</a></div>`;class ut extends ct{}const mt=(0,h.A)(()=>{(0,u.E)({name:"msn-native-ad-favicon",template:gt,styles:ht,shadowOptions:{delegatesFocus:!0}})(ut)});var vt=i(78465);const ft=(0,st.sx)(d.SuG,"getFaviconLetter")(t=>{if(!t)return"M";const e=t.trim();if(!e)return"M";const i=e.split(" ");if(i.length>1){const t=i[0].toLowerCase();return"the"===t||"a"===t||"an"===t?i[1][0].toUpperCase():t[0].toUpperCase()}return e[0].toUpperCase()});var bt,xt=i(17312);vt.jt,function(t){t.Long="long",t.Short="short"}(bt||(bt={}));const $t=a.qy`
${(0,n.z)(t=>t.providerData&&t.destinationUrl&&t.isAdSlugV4NonDr,a.qy`
    <msft-attribution slot="attribution">
        <msn-native-ad-favicon
            favicon-text="${t=>ft((0,o.d7)(t.providerData.name))}"
            slot="image"
            landing-page=${t=>t.destinationUrl}
            tel-metadata=${t=>t.adTelemetryContext&&t.adTelemetryContext.destination&&t.adTelemetryContext.destination.getMetadataTag()}
        >
        </msn-native-ad-favicon>
        ${(0,n.z)(t=>t.providerData,a.qy`
            ${t=>Ft(t.destinationUrl)}
        `)}
    </msft-attribution>
`)}
`,wt=t=>a.qy`
    ${(0,n.z)(t=>t.isGreyAdsLabelEnabled,a.qy`
        <msn-native-ad-ad-label 
            privacy-url=${t=>t.privacyUrl}
            type="greyLabel"
            slot="${t=>t.providerAboveHeader?"start-actions":"image"}"
            should-adjust-gap=${e=>!t&&[...r.mL,...r.Yw,r.Tp.riverdb,r.Tp.rightRail].includes(e.region)}
            ad-label-text=${t=>t.adLabelText}
            tel-metadata=${t=>t.adTelemetryContext&&t.adTelemetryContext.adLabel&&t.adTelemetryContext.adLabel.getMetadataTag()}
            id="${t=>t.id}-ad-label"
            enable-safe-ads=${t=>t.enableSafeAds}
            hide-ad-label-and-ad-choice=${t=>t.hideAdLabelAndAdChoice}
            enable-ad-sponsored-text=${t=>t.enableAdSponsoredText}
        >
        </msn-native-ad-ad-label>
    `)}
    ${(0,n.z)(t=>!t.isGreyAdsLabelEnabled,a.qy`
        <msn-native-ad-ad-label 
            privacy-url=${t=>t.privacyUrl}
            type=${t=>t.adSlugGA||t.region===r.Tp.rightRail?"defaultLabel":"greenLabel"}
            slot="${t=>t.providerAboveHeader?"start-actions":"image"}"
            should-adjust-gap=${e=>!t&&r.vx.includes(e.region)||e.unifyMode&&r.EF.includes(e.region)}
            ad-label-text=${t=>t.adLabelText}
            tel-metadata=${t=>t.adTelemetryContext&&t.adTelemetryContext.adLabel&&t.adTelemetryContext.adLabel.getMetadataTag()}
            ad-label-text-opacity=${t=>t.adLabelTextOpacity??"0.7"}
            ad-label-font-size=${t=>t.adLabelFontSize}
            id="${t=>t.id}-ad-label"
            is-msn-hp-ad-slug=${t=>t.isMsnHPAdSlug}
            enable-safe-ads=${t=>t.enableSafeAds}
            hide-ad-label-and-ad-choice=${t=>t.hideAdLabelAndAdChoice}
            enable-ad-sponsored-text=${t=>t.enableAdSponsoredText}
        >
        </msn-native-ad-ad-label>
    `)} 
`,yt=()=>a.qy`
    ${(0,n.z)(t=>!t.isAnaheimDesign,a.qy`${t=>t.title}`)}
    ${(0,n.z)(t=>t.isAnaheimDesign&&t.feedFontSize,a.qy`
        <span style="font-size: ${t=>t.feedFontSize}px;
            ${t=>t.headingLineHeight?`line-height: ${t.headingLineHeight}px;`:""}
        ">
            ${t=>t.title}
        </span>`)}
    ${(0,n.z)(t=>t.isAnaheimDesign&&!t.feedFontSize,a.qy`
        ${(0,n.z)(t=>!t.useSmallFontSize,a.qy`<span class="title${t=>t.cardSize}">${t=>t.title}</span>`)}
        ${(0,n.z)(t=>t.useSmallFontSize,a.qy`${t=>t.title}`)}
    `)}
`,Ct=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return a.qy`
    <style>
        img.ltr.native-ad-crop {
            position: relative;
            left: -44px;
        }
        img.rtl.native-ad-crop {
            position: relative;
            right: -44px;
        }
        img[slot="anim-content"]{
            object-fit: cover;
            object-position: top;
        }
        img[id="nativead-1-img"], img[id="nativead-3-img"]{
            max-width: 100%;
            max-height: 100%;
        }
        img.boost-ad {
            top: 48px;
            left: 16px;
            width: 268px;
            height: 140px;
            position:absolute;
            border-radius: 8px;
            transition: unset;
            object-position: center;
        }
    </style>
    <img
        slot=${e=>t}
        id="${t=>t.id+"-img"}"
        src="${t=>t.imageData.source}"
        alt="${t=>t.imageData.altText}"
        width="${t=>(0,w.A)(e,"width",t.imageData.imageWidth)}"
        height="${t=>(0,w.A)(e,"height",t.imageData.imageHeight)}"
        @load=${(t,e)=>{(0,nt.mQ)(t,e,"NativeAdCardTemplate"),t.imageData.visualReadinessCallback&&t.imageData.visualReadinessCallback()}}
        @error=${(t,e)=>{(0,nt.mQ)(t,e,"NativeAdCardTemplate"),t.imageData.visualReadinessCallback&&t.imageData.visualReadinessCallback(e.event),(0,ot.T)({id:t.id+"-img",rLink:t.destinationUrl,imgLink:t.imageData.source,isBoost:Ut(t)})}}
        class="${t=>document.dir} ${t=>t.useProng2AmplifyCardTemplate?"boost-ad":""} ${t=>t.isAnaheimDesign&&t.useArticleCardTemplate&&Number(t.imageData.imageWidth)>300?"native-ad-crop":""}"
    />
`},kt=function(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return a.qy`
    <!--
        Only use placeholder when the card size is 1x_2y
    -->
    ${(0,n.z)(t=>t.cardSize===s.uE._1x_2y&&t.imageData,a.qy`
        <div slot="${t}" style="width: ${e.width}px;height: ${e.height}px;">
            ${Ct("anim-content",i)}
        </div>
    `)}
    ${(0,n.z)(t=>t.cardSize===s.uE._1x_2y&&!t.imageData,a.qy`
        <div slot="${t}" style="width: ${e.width}px;height: ${e.height}px;">
        </div>
    `)}
    ${(0,n.z)(t=>t.cardSize!==s.uE._1x_2y&&t.imageData,a.qy`
        <div slot="${t}">
            ${Ct("anim-content",i)}
        </div>
    `)}
`},Lt=(t,e,i)=>a.qy`
    ${(0,n.z)(t=>t.cardSize===s.uE._1x_2y,a.qy`
        <div slot="${t}"  
            class="ad-video-player ${t=>t.responsiveWidth?"responsive-width":""}"
            style="--ad-video-width: ${e.width}px;--ad-video-height: ${e.height}px;"
        >
            <native-ad-video-controls
                region="river"
                width=${e.width}
                height=${e.height}
                :destinationUrl=${t=>t.destinationUrl}
                :localizedStrings=${t=>t.localizedStrings}
            ></native-ad-video-controls>
            <native-ad-video-player
                :videoProps=${t=>t.videoProps}
                :backgroundImg=${t=>t.imageData}
                region="river"
                immersive=${i}
                width=${e.width}
                height=${e.height},
                :visualReadinessCallback=${t=>t.visualReadinessCallback}
            ></native-ad-video-player>
        </div>
    `)}
`,Ft=t=>a.qy`
        <msn-native-ad-provider-name 
            ${(0,y.Ib)(!0,!1)}
            url="${t}"
            provider-name="${t=>t.adSlugGA&&t.providerData?(0,o.d7)(t.providerData.name):t.providerData.name}" 
            white-provider-name="${t=>{return t.template&&!!((e=t.template.templateType)&&"msn-slideshow-card"===e||e&&"msn-pseudo-video-card"===e);var e}}"
            keep-opacity=${t=>r.mL.includes(t.region)}
            ad-slug-ga=${t=>t.adSlugGA||t.region===r.Tp.rightRail}
            tel-metadata=${t=>t.adTelemetryContext&&t.adTelemetryContext.destination&&t.adTelemetryContext.destination.getMetadataTag()}
            has-elite-badge=${t=>{var e;return!(null===(e=t.assets)||void 0===e||!e.eliteBadge)}}
            ad-label-text-opacity=${t=>t.adLabelTextOpacity??.7}
            :localizedStrings=${t=>t.localizedStrings}
            is-msn-hp-ad-slug=${t=>t.isMsnHPAdSlug}
        >
        </msn-native-ad-provider-name>
`,St=(t,e,i)=>a.qy`
    ${(0,n.z)(t=>t.providerData,a.qy`
        <msft-attribution class="${t=>t.hideAdLabelAndAdChoice?"ad-label-and-choice-hidden":""}" slot="${t}" style="--design-unit: 0; overflow: hidden; ${t=>t.invertSlugPosition?"display: flex":""}">
            ${(0,n.z)(t=>!t.providerAboveHeader,wt(i))}
            ${Ft(e)}
        </msft-attribution>
        ${(0,n.z)(t=>t.providerAboveHeader,wt(i))}
   `)}
`,_t=t=>a.qy`
    ${(0,n.z)(t=>t.adChoiceIconUrl,a.qy`
        <a
            href="${t=>t.adChoiceIconUrl}"
            target="_blank"
            class="${t=>t.hideAdLabelAndAdChoice?"ad-choice-hidden":""} ${t}"
            aria-label="${t=>t.localizedStrings&&t.localizedStrings.nativeAdAdChoiceText}"
            data-t="${t=>{var e;return null===(e=t.adTelemetryContext)||void 0===e||null===(e=e.adChoice)||void 0===e?void 0:e.getMetadataTag()}}"
            id="${t=>t.id}-ad-choice"
        >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter:invert(71%) sepia(0%) saturate(0%) hue-rotate(332deg) brightness(95%) contrast(97%);">
                <path d="M4.52344 5.69531C4.70573 5.69531 4.86198 5.63542 4.99219 5.51562C5.1224 5.39062 5.1875 5.24219 5.1875 5.07031C5.1875 4.89844 5.1224 4.7526 4.99219 4.63281C4.86198 4.50781 4.70573 4.44531 4.52344 4.44531C4.33594 4.44531 4.17708 4.50781 4.04688 4.63281C3.91667 4.7526 3.85156 4.89844 3.85156 5.07031C3.85156 5.24219 3.91667 5.39062 4.04688 5.51562C4.17708 5.63542 4.33594 5.69531 4.52344 5.69531ZM1.44531 0.921875V0.929688C1.33594 0.861979 1.21875 0.828125 1.09375 0.828125C0.90625 0.828125 0.747396 0.890625 0.617188 1.01562C0.486979 1.13542 0.421875 1.28125 0.421875 1.45312V11.375C0.421875 11.5469 0.486979 11.6953 0.617188 11.8203C0.747396 11.9401 0.90625 12 1.09375 12C1.19271 12 1.28906 11.9792 1.38281 11.9375H1.39062L1.40625 11.9219L3.20312 11.0625C3.48958 10.9635 3.63281 10.7708 3.63281 10.4844C3.63281 10.3073 3.56771 10.1589 3.4375 10.0391C3.30729 9.91406 3.15104 9.85156 2.96875 9.85156C2.85417 9.85156 2.74479 9.8776 2.64062 9.92969C2.63542 9.9401 2.61979 9.95052 2.59375 9.96094C2.51042 10.0026 2.42188 10.0234 2.32812 10.0234C2.17188 10.0234 2.03906 9.97396 1.92969 9.875C1.82031 9.77083 1.76302 9.64844 1.75781 9.50781V3.375C1.76302 3.22917 1.82031 3.10677 1.92969 3.00781C2.03906 2.90365 2.17188 2.85156 2.32812 2.85156C2.41667 2.85156 2.5 2.8724 2.57812 2.91406C2.58333 2.91406 2.58854 2.91667 2.59375 2.92188C2.59896 2.92188 2.60417 2.92448 2.60938 2.92969L8.53906 5.92188L8.64844 5.97656C8.8099 6.08594 8.89062 6.23177 8.89062 6.41406C8.89062 6.60677 8.80469 6.75521 8.63281 6.85938L8.5625 6.89844L5.1875 8.60938V6.67969C5.1875 6.5026 5.1224 6.35417 4.99219 6.23438C4.86198 6.11458 4.70573 6.05469 4.52344 6.05469C4.33594 6.05469 4.17708 6.11458 4.04688 6.23438C3.91667 6.35417 3.85156 6.5026 3.85156 6.67969V9.65625C3.85156 9.83333 3.91667 9.98177 4.04688 10.1016C4.17708 10.2214 4.33594 10.2812 4.52344 10.2812C4.65885 10.2812 4.78385 10.2448 4.89844 10.1719L11.125 7.00781C11.4271 6.90885 11.5781 6.71094 11.5781 6.41406C11.5781 6.14844 11.4453 5.95833 11.1797 5.84375L1.44531 0.921875ZM2.59375 9.96094C2.61979 9.95052 2.63542 9.9401 2.64062 9.92969L2.59375 9.96094ZM2.57812 2.91406C2.58333 2.91406 2.58854 2.91667 2.59375 2.92188C2.59896 2.92188 2.60417 2.92448 2.60938 2.92969L2.57812 2.91406Z" fill="#00aecd"/>
            </svg>
        </a>
    `)}
`,Tt=t=>a.qy`
    <fluent-button
        class="moreActionButton"
        slot="more-actions"
        @click="${(t,e)=>t.toggleBoostActionMenu(e.event)}"
        data-t="${t=>{var e;return null===(e=t.adTelemetryContext)||void 0===e||null===(e=e.moreOptionsClick)||void 0===e?void 0:e.getMetadataTag()}}"
        role="button"
    >
        ${a.qy.partial(rt.A)}
    </fluent-button>
`,zt=t=>a.qy`
    <style>
        .has-right-bottom-ads-bing-icon {
            position: absolute; right: 16px;
        }

        .has-preview-card-template-icon {
            position: absolute; right: 10px; bottom: 5px;
        }
        .has-preview-card-template-icon.image-end {
            right: 122px;
        }

        .native-ad .end-actions, .${(0,X.nP)("native-ad")} .end-actions {
            display: flex; align-items: center;
        }

        .native-ad a.ad-choice-icon, .${(0,X.nP)("native-ad")} a.ad-choice-icon {
            display: inline-flex; min-width: calc((var(--base-height-multiplier) + var(--density)) * var(--design-unit) * 1px);
        }

        .native-ad a.ad-choice-icon svg, .${(0,X.nP)("native-ad")} a.ad-choice-icon svg {
            display: block; margin: auto;
        }

        a.ad-choice-icon.ad-choice-hidden, a.ad-choice-icon.ad-choice-hidden {
            max-width: 0px;
            min-width: 0px;
            visibility: hidden;
            width: 0;
            padding: 0;
            margin: 0;
            border: 0;
        }
    </style>
    <div slot="${t}" class="${t=>t.isRightBottomAdsBingIcon?"has-right-bottom-ads-bing-icon":""} ${t=>t.usePreviewCardTemplate?"has-preview-card-template-icon":""} end-actions ${t=>"end"===t.imagePosition?"image-end":""}">
        ${(0,xt.UN)()}
        ${_t("ad-choice-icon")}
        ${(0,n.z)(t=>t.isAdFeedbackV1Enabled&&!!t.feedbackUrl,a.qy`
            <div
                class="see-more-telemetry-wrapper"
                style="display: contents;"
                data-t="${t=>{var e;return null===(e=t.adTelemetryContext)||void 0===e||null===(e=e.seeMore)||void 0===e?void 0:e.getMetadataTag()}}"
            >
                ${c.L}
            </div>
        `)}
    </div>
`,Mt=a.qy`
    <style>
        .card-button:not(:hover) {
            background: transparent;
        }
        msft-content-card fluent-button::part(control) {
            padding: 0;
        }
        msft-content-card.nativeAdVideo-river::part(media) {
            z-index: 2;
        }
        msft-content-card::part(footer) {
            padding: 0 16px 4px;
            margin-bottom: 0;
            height: 40px;
        }
        msft-content-card.wideIconMargin msft-ad-label {
            margin-right: 8px;
        }
        msft-attribution {
            position: relative;
            overflow: hidden;
        }
        /* override default call-to-action style from msft-content-card */
        msft-attribution.native-ad-river-card {
            z-index: unset;
            bottom: 42px;
            position: absolute;
        }
        msft-content-card span.title_1x_2y,
        msft-content-card span.title_1x_3y {
            font-size: 20px;
        }
        msft-content-card.native-ad-content-card::part(heading-container) {
            background: var(--fill-color);
        }
        msft-content-card.native-ad-content-card::part(media-wrapper) {
            height: 156px;
            transition: height  0.3s;
            overflow: hidden;
        }
        fluent-card[id^="native_ad_nativead-river"] msft-content-card.two-lines-heading::part(media-wrapper),
        fluent-card[id^="native_ad_nativead-resriver"] msft-content-card.two-lines-heading::part(media-wrapper) {
            overflow: hidden;
        }
        msft-content-card.two-lines-heading::part(heading) {
            --heading-max-lines: 2;
        }
        msft-content-card.three-lines-heading::part(heading) {
            --heading-max-lines: 3;
        }
    </style>
    <fluent-card
        id="native_ad_${t=>t.id}"
        style="grid-area:${t=>t.gridArea}"
        class="${t=>t.cardSize}"
    >
        <msft-content-card
            href=${t=>t.destinationUrl}
            target="_blank"
            title=${t=>t.disableCardTitleTooltip?"":t.title}
            ?image-priority=${t=>t.imagePriority}
            class="two-lines-heading ${t=>Gt(t)}"
            data-t="${t=>{var e;return t.id&&(null===(e=t.adTelemetryContext)||void 0===e||null===(e=e.nativeAdCard)||void 0===e?void 0:e.getMetadataTag())}}"
            :anchorTelemetryTag=${t=>t.adTelemetryContext&&t.adTelemetryContext.destination&&t.adTelemetryContext.destination.getMetadataTag()}
            ${(0,y.Ib)()}
        >
            ${yt()}
            ${t=>t.videoProps?Lt("media",p.L._300x156,!1):kt("media",p.L._300x156)}
            ${t=>St(t.isProviderInHeader?"attribution":"start-actions",t.destinationUrl,!0)}
            ${zt("end-actions")}
        </msft-content-card>
    </fluent-card>
`,At=a.qy`
    <style>
        .ad-video-player {
            height: var(--ad-video-height);
            width: var(--ad-video-width);
        }

        .ad-video-player.responsive-width {
            height: 100%;
            width: 100%;
        }
        
        msft-ad-label {
            margin-inline-end: 8px;
        }

        msft-article.native-ad, msft-article.${(0,X.nP)("native-ad")} {
            --article-native-ad-heading-margin-bottom: 40px;
            --heading-max-lines: 2;
        }

        msft-article.nativeAdVideo-river::part(image) {
            z-index: 2;
        }

        msft-article.nativeAdVideo-river.responsive-width::part(image) {
            aspect-ratio: 300 / 169;
            height: auto;
            width: 100%;
        }

        msft-article.native-ad.gradient, msft-article.${(0,X.nP)("native-ad")}.gradient {
            --article-native-ad-actions-height: 33px;
            --article-native-ad-heading-margin-bottom: 6px;
        }

        msft-article.native-ad::part(heading), msft-article.${(0,X.nP)("native-ad")}::part(heading) {
            margin-bottom: var(--article-native-ad-heading-margin-bottom);
            color: var(--msft-card-font-color);
        }

        msft-article.native-ad.long-gradient::part(gradient), msft-article.${(0,X.nP)("native-ad")}.long-gradient::part(gradient) {
            top: -55px;
        }

        ${(0,n.z)(t=>t.layoutGap,a.qy`
            msft-article-card[size="_1x_2y"] msft-article::part(gradient) {
                bottom: ${t=>67+t.layoutGap}px;
            }

            msft-article-card[size="_2x_2y"] msft-article::part(gradient) {
                bottom: 0px;
            }
        
            msft-article-card[size="_1x_2y"] {
                --card-height: ${t=>292+t.layoutGap}px;
                --card-width: 300px;
            }

            msft-article-card[size="_2x_2y"] {
                --card-height: ${t=>292+t.layoutGap}px;
                --card-width: ${t=>600+t.layoutGap}px;
            }
        `)}

        msft-article.native-ad msft-attribution, msft-article.${(0,X.nP)("native-ad")} msft-attribution {
            max-width: 100%;
        }

        msft-article.native-ad::part(actions), msft-article.${(0,X.nP)("native-ad")}::part(actions) {
            height: var(--article-native-ad-actions-height);
            align-items: center;
        }

        msft-article-card[size="_1x_2y"] msft-article.native-ad[class*="zoom-ratio"]:not(.no-image)::part(gradient):after,
        msft-article-card[size="_1x_2y"] msft-article.${(0,X.nP)("native-ad")}[class*="zoom-ratio"]:not(.no-image)::part(gradient):after {
            content: "";
            height: 10px;
            width: 100%;
            bottom: -5px;
            position: absolute;
            background: var(--gradient-mid-color);
        }

        msft-article-card[size$="x_2y"] msft-article::part(heading):after {
          top: calc(100% - ${t=>t.fixedCardHeight?304:292+(t.layoutGap||12)}px);
        }

        ${(0,n.z)(t=>t.useTitleFontSize,a.qy`
            msft-article-card msft-article.native-ad, msft-article-card msft-article.${(0,X.nP)("native-ad")} {
                --msft-article-heading-font-size: ${t=>t.useTitleFontSize}px;
                --msft-article-heading-line-height: 24px;
            }

            msft-article-card msft-article.native-ad::part(attribution), msft-article-card msft-article.${(0,X.nP)("native-ad")}::part(attribution) {
                height: 28px;
            }

            msft-article-card[size="_1x_2y"] msft-article.native-ad:not(.no-image)::part(heading), msft-article-card[size="_1x_2y"] msft-article.${(0,X.nP)("native-ad")}:not(.no-image)::part(heading) {
                margin-bottom: 11px;
            }

            msft-article-card[size="_1x_2y"] msft-article.native-ad:not(.no-image)::part(gradient), msft-article-card[size="_1x_2y"] msft-article.${(0,X.nP)("native-ad")}:not(.no-image)::part(gradient) {
                background: linear-gradient(180deg, transparent 0%, var(--gradient-mid-color) 46%, var(--gradient-color) 100%);
                top: 5px;
            }
        `)}

        msft-article-card[size="_1x_2y"] msft-article.native-ad.gradient::part(gradient), msft-article-card[size="_1x_2y"] msft-article.${(0,X.nP)("native-ad")}.gradient::part(gradient) {
            top: 11px;
            background: linear-gradient(180deg, transparent 0%, var(--gradient-mid-color) 56%, var(--gradient-color) 100%);
        }

        msft-article-card[size="_1x_2y"] msft-article[id="native_ad_${t=>t.id}"]::part(gradient), msft-article-card[size="_1x_2y"] msft-article[id="${t=>(0,X.nP)(`native_ad_${t.id}`)}"]::part(gradient) {
            top: 11px;
            background: linear-gradient(180deg, transparent 0%, var(--gradient-mid-color) 56%, var(--gradient-color) 100%);
        }

        ${(0,n.z)(t=>t.isNotNtpRiver,a.qy`
            msft-article-card[size="_1x_2y"] msft-article.native-ad:not(.no-image)::part(gradient), msft-article-card[size="_1x_2y"] msft-article.${(0,X.nP)("native-ad")}:not(.no-image)::part(gradient) {
                top: 18px;
                background: linear-gradient(180deg, transparent 0%, var(--gradient-mid-color) 56%, var(--gradient-color) 100%);
            } 
        `)}

        /** 
         * TODO Cleanup these two styles after the Linear feed right rail transparent-background ad flight is completed 
         * Or clean this up once this the right rail native ads card gets migrated to the NativeAdWC experience
         * Work item tracking the migration - https://msasg.visualstudio.com/Bing_Ads/_workitems/edit/3905327
        **/
        @media (prefers-color-scheme: light) {
            .white-gradient::part(article) {
                background: #f7f7f7;
                --gradient-mid-color: #f7f7f7;
                --gradient-color: #f7f7f7;
                --msft-card-font-color: black;
                --neutral-foreground-rest: #2E2E2E;
            }
        }
        @media (prefers-color-scheme: dark) {
            .white-gradient::part(article) {
                background: #242424;
                --gradient-mid-color: #242424;
                --gradient-color: #242424;
                --msft-card-font-color: white;
                --neutral-foreground-rest: #ffffff;
            }
        }
        
        /**
         *  To support high contrast mode for accessibility
        **/
        @media (forced-colors: active) {
            msft-article.native-ad::part(heading), msft-article.${(0,X.nP)("native-ad")}::part(heading) {
                color: linktext;
            }
        }

    </style>
    <msft-article-card
        style="grid-area:${t=>t.gridArea};"
        size="${t=>t.cardSize}"
        card-fill-color=${t=>t.adBackgroundColor}
        class=""
    >
        <msft-article
            id="${t=>(0,X.s4)(t.enableSafeAds,`native_ad_${t.id}`)}"
            href=${t=>t.destinationUrl}
            target="_blank"
            title=${t=>t.disableCardTitleTooltip?"":t.title}
            ?image-priority=${t=>t.imagePriority}
            class="${t=>Nt(t)}"
            data-t="${t=>{var e;return t.id?null===(e=t.adTelemetryContext)||void 0===e||null===(e=e.nativeAdCard)||void 0===e?void 0:e.getMetadataTag():""}}"
            :anchorTelemetryTag=${t=>t.adTelemetryContext&&t.adTelemetryContext.destination&&t.adTelemetryContext.destination.getMetadataTag()}
            ${(0,y.Ib)()}
        >
            ${$t}
            ${yt()}
            ${t=>t.videoProps?Lt("image",p.L._300x169,!0):kt("image",p.L._300x225)}
            ${t=>t.invertSlugPosition?St("start-action",t.destinationUrl):St("attribution",t.destinationUrl)}
            ${zt("end-action")}
        </msft-article>
    </msft-article-card>
`,Bt=(a.qy`
    <msn-native-ad-article-card :nativeAdArticleData=${t=>({...t,getArticleCardClassnames:Nt,createNativeAdFaviconWithProviderName:$t,renderTitle:yt,renderVideo:Lt,renderImage:kt,renderStartSection:St,renderEndSection:zt})}
    >
    </msn-native-ad-article-card>
`,a.qy`
    <style>
        msft-article-card.msft-homepage-native-ad-card {
            height: 100%;
        }

        msft-article-card.msft-homepage-native-ad-card msft-ad-label {
            margin-inline-end: 8px;
        }

        msft-article-card.msft-homepage-native-ad-card msft-article.native-ad {
            --article-native-ad-heading-margin-bottom: 40px;
            --heading-max-lines: 3;
        }

        msft-article-card.msft-homepage-native-ad-card msft-article.native-ad.gradient {
            --article-native-ad-actions-height: 33px;
            --article-native-ad-heading-margin-bottom: 8px;
        }

        msft-article-card.msft-homepage-native-ad-card msft-article.native-ad::part(text) {
            display: flex;
            flex-flow: column-reverse;
            padding-bottom: 8px;
        }

        msft-article-card.msft-homepage-native-ad-card msft-article.native-ad::part(heading) {
            font-size: var(--msft-article-heading-font-size, 20px);
            margin-bottom: 15px;
        }

        msft-article-card.msft-homepage-native-ad-card msft-article.native-ad::part(gradient) {
            bottom: 0;
        }

        msft-article-card.msft-homepage-native-ad-card msft-article.native-ad::part(attribution) {
            max-width: 100%;
        }

        msft-article-card.msft-homepage-native-ad-card msft-article.native-ad::part(actions) {
            height: var(--article-native-ad-actions-height);
            align-items: center;
        }
    </style>
    <msft-article-card
        style="grid-area:${t=>t.gridArea}"
        size="${t=>t.cardSize}"
        class="msft-homepage-native-ad-card"
    >
        <msft-article
            id="native_ad_${t=>t.id}"
            href=${t=>t.destinationUrl}
            target="_blank"
            title=${t=>t.disableCardTitleTooltip?"":t.title}
            ?image-priority=${t=>t.imagePriority}
            class="${t=>Nt(t)}"
            data-t="${t=>{var e;return t.id?null===(e=t.adTelemetryContext)||void 0===e||null===(e=e.nativeAdCard)||void 0===e?void 0:e.getMetadataTag():""}}"
            :anchorTelemetryTag=${t=>t.adTelemetryContext&&t.adTelemetryContext.destination&&t.adTelemetryContext.destination.getMetadataTag()}
            ${(0,y.Ib)()}
        >
            ${yt()}
            ${kt("image",p.L._300x225)}
            ${t=>St("attribution",t.destinationUrl)}
            ${(0,n.z)(t=>t.gradientType,a.qy`
                <div slot="start-action"></div>
            `)}
            ${zt("end-action")}
        </msft-article>
    </msft-article-card>
`),Ht=a.qy`
    <style>
        msft-content-card.${t=>(0,X.s4)(t.enableSafeAds,"msft-content-native-ad-preview")} {
            height: 100px;
        }
        msft-content-card.${t=>(0,X.s4)(t.enableSafeAds,"msft-content-native-ad-preview")}::part(body) {
            height: 100%;
        }
        msft-content-card.${t=>(0,X.s4)(t.enableSafeAds,"msft-content-native-ad-preview")} .card-button:not(:hover) {
            background: transparent;
        }
        msft-content-card.${t=>(0,X.s4)(t.enableSafeAds,"msft-content-native-ad-preview")} fluent-button::part(control) {
            padding: 0;
        }
        msft-content-card.${t=>(0,X.s4)(t.enableSafeAds,"msft-content-native-ad-preview")}::part(footer) {
            padding: 0 16px 4px;
            margin-bottom: 0;
            height: 40px;
        }
        msft-content-card.${t=>(0,X.s4)(t.enableSafeAds,"msft-content-native-ad-preview")} msft-attribution {
            position: relative;
            overflow: hidden;
            margin-top: 5px;
            margin-bottom: 0;
            max-height: 18px;
        }
        msft-content-card.${t=>(0,X.s4)(t.enableSafeAds,"msft-content-native-ad-preview")}::part(heading-container) {
            padding: 8px;
            padding-bottom: 0;
            display: flex;
            flex-flow: column-reverse;
            height: 100%;
            box-sizing: border-box;
            justify-content: space-between;
        }
        msft-content-card.${t=>(0,X.s4)(t.enableSafeAds,"msft-content-native-ad-preview")}.provider-top::part(heading-container) {
            flex-flow: column;
            height: 80px;
            justify-content: flex-start;
            gap: 4px;
        }

        ${t=>"end"===t.imagePosition?`\n        msft-content-card.${(0,X.s4)(t.enableSafeAds,"msft-content-native-ad-preview")}::part(media-wrapper) {\n            float: right;\n            margin-top: unset;\n            margin: 8px 8px 0px 0px;\n            border-radius: calc(var(--content-card-corner-radius, 2) * 2px);\n            overflow: hidden;\n            max-height: 84px;\n        }\n        :host([direction="rtl"]) msft-content-card.${(0,X.s4)(t.enableSafeAds,"msft-content-native-ad-preview")}::part(media-wrapper) {\n            float: left;\n            margin: 8px 0px 0px 8px;\n        }\n            `:`\n        msft-content-card.${(0,X.s4)(t.enableSafeAds,"msft-content-native-ad-preview")}::part(media-wrapper) {\n            float: left;\n            margin-top: unset;\n            margin: 8px 0 0px 8px;\n            border-radius: calc(var(--content-card-corner-radius, 2) * 2px);\n            overflow: hidden;\n            max-height: 84px;\n        }\n        :host([direction="rtl"]) msft-content-card.${(0,X.s4)(t.enableSafeAds,"msft-content-native-ad-preview")}::part(media-wrapper) {\n            float: right;\n            margin: 8px 8px 8px 0;\n        }\n            `}
        msft-content-card.${t=>(0,X.s4)(t.enableSafeAds,"msft-content-native-ad-preview")}::part(heading) {
            font-size: 14px;
            line-height: 20px;
        }  
        msft-content-card.${t=>(0,X.s4)(t.enableSafeAds,"msft-content-native-ad-preview")} msft-attribution {
            position: relative;
            overflow: hidden;
        }
        msft-content-card.${t=>(0,X.s4)(t.enableSafeAds,"msft-content-native-ad-preview")}.provider-top msft-attribution {
            margin-top: 0px;
        }
        msft-content-card.${t=>(0,X.s4)(t.enableSafeAds,"msft-content-native-ad-preview")}.provider-top msn-native-ad-ad-label {
            position: absolute;
            left: 122px;
            bottom: 8px;
        }
        msft-content-card.${t=>(0,X.s4)(t.enableSafeAds,"msft-content-native-ad-preview")}.provider-top.image-end msn-native-ad-ad-label {
            left: 10px;
        }
        msft-content-card.${t=>(0,X.s4)(t.enableSafeAds,"msft-content-native-ad-preview")} msft-attribution msft-ad-label {
            margin-inline-end: 6px;
        }
        msft-content-card.${t=>(0,X.s4)(t.enableSafeAds,"msft-content-native-ad-preview")} msft-attribution msn-inline-group::part(inline-item) {
            margin-top: 3px;
            padding-left: 3px;
        }
        /* Set the max-width of attribution when ad choice is displayed */
        ${(0,n.z)(t=>t.adChoiceIconUrl,a.qy`
            msft-content-card.${t=>(0,X.s4)(t.enableSafeAds,"msft-content-native-ad-preview")} msft-attribution {
                /* attribution's width = parent'width - ad choice's width. Because the value of the CSS variable that ad choice's width depends on is different from the value in msft-attribution, we hardcode the ad choice's width here */
                max-width: calc(100% - 32px);
            }
        `)}
        ${(0,n.z)(t=>t.adChoiceIconUrl,a.qy`
            msft-content-card.${t=>(0,X.s4)(t.enableSafeAds,"msft-content-native-ad-preview")} msft-attribution.ad-label-and-choice-hidden {
                max-width: 100%;
            }
        `)}
    </style>
    <fluent-card
        style="grid-area:${t=>t.gridArea}"
        class="${t=>t.cardSize} ${t=>(0,X.s4)(t.enableSafeAds,"msft-content-native-ad-preview")}-wrapper"
    >
    <msft-content-card
        id="contentcard_${t=>(0,X.s4)(t.enableSafeAds,t.id)}"
        href=${t=>t.destinationUrl}
        target="_blank"
        title=${t=>t.disableCardTitleTooltip?"":t.title}
        style="--heading-max-lines: ${t=>t.headerMaxLines||3}"
        class="${t=>(0,X.s4)(t.enableSafeAds,"msft-content-native-ad-preview")} ${t=>Gt(t)}"
        style="--heading-max-lines: ${t=>t.hasAnyInlineDecoration?2:3}"
        data-t="${t=>{var e;return t.id?null===(e=t.adTelemetryContext)||void 0===e||null===(e=e.nativeAdCard)||void 0===e?void 0:e.getMetadataTag():""}}"
        :anchorTelemetryTag=${t=>t.adTelemetryContext&&t.adTelemetryContext.destination&&t.adTelemetryContext.destination.getMetadataTag()}
        ${(0,y.Ib)()}
    >
        ${yt()}
        ${kt("media",p.L._104x84)}
        ${t=>St("attribution",t.privacyUrl)}
        ${zt("end-actions")}
        </msft-content-card>
    </fluent-card>
`,It=a.qy`
    <fluent-card
        id="${t=>(0,X.s4)(t.enableSafeAds,`native_ad_${t.id}`)}"
        style="grid-area:${t=>t.gridArea}"
        class="${t=>t.cardSize}"
    >
        <msn-native-ad-hp-stripe-card 
            :nativeAdHpStripeData=${t=>({...t,renderImageTag:Ct})}
        >
        </msn-native-ad-hp-stripe-card>
    </fluent-card>
`,Et=a.qy`
    <msn-native-ad-card-template-facade
        :data=${t=>({...t,renderStartSection:St,renderEndSection:zt,renderTitle:yt,renderImage:kt,renderImageTag:Ct,nativeAdBeacons:y.Ib,getContentCardClassnames:Gt,seeMoreButtonTemplate:c.L,ContentCardImageSizes:p.L,FeedLayoutCardSize:s.uE})}>
    </msn-native-ad-card-template-facade>
`,Dt=a.qy`
    <style>
        .amplify-ad .end-actions {
            z-index: unset;
        }

        .amplify-ad a.ad-choice {
            display: inline-flex; min-width: calc((var(--base-height-multiplier) + var(--density)) * var(--design-unit) * 1px);
            bottom:23px;
            left:264px;
            position:absolute;
            z-index: 2;
        }

        .amplify-ad a.ad-choice.ad-choice-hidden{
            max-width: 0px;
            min-width: 0px;
            visibility: hidden;
            width: 0;
            padding: 0;
            margin: 0;
            border: 0;
        }

        .amplify-ad a.ad-choice svg {
            display: block; margin: auto;
        }

        div.ad-label-bottom {
            bottom:22px;
            color:rgba(255,255,255,0.7);
            font-size:12px;
            left:138px;
            pointer-events: none;
            position:absolute;
            width:123px;
        }

        fluent-button.join-now {
            backdrop-filter:blur(3px);
            background:rgba(255,255,255,0.09);
            border-radius:16px;
            bottom:16px;
            height:28px;
            width:105px;
        }

        ${(0,n.z)(t=>t.useProng2AmplifyCardTemplate,a.qy`
            fluent-button.boost-cta {
                bottom:5px;
                height:28px;
                width:105px;
                margin-inline-start: 85px;
                background-color: unset;
                width: 71px;
                height: 16px;
                font-weight: 400;
                font-size: 14px;
                line-height: 20px;
                position: relative;
                color: #003E92;
            }

            div.boost-attribution {
                position: absolute;
                width: 300px;
                height: 48px;
                left: 0px;
                bottom: 256px;
            }

            span.boost-logo {
                position: absolute;
                left: 5.33%;
                right: 89.33%;
                top: 28.33%;
                bottom: 33.33%;
            }

            span.boost-business {
                position: absolute;
                left: 13.33%;
                right: 24.33%;
                top: 33.33%;
                bottom: 33.33%;
                width: 200px;
                height: 16px;
                overflow: hidden;
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 16px;
                opacity: 0.8956;
            }

            .boost-attribution .moreActionButton {
                position: absolute;
                left: 86.33%;
                top: 25.33%;
                bottom: 33.33%;
                z-index: 2;
                width: 24px;
                height: 24px;
                min-width: 24px;
                border-radius: 6px;
                --control-corner-radius: var(--more-actions-corner-radius);
            }

            .boost-attribution .moreActionButton:hover {
                background-color: var(--neutral-fill-hover);
            }

            .boost-attribution .moreActionButton:not(:hover) {
                background-color: transparent;
            }

            span.boost-title {
                width: 268px;
                height: 48px;   
                font-style: normal;
                font-weight: 600;
                font-size: 18px;
                line-height: 24px;
                position: relative;
                overflow: hidden;
                display: -webkit-box;    
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                margin-bottom: 6px;
            }

            msft-article-card[size="_1x_2y"] msft-article.amplify-ad:not(.no-image)::part(gradient), msft-article-card[size="_1x_2y"] msft-article.${(0,X.nP)("amplify-ad")}:not(.no-image)::part(gradient) {
                left: unset;
            } 

            msft-article-card[size="_1x_2y"] msft-article.amplify-ad:not(.no-image), msft-article-card[size="_1x_2y"] msft-article.${(0,X.nP)("amplify-ad")}:not(.no-image) {
                box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
                border-radius: 8px;
            }

            @media (prefers-color-scheme: light) {
                msft-article-card[size="_1x_2y"] msft-article.amplify-ad:not(.no-image), msft-article-card[size="_1x_2y"] msft-article.${(0,X.nP)("amplify-ad")}:not(.no-image) {
                    background: linear-gradient(124.33deg, rgba(255, 255, 255, 0) -20.01%, #E1FAFF 96.49%), #FFFFFF;
                    --neutral-foreground-rest: #1A1A1A;
                    --neutral-fill-hover: #e5e5e5;
        
                }
            }
    
            @media (prefers-color-scheme: dark) {
                msft-article-card[size="_1x_2y"] msft-article.amplify-ad:not(.no-image), msft-article-card[size="_1x_2y"] msft-article.${(0,X.nP)("amplify-ad")}:not(.no-image) {
                    background: linear-gradient(122.8deg, rgba(0, 0, 0, 0.5) -40.78%, #0B282E 74.4%), linear-gradient(124.33deg, rgba(255, 255, 255, 0) -20.01%, #E1FAFF 96.49%), #FFFFFF;
                    --neutral-fill-hover: #484848;
                }
                
                fluent-button.boost-cta {
                    color: #60CDFF;
                }
            }
        `)}
    </style>
    <msft-article-card
        style="grid-area:${t=>t.gridArea};"
        size="${t=>t.cardSize}"
        card-fill-color=${t=>t.adBackgroundColor}
    >
        <msft-article
            id="native_ad_${t=>t.id}"
            href=${t=>t.destinationUrl}
            target="_blank"
            title=${t=>t.disableCardTitleTooltip?"":t.title}
            ?image-priority=${t=>t.imagePriority}
            class="amplify-ad ${t=>Nt(t)}"
            data-t="${t=>{var e;return t.id?null===(e=t.adTelemetryContext)||void 0===e||null===(e=e.nativeAdCard)||void 0===e?void 0:e.getMetadataTag():""}}"
            :anchorTelemetryTag="${t=>t.adTelemetryContext&&t.adTelemetryContext.destination&&t.adTelemetryContext.destination.getMetadataTag()}"
            ${(0,y.Ib)(!0,!0,!1)}
        >
            ${Zt="boost-attribution",a.qy`
    ${(0,n.z)(t=>t.useProng2AmplifyCardTemplate,a.qy`
        <div class=${Zt}>
            <span class="boost-logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="1.59998" y="1.6" width="5.6" height="5.6" fill="#F25022"/>
                    <rect x="8.79999" y="1.6" width="5.6" height="5.6" fill="#80BA01"/>
                    <rect x="8.79999" y="8.8" width="5.6" height="5.6" fill="#FFB902"/>
                    <rect x="1.59998" y="8.8" width="5.6" height="5.6" fill="#02A4EF"/>
                </svg>
            </span>
            <span class="boost-business">
                ${t=>t.prong2AmplifyBusinessName}
            </span>
            ${Tt("amplify-action-button")}
        </div>
    `)}
`}
            <span class=${t=>t.useProng2AmplifyCardTemplate?"boost-title":""} style="font-size:18px;">${t=>t.title}</span>
            ${kt("image",p.L._300x225)}
            <div slot="end-action" class="end-actions">
                <fluent-button aria-label=${t=>t.localizedStrings&&t.localizedStrings.nativeAdLearnMoreText} role="button" class=${t=>t.useProng2AmplifyCardTemplate?"boost-cta":"join-now"}>
                    ${t=>t.localizedStrings&&t.localizedStrings.nativeAdLearnMoreText}
                </fluent-button>
                <div class="ad-label-bottom">${t=>t.useProng2AmplifyCardTemplate?"":t.localizedStrings&&t.localizedStrings.nativeAdPromotedByText}</div>
                ${_t("ad-choice")}
            </div>
        </msft-article>
    </msft-article-card>
`;var Zt;const Vt=a.qy`
    <msn-native-ad-wc
        id="native_ad_${t=>t.id}"
        class="native-ad-wce-wrapper"
        style="grid-area:${t=>t.gridArea};background: rgb(46, 46, 46);border-radius: 6px;"
        data-t="${t=>{var e;return t.id?null===(e=t.adTelemetryContext)||void 0===e||null===(e=e.nativeAdCard)||void 0===e?void 0:e.getMetadataTag():""}}"
        ${(0,y.Ib)(!1,!0)}
        :configRef=${t=>{var e;return null===(e=t.nativeAdWC)||void 0===e?void 0:e.configRef}}
        :localizedStrings=${t=>t.localizedStrings}
        :adData=${t=>t}
    ></msn-native-ad-wc>
`,Pt=a.qy`
    <cs-native-ad-card
        class="card-container"
        config-instance-src="${t=>t.configInstanceSrc||"default"}"
        :displaySettings=${t=>t.displaySettings}
        :data=${t=>t}
        style="grid-area:${t=>t.gridArea}"
        size="${t=>t.cardSize}"
        tabIndex="${t=>t.customTabIndex??0}"
    >
    </cs-native-ad-card>
`,Ut=t=>t&&t.useProng2AmplifyCardTemplate,Ot=a.qy`
    ${t=>Rt(t)}
`,Rt=t=>{const e="msft-content-card"===(i=t,(0,w.A)(i,"template.templateType","msft-content-card"));var i;const a=t.useHomepageCardTemplate,n=t.usePreviewCardTemplate,o=t.useArticleCardTemplate,r=t.useArticleCardTemplate&&t.useSuperAdCard,s=t.nativeAdWC&&!t.disableAdsUXExperiment;return s||(N(),Q(),at(),mt()),t.imageData||t.videoProps||t.visualReadinessCallback&&t.visualReadinessCallback(),(t=>t&&t.useAmplifyCardTemplate&&t.id&&t.id.indexOf("amplifyad")>=0)(t)||Ut(t)?Dt:t.videoProps?At:s?Vt:(0,b.RB)(t)&&!t.disableAdsUXExperiment?Et:e||(0,b.EW)(t)||t.disableAdsUXExperiment?"partners-stripe"==(c=t.region)||"promotion-stripe"==c||"recommended-stripe"==c||"shopping-stripe"==c?It:a?Bt:n?Ht:o?r?Pt:At:Mt:((0,l.c_)(void 0,d.Ikd,"renderNativeAdCardTemplate failed to find a template for display and fell back to nativeAdArticleCardTemplate",JSON.stringify(t)),At);var c},Nt=t=>{let e=(0,X.s4)(t.enableSafeAds,"native-ad");return t.gradientType&&(e+=" gradient",t.gradientType===bt.Long&&(e+=" long-gradient")),t.videoProps&&(e+=" nativeAdVideo-river"),t.useWhiteGradient&&(e+=" white-gradient"),t.responsiveWidth&&(e+=" responsive-width"),e},Gt=t=>{const e=[];return(t.isProviderInHeader||t.isProviderInFooter)&&e.push("wideIconMargin"),t.providerAboveHeader&&e.push("provider-top"),"end"===t.imagePosition&&e.push("image-end"),t.videoProps&&e.push("nativeAdVideo-river"),t.isThreeLineHeading&&e.push("three-lines-heading"),e.join(" ")}},66196:function(t,e,i){i.d(e,{e:function(){return z}});var a=i(56911),n=i(60815),o=i(38493),r=i(65022),l=i(44449),d=i(17254);function s(t){let e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";if(0===t||1===t)return arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(t>1&&t<=30)return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:"").replace("{0}",String(t));if(t>30){const i=(null===d.T3||void 0===d.T3?void 0:d.T3.CurrentMarket)||"en-us",a=new Date(Date.now());a.setDate(a.getDate()+t);const n=a.toLocaleDateString(i);return e.replace("{0}",n)}return""}var c=i(41626);let p=class extends c.t{constructor(){super(...arguments),this.show=!1,this.disableTimeout=!1,this.showToast=!1,this.arrowOffset="",this.duration=1e3,this.marginLeft="0",this.isDrConfig=!1,this.displayedText="",this.promotionalText="",this.redemptionCode="",this.daysFromExpiration="",this.destinationURL="",this.underneathPopUp=!1,this.displayExpirationDate=!1,this.timer=Date.now(),this.handleOnCopyClick=t=>()=>{this.showToast=!0,setTimeout(()=>this.showToast=!1,1e3)}}connectedCallback(){super.connectedCallback();const{nativeAdExpiresToday:t="",nativeAdExpiresInDays:e="",nativeAdExpiresOnCertainDay:i="",nativeAdExpiresTodayPopupWithCode:a="",nativeAdExpiresInDaysPopupWithCode:n="",nativeAdExpiresOnCertainDayPopupWithCode:o="",nativeAdExpiresTodayPopupWithoutCode:r="",nativeAdExpiresInDaysPopupWithoutCode:l="",nativeAdExpiresOnCertainDayPopupWithoutCode:d=""}=this.localizedStrings;this.expirationDate=s(Number(this.daysFromExpiration),t,e,i),this.expirationDatePopup=s(Number(this.daysFromExpiration),this.redemptionCode?a:r,this.redemptionCode?n:l,this.redemptionCode?o:d)}handlePopupWindowClick(t,e){"shop-btn"!==e.event.target.id&&e.event.stopPropagation()}onMouseEnter(t){var e;const i=null===(e=t.shadowRoot)||void 0===e||null===(e=e.querySelector("decoration-special-offer"))||void 0===e||null===(e=e.shadowRoot)||void 0===e?void 0:e.querySelector(".special-offer-btn-container"),a=(null==i?void 0:i.offsetWidth)/2,n=t.offsetLeft;this.arrowOffset=this.arrowOffset||a+n-8+"px",clearTimeout(this.timer),this.show=!0}onMouseLeave(){this.handleHide()}onPopupWindowMouseEnter(){clearTimeout(this.timer),this.disableTimeout=!0}onPopupWindowMouseLeave(){this.disableTimeout=!1,this.handleHide()}handleHide(){this.disableTimeout||(this.timer=window.setTimeout(()=>{this.show=!1},this.duration))}};(0,a.Cg)([n.sH],p.prototype,"show",void 0),(0,a.Cg)([n.sH],p.prototype,"disableTimeout",void 0),(0,a.Cg)([n.sH],p.prototype,"showToast",void 0),(0,a.Cg)([n.sH],p.prototype,"arrowOffset",void 0),(0,a.Cg)([o.CF],p.prototype,"duration",void 0),(0,a.Cg)([(0,o.CF)({attribute:"margin-left"})],p.prototype,"marginLeft",void 0),(0,a.Cg)([(0,o.CF)({mode:"boolean",attribute:"is-dr-config"})],p.prototype,"isDrConfig",void 0),(0,a.Cg)([(0,o.CF)({attribute:"displayed-text"})],p.prototype,"displayedText",void 0),(0,a.Cg)([(0,o.CF)({attribute:"promotional-text"})],p.prototype,"promotionalText",void 0),(0,a.Cg)([(0,o.CF)({attribute:"redemption-code"})],p.prototype,"redemptionCode",void 0),(0,a.Cg)([(0,o.CF)({attribute:"days-from-expiration"})],p.prototype,"daysFromExpiration",void 0),(0,a.Cg)([(0,o.CF)({attribute:"destination-url"})],p.prototype,"destinationURL",void 0),(0,a.Cg)([(0,o.CF)({attribute:"underneath-pop-up",mode:"boolean"})],p.prototype,"underneathPopUp",void 0),(0,a.Cg)([(0,o.CF)({mode:"boolean",attribute:"display-expiration-date"})],p.prototype,"displayExpirationDate",void 0),(0,a.Cg)([n.sH],p.prototype,"localizedStrings",void 0),(0,a.Cg)([n.sH],p.prototype,"expirationDate",void 0),(0,a.Cg)([n.sH],p.prototype,"expirationDatePopup",void 0),p=(0,a.Cg)([(0,l.TA)(r.PDj,"msn-native-ad-special-offer")],p);var h=i(92011),g=i(74849),u=i(59957),m=i(75096);const v=g.A` :host{--accent-fill-rest:#0078D4;--accent-fill-hover:#006CBE;--accent-fill-active:#1683D8;--accent-fill-focus:#888888}.container{display:flex;flex-direction:column}.description{white-space:initial;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;overflow:hidden}.text-section{display:flex;padding:12px 12px 0px 12px;flex-direction:column;font-size:12px}.action-section{display:flex;padding:12px;justify-content:space-between}.title{font-weight:bold;white-space:initial;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.shop-btn{background:var(--accent-fill-rest);color:#FFFFFF;width:68px;height:32px;border-radius:20px;font-size:12px;text-align:center;line-height:32px;cursor:pointer}.shop-btn:hover{background:var(--accent-fill-hover)}.shop-btn:active{background:var(--accent-fill-active)}.shop-btn:focus{background:var(--accent-fill-focus)}`.withBehaviors(new u.e("layoutStyle"),new m.X(["arrowOffset","marginLeft","isDrConfig"],t=>g.A` .popup-window{margin-left:${t.marginLeft}px;color:#000000;cursor:default;z-index:1;background-color:#FFFFFF;border-radius:4px;margin-bottom:11px;width:276px;min-height:102px;max-height:140px;box-shadow:0px 0.6px 1.8px rgb(0 0 0 / 10%),0px 3.2px 7.2px rgb(0 0 0 / 13%)}.underneathPopUp{position:fixed;margin-top:32px}.popup-window::after{content:"";width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;${(t=>t.underneathPopUp?"border-bottom":"border-top")(t)}: 8px solid #FFFFFF;
                    position: absolute;
                    margin-inline-start: ${t.arrowOffset};
                    bottom: ${(t=>t.isDrConfig?"":t.underneathPopUp?"101":"26")(t)}px;
                }
            `));var f=i(96950),b=i(91640);let x=class extends h.L{constructor(){super(...arguments),this.code="",this.copyText=""}};(0,a.Cg)([o.CF],x.prototype,"code",void 0),(0,a.Cg)([n.sH],x.prototype,"onCopyClick",void 0),(0,a.Cg)([(0,o.CF)({attribute:"copy-text"})],x.prototype,"copyText",void 0),x=(0,a.Cg)([(0,l.TA)(r.PDj,"msn-native-ad-copy-input")],x);const $=g.A` .input-container{display:flex;height:32px;width:172px;justify-content:space-between;background:#EDEDED;border-radius:4px;align-items:center;font-size:14px;cursor:initial}.promotion-code{margin-left:12px}.copy-icon{margin-right:12px;cursor:pointer}`,w=f.qy`
    <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5.50293V14H3.42857V11.375H0V0H5.75223L8.32366 2.625H9.1808L12 5.50293ZM9.42857 5.25H10.5335L9.42857 4.12207V5.25ZM3.42857 2.625H7.10491L5.39062 0.875H0.857143V10.5H3.42857V2.625ZM11.1429 6.125H8.57143V3.5H4.28571V13.125H11.1429V6.125Z" fill="#0078D4"/>
    </svg>
`,y=f.qy`<div class="input-container"><div class="promotion-code">${t=>t.code}</div><div class="copy-icon" title=${t=>t.copyText} aria-label=${t=>t.copyText} @click=${t=>(navigator.clipboard.writeText(t.code),t.onCopyClick(),!0)}>${w}</div></div>`;let C=class extends x{};C=(0,a.Cg)([(0,h.E)({name:"msn-native-ad-copy-input",template:y,styles:$})],C);var k=i(7373);let L=class extends h.L{constructor(){super(...arguments),this.duration=1e3,this.show=!1,this.message="Copied!"}};(0,a.Cg)([o.CF],L.prototype,"duration",void 0),(0,a.Cg)([(0,o.CF)({mode:"boolean"})],L.prototype,"show",void 0),(0,a.Cg)([o.CF],L.prototype,"message",void 0),(0,a.Cg)([o.CF],L.prototype,"position",void 0),(0,a.Cg)([o.CF],L.prototype,"top",void 0),(0,a.Cg)([o.CF],L.prototype,"left",void 0),L=(0,a.Cg)([(0,l.TA)(r.PDj,"msn-native-ad-toast")],L);const F=g.A` .toast{display:flex;width:81px;height:38px;background:#3B3B3B;border-radius:6px;justify-content:center;align-items:center;color:white;font-size:14px;font-weight:normal;box-shadow:0px 12.8px 28.8px rgba(0,0,0,0.13),0px 0px 9.2px rgba(0,0,0,0.11)}`.withBehaviors(new m.X(["position","top","left"],t=>g.A` :host{position:${t.position};
                    top: ${t.top}px; 
                    left: ${t.left}px;
                }
            `)),S=f.qy` ${(0,b.z)(t=>t.show,f.qy`<div class="toast">${t=>t.message}</div>`)}
`;let _=class extends L{};_=(0,a.Cg)([(0,h.E)({name:"msn-native-ad-toast",template:S,styles:F})],_),k.a;const T=f.qy` ${(0,b.z)(t=>t.show,f.qy`<msn-native-ad-toast show=${t=>t.showToast} position="fixed" top="7" left="110"></msn-native-ad-toast><div class="popup-window ${t=>t.underneathPopUp?"underneathPopUp":""}" @click=${(t,e)=>t.handlePopupWindowClick(t,e)} @mouseenter=${t=>t.onPopupWindowMouseEnter()} @mouseleave=${t=>t.onPopupWindowMouseLeave()}><div class="container"><div class="text-section"><div class="title">${t=>t.promotionalText}</div><div class="description">${t=>t.expirationDatePopup}${t=>{var e;return t.redemptionCode?null===(e=t.localizedStrings)||void 0===e?void 0:e.nativeAdSpecialOfferEnterCode:""}}</div></div><div class="action-section">${(0,b.z)(t=>t.redemptionCode,f.qy`<msn-native-ad-copy-input copy-text=${t=>{var e;return null===(e=t.localizedStrings)||void 0===e?void 0:e.nativeAdSpecialOfferCopy}} :onCopyClick=${t=>t.handleOnCopyClick(t)} code=${t=>t.redemptionCode}></msn-native-ad-copy-input>`)}<div id="shop-btn" class="shop-btn" title=${t=>{var e;return null===(e=t.localizedStrings)||void 0===e?void 0:e.nativeAdSpecialOfferShop}} aria-label=${t=>{var e;return null===(e=t.localizedStrings)||void 0===e?void 0:e.nativeAdSpecialOfferShop}}>${t=>{var e;return null===(e=t.localizedStrings)||void 0===e?void 0:e.nativeAdSpecialOfferShop}}</div></div></div></div>`)}<decoration-special-offer @mouseenter=${(t,e)=>t.onMouseEnter(t)} @mouseleave=${t=>t.onMouseLeave()} data=${t=>t.displayedText} expiration-date=${t=>t.expirationDate} display-expiration-date=${t=>t.displayExpirationDate}></decoration-special-offer>`;let z=class extends p{};z=(0,a.Cg)([(0,h.E)({name:"msn-native-ad-special-offer",template:T,styles:v})],z)},74333:function(t,e,i){i.d(e,{j:function(){return v}});var a=i(56911),n=i(38493),o=i(65022),r=i(44449),l=i(41626);let d=class extends l.t{constructor(){super(...arguments),this.discountText=""}};(0,a.Cg)([(0,n.CF)({attribute:"discount-text"})],d.prototype,"discountText",void 0),d=(0,a.Cg)([(0,r.TA)(o.PDj,"msn-native-ad-sale-highlight-badge")],d);var s=i(92011),c=i(96950);const p=c.qy`<svg width="12" height="12" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.06591 0.163636L0.156818 5.07273C-0.0522727 5.28182 -0.0522727 5.62727 0.156818 5.84545L4.15682 9.84545C4.36591 10.0545 4.71136 10.0545 4.92955 9.84545L9.83864 4.93636C9.93864 4.82727 9.99318 4.69091 9.99318 4.54545V0.545455C9.99318 0.245455 9.74773 0 9.44773 0H5.44773C5.30227 0 5.16591 0.0545455 5.06591 0.163636ZM8.52955 2.77273C8.475 2.89091 8.40227 3 8.31136 3.09091C8.22046 3.18182 8.12045 3.25455 7.99318 3.3C7.86591 3.34545 7.74773 3.38182 7.61136 3.38182C7.475 3.38182 7.33864 3.35455 7.22045 3.3C7.10227 3.25455 6.99318 3.18182 6.90227 3.09091C6.81136 3 6.73864 2.89091 6.69318 2.77273C6.63864 2.65455 6.61136 2.52727 6.61136 2.38182C6.61136 2.23636 6.63864 2.10909 6.69318 1.99091C6.73864 1.88182 6.81136 1.77273 6.90227 1.69091C6.99318 1.6 7.10227 1.52727 7.22045 1.47273C7.33864 1.41818 7.46591 1.39091 7.61136 1.39091C7.75682 1.39091 7.88409 1.41818 8.00227 1.47273C8.12046 1.52727 8.22955 1.6 8.31136 1.69091C8.40227 1.78182 8.475 1.88182 8.52955 2C8.58409 2.11818 8.61136 2.24545 8.61136 2.39091C8.61136 2.53636 8.575 2.65455 8.52955 2.77273Z" fill="white"/></svg>`,h=c.qy`<a class="sale-highlight-badge" href="javascript:void 0;">${p}<span class="sale-highlight-badge-text">${t=>t.discountText}</span></a>`;var g=i(74849),u=i(59957);const m=g.A`
.sale-highlight-badge{background:#0078D4;border-radius:4px;display:flex;font-size:12px;color:#FFF;align-items:center;padding:2px 8px;line-height:16px;font-family:Segoe UI;box-sizing:border-box;text-decoration:none}.sale-highlight-badge .sale-highlight-badge-text{margin-left:5px;white-space:nowrap}`.withBehaviors(new u.e("layoutStyle"));let v=class extends d{};v=(0,a.Cg)([(0,s.E)({name:"msn-native-ad-sale-highlight-badge",template:h,styles:m})],v)},78465:function(t,e,i){i.d(e,{jt:function(){return $e}});var a=i(56911),n=i(64332);const o=n.DI.createContext();var r=i(18284);const l=(0,r.A)((t,e,i)=>({...t,config:e,strings:i}));var d=i(38493),s=i(65022),c=i(44449),p=i(41626);let h=class extends p.t{constructor(){super(...arguments),this.destinationUrl="",this.title="",this.telemetryMetadata=void 0}connectedCallback(){super.connectedCallback()}};(0,a.Cg)([(0,d.CF)({attribute:"destination-url"})],h.prototype,"destinationUrl",void 0),(0,a.Cg)([(0,d.CF)({attribute:"title"})],h.prototype,"title",void 0),(0,a.Cg)([d.CF],h.prototype,"id",void 0),(0,a.Cg)([(0,d.CF)({attribute:"tel-metadata"})],h.prototype,"telemetryMetadata",void 0),h=(0,a.Cg)([(0,c.TA)(s.PDj,"msn-native-ad-title-mask")],h);var g=i(92011),u=i(74849),m=i(59957);const v=u.A` .native-ad-title-mask a:after{bottom:0;content:"";height:100%;left:0;position:absolute;right:0;top:0;width:100%}`.withBehaviors(new m.e("layoutStyle"));var f=i(96950);const b=f.qy`<div class="native-ad-title-mask" title = ${t=>t.title}><a target = "_blank" href = ${t=>t.destinationUrl} title=${t=>t.title} class="heading" id="heading" data-t="${t=>t.telemetryMetadata}"></a></div>`;let x=class extends h{};x=(0,a.Cg)([(0,g.E)({name:"msn-native-ad-title-mask",template:b,styles:v})],x);var $=i(91278);var w=i(91640),y=i(60815);let C=class extends p.t{constructor(){super(...arguments),this.src="",this.rlink="",this.id="",this.altText="",this.width="300px",this.height="225px",this.isHovered=!1,this.imageMaskOn="off",this.imageMaskOpacity="0.5",this.trimBottom=!1,this.objectFit="",this.useDropShadow=!1,this.useTransparentBackground=!1,this.imageMaskLeft="",this.imageMaskTop="",this.imageMaskWidth="",this.imageMaskHeight="",this.patternMode="",this.darkThemeMediaQuery=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)"),this.isDarkMode=this.darkThemeMediaQuery.matches,this.themeModeSwitchHandler=()=>{this.isDarkMode=!this.isDarkMode}}disconnectedCallback(){super.disconnectedCallback(),this.patternMode&&this.darkThemeMediaQuery.removeEventListener("change",this.themeModeSwitchHandler)}connectedCallback(){super.connectedCallback(),this.patternMode&&this.darkThemeMediaQuery.addEventListener("change",this.themeModeSwitchHandler)}};(0,a.Cg)([d.CF],C.prototype,"src",void 0),(0,a.Cg)([d.CF],C.prototype,"rlink",void 0),(0,a.Cg)([d.CF],C.prototype,"id",void 0),(0,a.Cg)([(0,d.CF)({attribute:"alt-text"})],C.prototype,"altText",void 0),(0,a.Cg)([d.CF],C.prototype,"width",void 0),(0,a.Cg)([d.CF],C.prototype,"height",void 0),(0,a.Cg)([(0,d.CF)({mode:"boolean",attribute:"is-hovered"})],C.prototype,"isHovered",void 0),(0,a.Cg)([(0,d.CF)({attribute:"image-mask-on"})],C.prototype,"imageMaskOn",void 0),(0,a.Cg)([(0,d.CF)({attribute:"image-mask-opacity"})],C.prototype,"imageMaskOpacity",void 0),(0,a.Cg)([(0,d.CF)({mode:"boolean",attribute:"trim-bottom"})],C.prototype,"trimBottom",void 0),(0,a.Cg)([(0,d.CF)({attribute:"object-fit"})],C.prototype,"objectFit",void 0),(0,a.Cg)([(0,d.CF)({mode:"boolean",attribute:"use-drop-shadow"})],C.prototype,"useDropShadow",void 0),(0,a.Cg)([(0,d.CF)({mode:"boolean",attribute:"use-transparent-background"})],C.prototype,"useTransparentBackground",void 0),(0,a.Cg)([(0,d.CF)({attribute:"image-mask-left"})],C.prototype,"imageMaskLeft",void 0),(0,a.Cg)([(0,d.CF)({attribute:"image-mask-top"})],C.prototype,"imageMaskTop",void 0),(0,a.Cg)([(0,d.CF)({attribute:"image-mask-width"})],C.prototype,"imageMaskWidth",void 0),(0,a.Cg)([(0,d.CF)({attribute:"image-mask-height"})],C.prototype,"imageMaskHeight",void 0),(0,a.Cg)([(0,d.CF)({attribute:"pattern-mode"})],C.prototype,"patternMode",void 0),(0,a.Cg)([y.sH],C.prototype,"isDarkMode",void 0),C=(0,a.Cg)([(0,c.TA)(s.PDj,"msn-native-ad-product-image")],C);var k=i(75096),L=i(22131),F=i.p+"PESeasonalPattern1.54c0ed65cfdfd67bbf55.png",S=i.p+"PESeasonalPattern2.abd0e69533c81a8ae6ac.png",_=i.p+"PESeasonalPattern1_dark.b4d049102f6d7e3a9a00.png",T=i.p+"PESeasonalPattern2_dark.5569f78efe025efbbc60.png";const z=u.A`
.native-ad-product-image{display:block;width:100%;height:100%;object-fit:cover}.native-ad-product-image-trim-bottom{width:100%;height:100%;object-fit:cover;object-position:top}.off{display:none}.drop-shadow{filter:drop-shadow(0px 4.8px 14.4px rgba(0,0,0,0.18)) drop-shadow(0px 4px 18px rgba(0,0,0,0.15))}`.withBehaviors(new m.e("layoutStyle"),new k.X(["objectFit","isHovered","imageMaskLeft","imageMaskTop","imageMaskOpacity","useTransparentBackground"],t=>{const e="undefined"===t.imageMaskOpacity||null==t.imageMaskOpacity?"0.5":t.imageMaskOpacity;let i="";if("on"===t.imageMaskOn&&t.isHovered){i=` :host::before{content:"";position:fixed;left:${t.imageMaskLeft?`${t.imageMaskLeft}px`:0};\n                        top: ${t.imageMaskTop?`${t.imageMaskTop}px`:0};\n                        width: ${t.imageMaskWidth?`${t.imageMaskWidth}px`:"100%"};\n                        height: ${t.imageMaskHeight?`${t.imageMaskHeight}px`:"100%"};\n                        opacity: ${e};\n                        background: var(--ad-background-color);\n                        animation: fadeIn 0.1s linear;\n                        transition: opacity 0.1s linear;\n                        z-index: 1;\n                    }\n                `}"off"!==t.imageMaskOn&&t.isHovered||(i=" :host::before{opacity:0}");let a="";return t.patternMode&&("patternMode1"===t.patternMode?a=` :host{background-image:url(${t.isDarkMode?_:F});\n                            background-position: 0 0;\n                            background-size: 100% 100%;\n                        }\n                    `:"patternMode2"===t.patternMode&&(a=` :host{background-image:url(${t.isDarkMode?T:S});\n                            background-position: 0 0;\n                            background-size: 100% 100%;\n                        }\n                    `)),u.A` :host img{background:${t.useTransparentBackground?"unset":"#2E2E2E"};
                }

                ${i}

                ${a} .object-fit{object-fit:${t.objectFit}}@keyframes fadeIn{from{opacity:0}to{opacity:${e};
                    }
                }
            `}),(0,L.mr)(u.A` :host::after{background:buttonface}`)),M=f.qy` ${(0,w.z)(t=>!t.patternMode,f.qy`<img src="${t=>t.src}" alt="${t=>t.altText}" class="object-fit ${t=>(t=>{const e=[];return t.useDropShadow&&e.push("drop-shadow"),t.trimBottom?e.push("native-ad-product-image-trim-bottom"):e.push("native-ad-product-image"),e.join(" ")})(t)}" @load=${t=>t.visualReadinessCallback&&t.visualReadinessCallback()} @error=${(t,e)=>{t.visualReadinessCallback&&t.visualReadinessCallback(e.event)}} />`)}
`;let A=class extends C{};A=(0,a.Cg)([(0,g.E)({name:"msn-native-ad-product-image",template:M,styles:z,shadowOptions:{delegatesFocus:!0}})],A);let B=class extends p.t{constructor(){super(...arguments),this.color="",this.paddingTop="78",this.paddingBottom="53",this.isRadialMask="false",this.isFullGradient="false",this.height="",this.useDynamicStyle="",this.background="",this.peSeasonalColorMode=""}connectedCallback(){super.connectedCallback()}};(0,a.Cg)([d.CF],B.prototype,"color",void 0),(0,a.Cg)([d.CF],B.prototype,"paddingTop",void 0),(0,a.Cg)([d.CF],B.prototype,"paddingBottom",void 0),(0,a.Cg)([(0,d.CF)({attribute:"is-radial-mask"})],B.prototype,"isRadialMask",void 0),(0,a.Cg)([(0,d.CF)({attribute:"is-full-gradient"})],B.prototype,"isFullGradient",void 0),(0,a.Cg)([d.CF],B.prototype,"height",void 0),(0,a.Cg)([(0,d.CF)({attribute:"use-dynamic-style"})],B.prototype,"useDynamicStyle",void 0),(0,a.Cg)([d.CF],B.prototype,"background",void 0),(0,a.Cg)([(0,d.CF)({attribute:"pe-seasonal-color-mode"})],B.prototype,"peSeasonalColorMode",void 0),B=(0,a.Cg)([(0,c.TA)(s.PDj,"msn-native-gradient-mask")],B);const H=u.A` .native-ad-mask{cursor:pointer;padding-bottom:45px;padding-top:78px;background:linear-gradient(var(--gradient-end-color) 0%,var(--gradient-mid-color) 40%,var(--ad-background-color) 50%,var(--ad-background-color) 100%)}.use-short-gradient{cursor:pointer;padding-bottom:45px;padding-top:45px;background:linear-gradient(var(--gradient-end-color) 0%,var(--gradient-mid-color) 23%,var(--ad-background-color) 34%,var(--ad-background-color) 100%)}.padding-top-30{padding-top:30px;background:linear-gradient(var(--gradient-end-color) 0%,var(--gradient-mid-color) 40%,var(--ad-background-color) 50%,var(--ad-background-color) 100%)}.padding-top-10{padding-top:10px;background:linear-gradient(var(--gradient-end-color) 0%,var(--gradient-mid-color) 40%,var(--ad-background-color) 50%,var(--ad-background-color) 100%)}.padding-top-90{padding-top:90px;padding-bottom:50px;background:linear-gradient(var(--gradient-end-color) 0%,var(--gradient-mid-color) 50%,var(--ad-background-color) 60%,var(--ad-background-color) 100%)}.padding-top-120{padding-top:120px;padding-bottom:70px;background:linear-gradient(var(--gradient-end-color) 0%,var(--gradient-mid-color) 30%,var(--ad-background-color) 50%,var(--ad-background-color) 100%)}.padding-top-100{padding-top:100px;padding-bottom:70px;background:linear-gradient(var(--gradient-end-color) 0%,var(--gradient-mid-color) 30%,var(--ad-background-color) 50%,var(--ad-background-color) 100%)}.padding-bottom-0{padding-bottom:0px;padding-top:60px;background:linear-gradient(var(--gradient-end-color) 0%,var(--gradient-mid-color) 40%,var(--ad-background-color) 50%,var(--ad-background-color) 100%)}.native-ad-radial-mask{background:radial-gradient(500px 150px ellipse at 50% 0%,var(--gradient-end-color) 0%,var(--gradient-end-color) 30%,var(--gradient-mid-color) 70%,var(--ad-background-color) 100%)}.native-ad-full-gradient{height:100%;background:linear-gradient(var(--gradient-end-color) 0%,var(--ad-background-color) 100%)}@media (prefers-color-scheme:light){.peSeasonalColorMode1{background:linear-gradient(180deg,rgba(255,255,255,0) 0%,rgba(255,255,255,0) 23%,rgba(255,255,255,0.8) 34%,#FFFFFF 100%)}.peSeasonalColorMode2{background:linear-gradient(180deg,rgba(107,193,210,0) 0%,rgba(177,224,233,0.8) 23%,#B1E0E9 34%,#FFFFFF 70%,#EEDEBF 100%)}.peSeasonalColorMode3{background:linear-gradient(180deg,rgba(255,233,176,0) 0%,rgba(255,233,176,0.8) 23%,#FFE9B0 34%,#FFE9B0 100%)}.peSeasonalColorMode4{background:linear-gradient(180deg,rgba(206,159,166,0) 0%,rgba(227,202,206,0.8) 23%,#E3CACE 34%,#FFE9E8 100%)}}@media (prefers-color-scheme:dark){.peSeasonalColorMode1{background:linear-gradient(180deg,rgba(43,43,43,0) 0%,rgba(43,43,43,0.8) 23%,#2B2B2B 34%,#2B2B2B 100%)}.peSeasonalColorMode2{background:linear-gradient(180deg,rgba(11,35,63,0) 0%,rgba(11,35,63,0.8) 23%,#0B233F 34%,#040D17 100%)}.peSeasonalColorMode3{background:linear-gradient(180deg,rgba(58,35,0,0) 0%,rgba(58,35,0,0.8) 23%,#3A2300 34%,#1F1200 100%)}.peSeasonalColorMode4{background:linear-gradient(180deg,rgba(56,0,31,0) 0%,rgba(56,0,31,0.8) 23%,#38001F 34%,#2F0007 100%)}}`.withBehaviors(new m.e("layoutStyle"),new k.X(["height","paddingTop","paddingBottom","background"],t=>{const e=null!=t&&t.background&&"undefined"!==(null==t?void 0:t.background)?t.background:"linear-gradient(var(--gradient-end-color) 0%, var(--ad-background-color) 100%)";return u.A` .native-ad-dynamic-style{height:${t.height}px;
                    padding-top: ${t.paddingTop}px;
                    padding-bottom: ${t.paddingBottom}px;
                    background: ${e};
                }

            `}),(0,L.mr)(u.A` .native-ad-mask,.padding-top-30,.padding-top-10,.padding-top-90,.padding-top-120,.padding-top-100,.padding-bottom-0{background:linear-gradient(transparent 0%,buttonface 50%,buttonface 100%)}.native-ad-dynamic-style{display:none}`)),I=f.qy`<div class=" native-ad-mask ${t=>"true"===t.useDynamicStyle?"native-ad-dynamic-style":""} ${t=>"undefined"!==t.paddingTop?`padding-top-${t.paddingTop}`:""} ${t=>"undefined"!==t.paddingBottom?`padding-bottom-${t.paddingBottom}`:""} ${t=>"true"===t.isRadialMask?"native-ad-radial-mask":""} ${t=>"true"===t.isFullGradient?"native-ad-full-gradient":""} use-short-gradient ${t=>t.peSeasonalColorMode} "><slot></slot></div>`;let E=class extends B{};E=(0,a.Cg)([(0,g.E)({name:"msn-native-gradient-mask",template:I,styles:H,shadowOptions:{delegatesFocus:!0}})],E);var D=i(44070);let Z=class extends p.t{constructor(){super(...arguments),this.title="",this.destinationUrl="",this.isHovered=!1,this.enableTitleClickableOnly=!1,this.isAnaheimDesign=!1,this.useSmallFontSize=!0,this.animationOn=!1,this.fontSize="",this.fontColor="black",this.customStyle="",this.customStyleHovered="",this.lineHeight="",this.fontWeight="",this.fontFamily="inherit",this.isFeedV2=!1,this.isRiverRegion=!1,this.telemetryMetadata=void 0}connectedCallback(){super.connectedCallback(),(0,D.f)(this.fontFamily)}};(0,a.Cg)([d.CF],Z.prototype,"title",void 0),(0,a.Cg)([(0,d.CF)({attribute:"destination-url"})],Z.prototype,"destinationUrl",void 0),(0,a.Cg)([(0,d.CF)({mode:"boolean",attribute:"is-hovered"})],Z.prototype,"isHovered",void 0),(0,a.Cg)([(0,d.CF)({mode:"boolean",attribute:"enable-title-clickable-only"})],Z.prototype,"enableTitleClickableOnly",void 0),(0,a.Cg)([(0,d.CF)({mode:"boolean",attribute:"is-anaheim-design"})],Z.prototype,"isAnaheimDesign",void 0),(0,a.Cg)([(0,d.CF)({mode:"boolean",attribute:"use-small-font-size"})],Z.prototype,"useSmallFontSize",void 0),(0,a.Cg)([(0,d.CF)({mode:"boolean",attribute:"animation-on"})],Z.prototype,"animationOn",void 0),(0,a.Cg)([(0,d.CF)({attribute:"font-size"})],Z.prototype,"fontSize",void 0),(0,a.Cg)([(0,d.CF)({attribute:"font-color"})],Z.prototype,"fontColor",void 0),(0,a.Cg)([(0,d.CF)({attribute:"custom-style"})],Z.prototype,"customStyle",void 0),(0,a.Cg)([(0,d.CF)({attribute:"custom-style-hovered"})],Z.prototype,"customStyleHovered",void 0),(0,a.Cg)([(0,d.CF)({mode:"boolean",attribute:"two-lines-title"})],Z.prototype,"twoLinesTitle",void 0),(0,a.Cg)([(0,d.CF)({mode:"boolean",attribute:"one-line-title"})],Z.prototype,"oneLineTitle",void 0),(0,a.Cg)([(0,d.CF)({attribute:"line-height"})],Z.prototype,"lineHeight",void 0),(0,a.Cg)([(0,d.CF)({attribute:"font-weight"})],Z.prototype,"fontWeight",void 0),(0,a.Cg)([(0,d.CF)({attribute:"font-family"})],Z.prototype,"fontFamily",void 0),(0,a.Cg)([(0,d.CF)({mode:"boolean",attribute:"is-feed-v2"})],Z.prototype,"isFeedV2",void 0),(0,a.Cg)([(0,d.CF)({mode:"boolean",attribute:"is-river-region"})],Z.prototype,"isRiverRegion",void 0),(0,a.Cg)([(0,d.CF)({attribute:"tel-metadata"})],Z.prototype,"telemetryMetadata",void 0),Z=(0,a.Cg)([(0,c.TA)(s.PDj,"msn-native-ad-title")],Z);const V=u.A`
a{padding:0 16px;font-size:20px;font-weight:600}a:focus{outline:0}a::after{content:"";text-overflow:ellipsis;position:fixed;width:100%;height:100%;left:0;right:0;top:0;bottom:0;z-index:4}.native-ad-title{color:var(--neutral-foreground-rest);text-decoration:none;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;word-break:break-word}.is-river-region{margin-bottom:2px}.native-ad-title-hovered{color:var(--neutral-foreground-rest);overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;text-decoration:underline;word-break:break-word}.animation-on{transition:max-height .365s;-webkit-line-clamp:3}.two-lines-title{-webkit-line-clamp:2}.one-line-title{-webkit-line-clamp:1}.is-feed-v2{color:#1A1A1A;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;text-decoration:none;word-break:break-word;line-height:24px}@media (prefers-color-scheme:dark){.is-feed-v2{color:#FFFFFF}}@media (forced-colors:active){.native-ad-title,.native-ad-title-hovered{color:linktext;background:buttonface}}`.withBehaviors(new m.e("layoutStyle"),new k.X(["lineHeight","fontSize","fontWeight","fontFamily"],t=>{const e=` .ad-title{line-height:${t.lineHeight}px;\n                    font-size: ${t.fontSize}px;\n                    font-weight: ${t.fontWeight};\n                    font-family: ${t.fontFamily}}a{font-size:${t.fontSize}px; }\n            `;return u.A`${e}`})),P=f.qy`<a class="${t=>(t=>{let e="ad-title";return t.isFeedV2?(e="is-feed-v2",e):(t.isHovered?e+=" native-ad-title-hovered":e+=" native-ad-title",t.animationOn&&(e+=" animation-on"),t.twoLinesTitle&&(e+=" two-lines-title"),t.oneLineTitle&&(e+=" one-line-title"),t.isRiverRegion&&(e+=" is-river-region"),e)})(t)}" style="${t=>t.isHovered?t.customStyleHovered:t.customStyle}" href=${t=>t.destinationUrl} target="_blank" data-t="${t=>t.telemetryMetadata}">${(0,w.z)(t=>!t.isAnaheimDesign,f.qy`${t=>t.title}`)} ${(0,w.z)(t=>t.isAnaheimDesign&&t.fontSize,f.qy`${t=>t.title}`)} ${(0,w.z)(t=>t.isAnaheimDesign&&!t.fontSize,f.qy` ${(0,w.z)(t=>!t.useSmallFontSize,f.qy`<span class="title">${t=>t.title}</span>`)} ${(0,w.z)(t=>t.useSmallFontSize,f.qy`${t=>t.title}`)} `)}</a>`;let U=class extends Z{};U=(0,a.Cg)([(0,g.E)({name:"msn-native-ad-title",template:P,styles:V})],U);i(22445).MZ;const O=(t,e)=>e&&null!=e.adLabelType?e.adLabelType:t.isGreyAdsLabelEnabled?"greyLabel":t.adSlugGA?"defaultLabel":"greenLabel";let R=class extends p.t{constructor(){super(...arguments),this.url="",this.providerName="",this.whiteProviderName="",this.isNewAdSlugV2=!1,this.isNewAdSlugV2NonDr=!1,this.fontFamily="inherit",this.adSlugGA=!1,this.hasEliteBadge=!1,this.adLabelTextOpacity="0.7",this.fontSize="",this.lineHeight="",this.isFeedV2=!1,this.isMsnHPAdSlug=!1,this.color="var(--neutral-foreground-rest)",this.fontWeight="normal",this.isSeasonal=!1,this.eliteBadgeTitle=""}connectedCallback(){var t;super.connectedCallback(),(0,D.f)(this.fontFamily),this.eliteBadgeTitle=null===(t=this.localizedStrings)||void 0===t?void 0:t.eliteBadgeTitle}};(0,a.Cg)([d.CF],R.prototype,"url",void 0),(0,a.Cg)([(0,d.CF)({attribute:"provider-name"})],R.prototype,"providerName",void 0),(0,a.Cg)([(0,d.CF)({attribute:"white-provider-name"})],R.prototype,"whiteProviderName",void 0),(0,a.Cg)([(0,d.CF)({mode:"boolean",attribute:"is-new-ad-slug-v2"})],R.prototype,"isNewAdSlugV2",void 0),(0,a.Cg)([(0,d.CF)({mode:"boolean",attribute:"is-new-ad-slug-v2-non-dr"})],R.prototype,"isNewAdSlugV2NonDr",void 0),(0,a.Cg)([(0,d.CF)({attribute:"custom-style-class"})],R.prototype,"customStyleClass",void 0),(0,a.Cg)([(0,d.CF)({attribute:"tel-metadata"})],R.prototype,"telemetryMetadata",void 0),(0,a.Cg)([(0,d.CF)({attribute:"font-family"})],R.prototype,"fontFamily",void 0),(0,a.Cg)([(0,d.CF)({mode:"boolean",attribute:"ad-slug-ga"})],R.prototype,"adSlugGA",void 0),(0,a.Cg)([(0,d.CF)({mode:"boolean",attribute:"has-elite-badge"})],R.prototype,"hasEliteBadge",void 0),(0,a.Cg)([(0,d.CF)({attribute:"ad-label-text-opacity"})],R.prototype,"adLabelTextOpacity",void 0),(0,a.Cg)([(0,d.CF)({attribute:"font-size"})],R.prototype,"fontSize",void 0),(0,a.Cg)([(0,d.CF)({attribute:"line-height"})],R.prototype,"lineHeight",void 0),(0,a.Cg)([(0,d.CF)({mode:"boolean",attribute:"is-feed-v2"})],R.prototype,"isFeedV2",void 0),(0,a.Cg)([(0,d.CF)({mode:"boolean",attribute:"is-msn-hp-ad-slug"})],R.prototype,"isMsnHPAdSlug",void 0),(0,a.Cg)([d.CF],R.prototype,"color",void 0),(0,a.Cg)([(0,d.CF)({attribute:"font-weight"})],R.prototype,"fontWeight",void 0),(0,a.Cg)([(0,d.CF)({mode:"boolean",attribute:"is-seasonal"})],R.prototype,"isSeasonal",void 0),(0,a.Cg)([y.sH],R.prototype,"eliteBadgeTitle",void 0),(0,a.Cg)([y.sH],R.prototype,"localizedStrings",void 0),R=(0,a.Cg)([(0,c.TA)(s.PDj,"msn-native-ad-provider-name")],R);var N=i(43103);const G=u.A`
.provider-name-with-elite-badge-wrapper{display:flex;flex-direction:row;align-items:center}.provider-name-with-elite-badge-wrapper .elite-badge-icon{margin-inline-end:4px;display:flex}.white{color:white;text-decoration:inherit}.white-12-flex-layout{color:var(--neutral-foreground-rest);width:100%;font-size:12px;text-overflow:ellipsis;height:24px;line-height:24px}.with-opacity-70{opacity:0.7}.with-opacity-70-non-dr{color:unset;opacity:1}.font-tenorite{font-family:Tenorite,Segoe UI,Segoe UI Midlevel,Arial,Sans-Serif;font-size:14px;position:relative;top:2px}.provider-name-hyper-link:focus-visible{outline-offset:-.1px;outline:auto}`.withBehaviors(new m.e("layoutStyle"),new k.X(["adLabelTextOpacity","lineHight","fontSize"],t=>u.A` .provider-name-hyper-link,.provider-name{display:inline-block;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;vertical-align:bottom;opacity:${t.adLabelTextOpacity};
                font-size: ${t.fontSize}px;
                line-height: ${t.lineHeight}px;
                text-decoration: inherit;
                color: ${t.color&&"undefined"!==t.color?t.color:"var(--neutral-foreground-rest)"};
                font-weight: ${t.fontWeight&&"undefined"!==t.fontWeight?t.fontWeight:"normal"}}@media (forced-colors:active){.provider-name-hyper-link,.provider-name{color:buttontext !important;opacity:1;background:buttonface}}.is-feed-v2{color:#292929}.is-seasonal-style{color:#000000}.is-msn-hp-style{color:#2b2b2b}@media (prefers-color-scheme:dark){.is-feed-v2{color:#FFFFFF}.is-seasonal-style{color:#FFFFFF}}`),new N.N(null,u.A` .is-msn-hp-style{color:var(--neutral-foreground-rest)}`)),W=f.qy`<a href="${t=>t.url}" target="_blank" title="${t=>t.eliteBadgeTitle}" class="elite-badge-icon"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none"><path d="M6.5 0C7.05078 0 7.58203 0.0703125 8.09375 0.210938C8.60547 0.351562 9.08203 0.554688 9.52344 0.820312C9.96484 1.08594 10.3691 1.39844 10.7363 1.75781C11.1035 2.11719 11.418 2.52148 11.6797 2.9707C11.9414 3.41992 12.1426 3.89844 12.2832 4.40625C12.4238 4.91406 12.4961 5.44531 12.5 6C12.5 6.55078 12.4297 7.08203 12.2891 7.59375C12.1484 8.10547 11.9453 8.58203 11.6797 9.02344C11.4141 9.46484 11.1016 9.86914 10.7422 10.2363C10.3828 10.6035 9.97852 10.918 9.5293 11.1797C9.08008 11.4414 8.60156 11.6426 8.09375 11.7832C7.58594 11.9238 7.05469 11.9961 6.5 12C5.94922 12 5.41797 11.9297 4.90625 11.7891C4.39453 11.6484 3.91797 11.4453 3.47656 11.1797C3.03516 10.9141 2.63086 10.6016 2.26367 10.2422C1.89648 9.88281 1.58203 9.47852 1.32031 9.0293C1.05859 8.58008 0.857422 8.10156 0.716797 7.59375C0.576172 7.08594 0.503906 6.55469 0.5 6C0.5 5.44922 0.570312 4.91797 0.710938 4.40625C0.851562 3.89453 1.05469 3.41797 1.32031 2.97656C1.58594 2.53516 1.89844 2.13086 2.25781 1.76367C2.61719 1.39648 3.02148 1.08203 3.4707 0.820312C3.91992 0.558594 4.39844 0.357422 4.90625 0.216797C5.41406 0.0761719 5.94531 0.00390625 6.5 0ZM5.81445 7.89258C5.90039 7.89258 5.98242 7.87695 6.06055 7.8457C6.13867 7.81445 6.20703 7.76758 6.26562 7.70508L8.7793 5.19141C8.83789 5.13281 8.88281 5.06445 8.91406 4.98633C8.94531 4.9082 8.96094 4.82812 8.96094 4.74609C8.96094 4.66016 8.94531 4.57812 8.91406 4.5C8.88281 4.42188 8.83789 4.35547 8.7793 4.30078C8.7207 4.24609 8.65234 4.20117 8.57422 4.16602C8.49609 4.13086 8.41406 4.11328 8.32812 4.11328C8.24609 4.11328 8.16602 4.12891 8.08789 4.16016C8.00977 4.19141 7.93945 4.23633 7.87695 4.29492L5.81445 6.35742L5.12305 5.66602C4.99805 5.54102 4.84766 5.47852 4.67188 5.47852C4.58594 5.47852 4.50391 5.49414 4.42578 5.52539C4.34766 5.55664 4.2793 5.60352 4.2207 5.66602C4.16211 5.72852 4.11719 5.79492 4.08594 5.86523C4.05469 5.93555 4.03711 6.01758 4.0332 6.11133C4.0332 6.19336 4.04883 6.27344 4.08008 6.35156C4.11133 6.42969 4.1582 6.5 4.2207 6.5625L5.36328 7.70508C5.42188 7.76367 5.49023 7.80859 5.56836 7.83984C5.64648 7.87109 5.72852 7.88867 5.81445 7.89258Z" fill="white"/></svg></a>`,j=f.qy`<a href="${t=>t.url}" class="${t=>"Tenorite"===t.fontFamily?"font-tenorite":""} ${t=>"true"===t.whiteProviderName?"white":`provider-name-hyper-link ${t.customStyleClass||""} ${t.isNewAdSlugV2&&!t.keepOpacity?"with-opacity-70":""} ${t.isNewAdSlugV2NonDr||!t.adSlugGA?"with-opacity-70-non-dr":""}`} ${t=>t.isFeedV2?"is-feed-v2":""} ${t=>t.isMsnHPAdSlug?"is-msn-hp-style":""} ${t=>t.isSeasonal?"is-seasonal-style":""}" target="_blank" title=" ${t=>t.providerName}" data-t="${t=>t.telemetryMetadata}">${t=>t.providerName}</a>`,J=f.qy` ${(0,w.z)(t=>t.hasEliteBadge,f.qy`<span class="provider-name-with-elite-badge-wrapper">${W} ${j}</span>`)} ${(0,w.z)(t=>!t.hasEliteBadge,j)}
`;let Q=class extends R{};Q=(0,a.Cg)([(0,g.E)({name:"msn-native-ad-provider-name",template:J,styles:G})],Q);var Y=i(17312),q=i(75344);let K=class extends p.t{constructor(){super(...arguments),this.adChoiceIconUrl="",this.nativeAdAdChoiceText="",this.telemetryMetadata="",this.isFeedV2=!1}connectedCallback(){super.connectedCallback();const{iconStyles:t}=this,e=[];t&&Object.keys(t).forEach(i=>{e.push((0,q.MD)(i,t[i]))}),this.iconStyleStr=u.A`:host .native-ad-ad-choice {${e.length?e.join(";"):""}}`}};(0,a.Cg)([(0,d.CF)({attribute:"ad-choice-icon-url"})],K.prototype,"adChoiceIconUrl",void 0),(0,a.Cg)([(0,d.CF)({attribute:"native-ad-ad-choice-text"})],K.prototype,"nativeAdAdChoiceText",void 0),(0,a.Cg)([(0,d.CF)({attribute:"tel-metadata"})],K.prototype,"telemetryMetadata",void 0),(0,a.Cg)([(0,d.CF)({mode:"boolean",attribute:"is-feed-v2"})],K.prototype,"isFeedV2",void 0),(0,a.Cg)([y.sH],K.prototype,"iconStyles",void 0),(0,a.Cg)([y.sH],K.prototype,"iconStyleStr",void 0),K=(0,a.Cg)([(0,c.TA)(s.PDj,"msn-native-ad-ad-choice")],K);const X=u.A`
@media (forced-colors:active){.native-ad-ad-choice{background:buttonface}}.native-ad-ad-choice{width:32px;height:32px;display:inline-flex}.native-ad-ad-choice svg{margin:auto}`.withBehaviors(new m.e("layoutStyle"),new m.e("iconStyleStr")),tt=f.qy`
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.3845 -1.21037e-07C2.22828 -1.94803e-07 2.819 0.40029 3.40971 0.719747C3.91584 0.959663 4.42266 1.27977 5.01337 1.51968C7.71388 2.87964 10.4144 4.31978 13.1142 5.75992C13.958 6.16021 15.0548 6.55986 15.6455 7.28025C15.814 7.52017 16.0678 7.84027 15.9832 8.24056C15.7301 9.12068 14.5487 9.44079 13.7895 9.84043C11.9328 10.8007 9.99215 11.8406 8.13543 12.8003C7.46013 13.2005 6.44787 13.9203 5.60409 13.3603C5.26644 13.2005 5.09795 13.0402 5.01337 12.8003C4.92879 12.4802 5.01337 12.0805 5.01337 11.7604L5.01337 9.20023C5.01337 8.48048 4.92879 7.92046 5.4356 7.60035C5.60409 7.52017 5.94173 7.44063 6.1948 7.52017C7.03858 7.84027 6.78552 9.28041 6.78552 10.4005L6.78552 11.2799C8.22001 10.5602 9.6545 9.83979 11.089 9.20022C11.5951 8.96031 12.4389 8.72039 12.6081 8.08019C12.7766 7.36044 11.1736 6.80042 10.6675 6.55986L4.84489 3.43966C4.42266 3.19974 3.32581 2.3998 2.6512 2.63972C2.39813 2.71991 2.22897 2.95982 2.22897 3.11955C2.14438 3.43966 2.14438 3.91949 2.14438 4.31978L2.14438 6.87996L2.14438 11.1997C2.14438 11.8399 2.0598 12.6399 2.31287 13.0395C2.90358 13.8395 4.25349 12.3993 4.67572 13.6797C4.76031 13.9998 4.59114 14.3199 4.42266 14.4797C4.08501 14.9601 2.56593 15.6799 1.97522 15.8403C1.80674 15.9198 1.3845 16 1.13144 16C-0.303057 15.7601 0.0345918 13.6002 0.0345916 11.9997L0.0345909 4.07986C0.0345908 2.87964 -0.133892 1.27977 0.372239 0.560019C0.625305 0.159727 0.878371 0.159728 1.3845 -1.21037e-07ZM5.77257 5.1999C7.03858 5.1999 7.12248 6.72023 5.94105 6.96015C5.26576 7.04034 4.75962 6.40013 4.92811 5.84011C5.09727 5.43982 5.35034 5.35963 5.77257 5.1999Z" fill="#00AECD"/>
</svg>
`,et=f.qy`
<svg width="20" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.52344 5.69531C4.70573 5.69531 4.86198 5.63542 4.99219 5.51562C5.1224 5.39062 5.1875 5.24219 5.1875 5.07031C5.1875 4.89844 5.1224 4.7526 4.99219 4.63281C4.86198 4.50781 4.70573 4.44531 4.52344 4.44531C4.33594 4.44531 4.17708 4.50781 4.04688 4.63281C3.91667 4.7526 3.85156 4.89844 3.85156 5.07031C3.85156 5.24219 3.91667 5.39062 4.04688 5.51562C4.17708 5.63542 4.33594 5.69531 4.52344 5.69531ZM1.44531 0.921875V0.929688C1.33594 0.861979 1.21875 0.828125 1.09375 0.828125C0.90625 0.828125 0.747396 0.890625 0.617188 1.01562C0.486979 1.13542 0.421875 1.28125 0.421875 1.45312V11.375C0.421875 11.5469 0.486979 11.6953 0.617188 11.8203C0.747396 11.9401 0.90625 12 1.09375 12C1.19271 12 1.28906 11.9792 1.38281 11.9375H1.39062L1.40625 11.9219L3.20312 11.0625C3.48958 10.9635 3.63281 10.7708 3.63281 10.4844C3.63281 10.3073 3.56771 10.1589 3.4375 10.0391C3.30729 9.91406 3.15104 9.85156 2.96875 9.85156C2.85417 9.85156 2.74479 9.8776 2.64062 9.92969C2.63542 9.9401 2.61979 9.95052 2.59375 9.96094C2.51042 10.0026 2.42188 10.0234 2.32812 10.0234C2.17188 10.0234 2.03906 9.97396 1.92969 9.875C1.82031 9.77083 1.76302 9.64844 1.75781 9.50781V3.375C1.76302 3.22917 1.82031 3.10677 1.92969 3.00781C2.03906 2.90365 2.17188 2.85156 2.32812 2.85156C2.41667 2.85156 2.5 2.8724 2.57812 2.91406C2.58333 2.91406 2.58854 2.91667 2.59375 2.92188C2.59896 2.92188 2.60417 2.92448 2.60938 2.92969L8.53906 5.92188L8.64844 5.97656C8.8099 6.08594 8.89062 6.23177 8.89062 6.41406C8.89062 6.60677 8.80469 6.75521 8.63281 6.85938L8.5625 6.89844L5.1875 8.60938V6.67969C5.1875 6.5026 5.1224 6.35417 4.99219 6.23438C4.86198 6.11458 4.70573 6.05469 4.52344 6.05469C4.33594 6.05469 4.17708 6.11458 4.04688 6.23438C3.91667 6.35417 3.85156 6.5026 3.85156 6.67969V9.65625C3.85156 9.83333 3.91667 9.98177 4.04688 10.1016C4.17708 10.2214 4.33594 10.2812 4.52344 10.2812C4.65885 10.2812 4.78385 10.2448 4.89844 10.1719L11.125 7.00781C11.4271 6.90885 11.5781 6.71094 11.5781 6.41406C11.5781 6.14844 11.4453 5.95833 11.1797 5.84375L1.44531 0.921875ZM2.59375 9.96094C2.61979 9.95052 2.63542 9.9401 2.64062 9.92969L2.59375 9.96094ZM2.57812 2.91406C2.58333 2.91406 2.58854 2.91667 2.59375 2.92188C2.59896 2.92188 2.60417 2.92448 2.60938 2.92969L2.57812 2.91406Z" fill="#00aecd"/>
</svg>
`,it=f.qy`
${(0,w.z)(t=>t.adChoiceIconUrl,f.qy`<a class="native-ad-ad-choice" href="${t=>t.adChoiceIconUrl}" target="_blank" title="${t=>t.nativeAdAdChoiceText}" data-t="${t=>t.telemetryMetadata}" aria-label="${t=>t.nativeAdAdChoiceText}">${(0,w.z)(t=>!t.isFeedV2,f.qy`${et}`)} ${(0,w.z)(t=>t.isFeedV2,f.qy` ${tt} `)}</a>`)}
`;let at=class extends K{};at=(0,a.Cg)([(0,g.E)({name:"msn-native-ad-ad-choice",template:it,styles:X})],at);let nt=class extends p.t{constructor(){super(...arguments),this.cardActionsTooltips=""}connectedCallback(){super.connectedCallback()}};(0,a.Cg)([(0,d.CF)({attribute:"card-actions-tooltips"})],nt.prototype,"cardActionsTooltips",void 0),(0,a.Cg)([(0,d.CF)({attribute:"data"})],nt.prototype,"data",void 0),nt=(0,a.Cg)([(0,c.TA)(s.PDj,"msn-native-ad-see-more")],nt);const ot=u.A` .card-button{border-radius:100%}.card-button:not(:hover){background:transparent}.card-see-more{align-items:center;background-color:rgb(255,255,255);border-radius:100%;border:1px solid rgb(229,229,229);cursor:pointer;display:flex;height:32px;justify-content:center;outline:none;margin-right:2px;width:32px}.card-see-more svg{fill:inherit}`.withBehaviors(new m.e("layoutStyle"),new k.X(["data"],t=>{let e="";return t.data&&(t.data.isInfopane||t.data.enableFilledIconOnHover&&(!t.data.enableFilledIconOnHover||t.data.optedOutOfReactions)||(e+="dynamic-styles{display:inline-flex}")),u.A`${e}`}));var rt=i(88985),lt=i(80004),dt=i(39957),st=i(33307),ct=i(19173);i(21713).J;const pt=f.qy`<button class="card-see-more" title=${t=>t.cardActionsTooltips&&t.cardActionsTooltips.seeMore} @click=${(t,e)=>t.toggleCardActionMenu&&t.toggleCardActionMenu(t,e.event)} data-t="${t=>{var e;return null===(e=t.telemetryContext)||void 0===e||null===(e=e.seeMore)||void 0===e?void 0:e.getMetadataTag()}}">${f.qy.partial(ct.A)}</button>`,ht=f.qy` ${(0,dt.ux)(t=>[t.data],f.qy` ${(0,w.z)(t=>t.isAdFeedbackV1Enabled&&!!t.feedbackUrl,f.qy` ${(0,w.z)(t=>!t.isFeedV2,f.qy`<msn-card-button class="card-button dynamic-styles" select-title=${t=>t.cardActionsTooltips&&t.cardActionsTooltips.seeMore} unselect-icon=${st.A} filled-icon-path=${rt.i_} layout=${t=>(0,lt.V1)(t)} @selected-state-changed=${(t,e)=>t.toggleCardActionMenu&&t.toggleCardActionMenu(t,e.event)} select-telemetry-tag=${t=>{var e;return null===(e=t.telemetryContext)||void 0===e||null===(e=e.seeMore)||void 0===e?void 0:e.getMetadataTag()}}></msn-card-button>`)} ${(0,w.z)(t=>t.isFeedV2&&t.isHovered,f.qy`${pt}`)} `)} `)}
`;let gt=class extends nt{};gt=(0,a.Cg)([(0,g.E)({name:"msn-native-ad-see-more",template:ht,styles:ot})],gt);var ut=i(48566),mt=i(63456);const vt=t=>{var e;const i=(null===(e=t.localizedStrings)||void 0===e?void 0:e.nativeAdTrendingTitleText)||"More than {0} people have viewed this product",a=(0,mt.A)(ft((0,mt.A)(t,"assets.viewed","")),"viewed","");return ut.Qf.Format(i,a)},ft=(0,c.sx)(s._0l,"parseViewedStringToJSON")(t=>{if(!t)return"";let e={};try{e=JSON.parse(t)}catch{return""}return e&&e.viewed&&e.comparisonDays?e:""}),bt=t=>{var e,i;const a=(null===(e=t.localizedStrings)||void 0===e?void 0:e.nativeAdSaleHighlightTitleText)||"SALE {0}% OFF";return ut.Qf.Format(a,null===(i=t.assets)||void 0===i?void 0:i.discount)},xt=t=>{var e,i;const a=(null===(e=t.localizedStrings)||void 0===e?void 0:e.nativeAdSaleHighlightTitleText)||"SALE {0}% OFF",n=a.split("{0}%"),o=ut.Qf.Format(a,null===(i=t.assets)||void 0===i?void 0:i.discount),[r,l]=n,d=o.slice(r.length,o.length-l.length);return{prefix:r.trim(),suffix:l.trim(),highlightText:d.trim()}};class $t{chain(t){this.nextBuilder=t}build(t,e){const i=this.doBuild(t,e);return this.nextBuilder?this.nextBuilder.build(t,i):i}}(0,a.Cg)([(0,c.sx)(s.WLY,"BaseBuilder.Chain")],$t.prototype,"chain",null),(0,a.Cg)([(0,c.sx)(s.WLY,"BaseBuilder.Build")],$t.prototype,"build",null);class wt extends $t{constructor(){super(),this.creatorMap=new Map}registerCreator(t,e){this.creatorMap.set(t,e)}doBuild(t,e){if(this.creatorMap.has(t.name)){return this.creatorMap.get(t.name)(t,e)}return e?f.qy`${e}`:f.qy`<div></div>`}}(0,a.Cg)([(0,c.sx)(s.WLY,"ComponentBuilder.RegisterCreator")],wt.prototype,"registerCreator",null),(0,a.Cg)([(0,c.sx)(s.WLY,"ComponentBuilder.DoBuild")],wt.prototype,"doBuild",null);class yt extends $t{doBuild(t,e){if(Array.isArray(t.children)&&t.children.length>0){const e=t.children.map(t=>this.build(t,null)),i=Array(e.length+1).fill("");return i.raw=i,f.qy`
                ${(0,dt.ux)(e=>t.children,f.qy`
                    ${t=>this.build(t,null)}
                `)}
            `,f.kc.create(i,e)}return null}}(0,a.Cg)([(0,c.sx)(s.WLY,"ChildrenBuilder.DoBuild")],yt.prototype,"doBuild",null);class Ct extends p.t{constructor(){super(...arguments),this._displayName="MsnBlockLayout"}connectedCallback(){super.connectedCallback()}}(0,a.Cg)([y.sH],Ct.prototype,"layoutConfig",void 0);const kt=f.qy`<slot></slot>`,Lt=u.A` 
    :host{
        display: block;
    }
`.withBehaviors(new m.e("layoutStyle"));class Ft extends p.t{constructor(){super(...arguments),this._displayName="MsnFlexLayout"}connectedCallback(){super.connectedCallback()}}(0,a.Cg)([y.sH],Ft.prototype,"layoutConfig",void 0),(0,a.Cg)([y.sH],Ft.prototype,"layoutStyle",void 0);const St=f.qy`<slot></slot>`,_t=u.A` :host{display:flex}`.withBehaviors(new m.e("layoutStyle"));class Tt extends p.t{constructor(){super(...arguments),this._displayName="MsnPixelLayout"}connectedCallback(){super.connectedCallback()}}(0,a.Cg)([y.sH],Tt.prototype,"layoutConfig",void 0);const zt=f.qy`<slot></slot>`,Mt=u.A` :host{position:absolute}`.withBehaviors(new m.e("layoutStyle")),At=f.qy`<slot></slot>`,Bt=u.A``.withBehaviors(new m.e("layoutStyle"));let Ht=class extends Tt{};Ht=(0,a.Cg)([(0,g.E)({name:"msn-pixel-layout",template:zt,styles:Mt})],Ht);let It=class extends Ft{};It=(0,a.Cg)([(0,g.E)({name:"msn-flex-layout",template:St,styles:_t})],It);let Et=class extends Ct{};Et=(0,a.Cg)([(0,g.E)({name:"msn-block-layout",template:kt,styles:Lt})],Et);let Dt=class extends p.t{};Dt=(0,a.Cg)([(0,g.E)({name:"msn-uber-layout",template:At,styles:Bt})],Dt);class Zt extends $t{doBuild(t,e){if(!t.layout)return e;const i=t.layout;if(!i.mode)return e;switch(i.mode){case"pixel":return function(t,e){return f.qy`
        <msn-pixel-layout 
            :layoutConfig=${e=>t}
        >
            ${e}
        </msn-pixel-layout>
    `}(i,e);case"flex":return function(t,e){return f.qy`
        <msn-flex-layout 
            :layoutConfig=${e=>t}
        >
            ${e}
        </msn-flex-layout>
    `}(i,e);case"block":return function(t,e){return f.qy`
        <msn-block-layout
            :layoutConfig=${()=>t}
        >
            ${e}
        </msn-block-layout>
    `}(i,e);default:return e}}}(0,a.Cg)([(0,c.sx)(s.WLY,"LayoutBuilder.DoBuild")],Zt.prototype,"doBuild",null);const Vt=u.A` :host{display:block;height:100%;width:100%}`,Pt=f.qy`<template id="native-ad-telemetry"><slot></slot></template>`;let Ut=class extends g.L{constructor(){super(...arguments),this.clickedBeacon=!1,this.clickedTelemetry=!1,this.clickedUserAction=!1,this.telemetryMetadata=""}};(0,a.Cg)([(0,d.CF)({mode:"boolean"})],Ut.prototype,"clickedBeacon",void 0),(0,a.Cg)([(0,d.CF)({mode:"boolean"})],Ut.prototype,"clickedTelemetry",void 0),(0,a.Cg)([(0,d.CF)({mode:"boolean"})],Ut.prototype,"clickedUserAction",void 0),(0,a.Cg)([d.CF],Ut.prototype,"telemetryMetadata",void 0),Ut=(0,a.Cg)([(0,g.E)({name:"msn-native-ad-telemetry",template:Pt,styles:Vt})],Ut);var Ot=i(95125),Rt=i(93516),Nt={impressionLog:(t,e,i)=>{var a;const n=null==e||null===(a=e.parent)||void 0===a||null===(a=a.shadowRoot)||void 0===a||null===(a=a.querySelector("msn-native-ad-title"))||void 0===a||null===(a=a.shadowRoot)||void 0===a||null===(a=a.querySelector(".native-ad-title-wrapper"))||void 0===a||null===(a=a.children)||void 0===a?void 0:a[0],o=null==n?void 0:n.scrollHeight,r=null==n?void 0:n.clientHeight;o&&r&&(0,Rt.m)(t.id,"nativeAdCardImpression",`${o},${r}`,0,i)},clickLog:(t,e,i)=>{var a;const n=null==e||null===(a=e.parent)||void 0===a||null===(a=a.shadowRoot)||void 0===a||null===(a=a.querySelector("msn-native-ad-title"))||void 0===a||null===(a=a.shadowRoot)||void 0===a||null===(a=a.querySelector(".native-ad-title-wrapper"))||void 0===a||null===(a=a.children)||void 0===a?void 0:a[0],o=null==n?void 0:n.scrollHeight,r=null==n?void 0:n.clientHeight;o&&r&&(0,Rt.m)(t.id,"nativeAdCardClick",`${o},${r}`,0,null==i?void 0:i.target)}};var Gt,Wt={PrgTitle2:Nt,PrgTitle2C:Nt};!function(t){t[t.adChoice=0]="adChoice",t[t.destination=1]="destination",t[t.nativeAdCard=2]="nativeAdCard"}(Gt||(Gt={}));class jt extends $t{doBuild(t,e){if(t.userActionLogger){const{impressionLog:e,clickLog:i}=Wt[t.userActionLogger]||{};!Ot.Yg.clickLog&&i&&(Ot.Yg.clickLog=i),!Ot.Yg.impressionLog&&e&&(Ot.Yg.impressionLog=e)}if(!t.telemetry)return e;const i=t.telemetry,a=!!i.metadata;return f.qy`
            <msn-native-ad-telemetry
                data-t="${t=>a?((t,e)=>{if(t&&t.adTelemetryContext&&e in Gt)return t.adTelemetryContext[e].getMetadataTag()})(t,i.metadata):""}"
                ${(0,$.Ib)(!!i.clickedBeacon||!!i.clickedTelemetry||!!i.clickedUserAction,!!i.viewedBeacon,!!i.customEvent)}
                clickedBeacon=${!!i.clickedBeacon}
                clickedUserAction=${!!i.clickedUserAction}
                clickedTelemetry=${!!i.clickedTelemetry}
                telemetryMetadata=${i.metadata}
            >
                ${e}
            </msn-native-ad-telemetry>`}}(0,a.Cg)([(0,c.sx)(s.WLY,"TelemetryBuilder.doBuild")],jt.prototype,"doBuild",null);const Jt=new class{constructor(){this.create=(0,r.A)(this.createInternal),this.layoutBuilder=new Zt,this.telemetryBuilder=new jt,this.telemetryBuilder.chain(this.layoutBuilder),this.componentBuilder=new wt,this.componentBuilder.chain(this.telemetryBuilder),this.rootBuilder=new yt,this.rootBuilder.chain(this.componentBuilder)}registerCreator(t,e){this.componentBuilder.registerCreator(t,e)}createInternal(t){return this.rootBuilder.build(t,null)}};Jt.registerCreator("ad-title-mask",t=>f.qy`
    <msn-native-ad-title-mask
        :layoutConfig=${e=>null==t?void 0:t.layout}
        id="${t=>t.id}${t=>null==t.index?"":`_${t.index}`}-mask"
        destination-url=${t=>t.destinationUrl}
        title=${t=>t.title}
        tel-metadata=${t=>{var e;return null==t||null===(e=t.adTelemetryContext)||void 0===e||null===(e=e.destination)||void 0===e?void 0:e.getMetadataTag()}}
        ${(0,$.Ib)(!0,!1)}
		component-name="${null==t?void 0:t.name}"
    >
    </msn-native-ad-title-mask>
`),Jt.registerCreator("product-image",t=>f.qy`
    ${(0,w.z)(t=>t.imageData,f.qy`
        <msn-native-ad-product-image 
            :layoutConfig=${()=>null==t?void 0:t.layout}
            src=${e=>((t,e)=>{var i;return t&&null!==(i=e.assets)&&void 0!==i&&null!==(i=i.transparentImage)&&void 0!==i&&i.url?e.assets.transparentImage.url:e.imageData&&e.imageData.source})(null==t?void 0:t.useTransparentImage,e)}
            alt-text=${t=>t.imageData&&t.imageData.altText}
            is-hovered=${t=>t.hoverState&&t.hoverState.isHovered}
            image-mask-on=${()=>null!=t&&t.imageMaskOn?"on":"off"}
            image-mask-opacity=${()=>null==t?void 0:t.imageMaskOpacity}
            trim-bottom=${()=>null==t?void 0:t.trimBottom}
            object-fit=${()=>(null==t?void 0:t.useTransparentImage)?"contain":"cover"}
            use-drop-shadow=${()=>(null==t?void 0:t.useTransparentImage)&&!(null!=t&&t.noDropShadow)}
            use-transparent-background=${()=>null==t?void 0:t.useTransparentImage}
            image-mask-left=${()=>null==t?void 0:t.imageMaskLeft}
            image-mask-top=${()=>null==t?void 0:t.imageMaskTop}
            image-mask-width=${()=>null==t?void 0:t.imageMaskWidth}
            image-mask-height=${()=>null==t?void 0:t.imageMaskHeight}
            id="${t=>t.id}-product-image"
            rlink=${t=>t.destionationUrl}
			component-name=${null==t?void 0:t.name}
            :visualReadinessCallback=${t=>t.visualReadinessCallback}
            pattern-mode=${()=>null==t?void 0:t.patternMode}
        >
        </msn-native-ad-product-image>
    `)}
`),Jt.registerCreator("gradient-mask",(t,e)=>f.qy`
    ${(0,w.z)(t=>t.destinationUrl,f.qy`
        <msn-native-gradient-mask
            :layoutConfig=${e=>null==t?void 0:t.layout}
            paddingTop=${t&&t.paddingTop}
            paddingBottom=${t&&t.paddingBottom}
            is-radial-mask=${t&&t.isRadialMask}
            is-full-gradient=${t&&t.isFullGradient}
            use-dynamic-style=${t&&t.useDynamicStyle}
            height=${t&&t.height}
            background="${t&&t.background}"
            @click=${t=>t.destinationUrl&&window.open(t.destinationUrl)}
            ${t&&t.setClickBeacon?(0,$.Ib)(!0,!1):""}
			component-name="${null==t?void 0:t.name}"
            pe-seasonal-color-mode=${t&&t.peSeasonalColorMode}
        >
            ${(0,w.z)(()=>e,e)}
        </msn-native-gradient-mask>
    `)}
`),Jt.registerCreator("ad-title",t=>f.qy`
    <msn-native-ad-title
        :layoutConfig=${e=>null==t?void 0:t.layout}
        is-hovered=${t=>t.hoverState&&t.hoverState.isHovered}
        id="${t=>t.id}${t=>null==t.index?"":`_${t.index}`}-ad-title"
        title=${t=>(t=>{var e,i,a;return("msn-native-ad-short-title"===(null===(e=t.template)||void 0===e?void 0:e.templateType)||"msn-ad-cta-short-title"===(null===(i=t.template)||void 0===i?void 0:i.templateType))&&(null===(a=t.assets)||void 0===a?void 0:a.shortTitle)||t.title})(t)}
        destination-url=${t=>t.destinationUrl}
        custom-style=${t&&t.customStyle}
        custom-style-hovered=${null==t?void 0:t.customStyleHovered}
        animation-on=${t=>t.template&&"msn-content-reveal"===t.template.templateType}
        line-height=${e=>((t,e)=>t&&("infopane"===t.region||"resinfopane"===t.region)&&t.items&&t.items.length>1?28:e&&e.lineHeight)(e,t)}
        font-weight=${e=>((t,e)=>t&&("infopane"===t.region||"resinfopane"===t.region)&&t.items&&t.items.length>1?400:e&&e.fontWeight)(e,t)}
        two-lines-title=${e=>{var i;return(null==t?void 0:t.twoLine)||e.hasAnyInlineDecoration&&!(null!=t&&t.oneLineTitle)||"msn-title-max-line-2"===(null===(i=e.template)||void 0===i?void 0:i.templateType)||e.adSlugGA}}
        one-line-title=${e=>null==t?void 0:t.oneLineTitle}
        font-family=${e=>((t,e)=>e?e.includes(" ")?`"${e}"`:e:t.fontFamilyOnCardContent||"inherit")(e,null==t?void 0:t.fontFamily)}
        font-size=${e=>((t,e)=>t&&("infopane"===t.region||"resinfopane"===t.region)&&t.items&&t.items.length>1?20:e&&e.titleFontSize)(e,t)||e.feedFontSize}
        is-anaheim-design=${t=>t.isAnaheimDesign}
        is-river-region=${t=>"river"===t.region||"resriver"===t.region||"rightRail"===t.region||"rightrail"===t.region}
        tel-metadata=${t=>{var e;return null==t||null===(e=t.adTelemetryContext)||void 0===e||null===(e=e.destination)||void 0===e?void 0:e.getMetadataTag()}}
        ${(0,$.Ib)(!0,!1)}
        ${null!=t&&t.isFeedV2?"is-feed-v2":""}
		component-name="${null==t?void 0:t.name}"
    >
    </msn-native-ad-title>
`),Jt.registerCreator("ad-label",t=>f.qy`
    ${(0,w.z)(e=>e.privacyUrl||t.useAdLink,f.qy`
        <msn-native-ad-ad-label 
            :layoutConfig=${e=>null==t?void 0:t.layout}
            privacy-url="${e=>t.useAdLink?e.destinationUrl:e.privacyUrl}"
            ad-label-text-opacity="${(null==t?void 0:t.adLabelTextOpacity)??"0.7"}"
            ad-label-text="${t=>t.adLabelText}"
            type="${e=>O(e,t)}"
            native-ad-ad-label-text="${t=>t.strings&&t.strings.nativeAdAdLabelText}"
            tel-metadata="${t=>{var e;return null==t||null===(e=t.adTelemetryContext)||void 0===e||null===(e=e.adLabel)||void 0===e?void 0:e.getMetadataTag()}}"
            id="${t=>t.id}-ad-label"
            ${null!=t&&t.isFeedV2?"is-feed-v2":""}
            ${null!=t&&t.isSeasonal?"is-seasonal":""}
			component-name="${null==t?void 0:t.name}"
        >
        </msn-native-ad-ad-label>
    `)}
`),Jt.registerCreator("provider-name",t=>f.qy`
<msn-native-ad-provider-name
    ${(0,$.Ib)(!0,!1)}
    id="${t=>t.id}${t=>null==t.index?"":`_${t.index}`}-ad-provider-name"
    url=${t=>t.destinationUrl}
    provider-name=${t=>t.providerData&&t.providerData.name}
    custom-style-class=${t&&t.customStyleClass}
    ad-slug-ga=${t=>t.adSlugGA}
    tel-metadata=${t=>{var e;return null==t||null===(e=t.adTelemetryContext)||void 0===e||null===(e=e.destination)||void 0===e?void 0:e.getMetadataTag()}}
    font-family=${e=>((t,e)=>e?e.includes(" ")?`"${e}"`:e:t.fontFamilyOnCardContent||"inherit")(e,null==t?void 0:t.fontFamily)}
    has-elite-badge=${t=>{var e;return!(null===(e=t.assets)||void 0===e||!e.eliteBadge)}}
    ad-label-text-opacity="${(null==t?void 0:t.adLabelTextOpacity)??"0.7"}"
    ${null!=t&&t.isFeedV2?"is-feed-v2":""}
    font-size=${null==t?void 0:t.fontSize}
    line-height=${null==t?void 0:t.lineHeight}
    :layoutConfig=${e=>null==t?void 0:t.layout}
    :localizedStrings=${t=>t.localizedStrings}
    color="${null==t?void 0:t.color}"
    font-weight="${null==t?void 0:t.fontWeight}"
	component-name="${null==t?void 0:t.name}"
    ${null!=t&&t.isSeasonal?"is-seasonal":""}
>
</msn-native-ad-provider-name>
`),Jt.registerCreator("disclaimer",Y.UN),Jt.registerCreator("ad-choice",t=>f.qy`
    <msn-native-ad-ad-choice 
        :layoutConfig=${e=>null==t?void 0:t.layout}
        id="${t=>t.id}${t=>null==t.index?"":`_${t.index}`}-ad-choice"
        ad-choice-icon-url=${t=>t.adChoiceIconUrl}
        native-ad-ad-choice-text=${t=>t.strings&&t.strings.nativeAdAdChoiceText}
        ${t.isFeedV2?"is-feed-v2":""}
        tel-metadata=${t=>{var e;return null==t||null===(e=t.adTelemetryContext)||void 0===e||null===(e=e.adChoice)||void 0===e?void 0:e.getMetadataTag()}}
		:iconStyles=${()=>t.iconStyles}
		component-name="${null==t?void 0:t.name}"
        id="${t=>t.id}-ad-choice"
    >
    </msn-native-ad-ad-choice>
`),Jt.registerCreator("see-more",t=>f.qy`
    <msn-native-ad-see-more
        :layoutConfig=${e=>null==t?void 0:t.layout}
        :data=${e=>({...e,isFeedV2:t&&t.isFeedV2,isHovered:e.hoverState&&e.hoverState.isHovered})}
        data-t="${t=>{var e;return null==t||null===(e=t.adTelemetryContext)||void 0===e||null===(e=e.seeMore)||void 0===e?void 0:e.getMetadataTag()}}"
		component-name="${null==t?void 0:t.name}"
    >
    </msn-native-ad-see-more>
`),Jt.registerCreator("like-button",t=>f.qy`
    <msn-native-ad-like-button
        :layoutConfig=${e=>null==t?void 0:t.layout}
        native-ad-like-text=${t=>t.strings&&t.strings.nativeAdLikeText}
        native-ad-unlike-text=${t=>t.strings&&t.strings.nativeAdUnLikeText}
        beaconsJson=${t=>t.beaconsJson}
		component-name="${null==t?void 0:t.name}"
    >
    </msn-native-ad-like-button>
`),Jt.registerCreator("call-to-action",t=>f.qy`
    <msn-native-ad-call-to-action 
        text="${t=>(t=>t.template&&t.strings?"prg-ad-cta"===t.template.configType?t.strings.nativeAdBuyNowText:t.strings.nativeAdLearnMoreText:"")(t)}"
        default-background-color="${t&&t.backgroundColor}"
        background-color="${t=>(t=>t.template&&t.layoutColor?"prg-ad-cta"===t.template.configType||"prg-ad-cta-lm"===t.template.configType?"":t.layoutColor:"")(t)}"
        color="${t&&t.color}"
        is-hovered=${t=>t.hoverState&&t.hoverState.isHovered}
        cta-mode=${t&&t.ctaMode||"default"}
        destination-url=${t=>t.destinationUrl}
        tel-metadata=${t=>{var e;return null==t||null===(e=t.adTelemetryContext)||void 0===e||null===(e=e.destination)||void 0===e?void 0:e.getMetadataTag()}}
        ${t&&"arrow"===t.ctaMode&&(0,$.Ib)(!0,!1)}
		component-name="${null==t?void 0:t.name}"
        :layoutConfig=${e=>null==t?void 0:t.layout}
    >
    
    </msn-native-ad-call-to-action>
    `),Jt.registerCreator("trending",t=>f.qy`
    <msn-native-ad-trending
        :layoutConfig=${e=>null==t?void 0:t.layout}
        destination-url="${t=>t.destinationUrl}" 
        title="${t=>t.title}"
        trending-title-text=${vt}
        trending-text="${t=>(0,mt.A)(t,"localizedStrings.nativeAdTrendingText","Trending")}"
        is-hovered=${t=>t.hoverState&&t.hoverState.isHovered}
        tel-metadata=${t=>{var e;return null==t||null===(e=t.adTelemetryContext)||void 0===e||null===(e=e.destination)||void 0===e?void 0:e.getMetadataTag()}}
        ${(0,$.Ib)(!0,!1)}
		component-name="${null==t?void 0:t.name}"
    >
    </msn-native-ad-trending>
`),Jt.registerCreator("color-mask",t=>f.qy`
<msn-native-ad-color-mask
    opacity=${t&&t.opacity}
    color=${e=>t.feedV2?e.dynamicBackground:e.layoutColor}
    is-show=${e=>t&&t.alwaysPresent||e.hoverState&&e.hoverState.isHovered}
    ${null!=t&&t.feedV2?"feed-v2":""}
	component-name="${null==t?void 0:t.name}"
    :layoutConfig=${e=>null==t?void 0:t.layout}
>
</msn-native-ad-color-mask>
`),Jt.registerCreator("sale-highlight-badge",t=>f.qy`
    <msn-native-ad-sale-highlight-badge
        :layoutConfig=${e=>null==t?void 0:t.layout}
		component-name="${null==t?void 0:t.name}"
        discount-text="${t=>{var e,i;const a=(null===(e=t.localizedStrings)||void 0===e?void 0:e.nativeAdOnSaleTextCapital)||"{0}% OFF";return ut.Qf.Format(a,null===(i=t.assets)||void 0===i?void 0:i.discount)}}"
    >
    </msn-native-ad-sale-highlight-badge>
`),Jt.registerCreator("sale-highlight-title",t=>f.qy`
    <msn-native-ad-text
        font-size="60px"
        letter-spacing="-0.015em"
        line-height="100.5%"
        font-family="Segoe UI"
        font-weight="200"
        text="${bt}"
		component-name="${null==t?void 0:t.name}"
        :layoutConfig=${e=>null==t?void 0:t.layout}
    />
`),Jt.registerCreator("sale-highlight-horizontal-title",t=>f.qy`
    <msn-native-ad-text
        font-size="18px"
        letter-spacing="0.5em"
        line-height="100.5%"
        font-family="Segoe UI"
        font-weight="600"
        has-highlight-text="true"
        highlight-text="${t=>xt(t).highlightText}"
        highlight-text-prefix="${t=>xt(t).prefix}"
        highlight-text-suffix="${t=>xt(t).suffix}"
        highlight-text-style="font-size: 48px; letter-spacing: 0.05em; margin-inline-start: 9px; margin-inline-end: 14px;"
		component-name="${null==t?void 0:t.name}"
        :layoutConfig=${e=>null==t?void 0:t.layout}
    />
`),Jt.registerCreator("div-wrapper",(t,e)=>f.qy`
    <msn-native-ad-div-wrapper
        marginLeft=${t&&t.marginLeft}
        marginRight=${t&&t.marginRight}
        marginTop=${t&&t.marginTop}
        marginBottom=${t&&t.marginBottom}
        width=${t&&t.width}
        marginInline=${t&&t.marginInline}
        ${t&&t.setClickBeacon?(0,$.Ib)(!0,!1):""}
		component-name="${null==t?void 0:t.name}"
    >
        ${e}
    </msn-native-ad-div-wrapper>
`),Jt.registerCreator("free-shipping",t=>f.qy`
    <decoration-free-shipping-button
        font-family=${e=>((t,e)=>e?e.includes(" ")?`"${e}"`:e:t.fontFamilyOnCardContent||"inherit")(e,null==t?void 0:t.fontFamily)}
        color=${t.color}
        icon=${t.icon}
        data=${t=>(0,mt.A)(t.localizedStrings,"nativeAdFreeShippingText")}
		component-name="${null==t?void 0:t.name}"
        :layoutConfig=${e=>null==t?void 0:t.layout}
    >
    </decoration-free-shipping-button>
`),Jt.registerCreator("rating",t=>f.qy`
    <decoration-rating
        color=${t.color}
        elementStyle=${()=>t.elementStyle}
        elementSize=${t.elementSize}
        rating=${t=>t.assets&&t.assets.rating}
        review-data=${t=>t.assets.review}
        is-show-review=${t.displayReviewCount}
        font-family=${e=>((t,e)=>e?e.includes(" ")?`"${e}"`:e:t.fontFamilyOnCardContent||"inherit")(e,null==t?void 0:t.fontFamily)}
		component-name="${null==t?void 0:t.name}"
        :layoutConfig=${e=>null==t?void 0:t.layout}
    >
    </decoration-rating>
`),Jt.registerCreator("special-offer",t=>f.qy`
    <msn-native-ad-special-offer
        :localizedStrings=${t=>t.localizedStrings}
        displayed-text="${t=>t.assets.specialOffer.displayedText}"
        promotional-text="${t=>t.assets.specialOffer.promotionalText}"
        redemption-code="${t=>t.assets.specialOffer.redemptionCode}"
        days-from-expiration="${t=>t.assets.specialOffer.daysFromExpiration}"
        destination-url="${t=>t.assets.specialOffer.destinationURL}"
        margin-left="-6"
        is-dr-config=${t&&t.isDrConfig}
        ${(0,$.Ib)(!0,!1)}
		component-name="${null==t?void 0:t.name}"
        :layoutConfig=${e=>null==t?void 0:t.layout}
    >
    </msn-native-ad-special-offer>
`),Jt.registerCreator("ad-full-card-gradient",(t,e)=>f.qy`
    <msn-native-ad-full-card-gradient 
        pattern-mode="${null==t?void 0:t.patternMode}"
        :layoutConfig=${e=>null==t?void 0:t.layout}
    >
        ${(0,w.z)(()=>e,e)}
    </msn-native-ad-full-card-gradient>
`);var Qt=i(56589),Yt=i(17254),qt=i(18258);const Kt=n.DI.getOrCreateDOMContainer(),Xt=window.matchMedia("(prefers-color-scheme: dark)");let te,ee;function ie(){Kt.register(n.cH.instance(o,{...this.strings,...te})),this.adBackgroundColor=null!=Xt&&Xt.matches?"#2E2E2E":"#FFFFFF",null==Xt||Xt.addEventListener("change",this.themeModeSwitchHandler)}class ae extends g.L{constructor(){super(),this.adBackgroundColor="",this.hoverState={isHovered:!1,isDecorationLinesExpanded:!1},(0,y.sH)(this.hoverState,"isHovered"),(0,y.sH)(this.hoverState,"isDecorationLinesExpanded")}get componentFactory(){return Jt}themeModeSwitchHandler(){this.adBackgroundColor=null!=Xt&&Xt.matches?"#2E2E2E":"#FFFFFF"}connectedCallback(){if(this.configRef&&!te){var t,e,i;const a=null===(t=Qt.L.getInstance())||void 0===t?void 0:t.getConfigResolver(),n=null==a||null===(e=a.tryGetConfigSync)||void 0===e?void 0:e.call(a,this.configRef);Yt.T3.ConfigOrigins.feature===qt.t.Local&&Qt.L.getConfig(this.configRef).then(t=>{var e;ee=null==t?void 0:t.properties,te=null===(e=ee)||void 0===e?void 0:e.localizedStrings}),ee=null==n?void 0:n.properties,te=null===(i=ee)||void 0===i?void 0:i.localizedStrings}super.connectedCallback(),ie.call(this)}get wcData(){if(this.adData&&this.adData.adLabelText){const t={...this.config,...ee},e={...this.localizedStrings,...this.strings,...te};return l(this.adData,t,e)}return null}disconnectedCallback(){null==Xt||Xt.removeEventListener("change",this.themeModeSwitchHandler)}}(0,a.Cg)([y.sH],ae.prototype,"adData",void 0),(0,a.Cg)([y.sH],ae.prototype,"isInfopane",void 0),(0,a.Cg)([y.sH],ae.prototype,"adBackgroundColor",void 0),(0,a.Cg)([y.sH],ae.prototype,"localizedStrings",void 0),(0,a.Cg)([y.sH],ae.prototype,"configRef",void 0);var ne=i(2692),oe=i(95999);const re=t=>{var e;return(null==t||null===(e=t.template)||void 0===e?void 0:e.dynamicRenderingConfig)||ne.w},le=(t,e)=>{const i=parseInt((e??"#2E2E2E").slice(1),16);return`rgba(${i>>16&255},${i>>8&255},${255&i},${t})`},de=(0,r.A)(t=>le(.8,t)),se=(0,r.A)(t=>le(0,t)),ce=t=>re(t.wcData).cardStyles||{};var pe,he=i(57416);!function(t){t.defaultRiverGradient="#2E2E2E",t.defaultRiverBackground="#FFFFFF",t.defaultInfopaneGradient="#000000",t.defaultInfopaneBackground="#FFFFFF",t.zIndexV2OriginalBackground="transparent"}(pe||(pe={}));const ge=t=>{var e;return null!==(e=t.adData)&&void 0!==e&&e.enableAdsColorBleed?t.adData.adBackgroundColor:ue(t)},ue=t=>{var e,i,a;const n=re(t.wcData);if(n.layoutColor)return n.layoutColor;const o=null===(e=t.adData)||void 0===e||null===(e=e.template)||void 0===e?void 0:e.templateType;return("msn-ad-zindex-v2-polygon"===o||"msn-ad-zindex-v2-original"===o||"msn-sale-highlight-v3"===o||"msn-sale-highlight-v4"===o)&&null!==(i=t.adData)&&void 0!==i&&i.layoutColor&&null!==(a=t.adData)&&void 0!==a&&null!==(a=a.assets)&&void 0!==a&&a.transparentImage?t.adData.layoutColor:["msn-pe-seasonal","msn-pe-seasonal-v1","msn-pe-seasonal-v1p"].includes(o)?t.adBackgroundColor:""},me=f.qy`<style>:host { height: 304px; width: 100%; position: relative; overflow: hidden; border-radius: calc(${he.JU} * 1px); box-shadow: 0 0 3px lightgrey; } :host(msn-native-ad-dr), :host(native-ad-wc) { ${t=>(t=>{const e=ce(t),i=[];null==e.borderColor&&null==e.borderWidth||i.push("border-style:solid");const a=["backgroundColor","borderColor","borderWidth","height","boxShadow","borderRadius","fontFamily"];return Object.keys(e).forEach(t=>{null!=e[t]&&a.includes(t)&&i.push((0,q.MD)(t,e[t]))}),i.length?`${i.join(";")};`:""})(t)} } @media (prefers-color-scheme: dark) { :host{ box-shadow: 0 0 3px black; } }</style><fluent-card @mouseenter=${t=>t.hoverState.isHovered=!0} @mouseleave=${t=>t.hoverState.isHovered=!1} style=" background-color: ${t=>(t=>{var e;return"msn-ad-zindex-v2-original"===(null===(e=t.adData)||void 0===e||null===(e=e.template)||void 0===e?void 0:e.templateType)?pe.zIndexV2OriginalBackground:pe.defaultRiverBackground})(t)}; grid-area:${t=>{var e;return null===(e=t.adData)||void 0===e?void 0:e.gridArea}}; --ad-background-color: ${t=>ge(t)||pe.defaultRiverGradient}; --gradient-mid-color: ${t=>de(ge(t)||pe.defaultRiverGradient)}; --gradient-end-color: ${t=>se(ge(t)||pe.defaultRiverGradient)}; ${t=>(t=>{const e=ce(t);let i="";return null==e.borderRadius&&null==e.borderWidth||(i+="border-radius: 0;"),null!=e.backgroundColor&&(i+=`background-color: ${e.backgroundColor};`),i})(t)} " class="${t=>{var e;return null===(e=t.adData)||void 0===e?void 0:e.cardSize}}" card-fill-color="${t=>{var e;return ue(t)||(null===(e=t.adData)||void 0===e?void 0:e.adBackgroundColor)}}">${(0,dt.ux)(t=>{var e;return[{...t.wcData,visualReadinessCallback:null===(e=t.adData)||void 0===e?void 0:e.visualReadinessCallback,hoverState:t.hoverState,componentFactory:t.componentFactory}]},f.qy` ${t=>t.componentFactory.create(re(t))} `)}</fluent-card>`,ve=f.qy`<div @mouseenter=${t=>t.hoverState.isHovered=!0} @mouseleave=${t=>t.hoverState.isHovered=!1} style=" contain: content; height: 100%; background-color: ${t=>pe.defaultInfopaneBackground}; grid-area:${t=>{var e;return null===(e=t.adData)||void 0===e?void 0:e.gridArea}}; --ad-background-color: ${t=>pe.defaultInfopaneGradient}; --gradient-mid-color: ${t=>de(pe.defaultInfopaneGradient)}; --gradient-end-color: ${t=>se(pe.defaultInfopaneGradient)}; --neutral-foreground-rest: ${t=>pe.defaultInfopaneBackground}; " class="${t=>{var e;return null===(e=t.adData)||void 0===e?void 0:e.cardSize}}" card-fill-color="${t=>{var e;return null===(e=t.adData)||void 0===e?void 0:e.adBackgroundColor}}">${(0,dt.ux)(t=>[{...t.wcData,hoverState:t.hoverState,componentFactory:t.componentFactory}],f.qy` ${t=>t.componentFactory.create((t=>{var e;return(null==t||null===(e=t.template)||void 0===e?void 0:e.dynamicRenderingConfig)||oe.q})(t))} `)}</div>`,fe=f.qy`<style>:host { grid-area:${t=>{var e;return null===(e=t.adData)||void 0===e?void 0:e.gridArea}}; border-radius: 6px; box-shadow: 0 0 3px lightgrey; background-color: ${pe.defaultRiverGradient}; } @media (prefers-color-scheme: dark) { :host{ box-shadow: 0 0 3px black; } }</style><div></div>`,be=f.qy` ${(0,w.z)(t=>t.wcData,t=>t.isInfopane?ve:me)} ${(0,w.z)(t=>!t.wcData,fe)}
`,xe=u.A`
`;let $e=class extends ae{};$e=(0,a.Cg)([(0,g.E)({name:"msn-native-ad-wc",template:be,styles:xe}),(0,c.TA)(s.PDj,"msn-native-ad-wc")],$e)},80831:function(t,e,i){i.d(e,{tb:function(){return l}});var a,n=i(46277);class o{constructor(t){let{id:e,checkNewEffectInstance:i}=t;this.register=(t,e,i,a)=>{const n=`${this.effectItems.length}`,o={id:n,effectContainer:t,updateEffectStatus:e,showMultiTimes:a,isIntersecting:!1,isEffectShown:!1,observer:this.initIntersectionObserver(n,t,i)};this.effectItems.push(o)},this.unregister=()=>{this.effectItems.forEach(t=>{t.observer&&t.effectContainer&&t.observer.unobserve(t.effectContainer)}),this.effectItems=[]},this.initIntersectionObserver=(t,e,i)=>{if("function"!=typeof IntersectionObserver||!e)return null;const a={root:i&&i.root?document.getElementById(i.root):null,rootMargin:i&&i.rootMargin||"0px 0px 0px 0px"},n=new IntersectionObserver(e=>{e.forEach(e=>{this.handleIntersectingChange(t,e.isIntersecting)})},a);return n.observe(e),n},this.handleIntersectingChange=(t,e)=>{const i=(0,n.A)(this.effectItems,e=>e.id===t);-1!==i&&(this.effectItems[i].isIntersecting=e,e&&this.isAllEffectItemsIntersecting()?this.checkNewEffectInstance(!0):!e&&this.isAllEffectItemsNonIntersecting()&&this.updateEffectSeriesStatus(!1))},this.isAllEffectItemsIntersecting=()=>{let t=!0;return this.effectItems.forEach(e=>{e.isIntersecting||(t=!1)}),t},this.isAllEffectItemsNonIntersecting=()=>{let t=!0;return this.effectItems.forEach(e=>{e.isIntersecting&&(t=!1)}),t},this.isEffectValid=()=>{let t=!0;return this.effectItems.forEach(e=>{e.isIntersecting&&!e.isEffectShown||(t=!1)}),t},this.updateEffectSeriesStatus=(t,e)=>{this.effectItems.forEach(i=>{(i.showMultiTimes||t)&&(i.isEffectShown=t),i.updateEffectStatus(t,e)})},this.id=e,this.effectItems=[],this.checkNewEffectInstance=i}}class r{constructor(t){var e=this;let{id:i}=t;this.register=(t,e,i,a,r,l)=>{const d=(0,n.A)(this.effectSequence,e=>e.id===t);if(this.delayTimeMs=void 0===l?this.delayTimeMs:l,-1!==d)this.effectSequence[d].register(e,i,a,r);else{const n=new o({id:t,checkNewEffectInstance:this.checkNewEffectInstance});n.register(e,i,a,r),this.effectSequence.push(n)}},this.unregister=t=>{const e=(0,n.A)(this.effectSequence,e=>e.id===t);-1!==e&&(this.effectSequence[e].unregister(),this.effectSequence.splice(e,1))},this.notifyEffectCompleted=()=>{this.isPageShowingeffect=!1},this.checkNewEffectInstance=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&!e.isInitialState||setTimeout(()=>{const t=e.findFirstValidEffect();e.isPageScrolling||e.isPageShowingeffect||!t||(e.isPageShowingeffect=!0,t.updateEffectSeriesStatus(!0,e.notifyEffectCompleted))},e.delayTimeMs)},this.handlePageScroll=()=>{this.isInitialState=!1,this.isPageScrolling||(this.isPageScrolling=!0),this.pageScrollingTimer&&window.clearTimeout(this.pageScrollingTimer),this.pageScrollingTimer=window.setTimeout(()=>{this.isPageScrolling=!1,this.checkNewEffectInstance()},500)},this.findFirstValidEffect=()=>{const t=(0,n.A)(this.effectSequence,t=>t.isEffectValid());return-1!==t?this.effectSequence[t]:null},this.id=i,this.effectSequence=[],this.pageScrollingTimer=-1,this.isPageScrolling=!1,this.isPageShowingeffect=!1,this.delayTimeMs=1e3,document.addEventListener("scroll",this.handlePageScroll),this.isInitialState=!0}}!function(t){t.default="default"}(a||(a={}));const l=new class{constructor(){this.getEffectGroup=t=>{const e=t||a.default,i=(0,n.A)(this.effectGroups,t=>t.id===e);if(-1!==i)return this.effectGroups[i];{const t=new r({id:e});return this.effectGroups.push(t),t}},this.effectGroups=[]}}},86845:function(t,e,i){i.d(e,{_t:function(){return C},aM:function(){return k}});var a=i(56911),n=i(92011),o=i(38493);class r extends n.L{constructor(){super(...arguments),this.enabled=!1,this.isInfoPane=!1}}(0,a.Cg)([o.CF],r.prototype,"icon",void 0),(0,a.Cg)([o.CF],r.prototype,"text",void 0),(0,a.Cg)([o.CF],r.prototype,"extraBadgeStyle",void 0),(0,a.Cg)([(0,o.CF)({mode:"boolean"})],r.prototype,"enabled",void 0),(0,a.Cg)([o.CF],r.prototype,"layout",void 0),(0,a.Cg)([(0,o.CF)({mode:"boolean",attribute:"is-info-pane"})],r.prototype,"isInfoPane",void 0);var l=i(96950);const d=l.qy`<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.5 4H1V7.5C1 7.776 1.224 8 1.5 8H2.5C2.776 8 3 7.776 3 7.5V7H7V7.5C7 7.776 7.224 8 7.5 8H8.5C8.776 8 9 7.776 9 7.5V4H9.5C9.776 4 10 3.776 10 3.5C10 3.224 9.776 3 9.5 3H8.75L8.284 1.136C8.117 0.468 7.517 0 6.829 0H3.171C2.483 0 1.883 0.468 1.716 1.136L1.25 3H0.5C0.224 3 0 3.224 0 3.5C0 3.776 0.224 4 0.5 4ZM6 6H4C3.724 6 3.5 5.776 3.5 5.5C3.5 5.224 3.724 5 4 5H6C6.276 5 6.5 5.224 6.5 5.5C6.5 5.776 6.276 6 6 6ZM8.25 4.5C8.25 4.914 7.914 5.25 7.5 5.25C7.086 5.25 6.75 4.914 6.75 4.5C6.75 4.086 7.086 3.75 7.5 3.75C7.914 3.75 8.25 4.086 8.25 4.5ZM2.687 1.379C2.742 1.157 2.942 1 3.171 1H6.829C7.058 1 7.258 1.157 7.313 1.379L7.719 3H2.281L2.687 1.379ZM2.5 3.75C2.914 3.75 3.25 4.086 3.25 4.5C3.25 4.914 2.914 5.25 2.5 5.25C2.086 5.25 1.75 4.914 1.75 4.5C1.75 4.086 2.086 3.75 2.5 3.75ZM11.5 6H10.5C10.224 6 10 6.224 10 6.5V9H0.5C0.224 9 0 9.224 0 9.5C0 9.776 0.224 10 0.5 10H11.5C11.776 10 12 9.776 12 9.5V6.5C12 6.224 11.776 6 11.5 6Z" fill="black" fill-opacity="0.83"/>
</svg>
`,s=l.qy`<svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.38909 11.6701L8.63932 12.4338C8.08675 12.9924 7.36969 13.7106 6.48803 14.5885C5.93704 15.1372 5.06295 15.1371 4.51208 14.5884L2.30692 12.3792C2.02977 12.0989 1.79778 11.8626 1.61091 11.6701C-0.536971 9.45796 -0.536971 5.87129 1.61091 3.65913C3.7588 1.44696 7.24121 1.44696 9.38909 3.65913C11.537 5.87129 11.537 9.45796 9.38909 11.6701ZM7.07926 7.84334C7.07926 6.94501 6.37218 6.21679 5.49999 6.21679C4.6278 6.21679 3.92074 6.94501 3.92074 7.84334C3.92074 8.74163 4.6278 9.46986 5.49999 9.46986C6.37218 9.46986 7.07926 8.74163 7.07926 7.84334Z" fill="#717171"/>
</svg>
`,c=l.qy`<svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.06591 0.163636L0.156818 5.07273C-0.0522727 5.28182 -0.0522727 5.62727 0.156818 5.84545L4.15682 9.84545C4.36591 10.0545 4.71136 10.0545 4.92955 9.84545L9.83864 4.93636C9.93864 4.82727 9.99318 4.69091 9.99318 4.54545V0.545455C9.99318 0.245455 9.74773 0 9.44773 0H5.44773C5.30227 0 5.16591 0.0545455 5.06591 0.163636ZM8.52955 2.77273C8.475 2.89091 8.40227 3 8.31136 3.09091C8.22046 3.18182 8.12045 3.25455 7.99318 3.3C7.86591 3.34545 7.74773 3.38182 7.61136 3.38182C7.475 3.38182 7.33864 3.35455 7.22045 3.3C7.10227 3.25455 6.99318 3.18182 6.90227 3.09091C6.81136 3 6.73864 2.89091 6.69318 2.77273C6.63864 2.65455 6.61136 2.52727 6.61136 2.38182C6.61136 2.23636 6.63864 2.10909 6.69318 1.99091C6.73864 1.88182 6.81136 1.77273 6.90227 1.69091C6.99318 1.6 7.10227 1.52727 7.22045 1.47273C7.33864 1.41818 7.46591 1.39091 7.61136 1.39091C7.75682 1.39091 7.88409 1.41818 8.00227 1.47273C8.12046 1.52727 8.22955 1.6 8.31136 1.69091C8.40227 1.78182 8.475 1.88182 8.52955 2C8.58409 2.11818 8.61136 2.24545 8.61136 2.39091C8.61136 2.53636 8.575 2.65455 8.52955 2.77273Z" fill="white"/>
</svg>
`,p=l.qy`<svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.60838 0.745943L0.244749 8.10958C-0.0688876 8.42322 -0.0688876 8.9414 0.244749 9.26867L6.24475 15.2687C6.55838 15.5823 7.07657 15.5823 7.40384 15.2687L14.7675 7.90503C14.9175 7.7414 14.9993 7.53685 14.9993 7.31867V1.31867C14.9993 0.86867 14.6311 0.500488 14.1811 0.500488H8.18111C7.96293 0.500488 7.75838 0.582306 7.60838 0.745943ZM12.8038 4.65958C12.722 4.83685 12.6129 5.00049 12.4766 5.13685C12.3402 5.27322 12.1902 5.38231 11.9993 5.45049C11.8084 5.51867 11.6311 5.57322 11.4266 5.57322C11.222 5.57322 11.0175 5.53231 10.8402 5.45049C10.6629 5.38231 10.4993 5.27322 10.3629 5.13685C10.2266 5.00049 10.1175 4.83685 10.0493 4.65958C9.96748 4.48231 9.92657 4.2914 9.92657 4.07322C9.92657 3.85503 9.96748 3.66412 10.0493 3.48685C10.1175 3.32322 10.2266 3.15958 10.3629 3.03685C10.4993 2.90049 10.6629 2.7914 10.8402 2.70958C11.0175 2.62776 11.2084 2.58685 11.4266 2.58685C11.6447 2.58685 11.8357 2.62776 12.0129 2.70958C12.1902 2.7914 12.3538 2.90049 12.4766 3.03685C12.6129 3.17322 12.722 3.32322 12.8038 3.50049C12.8857 3.67776 12.9266 3.86867 12.9266 4.08685C12.9266 4.30503 12.872 4.48231 12.8038 4.65958Z" fill="#717171"/>
</svg>
`,h=l.qy`<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.27351 0.971551C5.57068 0.342816 6.4293 0.342816 6.72646 0.971551L8.14149 3.96535L11.3055 4.44543C11.97 4.54625 12.2353 5.39895 11.7545 5.88833L9.46494 8.21866L10.0054 11.5092C10.1189 12.2002 9.42431 12.7272 8.82998 12.4009L5.99999 10.8474L3.17001 12.4009C2.57569 12.7272 1.88105 12.2002 1.99456 11.5092L2.53504 8.21866L0.245535 5.88833C-0.235291 5.39895 0.030035 4.54625 0.69452 4.44543L3.85854 3.96535L5.27351 0.971551Z" fill="#717171"/>
</svg>
`;class g extends r{constructor(){super()}badgeTypeChanged(){"CurbsidePickup"===this.badgeType?(this.icon=d,this.enabled=!0):"OnSale"===this.badgeType?(this.icon=c,this.enabled=!0):"PriceDrop"===this.badgeType?(this.icon=p,this.enabled=!0):"LocalInventory"===this.badgeType?(this.icon=s,this.enabled=!0):"NewProduct"===this.badgeType&&(this.icon=h,this.enabled=!0)}}(0,a.Cg)([o.CF],g.prototype,"badgeType",void 0),(0,a.Cg)([o.CF],g.prototype,"badgeStyle",void 0),(0,a.Cg)([o.CF],g.prototype,"text",void 0);var u=i(74849),m=i(4126);const v=u.A` .info-pane .image-badge,.river .image-badge{background:#0078D4}.info-pane .image-badge .badge-text,.river .image-badge .badge-text{position:static;width:auto;height:16px;left:22px;top:2px;font-style:normal;font-weight:500;font-size:12px;line-height:16px;text-transform:uppercase;color:#FFFFFF}.info-pane .badge-icon path,.river .badge-icon path{fill:#FFFFFF}`,f=u.A`.river .image-badge{background:rgba(0,0,0,0.54)}.river .image-badge .badge-text{position:static;width:auto;height:16px;left:22px;top:2px;font-style:normal;font-weight:500;font-size:12px;line-height:16px;text-transform:uppercase;color:#FFFFFF}.river .image-background-gradient{position:absolute;background:linear-gradient(to left top,rgba(180,180,180,0) 3.99%,rgba(180,180,180,0.05) 57.8%,rgba(180,180,180,0.15) 75.35%,rgba(180,180,180,0.3) 100%);width:100%;height:50px;z-index:1}.river .badge-icon path{fill:#FFFFFF}`,b=u.A` .image-badge-decorator{overflow:hidden;width:100%;height:100%}.image-badge{display:flex;flex-direction:row;align-items:center;padding:2px 8px 2px 4px;position:absolute;width:auto;height:20px;left:8px;top:8px;background:rgba(255,255,255,0.8);border-radius:4px;z-index:1}.badge-icon{line-height:14px;margin-left:4px}.badge-text{position:static;height:16px;right:12px;top:8.5px;font-size:12px;font-weight:600;line-height:14px;display:flex;align-items:center;text-align:right;flex:none;order:5;flex-grow:0;margin-left:8px;text-transform:uppercase}.image-badge-wrapper{z-index:1}.image-badge{background:rgba(43,43,43,0.7)}.badge-text{color:white}.badge-icon path{fill:white}${f}
`.withBehaviors(new m.o("_badgeStyle","standingOut",u.A`
            ${v}
        `),new m.o("_badgeStyle","blendedIn",u.A`
            ${f}
        `));var x=i(91640);const $=l.qy`<div class="image-badge-decorator" layout=${t=>t.layout}>${(0,x.z)(t=>t.enabled,l.qy`<div class="image-badge-wrapper ${t=>t.isInfoPane?"info-pane":"river"}" style=${t=>t.extraBadgeStyle}><div class="image-background-gradient"></div><div class="image-badge"><div class="badge-icon">${t=>t.icon}</div><div class="badge-text">${t=>t.text}</div></div></div><span part="image-with-badge"><slot name="image-with-badge"></slot></span>`)} ${(0,x.z)(t=>!t.enabled,l.qy`<slot name="image-with-badge"></slot>`)}</div>`,w=u.A` .image-badge-decorator{position:relative;filter:drop-shadow(rgba(0,0,0,0.25) 0px 0px 4px)}.image-badge-wrapper{height:var(--z-index-image-height);width:var(--z-index-image-width);position:absolute;margin:12px}@media (prefers-color-scheme:light){.image-badge-decorator[layout="imageAtBottom"]{.image-background-gradient{background:linear-gradient(120.95deg,rgba(34,34,34,0) 3.99%,rgba(34,34,34,0.05) 57.8%,rgba(34,34,34,0.15) 75.35%,rgba(34,34,34,0.35) 100%);transform:unset}}.river .image-background-gradient{height:100%}}.image-badge-decorator[layout="imageAtBottom"] .image-badge{display:flex;flex-direction:row;align-items:center;position:absolute;inset:auto 0 0 auto;border-radius:20px 0px 0px 0px}`;let y=class extends r{};y=(0,a.Cg)([(0,n.E)({name:"msn-raw-image-badge-decorator",template:$,styles:b})],y);let C=class extends g{};C=(0,a.Cg)([(0,n.E)({name:"msn-image-badge-decorator",template:$,styles:b})],C);let k=class extends g{};k=(0,a.Cg)([(0,n.E)({name:"msn-z-index-image-badge-decorator",template:$,styles:[b,w]})],k)},87677:function(t,e,i){i.r(e),i.d(e,{MsnZIndexCard:function(){return P}});var a,n=i(56911),o=i(22131),r=i(64187),l=i(73477),d=i(7896),s=i(61138),c=i(64003),p=i(48751),h=i(89580),g=i(57416),u=i(50882),m=i(92011),v=i(38493),f=i(60815);!function(t){t.imageAtBottom="imageAtBottom",t.imageAtTop="imageAtTop",t.imageAtRight9By16="imageAtRight9By16",t.imageAtRight3By4="imageAtRight3By4",t.animatedImagery9by16="animatedImagery9by16"}(a||(a={}));class b extends m.L{constructor(){super(...arguments),this.layout=a.imageAtTop,this.headingMaxLines=5,this.documentDirection="ltr",this.headinglevel=3}handleStartActionsContentChange(){this.startActionsContainer.classList.toggle("start-actions",this.startActions.assignedNodes().length>0),this.hasFooter=this.endActions.assignedNodes().length>0}handleEndActionsContentChange(){this.endActionsContainer.classList.toggle("end-actions",this.endActions.assignedNodes().length>0),this.hasFooter=this.endActions.assignedNodes().length>0}abstractChanged(){this.$fastController.isConnected&&(this.hasAbstract=this.abstract.length>0)}handleMediaContentChange(){this.mediaContainer.classList.toggle("media",this.media.assignedNodes().length>0)}handleBackgroundImageContentChange(){this.backgroundImageContainer.classList.toggle("background-image",this.backgroundImage.assignedNodes().length>0)}handleZIndexCardLinkClick(t){return this.$emit("link-invoked",t),!0}}(0,n.Cg)([v.CF],b.prototype,"layout",void 0),(0,n.Cg)([(0,v.CF)({attribute:"heading-max-lines"})],b.prototype,"headingMaxLines",void 0),(0,n.Cg)([(0,v.CF)({attribute:"document-direction"})],b.prototype,"documentDirection",void 0),(0,n.Cg)([(0,v.CF)({attribute:"heading-level",mode:"fromView",converter:v.R$})],b.prototype,"headinglevel",void 0),(0,n.Cg)([(0,v.CF)({mode:"fromView"})],b.prototype,"href",void 0),(0,n.Cg)([f.sH],b.prototype,"anchorTelemetryTag",void 0),(0,n.Cg)([f.sH],b.prototype,"mediaNodes",void 0),(0,n.Cg)([f.sH],b.prototype,"hasAbstract",void 0),(0,n.Cg)([f.sH],b.prototype,"hasFooter",void 0),(0,n.Cg)([f.sH],b.prototype,"abstract",void 0),(0,n.Cg)([f.sH],b.prototype,"iconSlottedNodes",void 0),(0,n.Cg)([(0,v.CF)({attribute:"image-priority",mode:"boolean"})],b.prototype,"imagePriority",void 0),(0,n.Cg)([v.CF],b.prototype,"target",void 0),(0,n.Cg)([f.sH],b.prototype,"hoverActionsSlottedNodes",void 0);var x=i(74849);const{imageAtBottom:$,imageAtTop:w,imageAtRight9By16:y,imageAtRight3By4:C,animatedImagery9by16:k}=a,L="#373737",F="white",S=t=>t.withBehaviors((0,o.mr)(x.A` .heading{color:${u.A.LinkText};
            background: ${u.A.ButtonFace}}.footer,.start-actions,.end-actions,::slotted([slot="start-actions"]),::slotted([slot="end-actions"]){background:${u.A.ButtonFace};
            color: ${u.A.ButtonText};fill:currentcolor}::slotted(fluent-button[appearance="stealth"]:not(:hover)){background:${u.A.ButtonFace};
        }
    `)),_=S(x.A` :host span.title_1x_2y,:host span.title_1x_3y{font-size:20px}${(0,r.V)("flex")} :host{position:relative;width:auto;box-sizing:border-box;font-family:${d.O};flex-direction:column;outline:none;overflow:hidden;height:100%;width:100%}:host(:hover) .hover-actions{opacity:1;transition:opacity 0.2s ease-in-out}:host(:hover) .media{filter:brightness(0.98)}.body{display:grid;justify-content:center;row-gap:8px;column-gap:10px;grid-template-columns:1fr auto;grid-template-rows:auto}.footer{padding-inline-start:var(--footer-start-padding,16px);padding-inline-end:var(--footer-start-padding,16px);padding-top:var(--footer-padding-top,0);padding-bottom:var(--footer-padding-bottom,4px);margin-top:16px;font-size:var(--footer-font-size,${s.k});
        line-height: var(--footer-line-height, ${s.F})}.footer,.start-actions,.end-actions{display:flex;flex-direction:row;align-items:center;justify-content:space-between;color:${c.c};
        fill: ${c.c};
    }    

    :host([layout=${w}]) .footer{position:absolute;bottom:24px;padding:0 24px;margin-top:unset;width:268px;padding-inline-start:24px;padding-inline-end:24px}.footer__hidden{display:none}.heading-wrapper{grid-row:1;display:flex;flex-direction:column}.heading-wrapper a:after{content:"";height:304px;position:absolute;width:300px;z-index:1}:host([layout=${w}]) .heading-wrapper a:after{top:-52px}:host([layout=${$}]) .heading-wrapper a:after{top:-38px}.media{display:flex;flex-direction:row;position:absolute}:host([layout=${$}]) .media{bottom:4px}:host([layout=${w}]) .media{top:8px}:host([image-priority]) .body{grid-template-columns:1}:host([image-priority]) .media-wrapper{grid-row:1;grid-column:span 2;margin:0;display:flex;justify-content:center}:host([image-priority]) .heading-container{grid-row:2;grid-column:span 2;padding-inline-start:var(--heading-start-padding,16px);padding-inline-end:var(--heading-end-padding,16px)}:host([layout=${$}]) .heading-container{top:39px;position:absolute}::slotted([slot="start-actions"]),::slotted([slot="end-actions"]){z-index:2;display:grid;gap:5px;align-items:center;grid-auto-flow:column}:host([layout=${w}]) ::slotted([slot="call-to-action"]){top:230px}:host([layout=${$}]) ::slotted([slot="call-to-action"]){top:-40px}::slotted([slot="call-to-action"]){width:calc(100% - 32px);grid-row:3;grid-column:1 / span 2;margin:0 24px}::slotted(fluent-button[slot="start-actions"]),::slotted(fluent-button[slot="end-actions"]){color:${c.c};
        fill: ${c.c}}.heading{-webkit-box-orient:vertical;-webkit-line-clamp:var(--heading-max-lines,2);color:${p.l};
        display: -webkit-box;
        font-size: var(--heading-font-size, ${h.Y});
        font-weight: 600;
        line-height: var(--heading-line-height, ${h.v});outline:none;overflow:hidden;text-decoration:none;white-space:initial}.mask{display:none}.heading:hover,.heading:${l.N}{text-decoration:underline}@media (prefers-color-scheme:dark){.heading-gradient-background{background:${L}}}@media (prefers-color-scheme:light){.heading-gradient-background{background:${F}}}.heading-gradient-background{border-radius:calc(${g.JU} * 1px);
        box-shadow: 0 0 calc((var(--elevation) * 0.225px) + 2px) rgba(0, 0, 0, calc(0.11 * (2 - var(--background-luminance, 1)))), 0 calc(var(--elevation) * 0.4px) calc((var(--elevation) * 0.9px)) rgba(0, 0, 0, calc(0.13 * (2 - var(--background-luminance, 1))));
        height: 252px;
        left: 8px;
        position: absolute;
        width: 300px;
    }

    :host([layout=${$}]) .heading-gradient-background{top:8px}:host([layout=${w}]) .heading-gradient-background{bottom:8px}:host([layout=${w}]) .heading-gradient-background .heading{padding-top:137px;padding-right:16px}.heading::after{bottom:0;content:"";left:0;position:absolute;right:0;top:0}`),T=S(x.A`
:host([layout=${C}]) span.title_1x_2y,
:host([layout=${C}]) span.title_1x_3y{font-size:20px}:host([layout=${C}]) .heading-wrapper{grid-row:1;display:flex;flex-direction:column}:host([layout=${C}]) .heading-wrapper a:after{content:"";height:304px;position:absolute;width:300px;z-index:1}:host([layout=${C}]) .heading{overflow:hidden;text-decoration:none;font-size:20px;line-height:28px;width:121px;margin-top:14px;overflow-wrap:break-word}:host([layout=${C}][document-direction="rightToLeft"]) .heading-wrapper a:after{
    left: 0px;
}

:host([layout=${C}][document-direction="rightToLeft"]) .heading{margin-right:179px}:host([layout=${C}][heading-max-lines="eight-lines-heading"]) .heading{
    --heading-max-lines: 8;
}

:host([layout=${C}][heading-max-lines="five-lines-heading"]) .heading{
    --heading-max-lines: 5;
}

:host([layout=${C}]) ::slotted([slot="call-to-action"]){width:102px;top:175px;position:absolute}:host([layout=${C}][document-direction="rightToLeft"]) ::slotted([slot="call-to-action"]){
    left: 16px;
}

:host([layout=${C}]) .media-wrapper{top:57px;left:162px;position:absolute;width:113px;height:202px}:host([layout=${C}][document-direction="rightToLeft"]) .media-wrapper{
    left: 178px;
}

:host([layout=${C}]) .heading:hover,
:host([layout=${C}]) .heading:${l.N}{text-decoration:underline}@media (prefers-color-scheme:dark){:host([layout=${C}]) .heading-gradient-background{background:${L};
    }

    :host([layout=${C}]) ::slotted([slot="call-to-action"]),
    :host([layout=${C}]) ::slotted([slot="start-actions"]),
    :host([layout=${C}]) .heading{color:#ffffff}}@media (prefers-color-scheme:light){:host([layout=${C}]) .heading-gradient-background{background:${F};
    }  
    
    :host([layout=${C}]) ::slotted([slot="call-to-action"]),
    :host([layout=${C}]) ::slotted([slot="start-actions"]),
    :host([layout=${C}]) .heading{color:#222222}}:host([layout=${C}]) .heading-gradient-background{border-radius:calc(${g.JU} * 1px);
    box-shadow: 0 0 calc((var(--elevation) * 0.225px) + 2px) rgba(0, 0, 0, calc(0.11 * (2 - var(--background-luminance, 1)))), 0 calc(var(--elevation) * 0.4px) calc((var(--elevation) * 0.9px)) rgba(0, 0, 0, calc(0.13 * (2 - var(--background-luminance, 1))));
    height: 304px;
    left: 8px;
    position: absolute;
    width: 241px;
    top: 8px;
}

:host([layout=${C}][document-direction="rightToLeft"]) .heading-gradient-background{
    margin-left: 16px;
}


:host([layout=${C}]) .footer{display:flex;position:absolute;bottom:16px;width:209px;left:4px}:host([layout=${C}][document-direction="rightToLeft"]) .footer{
    right: 55px;
}

:host([layout=${C}]) ::slotted([slot="start-actions"]){position:unset;z-index:2;gap:8px;align-items:center;grid-auto-flow:column}:host([layout=${C}]) .start-actions{width:127px}`),z=S(x.A`
    :host([layout=${y}]) span.title_1x_2y,
    :host([layout=${y}]) span.title_1x_3y{font-size:20px}:host([layout=${y}]) .heading-wrapper{ 
        content: "";
        height: 304px;
        position: absolute;
        width: 300px;
        z-index: 1;
    }

    :host([layout=${y}][document-direction="rightToLeft"]) .heading-wrapper{
        left: 0px;
    }

    :host([layout=${y}][document-direction="rightToLeft"]) .heading{margin-right:179px}:host([layout=${y}]) .heading{overflow:hidden;text-decoration:none;font-size:20px;line-height:28px;width:121px;margin-top:14px;overflow-wrap:break-word}:host([layout=${y}][heading-max-lines="eight-lines-heading"]) .heading{
        --heading-max-lines: 8;
    }

    :host([layout=${y}][heading-max-lines="five-lines-heading"]) .heading{
        --heading-max-lines: 5;
    }

    :host([layout=${y}]) ::slotted([slot="call-to-action"]){width:102px;top:175px;left:0px}:host([layout=${y}][document-direction="rightToLeft"]) ::slotted([slot="call-to-action"]){
        left: 16px;
    }

    :host([layout=${y}]) .media-wrapper{top:31px;left:162px;position:absolute;width:113px;height:202px}:host([layout=${y}][document-direction="rightToLeft"]) .media-wrapper{
        left: 178px;
    }

    :host([layout=${y}]) .heading:hover,
    :host([layout=${y}]) .heading:${l.N}{text-decoration:underline}@media (prefers-color-scheme:dark){:host([layout=${y}]) .heading-gradient-background{background:${L};
        }

        :host([layout=${y}]) ::slotted([slot="call-to-action"]),
        :host([layout=${y}]) ::slotted([slot="start-actions"]),
        :host([layout=${y}]) .heading{color:#ffffff}}@media (prefers-color-scheme:light){:host([layout=${y}]) .heading-gradient-background{background:${F};
        }  
        
        :host([layout=${y}]) ::slotted([slot="call-to-action"]),
        :host([layout=${y}]) ::slotted([slot="start-actions"]),
        :host([layout=${y}]) .heading{color:#222222}}:host([layout=${y}]) .heading-gradient-background{border-radius:calc(${g.JU} * 1px);
        box-shadow: 0 0 calc((var(--elevation) * 0.225px) + 2px) rgba(0, 0, 0, calc(0.11 * (2 - var(--background-luminance, 1)))), 0 calc(var(--elevation) * 0.4px) calc((var(--elevation) * 0.9px)) rgba(0, 0, 0, calc(0.13 * (2 - var(--background-luminance, 1))));
        height: 304px;
        left: 8px;
        position: absolute;
        width: 241px;
        top: 8px;
    }

    :host([layout=${y}][document-direction="rightToLeft"]) .heading-gradient-background{
        margin-left: 16px;
    }


    :host([layout=${y}]) .footer{display:flex;position:absolute;bottom:16px;left:8px;width:209px}:host([layout=${y}][document-direction="rightToLeft"]) .footer{
        right: 55px;
    }

    :host([layout=${y}]) ::slotted([slot="start-actions"]){position:unset;z-index:2;gap:8px;align-items:center;grid-auto-flow:column}:host([layout=${y}]) .start-actions{width:127px}`),M=S(x.A`
    :host([layout=${k}]) span.title_1x_2y,
    :host([layout=${k}]) span.title_1x_3y{font-size:20px}:host([layout=${k}]) .heading-wrapper{ 
        content: "";
        height: 304px;
        position: absolute;
        width: 300px;
        z-index: 1;
    }

    :host([layout=${k}][document-direction="rightToLeft"]) .heading-wrapper{
        left: 0px;
    }

    :host([layout=${k}][document-direction="rightToLeft"]) .heading{margin-right:179px}:host([layout=${k}]) .heading{overflow:hidden;text-decoration:none;font-size:20px;line-height:28px;width:121px;margin-top:14px;overflow-wrap:break-word}:host([layout=${k}][heading-max-lines="eight-lines-heading"]) .heading{
        --heading-max-lines: 8;
    }

    :host([layout=${k}][heading-max-lines="five-lines-heading"]) .heading{
        --heading-max-lines: 5;
    }

    :host([layout=${k}]) ::slotted([slot="call-to-action"]){width:102px;top:175px;left:0px}:host([layout=${k}][document-direction="rightToLeft"]) ::slotted([slot="call-to-action"]){
        left: 16px;
    }

    :host([layout=${k}]) .media-wrapper{position:absolute;width:141px;height:250px;right:8px;top:8px}:host([layout=${k}][document-direction="rightToLeft"]) .media-wrapper{
        left: 178px;
    }

    :host([layout=${k}]) .heading:hover,
    :host([layout=${k}]) .heading:${l.N}{text-decoration:underline}@media (prefers-color-scheme:dark){:host([layout=${k}]) .heading-gradient-background{background:${L};
        }

        :host([layout=${k}]) ::slotted([slot="call-to-action"]),
        :host([layout=${k}]) ::slotted([slot="start-actions"]),
        :host([layout=${k}]) .heading{color:#ffffff}}@media (prefers-color-scheme:light){:host([layout=${k}]) .heading-gradient-background{background:${F};
        }  
        
        :host([layout=${k}]) ::slotted([slot="call-to-action"]),
        :host([layout=${k}]) ::slotted([slot="start-actions"]),
        :host([layout=${k}]) .heading{color:#222222}}:host([layout=${k}]) .heading-gradient-background{border-radius:calc(${g.JU} * 1px);
        box-shadow: 0 0 calc((var(--elevation) * 0.225px) + 2px) rgba(0, 0, 0, calc(0.11 * (2 - var(--background-luminance, 1)))), 0 calc(var(--elevation) * 0.4px) calc((var(--elevation) * 0.9px)) rgba(0, 0, 0, calc(0.13 * (2 - var(--background-luminance, 1))));
        height: 304px;
        left: 8px;
        position: absolute;
        width: 300px;
        top: 8px;
    }

    :host([layout=${k}][document-direction="rightToLeft"]) .heading-gradient-background{
        margin-left: 16px;
    }


    :host([layout=${k}]) .footer{display:flex;position:absolute;bottom:16px;left:8px;width:268px}:host([layout=${k}][document-direction="rightToLeft"]) .footer{
        right: 0px;
    }

    :host([layout=${k}][document-direction="rightToLeft"]) ::slotted([slot="end-actions"]){margin-left:8px}:host([layout=${k}]) ::slotted([slot="start-actions"]){position:unset;z-index:2;gap:8px;align-items:center;grid-auto-flow:column}`);var A=i(96950),B=i(60402),H=i(416),I=i(10108),E=i(91640),D=i(82774);const Z=A.qy`<div class="footer ${t=>t.hasAbstract?"has-abstract-footer":""} ${t=>t.hasFooter?"":"footer__hidden"}" part="footer"><span part="start-actions" ${(0,B.K)("startActionsContainer")}><slot name="start-actions" ${(0,B.K)("startActions")} @slotchange=${t=>t.handleStartActionsContentChange()}></slot></span><span part="end-actions" ${(0,B.K)("endActionsContainer")}><slot name="end-actions" ${(0,B.K)("endActions")} @slotchange=${t=>t.handleEndActionsContentChange()}></slot></span></div>`,V=A.qy`<template ${(0,H.Y)({property:"mediaNodes",filter:(0,I.Y)("[slot='media'], [slot='icon']")})}><span part="background-image" ${(0,B.K)("backgroundImageContainer")}><slot name="background-image" ${(0,B.K)("backgroundImage")} @slotchange=${t=>t.handleBackgroundImageContentChange()}></slot></span><div class="mask" part="mask"></div><div class="heading-gradient-background">${(0,E.z)(t=>t.layout===a.imageAtBottom,Z)}<div class="heading-container" part="heading-container"><slot name="attribution"></slot><span class="heading-wrapper" part="heading-wrapper" role="heading" aria-level=${t=>t.headinglevel}><a class="heading" part="heading" href=${t=>t.href?t.href:void 0} target=${t=>t.target?t.target:void 0} @click=${(t,e)=>t.handleZIndexCardLinkClick(e.event)} data-t="${t=>t.anchorTelemetryTag}"><slot></slot></a></span></div></div><div class="body ${t=>t.hasAbstract?"has-abstract":""}" part="body">${(0,E.z)(t=>{var e;return(null===(e=t.mediaNodes)||void 0===e?void 0:e.length)>0},A.qy`<div class="media-wrapper" part="media-wrapper"><div part="media" ${(0,B.K)("mediaContainer")}><slot name="media" ${(0,B.K)("media")} @slotchange=${t=>t.handleMediaContentChange()}></slot><span part="icon" ${(0,B.K)("iconContainer")} class="${t=>t.iconSlottedNodes&&t.iconSlottedNodes.length?"icon":"icon_hidden"}"><slot name="icon" ${(0,B.K)("icon")} ${(0,D.e)("iconSlottedNodes")}></slot></span></div></div>`)}<div class="abstract"><slot name="abstract" ${(0,D.e)("abstract")}></slot></div><slot name="call-to-action"></slot>${(0,E.z)(t=>t.layout!==a.imageAtBottom,Z)}</div><span part="hover-actions" class="${t=>t.hoverActionsSlottedNodes&&t.hoverActionsSlottedNodes.length?"hover-actions":"hover-actions_hidden"}"><slot name="hover-actions" ${(0,D.e)("hoverActionsSlottedNodes")}></slot></span></template>`;let P=class extends b{};P=(0,n.Cg)([(0,m.E)({name:"msn-z-index-card",template:V,styles:[_,z,T,M],shadowOptions:{delegatesFocus:!0}})],P)},89859:function(t,e,i){i.r(e),i.d(e,{MsnNativeAdSaleHighlightBadge:function(){return a.j}});var a=i(74333)},93516:function(t,e,i){i.d(e,{m:function(){return s},u:function(){return d}});var a=i(18e3),n=i(95125),o=i(17254),r=i(26587),l=i(80607);const d=function(t,e,i){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;t&&t.dispatchEvent(new CustomEvent("NativeAdUserAction",{bubbles:!0,cancelable:!0,composed:!0,detail:{eventType:e,dur:a,message:i,element:t.tagName.toLowerCase()}}))},s=function(t,e,i){var d;let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,c=arguments.length>4?arguments[4]:void 0;const p=new n.Yg,h=new a.m;let g="";var u;Array.isArray(null===o.T3||void 0===o.T3||null===(d=o.T3.CurrentRequestTargetScope)||void 0===d?void 0:d.pageExperiments)&&(g=(0,r.A)(l.K,null===o.T3||void 0===o.T3||null===(u=o.T3.CurrentRequestTargetScope)||void 0===u?void 0:u.pageExperiments).join(";"));const m=p.populateBeaconUrl(t,g,e,i,s,c);h.fireUserActionBeacon(null==m?void 0:m.href)}},98384:function(t,e,i){i.d(e,{A:function(){return o}});var a=i(10405);var n=function(t,e){var i;if("function"!=typeof e)throw new TypeError("Expected a function");return t=(0,a.A)(t),function(){return--t>0&&(i=e.apply(this,arguments)),t<=1&&(e=void 0),i}};var o=function(t){return n(2,t)}}}]);