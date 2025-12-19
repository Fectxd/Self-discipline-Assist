"use strict";(self.homePageWebpackChunks=self.homePageWebpackChunks||[]).push([["hot-list-card"],{4968:function(t,e,i){i.d(e,{f:function(){return d}});var n=i(64187),r=i(74849),a=i(42792),o=i(99657),s=i(36452);const d=r.A.partial`position: relative; z-index: ${o.D};`;r.A`
    ${a.e}
    ${a.nH}

    ${(0,n.V)("grid")} :host {
        grid-template-rows: auto 1fr minMax(16px, auto);
        grid-template-columns: 100%;
        ${d}
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
        border: 1px solid ${s.I2};
    }

    ::slotted(fluent-button[appearance="neutral"]:hover),
    ::slotted(fluent-anchor[appearance="neutral"]:hover) {
        border-color: ${s.mb};
    }

    ::slotted(fluent-button[appearance="neutral"]:active),
    ::slotted(fluent-anchor[appearance="neutral"]:active) {
        border-color: ${s.MY};
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
`.withBehaviors(a.kc)},25717:function(t,e,i){i.d(e,{T:function(){return r}});var n=i(96950);function r(){return n.qy`
        <slot></slot>
    `}},37256:function(t,e,i){i.d(e,{R:function(){return c}});var n=i(64187),r=i(22131),a=i(74849),o=i(50882),s=i(37998),d=i(57416),l=i(95239),h=i(48751);const c=a.A`
    ${(0,n.V)("block")} :host {
        --elevation: 4;
        display: block;
        contain: content;
        height: var(--card-height, 100%);
        width: var(--card-width, 100%);
        box-sizing: border-box;
        background: ${l.p};
        color: ${h.l};
        border-radius: calc(${d.JU} * 1px);
        ${s.ET}
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
`.withBehaviors((0,r.mr)(a.A`
            :host {
                forced-color-adjust: none;
                background: ${o.A.Canvas};
                box-shadow: 0 0 0 1px ${o.A.CanvasText};
            }
        `))},38380:function(t,e,i){i.d(e,{v:function(){return n}});const n=(0,i(25717).T)()},68408:function(t,e,i){i.r(e),i.d(e,{HotListCard:function(){return R},HotListCardStyles:function(){return K},HotListCardTemplate:function(){return H},ToolingInfo:function(){return Q}});var n=i(75003),r=i(37180),a=i(45899),o=i(4731),s=i(44767),d=i(73079),l=i(4151),h=i(19249),c=i(31753);var g=i(56911),u=i(60815),p=i(38493),v=i(84855),b=i(21481),x=i(17254),f=i(5044),m=i(63150),w=i(94425),$=i(98216);function k(t){return!!(t&&t.scrollHeight>t.offsetHeight+2)}var C=i(930),y=i(48622),I=i(93468),F=i(65022),L=i(11372),T=i(54030),N=i(87518);const D="HotlistCard",S="destination";var z=i(70177);class R extends b.U{constructor(){super(...arguments),this.isHalfCard=!1,this.currentIndex=0,this.target="_blank",this.hotListDataLength=0,this.sizeInPage=6,this.initTelemetry=()=>{this.hotListTelemetryContext=((t,e,i)=>{var n;const r=null==e||null===(n=e.contract)||void 0===n?void 0:n.ext,a={componentRoot:e?(0,T.u)(D,{...e.contract,ext:r}):(0,T.u)(D,{type:L.MJ.Module})};return null==i||i.map(t=>{const e={headline:t.shortTitle??t.title,type:L.b5.Article,vertical:D,id:t.id},i=(0,N.g)(S,e,L.MS.Navigate,L.EG.Click,r,{destinationUrl:t.href});t.telemetryTag=i.getMetadataTag()}),a})(this.telemetryObject,this.parentTelemetry,this.hotListData)},this.moreSettingsAction=()=>{this.goToPersonalizeSettingsCallback?this.goToPersonalizeSettingsCallback():this.$emit("goToPersonalizeSettingsCallback")},this.extractFeedData=()=>{let t;var e,i;this.cardMetadata&&(t=null===(e=this.cardMetadata)||void 0===e?void 0:e.subCards,this.canonicalName=null===(i=this.cardMetadata)||void 0===i||null===(i=i.feed)||void 0===i?void 0:i.canonicalName);t?this.hotListData=t.map((t,e)=>{var i;return{id:t.id,index:e+1,title:t.title,href:t.url,shortTitle:t.shortTitle,isFeatured:!(0!==e||null===(i=this.config)||void 0===i||!i.forceAttachHighlightBadge)||t.isFeatured}}):(0,I.vV)(F.LCg,"Missing Hot List data in Service context response")},this.hideCard=async()=>{try{let t=!1;return this.canonicalName?(t=await y.d.disableSpotlightCard(this.canonicalName,F.HaU),t&&(this.isWidgetRegion?this.hideCardCallback?this.hideCardCallback():this.$emit("hideCardCallback"):this.refreshFeedCallback?this.refreshFeedCallback():this.$emit("refreshSDCardSection"))):(0,I.vV)(F.HaU,"No canonical name is received."),t}catch(t){return(0,I.c_)(t,F.HaU,"Failed to disable "+this.canonicalName+" card"),!1}},this.handleSetTitleOnMouseEnter=t=>{var e;const i=t.target;if(!i)return;const n=null===(e=i.childNodes)||void 0===e?void 0:e.length;if(n)for(let t=n-1;t>=0;t--)if(i.childNodes[t].className.includes("hotListNewsTitle")){!k(i.childNodes[t])&&i.setAttribute("title","");break}}}experienceConnected(){this.extractFeedData(),this.hotListDataLength=this.hotListData?this.hotListData.length:0,this.cardLayout||(this.cardLayout=this.isWidgetRegion?C.uE._1x_1y:C.uE._1x_2y),this.isHalfCard=this.cardLayout===C.uE._1x_1y,this.isHalfCard&&(this.sizeInPage=3),this.superCardData=(t=>{const e=$.YT.getRequestId(),i=(0,f.En)(),n=m.U0.isDhpPage()?"msedgdhp":"msedgntp",r=i??n,a=`${(0,w.t7)()}?ocid=${r}&cvid=${e}`;let o=t.strings.headTitle;if(t.config.headTitleOvrdLocKey){const e=t.config.headTitleOvrdLocKey;e&&(o=t.strings[e]||t.strings.headTitle)}return{id:t.id,gridArea:"",childTemplateType:"",cardSize:t.cardLayout,headerData:{headerLogo:`${(0,x.rA)().StaticsUrl}/latest/icons/NtpTopStories.svg`,isEventCard:!0,title:o,titleNavigationLink:a,actionMenuData:{hideCardCallback:t.hideCard,moreSettingsPersonalizeCallback:t.moreSettingsAction,turnOffWidgetsRegionCallback:()=>{t.turnOffWidgetsRegion()},manageWidgetsRegionCallback:()=>{t.manageWidgetsRegion()}},isActionMenuAvailable:!t.config.hideActionMenu,isWidgetRegion:t.isWidgetRegion},footerData:{paginationData:{currentPageIndex:1,onFlipperClick:(e,i)=>{t.onFlipperClick(e)},pageCount:Math.ceil(t.hotListDataLength/t.sizeInPage)},isWidgetRegion:t.isWidgetRegion},parentTelemetryObject:t.parentTelemetry,contextualFeedbackData:t.cardMetadata&&t.cardMetadata.wpoMetadata&&t.cardMetadata.wpoMetadata.isGA?{cFId:t.cardMetadata.wpoMetadata.cfId,cFMetadataType:t.cardMetadata.wpoMetadata.cFMetadataType}:void 0}})(this),this.initTelemetry()}shadowDomPopulated(){this.hotListData&&this.markVisuallyReadyRaf(),(0,z._Z)(this).then(async()=>{this.config.enableOpenContentInSelf&&(this.target="_self")})}turnOffWidgetsRegion(){this.turnOffWidgetsRegionCallback?this.turnOffWidgetsRegionCallback():this.$emit("turnOffWidgetsRegion")}manageWidgetsRegion(){this.manageWidgetsRegionCallback?this.manageWidgetsRegionCallback():this.$emit("manageWidgetsRegion")}onFlipperClick(t){const e=Math.ceil(this.hotListDataLength/this.sizeInPage);if(t){let t=this.currentIndex+1;t>=e&&(t=0),this.currentIndex=t}else{let t=this.currentIndex-1;t<0&&(t=e-1),this.currentIndex=t}var i,n;this.superCardData&&this.superCardData.footerData&&this.superCardData.footerData.paginationData&&(this.superCardData={...this.superCardData,footerData:{...null===(i=this.superCardData)||void 0===i?void 0:i.footerData,paginationData:{...null===(n=this.superCardData)||void 0===n||null===(n=n.footerData)||void 0===n?void 0:n.paginationData,currentPageIndex:this.currentIndex+1}}})}getListArticleContent(t){var e,i;const n=t*this.sizeInPage,r=t*this.sizeInPage+this.sizeInPage;return null===(e=this.hotListData)||void 0===e?void 0:e.slice(n,Math.min(r,null===(i=this.hotListData)||void 0===i?void 0:i.length))}getExperienceType(){return v.Vzq}}(0,g.Cg)([u.sH],R.prototype,"hotListData",void 0),(0,g.Cg)([u.sH],R.prototype,"superCardData",void 0),(0,g.Cg)([u.sH],R.prototype,"isHalfCard",void 0),(0,g.Cg)([(0,p.CF)({attribute:"current-index"})],R.prototype,"currentIndex",void 0),(0,g.Cg)([u.sH],R.prototype,"hotListTelemetryContext",void 0),(0,g.Cg)([u.sH],R.prototype,"target",void 0);var M=i(96950),P=i(91640),W=i(39957);const A=M.qy`<a href=${t=>t.href} class="hotListNews ${(t,e)=>e.parent.isHalfCard?"hotListNews-hlafu":""}" id=${t=>t.id} target=${(t,e)=>e.parent.target} title="${t=>t.shortTitle??t.title}" data-t=${t=>t.telemetryTag} @mouseenter=${(t,e)=>{e.parent.config.disableCardTitleTooltip&&e.parent.handleSetTitleOnMouseEnter(e.event)}}>${(0,P.z)(t=>1===t.index,M.qy`<div class="itemIndex itemIndex1">${t=>t.index}</div>`)} ${(0,P.z)(t=>2===t.index,M.qy`<div class="itemIndex itemIndex2">${t=>t.index}</div>`)} ${(0,P.z)(t=>3===t.index,M.qy`<div class="itemIndex itemIndex3">${t=>t.index}</div>`)} ${(0,P.z)(t=>t.index>3,M.qy`<div class="itemIndex">${t=>t.index}</div>`)}<span class="hotListNewsTitle">${(0,P.z)((t,e)=>{var i;return t.isFeatured&&!(null!==(i=e.parent.config)&&void 0!==i&&i.disableHighlightBadge)},M.qy`<span class="highlightContainer"><p class="highlightText">${(t,e)=>{var i,n,r;return null!==(i=e.parent.config)&&void 0!==i&&i.useLocStrForHighlightBadge&&null!=(null===(n=e.parent.strings)||void 0===n?void 0:n.highlightsText)?null===(r=e.parent.strings)||void 0===r?void 0:r.highlightsText:"热点"}}</p></span>`)} ${t=>t.shortTitle??t.title}</span></a>`,H=M.qy`<responsive-sd-card :data="${t=>t.superCardData}" size="${t=>t.cardLayout}"><div slot="card-content">${(0,P.z)(t=>t.getListArticleContent(t.currentIndex),M.qy` ${(0,W.ux)(t=>t.getListArticleContent(t.currentIndex)??[],A,{positioning:!0})}
`)}</div></responsive-sd-card>`;var j=i(48751),O=i(86856),E=i(74849),B=i(22131),V=i(4968),_=i(43103);const U=E.A`
.itemIndex{background:rgba(0,0,0,0.25)}.itemIndex1{background:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.1)),#F74801}.itemIndex2{background:linear-gradient(0deg,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),#DA3B01}.itemIndex3{background:linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),#DA3B01}.hotListNews:hover{background:rgba(255,255,255,0.0605);border-radius:4px}`,q=E.A`
.itemIndex{background:rgba(0,0,0,0.07)}.itemIndex1{background:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.1)),#F74801}.itemIndex2{background:linear-gradient(0deg,rgba(255,255,255,0.3),rgba(255,255,255,0.3)),#F74801}.itemIndex3{background:linear-gradient(0deg,rgba(255,255,255,0.5),rgba(255,255,255,0.5)),#F74801}.hotListNews:hover{background:rgba(0,0,0,0.04);border-radius:4px}`,G=E.A`
`,J=E.A`
`,K=E.A`
.hotListNews{display:grid;grid-template-columns:16px 244px;column-gap:8px;overflow:hidden;padding:8px 0;height:22px;text-decoration:none}.hotListNews:hover{background:rgba(0,0,0,0.04);border-radius:4px;margin:0 -8px;column-gap:16px}.hotListNews:hover .itemIndex{margin-inline-start:8px}.highlightContainer{align-items:center;border-radius:4px;flex-direction:row;justify-content:center;max-width:40px;margin-right:4px;background:#C50F1F;display:inline-flex;padding:2px 0px}.highlightText{color:#FFFFFF;font-size:12px;line-height:16px;overflow-wrap:break-word;margin:0px 5px}a{${V.f}}.hotListNews-hlafu{padding:0 0}.itemIndex{width:16px;height:16px;margin-top:2px;margin-bottom:2px;background:rgba(0,0,0,0.07);border-radius:4px;font-weight:600;font-size:12px;text-align:center;color:${j.l};line-height:16px}.itemIndex1{background:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.1)),#F74801}.itemIndex2{background:linear-gradient(0deg,rgba(255,255,255,0.3),rgba(255,255,255,0.3)),#F74801}.itemIndex3{background:linear-gradient(0deg,rgba(255,255,255,0.5),rgba(255,255,255,0.5)),#F74801}.hotListNewsTitle{font-weight:600;font-size:14px;line-height:20px;text-decoration:none;color:${j.l};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
`.withBehaviors((0,B.G2)(U),new _.N(q,U),new O.t(G,J));n.m.define(r.c.registry),a.m.define(r.c.registry),o.m.define(r.c.registry),s.m.define(r.c.registry),d.m.define(r.c.registry),l.m.define(r.c.registry),h.m.define(r.c.registry),(0,c.d)();const Q={experienceConfigSchema:undefined}},72526:function(t,e,i){i.d(e,{L:function(){return p}});var n=i(56911),r=i(96193),a=i(47429),o=i(60815),s=i(22870),d=i(38493),l=i(95239),h=i(31023),c=i(24458),g=i(5291),u=i(57606);class p extends r.z{cardFillColorChanged(t,e){if(e){const t=(0,s.Hs)(e);null!==t&&(this.neutralPaletteSource=e,l.p.setValueFor(this,g.q.create(t.r,t.g,t.b)))}}neutralPaletteSourceChanged(t,e){if(e){const t=(0,s.Hs)(e),i=g.q.create(t.r,t.g,t.b);h.r.setValueFor(this,u.p.create(i))}}handleChange(t,e){this.cardFillColor||l.p.setValueFor(this,t=>t(c.M3).evaluate(t,t(l.p)))}connectedCallback(){super.connectedCallback();const t=(0,a.Zo)(this);if(t){const e=o.cP.getNotifier(t);e.subscribe(this,"fillColor"),e.subscribe(this,"neutralPalette"),this.handleChange(t,"fillColor")}}}(0,n.Cg)([(0,d.CF)({attribute:"card-fill-color",mode:"fromView"}),(0,n.Sn)("design:type",String)],p.prototype,"cardFillColor",void 0),(0,n.Cg)([(0,d.CF)({attribute:"neutral-palette-source",mode:"fromView"}),(0,n.Sn)("design:type",String)],p.prototype,"neutralPaletteSource",void 0)},75003:function(t,e,i){i.d(e,{m:function(){return s}});var n=i(37180),r=i(72526),a=i(37256),o=i(38380);const s=r.L.compose({name:`${n.c.prefix}-card`,template:o.v,styles:a.R})}}]);