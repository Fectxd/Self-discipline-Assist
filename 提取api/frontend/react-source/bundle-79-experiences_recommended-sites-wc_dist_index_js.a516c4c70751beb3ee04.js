"use strict";(self.homePageWebpackChunks=self.homePageWebpackChunks||[]).push([["experiences_recommended-sites-wc_dist_index_js"],{5751:function(e,t,o){o.d(t,{F7:function(){return a},gb:function(){return c}});var i=o(7965),r=o(41820),n=o(98793),s=o(17720),d=o(98216);const l="__storedRecommendedSitesState__";async function a(e){let t=s.vv.get(l);if(t)return t;if(t=e.showDefault3Rows?"threerows":"tworows",e.enableRecommendedSitesSelection){const e=await async function(){if(!await n.Q.isApiAvailableToUse())return null;const e=await n.Q.getPreferenceSetting(r.K5.recommended_sites);if(e&&void 0!==e.value)return i.HN[e.value];return null}();e&&(t=e)}return"onerow"===t&&(t="tworows"),d.YT.addOrUpdateTmplProperty("RecommendedSites",t.toString()),s.vv.set(l,t),t}async function c(e){if(!await n.Q.isApiAvailableToUse())return;const t={setting:r.K5.recommended_sites,source:"ntp",timestamp:(new Date).getTime(),value:i.bk[e]};n.Q.savePreferenceSetting(r.K5.recommended_sites,t)}},13937:function(e,t,o){o.d(t,{jU:function(){return s}});var i=o(17720);const r=()=>i.vv.get("__core_DisplayModeCoordination_displayModeMap__",()=>({})),n=()=>i.vv.get("__core_DisplayModeCoordination_callbackMap__",()=>({}));function s(e,t){const o=n(),i=r();let s=o[e];s||(s=[],o[e]=s),s.push(t);const d=i[e];d&&t(d)}},27550:function(e,t,o){o.d(t,{w:function(){return i}});const i={medium:"medium",large:"large",extraLarge:"extra-large",twoExtraLarge:"extra-large-2"}},28986:function(e,t,o){o.d(t,{DK:function(){return b},Rg:function(){return g},v8:function(){return p}});var i=o(68136),r=o(64183),n=o(95239);function s(e,t){return i.G.create({name:e},t)}const d=s("neutral-fill-secondary-rest-delta",3),l=s("neutral-fill-secondary-hover-delta",2),a=s("neutral-fill-secondary-active-delta",1),c=s("neutral-fill-secondary-focus-delta",3);var m=o(31023);const{create:u}=i.G,h=s("neutral-fill-secondary-recipe",{evaluate:(e,t)=>(0,r.t)(e(m.r),t||e(n.p),e(d),e(l),e(a),e(c))}),p=u("neutral-fill-secondary-rest",e=>e(h).evaluate(e).rest),g=u("neutral-fill-secondary-hover",e=>e(h).evaluate(e).hover),b=u("neutral-fill-secondary-active",e=>e(h).evaluate(e).active);u("neutral-fill-secondary-focus",e=>e(h).evaluate(e).focus)},30326:function(e,t,o){o.d(t,{m:function(){return S}});var i=o(65614),r=o(74849),n=o(64187),s=o(86856);const d=r.A`
    .scroll-prev {
        right: auto;
        left: 0;
    }

    .scroll.scroll-next::before,
    .scroll-next .scroll-action {
        left: auto;
        right: 0;
    }

    .scroll.scroll-next::before {
        background: linear-gradient(to right, transparent, var(--scroll-fade-next));
    }

    .scroll-next .scroll-action {
        transform: translate(60%, -50%);
    }
`,l=r.A`
    .scroll.scroll-next {
        right: auto;
        left: 0;
    }

    .scroll.scroll-next::before {
        background: linear-gradient(to right, var(--scroll-fade-next), transparent);
        left: auto;
        right: 0;
    }

    .scroll.scroll-prev::before {
        background: linear-gradient(to right, transparent, var(--scroll-fade-previous));
    }

    .scroll-prev .scroll-action {
        left: auto;
        right: 0;
        transform: translate(60%, -50%);
    }
`,a=r.A`
    div.scroll-view {
        overflow-x: hidden;
    }

    .scroll {
        bottom: 0;
        pointer-events: none;
        position: absolute;
        right: 0;
        top: 0;
        user-select: none;
        width: 100px;
    }

    .scroll.disabled {
        display: none;
    }

    .scroll::before,
    .scroll-action {
        left: 0;
        position: absolute;
    }

    .scroll::before {
        background: linear-gradient(to right, var(--scroll-fade-previous), transparent);
        content: "";
        display: block;
        height: 100%;
        width: 100%;
    }

    .scroll-action {
        pointer-events: auto;
        right: auto;
        top: 50%;
        transform: translate(-60%, -50%);
        transition: opacity 0.2s ease-in-out;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.14);
    }

    :host([flippers-hidden-from-at="true"]) .scroll-action {
        opacity: 0;
    }

    :host([flippers-hidden-from-at="true"]) .scroll-area:hover .scroll-action {
        opacity: 1;
    }
`.withBehaviors(new s.t(d,l)),c=r.A`
    ${(0,n.V)("block")} :host {
        --scroll-align: center;
        --scroll-item-spacing: 4px;
        contain: layout;
        position: relative;
    }

    .scroll-area {
        position: relative;
        display: flex;
    }

    .scroll-view {
        overflow-x: auto;
        scrollbar-width: none;
        padding: var(--scroll-view-padding, 10px);
        overflow-y: clip;
    }

    ::-webkit-scrollbar {
        display: none;
    }

    .content-container {
        align-items: var(--scroll-align);
        display: inline-flex;
        flex-wrap: nowrap;
        position: relative;
        height: 100%;
    }

    .content-container ::slotted(*) {
        margin-inline-end: var(--scroll-item-spacing);
    }

    .content-container ::slotted(*:last-child) {
        margin-inline-end: 0;
    }
`;var m=o(56911),u=o(96751),h=o(38493),p=o(27550);class g extends u.I{constructor(){super(...arguments),this.flipperSize=p.w.large}connectedCallback(){super.connectedCallback(),"mobile"!==this.view&&this.$fastController.addStyles(a)}get isRTL(){return this.scrollItems.length>1&&this.scrollItems[0].offsetLeft>this.scrollItems[1].offsetLeft}getScrollStops(){return super.getScrollStops()}getCurrentScrollIndex(){const e=this.isRTL,t=this.getScrollStops(),o=this.scrollContainer.scrollLeft;return t.findIndex((i,r)=>i>=o&&(e||r===t.length-1||t[r+1]>o))}getNextScrollIndex(){const e=this.scrollContainer.scrollLeft,t=this.getScrollStops(),o=t.findIndex(t=>Math.abs(t)>=Math.abs(e)),i=t.findIndex(t=>Math.abs(e)+this.getWidth()<=Math.abs(t));let r=o;return i>o+2?r=i-2:o<t.length-2&&(r=o+1),r}getWidth(){return super.getWidth()}}(0,m.Cg)([(0,h.CF)({attribute:"next-telemetry"}),(0,m.Sn)("design:type",String)],g.prototype,"nextTelemetry",void 0),(0,m.Cg)([(0,h.CF)({attribute:"previous-telemetry"}),(0,m.Sn)("design:type",String)],g.prototype,"previousTelemetry",void 0),(0,m.Cg)([(0,h.CF)({attribute:"flipper-size"}),(0,m.Sn)("design:type",String)],g.prototype,"flipperSize",void 0),(0,m.Cg)([(0,h.CF)({attribute:"aria-label-previous"}),(0,m.Sn)("design:type",String)],g.prototype,"ariaLabelPrevious",void 0),(0,m.Cg)([(0,h.CF)({attribute:"aria-label-next"}),(0,m.Sn)("design:type",String)],g.prototype,"ariaLabelNext",void 0);var b=o(99015),v=o(96950);const x=(0,b.Y)({nextFlipper:v.qy`
            <cs-flipper
                size="${e=>e.flipperSize}"
                @click="${e=>e.scrollToNext()}"
                aria-hidden="${e=>e.flippersHiddenFromAT}"
                aria-label="${e=>e.ariaLabelNext||"next"}"
                data-t="${e=>e.nextTelemetry}"
                part="next-flipper"
            >
                <slot name="next" slot="next"></slot>
            </cs-flipper>
        `,previousFlipper:v.qy`
            <cs-flipper
                size="${e=>e.flipperSize}"
                @click="${e=>e.scrollToPrevious()}"
                direction="previous"
                aria-hidden="${e=>e.flippersHiddenFromAT}"
                aria-label="${e=>e.ariaLabelPrevious||"previous"}"
                data-t="${e=>e.previousTelemetry}"
                part="previous-flipper"
            >
                <slot name="previous" slot="previous"></slot>
            </cs-flipper>
        `}),S=g.compose({name:`${i.G.prefix}-horizontal-scroll`,styles:c,template:x})},60143:function(e,t,o){o.d(t,{B:function(){return n}});var i=o(96950),r=o(18893);function n(e={}){const t={};return i.qy`
        <template
            role="button"
            aria-disabled="${e=>!!e.disabled||void 0}"
            tabindex="${e=>e.hiddenFromAT?-1:0}"
            @keyup="${(e,t)=>e.keyupHandler(t.event)}"
        >
            ${o=>function(e,o){let n=t[e];return n||(t[e]=n=i.qy`
                <span part="${e}" class="${e}">
                    <slot name="${e}">
                        ${(0,r.R)(o[e])}
                    </slot>
                </span>
            `),n}(o.direction,e)}
        </template>
    `}},64183:function(e,t,o){o.d(t,{o:function(){return s},t:function(){return n}});var i=o(68009),r=o(49399);function n(e,t,o,r,n,s,d){const l=e.closestIndexOf(t);return null==d&&(d=(0,i.F)(t)),{rest:e.get(l+d*o),hover:e.get(l+d*r),active:e.get(l+d*n),focus:e.get(l+d*s)}}function s(e,t,o,i,s,d,l=void 0,a,c,m,u,h=void 0){return(0,r.H)(t)?n(e,t,a,c,m,u,h):n(e,t,o,i,s,d,l)}},69966:function(e,t,o){o.d(t,{m:function(){return L}});var i=o(65614),r=o(56911),n=o(84506),s=o(38493),d=o(27550);class l extends n.d{constructor(){super(...arguments),this.size=d.w.medium}}(0,r.Cg)([s.CF,(0,r.Sn)("design:type",String)],l.prototype,"size",void 0);var a=o(28986),c=o(57416),m=o(48751),u=o(48196),h=o(74838),p=o(79288),g=o(14996),b=o(86856),v=o(60993),x=o(73477),S=o(22131),f=o(50882),w=o(74849),$=o(64187);const y=w.A`
    ${(0,$.V)("inline-flex")} :host {
        align-items: center;
        background: ${a.v8};
        border-radius: calc(${c.Pb} * 1px);
        color: ${m.l};
        fill: currentcolor;
        height: calc(${u.D} * 1px);
        justify-content: center;
        outline: none;
        width: calc(${h.vR} * 4px);
    }

    :host([size="large"]) {
        height: calc(${h.vR} * 12px);
        width: calc(${h.vR} * 6px);
    }

    :host([size="extra-large"]) {
        height: calc(${h.vR} * 12px);
        width: calc(${h.vR} * 6.5px);
    }

    :host([size="extra-large-2"]) {
        height: calc(${h.vR} * 12px);
        width: calc(${h.vR} * 7px);
    }

    :host([size="extra-large"]) ::slotted(svg) {
        height: 30px;
        width: 30px;
    }

    :host([size="extra-large-2"]) ::slotted(svg) {
        height: 34px;
        width: 34px;
    }

    ::slotted(svg) {
        height: 16px;
        width: 16px;
    }

    :host([size="large"]) ::slotted(svg) {
        height: 20px;
        width: 20px;
    }

    :host([disabled]) {
        cursor: ${v.Z};
        opacity: ${p.q};
        pointer-events: none;
    }

    .next,
    .previous {
        display: flex;
    }

    :host(:not([disabled]):hover) {
        cursor: pointer;
        background: ${a.Rg};
    }

    :host(:not([disabled]):active) {
        background: ${a.DK};
    }

    :host(:${x.N}) {
        border-color: ${g.WN};
    }

    :host::-moz-focus-inner {
        border: 0;
    }
`.withBehaviors((0,S.mr)(w.A`
            :host {
                background: ${f.A.ButtonFace};
                border-color: ${f.A.ButtonText};
            }
            :host .next,
            :host .previous {
                color: ${f.A.ButtonText};
                fill: currentcolor;
            }
            :host(:not([disabled]):hover) {
                background: ${f.A.Highlight};
            }
            :host(:not([disabled]):hover) .next,
            :host(:not([disabled]):hover) .previous {
                color: ${f.A.HighlightText};
                fill: currentcolor;
            }
            :host([disabled]) {
                opacity: 1;
            }
            :host([disabled]),
            :host([disabled]) .next,
            :host([disabled]) .previous {
                border-color: ${f.A.GrayText};
                color: ${f.A.GrayText};
                fill: currentcolor;
            }
            :host(:${x.N}) {
                forced-color-adjust: none;
                border-color: ${f.A.Highlight};
                box-shadow: 0 0 0 2px ${f.A.ButtonFace},
                    0 0 0 4px ${f.A.ButtonText};
            }
        `),new b.t(w.A``,w.A`
            :host {
                transform: scaleX(-1);
            }
        `));const k=(0,o(60143).B)(),L=l.compose({name:`${i.G.prefix}-flipper`,styles:y,template:k})},84506:function(e,t,o){o.d(t,{d:function(){return d}});var i=o(56911),r=o(92011),n=o(38493);const s="next";class d extends r.L{constructor(){super(...arguments),this.hiddenFromAT=!0,this.direction=s}keyupHandler(e){if(!this.hiddenFromAT){const t=e.key;"Enter"!==t&&"Space"!==t||this.$emit("click",e)}}}(0,i.Cg)([(0,n.CF)({mode:"boolean"}),(0,i.Sn)("design:type",Boolean)],d.prototype,"disabled",void 0),(0,i.Cg)([(0,n.CF)({attribute:"aria-hidden",converter:n.Bs}),(0,i.Sn)("design:type",Boolean)],d.prototype,"hiddenFromAT",void 0),(0,i.Cg)([n.CF,(0,i.Sn)("design:type",String)],d.prototype,"direction",void 0)},94441:function(e,t,o){o.r(t),o.d(t,{OptionRecommendedSiteTemplate:function(){return J},RecommendedSitesWC:function(){return W},RecommendedSitesWCStyles:function(){return Ee},RecommendedSitesWCTemplate:function(){return re},ToolingInfo:function(){return Me}});var i=o(65614),r=o(30326),n=o(69966);var s=o(56911),d=o(13937),l=o(17254),a=o(19548),c=o(28611),m=o(28006),u=o(84855),h=o(27942),p=o(18750),g=o(88296),b=o(70177),v=o(51600),x=o(41377),S=o(65022),f=o(83078),w=o(93468),$=o(98216),y=o(11372),k=o(27261),L=o(77246),F=o(87405),C=o(70487),T=o(5751),D=o(52088),R=o(21481),I=o(41423),B=o(55230),E=o(60815),M=o(27597),_=o(35849),z=o(87518),O=o(54030),A=o(11367);const P={onerow:{[h.j1.c1]:2,[h.j1.c2]:6,[h.j1.c3]:8,[h.j1.c4]:8,[h.j1.c5]:8},tworows:{[h.j1.c1]:4,[h.j1.c2]:12,[h.j1.c3]:16,[h.j1.c4]:16,[h.j1.c5]:16},threerows:{[h.j1.c1]:6,[h.j1.c2]:18,[h.j1.c3]:24,[h.j1.c4]:24,[h.j1.c5]:24}},U={onerow:{[h.j1.c1]:2,[h.j1.c2]:5,[h.j1.c3]:7,[h.j1.c4]:7,[h.j1.c5]:7},tworows:{[h.j1.c1]:4,[h.j1.c2]:10,[h.j1.c3]:14,[h.j1.c4]:14,[h.j1.c5]:14},threerows:{[h.j1.c1]:6,[h.j1.c2]:15,[h.j1.c3]:21,[h.j1.c4]:21,[h.j1.c5]:21}},N={onerow:{[h.j1.c1]:2,[h.j1.c2]:5,[h.j1.c3]:8,[h.j1.c4]:8,[h.j1.c5]:8},tworows:{[h.j1.c1]:4,[h.j1.c2]:10,[h.j1.c3]:16,[h.j1.c4]:16,[h.j1.c5]:16},threerows:{[h.j1.c1]:6,[h.j1.c2]:15,[h.j1.c3]:24,[h.j1.c4]:24,[h.j1.c5]:24}};class W extends R.U{constructor(){super(...arguments),this.showMenu=!1,this.toggleMenuButtonTelemetryTag="",this.sitesSelectorSubTelemetryTag="",this.isOneColumn=!1,this.isPageContentOn=!0,this.isImageHidden=!1,this.isRuby=A.gR.isRuby,this.mediaQueryList=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)"),this.themeModeSwitchHandler=e=>{this.isDarkMode=e.matches},this.recommendedSitesSelection=e=>{var t,o;null!=e&&null!==(t=e.detail)&&void 0!==t&&t.key&&(null==e||null===(o=e.detail)||void 0===o?void 0:o.key)!==this.recommendedSitesDropDownValue&&(this.recommendedSitesDropDownValue=null==e?void 0:e.detail.key,this.getDisplayedRecommendedSites())},this.handleScroll=()=>{this.handleClose()},this.handleClick=e=>{const t=e.composedPath();t&&t[0]===this.recommendedSitesSelectionMenu||t.includes(this.recommendedSitesSelectionMenu)||this.handleClose()},this.handleKeyDown=e=>{if(e.key===B.F9)this.showMenu&&this.handleClose()}}get shouldUseDark(){return this.needDarkThemeIcons?this.needDarkThemeIcons:!this.isDarkMode&&this.isImageHidden}async experienceConnected(){var e,t,o;this.isDarkMode=(0,p.ud)(),this.mediaQueryList.addEventListener("change",this.themeModeSwitchHandler);const i=(0,_.zP)(m.h$);if(i)(0,M.vQ)(m.h$,e=>{(0,d.jU)("backgroundImage",e=>{this.isImageHidden="hidden"===e})});else if("edgeChromium"===l.T3.AppType)return void $.YT.sendAppErrorEvent({...S.xqF,message:"Page Chromium Data Connector is not defined."});if(this.config.enableUnifiedRecommendedSites&&this.config.enableNavigationPageInteraction&&(0,M.vQ)(m.h$,e=>{const t=this.isPageContentOn;this.isPageContentOn="off"!==e.selectedFeedDisplaySetting,t!=this.isPageContentOn&&this.getDisplayedRecommendedSites()}),this.recommendedSitesMenuItemsMap={off:{id:"off",title:(null===(e=this.strings)||void 0===e?void 0:e.recommendedSitesOff)||"关闭"},tworows:{id:"tworows",title:(null===(t=this.strings)||void 0===t?void 0:t.recommendedSites2Rows)||"2行"},threerows:{id:"threerows",title:(null===(o=this.strings)||void 0===o?void 0:o.recommendedSites3Rows)||"3行"}},this.recommendedSitesMenuItems=[this.recommendedSitesMenuItemsMap.off,this.recommendedSitesMenuItemsMap.tworows,this.recommendedSitesMenuItemsMap.threerows],this.recommendedSitesDropDownValue="tworows",!this.config.enableRecommendedSitesSelection&&this.isRuby&&(this.config.enableOneRowRecoSites?this.recommendedSitesDropDownValue="onerow":this.config.enableTwoRowRecoSites?this.recommendedSitesDropDownValue="tworows":this.recommendedSitesDropDownValue="threerows"),this.config.enableRecommendedSitesSelection){var r;const e=await(null==i||null===(r=i.getPageSettingsStateAsync)||void 0===r?void 0:r.call(i)),t=(null==e?void 0:e.selectedFeedDisplaySetting)||"",o=["headingsonly","off"].includes(t);this.recommendedSitesDropDownValue=await(0,T.F7)({enableRecommendedSitesSelection:this.config.enableRecommendedSitesSelection,showDefault3Rows:o})}this.isOneColumn=(0,g.TU)().currentColumnArrangement===h.j1.c1,this.columnArrangement=(0,g.TU)().currentColumnArrangement,(0,g.TU)().subscribe(e=>{this.isOneColumn=e===h.j1.c1,this.columnArrangement=e===h.j1.c1&&this.config.disableRS1C?h.j1.c2:e,this.getDisplayedRecommendedSites()}),this.populateRecommendedSites(),this.populateSponsoredLabel(),(0,F.KO)(C.u.recommendedSites,this),f.M.singleMark(this.getExperienceType())}getExperienceType(){return u.F2}shadowDomPopulated(){this.config.enableRecommendedSitesSelection&&window.addEventListener("recommendedSitesSelection",this.recommendedSitesSelection),this.markVisuallyReadyRaf()}disconnectedCallback(){var e;super.disconnectedCallback(),null!==(e=this.config)&&void 0!==e&&e.enableRecommendedSitesSelection&&window.removeEventListener("recommendedSitesSelection",this.recommendedSitesSelection),this.mediaQueryList.removeEventListener("change",this.themeModeSwitchHandler)}populateRecommendedSites(){var e,t,o,i,r,n,s,d,l,c;const m=this.config.enableUnifiedRecommendedSites?20:16,u=this.config.recommendedSites,{index:h,siteList:p}=(null===(e=this.config)||void 0===e?void 0:e.sitesOverride)??{index:-1,siteList:[]};if(p&&p.length>0&&-1!==h&&h<u.length){const e=p[Math.floor(Math.random()*p.length)];u[h]=e}if(this.originRecommendedSites=u.map(e=>{let t="";this.telemetryObject&&(t=(0,z.g)(e.siteTitle.children.toString(),{headline:""},y.MS.Navigate,{destinationUrl:e.siteUrl.href}).getMetadataTag());return{siteImage:{alt:e.siteImage.alt,src:(0,v.XP)(e.siteImage.id,{width:m,height:0,enableDpiScaling:!1,format:v.f5.PNG,quality:90})},siteLink:{children:e.siteTitle.children,href:e.siteUrl.href,target:"_blank"},siteKickerColor:e.siteKicker,siteTelemetryTag:t}}),this.moreLinkImageUrl=null!==(t=this.config.moreLinkImage)&&void 0!==t&&t.id?(0,v.XP)(null===(o=this.config.moreLinkImage)||void 0===o?void 0:o.id,{width:m,height:0,enableDpiScaling:!1,format:v.f5.PNG}):null===(i=this.config.moreLinkImage)||void 0===i?void 0:i.src,this.moreLinkLightImageUrl=null!==(r=this.config.moreLinkLightImage)&&void 0!==r&&r.id?(0,v.XP)(null===(n=this.config.moreLinkLightImage)||void 0===n?void 0:n.id,{width:m,height:0,enableDpiScaling:!1,format:v.f5.PNG}):null===(s=this.config.moreLinkLightImage)||void 0===s?void 0:s.src,this.getDisplayedRecommendedSites(),this.telemetryObject){this.toggleMenuButtonTelemetryTag=(0,O.N)("recommendedSitesMenuButton",y.MS.ContextMenu,y.EG.Click,y.MJ.ActionButton).getMetadataTag(),this.sitesSelectorSubTelemetryTag=(0,z.l)("recommendedSitesSelectorSub",{headline:""},y.MS.Customize,y.EG.Click).getMetadataTag();const e=a._3.appendSearchParam(new URL((0,k.$N)()),"filter","navigationPage").toString();this.config.enableNavigationPageInteraction&&(this.moreLinkTelemetryTag=(0,O.u)("ShowMore",y.MS.Click,y.EG.Click,y.MJ.ActionButton,{destinationUrl:e}).getMetadataTag())}this.moreLinkImageUrl=null!==(d=this.config.moreLinkImage)&&void 0!==d&&d.id?(0,v.XP)(null===(l=this.config.moreLinkImage)||void 0===l?void 0:l.id,{width:m,height:0,enableDpiScaling:!1,format:v.f5.PNG,quality:90}):null===(c=this.config.moreLinkImage)||void 0===c?void 0:c.src}getDisplayedRecommendedSites(){var e;let t=!1,o=this.columnArrangement;(0,L.S)()&&this.hasAttribute(b.G4)&&window.ssrSizes&&window.ssrSizes.ssrCol!==o&&(o=window.ssrSizes.ssrCol,t=!0);const i=this.config.enableEightSitesPerRow?N:U,r=this.isRuby?i:P;let n=(null==r||null===(e=r[this.recommendedSitesDropDownValue])||void 0===e?void 0:e[o])??0;this.config.enableNavigationPageInteraction&&this.isPageContentOn&&(n-=1),n>0?(this.recommendedSites=this.originRecommendedSites.slice(0,n),this.recommendedSites.length<n&&(0,w.vV)(S.xbh,"RecommendedSites count is not enough","RecommendedSites count is not enough",{sites:this.recommendedSites.map(e=>{var t;return null==e||null===(t=e.siteLink)||void 0===t?void 0:t.children}),expectedCount:n})):this.recommendedSites=[],t&&(0,b._Z)(this).then(()=>this.getDisplayedRecommendedSites())}populateSponsoredLabel(){var e;this.sponsoredLabel={children:null===(e=this.config.sponsoredLabel)||void 0===e?void 0:e.children}}onRecommendedSitesOptions(e){let t=e&&e.target;t&&"FLUENT-OPTION"!=t.tagName&&"SPAN"==t.tagName&&(t=e.currentTarget)}updateRecommendedSites(e){const t=e&&e.target;if(!t&&!t.selectedIndex)return;const o=t.selectedIndex;isNaN(o)||(this.recommendedSitesDropDownValue=this.recommendedSitesMenuItems[o].id,(0,T.gb)(this.recommendedSitesDropDownValue),this.getDisplayedRecommendedSites(),this.$emit("recommendedSitesSelection",{key:this.recommendedSitesDropDownValue}),this.handleClose(),this.sitesSelectionToggleTelemetry(this.recommendedSitesDropDownValue,t))}toggleMenu(){this.showMenu?this.handleClose():this.handleOpen()}handleOpen(){this.showMenu=!0,(0,c.YJ)(c.xV.recommendedSitesSetting,!0),document.addEventListener("mousedown",this.handleClick),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("scroll",this.handleScroll)}handleClose(){this.showMenu=!1,(0,c.YJ)(c.xV.recommendedSitesSetting,!1),document.removeEventListener("mousedown",this.handleClick),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("scroll",this.handleScroll)}onClickMoreLink(e){(0,I.w)()&&(x.bN.getInstance().attemptNavItemChange("navigationPage"),"edgeChromium"===l.DF.getInstance().AppType&&window.dispatchEvent(new CustomEvent(x.b3)))}sitesSelectionToggleTelemetry(e,t){const o=t,i=o&&D.W.get(o);i&&i.contract&&(i.contract.content={headline:e},D.W.setAttribute(o,i.contract),$.YT.sendActionEvent(o))}}(0,s.Cg)([E.sH],W.prototype,"recommendedSites",void 0),(0,s.Cg)([E.sH],W.prototype,"isDarkMode",void 0),(0,s.Cg)([E.sH],W.prototype,"showMenu",void 0),(0,s.Cg)([E.sH],W.prototype,"toggleMenuButtonTelemetryTag",void 0),(0,s.Cg)([E.sH],W.prototype,"sitesSelectorSubTelemetryTag",void 0),(0,s.Cg)([E.sH],W.prototype,"isOneColumn",void 0),(0,s.Cg)([E.sH],W.prototype,"recommendedSitesDropDownValue",void 0),(0,s.Cg)([E.sH],W.prototype,"isPageContentOn",void 0),(0,s.Cg)([E.sH],W.prototype,"moreLinkTelemetryTag",void 0),(0,s.Cg)([E.sH],W.prototype,"columnArrangement",void 0),(0,s.Cg)([E.sH],W.prototype,"moreLinkImageUrl",void 0),(0,s.Cg)([E.sH],W.prototype,"moreLinkLightImageUrl",void 0),(0,s.Cg)([E.sH],W.prototype,"narrowed",void 0),(0,s.Cg)([E.sH],W.prototype,"recommendedSitesWidthAdded",void 0),(0,s.Cg)([E.sH],W.prototype,"isOnBackgroundImage",void 0),(0,s.Cg)([E.sH],W.prototype,"showFullPageBlur",void 0),(0,s.Cg)([E.sH],W.prototype,"needDarkThemeIcons",void 0),(0,s.Cg)([E.sH],W.prototype,"isImageHidden",void 0),(0,s.Cg)([E.sH],W.prototype,"isRuby",void 0),(0,s.Cg)([E.Jg],W.prototype,"shouldUseDark",null);var j=o(96950),G=o(91640),q=o(60402),H=o(39957),K=o(63563),V=o.n(K);const X=j.qy`<img src="${e=>e.siteImage.src}" alt="" class="recomSiteIcon" @error=${(e,t)=>(0,w.vV)(S.BeD,"RecommendedSites Image Load Error","RecommendedSites Image Load Error - Site Image",{url:e.siteImage.src})}
/>`,Y=j.qy`<li class="recommendedSitesListStyle${(e,t)=>{var o;return null!==(o=t.parent)&&void 0!==o&&null!==(o=o.config)&&void 0!==o&&o.enableEightSitesPerRow?" compact-style":""}}"><a target="_blank" href="${e=>e.siteLink.href}" class="recommendedSiteDiv" data-t="${e=>e.siteTelemetryTag}">${(0,G.z)(e=>e.siteImage,X)}<span :classList="recomSiteText ${(e,t)=>{var o;return null!==(o=t.parent)&&void 0!==o&&null!==(o=o.config)&&void 0!==o&&o.enableUnifiedRecommendedSites||!e.siteKickerColor?"":`recommendedSiteColor${e.siteKickerColor}`}}${(e,t)=>{var o;return null!==(o=t.parent)&&void 0!==o&&null!==(o=o.config)&&void 0!==o&&o.enableSiteTitleLargerFont?" larger-font":""}}">${e=>e.siteLink.children}</span></a></li>`,J=j.qy`<fluent-option value="${e=>e.title}" id="${e=>e.id}" class=${(e,t)=>t.parent.recommendSitesDropDownValue===e.id?"selected":"unselected"} ?selected=${(e,t)=>t.parent.recommendSitesDropDownValue===e.id}>${e=>e.title}</fluent-option>`,Q=j.qy`<fluent-button class="recommendedSitesSelectionButton" appearance="stealth" title="${e=>{var t;return(null===(t=e.strings)||void 0===t?void 0:t.selectionMenuLabel)||"更多选项"}}" aria-label="${e=>{var t;return(null===(t=e.strings)||void 0===t?void 0:t.selectionMenuLabel)||"更多选项"}}" role="button" aria-haspopup="true" aria-expanded="${e=>e.showMenu?"true":null}" icon-only="true" @click=${(e,t)=>e.toggleMenu()} data-t="${e=>e.toggleMenuButtonTelemetryTag}" ${(0,q.K)("settingButton")}>${j.qy.partial(V())}</fluent-button>`,Z=j.qy`<div class="recommendedSitesSelectionMenu" ${(0,q.K)("recommendedSitesSelectionMenu")}><div class=${e=>e.showMenu?"recommenededSitesSettings":"recommenededSitesSettings hidden"}><label>${e=>{var t;return(null===(t=e.strings)||void 0===t?void 0:t.recommendedSitesLabel)||"网址导航"}}</label><fluent-select class="recommendedSitesOptions" id="recommendedSitesSelectorSub" appearance="filled" @click=${(e,t)=>e.onRecommendedSitesOptions(t.event)} data-t="${e=>e.sitesSelectorSubTelemetryTag}" @change=${(e,t)=>e.updateRecommendedSites(t.event)} current-value=${e=>e.recommendedSitesDropDownValue&&e.recommendedSitesMenuItemsMap[e.recommendedSitesDropDownValue]&&e.recommendedSitesMenuItemsMap[e.recommendedSitesDropDownValue].title} data-customhandled="true"><span slot="selected-value">${e=>e.recommendedSitesDropDownValue&&e.recommendedSitesMenuItemsMap[e.recommendedSitesDropDownValue]&&e.recommendedSitesMenuItemsMap[e.recommendedSitesDropDownValue].title}</span>${(0,H.ux)(e=>e.recommendedSitesMenuItems,J)}</fluent-select></div></div>`,ee=j.qy`<img src="${e=>e.shouldUseDark||e.showFullPageBlur?e.moreLinkLightImageUrl:e.moreLinkImageUrl}" alt="" class="recomSiteIcon" @error=${(e,t)=>(0,w.vV)(S.BeD,"RecommendedSites Image Load Error","RecommendedSites Image Load Error - Site Image",{url:e.shouldUseDark||e.showFullPageBlur?e.moreLinkLightImageUrl:e.moreLinkImageUrl})}
/>`,te=j.qy`<li class="recommendedSitesListStyle"><a target="_blank" href="#" class="recommendedSiteDiv" id="recommendedSiteMoreLink" data-t="${e=>e.moreLinkTelemetryTag}" @click=${(e,t)=>e.onClickMoreLink(t.event)}>${(0,G.z)(e=>e.moreLinkImageUrl,ee)}<span class="recomSiteText${e=>e.config.enableSiteTitleLargerFont?" larger-font":""}">${e=>e.config.localizedStrings.moreSitesLabel||"更多"}</span></a></li>`,oe=j.qy`<ul part="list" class="recommendedSitesList recommendedSitesListAutoGrow">${(0,H.ux)(e=>e.recommendedSites,Y)}
${(0,G.z)(e=>e.config.enableNavigationPageInteraction&&e.isPageContentOn,te)}</ul><span class="recommendedSitesSponsoredLabel${e=>e.needDarkThemeIcons?" dark-theme":""}">${e=>{var t,o;return(null===(t=e.strings)||void 0===t?void 0:t.sponsoredLabel)||(null===(o=e.sponsoredLabel)||void 0===o?void 0:o.children)}}</span>${(0,G.z)(e=>e.config.enableRecommendedSitesSelection,Q)}
${(0,G.z)(e=>e.config.enableRecommendedSitesSelection,Z)}
`,ie=j.qy`<div :classList="recommendedSites recommendedSitesResponsive ${e=>e.isRuby?"ruby":""} ${e=>e.config.disableDarkMode?"":"dark-mode"} ${e=>e.config.enableUnifiedRecommendedSites?"unified":""} ${e=>"onerow"===e.recommendedSitesDropDownValue?"onerow":""} ${e=>"tworows"===e.recommendedSitesDropDownValue?"tworows":""} ${e=>"threerows"===e.recommendedSitesDropDownValue?"threerows":""} ${e=>e.narrowed?"narrowed":""} ${e=>e.isOnBackgroundImage&&!e.showFullPageBlur?"isOnBackgroundImage":""} ${e=>e.needDarkThemeIcons?"dark-theme":""} ${e=>e.config.disableRS1C?"disableRS1C":""} ${e=>"off"===e.recommendedSitesDropDownValue?"hidden":""} ${e=>e.recommendedSitesWidthAdded?"recommendedSitesWidthAdded":""} " part="recommended-sites" style=${()=>`--see-more-light: url(${(0,l.rA)().StaticsUrl}/latest/icons-wc/icons/SeeMoreArrow-light.svg);--see-more-dark: url(${(0,l.rA)().StaticsUrl}/latest/icons-wc/icons/SeeMoreArrow-dark.svg);`} data-t="${e=>e.telemetryObject.getMetadataTag()}">${oe}</div>`,re=j.qy`${ie}`;var ne=o(11177),se=o(10735),de=o(26920),le=o(36452),ae=o(48751),ce=o(86856),me=o(63150),ue=o(74849),he=o(4126),pe=o(22131),ge=o(87944),be=o(32257);const ve=me.U0.fiveColSupported(),xe=40,Se=(e,t)=>t.replace(/\{([\s\S]+?)\}/g,t=>`{ .${e} ${t} }`),fe=ue.A` .ruby.recommendedSites{--recommended-sites-background:rgba(29,33,47,0.6);--recommended-sites-border:1px solid rgba(69,81,114,0.25);--recommended-sites-item-hover:rgba(31,36,49,1)}`,we=ue.A` .ruby.recommendedSites{--recommended-sites-background:rgba(242,236,232,0.6);--recommended-sites-border:1px solid rgba(255,255,255,1);--recommended-sites-item-hover:rgba(239,234,231,1);background:var(--recommended-sites-background,#FFFFFF);border:var(--recommended-sites-border,0.76px solid rgba(240,240,240,1));border-radius:32px;max-width:1392px}.ruby.recommendedSites.unified.dark-mode{background:var(--recommended-sites-background,#FFFFFF)}.ruby.recommendedSites.onerow{height:68px}.ruby.recommendedSites.tworows{height:104px}.ruby.recommendedSites.threerows{height:140px}.ruby.recommendedSites .recommendedSitesList{padding:20px 28px;gap:8px}.ruby.recommendedSites .recommendedSiteDiv{height:20px;border-radius:4px;min-width:106px}.ruby.recommendedSites .recommendedSitesListStyle:hover{background:var(--recommended-sites-item-hover,rgba(245,245,245,1));border-radius:8px}.ruby.recommendedSites .recommendedSiteDiv:hover{background:var(--recommended-sites-item-hover,rgba(245,245,245,1))}.ruby.recommendedSites .recomSiteIcon{height:16px;width:16px;border-radius:6px;margin-inline-end:6px}.ruby.recommendedSites .recomSiteText{line-height:20px;width:unset;font-size:${be.CuR};
        height: ${be.$LU};
        font-weight: ${be.fNx}}.ruby.recommendedSites .recomSiteText.larger-font{font-size:14px;max-width:116px}.ruby.recommendedSites.unified .recommendedSitesSponsoredLabel{border:0.5px solid var(--Colors-Neutral-Grey-50,#808080);border-radius:4px;width:20px;font-weight:400;font-size:10px;line-height:100%;vertical-align:middle;margin-inline-end:16px;margin-bottom:24px}${(0,h.H5)(h.j1.c1)}{.ruby.recommendedSites{width:336px}.ruby.recommendedSites .recommendedSitesList{width:254px}.ruby.recommendedSites .recommendedSitesListStyle{flex-basis:45%}}${(0,h._D)(h.j1.c2,h.j1.c2)}{.ruby.recommendedSites{width:688px}.ruby.recommendedSites .recommendedSitesList{width:606px}.ruby.recommendedSites .recommendedSitesListStyle{flex-basis:17%}}${(0,h._D)(h.j1.c3,h.j1.c3)}{.ruby.recommendedSites{width:1040px}.ruby.recommendedSites .recommendedSitesList{width:950px}.ruby.recommendedSites .recommendedSitesListStyle{flex-basis:13%}.ruby.recommendedSites .recommendedSitesListStyle.compact-style{flex-basis:11%}}${(0,h._D)(h.j1.c4,null)}{.ruby.recommendedSites{width:1392px}.ruby.recommendedSites .recommendedSitesList{width:1302px}.ruby.recommendedSites .recommendedSitesListStyle{flex-basis:13%}.ruby.recommendedSites .recommendedSitesListStyle.compact-style{flex-basis:11%}}`.withBehaviors((0,pe.G2)(fe)),$e=ve?`\n        ${(0,h._D)(null,h.j1.c1)}{width:${(0,ge.c)(ne.rY)};\n        }\n        ${(0,h.H5)(h.j1.c2)}{width:${(0,ge.c)(ne.sx)};\n        }\n        ${(0,h.H5)(h.j1.c3)}{width:${(0,ge.c)(ne.zN)};\n        }\n        ${(0,h.H5)(h.j1.c4)}{width:${(0,ge.c)(ne.YK)};\n        }\n        ${(0,h._D)(h.j1.c5,null)}{width:${(0,ge.c)(ne.t9)};\n        }\n    `:`\n        ${(0,h._D)(null,h.j1.c1)}{width:${(0,ge.c)(ne.rY)};\n        }\n        ${(0,h.H5)(h.j1.c2)}{width:${(0,ge.c)(ne.sx)};\n        }\n        ${(0,h.H5)(h.j1.c3)}{width:${(0,ge.c)(ne.zN)};\n        }\n        ${(0,h._D)(h.j1.c4,null)}{width:${(0,ge.c)(ne.YK)};\n        }\n    `,ye=ve?`\n        ${(0,h._D)(null,h.j1.c1)}{width:${(0,ge.c)(ne.rY+xe)};\n        }\n        ${(0,h.H5)(h.j1.c2)}{width:${(0,ge.c)(ne.sx+xe)};\n        }\n        ${(0,h.H5)(h.j1.c3)}{width:${(0,ge.c)(ne.zN+xe)};\n        }\n        ${(0,h.H5)(h.j1.c4)}{width:${(0,ge.c)(ne.YK+xe)};\n        }\n        ${(0,h._D)(h.j1.c5,null)}{width:${(0,ge.c)(ne.t9+xe)};\n        }\n    `:`\n        ${(0,h._D)(null,h.j1.c1)}{width:${(0,ge.c)(ne.rY+xe)};\n        }\n        ${(0,h.H5)(h.j1.c2)}{width:${(0,ge.c)(ne.sx+xe)};\n        }\n        ${(0,h.H5)(h.j1.c3)}{width:${(0,ge.c)(ne.zN+xe)};\n        }\n        ${(0,h._D)(h.j1.c4,null)}{width:${(0,ge.c)(ne.YK+xe)};\n        }\n    `,ke=`\n    ${(0,h._D)(null,h.j1.c1)}{flex-basis:50%}${(0,h._D)(h.j1.c2,h.j1.c2)}{flex-basis:16%}${(0,h._D)(h.j1.c3,h.j1.c3)}{flex-basis:12%}${(0,h._D)(h.j1.c4,null)}{flex-basis:12%}`,Le=`\n    ${(0,h._D)(null,h.j1.c1)}{flex-basis:50%}${(0,h._D)(h.j1.c2,h.j1.c2)}{flex-basis:16%}${(0,h._D)(h.j1.c3,null)}{flex-basis:12%}`,Fe=`\n    ${(0,h._D)(null,h.j1.c1)}{width:${(0,ge.c)(ne.rY)};\n    }\n    ${(0,h.H5)(h.j1.c2)}{width:${(0,ge.c)(ne.sx)};\n    }\n    ${(0,h._D)(h.j1.c3,null)}{width:${(0,ge.c)(ne.zN)};\n    }\n`,Ce=ve?`\n    ${(0,h._D)(null,h.j1.c2)}{width:${(0,ge.c)(ne.sx)};\n    }\n    ${(0,h._D)(h.j1.c3,h.j1.c3)}{width:${(0,ge.c)(ne.zN)};\n    }\n    ${(0,h._D)(h.j1.c4,h.j1.c5)}{width:${(0,ge.c)(ne.YK)};\n    }\n    ${(0,h._D)(h.j1.c5,null)}{width:${(0,ge.c)(ne.t9)};\n    }\n`:`\n    ${(0,h._D)(null,h.j1.c2)}{width:${(0,ge.c)(ne.sx)};\n    }\n    ${(0,h._D)(h.j1.c3,h.j1.c3)}{width:${(0,ge.c)(ne.zN)};\n    }\n    ${(0,h._D)(h.j1.c4,null)}{width:${(0,ge.c)(ne.YK)};\n    }\n`,Te=`\n    ${(0,h._D)(null,h.j1.c2)}{flex-basis:16%}${(0,h._D)(h.j1.c3,h.j1.c3)}{flex-basis:12%}${(0,h._D)(h.j1.c4,null)}{flex-basis:12%}`,De=ue.A` .recommendedSites.dark-mode{background:var(--recommended-sites-msn-dark-mode,#424242)}.recommendedSiteColorblue{color:var(--recommended-sites-msn-dark-blue,#75B6E8)}.recommendedSiteColorred{color:var(--recommended-sites-msn-dark-red,#EB9B7E)}.recommendedSiteColorgreen{color:var(--recommended-sites-msn-dark-green,#86BD86)}.recommendedSites.unified.dark-mode{background:var(--recommended-sites-background-fill)}.recommendedSites.unified{--recommended-sites-background-fill:rgba(255,255,255,0);--recommended-sites-site-text-color:#FFF;--recommended-sites-see-more-arrow:var(--see-more-light);--recommended-sites-site-background-color-hover:rgba(0,0,0,0.25);--recommended-sites-sponsored-loabel-color:#aaa;--recommended-sites-selection-button-text-color:#FFF;--recommended-sites-selection-button-background-color:rgba(0,0,0,0.25);--recommended-sites-selection-button-background-hover:rgba(0,0,0,0.5)}.recommendedSites.unified.isOnBackgroundImage{backdrop-filter:blur(10px);--recommended-sites-background-fill:rgba(255,255,255,0.2);--recommended-sites-site-text-color:#FFF;--recommended-sites-see-more-arrow:var(--see-more-light);--recommended-sites-site-background-color-hover:rgba(0,0,0,0.5);--recommended-sites-sponsored-loabel-color:#aaa;--recommended-sites-selection-button-text-color:#FFF;--recommended-sites-selection-button-background-color:rgba(0,0,0,0.25);--recommended-sites-selection-button-background-hover:rgba(0,0,0,0.5)}.recommendedSites.unified.isOnBackgroundImage.dark-theme{backdrop-filter:blur(10px);--recommended-sites-background-fill:rgba(0,0,0,0.2);--recommended-sites-site-text-color:#fff;--recommended-sites-see-more-arrow:var(--see-more-light);--recommended-sites-site-background-color-hover:rgba(255,255,255,0.25);--recommended-sites-sponsored-loabel-color:#aaa;--recommended-sites-selection-button-text-color:#FFF;--recommended-sites-selection-button-background-color:rgba(255,255,255,0.25);--recommended-sites-selection-button-background-hover:rgba(255,255,255,0.5);--scroll-fade-next:rgba(0,0,0,0.4);--scroll-fade-previous:rgba(0,0,0,0.4)}.ruby.recommendedSites{--recommended-sites-background:rgba(29,33,47,0.6);--recommended-sites-border:1px solid rgba(69,81,114,0.25);--recommended-sites-item-hover:rgba(31,36,49,1)}`,Re=ue.A` .recommendedSitesSelectionButton{right:8px}.recommenededSitesSettings{right:8px}`,Ie=ue.A` .recommendedSitesSelectionButton{left:8px}.recommenededSitesSettings{left:8px}`,Be=ue.A`
${(0,h._D)(null,h.j1.c1)}{.recommendedSitesExpand{display:none}}${Se("recommendedSitesResponsive",$e)}
${Se("recommendedSites .recommendedSitesListStyle",ke)}
${Se("recommendedSites.narrowed",Fe)}
${Se("recommendedSites.narrowed .recommendedSitesListStyle",Le)}
${Se("recommendedSites.disableRS1C",Ce)}
${Se("recommendedSites.disableRS1C .recommendedSitesListStyle",Te)}
${Se("recommendedSitesWidthAdded",ye)}
`,Ee=ue.A` :host{--layer-corner-radius:6}.recommendedSites{box-sizing:border-box;display:flex;flex-direction:column;margin-bottom:10px;margin-top:var(--recommended-sites-margin-top,15px);position:relative;background:#fff;max-width:98.5vw}.recommendedSites.hidden{display:none}.with-border-radius{border-radius:calc(var(--layer-corner-radius) * 1px)}.recommendedSitesWidthAdded{border-bottom-left-radius:0px !important;border-bottom-right-radius:0px !important;border-top-left-radius:16px !important;border-top-right-radius:16px !important}.recommendedSitesList{display:flex;flex-flow:row wrap;list-style:none;margin-top:2px;position:relative}.recommendedSitesSelectionButton{position:absolute;top:8px;width:24px;min-width:unset;height:24px;border-radius:50%}.recommenededSitesSettings{top:36px;position:absolute;width:auto;padding:10px 16px;align-items:center;display:flex;height:44px;background-color:${se.T};
        border: calc(${de.XA} * 1px) solid transparent;box-shadow:0px 18px 36px rgba(0,0,0,0.24)}.recommenededSitesSettings.hidden{visibility:hidden}.recommendedSitesOptions{min-width:160px;margin-inline-start:12px;border:calc(${de.XA} * 1px) solid ${le.I2};
        border-radius: 4px;
        background-color: ${se.T}}.recommendedSitesSponsoredLabel{inset-inline-start:initial;inset-inline-end:1px;align-self:flex-end;bottom:0;font-size:12px;padding:8px;position:absolute;color:var(--recommended-sites-sponsored-label-color,${ae.l})}.recommendedSitesListStyle{padding-top:var(--recommended-sites-item-padding-top,16px);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex-shrink:1;flex-basis:0%}.recommendedSitesListAutoGrow .recommendedSitesListStyle{flex-grow:1}.recommendedSiteDiv{height:21px;position:relative;display:flex;text-decoration:none;cursor:pointer}.recomSiteIcon{width:16px;top:1px;border:0;margin-inline-start:initial;margin-inline-end:8px;align-self:center}.recomSiteText{padding-inline-end:1px;padding-inline-start:auto;display:inline-block;font-size:14px;text-decoration:none;border-bottom:none;width:124px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:${ae.l}}.recomSiteText.larger-font{font-size:14px;max-width:116px}.recomSiteText:hover,.recomSiteText:focus{text-decoration:underline}.recommendedSiteColorblue{color:#0078D4;font-weight:700}.recommendedSiteColorred{color:#D83B01;font-weight:700}.recommendedSiteColorgreen{color:#107C10;font-weight:700}.recommendedSitesExpand{width:100%;font-size:12px;color:${ae.l};
        fill: ${ae.l};padding-top:5px;text-align:center;cursor:pointer;line-height:16px;user-select:none}.recommendedSitesExpand.active{padding-bottom:5px}.recommendedSitesExpand.active .arrowDown svg{transform:rotate(-180deg)}.recommendedSitesExpand .arrowDown svg{height:8px;margin-inline-start:2px}.recommendedSitesExpand .title{font-weight:600;text-decoration:none;color:unset}.recommendedSitesExpand.active .title{text-decoration:none}.recommendedSitesExpand .title:hover{text-decoration:underline}.recommendedSitesExpand .close{display:none;position:absolute;top:2px;right:8px;width:22px;min-width:unset;height:22px;border-radius:50%}.recommendedSitesExpand .close svg{height:12px;width:12px;margin-bottom:7.5px}.recommendedSitesExpand.active .close{display:block}${(0,h._D)(null,h.j1.c1)}{.recommendedSitesExpand{display:none}}.recommendedSites.onerow{height:52px}.recommendedSites.onerow.unified .recommendedSitesSelectionButton{top:2px}.recommendedSites.onerow.unified .recommendedSitesSponsoredLabel{margin-bottom:4px}.recommendedSites.tworows{height:88px}.recommendedSites.threerows{height:124px}.recommendedSites.unified .recommendedSitesList{overflow:hidden;margin:0;padding-top:8px;padding-bottom:8px;padding-inline-start:8px;padding-inline-end:45px}.recommendedSites.unified{background:var(--recommended-sites-background-fill);border-radius:6px;margin-top:0;margin-bottom:0}.recommendedSites.unified .recomSiteIcon{width:20px;border-radius:3px}.recommendedSites.unified .recommendedSiteDiv{height:28px;margin:4px;padding:0 4px;border-radius:6px}.recommendedSites.unified .recommendedSiteDiv:hover{background:var(--recommended-sites-site-background-color-hover)}.recommendedSites.unified .recommendedSitesListStyle{padding:0}.recommendedSites.unified .recomSiteText{line-height:28px;color:var(--recommended-sites-site-text-color)}.recommendedSites.unified .recomSiteText:hover,.recommendedSites.unified .recomSiteText:focus{text-decoration:none}.recommendedSites.unified .recommendedSitesSponsoredLabel{border:solid 1px var(--recommended-sites-sponsored-loabel-color);border-radius:6px;color:var(--recommended-sites-sponsored-loabel-color);margin:8px;padding:1px 4px}.recommendedSites.unified .recommendedSitesSponsoredLabel.dark-theme{border:solid 1px white;color:white}.recommendedSites.unified .recommendedSitesSelectionButton{color:var(--recommended-sites-selection-button-text-color);background:var(--recommended-sites-selection-button-background-color)}.recommendedSites.unified .recommendedSitesSelectionButton:hover{background:var(--recommended-sites-selection-button-background-hover)}.recommendedSites.unified{--recommended-sites-background-fill:rgba(0,0,0,0);--recommended-sites-site-text-color:rgba(0,0,0,0.83);--recommended-sites-see-more-arrow:var(--see-more-dark);--recommended-sites-site-background-color-hover:rgba(255,255,255,0.5);--recommended-sites-sponsored-loabel-color:#666;--recommended-sites-selection-button-text-color:#000;--recommended-sites-selection-button-background-color:rgba(255,255,255,0.25);--recommended-sites-selection-button-background-hover:rgba(255,255,255,0.5);--scroll-fade-next:rgba(0,0,0,0.2);--scroll-fade-previous:rgba(0,0,0,0.2)}.recommendedSites.unified.isOnBackgroundImage{backdrop-filter:blur(10px);--recommended-sites-background-fill:rgba(0,0,0,0.2);--recommended-sites-site-text-color:#fff;--recommended-sites-see-more-arrow:var(--see-more-light);--recommended-sites-site-background-color-hover:rgba(255,255,255,0.25);--recommended-sites-sponsored-loabel-color:#aaa;--recommended-sites-selection-button-text-color:#FFF;--recommended-sites-selection-button-background-color:rgba(255,255,255,0.25);--recommended-sites-selection-button-background-hover:rgba(255,255,255,0.5);--scroll-fade-next:rgba(0,0,0,0.4);--scroll-fade-previous:rgba(0,0,0,0.4)}${Be} .recommendedSites .show-more-card{padding:4px 4px}.ruby.recommendedSites{--recommended-sites-background:rgba(255,255,255,0.8);--recommended-sites-border:0.76px solid rgba(240,240,240,1);--recommended-sites-item-hover:rgba(245,245,245,1)}`.withBehaviors((0,pe.G2)(De),new ce.t(Re,Ie),new he.o("isRuby",!0,we));r.m.define(i.G.registry),n.m.define(i.G.registry);const Me={experienceConfigSchema:undefined}},99015:function(e,t,o){o.d(t,{Y:function(){return c}});var i=o(96950),r=o(60402),n=o(91640),s=o(82774),d=o(10108),l=o(35106),a=o(18893);function c(e={}){return i.qy`
        <template @keyup="${(e,t)=>e.keyupHandler(t.event)}">
            ${(0,l.LT)(e)}
            <div class="scroll-area" part="scroll-area">
                <div
                    class="scroll-view"
                    part="scroll-view"
                    @scroll="${e=>e.scrolled()}"
                    ${(0,r.K)("scrollContainer")}
                >
                    <div
                        class="content-container"
                        part="content-container"
                        ${(0,r.K)("content")}
                    >
                        <slot
                            ${(0,s.e)({property:"scrollItems",filter:(0,d.Y)()})}
                        ></slot>
                    </div>
                </div>
                ${(0,n.z)(e=>"mobile"!==e.view,i.qy`
                        <div
                            class="scroll scroll-prev"
                            part="scroll-prev"
                            ${(0,r.K)("previousFlipperContainer")}
                        >
                            <div class="scroll-action" part="scroll-action-previous">
                                <slot name="previous-flipper">
                                    ${(0,a.R)(e.previousFlipper)}
                                </slot>
                            </div>
                        </div>
                        <div
                            class="scroll scroll-next"
                            part="scroll-next"
                            ${(0,r.K)("nextFlipperContainer")}
                        >
                            <div class="scroll-action" part="scroll-action-next">
                                <slot name="next-flipper">
                                    ${(0,a.R)(e.nextFlipper)}
                                </slot>
                            </div>
                        </div>
                    `)}
            </div>
            ${(0,l.aO)(e)}
        </template>
    `}}}]);