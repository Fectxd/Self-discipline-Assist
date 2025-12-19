"use strict";(self.homePageWebpackChunks=self.homePageWebpackChunks||[]).push([["experiences_me-stripe-wc_dist_index_js"],{7027:function(e,t,i){i.d(t,{Lm:function(){return o},Yd:function(){return n}});var r=i(79464);function o(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(){const e=new Date,t=e.getUTCDay(),i=e.getUTCHours();return!(1==t&&i>=18||5==t&&i<22||t>=2&&t<=4)||(0,r.kg)()}()||e?30:20}function n(e){return e.toString()+"%"}},12717:function(e,t,i){i.d(t,{m:function(){return z}});var r=i(84506),o=i(37180),n=i(74849),s=i(64187),l=i(60993),a=i(73477),p=i(22131),c=i(50882),d=i(48196),h=i(48751),u=i(45476),m=i(26920),f=i(36452),g=i(79288),v=i(14996);const b=n.A`
    ${(0,s.V)("inline-flex")} :host {
        width: calc(${d.D} * 1px);
        height: calc(${d.D} * 1px);
        justify-content: center;
        align-items: center;
        margin: 0;
        position: relative;
        fill: currentcolor;
        color: ${h.l};
        background: transparent;
        border: none;
        outline: none;
        padding: 0;
    }

    :host::before {
        content: "";
        opacity: 0.8;
        background: ${u.Wl};
        border: calc(${m.XA} * 1px) solid ${f.I2};
        border-radius: 50%;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        transition: all 0.1s ease-in-out;
    }

    .next,
    .previous {
        position: relative;
        ${""} width: 16px;
        height: 16px;
    }

    :host([disabled]) {
        opacity: ${g.q};
        cursor: ${l.Z};
    }

    :host(:hover) {
        cursor: pointer;
    }

    :host(:hover)::before {
        background: ${u.oO};
        border-color: ${f.mb};
    }

    :host(:${a.N}) {
        outline: none;
    }

    :host(:${a.N})::before {
        box-shadow: 0 0 0 1px ${v.WN} inset;
        border-color: ${v.WN};
    }

    :host(:active)::before {
        background: ${u.wO};
        border-color: ${f.MY};
    }

    :host::-moz-focus-inner {
        border: 0;
    }
`.withBehaviors((0,p.mr)(n.A`
            :host {
                background: ${c.A.Canvas};
            }
            :host .next,
            :host .previous {
                color: ${c.A.ButtonText};
                fill: currentcolor;
            }
            :host::before {
                background: ${c.A.Canvas};
                border-color: ${c.A.ButtonText};
            }
            :host(:hover)::before {
                forced-color-adjust: none;
                background: ${c.A.Highlight};
                border-color: ${c.A.ButtonText};
                opacity: 1;
            }
            :host(:hover) .next,
            :host(:hover) .previous {
                forced-color-adjust: none;
                color: ${c.A.HighlightText};
                fill: currentcolor;
            }
            :host([disabled]) {
                opacity: 1;
            }
            :host([disabled])::before,
            :host([disabled]:hover)::before,
            :host([disabled]) .next,
            :host([disabled]) .previous,
            :host([disabled]:hover) .next,
            :host([disabled]:hover) .previous {
                forced-color-adjust: none;
                background: ${c.A.Canvas};
                border-color: ${c.A.GrayText};
                color: ${c.A.GrayText};
                fill: ${c.A.GrayText};
            }
            :host(:${a.N})::before {
                forced-color-adjust: none;
                border-color: ${c.A.Highlight};
                box-shadow: 0 0 0 2px ${c.A.Field},
                    0 0 0 4px ${c.A.FieldText};
            }
        `));var x=i(60143),w=i(96950);const $=(0,x.B)({next:w.qy`
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M4.023 15.273L11.29 8 4.023.727l.704-.704L12.71 8l-7.984 7.977-.704-.704z"
            />
        </svg>
    `,previous:w.qy`
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M11.273 15.977L3.29 8 11.273.023l.704.704L4.71 8l7.266 7.273-.704.704z"
            />
        </svg>
    `});class y extends r.d{}const z=y.compose({name:`${o.c.prefix}-flipper`,template:$,styles:b})},22072:function(e,t,i){i.d(t,{kl:function(){return b}});var r=i(17469),o=i(56911),n=i(92011),s=i(60815),l=i(36042),a=i(31157),p=i(72691),c=i(37918),d=i(77246);let h=class extends n.L{constructor(){super(),this.direction=a.O.ltr,this.currentSlotElementWidth=0,this.currentContentGapSize=0,this.setFlippersVisabilityFromPageState=()=>{if(!(0,d.S)())return;const e=this.viewport.clientWidth,t=this.container.clientWidth;if(!e||!t||e>=t)return void this.setFlippersHiddenVisibility(!0,!0);const i=this.viewport.scrollLeft;0!==i?e+Math.abs(i)>=t?this.setFlippersHiddenVisibility(!1,!0):this.setFlippersHiddenVisibility(!1,!1):this.setFlippersHiddenVisibility(!0,!1)},this.handleResize=()=>{this.setFlippersVisabilityFromPageState()},this.handleResize=(0,l.A)(this.handleResize,200)}connected(){this.direction=p.o.getValueFor(this),this.handleSlotContentChange(),window.addEventListener("resize",this.handleResize)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.handleResize)}handleChange(){this.direction=p.o.getValueFor(this),this.flipperNext.children[0].hidden=!1,this.flipperPrevious.children[0].hidden=!0}handleSlotContentChange(){if(!(0,d.S)())return;const e=this.viewportSlot.assignedElements();e.length>0&&(this.currentSlotElementWidth=e[0].clientWidth);const t=window.getComputedStyle(this.container).rowGap;this.currentContentGapSize=t?Number(t.replace(/px/,"")):0,this.setFlippersVisabilityFromPageState()}slideKeyPressHandler(e){if(!(0,d.S)())return;const t="rtl"!==this.direction;t||(e*=-1);const i=this.viewport.scrollLeft;if(t&&e<0&&0===i||!t&&e>0&&0===i)return;const r=this.viewport.clientWidth,o=this.container.clientWidth;if(r<=0||o<=0)return;if(r>=o)return void this.setFlippersHiddenVisibility(!0,!0);const n=e*this.getScrollDistance();(t&&e>0||!t&&e<0)&&((Math.abs(n)+Math.abs(i)>=o||o-(Math.abs(n)+Math.abs(i))<=r)&&this.hideFlipperNext(!0),this.hideFlipperPrevious(!1)),t&&e<0&&(n+i<=0&&this.hideFlipperPrevious(!0),this.hideFlipperNext(!1)),!t&&e>0&&(n+i>=0&&this.hideFlipperPrevious(!0),this.hideFlipperNext(!1)),window.requestAnimationFrame(()=>{this.viewport.scrollTo(this.viewport.scrollLeft+n,0)})}hideFlipperNext(e){this.flipperNext.children[0].hidden=e}hideFlipperPrevious(e){this.flipperPrevious.children[0].hidden=e}setFlippersHiddenVisibility(e,t){this.hideFlipperPrevious(e),this.hideFlipperNext(t)}getOneElementUnit(){return this.currentSlotElementWidth+this.currentContentGapSize}getScrollDistance(){if(!(0,d.S)())return;const e=this.viewport.clientWidth;if(e<=0)return 0;const t=this.getOneElementUnit();if(!t||t<=0)return 0;const i=Math.floor(e/t)*t;return i<=0?t:i}};(0,o.Cg)([s.sH],h.prototype,"direction",void 0),(0,o.Cg)([s.sH],h.prototype,"flipperNextTelemetryTag",void 0),(0,o.Cg)([s.sH],h.prototype,"flipperPreviousTelemetryTag",void 0),h=(0,o.Cg)([c.x],h);const u=i(74849).A` :host{--viewport-width:auto;--viewport-height:auto;--element-gap:12px;height:var(--viewport-height);overflow:hidden;width:var(--viewport-width);position:relative;display:flex}.flipper-container{position:absolute;right:0;left:0;top:0;bottom:0;padding:20px;display:flex;align-items:center;pointer-events:none;z-index:0}.viewport{height:var(--viewport-height);overflow-x:hidden;scroll-behavior:smooth;width:var(--viewport-width);white-space:nowrap}.container{display:flex;flex-direction:row;gap:var(--element-gap);width:max-content}.flipper-next{margin-inline-start:auto}.flipper-next,.flipper-previous{pointer-events:all;z-index:2}`;var m=i(96950),f=i(60402),g=i(91640);const v=m.qy`<div ${(0,f.K)("viewport")} class="viewport" part="viewport" direction="${e=>e.direction?e.direction:"ltr"}"><div class="container" part="container" ${(0,f.K)("container")}><slot ${(0,f.K)("viewportSlot")} @slotchange=${e=>e.handleSlotContentChange()}></slot></div></div>${(0,g.z)(e=>(0,d.S)(),m.qy`<div class="flipper-container" part="flipper-container"><slot ${(0,f.K)("flipperPrevious")} name="flipper-previous"><fluent-flipper direction="${e=>"rtl"===e.direction?"next":"previous"}" class="flipper-previous" part="flipper-previous" @click="${e=>e.slideKeyPressHandler(-1)}" data-t="${e=>e.flipperPreviousTelemetryTag}" hidden></fluent-flipper></slot><slot ${(0,f.K)("flipperNext")} name="flipper-next"><fluent-flipper direction="${e=>"rtl"===e.direction?"previous":"next"}" class="flipper-next" part="flipper-next" @click="${e=>e.slideKeyPressHandler(1)}" data-t="${e=>e.flipperNextTelemetryTag}" hidden></fluent-flipper></slot></div>`)}
`,b=h.compose({name:`${r.i.prefix}-horizontal-card-slider`,template:v,styles:u})},60143:function(e,t,i){i.d(t,{B:function(){return n}});var r=i(96950),o=i(18893);function n(e={}){const t={};return r.qy`
        <template
            role="button"
            aria-disabled="${e=>!!e.disabled||void 0}"
            tabindex="${e=>e.hiddenFromAT?-1:0}"
            @keyup="${(e,t)=>e.keyupHandler(t.event)}"
        >
            ${i=>function(e,i){let n=t[e];return n||(t[e]=n=r.qy`
                <span part="${e}" class="${e}">
                    <slot name="${e}">
                        ${(0,o.R)(i[e])}
                    </slot>
                </span>
            `),n}(i.direction,e)}
        </template>
    `}},79464:function(e,t,i){i.d(t,{Bl:function(){return h},Eo:function(){return p},KN:function(){return a},LG:function(){return c},Mj:function(){return u},kg:function(){return l},x8:function(){return d}});var r=i(17254),o=i(55593),n=i(98288),s=i(98216);function l(){const e=(0,o.a)();return!!e&&("1"===e.get("vptest")||"true"===e.get("vptest")||"vp"===e.get("reqsrc"))}function a(e,t){return p(e,t,"shopping/product-tracking")}function p(e,t,i){if("local"===t&&window.location.origin.indexOf("localhost")>-1)return`http://127.0.0.1:3000/shopping/${e}.svg`;if(e){const o=t?`pr-${t}`:"latest",n=i?`${i}`:"shopping";return`${(0,r.rA)().StaticsUrl}${o}/${n}/${e}.svg`}return""}function c(e){return e&&e.href&&(e.href=d(e.href)),!0}function d(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const i=(new Date).getTime()+t,r=(0,n.G)(),o=new URL(e);return o.searchParams.set("ts",i.toString()),o.searchParams.set("m_clk",`sid-${r}`),o.toString()}function h(e){return!!e&&/p4psearch\.1688\.com/.test(e)}function u(e,t){if(e&&e.href){const i=new URL(e.href);i.searchParams.set("m_ac","176674350"),i.searchParams.set("PageId",s.YT.getRequestId()),i.searchParams.set("ct",t),e.href=d(i.toString())}return!0}},84506:function(e,t,i){i.d(t,{d:function(){return l}});var r=i(56911),o=i(92011),n=i(38493);const s="next";class l extends o.L{constructor(){super(...arguments),this.hiddenFromAT=!0,this.direction=s}keyupHandler(e){if(!this.hiddenFromAT){const t=e.key;"Enter"!==t&&"Space"!==t||this.$emit("click",e)}}}(0,r.Cg)([(0,n.CF)({mode:"boolean"}),(0,r.Sn)("design:type",Boolean)],l.prototype,"disabled",void 0),(0,r.Cg)([(0,n.CF)({attribute:"aria-hidden",converter:n.Bs}),(0,r.Sn)("design:type",Boolean)],l.prototype,"hiddenFromAT",void 0),(0,r.Cg)([n.CF,(0,r.Sn)("design:type",String)],l.prototype,"direction",void 0)},95827:function(e,t,i){i.r(t),i.d(t,{MeStripeWC:function(){return S},MeStripeWCDisableSlideAnimationStyles:function(){return g},MeStripeWCStyles:function(){return v},MeStripeWCTemplate:function(){return G},ToolingInfo:function(){return K},getNavigationButtonTelemetryTag:function(){return V}});var r=i(2958),o=i(37180),n=i(12717),s=i(22072),l=i(17469);var a=i(56911),p=i(86856),c=i(74849);const d=c.A`
.me-stripe msft-horizontal-card-slider{left:-50px}`,h=c.A`
.me-stripe msft-horizontal-card-slider{right:-50px}`,u=c.A` msft-horizontal-card-slider::part(flipper-next),msft-horizontal-card-slider::part(flipper-previous){height:86px;width:45px}msft-horizontal-card-slider::part(flipper-next):before,msft-horizontal-card-slider::part(flipper-previous):before{display:block;border-radius:0;border:none;width:150px;height:52px;margin-top:-5px;pointer-events:none;box-shadow:none !important}msft-horizontal-card-slider::part(flipper-next):before,msft-horizontal-card-slider::part(flipper-previous):before{height:86px;margin-top:0}msft-horizontal-card-slider::part(flipper-next):before{margin-left:-145px;background:linear-gradient(90deg,rgba(255,255,255,0) 0%,rgb(247 247 247) 70%,rgb(247 247 247) 100%)}msft-horizontal-card-slider::part(flipper-previous):before{margin-left:40px;opacity:0 !important;background:linear-gradient(90deg,#f7f7f7 0%,rgb(247 247 247) 30%,rgba(255,255,255,0) 100%)}@media (prefers-color-scheme:dark){msft-horizontal-card-slider::part(flipper-previous):before{display:none}msft-horizontal-card-slider::part(flipper-next):before{display:none}}`,m=c.A` msft-horizontal-card-slider::part(flipper-previous):before{margin-left:40px;background:linear-gradient(90deg,rgb(244,244,242) 0%,rgb(244,244,242) 30%,rgba(255,255,255,0) 100%)}msft-horizontal-card-slider::part(flipper-next):before{margin-left:-145px;background:linear-gradient(90deg,rgba(255,255,255,0) 0%,rgb(244,244,242) 70%,rgb(244,244,242) 100%)}`,f=c.A` msft-horizontal-card-slider::part(flipper-previous):before{margin-right:40px;background:linear-gradient(90deg,rgba(255,255,255,0) 0%,rgb(244 244 242) 70%,rgb(244,244,242) 100%)}msft-horizontal-card-slider::part(flipper-next):before{margin-right:-145px;background:linear-gradient(90deg,rgb(244,244,242) 0%,rgb(244,244,242) 30%,rgba(255,255,255,0) 100%)}`,g=" div.viewport{scroll-behavior:initial}",v=c.A` :host{--neutral-fill-hover:#717171;--accent-fill-active:#717171;--accent-fill-hover:#717171;--type-ramp-base-line-height:15px;width:100%}.me-stripe{position:relative;background:transparent;border:solid #dcdcda;border-width:0 0 1px;height:auto;margin-bottom:4px}.horizontal-slider-list{display:flex;list-style:none;padding:0;margin:0}.horizontal-slider-item{flex-shrink:0;}.me-stripe-compact.me-stripe{border:none}.me-stripe-windowshp{width:calc(100% - 14px)}.me-stripe msft-horizontal-card-slider{box-sizing:border-box;width:calc(100% + 100px);padding:0px 50px}.me-stripe msft-horizontal-card-slider::part(flipper-container){padding:5px 10px}.me-stripe msft-horizontal-card-slider::part(container){gap:0;display:flex;flex-flow:row;transition:transform 1s ease-in-out}@media (prefers-color-scheme:dark){.me-stripe{border:none}}${u}
`.withBehaviors(new p.t(d,h),new p.t(m,f));var b=i(90905);var x=i(94425),w=i(84855),$=i(21481),y=i(60815),z=i(89151),k=i(77246);class S extends $.U{experienceConnected(){(0,z.tD)("TTVR.MeStripe",this.getApproxTTVRValue()||performance.now()),this.addFlipperStyles()}get tiles(){var e,t;let i=(null===(e=this.config)||void 0===e?void 0:e.tiles)||[];return(0,k.S)()||(i=i.slice(0,8)),((null===(t=this.config)||void 0===t?void 0:t.tiles)||[]).map(e=>({...e,url:(0,x.bI)(e.url)}))}getExperienceType(){return w.lJH}async addFlipperStyles(){if(this.config.disableSlideAnimation&&(0,k.S)()){const i=await(e="msft-horizontal-card-slider",t=this.shadowRoot,new Promise(i=>{const r=(0,b.A)(()=>{i(t.querySelectorAll(e)),o.disconnect()}),o=new MutationObserver(r);o.observe(t,{childList:!0,subtree:!0})}));if(null!=i&&i.length&&i[0].shadowRoot){const e=g;((e,t)=>{const i=document.createElement("style");i.innerHTML=t,e.prepend(i)})(i[0].shadowRoot,e)}}var e,t}}(0,a.Cg)([y.Jg],S.prototype,"tiles",null);var T=i(92011),M=i(51600),C=i(11372);const j=c.A` .me-stripe-tile-content.me-stripe-compact .me-stripe-tile-button .me-stripe-title-main-container .me-stripe-title-subtitle-container{position:relative;padding-right:6px;margin:0}`,L=c.A``,P=c.A` .me-stripe-logo-container{inset-inline-start:0}.me-stripe-tile-content{display:inline-block;vertical-align:top;overflow-y:hidden;width:140px;height:auto;padding-left:0}.me-stripe-tile-content.me-stripe-compact{height:70px;width:100px}.me-stripe-tile-content.me-stripe-compact .me-stripe-tile-button{height:70px;padding:0}.me-stripe-tile-content.me-stripe-compact .me-stripe-tile-button:hover{background-color:unset}.me-stripe-tile-content.me-stripe-compact .me-stripe-tile-button .me-stripe-logo-container{border-radius:12px}.me-stripe-tile-content.me-stripe-compact .me-stripe-tile-button .me-stripe-title-container{margin-top:2px}.me-stripe-tile-content.me-stripe-compact .me-stripe-tile-button .me-stripe-title-main-container{font-weight:400;font-size:12px;max-width:100%;position:relative;line-height:normal}.me-stripe-tile-content.me-stripe-compact .me-stripe-tile-button .me-stripe-title-main-container .me-stripe-title-main{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.me-stripe-tile-content.me-stripe-compact .me-stripe-tile-button .me-stripe-title-main-container .me-stripe-title-subtitle-container{position:relative;margin:0}.me-stripe-tile-content.me-stripe-compact .me-stripe-tile-button .me-stripe-title-main-container .me-stripe-title-subtitle-container .me-stripe-title-subtitle{margin-top:0px}.me-stripe-tile-button{position:relative;cursor:pointer;text-decoration:none;color:rgb(43,43,43);outline-offset:0;display:flex;flex-flow:column;align-items:center;padding:13px 0 0 0;box-sizing:border-box;height:86px}.me-stripe-tile-button:hover{background-color:#E4E4E3;border-radius:6px}.me-stripe-tile-button:hover .me-stripe-title-main{text-decoration:underline}.me-stripe-logo-container{font-size:33px;font-weight:normal;position:relative;background:rgb(255,255,255);border-radius:4px;display:flex;align-items:center;justify-content:center;height:40px;width:40px;box-shadow:0px 2px 4px 0px rgba(0,0,0,0.14)}.me-stripe-tile-button .me-stripe-logo{height:24px;width:24px}.me-stripe-title-container{display:flex;padding-inline-start:0;width:100%}.me-stripe-title-main-container{font-weight:600;font-size:14px;line-height:14px;font-family:"Segoe UI Semibold","Segoe WP Semibold","Segoe WP","Segoe UI",Arial,Sans-Serif;color:#2b2b2b;line-height:20px;text-align:center;width:100%;overflow:hidden}.me-stripe-tile-button .me-stripe-title-main-container .me-stripe-title-subtitle-container{position:relative;left:0;right:0}.me-stripe-tile-button .me-stripe-title-subtitle{font-size:9px;font-weight:600;margin-top:-6px;color:#000000;opacity:1}@media (prefers-color-scheme:dark){.me-stripe-tile-button{color:var(--neutral-foreground-rest)}.me-stripe-logo-container{background:var(--neutral-stroke-rest)}.me-stripe-title-main-container,.me-stripe-tile-button .me-stripe-title-subtitle{color:var(--neutral-foreground-rest)}.me-stripe-tile-button:hover{background-color:var(--focus-stroke-outer);border-radius:6px}}`.withBehaviors(new p.t(L,j));var E=i(96950),N=i(91640),_=i(7027);const B=E.qy`<a class="me-stripe-tile-button" part="me-stripe-tile-button" href=${e=>e.tile.url} aria-label=${e=>e.tile.title} target="_blank" @click=${(e,t)=>e.openNewTab(t)} @keypress=${(e,t)=>e.handleKeyDown(t)} data-t="${e=>e.telemetryTag}"><div class="me-stripe-logo-container"><img alt="" class="me-stripe-logo" src=${e=>e.logoSrc} @error=${(e,t)=>e.handleImageError(t)} /></div>${(0,N.z)(e=>e.tile.title,E.qy`<div class="me-stripe-title-container"><div class="me-stripe-title-main-container"><div class="me-stripe-title-main">${e=>e.tile.title}</div>${(0,N.z)(e=>e.tile.subTitle,E.qy`<div class="me-stripe-title-subtitle-container"><div class="me-stripe-title-subtitle">${e=>e.tile.subTitle.replace("{cbValue}",(0,_.Yd)((0,_.Lm)()))}</div></div>`)}</div></div>`)}</a>`,I=E.qy`<div class="me-stripe-tile-content${e=>0===e.tileIndex?" me-stripe-first-item":""} ${e=>e.useCompactMode?"me-stripe-compact":""}">${B}</div>`;var D=i(55230),U=i(87518),W=i(93468),F=i(65022);let A=class extends T.L{constructor(){super(...arguments),this.openNewTab=e=>{let{event:t}=e;const{url:i}=this.tile;return t.preventDefault(),i?window.open(i,"_blank"):void 0},this.handleKeyDown=e=>{e.event.key!==D.Mm||this.openNewTab(e)},this.handleImageError=e=>{const t=null==e?void 0:e.event,i=null==t?void 0:t.target;(0,W.vV)(F.FQY,"Error loading stripe icon","Icon that failed to load: "+(null==i?void 0:i.src))},this.imgFullUrl=e=>{const t=`//img-s-msn-com.akamaized.net/tenant/amp/entityid/${e}`;return(0,M.oQ)(t,{width:27,height:27,enableDpiScaling:!1,format:M.f5.PNG})},this.getTelemetryTags=()=>{const{telemetryName:e,title:t,url:i,isAd:r}=this.tile||{},o=r?"LeadGen":"meStripe";return e?this.generateTelemetryTags(`${o}.${e}`,C.MJ.Tile,t,i):null},this.generateTelemetryTags=(e,t,i,r)=>this.telemetryObject?(0,U.g)(e,i?{headline:i}:void 0,{type:t,behavior:C.MS.Navigate,action:C.EG.Click,overrideDestinationUrl:r||void 0}).getMetadataTag():null}get logoSrc(){var e;if(this.tile)return this.tile.logoUrl??this.imgFullUrl(null===(e=this.tile)||void 0===e?void 0:e.logoId)}get telemetryTag(){return this.getTelemetryTags()}};(0,a.Cg)([y.sH],A.prototype,"telemetryObject",void 0),(0,a.Cg)([y.sH],A.prototype,"tile",void 0),(0,a.Cg)([y.sH],A.prototype,"tileIndex",void 0),(0,a.Cg)([y.Jg],A.prototype,"logoSrc",null),(0,a.Cg)([y.Jg],A.prototype,"telemetryTag",null),A=(0,a.Cg)([(0,T.E)({name:"me-stripe-tile",template:I,styles:P})],A);var O=i(39957),H=i(54030);const R=(0,H.N)("meStripe");function V(e){return(0,H.N)(e,C.MS.Paginate,C.EG.Click,C.MJ.ActionButton).getMetadataTag()}const G=E.qy`<div class="${e=>"me-stripe "+(e.config.useCompactMode?"me-stripe-compact":"")}" data-t="${e=>R.getMetadataTag()}"><msft-horizontal-card-slider class="horizontal-slider-container" part="horizontal-slider-container" :flipperPreviousTelemetryTag=${e=>V("leftarrow")} :flipperNextTelemetryTag=${e=>V("rightarrow")}><ul class="horizontal-slider-list">${(0,O.ux)(e=>e.tiles,E.qy`<li class="horizontal-slider-item"><me-stripe-tile :tile=${e=>e} :tileIndex=${(e,t)=>t.index} :useCompactMode=${(e,t)=>t.parent.config.useCompactMode} :telemetryObject=${(e,t)=>t.parent.telemetryObject} class="horizontal-item-container"></me-stripe-tile></li>`,{positioning:!0})}</ul></msft-horizontal-card-slider></div>`,K={experienceConfigSchema:undefined};r.m.define(o.c.registry),n.m.define(o.c.registry),s.kl.define(l.i.registry)}}]);