"use strict";(self.homePageWebpackChunks=self.homePageWebpackChunks||[]).push([["nativeadstemplates"],{31826:function(t,e,i){i.r(e),i.d(e,{MsnAdCarousel:function(){return $},MsnAdCarouselSlide:function(){return C}});var o=i(56911),a=i(92011),n=i(26555),s=i(693),r=i(38493),d=i(60815);const l=(t,e,i)=>{const o=[];for(let a=0;a<t;a+=1)o.push({index:a,active:a===e,onSpotClick:i});return o};class h extends a.L{constructor(){super(...arguments),this.cardId="",this.carouselWidth="300",this.carouselHeight="180",this.slideWidth="120",this.isShowSlideControls=!0,this.activeIndex=0,this.visibleSlideCount="3",this.spots=[],this.hiddenControls=!0,this.onNextClick=()=>{this.activeIndex<this.totalSlideCount-1?this.activeIndex+=1:this.activeIndex=0,this.spots=l(this.totalSlideCount,this.activeIndex,this.onSpotClick),this.updateActiveIndex&&this.updateActiveIndex(this.cardId,this.activeIndex),(0,n.A)(this.carouselContent.assignedElements(),t=>{this.updateAttribute(t,{direction:"LTR",isInitial:"1",activeIndex:`${this.activeIndex}`})})},this.onPreviousClick=()=>{this.activeIndex>0?this.activeIndex-=1:this.activeIndex=this.totalSlideCount-1,this.spots=l(this.totalSlideCount,this.activeIndex,this.onSpotClick),this.updateActiveIndex&&this.updateActiveIndex(this.cardId,this.activeIndex),(0,n.A)(this.carouselContent.assignedElements(),t=>{this.updateAttribute(t,{direction:"RTL",isInitial:"1",activeIndex:`${this.activeIndex}`})})},this.onSpotClick=t=>{const e=this.activeIndex<t?"LTR":"RTL";this.activeIndex=t,this.spots=l(this.totalSlideCount,this.activeIndex,this.onSpotClick),this.updateActiveIndex&&this.updateActiveIndex(this.cardId,this.activeIndex),(0,n.A)(this.carouselContent.assignedElements(),t=>{this.updateAttribute(t,{direction:e,isInitial:"1",activeIndex:`${this.activeIndex}`})})}}connectedCallback(){super.connectedCallback(),this.totalSlideCount=this.carouselContent.assignedElements().length,(0,n.A)(this.carouselContent.assignedElements(),(t,e)=>{this.updateAttribute(t,{totalSlideCount:`${this.totalSlideCount}`,visibleSlideCount:`${this.visibleSlideCount}`,carouselWidth:`${this.carouselWidth}`,slideWidth:`${this.slideWidth}`,isInitial:"1",slideIndex:`${e}`,activeIndex:`${this.activeIndex}`})}),this.spots=l(this.totalSlideCount,this.activeIndex,this.onSpotClick),this.carouselContent&&(this.carouselContainer.addEventListener("mouseover",()=>{this.hiddenControls=!1}),this.carouselContainer.addEventListener("mouseleave",()=>{this.hiddenControls=!0}))}updateAttribute(t,e){t&&!(0,s.A)(e)&&Object.entries(e).map(e=>{let[i,o]=e;t.setAttribute(i,o)})}}(0,o.Cg)([r.CF],h.prototype,"cardId",void 0),(0,o.Cg)([r.CF],h.prototype,"carouselWidth",void 0),(0,o.Cg)([r.CF],h.prototype,"carouselHeight",void 0),(0,o.Cg)([r.CF],h.prototype,"slideWidth",void 0),(0,o.Cg)([(0,r.CF)({mode:"boolean"})],h.prototype,"isShowSlideControls",void 0),(0,o.Cg)([r.CF],h.prototype,"updateActiveIndex",void 0),(0,o.Cg)([r.CF],h.prototype,"activeIndex",void 0),(0,o.Cg)([r.CF],h.prototype,"visibleSlideCount",void 0),(0,o.Cg)([d.sH],h.prototype,"totalSlideCount",void 0),(0,o.Cg)([d.sH],h.prototype,"spots",void 0),(0,o.Cg)([d.sH],h.prototype,"hiddenControls",void 0);var c=i(74849),p=i(18750);const g=c.A`
    .carousel-container{
        display: flex;
        position: relative;
        border-radius: 8px;
    }

    .carousel-content{
        position: relative;
        overflow: hidden;
        z-index: 0;
    }

    .previous{
        left: 0px;
    }

    .next{
        right: 0px;
    }

    .control-bg{
        background: ${(0,p.ud)()?"#FFFFFF":"#2E2E2E"};
        opacity: 0.5;
        height: 100%;
        width: 100%;
    }

    .control-icon{
        height: 20px;
        width: 20px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
        fill:  ${(0,p.ud)()?"#2E2E2E":"#FFFFFF"};
    }

    .controls{
        height: 56px;
        width: 30px;
        z-index:1;
        cursor: pointer;
        position: absolute;
        top: 60px;
    }

    .spot-container{
        height: 7px;
        margin-top: 12px;
        position: relative;
    }

    .spot-content{
        height: 7px;
        width: fit-content;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
    }

    .spot{
        width: 7px;
        height: 7px;
        background: ${(0,p.ud)()?"#7B7B7B":" #DEDEDE"};
        border-radius: 50%;
        margin: 0px 2px;
        cursor: pointer;
    }

    .spot.active{
        background:  ${(0,p.ud)()?"#DEDEDE":"#7E7E7E"}}.hidden{opacity:0}`;var u=i(96950),x=i(60402),m=i(91640),f=i(39957);const v=u.qy`<div class="spot ${t=>t.active?"active":""}"  @click="${t=>t.onSpotClick(t.index)}"></div>`,b=u.qy`<div style="width: ${t=>t.carouselWidth}px;" ${(0,x.K)("carouselContainer")}><div class="carousel-container" style="width: ${t=>t.carouselWidth}px; height: ${t=>t.carouselHeight}px;">${(0,m.z)(t=>t.isShowSlideControls,u.qy`<div class="previous controls ${t=>t.hiddenControls?"hidden":""}" @click="${t=>t.onPreviousClick()}"><div class="control-bg"></div><div class="control-icon">${u.qy.partial('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">\n<path d="M1443 2045L421 1024 1443 3l90 90-930 931 930 931-90 90z" />\n</svg>\n')}</div></div>`)}<div class="carousel-content" style="width: ${t=>t.carouselWidth}px; height: ${t=>t.carouselHeight}px;"><slot ${(0,x.K)("carouselContent")}></slot></div>${(0,m.z)(t=>t.isShowSlideControls,u.qy`<div class="next controls ${t=>t.hiddenControls?"hidden":""}" @click="${t=>t.onNextClick()}"><div class="control-bg"></div><div class="control-icon">${u.qy.partial('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">\n<path d="M515 1955l930-931L515 93l90-90 1022 1021L605 2045l-90-90z" />\n</svg>\n')}</div></div>`)}</div><div class="spot-container"><div class="spot-content">${(0,f.ux)(t=>t.spots,v)}</div></div></div>`;let $=class extends h{};$=(0,o.Cg)([(0,a.E)({name:"msn-ad-carousel",template:b,styles:g})],$);class w extends a.L{constructor(){super(...arguments),this.isInitial="0",this.direction="LTR",this.visibleSlideCount="3",this.carouselWidth="300",this.slideWidth="120",this.updateSlideStyle=()=>{if(!this.slideIndex||!this.activeIndex||!this.totalSlideCount)return;const t=parseInt(this.totalSlideCount),e=parseInt(this.visibleSlideCount),i=parseInt(this.slideIndex),o=parseInt(this.activeIndex),a=Math.floor(t/2),n=a-o,s=parseInt(this.carouselWidth),r=parseInt(this.slideWidth),d=((t,e,i)=>{let o=t;return o=i>0?t<e-i?t+i:t+i-e:t>=-i?t+i:t+i+e,o})(i,t,n),l=((t,e,i,o,a,n,s)=>{const r=(n*s-a)/(s-1),d=((o-1)*(n-r)+n-a)/2;let l=0;l=o%2==0?i*(n-r)-(n-r)/2-d:i*(n-r)-d;let h="";return h=t===e?"transform: translateX("+l+"px) perspective(500px) translateZ(164px);":"transform: translateX("+l+"px) perspective(500px) translateZ(0px);",h})(i,o,d,t,s,r,e),h=((t,e,i)=>{let o="";return o=Math.abs(t-e)>Math.floor(i/2)?"visibility: hidden;":"visibility: visible;",o})(d,a,e),c=((t,e,i,o)=>{let a=0;return a=t-Math.abs(i-o)-1,"LTR"===e&&i<=o&&(a+=1),"RTL"===e&&i>=o&&(a+=1),`z-index: ${a};`})(t,this.direction,d,a),p="1"===this.isInitial?"transition: transform 500ms ease 0s, opacity 500ms ease 0s, visibility 500ms ease 0s;":"";const g=this.slideIndex===this.activeIndex?"box-shadow: 0px 0px 1px #888888;":"box-shadow: unset;";const u=((t,e)=>{let i="";return i=t===e?"opacity: 1;":"opacity: 0.6;",i})(i,o);this.slideStyle=l+h+c+p+g+u}}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),"activeindex"===t&&(this.activeIndex=i,this.updateSlideStyle())}}(0,o.Cg)([r.CF],w.prototype,"isInitial",void 0),(0,o.Cg)([r.CF],w.prototype,"slideIndex",void 0),(0,o.Cg)([r.CF],w.prototype,"activeIndex",void 0),(0,o.Cg)([r.CF],w.prototype,"direction",void 0),(0,o.Cg)([r.CF],w.prototype,"totalSlideCount",void 0),(0,o.Cg)([r.CF],w.prototype,"visibleSlideCount",void 0),(0,o.Cg)([r.CF],w.prototype,"carouselWidth",void 0),(0,o.Cg)([r.CF],w.prototype,"slideWidth",void 0),(0,o.Cg)([d.sH],w.prototype,"slideStyle",void 0);const y=u.qy`<div class="carousel-slide" style=${t=>t.slideStyle}><slot name="carousel-slide-content"/></div>`,k=c.A` .carousel-slide{position:absolute;width:120px;height:120px;margin-top:30px;overflow:hidden;object-fit：cover;box-sizing:content-box;border-radius:8px;left:0px}`;let C=class extends w{};C=(0,o.Cg)([(0,a.E)({name:"msn-ad-carousel-slide",template:y,styles:k})],C)},60347:function(t,e,i){i.d(e,{M:function(){return n}});var o=i(96950),a=i(35106);function n(t={}){return o.qy`
        <template slot="tab" role="tab" aria-disabled="${t=>t.disabled}">
            ${(0,a.LT)(t)}
            <slot></slot>
            ${(0,a.aO)(t)}
        </template>
    `}},61617:function(t,e,i){i.r(e),i.d(e,{MsnPatternOverlayCard:function(){return T}});var o=i(56911),a=i(92011),n=i(38493),s=i(60815);class r extends a.L{constructor(){super(...arguments),this.layout="landscape",this.shopNowText="Shop now",this.headinglevel=3}handleStartActionsContentChange(){this.startActionsContainer.classList.toggle("start-actions",this.startActions.assignedNodes().length>0),this.hasFooter=this.endActions.assignedNodes().length>0}handleEndActionsContentChange(){this.endActionsContainer.classList.toggle("end-actions",this.endActions.assignedNodes().length>0),this.hasFooter=this.endActions.assignedNodes().length>0}handleMediaContentChange(){this.mediaContainer.classList.toggle("media",this.media.assignedNodes().length>0)}handleBackgroundImageContentChange(){this.backgroundImageContainer.classList.toggle("background-image",this.backgroundImage.assignedNodes().length>0)}handlePatternOverlayCardLinkClick(t){return this.$emit("link-invoked",t),!0}}(0,o.Cg)([n.CF],r.prototype,"layout",void 0),(0,o.Cg)([n.CF],r.prototype,"shopNowText",void 0),(0,o.Cg)([n.CF],r.prototype,"price",void 0),(0,o.Cg)([(0,n.CF)({attribute:"heading-level",mode:"fromView",converter:n.R$})],r.prototype,"headinglevel",void 0),(0,o.Cg)([(0,n.CF)({mode:"fromView"})],r.prototype,"href",void 0),(0,o.Cg)([s.sH],r.prototype,"anchorTelemetryTag",void 0),(0,o.Cg)([s.sH],r.prototype,"mediaNodes",void 0),(0,o.Cg)([s.sH],r.prototype,"hasFooter",void 0),(0,o.Cg)([s.sH],r.prototype,"iconSlottedNodes",void 0),(0,o.Cg)([n.CF],r.prototype,"target",void 0),(0,o.Cg)([s.sH],r.prototype,"hoverActionsSlottedNodes",void 0);var d=i(96950),l=i(60402),h=i(416),c=i(10108),p=i(91640),g=i(82774);const u=d.qy`<div class="footer" part="footer"><span part="start-actions" ${(0,l.K)("startActionsContainer")}><slot name="start-actions" ${(0,l.K)("startActions")} @slotchange=${t=>t.handleStartActionsContentChange()}></slot></span><span part="end-actions" ${(0,l.K)("endActionsContainer")}><slot name="end-actions" ${(0,l.K)("endActions")} @slotchange=${t=>t.handleEndActionsContentChange()}></slot></span></div>`,x=d.qy`<span class="heading-wrapper" part="heading-wrapper" role="heading" aria-level=${t=>t.headinglevel}><a class="heading" part="heading" href=${t=>t.href?t.href:void 0} target=${t=>t.target?t.target:void 0} @click=${(t,e)=>t.handlePatternOverlayCardLinkClick(e.event)} data-t="${t=>t.anchorTelemetryTag}"><slot></slot></a></span>`,m=d.qy`<fluent-button class="shop-now" part="shop-now" appearance="stealth">${t=>t.shopNowText}</fluent-button>`,f=d.qy`<template ${(0,h.Y)({property:"mediaNodes",filter:(0,c.Y)("[slot='media']")})}><span part="background-image" ${(0,l.K)("backgroundImageContainer")}><slot name="background-image" ${(0,l.K)("backgroundImage")} @slotchange=${t=>t.handleBackgroundImageContentChange()}></slot></span><div class="mask" part="mask"></div><div class="footer-container" part="mask">${u} ${(0,p.z)(t=>"landscape"===t.layout,x)}</div><div class="body" part="body">${(0,p.z)(t=>{var e;return(null===(e=t.mediaNodes)||void 0===e?void 0:e.length)>0},d.qy`<div class="media-wrapper" part="media-wrapper"><div part="media" ${(0,l.K)("mediaContainer")}><slot name="media" ${(0,l.K)("media")} @slotchange=${t=>t.handleMediaContentChange()}></slot></div></div>`)}<div class="heading-container" part="heading-container"><slot name="attribution"></slot>${(0,p.z)(t=>"default"===t.layout,x)} ${(0,p.z)(t=>"landscape"===t.layout,m)}</div></div><slot name="call-to-action-one-line"></slot><slot name="call-to-action-two-lines"></slot><span part="hover-actions" class="${t=>t.hoverActionsSlottedNodes&&t.hoverActionsSlottedNodes.length?"hover-actions":"hover-actions_hidden"}"><slot name="hover-actions" ${(0,g.e)("hoverActionsSlottedNodes")}></slot></span></template>`;var v=i(64187),b=i(73477),$=i(22131),w=i(37302),y=i(7896),k=i(61138),C=i(64003),z=i(95239),F=i(48751),L=i(89580),B=i(86856),S=i(74849),_=i(50882);const A=S.A` .hover-actions{right:8px}`,M=S.A` .hover-actions{left:8px}`,I=S.A`
    ${(0,v.V)("flex")} :host{--mask-color:linear-gradient(312.48deg,${w.Xt} 24.29%, ${w.X4} 73.9%);
        position: relative;
        width: auto;
        box-sizing: border-box;
        font-family: ${y.O};flex-direction:column;outline:none;height:100%;overflow:hidden}:host(:hover) .hover-actions{opacity:1;transition:opacity 0.2s ease-in-out}:host(:hover) .background-image,:host(:hover) .media{filter:brightness(0.9)}:host .footer-container{background:var(--mask-color)}:host([layout="default"]) .footer-container{min-height:64px}:host([layout="landscape"]) .footer-container{min-height:110px}.body{display:block;justify-content:center;row-gap:8px;column-gap:10px;grid-template-columns:1fr auto;grid-template-rows:auto}.footer{padding-inline-start:var(--footer-start-padding,16px);padding-inline-end:var(--footer-start-padding,16px);height:32px;font-size:var(--footer-font-size,${k.k});
        line-height: var(--footer-line-height, ${k.F})}.footer,.start-actions,.end-actions{display:flex;flex-direction:row;align-items:center;justify-content:space-between;color:${C.c};
        fill: ${C.c}}.footer__hidden{display:none}.hover-actions{display:flex;flex-direction:column;position:absolute;top:8px;z-index:2;opacity:0}.hover-actions_hidden{display:none}.hover-actions:focus-within{opacity:1}.heading-container{grid-row:2;grid-column:span 2;flex-direction:column;padding:0;height:88px;background:var(--mask-color)}:host([layout="default"]) .heading-container{margin-top:-43px}:host([layout="landscape"]) .heading-container{margin-top:-33px}.shop-now{margin-top:38px;margin-left:200px;margin-right:16px;border-radius:100px;background-color:rgb(0,0,0,40%);color:white}:host(:hover) .shop-now{background-color:rgb(0,0,0,30%)}.heading-wrapper a:after{bottom:0;content:"";height:100%;left:0;position:absolute;right:0;top:0;width:100%;z-index:1}.heading-wrapper a ::slotted(span){font-size:16px;line-height:22px}::slotted([slot="attribution"]){margin-bottom:6px}.media-wrapper{grid-row:1;grid-column:2;margin-top:-40px;clip-path:polygon(0px 17%,100% 0%,100% 82%,0% 100%);background-color:${z.p}}:host([layout="default"]) .media-wrapper{height:235px}:host([layout="landscape"]) .media-wrapper{height:181px}.media-wrapper::after{content:"";display:block;height:40px;margin-top:8px;background:var(--mask-color);clip-path:polygon(100% 0,60% 100%,100% 100%);transform:matrix(-1,0,0,1,0,0)}:host([layout="default"]) .media-wrapper::after{margin-top:-24px}:host([layout="landscape"]) .media-wrapper::after{margin-top:-21px}.media{display:flex;position:relative}:host([layout="default"]) .media{height:225px}:host([layout="landscape"]) .media{height:174px}::slotted([slot="media"]){border-radius:0px;border-radius:calc(var(--content-card-corner-radius,2) * 2px)}::slotted([slot="start-actions"]),::slotted([slot="end-actions"]){z-index:2;display:flex;gap:5px;align-items:center}::slotted(fluent-button[slot="start-actions"]),::slotted(fluent-button[slot="end-actions"]){color:${C.c};
        fill: ${C.c}}.card-button:hover{background:transparent}.start-actions{width:80%}::slotted(fluent-button[appearance="stealth"]:not(:hover)),:slotted([slot="hover-actions"]:not(:hover)){background:transparent}.heading{text-decoration:none;outline:none;color:${F.l};
        font-size: var(--type-ramp-base-font-size, ${L.Y});
        line-height: var(--heading-line-height, ${L.v});font-weight:600;display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:initial;padding-right:10px;height:52px}:host([layout="default"]) .heading{width:180px;padding-top:30px;padding-left:calc(50% - 168px/2 + 35px);text-align:right;height:50px}:host([layout="landscape"]) .heading{width:200px;padding-left:16px}.mask{display:none}.heading:hover,.heading:${b.N}{text-decoration:underline}.heading::after{position:absolute;content:"";top:0;left:0;right:0;bottom:0}.background-image{position:absolute;top:0;left:0;right:0;bottom:0}.background-image ::slotted(img){width:100%;height:100%;object-fit:cover}::slotted([slot="call-to-action-one-line"]),::slotted([slot="call-to-action-two-lines"]){position:absolute !important;width:calc(100% - 32px);grid-row:3;grid-column:1 / span 2;margin:0 16px}::slotted([slot="call-to-action-one-line"]){bottom:24px}::slotted([slot="call-to-action-two-lines"]){bottom:14px}`.withBehaviors(new B.t(A,M),(0,$.mr)(S.A` .heading{color:${_.A.LinkText};
                background: ${_.A.ButtonFace}}.footer,.start-actions,.end-actions,::slotted([slot="start-actions"]),::slotted([slot="end-actions"]){background:${_.A.ButtonFace};
                color: ${_.A.ButtonText};fill:currentcolor}::slotted(fluent-button[appearance="stealth"]:not(:hover)){background:${_.A.ButtonFace};
            }
        `));let T=class extends r{};T=(0,o.Cg)([(0,a.E)({name:"msn-pattern-overlay-card",template:f,styles:I,shadowOptions:{delegatesFocus:!0}})],T)},68231:function(t,e,i){i.r(e),i.d(e,{MsnSlideshow:function(){return N}});var o=i(17469),a=i(99751);class n extends a.s{}var s=i(60347),r=i(64187),d=i(73477),l=i(22131),h=i(7896),c=i(48751),p=i(26920),g=i(14996),u=i(50882),x=i(74849),m=i(18750);const f=x.A`
${(0,r.V)("inline-flex")} :host{box-sizing:border-box;font-family:${h.O};
    min-height: 4px;
    background-color: ${c.l};
    border-radius: 20px;
    opacity: 0.4;
    grid-row: 1;
    z-index: 1;
    margin: 2px 2px 8px;

    background: ${(0,m.ud)()?"linear-gradient(to right, #DEDDDD 50%, #7E7C7C 50%)":"linear-gradient(to right, #868383 50%, #E8E7E7 50%)"};background-size:200% 100%;background-position:right;transition-property:background-position;transition-duration:0s}:host([tab-selected="true"]){opacity:1;background-position:left;transition-duration:3s}:host([tab-filled="true"]){background:${(0,m.ud)()?"#DEDDDD":"#868383"};opacity:1}:host(:active){background:${(0,m.ud)()?"#DEDDDD":"#868383"};
    opacity: 1;
}

:host(:${d.N}){outline:none;box-shadow:0 0 0 calc((${p.vd} - ${p.XA}) * 1px)
        rgba(0,0,0,1), 0 0 0 calc((${p.vd} + ${p.XA}) * 1px)
        ${g.WN};}:host(:focus){outline:none}:host([tab-selected="false"][is-immersive="true"]){background:#FFFFFF;border-radius:100px;width:6px;height:6px;margin-right:6px}:host([tab-selected="true"][is-immersive="true"]){background:#FFFFFF;border-radius:100px;width:30px;height:6px;margin-right:6px}`.withBehaviors((0,l.mr)(x.A` :host{forced-color-adjust:none;border-color:transparent;color:${u.A.ButtonText};
                fill: ${u.A.ButtonText}}:host(:hover),:host([tab-selected="true"]:hover){background:${u.A.Highlight};
                color: ${u.A.HighlightText};
                fill: ${u.A.HighlightText}}:host([tab-selected="true"]){background:${u.A.HighlightText};
                color: ${u.A.Highlight};
                fill: ${u.A.Highlight};
            }
            :host(:${d.N}){border-color:${u.A.ButtonText};
                box-shadow: none;
            }
        `),(0,l.G2)(x.A`
        :host([tab-selected="false"][is-immersive="true"]){
            background: #FFFFFF;
            border-radius: 100px;
            width: 6px;
            height: 6px;
            margin-right: 6px;
        }
        :host([tab-selected="true"][is-immersive="true"]){
            background: #FFFFFF;
            border-radius: 100px;   
            width: 30px;
            height: 6px;
            margin-right: 6px;
        }
    }
`)),v=n.compose({name:"msn-slideshow-tab",template:(0,s.M)(),styles:f});var b=i(56911),$=i(92011),w=i(38493),y=i(60815);const k='<svg width="44" height="43" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_dd)"><rect x="4.625" y="2.81641" width="35" height="34" rx="17" fill="black" fill-opacity="0.55"/>\n<path d="M17.7335 12.4303C17.2337 12.1584 16.625 12.5202 16.625 13.0891V26.5414C16.625 27.1103 17.2337 27.4721 17.7335 27.2002L30.095 20.474C30.6171 20.19 30.6171 19.4405 30.095 19.1564L17.7335 12.4303ZM15.125 13.0891C15.125 11.3823 16.9511 10.2969 18.4504 11.1127L30.812 17.8389C32.3781 18.691 32.3781 20.9394 30.812 21.7916L18.4504 28.5178C16.9511 29.3335 15.125 28.2482 15.125 26.5414V13.0891Z" fill="white"/></g><defs><filter id="filter0_dd" x="0.813236" y="0.69876" width="42.6235" height="41.6235" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1.69412"/><feGaussianBlur stdDeviation="1.90588"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="0.317647"/><feGaussianBlur stdDeviation="0.476471"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/><feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/></filter></defs>\n</svg>',C='<svg width="44" height="42" viewBox="0 0 44 42" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_dd)"><rect x="4.625" y="2.21094" width="35" height="34" rx="17" fill="black" fill-opacity="0.55"/>\n<path d="M15.8711 10.2109C14.9046 10.2109 14.1211 10.9944 14.1211 11.9609V26.4609C14.1211 27.4274 14.9046 28.2109 15.8711 28.2109H19.3711C20.3376 28.2109 21.1211 27.4274 21.1211 26.4609V11.9609C21.1211 10.9944 20.3376 10.2109 19.3711 10.2109H15.8711ZM15.6211 11.9609C15.6211 11.8229 15.733 11.7109 15.8711 11.7109H19.3711C19.5092 11.7109 19.6211 11.8229 19.6211 11.9609V26.4609C19.6211 26.599 19.5092 26.7109 19.3711 26.7109H15.8711C15.733 26.7109 15.6211 26.599 15.6211 26.4609V11.9609Z" fill="white" fill-opacity="0.8"/>\n<path d="M24.8711 10.2109C23.9046 10.2109 23.1211 10.9944 23.1211 11.9609V26.4609C23.1211 27.4274 23.9046 28.2109 24.8711 28.2109H28.3711C29.3376 28.2109 30.1211 27.4274 30.1211 26.4609V11.9609C30.1211 10.9944 29.3376 10.2109 28.3711 10.2109H24.8711ZM24.6211 11.9609C24.6211 11.8229 24.733 11.7109 24.8711 11.7109H28.3711C28.5092 11.7109 28.6211 11.8229 28.6211 11.9609V26.4609C28.6211 26.599 28.5092 26.7109 28.3711 26.7109H24.8711C24.733 26.7109 24.6211 26.599 24.6211 26.4609V11.9609Z" fill="white" fill-opacity="0.8"/></g><defs><filter id="filter0_dd" x="0.813236" y="0.0932908" width="42.6235" height="41.6235" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1.69412"/><feGaussianBlur stdDeviation="1.90588"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="0.317647"/><feGaussianBlur stdDeviation="0.476471"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/><feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/></filter></defs>\n</svg>';var z=i(90905),F=i(5096),L=i(93516);class B extends $.L{constructor(){super(...arguments),this.activeTabIndex=0,this.prevActiveTabIndex=0,this.setActiveImage=()=>{const t=this.activeTabIndex===this.images.length?0:this.activeTabIndex,e=this.images[t],i=this.imageContainer,o=this.transitionImageContainer,a=this.backgroundBlurImageContainer;i&&i.src&&e&&e.source&&(o.src=e.source,o.alt=e.altText,a.src=e.source,a.alt=e.altText,i.className="fadeOut",setTimeout(function(){i.src=e.source,i.alt=e.altText,a.src=e.source,a.alt=e.altText,i.className=""},750))},this.setActiveTab=()=>{this.tabs.forEach((t,e)=>{if("tab"===t.slot){const i=()=>{t.setAttribute("tab-selected",this.activeTabIndex===e?"true":"false")};"true"!==t.getAttribute("is-immersive")&&t.setAttribute("style",`min-width:${276/this.tabs.length-8}px`),t.setAttribute("tab-filled",this.activeTabIndex>e&&this.activeTabIndex>0?"true":"false"),0===this.activeTabIndex&&0===e?window.setTimeout(i,50):i(),t.addEventListener("click",this.handleTabClick)}})},this.handleTabClick=t=>{const e=t.currentTarget;1===e.nodeType&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(e),this.setComponent(),(0,L.u)(t.target,"SlideshowTabClick",`${this.activeTabIndex}`,0)),t.stopPropagation(),this.enableMediaControls&&this.autoScroll&&(this.autoScroll=!1,this.mediaContainer.innerHTML=k)}}connectedCallback(){super.connectedCallback(),this.autoScroll&&(this.setActiveTab(),this.handleUserScroll(),this.autoScrollHandler())}disconnectedCallback(){super.disconnectedCallback(),window.clearTimeout(this.timer),window.removeEventListener("scroll",this.userScrollStartCallback),window.removeEventListener("scroll",this.userScrollStopCallback)}handleUserScroll(){this.userScrollStartCallback=(0,z.A)(()=>{this.isUserScrolling=!0},400,{leading:!0,trailing:!1}),this.userScrollStopCallback=(0,z.A)(()=>{this.isUserScrolling=!1},400,{leading:!1,trailing:!0}),window.addEventListener("scroll",this.userScrollStartCallback),window.addEventListener("scroll",this.userScrollStopCallback)}autoScrollHandler(){this.timer=window.setTimeout(()=>{this.autoScroll&&!this.isUserScrolling&&this.adjust(),this.autoScrollHandler()},this.autoScrollIntervalMs||3e3)}get tabs(){return this.tabContainer&&this.tabContainer.children&&this.tabContainer.children.length?Array.from(this.tabContainer.children):[]}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.setActiveImage(),this.enableMediaControls&&this.setActiveTab())}adjust(){const t=this.enableMediaControls?this.images.length-1:this.images.length;this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=(0,F.Vf)(0,t,this.activeTabIndex+1),this.setComponent()}toggleMediaControls(t){t.stopPropagation(),this.enableMediaControls&&(this.autoScroll?(this.autoScroll=!1,this.mediaContainer.innerHTML=k):(this.autoScroll=!0,this.mediaContainer.innerHTML=C),(0,L.u)(t.currentTarget,"SlideshowMediaClick",`${this.autoScroll}`,0))}handleCardLinkClick(t){return this.$emit("link-invoked",t),!0}}(0,b.Cg)([w.CF],B.prototype,"isImmersive",void 0),(0,b.Cg)([y.sH],B.prototype,"autoScroll",void 0),(0,b.Cg)([y.sH],B.prototype,"autoScrollIntervalMs",void 0),(0,b.Cg)([y.sH],B.prototype,"images",void 0),(0,b.Cg)([y.sH],B.prototype,"imageData",void 0),(0,b.Cg)([y.sH],B.prototype,"enableMediaControls",void 0),(0,b.Cg)([y.sH],B.prototype,"anchorTelemetryTag",void 0),(0,b.Cg)([y.sH],B.prototype,"destinationUrl",void 0),(0,b.Cg)([y.sH],B.prototype,"badge",void 0);var S=i(89580);const _=x.A` msft-attribution{position:relative;overflow:hidden}span.title_1x_2y,span.title_1x_3y{font-size:100px}${(0,r.V)("flex")} :host{--icon-size:24px;position:relative;width:auto;box-sizing:border-box;font-family:${h.O};flex-direction:column;outline:none;height:100%;overflow:hidden}[slot="image-with-badge"]{position:absolute;top:0px;left:0px;width:300px;height:225px;display:flex;justify-content:center;align-items:center;z-index:-2}[name="image-container"]{opacity:1;transition:opacity 0.5s linear;position:absolute;object-fit:contain;height:225px;width:300px}[name="transition-image-container"]{object-fit:contain;height:225px;width:300px}[name="image-container"].fadeOut{opacity:0}.media-container{position:absolute;top:142px;right:5.5px;z-index:2;cursor:pointer}[class="mask"]{position:absolute;width:300px;height:126px;margin-top:100px;z-index:0}[class="tab-container"]{width:300px;margin-left:auto;height:19px;margin-top:238px;display:flex;align-items:center;justify-content:center}.heading-container{grid-row:1;display:flex;flex-direction:column;padding-inline-end:var(--heading-end-padding,16px);padding-bottom:0;padding-top:0;width:300px;height:225px;position:absolute;overflow-wrap:break-word}.heading-container.no-media-controls{padding-top:10px;position:absolute}[class="heading-wrapper"]{margin-top:184px;padding:0px 16px}.heading-wrapper a:after{bottom:0;content:"";height:304px;left:0;position:absolute;right:0;top:0;width:300px;z-index:1}.heading{text-decoration:none;outline:none;color:white;font-size:var(--heading-font-size,${S.Y});
        line-height: var(--heading-line-height, ${S.v});
        font-weight: 600;
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        white-space: initial;
    }

    .heading:hover,
    .heading:${d.N}{text-decoration:underline}::slotted([slot="call-to-action"]){width:calc(100% - 32px);margin:0 16px}[name="blur-image-background"]{position:absolute;left:0px;top:0px;height:225px;width:300px;filter:blur(60px);z-index:-1}[class="tab-container-mask"]{position:absolute;left:0px;bottom:0px;height:79px;width:300px;z-index:-1}.footer{position:absolute;padding:0px 16px 4px;height:40px;width:268px;bottom:0px;display:flex;flex-direction:row;align-items:center;justify-content:space-between;background:#2B2B2B}::slotted([slot="start-actions"]),::slotted([slot="end-actions"]){z-index:2;gap:5px;display:flex;align-items:center}::slotted([slot="end-actions"]){--neutral-foreground-rest:white;--control-corner-radius:100;--neutral-fill-hover:#484848}[part="start-actions"]{display:inline-block;width:80%}[class="mask"]{background:linear-gradient(transparent 0%,rgba(43,43,43,0.8) 62.5%,rgb(43,43,43) 100%)}[class="tab-container-mask"]{background:#2B2B2B}`.withBehaviors((0,l.mr)(x.A` .heading{color:${u.A.LinkText};
                background: ${u.A.ButtonFace};
            }
        `),(0,l.G2)(x.A`
        [class="footer"]{
            background: #2B2B2B;
        }

        [class="mask"]{
            background: linear-gradient(transparent 0%, rgba(43, 43, 43, 0.8) 62.5%, rgb(43, 43, 43) 100%)
        }

        [class="tab-container-mask"]{
            background: #2B2B2B;
        }
    }
`));var A=i(96950),M=i(60402),I=i(91640),T=i(39957);i(86845)._t;const D=A.qy`<msn-slideshow-tab tab-filled="false" tab-selected="false" is-immersive="true"></msn-slideshow-tab>`,H=A.qy`<div class=${t=>!0===t.enableMediaControls?"heading-container":"heading-container no-media-controls"} part="heading-container"><span class="heading-wrapper" part="heading-wrapper" role="heading" aria-level=3><a class="heading" part="heading" href=${t=>t.destinationUrl?t.destinationUrl:void 0} target="_blank" @click=${(t,e)=>t.handleCardLinkClick(e.event)} data-t="${t=>t.anchorTelemetryTag}"><slot></slot></a></span></div>`,E=A.qy`<div class="footer" part="footer"><slot name="start-actions"></slot><slot name="end-actions"></slot></div>`,V=()=>A.qy`<div slot="image-with-badge"><img name="blur-image-background" ${(0,M.K)("backgroundBlurImageContainer")} src="${t=>t.images[0]&&t.images[0].source}" alt="${t=>t.images[0]&&t.images[0].altText}" width="${t=>t.imageData&&t.imageData.imageWidth}" height="${t=>t.imageData&&t.imageData.imageHeight}" /><img name="image-container" ${(0,M.K)("imageContainer")}" src="${t=>t.images[0]&&t.images[0].source}" alt="${t=>t.images[0]&&t.images[0].altText}" width="${t=>t.imageData&&t.imageData.imageWidth}" height="${t=>t.imageData&&t.imageData.imageHeight}" /><img name="transition-image-container" ${(0,M.K)("transitionImageContainer")}" src="${t=>t.images[0]&&t.images[0].source}" alt="${t=>t.images[0]&&t.images[0].altText}" width="${t=>t.imageData&&t.imageData.imageWidth}" height="${t=>t.imageData&&t.imageData.imageHeight}" /><div>`,Z=A.qy` ${(0,I.z)(t=>t.badge,A.qy`<msn-image-badge-decorator badgeType=${t=>t.badge.type} text=${t=>t.badge.text}>${t=>V()}</msn-image-badge-decorator>`)} ${(0,I.z)(t=>!t.badge,A.qy` ${t=>V()} `)}<div class="mask"></div>${H}<div class="tab-container-mask"></div>${(0,I.z)(t=>!0===t.enableMediaControls,A.qy`<span class="media-container" ${(0,M.K)("mediaContainer")} @click="${(t,e)=>t.toggleMediaControls(e.event)}">${C}</span><div class="tab-container" ${(0,M.K)("tabContainer")}>${(0,T.ux)(t=>t.images,D)}</div>`)}<slot name="call-to-action"></slot>${E}
`;let N=class extends B{};N=(0,b.Cg)([(0,$.E)({name:"msn-slideshow",template:Z,styles:_,shadowOptions:{delegatesFocus:!0}})],N),v.define(o.u.registry)},86845:function(t,e,i){i.d(e,{_t:function(){return k},aM:function(){return C}});var o=i(56911),a=i(92011),n=i(38493);class s extends a.L{constructor(){super(...arguments),this.enabled=!1,this.isInfoPane=!1}}(0,o.Cg)([n.CF],s.prototype,"icon",void 0),(0,o.Cg)([n.CF],s.prototype,"text",void 0),(0,o.Cg)([n.CF],s.prototype,"extraBadgeStyle",void 0),(0,o.Cg)([(0,n.CF)({mode:"boolean"})],s.prototype,"enabled",void 0),(0,o.Cg)([n.CF],s.prototype,"layout",void 0),(0,o.Cg)([(0,n.CF)({mode:"boolean",attribute:"is-info-pane"})],s.prototype,"isInfoPane",void 0);var r=i(96950);const d=r.qy`<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.5 4H1V7.5C1 7.776 1.224 8 1.5 8H2.5C2.776 8 3 7.776 3 7.5V7H7V7.5C7 7.776 7.224 8 7.5 8H8.5C8.776 8 9 7.776 9 7.5V4H9.5C9.776 4 10 3.776 10 3.5C10 3.224 9.776 3 9.5 3H8.75L8.284 1.136C8.117 0.468 7.517 0 6.829 0H3.171C2.483 0 1.883 0.468 1.716 1.136L1.25 3H0.5C0.224 3 0 3.224 0 3.5C0 3.776 0.224 4 0.5 4ZM6 6H4C3.724 6 3.5 5.776 3.5 5.5C3.5 5.224 3.724 5 4 5H6C6.276 5 6.5 5.224 6.5 5.5C6.5 5.776 6.276 6 6 6ZM8.25 4.5C8.25 4.914 7.914 5.25 7.5 5.25C7.086 5.25 6.75 4.914 6.75 4.5C6.75 4.086 7.086 3.75 7.5 3.75C7.914 3.75 8.25 4.086 8.25 4.5ZM2.687 1.379C2.742 1.157 2.942 1 3.171 1H6.829C7.058 1 7.258 1.157 7.313 1.379L7.719 3H2.281L2.687 1.379ZM2.5 3.75C2.914 3.75 3.25 4.086 3.25 4.5C3.25 4.914 2.914 5.25 2.5 5.25C2.086 5.25 1.75 4.914 1.75 4.5C1.75 4.086 2.086 3.75 2.5 3.75ZM11.5 6H10.5C10.224 6 10 6.224 10 6.5V9H0.5C0.224 9 0 9.224 0 9.5C0 9.776 0.224 10 0.5 10H11.5C11.776 10 12 9.776 12 9.5V6.5C12 6.224 11.776 6 11.5 6Z" fill="black" fill-opacity="0.83"/>
</svg>
`,l=r.qy`<svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.38909 11.6701L8.63932 12.4338C8.08675 12.9924 7.36969 13.7106 6.48803 14.5885C5.93704 15.1372 5.06295 15.1371 4.51208 14.5884L2.30692 12.3792C2.02977 12.0989 1.79778 11.8626 1.61091 11.6701C-0.536971 9.45796 -0.536971 5.87129 1.61091 3.65913C3.7588 1.44696 7.24121 1.44696 9.38909 3.65913C11.537 5.87129 11.537 9.45796 9.38909 11.6701ZM7.07926 7.84334C7.07926 6.94501 6.37218 6.21679 5.49999 6.21679C4.6278 6.21679 3.92074 6.94501 3.92074 7.84334C3.92074 8.74163 4.6278 9.46986 5.49999 9.46986C6.37218 9.46986 7.07926 8.74163 7.07926 7.84334Z" fill="#717171"/>
</svg>
`,h=r.qy`<svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.06591 0.163636L0.156818 5.07273C-0.0522727 5.28182 -0.0522727 5.62727 0.156818 5.84545L4.15682 9.84545C4.36591 10.0545 4.71136 10.0545 4.92955 9.84545L9.83864 4.93636C9.93864 4.82727 9.99318 4.69091 9.99318 4.54545V0.545455C9.99318 0.245455 9.74773 0 9.44773 0H5.44773C5.30227 0 5.16591 0.0545455 5.06591 0.163636ZM8.52955 2.77273C8.475 2.89091 8.40227 3 8.31136 3.09091C8.22046 3.18182 8.12045 3.25455 7.99318 3.3C7.86591 3.34545 7.74773 3.38182 7.61136 3.38182C7.475 3.38182 7.33864 3.35455 7.22045 3.3C7.10227 3.25455 6.99318 3.18182 6.90227 3.09091C6.81136 3 6.73864 2.89091 6.69318 2.77273C6.63864 2.65455 6.61136 2.52727 6.61136 2.38182C6.61136 2.23636 6.63864 2.10909 6.69318 1.99091C6.73864 1.88182 6.81136 1.77273 6.90227 1.69091C6.99318 1.6 7.10227 1.52727 7.22045 1.47273C7.33864 1.41818 7.46591 1.39091 7.61136 1.39091C7.75682 1.39091 7.88409 1.41818 8.00227 1.47273C8.12046 1.52727 8.22955 1.6 8.31136 1.69091C8.40227 1.78182 8.475 1.88182 8.52955 2C8.58409 2.11818 8.61136 2.24545 8.61136 2.39091C8.61136 2.53636 8.575 2.65455 8.52955 2.77273Z" fill="white"/>
</svg>
`,c=r.qy`<svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.60838 0.745943L0.244749 8.10958C-0.0688876 8.42322 -0.0688876 8.9414 0.244749 9.26867L6.24475 15.2687C6.55838 15.5823 7.07657 15.5823 7.40384 15.2687L14.7675 7.90503C14.9175 7.7414 14.9993 7.53685 14.9993 7.31867V1.31867C14.9993 0.86867 14.6311 0.500488 14.1811 0.500488H8.18111C7.96293 0.500488 7.75838 0.582306 7.60838 0.745943ZM12.8038 4.65958C12.722 4.83685 12.6129 5.00049 12.4766 5.13685C12.3402 5.27322 12.1902 5.38231 11.9993 5.45049C11.8084 5.51867 11.6311 5.57322 11.4266 5.57322C11.222 5.57322 11.0175 5.53231 10.8402 5.45049C10.6629 5.38231 10.4993 5.27322 10.3629 5.13685C10.2266 5.00049 10.1175 4.83685 10.0493 4.65958C9.96748 4.48231 9.92657 4.2914 9.92657 4.07322C9.92657 3.85503 9.96748 3.66412 10.0493 3.48685C10.1175 3.32322 10.2266 3.15958 10.3629 3.03685C10.4993 2.90049 10.6629 2.7914 10.8402 2.70958C11.0175 2.62776 11.2084 2.58685 11.4266 2.58685C11.6447 2.58685 11.8357 2.62776 12.0129 2.70958C12.1902 2.7914 12.3538 2.90049 12.4766 3.03685C12.6129 3.17322 12.722 3.32322 12.8038 3.50049C12.8857 3.67776 12.9266 3.86867 12.9266 4.08685C12.9266 4.30503 12.872 4.48231 12.8038 4.65958Z" fill="#717171"/>
</svg>
`,p=r.qy`<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.27351 0.971551C5.57068 0.342816 6.4293 0.342816 6.72646 0.971551L8.14149 3.96535L11.3055 4.44543C11.97 4.54625 12.2353 5.39895 11.7545 5.88833L9.46494 8.21866L10.0054 11.5092C10.1189 12.2002 9.42431 12.7272 8.82998 12.4009L5.99999 10.8474L3.17001 12.4009C2.57569 12.7272 1.88105 12.2002 1.99456 11.5092L2.53504 8.21866L0.245535 5.88833C-0.235291 5.39895 0.030035 4.54625 0.69452 4.44543L3.85854 3.96535L5.27351 0.971551Z" fill="#717171"/>
</svg>
`;class g extends s{constructor(){super()}badgeTypeChanged(){"CurbsidePickup"===this.badgeType?(this.icon=d,this.enabled=!0):"OnSale"===this.badgeType?(this.icon=h,this.enabled=!0):"PriceDrop"===this.badgeType?(this.icon=c,this.enabled=!0):"LocalInventory"===this.badgeType?(this.icon=l,this.enabled=!0):"NewProduct"===this.badgeType&&(this.icon=p,this.enabled=!0)}}(0,o.Cg)([n.CF],g.prototype,"badgeType",void 0),(0,o.Cg)([n.CF],g.prototype,"badgeStyle",void 0),(0,o.Cg)([n.CF],g.prototype,"text",void 0);var u=i(74849),x=i(4126);const m=u.A` .info-pane .image-badge,.river .image-badge{background:#0078D4}.info-pane .image-badge .badge-text,.river .image-badge .badge-text{position:static;width:auto;height:16px;left:22px;top:2px;font-style:normal;font-weight:500;font-size:12px;line-height:16px;text-transform:uppercase;color:#FFFFFF}.info-pane .badge-icon path,.river .badge-icon path{fill:#FFFFFF}`,f=u.A`.river .image-badge{background:rgba(0,0,0,0.54)}.river .image-badge .badge-text{position:static;width:auto;height:16px;left:22px;top:2px;font-style:normal;font-weight:500;font-size:12px;line-height:16px;text-transform:uppercase;color:#FFFFFF}.river .image-background-gradient{position:absolute;background:linear-gradient(to left top,rgba(180,180,180,0) 3.99%,rgba(180,180,180,0.05) 57.8%,rgba(180,180,180,0.15) 75.35%,rgba(180,180,180,0.3) 100%);width:100%;height:50px;z-index:1}.river .badge-icon path{fill:#FFFFFF}`,v=u.A` .image-badge-decorator{overflow:hidden;width:100%;height:100%}.image-badge{display:flex;flex-direction:row;align-items:center;padding:2px 8px 2px 4px;position:absolute;width:auto;height:20px;left:8px;top:8px;background:rgba(255,255,255,0.8);border-radius:4px;z-index:1}.badge-icon{line-height:14px;margin-left:4px}.badge-text{position:static;height:16px;right:12px;top:8.5px;font-size:12px;font-weight:600;line-height:14px;display:flex;align-items:center;text-align:right;flex:none;order:5;flex-grow:0;margin-left:8px;text-transform:uppercase}.image-badge-wrapper{z-index:1}.image-badge{background:rgba(43,43,43,0.7)}.badge-text{color:white}.badge-icon path{fill:white}${f}
`.withBehaviors(new x.o("_badgeStyle","standingOut",u.A`
            ${m}
        `),new x.o("_badgeStyle","blendedIn",u.A`
            ${f}
        `));var b=i(91640);const $=r.qy`<div class="image-badge-decorator" layout=${t=>t.layout}>${(0,b.z)(t=>t.enabled,r.qy`<div class="image-badge-wrapper ${t=>t.isInfoPane?"info-pane":"river"}" style=${t=>t.extraBadgeStyle}><div class="image-background-gradient"></div><div class="image-badge"><div class="badge-icon">${t=>t.icon}</div><div class="badge-text">${t=>t.text}</div></div></div><span part="image-with-badge"><slot name="image-with-badge"></slot></span>`)} ${(0,b.z)(t=>!t.enabled,r.qy`<slot name="image-with-badge"></slot>`)}</div>`,w=u.A` .image-badge-decorator{position:relative;filter:drop-shadow(rgba(0,0,0,0.25) 0px 0px 4px)}.image-badge-wrapper{height:var(--z-index-image-height);width:var(--z-index-image-width);position:absolute;margin:12px}@media (prefers-color-scheme:light){.image-badge-decorator[layout="imageAtBottom"]{.image-background-gradient{background:linear-gradient(120.95deg,rgba(34,34,34,0) 3.99%,rgba(34,34,34,0.05) 57.8%,rgba(34,34,34,0.15) 75.35%,rgba(34,34,34,0.35) 100%);transform:unset}}.river .image-background-gradient{height:100%}}.image-badge-decorator[layout="imageAtBottom"] .image-badge{display:flex;flex-direction:row;align-items:center;position:absolute;inset:auto 0 0 auto;border-radius:20px 0px 0px 0px}`;let y=class extends s{};y=(0,o.Cg)([(0,a.E)({name:"msn-raw-image-badge-decorator",template:$,styles:v})],y);let k=class extends g{};k=(0,o.Cg)([(0,a.E)({name:"msn-image-badge-decorator",template:$,styles:v})],k);let C=class extends g{};C=(0,o.Cg)([(0,a.E)({name:"msn-z-index-image-badge-decorator",template:$,styles:[v,w]})],C)},87677:function(t,e,i){i.r(e),i.d(e,{MsnZIndexCard:function(){return N}});var o,a=i(56911),n=i(22131),s=i(64187),r=i(73477),d=i(7896),l=i(61138),h=i(64003),c=i(48751),p=i(89580),g=i(57416),u=i(50882),x=i(92011),m=i(38493),f=i(60815);!function(t){t.imageAtBottom="imageAtBottom",t.imageAtTop="imageAtTop",t.imageAtRight9By16="imageAtRight9By16",t.imageAtRight3By4="imageAtRight3By4",t.animatedImagery9by16="animatedImagery9by16"}(o||(o={}));class v extends x.L{constructor(){super(...arguments),this.layout=o.imageAtTop,this.headingMaxLines=5,this.documentDirection="ltr",this.headinglevel=3}handleStartActionsContentChange(){this.startActionsContainer.classList.toggle("start-actions",this.startActions.assignedNodes().length>0),this.hasFooter=this.endActions.assignedNodes().length>0}handleEndActionsContentChange(){this.endActionsContainer.classList.toggle("end-actions",this.endActions.assignedNodes().length>0),this.hasFooter=this.endActions.assignedNodes().length>0}abstractChanged(){this.$fastController.isConnected&&(this.hasAbstract=this.abstract.length>0)}handleMediaContentChange(){this.mediaContainer.classList.toggle("media",this.media.assignedNodes().length>0)}handleBackgroundImageContentChange(){this.backgroundImageContainer.classList.toggle("background-image",this.backgroundImage.assignedNodes().length>0)}handleZIndexCardLinkClick(t){return this.$emit("link-invoked",t),!0}}(0,a.Cg)([m.CF],v.prototype,"layout",void 0),(0,a.Cg)([(0,m.CF)({attribute:"heading-max-lines"})],v.prototype,"headingMaxLines",void 0),(0,a.Cg)([(0,m.CF)({attribute:"document-direction"})],v.prototype,"documentDirection",void 0),(0,a.Cg)([(0,m.CF)({attribute:"heading-level",mode:"fromView",converter:m.R$})],v.prototype,"headinglevel",void 0),(0,a.Cg)([(0,m.CF)({mode:"fromView"})],v.prototype,"href",void 0),(0,a.Cg)([f.sH],v.prototype,"anchorTelemetryTag",void 0),(0,a.Cg)([f.sH],v.prototype,"mediaNodes",void 0),(0,a.Cg)([f.sH],v.prototype,"hasAbstract",void 0),(0,a.Cg)([f.sH],v.prototype,"hasFooter",void 0),(0,a.Cg)([f.sH],v.prototype,"abstract",void 0),(0,a.Cg)([f.sH],v.prototype,"iconSlottedNodes",void 0),(0,a.Cg)([(0,m.CF)({attribute:"image-priority",mode:"boolean"})],v.prototype,"imagePriority",void 0),(0,a.Cg)([m.CF],v.prototype,"target",void 0),(0,a.Cg)([f.sH],v.prototype,"hoverActionsSlottedNodes",void 0);var b=i(74849);const{imageAtBottom:$,imageAtTop:w,imageAtRight9By16:y,imageAtRight3By4:k,animatedImagery9by16:C}=o,z="#373737",F="white",L=t=>t.withBehaviors((0,n.mr)(b.A` .heading{color:${u.A.LinkText};
            background: ${u.A.ButtonFace}}.footer,.start-actions,.end-actions,::slotted([slot="start-actions"]),::slotted([slot="end-actions"]){background:${u.A.ButtonFace};
            color: ${u.A.ButtonText};fill:currentcolor}::slotted(fluent-button[appearance="stealth"]:not(:hover)){background:${u.A.ButtonFace};
        }
    `)),B=L(b.A` :host span.title_1x_2y,:host span.title_1x_3y{font-size:20px}${(0,s.V)("flex")} :host{position:relative;width:auto;box-sizing:border-box;font-family:${d.O};flex-direction:column;outline:none;overflow:hidden;height:100%;width:100%}:host(:hover) .hover-actions{opacity:1;transition:opacity 0.2s ease-in-out}:host(:hover) .media{filter:brightness(0.98)}.body{display:grid;justify-content:center;row-gap:8px;column-gap:10px;grid-template-columns:1fr auto;grid-template-rows:auto}.footer{padding-inline-start:var(--footer-start-padding,16px);padding-inline-end:var(--footer-start-padding,16px);padding-top:var(--footer-padding-top,0);padding-bottom:var(--footer-padding-bottom,4px);margin-top:16px;font-size:var(--footer-font-size,${l.k});
        line-height: var(--footer-line-height, ${l.F})}.footer,.start-actions,.end-actions{display:flex;flex-direction:row;align-items:center;justify-content:space-between;color:${h.c};
        fill: ${h.c};
    }    

    :host([layout=${w}]) .footer{position:absolute;bottom:24px;padding:0 24px;margin-top:unset;width:268px;padding-inline-start:24px;padding-inline-end:24px}.footer__hidden{display:none}.heading-wrapper{grid-row:1;display:flex;flex-direction:column}.heading-wrapper a:after{content:"";height:304px;position:absolute;width:300px;z-index:1}:host([layout=${w}]) .heading-wrapper a:after{top:-52px}:host([layout=${$}]) .heading-wrapper a:after{top:-38px}.media{display:flex;flex-direction:row;position:absolute}:host([layout=${$}]) .media{bottom:4px}:host([layout=${w}]) .media{top:8px}:host([image-priority]) .body{grid-template-columns:1}:host([image-priority]) .media-wrapper{grid-row:1;grid-column:span 2;margin:0;display:flex;justify-content:center}:host([image-priority]) .heading-container{grid-row:2;grid-column:span 2;padding-inline-start:var(--heading-start-padding,16px);padding-inline-end:var(--heading-end-padding,16px)}:host([layout=${$}]) .heading-container{top:39px;position:absolute}::slotted([slot="start-actions"]),::slotted([slot="end-actions"]){z-index:2;display:grid;gap:5px;align-items:center;grid-auto-flow:column}:host([layout=${w}]) ::slotted([slot="call-to-action"]){top:230px}:host([layout=${$}]) ::slotted([slot="call-to-action"]){top:-40px}::slotted([slot="call-to-action"]){width:calc(100% - 32px);grid-row:3;grid-column:1 / span 2;margin:0 24px}::slotted(fluent-button[slot="start-actions"]),::slotted(fluent-button[slot="end-actions"]){color:${h.c};
        fill: ${h.c}}.heading{-webkit-box-orient:vertical;-webkit-line-clamp:var(--heading-max-lines,2);color:${c.l};
        display: -webkit-box;
        font-size: var(--heading-font-size, ${p.Y});
        font-weight: 600;
        line-height: var(--heading-line-height, ${p.v});outline:none;overflow:hidden;text-decoration:none;white-space:initial}.mask{display:none}.heading:hover,.heading:${r.N}{text-decoration:underline}@media (prefers-color-scheme:dark){.heading-gradient-background{background:${z}}}@media (prefers-color-scheme:light){.heading-gradient-background{background:${F}}}.heading-gradient-background{border-radius:calc(${g.JU} * 1px);
        box-shadow: 0 0 calc((var(--elevation) * 0.225px) + 2px) rgba(0, 0, 0, calc(0.11 * (2 - var(--background-luminance, 1)))), 0 calc(var(--elevation) * 0.4px) calc((var(--elevation) * 0.9px)) rgba(0, 0, 0, calc(0.13 * (2 - var(--background-luminance, 1))));
        height: 252px;
        left: 8px;
        position: absolute;
        width: 300px;
    }

    :host([layout=${$}]) .heading-gradient-background{top:8px}:host([layout=${w}]) .heading-gradient-background{bottom:8px}:host([layout=${w}]) .heading-gradient-background .heading{padding-top:137px;padding-right:16px}.heading::after{bottom:0;content:"";left:0;position:absolute;right:0;top:0}`),S=L(b.A`
:host([layout=${k}]) span.title_1x_2y,
:host([layout=${k}]) span.title_1x_3y{font-size:20px}:host([layout=${k}]) .heading-wrapper{grid-row:1;display:flex;flex-direction:column}:host([layout=${k}]) .heading-wrapper a:after{content:"";height:304px;position:absolute;width:300px;z-index:1}:host([layout=${k}]) .heading{overflow:hidden;text-decoration:none;font-size:20px;line-height:28px;width:121px;margin-top:14px;overflow-wrap:break-word}:host([layout=${k}][document-direction="rightToLeft"]) .heading-wrapper a:after{
    left: 0px;
}

:host([layout=${k}][document-direction="rightToLeft"]) .heading{margin-right:179px}:host([layout=${k}][heading-max-lines="eight-lines-heading"]) .heading{
    --heading-max-lines: 8;
}

:host([layout=${k}][heading-max-lines="five-lines-heading"]) .heading{
    --heading-max-lines: 5;
}

:host([layout=${k}]) ::slotted([slot="call-to-action"]){width:102px;top:175px;position:absolute}:host([layout=${k}][document-direction="rightToLeft"]) ::slotted([slot="call-to-action"]){
    left: 16px;
}

:host([layout=${k}]) .media-wrapper{top:57px;left:162px;position:absolute;width:113px;height:202px}:host([layout=${k}][document-direction="rightToLeft"]) .media-wrapper{
    left: 178px;
}

:host([layout=${k}]) .heading:hover,
:host([layout=${k}]) .heading:${r.N}{text-decoration:underline}@media (prefers-color-scheme:dark){:host([layout=${k}]) .heading-gradient-background{background:${z};
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
    width: 241px;
    top: 8px;
}

:host([layout=${k}][document-direction="rightToLeft"]) .heading-gradient-background{
    margin-left: 16px;
}


:host([layout=${k}]) .footer{display:flex;position:absolute;bottom:16px;width:209px;left:4px}:host([layout=${k}][document-direction="rightToLeft"]) .footer{
    right: 55px;
}

:host([layout=${k}]) ::slotted([slot="start-actions"]){position:unset;z-index:2;gap:8px;align-items:center;grid-auto-flow:column}:host([layout=${k}]) .start-actions{width:127px}`),_=L(b.A`
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
    :host([layout=${y}]) .heading:${r.N}{text-decoration:underline}@media (prefers-color-scheme:dark){:host([layout=${y}]) .heading-gradient-background{background:${z};
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

    :host([layout=${y}]) ::slotted([slot="start-actions"]){position:unset;z-index:2;gap:8px;align-items:center;grid-auto-flow:column}:host([layout=${y}]) .start-actions{width:127px}`),A=L(b.A`
    :host([layout=${C}]) span.title_1x_2y,
    :host([layout=${C}]) span.title_1x_3y{font-size:20px}:host([layout=${C}]) .heading-wrapper{ 
        content: "";
        height: 304px;
        position: absolute;
        width: 300px;
        z-index: 1;
    }

    :host([layout=${C}][document-direction="rightToLeft"]) .heading-wrapper{
        left: 0px;
    }

    :host([layout=${C}][document-direction="rightToLeft"]) .heading{margin-right:179px}:host([layout=${C}]) .heading{overflow:hidden;text-decoration:none;font-size:20px;line-height:28px;width:121px;margin-top:14px;overflow-wrap:break-word}:host([layout=${C}][heading-max-lines="eight-lines-heading"]) .heading{
        --heading-max-lines: 8;
    }

    :host([layout=${C}][heading-max-lines="five-lines-heading"]) .heading{
        --heading-max-lines: 5;
    }

    :host([layout=${C}]) ::slotted([slot="call-to-action"]){width:102px;top:175px;left:0px}:host([layout=${C}][document-direction="rightToLeft"]) ::slotted([slot="call-to-action"]){
        left: 16px;
    }

    :host([layout=${C}]) .media-wrapper{position:absolute;width:141px;height:250px;right:8px;top:8px}:host([layout=${C}][document-direction="rightToLeft"]) .media-wrapper{
        left: 178px;
    }

    :host([layout=${C}]) .heading:hover,
    :host([layout=${C}]) .heading:${r.N}{text-decoration:underline}@media (prefers-color-scheme:dark){:host([layout=${C}]) .heading-gradient-background{background:${z};
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
        width: 300px;
        top: 8px;
    }

    :host([layout=${C}][document-direction="rightToLeft"]) .heading-gradient-background{
        margin-left: 16px;
    }


    :host([layout=${C}]) .footer{display:flex;position:absolute;bottom:16px;left:8px;width:268px}:host([layout=${C}][document-direction="rightToLeft"]) .footer{
        right: 0px;
    }

    :host([layout=${C}][document-direction="rightToLeft"]) ::slotted([slot="end-actions"]){margin-left:8px}:host([layout=${C}]) ::slotted([slot="start-actions"]){position:unset;z-index:2;gap:8px;align-items:center;grid-auto-flow:column}`);var M=i(96950),I=i(60402),T=i(416),D=i(10108),H=i(91640),E=i(82774);const V=M.qy`<div class="footer ${t=>t.hasAbstract?"has-abstract-footer":""} ${t=>t.hasFooter?"":"footer__hidden"}" part="footer"><span part="start-actions" ${(0,I.K)("startActionsContainer")}><slot name="start-actions" ${(0,I.K)("startActions")} @slotchange=${t=>t.handleStartActionsContentChange()}></slot></span><span part="end-actions" ${(0,I.K)("endActionsContainer")}><slot name="end-actions" ${(0,I.K)("endActions")} @slotchange=${t=>t.handleEndActionsContentChange()}></slot></span></div>`,Z=M.qy`<template ${(0,T.Y)({property:"mediaNodes",filter:(0,D.Y)("[slot='media'], [slot='icon']")})}><span part="background-image" ${(0,I.K)("backgroundImageContainer")}><slot name="background-image" ${(0,I.K)("backgroundImage")} @slotchange=${t=>t.handleBackgroundImageContentChange()}></slot></span><div class="mask" part="mask"></div><div class="heading-gradient-background">${(0,H.z)(t=>t.layout===o.imageAtBottom,V)}<div class="heading-container" part="heading-container"><slot name="attribution"></slot><span class="heading-wrapper" part="heading-wrapper" role="heading" aria-level=${t=>t.headinglevel}><a class="heading" part="heading" href=${t=>t.href?t.href:void 0} target=${t=>t.target?t.target:void 0} @click=${(t,e)=>t.handleZIndexCardLinkClick(e.event)} data-t="${t=>t.anchorTelemetryTag}"><slot></slot></a></span></div></div><div class="body ${t=>t.hasAbstract?"has-abstract":""}" part="body">${(0,H.z)(t=>{var e;return(null===(e=t.mediaNodes)||void 0===e?void 0:e.length)>0},M.qy`<div class="media-wrapper" part="media-wrapper"><div part="media" ${(0,I.K)("mediaContainer")}><slot name="media" ${(0,I.K)("media")} @slotchange=${t=>t.handleMediaContentChange()}></slot><span part="icon" ${(0,I.K)("iconContainer")} class="${t=>t.iconSlottedNodes&&t.iconSlottedNodes.length?"icon":"icon_hidden"}"><slot name="icon" ${(0,I.K)("icon")} ${(0,E.e)("iconSlottedNodes")}></slot></span></div></div>`)}<div class="abstract"><slot name="abstract" ${(0,E.e)("abstract")}></slot></div><slot name="call-to-action"></slot>${(0,H.z)(t=>t.layout!==o.imageAtBottom,V)}</div><span part="hover-actions" class="${t=>t.hoverActionsSlottedNodes&&t.hoverActionsSlottedNodes.length?"hover-actions":"hover-actions_hidden"}"><slot name="hover-actions" ${(0,E.e)("hoverActionsSlottedNodes")}></slot></span></template>`;let N=class extends v{};N=(0,a.Cg)([(0,x.E)({name:"msn-z-index-card",template:Z,styles:[B,_,S,A],shadowOptions:{delegatesFocus:!0}})],N)},92698:function(t,e,i){i.r(e),i.d(e,{MsnAdCarouselCard:function(){return M}});var o,a=i(56911),n=i(92011),s=i(38493),r=i(60815);!function(t){t.default="default"}(o||(o={}));class d extends n.L{constructor(){super(...arguments),this.layout=o.default,this.headinglevel=3}handleStartActionsContentChange(){this.startActionsContainer.classList.toggle("start-actions",this.startActions.assignedNodes().length>0),this.hasFooter=this.endActions.assignedNodes().length>0}handleEndActionsContentChange(){this.endActionsContainer.classList.toggle("end-actions",this.endActions.assignedNodes().length>0),this.hasFooter=this.endActions.assignedNodes().length>0}abstractChanged(){this.$fastController.isConnected&&(this.hasAbstract=this.abstract.length>0)}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),"title"===t&&e!==i&&this.headingContainer&&(this.headingContainer.classList.remove("heading-animation"),setTimeout(()=>{this.headingContainer.classList.add("heading-animation")},0))}handleMediaContentChange(){this.mediaContainer.classList.toggle("media",this.media.assignedNodes().length>0)}handleBackgroundImageContentChange(){this.backgroundImageContainer.classList.toggle("background-image",this.backgroundImage.assignedNodes().length>0)}handleContentCardLinkClick(t){return this.$emit("link-invoked",t),!0}}(0,a.Cg)([s.CF],d.prototype,"layout",void 0),(0,a.Cg)([(0,s.CF)({attribute:"heading-level",mode:"fromView",converter:s.R$})],d.prototype,"headinglevel",void 0),(0,a.Cg)([(0,s.CF)({mode:"fromView"})],d.prototype,"href",void 0),(0,a.Cg)([s.CF],d.prototype,"title",void 0),(0,a.Cg)([r.sH],d.prototype,"anchorTelemetryTag",void 0),(0,a.Cg)([r.sH],d.prototype,"mediaNodes",void 0),(0,a.Cg)([r.sH],d.prototype,"hasAbstract",void 0),(0,a.Cg)([r.sH],d.prototype,"hasFooter",void 0),(0,a.Cg)([r.sH],d.prototype,"abstract",void 0),(0,a.Cg)([r.sH],d.prototype,"iconSlottedNodes",void 0),(0,a.Cg)([(0,s.CF)({attribute:"image-priority",mode:"boolean"})],d.prototype,"imagePriority",void 0),(0,a.Cg)([s.CF],d.prototype,"target",void 0),(0,a.Cg)([r.sH],d.prototype,"hoverActionsSlottedNodes",void 0);var l=i(64187),h=i(73477),c=i(22131),p=i(7896),g=i(61138),u=i(64003),x=i(41123),m=i(48751),f=i(89580),v=i(86856),b=i(74849),$=i(50882);const w=b.A` .hover-actions{right:8px}.icon{left:0}`,y=b.A` .hover-actions{left:8px}.icon{right:0}`,k=b.A`
    ${(0,l.V)("flex")} :host{--icon-size:24px;position:relative;width:auto;box-sizing:border-box;font-family:${p.O};flex-direction:column;outline:none;height:100%;overflow:hidden}:host(:hover) .hover-actions{opacity:1;transition:opacity 0.2s ease-in-out}:host(:hover) .background-image,:host(:hover) .media{filter:brightness(0.9)}.body{display:grid;justify-content:center;row-gap:8px;column-gap:10px;grid-template-columns:1fr auto;grid-template-rows:auto}.heading-container.heading-animation{transition:all 0.5s linear;opacity:1}:host([layout="default"]) .body .abstract{display:none}:host([layout="default"]) .body,:host([layout="default"]) .body .has-abstract{display:block}:host([layout="default"]) .has-abstract .media-wrapper{margin-inline-start:16px}:host([image-priority]) .has-abstract .media-wrapper{margin-inline-start:0}.carousel-container-background{height:274px;margin-top:30px;width:300px;left:2px;position:absolute;border-radius:8px;box-shadow:0 0 calc((var(--elevation) * 0.225px) + 2px) rgba(0,0,0,calc(0.11 * (2 - var(--background-luminance,1)))),0 calc(var(--elevation) * 0.4px) calc((var(--elevation) * 0.9px)) rgba(0,0,0,calc(0.13 * (2 - var(--background-luminance,1))))}.footer{padding-inline-start:var(--footer-start-padding,16px);padding-inline-end:var(--footer-start-padding,16px);padding-top:10px;padding-bottom:16px;margin-top:auto;font-size:var(--footer-font-size,${g.k});
        line-height: var(--footer-line-height, ${g.F})}.footer,.start-actions,.end-actions{display:flex;flex-direction:row;align-items:center;justify-content:space-between;color:${u.c};
        fill: ${u.c}}.footer__hidden{display:none}.hover-actions{display:flex;flex-direction:column;position:absolute;top:8px;z-index:2;opacity:0}.hover-actions_hidden{display:none}.hover-actions:focus-within{opacity:1}.heading-container{grid-row:1;display:flex;flex-direction:column;padding-inline-start:var(--heading-start-padding,16px);padding-inline-end:var(--heading-end-padding,16px);padding-bottom:0;padding-top:0;position:relative;margin-top:12px;opacity:0}.heading-wrapper a:after{bottom:0;content:"";height:100%;left:0;position:absolute;right:0;top:0;width:100%;z-index:1}.icon{position:absolute;display:inline-flex;top:auto;bottom:0;justify-content:center;align-items:center;margin:0 0 4px 0;margin-inline-start:4px}.icon_hidden{display:none}::slotted([slot="icon"]){width:var(--icon-size);height:var(--icon-size);fill:#FFF}::slotted([slot="attribution"]){margin-bottom:6px}::slotted([slot="abstract"]){margin:2px 0}.media-wrapper{grid-row:1;grid-column:2;margin:0}.media-wrapper a{outline:none}.media{display:flex;position:relative}:host([image-priority]){--heading-max-lines:2}:host([image-priority]) .body{grid-template-columns:1}:host([image-priority]) .media-wrapper{grid-row:1;grid-column:span 2;margin:0}:host([image-priority]) .heading-container{grid-row:2;grid-column:span 2;padding-top:10px;padding-inline-start:var(--heading-start-padding,16px)}:host([image-priority]) ::slotted([slot="media"]){border-radius:0px}::slotted([slot="call-to-action"]){width:calc(100% - 32px);grid-row:3;z-index:1;grid-column:1 / span 2;margin:0 16px}::slotted([slot="media"]){border-radius:calc(var(--content-card-corner-radius,2) * 2px);margin-left:2px}:host([layout="default"]) .has-abstract .abstract{display:block;padding:0 16px 16px 16px}.abstract{position:relative;margin:0;font-size:var(--abstract-font-size,${x.K});
        line-height: var(--abstract-line-height, ${x.Z});
        font-weight: 400;
        grid-column: span 2;
        box-sizing: content-box;
        color: ${u.c};padding:0 16px}::slotted([slot="start-actions"]),::slotted([slot="end-actions"]){z-index:2;display:grid;gap:5px;align-items:center;grid-auto-flow:column}::slotted([slot="call-to-action"]){z-index:2}::slotted(fluent-button[slot="start-actions"]),::slotted(fluent-button[slot="end-actions"]){color:${u.c};
        fill: ${u.c}}::slotted(fluent-button[appearance="stealth"]:not(:hover)),:slotted([slot="hover-actions"]:not(:hover)){background:transparent}.heading{text-decoration:none;outline:none;color:${m.l};
        font-size: var(--heading-font-size, ${f.Y});
        line-height: var(--heading-line-height, ${f.v});font-weight:600;display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:var(--heading-max-lines,3);white-space:initial;text-align:center}.mask{display:none}.heading:hover,.heading:${h.N}{text-decoration:underline}.heading::after{position:absolute;content:"";top:0;left:0;right:0;bottom:0}.background-image{position:absolute;top:0;left:0;right:0;bottom:0}.background-image ::slotted(img){width:100%;height:100%;object-fit:cover}`.withBehaviors(new v.t(w,y),(0,c.mr)(b.A` .heading{color:${$.A.LinkText};
                background: ${$.A.ButtonFace}}.abstract{color:${$.A.ButtonText}}.icon{background-color:#000;height:fit-content}.footer,.start-actions,.end-actions,::slotted([slot="start-actions"]),::slotted([slot="end-actions"]){background:${$.A.ButtonFace};
                color: ${$.A.ButtonText};fill:currentcolor}::slotted(fluent-button[appearance="stealth"]:not(:hover)){background:${$.A.ButtonFace};
            }
        `));var C=i(96950),z=i(60402),F=i(416),L=i(10108),B=i(91640),S=i(82774);const _=C.qy`<div class="footer ${t=>t.hasAbstract?"has-abstract-footer":""} ${t=>t.hasFooter?"":"footer__hidden"}" part="footer"><span part="start-actions" ${(0,z.K)("startActionsContainer")}><slot name="start-actions" ${(0,z.K)("startActions")} @slotchange=${t=>t.handleStartActionsContentChange()}></slot></span><span part="end-actions" ${(0,z.K)("endActionsContainer")}><slot name="end-actions" ${(0,z.K)("endActions")} @slotchange=${t=>t.handleEndActionsContentChange()}></slot></span></div>`,A=C.qy`<template ${(0,F.Y)({property:"mediaNodes",filter:(0,L.Y)("[slot='media'], [slot='icon']")})}><span part="background-image" ${(0,z.K)("backgroundImageContainer")}><slot name="background-image" ${(0,z.K)("backgroundImage")} @slotchange=${t=>t.handleBackgroundImageContentChange()}></slot></span><div class="mask" part="mask"></div><div class="carousel-container-background"></div><div class="body ${t=>t.hasAbstract?"has-abstract":""}" part="body">${(0,B.z)(t=>{var e;return(null===(e=t.mediaNodes)||void 0===e?void 0:e.length)>0},C.qy`<div class="media-wrapper" part="media-wrapper"><div part="media" ${(0,z.K)("mediaContainer")}><a href=${t=>t.href?t.href:void 0} target=${t=>t.target?t.target:void 0} @click=${(t,e)=>t.handleContentCardLinkClick(e.event)} data-t="${t=>t.anchorTelemetryTag}"><slot name="media" ${(0,z.K)("media")} @slotchange=${t=>t.handleMediaContentChange()}></slot></a><span part="icon" ${(0,z.K)("iconContainer")} class="${t=>t.iconSlottedNodes&&t.iconSlottedNodes.length?"icon":"icon_hidden"}"><slot name="icon" ${(0,z.K)("icon")} ${(0,S.e)("iconSlottedNodes")}></slot></span></div></div>`)}<div class="heading-animation heading-container" part="heading-container" ${(0,z.K)("headingContainer")}><slot name="attribution"></slot><span class="heading-wrapper" part="heading-wrapper" role="heading" aria-level=${t=>t.headinglevel}><a class="heading" part="heading" href=${t=>t.href?t.href:void 0} target=${t=>t.target?t.target:void 0} @click=${(t,e)=>t.handleContentCardLinkClick&&"function"==typeof t.handleContentCardLinkClick&&t.handleContentCardLinkClick(e.event)} data-t="${t=>t.anchorTelemetryTag}"><slot></slot></a></span></div><div class="abstract"><slot name="abstract" ${(0,S.e)("abstract")}></slot></div><slot name="call-to-action"></slot></div>${_}<span part="hover-actions" class="${t=>t.hoverActionsSlottedNodes&&t.hoverActionsSlottedNodes.length?"hover-actions":"hover-actions_hidden"}"><slot name="hover-actions" ${(0,S.e)("hoverActionsSlottedNodes")}></slot></span></template>`;let M=class extends d{};M=(0,a.Cg)([(0,n.E)({name:"msn-ad-carousel-card",template:A,styles:k,shadowOptions:{delegatesFocus:!0}})],M)},93516:function(t,e,i){i.d(e,{m:function(){return l},u:function(){return d}});var o=i(18e3),a=i(95125),n=i(17254),s=i(26587),r=i(80607);const d=function(t,e,i){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;t&&t.dispatchEvent(new CustomEvent("NativeAdUserAction",{bubbles:!0,cancelable:!0,composed:!0,detail:{eventType:e,dur:o,message:i,element:t.tagName.toLowerCase()}}))},l=function(t,e,i){var d;let l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,h=arguments.length>4?arguments[4]:void 0;const c=new a.Yg,p=new o.m;let g="";var u;Array.isArray(null===n.T3||void 0===n.T3||null===(d=n.T3.CurrentRequestTargetScope)||void 0===d?void 0:d.pageExperiments)&&(g=(0,s.A)(r.K,null===n.T3||void 0===n.T3||null===(u=n.T3.CurrentRequestTargetScope)||void 0===u?void 0:u.pageExperiments).join(";"));const x=c.populateBeaconUrl(t,g,e,i,l,h);p.fireUserActionBeacon(null==x?void 0:x.href)}},99751:function(t,e,i){i.d(e,{s:function(){return d}});var o=i(56911),a=i(92011),n=i(38493),s=i(35106),r=i(88458);class d extends a.L{}(0,o.Cg)([(0,n.CF)({mode:"boolean"}),(0,o.Sn)("design:type",Boolean)],d.prototype,"disabled",void 0),(0,r.X)(d,s.qw)}}]);