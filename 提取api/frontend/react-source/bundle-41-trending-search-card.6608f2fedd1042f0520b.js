"use strict";(self.homePageWebpackChunks=self.homePageWebpackChunks||[]).push([["trending-search-card"],{4968:function(t,e,r){r.d(e,{f:function(){return d}});var i=r(64187),n=r(74849),a=r(42792),o=r(99657),s=r(36452);const d=n.A.partial`position: relative; z-index: ${o.D};`;n.A`
    ${a.e}
    ${a.nH}

    ${(0,i.V)("grid")} :host {
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
`.withBehaviors(a.kc)},50653:function(t,e,r){r.d(e,{u:function(){return a}});var i=r(61522),n=r(94706);function a(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];if(!e||e.length<3||!(0,i.P5)(e[e.length-1]))throw new Error("Invalid arguments");const a=e.pop(),o=(0,n.J)(...e);return Object.assign(o,a)}},58851:function(t,e,r){r.r(e),r.d(e,{ToolingInfo:function(){return H},TrendingSearchCard:function(){return $},TrendingSearchCardStyles:function(){return U},TrendingSearchCardTemplate:function(){return R},trendingSearchCardCoreTemplate:function(){return B},trendingSearchCardMobileTemplate:function(){return M}});var i=r(31753);var n=r(56911),a=r(60815),o=r(84855),s=r(11372),d=r(50653);const l="destination",c="TrendingSearchCard",h=(t,e,r)=>{if(!e)return null;const i=null==r?void 0:r.contract,n=null==i?void 0:i.ext;return e=e.map(e=>{const r=(0,d.u)(l,{type:s.b5.StructuredData,headline:e.query},s.MS.Navigate,s.EG.Click,n,{type:s.MJ.ContentCard}),i=t?t.addOrUpdateChild(r):null;return{...e,telemetry:i?i.getMetadataTag():""}})};var u=r(21481),g=r(98216),p=r(93468),v=r(65022),b=r(48622),f=r(69089),m=r(930),k=r(17254),x=r(87518);class $ extends u.U{constructor(){super(...arguments),this.currentCardIndex=0,this.cardLength=3,this.queriesLengthPerCard=6,this.touchPoint={startX:0,startY:0,endX:0,endY:0},this.footerDotList=[],this.extractFeedData=()=>{this.mapperArgs&&(this.TrendingSearchCardMetaData=this.mapperArgs.cardMetadata,this.goToPersonalizeSettingsCallback=this.mapperArgs.goToPersonalizeSettingsCallback,this.refreshSDCardSection=this.mapperArgs.refreshSDCardSection)},this.transformCardMetaDataToQueriesRawData=()=>{const t=[];try{const r=JSON.parse(this.TrendingSearchCardMetaData.data).filter(t=>"string"==typeof t.Query||"number"==typeof t.Query);var e;if(r.filter(t=>!t.IsAds).forEach(e=>t.push({query:e.Query.toString(),score:e.Score})),this.config.enableContextSearch&&r.length>0)this.contextSearchSuggestion=r[0],null!==(e=this.contextSearchSuggestion)&&void 0!==e&&e.IsAds&&g.YT.addOrUpdateTmplProperty("hasTrendingAd","1")}catch(t){(0,p.c_)(t,v.t1_,"failed to parse json")}return t},this.refreshContentCardData=t=>{var e,r,i,n;(this.currentCardIndex=(this.currentCardIndex+t)%this.cardLength,-1==this.currentCardIndex&&(this.currentCardIndex=this.cardLength-1),this.currentQueryCardData=null===(e=this.trendingQueriesData)||void 0===e?void 0:e.cards[this.currentCardIndex],null!==(r=this.superCardData)&&void 0!==r&&null!==(r=r.footerData)&&void 0!==r&&r.paginationData)&&(this.superCardData={...this.superCardData,footerData:{...null===(i=this.superCardData)||void 0===i?void 0:i.footerData,paginationData:{...null===(n=this.superCardData)||void 0===n||null===(n=n.footerData)||void 0===n?void 0:n.paginationData,currentPageIndex:this.currentCardIndex+1}}})},this.hideCardAction=async()=>{try{let t=!1;return t=await b.d.updateSegmentCardsEnableStatus([{cardType:f.s.TrendingSearchCard,enabled:!1}]),t&&(this.refreshSDCardSection?this.refreshSDCardSection():this.$emit("refreshSDCardSection")),t}catch(t){return(0,p.c_)(t,v.g5x,"failed to hide trending search card"),!1}},this.moreSettingsAction=()=>{this.goToPersonalizeSettingsCallback?this.goToPersonalizeSettingsCallback():this.$emit("goToPersonalizeSettingsCallback")}}experienceConnected(){var t;if(this.generateTelemetryTags(),this.processCardSize(),this.extractFeedData(),this.trendingQueriesData=this.transformCardMetaDataToQueriesData(),this.cardLength=null===(t=this.trendingQueriesData)||void 0===t?void 0:t.cards.length,this.trendingQueriesData=this.transformToTrendingSearchWithTelemetry(),this.cardLength>1)for(let t=0;t<this.cardLength;t++)this.footerDotList.push(t);this.mapSuperCardData(this),this.searchRewardsData||(this.searchRewardsData={notShowRewardsStatus:!0})}shadowDomPopulated(){this.trendingQueriesData&&(this.mapSuperCardData(this),this.searchRewardsData||(this.searchRewardsData={notShowRewardsStatus:!0}),this.markVisuallyReadyRaf())}processCardSize(){"05u"==this.slot?this.feedLayoutCardSize=m.uE._1x_1y:"1u"==this.slot&&(this.feedLayoutCardSize=m.uE._1x_2y),this.feedLayoutCardSize==m.uE._1x_1y&&(this.queriesLengthPerCard=3)}generateTelemetryTags(){var t;if(!this.telemetryObject)return;const e=null===(t=this.parentTelemetry)||void 0===t?void 0:t.contract,r=null==e?void 0:e.ext;this.trendingSearchCardTelemetryObject=(0,x.g)(c,{type:s.b5.StructuredData},{ext:r})}selectValidQueries(t){return"string"==typeof t.query&&t.query.length>=1}transformCardMetaDataToQueriesData(){let t=[];this.TrendingSearchCardMetaData&&(t=this.transformCardMetaDataToQueriesRawData(),t=t.filter(this.selectValidQueries)),(!this.TrendingSearchCardMetaData||t.length<1)&&(g.YT.sendAppErrorEvent({...v.jwE,message:"Full page API returned a trending-search-card but there are no valid queries.",pb:{...v.jwE}}),this.config.fallbackQueries&&(t=this.config.fallbackQueries.map(t=>({query:t,score:0}))));const e={cards:[]};if(!t)return e;const r=t.length;let i={card:[]};for(let n=0;n<r;n++){n%this.queriesLengthPerCard===0&&(i={card:[]});const a=this.addLinkAndRanking(t[n],n);i.card.push(a),n%this.queriesLengthPerCard!==this.queriesLengthPerCard-1&&n!==r-1||e.cards.push(i.card)}return e}addLinkAndRanking(t,e){var r;const i=e+1,n=(null===(r=t.query)||void 0===r?void 0:r.split("#"))||[],a=n[0]||t.query,o=n[1]||a;return{query:a,ranking:i,url:this.createLinkFromQueryAndParams(this.config.formCode,o),score:t.score}}transformToTrendingSearchWithTelemetry(){if(!this.trendingSearchCardTelemetryObject)return;const t=this.trendingSearchCardTelemetryObject,e={cards:[]};if(this.trendingQueriesData){for(let r=0;r<this.cardLength;r++){const i=h(t,this.trendingQueriesData.cards[r],this.parentTelemetry);i&&e.cards.push(i)}return e}}getExperienceType(){return o.tKm}createLinkFromQueryAndParams(t,e){var r,i;const n=(null===(r=this.config)||void 0===r?void 0:r.linkToMsn)||(null===(i=this.config)||void 0===i?void 0:i.isV3Design),a=(0,k.rA)().topDomain,o=(0,k.rA)().CurrentMarket;let s=$.BING_URL;n&&a&&o&&(s=$.MSN_URL.replace("{topDomain}",a).replace("{localeCode}",o));let d=new URL(s);if(e){if(n||(d=new URL("search",d)),0===e.length)return"";n?d.searchParams.set("nsq",e):d.searchParams.set("q",e)}t&&d.searchParams.set("form",t);const l=g.YT.getRequestId();return l&&d.searchParams.set("msnrid",l),d.toString()}mapSuperCardData(t){var e;this.currentQueryCardData=null===(e=this.trendingQueriesData)||void 0===e?void 0:e.cards[this.currentCardIndex];const r=this.createLinkFromQueryAndParams(this.config.formCode);let i=t.strings.headTitle;this.config.linkToMsn&&(i=this.strings.newHeadTitle||"Trending Topics");let n=this.config.isV2Design?`<img style="width: 100% height: 100%" src="${(0,k.rA)().StaticsUrl}/latest/trending-search-card/img/TrendingSearchIconV2.svg" />`:`<img style="width: 100% height: 100%" src="${(0,k.rA)().StaticsUrl}/latest/trending-search-card/img/TrendingsearchIcon.svg" />`;if(this.config.isV3Design&&(i=this.strings.newHeadTitle||"Trending Topics",n=`<img style="width: 100% height: 100%" src="${(0,k.rA)().StaticsUrl}/latest/trending-search-card/img/TrendingSearchIconV3.svg" />`),this.superCardData={id:t.id,gridArea:"",childTemplateType:"",cardSize:(null==t?void 0:t.feedLayoutCardSize)??"_1x_2y",headerData:{headerLogo:n,title:i,isActionMenuAvailable:!this.useMobile,titleNavigationLink:this.useMobile||this.config.linkToMsn||this.config.isV3Design?void 0:r,actionMenuData:{hideCardCallback:this.hideCardAction,moreSettingsPersonalizeCallback:this.moreSettingsAction}},footerData:this.useMobile?void 0:{paginationData:{currentPageIndex:this.currentCardIndex+1,onFlipperClick:(t,e)=>{t?this.refreshContentCardData(1):this.refreshContentCardData(-1)},onDotClick:(t,e)=>{this.currentCardIndex=t,this.refreshContentCardData(0)},pageCount:this.cardLength}},parentTelemetryObject:this.trendingSearchCardTelemetryObject,contextualFeedbackData:t.wpoMetadata&&t.wpoMetadata.isGA?{cFId:t.wpoMetadata.cfId,cFMetadataType:t.wpoMetadata.cFMetadataType}:void 0},this.config.enableContextSearch){var a,o;const t=null===(a=this.contextSearchSuggestion)||void 0===a?void 0:a.Query,e=null===(o=this.contextSearchSuggestion)||void 0===o?void 0:o.IsAds;if(t){var s,d;const r=null!==(s=this.config)&&void 0!==s&&s.contextualSuggestRotate&&!e?{suggestion:t,isAds:e,allSuggestions:(null===(d=this.trendingQueriesData)||void 0===d||null===(d=d.cards)||void 0===d||null===(d=d.flat())||void 0===d?void 0:d.map(t=>t.query))||[]}:{suggestion:t,isAds:e};this.$emit("contextualSuggestionChange",r)}}}clickHandler(t,e){var r,i;return!(null!==(r=e.parent)&&void 0!==r&&r.useMobile&&(null===(i=e.parent)||void 0===i||!i.isMsnMobile)&&this.onLinkClickCallback)||this.onLinkClickCallback(e.event,t.url)}switchPage(t,e){const r=t.event;r.preventDefault(),r.stopPropagation(),this.refreshContentCardData(e)}getCountFormat(t){return t?t>=1e6?(t/1e6).toFixed(1).replace(/\.0$/,"")+"M":t>=1e3?(t/1e3).toFixed(1).replace(/\.0$/,"")+"K":t:""}}$.BING_URL="https://www.bing.com",$.MSN_URL="https://www.msn.{topDomain}/{localeCode}/channel/topic/News/tp-Y_46b78bbb-31c4-4fc5-8a4a-858072348d06",(0,n.Cg)([a.sH],$.prototype,"trendingQueriesData",void 0),(0,n.Cg)([a.sH],$.prototype,"currentQueryCardData",void 0),(0,n.Cg)([a.sH],$.prototype,"superCardData",void 0),(0,n.Cg)([a.sH],$.prototype,"currentCardIndex",void 0),(0,n.Cg)([a.sH],$.prototype,"cardLength",void 0),(0,n.Cg)([a.sH],$.prototype,"queriesLengthPerCard",void 0),(0,n.Cg)([a.sH],$.prototype,"isDarkModeForMobile",void 0),(0,n.Cg)([a.sH],$.prototype,"displaySettings",void 0),(0,n.Cg)([a.sH],$.prototype,"searchRewardsData",void 0),(0,n.Cg)([a.sH],$.prototype,"showSearchRewardsBar",void 0);var w=r(96950),y=r(91640),C=r(39957);const D=w.qy`<div class="svg-container"><span class="search-svg" style=${()=>`--search-icon: url(${(0,k.rA)().StaticsUrl}/latest/icons-wc/icons/Search.svg)`}></span></div>`,S=w.qy`<div class="trend-stats">${(t,e)=>e.parent.getCountFormat(t.score)+"+"}</div>`,T=w.qy`<a role="link" href="${t=>t.url}" data-t="${t=>t.telemetry}" aria-label="${t=>t.ranking} ${t=>t.query}" class="trend-item" @click="${(t,e)=>!e.parent.clickHandler||e.parent.clickHandler(t,e)}" target="_blank"><div class="trend-number trend-number-${t=>t.ranking}">${t=>t.ranking}</div><div class="trend-query">${t=>t.query}</div>${(0,y.z)((t,e)=>{var r;return!(null!==(r=e.parent.config)&&void 0!==r&&r.hideScore)&&t.score},S)}</a>`,A=w.qy`<responsive-sd-card class="trend-search-v3" :data="${t=>t.superCardData}" :size="${t=>t.feedLayoutCardSize}"><div slot="card-content" class="content-container-v3">${(0,y.z)(t=>t.trendingQueriesData&&t.currentQueryCardData,w.qy` ${(0,C.ux)(t=>t.currentQueryCardData,T,{positioning:!0})} `)}</div></responsive-sd-card>`,q=t=>t.config.isV2Design&&!t.config.linkToMsn?w.qy`<a href="${t=>t.url}" data-t="${t=>t.telemetry}" aria-label="${t=>t.ranking} ${t=>t.query}" class="query-link ${(t,e)=>e.parent.useMobile?"mobile":""}" @click="${(t,e)=>!e.parent.clickHandler||e.parent.clickHandler(t,e)}" target="_blank"><div class="query-and-rankingV2" id=${t=>t.query}>${D}<div class="queryV2">${t=>t.query}</div></div></a>`:w.qy`<div class="query-and-ranking" id=${t=>t.query}><a href="${t=>t.url}" data-t="${t=>t.telemetry}" aria-label="${t=>t.ranking} ${t=>t.query}" class="query-link ${(t,e)=>e.parent.useMobile?"mobile":""}" @click="${(t,e)=>!e.parent.clickHandler||e.parent.clickHandler(t,e)}" target="_blank"><div class="ranking" id="rank_${t=>t.ranking}" style="${(t,e)=>{var r;return null!==(r=e.parent)&&void 0!==r&&r.useMobile&&e.parent.isDarkModeForMobile?(t=>{const e=["#424F37","#4D8066","#406B56","#365947"];return(null==t?void 0:t.ranking)<=3&&(null==t?void 0:t.ranking)>=1?`background:${e[t.ranking]}`:`background:${e[0]}`})(t):""}}">${t=>t.ranking}</div><div class="query">${t=>t.query}</div></a></div>`,F=t=>{const{notShowRewardsStatus:e,featureEnabled:r}=t.searchRewardsData;return!e&&r},_=w.qy`<div class="text">${(0,y.z)(t=>F(t),w.qy`Search and earn`)} ${(0,y.z)(t=>!F(t),w.qy` Read more to earn up to<span class="progressNum2">&nbsp;100&nbsp;</span>points `)}</div>${(0,y.z)(t=>F(t),w.qy`<div class="progress">${w.qy`<img src=${()=>`${(0,k.rA)().StaticsUrl}/latest/icons-wc/icons/RewardsCoin.svg`} alt="Rewards" aria-hidden="true"/>  <span style="padding-left: 4px;"><span class="progressNum1">${t=>t.searchRewardsData.todayProgress}</span>/${t=>t.searchRewardsData.todayMax}</span>`}</div>`)}
`,z=w.qy`<i class="footer-point ${(t,e)=>{var r;return t===(null===(r=e.parent)||void 0===r?void 0:r.currentCardIndex)?"current":""}}"></i>`,E=w.qy`<div class="footer-container">${(0,C.ux)(t=>t.footerDotList,z)}</div>`,M=w.qy`<cs-extra-header-sd-card :data="${t=>t.superCardData}" style="${t=>t.useMobile&&!t.isMsnMobile&&t.displaySettings?`width:${t.displaySettings.cardWidth}px;height:${t.displaySettings.cardHeight}px`:""}">${(0,y.z)(t=>t.searchRewardsData,w.qy`<div slot="inheader" class="inheader">${_}</div>`)}<div slot="card-content" class="content-wrapper" @touchstart="${(t,e)=>t.useMobile&&function(t,e){const r=e.event;return t.touchPoint.startX=r.touches[0].pageX,t.touchPoint.startY=r.touches[0].pageY,!0}(t,e)}" @touchend="${(t,e)=>t.useMobile&&function(t,e){const r=e.event,i=function(t,e){return t.touchPoint.endX=e.changedTouches[0].pageX,t.touchPoint.endY=e.changedTouches[0].pageY,function(t){const{startX:e,startY:r,endX:i,endY:n}=t,a=r-n,o=i-e,s=10;let d="none";if(Math.abs(o)<s)return d;const l=function(t,e){return 180*Math.atan2(e,t)/Math.PI}(o,a);l>=-30&&l<30?d="right":(l>=150&&l<=180||l>=-180&&l<-150)&&(d="left");return d}(t.touchPoint)}(t,r);return t.touchPoint={startX:0,startY:0,endX:0,endY:0},"right"===i?(t.switchPage(e,-1),r.cancelable&&r.preventDefault(),r.stopImmediatePropagation(),!1):"left"!==i||(t.switchPage(e,1),r.cancelable&&r.preventDefault(),r.stopImmediatePropagation(),!1)}(t,e)}">${(0,y.z)(t=>t.trendingQueriesData&&t.currentQueryCardData,w.qy` ${(0,C.ux)(t=>t.currentQueryCardData,q,{positioning:!0})} `)} ${E}</div></cs-extra-header-sd-card>`,B=w.qy`<responsive-sd-card :data="${t=>t.superCardData}" :size="${t=>t.feedLayoutCardSize}"><div slot="card-content" class="content-container ${t=>t.config.isV2Design||t.feedLayoutCardSize!==m.uE._1x_1y?"":"half-unit-card"} ${t=>t.config.isV2Design&&t.feedLayoutCardSize===m.uE._1x_1y?"half-unit-cardV2":""} ${t=>t.config.isRedBackground||t.config.linkToMsn?"red-background":""}">${(0,y.z)(t=>t.trendingQueriesData&&t.currentQueryCardData,w.qy` ${(0,C.ux)(t=>t.currentQueryCardData,q,{positioning:!0})} `)}</div></responsive-sd-card>`,R=w.qy`
${(0,y.z)(t=>t.useMobile,w.qy`${M}`)}
${(0,y.z)(t=>{var e;return!(t.useMobile||null!==(e=t.config)&&void 0!==e&&e.isV3Design)},w.qy`${B}`)}
${(0,y.z)(t=>{var e;return!t.useMobile&&(null===(e=t.config)||void 0===e?void 0:e.isV3Design)},A)}
`;var I=r(74849),P=r(22131),V=r(48751),L=r(95239),j=r(41123),N=r(61138),Y=r(4968);const X=I.A`
.trend-stats{background-color:#2b2b2b}`,Q=I.A`
.trend-item{display:flex;align-items:center;box-sizing:border-box;text-decoration:none}.trend-number{width:22px;height:22px;border-radius:4px;color:white;display:flex;align-items:center;justify-content:center;font-weight:500;font-size:14px;margin-right:16px;background:linear-gradient(to bottom right,#81C784,#A5D6A7)}.trend-number-1{background:linear-gradient(to bottom right,#2E7D32,#388E3C)}.trend-number-2{background:linear-gradient(to bottom right,#388E3C,#43A047)}.trend-number-3{background:linear-gradient(to bottom right,#43A047,#4CAF50)}.trend-number-4{background:linear-gradient(to bottom right,#4CAF50,#66BB6A)}.trend-number-5{background:linear-gradient(to bottom right,#66BB6A,#81C784)}.trend-query{color:var(--neutral-foreground-rest);font-size:15px;font-weight:500;flex:1;padding:8px 0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.trend-item:hover .trend-query{text-decoration:underline}.trend-stats{background-color:#f5f5f5;border-radius:100px;padding:4px 10px;font-size:14px;display:flex;align-items:center;color:var(--neutral-foreground-rest)}.trend-item:nth-child(-n+3) .trend-stats{color:#4CAF50}`,O=I.A`.ranking{background:#424F37}#rank_1{background:#4D8066}#rank_2{background:#406B56}#rank_3{background:#365947}.red-background .ranking{background:#594A35}.red-background #rank_1{background:#DA3B01}.red-background #rank_2{background:#992901}.red-background #rank_3{background:#6D1E01}${X}
`,U=I.A`
a,button{${Y.f}}cs-extra-header-sd-card::part(cs-sd-card){height:100%;width:100%}.content-container{width:268px}.query-and-ranking{color:${V.l};font-weight:bold;font-size:14px;line-height:20px;-webkit-line-clamp:2;-webkit-box-orient:vertical;padding:8px 0;width:268px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.query-and-rankingV2{color:${V.l};
    background-color: ${L.p};font-weight:500;font-size:14px;line-height:20px;-webkit-line-clamp:2;-webkit-box-orient:vertical;padding:5px;border-radius:20px;margin-left:5px;margin-right:5px;margin-bottom:7px;display:flex;vertical-align:middle;align-items:center}.queryV2{display:inline;margin-left:5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.half-unit-cardV2{display:flex;flex-direction:column;padding:0px}.search-svg{width:20px;height:20px;display:block;background-color:${V.l};mask:var(--search-icon) no-repeat center;-webkit-mask:var(--search-icon) no-repeat center}.svg-container{display:flex;align-items:center;vertical-align:middle}.half-unit-card{display:flex;flex-direction:column;align-items:flex-start;padding:0px;gap:6px}.half-unit-card .query-and-ranking{padding:0px}.query-link{text-decoration:none;color:inherit}.query-link:hover{text-decoration:underline;border-radius:4px}.query-link.mobile:hover{text-decoration:none;-webkit-tap-highlight-color:transparent}.query{display:inline;margin-left:5px}.ranking{display:inline-block;text-align:center;width:18px;height:16px;top:4px;border-radius:4px;background:#DCEADD;font-weight:600;font-size:14px;line-height:16px;color:${V.l}}#rank_1{background:#73E5AC}#rank_2{background:#A1EFC3}#rank_3{background:#B9F2D6}.red-background .ranking{background:#EDDBD3}.red-background #rank_1{background:#F85A1A}.red-background #rank_2{background:#F97F4D}.red-background #rank_3{background:#FBA380}@media (-ms-high-contrast:active){.query-link{-ms-high-contrast-adjust:auto}}.inheader{height:50px;border-bottom:1px solid rgba(0,0,0,0.0578);display:grid;grid-template-columns:auto auto;font-size:${j.K};
    line-height: ${N.F};font-weight:400;align-items:center;justify-content:space-between}.text{margin-left:16px}.progress{margin-right:16px;display:grid;grid-auto-flow:column;align-items:center}.progressNum1{font-weight:700;color:#3D6CDC}.progressNum2{font-weight:700}.content-wrapper{position:relative;z-index:1}.footer-container{width:100%;text-align:center;position:absolute;bottom:0}.footer-point{display:inline-block}.footer-point{width:5px;height:5px;margin:0 3px;border-radius:50%;opacity:0.4;background-color:var(--neutral-foreground-rest)}.footer-point.current{width:6px;height:6px;opacity:1}${Q}
`.withBehaviors((0,P.G2)(O));(0,i.d)();const H={experienceConfigSchema:undefined}}}]);