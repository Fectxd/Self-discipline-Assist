(self.homePageWebpackChunks=self.homePageWebpackChunks||[]).push([["libs_ad-service_dist_CookieSyncService_js-libs_card-overlap-monitor_dist_CardOverlapMonitor_j-5605a5"],{759:function(t,e,i){"use strict";i.d(e,{W:function(){return s}});var n=i(96950),a=i(60402),r=i(30216),o=i(91278);const l={_1x_2y:"1u",_2x_2y:"_2x_2y",_1x_1y:"0.5u"},s=n.qy`
<cs-responsive-card
    ad=true
    ${(0,o.Ib)(!1,!0)}
    ?ad-va="${t=>t.adVA}"
    ?ad-va2="${t=>t.adVA2}"
    ?ruby-va="${t=>t.enableRubyVerticalAds&&t.adVA2}"
    :adAttributes=${t=>t.adAttributes}
    :abstract=${t=>t.abstract}
    ad-dts-template-name="${t=>t.adDtsTemplateName}"
    ad-dts-style-key="${t=>t.adDTSStyleKey}"
    :adDTSTemplateConfig=${t=>t.adDTSTemplateConfig}
    :adDTSComponentDataMap=${t=>t.adDTSComponentDataMap}
    ?use-ad-dts-template=${t=>t.shouldUseAdDTSTemplate}
    :attributionData=${t=>t.attributionData}
    :adSelectionCriteria=${t=>t.adSelectionCriteria}
    :badgeProps="${t=>t.badgeProps}"
    :callToAction="${t=>t.callToAction}"
    :data="${t=>t}"
    data-t="${t=>{var e;return t.id?null===(e=t.adTelemetryContext)||void 0===e||null===(e=e.nativeAdCard)||void 0===e?void 0:e.getMetadataTag():""}}"
    :heading="${t=>t.title}"
    ?hide-card-actions="${t=>t.hideCardActions||!t.feedbackUrl}"
    :href="${t=>t.destinationUrl}"
    :href_adButton="${t=>t.privacyUrl}"
    :href_adChoiceButton="${t=>t.adChoiceIconUrl}"
    id="${t=>t.id}"
    ?immersive="${t=>!(!("_2x_2y"==t.cardSize||"_1x_2y"==t.cardSize&&t.immersiveCard)||t.isIntraNativeAd)||void 0}"
    :intraArticle=${t=>t.isIntraNativeAd}
    :mediaData=${t=>t.mediaData}
    media-type="${t=>{var e;return null!==(e=t.imageData)&&void 0!==e&&e.source?"image":""}}"
    @mouseenter="${(t,e)=>t.mouseEnterCallback(e.event.currentTarget)}"
    @mouseleave="${(t,e)=>t.mouseLeaveCallback(e.event.currentTarget)}"
    :onClickLink="${t=>t.onClickLink}"
    :onClickCardActions="${t=>t.toggleCardActionMenu}"
    :onRightClick="${t=>t.toggleCardActionMenu}"
    :onClickHideCard="${(t,e)=>()=>t.cardActionClickHandler&&t.cardActionClickHandler(t.id,t.cardActionStatus^r.J.hide^r.J.hidden,"Hide",!0,null,null,null,e.event,null,"hidestory-button")}"
    :popoverData="${t=>t.popoverData}"
    size="${t=>l[t.cardSize]||t.cardSize}"
    style="grid-area:${t=>t.gridArea}; ${t=>t.isIntraNativeAd?"max-width:740px;margin-inline:auto;":""}"
    target="${t=>t.openLinksInCurrentTab?"_self":"_blank"}"
    :telemetryObject_card="${t=>{var e;return null===(e=t.adTelemetryContext)||void 0===e?void 0:e.nativeAdCard}}"
    :telemetryTag_adButton="${t=>{var e;return null===(e=t.adTelemetryContext)||void 0===e||null===(e=e.adLabel)||void 0===e?void 0:e.getMetadataTag()}}"
    :telemetryTag_adChoiceButton="${t=>{var e;return null===(e=t.adTelemetryContext)||void 0===e||null===(e=e.adChoice)||void 0===e?void 0:e.getMetadataTag()}}"
    :telemetryTag_anchor="${t=>{var e;return null===(e=t.adTelemetryContext)||void 0===e||null===(e=e.destination)||void 0===e?void 0:e.getMetadataTag()}}"
    :telemetryTag_moreActions="${t=>{var e;return null===(e=t.adTelemetryContext)||void 0===e||null===(e=e.seeMore)||void 0===e?void 0:e.getMetadataTag()}}"
    :telemetryTag_adDisclaimerButton="${t=>{var e;return null===(e=t.adTelemetryContext)||void 0===e||null===(e=e.adDisclaimer)||void 0===e?void 0:e.getMetadataTag()}}"
    :telemetryTag_callToAction="${t=>{var e;return null===(e=t.adTelemetryContext)||void 0===e||null===(e=e.callToAction)||void 0===e?void 0:e.getMetadataTag()}}"
    :telemetryTag_undoHide="${t=>{var e;return null===(e=t.adTelemetryContext)||void 0===e||null===(e=e.cancelButton)||void 0===e?void 0:e.getMetadataTag()}}"
    title="${t=>t.title}"
    :visualReadinessCallback="${t=>t.visualReadinessCallback}"
    ?wide="${t=>"_2x_2y"==t.cardSize||void 0}"
    ?ruby="${t=>t.ruby}"
    ?loading="${t=>t.loading}"
    ${(0,a.K)("cardElement")}
></cs-responsive-card>`},2399:function(t,e){"use strict";e.A='<svg width="20" height="20" viewBox="0 0 20 20"><path d="M7.65 4.15c.2-.2.5-.2.7 0l5.49 5.46c.21.22.21.57 0 .78l-5.49 5.46a.5.5 0 0 1-.7-.7L12.8 10 7.65 4.85a.5.5 0 0 1 0-.7Z"/></svg>'},2934:function(t,e,i){"use strict";i.d(e,{t:function(){return s}});var n=i(39771),a=i(93468),r=i(65022),o=i(19608),l=i(77512);const s={getFeedDataForCard:t=>function(t){try{const{cardMetadata:i,configOptions:n,parentTelemetryObject:l,hasLoadedCallback:s}=t,d=n&&n,c={id:"travelDestination",childTemplateType:"travel-destination-card",configInfo:d,mapperArgs:t,parentTelemetryObject:l,hasLoadedCallback:s};try{var e;return(0,o.bw)({id:"travelDestination",experienceType:null==d||null===(e=d.configRef)||void 0===e?void 0:e.experienceType,mapperArgs:t},c,null,!0)}catch(e){(0,a.vV)(r.OV,`Error in populating layouts and position telemetry = ${JSON.stringify(t)}`)}}catch(e){(0,a.vV)(r.OV,`Error in feed layout mapperargs = ${JSON.stringify(t)}`)}return(0,l.wc)()}(t),viewTemplate:n.T}},2989:function(t,e,i){"use strict";i.d(e,{j:function(){return v}});var n=i(56911),a=i(2958),r=i(37180),o=i(7014);var l=i(92011),s=i(38493);class d extends l.L{}(0,n.Cg)([s.CF],d.prototype,"userSubscriptionData",void 0),(0,n.Cg)([s.CF],d.prototype,"cardSize",void 0);var c=i(74849),p=i(18750),u=i(24458);const g=c.A`
.badge{border-radius:4px;font-size:8px}.badge svg{margin-inline-end:6px}.true{background:linear-gradient(90deg,#5051D1 0%,#797AF5 100%);padding:2px 6px 3px 8px;color:#FFFFFF}.false{background:${(0,p.ud)()?"linear-gradient(90deg, rgba(255, 255, 255, 0.88) 0%, rgba(255, 255, 255, 0.78) 100%)":"linear-gradient(90deg, rgba(0, 0, 0, 0.64) 0%, rgba(0, 0, 0, 0.46) 100%)"};
    display: flex;
    padding: 2px 6px 3px 8px;
    color: ${u.m_}}._1x_2y{display:inline-flex;margin-bottom:6px}._2x_2y{position:absolute;top:16px}`;var h=i(96950),f=i(91640);const b=h.qy`<svg width="8" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M3.874.816 4 .813c1.097 0 1.994.856 2.059 1.936l.003.126v.375h.563c.621 0 1.125.504 1.125 1.125v4.5C7.75 9.496 7.246 10 6.625 10h-5.25A1.125 1.125 0 0 1 .25 8.875v-4.5c0-.621.504-1.125 1.125-1.125h.563v-.375c0-1.097.856-1.994 1.936-2.059L4 .813l-.126.003ZM4 5.875a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm.096-3.933L4 1.938a.938.938 0 0 0-.933.841l-.005.096v.375h1.876v-.375a.938.938 0 0 0-.842-.933L4 1.938l.096.004Z" fill="currentColor"/></svg>`,m=h.qy`<div class="badge ${t=>t.userSubscriptionData.isSubscribed?"true":"false"} ${t=>"_1x_2y"==t.cardSize?"_1x_2y":"_2x_2y"}">${(0,f.z)(t=>!t.userSubscriptionData.isSubscribed,h.qy` ${b}<b>${t=>{var e;return null===(e=t.userSubscriptionData)||void 0===e||null===(e=e.subscribeToViewText)||void 0===e?void 0:e.toLocaleUpperCase()}}</b>`)} ${(0,f.z)(t=>t.userSubscriptionData.isSubscribed,h.qy`<b>${t=>{var e;return null===(e=t.userSubscriptionData)||void 0===e||null===(e=e.subscribedText)||void 0===e?void 0:e.toLocaleUpperCase()}}</b>`)}</div>`;let v=class extends d{};v=(0,n.Cg)([(0,l.E)({name:"msn-subscription-badge",template:m,styles:g})],v),a.m.define(r.c.registry),o.m.define(r.c.registry)},4670:function(t,e,i){"use strict";i.d(e,{t:function(){return h}});var n=i(26863),a=i(930),r=i(96950),o=i(60402),l=i(91640),s=i(30216),d=i(17254),c=i(52201),p=i(11622);const u=r.qy`
    ${t=>(0,p.yN)(t.publisherFollowButtonConfigInfo,{attributes:{slot:"following-button"},properties:{contentId:t.id,publisherName:t.providerData.name,publisherProfileId:t.providerData.profileId,profileId:t.providerData.id,getReplacementCardsCallback:t.getReplacementCardsCallback,enableFollowToast:!0,cardActionStatus:t.cardActionStatus,usingResponsiveCard:!0}})}
`,g=r.qy`
    <span slot="action-row-start">
    ${(0,l.z)(t=>t.useStatSocialTemplate,r.qy`
        <social-bar-wc
            config-instance-src=${t=>t.socialBarWCConfigInfo&&(0,c.v)(t.socialBarWCConfigInfo)}
            instance-id=${t=>t.socialBarWCConfigInfo&&t.socialBarWCConfigInfo.instanceId}
            config-shared-ns=${t=>t.socialBarWCConfigInfo&&t.socialBarWCConfigInfo.configRef&&t.socialBarWCConfigInfo.configRef.sharedNs}
            :contentId=${t=>t.id}
            :hideComments=${t=>t.hideComments||!1}
            :canShowOneLineComments=${t=>!t.isInfopane&&t.cardSize===a.uE._2x_2y}
            :destinationUrl=${t=>t.destinationUrl}
            :title=${t=>t.title}
            :imageData=${t=>t.imageData}
            :abstract=${t=>t.abstract||t.metadata&&t.metadata.abstract}
            :locale=${t=>d.T3.CurrentMarket||t.locale}
            :theme=${t=>t.socialBarTheme||"default"}
            :rootTelemetryObject=${t=>t.telemetryContext&&(t.telemetryContext.contentCardTelemetryObject||t.telemetryContext.contentCard)}
            :getReplacementCardsCallback=${t=>t.getReplacementCardsCallback}
            :reactionCallback=${t=>t.reactionCallback}
            :shareActionHandler=${t=>t.shareActionHandler}
            :cardActionHideHandler=${t=>t.cardActionClickHandler&&function(){for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];return t.cardActionClickHandler(t.id,t.cardActionStatus^s.J.hide,...i)}}
            :isInfoPane=${t=>t.isInfopane}
            :socialMetadata=${t=>({...t.metadata,imageData:t.imageData,providerData:t.providerData,title:t.title})}
        ></social-bar-wc>
        `,r.qy`${t=>(0,n.nj)({theme:t.socialBarTheme,hideComments:t.hideComments})}`)}
    </span>
`,h=r.qy`
<cs-responsive-card
    :abstract=${t=>t.abstract}
    :attributionData=${t=>t.attributionData}
    :badgeProps="${t=>t.badgeProps}"
    :contentIndicator="${t=>t.renderContentIndicator}"
    :data="${t=>t}"
    :heightReadyCallback="${t=>t.heightReadyCallback}"
    :heading="${t=>t.title}"
    :href="${t=>t.destinationUrl}"
    id="${t=>t.id}"
    ?immersive="${t=>!("_2x_2y"!=t.cardSize&&("_1x_2y"!=t.cardSize&&"_1x_1y"!=t.cardSize&&"shorts"!==t.responsiveCardSize||!t.immersiveCard))||void 0}"
    :mediaData=${t=>t.mediaData}    
    media-type="${t=>t.mediaType}"
    :preventDefaultClick="${t=>t.preventDefaultClick}"
    :onClickCardActions="${t=>t.toggleCardActionMenu}"
    :onRightClick="${t=>t.toggleCardActionMenu}"
    :onClickHideCard="${(t,e)=>()=>t.cardActionClickHandler&&t.cardActionClickHandler(t.id,t.cardActionStatus^s.J.hide^s.J.hidden,"Hide",!0,null,null,null,e.event,null,"hidestory-button")}"
    :onClickLink=${(t,e)=>t.onClickLink}
    :onClickCompanionButton=${(t,e)=>t.onClickCompanionButton}
    size="${t=>t.responsiveCardSize}"
    style="${t=>t.ruby?void 0:(t=>{const e=`grid-area:${t.gridArea};`;return t.predictedHeight?`${e} --placeholder-intrinsic-height: ${t.predictedHeight-32}px;`:e})(t)}"
    :rubySocialBarData="${t=>t.rubySocialBarData}"
    target="${t=>t.openLinksInCurrentTab?"_self":"_blank"}"
    :telemetryObject_card="${t=>{var e;return null===(e=t.telemetryContext)||void 0===e?void 0:e.contentCard}}"
    :telemetryTag_anchor="${t=>{var e;return null===(e=t.telemetryContext)||void 0===e||null===(e=e.destination)||void 0===e?void 0:e.getMetadataTag()}}"
    :telemetryTag_hideCard="${t=>{var e;return null===(e=t.telemetryContext)||void 0===e||null===(e=e.showFewer)||void 0===e?void 0:e.getMetadataTag()}}"
    :telemetryTag_undoHide="${t=>{var e;return null===(e=t.telemetryContext)||void 0===e||null===(e=e.undoShowFewer)||void 0===e?void 0:e.getMetadataTag()}}"
    :telemetryTag_moreActions="${t=>{var e;return null===(e=t.telemetryContext)||void 0===e||null===(e=e.seeMore)||void 0===e?void 0:e.getMetadataTag()}}"
    :telemetryTag_showMore="${t=>{var e;return null===(e=t.telemetryContext)||void 0===e||null===(e=e.upvote)||void 0===e?void 0:e.getMetadataTag()}}"
    :telemetryTag_undoShowMore="${t=>{var e;return null===(e=t.telemetryContext)||void 0===e||null===(e=e.undoUpvote)||void 0===e?void 0:e.getMetadataTag()}}"
    :telemetryTag_companion="${t=>{var e;return null===(e=t.telemetryContext)||void 0===e||null===(e=e.companion)||void 0===e?void 0:e.getMetadataTag()}}"
    :telemetryTag_commentButton="${t=>{var e;return null===(e=t.telemetryContext)||void 0===e||null===(e=e.commentsButton)||void 0===e?void 0:e.getMetadataTag()}}"
    title="${t=>t.title}"
    :headingPrefix="${t=>t.titlePrefix}"
    :visualReadinessCallback="${t=>t.visualReadinessCallback}"
    ?wide="${t=>"_2x_2y"==t.cardSize||void 0}"
    ?ruby="${t=>t.ruby}"
    ?segment="${t=>t.segment}"
    ?companion="${t=>t.companion}"
    :companionButtonText="${t=>t.companionButtonText}"
    ${(0,o.K)("cardElement")}
>
    ${(0,l.z)(t=>t.publisherFollowButtonConfigInfo,u)}
    ${(0,l.z)(t=>t.enableRichSocialReaction,g)}
</cs-responsive-card>
`},5224:function(t){t.exports='<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 17.9a1.25 1.25 0 002.07.94l6.31-5.52c.8-.7.8-1.94 0-2.64l-6.3-5.52C10.25 4.46 9 5.03 9 6.1v11.8z"></path></svg>'},5675:function(t,e,i){"use strict";i.d(e,{S:function(){return a}});var n=i(96950);function a(){return n.qy`
        <template slot="tabpanel" role="tabpanel">
            <slot></slot>
        </template>
    `}},8226:function(t,e,i){"use strict";i.d(e,{n:function(){return n}});const n={_90x90:{width:90,height:90},_268x94:{width:268,height:94},_268x140:{width:268,height:140},_300x304:{width:300,height:304},_612x304:{width:612,height:304},_628x372:{width:628,height:372},_306x256:{width:306,height:256},_104x84:{width:104,height:84}}},10103:function(t,e,i){"use strict";i.d(e,{y:function(){return a}});var n=i(92011);class a extends n.L{}},11731:function(t,e,i){"use strict";i.d(e,{R3:function(){return m},Sl:function(){return f},Rl:function(){return b},kZ:function(){return v},u:function(){return $},IT:function(){return y},Ww:function(){return x}});var n,a=i(19608),r=i(11372),o=i(930),l=i(53013),s=i(63581);!function(t){t.OneColumn="1_column",t.TwoColumn="2_column"}(n||(n={}));var d=i(51098),c=i(89594),p=i(2632),u=i(669),g=i(49986),h=i(83003);const f=8,b=7200,m=1,v=99;function y(t,e){const i=(new Date).getTime(),n=new Date(t).getTime();if(isNaN(n))return!1;return i-n<1e3*e}function $(t){var e;const{cardMetadata:i,cardSlot:r,openLinksInNewTab:l,parentTelemetryObject:s,visualReadinessCallback:c,isAnaheimDesign:p,isProviderInFooter:u,localizedStrings:g,configOptions:h,infopaneThresholdSecondForNewFlag:f,infopaneThresholdForCommentFlag:v}=t,y="tabbedInfopaneCard",$=v??m,k=f??b,C=i;let w=[];if(C.subItems&&C.subItems.length?w=C.subItems:(w=C.subCards,C.subItems=w),!w.length)return;const _=(0,d.G)(s),T={id:y,childTemplateType:"tabbed-infopane-card",enableAdaptDarkMode:h.enableAdaptDarkMode,telemetryContext:_,slideContentData:[]},F=c;return(0,a.bw)({id:y,experienceType:null===(e=h&&h.childExperienceReferencesWC)||void 0===e||null===(e=e.configRef)||void 0===e?void 0:e.experienceType,mapperArgs:t},T,(e,i)=>{const r=i.cardSize,d=[];return w.forEach((i,n)=>{var o;if(!i)return;const c=i.recoId||i.metadata&&i.metadata.recoId,f=i.ri||i.metadata&&i.metadata.ri,b=(0,a.uX)({id:y,columnArrangement:e,experienceType:null===(o=h&&h.childExperienceReferencesWC)||void 0===o||null===(o=o.configRef)||void 0===o?void 0:o.experienceType,mapperArgs:t,recoId:c,ri:f,subCardIndex:n}).telemetryExt,m=i.visualReadinessCallback,v=x(h,i,l,u,()=>{F&&F(),m&&m()},p,s,_,r,!1,n,b,g,k,$);v&&d.push(v)}),{layout:r===o.uE._2x_2y?n.TwoColumn:n.OneColumn,slideContentData:d}})}function x(t,e,i,n,a,o,d,b,m,$,x,k,C,w,_){var T,F,S,D,A,z,I,E;let B=(null===(T=t.childExperienceReferencesWC)||void 0===T?void 0:T.denseCard)||(null===(F=t.childExperienceReferences)||void 0===F?void 0:F.denseCard);const L=(null==e?void 0:e.subItems)??(null==e?void 0:e.subCards),M=(null===(S=L[0])||void 0===S?void 0:S.cardContent)??(0,u.cZ)(L[0]).cardContent,N=(null===(D=L[0])||void 0===D||null===(D=D.commentSummary)||void 0===D?void 0:D.totalCount)??(null===(A=(0,u.cZ)(L[0]).commentSummary)||void 0===A?void 0:A.totalCount)??0;B={...B,instanceId:`denseCard-${M.id}`};const R=(null===(z=L[0])||void 0===z?void 0:z.type)===h.pL.WebContent,{id:O,destinationUrl:P,title:H,provider:j,type:U}=M,V=(0,u.Ie)(L[0]),W=d.addOrUpdateChild({name:"DenseSlide",type:r.MJ.Headline}),G=(0,l.dj)(W,M,L[0].metadata,k,U===h.pL.WebContent),Z=!0!==t.disableDenseArticleTemplate&&(null==V?void 0:V.width)<(null==V?void 0:V.height);let J=s.L._240x129;Z?J=s.L._240x253:t.useLargeHeroImageForDense&&(J=s.L._300x200);const X=(0,g.po)(L[0],J,a,o,!1);let Q=null==L?void 0:L.slice(1);Q.length>f&&(Q=Q.slice(0,f-1).concat(Q[Q.length-1]));const q={heroNews:{id:O,destinationUrl:(0,c.EJ)((0,u.Dv)(P)),openLinksInNewTab:i,title:H,ariaLabel:(0,u.yL)(H,j,null),imagePriority:!1,providerData:(0,u.p_)(j,R,null),isProviderInFooter:n,imageData:X,useArticleCardTemplate:Z,telemetryContext:G,commentCount:Math.min(N,v),commentFlag:N>=_,newFlag:y(M.publishedDateTime,w)},newsList:null===(I=Q)||void 0===I?void 0:I.map(e=>{var i;const n=e.type===h.pL.NativeAd||e.type===h.pL.CmsAd;if(!n){var a;const i=e.type===h.pL.WebContent;e.cardContent||(e=(0,u.cZ)(e));const r=(null===(a=e.metadata.commentSummary)||void 0===a?void 0:a.totalCount)??0;return{destinationUrl:(0,c.EJ)((0,u.Dv)(e.cardContent.destinationUrl)),title:e.cardContent.title,ariaLabel:(0,u.yL)(H,e.cardContent.provider,null),providerData:(0,u.p_)(e.cardContent.provider,i,null),isNativeAd:n,telemetryContext:(0,l.dj)(W,e.cardContent,e.metadata,k,i),isNarrowNewsItem:t.isNarrowNewsItem,commentCount:r<=v?r:v,commentFlag:r>=_,newFlag:y(e.cardContent.publishedDateTime,w)}}const r=(null===(i=e.placement)||void 0===i?void 0:i.items[0])??{},{beaconsJson:o,privacyUrl:s,adLabelText:d,geminiViewabilityDataJson:g}=e.placement??{};return{...r,beaconsJson:o,privacyUrl:s,adLabelText:d,geminiViewabilityDataJson:g,isNativeAd:n,adTelemetryContext:(0,p.u)(e,W,"infopane",0),isNarrowNewsItem:t.isNarrowNewsItem,isGreyAdsLabelEnabled:$}}),configOptions:t,cardSize:m,isTabbedInfopane:!0};let Y;Y=null!==(E=e.feed)&&void 0!==E&&E.feedName?e.feed.feedName:null!=C&&C.tabNameAll?C.tabNameAll:"総合";const K=function(t,e){switch(t){case"CanonicalName-entertainment":return e.tabEntertainment;case"CanonicalName-sports":return e.tabSports;case"CanonicalName-news-national":return e.tabNewsNational;case"CanonicalName-news-world":return e.tabNewsWorld;case"CanonicalName-finance-business":return e.tabFinanceBusiness;case"CanonicalName-lifestyle":return e.tabLifestyle;case"CanonicalName-businessnews":return e.tabBusinessNews;case"CanonicalName-scienceandtechnology":return e.tabScienceAndTechnology;default:return e.tabAll}}(e.id,b);return{id:x.toString(),denseConfigInfo:B,childTemplateType:"tabbed-infopane-card",gridArea:"",telemetryObject:W,denseData:q,tabLabel:Y,tabTelemetry:K}}},12697:function(t,e,i){"use strict";i.d(e,{ZV:function(){return n},g_:function(){return a}});const n=t=>{if(null==t)return"";const e=Number(t);if(isNaN(e)||!isFinite(e))return"";if(e<1e3)return e.toString();const i=["K","M","B","T"];let n=-1,a=e;for(;a>=1e3&&n<i.length-1;)a/=1e3,n++;a=Math.round(10*a)/10;return(a%1==0?a.toFixed(0):a.toFixed(1))+i[n]},a=t=>{if(null==t)return"";const e=Number(t);if(isNaN(e)||!isFinite(e))return"";if(e<1e4)return e.toString();let i=e/1e4;i=Math.round(10*i)/10;return(i%1==0?i.toFixed(0):i.toFixed(1))+"w"}},14817:function(t,e,i){"use strict";i.d(e,{Q:function(){return a}});var n=i(52201);const a=i(96950).qy`
    <fluent-card
        style="${t=>t.isArticleFreInInfoPane?"":"grid-area: "+t.gridArea}"
        class="${t=>t.cardSize}"
    >
        <article-fre
            config-instance-src=${t=>t.articleFreConfigInfo&&(0,n.v)(t.articleFreConfigInfo)}
            config-shared-ns=${t=>t.articleFreConfigInfo&&t.articleFreConfigInfo.configRef&&t.articleFreConfigInfo.configRef.sharedNs}
            instance-id=${t=>t.articleFreConfigInfo&&t.articleFreConfigInfo.instanceId}
            size=${t=>t.cardSize}
            :parentTelemetry=${t=>t.parentTelemetryObject}
            :subCards=${t=>t.subCards}
            :getReplacementCardsCallback=${t=>t.getReplacementCardsCallback}
            :refreshFeedCallback=${t=>t.refreshFeedCallback}
            :goToPersonalizeCallback=${t=>t.goToPersonalizeCallback}
            :visualReadinessCallback=${t=>t.visualReadinessCallback}
            :cardActionClickHandler=${t=>t.cardActionClickHandler}
        >
        </article-fre>
    </fluent-card>
`},17967:function(t,e,i){"use strict";i.d(e,{C:function(){return a}});var n=i(30216);const a=i(96950).qy`
<button 
    slot="hide-story"
    class="dismiss"
    aria-label="${t=>t.cardActionsTooltips&&t.cardActionsTooltips.hide}"
    title="${t=>t.cardActionsTooltips&&t.cardActionsTooltips.hide}"
    @click=${(t,e)=>t.cardActionClickHandler&&t.cardActionClickHandler(t.id,t.cardActionStatus^n.J.hide,"Hide",!0,null,null,null,e.event)}
    @keypress=${t=>t.cardActionClickHandler&&t.cardActionClickHandler(t.id,t.cardActionStatus^n.J.hide,"Hide",!0)}
    data-t="${t=>t.telemetryContext&&t.telemetryContext.hide&&t.telemetryContext.hide.getMetadataTag()}"
>
    <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M11.4587 4.39737L11.5355 4.46449C11.804 4.73297 11.8264 5.15437 11.6027 5.44835L11.5355 5.52515L9.06066 8.00002L11.5355 10.4749C11.804 10.7434 11.8264 11.1648 11.6027 11.4588L11.5355 11.5356C11.267 11.804 10.8456 11.8264 10.5517 11.6027L10.4749 11.5356L8 9.06068L5.52513 11.5356C5.25664 11.804 4.83524 11.8264 4.54127 11.6027L4.46447 11.5356C4.19598 11.2671 4.17361 10.8457 4.39734 10.5517L4.46447 10.4749L6.93934 8.00002L4.46447 5.52515C4.19598 5.25666 4.17361 4.83526 4.39734 4.54129L4.46447 4.46449C4.73295 4.196 5.15435 4.17363 5.44832 4.39737L5.52513 4.46449L8 6.93936L10.4749 4.46449C10.7434 4.196 11.1648 4.17363 11.4587 4.39737Z"
        />
    </svg>
</button>
`},18909:function(t){t.exports='<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 17.9a1.25 1.25 0 01-2.07.94l-6.31-5.52c-.8-.7-.8-1.94 0-2.64l6.3-5.52c.82-.7 2.08-.13 2.08.94v11.8z"></path></svg>'},20160:function(t,e,i){"use strict";i.d(e,{CI:function(){return p},bP:function(){return g},cX:function(){return u},gR:function(){return h}});var n=i(88294),a=i(83078);const r="DEFAULT";let o;const l=t=>o=setTimeout(t,200),s={},d={},c={};function p(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r;const i=s[e];if(i&&i.has(t)){(()=>i&&i.delete(t)&&0===i.size&&d[e])()&&l(()=>0===i.size&&d[e](null)),a.M.singleMark(t),n.v.log(`[vpreadyHelper] resolveVpMark ${t} scope ${e} remainingMarkers ${i.size}`)}}function u(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r;o&&clearTimeout(o),s[e]||(s[e]=new Set),s[e].add(t),n.v.log(`[vpreadyHelper] addVpMarker ${t} scope ${e} remainingMarkers ${s[e].size}`)}function g(){return s[arguments.length>0&&void 0!==arguments[0]?arguments[0]:r]}function h(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r;return c[t]=c[t]||new Promise(e=>{d[t]=e}),c[t]}},20450:function(t,e,i){"use strict";i.d(e,{i:function(){return u},z:function(){return p}});var n=i(65022),a=i(93468),r=i(30216),o=i(930),l=i(91532),s=i(19608),d=i(669),c=i(64884);function p(t){var e;const{cardMetadata:i,parentTelemetryObject:l,configOptions:p,layoutTemplateName:u,getReplacementCardsCallback:g,refreshFeedCallback:h,goToPersonalizeCallback:f,visualReadinessCallback:b,isArticleFreInInfoPane:m,cardActionClickHandler:v}=t,y=p&&p.childExperienceReferencesWC?p.childExperienceReferencesWC.articleFreCard:p;let $=[];$=i.subItems&&i.subItems.length?i.subItems:i.subCards,i.subCards=$,i.subItems=void 0;const x=(0,d.H8)(i,(r.J.dismiss<<1)-1),k=0!==(x&r.J.dismiss)?(0,c.Eb)(t,x,i.id,l):{id:i.id,childTemplateType:"article-fre-card",articleFreConfigInfo:y,parentTelemetryObject:l,subCards:$,getReplacementCardsCallback:g,refreshFeedCallback:h,goToPersonalizeCallback:f,cardActionClickHandler:v,visualReadinessCallback:b,isArticleFreInInfoPane:m};return(0,s.bw)({id:i.id,experienceType:null==y||null===(e=y.configRef)||void 0===e?void 0:e.experienceType,mapperArgs:t},k,(t,e)=>{const i=e.cardSize;return i!==o.uE._1x_2y&&i!==o.uE._2x_2y&&(0,a.vV)(n.Qhr,`Article Fre Card mapped as ${i} on ${t} in ${u}`),{}},!0)}function u(t,e){if(e===l.C.articleFreCard)return!0;if(e===l.C.recommendedInterestsCard)return!0;if(e===l.C.infopaneCard){let e=[];e=t.subItems&&t.subItems.length?t.subItems:t.subCards;for(const t of e)if("ArticleFre"===t.type&&"FreFeed"===t.id)return!0}return!1}},22033:function(t,e,i){"use strict";i.d(e,{L:function(){return p}});var n=i(10103);class a extends n.y{}var r=i(5675),o=i(7896),l=i(61138),s=i(74849),d=i(64187);const c=s.A`
    ${(0,d.V)("flex")} :host{box-sizing:border-box;font-family:${o.O};
        font-size: ${l.k};
        line-height: ${l.F};
        height: 100%;
    }
`,p=a.compose({name:"msn-info-pane-panel",template:(0,r.S)(),styles:c})},23247:function(t,e,i){"use strict";i.d(e,{f:function(){return r}});var n=i(75776),a=i(84397);function r(){let t=!1;const e=(0,n.MI)(),{geo_country:i,geo_subdivision:r}=e,o=(null==i?void 0:i.toUpperCase())??"",l=(null==r?void 0:r.toUpperCase())??"";return o&&a.XD.includes(o)&&("CA"===o&&"QUEBEC"!==l||(t=!0)),t}},24256:function(t,e,i){"use strict";i.d(e,{u:function(){return r}});var n=i(87122),a=i(22870);function r(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=arguments.length>2?arguments[2]:void 0;const r=(arguments.length>3?arguments[3]:void 0).toColorString(),{r:o,g:l,b:s}=(0,a.Hs)(r),d=`linear-gradient(160deg, ${new n.M(o,l,s,t).toStringWebRGBA()}, ${new n.M(o,l,s,e).toStringWebRGBA()})`;if(i){return[d,null==i?void 0:i.toColorString()].join()}return d}},25781:function(t,e,i){"use strict";i.d(e,{F:function(){return o}});var n=i(86926);const a=Object.freeze({"0.5u":{width:84,height:84},"1u":{width:312,height:172},"1.5u":{width:312,height:196},"2c":{width:n.Mq,height:n.C6},_2x_2y:{width:n.Mq,height:n.C6}}),r=Object.freeze({"0.5u":{width:n.du,height:n.Yc},"1u":{width:n.du,height:n.C6},"1.5u":{width:n.du,height:n.Pf},"2c":{width:n.Mq,height:n.C6},_2x_2y:{width:n.Mq,height:n.C6}});function o(t){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]?r[t]:a[t]}},26641:function(t,e,i){"use strict";i.d(e,{BQ:function(){return $},R0:function(){return g},eW:function(){return y},mO:function(){return v},ns:function(){return m},qq:function(){return u},wT:function(){return f},zZ:function(){return h}});var n=i(84855),a=i(98216),r=i(91532),o=i(44944),l=i(65022),s=i(17254),d=i(19608),c=i(96950),p=i(11622);const u={[r.C.bingDailyQuizCard]:"bingDailyQuizCard",[r.C.casualGamesCard]:"casualGamesCard",[r.C.casualGamesCarouselCard]:"casualGamesCarouselCard",[r.C.casualGamesProng2CarouselCard]:"casualGamesProng2CarouselCard",[r.C.casualGamesStripeCarouselCard]:"casualGamesStripeCarouselCard",[r.C.communityCard]:"communityCard",[r.C.dailyBriefCard]:"dailyBriefCard",[r.C.dailyGreetingCard]:"dailyGreetingCard",[r.C.dailyMomentsCard]:"dailyMomentsCard",[r.C.dailyWonderCopilotCard]:"dailyWonderCopilotCard",[r.C.dailyWonderQuoteCard]:"dailyWonderCopilotCard",[r.C.donationNpoCard]:"donationNpoCard",[r.C.electionCard]:"electionCard",[r.C.entertainmentPremierCard]:"entertainmentPremierCard",[r.C.esportsCard]:"esportsCard",[r.C.healthCard]:"bingHealthCard",[r.C.horoscopeAnswerCard]:"horoscopeCard",[r.C.hotListCard]:"hotListCard",[r.C.mangaCard]:"mangaCard",[r.C.mangaCarousel]:"mangaCarousel",[r.C.mobileTrendingSearchCard]:"mobileTrendingSearchCard",[r.C.onThisDayCard]:"onThisDayCard",[r.C.prismCarouselCard]:"prismCarouselCard",[r.C.qnaCard]:"qnaCard",[r.C.realEstateCard]:"realEstateCard",[r.C.recipesCard]:"recipesCard",[r.C.richCalendarCard]:"richCalendarCard",[r.C.sharedHeroNewsCard]:"sharedHeroNewsCard",[r.C.shoppingBannerSdCard]:"shoppingBannerSdCard",[r.C.shoppingBuyingGuidePremiumCard]:"shoppingBuyingGuidePremiumCard",[r.C.shoppingCarouselCard]:"shoppingCarousel",[r.C.shoppingEventsDealCard]:"shoppingEventsDealCard",[r.C.shoppingRiverCard]:"shoppingRiverCard",[r.C.shoppingSdCard]:"shoppingSdCard",[r.C.topCommentsCard]:"topCommentsCard",[r.C.trendingNowCard]:"trendingNowWC",[r.C.trendingSearchCard]:"trendingSearchCard",[r.C.weatherCard]:"weatherCard",[r.C.widgetsNotificationsCard]:"widgetsNotificationsCard",[r.C.winAppCard]:"winAppCard"},g={[r.C.bingDailyQuizCard]:"bingDailyQuizCard",[r.C.boostAdCard]:"boostAdCard",[r.C.casualGamesCard]:"casualGamesCard",[r.C.casualGamesCarouselCard]:"casualGamesCarouselCard",[r.C.casualGamesProng2CarouselCard]:"casualGamesProng2CarouselCard",[r.C.casualGamesStripeCarouselCard]:"casualGamesStripeCarouselCard",[r.C.communityCard]:"communityCard",[r.C.contentGroupCard]:"contentGroupCard",[r.C.creatorSpotlightCard]:"creatorSpotlightCard",[r.C.dailyBriefCard]:"dailyBriefCard",[r.C.dailyGreetingCard]:"dailyGreetingCard",[r.C.dailyMomentsCard]:"dailyMomentsCard",[r.C.dailyWonderCopilotCard]:"dailyWonderCopilotCard",[r.C.dailyWonderQuoteCard]:"dailyWonderQuoteCard",[r.C.donationNpoCard]:"donationNpoCard",[r.C.electionCard]:"electionCard",[r.C.entertainmentPremierCard]:"entertainmentPremierCard",[r.C.esportsCard]:"esportsCard",[r.C.healthCard]:"bingHealthCard",[r.C.healthRiverCard]:"healthRiverCard",[r.C.healthTipCard]:"healthTipCard",[r.C.horoscopeAnswerCard]:"horoscopeCard",[r.C.hotListCard]:"hotListCard",[r.C.mangaCard]:"mangaCard",[r.C.mangaCarousel]:"mangaCarousel",[r.C.mobileTrendingSearchCard]:"mobileTrendingSearchCard",[r.C.onThisDayCard]:"onThisDayCard",[r.C.prismCarouselCard]:"prismCarouselCard",[r.C.qnaCard]:"qnaCard",[r.C.quizCard]:"quizCard",[r.C.realEstateCard]:"realEstateCard",[r.C.recipesCard]:"recipesCard",[r.C.richCalendarCard]:"richCalendarCard",[r.C.sharedHeroNewsCard]:"sharedHeroNewsCard",[r.C.shoppingBannerSdCard]:"shoppingBannerSdCard",[r.C.shoppingBuyingGuidePremiumCard]:"shoppingBuyingGuidePremiumCard",[r.C.shoppingCarouselCard]:"shopping-carousel",[r.C.shoppingEventsDealCard]:"shoppingEventsDealCard",[r.C.shoppingRiverCard]:"shoppingRiverCard",[r.C.shoppingSdCard]:"shoppingSdCard",[r.C.shoppingTopSectionCard]:"shoppingTopSectionCard",[r.C.topCommentsCard]:"topCommentsCard",[r.C.trendingNowCard]:"trendingNowCard",[r.C.trendingSearchCard]:"trendingSearchCard",[r.C.weatherCard]:"weather",[r.C.widgetsNotificationsCard]:"widgetsNotificationsCard",[r.C.winAppCard]:"winAppCard"},h=(t,e)=>{if(!e)return t;let i="";if("ext"in e.contract){const t=e.contract.ext;i=`${t.row}_${t.col}`}return`${t}_${i}`},f=c.qy`
    ${t=>{var e;return t.configInfo&&(0,p.yN)({...t.configInfo,instanceId:`${h(t.configInfo.instanceId,t.telemetryObject)}`},{properties:{wpoMetadata:t.wpoMetadata,mapperArgs:t.mapperArgs,parentTelemetry:t.telemetryObject,feedLayoutCardSize:t.cardSize,hasLoadedCallback:t.hasLoadedCallback,cardType:t.cardType},attributes:{style:`grid-area:${t.gridArea};width:${null===(e=t.mapperArgs)||void 0===e||null===(e=e.displaySettings)||void 0===e?void 0:e.cardWidth}px;contain:unset;content-visibility:visible;`,class:`${t.cardSize}`,tabindex:t.customTabIndex??0},telemetryObject:t.telemetryObject})}}
`;c.qy`
    ${t=>t.configInfo&&(0,p.yN)({...t.configInfo,instanceId:`${h(t.configInfo.instanceId,t.telemetryObject)}`},{properties:{mapperArgs:t.mapperArgs,feedLayoutCardSize:t.cardSize},attributes:{style:`grid-area:${t.gridArea};`,class:`${t.cardSize}`,tabindex:t.customTabIndex??0},telemetryObject:t.telemetryObject})}
`;function b(t){var e;const i=null===(e=t.configInfo)||void 0===e||null===(e=e.configRef)||void 0===e?void 0:e.experienceType;return i===n.yXx||i===n.Ohn?";width:100%":""}const m=c.qy`
    ${t=>t.configInfo&&(0,p.yN)({...t.configInfo,instanceId:`${h(t.configInfo.instanceId,t.telemetryObject)}`},{attributes:{style:`grid-area:${t.gridArea}${b(t)}`,class:`${t.cardSize}`,tabindex:t.customTabIndex??0},properties:{mapperArgs:t.mapperArgs,feedLayoutCardSize:t.cardSize},telemetryObject:t.telemetryObject})}
`,v=(c.qy`
    ${t=>t.configInfo&&(0,p.yN)({...t.configInfo,instanceId:`${h(t.configInfo.instanceId,t.telemetryObject)}`},{properties:{mapperArgs:t.mapperArgs,feedLayoutCardSize:t.cardSize,hasLoadedCallback:t.hasLoadedCallback},attributes:{style:`grid-area:${t.gridArea};contain:unset;content-visibility:visible;`,class:`${t.cardSize}`,tabindex:t.customTabIndex??0},telemetryObject:t.telemetryObject,memoize:"edgeChromium"===s.T3.AppType})}
`,c.qy`
    ${t=>t.configInfo&&(0,p.yN)({...t.configInfo,instanceId:`${h(t.configInfo.instanceId,t.telemetryObject)}`},{properties:{mapperArgs:t.mapperArgs,cardMetadata:t.mapperArgs?t.mapperArgs.cardMetadata.data:null,feedLayoutCardSize:t.cardSize,hasLoadedCallback:t.hasLoadedCallback},attributes:{style:`grid-area:${t.gridArea};contain:unset;content-visibility:visible;`,tabindex:t.customTabIndex??0},telemetryObject:t.telemetryObject,memoize:"edgeChromium"===s.T3.AppType})}
`),y=c.qy`
    ${t=>t.configInfo&&(0,p.yN)({...t.configInfo,instanceId:`${h(t.configInfo.instanceId,t.telemetryObject)}`},{properties:{mapperArgs:t.mapperArgs,feedLayoutCardSize:t.cardSize,hasLoadedCallback:t.hasLoadedCallback},attributes:{style:`grid-area:${t.gridArea};contain:unset;content-visibility:visible;`,class:`${t.cardSize}`,tabindex:t.customTabIndex??0},telemetryObject:t.telemetryObject,memoize:!1})}
`,$=(t,e)=>{var i;const{configOptions:n,cardMetadata:r,hasLoadedCallback:s}=t;e||(e=o.G[r.type]),e||a.YT.sendAppErrorEvent({...l.ODw,message:"No card template type found",pb:{...l.ODw.pb,cardType:r.type}});const c=g[e],p={id:c,childTemplateType:e,mapperArgs:t,configInfo:n,hasLoadedCallback:s,cardType:null==r?void 0:r.cardType};return(0,d.bw)({id:c,experienceType:null===(i=n&&n)||void 0===i||null===(i=i.configRef)||void 0===i?void 0:i.experienceType,mapperArgs:t},p,null,!0)}},26863:function(t,e,i){"use strict";i.d(e,{tB:function(){return v},LW:function(){return m},nj:function(){return b}});var n=i(80004),a=i(96950),r=i(91640),o=i(88985),l=i(30216),s=i(930),d=i(64900),c=i.n(d),p=i(45016),u=i.n(p),g=i(17254),h=i(75416),f=i(52201);const b=t=>{let{theme:e="default",hideComments:i=!1}=t;return a.qy`
<div style="display: flex; gap: 4px;">
    ${(0,r.z)(t=>t.optedOutOfReactions&&!t.disableOptedOutButton,a.qy`
        ${m}
        ${v}
    `)}
    <social-bar-wc
        config-instance-src=${t=>t.socialBarWCConfigInfo&&(0,f.v)(t.socialBarWCConfigInfo)}
        instance-id=${t=>t.socialBarWCConfigInfo&&t.socialBarWCConfigInfo.instanceId}
        config-shared-ns=${t=>{var e;return null===(e=t.socialBarWCConfigInfo)||void 0===e||null===(e=e.configRef)||void 0===e?void 0:e.sharedNs}}
        :additionalHeaders=${t=>t.additionalHeaders}
        :hideComments=${t=>i}
        :canShowOneLineComments=${t=>!(t.isInfopane||t.cardSize!==s.uE._2x_2y||"flex-article-card"===t.childTemplateType&&t.articleTopCommentConfigInfo&&t.articleTopCommentId)}
        :contentId=${t=>t.id}
        :destinationUrl=${t=>t.destinationUrl}
        :title=${t=>t.title}
        :locale=${t=>g.T3.CurrentMarket||t.locale}
        :rootTelemetryObject=${t=>t.telemetryContext&&(t.telemetryContext.contentCardTelemetryObject||t.telemetryContext.contentCard)}
        :getReplacementCardsCallback=${t=>t.getReplacementCardsCallback}
        :reactionCallback=${t=>t.reactionCallback}
        :cardActionHideHandler=${t=>t.cardActionClickHandler&&function(){for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];return t.cardActionClickHandler(t.id,t.cardActionStatus^l.J.hide,...i)}}
        :shareActionHandler=${t=>t.shareActionHandler}
        :isInfoPane=${t=>t.isInfopane}
        :isRightPos=${t=>t.socialBarInRight}
        :socialMetadata=${t=>({...t.metadata,imageData:t.imageData,providerData:t.providerData,title:t.title})}
        :theme=${t=>e}
    ></social-bar-wc>
</div>
`},m=a.qy`
<msn-card-button
    class="card-button"
    data-icon=${l.J.showMore}
    style="${t=>t.isInfopane||t.optedOutOfReactions||!t.enableFilledIconOnHover?"":"display: flex;"} ${t=>t.enableAnimatedShowMoreBtn||t.optedOutOfReactions||!t.enableFilledIconOnHover?"":"margin-inline-end: 8px;"}"
    select-title=${t=>t.cardActionsTooltips&&t.cardActionsTooltips.showMore}
    unselect-title=${t=>t.cardActionsTooltips&&t.cardActionsTooltips.undoShowMore}
    animation-text=${t=>t.showMoreAnimationTitle}
    select-icon=${t=>t.useArrowIcons&&!t.optedOutOfReactions?c():'<svg width="16" height="18" viewBox="0 0 16 18"><path d="M10.48.7c-.8-.83-2.09-.38-2.43.6-.28.8-.64 1.77-1 2.48C6 5.9 5.37 7.1 3.67 8.63c-.23.2-.52.36-.84.49-1.13.44-2.2 1.61-1.92 3l.36 1.77a2.5 2.5 0 0 0 1.8 1.92l5.6 1.52a4.5 4.5 0 0 0 5.6-3.53l.69-3.76A3 3 0 0 0 12 6.5h-.88l.01-.05c.08-.41.18-.97.24-1.59.07-.6.1-1.28.05-1.9a3.68 3.68 0 0 0-.5-1.74 4.16 4.16 0 0 0-.44-.52Z"/></svg>'}
    unselect-icon=${t=>t.useArrowIcons&&!t.optedOutOfReactions?u():'<svg width="16" height="18" viewBox="0 0 16 18"><path d="M8.05 1.3C8.4.31 9.68-.14 10.48.7c.16.17.33.36.44.52.32.48.45 1.12.5 1.73.05.63.02 1.3-.05 1.91-.06.62-.16 1.18-.24 1.59v.05H12a3 3 0 0 1 2.96 3.54l-.69 3.76a4.5 4.5 0 0 1-5.6 3.53l-5.6-1.52a2.5 2.5 0 0 1-1.8-1.92L.9 12.12c-.27-1.39.79-2.56 1.92-3 .32-.13.61-.3.84-.5 1.7-1.5 2.32-2.72 3.38-4.84.36-.71.72-1.68 1-2.49Zm1.96 5.58v-.01l.01-.03a9.08 9.08 0 0 0 .13-.58c.08-.4.17-.92.23-1.5s.09-1.18.04-1.73a2.73 2.73 0 0 0-.34-1.25 3.26 3.26 0 0 0-.32-.39c-.2-.2-.63-.16-.76.23-.29.82-.67 1.83-1.05 2.6-1.07 2.14-1.76 3.5-3.62 5.15-.34.3-.74.52-1.13.68-.89.34-1.45 1.14-1.3 1.87l.35 1.77c.1.56.53 1 1.07 1.15l5.6 1.53c1.98.54 4-.73 4.37-2.75l.68-3.76A2 2 0 0 0 12 7.5h-1.5a.5.5 0 0 1-.48-.62Z"/></svg>'}
    filled-icon-path=${t=>t.useArrowIcons&&!t.optedOutOfReactions?o.qb:o.vz}
    fill-color-selected=${t=>!t.enableNeutralFilledShowMoreIcon&&h.P}
    layout=${t=>(0,n.V1)(t)}
    selected=${t=>!!(t.cardActionStatus&l.J.showMore)}
    @selected-state-changed=${(t,e)=>t.cardActionClickHandler&&t.cardActionClickHandler(t.id,t.cardActionStatus&l.J.showFewer?t.cardActionStatus^l.J.showMore^l.J.showFewer:t.cardActionStatus^l.J.showMore,"ShowMore",!0,t.cardActionClickHandler,null,!t.enableAnimatedShowMoreBtn,e.event)}
    select-telemetry-tag=${t=>t.telemetryContext&&t.telemetryContext.showMore&&t.telemetryContext.showMore.getMetadataTag()}
    unselect-telemetry-tag=${t=>t.telemetryContext&&t.telemetryContext.undoShowMore&&t.telemetryContext.undoShowMore.getMetadataTag()}
>
</msn-card-button>
`,v=a.qy`
<msn-card-button
    class="card-button"
    data-icon=${l.J.showFewer}
    style="${t=>!t.enableAnimatedShowMoreBtn&&t.enableFilledIconOnHover?"margin-inline-start: 8px;":""}"
    select-title=${t=>t.cardActionsTooltips&&t.cardActionsTooltips.showFewer}
    unselect-title=${t=>t.cardActionsTooltips&&t.cardActionsTooltips.undoShowFewer}
    select-icon=${t=>'<svg width="16" height="18" viewBox="0 0 16 18"><path d="M10.48 17.3c-.8.83-2.09.38-2.43-.6-.28-.8-.64-1.77-1-2.48C6 12.1 5.37 10.9 3.67 9.37c-.23-.2-.52-.36-.84-.49C1.7 8.44.63 7.27.9 5.88l.36-1.77a2.5 2.5 0 0 1 1.8-1.92L8.66.66a4.5 4.5 0 0 1 5.6 3.54l.69 3.76A3 3 0 0 1 12 11.5h-.88l.01.05c.08.41.18.97.24 1.58.07.62.1 1.29.05 1.92a3.68 3.68 0 0 1-.5 1.73c-.11.16-.28.35-.44.52Z"/></svg>'}
    unselect-icon=${t=>'<svg width="16" height="18" viewBox="0 0 16 18"><path d="M8.05 16.7c.34.98 1.63 1.43 2.43.6.16-.17.33-.36.44-.52.32-.48.45-1.12.5-1.73.05-.63.02-1.3-.05-1.91-.06-.62-.16-1.18-.24-1.59v-.05H12a3 3 0 0 0 2.96-3.54l-.69-3.76A4.5 4.5 0 0 0 8.67.67l-5.6 1.52c-.92.25-1.62 1-1.8 1.92L.9 5.88c-.27 1.39.79 2.56 1.92 3 .32.13.61.3.84.5 1.7 1.5 2.32 2.72 3.38 4.84.36.71.72 1.68 1 2.49Zm1.96-5.58v.01l.01.03a8.94 8.94 0 0 1 .13.58c.08.4.17.92.23 1.5s.09 1.18.04 1.73c-.04.55-.16.98-.34 1.25-.05.1-.17.22-.32.39-.2.2-.63.16-.76-.23-.29-.82-.67-1.83-1.05-2.6-1.07-2.14-1.76-3.5-3.62-5.15-.34-.3-.74-.52-1.13-.68-.89-.34-1.45-1.14-1.3-1.87l.35-1.77c.1-.56.53-1 1.07-1.15l5.6-1.53a3.5 3.5 0 0 1 4.37 2.75l.68 3.76A2 2 0 0 1 12 10.5h-1.5a.5.5 0 0 0-.48.62Z"/></svg>'}
    filled-icon-path=${t=>o.M3}
    fill-color-selected=${t=>!t.enableNeutralFilledShowMoreIcon&&h.P}
    layout=${t=>(0,n.V1)(t)}
    selected=${t=>!!(t.cardActionStatus&l.J.showFewer)}
    @selected-state-changed=${(t,e)=>t.cardActionClickHandler&&t.cardActionClickHandler(t.id,t.cardActionStatus&l.J.showMore?t.cardActionStatus^l.J.showMore^l.J.showFewer:t.cardActionStatus^l.J.showFewer,"ShowFewer",!0,t.cardActionClickHandler,null,!t.contentType,e.event)}
    select-telemetry-tag=${t=>t.telemetryContext&&t.telemetryContext.showMore&&t.telemetryContext.showFewer.getMetadataTag()}
    unselect-telemetry-tag=${t=>t.telemetryContext&&t.telemetryContext.undoShowFewer&&t.telemetryContext.undoShowFewer.getMetadataTag()}
>
</msn-card-button>
`},30010:function(t,e,i){"use strict";i.d(e,{m:function(){return r}});var n=i(53140),a=i(49986);const r={getFeedDataForCard:t=>(0,a.PB)(t),viewTemplate:n.K}},30668:function(t,e,i){"use strict";i.d(e,{v:function(){return r}});var n=i(4670),a=i(36783);const r={getFeedDataForCard:t=>(0,a.y5)(t),viewTemplate:n.t}},31619:function(t,e,i){"use strict";i.d(e,{K:function(){return b}});var n=i(99751);class a extends n.s{}var r=i(60347),o=i(74849),l=i(50882),s=i(64187),d=i(73477),c=i(22131),p=i(7896),u=i(48751),g=i(26920),h=i(14996);const f=o.A`
    ${(0,s.V)("inline-flex")} :host{box-sizing:border-box;font-family:${p.O};
        min-height: 6px;
        min-width: 6px;
        background-color: ${u.l};border-radius:20px;opacity:0.4;grid-row:1;z-index:1;margin:0px 2px}:host([aria-selected="true"]){z-index:2;opacity:1;min-width:30px}:host(:hover),:host(:active){background:${u.l};
        opacity: 1;
    }

    :host(:${d.N}){outline:none;box-shadow:0 0 0 calc((${g.vd} - ${g.XA}) * 1px)
            rgba(0,0,0,1), 0 0 0 calc((${g.vd} + ${g.XA}) * 1px)
            ${h.WN}}:host(:focus){outline:none}`.withBehaviors((0,c.mr)(o.A` :host{forced-color-adjust:none;border-color:transparent;color:${l.A.ButtonText};
                fill: ${l.A.ButtonText}}:host(:hover),:host([aria-selected="true"]:hover){background:${l.A.Highlight};
                color: ${l.A.HighlightText};
                fill: ${l.A.HighlightText}}:host([aria-selected="true"]){background:${l.A.HighlightText};
                color: ${l.A.Highlight};
                fill: ${l.A.Highlight};
            }
            :host(:${d.N}){border-color:${l.A.ButtonText};
                box-shadow: 0 0 0 calc((${g.vd} - ${g.XA}) * 1px)
                    rgba(0,0,0,1), 0 0 0 calc((${g.vd} + ${g.XA}) * 1px)
                    ${l.A.ButtonText};
            }
        `)),b=a.compose({name:"msn-info-pane-tab",template:(0,r.M)(),styles:f})},32542:function(t,e,i){"use strict";i.d(e,{T:function(){return r}});var n=i(65022),a=i(93468);const r=(0,i(44449).sx)(n.WQp,"sendAdImageLoadError")(t=>{let{isBoost:e,...i}=t;(0,a.vV)(e?n.H77:n.MxD,"Ads image is not loaded properly",o(i),{shouldSampleErrorsForTreatement1:!e})}),o=t=>{let{id:e,rLink:i,imgLink:n,event:a,retryCount:r,isRetrySuccessful:o,status:l,statusText:s,type:d,redirected:c,errorMessage:p}=t;return JSON.stringify({id:e,rLink:i,imgLink:n||a&&a.target.src,retryCount:r,isRetrySuccessful:o,status:l,statusText:s,type:d,redirected:c,errorMessage:p})}},32779:function(t,e,i){"use strict";i.d(e,{$:function(){return r}});var n=i(59856),a=i(89594);const r={getFeedDataForCard:t=>(0,a.M8)(t),viewTemplate:n.DO}},33956:function(t,e,i){"use strict";i.d(e,{j:function(){return r}});var n=i(97366),a=i(69685);const r={getFeedDataForCard:t=>(0,a._C)(t),viewTemplate:n.p,getPreviewForCard:t=>(0,a.E_)(t)}},36687:function(t,e,i){"use strict";i.d(e,{j:function(){return d}});var n,a=i(46613),r=i(19608);!function(t){t.full="full",t.half="half",t.tall="tall"}(n||(n={}));var o=i(93468),l=i(65022),s=i(930);const d={getFeedDataForCard:t=>function(t){var e,i;const{configOptions:a,parentTelemetryObject:d,cardMetadata:c,openLinksInNewTab:p,refreshSDCardSection:u,goToPersonalizeSettingsCallback:g,flattenedRightRail:h,sdCardActionClickHandler:f,supportedSdCardActionMenuItems:b,dismissSDCardMenuCallback:m,refreshFeedCallback:v,visualReadinessCallback:y,hasLoadedCallback:$,activeBoard:x,isWidgetRegion:k,onSDCardClick:C,turnOffWidgetsRegionCallback:w,manageWidgetsRegionCallback:_}=t;if(null==c||!c.data)return null;const T=a&&a;let F;try{F=JSON.parse(c.data)}catch(t){return(0,o.vV)(l.V8E,"exception while parsing feed money card data from data mapper"),null}const S=`moneyInfoCard_${c.type}`,D=`${c.type}${x?`_${x}`:""}${null!==(e=c.metadata)&&void 0!==e&&e.isSpotlightUX?"_spotlight":""}`,A={cardFeedDataJson:F,childTemplateType:"money-info-card",cardLayout:n.full,goToPersonalizeSettingsCallback:g,id:S,moneyCardConfigInfo:T,noGradient:h,openLinksInNewTab:p,parentTelemetryObject:d,refreshSDCardSection:u,refreshFeedCallback:v,visualReadinessCallback:y,sdCardActionClickHandler:f,supportedSdCardActionMenuItems:b,dismissSDCardMenuCallback:m,cardType:D,experienceName:`${D}${c.id?`_${c.id}`:""}`,isSpotlightUX:c.metadata&&c.metadata.isSpotlightUX,previewType:c.metadata&&c.metadata.previewType,feedData:c.data,cardId:c.cardId,hasLoadedCallback:$,isWidgetRegion:k,onSDCardClick:C,turnOffWidgetsRegionCallback:w,manageWidgetsRegionCallback:_};return A.isWidgetRegion&&(A.cardSize="_1x_1y"),(0,r.bw)({id:S,experienceType:null==T||null===(i=T.configRef)||void 0===i?void 0:i.experienceType,mapperArgs:t},A,(t,e)=>{const i=e.cardSize;let a=n.full;return i===s.uE._1x_1y?a=n.half:i===s.uE._1x_3y&&(a=n.tall),{cardLayout:a,sdCardActionClickHandler:f,supportedSdCardActionMenuItems:b}},!0)}(t),viewTemplate:a.P}},36783:function(t,e,i){"use strict";i.d(e,{y5:function(){return M},As:function(){return R},uh:function(){return N}});var n=i(30216),a=i(19608),r=i(930),o=i(49093),l=i(53013),s=i(63581),d=i(79765),c=i(39152),p=i(8226),u=i(25781),g=i(64884),h=i(83003),f=i(93468),b=i(65022),m=i(11372),v=i(98216),y=i(12870),$=i(17254),x=i(85889),k=i(12697),C=i(52656),w=i(669),_=i(39620),T=i(47149),F=i(76972),S=i(51600),D=i(27261),A=i(71658),z=i(64096),I=i(50180),E=i(96592);const B=["ocid","pc","cvid","ei","copilot_traceid"];function L(t,e,i){try{const n=new URL(t);return n.searchParams.set(e,i),n.toString()}catch(e){return t}}function M(t){var e;const{cardMetadata:i,configOptions:n,immersiveCard:l,visualReadinessCallback:s,ruby:d,overrideTelemetryExtArgs:c}=t,p=i.type,{childExperienceReferencesWC:u={},childExperienceReferences:g={}}=n,f=u.socialBarWC||g.socialBarWC,b=u.videoCardWC,v=N(t,{socialBarWCConfigInfo:f,videoCardConfigInfo:b},s),{id:y,metadata:$,telemetryContext:x}=v,k=$?!$.reactionSummary:v&&!v.reactionSummary;o.R.setContentIdCandidateIfNeeded(y,p,k);const C=n&&n,_=i&&i.ri||$&&$.ri,F=i&&i.recoId||$&&$.recoId;var S;t.configOptions.preloadImages&&(0,w.NN)(null===(S=v.attributionData)||void 0===S?void 0:S.src);const D=(0,a.bw)({id:y,experienceType:null==C||null===(e=C.configRef)||void 0===e?void 0:e.experienceType,mapperArgs:t,recoId:F,ri:_},v,(e,a)=>{var o;const c=a.cardSize;let p;(v.usePortraitImage||v.useSquareImage)&&(p=v.usePortraitImage?"portrait":"square");const u=Boolean(null===(o=t.cardMetadata.feedMetadata)||void 0===o?void 0:o.segment),g=O(v,c,s,l,{segment_1_1:u},n);let f=r.uE._1u;switch(c){case"_1x_1y":f=r.uE._05u;break;case"_1x_2y":f=r.uE._1u;break;case"_2x_2y":f=d?"2c":r.uE._2c;break;default:f=c||r.uE._1u}"shorts"===i.size&&(f="shorts"),n.useInfopaneSlideTemplate&&(f=r.uE._1u);const b=g?function(t){var e;const i=t.contentType,n=i===h.pL.WebContent,a=n&&Boolean(null===(e=t.metadata)||void 0===e?void 0:e.videoMetadata),r=a||i===h.pL.Video;return r?"video":"image"}(v):void 0;t.configOptions.preloadImages&&(0,w.NN)(null==g?void 0:g.src);const y=a.telemetryExt;n.logThumbnailUrl&&(y.tmb=null==g?void 0:g.src),c!==r.uE._05u&&(y.height=n.isWaterfallFeed&&n.enableDynamicWaterfall?void 0:304);const $={...x};return $&&$.contentCard&&($.destination&&($.destination=$.contentCard.addOrUpdateChild({...$.destination.contract,type:m.MJ.Headline,ext:y,action:m.EG.Click})),$.contentCard=new T.$({...$.contentCard.contract,ext:y})),{visualReadinessCallback:s,mediaData:g,mediaType:b,telemetryContext:$,responsiveCardSize:f,hideComments:!(!n.hideCommentsInHalfUCards||f!==r.uE._05u)}},!0,c);return D}function N(t,e,i){var a,r,o,s,d;let p=arguments.length>3&&void 0!==arguments[3]&&arguments[3],u=arguments.length>4?arguments[4]:void 0;const{cardActionBitMask:k,cardActionClickHandler:F,cardMetadata:S,cardSlot:M,configOptions:N={},enableRichSocialReaction:j,shareActionHandler:U,initCardAction:V,isNarrowTitleFooterGap:W,isPublisherPage:G,cardActionMenuClickCallback:Z,getReplacementCardsCallback:J,goToPersonalizeSettingsCallback:X,heightReadyCallback:Q,hideCardCallback:q,reactionCallback:Y,refreshFeedCallback:K,visualReadinessCallback:tt,localizedStrings:et,mouseenterHandler:it,mouseleaveHandler:nt,openLinksInNewTab:at,parentTelemetryObject:rt,getSpotlightMenuItems:ot,supportedSdCardActionMenuItems:lt,sdCardActionClickHandler:st,isSpotlightZone:dt,userSubscriptionData:ct,displaySettings:pt,preventDefaultClick:ut,actionMenuLocalizedStrings:gt,feedbackHandler:ht,shareHandler:ft,immersiveCard:bt,feedName:mt,notificationMetadata:vt,openLinksInCurrentTab:yt,renderContentIndicator:$t,ruby:xt,underlineTitle:kt}=t,{availableActions:Ct,enableEverGreenWebContent:wt=!1,enableNewTimestampFormatForJAJP:_t,enableHideStoryFeedback:Tt,openPersonalizeWithoutRouter:Ft,telemetryConstants:St={},enabledBadgeTypes:Dt,enabledReasonBadgeTypes:At,disableCardTitleTooltip:zt,enableTitleForTruncate:It,disablePublishTime:Et,useStatSocialTemplate:Bt,enableRubyBottomSocialBar:Lt,enableHoverFollowButton:Mt}=N,{socialBarWCConfigInfo:Nt,videoCardConfigInfo:Rt}=e,Ot=(0,w.cZ)(S),Pt=(null===(a=Ot.metadata)||void 0===a?void 0:a.reasons)&&N.childExperienceReferencesWC.publisherFollowButton,{cardContent:Ht,dynamicCardSize:jt,metadata:Ut,isFirstSectionCard:Vt,type:Wt}=Ot,{grid_area:Gt}=M,{abstract:Zt,id:Jt,destinationUrl:Xt,locale:Qt,title:qt,publishedDateTime:Yt,provider:Kt,defaultAnchorTarget:te,videoFiles:ee,isWorkNewsContent:ie,badges:ne}=Ht,ae=Wt===h.pL.WebContent,re=(0,w.H8)(Ot,k),oe="following"===mt||null==Ot||null===(r=Ot.metadata)||void 0===r?void 0:r.reasons,{badge:le,reasonBadge:se}=(0,C.bA)(et,ne,Dt,oe,At),de=(0,w.nN)(et,N,se);Xt||(0,f.vV)(b.Okb,"Missing destinationUrl for content card","Article ID: "+Jt);const ce=S.recoReasonTag??Ut.recoReasonTag;S&&S.recoId&&Ut&&(Ut.recoId=S.recoId);const pe=(0,l.dj)(rt,Ht,Ut,void 0,ae,{...l.ZZ,...St});var ue;pe&&pe.hide&&pe.hide.contract&&(pe.showFewer=new T.$({...pe.hide.contract,name:"showFewer",action:m.EG.Click,behavior:m.MS.Dislike,type:m.MJ.ActionButton,content:{...null==pe||null===(ue=pe.hide.contract)||void 0===ue?void 0:ue.content}}),pe.hide.contract.ext={recoReasonTag:ce});const ge=0!==(re&n.J.hide)||Tt&&(0!==(re&n.J.showFewer)||0!==(re&n.J.hidden)),he=(null==Ut?void 0:Ut.videoMetadata)||(null==S?void 0:S.videoMetadata),fe=ae&&Boolean(he),be=Wt===h.pL.Video,me="shorts"===(null==S?void 0:S.size),ve=me,ye=Ut?!Ut.reactionSummary:Ot&&!Ot.reactionSummary;let $e=null;const{disable1MonPlusTimestamp:xe,disableNDaysPlusTimestamp:ke}=_.ew.getConfig()||{},Ce=(0,A.YS)(Yt),we=(0,A.Tp)(Yt,ke);xe&&Ce||we||($e=(0,_._L)(Yt,Qt,void 0,_t,!0)),$e=ae&&wt&&(0,w.xk)(Yt)?null:$e,(0,w.Be)(Yt,N);const _e=""!==y.Rb.MarketDir?y.Rb.MarketDir:"ltr";!(!ce||!ce.tag)&&v.YT.addOrUpdateTmplProperty("recoReasonTag","1");const Te=(null==S?void 0:S.containerType)===h.pL.TrendingNowCarousel||(null==S?void 0:S.containerType)===h.pL.NewsTrendingNow,Fe=(0,w.p_)(Kt,ae,N.svgLogoCards&&N.publisherSVGLogosHeight,void 0,fe),Se={altText:Fe&&Fe.name,name:Fe&&Fe.name,publishedDateTime:Et||Te?null:$e,viewCount:Te?P(S):null,src:Fe&&Fe.logoImage,useFollowingButton:!0,providerChannelURL:Fe&&R(Fe)};let De,Ae,ze="";switch(null==se?void 0:se.type.toLowerCase()){case"trending":ze=`${$.T3.StaticsUrl}latest/icons-wc/icons/TrendingLight.svg`;break;case"local":ze=`${$.T3.StaticsUrl}latest/icons-wc/icons/LocationPin.svg`;break;case"followtopic":case"followpublisher":ze=`${$.T3.StaticsUrl}latest/icons-wc/icons/CircleCompleted.svg`}if(le)De={isNonInteractive:!0,iconSrc:"",onClickBadge:()=>{},telemetryTag_badge:"",text:(null==le?void 0:le.localizedLabel)||""};else if(null!=se&&se.type){var Ie;De={iconSrc:ze,onClickBadge:(t,e)=>H(t,e,F,V,null,!Tt,K,Ft,ye,c.hs.WhyAmISee),telemetryTag_badge:null==pe||null===(Ie=pe.whyAmISee)||void 0===Ie?void 0:Ie.getMetadataTag(),text:(null==se?void 0:se.localizedLabel)||""}}const Ee=Boolean(null===(o=Ot.feedMetadata)||void 0===o?void 0:o.segment);p&&(Ae=O(Ot,i,u,bt,{segment_1_1:Ee},N));let Be=Xt;fe&&(Be=(0,z.CW)(encodeURIComponent(Jt),Be)),(0,x.vM)()&&(Be=function(t,e){const i=new E.m((0,D.iA)());let n="?";if(t.indexOf("?")>-1){const e=new E.m(t).getAllSearchParams();for(const t in e)i.delete(t);n=Object.keys(e).length>0?"&":"?"}return e&&B.forEach(t=>{i.delete(t)}),0===Object.keys(i.getAllSearchParams()).length?t:t+n+i.toString()}(Be,!0)),me&&(Be=L(Be,"category","shorts")),(0,w.FU)(Ut)&&(Be=L(Be,"cgfrom","cg_ruby_ntp_carousel_item"));let Le="";N.enableLightGradientV1&&(Le="light-gradient-v1"),N.enableLightGradientV2&&(Le="light-gradient-v2"),N.enableLightGradientV3&&(Le="light-gradient-v3"),N.enableLightGradientV4&&(Le="light-gradient-v4");const Me=ge?(0,g.Eb)(t,re,Jt,rt):{id:Jt,dir:_e,isWorkNewsContent:ie,gridArea:Gt,telemetryContext:pe,defaultAnchorTarget:te,abstract:Zt,cardContent:Ht,cardActionStatus:re,cardActionClickHandler:F,cardActionsTooltips:de,externalVideoFiles:be?ee:void 0,videoMetadata:be?he:void 0,title:qt,titlePrefix:Ot.isFeatured&&et.topStoriesBreakingNewsTagString,contentType:Wt,sdCardActionClickHandler:st,imagePriority:!1,isWebContent:ae,isFirstSectionCard:Vt,metadata:Ut||Ot,openLinksInNewTab:at,enableRichSocialReaction:j,optedOutOfReactions:ye,userSubscriptionData:ct,isPublisherPage:G,locale:Qt,immersiveCard:ve||bt,isNarrowTitleFooterGap:W,mouseenterHandler:it,mouseleaveHandler:nt,actionsArrayOverride:ae&&Ct||void 0,displaySettings:pt,actionMenuLocalizedStrings:gt,cardActionMenuClickCallback:Z,getReplacementCardsCallback:J,goToPersonalizeSettingsCallback:X,heightReadyCallback:Q,hideCardCallback:q,preventDefaultClick:ut,reactionCallback:Y,refreshFeedCallback:K,visualReadinessCallback:u??tt,shareActionHandler:U,feedbackHandler:ht,shareHandler:ft,destinationUrl:Be,wpoMetadata:(null==Ut?void 0:Ut.wpoMetadata)||(null==Ot?void 0:Ot.wpoMetadata),wpoRank:(null==Ut?void 0:Ut.wpoRank)||(null==Ot?void 0:Ot.wpoRank),cardId:(null==Ut?void 0:Ut.cardId)||(null==Ot?void 0:Ot.cardId),type:(null==Ut?void 0:Ut.type)||(null==Ot?void 0:Ot.type),subType:(null==Ut?void 0:Ut.subType)||(null==Ot?void 0:Ot.subType),childTemplateType:"responsive-card",attributionData:Se,providerData:(0,w.p_)(Kt,ae,N.svgLogoCards&&N.publisherSVGLogosHeight),toggleCardActionMenu:(t,e,i,n,a)=>H(t,e,F,V,null,!Tt,K,Ft,ye,i,void 0,n,a,Lt,Mt),mediaData:Ae,socialBarWCConfigInfo:Nt,videoCardConfigInfo:Rt,badgeProps:De,publisherFollowButtonConfigInfo:Pt&&{...Pt,instanceId:`${Pt.instanceId}-${Jt}`},enableCardHideStoryIcon:N&&N.enableCardHideStoryIcon,badge:le,reasonBadge:se,slides:(null==S?void 0:S.slides)||(null==Ut?void 0:Ut.slides),disableCardTitleTooltip:zt,enableTitleForTruncate:It,openLinksInCurrentTab:yt,renderContentIndicator:$t,useStatSocialTemplate:Bt,lightGradientClass:Le};if(null!=vt&&null!==(s=vt.spotlightPreviewTypes)&&void 0!==s&&s.length&&null!=Ut&&Ut.isSpotlightUX){const{additionalLabelText:t,followedEntity:e,followedType:i,spotlightCardTitle:n}=vt;if(Me.childTemplateType="article-breaking-news-card",Me.cardTitle=n,Me.additionalLabelText=t,Me.followedType=i,Me.followedEntity=e,Me.getSpotlightMenuItems=ot,Me.supportedSdCardActionMenuItems=lt,Me.isSpotlightZone=dt,Me.recoId=S&&S.recoId||Ut&&Ut.recoId,et){const{bingVideoNoPreviewStr:t,bingVideoPreviewStr:i,disableNotification:n,followingText:a,followConfirmationText:r}=et;Me.followButtonTitle=a,Me.followingButtonHoverTip=r&&(0,I.GP)(r,e),Me.disableNotificationText=n,Me.videoNoPreviewLabel=t,Me.videoPreviewLabel=i}}if(Me.ruby=xt,Me.underlineTitle=kt,Me.segment=Boolean(null===(d=Ot.feedMetadata)||void 0===d?void 0:d.segment),xt&&Lt){const{reactionSummary:t,commentSummary:e,commentStatus:i}=Ut;Me.rubySocialBarData=(0,w.Qw)(t,e,i)}return xt&&(0,w.FU)(Ut)&&(Me.hideLikeButton=!0),Me}function R(t){const e=(null==t?void 0:t.name)??"page",i=(null==t?void 0:t.profileId)??"";return(0,F.Hg)(i,e,"source")}function O(t,e,i,n,a,o){if(!e)return;let l=!1,c=p.n._268x140;e!==r.uE._05u&&e!==r.uE._1x_1y||(c=o.enableHomePageStyle?n?p.n._306x256:p.n._104x84:p.n._90x90),e===r.uE._075u&&(c=p.n._268x94),e===r.uE._2x_2y&&(c=null!=o&&o.enableHomePageStyle?p.n._628x372:p.n._612x304),e===r.uE._1x_2y&&(c=n?p.n._300x304:s.L._300x156),o.kumoStyle&&(c=(0,u.F)(e,n)||{width:260,height:136},a.segment_1_1&&(c={width:260,height:260}));const g=()=>i(3,d.j.image);return function(t,e,i,n,a,r){var o;const l=(0,w.Ie)(t);if(!l)return null;const s=(0,S.oQ)(null==l?void 0:l.url,{width:e.width,height:e.height,focalRegion:l.focalRegion,enableDpiScaling:!0,devicePixelRatio:(0,D.mZ)(),enableWebpFormat:r});return{altText:null===(o=t.cardContent)||void 0===o?void 0:o.title,loadCallback:i,errorCallback:n,src:s}}(t,c,g,(t,e)=>{l||(l=!0,(0,f.vV)(b.qog,"Error fetching source","Source: "+t+", Article ID: "+e),g())},0,o.enableWebpFormat)}function P(t){var e;return(0,k.ZV)(null==t||null===(e=t.metadata)||void 0===e||null===(e=e.consumptionSummary)||void 0===e?void 0:e.totalViews)}function H(t,e,i,a){var r;let o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],l=arguments.length>5&&void 0!==arguments[5]&&arguments[5],s=arguments.length>6?arguments[6]:void 0,d=arguments.length>7?arguments[7]:void 0,p=arguments.length>8?arguments[8]:void 0,u=arguments.length>9?arguments[9]:void 0,g=arguments.length>10?arguments[10]:void 0,h=arguments.length>11?arguments[11]:void 0,f=arguments.length>12?arguments[12]:void 0,b=arguments.length>13?arguments[13]:void 0,m=arguments.length>14?arguments[14]:void 0,v=e,y=t;e.detail&&e.detail.event&&e.detail.data&&(v=e.detail.event,y=this.getListCardMetadata(e.detail.data),o=!0),(y.isLauncher||y.isThirdParty)&&y.useMobile&&(v.preventDefault(),v.stopPropagation());const{cardSize:$,id:x,title:k,destinationUrl:C,mediaData:_,providerData:T,cardActionStatus:F,telemetryContext:{seeMore:S},actionsArrayOverride:D,metadata:A,isLauncher:z,isThirdParty:I,shareHandler:E,feedbackHandler:B,panoCaption:L,isShoppingArticleCard:M,locale:N,ruby:R}=y,O=null!=g&&g.overrideReasonsDisplay?[{type:c.QK.trending,rank:0},{type:c.QK.u2u,rank:1}]:A.reasons,P={cardSize:$,enabled:!0,buttonElement:v.currentTarget,fromRightClick:f,article:{id:x,headlineTitle:k,href:C,locale:N,image:{alt:_&&_.altText,src:_&&_.src},provider:{id:T.id,profileId:T.profileId,name:T.name,image:{alt:T.name,src:T.logoImage}},abstract:A.abstract,reasons:O,source:A.source},parentTelemetryObject:S,onStatusChange:i,cardStatus:F,updateFeedOnHide:o,disableHoverSquare:!0,showToast:l,refreshFeedCallback:s,openPersonalizeWithoutRouter:d,actionsArrayOverride:D,isReactionsOptedOut:p,isLauncher:z,isThirdParty:I,shareHandler:E,feedbackHandler:B,debugId:A.debugId,dialogToOpen:u,interactCard:h,useCommunityReactionsForShowMoreLess:R,showAiDisclaimerAttribution:null==A||null===(r=A.displayAttributes)||void 0===r?void 0:r.showTitleDisclaimer};if(L||M)P.actionsArrayOverride=[n.X.ManageInterests,n.X.Divider,n.X.Report];else if(R&&(0,w.FU)(A))P.actionsArrayOverride=[n.X.WhyAmISee,n.X.Report];else if(R&&(m||b)){const t=[n.X.Mute,n.X.Save,n.X.Divider,n.X.WhyAmISee,n.X.Report];let e=null;m&&b?e=null:b?e=n.X.FollowPublisher:m&&(e=n.X.ManageInterests),P.actionsArrayOverride=e?[e,...t]:t}f?window.dispatchEvent(new CustomEvent("contentCardRightClick",{detail:{actionState:P,event:v,initCardAction:a}})):a(P)}},37842:function(t,e,i){"use strict";i.d(e,{N:function(){return r}});var n=i(72706),a=i(19608);const r={getFeedDataForCard:t=>function(t){var e;const{configOptions:i,parentTelemetryObject:n,cardMetadata:r,pollsCardConfigInfo:o,goToPersonalizeSettingsCallback:l,refreshSDCardSection:s}=t,d=o||i&&i,c={id:"pollsCard",childTemplateType:"polls-card",parentTelemetryObject:n,pollsCardConfigInfo:d,fetchedData:r.data,goToPersonalizeSettingsCallback:l,refreshSDCardSection:s};return(0,a.bw)({id:"pollsCard",experienceType:null==d||null===(e=d.configRef)||void 0===e?void 0:e.experienceType,mapperArgs:t},c)}(t),viewTemplate:n.d}},38260:function(t,e,i){"use strict";var n,a;i.d(e,{j:function(){return n},o:function(){return a}}),function(t){t.OneColumn="1_column",t.TwoColumn="2_column"}(n||(n={})),function(t){t.LightDefault="lightDefault",t.LightNarrow="lightNarrow",t.LightLarge="lightLarge",t.LightWide="lightWide",t.LightStyle2="light2"}(a||(a={}))},39771:function(t,e,i){"use strict";i.d(e,{T:function(){return r}});var n=i(96950),a=i(11622);const r=n.qy`
${t=>{var e,i;return(0,a.yN)(t.configInfo,{includeTelemetryTag:!1,properties:{parentTelemetry:t.parentTelemetryObject,wpoMetadata:t.wpoMetadata,cardSize:t.cardSize,mapperArgs:t.mapperArgs,refreshSDCardSection:null===(e=t.mapperArgs)||void 0===e?void 0:e.refreshSDCardSection,goToPersonalizeSettingsCallback:null===(i=t.mapperArgs)||void 0===i?void 0:i.goToPersonalizeSettingsCallback,hasLoadedCallback:t.hasLoadedCallback},attributes:{style:`grid-area:${t.gridArea};contain: unset;content-visibility: visible;`,class:`${t.cardSize} travel-destination-card-container`}})}}
`},40562:function(t,e,i){"use strict";i.d(e,{z:function(){return tt}});var n=i(56911),a=i(48751),r=i(45476),o=i(64003),l=i(37302),s=i(86856),d=i(22131),c=i(74849),p=i(73477),u=i(88985),g=i(43103);const h=c.A`
:host{--background-gradient-angle:44.24deg;--inline-actions-gradient-angle:270deg;--inline-actions-dynamic-gradient-angle:90deg;--feeds-2-light-background-gradient-angle:93.96deg;--feeds-2-dark-background-gradient-angle:138.52deg}:host msft-article .inline-actions{right:0}:host([layout="thumb"]) msft-article .inline-actions,:host([layout="compactthumb"]) msft-article .inline-actions{right:88px}:host([layout="thumb"][card-size="_2x_2y"]) msft-article .inline-actions,:host([layout="compactthumb"][card-size="_2x_2y"]) msft-article .inline-actions{right:72px}:host([layout="thumb"][card-size="_1x_2y"]) msft-article .inline-actions,:host([layout="compactthumb"][card-size="_1x_2y"]) msft-article .inline-actions,:host([layout="thumb"][card-size="_1x_3y"]) msft-article .inline-actions,:host([layout="compactthumb"][card-size="_1x_3y"]) msft-article .inline-actions{right:65px}:host .icon-tooltip{left:15px}`,f=c.A`
:host{--background-gradient-angle:-44.24deg;--inline-actions-gradient-angle:-270deg;--feeds-2-light-background-gradient-angle:-93.96deg;--feeds-2-dark-background-gradient-angle:-138.52deg}:host msft-article .inline-actions{left:0}:host([layout="thumb"]) msft-article .inline-actions,:host([layout="compactthumb"]) msft-article .inline-actions{left:88px}:host([layout="thumb"][card-size="_2x_2y"]) msft-article .inline-actions,:host([layout="compactthumb"][card-size="_2x_2y"]) msft-article .inline-actions{left:72px}:host([layout="thumb"][card-size="_1x_2y"]) msft-article .inline-actions,:host([layout="compactthumb"][card-size="_1x_2y"]) msft-article .inline-actions,:host([layout="thumb"][card-size="_1x_3y"]) msft-article .inline-actions,:host([layout="compactthumb"][card-size="_1x_3y"]) msft-article .inline-actions{left:65px}:host msft-article .inline-actions .actions-button{margin:4px 0 4px 8px}:host .icon-tooltip{right:15px}`,b=c.A`
:host([layout="ribbonCarousel"]){border-radius:0}:host([layout="ribbonCarousel"][background="gradient"]){background:linear-gradient(var(--ribbon-carousel-gradient-background))}:host([layout="ribbonCarousel"][background="inheritSection"]) fluent-horizontal-scroll{display:block;margin:0 16px}:host([layout="ribbonCarousel"][feeds-2-carousel="true"]) fluent-horizontal-scroll{margin-inline:16px}:host([layout="ribbonCarousel"][card-size="_1x_1y"]) .inner-content{width:300px}:host([layout="ribbonCarousel"][card-size="_2x_1y"]) .inner-content{width:612px}:host([layout="ribbonCarousel"][card-size="_3x_1y"]) .inner-content{width:924px}:host([layout="ribbonCarousel"][card-size="_4x_1y"]) .inner-content{width:1236px}:host([layout="ribbonCarousel"]) .inner-content{overflow:visible}:host([layout="ribbonCarousel"][background="inheritSection"]) .inner-content{width:100%}:host([layout="ribbonCarousel"][feeds-2-carousel="true"]) .inner-content{padding-bottom:16px}:host([layout="ribbonCarousel"]) .heading-container{padding-top:10px;padding-bottom:2px}:host([layout="ribbonCarousel"][feeds-2-carousel="true"]) .heading-container{padding-bottom:0;padding-top:0}:host([layout="ribbonCarousel"][card-size="_1x_2y"]) .heading-container{padding-top:12px}:host([layout="ribbonCarousel"]) .heading{font-size:var(--type-ramp-plus-1-font-size);font-weight:600;line-height:var(--type-ramp-plus-1-line-height)}:host([layout="ribbonCarousel"][feeds-2-carousel="true"]) .heading{font-size:var(--type-ramp-minus-1-font-size,12px);line-height:var(--type-ramp-minus-1-line-heigh,16px);display:inline-flex;padding:16px 16px;font-weight:400}:host([layout="ribbonCarousel"][feeds-2-carousel="true"]) .heading-container{align-items:baseline}:host([layout="ribbonCarousel"][feeds-2-carousel="true"]) .heading svg{margin-inline-end:8px}:host([layout="ribbonCarousel"][feeds-2-carousel="true"]) .heading::after{content:"";position:absolute;top:0px;right:0px;left:0px;height:160px;width:612px;z-index:1}:host([layout="ribbonCarousel"]) fluent-horizontal-scroll{max-width:-webkit-fill-available;max-width:-moz-available;--scroll-item-spacing:0}:host([layout="ribbonCarousel"][feeds-2-carousel="true"]) fluent-horizontal-scroll{z-index:2}:host([layout="ribbonCarousel"]) msft-article{height:102px;min-width:300px;white-space:initial}:host([layout="ribbonCarousel"][feeds-2-carousel="true"]) msft-article{height:96px;width:272px;min-width:272px;background:var(--article-backplate);border-radius:8px;margin-inline-end:8px}:host([layout="ribbonCarousel"]) msft-article,:host([layout="ribbonCarousel"][background="inheritSection"]) msft-article{margin-inline-end:12px}:host([layout="ribbonCarousel"]) msft-article:last-child,:host([layout="ribbonCarousel"][background="inheritSection"]) msft-article:last-child{margin-inline-end:0}:host([layout="ribbonCarousel"]) msft-article .image{height:60px;margin-top:4px;width:60px}:host([layout="ribbonCarousel"]) msft-article .image{height:80px;margin-top:0px;width:68px}:host([layout="ribbonCarousel"]) msft-article::part(heading){-webkit-line-clamp:var(--heading-max-lines,3)}:host([layout="ribbonCarousel"][feeds-2-carousel="true"]) msft-article::part(heading){--msft-article-heading-font-size:14px;--msft-article-heading-line-height:20px;margin-top:20px;width:180px}:host([layout="ribbonCarousel"]) msft-article::part(article){height:88px}:host([layout="ribbonCarousel"][feeds-2-carousel="true"]) msft-article::part(article){height:80px;padding:8px}:host([layout="ribbonCarousel"]) msft-article::part(attribution){position:absolute;bottom:4px}:host([layout="ribbonCarousel"][feeds-2-carousel="true"]) msft-article::part(attribution),:host([layout="ribbonCarousel"][feeds-2-carousel="true"]) msft-article::part(actions){top:8px}:host([layout="ribbonCarousel"]) msft-article .inline-actions{bottom:0}:host([layout="ribbonCarousel"][feeds-2-carousel="true"]) msft-article .inline-actions{top:-8px;inset-inline-end:72px}:host([layout="ribbonCarousel"][background="gradient"]) msft-article.social-reaction-enabled .inline-actions{background:linear-gradient(var(--inline-actions-ribbon-carousel-gradient-background))}:host([layout="ribbonCarousel"][background="gradient"]) social-bar-wc::part(reaction-menu-container){background:var(--background-ribbonCarousel-social-bar)}:host([layout="ribbonCarousel"][background="gradient"][feeds-2-carousel="true"]) social-bar-wc::part(reaction-menu-container){top:0px;animation:none}:host .card-content{display:flex;overflow-x:hidden}:host .card-content msft-article.carousel{display:block}:host([layout="ribbonCarousel"][background="inheritSection"]) ::part(viewport){overflow-y:hidden}:host([layout="ribbonCarousel"]) .next,:host([layout="ribbonCarousel"]) .previous{width:32px;height:32px;border-color:transparent;border-radius:999px;box-shadow:0px 3.2px 7.2px rgb(0 0 0 / 13%),0px 0px 3.8px rgb(0 0 0 / 11%);background:var(--neutral-fill-stealth-rest)}:host([layout="ribbonCarousel"][feeds-2-carousel="true"]) .next,:host([layout="ribbonCarousel"][feeds-2-carousel="true"]) .previous{height:38px;width:16px;fill:var(--neutral-foreground-hint);backdrop-filter:blur(60px);border-radius:3px;box-shadow:none}:host([layout="ribbonCarousel"][feeds-2-carousel="true"]) .next,:host([layout="ribbonCarousel"][feeds-2-carousel="true"]) .previous{opacity:1}:host([layout="ribbonCarousel"][feeds-2-carousel="true"]) .next:hover,:host([layout="ribbonCarousel"][feeds-2-carousel="true"]) .previous:hover{fill:var(--neutral-foreground-rest)}:host([layout="ribbonCarousel"][feeds-2-carousel="true"]) .next{margin-inline-start:16px}:host([layout="ribbonCarousel"][feeds-2-carousel="true"]) .previous{margin-inline-end:16px}:host([layout="ribbonCarousel"][feeds-2-carousel="true"]) .next::before,:host([layout="ribbonCarousel"][feeds-2-carousel="true"]) .previous::before{border-radius:3px;background:var(--feeds-2-flipper-background)}:host([layout="ribbonCarousel"][background="inheritSection"]) .previous{margin-inline-start:10px}:host([layout="ribbonCarousel"][background="inheritSection"]) .next{margin-inline-end:10px}:host([layout="ribbonCarousel"][background="gradient"]):not([feeds-2-carousel="true"]) .previous{margin-inline-start:36px}:host([layout="ribbonCarousel"][background="gradient"]):not([feeds-2-carousel="true"]) .next{margin-inline-end:36px}:host([layout="ribbonCarousel"]) .next::before,:host([layout="ribbonCarousel"]) .previous::before{border-color:transparent}`,m=c.A`
:host([layout*="rightrail"]) .heading{font-size:var(--type-ramp-minus-1-font-size);line-height:var(--type-ramp-minus-1-line-height);color:var(--neutral-foreground-hint)}:host([layout="rightrail"]) msft-article .image{height:62px;width:62px}:host([layout="tallrightrail"]) msft-article .image{height:76px;width:76px}:host([layout="tallrightrail"]) msft-article::part(heading){-webkit-line-clamp:var(--heading-max-lines,3)}:host([layout*="rightrail"]) .heading-container{text-transform:uppercase}:host([layout*="rightrail"]) .heading{padding-left:16px;padding-right:16px}:host([layout="tallrightrail"]) msft-article{height:92px}:host([layout*="rightrail"]) msft-article::part(article){padding:8px 16px}:host([layout*="rightrail"]) social-bar-wc::part(button-bg):hover,:host([layout*="rightrail"]) social-bar-wc::part(button-bg):hover{background-color:initial}:host([layout="tallrightrail"]) msft-article.social-reaction-enabled .inline-actions{min-width:76px}:host([layout="rightrail"]) msft-article.social-reaction-enabled .inline-actions{min-width:62px}`,v=c.A`
:host([background="gradient"]){--neutral-fill-stealth-hover:var(--gradient-hover);background:linear-gradient(var(--gradient-background));background-color:var(--background-color-dark-mode)}:host([background="gradient"][layout="ribbonCarousel"][feeds-2-carousel="true"]){background:linear-gradient(var(--feeds-2-gradient-background))}:host([layout="normal"][background="gradient"][card-size="_3x_2y"]) msft-article{--neutral-fill-stealth-hover:transparent;--inline-actions-gradient-background:transparent;--inline-actions-alt-gradient-background:transparent}:host([layout="normal"][background="gradient"]) msft-article::part(actions){background:transparent}:host([layout="thumb"][background="gradient"]) msft-article:hover .inline-actions,:host([layout="thumb"][background="gradient"]) msft-article:focus-within .inline-actions,:host([layout="thumb"][background="gradient"]) msft-article:hover .inline-actions social-bar-wc::part(social-bar),:host([layout="thumb"][background="gradient"]) msft-article:focus-within .inline-actions social-bar-wc::part(social-bar){background:none}:host([background="gradient"]) msft-article.social-reaction-enabled:nth-of-type(1) .inline-actions{background:linear-gradient(var(--inline-actions-thumb-gradient-background-1))}:host([background="gradient"]) msft-article.social-reaction-enabled:nth-of-type(2) .inline-actions{background:linear-gradient(var(--inline-actions-thumb-gradient-background-2))}:host([background="gradient"][card-size="_1x_3y"]) msft-article.social-reaction-enabled:nth-of-type(2) .inline-actions,:host([background="gradient"]) msft-article.social-reaction-enabled:nth-of-type(3) .inline-actions{background:linear-gradient(var(--inline-actions-thumb-gradient-background-3))}:host([background="gradient"]) msft-article.social-reaction-enabled:nth-of-type(4) .inline-actions{background:linear-gradient(var(--inline-actions-thumb-gradient-background-4))}:host([background="gradient"][card-size="_1x_3y"]) msft-article.social-reaction-enabled:nth-of-type(4) .inline-actions,:host([background="gradient"]) msft-article.social-reaction-enabled:nth-of-type(5) .inline-actions{background:linear-gradient(var(--inline-actions-thumb-gradient-background-5))}:host([background="gradient"]) msft-article.social-reaction-enabled:nth-of-type(6) .inline-actions{background:linear-gradient(var(--inline-actions-thumb-gradient-background-6))}:host([layout="compact"][background="gradient"]) msft-article.social-reaction-enabled:nth-of-type(1) .inline-actions{background:linear-gradient(var(--inline-actions-compact-gradient-background-1))}:host([layout="compact"][background="gradient"]) msft-article.social-reaction-enabled:nth-of-type(2) .inline-actions{background:linear-gradient(var(--inline-actions-compact-gradient-background-2))}:host([layout="compact"][background="gradient"]) msft-article.social-reaction-enabled:nth-of-type(3) .inline-actions{background:linear-gradient(var(--inline-actions-compact-gradient-background-3))}:host([layout="compactthumb"][background="gradient"]) msft-article.social-reaction-enabled:nth-of-type(1) .inline-actions{background:linear-gradient(var(--inline-actions-thumb-gradient-background-1))}:host([layout="compactthumb"][background="gradient"]) msft-article.social-reaction-enabled:nth-of-type(2) .inline-actions{background:linear-gradient(var(--inline-actions-thumb-gradient-background-3))}:host([layout="compactthumb"][background="gradient"]) msft-article.social-reaction-enabled:nth-of-type(3) .inline-actions{background:linear-gradient(var(--inline-actions-thumb-gradient-background-5))}:host([layout="stacked"][background="gradient"]) msft-article.social-reaction-enabled:nth-of-type(1) .inline-actions{background:linear-gradient(var(--inline-actions-stacked-gradient-background-1))}:host([layout="stacked"][background="gradient"]) msft-article.social-reaction-enabled:nth-of-type(2) .inline-actions{background:linear-gradient(var(--inline-actions-stacked-gradient-background-2))}:host([layout="stacked"][background="gradient"]) msft-article.social-reaction-enabled:nth-of-type(3) .inline-actions{background:linear-gradient(var(--inline-actions-stacked-gradient-background-3))}:host([layout="stacked"][background="gradient"]) msft-article.social-reaction-enabled:nth-of-type(4) .inline-actions{background:linear-gradient(var(--inline-actions-stacked-gradient-background-4))}:host([layout="stacked"][background="gradient"]) msft-article.social-reaction-enabled:nth-of-type(5) .inline-actions{background:linear-gradient(var(--inline-actions-stacked-gradient-background-5))}:host([layout="stacked"][background="gradient"]) msft-article.social-reaction-enabled:nth-of-type(6) .inline-actions{background:linear-gradient(var(--inline-actions-stacked-gradient-background-6))}:host([layout="ribbonCarousel"][background="gradient"][feeds-2-carousel="true"]) msft-article.social-reaction-enabled .inline-actions{background:linear-gradient(var(--inline-actions-feeds-2-gradient-background))}:host([background="gradient"]):host msft-article .inline-actions .actions-button:${p.N}{background:transparent}:host([background="gradient"]) msft-article .inline-actions .divider{border-left:1px solid rgba(0,0,0,0.09);margin-top:2px}:host([background="gradient"]) msft-article:hover,:host([background="gradient"]) msft-article:focus-within,:host([background="gradient"]) social-bar-wc::part(button-bg):hover,:host([background="gradient"]) msft-article .inline-actions .actions-button:hover{background:var(--gradient-hover)}:host([background="gradient"]) social-bar-wc::part(reaction-menu-container){background:var(--background-social-bar)}:host([background="gradient"]) msft-article.filled-icon-hover social-bar-wc::part(button-bg):hover,:host([background="gradient"]) msft-article.filled-icon-hover social-bar-wc::part(comments-count-button):hover,:host([background="gradient"]) msft-article.filled-icon-hover .inline-actions .actions-button:hover{background:transparent}`,y=c.A`
:host{--msft-article-heading-line-height:22px;display:flex;height:100%;border-radius:calc(var(--layer-corner-radius) * 1px)}:host .inner-content{display:flex;flex-wrap:wrap;justify-content:space-between;margin:0 auto;overflow:var(--overflow,hidden)}:host msft-article .image{border-radius:4px;margin-inline-start:6px;overflow:hidden}:host msft-article .image{height:72px;width:72px}:host([card-size="_2x_2y"]) msft-article .image{height:59px;width:59px}:host([card-size="_1x_2y"]) msft-article .image,:host([card-size="_1x_3y"]) msft-article .image{height:52px;width:52px}:host([layout="normal"]),:host([layout="thumb"]),:host([layout*="rightrail"]){padding-left:3px;padding-right:3px}:host([layout="normal"][class="infopane-anaheim-design"]),:host([layout="thumb"][class="infopane-anaheim-design"]),:host([layout*="rightrail"][class="infopane-anaheim-design"]){padding-left:2px;padding-right:2px}:host([card-size="_3x_2y"]){padding-left:9px;padding-right:9px}:host([card-size="_3x_2y"]) msft-article{width:444px}:host([layout="compact"]),:host([layout="compactthumb"]),:host([layout*="rightrail"]){--msft-article-heading-font-size:14px;--msft-article-heading-line-height:20px}:host([layout="compact"]) msft-article{height:80px}:host([layout="ribbonCarousel"]) msft-article,:host([layout*="rightrail"]) msft-article{padding-bottom:0px}:host([layout="normal"]) msft-article,:host([layout="thumb"]) msft-article{padding-bottom:0px;margin-bottom:6px}:host msft-article::part(heading){-webkit-line-clamp:var(--heading-max-lines,2)}:host msft-article::part(heading)::after{height:100%;width:100%}:host msft-article.crawled-content::part(heading){-webkit-line-clamp:var(--heading-max-lines,1)}:host .heading-container{width:100%;position:relative;display:flex;align-items:center}:host .heading-container.anaheim-infopane{padding-top:12px;padding-bottom:6px}:host .anaheim-infopane-bottom-padding{height:8px;width:100%}:host([card-size="_3x_2y"]) .heading-container{padding-left:3px;padding-right:3px}:host .heading{font-size:var(--type-ramp-base-font-size);line-height:var(--type-ramp-base-line-height);font-weight:600;color:${a.l};margin:0;padding:16px 12px 10px;width:100%}:host([layout="normal"]) .heading,:host([layout="thumb"]) .heading{padding-left:9px;padding-right:9px}:host .heading-link{text-decoration:none}:host .heading-icon-container{cursor:pointer;display:inline-block;fill:${a.l};padding:0 8px;height:18px}:host .heading-icon-container:hover .icon-tooltip,:host .heading-icon-container:focus .icon-tooltip{visibility:visible;opacity:1}:host .icon-tooltip{background-color:${r.wO};
    border-radius: 4px;
    color: ${a.l};font-size:var(--type-ramp-base-font-size);line-height:var(--type-ramp-base-line-height);opacity:0;padding:8px;position:absolute;text-transform:initial;top:40px;transition:opacity 0.3s;visibility:hidden;width:200px;z-index:1}:host([layout="compact"]) .heading{text-transform:uppercase;color:${o.c};font-size:var(--type-ramp-minus-1-font-size);line-height:var(--type-ramp-minus-1-line-height)}:host([layout="compact"]) .heading-icon-container{fill:${o.c}}:host msft-article{border-radius:0;height:80px;padding-bottom:6px;width:300px;z-index:0}:host([layout="stacked"]) msft-article::part(text){display:inline-flex}:host([layout="stacked"]) msft-article::part(abstract){margin-inline-start:0px;width:90px}:host([layout="stacked"][card-size="_2x_2y"]) msft-article.stacked-fromweb::part(heading){max-width:470px}:host([layout="stacked"][card-size="_3x_2y"]) msft-article.stacked-fromweb::part(heading){max-width:770px}:host([layout="stacked"]) msft-article{height:36px;margin:0 9px;padding:0;width:100%}:host([layout="stacked"]) msft-article:nth-of-type(6){margin-bottom:6px;padding:0}:host([layout="stacked"]) msft-article::part(heading){display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:300px;margin-inline-start:4.5px}:host([layout="stacked"][card-size="_2x_2y"]) msft-article::part(heading){width:542px}:host([layout="stacked"][card-size="_3x_2y"]) msft-article::part(heading){width:832px}:host msft-article::part(article){border-radius:0;grid-gap:0;grid-template-columns:1fr auto;padding:8px 12px;overflow:visible}:host([layout="normal"]) msft-article::part(article),:host([layout="thumb"]) msft-article::part(article){height:64px}:host([layout="thumb"][card-size="_3x_2y"]) msft-article::part(article){padding:4px 12px}:host([layout="normal"]) msft-article::part(text),:host([layout="thumb"]) msft-article::part(text){max-height:calc(var(--msft-article-heading-line-height,24px) * 2);overflow:hidden}:host([layout="normal"]) msft-article::part(attribution),:host([layout="stacked"]) msft-article::part(attribution),:host([layout="compactthumb"]) msft-article::part(attribution),:host([layout="thumb"]) msft-article::part(attribution){display:inline-block;margin-inline-end:4px;vertical-align:top;width:16px}:host([layout="normal"]) msft-article::part(heading),:host([layout="compactthumb"]) msft-article::part(heading),:host([layout="thumb"]) msft-article::part(heading),:host([layout*="rightrail"]) msft-article::part(heading){width:calc(100% - 31px);display:-webkit-inline-box;margin-inline-start:3.5px}:host([layout*="rightrail"]) msft-article::part(heading){width:calc(100% - 26px)}:host msft-article::part(abstract){margin-inline-start:24px;-webkit-line-clamp:var(--abstract-max-lines,1);margin-top:-2px;color:var(--msft-card-font-color)}:host([layout="compact"][card-size="_1x_2y"]) msft-article::part(abstract){margin-inline-start:0}:host msft-article.crawled-content::part(abstract){color:${o.c};font-size:12px;line-height:16px;margin-top:4px}:host([layout="thumb"]) msft-article.crawled-content::part(abstract),:host([layout*="rightrail"]) msft-article.crawled-content::part(abstract){margin-top:0}:host([layout="normal"]) msft-article::part(actions),:host([layout="thumb"]) msft-article::part(actions),:host([layout="ribbonCarousel"]) msft-article::part(actions){position:absolute;bottom:0;padding-bottom:4px;padding-top:1px;width:calc(100% - 20px);background:var(--fill-color)}:host([layout="normal"]) msft-article:hover::part(actions),:host([layout="normal"]) msft-article:focus-within::part(actions),:host([layout="thumb"]) msft-article::part(actions),:host([layout="thumb"]) msft-article:hover::part(actions),:host([layout="thumb"]) msft-article:focus-within::part(actions),:host([layout="ribbonCarousel"]) msft-article::part(actions),:host([layout="ribbonCarousel"]) msft-article:hover::part(actions),:host([layout="ribbonCarousel"]) msft-article:focus-within::part(actions){background:transparent}:host([layout="thumb"][card-size="_3x_2y"]) msft-article::part(actions){bottom:10px}:host msft-article msft-attribution{display:grid;grid-template-columns:16px auto auto;grid-gap:8px;margin-bottom:4px;position:relative}:host([layout="normal"]) msft-article msft-attribution,:host([layout="thumb"]) msft-article msft-attribution{height:20px;padding-top:4px}:host([layout="thumb"]) msft-article msft-attribution{grid-template-columns:16px auto 65px}:host([layout="ribbonCarousel"][feeds-2-carousel="true"]) msft-article msft-attribution{max-width:180px}:host msft-article .inline-actions{align-items:center;background:${r.oO};display:grid;gap:4px;grid-template-columns:auto auto auto;height:28px;justify-content:end;margin:4px 0;opacity:0;padding:0;padding-inline-start:40px;position:absolute;width:auto;z-index:10}:host([layout="thumb"]) msft-article .inline-actions,:host([layout="compactthumb"]) msft-article .inline-actions{height:23px;margin:0}:host([layout="compact"]) msft-article .inline-actions,:host([layout="stacked"]) msft-article .inline-actions,:host([layout*="rightrail"]) msft-article .inline-actions{top:0}:host([layout="normal"]) msft-article .inline-actions{bottom:0;margin-bottom:5px;height:24px}:host([layout="compact"]) msft-article .inline-actions,:host([layout*="rightrail"]) msft-article .inline-actions{margin-inline-end:4px}:host([layout="stacked"]) msft-article .inline-actions{background:var(--neutral-fill-stealth-hover);margin-inline-end:12px}:host msft-article:hover,:host msft-article:focus-within{background:${r.oO};border-radius:4px}:host msft-article:hover .inline-actions,:host msft-article:focus-within .inline-actions{opacity:1}:host msft-article .inline-actions .actions-button{background:transparent;border:none;border-radius:4px;color:currentColor;cursor:pointer;fill:currentColor;height:24px;justify-content:center;min-width:24px;padding:0;width:24px}:host msft-article .inline-actions .actions-button svg{width:16px;height:16px}:host msft-article .inline-actions .actions-button:hover,:host msft-article .inline-actions .actions-button:${p.N}{background:${l.Xt}}:host msft-article .inline-actions .divider{height:11px;margin:-3px 0 0;border-left:1px solid ${l.Xt}}:host([layout="compact"]) msft-article .inline-actions .divider{margin-top:-2px}:host social-bar-wc::part(social-bar){align-self:start;opacity:1;background:none;height:24px}:host([layout="normal"]) social-bar-wc::part(react-button-container),:host([layout="normal"]) social-bar-wc::part(active-button-container){height:24px;padding:0;border-radius:16px}:host([layout="normal"]) social-bar-wc::part(button-bg){padding-top:4px;height:24px}:host msft-article.filled-icon-hover .inline-actions .actions-button:hover > svg > path:nth-child(1){transition:all 0.5s;d:path("${u.i_}")}:host msft-article.filled-icon-hover .inline-actions .actions-button svg{width:20px;height:20px}.attribution-provider-clickable{z-index:4;display:flex;margin:0 -23px}.attribution-icon-clickable{color:unset;text-decoration:none}.attribution-provider-name{unicode-bidi:embed}.attribution-provider-name:hover{text-decoration:underline}.attribution-provider-name .attribution-provider-logo-available:hover{text-decoration:underline}.attribution-provider-logo-available{margin-inline-start:10px}.attribution-published-time{margin:0 3px}.attribution-provider-not-clickable{margin:0 5px}.ts-breaking-news-tag{background-color:var(--accent-fill-rest);border-radius:3px;color:white;padding:0 5px}.breaking-news-red-tag{background-color:#C50F1F !important}.spotlight-flash-bg{animation:spotlight-ts-bg-animation 2000ms cubic-bezier(0,0,1,1) 667ms}@keyframes .spotlight-ts-bg-animation{0%{border:2px solid #8FA2FF;background-color:#8FA2FF26;transition-timing-function:cubic-bezier(0,0,1,1)}100%{transition-timing-function:cubic-bezier(0,0,1,1)}}${b}

${m}
`.withBehaviors(new s.t(h,f),(0,d.mr)(c.A` :host msft-article .inline-actions{background:currentColor !important;padding-inline-start:12px !important}.attribution-provider-logo{forced-color-adjust:none;background:#FFFFFF}`),(0,d.C7)(c.A` :host(.infopane-anaheim-design){--neutral-foreground-rest:#2B2B2B;--fill-color:#FFFFFF;--neutral-fill-hover:#E5E5E5;--neutral-fill-stealth-hover:#F2F2F2;background:#FFFFFF}`)),$=c.A` :host msft-article.social-reaction-enabled .inline-actions{background:linear-gradient(270deg,rgb(var(--neutral-fill-stealth-hover-rgb)) 0.01%,rgb(var(--neutral-fill-stealth-hover-rgb)) 76.82%,rgba(var(--neutral-fill-stealth-hover-rgb),0.8) 88.69%,rgba(var(--neutral-fill-stealth-hover-rgb),0) 100%)}`.withBehaviors((0,d.C7)(c.A` :host{--neutral-fill-stealth-hover-rgb:242,242,242}`),(0,d.G2)(c.A` :host{background:#3b3b3b;--fill-color:#3b3b3b;--neutral-foreground-hint:#a7a7a7;--neutral-foreground-rest:#ffffff;--neutral-fill-stealth-hover:#474747}:host msft-article:hover,:host msft-article:focus-within{background:#474747}:host{--neutral-fill-stealth-hover-rgb:71,71,71}.spotlight-flash-bg{animation:spotlight-bg-animation 2000ms cubic-bezier(0,0,1,1) 667ms}@keyframes spotlight-bg-animation{0%{border:2px solid #8FA2FF;background-color:#8FA2FF4D;transition-timing-function:cubic-bezier(0,0,1,1)}100%{transition-timing-function:cubic-bezier(0,0,1,1)}}`)),x=c.A`
${v}
`.withBehaviors((0,d.mr)(c.A` :host{forced-color-adjust:auto}@media (forced-colors:active){:host([background="gradient"]) social-bar-wc::part(button-bg):hover,:host([background="gradient"]) social-bar-wc::part(button-bg):focus-within,:host([background="gradient"]) msft-article.filled-icon-hover social-bar-wc::part(button-bg):hover,:host([background="gradient"]) msft-article.filled-icon-hover social-bar-wc::part(button-bg):focus-within{color:buttonface;background-color:highlight}}`),new g.N(c.A` :host{--article-backplate:rgba(255,255,255,0.7);--background-color-dark-mode:unset;--background-social-bar:#FFFFFF;--background-ribbonCarousel-social-bar:#FFFFFF;--gradient-background:var(--background-gradient-angle),#C2CEE8 0%,rgba(241,246,255,0.6) 100%;--ribbon-carousel-gradient-background:var(--background-gradient-angle),rgba(194,206,232,0.4) 0%,rgba(241,246,255,0.24) 100%;--feeds-2-gradient-background:var(--feeds-2-light-background-gradient-angle),rgba(59,199,225,0.16) 0%,rgba(53,138,220,0.2) 98.88%;--feeds-2-flipper-background:#f1f6fb;--gradient-hover:rgba(0,0,0,0.05);--stacked-gradient-hover:242,242,242;--inline-actions-gradient-background:var(--inline-actions-gradient-angle),#D9D8F2 77.54%,rgba(208,214,242,0.8) 90.62%,rgba(208,214,242,0) 100%;--inline-actions-alt-gradient-background:var(--inline-actions-gradient-angle),#E6E2EF 0.01%,#E3DEEE 76.82%,rgba(227,222,238,0.8) 88.69%,rgba(227,222,238,0) 100%;--inline-actions-thumb-gradient-background-1:var(--inline-actions-gradient-angle),#d3dae8 0.01%,#ccd4e5 76.82%,rgba(202,211,228,0.8) 88.69%,rgba(201,210,228,0) 100%;--inline-actions-thumb-gradient-background-2:var(--inline-actions-gradient-angle),#e4e8ef 0.01%,#dde2ec 76.82%,rgba(219,225,235,0.8) 88.69%,rgba(218,224,235,0) 100%;--inline-actions-thumb-gradient-background-3:var(--inline-actions-gradient-angle),#ced6e6 0.01%,#c7d0e3 76.82%,rgba(198,207,226,0.8) 88.69%,rgba(196,206,225,0) 100%;--inline-actions-thumb-gradient-background-4:var(--inline-actions-gradient-angle),#dfe4ed 0.01%,#d8deea 76.82%,rgba(214,220,233,0.8) 88.69%,rgba(214,219,233,0) 100%;--inline-actions-thumb-gradient-background-5:var(--inline-actions-gradient-angle),#cad3e4 0.01%,#c3cce1 76.82%,rgba(194,203,224,0.8) 88.69%,rgba(193,202,224,0) 100%;--inline-actions-thumb-gradient-background-6:var(--inline-actions-gradient-angle),#d9dfea 0.01%,#d3d9e8 76.82%,rgba(210,216,232,0.8) 88.69%,rgba(208,215,230,0) 100%;--inline-actions-compact-gradient-background-1:var(--inline-actions-gradient-angle),#e6e9f0 0.01%,#dadfeb 76.82%,rgba(215,222,233,0.8) 88.69%,rgba(214,220,233,0) 100%;--inline-actions-compact-gradient-background-2:var(--inline-actions-gradient-angle),#dee3ed 0.01%,#d3dae8 76.82%,rgba(209,216,231,0.8) 88.69%,rgba(208,215,231,0) 100%;--inline-actions-compact-gradient-background-3:var(--inline-actions-gradient-angle),#d7ddea 0.01%,#cbd3e4 76.82%,rgba(202,210,228,0.8) 88.69%,rgba(199,208,227,0) 100%;--inline-actions-stacked-gradient-background-1:var(--inline-actions-gradient-angle),#e6e9f0 0.01%,#e3e7ee 76.82%,rgba(224,229,237,0.8) 88.69%,rgba(220,225,235,0) 100%;--inline-actions-stacked-gradient-background-2:var(--inline-actions-gradient-angle),#e5e9f0 0.01%,#e2e6ee 76.82%,rgba(222,227,236,0.8) 88.69%,rgba(219,224,235,0) 100%;--inline-actions-stacked-gradient-background-3:var(--inline-actions-gradient-angle),#e2e6ee 0.01%,#dfe4ed 76.82%,rgba(220,225,235,0.8) 88.69%,rgba(215,222,233,0) 100%;--inline-actions-stacked-gradient-background-4:var(--inline-actions-gradient-angle),#dfe4ed 0.01%,#dce1eb 76.82%,rgba(216,222,233,0.8) 88.69%,rgba(214,220,233,0) 100%;--inline-actions-stacked-gradient-background-5:var(--inline-actions-gradient-angle),#dee3ed 0.01%,#dae0eb 76.82%,rgba(215,221,233,0.8) 88.69%,rgba(213,219,233,0) 100%;--inline-actions-stacked-gradient-background-6:var(--inline-actions-gradient-angle),#dbe0eb 0.01%,#d7dde9 76.82%,rgba(213,219,233,0.8) 88.69%,rgba(209,216,231,0) 100%;--inline-actions-ribbon-carousel-gradient-background:var(--inline-actions-gradient-angle),#E5E8ED 0.01%,#E4E7ED 76.82%,rgba(227,231,237,0.8) 88.69%,rgba(227,230,237,0) 100%;--inline-actions-feeds-2-gradient-background:var(--inline-actions-gradient-angle),#f5fbfd 0.01%,#f5fcfe 76.82%,rgba(245,252,254,0.8) 88.69%,rgba(245,252,254,0) 100%}:host msft-article msft-attribution{--neutral-foreground-hint:#5f5f5f}`,c.A` :host{--article-backplate:rgba(255,255,255,0.0512);--background-color-dark-mode:#424242;--background-social-bar:#2B3C59;--background-ribbonCarousel-social-bar:#2B3C59;--gradient-background:var(--background-gradient-angle),#2B3C59 0%,rgba(43,60,89,0.6) 100%;--ribbon-carousel-gradient-background:var(--background-gradient-angle),#2B3C59 0%,rgba(43,60,89,0.6) 100%;--feeds-2-gradient-background:var(--feeds-2-dark-background-gradient-angle),#0F384D 0.44%,#0F2E4D 85.15%;--feeds-2-flipper-background:#173549;--gradient-hover:rgba(255,255,255,0.07);--stacked-gradient-hover:72,72,72;--inline-actions-gradient-background:var(--inline-actions-gradient-angle),#716583 0.01%,#665879 76.82%,rgba(100,86,119,0.8) 88.69%,rgba(98,84,118,0) 100%;--inline-actions-alt-gradient-background:var(--inline-actions-gradient-angle),#716583 0.01%,#665879 76.82%,rgba(100,86,119,0.8) 88.69%,rgba(98,84,118,0) 100%;--inline-actions-thumb-gradient-background-1:var(--inline-actions-gradient-angle),#3e4b60 0.01%,#3d4b62 76.82%,rgba(61,75,99,0.8) 88.69%,rgba(61,75,99,0) 100%;--inline-actions-thumb-gradient-background-2:var(--inline-actions-gradient-angle),#404c5d 0.01%,#404c5f 76.82%,rgba(63,75,95,0.8) 88.69%,rgba(64,76,96,0) 100%;--inline-actions-thumb-gradient-background-3:var(--inline-actions-gradient-angle),#3e4b62 0.01%,#3c4b63 76.82%,rgba(60,74,99,0.8) 88.69%,rgba(60,75,100,0) 100%;--inline-actions-thumb-gradient-background-4:var(--inline-actions-gradient-angle),#404c5f 0.01%,#3f4b60 76.82%,rgba(63,76,96,0.8) 88.69%,rgba(63,75,97,0) 100%;--inline-actions-thumb-gradient-background-5:var(--inline-actions-gradient-angle),#3d4c63 0.01%,#3b4a64 76.82%,rgba(60,75,101,0.8) 88.69%,rgba(59,75,101,0) 100%;--inline-actions-thumb-gradient-background-6:var(--inline-actions-gradient-angle),#404c5f 0.01%,#3e4b61 76.82%,rgba(62,75,97,0.8) 88.69%,rgba(62,76,98,0) 100%;--inline-actions-compact-gradient-background-1:var(--inline-actions-gradient-angle),#414c5c 0.01%,#404b5e 76.82%,rgba(64,76,95,0.8) 88.69%,rgba(63,75,95,0) 100%;--inline-actions-compact-gradient-background-2:var(--inline-actions-gradient-angle),#404c5e 0.01%,#3f4b60 76.82%,rgba(63,75,96,0.8) 88.69%,rgba(62,75,96,0) 100%;--inline-actions-compact-gradient-background-3:var(--inline-actions-gradient-angle),#404c60 0.01%,#3d4a61 76.82%,rgba(61,74,97,0.8) 88.69%,rgba(60,74,97,0) 100%;--inline-actions-stacked-gradient-background-1:var(--inline-actions-gradient-angle),#424c5c 0.01%,#414c5d 76.82%,rgba(64,76,93,0.8) 88.69%,rgba(64,75,94,0) 100%;--inline-actions-stacked-gradient-background-2:var(--inline-actions-gradient-angle),#424d5d 0.01%,#414d5e 76.82%,rgba(64,76,94,0.8) 88.69%,rgba(64,76,94,0) 100%;--inline-actions-stacked-gradient-background-3:var(--inline-actions-gradient-angle),#404b5c 0.01%,#404b5d 76.82%,rgba(64,76,94,0.8) 88.69%,rgba(63,75,94,0) 100%;--inline-actions-stacked-gradient-background-4:var(--inline-actions-gradient-angle),#404b5d 0.01%,#404b5e 76.82%,rgba(64,76,95,0.8) 88.69%,rgba(64,76,96,0) 100%;--inline-actions-stacked-gradient-background-5:var(--inline-actions-gradient-angle),#404c5e 0.01%,#404c5f 76.82%,rgba(64,75,95,0.8) 88.69%,rgba(63,75,96,0) 100%;--inline-actions-stacked-gradient-background-6:var(--inline-actions-gradient-angle),#404c5e 0.01%,#3f4b5f 76.82%,rgba(63,75,95,0.8) 88.69%,rgba(62,74,95,0) 100%;--inline-actions-ribbon-carousel-gradient-background:var(--inline-actions-gradient-angle),#3E4C61 0.01%,#3E4C62 76.82%,rgba(62,76,98,0.8) 88.69%,rgba(62,76,98,0) 100%;--inline-actions-feeds-2-gradient-background:var(--inline-actions-gradient-angle),#1b3d55 0.01%,#1b3f56 76.82%,rgba(27,64,86,0.8) 88.69%,rgba(27,64,86,0) 100%}:host msft-article msft-attribution{--neutral-foreground-hint:#b9b9b9}`)),k=c.A` :host([background="inheritSection"]){background:inherit}:host([background="inheritSection"]) msft-article .inline-actions,:host([background="inheritSection"]) msft-article .inline-actions .actions-button:hover,:host([background="inheritSection"]) msft-article .inline-actions .actions-button:focus-visible{background-color:rgba(255,255,255,0.8)}:host([background="inheritSection"]) msft-article,:host([background="inheritSection"]) msft-article:hover,:host([background="inheritSection"]) msft-article:focus-within{background-color:rgba(255,255,255,0.9);border-radius:4px}:host([background="inheritSection"]) msft-article.filled-icon-hover social-bar-wc::part(button-bg):hover,:host([background="inheritSection"]) msft-article.filled-icon-hover social-bar-wc::part(comments-count-button):hover{background:transparent}`.withBehaviors((0,d.C7)(c.A` :host{--neutral-fill-stealth-hover-rgb:242,242,242}`),(0,d.G2)(c.A` :host([background="inheritSection"]) msft-article .inline-actions,:host([background="inheritSection"]) msft-article .inline-actions .actions-button:hover,:host([background="inheritSection"]) msft-article .inline-actions .actions-button:focus-visible{background-color:rgba(0,0,0,0.3)}:host([background="inheritSection"]) msft-article,:host([background="inheritSection"]) msft-article:hover,:host([background="inheritSection"]) msft-article:focus-within{background-color:rgba(0,0,0,0.4)}`)),C=c.A` :host .inner-content.dynamic-gradient-morning,:host([background="gradient"]) .inner-content.dynamic-gradient-morning social-bar-wc::part(reaction-menu-container){background:var(--background-color-dynamic-gradient-morning)}:host([layout="compactthumb"][background="gradient"]) .inner-content.dynamic-gradient-morning msft-article.social-reaction-enabled:nth-of-type(1) .inline-actions{background:var(--inline-actions-compact-background-gradient-morning-1)}:host([layout="compactthumb"][background="gradient"]) .inner-content.dynamic-gradient-morning msft-article.social-reaction-enabled:nth-of-type(2) .inline-actions{background:var(--inline-actions-compact-background-gradient-morning-2)}:host([layout="compactthumb"][background="gradient"]) .inner-content.dynamic-gradient-morning msft-article.social-reaction-enabled:nth-of-type(3) .inline-actions{background:var(--inline-actions-compact-background-gradient-morning-3)}:host([background="gradient"]) .inner-content.dynamic-gradient-morning msft-article.social-reaction-enabled:nth-of-type(1) .inline-actions{background:var(--inline-actions-background-gradient-morning-1)}:host([background="gradient"]) .inner-content.dynamic-gradient-morning msft-article.social-reaction-enabled:nth-of-type(2) .inline-actions{background:var(--inline-actions-background-gradient-morning-2)}:host([background="gradient"]) .inner-content.dynamic-gradient-morning msft-article.social-reaction-enabled:nth-of-type(3) .inline-actions{background:var(--inline-actions-background-gradient-morning-3)}:host([background="gradient"]) .inner-content.dynamic-gradient-morning msft-article.social-reaction-enabled:nth-of-type(4) .inline-actions{background:var(--inline-actions-background-gradient-morning-4)}:host([background="gradient"]) .inner-content.dynamic-gradient-morning msft-article.social-reaction-enabled:nth-of-type(5) .inline-actions{background:var(--inline-actions-background-gradient-morning-5)}:host([background="gradient"]) .inner-content.dynamic-gradient-morning msft-article.social-reaction-enabled:nth-of-type(6) .inline-actions{background:var(--inline-actions-background-gradient-morning-6)}:host .inner-content.dynamic-gradient-day,:host([background="gradient"]) .inner-content.dynamic-gradient-day social-bar-wc::part(reaction-menu-container){background:var(--background-color-dynamic-gradient-day)}:host([layout="compactthumb"][background="gradient"]) .inner-content.dynamic-gradient-day msft-article.social-reaction-enabled:nth-of-type(1) .inline-actions{background:var(--inline-actions-compact-background-gradient-day-1)}:host([layout="compactthumb"][background="gradient"]) .inner-content.dynamic-gradient-day msft-article.social-reaction-enabled:nth-of-type(2) .inline-actions{background:var(--inline-actions-compact-background-gradient-day-2)}:host([layout="compactthumb"][background="gradient"]) .inner-content.dynamic-gradient-day msft-article.social-reaction-enabled:nth-of-type(3) .inline-actions{background:var(--inline-actions-compact-background-gradient-day-3)}:host([background="gradient"]) .inner-content.dynamic-gradient-day msft-article.social-reaction-enabled:nth-of-type(1) .inline-actions{background:var(--inline-actions-background-gradient-day-1)}:host([background="gradient"]) .inner-content.dynamic-gradient-day msft-article.social-reaction-enabled:nth-of-type(2) .inline-actions{background:var(--inline-actions-background-gradient-day-2)}:host([background="gradient"]) .inner-content.dynamic-gradient-day msft-article.social-reaction-enabled:nth-of-type(3) .inline-actions{background:var(--inline-actions-background-gradient-day-3)}:host([background="gradient"]) .inner-content.dynamic-gradient-day msft-article.social-reaction-enabled:nth-of-type(4) .inline-actions{background:var(--inline-actions-background-gradient-day-4)}:host([background="gradient"]) .inner-content.dynamic-gradient-day msft-article.social-reaction-enabled:nth-of-type(5) .inline-actions{background:var(--inline-actions-background-gradient-day-5)}:host([background="gradient"]) .inner-content.dynamic-gradient-day msft-article.social-reaction-enabled:nth-of-type(6) .inline-actions{background:var(--inline-actions-background-gradient-day-6)}:host .inner-content.dynamic-gradient-sunset,:host([background="gradient"]) .inner-content.dynamic-gradient-sunset social-bar-wc::part(reaction-menu-container){background:var(--background-color-dynamic-gradient-sunset)}:host([layout="compactthumb"][background="gradient"]) .inner-content.dynamic-gradient-sunset msft-article.social-reaction-enabled:nth-of-type(1) .inline-actions{background:var(--inline-actions-compact-background-gradient-sunset-1)}:host([layout="compactthumb"][background="gradient"]) .inner-content.dynamic-gradient-sunset msft-article.social-reaction-enabled:nth-of-type(2) .inline-actions{background:var(--inline-actions-compact-background-gradient-sunset-2)}:host([layout="compactthumb"][background="gradient"]) .inner-content.dynamic-gradient-sunset msft-article.social-reaction-enabled:nth-of-type(3) .inline-actions{background:var(--inline-actions-compact-background-gradient-sunset-3)}:host([background="gradient"]) .inner-content.dynamic-gradient-sunset msft-article.social-reaction-enabled:nth-of-type(1) .inline-actions{background:var(--inline-actions-background-gradient-sunset-1)}:host([background="gradient"]) .inner-content.dynamic-gradient-sunset msft-article.social-reaction-enabled:nth-of-type(2) .inline-actions{background:var(--inline-actions-background-gradient-sunset-2)}:host([background="gradient"]) .inner-content.dynamic-gradient-sunset msft-article.social-reaction-enabled:nth-of-type(3) .inline-actions{background:var(--inline-actions-background-gradient-sunset-3)}:host([background="gradient"]) .inner-content.dynamic-gradient-sunset msft-article.social-reaction-enabled:nth-of-type(4) .inline-actions{background:var(--inline-actions-background-gradient-sunset-4)}:host([background="gradient"]) .inner-content.dynamic-gradient-sunset msft-article.social-reaction-enabled:nth-of-type(5) .inline-actions{background:var(--inline-actions-background-gradient-sunset-5)}:host([background="gradient"]) .inner-content.dynamic-gradient-sunset msft-article.social-reaction-enabled:nth-of-type(6) .inline-actions{background:var(--inline-actions-background-gradient-sunset-6)}:host .inner-content.dynamic-gradient-night,:host([background="gradient"]) .inner-content.dynamic-gradient-night social-bar-wc::part(reaction-menu-container){background:var(--background-color-dynamic-gradient-night)}:host([layout="compactthumb"][background="gradient"]) .inner-content.dynamic-gradient-night msft-article.social-reaction-enabled:nth-of-type(1) .inline-actions{background:var(--inline-actions-compact-background-gradient-night-1)}:host([layout="compactthumb"][background="gradient"]) .inner-content.dynamic-gradient-night msft-article.social-reaction-enabled:nth-of-type(2) .inline-actions{background:var(--inline-actions-compact-background-gradient-night-2)}:host([layout="compactthumb"][background="gradient"]) .inner-content.dynamic-gradient-night msft-article.social-reaction-enabled:nth-of-type(3) .inline-actions{background:var(--inline-actions-compact-background-gradient-night-3)}:host([background="gradient"]) .inner-content.dynamic-gradient-night msft-article.social-reaction-enabled:nth-of-type(1) .inline-actions{background:var(--inline-actions-background-gradient-night-1)}:host([background="gradient"]) .inner-content.dynamic-gradient-night msft-article.social-reaction-enabled:nth-of-type(2) .inline-actions{background:var(--inline-actions-background-gradient-night-2)}:host([background="gradient"]) .inner-content.dynamic-gradient-night msft-article.social-reaction-enabled:nth-of-type(3) .inline-actions{background:var(--inline-actions-background-gradient-night-3)}:host([background="gradient"]) .inner-content.dynamic-gradient-night msft-article.social-reaction-enabled:nth-of-type(4) .inline-actions{background:var(--inline-actions-background-gradient-night-4)}:host([background="gradient"]) .inner-content.dynamic-gradient-night msft-article.social-reaction-enabled:nth-of-type(5) .inline-actions{background:var(--inline-actions-background-gradient-night-5)}:host([background="gradient"]) .inner-content.dynamic-gradient-night msft-article.social-reaction-enabled:nth-of-type(6) .inline-actions{background:var(--inline-actions-background-gradient-night-6)}`.withBehaviors(new g.N(c.A` :host{--background-color-dynamic-gradient-morning:linear-gradient(140.53deg,#FFFEDC 9.32%,#FFF4D7 58.45%);--background-color-dynamic-gradient-day:linear-gradient(140.53deg,#F5F7E1 9.32%,#CDF0FF 58.45%);--background-color-dynamic-gradient-sunset:linear-gradient(140.56deg,#F0E1F7 5.42%,#FFE9E1 51.68%);--background-color-dynamic-gradient-night:linear-gradient(140.53deg,#F0E1F7 9.32%,#CDDFFF 58.45%);--inline-actions-background-gradient-morning-1:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(242,238,207,0) 0%,rgba(237,233,203,0) 0.01%,#F2EECF 7.81%,#F2ECCE 66.67%,#F2ECCE 100%);--inline-actions-background-gradient-morning-2:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(242,238,207,0) 0%,rgba(242,233,205,0) 0.01%,#F2E9CD 7.81%,#F2E8CC 66.67%,#F2E8CC 100%);--inline-actions-background-gradient-morning-3:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(242,235,206,0) 0.01%,#F2EBCE 7.81%,#F2E9CD 66.67%,#F2E8CC 100%);--inline-actions-background-gradient-morning-4:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(242,238,207,0) 0%,rgba(242,233,205,0) 0.01%,#F2E9CD 7.81%,#F2E8CC 66.67%,#F2E8CC 100%);--inline-actions-background-gradient-morning-5:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(242,232,204,0) 0.01%,#F2E8CC 7.81%,#F2E9CD 66.67%,#F2E8CC 100%);--inline-actions-background-gradient-morning-6:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(242,232,204,0) 0.01%,#F2E8CC 7.81%,#F2E9CD 66.67%,#F2E8CC 100%);--inline-actions-compact-background-gradient-morning-1:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(237,233,203,0) 0.01%,#EDE9CB 7.81%,#EDE6CA 66.67%,#EDE4C9 100%);--inline-actions-compact-background-gradient-morning-2:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(237,229,201,0) 0%,#EDE5C9 7.81%,#EDE4C8 66.67%,#EDE3C8 100%);--inline-actions-compact-background-gradient-morning-3:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(237,227,200,0) 0%,#EDE3C8 7.81%,#EDE3C8 66.67%,#EDE3C8 100%);--inline-actions-background-gradient-day-1:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(219,233,224,0) 0%,#DBE9E0 7.81%,#D4E8E6 66.67%,#D3E7E7 100%);--inline-actions-background-gradient-day-2:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(204,230,237,0) 0%,#CCE6ED 7.81%,#C4E5F2 66.67%,#C4E5F2 100%);--inline-actions-background-gradient-day-3:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(207,231,234,0) 0%,#CFE7EA 7.81%,#C7E5EF 66.67%,#C5E5F2 100%);--inline-actions-background-gradient-day-4:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(196,229,242,0) 0%,#C4E5F2 7.81%,#C4E5F2 66.67%,#C4E5F2 100%);--inline-actions-background-gradient-day-5:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(207,231,234,0) 0%,rgba(196,229,242,0) 0.01%,#C4E5F2 7.81%,#C4E5F2 66.67%,#C5E5F2 100%);--inline-actions-background-gradient-day-6:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(196,229,242,0) 0%,#C4E5F2 7.81%,#C4E5F2 66.67%,#C4E5F2 100%);--inline-actions-compact-background-gradient-day-1:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(211,227,222,0) 0%,#D3E3DE 7.81%,#CCE2E5 66.67%,#C1E0EC 100%);--inline-actions-compact-background-gradient-day-2:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(198,225,233,0) 0%,#C6E1E9 7.81%,#C1E0EC 66.67%,#C0E0ED 100%);--inline-actions-compact-background-gradient-day-3:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(192,224,237,0) 0%,#C0E0ED 7.81%,#C0E0ED 66.67%,#C0E0ED 100%);--inline-actions-background-gradient-sunset-1:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(237,218,223,0) 0%,#EDDADF 7.81%,#EEDBDC 66.67%,#EFDBDB 100%);--inline-actions-background-gradient-sunset-2:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(242,222,214,0) 0%,#F2DED6 7.81%,#F2DED6 66.67%,#F2DED6 100%);--inline-actions-background-gradient-sunset-3:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(239,220,218,0) 0%,#EFDCDA 7.81%,#F1DDD8 66.67%,#F2DED6 100%);--inline-actions-background-gradient-sunset-4:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(242,222,214,0) 0%,#F2DED6 7.81%,#F2DED6 66.67%,#F2DED6 100%);--inline-actions-background-gradient-sunset-5:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(242,222,214,0) 0%,#F2DED6 7.81%,#F2DED6 66.67%,#F2DED6 100%);--inline-actions-background-gradient-sunset-6:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(242,222,214,0) 0%,#F2DED6 7.81%,#F2DED6 66.67%,#F2DED6 100%);--inline-actions-compact-background-gradient-sunset-1:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(233,214,218,0) 0%,#E9D6DA 7.81%,#EAD8D6 66.67%,#EDDAD1 100%);--inline-actions-compact-background-gradient-sunset-2:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(236,216,213,0) 0%,#ECD8D5 7.81%,#EDDAD1 66.67%,#EDDAD1 100%);--inline-actions-compact-background-gradient-sunset-3:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(237,218,209,0) 0%,#EDDAD1 7.81%,#EDDAD1 66.67%,#EDDAD1 100%);--inline-actions-background-gradient-night-1:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(218,214,238,0) 0%,#DAD6EE 7.81%,#D1D5EF 66.67%,#CFD5F0 100%);--inline-actions-background-gradient-night-2:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(199,213,242,0) 0%,#C7D5F2 7.81%,#C6D5F2 66.67%,#C4D4F2 100%);--inline-actions-background-gradient-night-3:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(207,213,240,0) 0%,#CFD5F0 7.81%,#C7D5F2 66.67%,#C5D5F2 100%);--inline-actions-background-gradient-night-4:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(196,212,242,0) 0%,#C4D4F2 7.81%,#C4D4F2 66.67%,#C4D4F2 100%);--inline-actions-background-gradient-night-5:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(207,213,240,0) 0%,rgba(196,212,242,0) 0.01%,#C4D4F2 7.81%,#C4D4F2 66.67%,#C4D4F2 100%);--inline-actions-background-gradient-night-6:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(196,212,242,0) 0%,#C4D4F2 7.81%,#C4D4F2 66.67%,#C4D4F2 100%);--inline-actions-compact-background-gradient-night-1:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(208,209,233,0) 0%,#D0D1E9 7.81%,#CAD0EB 66.67%,#C1D0ED 100%);--inline-actions-compact-background-gradient-night-2:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(200,208,236,0) 0%,#C8D0EC 7.81%,#C0CFED 66.67%,#C0CFED 100%);--inline-actions-compact-background-gradient-night-3:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(192,207,237,0) 0%,#C0CFED 7.81%,#C0CFED 66.67%,#C0CFED 100%)}`,c.A` :host{--background-color-dynamic-gradient-morning:linear-gradient(140.02deg,#464706 -2.33%,#3F2807 84.75%);--background-color-dynamic-gradient-day:linear-gradient(138.52deg,#464706 0.44%,#203A49 83.53%);--background-color-dynamic-gradient-sunset:linear-gradient(139.03deg,#371F42 5.05%,#4A2517 63.37%);--background-color-dynamic-gradient-night:linear-gradient(138.52deg,#512C2C -1.32%,#252C4E 85.77%);--inline-actions-background-gradient-morning-1:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(81,74,24,0) 0%,#514A18 7.81%,#504718 66.67%,#504618 100%);--inline-actions-background-gradient-morning-2:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(79,66,24,0) 0%,#4F4218 7.81%,#4F4118 66.67%,#4E3F18 100%);--inline-actions-background-gradient-morning-3:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(79,69,24,0) 0%,#4F4518 7.81%,#4F4318 66.67%,#4F4118 100%);--inline-actions-background-gradient-morning-4:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(78,62,24,0) 0%,#4E3E18 7.81%,#4D3B18 66.67%,#4D3A19 100%);--inline-actions-background-gradient-morning-5:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(78,63,24,0) 0%,#4E3F18 7.81%,#4E3E18 66.67%,#4D3D18 100%);--inline-actions-background-gradient-morning-6:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(76,56,25,0) 0%,#4C3819 7.81%,#4C3819 66.67%,#4C3819 100%);--inline-actions-compact-background-gradient-morning-1:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(211,227,222,0) 0%,rgba(81,74,24,0) 0.01%,#514A18 7.81%,#504618 66.67%,#4F4118 100%);--inline-actions-compact-background-gradient-morning-2:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(211,227,222,0) 0%,rgba(79,69,24,0) 0.01%,#4F4518 7.81%,#4E4018 66.67%,#4E3E18 100%);--inline-actions-compact-background-gradient-morning-3:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(211,227,222,0) 0%,rgba(78,63,24,0) 0.01%,#4E3F18 7.81%,#4D3D18 66.67%,#4D3919 100%);--inline-actions-background-gradient-day-1:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(73,81,43,0) 0.01%,#49512B 7.81%,#455031 66.67%,#424F36 100%);--inline-actions-background-gradient-day-2:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(62,77,63,0) 0.01%,#3E4D3F 7.81%,#3A4C45 66.67%,#394C47 100%);--inline-actions-background-gradient-day-3:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(63,77,60,0) 0.01%,#424E37 7.81%,#3E4D3D 66.67%,#3D4C41 100%);--inline-actions-background-gradient-day-4:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(55,76,74,0) 0.01%,#374C4A 7.81%,#354B4D 66.67%,#324A52 100%);--inline-actions-background-gradient-day-5:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(58,76,70,0) 0.01%,#3A4C46 7.81%,#384C48 66.67%,#354B4D 100%);--inline-actions-background-gradient-day-6:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(49,73,86,0) 0.01%,#314956 7.81%,#314957 66.67%,#314957 100%);--inline-actions-compact-background-gradient-day-1:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(211,227,222,0) 0%,rgba(70,80,48,0) 0.01%,#465030 7.81%,#414E38 66.67%,#3D4C40 100%);--inline-actions-compact-background-gradient-day-2:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(211,227,222,0) 0%,rgba(63,78,59,0) 0.01%,#3F4E3B 7.81%,#3C4C42 66.67%,#364B4C 100%);--inline-actions-compact-background-gradient-day-3:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(211,227,222,0) 0%,rgba(58,76,70,0) 0.01%,#3A4C46 7.81%,#344A50 66.67%,#314955 100%);--inline-actions-background-gradient-sunset-1:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(77,49,62,0) 0.01%,#4D313E 7.81%,#4F3239 66.67%,#503237 100%);--inline-actions-background-gradient-sunset-2:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(83,51,49,0) 0.01%,#533331 7.81%,#55332E 66.67%,#583428 100%);--inline-actions-background-gradient-sunset-3:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(82,51,51,0) 0.01%,#523234 7.81%,#523234 66.67%,#55332E 100%);--inline-actions-background-gradient-sunset-4:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(88,52,39,0) 0.01%,#583427 7.81%,#583427 66.67%,#583428 100%);--inline-actions-background-gradient-sunset-5:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(85,51,45,0) 0.01%,#55332D 7.81%,#583427 66.67%,#583427 100%);--inline-actions-background-gradient-sunset-6:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(88,52,39,0) 0.01%,#583427 7.81%,#583427 66.67%,#583427 100%);--inline-actions-compact-background-gradient-sunset-1:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(211,227,222,0) 0%,rgba(77,49,62,0) 0.01%,#4D313E 7.81%,#513235 66.67%,#55342D 100%);--inline-actions-compact-background-gradient-sunset-2:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(211,227,222,0) 0%,rgba(82,51,51,0) 0.01%,#523333 7.81%,#56342B 66.67%,#583428 100%);--inline-actions-compact-background-gradient-sunset-3:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(211,227,222,0) 0%,rgba(87,52,42,0) 0.01%,#57342A 7.81%,#583428 66.67%,#583428 100%);--inline-actions-background-gradient-night-1:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(80,59,69,0) 0.01%,#503B45 7.81%,#4C3B49 66.67%,#4A3B4B 100%);--inline-actions-background-gradient-night-2:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(70,59,77,0) 0.01%,#463B4D 7.81%,#403B51 66.67%,#403B51 100%);--inline-actions-background-gradient-night-3:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(73,59,75,0) 0.01%,#493B4B 7.81%,#453B4D 66.67%,#433B4F 100%);--inline-actions-background-gradient-night-4:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(63,59,83,0) 0.01%,#3F3B53 7.81%,#3C3B55 66.67%,#383B58 100%);--inline-actions-background-gradient-night-5:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(67,59,79,0) 0.01%,#433B4F 7.81%,#3E3B54 66.67%,#3D3B54 100%);--inline-actions-background-gradient-night-6:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(54,59,89,0) 0.01%,#363B59 7.81%,#353B5A 66.67%,#353B5A 100%);--inline-actions-compact-background-gradient-night-1:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(211,227,222,0) 0%,rgba(77,59,72,0) 0.01%,#4D3B48 7.81%,#483B4C 66.67%,#433B4F 100%);--inline-actions-compact-background-gradient-night-2:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(211,227,222,0) 0%,rgba(73,59,76,0) 0.01%,#493B4C 7.81%,#433B4F 66.67%,#3F3B52 100%);--inline-actions-compact-background-gradient-night-3:linear-gradient(var(--inline-actions-dynamic-gradient-angle),rgba(211,227,222,0) 0%,rgba(67,59,79,0) 0.01%,#433B4F 7.81%,#3B3B57 66.67%,#363B59 100%)}`));var w,_,T=i(930),F=i(92011),S=i(38493),D=i(60815);class A extends F.L{constructor(){super(...arguments),this.cardActionMenuHandler=(t,e)=>{t.toggleCardActionMenu&&t.toggleCardActionMenu(t,e)},this.supportedCardSizeTopStoriesCarousel=["_1x_1y","_2x_1y","_3x_1y","_4x_1y"]}layoutChanged(t,e){this.isImageLayout=!1,this.isAttributionLayout=!1,e!==w.RibbonCarousel||this.supportedCardSizeTopStoriesCarousel.find(t=>t===this.cardSize)||(this.cardSize===T.uE._1x_2y?this.layout=w.Compact:this.layout=w.Normal),e!==w.Thumbnail&&e!==w.CompactThumbnail&&e!==w.RibbonCarousel&&e!==w.TallRightRail&&e!==w.RightRail||(this.isImageLayout=!0),e!==w.Normal&&e!==w.Thumbnail&&e!==w.CompactThumbnail&&e!==w.RibbonCarousel||(this.isAttributionLayout=!0)}backgroundChanged(t,e){t!==e&&(t&&this.$fastController.removeStyles(this.getBackgroundStyles(t)),this.$fastController.addStyles(this.getBackgroundStyles(e)))}getBackgroundStyles(t){switch(t){case _.InheritSection:return k;case _.Gradient:return x;default:return $}}getDynamicGradientColor(){if(!this.useGradientBackground)return"";this.$fastController.addStyles(C);const t=(new Date).getHours();let e;return e=t>=6&&t<12?"dynamic-gradient-morning":t>=12&&t<17?"dynamic-gradient-day":t>=17&&t<22?"dynamic-gradient-sunset":"dynamic-gradient-night",e}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}scrollToPrevious(){if(this.enableFeeds2Carousel){const t=this.getCurrentScrollIndex(),e=t-2>0?t-2:0;this.horizontalScroll.scrollToPosition(this.scrollStops[e],this.horizontalScroll.scrollContainer.scrollLeft)}else this.horizontalScroll.scrollToPrevious()}scrollToNext(){if(this.enableFeeds2Carousel){const{scrollItems:t,scrollContainer:{scrollLeft:e}}=this.horizontalScroll,i=this.getCurrentScrollIndex(),n=i+2<t.length-1?i+2:t.length-1;this.horizontalScroll.scrollToPosition(this.scrollStops[n],e)}else this.horizontalScroll.scrollToNext()}getCurrentScrollIndex(){const{scrollContainer:t}=this.horizontalScroll,e=t.scrollLeft;return!this.scrollStops&&this.saveScrollStops(),this.scrollStops.findIndex(t=>Math.abs(t)>=Math.abs(e))}saveScrollStops(){const{scrollItems:t}=this.horizontalScroll;this.scrollStops=t.map((t,e)=>280*e),this.scrollStops.push(280*(t.length-1)+272)}}(0,n.Cg)([(0,S.CF)({attribute:"is-anaheim-design",mode:"boolean"})],A.prototype,"isAnaheimDesign",void 0),(0,n.Cg)([(0,S.CF)({attribute:"is-anaheim-infopane",mode:"boolean"})],A.prototype,"isAnaheimInfopane",void 0),(0,n.Cg)([(0,S.CF)({attribute:"disable-inline-action",mode:"boolean"})],A.prototype,"disableTopStoriesInlineAction",void 0),(0,n.Cg)([(0,S.CF)({attribute:"card-heading"})],A.prototype,"cardHeading",void 0),(0,n.Cg)([(0,S.CF)({attribute:"card-heading-link"})],A.prototype,"cardHeadingLink",void 0),(0,n.Cg)([(0,S.CF)({attribute:"card-tooltip"})],A.prototype,"tooltip",void 0),(0,n.Cg)([(0,S.CF)({attribute:"feeds-2-carousel",mode:"boolean"})],A.prototype,"enableFeeds2Carousel",void 0),(0,n.Cg)([(0,S.CF)({attribute:"prong2-dynamic-feed",mode:"boolean"})],A.prototype,"isDynamicFeed",void 0),(0,n.Cg)([(0,S.CF)({attribute:"prong2-dynamic-gradient-background",mode:"boolean"})],A.prototype,"useGradientBackground",void 0),(0,n.Cg)([S.CF],A.prototype,"target",void 0),(0,n.Cg)([D.sH],A.prototype,"cardData",void 0),(0,n.Cg)([D.sH],A.prototype,"headingTelemetryTag",void 0),(0,n.Cg)([D.sH],A.prototype,"flipperNextTelemetryTag",void 0),(0,n.Cg)([D.sH],A.prototype,"fliperPreviousTelemetryTag",void 0),(0,n.Cg)([D.sH],A.prototype,"cardVersionTelemetryTag",void 0),(0,n.Cg)([D.sH],A.prototype,"subCardTelemetryTag",void 0),(0,n.Cg)([D.sH],A.prototype,"isSpotlightUX",void 0),(0,n.Cg)([D.sH],A.prototype,"spotlightBreakingNewsTagString",void 0),(0,n.Cg)([(0,S.CF)({attribute:"card-size"})],A.prototype,"cardSize",void 0),(0,n.Cg)([S.CF],A.prototype,"layout",void 0),(0,n.Cg)([S.CF],A.prototype,"background",void 0),function(t){t.Compact="compact",t.CompactThumbnail="compactthumb",t.TallRightRail="tallrightrail",t.RightRail="rightrail",t.Normal="normal",t.Stacked="stacked",t.Thumbnail="thumb",t.RibbonCarousel="ribbonCarousel"}(w||(w={})),function(t){t.Normal="normal",t.Gradient="gradient",t.InheritSection="inheritSection"}(_||(_={}));var z=i(26863),I=i(96950),E=i(91640),B=i(60402),L=i(39957),M=i(30216),N=i(64524),R=i.n(N),O=i(91125),P=i.n(O),H=i(33307),j=i(17254),U=i(51600),V=i(18750);const W={[w.Compact]:3,[w.CompactThumbnail]:3,[w.RightRail]:3,[w.TallRightRail]:4,[w.Normal]:6,[w.Stacked]:6,[w.Thumbnail]:6},G={[T.uE._1x_2y]:[52,52],[T.uE._1x_3y]:[76,76],[T.uE._2x_2y]:[59,59],[T.uE._3x_2y]:[72,72]},Z=I.qy`
${(0,E.z)(t=>t.enableRichSocialReaction,I.qy`<span class="divider"></span>`)}<fluent-button class="actions-button" aria-expanded="false" aria-label="${t=>t.cardActionsTooltips&&t.cardActionsTooltips.seeMore}" role="button" title="${t=>t.cardActionsTooltips&&t.cardActionsTooltips.seeMore}" @click=${(t,e)=>e.parent.cardActionMenuHandler&&e.parent.cardActionMenuHandler(t,e.event)} @keypress=${(t,e)=>e.parent.cardActionMenuHandler&&e.parent.cardActionMenuHandler(t,e.event)} data-t="${t=>{var e;return null===(e=t.telemetryContext)||void 0===e||null===(e=e.seeMore)||void 0===e?void 0:e.getMetadataTag()}}">${t=>I.qy`${I.qy.partial(H.A)}`}</fluent-button>`;const J=I.qy`<div id="inline-actions" class="inline-actions">${(0,E.z)(t=>t.enableRichSocialReaction,(0,z.nj)({theme:"topStories"}))} ${(0,E.z)(t=>t.cardActionStatus&M.J.enabled,Z)}</div>`,X=I.qy`<msft-article href=${t=>t.destinationUrl} title=${t=>t.disableCardTitleTooltip&&!t.disableTitleOnArticleCardOnly?"":t.title} target=${t=>t.openLinksInNewTab||t.openArticleInNewTab?"_blank":t.defaultAnchorTarget||"_self"} data-t="${t=>{var e;return null===(e=t.telemetryContext)||void 0===e||null===(e=e.contentCard)||void 0===e?void 0:e.getMetadataTag()}}" :anchorTelemetryTag=${t=>t.telemetryContext&&t.telemetryContext.destination&&t.telemetryContext.destination.getMetadataTag()} :handleContentCardClickOverride=${t=>t.handleContentCardClickOverride} class=${(t,e)=>`${t.isWebContent?"crawled-content":""} ${t.enableRichSocialReaction?"social-reaction-enabled":""} ${t.isWebContent?"stacked-fromweb":""} ${t.enableFilledIconOnHover?"filled-icon-hover":""}`}>${(t,e)=>{return(i=e.parent.layout)===w.Normal||i===w.Stacked||i===w.CompactThumbnail||i===w.Thumbnail||i===w.RibbonCarousel?I.qy`<span slot="attribution">${(0,E.z)(t=>t.providerData&&t.providerData.logoImage,I.qy`<img slot="image" class="attribution-provider-logo" src="${t=>t.providerData.logoImage}" alt="${t=>t.providerData.name}" />`)}</span>`:I.qy`<msft-attribution slot="attribution" class="${t=>t.isProviderIconClickable?"attribution-provider-clickable":""}">${(0,E.z)(t=>t.providerData&&t.providerData.logoImage,I.qy` ${(0,E.z)(t=>t.isProviderIconClickable&&t.providerData.profileId,I.qy`<a class="attribution-icon-clickable" tabindex="-1" title="${t=>t.providerData.name}" href=${t=>Q(t.providerData.profileId)} target="_blank" data-t="${t=>{var e;return null===(e=t.telemetryContext)||void 0===e||null===(e=e.clickableProviderIcon)||void 0===e?void 0:e.getMetadataTag()}}"><div style="display: inline-flex;align-items: center"><img slot="image" tabindex="0" class="attribution-provider-logo" src="${t=>t.providerData.logoImage}" alt="${t=>t.providerData.name}" /><span class="attribution-provider-name attribution-provider-logo-available" tabindex="0">${t=>t.providerData.name}</span><span class="attribution-published-time">·</span><span>${t=>t.publishedDateTime}</span></div></a>`)} ${(0,E.z)(t=>!t.isProviderIconClickable||!t.providerData.profileId,I.qy`<img slot="image" class="attribution-provider-logo" src="${t=>t.providerData.logoImage}" alt="${t=>t.providerData.name}" /></a>`)} `)} ${(0,E.z)(t=>t.isProviderIconClickable&&t.providerData&&!t.providerData.logoImage,I.qy` ${(0,E.z)(t=>t.providerData.name&&t.providerData.profileId,I.qy`<a class="attribution-icon-clickable" tabindex="-1" title="${t=>t.providerData.name}" href=${t=>Q(t.providerData.profileId)} target="_blank" data-t="${t=>{var e;return null===(e=t.telemetryContext)||void 0===e||null===(e=e.clickableProviderIcon)||void 0===e?void 0:e.getMetadataTag()}}"><div style="display: inline-flex;align-items: center"><span class="attribution-provider-name" tabindex="0">${t=>t.providerData.name}</span>${(0,E.z)(t=>t.publishedDateTime,I.qy`<span class="attribution-published-time">·</span><span>${t=>t.publishedDateTime}</span>`)}</div></a>`)} `)} ${(0,E.z)(t=>!t.isProviderIconClickable||!t.providerData.profileId,I.qy`<span class="attribution-provider-not-clickable">${(0,E.z)(t=>t.providerData&&t.providerData.name,I.qy`<span style="unicode-bidi:embed">${t=>t.providerData.name}</span>`)} ${(0,E.z)(t=>t.providerData&&t.providerData.name&&t.publishedDateTime,I.qy` · `)} ${(0,E.z)(t=>t.publishedDateTime,I.qy`${t=>t.publishedDateTime}`)}</span>`)}</msft-attribution>`;var i}}<div slot="start-action" style="gap:0">${(0,E.z)((t,e)=>!e.parent.disableTopStoriesInlineAction,J)}</div>${(0,E.z)((t,e)=>e.parent.isDynamicFeed&&e.parent.isSpotlightUX&&0===e.index,I.qy`<fluent-badge class="ts-breaking-news-tag" appearance="accent">${(t,e)=>e.parent.spotlightBreakingNewsTagString}</fluent-badge>`)} ${t=>t.title} ${(0,E.z)((t,e)=>t.isWebContent,I.qy`<span slot="abstract">${t=>t.crawledContentLabel}</span>`)} ${(0,E.z)((t,e)=>!(t.isWebContent&&e.parent.cardSize!==T.uE._3x_2y)&&(e.parent.layout===w.Thumbnail||e.parent.layout===w.Normal)&&t.abstract,I.qy`<p slot="abstract">${t=>t.abstract}</p>`)} ${(0,E.z)((t,e)=>t.imageData&&e.parent.isImageLayout,I.qy` ${(t,e)=>function(t,e,i,n){var a;const{articleCardBackgroundColor:r,imageData:o}=t;let l=G[e]||[72,72];i===w.RightRail&&(l=[62,62]);i===w.RibbonCarousel&&(l=n?[68,80]:[60,60]);const s=r&&(null===(a=r.find(t=>t.isDarkMode===(0,V.ud)()))||void 0===a?void 0:a.hexColor),d=(0,U.oQ)(o.source,{width:l[0],height:l[1],enableDpiScaling:!1,quality:90});return I.qy`<div slot="image" class="image"><img style="background: ${s}" height=${l[1]}, width=${l[0]}, alt="${o.altText}" src="${d}" /></div>`}(t,e.parent.cardSize,e.parent.layout,e.parent.enableFeeds2Carousel)} `)} ${(0,E.z)((t,e)=>e.parent.isAttributionLayout,I.qy`<msft-attribution slot="start-action"><span>${(0,E.z)(t=>t.providerData&&t.providerData.name,I.qy`<span style="unicode-bidi:embed">${t=>t.providerData.name}</span>`)} ${(0,E.z)((t,e)=>t.providerData&&t.providerData.name&&t.isWebContent&&e.parent.cardSize===T.uE._3x_2y,I.qy` · `)} ${(0,E.z)((t,e)=>t.isWebContent&&e.parent.cardSize===T.uE._3x_2y,I.qy`${t=>t.crawledContentLabel}`)} ${(0,E.z)((t,e)=>(t.providerData&&t.providerData.name||t.isWebContent&&e.parent.cardSize===T.uE._3x_2y)&&t.publishedDateTime,I.qy` · `)} ${(0,E.z)(t=>t.publishedDateTime,I.qy`${t=>t.publishedDateTime}`)}</span></msft-attribution>`)}</msft-article>`;function Q(t){return`https://www.msn.com/${j.T3.CurrentMarket}/community/channel/${t}`}const q=I.qy`<fluent-horizontal-scroll aria-hidden="false" class="horizontal-scroll" speed="1500" easing="ease-in-out" ${(0,B.K)("horizontalScroll")}><fluent-flipper slot="previous-flipper" direction="previous" part="flipper-previous" class="previous" @click="${t=>t.scrollToPrevious()}" data-t="${t=>t.fliperPreviousTelemetryTag}">${(0,E.z)(t=>"rtl"===document.dir&&!t.enableFeeds2Carousel,I.qy`<svg slot="previous" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="red"><path d="M4.023 15.273L11.29 8 4.023.727l.704-.704L12.71 8l-7.984 7.977-.704-.704z"></path></svg>`)} ${(0,E.z)(t=>t.enableFeeds2Carousel,I.qy`<div slot="previous">${t=>"rtl"===document.dir?I.qy`${I.qy.partial(P())}`:I.qy`${I.qy.partial(R())}`}</div>`)}</fluent-flipper><fluent-flipper slot="next-flipper" direction="next" part="flipper-next" class="next" @click="${t=>t.scrollToNext()}" data-t="${t=>t.flipperNextTelemetryTag}">${(0,E.z)(t=>"rtl"===document.dir&&!t.enableFeeds2Carousel,I.qy`<svg slot="next" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="red"><path d="M11.273 15.977L3.29 8 11.273.023l.704.704L4.71 8l7.266 7.273-.704.704z"></path></svg>`)} ${(0,E.z)(t=>t.enableFeeds2Carousel,I.qy`<div slot="next">${t=>"rtl"===document.dir?I.qy`${I.qy.partial(R())}`:I.qy`${I.qy.partial(P())}`}</div>`)}</fluent-flipper>${(0,L.ux)(t=>t.cardData,X)}</fluent-horizontal-scroll>`,Y=I.qy`<div data-t="${t=>t.cardVersionTelemetryTag}" style="display: flex; width: 100%;" class="${t=>t.isDynamicFeed&&t.isSpotlightUX?"spotlight-flash-bg":""}" animation-name="${t=>t.isDynamicFeed?"spotlight-ts-bg-animation, none":""}"><div :classList="inner-content ${t=>t.getDynamicGradientColor()}" data-t="${t=>t.subCardTelemetryTag}">${(0,E.z)(t=>t.cardHeading,I.qy`<div :classList="heading-container ${t=>t.isAnaheimInfopane?"anaheim-infopane":""}">${t=>!!t.cardHeadingLink?I.qy`<a class="heading heading-link" href=${t=>t.cardHeadingLink} target=${t=>t.target} data-t="${t=>t.headingTelemetryTag}">${(0,E.z)(t=>t.enableFeeds2Carousel,I.qy`${I.qy.partial('<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2.5" y="4.33" width="12.67" height="8.67" rx="2" fill="url(#paint0_linear_1770_321358)"/><rect x="2.5" y="4.33" width="12.67" height="8.67" rx="2" fill="url(#paint1_linear_1770_321358)" fill-opacity=".5"/><path d="M.5 4.33c0-1.1.9-2 2-2h8.73a2 2 0 0 1 2 2v7.49c0 1.12.6 1.18.6 1.18H2.5a2 2 0 0 1-2-2V4.33Z" fill="url(#paint2_linear_1770_321358)"/><rect x="7.83" y="6.33" width="4" height="1.33" rx=".67" fill="#EDFCFF"/><rect x="7.83" y="9" width="4" height="2" rx="1" fill="#EDFCFF"/><rect x="1.83" y="6.33" width="4.67" height="4.67" rx="1" fill="#EDFCFF"/><rect x="1.83" y="3.67" width="10" height="1.33" rx=".67" fill="#EDFCFF"/><defs><linearGradient id="paint0_linear_1770_321358" x1="6.5" y1="4.62" x2="13.94" y2="14.21" gradientUnits="userSpaceOnUse"><stop stop-color="#007BBC"/><stop offset="1" stop-color="#155AA8"/></linearGradient><linearGradient id="paint1_linear_1770_321358" x1="13.39" y1="10.09" x2="15.21" y2="9.98" gradientUnits="userSpaceOnUse"><stop/><stop offset=".27" stop-opacity="0"/></linearGradient><linearGradient id="paint2_linear_1770_321358" x1="13.17" y1="13" x2="-.64" y2="3.74" gradientUnits="userSpaceOnUse"><stop stop-color="#358ADC"/><stop offset="1" stop-color="#20B2C6"/></linearGradient></defs></svg>')}`)} ${t=>t.cardHeading}</a>`:I.qy`<h3 class="heading">${t=>t.cardHeading}</h3>`} ${(0,E.z)(t=>t.tooltip,I.qy`<div class="heading-icon-container" role="tooltip" tabindex="0" aria-describedby="#tooltip">${I.qy.partial('<svg viewBox="0 0 12 12" width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 0H8.5C8.77614 0 9 0.223858 9 0.5V3H10C11.1046 3 12 3.89543 12 5V10C12 11.1046 11.1046 12 10 12H2C0.89543 12 0 11.1046 0 10V5C0 3.89543 0.895431 3 2 3H3V0.5C3 0.223858 3.22386 0 3.5 0ZM8 3V1H4V3H8ZM2 4C1.44772 4 1 4.44772 1 5V10C1 10.5523 1.44772 11 2 11H10C10.5523 11 11 10.5523 11 10V5C11 4.44772 10.5523 4 10 4H2Z"/></svg>')}<span id="tooltip" class="icon-tooltip">${t=>t.tooltip}</span></div>`)}</div><slot name="ngbutton"></slot><slot name="ngmenu"></slot>`)} ${(0,E.z)(t=>t.layout===w.RibbonCarousel,q)} ${(0,E.z)(t=>!(t.layout===w.RibbonCarousel),I.qy` ${(0,L.ux)(t=>W[t.layout]?t.cardData.slice(0,W[t.layout]):t.cardData,X,{positioning:!0})} ${(0,E.z)(t=>t.isAnaheimInfopane,I.qy`<div class="anaheim-infopane-bottom-padding"></div>`)} `)}</div></div>`;let K=class extends A{};K=(0,n.Cg)([(0,F.E)({name:"msn-top-stories",template:Y,styles:y})],K);const tt=I.qy`
<fluent-card style="grid-area:${t=>t.gridArea}; ${t=>t.isDynamicFeed?"border-radius: 8px":""}">
    <msn-top-stories
        class=${t=>t.isAnaheimDesign?"infopane-anaheim-design":""}
        card-size=${t=>t.cardSize}
        card-heading=${t=>t.topStoriesHeadingText}
        card-tooltip=${t=>t.tooltip}
        card-heading-link=${t=>t.headingLink}
        is-anaheim-design=${t=>t.isAnaheimDesign}
        is-anaheim-infopane=${t=>t.isAnaheimInfopane}
        disable-inline-action=${t=>t.disableTopStoriesInlineAction}
        feeds-2-carousel=${t=>t.enableFeeds2TopStoriesCarousel}
        prong2-dynamic-feed=${t=>t.isDynamicFeed}
        prong2-dynamic-gradient-background=${t=>t.useGradientBackground}
        layout=${t=>t.cardLayout}
        background=${t=>t.cardBackground}
        target=${t=>t.openLinksInNewTab?"_blank":"_self"}
        :cardData=${t=>t.listCardData}
        :headingTelemetryTag=${t=>t.telemetryContext&&t.telemetryContext.headingClick&&t.telemetryContext.headingClick.getMetadataTag()}
        :flipperNextTelemetryTag=${t=>t.telemetryContext&&t.telemetryContext.flipperNextClick&&t.telemetryContext.flipperNextClick.getMetadataTag()}
        :fliperPreviousTelemetryTag=${t=>t.telemetryContext&&t.telemetryContext.flipperPreviousClick&&t.telemetryContext.flipperPreviousClick.getMetadataTag()}
        :cardVersionTelemetryTag=${t=>t.telemetryContext&&t.telemetryContext.cardVersion&&t.telemetryContext.cardVersion.getMetadataTag()}
        :subCardTelemetryTag=${t=>t.telemetryContext&&t.telemetryContext.subCard&&t.telemetryContext.subCard.getMetadataTag()}
        :isSpotlightUX=${t=>t.isSpotlightUX}
        :spotlightBreakingNewsTagString=${t=>t.spotlightBreakingNewsTagString}
        data-t="${t=>{var e;return null===(e=t.telemetryContext)||void 0===e||null===(e=e.topStoriesCard)||void 0===e?void 0:e.getMetadataTag()}}"
    >
    </msn-top-stories>
</fluent-card>
`},40959:function(t,e,i){"use strict";i.d(e,{Z:function(){return a}});var n=i(96950);const a=(t,e)=>n.qy`
<msft-content-indicator slot="content-indicator" style="--control-corner-radius: 4">
    ${n.qy.partial(t)}
    ${e||""}
</msft-content-indicator>
`},45016:function(t){t.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.86 2.53c.6-.7 1.68-.7 2.28 0l6.62 7.8a1 1 0 01-.76 1.65h-3V17a1 1 0 01-1 1H7a1 1 0 01-1-1v-5.02H3a1 1 0 01-.76-1.65l6.62-7.8zm1.52.65a.5.5 0 00-.76 0L3 10.98h3.5c.28 0 .5.23.5.5V17h6v-5.52c0-.27.22-.5.5-.5H17l-6.62-7.8z"></path></svg>'},46613:function(t,e,i){"use strict";i.d(e,{P:function(){return c}});var n=i(930),a=i(8866),r=i(96950),o=i(11622),l=i(17254);const s=r.qy`
<fluent-card
        style="grid-area:${t=>t.gridArea};contain:unset;content-visibility:visible"
        class="${t=>t.cardLayout}">
    <fluent-design-system-provider style="padding: 0; height: 100%; margin: 0;">
        ${t=>t.moneyCardConfigInfo&&(0,o.yN)(t.moneyCardConfigInfo,{properties:{cardLayout:t.cardLayout,openLinksInNewTab:t.openLinksInNewTab,noGradient:t.noGradient,supportedSdCardActionMenuItems:t.supportedSdCardActionMenuItems,wpoMetadata:t.wpoMetadata,parentTelemetry:t.parentTelemetryObject,refreshSDCardSection:t.refreshSDCardSection,visualReadinessCallback:t.visualReadinessCallback,sdCardActionClickHandler:t.sdCardActionClickHandler,dismissActionMenu:t.dismissSDCardMenuCallback,cardSize:t.cardSize,cardType:t.cardType,cardFeedDataJson:t.cardFeedDataJson},attributes:{style:`grid-area:${t.gridArea};contain:unset;content-visibility:visible`},events:{goToPersonalizeSettingsCallback:t.goToPersonalizeSettingsCallback},memoize:"windowsShellV2"!==l.T3.AppType})}
    </fluent-design-system-provider>
</fluent-card>`,d=r.qy`${t=>t.moneyCardConfigInfo&&(0,o.yN)(t.moneyCardConfigInfo,{properties:{cardSize:t.cardSize===a.Go._1u?n.uE._1x_2y:t.cardSize,shellV2PreviewType:"windowsShellV2"===l.T3.AppType?t.previewType:"",feedData:t.feedData,cardType:t.cardType,experienceName:t.experienceName,wpoMetadata:t.wpoMetadata,isSpotlight:t.isSpotlightUX,cardId:t.cardId,parentTelemetryObject:t.parentTelemetryObject,refreshSDCardSection:t.refreshSDCardSection,refreshFeedCallback:t.refreshFeedCallback,visualReadinessCallback:t.visualReadinessCallback,dismissActionMenu:t.dismissSDCardMenuCallback,sdCardActionClickHandler:t.sdCardActionClickHandler,supportedSdCardActionMenuItems:t.supportedSdCardActionMenuItems,hasLoadedCallback:t.hasLoadedCallback,isWidgetRegion:t.isWidgetRegion,onSDCardClick:t.onSDCardClick,turnOffWidgetsRegionCallback:t.turnOffWidgetsRegionCallback,manageWidgetsRegionCallback:t.manageWidgetsRegionCallback},attributes:{style:`grid-area:${t.gridArea};contain:unset;content-visibility:visible`,initialPreviewType:t.previewType},events:{goToPersonalizeSettingsCallback:t.goToPersonalizeSettingsCallback},memoize:"windowsShellV2"!==l.T3.AppType})}`,c=r.qy`
    ${t=>{var e;return"MoneyInfo"===(null===(e=t.moneyCardConfigInfo.configRef)||void 0===e?void 0:e.experienceType)?d:s}}
`},46780:function(t,e,i){"use strict";i.d(e,{u:function(){return n}});const n=i(96950).qy`
    <fluent-card 
        style="grid-area:${t=>t.gridArea}"
        class="${t=>t.cardSize}"
    >
        <div class="placeholder-card" style="height: 100%;" />
    </fluent-card>
`},48520:function(t,e,i){"use strict";i.d(e,{D:function(){return s},G:function(){return l}});var n=i(65022),a=i(98216);let r,o;const l=()=>{o=new Map,r=new IntersectionObserver(t=>{for(const[t,e]of o.entries()){if(!(t&&e&&e.cardElement&&e.extTelemetry))return;const i=d(e.cardElement),n=i&&JSON.parse(i),a=n&&n.ext;if(!a||!a.row||!a.col)return;const r=`${a.row}-${a.col}`;t!==r&&(o.delete(t),o.set(r,{cardElement:e.cardElement,extTelemetry:a}))}t.forEach(t=>{const e=t.target,i=e&&d(e),n=i&&JSON.parse(i),a=n&&n.ext;if(!a||!a.row||!a.col)return;const r=`${a.row}-${a.col}`;t.isIntersecting?o.set(r,{cardElement:e,extTelemetry:a}):o.has(r)&&o.delete(r)})},{threshold:.99}),window.addEventListener("beforeunload",()=>{if("hidden"!==document.visibilityState)for(const[t,e]of o.entries()){if(!(t&&e&&e.cardElement&&e.extTelemetry))return;const i=t.split("-");if(isNaN(Number(i[0]))||isNaN(Number(i[1])))return;const n=parseFloat(i[0]),a=parseFloat(i[1]);c(e,o.get(`${n+1}-${a}`));c(e,o.get(`${n}-${a+1}`))}})},s=t=>{r&&t&&r.observe(t)};function d(t){if(t.classList&&t.classList.contains("infopane")){const e=t.querySelector("cs-article-card"),i=e&&e.shadowRoot&&e.shadowRoot.querySelector("cs-content-card");return i&&i.anchorTelemetryTag}return t.anchorTelemetryTag?t.anchorTelemetryTag:t.getAttribute("data-t")?t.getAttribute("data-t"):void 0}function c(t,e){if(!(t&&e&&e.cardElement&&e.extTelemetry&&t!==e))return;const i=t.cardElement.getBoundingClientRect(),r=e.cardElement.getBoundingClientRect();if(0===i.height||0===i.width||0===r.height||0===r.width)return;if(!(i.top>r.bottom||i.right<r.left||i.bottom<r.top||i.left>r.right)){const o=t.extTelemetry,l=e.extTelemetry;a.YT.sendAppErrorEvent({...n.ABd,message:"Feed cards are overlapping",pb:{...n.ABd.pb,customMessage:`{"${t.cardElement.id}": { "position": ${JSON.stringify(i)}, "slot": ${o.slot}, "template": "${o.template}", "row": ${o.row}, "col": ${o.col} },"${e.cardElement.id}": { "position": ${JSON.stringify(r)}, "slot": ${l.slot}, "template": "${l.template}", "row": ${l.row}, "col": ${l.col}}}`}})}}},48835:function(t,e,i){"use strict";i.d(e,{B:function(){return $},f:function(){return y}});var n,a=i(51675),r=i(81109),o=i(17967),l=i(43156),s=i(26863),d=i(40959),c=i(79765),p=i(930),u=i(39782),g=i(96950),h=i(91640),f=i(30216),b=i(2989),m=i(83003),v=i(18750);b.j,function(t){t.Long="long",t.Short="short"}(n||(n={}));const y=g.qy`
    <msft-article
        id="contentcard_${t=>t.id}"
        href=${t=>t.destinationUrl}
        target=${t=>t.openLinksInNewTab||t.openArticleInNewTab?"_blank":t.defaultAnchorTarget||"_self"}
        title=${t=>t.disableCardTitleTooltip?"":t.title}
        class="${t=>x(t)}"
        direction="${t=>t.dir}"
        :handleContentCardClickOverride=${t=>t.handleContentCardClickOverride}
        image-position=${t=>t.imagePosition?t.imagePosition:"end"}
        data-t="${t=>{var e;return null===(e=t.telemetryContext)||void 0===e||null===(e=e.contentCard)||void 0===e?void 0:e.getMetadataTag()}}"
        :anchorTelemetryTag=${t=>t.telemetryContext&&t.telemetryContext.destination&&t.telemetryContext.destination.getMetadataTag()}
        @mouseenter="${(t,e)=>t.setDisplacementHandler&&t.setDisplacementHandler(e,t.dir)}"
        @mouseleave="${(t,e)=>t.removeDisplacementHandler&&t.removeDisplacementHandler(e,t.dir)}"
        data-content-id=${t=>t.id}
        >
        ${(0,h.z)(t=>t.contentIndicator,t=>(0,d.Z)(t.contentIndicator))}
        ${(0,h.z)(t=>t.imageData,g.qy`
            <div slot="image" style="height: ${t=>t.imageData.imageHeight}px; position: relative; z-index: 0; overflow: hidden;">
            ${(0,h.z)(t=>t.isBlurred,g.qy`
                    <img
                        alt="${t=>t.imageData.altText}"
                        src="${t=>t.imageData.blurredSource}"
                        height="${t=>t.imageData.imageHeight}"
                        width="${t=>t.imageData.imageWidth}"
                        @load="${t=>t.imageData.visualReadinessCallback&&t.imageData.visualReadinessCallback()}"
                        style="position: absolute; z-index: -1; filter: blur(50px);"
                    />
                `)}
                <img
                    alt="${t=>t.imageData.altText}"
                    src="${t=>t.imageData.source}"
                    height="${t=>t.imageData.imageHeight}"
                    width="${t=>t.imageData.imageWidth}"
                    @load="${t=>{t.imageData.visualReadinessCallback&&t.imageData.visualReadinessCallback(t.isBlurred?1:3,c.j.image)}}"
                />
            </div>
        `)}
        ${t=>{!t.imageData&&t.visualReadinessCallback&&t.visualReadinessCallback()}}
        ${(0,h.z)(t=>t.feedFontSize,g.qy`
            ${(0,h.z)(t=>(t.cardSize===p.uE._1x_2y||t.cardSize===p.uE._1x_1y)&&t.imageData,g.qy`
                <span style="font-size: ${t=>t.feedFontSize}px; ${t=>t.headingLineHeight?`line-height: ${t.headingLineHeight}px`:""}">
                    ${t=>t.title}
                </span>`)}
            ${(0,h.z)(t=>t.cardSize===p.uE._2x_2y,g.qy`
                <span style="font-size: ${t=>t.twoColumnFeedFontSize||t.largeFeedFontSize||t.feedFontSize}px; ${t=>t.twoColumnHeadingLineHeight?`line-height: ${t.twoColumnHeadingLineHeight}px`:""}">
                    ${t=>t.title}
                </span>`)}
            ${(0,h.z)(t=>(t.cardSize===p.uE._1x_2y||t.cardSize===p.uE._1x_1y)&&!t.imageData,g.qy`<span style="font-size: ${t=>t.noImageFeedFontSize||t.feedFontSize}px;">${t=>t.title}</span>`)}
        `)}
        ${(0,h.z)(t=>!t.feedFontSize,g.qy`
            ${(0,h.z)(t=>!t.useLargeFontSize,g.qy`${t=>t.title}`)}
            ${(0,h.z)(t=>t.useLargeFontSize,g.qy`<span class="title${t=>t.cardSize}">${t=>t.title}</span>`)}
        `)}
        ${(0,h.z)(t=>k(t),g.qy`
            <p slot="abstract">${t=>t.abstract}</p>
        `)}
        ${(0,h.z)(t=>t.badge&&t.cardSize!==p.uE._1x_1y,t=>(0,a.w)(t.badge))}
        ${(0,h.z)(t=>t.providerData&&!t.isPublisherPage&&(!t.enableInfopaneLike2cCard||t.cardSize!==p.uE._2x_2y),r.vJ)}
        ${(0,h.z)(t=>{var e;return t.isPublisherPage&&t.userSubscriptionData&&"Premium"==(null===(e=t.metadata)||void 0===e?void 0:e.subscriptionProductType)},g.qy`
            <msn-subscription-badge
                slot="attribution"
                :userSubscriptionData="${t=>t.userSubscriptionData}"
                :cardSize="${t=>t.cardSize}"
            >
            </msn-subscription-badge>
        `)}
        <div slot="start-action" class="infopane-like-start-actions">
            ${(0,h.z)(t=>t.providerData&&t.enableInfopaneLike2cCard&&t.cardSize===p.uE._2x_2y,r.vJ)}
            ${(0,h.z)(t=>(!t.enableInfopaneLike2cCard||t.cardSize!==p.uE._2x_2y)&&(!t.isAnaheimDesign||t.enableRichSocialReaction),g.qy`
                ${(0,h.z)(t=>t.enableRichSocialReaction,t=>(0,s.nj)({}))}
                ${(0,h.z)(t=>t.cardActionStatus&f.J.enabled&&!t.enableRichSocialReaction,g.qy`
                    ${s.LW}
                    ${(0,h.z)(t=>!(t.cardActionStatus&f.J.showMore),s.tB)}
                `)}
            `)}
        </div>
        <div slot="end-action" class="infopane-like-end-actions">
            ${(0,h.z)(t=>t.enableRichSocialReaction&&t.enableInfopaneLike2cCard&&t.cardSize===p.uE._2x_2y,(0,s.nj)({}))}
            ${(0,h.z)(t=>t.cardActionStatus&f.J.enabled,g.qy`
                ${(0,h.z)(t=>t.enableRichSocialReaction&&t.enableWCSaveButton,g.qy`
                    ${(0,h.z)(t=>!t.optedOutOfReactions&&t.cardActionStatus&f.J.showMore,s.LW)}
                    ${(0,h.z)(t=>!t.optedOutOfReactions&&t.cardActionStatus&f.J.showFewer,s.tB)}
                `)}
                ${(0,h.z)(t=>t.enableWCCardAction,l.L)}
            `)}
        </div>
        ${(0,h.z)(t=>!t.disableHideOnHover&&t.cardActionStatus&f.J.enabled&&!t.isWebContent,o.C)}
    </msft-article>
`,$=g.qy`
<style>
    .card-button {
        border-radius: 100%;
    }

    @media (forced-colors:active) {
        .card-button {
            background: none;
        }

        msn-social-bar::part(button-bg),
        msn-social-bar::part(reactions-count-button),
        msn-social-bar::part(comments-count-button) {
            color: buttontext;
            background-color: buttonface;
        }

        msn-social-bar::part(button-bg):hover,
        msn-social-bar::part(button-bg):focus-visible,
        msn-social-bar::part(reactions-count-button):hover,
        msn-social-bar::part(reactions-count-button):focus-visible,
        msn-social-bar::part(comments-count-button):hover,
        msn-social-bar::part(comments-count-button):focus-visible {
            color: buttonface;
            background-color: highlight;
        }
    }

    @media (forced-colors: active) {
        @media (prefers-color-scheme: dark) {
            msft-article#contentcard_${t=>t.id} msft-content-indicator svg[width="40"] path {
                fill: rgb(0, 0, 0);
            }
        }
    }

    @media (prefers-color-scheme: dark) {
        msft-article#contentcard_${t=>t.id} {
            --article-background-color: ${t=>{var e;return null===(e=t.articleCardBackgroundColor)||void 0===e||null===(e=e.find(t=>t.isDarkMode))||void 0===e?void 0:e.hexColor}};
        }
    }

    @media (prefers-color-scheme: light) {
        msft-article#contentcard_${t=>t.id} {
            --article-background-color: ${t=>{var e;return null===(e=t.articleCardBackgroundColor)||void 0===e||null===(e=e.find(t=>!t.isDarkMode))||void 0===e?void 0:e.hexColor}};
        }
    }

    msft-article-card[size$="x_2y"] msft-article::part(heading):after {
        top: calc(100% - ${t=>t.fixedCardHeight?304:292+(t.layoutGap||12)}px) !important;
    }

    msft-article.no-image::part(heading) {
        font-size: var(--msft-article-heading-font-size, 20px);
        line-height: var(--msft-article-heading-line-height, 28px);
    }

    msft-article-card msft-content-indicator {
        pointer-events: none;
    }

    msft-article-card[size="_1x_1y"] msft-article[direction="rtl"]:not(.no-image) msft-content-indicator{
        right: 204px;
        left: auto;
    }

    msft-article-card[size="_1x_1y"] msft-article:not(.no-image) msft-content-indicator{
        top: 18px;
        left: 204px;
    }

    ${(0,h.z)(t=>t.contentType===m.pL.Video,g.qy`
        msft-article-card msft-article msft-content-indicator {
            color: transparent;
        }
        msft-article-card msft-article msft-content-indicator::after{
            background: transparent;
        }

        msft-article-card[size="_1x_1y"] msft-article msft-content-indicator{
            left: 233px !important;
            top: 44px !important;
        }

        msft-article-card[size="_1x_2y"] msft-article msft-content-indicator{
            left: 130px;
            top: 88px;
        }

        msft-article-card[size="_2x_2y"] msft-article msft-content-indicator{
            left: 286px;
            top: 88px;
        }

        msft-article-card[size$="x_2y"] msft-article.no-image msft-content-indicator::part(icon-container) {
            min-width: 40px;
        }

        ${(0,h.z)(t=>"rtl"==t.dir,g.qy`
            msft-article-card[size="_1x_1y"] msft-article msft-content-indicator{
                right: 233px !important;
                top: 44px !important;
            }

            msft-article-card[size="_1x_2y"] msft-article msft-content-indicator{
                right: 130px;
                top: 88px;
            }

            msft-article-card[size="_2x_2y"] msft-article msft-content-indicator{
                right: 286px;
                top: 88px;
            }
        `)}
    `)}

    msft-article-card[size="_1x_2y"] msft-article.no-image msft-attribution {
        margin-bottom: 18px;
    }

    msft-article.long-gradient::part(gradient) {
        top: -55px;
    }

    /* TODO: These hard-coded styles will be cleaned up later as tracked in this task:
     * Task 3620803 - [Anaheim] Migrate article card to an independent wc or wce
     * https://msasg.visualstudio.com/ContentServices/_workitems/edit/3620803
     */
    ${(0,h.z)(t=>t.isAnaheimDesign&&!t.enableVerticalGradientCard&&!t.isInfopane&&t.isImage43,g.qy`
        msft-article-card[size="_2x_2y"].contentCard msft-article:not(.no-image)::part(gradient) {
            background: linear-gradient( ${t=>t.gradientDeg}deg, transparent 0%, var(--gradient-mid-color) 60px, var(--gradient-color) 96px );
            width: 344px;
        }
    `)}

    ${(0,h.z)(t=>t.isAnaheimDesign&&!t.enableVerticalGradientCard&&t.isInfopane&&t.isImage43,g.qy`
        msft-article-card[size="_2x_2y"].infopane msft-article:not(.no-image)::part(gradient) {
            /* Merged two linear-gradient into one:
             * 1. linear-gradient(270deg, rgba(122, 84, 80, 0) 0%, rgba(122, 84, 80, 0.8) 100%); on the element with width 60px
             * 2. linear-gradient(270deg, rgba(122, 84, 80, 0.8) 0%, #7A5450 46.88%); on one element with width 77px
             */
            background: linear-gradient( ${t=>t.gradientDeg}deg, transparent 0%, var(--gradient-mid-color) 60px, var(--gradient-color) 96px );
            width: 344px;
        }
    `)}

    ${(0,h.z)(t=>t.isAnaheimDesign&&t.enableVerticalGradientCard||t.enableLinearFeed2cVerticalGradientCard,g.qy`
        msft-article-card[size="_2x_2y"].${t=>t.isInfopane?"infopane":"contentCard"} msft-article::part(heading) {
            line-height: var(--heading-line-height, 28px);
        }

        msft-article-card[size="_2x_2y"].${t=>t.isInfopane?"infopane":"contentCard"} msft-article:not(.no-image)::part(heading) {
            margin-bottom: 40px;
        }

        msft-article-card[size="_2x_2y"].${t=>t.isInfopane?"infopane":"contentCard"} msft-article:not(.no-image)::part(gradient) {
            background: linear-gradient( 180deg, transparent 0%, var(--gradient-mid-color) 62.5%, var(--gradient-color) 100% );
            width: 100%;
        }

        msft-article-card[size="_2x_2y"].${t=>t.isInfopane?"infopane":"contentCard"} msft-article:not(.no-image)::part(text) {
            height: auto;
            width: 100%;
        }

        msft-article-card[size="_2x_2y"].${t=>t.isInfopane?"infopane":"contentCard"} msft-article:not(.no-image)::part(attribution) {
            display: flex;
            align-self: end;
        }

        msft-article-card[size="_2x_2y"].${t=>t.isInfopane?"infopane":"contentCard"} msft-attribution {
            margin-bottom: 8px;
        }
    `)}

    msft-article-card[size="_1x_2y"] msft-article:not(.no-image)::part(gradient) {
        bottom: ${t=>t.fixedCardHeight?77:65+(t.layoutGap||12)}px;
    }

    ${(0,h.z)(t=>t.alignFooters,g.qy`
        msft-article-card[size$="x_2y"] msft-article::part(heading):after {
            top: calc(100% - ${t=>t.fixedCardHeight?304:292+(t.layoutGap||12)}px - 8px) !important;
        }

        msft-article::part(text) {
            margin-bottom: -8px;
        }

        msft-article-card[size="_1x_2y"] msft-article:not(.no-image)::part(gradient) {
            top: -29px;
            bottom: calc(${t=>t.fixedCardHeight?78:66+(t.layoutGap||12)}px + 8px);
        }

        msft-article.no-image::part(actions) {
            bottom: calc(var(--msft-article-padding) * 1px - 8px);
        }
    `)}

    msft-article-card[size="_1x_2y"] msft-article[class*="zoom-ratio"]:not(.no-image)::part(gradient):after {
        content: "";
        height: 10px;
        width: 100%;
        bottom: -5px;
        position: absolute;
        background: var(--gradient-mid-color);
    }

    ${(0,h.z)(t=>t.layoutGap,g.qy`
        msft-article-card[size="_1x_2y"] msft-article.no-image::part(gradient),
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

    msft-article span.title_1x_2y,
    msft-article span.title_2x_2y {
        font-size: 20px;
    }

    ${(0,h.z)(t=>t.enableTitleClickableOnly,g.qy`
        msft-article-card:hover msft-article::part(heading) {
            position: relative;
        }
    `)}

    ${(0,h.z)(t=>t.useTitleFontSize,g.qy`
        msft-article-card {
            --msft-article-heading-font-size: ${t=>t.useTitleFontSize}px;
            --msft-article-heading-line-height: 26px;
        }

        msft-article-card msft-article::part(attribution) {
            height: 28px;
        }

        msft-article-card[size="_1x_2y"] msft-article:not(.no-image)::part(heading) {
            margin-bottom: 11px;
        }

        msft-article-card[size="_1x_2y"] msft-article:not(.no-image)::part(gradient) {
            background: linear-gradient(180deg, transparent 0%, var(--gradient-mid-color) 46%, var(--gradient-color) 100%);
            top: 5px;
        }

        ${(0,h.z)(t=>!t.isAnaheimDesign&&!t.enableLinearFeed2cVerticalGradientCard,g.qy`
            msft-article-card[size="_2x_2y"].contentCard msft-article:not(.no-image)::part(heading),
            msft-article.no-image::part(heading) {
                margin-bottom: 8px;
            }
        `)}
    `)}

    ${(0,h.z)(t=>!t.isAnaheimDesign&&t.isImage43&&!t.enableLinearFeed2cVerticalGradientCard,g.qy`
        msft-article-card[size="_2x_2y"] msft-article:not(.no-image)::part(gradient) {
            background: linear-gradient(${t=>t.gradientDeg}deg, transparent 0%, var(--gradient-mid-color) 55px, var(--gradient-color) 120px);
            width: 347px;
        }
    `)}

    ${u.Y.getArticleCardHoverGradientStyle()}

    ${(0,h.z)(t=>!t.isAnaheimDesign&&!t.optedOutOfReactions,g.qy`
        msft-article-card[size="_1x_2y"].contentCard msft-article::part(text) {
            padding-bottom: 10px;
        }
        msft-article-card.contentCard msft-article::part(actions) {
            bottom: 10px;
        }
    `)}

    ${(0,h.z)(t=>!t.isAnaheimDesign&&!t.isHubDesign&&!t.optedOutOfReactions,g.qy`
        msft-article-card.contentCard msft-article div[slot="end-action"] {
            display: flex;
            height: 20px;
            margin: 6px 0;
        }
    `)}

    msft-article-card[size="_1x_1y"].contentCard msft-article:not(.no-image)::part(actions) {
        bottom: -2px;
    }

    ${(0,h.z)(t=>t.enableInfopaneLike2cCard,g.qy`
    msft-article-card[size="_2x_2y"].contentCard msft-article div.infopane-like-start-actions msft-attribution {
            margin-bottom: 0;
        }
        msft-article-card[size="_2x_2y"].contentCard msft-article div.infopane-like-start-actions,
        msft-article-card[size="_2x_2y"].contentCard msft-article div.infopane-like-end-actions {
            display: grid;
            gap: 0px;
            align-items: center;
            grid-auto-flow: column;
        }
    `)}

    msft-article[id="contentcard_${t=>t.id}"] div.infopane-like-end-actions {
        display: flex;
    }

    /* 
     * Here about 'from the web' attribution style
     */
    ${(0,h.z)(t=>t.enableInfopaneLike2cCard&&t.cardSize===p.uE._2x_2y,g.qy`
        msft-article[id="contentcard_${t=>t.id}"] .infopane-like-start-actions {
            flex:1;
        }
        msft-article[id="contentcard_${t=>t.id}"] msft-attribution::part(image){
            white-space: nowrap;
        }
        msft-article[id="contentcard_${t=>t.id}"] msft-attribution {
            display: flex;
        }
    `)}

    msft-article[id="contentcard_${t=>t.id}"] msft-attribution, msft-article[id="contentcard_${t=>t.id}"] msft-attribution::part(content){
        width: calc(100%);
        ${t=>t.isProviderIconClickable?"display: flex":""};
    }
    msft-article[id="contentcard_${t=>t.id}"] .attribution_container_${t=>t.id} {
        width: calc(100%);
        min-height: var(--type-ramp-minus-1-line-height);
        position: relative;
        overflow: hidden;
        white-space: nowrap;
    }
    msft-article[id="contentcard_${t=>t.id}"] .attribution_Content_${t=>t.id} {
        position:absolute;
        transition: all 0.5s ease-out;
    }

    ${(0,h.z)(t=>t.isDynamicFeed,g.qy`
        msft-article-card[size="_1x_1y"].contentCard msft-article::part(heading) {
            --msft-article-heading-font-size: 16px;
            --msft-article-heading-line-height: 22px;
            height: 66px;
            -webkit-line-clamp: 3;
            margin-top: -6px;
        }
        msft-article-card[size="_1x_1y"].contentCard msft-article:not(.no-image)::part(actions) {
            bottom: -12px;
        }
        msft-article-card[size="_1x_1y"].contentCard div[slot='image'] {
            border-radius: 6px;
        }
        msft-article-card[size="_1x_1y"],
        msft-article-card[size="_1x_2y"],
        msft-article-card[size="_2x_2y"] {
            border-radius: calc(var(--layer-corner-radius) * 2px);
        }
    `)}
</style>

<msft-article-card
    style="grid-area:${t=>t.gridArea};"
    size="${t=>t.cardSize}"
    card-fill-color="${t=>{var e;return null===(e=t.articleCardBackgroundColor)||void 0===e||null===(e=e.find(t=>t.isDarkMode===(0,v.ud)()))||void 0===e?void 0:e.hexColor}}"
    class="${t=>t.isInfopane?"infopane":"contentCard"}"
    data-badge-type="${t=>t.badge&&t.badge.type}"
>
    ${y}
</msft-article-card>
`,x=t=>{let e="";return t.imageData||(e+="no-image "),t.gradientType===n.Long&&(e+="long-gradient"),e},k=t=>t.abstract},49513:function(t,e,i){"use strict";i.d(e,{RG:function(){return d},mQ:function(){return c}});var n=i(12870),a=i(65022),r=i(93468),o=i(17720);var l;!function(t){t.InterstitialNativeAdCard="InterstitialNativeAdCard",t.LinearFeedNativeAdCard="LinearFeedNativeAdCard",t.ViewsNativeAd="ViewsNativeAd",t.InfopaneCardTemplate="InfopaneCardTemplate",t.NativeAdCardTemplate="NativeAdCardTemplate",t.SuperNativeAdCard="SuperNativeAdCard",t.NativeAdCardT1Full="NativeAdCardT1Full",t.MobileAdCardTemplate="MobileAdCardTemplate",t.SuperMobileNativeAdCardNeutron="SuperMobileNativeAdCardNeutron",t.EdgeMobileInfopaneCard="EdgeMobileInfopaneCard",t.MobileEOABCard="MobileEOABCard"}(l||(l={}));const s=t=>{var e;let{id:i,destinationUrl:n,imgLink:l,renderAreaSize:s}=t;if(null==l||!l.startsWith("https://www.bing.com/th?")||!s)return;const d=function(t){const e=new URLSearchParams(t.split("?")[1]),i=Number(e.get("w")),n=Number(e.get("h"));return isNaN(i)||isNaN(n)||i<=0||n<=0?null:{width:i,height:n}}(l),c=null===(e=location)||void 0===e?void 0:e.href;if(!d){const t={id:i,currentPageUrl:c,destinationUrl:n,imgLink:l,renderAreaSize:s};return void(0,r.vV)(a.Ztd,"Ad Size Mismatch: Can not found proper image size from response image URL",void 0,t)}const p=o.vv.get("AdSizeMismatchRecord")||new Map,u=(t=>t?t.replace(/\d+$/,""):"")(i);if(!p.has(u)){if(p.set(u,1),o.vv.set("AdSizeMismatchRecord",p),0===s.height||0===d.height)return;const t=s.width!==d.width||s.height!==d.height,e=s.width/s.height,g=d.width/d.height,h=Math.round(100*Math.abs(e-g))/100;if(t&&h>.03){const t={id:i,currentPageUrl:c,destinationUrl:n,imgLink:l,renderAreaSize:s,renderAreaSizeRatio:e.toFixed(2),responseImageSize:d,responseImageSizeRatio:g.toFixed(2)};(0,r.vV)(a.Ztd,"Ad Size Mismatch: Detected size mismatch between response image VS render area",void 0,t)}}},d=(t,e,i,n)=>{if(!n||!i)return;const a=n.offsetWidth||Number(n.width),r=n.offsetHeight||Number(n.height);a&&r&&s({id:t,destinationUrl:e,imgLink:i,renderAreaSize:{width:a,height:r}})},c=(t,e,i)=>{var a,r,o,l,s,c,p,u,g,h,f;if(n.Rb.CurrentFlightSet.has("prg-ad-size-mis"))try{switch(i){case"LinearFeedNativeAdCard":case"NativeAdCardTemplate":case"SuperNativeAdCard":case"NativeAdCardT1Full":case"MobileAdCardTemplate":case"SuperMobileNativeAdCardNeutron":case"MobileEOABCard":d(t.id,t.destinationUrl,null===(a=t.imageData)||void 0===a?void 0:a.source,null===(r=e.parent)||void 0===r||null===(r=r.shadowRoot)||void 0===r||null===(o=r.querySelector)||void 0===o?void 0:o.call(r,`#${t.id}-img`));break;case"EdgeMobileInfopaneCard":d(t.id,t.destinationUrl,null===(l=t.imageData)||void 0===l?void 0:l.source,null===(s=e.parentContext)||void 0===s||null===(s=s.parent)||void 0===s||null===(s=s.shadowRoot)||void 0===s||null===(c=s.querySelector)||void 0===c?void 0:c.call(s,`#${t.id}-img`));break;case"ViewsNativeAd":d(t.id,t.destinationUrl,t.imageUrl,null===(p=e.parent)||void 0===p||null===(p=p.shadowRoot)||void 0===p||null===(u=p.querySelector)||void 0===u||null===(u=u.call(p,"msft-content-card"))||void 0===u?void 0:u.querySelector(`#${t.id}-img`));break;case"InfopaneCardTemplate":d(t.id,t.destinationUrl,null===(g=t.imageData)||void 0===g?void 0:g.source,null===(h=e.parentContext)||void 0===h||null===(h=h.parentContext)||void 0===h||null===(h=h.parent)||void 0===h||null===(h=h.shadowRoot)||void 0===h||null===(f=h.querySelector)||void 0===f?void 0:f.call(h,`#${t.id}-img`))}}catch(t){return null}}},50866:function(t,e,i){"use strict";i.d(e,{L9:function(){return r},NZ:function(){return a},qJ:function(){return n}});const n={_1x_1y:"_1x_1y",_1x_2y:"_1x_2y",_2x_2y:"_2x_2y",_2x_1y:"_2x_1y"},a={DarkPlum:"dark-plum",DarkDesert:"dark-desert",DarkDawn:"dark-dawn",DarkSea:"dark-sea",DarkOrange:"dark-orange",DarkTropic:"dark-tropic",DarkMerlot:"dark-merlot",DarkPurple:"dark-purple",DarkGreen:"dark-green"},r={LightBlue:"light-blue",LightPurple:"light-purple",LightSky:"light-sky",LightPink:"light-pink",LightYellow:"light-yellow",LightBluebird:"light-bluebird",LightOrange:"light-orange",LightAqua:"light-aqua",LightGreen:"light-green"}},51098:function(t,e,i){"use strict";i.d(e,{G:function(){return a}});var n=i(11372);const a=t=>{if(!t)return;const e=t.addOrUpdateChild({name:"TabbedInfopane",type:n.MJ.Headline}),i=e.addOrUpdateChild({name:"taball",behavior:n.MS.Show,content:{headline:"taball"},type:n.MJ.ActionButton}),a=e.addOrUpdateChild({name:"tabentertainment",behavior:n.MS.Show,content:{headline:"tabentertainment"},type:n.MJ.ActionButton}),r=e.addOrUpdateChild({name:"tabsports",behavior:n.MS.Show,content:{headline:"tabsports"},type:n.MJ.ActionButton}),o=e.addOrUpdateChild({name:"tabnewsnational",behavior:n.MS.Show,content:{headline:"tabnewsnational"},type:n.MJ.ActionButton}),l=e.addOrUpdateChild({name:"tabnewsworld",behavior:n.MS.Show,content:{headline:"tabnewsworld"},type:n.MJ.ActionButton}),s=e.addOrUpdateChild({name:"tabfinancebusiness",behavior:n.MS.Show,content:{headline:"tabfinancebusiness"},type:n.MJ.ActionButton}),d=e.addOrUpdateChild({name:"tablifestyle",behavior:n.MS.Show,content:{headline:"tablifestyle"},type:n.MJ.ActionButton}),c=e.addOrUpdateChild({name:"tabbusinessnews",behavior:n.MS.Show,content:{headline:"tabbusinessnews"},type:n.MJ.ActionButton}),p=e.addOrUpdateChild({name:"tabscienceandtechnology",behavior:n.MS.Show,content:{headline:"tabscienceandtechnology"},type:n.MJ.ActionButton});return{componentRoot:t,tabbedInfopane:e,tabAll:i,tabEntertainment:a,tabSports:r,tabNewsNational:o,tabNewsWorld:l,tabFinanceBusiness:s,tabLifestyle:d,tabBusinessNews:c,tabScienceAndTechnology:p}}},51675:function(t,e,i){"use strict";i.d(e,{w:function(){return r}});var n=i(930),a=i(96950);const r=function(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return a.qy`
    <msn-content-badge
        slot="content-indicator"
        iconName=${t.type}
        showColored=${e}
        class=${t=>i&&t.contentIndicator&&(t.cardSize!==n.uE._1x_1y||t.imageData)&&"video"!=t.contentType?"offset-engagement-badge":""}
    >
        ${t.localizedLabel||t.value}
    </msn-content-badge>
`}},53140:function(t,e,i){"use strict";i.d(e,{K:function(){return m}});var n=i(81109),a=i(77087),r=i(43156),o=i(80904),l=i(26863),s=i(40959),d=i(79765),c=i(930),p=i(96950),u=i(91640),g=i(30216),h=i(83003);const f=(t,e)=>`${e}${t.cardSize!==c.uE._1x_2y&&t.cardSize!==c.uE._1x_3y||t.imageData?t.cardSize:t.cardSize+"_no_image"}`,b=p.qy`
    <style>
        .card-see-more {
            box-sizing: border-box;
            align-items: center;
            background-color: rgb(255, 255, 255);
            border-radius: 100%;
            border: 1px solid rgb(229, 229, 229);
            cursor: pointer;
            display: flex;
            fill: currentcolor;
            font-family: var(--body-font);
            font-size: var(--type-ramp-base-font-size);
            height: 28px;
            justify-content: center;
            line-height: var(--type-ramp-base-line-height);
            margin-inline-start: 4px;
            min-width: 28px;
            outline: none;
            padding: 0px;
            position: relative;
        }
        .card-see-more: hover {
            background-color: rgb(242, 242, 242);
        }
        .msn-hp-external-link-abstract {
            font-size: 12px;
            z-index: 1;
            position: absolute;
            top: 25px;
            left: 8px; 
            user-select: none;
        }

        /* 
         * Here about 'from the web' attribution style
         */
        msft-content-card[id="contentcard_${t=>t.id}"]::part(start-actions) {
            flex:1;
        }
        msft-content-card[id="contentcard_${t=>t.id}"] msft-attribution::part(image){
            white-space: nowrap;
        }
        msft-content-card[id="contentcard_${t=>t.id}"] msft-attribution, msft-content-card[id="contentcard_${t=>t.id}"] msft-attribution::part(content){
            width: calc(100%);
            ${t=>t.isProviderIconClickable?"display: inline-flex":""}
        }
        msft-content-card[id="contentcard_${t=>t.id}"] msft-attribution {
            display: flex;
        }
        msft-content-card[id="contentcard_${t=>t.id}"] .attribution_container_${t=>t.id} {
            width: calc(100%);
            min-height: var(--type-ramp-minus-1-line-height);
            position: relative;
            overflow: hidden;
            white-space: nowrap;
        }
        msft-content-card[id="contentcard_${t=>t.id}"] .attribution_Content_${t=>t.id} {
            position:absolute;
            transition: all 0.5s ease-out;
        }
        ${(0,u.z)(t=>t.contentType===h.pL.Video,p.qy`
            msft-content-card msft-content-indicator {
                color: transparent;
            }
            msft-content-card msft-content-indicator::after{
                background: transparent;
            }

            msft-content-card msft-content-indicator{
                left: 130px;
                top: 88px;
            }
        `)}
    </style>
    <msft-content-card
        exportparts="heading, abstract"
        id="contentcard_${t=>t.id}"
        class="${t=>t.isWebContent&&"web-content"}"
        href=${t=>t.destinationUrl}
        target=${t=>t.openLinksInNewTab?"_blank":"_self"}
        title=${t=>t.disableCardTitleTooltip?"":t.title}
        aria-label=${t=>t.ariaLabel}
        ?image-priority=${t=>t.imagePriority}
        style="--heading-max-lines: 3; --footer-start-padding: 8px;"
        :handleContentCardClickOverride=${t=>t.handleContentCardClickOverride}
        data-t="${t=>{var e;return null===(e=t.telemetryContext)||void 0===e||null===(e=e.contentCard)||void 0===e?void 0:e.getMetadataTag()}}"
        :anchorTelemetryTag=${t=>t.telemetryContext&&t.telemetryContext.destination&&t.telemetryContext.destination.getMetadataTag()}
        @mouseenter="${(t,e)=>t.setDisplacementHandler&&t.setDisplacementHandler(e,t.dir)}"
        @mouseleave="${(t,e)=>t.removeDisplacementHandler&&t.removeDisplacementHandler(e,t.dir)}"
    >
        ${(0,u.z)(t=>t.contentIndicator&&!(t.cardSize===c.uE._1x_1y&&!t.imageData),t=>(0,s.Z)(t.contentIndicator))}
        ${(0,u.z)(t=>!t.isAnaheimDesign,p.qy`${t=>t.title}`)}
        ${(0,u.z)(t=>t.isAnaheimDesign&&!t.useSmallFontSize,p.qy`<span class="${t=>f(t,"title")}">${t=>t.title}</span>`)}
        ${(0,u.z)(t=>t.isAnaheimDesign&&t.useSmallFontSize,p.qy`${t=>t.title}`)}
        ${(0,u.z)(t=>t.abstract,p.qy`
            <p slot="abstract" style="${t=>!t.isWebContent&&"color: var(--neutral-foreground-rest);"}" class="${t=>f(t,"abstract")} ${t=>t.isMsnHpExternalLinkCard?"msn-hp-external-link-abstract":""}">
                ${t=>t.abstract}
            </p>
        `)}
        <!-- Only use placeholder -->
        <!-- If image data exists && 1x_2y && image priority -->
        ${(0,u.z)(t=>!(!t.imageData||t.cardSize!==c.uE._1x_2y||!t.imagePriority),p.qy`
            <div slot="media" style="height: ${t=>t.imageData.imageHeight}px;width: ${t=>t.imageData.imageWidth}px;">
                <img
                    alt="${t=>t.imageData.altText}"
                    src="${t=>t.imageData.source}"
                    height="${t=>t.imageData.imageHeight}"
                    width="${t=>t.imageData.imageWidth}"
                    @load="${t=>{t.imageData.visualReadinessCallback&&t.imageData.visualReadinessCallback(3,d.j.image)}}"
                />
            </div>
        `)}
        ${(0,u.z)(t=>!(!t.imageData||t.cardSize===c.uE._1x_2y&&t.imagePriority),p.qy`
            <img
                slot="media"
                alt="${t=>t.imageData.altText}"
                src="${t=>t.imageData.source}"
                height="${t=>t.imageData.imageHeight}"
                width="${t=>t.imageData.imageWidth}"
                @load="${t=>{t.imageData.visualReadinessCallback&&t.imageData.visualReadinessCallback(3,d.j.image)}}"
            />
        `)}
        ${t=>{!t.imageData&&t.visualReadinessCallback&&t.visualReadinessCallback()}}
        ${(0,u.z)(t=>t.providerData,p.qy`
            <msft-attribution slot="${t=>t.isProviderInFooter?"start-actions":"attribution"}" style="${t=>t.isProviderInFooter?"gap:0; z-index: 0":""}">
                ${(0,n.mt)()}
                <div class="attribution_container_${t=>t.id}" id="attribution_container">
                    <div class="attribution_Content_${t=>t.id}" style="${t=>"rtl"===t.dir?"right":"left"}:0px;">
                        ${(0,u.z)(t=>t.providerData&&t.providerData.name&&!t.isProviderIconClickable,p.qy`<span style="unicode-bidi: embed;">${t=>t.providerData.name}</span>`)}
                        ${(0,u.z)(t=>t.providerData&&t.providerData.name&&t.publishedDateTime,p.qy` · `)}
                        ${(0,u.z)(t=>t.publishedDateTime,p.qy`<span style="unicode-bidi: embed;">${t=>t.publishedDateTime}</span>`)}
                        ${(0,u.z)(t=>t.isWebContent&&t.crawledContentLabel,p.qy` · `)}
                        ${(0,u.z)(t=>t.isWebContent&&t.crawledContentLabel,p.qy`${t=>t.crawledContentLabel}`)}
                    </div>
                </div>
            </msft-attribution>
        `)}
        <!-- Workaround for bug in MsftContentCard: footer without end-actions will not be displayed. -->
        ${(0,u.z)(t=>t.providerData&&t.isProviderInFooter,p.qy`
            <div slot="end-actions"></div>
        `)}
        ${(0,u.z)(t=>t.cardActionStatus&g.J.enabled&&!t.disableHideOnHover,a.K)}
        ${(0,u.z)(t=>!t.isAnaheimDesign||t.enableRichSocialReaction,p.qy`
            <div slot="start-actions" style="gap:0">
                ${(0,u.z)(t=>t.enableRichSocialReaction,t=>(0,l.nj)({hideComments:t.hideComments}))}
                ${(0,u.z)(t=>t.cardActionStatus&g.J.enabled&&!t.enableRichSocialReaction,p.qy`
                    ${l.LW}
                    ${l.tB}
                `)}
            </div>
        `)}
        ${(0,u.z)(t=>!t.isAnaheimDesign||t.enableRichSocialReaction,p.qy`
            <div slot="end-actions" style="gap:0">
                ${(0,u.z)(t=>t.cardActionStatus&g.J.enabled,p.qy`
                    ${(0,u.z)(t=>t.enableRichSocialReaction&&t.enableWCSaveButton,p.qy`
                        ${(0,u.z)(t=>!t.optedOutOfReactions&&t.cardActionStatus&g.J.showMore,l.LW)}
                        ${(0,u.z)(t=>!t.optedOutOfReactions&&t.cardActionStatus&g.J.showFewer,l.tB)}
                    `)}
                    ${(0,u.z)(t=>t.enableWCCardAction,r.L)}
                `)}
            </div>
        `)}
        ${(0,u.z)(t=>t.enableHoverCardAction&&!t.optedOutOfReactions,o.p)}
    </msft-content-card>
 `,m=p.qy`
    <style>
        ${(0,u.z)(t=>t.articleCardBackgroundColor&&t.showColorfulHalfUContentCard,p.qy`
            .content-card-gradient-mask {
                padding: 0; 
                width: 100%; 
                height: 100%;
            }

            @media (prefers-color-scheme: dark) {
                .content-card-gradient-mask#contentcardmask_${t=>t.id} {
                    background: linear-gradient(160deg, #404040 0%, ${t=>{var e;return null===(e=t.articleCardBackgroundColor)||void 0===e||null===(e=e.find(t=>t.isDarkMode))||void 0===e?void 0:e.hexColor}} 150%);
                }
            }

            @media (prefers-color-scheme: light) {
                .content-card-gradient-mask#contentcardmask_${t=>t.id} {
                    background: linear-gradient(160deg, #e5e5e5 0%, ${t=>{var e;return null===(e=t.articleCardBackgroundColor)||void 0===e||null===(e=e.find(t=>!t.isDarkMode))||void 0===e?void 0:e.hexColor}} 150%);
                }
            }
        `)}

        msft-content-card .card-button:not(:hover) {
            background: transparent;
        }
        msft-content-card fluent-button::part(control) {
            padding: 0;
        }
        msft-content-card(:not(.web-content))::part(footer) {
            padding: 0 16px 4px;
            margin-bottom: 0;
            height: 40px;
        }
        msft-attribution {
            position: relative;
            overflow: hidden;
        }
        msft-content-card span.title_1x_2y,
        msft-content-card span.title_1x_3y {
            font-size: 20px;
        }
        msft-content-card span.title_1x_2y_no_image {
            font-size: 24px;
            line-height: 32px;
        }
        msft-content-card span.title_1x_3y_no_image {
            font-size: 16px;
            line-height: 22px;
        }
        msft-content-card p.abstract_1x_2y_no_image {
            font-size: 16px;
            line-height: 22px;
            margin-top: 12px;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
        msft-content-card p.abstract_1x_3y_no_image {
            font-size: 14px;
            line-height: 20px;
            margin-top: 12px;
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        fluent-card._1x_3y msft-content-card::part(abstract) {
            padding-left: var(--abstract-start-padding, 16px);
        }
    </style>
    <fluent-card
        style="grid-area:${t=>t.gridArea}"
        class="${t=>t.cardSize}"
    >
        ${(0,u.z)(t=>t.articleCardBackgroundColor&&t.showColorfulHalfUContentCard,p.qy`
            <div class="content-card-gradient-mask"
                id="contentcardmask_${t=>t.id}"
            >
                ${b}
            </div>
        `)}
        ${(0,u.z)(t=>!t.articleCardBackgroundColor||!t.showColorfulHalfUContentCard,p.qy`
            ${b}
        `)}
    </fluent-card>
`},59646:function(t,e,i){"use strict";i.d(e,{kM:function(){return p},pS:function(){return u}});var n=i(17254),a=i(19548);const r=[],o=1e3,l=1e3,s=new Map;function d(){return"vp"===a._3.getQueryParameterByName("reqsrc",location.href)||"1"===a._3.getQueryParameterByName("vptest",location.href)}function c(t){var e;return null===n.T3||void 0===n.T3||null===(e=n.T3.CurrentRequestTargetScope)||void 0===e?void 0:e.pageExperiments.some(e=>e.includes(t))}function p(t,e,i){t&&"function"==typeof e&&!r.includes(t)&&(d()||(c("prg-mousehovrev")?(r.push(t),setTimeout(()=>{!function(t,e){if(!r.includes(t))return;e();const i=r.indexOf(t);i>-1&&r.splice(i,1)}(t,e)},i??o)):function(t,e,i){const n=Date.now(),a=s.get(t)||{enterTimer:null,lastHoverTime:0,pendingLeave:!1};if(n-a.lastHoverTime<l)return;a.enterTimer&&clearTimeout(a.enterTimer);a.enterTimer=window.setTimeout(()=>{e(),a.lastHoverTime=Date.now(),a.enterTimer=null},i||o),s.set(t,a)}(t,e,i)))}function u(t,e){if(c("prg-mousehovrev")){if(!d())if(t&&r.includes(t)){const e=r.indexOf(t);e>-1&&r.splice(e,1)}else"function"==typeof e&&e()}else!function(t,e){if(!t||"function"!=typeof e||d())return;const i=s.get(t);if(!i)return void e();if(i.enterTimer)return clearTimeout(i.enterTimer),i.enterTimer=null,void s.delete(t);i.lastHoverTime>0&&e();s.delete(t)}(t,e)}},60306:function(t,e,i){"use strict";var n,a,r,o;i.d(e,{n:function(){return x}}),function(t){t[t.Success=1]="Success",t[t.Error=2]="Error"}(n||(n={})),function(t){t.LinkedIn="LinkedIn",t.Taboola="Taboola",t.Outbrain="Outbrain",t.Oath="Oath",t.MediaNet="MediaNet",t.MGID="MGID",t.Bing1="Bing1",t.Bing2="Bing2",t.TripleLift="TripleLift",t.Yengo="Yengo",t.AdYouLike="AdYouLike",t.Baidu="Baidu",t.Popin="Popin",t.AppNexus="AppNexus",t.InMobi="InMobi"}(a||(a={})),function(t){t[t.LinkedIn=804]="LinkedIn",t[t.Taboola=42]="Taboola",t[t.Outbrain=164]="Outbrain",t[t.Oath=25]="Oath",t[t.MediaNet=142]="MediaNet",t[t.MGID=358]="MGID",t[t.Bing1=1126]="Bing1",t[t.Bing2=1126]="Bing2",t[t.TripleLift=28]="TripleLift",t[t.Yengo=0]="Yengo",t[t.AdYouLike=259]="AdYouLike",t[t.Baidu=1020]="Baidu",t[t.Popin=0]="Popin",t[t.AppNexus=32]="AppNexus",t[t.InMobi=333]="InMobi"}(r||(r={})),function(t){t.CookieSyncUrl="cookieSyncUrl",t.PixelSync="pixelSync"}(o||(o={}));var l=i(88294),s=i(93468),d=i(65022),c=i(89980),p=i(75776),u=i(12870),g=i(17254),h=i(77246),f=i(27261),b=i(94020),m=i(98216),v=i(2462),y=i(42118),$=i(23247);class x{constructor(t){this.config=t,this.isCookieSyncExecuted=!1,this.cookieSyncExpiryName="CookieSyncExpiry",this.expiryTimeInMillis=2592e5,this.cookieService=new b.O}async processCookieSync(){if(await(0,y._0)())return;if(this.cookieService.getBrowserOptoutStatus())return;const t=this.cookieService.getMsaOptoutCookieData();if(t&&"1"===t)return;const e=this.config&&this.config.cookieSync;if(!e)return;if(!this.config.isCookieSyncEnabled)return;if(this.isCookieSyncExecuted)return;if((0,c.Lg)().supported){const t=new Date,e=(0,c.Lg)().getItem(this.cookieSyncExpiryName);if(e&&t.getTime()<+e+this.expiryTimeInMillis)return}const i=()=>{const t=this.getTCString(),i=Object.keys(e);for(const n of i){const i=(0,$.f)();this.partnerCookieHandler(n,e[n],i?"1":"0",t)}};if(window.__tcfapi?await window.__tcfapi("getTCData",2,(t,n)=>{if(n)if(t.gdprApplies){if("tcloaded"===t.eventStatus&&0!=Object.keys(t.vendor.consents).length){const i=Object.keys(e);for(const n of i){const i=(0,p.MI)(),{geo_country:a}=i;("CN"===((null==a?void 0:a.toUpperCase())??"")&&["hongjing","songheng"].includes(n.toLowerCase())||t.vendor.consents[r[n]])&&this.partnerCookieHandler(n,e[n],t.gdprApplies?"1":"0",t.tcString)}}}else i();else l.v.log("tcData fectch failed")}):i(),(0,c.Lg)().supported){const t=(new Date).getTime();(0,c.Lg)().setItem(this.cookieSyncExpiryName,t.toString())}m.YT.sendClientLogEvent({message:`processed cookie sync. Locale: ${u.Rb.Locale}, AppType: ${g.T3.AppType}`,type:"information"}),this.isCookieSyncExecuted=!0}getTCString(){const t="eupubconsent-v2=",e=decodeURIComponent(document.cookie).split(";");for(let i=0;i<e.length;i++){const n=e[i].trim();if(0==n.indexOf(t))return n.substring(16).trim()}return""}async partnerCookieHandler(t,e,i,n){if(e&&e.cookieSyncUrl)try{this.disableSyncForPartner(t)||(!0===e.pixelSync?this.callPixelSync(t,e,i,n):this.downloadScript(e.cookieSyncUrl))}catch{m.YT.sendAppErrorEvent((0,s.$5)(d.A0k,`Cookie sync error while calling ${t}`))}else m.YT.sendAppErrorEvent((0,s.$5)(d.MpT,`${t} is missing cookie sync url`))}disableSyncForPartner(t){var e;const i=t.toLocaleLowerCase(),n=(null===u.Rb||void 0===u.Rb||null===(e=u.Rb.Locale)||void 0===e?void 0:e.toLowerCase())||"";if(["linkedin","bing1","bing2"].includes(i))return!1;if("taboola"===i){var a;const t=["en-us","ja-jp","ko-kr"];return(null===u.Rb||void 0===u.Rb||null===(a=u.Rb.CurrentFlightSet)||void 0===a?void 0:a.has("prg-ad-no-tabl"))||!t.includes(n)}if("popin"===i){return!["ja-jp","ko-kr"].includes(n)}if("baidu"===i){return!["zh-cn","zh-hk","ja-jp","ko-kr"].includes(n)}if("hongjing"===i||"songheng"===i){return!["zh-cn"].includes(n)}return!0}async downloadScript(t){if(!t||!(0,h.S)())return;if(this.scriptAlreadyExists(t))return;const e=(0,f.C7)(t);e.onload=()=>{m.YT.sendClientLogEvent({message:`Successfully downloaded cookie sync script: ${t}`,type:"information"})},e.onerror=e=>{m.YT.sendAppErrorEvent((0,s.$5)(d.B8p,"Failed to download cookie sync JS",`source url: ${t}, error: ${e}`))},document.head.appendChild(e)}async callPixelSync(t,e,i,n){if(t){const t=this.formatPixelSyncUrl(e.cookieSyncUrl,i,n);this.fireImagePixel(t)}}formatPixelSyncUrl(t,e,i){if(location.href.toLowerCase().indexOf("native-ad.html")>-1){document.getElementsByTagName("head")[0].setAttribute("data-client-settings",'{"pagetype": "gallery", "browser": {"browserType":"chrome", "version":"62", "ismobile":"true"}, "locale":{"language":"en", "market":"us"}, "aid": "activity1"}'),u.Rb.initializeHeadData()}let n=0;u.Rb.ClientSettings&&u.Rb.ClientSettings.browser&&u.Rb.ClientSettings.browser.ismobile&&(n=1);let a=t.replace("<rid>",u.Rb.ClientSettings&&u.Rb.ClientSettings.aid?u.Rb.ClientSettings.aid:"").replace("<lang>",u.Rb.Locale?u.Rb.Locale:"").replace("<dgk>",u.Rb.ClientSettings&&u.Rb.ClientSettings.browser&&u.Rb.ClientSettings.browser.browserType?u.Rb.ClientSettings.browser.browserType:"").replace("<imd>",n.toString()).replace("<pn>",u.Rb.ClientSettings&&u.Rb.ClientSettings.pagetype?u.Rb.ClientSettings.pagetype:"").replace("<rf>",document.referrer).replace("<tp>",location.href).replace("<gdpr>",e).replace("<gdpr_consent>",i);const r=(0,v.ab)();return a=r?a.replace("<userid>",r):a.replace("<userid>",""),a}scriptAlreadyExists(t){const e=document.getElementsByTagName("script");for(let i=e.length;i--;)if(e[i].src===t)return!0;return!1}fireImagePixel(t){let e=new Image(1,1);e.src=t,e=null}}},60347:function(t,e,i){"use strict";i.d(e,{M:function(){return r}});var n=i(96950),a=i(35106);function r(t={}){return n.qy`
        <template slot="tab" role="tab" aria-disabled="${t=>t.disabled}">
            ${(0,a.LT)(t)}
            <slot></slot>
            ${(0,a.aO)(t)}
        </template>
    `}},61777:function(t,e,i){"use strict";i.d(e,{ad:function(){return dt},gC:function(){return ut}});var n=i(65022),a=i(93468),r=i(89151),o=i(20450),l=i(45084),s=i(33918),d=i(8701),c=i(19608),p=i(80004),u=i(63581),g=i(53013),h=i(930),f=i(89594),b=i(2632),m=i(98216),v=i(11372),y=i(64884),$=i(51787),x=i(30422),k=i(71507),C=i(3471),w=i(52063),_=i(31774),T=i(38260),F=i(11731),S=i(51098),D=i(77246),A=i(27261),z=i(52656),I=i(669),E=i(49986),B=i(17254),L=i(12870),M=i(39620),N=i(67301),R=i(30216),O=i(43922),P=i(83003),H=i(47149),j=i(95125),U=i(50180),V=i(51600),W=i(90901),G=i(64096),Z=i(71658),J=i(1732),X=i(55602),Q=i(94623),q=i(18284),Y=i(60815),K=i(85288),tt=i(36783),et=i(39152);let it=!1;const nt={[h.uE._1x_2y]:u.L._300x304,[h.uE._1x_3y]:u.L._300x326,[h.uE._2x_2y]:u.L._612x304,[h.uE._2x_3y]:u.L._612x462},at={[h.uE._1x_2y]:u.L._300x180},rt={[h.uE._1x_2y]:u.L._300x225,[h.uE._1x_3y]:u.L._300x225,[h.uE._2x_2y]:u.L._468x304,[h.uE._2x_3y]:u.L._468x304},ot={[h.uE._1x_2y]:u.L._300x304,[h.uE._1x_3y]:u.L._300x326,[h.uE._2x_2y]:u.L._628x372,[h.uE._2x_3y]:u.L._628x372},lt={[h.uE._1x_2y]:p.Sv.infoPane,[h.uE._1x_3y]:p.Sv.infoPane1x3y,[h.uE._2x_2y]:p.Sv.infoPane,[h.uE._2x_3y]:p.Sv.infoPane},st={MorningDigest:!0,RegionalTrending:!0,TopicNews:!0};function dt(t){var e,p,A,z,B;(0,r.tD)("InfopaneDataMapping.Start",performance.now());const{activeIndicator:M,autoRotate:V,autoRotateIntervalMs:G,disableAutoRotate:Z,firstAutoRotateIntervalMs:J,cardActionBitMask:q,cardActionClickHandler:Y,cardMetadata:tt,cardSlot:et,enableInfopaneSwipe:nt,enableRichSocialReaction:at,focusinHandler:rt,focusoutHandler:ot,getReplacementCardsCallback:dt,reactionCallback:gt,shareActionHandler:ht,initCardAction:ft,localizedStrings:bt,mouseenterHandler:mt,mouseleaveHandler:vt,openLinksInNewTab:yt,parentTelemetryObject:$t,refreshFeedCallback:xt,setAutoRotate:kt,stockImageData:Ct,visualReadinessCallback:wt,configOptions:_t,isAnaheimDesign:Tt,isAdFeedbackV1Enabled:Ft,isNarrowTitleFooterGap:St,isProviderInFooter:Dt,allowBlurScroll:At,enableRotateAfterClick:zt,rotateAfterClickIntervalMs:It,enableRotateOnlyOnce:Et,rotateBackAfterClickPrevButton:Bt,rotateStopAfterClickPrevButton:Lt,enableInfopaneRefactoring:Mt,adTimerInMS:Nt,infoPaneProminentFlipper:Rt,infopaneThresholdSecondForNewFlag:Ot,infopaneThresholdForCommentFlag:Pt,enableTabbedInfopane:Ht,columnLayout:jt,isIASEnabled:Ut,appendIdxForId:Vt}=t,{grid_area:Wt}=et,Gt=Pt??F.R3,Zt=Ot??F.Rl,Jt=_t&&(_t.childExperienceReferencesWC&&_t.childExperienceReferencesWC.socialBarWC||_t.childExperienceReferences&&_t.childExperienceReferences.socialBarWC),Xt=tt;let Qt=[];if(Xt.subItems&&Xt.subItems.length?Qt=Xt.subItems:(Qt=Xt.subCards,Xt.subItems=Qt),!Qt.length)return;Qt=function(t){const e=[];let i=[];for(let n=0;n<t.length;n++){const a=t[n];if(a.type==P.pL.TabbedInfopaneCardTab)i.push(a);else if(a.type==P.pL.TopicFeed)i.push(a);else{if(i.length>0){const t={type:P.pL.TabbedInfopaneCard,subCards:i};e.push(t),i=[]}e.push(a)}}return e}(Qt);const qt=(0,N.c)($t);let Yt="",Kt="",te=!1;const ee="PersonalizedInfopane"===(null===(e=Xt.wpoMetadata)||void 0===e?void 0:e.contentType);ee&&(0,N.b)(qt);const ie=_t&&_t.enableMorDigestTitle&&(null===(p=Xt.wpoMetadata)||void 0===p?void 0:p.contentType)===P.pL.NTPMorningDigest,ne=_t&&_t.enableMorDigestTitleHint&&(null===(A=Xt.wpoMetadata)||void 0===A?void 0:A.contentType)===P.pL.NTPMorningDigest,ae=_t&&_t.enableMorDigestTitleBottom&&(null===(z=Xt.wpoMetadata)||void 0===z?void 0:z.contentType)===P.pL.NTPMorningDigest;(ie||ne||ae)&&(Yt=bt.morningDigestHeadingText,Kt=bt.morningDigestDesText);let re=!1;if(_t&&_t.enableMorDigestTitleOnUX){const t=(new Date).getHours();t>=9&&t<=11&&(re=!0,Yt=bt.morningDigestHeadingText,Kt=bt.morningDigestDesText)}if(Xt.feed){const{sageFeedGroupName:t,feedName:e}=Xt.feed;e&&st[t]&&(Yt=e,te=!0)}if(Xt.wpoMetadata){const{contentType:t}=Xt.wpoMetadata;if(""===Yt){const e=t===P.pL.WorkHeadlines;if(_t.enableImmersiveInfopane){const t=bt.topStoriesHeadingText;bt.topStoriesHeadingText=t.slice(0,1)+t.slice(1).toLowerCase()}Yt=function(t,e,i){const{topStoriesHeadingText:n,industryHeadlinesText:a,localNewsHealinesText:r}=i||{};return(0,Q.YW)({isLocalNews:t,isWorkHeadlines:e}).with({isLocalNews:!0},()=>r).with({isWorkHeadlines:!0},()=>a).otherwise(()=>n)}((oe=t,[P.pL.LocalNews,P.pL.LocalNewsFeed].includes(oe)),e,bt)}t!==P.pL.TopStories&&t!==P.pL.TopStoriesV2||(Qt=Qt.slice(0,6))}var oe;const le=null==bt?void 0:bt.cardActionsTooltips,se={id:"infopane",childTemplateType:"infopane-card",telemetryContext:qt,slideContentData:[],isNarrowTitleFooterGap:St,infoPaneFlipperStyle:_t.infoPaneFlipperStyle,enableDenseSlide:_t.enableDenseSlide,enableRotateOnlyOnce:Et,enableAdaptDarkMode:_t.enableAdaptDarkMode,infoPaneNextFlipperTitle:bt?bt.infoPaneNextFlipperTitle:"",infoPanePreviousFlipperTitle:bt?bt.infoPanePreviousFlipperTitle:"",useTitleFontSize:_t&&_t.useTitleFontSize,enableImmersiveInfopane:_t&&_t.enableImmersiveInfopane,autoRowHeights:Tt&&_t.enableFlexCard,infopaneViewOptAdCount:_t.infopaneViewOptAdCount,enableInfopaneSwipe:nt,cardActionsTooltips:le,disableImmersiveInfopaneTitle:ee,enableVariableSpeed:_t.enableVariableInfopaneSpeed,parentContentId:_t.parentContentId},de=wt,ce=_t&&_t.adBeaconServiceConfig,pe={};return(0,c.bw)({id:"infopane",experienceType:null===(B=_t&&_t.childExperienceReferencesWC)||void 0===B||null===(B=B.configRef)||void 0===B?void 0:B.experienceType,mapperArgs:t},se,(e,p)=>{const A=p.cardSize,z=[];let B;Qt.forEach((r,p)=>{var T;if(!r)return;const M=r.recoId||r.metadata&&r.metadata.recoId,N=r.ri||r.metadata&&r.metadata.ri,H=(0,c.uX)({id:"infopane",columnArrangement:e,experienceType:null===(T=_t&&_t.childExperienceReferencesWC)||void 0===T||null===(T=T.configRef)||void 0===T?void 0:T.experienceType,mapperArgs:t,recoId:M,ri:N,subCardIndex:p});B=H.telemetryExt;const V="ShoppingInfopane1"===r.type||"ShoppingInfopane2"===r.type||"ShoppingInfopane3"===r.type||"ShoppingInfopane4"===r.type,G="nativead"===r.type||"cmsad"===r.type||"directbuyad"===r.type||V,Z="ArticleFre"===r.type&&"FreFeed"===r.id,J=r.type===P.pL.EventInfopaneShoppingAI;let Q;const tt=(0,I.H8)(r,q),et=0!==(tt&R.J.hide)||_t.enableHideStoryFeedback&&(0!==(tt&R.J.showFewer)||0!==(tt&R.J.hidden)),nt=r.visualReadinessCallback;if(G){var rt;if(V)B||(B={}),B={...B,cardName:"ShoppingInfopane",ShoppingCardType:"ShoppingNTPInfopane",clickUrl:null===(rt=r.placement)||void 0===rt||null===(rt=rt.items)||void 0===rt||null===(rt=rt[0])||void 0===rt?void 0:rt.destinationUrl};if(Nt&&(pe[p]=Nt),0===(tt&R.J.hide)){var ot,st,mt,vt,kt,wt,At;const e=(_t&&_t.enableNativeAdWCInfopane||r&&r.placement&&r.placement.enableNativeAdWC)&&(null==_t||null===(ot=_t.childExperienceReferencesWC)||void 0===ot?void 0:ot.nativeAdWC);let o="";if(_t.enableLightGradientV1&&(o="light-gradient-v1"),_t.enableLightGradientV2&&(o="light-gradient-v2"),_t.enableLightGradientV3&&(o="light-gradient-v3"),_t.enableLightGradientV4&&(o="light-gradient-v4"),Q=function(t,e,r,o,c,p,g,h,v,y,T,F,S,A,z,E,B,M,N,R,O,P){var H,V,W;let G=arguments.length>22&&void 0!==arguments[22]&&arguments[22],Z=arguments.length>23&&void 0!==arguments[23]&&arguments[23],J=arguments.length>24?arguments[24]:void 0,X=arguments.length>25?arguments[25]:void 0,Q=arguments.length>26?arguments[26]:void 0,q=arguments.length>27?arguments[27]:void 0,Y=arguments.length>28?arguments[28]:void 0,tt=arguments.length>29?arguments[29]:void 0,et=arguments.length>30?arguments[30]:void 0,nt=arguments.length>31?arguments[31]:void 0,at=arguments.length>32?arguments[32]:void 0,rt=arguments.length>33?arguments[33]:void 0,ot=arguments.length>34?arguments[34]:void 0,st=arguments.length>35?arguments[35]:void 0,dt=arguments.length>36?arguments[36]:void 0,ct=arguments.length>37?arguments[37]:void 0,ut=arguments.length>38?arguments[38]:void 0,gt=arguments.length>39?arguments[39]:void 0,ht=arguments.length>40?arguments[40]:void 0,ft=arguments.length>42?arguments[42]:void 0,bt=arguments.length>43?arguments[43]:void 0,mt=arguments.length>44?arguments[44]:void 0,vt=arguments.length>45?arguments[45]:void 0,yt=arguments.length>46?arguments[46]:void 0,$t=arguments.length>47?arguments[47]:void 0,xt=arguments.length>48?arguments[48]:void 0;(0,f.Yu)(t,A);const kt=t.placement;if(!kt||!kt.items)return;const{crids:Ct,adAuctionType:wt}=kt;null!==L.Rb&&void 0!==L.Rb&&null!==(H=L.Rb.CurrentFlightSet)&&void 0!==H&&H.has("prg-ad-serverauc")&&wt==d.T.oneServiceAd&&(0,a.vV)(n.V_P,"OneService ad call detected in placement","",kt);if(null===L.Rb||void 0===L.Rb||null===(V=L.Rb.CurrentFlightSet)||void 0===V||!V.has("prg-ad-rmauctype")){var _t;const t=new Set(Object.values(d.T));yt&&(null==kt||null===(_t=kt.items)||void 0===_t?void 0:_t.length)>0&&!t.has(wt)&&(0,a.vV)(n.IYc,"isClientAuctionCall value is missing in the placement","",kt)}!(0,D.S)()||yt&&(null!==L.Rb&&void 0!==L.Rb&&null!==(W=L.Rb.CurrentFlightSet)&&void 0!==W&&W.has("prg-ad-rmauctype")||wt!=d.T.oneServiceAd)||k.x.addDedupeIds(Ct,kt.region);const Tt=null==y?void 0:y.cardActionsTooltips,Ft=new j.Yg,St=[];return kt.items.forEach((a,d)=>{var k;const{destinationUrl:D,adChoiceIconUrl:H,clickBeacons:j,imageWidth:V,imageHeight:W,feedbackUrl:K,description:yt,assets:Ct,adScenarioType:wt,cashback:_t,verificationParameters:Ft,noAdLabel:Dt,assetRanks:At,eventtrackers:zt}=a||{};let{imageUrl:It,title:Et,providerName:Bt}=a||{};const Lt=(0,f.EJ)(D,{enableSafeAds:G});if(O&&P){const t=kt.region,e=kt.regionIndex,i={w:Number(a.originalImageWidth),h:Number(a.originalImageHeight)},r=P,o=(0,x.li)(It,r,i,Lt,t,e);if(o){const t=o.logInfo;m.YT.sendClientLogEvent({message:o.message,pb:{...n.Gq_.pb,logInfo:t},type:"warning"})}}const Mt=(0,b.u)(t,r,"infopane",d,F),Nt="river-half-textonly"!==(kt.region&&kt.region.toLowerCase())?(0,$.cG)(kt,d):null;!it&&Nt&&(Promise.all([i.e("node_modules_video_js_dist_video_es_js"),i.e("web-components_content-video-player_dist_index_js"),i.e("web-components_native-ad-video_dist_index_js")]).then(i.bind(i,80833)),it=!0);let Rt=V||u.L._300x156.width.toString(),Ot=W||u.L._300x156.height.toString(),Pt=Et,Ht=null,jt=null,Ut=null,Vt=null,Wt=!1;const Gt=Y&&!tt&&Ct&&wt&&l.JP.includes(wt),Zt=tt&&Ct&&0!==Object.keys(Ct).length&&(null==nt?void 0:nt.includes(wt));var Jt,Xt,Qt,qt,Yt,Kt;Gt||Zt?(Rt=(null===(Jt=Ct.img)||void 0===Jt?void 0:Jt.w.toString())??Rt,Ot=(null===(Xt=Ct.img)||void 0===Xt?void 0:Xt.h.toString())??Ot,It=(null===(Qt=Ct.img)||void 0===Qt?void 0:Qt.url)??It,Pt=(null===(qt=Ct.img)||void 0===qt||null===(qt=qt.ext)||void 0===qt?void 0:qt.alt)??Pt,Et=Ct.title??Et,Bt=Ct.providerName??Bt,Ht=null===(Yt=Ct.logo)||void 0===Yt?void 0:Yt.url,Gt?jt=(0,f.Po)(Ct,kt.region):Zt&&((0,w.FM)(Ct),Ut=(0,w.Ng)(Ct,At),m.YT.addOrUpdateTmplProperty("hasVAv2","1"),m.YT.addOrUpdateTmplString("hasVAv2"))):ut&&_t&&(Et=(0,U.GP)(null==y?void 0:y.nativeAdCashbackText,_t)??Et,Bt="Microsoft");(!st&&at&&Ct&&(Vt=Ct.callToAction??Vt,Vt&&!ct&&(Wt=!0)),!dt&&ot&&Ct)&&(Ht=null===(Kt=Ct.logo)||void 0===Kt?void 0:Kt.url,Ht&&!ct&&(Wt=!0));at&&Ct&&Ct.callToAction&&(m.YT.addOrUpdateTmplProperty("hasCallToAction","1"),m.YT.addOrUpdateTmplString("hasCallToAction")),ot&&Ct&&null!==(k=Ct.logo)&&void 0!==k&&k.url&&(m.YT.addOrUpdateTmplProperty("hasLogo","1"),m.YT.addOrUpdateTmplString("hasLogo"));const te=t.id&&t.id.indexOf("amplifyad")>=0;if(Et&&Lt){var ee,ie;if(St.push({...kt,cardActionsTooltips:Tt,id:t.id,index:d,gridArea:e,childTemplateType:"native-ad-card",isNativeAd:!0,imagePriority:!0,cardSize:o,adTelemetryContext:Mt,telemetryContext:Mt,adChoiceIconUrl:H,clickBeacons:j,destinationUrl:Lt,imageData:{altText:Pt,source:It,imageWidth:Rt,imageHeight:Ot,visualReadinessCallback:T},providerData:{logoImage:Ht,name:Bt},title:Et,description:yt,enableNativeAdDescription:J,maxDescriptionLines:X,enableProviderAlignmentV2:q,cardLayout:lt[o],isAnaheimDesign:!!c,toggleCardActionMenu:(t,e)=>(0,f.JE)(t,e,h,p),feedbackUrl:K,isAdFeedbackV1Enabled:g,useSmallFontSize:!!v,assets:Ct,localizedStrings:y,videoProps:Nt,hoverState:pt(),nativeAdWC:S,adBeaconServiceConfig:A,noBackPlateOnRest:!!z,feedFontSize:E,adSlugGA:B,isGreyAdsLabelEnabled:M,adLabelFontSize:R,disableCardTitleTooltip:N,enableTitleForTruncate:bt,showAdLabel:!te,providerName:te?y.nativeAdPromotedByText:Bt,attribution:te?yt:void 0,enableSafeAds:G,useLightShadow:Z,lightShadowVal:Q,enableVA:Y,enableVAPhase2:tt,enableVAPhase2WithShimmer:et,supportedAdScenarioTypes:nt,enableCTA:at,enableCTAVariant:rt,enableLogo:ot,callToAction:Vt,logoImageUrl:Ht,hasCTALogoAssets:Wt,enableBlendInAdSlugStyle:ft,assetColumns:jt,assetOrder:Ut,enableBuyDirectAd:mt,hideAdLabelAndAdChoice:(0,I.tO)(null==kt?void 0:kt.providerId,Dt),openAdInSameTab:vt,lightGradientClass:$t,enableAdSponsoredText:xt}),gt&&t.id&&Ft){const e=ht?`native_ad_${t.id}_${d}`:`native_ad_${t.id}`,i=null==zt?void 0:zt.find(t=>{var e;return"IAS-omid"===(null===(e=t.ext)||void 0===e?void 0:e.vendorKey)});i?(0,C.n$)(i,e,n.nxh):(0,C.nL)(Ft,e,n.nxh)}const i=!(null!==L.Rb&&void 0!==L.Rb&&null!==(ee=L.Rb.CurrentFlightSet)&&void 0!==ee&&ee.has("prg-ad-dv-on-rf")),a=zt&&t.id,r=null===L.Rb||void 0===L.Rb||null===(ie=L.Rb.CurrentFlightSet)||void 0===ie?void 0:ie.has(s.pL);if(!zt||i&&null!=t&&t.id||(0,_.xs)(zt,null==t?void 0:t.id,i),i&&a){const e=ht?`${t.id}_${d}`:`${t.id}`,i=(0,_.Q3)(zt);r&&i.has("doubleverify.com-omid")?(0,_.Mb)(i.get("doubleverify.com-omid"),e,n.nxh):i.has("DV")&&(0,_.Mb)(i.get("DV"),e,n.nxh)}}}),Ft.saveUserActionBeacon(t.id,kt.beaconsJson),St.forEach(t=>(0,K.B)(t)),{id:t.id,gridArea:e,childTemplateType:"native-ad-card",isNativeAd:!0,imagePriority:!0,cardSize:o,nativeAds:St,enableSafeAds:G}}(r,Wt,qt&&qt.infopane,A,Tt,ft,Ft,Y,_t.useSmallFontSize,null==_t?void 0:_t.localizedStrings,nt,B,e,ce,_t.noBackPlateOnRest,_t.twoColumnFeedFontSize||_t.feedFontSize,_t.adSlugGA,_t.isGreyAdsLabelEnabled,_t.disableCardTitleTooltip,_t.adLabelFontSize,_t.enableNativeAdImageVisualQualityChecker,null===(st=_t.adTemplateConfig)||void 0===st||null===(st=st.imageSizeConfig)||void 0===st?void 0:st.infopane,_t.enableSafeAds,_t.useLightShadow,_t.enableNativeAdDescription,_t.maxDescriptionLines,_t.lightShadowVal,_t.enableProviderAlignmentV2,null===(mt=_t.adTemplateConfig)||void 0===mt?void 0:mt.enableVA,null===(vt=_t.adTemplateConfig)||void 0===vt?void 0:vt.enableVAPhase2,null===(kt=_t.adTemplateConfig)||void 0===kt?void 0:kt.enableVAPhase2WithShimmer,null===(wt=_t.adTemplateConfig)||void 0===wt?void 0:wt.supportedAdScenarioTypes,_t.enableCTA,_t.enableCTAVariant,_t.enableLogo,_t.disableCTADisplay,_t.disableLogoDisplay,_t.ctaLogoSimplification,_t.enableCashback,Ut,Vt,_t&&"tall"===_t.ipFlipperCustomSize,_t.enableBlendInAdSlugStyle,_t.enableTitleForTruncate,_t.enableBuyDirectAd,_t.openAdInSameTab,null===(At=_t.adTemplateConfig)||void 0===At?void 0:At.enableBlockingQueue,o,_t.enableAdSponsoredText),t.configOptions.preloadInfopaneImages)for(const t of(null===(zt=Q)||void 0===zt?void 0:zt.nativeAds)??[]){var zt,It;(0,I.NN)(null===(It=t.imageData)||void 0===It?void 0:It.source)}}else{const e={...t,cardMetadata:r};Q=(0,y.Eb)(e,tt,r.id,qt&&qt.infopane,Ft,(0,f.ZA)(e))}}else if(r.type===P.pL.Dense){const e=(null==r?void 0:r.subItems)??(null==r?void 0:r.subCards);var Et,Bt;if(e.forEach(t=>{if(!t)return;const e=t.recoId||t.metadata&&t.metadata.recoId;e&&(B.recoId=e)}),4===(null==e?void 0:e.length))Q=function(t,e,i,n){var a,r;const{cardActionBitMask:o,cardActionClickHandler:l,cardMetadata:s,configOptions:d,enableRichSocialReaction:c,getReplacementCardsCallback:p,reactionCallback:f,shareActionHandler:b,goToPersonalizeSettingsCallback:m,initCardAction:y,isAnaheimDesign:$,isNarrowTitleFooterGap:x,localizedStrings:k,openLinksInNewTab:C,parentTelemetryObject:w,refreshFeedCallback:_,stockImageData:T,visualReadinessCallback:F}=t,S=(null==s?void 0:s.subItems)??(null==s?void 0:s.subCards),D=w.addOrUpdateChild({name:"TopStoriesDenseSlide",type:v.MJ.Headline}),A=D.addOrUpdateChild({name:"MoreSetting",type:v.MJ.ActionButton}),z={moreSetting:{title:(null===(a=d.localizedStrings)||void 0===a?void 0:a.moreSettingOptStr)||"More settings",telemetryTag:A.getMetadataTag(),onClick:m}};let B,L=S;if(e===h.uE._2x_2y){const t=S[0]??(0,I.cZ)(S[0]);L=null==S?void 0:S.slice(1);const e=F,a=s.visualReadinessCallback;B={...ct({cardMetadata:t,cardSize:h.uE._1x_2y,cardActionStatus:(0,I.H8)(t,o),cardActionClickHandler:l,initCardAction:y,visualReadinessCallback:()=>{e&&e(),a&&a()},localizedStrings:k,stockImageData:T,isAnaheimDesign:$,isNarrowTitleFooterGap:x,configOptions:d,openLinksInNewTab:C,socialBarWCConfigInfo:i,enableRichSocialReaction:c,useSmallFontSize:d.useSmallFontSize,refreshFeedCallback:_,getReplacementCardsCallback:p,reactionCallback:f,shareActionHandler:b,parentTelemetryObject:D,ext:n}),cardActionClickHandler:void 0,cardFillColor:"#333",cardSize:"_1x_2y",mediaType:O.z.image}}const M={heroNews:B,newsList:null===(r=L)||void 0===r?void 0:r.map(t=>{const e=t.type===P.pL.WebContent,i=(0,E.po)(t,u.L._60x60,F,$,void 0,void 0,void 0,void 0,void 0,void 0,void 0,d.enableWebpFormat);t.cardContent||(t=(0,I.cZ)(t));const{destinationUrl:a,locale:r,id:o,provider:l,publishedDateTime:s,title:c}=t.cardContent;return{id:o,destinationUrl:a,title:c,ariaLabel:(0,I.yL)(c,l,d.localizedStrings),openLinksInNewTab:C,providerData:(0,I.p_)(l,e,d.publisherSVGLogosHeight),publishedDateTime:!$&&d.enableArticleTimestamps&&(0,E.fL)(d.enableNewTimestampFormatForJAJP,new Date(s),r,d.localizedStrings),imageData:i,isNativeAd:!1,telemetryContext:(0,g.dj)(D,t.cardContent,t.metadata,n,e),isNarrowNewsItem:d.isNarrowNewsItem}})};return{id:"denseCard-infopane-1",childTemplateType:"dense-card",gridArea:"",telemetryObject:D,denseData:M,settingMenuConfig:z,localizedStrings:d.localizedStrings}}({...t,cardMetadata:r,parentTelemetryObject:qt&&qt.infopane},A,Jt,B);else if((0,X.uC)((null===(Et=_t.childExperienceReferencesWC)||void 0===Et?void 0:Et.denseCard)||(null===(Bt=_t.childExperienceReferences)||void 0===Bt?void 0:Bt.denseCard)),Q=ut(_t,r,yt,Dt,()=>{de&&de(),nt&&nt()},Tt,$t,A,_t.isGreyAdsLabelEnabled,p,B,Zt,Gt,Ht),t.configOptions.preloadInfopaneImages){var Lt,Mt;(0,I.NN)(null===(Lt=Q.denseData.heroNews)||void 0===Lt||null===(Lt=Lt.imageData)||void 0===Lt?void 0:Lt.source),(0,I.NN)(null===(Mt=Q.denseData.heroNews)||void 0===Mt||null===(Mt=Mt.providerData)||void 0===Mt?void 0:Mt.logoImage);for(const t of Q.denseData.newsList||[]){var Rt;(0,I.NN)(null===(Rt=t.providerData)||void 0===Rt?void 0:Rt.logoImage)}}}else if(r.type===P.pL.TopStories)Q=function(t){const e={...t};e.cardMetadata=e.cardMetadata.subItems[0];const i=(0,W.W)(e).defaultLayout[0];return i.isAnaheimInfopane=!0,i}(t);else if(Z)(0,X.uC)(_t.childExperienceReferencesWC&&_t.childExperienceReferencesWC.articleFreCard),Q=function(t,e){const i={...t,isArticleFreInInfoPane:!0};i.cardMetadata=i.cardMetadata.subItems[0],i.configOptions={...i.configOptions,enableHideStoryFeedback:!0,enableInstantHide:!0,enableDismissCallback:!0,useHideConfirmationNewStoryText:!0};const n=(0,o.z)(i),a={...n.defaultLayout[0],...n[e][0]};return a}(t,e);else if(et)Q=(0,y.Eb)(t,tt,r.id,qt&&qt.infopane);else if(r.type===P.pL.TabbedInfopaneCard)Q=function(t,e,i,n,a,r,o,l){const{configOptions:s,openLinksInNewTab:d,isProviderInFooter:c,visualReadinessCallback:p,isAnaheimDesign:u,parentTelemetryObject:g,localizedStrings:h}=t,f=(null==e?void 0:e.subItems)??(null==e?void 0:e.subCards),b=(0,S.G)(g),m=f.map((t,e)=>(0,F.Ww)(s,t,d,c,()=>{i&&i(),p&&p()},u,g,b,n,s.isGreyAdsLabelEnabled,e,r,h,o,l)),v={id:`denseCard-infopane-${a+1}`,gridArea:"",childTemplateType:"tabbed-infopane-card",enableAdaptDarkMode:s.enableAdaptDarkMode,telemetryContext:b,slideContentData:m};return v}(t,r,de,A,p,B,Zt,Gt);else{var Ot,Pt;if(Q=ct({cardMetadata:r,cardSize:A,openLinksInNewTab:yt,visualReadinessCallback:()=>{de&&de(),nt&&nt()},cardActionStatus:tt,cardActionClickHandler:Y,initCardAction:ft,localizedStrings:bt,parentTelemetryObject:qt&&qt.infopane,stockImageData:Ct,enableRichSocialReaction:at,configOptions:_t,isAnaheimDesign:Tt,useSmallFontSize:_t.useSmallFontSize,isNarrowTitleFooterGap:St,refreshFeedCallback:xt,socialBarWCConfigInfo:Jt,getReplacementCardsCallback:dt,reactionCallback:gt,shareActionHandler:ht,ext:B,cardTitleText:Yt,enableDefaultNewsIcon:te,disableImmersiveInfopaneTitle:ee,isShoppingArticleCard:J,enableMorDigestTitleOnUX:re,enableMorDigestTitle:ie,enableMorDigestTitleHint:ne,enableMorDigestTitleBottom:ae,infopaneMorDigDes:Kt}),t.configOptions.preloadInfopaneImages)(0,I.NN)(null===(Ot=Q.imageData)||void 0===Ot?void 0:Ot.source),(0,I.NN)(null===(Pt=Q.providerData)||void 0===Pt?void 0:Pt.logoImage)}Q&&(r.type!==P.pL.TopStories&&(Q.cardLayout=lt[A]),z.push(Q))});const N={...qt};if(_t&&_t.addExtToNewsContainer&&B&&N.infopane){const{row:t,col:e,width:i,height:n,template:a,slot:r,traceIdIndex:o,co:l}=B;N.infopane=new H.$({...N.infopane.contract,ext:{row:t,col:e,width:i,height:n,template:a,slot:r,traceIdIndex:o,co:l}})}const Q={activeIndicator:M,autoRotate:V,autoRotateIntervalMs:G,disableAutoRotate:Z,allowBlurScroll:At,firstAutoRotateIntervalMs:J,focusinHandler:rt,layout:A===h.uE._2x_2y?T.j.TwoColumn:T.j.OneColumn,mouseenterHandler:mt,mouseleaveHandler:vt,setAutoRotate:kt,slideContentData:z,isNarrowTitleFooterGap:St,enableRotateAfterClick:zt,rotateAfterClickIntervalMs:It,enableRotateOnlyOnce:Et,rotateBackAfterClickPrevButton:Bt,rotateStopAfterClickPrevButton:Lt,enableInfopaneRefactoring:Mt,adTimerMap:pe,infoPaneProminentFlipper:Rt,telemetryContext:N};return ot&&(Q.focusoutHandler=function(t){return e=>{e.relatedTarget&&"fluent-menu-item"===e.relatedTarget.localName||t()}}(ot)),(0,r.tD)("InfopaneDataMapping.End",performance.now()),Q},!0)}function ct(t){var e,i,r,o,l;let{cardMetadata:s,cardSize:d,openLinksInNewTab:c,visualReadinessCallback:p,cardActionStatus:b,cardActionClickHandler:v,initCardAction:y,localizedStrings:$,parentTelemetryObject:x,stockImageData:k,enableRichSocialReaction:C,configOptions:w,isAnaheimDesign:_,isHubDesign:T,useSmallFontSize:F,isNarrowTitleFooterGap:S,refreshFeedCallback:D,socialBarWCConfigInfo:A,getReplacementCardsCallback:N,reactionCallback:R,shareActionHandler:O,ext:j,cardTitleText:U,enableDefaultNewsIcon:W,disableImmersiveInfopaneTitle:J,isShoppingArticleCard:X,enableMorDigestTitleOnUX:Q,enableMorDigestTitle:q,enableMorDigestTitleHint:Y,enableMorDigestTitleBottom:K,infopaneMorDigDes:it}=t;const{cardContent:lt,metadata:st,type:dt}=(0,I.cZ)(s),ct=dt===P.pL.WebContent,pt=(0,g.dj)(x,lt,st||s,j,ct),ut=!("link"!==lt.type||lt.provider&&lt.provider.id);w&&w.addExtToNewsContainer&&pt&&(pt.contentCard=new H.$({...pt.contentCard.contract,ext:j}));const ft=(0,E.PS)(s,$,w.enablePanocard,w.panocardType),bt=(0,I.Ie)(s);if((!bt||!bt.url)&&k){let t;t=null!=w&&w.useImgGenerator?[{url:(0,V.XP)(k.id,{width:0,height:0,enableDpiScaling:!1,enableWebpFormat:w.enableWebpFormat}),width:k.width,height:k.height}]:[k],s.cardContent.images=t}const mt=w&&w.useArticleCardTemplate,vt=w&&w.useMsnHomepageCardTemplate;let yt;mt&&(yt=(0,E.uK)(null==bt?void 0:bt.colorSamples,lt.colorSamples,null==bt?void 0:bt.url));let $t=null;(ut||d===h.uE._2x_3y||mt&&d!==h.uE._1x_2y)&&($t=lt.abstract);const{locale:xt,publishedDateTime:kt,badges:Ct,isWorkNewsContent:wt}=lt,{enableResponsiveComponent:_t}=w||{},Tt=null==st?void 0:st.reasons,{badge:Ft,reasonBadge:St}=(0,z.bA)($,Ct,w&&w.enabledBadgeTypes,Tt,w&&w.enabledReasonBadgeTypes,null,K),Dt=(0,I.nN)($,w,St),At=(0,E.Ew)($),zt=st&&st.reactionSummary||s&&s.reactionSummary;s.metadata={...s.metadata,reactionSummary:zt};const It=!zt;let Et;Et=mt?rt[d]:vt?s.id.includes("InfoBuyDirectCard")?null:ot[d]:w.enableImmersiveInfopane?at[d]:w.enableFeed3Cards&&d===h.uE._2x_2y?u.L._612x328:nt[d],mt&&d===h.uE._2x_2y&&w.isImage43&&(Et=u.L._406x304);const Bt=""!==L.Rb.MarketDir?L.Rb.MarketDir:"ltr",Lt=(null==st?void 0:st.reasons)&&((null===(e=w.childExperienceReferencesWC)||void 0===e?void 0:e.publisherFollowButton)||(null===(i=w.childExperienceReferences)||void 0===i?void 0:i.publisherFollowButton));let Mt="",Nt=null;if(null!=w&&w.enableArticleTimestamps){const{disable1MonPlusTimestamp:t,disableNDaysPlusTimestamp:e}=M.ew.getConfig()||{},i=(0,Z.YS)(kt),n=(0,Z.Tp)(kt,e);t&&i||n||(Mt=(0,M._L)(kt,xt,void 0,null==w?void 0:w.enableNewTimestampFormatForJAJP,null==w?void 0:w.enableSimpleArticleTimestamp),Nt=(null==w?void 0:w.enableSimpleArticleTimestamp)&&(0,M._L)(kt,xt,void 0,w.enableNewTimestampFormatForJAJP,!1,!0))}let Rt=(0,f.EJ)(lt.destinationUrl,w);X&&(Rt=function(t){const e=new URL(t);return e.searchParams.set("entryPoint","msn"),e.searchParams.set("FORM","INFOBG"),e.searchParams.set("msnrid",m.YT.getRequestId()),e.searchParams.set("adunitId","378983"),e.searchParams.set("propertyId","316966"),e.toString()}(Rt));const Ot=dt===P.pL.WebContent&&(s.metadata.videoMetadata||Boolean(null===(r=s.metadata)||void 0===r?void 0:r.externalVideoFiles));Ot&&(Rt=(0,G.CW)(encodeURIComponent(s.id),Rt)),null!=lt&&lt.isPanoCard&&1==(null==ft?void 0:ft.type)&&(ft.articleDestinationUrl=Rt,Rt=ft.destinationUrl);const Pt=(0,E.po)(s,Et||{width:0,height:0},p,_,!1,!1,!1,!1,!1,!1,w.enableLowPowerDeviceImage,w.enableWebpFormat);let Ht="";w.enableLightGradientV1&&(Ht="light-gradient-v1"),w.enableLightGradientV2&&(Ht="light-gradient-v2"),w.enableLightGradientV3&&(Ht="light-gradient-v3");const jt={ariaLabel:(0,I.yL)(lt.title,lt.provider,$,dt),cardActionStatus:(!ct||(null==w?void 0:w.enableWCCardAction)||(null==w?void 0:w.enableWCSaveButton))&&b,cardActionClickHandler:v,cardActionsTooltips:Dt,cardTitleText:U,id:s.id,gridArea:"",isWebContent:ct,colorSamples:s.colorSamples,contentType:dt,contentTypeLabel:null===(o=(0,I.Ww)($,dt))||void 0===o?void 0:o.toLocaleUpperCase(),customTransitionSpeed:lt.customTransitionSpeed,spotlightBreakingNewsTagString:null==$?void 0:$.topStoriesBreakingNewsTagString,contentIndicator:(0,E.WH)(dt,_&&(null==w?void 0:w.miniMediaIndicatorsIcons),s.id),abstract:$t,isWorkNewsContent:wt,isMsnHpExternalLinkCard:ut,childTemplateType:"content-card",crawledContentLabel:null==w||null===(l=w.localizedStrings)||void 0===l?void 0:l.crawledContentLabel,dir:Bt,setDisplacementHandler:gt,removeDisplacementHandler:ht,title:lt.title,titlePrefix:s.titlePrefix||"",badge:Ft,reasonBadge:St,openLinksInNewTab:c||ut,isProviderIconClickable:w&&w.isProviderIconClickable,useArrowIcons:w&&w.useArrowIcons,openArticleInNewTab:w&&w.openArticleInNewTab,destinationUrl:Rt,imageData:Pt,locale:lt.locale,providerData:(0,I.p_)(lt.provider,ct,w.publisherSVGLogosHeight),enableRichSocialReaction:(!ct||(null==w?void 0:w.enableWebContentSocialReactions)||(null==w?void 0:w.enableWCCardAction)||(null==w?void 0:w.enableWCSaveButton))&&C,disableOptedOutButton:null==w?void 0:w.disableOptedOutButton,enableHoverCardAction:null==w?void 0:w.enableHoverCardAction,optedOutOfReactions:It,telemetryContext:pt,toggleCardActionMenu:(t,e,i)=>(0,E.Sp)(t,e,v,y,null,!0,D,null==w?void 0:w.openPersonalizeWithoutRouter,It,i),cardSize:d,useArticleCardTemplate:mt,articleCardBackgroundColor:yt,isAnaheimDesign:!!_,isHubDesign:!!T,isDynamicFeed:w.isDynamicFeed,useSmallFontSize:!!F,isNarrowTitleFooterGap:S,socialBarWCConfigInfo:A,metadata:st||s,enableSaveButton:w&&!1!==w.enableSaveButton||ct&&(null==w?void 0:w.enableWCSaveButton),publishedDateTime:Mt,ariaDateTime:Nt,gradientDeg:w&&w.isImage43?(0,E.rs)():void 0,isInfopane:!0,noBackPlateOnRest:!!_||w&&w.noBackPlateOnRest,enableFilledIconOnHover:w&&w.enableFilledIconOnHover,enableNeutralFilledShowMoreIcon:w&&w.enableNeutralFilledShowMoreIcon,topQuestionsHeading:$&&$.topQuestionsHeading,topQuestionsNote:$&&$.topQuestionsNote,highlightsHeading:$&&$.highlightsBadgeLabel,highlightsNote:$&&$.highlightsNote,followTexts:At,useTitleFontSize:w&&w.useTitleFontSize,enableWCSaveButton:!ct||(null==w?void 0:w.enableWCSaveButton),enableWCCardAction:!ct||(null==w?void 0:w.enableWCCardAction),actionsArrayOverride:ct&&(null==w?void 0:w.availableActions)||void 0,disableCardTitleTooltip:w&&w.disableCardTitleTooltip,enableTitleForTruncate:w&&w.enableTitleForTruncate,disableImmersiveInfopaneTitle:J,publisherFollowButtonConfigInfo:Lt?{...Lt,instanceId:`${Lt.instanceId}-${s.id}`}:void 0,enableHover:w&&w.enableHover,addExtToNewsContainer:w&&w.addExtToNewsContainer,getReplacementCardsCallback:N,reactionCallback:R,shareActionHandler:O,isSpotlightUX:s&&s.isFeatured,enableDefaultNewsIcon:W,useLightShadow:w&&w.useLightShadow,enableCardHideStoryIcon:w&&w.enableCardHideStoryIcon,lightShadowVal:w&&w.lightShadowVal,enableAttrOversizing:w&&w.enableAttrOversizing,useFollowPublisherButtonWC:w&&w.useFollowPublisherButtonWC,enableProviderAttrNav:!Ot&&w&&w.enableProviderAttrNav,panoCaption:ft,isPanoCard:lt.isPanoCard,clickPanocardFooterHandler:(t,e)=>(0,I.s2)(t,e),clickPanocardArticleHandler:(t,e)=>(0,I.$z)(t,e),isShoppingArticleCard:X,enableMorDigestTitleOnUX:Q,enableMorDigestTitle:q,enableMorDigestTitleHint:Y,enableMorDigestTitleBottom:K,externalVideoFiles:s.cardContent.videoFiles,infopaneMorDigDes:it,socialBarInRight:w&&w.socialBarInRight&&!w.providerOnTopInfopane,providerAboveHeader:w&&w.providerOnTopInfopane,lightGradientClass:Ht};if(_t){let t=!1;jt.mediaData={altText:Pt.altText,loadCallback:p,errorCallback:(e,i)=>{t||(t=!0,(0,a.vV)(n.qog,"Error fetching source","Source: "+e+", Article ID: "+i),p())},src:Pt.source};const e=jt.providerData;jt.attributionData={altText:e&&e.name,name:e&&e.name,publishedDateTime:Mt,src:e&&e.logoImage,useFollowingButton:!0,errorImageCallback:()=>{},providerChannelURL:e&&(0,tt.As)(e)};let i,r="";switch(null==St?void 0:St.type.toLowerCase()){case"trending":r=`${B.T3.StaticsUrl}latest/icons-wc/icons/TrendingLight.svg`;break;case"local":r=`${B.T3.StaticsUrl}latest/icons-wc/icons/LocationPin.svg`;break;case"followtopic":case"followpublisher":r=`${B.T3.StaticsUrl}latest/icons-wc/icons/CircleCompleted.svg`}var Ut;if(null!=St&&St.type)i={iconSrc:r,onClickBadge:(t,e)=>(0,E.Sp)(t,e,v,y,null,!0,D,null==w?void 0:w.openPersonalizeWithoutRouter,It,et.hs.WhyAmISee),telemetryTag_badge:null==pt||null===(Ut=pt.whyAmISee)||void 0===Ut?void 0:Ut.getMetadataTag(),text:(null==St?void 0:St.localizedLabel)||""};jt.badgeProps=i,jt.visualReadinessCallback=p}return jt}function pt(){const t={isHovered:!1};return(0,Y.sH)(t,"isHovered"),t}function ut(t,e,i,n,a,r,o,l,s,d,c,p,h,y){if(null!=t&&t.enableInfopaneDenseCardInteraction||null!=t&&t.infopaneDenseCardNoHeroNews){var $,x,k;let i=(null===($=t.childExperienceReferencesWC)||void 0===$?void 0:$.denseCard)||(null===(x=t.childExperienceReferences)||void 0===x?void 0:x.denseCard),n=(null==e?void 0:e.subItems)??(null==e?void 0:e.subCards);const r=7-1;if(n=n.filter((e,i)=>!(t.enableInfopaneDenseCardInteraction&&e.type!==P.pL.NativeAd&&e.type!==P.pL.CmsAd&&i>r)),i){var C;const t=(null===(C=n[0])||void 0===C?void 0:C.cardContent)??(0,I.cZ)(n[0]).cardContent;i={...i,instanceId:`denseCard-${t.id}`}}const p=o.addOrUpdateChild({name:"DenseSlide",type:v.MJ.Headline}),h=(0,A.mZ)(),m=(0,J.h_)(),y={newsList:null===(k=n)||void 0===k?void 0:k.map(e=>{var i;const n=e.type===P.pL.NativeAd||e.type===P.pL.CmsAd;if(!n){const i=e.type===P.pL.WebContent;e.cardContent||(e=(0,I.cZ)(e));const{id:r,destinationUrl:o,title:l,provider:s}=e.cardContent,d=(0,E.D9)(e,u.L._240x129,h,a,m);return{id:r,destinationUrl:(0,f.EJ)((0,I.Dv)(o),t),title:l,ariaLabel:(0,I.yL)(l,s,t.localizedStrings),providerData:(0,I.p_)(s,i,t.publisherSVGLogosHeight),isNativeAd:n,telemetryContext:(0,g.dj)(p,e.cardContent,e.metadata,c,i),isNarrowNewsItem:t.isNarrowNewsItem,imageData:d}}let r=(null===(i=e.placement)||void 0===i?void 0:i.items[0])||{};r=function(t){if(!t||!t.imageUrl)return t;const e=/https:\/\/images\.archive-digger\.com\/taboola\/image\/fetch\/f_jpg.+(http%3A%2F%2Fcdn.taboola.com%2F.+\.jpe?g)/,i=/^http:\/\/cdn.taboola.com\/.+\.jpe?g$/,n=t.imageUrl.trim(),a=(0,q.A)(t=>{if(0!==t.indexOf("https://images.archive-digger.com/taboola/"))return t;const n=t.match(e);if(!n||n.length<1)return t;const a=n[1],r=decodeURIComponent(a);return i.test(r)?r:t});return t.imageUrl=a(n),t}(r);const{beaconsJson:o,privacyUrl:l,adLabelText:d,geminiViewabilityDataJson:v}=e.placement||{};return{...r,beaconsJson:o,privacyUrl:l,adLabelText:d,geminiViewabilityDataJson:v,isNativeAd:n,adTelemetryContext:(0,b.u)(e,p,"infopane",0),isNarrowNewsItem:t.isNarrowNewsItem,isGreyAdsLabelEnabled:s}}),configOptions:t,cardSize:l,visualReadinessCallback:a};return{id:`denseCard-infopane-${d+1}`,childTemplateType:"dense-card",gridArea:"",telemetryObject:p,denseConfigInfo:i,denseData:y}}{var w,_,T,S,D,z,B;let $=(null===(w=t.childExperienceReferencesWC)||void 0===w?void 0:w.denseCard)||(null===(_=t.childExperienceReferences)||void 0===_?void 0:_.denseCard);const x=(null==e?void 0:e.subItems)??(null==e?void 0:e.subCards),k=(null===(T=x[0])||void 0===T?void 0:T.cardContent)??(0,I.cZ)(x[0]).cardContent,C=(null===(S=x[0])||void 0===S||null===(S=S.commentSummary)||void 0===S?void 0:S.totalCount)??(null===(D=(0,I.cZ)(x[0]).commentSummary)||void 0===D?void 0:D.totalCount)??0,A=(null===(z=x[0])||void 0===z?void 0:z.type)===P.pL.WebContent,{id:L,destinationUrl:M,title:N,provider:R,type:O}=k,H=(0,I.Ie)(x[0]),j=o.addOrUpdateChild({name:"DenseSlide",type:v.MJ.Headline}),U=(0,g.dj)(j,k,x[0].metadata,c,O===P.pL.WebContent),V=!0!==t.disableDenseArticleTemplate&&(null==H?void 0:H.width)<(null==H?void 0:H.height);let W=u.L._240x129;V?W=u.L._240x253:t.useLargeHeroImageForDense&&(W=u.L._300x200);const G=(0,E.po)(x[0],W,a,r,void 0,void 0,void 0,void 0,void 0,void 0,void 0,t.enableWebpFormat);let Z=null==x?void 0:x.slice(1);null!=t&&t.enableDenseLayout1&&(Z=[...null==x?void 0:x.slice(0,(null==x?void 0:x.length)-2),x[(null==x?void 0:x.length)-1]]),Z.length>F.Sl&&y&&(Z=Z.slice(0,F.Sl-1).concat(Z[Z.length-1])),$&&($={...$,instanceId:`denseCard-${L}`});const J=A?bt(k):M,X={id:L,destinationUrl:(0,f.EJ)((0,I.Dv)(J),t),openLinksInNewTab:i,title:N,ariaLabel:(0,I.yL)(N,R,t.localizedStrings),imagePriority:!1,providerData:(0,I.p_)(R,A,t.publisherSVGLogosHeight),isProviderInFooter:n,imageData:G,useArticleCardTemplate:V,telemetryContext:U,commentCount:Math.min(C,F.kZ),commentFlag:C>=h,newFlag:(0,F.IT)(k.publishedDateTime,p)},Q={heroNews:!t.enableVideoOnDenseIp||O!==P.pL.Video&&"VideoPreview"!==O?X:(m.YT.addOrUpdateTmplString("densecard-hero-video"),{...X,videoMetadata:k.videoMetadata??{},externalVideoFiles:k.videoFiles??k.externalVideoFiles}),newsList:null===(B=Z)||void 0===B?void 0:B.map(e=>{var i;const n=e.type===P.pL.NativeAd||e.type===P.pL.CmsAd;if(!n){var a;const i=e.type===P.pL.WebContent;e.cardContent||(e=(0,I.cZ)(e));const r=(null===(a=e.metadata)||void 0===a||null===(a=a.commentSummary)||void 0===a?void 0:a.totalCount)??0,o=i?bt(e.cardContent):e.cardContent.destinationUrl;return{destinationUrl:(0,f.EJ)((0,I.Dv)(o),t),title:e.cardContent.title,ariaLabel:(0,I.yL)(N,e.cardContent.provider,t.localizedStrings),providerData:(0,I.p_)(e.cardContent.provider,i,t.publisherSVGLogosHeight),isNativeAd:n,telemetryContext:(0,g.dj)(j,e.cardContent,e.metadata,c,i),isNarrowNewsItem:t.isNarrowNewsItem,commentCount:Math.min(r,F.kZ),commentFlag:r>=h,newFlag:(0,F.IT)(e.cardContent.publishedDateTime,p)}}const r=(null===(i=e.placement)||void 0===i?void 0:i.items[0])||{},{beaconsJson:o,privacyUrl:l,adLabelText:u,geminiViewabilityDataJson:m}=e.placement||{};return{...r,beaconsJson:o,privacyUrl:l,adLabelText:u,geminiViewabilityDataJson:m,isNativeAd:n,adTelemetryContext:(0,b.u)(e,j,"infopane",0),isNarrowNewsItem:t.isNarrowNewsItem,isGreyAdsLabelEnabled:s,enableInfopaneDVBeacon:null==t?void 0:t.enableInfopaneDVBeacon,id:`denseCard-infopane-${d+1}`}}),configOptions:t,cardSize:l};return{id:`denseCard-infopane-${d+1}`,childTemplateType:"dense-card",gridArea:"",telemetryObject:j,denseConfigInfo:$,denseData:Q}}}function gt(t,e){if(ft(t.event.target,"MSFT-ATTRIBUTION"))for(const i of ft(t.event.target,"MSFT-ATTRIBUTION").children)if("attribution_container"===i.id){const t=null==i?void 0:i.clientWidth,n=null==i?void 0:i.children[0].clientWidth,a=null==i?void 0:i.children[0],r=t-n<0?t-n:0;"ltr"===e?a.style.left=r+"px":a.style.right=r+"px"}}function ht(t,e){if(ft(t.event.target,"MSFT-ATTRIBUTION"))for(const i of ft(t.event.target,"MSFT-ATTRIBUTION").children)if("attribution_container"===i.id){const t=i.children[0];"ltr"===e?t.style.left="0px":t.style.right="0px"}}function ft(t,e){if(!t.children||0===t.children.length)return null;let i=null;const n=function(t,e){if(t.children&&0!==t.children.length)for(const a of t.children)a.nodeName===e&&(i=a),n(a,e)};return n(t,e),i}const bt=t=>{const{destinationUrl:e,id:i}=t||{};return(null==e?void 0:e.includes("youtube.com"))?(0,G.CW)(encodeURIComponent(i),e):e}},64524:function(t){t.exports='<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M9.43 11.84a1 1 0 001.57-.82V4.98a1 1 0 00-1.57-.82L5.64 6.78c-.85.59-.85 1.85 0 2.44l3.79 2.62z"></path></svg>'},64900:function(t){t.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.14 2.53a1.5 1.5 0 00-2.28 0l-6.62 7.8A1 1 0 003 11.98h3V17a1 1 0 001 1h6a1 1 0 001-1v-5.02h3a1 1 0 00.76-1.65l-6.62-7.8z"></path></svg>'},67301:function(t,e,i){"use strict";i.d(e,{b:function(){return r},c:function(){return a}});var n=i(11372);const a=t=>{if(!t)return;const e=t.addOrUpdateChild({name:"InfopaneHeader",type:n.MJ.Headline}),i=t.addOrUpdateChild({name:"Infopane",type:n.MJ.Headline}),a=i.addOrUpdateChild({name:"previousSlideArrow",behavior:n.MS.More,content:{headline:"previousSlideArrow"},type:n.MJ.ActionButton}),r=i.addOrUpdateChild({name:"nextSlideArrow",behavior:n.MS.More,content:{headline:"nextSlideArrow"},type:n.MJ.ActionButton}),o=i.addOrUpdateChild({name:"playTransition",behavior:n.MS.More,content:{headline:"playTransition"},type:n.MJ.ActionButton}),l=i.addOrUpdateChild({name:"pauseTransition",behavior:n.MS.More,content:{headline:"pauseTransition"},type:n.MJ.ActionButton}),s=i.addOrUpdateChild({name:"seeMore",behavior:n.MS.More,content:{headline:"seeMore"},type:n.MJ.ActionButton}),d=i.addOrUpdateChild({name:"articledestination",behavior:n.MS.Navigate,content:{headline:"articledestination"},type:n.MJ.ActionButton}),c=i.addOrUpdateChild({name:"infopanetab",behavior:n.MS.More,content:{headline:"infopanetab"},type:n.MJ.ActionButton});return{componentRoot:t,infopaneHeader:e,infopane:i,nextSlideArrow:r,previousSlideArrow:a,playTransitionButton:o,pauseTransitionButton:l,articledestination:d,seeMoreButton:s,tabTelemetry:c}},r=t=>{t&&t.infopane&&(t.personalTelemetry=t.infopane.addOrUpdateChild({name:"PersonalizedInfopane",type:n.MJ.Headline}),t.singleTelemetry=t.infopane.addOrUpdateChild({name:"single",type:n.MJ.Headline}))}},69585:function(t,e,i){"use strict";i.d(e,{P:function(){return _}});var n,a,r=i(66591),o=i(96950),l=i(91640),s=i(39957),d=i(4670),c=i(59646),p=i(98216),u=i(11372),g=i(30216),h=i(759),f=i(17254),b=i(30553),m=i(9594),v=i(47838),y=i(42290),$=i(11622);const x=o.qy`
    <card-flipper class="previousFlipper" 
        slot="previous-flipper"
        caretIcon="${null===(n=(0,f.rA)())||void 0===n?void 0:n.StaticsUrl}latest/fluent-icons/caret_left_24_filled.svg" 
        direction="previous"
        invert-color=${t=>t.flipperColorInverted}
        aria-hidden="${t=>!t.enableFlippersOnRest||!t.enableTransparentFlippersOnRest}"
        size=${t=>t.flipperSize}
        data-t="${t=>{var e;return null===(e=t.telemetryContext)||void 0===e||null===(e=e.previousSlideArrow)||void 0===e?void 0:e.getMetadataTag()}}"
        title=${t=>t.infoPanePreviousFlipperTitle}
    >
    </card-flipper>
`,k=o.qy`
    <card-flipper class="nextFlipper" 
        slot="next-flipper"
        caretIcon="${null===(a=(0,f.rA)())||void 0===a?void 0:a.StaticsUrl}latest/fluent-icons/caret_left_24_filled.svg"
        direction="next"
        invert-color=${t=>t.flipperColorInverted}
        aria-hidden="${t=>!t.enableFlippersOnRest||!t.enableTransparentFlippersOnRest}"
        size=${t=>t.flipperSize}
        data-t="${t=>{var e;return null===(e=t.telemetryContext)||void 0===e||null===(e=e.nextSlideArrow)||void 0===e?void 0:e.getMetadataTag()}}"
        title=${t=>t.infoPaneNextFlipperTitle}
    >
    </card-flipper>
`,C=o.qy`
        ${x}
        ${k}
        `,w=new WeakMap,_=o.qy`
                <cs-responsive-infopane
                    class="${t=>z(t)}"
                    duration="${t=>t.rotationDuration}"
                    media-controls="${t=>t.enablePlayPauseButton}"
                    navigation-position="${t=>t.navPosition}"
                    :enableSingleRotation="${t=>t.enableSingleRotation}"
                    :hasSlideShow="${t=>t.enableSlideShow}"
                    :parentContentId="${t=>t.parentContentId}"
                    size="${t=>t.cardSize}"
                    tab-count=${t=>t.tabCount}
                    transition-strategy=${t=>t.enableIpTransform?"transform":"position"}
                    :restartRotationTimer="${t=>t.restartRotationTimer}"
                    :wpoRotationDuration="${t=>t.wpoRotationDuration}"
                    style="grid-area:${t=>t.gridArea}"
                    data-t="${t=>{var e;return null===(e=t.telemetryContext)||void 0===e||null===(e=e.infopane)||void 0===e?void 0:e.getMetadataTag()}}"
                    play-telemetry="${t=>{var e;return null===(e=t.telemetryContext)||void 0===e||null===(e=e.playTransitionButton)||void 0===e?void 0:e.getMetadataTag()}}"
                    pause-telemetry="${t=>{var e;return null===(e=t.telemetryContext)||void 0===e||null===(e=e.pauseTransitionButton)||void 0===e?void 0:e.getMetadataTag()}}"
                    @mouseenter=${(t,e)=>{e.event&&T(e.event.currentTarget)}}
                    @mouseleave=${(t,e)=>{e.event&&F(e.event.currentTarget)}}
                    preload-panels=${t=>t.lazyInfopanePreloadCount}
                    :enableVariableSpeed=${t=>t.enableVariableSpeed}
                    :variableTransitionMap=${t=>t.enableVariableSpeed&&t.slideContentData.map(t=>({id:t.id,slideDuration:t.customTransitionSpeed}))}
                    :lazyPanels=${t=>t.enableLazyInfopane?t.slideContentData.map(t=>({id:t.id,data:t})):void 0}
    :lazyPanelTemplate=${(t,e)=>(w.has(e.parent)||w.set(e.parent,o.qy`${t=>A(t)}`),w.get(e.parent))}
                    >
                    ${(0,l.z)(t=>!t.disableInfopaneFlippers,C)}
                    ${(0,s.ux)(t=>t.enableLazyInfopane?[]:t.slideContentData,o.qy`${(t,e)=>A(t)}`)}
                </cs-responsive-infopane>
    `,T=t=>{(0,c.kM)("SuperInfopaneCard",()=>p.YT.sendActionEvent(t,u.EG.Hover,u.MS.Open))},F=t=>{(0,c.pS)("SuperInfopaneCard",()=>p.YT.sendActionEvent(t,u.EG.MouseLeave,u.MS.Open))},S=o.qy.partial("style='height: 100%; width: 100%;'"),D=o.qy`
    <div class="dense-card-container">
        ${t=>(0,$.yN)(t.denseConfigInfo,{properties:{denseData:t.denseData,telemetryObject:t.telemetryObject},memoize:!1})}
    </div>
`,A=t=>{const e=0!==(t.cardActionStatus&g.J.hide)||!!t.enableHideStoryFeedback&&(0!==(t.cardActionStatus&g.J.showFewer)||0!==(t.cardActionStatus&g.J.hidden));return t.isNativeAd?h.W:e?(t=>{var e;return t.cardActionStatus&g.J.hidden?o.qy`<div class="infopane-hide-story" ${S}>
            ${b.X}
        <div>`:t.cardActionStatus&g.J.adFeedbackSubmitted?o.qy`<div class="infopane-hide-story" ${S}>
            ${y.L}
        <div>`:o.qy`<div class="infopane-hide-story" ${S}>
        ${"nativead"===(null===(e=t.currentCardData)||void 0===e?void 0:e.type)?v.j:m.F}
    </div>`})(t):"dense-card"===t.childTemplateType?D:d.t},z=t=>(0,r.x)("infopane mid-button infopaneCardWrapper",["no-nav-anim",t.disableNavAnimation],["immersive-infopane",t.enableImmersiveInfopane],["show-flippers",t.enableFlippersOnRest],["tsp-flippers",t.enableTransparentFlippersOnRest],["no-margin-flippers",t.enableNoMarginFlippers])},69685:function(t,e,i){"use strict";i.d(e,{_C:function(){return s},E_:function(){return l},QC:function(){return d}});const n="http://adaptivecards.io/schemas/adaptive-card.json";var a=i(19608),r=i(930),o=i(17254);function l(t){if(!t)return null;if(function(t){if(!t.body||!t.body[0]||!t.body[0].columns||t.body[0].columns.length<3)return!1;const e=t.body[0].columns[2].items&&t.body[0].columns[2].items[0];return!(!e||!e.text)}(t)){const e=t.body[0].columns[2].items[0].text,i={$schema:n,version:t.version,type:"AdaptiveCard",body:[{type:"ColumnSet",columns:[{type:"Column",items:[{type:"TextBlock",id:"WidgetsOverlayText",text:e.slice(0,e.length-1),size:"small",horizontalAlignment:"center"}]}]}]};return t.widgetsOverlay=i,t.timeToLiveInSeconds=1800,t.contentType="Weather",t}return t}function s(t){var e;const{cardMetadata:i,configOptions:n,supportedSdCardActionMenuItems:o}=t,l=n&&n;let s;null!=i&&i.data&&(s=function(t){const{configOptions:e,parentTelemetryObject:i,cardMetadata:n,openLinksInNewTab:a,hideCardCallback:r,goToPersonalizeSettingsCallback:o,sdCardActionClickHandler:l,dismissSDCardMenuCallback:s,refreshSDCardSection:d,supportedSdCardActionMenuItems:c,refreshFeedCallback:p,visualReadinessCallback:u,hasLoadedCallback:g,isDynamicFeed:h,activeBoard:f,isWidgetRegion:b,onSDCardClick:m}=t,v=e&&e;return{id:"weather",childTemplateType:"weather-card",parentTelemetryObject:i,weatherCardConfigInfo:v,cardMetadata:n.data,openLinksInNewTab:a,hideWeatherCardCallback:r,goToPersonalizeSettingsCallback:o,dismissSDCardMenuCallback:s,refreshSDCardSection:d,sdCardActionClickHandler:l,supportedSdCardActionMenuItems:c,refreshFeed:p,visualReadinessCallback:u,hasLoadedCallback:g,isDynamicFeed:h,isSpotlightUX:n.metadata&&n.metadata.isSpotlightUX,activeBoard:f,previewType:n.metadata&&n.metadata.previewType,isProngReclaim:n.metadata&&n.metadata.isProngReclaim,isWidgetRegion:b,onSDCardClick:m}}(t));return(0,a.bw)({id:"weather",experienceType:null==l||null===(e=l.configRef)||void 0===e?void 0:e.experienceType,mapperArgs:t},s,(t,e)=>({cardLayout:e.cardSize===r.uE._1x_1y?"half":"full",supportedSdCardActionMenuItems:o}),!0)}function d(){return"edgeChromium"===o.T3.AppType}},72706:function(t,e,i){"use strict";i.d(e,{d:function(){return r}});var n=i(96950),a=i(11622);const r=n.qy`
    <fluent-card
        style="grid-area:${t=>t.gridArea}"
        class="${t=>t.cardSize}"
    >
        ${t=>(0,a.yN)(t.pollsCardConfigInfo,{properties:{fetchedData:t.fetchedData,telemetryExt:t.telemetryExt,goToPersonalizeSettingsCallback:t.goToPersonalizeSettingsCallback,refreshSDCardSection:t.refreshSDCardSection},telemetryObject:t.telemetryObject})}
    </fluent-card>
`;n.qy`
    <cs-card
        style="grid-area:${t=>t.gridArea}; border-radius: 8px;"
        class="${t=>t.cardSize}"
        size="${t=>t.cardSize}"
    >
    ${t=>(0,a.yN)(t.pollsCardConfigInfo,{properties:{fetchedData:t.fetchedData,telemetryExt:t.telemetryExt,goToPersonalizeSettingsCallback:t.goToPersonalizeSettingsCallback,refreshSDCardSection:t.refreshSDCardSection,cardSize:t.cardSize},telemetryObject:t.telemetryObject})}
    </cs-card>
`},74180:function(t,e,i){"use strict";i.d(e,{f:function(){return a}});var n=i(56589);class a{constructor(){this.config={},this.strings={},this.initialized=!1}async initConfig(t){var e,i;this.initialized||(this.config=await this.getConfigFromRef(t)||{},this.strings=(null===(e=this.config)||void 0===e?void 0:e.localizedStrings)||{},this.initialized=!!this.config&&!(null===(i=this.config)||void 0===i||!i.localizedStrings))}getConfig(){return this.config}getLocStrings(){return this.strings}async getConfigFromRef(t){try{const e=(null==t?void 0:t.configRef)||this.configRef,i=await n.L.getConfig(e);return null==i?void 0:i.properties}catch(t){return{}}}}},75416:function(t,e,i){"use strict";i.d(e,{P:function(){return n}});const n="#0078D4"},76972:function(t,e,i){"use strict";i.d(e,{Hg:function(){return o}});var n=i(17254),a=i(27261);const r=/[:/?#[\]@!$&'()*+,;=]/g;function o(t,e,i,o){let l=`${n.T3.NavTargetUrlWithLocale}/channel`;if(t&&i){const n="source"===i?"sr":"tp";l+="/"+[i,e?encodeURIComponent(e.replace(r,"")):"",`${n}-${t}`].filter(t=>t).join("/")}const s=new URL(l);return o||(s.search=(0,a.iA)()),(0,a.ou)().includes("localhost.msn.com")&&(s.host=(0,a.ou)()),s.toString()}},77087:function(t,e,i){"use strict";i.d(e,{K:function(){return r}});var n=i(30216),a=i(37998);const r=i(96950).qy`
<fluent-button slot="hover-actions" appearance="stealth"
    style="min-width: 24px; width: 24px; height: 24px; border-radius: 16px; ${a.ET}; flex-direction: column; --neutral-fill-stealth-rest: #FFFFFF; --neutral-fill-stealth-hover: #F2F2F2; --neutral-fill-stealth-active: #F7F7F7; fill: #2B2B2B"
    aria-label="${t=>t.cardActionsTooltips&&t.cardActionsTooltips.hide}"
    title="${t=>t.cardActionsTooltips&&t.cardActionsTooltips.hide}"
    @click=${t=>t.cardActionClickHandler&&t.cardActionClickHandler(t.id,t.cardActionStatus^n.J.hide,"Hide",!0)}
    @keypress=${t=>t.cardActionClickHandler&&t.cardActionClickHandler(t.id,t.cardActionStatus^n.J.hide,"Hide",!0)}
    data-t="${t=>t.telemetryContext&&t.telemetryContext.hide&&t.telemetryContext.hide.getMetadataTag()}"
>
    <svg style="width: 8px; height: 24px; vertical-align: middle;" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.84961 6L12 11.1504L11.1504 12L6 6.84961L0.849609 12L0 11.1504L5.15039 6L0 0.849609L0.849609 0L6 5.15039L11.1504 0L12 0.849609L6.84961 6Z"/>
    </svg>
</fluent-button>
`},80904:function(t,e,i){"use strict";i.d(e,{p:function(){return r}});var n=i(96950),a=i(17254);const r=n.qy`<button 
    slot="hover-actions"
    class="card-see-more"
    title=${t=>t.cardActionsTooltips&&t.cardActionsTooltips.seeMore}
    @click=${(t,e)=>t.toggleCardActionMenu&&t.toggleCardActionMenu(t,e.event)}
    data-t="${t=>{var e;return null===(e=t.telemetryContext)||void 0===e||null===(e=e.seeMore)||void 0===e?void 0:e.getMetadataTag()}}"
    >
        <img src="${a.T3.StaticsUrl}latest/icons-wc/icons/MoreV2.svg" loading="lazy" alt="more" aria-hidden="true" />
    </button>`},81109:function(t,e,i){"use strict";i.d(e,{QQ:function(){return g},fn:function(){return c},mt:function(){return p},vJ:function(){return u}});var n=i(80004),a=i(79765),r=i(96950),o=i(91640),l=i(90869),s=i.n(l),d=i(11622);const c=t=>r.qy`
        ${(0,o.z)(t=>t.providerData,r.qy`
            ${(0,o.z)(t=>t.isAnaheimDesign,r.qy`
                <msft-attribution slot="${t}" style="color:#fff;pointer-events: none;--design-unit: 1.5;">
                    ${p()}
                    <div class="attribution_container_${t=>t.id}" id="attribution_container">
                        <div class="attribution_Content_${t=>t.id}" style="${t=>"rtl"===t.dir?"right":"left"}:0px;${t=>t.isProviderIconClickable?"padding: 0 10px;":""} ${t=>t.isWorkNewsContent?"display: flex;":""}">
                            ${(0,o.z)(t=>t.providerData&&t.providerData.name&&(!t.isProviderIconClickable||!t.providerData.profileId),r.qy`<span style="unicode-bidi: embed;">${t=>t.providerData.name}</span>`)}
                            ${(0,o.z)(t=>t.providerData&&t.providerData.name&&t.publishedDateTime,r.qy` · `)}
                            ${(0,o.z)(t=>t.publishedDateTime,r.qy`<span style="unicode-bidi: embed;">${t=>t.publishedDateTime}</span>`)}
                            ${(0,o.z)(t=>t.isWebContent&&t.crawledContentLabel,r.qy` · `)}
                            ${(0,o.z)(t=>t.isWebContent&&t.crawledContentLabel,r.qy`${t=>t.crawledContentLabel}`)}
                            ${(0,o.z)(t=>t.isWorkNewsContent,r.qy`<span style="padding: 0 2px;"> · </span>`)}
                            ${(0,o.z)(t=>t.isWorkNewsContent,r.qy`<div style="height: 16px; width:16px;">${r.qy.partial(s())}</div>`)}
                        </div>
                        ${(0,o.z)(t=>t.publisherFollowButtonConfigInfo,r.qy`
                            <div style="position: relative; display: inline-block;">
                                ${t=>(0,d.yN)(t.publisherFollowButtonConfigInfo,{properties:{contentId:t.id,publisherProfileId:t.providerData.profileId,profileId:t.providerData.id,getReplacementCardsCallback:t.getReplacementCardsCallback,reactionCallback:t.reactionCallback}})}
                            </div>
                        `)}
                    </div>
                </msft-attribution>
                
            `)}
            ${(0,o.z)(t=>!t.isAnaheimDesign,r.qy`
                <msft-attribution slot="attribution" style="--design-unit: 1.5;">
                    ${p()}
                    <div class="attribution_container_${t=>t.id}" id="attribution_container">
                        <div class="attribution_Content_${t=>t.id}" style="${t=>"rtl"===t.dir?"right":"left"}:0px;${t=>t.isProviderIconClickable?"padding: 0 10px;":""}">
                            ${(0,o.z)(t=>t.providerData&&t.providerData.name&&(!t.isProviderIconClickable||!t.providerData.profileId),r.qy`<span style="unicode-bidi: embed;">${t=>t.providerData.name}</span>`)}
                            ${(0,o.z)(t=>t.providerData&&t.providerData.name&&t.publishedDateTime,r.qy` · `)}
                            ${(0,o.z)(t=>t.publishedDateTime,r.qy`<span style="unicode-bidi: embed;">${t=>t.publishedDateTime}</span>`)}
                            ${(0,o.z)(t=>t.isWebContent&&t.crawledContentLabel,r.qy` · `)}
                            ${(0,o.z)(t=>t.isWebContent&&t.crawledContentLabel,r.qy`${t=>t.crawledContentLabel}`)}
                        </div>
                    </div>
                </msft-attribution>
            `)}
        `)}
    `,p=()=>r.qy`
    ${(0,o.z)(t=>t.providerData.logoImage,r.qy`
        ${(0,o.z)(t=>t.isProviderIconClickable&&t.providerData&&t.providerData.profileId,r.qy`
            <a class="attribution-icon-clickable" href=${t=>(0,n.IZ)(t.providerData.profileId)} target="_blank" title="${t=>t.providerData.name}" tabindex="-1"
                data-t="${t=>t.telemetryContext&&t.telemetryContext.clickableProviderIcon&&t.telemetryContext.clickableProviderIcon.getMetadataTag()}">
                <img slot="image" src="${t=>t.providerData.logoImage}" tabindex="0" alt="${t=>t.providerData.name}" @load=${t=>t.imageData&&t.imageData.visualReadinessCallback&&t.imageData.visualReadinessCallback(1,a.j.provider)}/>
                <span class="attribution-provider-name" tabindex="0">${t=>t.providerData.name}</span>
            </a>
        `)}
        ${(0,o.z)(t=>!t.isProviderIconClickable||!t.providerData.profileId,r.qy`
            <img slot="image" src="${t=>t.providerData&&t.providerData.logoImage}" alt="${t=>t.providerData&&t.providerData.name}" 
            @load=${t=>t.imageData&&t.imageData.visualReadinessCallback&&t.imageData.visualReadinessCallback(1,a.j.provider)}/>
        `)}
    `)}
    ${(0,o.z)(t=>t.isProviderIconClickable&&t.providerData&&t.providerData.name&&t.providerData.profileId&&!t.providerData.logoImage,r.qy`
        <a class="attribution-icon-clickable" href=${t=>(0,n.IZ)(t.providerData.profileId)} target="_blank" title="${t=>t.providerData.name}" tabindex="-1"
            data-t="${t=>t.telemetryContext&&t.telemetryContext.clickableProviderIcon&&t.telemetryContext.clickableProviderIcon.getMetadataTag()}">
            <span style="unicode-bidi: embed;margin-inline-end: -5px;" tabindex="0">${t=>t.providerData.name}</span>
        </a>
    `)}
    ${(0,o.z)(t=>t.isProviderIconClickable&&t.providerData.profileId,r.qy`
        <style>
            .attribution-icon-clickable {
                z-index: 4;
                color: unset;
                text-decoration: none;
                display: inline-flex;
            }
            .attribution-icon-clickable:hover {
                text-decoration: underline;
            }
            .attribution-provider-name {
                unicode-bidi: embed;
                margin-inline-start: 10px;
                margin-inline-end: -5px;
            }
        </style>
    `)}
`,u=r.qy`
    <msft-attribution slot="attribution">
        ${p()}
        <div class="attribution_container_${t=>t.id}" id="attribution_container">
            <div class="attribution_Content_${t=>t.id}" style="${t=>"rtl"===t.dir?"right":"left"}:0px;${t=>t.isProviderIconClickable?"padding: 0 10px;":""}">
                ${(0,o.z)(t=>t.providerData&&t.providerData.name&&(!t.isProviderIconClickable||!t.providerData.profileId),r.qy`<span style="unicode-bidi: embed;">${t=>t.providerData.name}</span>`)}
                ${(0,o.z)(t=>t.providerData&&t.providerData.name&&t.publishedDateTime,r.qy` · `)}
                ${(0,o.z)(t=>t.publishedDateTime,r.qy`<span style="unicode-bidi: embed;">${t=>t.publishedDateTime}</span>`)}
                ${(0,o.z)(t=>t.isWebContent&&t.crawledContentLabel,r.qy` · `)}
                ${(0,o.z)(t=>t.isWebContent&&t.crawledContentLabel,r.qy`${t=>t.crawledContentLabel}`)}
            </div>
        </div>
    </msft-attribution>
`,g=r.qy`
    <msft-attribution slot="attribution">
        ${p()}
        ${(0,o.z)(t=>t.providerData.name&&(!t.isProviderIconClickable||!t.providerData.profileId),r.qy`<span style="unicode-bidi:embed">${t=>t.providerData.name}</span>`)}
        ${(0,o.z)(t=>t.providerData.name&&t.publishedDateTime,r.qy` · `)}
        ${(0,o.z)(t=>t.publishedDateTime,r.qy`${t=>t.publishedDateTime}`)}
    </msft-attribution>
`},82911:function(t,e,i){"use strict";i.d(e,{D:function(){return a},H:function(){return r}});var n=i(26641);const a={getFeedDataForCard:t=>{const e=t;return t.cardMetadata.renderFromHomePage&&(e.cardSlot.layouts={C4:"_1x_2y",C3:"_1x_2y",C2:"_1x_2y"}),e.cardMetadata.cardType=null!=t&&t.activeBoard?`${t.cardMetadata.type}_${null==t?void 0:t.activeBoard}`:t.cardMetadata.type,(0,n.BQ)(e)},viewTemplate:n.wT},r=n.wT},89768:function(t,e,i){"use strict";i.d(e,{V:function(){return w}});var n=i(930),a=i(80004),r=i(83003),o=i(19608),l=i(90795),s=i(36783),d=i(38260),c=i(67301),p=i(47149),u=i(11372),g=i(98216),h=i(2632),f=i(50866),b=i(89151),m=i(8866),v=i(61777),y=i(669),$=i(12870),x=i(55593);const k={[n.uE._1x_2y]:a.Sv.infoPane,[n.uE._1x_3y]:a.Sv.infoPane1x3y,[n.uE._2x_2y]:a.Sv.infoPane,[n.uE._2x_3y]:a.Sv.infoPane};function C(t){var e;(0,b.tD)("InfopaneDataMapping.Start",performance.now());let i=[];const{cardActionBitMask:a,cardActionClickHandler:C,cardMetadata:w,cardSlot:_,configOptions:T,enableRichSocialReaction:F,enableRotateOnlyOnce:S,preventDefaultClick:D,handleAdFeedbackSubmit:A,hideStoryEntryPointMap:z,isAdFeedbackV1Enabled:I,initCardAction:E,getReplacementCardsCallback:B,localizedStrings:L,notificationMetadata:M,openLinksInNewTab:N,openLinksInCurrentTab:R,parentTelemetryObject:O,reactionCallback:P,visualReadinessCallback:H,underlineTitle:j}=t,U=w,{grid_area:V}=_,W=H;if(U.subItems&&U.subItems.length?i=U.subItems:(i=U.subCards,U.subItems=i),!i.length)return;const G=(0,c.c)(O),Z=T&&T,J=T&&(T.childExperienceReferencesWC&&T.childExperienceReferencesWC.socialBarWC||T.childExperienceReferences&&T.childExperienceReferences.socialBarWC),X=T&&T.childExperienceReferencesWC&&T.childExperienceReferencesWC.publisherFollowButton;if(U.wpoMetadata){const{contentType:t}=U.wpoMetadata;t!==r.pL.TopStories&&t!==r.pL.TopStoriesV2||(i=i.slice(0,6))}let Q=!1;null!=T&&T.enablePauseInfopaneOnSpot&&U.wpoMetadata&&U.wpoMetadata.contentType===r.pL.TopStories&&U.metadata&&!0===U.metadata.isSpotlightUX&&U.metadata.previewType&&U.metadata.previewType.startsWith("News_BreakingNews")&&(Q=!0);const q=null==L?void 0:L.cardActionsTooltips,Y={id:"infopane",childTemplateType:T.useResponsiveInfopane?"responsive-infopane":"infopane-card",slideContentData:[],enableRotateOnlyOnce:S,enableAdaptDarkMode:T&&T.enableAdaptDarkMode,infoPaneNextFlipperTitle:L?L.infoPaneNextFlipperTitle:"",infoPanePreviousFlipperTitle:L?L.infoPanePreviousFlipperTitle:"",useTitleFontSize:T&&T.useTitleFontSize,enableImmersiveInfopane:T&&T.enableImmersiveInfopane,infopaneViewOptAdCount:T&&T.infopaneViewOptAdCount,cardActionsTooltips:q,enablePauseInfopaneOnSpot:Q,telemetryContext:G,parentContentId:T.parentContentId,underlineTitle:j};return(0,o.bw)({id:"infopane",experienceType:null===(e=T&&T.childExperienceReferencesWC)||void 0===e||null===(e=e.configRef)||void 0===e?void 0:e.experienceType,mapperArgs:t},Y,(e,c)=>{const w=[],H=c.cardSize;let U;i.forEach((i,n)=>{var d,c,f,b,x,S,V;const Q=i.recoId||i.metadata&&i.metadata.recoId,q=i.ri||i.metadata&&i.metadata.ri,Y=(0,o.uX)({id:"infopane",columnArrangement:e,experienceType:null==Z||null===(d=Z.configRef)||void 0===d?void 0:d.experienceType,mapperArgs:t,recoId:Q,ri:q,subCardIndex:n});U=Y.telemetryExt;const K=i.visualReadinessCallback,tt=()=>{W&&W(),K&&K()},et=null===$.Rb||void 0===$.Rb||null===(c=$.Rb.CurrentFlightSet)||void 0===c?void 0:c.has("prg-ad-iasv2ra"),it=!1===(null===$.Rb||void 0===$.Rb||null===(f=$.Rb.CurrentFlightSet)||void 0===f?void 0:f.has("prg-ad-iasv3ratt-rf"));let nt;var at,rt,ot;if("nativead"===i.type||"cmsad"===i.type||"directbuyad"===i.type)nt=(0,l.t)({cardActionBitMask:a,cardMetadata:i,cardSlot:_,configOptions:T,cardActionClickHandler:C,handleAdFeedbackSubmit:A,immersiveCard:!0,initCardAction:E,isAdFeedbackV1Enabled:I,localizedStrings:L,enableIASResponsiveAdCardFix:et,enableResponsiveAdAndTrustedTypes:it}),nt.adTelemetryContext=(0,h.u)(i,G&&G.infopane,"infopane",0,U),nt.telemetryContext=nt.adTelemetryContext,t.configOptions.preloadInfopaneImages&&((0,y.NN)(null===(at=nt.imageData)||void 0===at?void 0:at.source),(0,y.NN)(null===(rt=nt.providerData)||void 0===rt?void 0:rt.logoImage));else if(i.type===r.pL.Dense){if(((null==i?void 0:i.subItems)??(null==i?void 0:i.subCards)).forEach(t=>{if(!t)return;const e=t.recoId||t.metadata&&t.metadata.recoId;e&&(U.recoId=e)}),nt=(0,v.gC)(T,i,N,!0,tt,!0,O,H,T.isGreyAdsLabelEnabled,n,U),t.configOptions.preloadInfopaneImages){var lt,st;(0,y.NN)(null===(lt=nt.denseData.heroNews)||void 0===lt||null===(lt=lt.imageData)||void 0===lt?void 0:lt.source),(0,y.NN)(null===(st=nt.denseData.heroNews)||void 0===st||null===(st=st.providerData)||void 0===st?void 0:st.logoImage);for(const t of nt.denseData.newsList||[]){var dt;(0,y.NN)(null===(dt=t.providerData)||void 0===dt?void 0:dt.logoImage)}}}else{var ct,pt;if(nt=(0,s.uh)({cardActionBitMask:a,cardActionClickHandler:C,cardMetadata:i,cardSlot:_,configOptions:T,enableRichSocialReaction:F,getReplacementCardsCallback:B,hideStoryEntryPointMap:z,immersiveCard:!0,initCardAction:E,preventDefaultClick:D,localizedStrings:L,notificationMetadata:M,openLinksInNewTab:N,openLinksInCurrentTab:R,parentTelemetryObject:G&&G.infopane,reactionCallback:P,underlineTitle:j},{socialBarWCConfigInfo:J,publisherFollowButtonConfigInfo:X},H,!0,tt),t.configOptions.preloadInfopaneImages)(0,y.NN)(null===(ct=nt.mediaData)||void 0===ct?void 0:ct.src),(0,y.NN)(null===(pt=nt.providerData)||void 0===pt?void 0:pt.logoImage)}T&&T.addExtToNewsContainer&&nt.telemetryContext&&(nt.telemetryContext.destination&&nt.telemetryContext.contentCard&&(nt.telemetryContext.destination=nt.telemetryContext.contentCard.addOrUpdateChild({...nt.telemetryContext.destination.contract,type:u.MJ.Headline,ext:U})),nt.telemetryContext.contentCard=new p.$({...null===(ot=nt.telemetryContext.contentCard)||void 0===ot?void 0:ot.contract,ext:U}));const ut=i.type===r.pL.EventInfopaneShoppingAI;ut&&(nt.destinationUrl=function(t){const e=new URL(t);return e.searchParams.set("entryPoint","msn"),e.searchParams.set("FORM","INFOBG"),e.searchParams.set("msnrid",g.YT.getRequestId()),e.searchParams.set("adunitId","378983"),e.searchParams.set("propertyId","316966"),e.toString()}(nt.destinationUrl));let gt="";T.enableLightGradientV3&&(gt="light-gradient-v3"),T.enableLightGradientV4&&(gt="light-gradient-v4"),nt={...nt,...nt.attributionData,cardSize:H,responsiveCardSize:"_1x_2y"==H?m.Go._1u:m.Go._2c,enableProviderAlignmentV2:T&&T.enableProviderAlignmentV2,enableAttrOversizing:T&&T.enableAttrOversizing,imageData:{imageWidth:null===(b=nt.mediaData)||void 0===b||null===(b=b.width)||void 0===b?void 0:b.toString(),imageHeight:null===(x=nt.mediaData)||void 0===x||null===(x=x.height)||void 0===x?void 0:x.toString(),source:null===(S=nt.mediaData)||void 0===S?void 0:S.src,visualReadinessCallback:null===(V=nt.mediaData)||void 0===V?void 0:V.loadCallback},isInfopane:!0,isShoppingArticleCard:ut,mediaType:i.type===r.pL.Video?"video":"image",addExtToNewsContainer:T&&T.addExtToNewsContainer,useLightShadow:T&&T.useLightShadow,lightGradientClass:gt,enableAdSponsoredText:T&&T.enableAdSponsoredText},nt&&(i.type!==r.pL.TopStories&&(nt.cardLayout=k[H]),w.push(nt))});const q={...G};if(T&&T.addExtToNewsContainer&&U&&q.infopane){const{row:t,col:e,width:i,height:n,template:a,slot:r,traceIdIndex:o,co:l}=U;q.infopane=new p.$({...q.infopane.contract,ext:{row:t,col:e,width:i,height:n,template:a,slot:r,traceIdIndex:o,co:l}})}const Y=T.autoRotateIntervalMs??t.autoRotateIntervalMs,K=T.enableOneCInfopaneNav&&H===f.qJ._1x_2y,tt=(0,x.a)().get("vpFreeze"),et={autoRotateIntervalMs:t.autoRotateIntervalMs,firstAutoRotateIntervalMs:t.firstAutoRotateIntervalMs,layout:H===n.uE._2x_2y?d.j.TwoColumn:d.j.OneColumn,gridArea:V,slideContentData:w,enableFlippersOnRest:T.enableInfopaneFlippersOnRest,enableTransparentFlippersOnRest:T.enableTransIfpFlippersOnRest,enableNoMarginFlippers:T.enableNoMarginFlippers,enableSlideShow:!T.disableSlideShow&&!tt,enablePlayPauseButton:!T.disableInfopanePlayPauseButton,disableNavAnimation:T.disableNavAnimation,shiftIpNavToRight:T.shiftIpNavToRight,rotationDuration:Y?Y/1e3:3,enableSingleRotation:S,disableInfopaneComplexAds:T.disableInfopaneComplexAds,enableIpTransform:T.enableIpTransform,enableInfopaneDenseCardInteraction:T.enableInfopaneDenseCardInteraction,restartRotationTimer:T.restartRotationTimer,flipperSize:T.ipFlipperCustomSize??"large",flipperColorInverted:T.invertIpFlipperColor,enablePauseInfopaneOnSpot:Q,seeMoreOverride:T.seeMoreOverride,enableLazyInfopane:!!T.enableLazyInfopane,lazyInfopanePreloadCount:T.lazyInfopanePreloadCount,navPosition:T.enableBottomNav&&!K?"bottom":"top",tabCount:T.enableMaxInfopaneSlider&&!K?99:5,telemetryContext:q,parentContentId:T.parentContentId};return(0,b.tD)("InfopaneDataMapping.End",performance.now()),et},!0)}const w={getFeedDataForCard:t=>C(t),viewTemplate:i(69585).P}},90048:function(t,e,i){"use strict";i.d(e,{M:function(){return r}});var n=i(46780),a=i(19608);const r={getFeedDataForCard:t=>function(t){const{cardMetadata:e}=t,{id:i}=e,n={id:i,childTemplateType:"placeholder-card"};return(0,a.bw)({id:i,experienceType:null,mapperArgs:t},n)}(t),viewTemplate:n.u}},90202:function(t,e,i){"use strict";i.d(e,{w:function(){return r}});var n=i(98216),a=i(11372);class r{constructor(t){this.enableHover=t,this.inElement=!1,this.onMouseEnter=(t,e)=>{!1!==e&&(void 0!==e||this.enableHover)&&n.YT&&t&&!this.inElement&&(this.inElement=!0,n.YT.sendActionEvent(t,a.EG.Hover))},this.onMouseLeave=(t,e)=>{!1!==e&&(void 0!==e||this.enableHover)&&n.YT&&t&&this.inElement&&(this.inElement=!1,n.YT.sendActionEvent(t,a.EG.MouseLeave))}}}},90587:function(t,e,i){"use strict";i.d(e,{O:function(){return r}});var n=i(99758),a=i(19608);const r={getFeedDataForCard:t=>function(t){var e,i,n,r,o;const{cardMetadata:l,parentTelemetryObject:s,configOptions:d}=t,c=d&&(d.childExperienceReferencesWC&&(d.childExperienceReferencesWC.videoCard||d.childExperienceReferencesWC.videoCardWC)||d.childExperienceReferences&&(d.childExperienceReferences.videoCard||d.childExperienceReferences.videoCardWC)),p=d&&(d.childExperienceReferencesWC&&d.childExperienceReferencesWC.socialBarWC||d.childExperienceReferences&&d.childExperienceReferences.socialBarWC),u={childTemplateType:"video-card",contentId:null==l||null===(e=l.cardContent)||void 0===e?void 0:e.id,id:(null==l||null===(i=l.cardContent)||void 0===i?void 0:i.id)??"videoCard",parentTelemetryObject:s,videoCardConfigInfo:c,socialBarWCConfigInfo:p,videoCardProps:{posterUrl:Array.isArray(null==l||null===(n=l.cardContent)||void 0===n?void 0:n.images)?null===(r=l.cardContent.images[0])||void 0===r?void 0:r.url:void 0}};return(0,a.bw)({id:"video-card",experienceType:null==c||null===(o=c.configRef)||void 0===o?void 0:o.experienceType,mapperArgs:t},u)}(t),viewTemplate:n.Q}},90869:function(t){t.exports='<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 2h5c.28 0 .5.22.5.5V5h1a2 2 0 012 2v5a2 2 0 01-2 2H4a2 2 0 01-2-2V7c0-1.1.9-2 2-2h1V2.5c0-.28.22-.5.5-.5zM10 5V3H6v2h4zM4 6a1 1 0 00-1 1v5a1 1 0 001 1h8a1 1 0 001-1V7a1 1 0 00-1-1H4z"></path></svg>'},90901:function(t,e,i){"use strict";i.d(e,{W:function(){return x}});var n,a,r=i(30216),o=i(930),l=i(53013),s=i(19608),d=i(11372),c=i(94425),p=i(5044),u=i(17254),g=i(49986),h=i(83003),f=i(29307),b=i(51600),m=i(669);!function(t){t.Header="header",t.Vertical="homepage",t.HeaderLinkHL="TopStories",t.TopStoriesCard="TopStoriesCard",t.CardVersion="single",t.FlipperNext="FlipperNext",t.FlipperPrevious="FlipperPrevious",t.SubCard="topstories"}(n||(n={})),function(t){t.Header="trendingnow_header",t.Vertical="homepage",t.HeaderLinkHL="TrendingNow",t.TrendingNowCard="TrendingNow",t.CardVersion="single",t.FlipperNext="FlipperNext",t.FlipperPrevious="FlipperPrevious",t.SubCard="trendingnow"}(a||(a={}));const v=(t,e)=>{if(!t)return;let i,r;e===h.pL.TopicFeedTrendingNow||e===h.pL.TopicFeed?(i=t.addOrUpdateChild({name:a.TrendingNowCard,type:d.MJ.ContentGroup}),r=a):(i=t.addOrUpdateChild({name:n.TopStoriesCard,type:d.MJ.ContentGroup}),r=n);const o=i.addOrUpdateChild({name:r.CardVersion,type:d.MJ.ContentGroup}),l=o.addOrUpdateChild({name:r.SubCard}),s=i.addOrUpdateChild({name:r.Header,action:d.EG.Click,behavior:d.MS.Navigate,type:d.MJ.ContentGroup,content:{id:r.Header,type:d.b5.Feed,vertical:r.Vertical,headline:r.HeaderLinkHL}}),c=i.addOrUpdateChild({name:r.FlipperPrevious,action:d.EG.Click,behavior:d.MS.Show,content:{id:r.FlipperPrevious},type:d.MJ.ContentGroup}),p=i.addOrUpdateChild({name:r.FlipperNext,action:d.EG.Click,behavior:d.MS.Show,content:{id:r.FlipperNext},type:d.MJ.ContentGroup}),{zone:u}=t.contract||{};u&&(i.contract.zone=u,s.contract.zone=u);return{componentRoot:t,topStoriesCard:i,cardVersion:o,subCard:l,headingClick:s,flipperNextClick:p,flipperPreviousClick:c}};var y,$;function x(t){var e;const{cardMetadata:i,parentTelemetryObject:n,localizedStrings:a,openLinksInNewTab:$,cardActionClickHandler:x,cardActionBitMask:w,initCardAction:_,enableRichSocialReaction:T,visualReadinessCallback:F,configOptions:S,refreshFeedCallback:D,isAnaheimDesign:A,additionalHeaders:z}=t,{topStoriesHeadingText:I,workHeadlinesHeadingText:E,workHeadlinesTooltipText:B}=a,L=v(n,i.type),M=S&&S.topStoryCardConfig;let N;if(M&&M.topStoriesLandingPageLink){const t=(0,c.bI)(M.topStoriesLandingPageLink);N=(0,p.wY)(t)}const R=S&&(S.childExperienceReferencesWC&&S.childExperienceReferencesWC.socialBarWC||S.childExperienceReferences&&S.childExperienceReferences.socialBarWC),O=i.type===h.pL.WorkHeadlines,P=O?[r.X.Report]:null,H=function(t,e,i,n,a,r,o,s,d,c,p,f,v){if(!t)return[];return t.map(t=>{const{locale:y,provider:$,publishedDateTime:x,title:k,url:C,destinationUrl:w,id:_,abstract:T,type:F}=t,S=C||w;let D;if(r){const e=(0,l.dj)(r,t,null,null,F===h.pL.WebContent);e&&(D={contentCard:e.contentCard,contentCardTelemetryObject:e.contentCard&&e.contentCard,button:e.seeMore&&e.seeMore.getMetadataTag(),destination:e.destination,buttonTelemetryObject:e.seeMore,seeMore:e.seeMore})}const A=(0,m.H8)(t,i),{cardActionsTooltips:z,crawledContentLabel:I}=e,E=F===h.pL.WebContent;let B,L;if(d&&(d.useThumbnailTopStories||d.useRightRailTopStories||d.useTopStoriesRibbonCarousel)){let e;e=null!=d&&d.useImgGenerator?d.stockImageData&&{url:(0,b.XP)(d.stockImageData.id,{width:0,height:0,enableDpiScaling:!1}),width:d.stockImageData.width,height:d.stockImageData.height}:d.stockImageData;const i=t.images&&t.images[0]||e,n=i&&i.colorSamples,a=t&&t.colorSamples;B=function(t,e){if(!t)return;const{attribution:i,title:n=e,url:a}=t;if(!a)return null;const r=[];n&&r.push(n);i&&r.push(i);let o;r.length&&(o=r.join(" - "));return{source:a,altText:o}}(i,t.title),L=(0,g.uK)(n,a,!0)}let M=(0,m.Dv)(S);return"winWidgets"!==u.T3.AppType&&"windowsNewsPlus"!==u.T3.AppType||(M=(0,l._l)(M)),{id:_,abstract:T,articleCardBackgroundColor:L,gridArea:null,childTemplateType:null,cardActionStatus:!E&&A,cardActionClickHandler:n,cardActionsTooltips:z,crawledContentLabel:I,isWebContent:E,destinationUrl:M,enableRichSocialReaction:!E&&o,isProviderIconClickable:d&&d.isProviderIconClickable,locale:y,imageData:B,title:k,providerData:(0,m.p_)($,E),publishedDateTime:d&&d.enableArticleTimestamps&&`${(0,g.fL)(d.enableNewTimestampFormatForJAJP,new Date(x),y,e)}`,toggleCardActionMenu:(t,e)=>(0,g.Sp)(t,e,n,a,!0,!0,c,null==d?void 0:d.openPersonalizeWithoutRouter),telemetryContext:D,openLinksInNewTab:s,openArticleInNewTab:d&&d.openArticleInNewTab,ariaLabel:(0,m.yL)(k,$,e),actionsArrayOverride:p,socialBarWCConfigInfo:f,metadata:t,enableFilledIconOnHover:d&&d.enableFilledIconOnHover,additionalHeaders:v,disableCardTitleTooltip:d&&d.disableCardTitleTooltip,disableTitleOnArticleCardOnly:d&&d.disableTitleOnArticleCardOnly}})}(i.subCards,a,w,x,_,L&&L.topStoriesCard,!O&&T,$,S,D,P,R,z),j=O?E:I,U={id:"topStories",childTemplateType:"top-stories-card",listCardData:H,openLinksInNewTab:$,topStoriesHeadingText:S&&!0===S.disableTopStoriesCardHeading?"":j,tooltip:O?B:null,telemetryContext:L,cardLayout:k(S,H.length),cardBackground:C(S),headingLink:N,isAnaheimDesign:A,disableTopStoriesInlineAction:null==S?void 0:S.disableTopStoriesInlineAction,isDynamicFeed:S&&S.isDynamicFeed,useGradientBackground:M&&M.useGradientBackground,disableCardTitleTooltip:S&&S.disableCardTitleTooltip,disableTitleOnArticleCardOnly:S&&S.disableTitleOnArticleCardOnly,enableFeeds2TopStoriesCarousel:S&&S.enableFeeds2TopStoriesCarousel,isSpotlightUX:i.subCards&&i.subCards[0]&&i.subCards[0].isFeatured,spotlightBreakingNewsTagString:null==a?void 0:a.topStoriesBreakingNewsTagString},V=(0,s.bw)({id:"topStories",experienceType:null===(e=S&&S.childExperienceReferencesWC)||void 0===e||null===(e=e.configRef)||void 0===e?void 0:e.experienceType,mapperArgs:t},U,(t,e)=>{const i=(0,f.A)(H);i.forEach((t,i)=>{if(t.telemetryContext&&t.telemetryContext.contentCard&&t.telemetryContext.destination){const n={...e.telemetryExt};t.metadata.recoId&&(n.recoId=t.metadata.recoId),t.metadata.ri&&(n.ri=t.metadata.ri),n.sco=i+1,n.cid=`${n.co}.${n.sco}`,t.telemetryContext.destination=t.telemetryContext.contentCard.addOrUpdateChild({...t.telemetryContext.destination.contract,type:d.MJ.Headline,ext:n})}});const n={listCardData:i},a=e.cardSize;return a===o.uE._1x_2y&&(n.cardLayout=S&&S.useThumbnailTopStories?y.CompactThumbnail:y.Compact),S&&S.useRightRailTopStories&&(n.cardLayout=a===o.uE._1x_3y?y.TallRightRail:y.RightRail),n});return F&&F(),V}function k(t,e){return t&&t.useRightRailTopStories?y.RightRail:t&&t.useTopStoriesRibbonCarousel?y.RibbonCarousel:t&&t.useThumbnailTopStories?e>3?y.Thumbnail:y.CompactThumbnail:t&&t.useStackedTopStories?y.Stacked:e>3?y.Normal:y.Compact}function C(t){return t&&t.useSectionHeaderTopStories?$.InheritSection:t&&t.useGradientTopStories?$.Gradient:$.Normal}!function(t){t.Compact="compact",t.CompactThumbnail="compactthumb",t.TallRightRail="tallrightrail",t.RightRail="rightrail",t.Normal="normal",t.Stacked="stacked",t.Thumbnail="thumb",t.RibbonCarousel="ribbonCarousel"}(y||(y={})),function(t){t.Normal="normal",t.Gradient="gradient",t.InheritSection="inheritSection"}($||($={}))},91125:function(t){t.exports='<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M7.57 11.84A1 1 0 016 11.02V4.98a1 1 0 011.57-.82l3.79 2.62c.85.59.85 1.85 0 2.44l-3.79 2.62z"></path></svg>'},91144:function(t,e,i){"use strict";i.d(e,{RT:function(){return ve},dU:function(){return xe}});var n=i(96950),a=i(91640),r=i(39957),o=i(93468),l=i(65022),s=i(40959),d=i(50130);const c=n.qy`
${(0,a.z)(t=>t.isAnaheimDesign&&!t.useSmallFontSize,n.qy`
    <h3 class="info-pane-slide-title" style="pointer-events: none;" part="info-pane-slide-title">
        ${t=>t.title}
    </h3>
`)}
${(0,a.z)(t=>t.isAnaheimDesign&&t.useSmallFontSize,n.qy`
    ${t=>t.title}
`)}
${(0,a.z)(t=>!t.isAnaheimDesign,n.qy`
    ${t=>t.title}
`)}
`,p=n.qy`
<style>
    .title-ad-triple .info-pane-slide-title, .title-ad-double .info-pane-slide-title, .${(0,d.nP)("title-ad-triple")} .info-pane-slide-title, .${(0,d.nP)("title-ad-double")} .info-pane-slide-title {
        font-weight: 400;
        margin-top: 6px;
        position: relative;
        cursor: pointer;
        z-index: 2;
        overflow: hidden;
        max-height: 90px;
        font-size: 20px;
        line-height: 28px;
    }

    .info-pane-slide-title {
        overflow: hidden;
        font-weight:600;
        font-size:28px;
        line-height:36px;
        margin-top:0;
        margin-bottom:0;
        transition:all .2s ease-in-out;
        box-sizing: content-box;
        max-height: 108px;
        white-space: normal;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
    }
    :host msft-content-card.native-ad-infopane-content-card .info-pane-slide-title {
        -webkit-line-clamp: 1;
    }
    :host msft-content-card.native-ad-infopane-content-card:hover .info-pane-slide-title{
        -webkit-line-clamp: 2;
    }
    :host .hasInlineDecoration .info-pane-slide-title {
        -webkit-line-clamp: 2;
    }
    :host msft-content-card.native-ad-infopane-horizontal .info-pane-slide-title{
        -webkit-line-clamp: 2;
    }
</style>
`;var u=i(81109),g=i(26863),h=i(43156),f=i(17967),b=i(51675),m=i(77087),v=i(80904),y=i(930),$=i(90202),x=i(49513),k=i(32542),C=i(25879),w=i(9594),_=i(30553),T=i(47838),F=i(42290),S=i(59856),D=i(31157);const A="\nmsft-content-card.native-ad-infopane-pattern-overlay .info-pane-slide-title {\n    font-size: 16px;\n}\nmsft-content-card.native-ad-infopane-pattern-overlay::part(media) {\n    height: 100%;\n    border-radius: 0px;\n    overflow: hidden;\n}\nmsft-content-card:hover.native-ad-infopane-pattern-overlay::part(media) {\n    filter: unset;\n}\nmsft-content-card:hover.native-ad-infopane-pattern-overlay img {\n    filter: brightness(0.9);\n}\n",z=t=>!(!t.template||"msn-info-pane-pattern-overlay-1-by-1"!==t.template.templateType&&"msn-info-pane-pattern-overlay-4-by-3"!==t.template.templateType&&"msn-info-pane-horizontal-1-by-1"!==t.template.templateType&&"msn-info-pane-horizontal-3-by-4"!==t.template.templateType&&"msn-info-pane-horizontal-4-by-3"!==t.template.templateType&&"msn-info-pane-horizontal-9-by-16"!==t.template.templateType);var I,E,B,L=i(30216),M=i(18750),N=i(11622),R=i(56911),O=i(92011),P=i(55230),H=i(5096),j=i(38493),U=i(60815),V=i(77246),W=i(72691);!function(t){t._1_column="1_column",t._2_column="2_column"}(I||(I={})),function(t){t.LightDefault="lightDefault",t.LightNarrow="lightNarrow",t.LightLarge="lightLarge",t.LightWide="lightWide",t.LightStyle2="light2"}(E||(E={})),function(t){t.vertical="vertical",t.horizontal="horizontal"}(B||(B={}));class G extends O.L{constructor(){super(),this.slideKeyPressHandler=(t,e)=>{this.adjust(e),this.autoScrollHandler()},this.onPrevButtonClicked=()=>{this.adjust(-1),this.rotateBackAfterClickPrevButton&&(this.rotateDirection="backward"),this.rotateStopAfterClickPrevButton&&(this.rotateDirection="stay"),this.autoScrollHandler()},this.onNextButtonClicked=()=>{this.adjust(1),this.rotateDirection="forward",this.autoScrollHandler()},this.layout=I._2_column,this.freWelcomeAnimationRunning=!1,this.orientation=B.horizontal,this.activeindicator=!1,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.touchStart=!1,this.touchStartX=0,this.touchStartTabpanelLayoutX=0,this.touchDeltaX=0,this.touchStartTime=0,this.handleSwipeMove=t=>{this.touchDeltaX=t-this.touchStartX,0==this.activeTabIndex&&this.touchDeltaX>=0||this.activeTabIndex==this.tabIds.length-1&&this.touchDeltaX<=0?this.touchStart=!1:(this.touchStart=!0,this.tabpanelLayout.style.transform=`translateX(${this.touchStartTabpanelLayoutX+this.touchDeltaX}px)`)},this.handleSwipeEnd=t=>{if(!this.touchStart)return;const e=this.clientWidth,i=(this.touchStartX-t)/e,n=((new Date).getTime()-this.touchStartTime)/1e3;Math.abs(i)>.5||Math.abs(i)>.1&&n<.15?this.adjust(i>0?1:-1,!1):this.moveToTabpanelByIndex(this.activeTabIndex,!0),this.touchStart=!1,this.touchStartX=0,this.touchDeltaX=0,this.touchStartTime=0},this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=t=>"true"===t.getAttribute("aria-disabled"),this.isFocusableElement=t=>!this.isDisabledElement(t),this.setTabs=()=>{const t=this.isHorizontal()?"gridColumn":"gridRow";this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex(),this.tabs.forEach((e,i)=>{if("tab"===e.slot&&this.isFocusableElement(e)){this.activeindicator&&(this.showActiveIndicator=!0);const t=this.tabIds[i],n=this.tabpanelIds[i];e.setAttribute("id","string"!=typeof t?`tab-${i+1}`:t),e.setAttribute("aria-selected",this.activeTabIndex===i?"true":"false"),e.setAttribute("aria-controls","string"!=typeof n?`panel-${i+1}`:n),e.addEventListener("click",this.handleTabClick),e.addEventListener("keydown",this.handleTabKeyDown),e.setAttribute("tabindex",this.activeTabIndex===i?"0":"-1"),this.activeTabIndex===i&&(this.activetab=e)}else this.showActiveIndicator=!1;e.style[t]=`${i+1}`,this.isHorizontal()?e.classList.remove("vertical"):e.classList.add("vertical")}),this.tabsShowOrNot&&this.activeTabIndex>=0&&(this.tabsShowOrNot[this.activeTabIndex]=!0)},this.setTabPanels=()=>{this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds();const t=this.clientWidth;if(this.tabpanels.forEach((e,i)=>{const n=this.tabIds[i],a=this.tabpanelIds[i];e.setAttribute("id","string"!=typeof a?`panel-${i+1}`:a),e.setAttribute("aria-labelledby","string"!=typeof n?`tab-${i+1}`:n),this.enableInfopaneSwipe?e.style.width=0==i&&0==t?"100%":`${t}px`:this.activeTabIndex!==i?e.setAttribute("hidden",""):e.removeAttribute("hidden")}),this.enableInfopaneSwipe){const t=1==Math.abs(this.prevActiveTabIndex-this.activeTabIndex);this.moveToTabpanelByIndex(this.activeTabIndex,t)}},this.handleTabClick=t=>{const e=t.currentTarget;1===e.nodeType&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(e),this.setComponent())},this.handleTabKeyDown=t=>{const e=t.key;if(this.isHorizontal())switch(e){case P.kT:t.preventDefault(),this.adjustBackward(t),this.enableInfopaneRefactoring&&(this.rotateBackAfterClickPrevButton&&(this.rotateDirection="backward"),this.rotateStopAfterClickPrevButton&&(this.rotateDirection="stay"));break;case P.bb:t.preventDefault(),this.adjustForward(t),this.enableInfopaneRefactoring&&(this.rotateDirection="forward")}else switch(e){case P.I5:t.preventDefault(),this.adjustBackward(t),this.enableInfopaneRefactoring&&(this.rotateBackAfterClickPrevButton&&(this.rotateDirection="backward"),this.rotateStopAfterClickPrevButton&&(this.rotateDirection="stay"));break;case P.HX:t.preventDefault(),this.adjustForward(t),this.enableInfopaneRefactoring&&(this.rotateDirection="forward")}switch(e){case P.kE:t.preventDefault(),this.adjust(-this.activeTabIndex),this.enableInfopaneRefactoring&&(this.rotateDirection="forward");break;case P.FM:t.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1),this.enableInfopaneRefactoring&&(this.rotateDirection="forward")}},this.adjustForward=t=>{const e=this.tabs;let i=0;for(i=this.activetab?e.indexOf(this.activetab)+1:1,i===e.length&&(i=0);i<e.length&&e.length>1;){if(this.isFocusableElement(e[i])){this.moveToTabByIndex(e,i);break}if(this.activetab&&i===e.indexOf(this.activetab))break;i+1>=e.length?i=0:i+=1}},this.adjustBackward=t=>{const e=this.tabs;let i=0;for(i=this.activetab?e.indexOf(this.activetab)-1:0,i=i<0?e.length-1:i;i>=0&&e.length>1;){if(this.isFocusableElement(e[i])){this.moveToTabByIndex(e,i);break}i-1<0?i=e.length-1:i-=1}},this.moveToTabByIndex=(t,e)=>{const i=t[e];this.activetab=i,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=e,i.focus(),this.setComponent()},this.canAutoRotate=()=>this.enableInfopaneRefactoring?(this.enableRotateOnlyOnce&&!this.stopRotateDueShownAll&&0===this.activeTabIndex&&this.tabsShowOrNot&&this.tabsShowOrNot.every(t=>t)&&(this.stopRotateDueShownAll=!0),(!this.enableRotateAfterClick||!this.isFocusedOverAPeriodOfTime)&&(!this.stopRotateDueShownAll&&(!(!this.allowBlurScroll&&!this.isWindowFocused)&&(!(this.isFocused&&!this.enableRotateAfterClick)&&(!this.isMouseOver&&("visible"===document.visibilityState&&!!this.isInViewport)))))):!this.isFocused&&!this.isMouseOver&&(this.allowBlurScroll||!this.allowBlurScroll&&this.isWindowFocused)&&"visible"===document.visibilityState&&this.isInViewport,this.updateAutoRotateState=()=>{const t=this.canAutoRotate();t&&!this.timer?this.autoScrollHandler():!t&&this.timer&&this.clearAutoScrollHandler()},this.focusInHandler=(()=>(this.enableInfopaneRefactoring?(this.updateIsFocusedOverAPeriodOfTime(),this.isFocused=!0,this.updateAutoRotateState()):this.isFocused=!0,!0)).bind(this),this.focusOutHandler=(()=>(this.enableInfopaneRefactoring?(this.clearIsFocusedOverAPeriodOfTime(),this.isFocused=!1,this.updateAutoRotateState()):(this.isFocused=!1,this.autoScrollHandler()),!0)).bind(this),this.windowFocusHandler=(()=>{this.enableInfopaneRefactoring?(this.isWindowFocused=!0,this.updateAutoRotateState()):(this.isWindowFocused=!0,this.autoScrollHandler())}).bind(this),this.windowBlurHandler=(()=>{this.enableInfopaneRefactoring?(this.isWindowFocused=!1,this.updateAutoRotateState()):this.isWindowFocused=!1}).bind(this),this.mouseInHandler=(()=>(this.enableInfopaneRefactoring?(this.isMouseOver=!0,this.updateAutoRotateState()):(this.isMouseOver=!0,this.autoScrollHandler()),!0)).bind(this),this.mouseOutHandler=(()=>(this.enableInfopaneRefactoring?(this.isMouseOver=!1,this.updateAutoRotateState()):(this.isMouseOver=!1,this.autoScrollHandler()),!0)).bind(this),this.windowVisiabilityChange=(()=>{this.updateAutoRotateState()}).bind(this),this.touchStartHandler=(t=>{this.tabpanelLayout.classList.remove("tappanel-scroll-anim"),this.handleSwipeStart(t.touches[0].clientX)}).bind(this),this.touchMoveHandler=(t=>{t.preventDefault(),this.handleSwipeMove(t.touches[0].clientX)}).bind(this),this.touchEndHandler=(t=>{this.handleSwipeEnd(t.changedTouches[0].clientX)}).bind(this)}handleChange(){this.direction=W.o.getValueFor(this)}connectedCallback(){super.connectedCallback(),this.direction=W.o.getValueFor(this),(0,V.S)()&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex(),this.isFocused=!1,this.isWindowFocused=!0,this.isMouseOver=!1,this.rotateDirection="forward",W.o.subscribe(this),this.activeindicator||(this.activeindicator=!1),this.addEventListeners(),this.autoScrollHandler(),this.setIntersectionObserver())}disconnectedCallback(){super.disconnectedCallback(),this.enableInfopaneRefactoring?this.clearAutoScrollHandler():window.clearTimeout(this.timer),W.o.unsubscribe(this),this.removeEventListeners(),this.unsetIntersectionObserver(),this.tabs.forEach(t=>{t.removeEventListener("click",this.handleTabClick),t.removeEventListener("keydown",this.handleTabKeyDown)})}updateIsFocusedOverAPeriodOfTime(){this.isFocusedOverAPeriodOfTime=!0,this.focusTimer&&(window.clearTimeout(this.focusTimer),this.focusTimer=null),this.focusTimer=window.setTimeout(()=>{this.isFocusedOverAPeriodOfTime=!1,this.updateAutoRotateState(),this.focusTimer=null},(this.rotateAfterClickIntervalMs||1e4)-(this.autoScrollIntervalMs||6e3))}clearIsFocusedOverAPeriodOfTime(){this.focusTimer&&(window.clearTimeout(this.focusTimer),this.focusTimer=null),this.isFocusedOverAPeriodOfTime=!1}clearAutoScrollHandler(){this.timer&&window.clearTimeout(this.timer),this.timer=null}autoScrollHandler(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(this.enableInfopaneRefactoring){if(this.disableAutoScroll||this.freWelcomeAnimationRunning)return void this.clearAutoScrollHandler();let e=0;e=t||(0===this.activeTabIndex&&void 0!==this.firstAutoScrollIntervalMs?this.firstAutoScrollIntervalMs:this.adTimerMap&&this.adTimerMap[this.activeTabIndex]?(this.autoScrollIntervalMs||6e3)+this.adTimerMap[this.activeTabIndex]:this.autoScrollIntervalMs||6e3),this.clearAutoScrollHandler(),this.timer=window.setTimeout(()=>{if(this.timer=null,this.canAutoRotate()){switch(this.rotateDirection){case"forward":this.adjust(1,!0);break;case"backward":this.adjust(-1,!0)}performance.mark("InfoPaneAR"),this.autoScrollHandler()}},e)}else{if(this.disableAutoScroll||this.freWelcomeAnimationRunning)return void window.clearTimeout(this.timer);let t=0;t=0===this.activeTabIndex&&void 0!==this.firstAutoScrollIntervalMs?this.firstAutoScrollIntervalMs:this.adTimerMap&&this.adTimerMap[this.activeTabIndex]?(this.autoScrollIntervalMs||6e3)+this.adTimerMap[this.activeTabIndex]:this.autoScrollIntervalMs||6e3,this.timer&&window.clearTimeout(this.timer),this.timer=window.setTimeout(()=>{this.canAutoRotate()&&(this.adjust(1,!0),performance.mark("InfoPaneAR")),this.autoScrollHandler()},t)}}activeidChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(t,e){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition()),e&&(this.tabsShowOrNot=e.map(()=>!1),this.stopRotateDueShownAll=!1)}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition(),this.activeid=this.tabIds[this.activeTabIndex])}getTabpanelLayoutX(){const t=this.tabpanelLayout.style.transform,e=parseInt(t.replace("translateX(","").replace("px",""));return isNaN(e)?0:e}handleSwipeStart(t){this.touchStartTime=(new Date).getTime(),this.touchStartX=t,this.touchStartTabpanelLayoutX=this.getTabpanelLayoutX(),this.touchDeltaX=0}getActiveIndex(){return void 0!==this.activeid?-1===this.tabIds.indexOf(this.activeid)?0:this.tabIds.indexOf(this.activeid):0}moveToTabpanelByIndex(t,e){const i=this.clientWidth;e?this.tabpanelLayout.classList.add("tappanel-scroll-anim"):this.tabpanelLayout.classList.remove("tappanel-scroll-anim"),this.tabpanelLayout.style.transform=`translateX(${-i*t}px)`}getTabIds(){return this.tabs.map(t=>t.getAttribute("id"))}getTabPanelIds(){return this.tabpanels.map(t=>t.getAttribute("id"))}setComponent(t){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.change(),this.setTabs(),this.handleActiveIndicatorPosition(),this.setTabPanels(),t||this.focusTab(),this.change())}isHorizontal(){return this.orientation===B.horizontal}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const t=this.isHorizontal()?"gridColumn":"gridRow",e=this.isHorizontal()?"translateX":"translateY",i=this.isHorizontal()?"offsetLeft":"offsetTop",n=this.activeIndicatorRef[i];this.activeIndicatorRef.style[t]=`${this.activeTabIndex+1}`;const a=this.activeIndicatorRef[i]-n;0!=a&&(this.activeIndicatorRef.style[t]=`${this.prevActiveTabIndex+1}`),this.activeIndicatorRef.style.transform=`${e}(${a}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",()=>{this.ticking=!1,this.activeIndicatorRef.style[t]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${e}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")},{once:!0})}adjust(t,e){this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=(0,H.Vf)(0,this.tabs.length-1,this.activeTabIndex+t),this.setComponent(e)}focusTab(){this.tabs[this.activeTabIndex].focus()}addEventListeners(){this.allowBlurScroll||(this.enableInfopaneRefactoring&&document.addEventListener("visibilitychange",this.windowVisiabilityChange,!0),window.addEventListener("focus",this.windowFocusHandler,!0),window.addEventListener("blur",this.windowBlurHandler,!0))}removeEventListeners(){this.allowBlurScroll||(this.enableInfopaneRefactoring&&document.removeEventListener("visibilitychange",this.windowVisiabilityChange,!0),window.removeEventListener("focus",this.windowFocusHandler,!0),window.removeEventListener("blur",this.windowBlurHandler,!0))}setIntersectionObserver(){if(this.intersectionObserver)return;this.intersectionObserver=new IntersectionObserver(t=>{this.isInViewport=t[0].intersectionRatio>0,this.enableInfopaneRefactoring&&this.updateAutoRotateState()},{threshold:[0]}),this.intersectionObserver.observe(this)}unsetIntersectionObserver(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0)}}(0,R.Cg)([j.CF],G.prototype,"layout",void 0),(0,R.Cg)([(0,j.CF)({attribute:"auto-scroll",mode:"boolean"})],G.prototype,"autoScroll",void 0),(0,R.Cg)([(0,j.CF)({attribute:"disable-auto-scroll",mode:"boolean"})],G.prototype,"disableAutoScroll",void 0),(0,R.Cg)([(0,j.CF)({attribute:"enable-rotate-after-click",mode:"boolean"})],G.prototype,"enableRotateAfterClick",void 0),(0,R.Cg)([j.CF],G.prototype,"rotateAfterClickIntervalMs",void 0),(0,R.Cg)([(0,j.CF)({attribute:"auto-scroll-interval-ms"})],G.prototype,"autoScrollIntervalMs",void 0),(0,R.Cg)([(0,j.CF)({attribute:"first-auto-scroll-interval-ms"})],G.prototype,"firstAutoScrollIntervalMs",void 0),(0,R.Cg)([(0,j.CF)({attribute:"allow-blur-scroll",mode:"boolean"})],G.prototype,"allowBlurScroll",void 0),(0,R.Cg)([(0,j.CF)({attribute:"use-windows-styles",mode:"boolean"})],G.prototype,"useWindowsStyles",void 0),(0,R.Cg)([(0,j.CF)({attribute:"enable-rotate-only-once",mode:"boolean"})],G.prototype,"enableRotateOnlyOnce",void 0),(0,R.Cg)([(0,j.CF)({attribute:"enable-infopane-refactoring",mode:"boolean"})],G.prototype,"enableInfopaneRefactoring",void 0),(0,R.Cg)([(0,j.CF)({attribute:"enable-infopane-swipe",mode:"boolean"})],G.prototype,"enableInfopaneSwipe",void 0),(0,R.Cg)([(0,j.CF)({attribute:"infopane-prominent-flipper",mode:"boolean"})],G.prototype,"infoPaneProminentFlipper",void 0),(0,R.Cg)([(0,j.CF)({attribute:"rotate-prev-after-click-prev-button",mode:"boolean"})],G.prototype,"rotateBackAfterClickPrevButton",void 0),(0,R.Cg)([(0,j.CF)({attribute:"rotate-stop-after-click-prev-button",mode:"boolean"})],G.prototype,"rotateStopAfterClickPrevButton",void 0),(0,R.Cg)([U.sH],G.prototype,"infoPaneFlipperStyle",void 0),(0,R.Cg)([U.sH],G.prototype,"previousFlipperTitle",void 0),(0,R.Cg)([U.sH],G.prototype,"nextFlipperTitle",void 0),(0,R.Cg)([U.sH],G.prototype,"nextFlipperTelemetryTag",void 0),(0,R.Cg)([U.sH],G.prototype,"previousFlipperTelemetryTag",void 0),(0,R.Cg)([U.sH],G.prototype,"direction",void 0),(0,R.Cg)([U.sH],G.prototype,"tabpanelLayout",void 0),(0,R.Cg)([j.CF],G.prototype,"orientation",void 0),(0,R.Cg)([j.CF],G.prototype,"activeid",void 0),(0,R.Cg)([U.sH],G.prototype,"tabs",void 0),(0,R.Cg)([U.sH],G.prototype,"tabpanels",void 0),(0,R.Cg)([(0,j.CF)({mode:"boolean"})],G.prototype,"activeindicator",void 0),(0,R.Cg)([U.sH],G.prototype,"activeIndicatorRef",void 0),(0,R.Cg)([U.sH],G.prototype,"showActiveIndicator",void 0);var Z=i(87353),J=i(93809),X=i(82774),Q=i(60402),q=i(96016),Y=i(2399),K=i(18909),tt=i.n(K),et=i(5224),it=i.n(et);const nt=n.qy`<span aria-hidden="true" part="next" class="next"><slot name="next"><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M4.023 15.273L11.29 8 4.023.727l.704-.704L12.71 8l-7.984 7.977-.704-.704z" /></svg></slot></span>`,at=n.qy`<span aria-hidden="true" part="previous" class="previous"><slot name="previous"><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M11.273 15.977L3.29 8 11.273.023l.704.704L4.71 8l7.266 7.273-.704.704z" /></svg></slot></span>`,rt=n.qy`<span part="next" class="filled-next"><slot name="filled-next">${n.qy.partial(it())}</slot></span>`,ot=n.qy`<span part="previous" class="filled-previous"><slot name="filled-previous">${n.qy.partial(tt())}</slot></span>`,lt=t=>t.infoPaneProminentFlipper||[E.LightStyle2,E.LightDefault,E.LightLarge,E.LightNarrow,E.LightWide].includes(t.infoPaneFlipperStyle),st=t=>`${t.useWindowsStyles?"windows":""} ${t.infoPaneFlipperStyle===E.LightNarrow?"flipper-light-narrow":""} ${t.infoPaneFlipperStyle===E.LightLarge?"flipper-light-large":""} ${t.infoPaneFlipperStyle===E.LightWide?"flipper-light-wide":""} ${t.infoPaneFlipperStyle===E.LightDefault?"flipper-light":""} ${t.infoPaneFlipperStyle===E.LightStyle2?"flipper-light2":""}`,dt=n.qy`<template @mouseenter=${(0,J.F)(t=>t.mouseInHandler(),{capture:!0})} @focusin=${(0,J.F)(t=>t.focusInHandler(),{capture:!0})} @focusout=${(0,J.F)(t=>t.focusOutHandler(),{capture:!0})} @mouseleave=${(0,J.F)(t=>t.mouseOutHandler(),{capture:!0})}><slot name="previous-flipper"><button title="${t=>t.previousFlipperTitle}" part="previous-flipper" class="previous-flipper ${t=>t.infoPaneProminentFlipper?"opacity-one-previous-flipper":""} ${t=>st(t)}" tabIndex="0" @keypress="${(t,e)=>t.enableInfopaneRefactoring?t.onPrevButtonClicked():t.slideKeyPressHandler(e.event,-1)}" @click="${(t,e)=>t.enableInfopaneRefactoring?t.onPrevButtonClicked():t.slideKeyPressHandler(e.event,-1)}" data-t="${t=>t.previousFlipperTelemetryTag}">${(0,a.z)(t=>t.direction===D.O.rtl,n.qy` ${(0,a.z)(t=>t.useWindowsStyles,n.qy`${n.qy.partial(Y.A)}`)} ${(0,a.z)(t=>!t.useWindowsStyles,t=>lt(t)?rt:nt)} `)} ${(0,a.z)(t=>t.direction===D.O.ltr,n.qy` ${(0,a.z)(t=>t.useWindowsStyles,n.qy`${n.qy.partial(q.A)}`)} ${(0,a.z)(t=>!t.useWindowsStyles,t=>lt(t)?ot:at)} `)}</button></slot>${Z.p}<div class="tablist ${t=>t.useWindowsStyles?"windows":""}" part="tablist" role="tablist"><slot class="tab" name="tab" part="tab" ${(0,X.e)("tabs")}></slot>${(0,a.z)(t=>t.activeindicator,n.qy`<div ${(0,Q.K)("activeIndicatorRef")} class="activeIndicator" part="activeIndicator"></div>`)}</div><slot name="next-flipper"><button title="${t=>t.nextFlipperTitle}" part="next-flipper" class="next-flipper ${t=>t.infoPaneProminentFlipper?"opacity-one-next-flipper":""} ${t=>st(t)}" tabIndex="0" @keypress="${(t,e)=>t.enableInfopaneRefactoring?t.onNextButtonClicked():t.slideKeyPressHandler(e.event,1)}" @click="${(t,e)=>t.enableInfopaneRefactoring?t.onNextButtonClicked():t.slideKeyPressHandler(e.event,1)}" data-t="${t=>t.nextFlipperTelemetryTag}">${(0,a.z)(t=>t.direction===D.O.rtl,n.qy` ${(0,a.z)(t=>t.useWindowsStyles,n.qy`${q.A}`)} ${(0,a.z)(t=>!t.useWindowsStyles,t=>lt(t)?ot:at)} `)} ${(0,a.z)(t=>t.direction===D.O.ltr,n.qy` ${(0,a.z)(t=>t.useWindowsStyles,n.qy`${Y.A}`)} ${(0,a.z)(t=>!t.useWindowsStyles,t=>lt(t)?rt:nt)} `)}</button></slot>${Z.S}<div class=${t=>t.enableInfopaneSwipe?"tabpanelscroll":"tabpanel"} ${(0,Q.K)("tabpanelLayout")} @touchstart=${(0,J.F)((t,e)=>(t.enableInfopaneRefactoring&&t.touchStartHandler(e.event),!0),{capture:!0})} @touchmove=${(0,J.F)((t,e)=>(t.enableInfopaneRefactoring&&t.touchMoveHandler(e.event),!0),{capture:!0})} @touchend=${(0,J.F)((t,e)=>(t.enableInfopaneRefactoring&&t.touchEndHandler(e.event),!0),{capture:!0})} @on-welcome-animation=${(t,e)=>{t.freWelcomeAnimationRunning=!0,t.autoScrollHandler()}} @after-welcome-animation=${(t,e)=>{t.freWelcomeAnimationRunning=!1,t.autoScrollHandler()}}><slot name="tabpanel" part="tabpanel" ${(0,X.e)("tabpanels")}></slot></div></template>`;var ct=i(7896),pt=i(41123),ut=i(48751),gt=i(57416),ht=i(37998),ft=i(45476),bt=i(4283),mt=i(86856),vt=i(64187),yt=i(22131),$t=i(50882),xt=i(74849),kt=i(73477),Ct=i(96260);const wt="M12.2676 15.793C11.9677 16.0787 11.493 16.0672 11.2073 15.7672L6.20597 10.5168C5.93004 10.2271 5.93004 9.77187 6.20597 9.4822L11.2073 4.23173C11.493 3.93181 11.9677 3.92028 12.2676 4.20597C12.5676 4.49166 12.5791 4.96639 12.2934 5.26631L7.78483 9.99949L12.2934 14.7327C12.5791 15.0326 12.5676 15.5073 12.2676 15.793Z",_t="M7.73271 4.20694C8.03263 3.92125 8.50737 3.93279 8.79306 4.23271L13.7944 9.48318C14.0703 9.77285 14.0703 10.2281 13.7944 10.5178L8.79306 15.7682C8.50737 16.0681 8.03263 16.0797 7.73271 15.794C7.43279 15.5083 7.42125 15.0336 7.70694 14.7336L12.2155 10.0005L7.70694 5.26729C7.42125 4.96737 7.43279 4.49264 7.73271 4.20694Z",Tt=xt.A` .previous-flipper.windows:hover > svg > path,.previous-flipper.windows:focus-visible > svg > path{d:path("${wt}")}.next-flipper.windows:hover > svg > path,.next-flipper.windows:focus-visible > svg > path{d:path("${_t}");
    }
`,Ft=xt.A` .previous-flipper.windows:hover > svg > path,.previous-flipper.windows:focus-visible > svg > path{d:path("${_t}")}.next-flipper.windows:hover > svg > path,.next-flipper.windows:focus-visible > svg > path{d:path("${wt}");
    }
`,St=xt.A`
    ${(0,vt.V)("grid")} :host{--elevation:4;box-sizing:border-box;font-family:${ct.O};
        font-size: ${pt.K};
        line-height: ${pt.Z};
        color: ${ut.l};
        background: ${Ct.dR};
        border-radius: calc(${gt.JU} * 1px);
        ${ht.ET};overflow:hidden;height:100%;grid-template-columns:auto 1fr auto;grid-template-rows:auto 1fr;width:100%}:host(:hover) ::slotted([slot="previous-flipper"]),:host(:hover) .previous-flipper,:host(:hover) ::slotted([slot="next-flipper"]),:host(:hover) .next-flipper{opacity:1;transition:opacity 0.2s ease-in-out}:host(.light:hover) .previous-flipper:before,:host(.light:hover) .next-flipper:before{opacity:1;background:${ut.l}}.tappanel-scroll-anim{transition:transform .3s}.tablist{display:grid;grid-template-rows:auto auto;grid-template-columns:auto;position:absolute;bottom:6px;left:50%;transform:translate(-50%);width:max-content;align-self:center;justify-self:center;grid-row:1;grid-column:1 / span 3;z-index:3;cursor:pointer}.tablist.windows{display:none}.previous-flipper.windows,.next-flipper.windows{margin:0 8px;width:32px;height:32px;border-radius:16px;display:flex;align-items:center;justify-content:center;border:0px;--elevation:8;${ht.ET};
        background: ${ut.l};
        fill: ${ft.Wl}}.previous-flipper.windows:hover,.next-flipper.windows:hover,.previous-flipper.windows:focus-visible,.next-flipper.windows:focus-visible{--elevation:16}::slotted([slot="previous-flipper"]),.previous-flipper:not(.windows),::slotted([slot="next-flipper"]),.next-flipper:not(.windows){width:30px;height:56px;display:flex;justify-content:center;align-items:center;margin:0;position:relative;fill:${ut.l};
        color: ${ut.l};background:transparent;border:none;padding:0}::slotted([slot="previous-flipper"]),.previous-flipper.flipper-light-narrow:not(.windows),::slotted([slot="next-flipper"]),.next-flipper.flipper-light-narrow:not(.windows){width:24px;height:72px;fill:currentColor;color:${ft.wO}}::slotted([slot="previous-flipper"]),.previous-flipper.flipper-light-wide:not(.windows),::slotted([slot="next-flipper"]),.next-flipper.flipper-light-wide:not(.windows){width:32px;height:72px;fill:currentColor;color:${ft.wO}}::slotted([slot="previous-flipper"]),.previous-flipper.flipper-light-large:not(.windows),::slotted([slot="next-flipper"]),.next-flipper.flipper-light-large:not(.windows){width:32px;height:64px;fill:currentColor;color:${ft.wO}}::slotted([slot="previous-flipper"]),.previous-flipper.flipper-light-narrow:not(.windows),.previous-flipper.flipper-light-large:not(.windows),.previous-flipper.flipper-light-wide:not(.windows){inset-inline-start:4px}::slotted([slot="previous-flipper"]),.next-flipper.flipper-light-narrow:not(.windows),.next-flipper.flipper-light-large:not(.windows),.next-flipper.flipper-light-wide:not(.windows){inset-inline-end:4px}::slotted([slot="previous-flipper"]),.previous-flipper{grid-column:1;grid-row:1 / span 2;align-self:center;z-index:2;opacity:0}::slotted([slot="next-flipper"]),.next-flipper{grid-column:3;grid-row:1 / span 2;align-self:center;z-index:2;opacity:0}.previous-flipper.flipper-light2{margin-inline-start:2px}.next-flipper.flipper-light2{margin-inline-end:2px}.previous-flipper.flipper-light2,.next-flipper.flipper-light2{width:24px;height:48px;opacity:1}.previous-flipper.flipper-light2,.next-flipper.flipper-light2,.previous-flipper.flipper-light,.next-flipper.flipper-light,.previous-flipper.flipper-light-narrow,.next-flipper.flipper-light-narrow,.previous-flipper.flipper-light-large,.next-flipper.flipper-light-large,.previous-flipper.flipper-light-wide,.next-flipper.flipper-light-wide{fill:currentColor;color:${ft.wO}}::slotted([slot="previous-flipper"])::before,.previous-flipper:not(.windows)::before,::slotted([slot="next-flipper"])::before,.next-flipper:not(.windows)::before{content:"";opacity:0.3;background:${ft.Wl};position:absolute;top:0;right:0;left:0;bottom:0;transition:all 0.1s ease-in-out}.previous-flipper.flipper-light:focus-visible::before,.next-flipper.flipper-light:focus-visible::before,.previous-flipper.flipper-light::before,.next-flipper.flipper-light::before{background:${ut.l};
        box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;
        opacity: 0.5;
    }

    .previous-flipper.flipper-light2:focus-visible::before,
    .next-flipper.flipper-light2:focus-visible::before,
    .previous-flipper.flipper-light-narrow:focus-visible::before,
    .next-flipper.flipper-light-narrow:focus-visible::before,
    .previous-flipper.flipper-light-large:focus-visible::before,
    .next-flipper.flipper-light-large:focus-visible::before,
    .previous-flipper.flipper-light-wide:focus-visible::before,
    .next-flipper.flipper-light-wide:focus-visible::before,
    .previous-flipper.flipper-light2::before,
    .next-flipper.flipper-light2::before,
    .previous-flipper.flipper-light-narrow::before,
    .next-flipper.flipper-light-narrow::before,
    .previous-flipper.flipper-light-large::before,
    .next-flipper.flipper-light-large::before,
    .previous-flipper.flipper-light-wide::before,
    .next-flipper.flipper-light-wide::before{
        border-radius: 2px;
        background: ${ut.l};box-shadow:rgba(0,0,0,0.1) 0px 2px 4px;opacity:0.5;transition:opacity 0.3s linear 0s}.previous-flipper.flipper-light-narrow::after,.next-flipper.flipper-light-narrow::after,.previous-flipper.flipper-light-wide::after,.next-flipper.flipper-light-wide::after{content:"";position:absolute;top:-4px;right:-4px;left:-4px;bottom:-4px}::slotted([slot="previous-flipper"])::before,.previous-flipper.opacity-one-previous-flipper:not(.windows)::before,::slotted([slot="next-flipper"])::before,.next-flipper.opacity-one-next-flipper:not(.windows)::before{opacity:1}.next,.previous{position:relative;${""} width:16px;height:16px}.filled-next,.filled-previous{position:relative;width:24px;height:24px}::slotted([slot="previous-flipper"]:hover),.previous-flipper:hover,::slotted([slot="next-flipper"]:hover),.next-flipper:hover{cursor:pointer}::slotted([slot="previous-flipper"]:${kt.N}),
    .previous-flipper:${kt.N},
    ::slotted([slot="next-flipper"]:${kt.N}),
    .next-flipper:${kt.N}{
        opacity: 1;
    }

    ::slotted([slot="previous-flipper"]:${kt.N})::before,
    .previous-flipper:${kt.N}::before,
    ::slotted([slot="next-flipper"]:${kt.N})::before,
    .next-flipper:${kt.N}::before{background:${ft.oO};opacity:1}::slotted([slot="previous-flipper"]:hover)::before,.previous-flipper:hover::before,::slotted([slot="next-flipper"]:hover)::before,.next-flipper:hover::before{background:${ft.oO};opacity:1}:host([layout="1-column"]){--heading-font-size:${pt.K};
        --heading-line-height: ${pt.Z}}.activeIndicator{grid-row:2;grid-column:1;width:20px;height:3px;border-radius:calc(${gt.Pb} * 1px);
        justify-self: center;
        background: ${bt.IR}}.activeIndicatorTransition{transition:transform 0.2s ease-in-out}.tabpanel{grid-row:1/3;grid-column-start:1;grid-column-end:4;position:relative}.tabpanelscroll{position:absolute;height:100%;display:flex}`.withBehaviors(new mt.t(Tt,Ft),(0,yt.G2)(xt.A` ::slotted([slot="previous-flipper"]),.previous-flipper:not(.windows),::slotted([slot="next-flipper"]),.next-flipper:not(.windows){fill:${ft.Wl};
                color: ${ft.Wl}}::slotted([slot="previous-flipper"])::before,.previous-flipper:not(.windows)::before,::slotted([slot="next-flipper"])::before,.next-flipper:not(.windows)::before{background:${ut.l}}::slotted([slot="previous-flipper"]:hover)::before,.previous-flipper:hover::before,::slotted([slot="next-flipper"]:hover)::before,.next-flipper:hover::before{background:${ut.l}}.previous-flipper.windows,.next-flipper.windows{fill:${ut.l};
                background: ${Ct.dR}
            }

        `),(0,yt.mr)(xt.A` .activeIndicator{forced-color-adjust:none;background:${$t.A.Highlight}}.previous-flipper.windows,.next-flipper.windows{background:${$t.A.ButtonFace}}.previous-flipper.windows:hover,.next-flipper.windows:hover,.previous-flipper.windows:focus-visible,.next-flipper.windows:focus-visible{background:${$t.A.Highlight};
                fill: ${$t.A.HighlightText}
            }
        `));var Dt=i(22033),At=i(31619),zt=i(17469);let It=class extends G{};It=(0,R.Cg)([(0,O.E)({name:"msn-info-pane",template:dt,styles:St})],It),Dt.L.define(zt.i.registry),At.K.define(zt.i.registry);var Et=i(80831),Bt=i(41626);class Lt extends Bt.t{constructor(){super(...arguments),this.effectId="",this.isEnabled=!1,this.intersectionRootMargin="0px 0px 0px 0px",this.animationType="",this.showMultiTimes=!1,this.isAnimationValid=!1,this.updateAnimStatus=(t,e)=>{this.isAnimationValid!==t&&(this.isAnimationValid=t,t&&e&&setTimeout(()=>{e()},this.animationConfig.duration))}}connectedCallback(){if(super.connectedCallback(),this.animationType){this.effectGroup=Et.tb.getEffectGroup();const t={root:this.intersectionRoot,rootMargin:this.intersectionRootMargin};this.effectGroup.register(this.effectId,this.animContainer,this.updateAnimStatus,t,this.showMultiTimes,this.animationConfig.delayTimeMs)}}disconnectedCallback(){super.disconnectedCallback(),this.animationType&&this.effectGroup.unregister(this.effectId)}}(0,R.Cg)([j.CF],Lt.prototype,"effectId",void 0),(0,R.Cg)([(0,j.CF)({mode:"boolean"})],Lt.prototype,"isEnabled",void 0),(0,R.Cg)([j.CF],Lt.prototype,"intersectionRoot",void 0),(0,R.Cg)([j.CF],Lt.prototype,"intersectionRootMargin",void 0),(0,R.Cg)([j.CF],Lt.prototype,"animationType",void 0),(0,R.Cg)([j.CF],Lt.prototype,"animationConfig",void 0),(0,R.Cg)([(0,j.CF)({mode:"boolean"})],Lt.prototype,"showMultiTimes",void 0),(0,R.Cg)([U.sH],Lt.prototype,"isAnimationValid",void 0);const Mt={"scale-up":"animation1","scale-down":"animation1","scale-up-down":"animation2","opacity-up":"opacity-up-animation","move-up":"move-up-animation","move-up2":"move-up-animation2"},Nt=n.qy`<style>.anim-container { overflow: hidden; width: 100%; height: 100%; } .anim-container div { transform: scale(${t=>{var e;return(null===(e=t.animationConfig)||void 0===e?void 0:e.scaleFrom)||1}}); } .anim-wrapper { animation: ${t=>Mt[t.animationType]} ${t=>{var e;return null===(e=t.animationConfig)||void 0===e?void 0:e.durationString}} forwards; } .anim-wrapper-initial { opacity: ${t=>{var e,i;return null!==(e=t.animationConfig)&&void 0!==e&&e.initialOpacity?null===(i=t.animationConfig)||void 0===i?void 0:i.initialOpacity:1}}; } @keyframes animation1 { 0% { transform: scale(${t=>{var e;return null===(e=t.animationConfig)||void 0===e?void 0:e.scaleFrom}}); } 100% { transform: scale(${t=>{var e;return null===(e=t.animationConfig)||void 0===e?void 0:e.scaleTo}}); } } @keyframes animation2 { 0% { transform: scale(${t=>{var e;return null===(e=t.animationConfig)||void 0===e?void 0:e.scaleFrom}}); } 50% { transform: scale(${t=>{var e;return null===(e=t.animationConfig)||void 0===e?void 0:e.scaleTo}}); } 100% { transform: scale(${t=>{var e;return null===(e=t.animationConfig)||void 0===e?void 0:e.scaleFrom}}); } } @keyframes opacity-up-animation { 0% { opacity: 0; } 66% { opacity: 0; } 100% { opacity: 1; } } @keyframes move-up-animation { 0% { transform: translate(0px, 100%); opacity: 0; } 33% { transform: translate(0px, 0px); opacity: 1; } 66% { transform: translate(0px, 0px); opacity: 1; } 100% { transform: translate(0px, -100%); opacity: 0; } } @keyframes move-up-animation2 { 0% { transform: translate(0px, 100%); opacity: 0; } 66% { transform: translate(0px, 100%); opacity: 0; } 100% { transform: translate(0px, 0px); opacity: 1; } }</style><div class="anim-container">${(0,a.z)(t=>t.animationType&&t.animationConfig,n.qy`<div class=${t=>t.isAnimationValid?"anim-wrapper":"anim-wrapper-initial"} ${(0,Q.K)("animContainer")}><span part="anim-content"><slot name="anim-content"></slot></span></div>`)} ${(0,a.z)(t=>!t.animationType,n.qy`<slot name="anim-content"></slot>`)}</div>`;var Rt=i(59957);const Ot=xt.A``.withBehaviors(new Rt.e("layoutStyle"));let Pt=class extends Lt{};Pt=(0,R.Cg)([(0,O.E)({name:"msn-animation-decorator",template:Nt,styles:Ot})],Pt);var Ht=i(86845),jt=i(10096),Ut=i(78465),Vt=i(17312),Wt=i(91278),Gt=i(83003),Zt=i(14817),Jt=i(48835),Xt=i(97091),Qt=i(40562),qt=i(38260);Ut.jt,Ht._t;const Yt=n.qy`
    <msn-info-pane-tab id="tab_${t=>t.id}" aria-label="${t=>t.title}"></msn-info-pane-tab>
`,Kt=n.qy`
<msn-info-pane-panel id="tab_panel_${t=>t.id}">
    <msft-info-pane-slide>
        ${Jt.B}
    </msft-info-pane-slide>
</msn-info-pane-panel>
`,te=n.qy`
    <style>
        .card-button {
            border-radius: 100%;
        }

        /* 
         * Here about 'from the web' attribution style
         */
        msft-article[id="contentcard_${t=>t.id}"]::part(start-actions) {
            flex:1;
            padding-inline-end: 6px;
        }
        msft-article[id="contentcard_${t=>t.id}"] msft-attribution::part(image){
            white-space: nowrap;
        }
        msft-article[id="contentcard_${t=>t.id}"] msft-attribution {
            display: flex;
        }
        msft-article[id="contentcard_${t=>t.id}"] msft-attribution, msft-article[id="contentcard_${t=>t.id}"] msft-attribution::part(content){
            width: calc(100%);
            ${t=>t.isProviderIconClickable?"display: inline-flex":""}
        }
        msft-article[id="contentcard_${t=>t.id}"] .attribution_container_${t=>t.id} {
            width: calc(100%);
            min-height: var(--type-ramp-minus-1-line-height);
            position: relative;
            overflow: hidden;
            white-space: nowrap;
        }
        msft-article[id="contentcard_${t=>t.id}"] .attribution_Content_${t=>t.id} {
            position:absolute;
            transition: all 0.5s ease-out;
        }   
    </style>
    <msn-info-pane-panel id="tab_panel_${t=>t.id}">
        <msft-info-pane-slide>
            <msft-article-card
                size="${t=>t.cardSize}"
                card-fill-color="${t=>{var e;return null===(e=t.articleCardBackgroundColor)||void 0===e||null===(e=e.find(t=>t.isDarkMode===(0,M.ud)()))||void 0===e?void 0:e.hexColor}}"
                class="infopane"
            >
                <msft-article
                    id="contentcard_${t=>t.id}"
                    href=${t=>t.destinationUrl}
                    target=${t=>t.openLinksInNewTab||t.openArticleInNewTab?"_blank":"_self"}
                    title=${t=>t.disableCardTitleTooltip?"":t.title}
                    aria-label=${t=>t.ariaLabel}
                    data-t="${t=>{var e;return null===(e=t.telemetryContext)||void 0===e||null===(e=e.contentCard)||void 0===e?void 0:e.getMetadataTag()}}"
                    :anchorTelemetryTag=${t=>t.telemetryContext&&t.telemetryContext.destination&&t.telemetryContext.destination.getMetadataTag()}
                    :handleContentCardClickOverride=${t=>t.handleContentCardClickOverride}
                    @mouseenter="${(t,e)=>t.setDisplacementHandler&&t.setDisplacementHandler(e,t.dir)}"
                    @mouseleave="${(t,e)=>t.removeDisplacementHandler&&t.removeDisplacementHandler(e,t.dir)}"
                >
                    ${(0,a.z)(t=>t.contentIndicator,t=>(0,s.Z)(t.contentIndicator))}
                    ${(0,a.z)(t=>t.imageData,n.qy`
                        <img
                            slot="image"
                            alt="${t=>t.imageData.altText}"
                            src="${t=>t.imageData.source}"
                            @load="${t=>t.imageData.visualReadinessCallback&&t.imageData.visualReadinessCallback()}"
                        />
                    `)}
                    ${c}
                    ${(0,a.z)(t=>t.abstract&&!t.isMsnHpExternalLinkCard,n.qy`
                        <p slot="abstract" style="display: -webkit-box; -webkit-line-clamp: ${t=>t.contentIndicator?"3":"4"}; -webkit-box-orient: vertical; overflow: hidden;">
                            ${t=>t.abstract}
                        </p>
                    `)}
                    ${(0,u.fn)("start-action")}
                    ${(0,a.z)(t=>!t.isAnaheimDesign,n.qy`
                        <div slot="start-action" style="gap:0">
                            ${(0,a.z)(t=>t.cardActionStatus&L.J.enabled&&!t.enableRichSocialReaction,n.qy`
                                ${g.LW}
                                ${g.tB}
                            `)}
                            ${(0,a.z)(t=>t.enableRichSocialReaction,()=>(0,g.nj)({}))}
                        </div>
                    `)}
                    <div slot="end-action" style="gap:0">
                        ${(0,a.z)(t=>t.cardActionStatus&L.J.enabled,n.qy`
                            ${(0,a.z)(t=>t.enableRichSocialReaction&&t.enableWCSaveButton,n.qy`
                                ${(0,a.z)(t=>!t.optedOutOfReactions&&t.cardActionStatus&L.J.showMore,g.LW)}
                                ${(0,a.z)(t=>!t.optedOutOfReactions&&t.cardActionStatus&L.J.showFewer,g.tB)}
                            `)}
                            ${(0,a.z)(t=>t.enableWCCardAction,h.L)}
                        `)}
                    </div>
                    ${(0,a.z)(t=>t.cardActionStatus&L.J.enabled,f.C)}
                </msft-article>
            </msft-article-card>
        </msft-info-pane-slide>
    </msn-info-pane-panel>
`,ee=n.qy`
    <style>
        .card-see-more {
            box-sizing: border-box;
            align-items: center;
            background-color: rgb(255, 255, 255);
            border-radius: 100%;
            border: 1px solid rgb(229, 229, 229);
            cursor: pointer;
            display: flex;
            fill: currentcolor;
            font-family: var(--body-font);
            font-size: var(--type-ramp-base-font-size);
            height: 28px;
            justify-content: center;
            line-height: var(--type-ramp-base-line-height);
            margin-inline-start: 4px;
            min-width: 28px;
            outline: none;
            padding: 0px;
            position: relative;
        }
        .card-see-more: hover {
            background-color: rgb(242, 242, 242);
        }
        msft-info-pane-slide {
            width: 100%;
        }
        msft-content-card fluent-button::part(control) {
            padding: 0;
        }
        msft-content-card::part(footer) {
            padding: 0 16px 4px;
            margin-bottom: 0;
            height: 40px;
        }
        msft-attribution {
            position: relative;
            overflow: hidden;
        }
        msft-content-card span.title_1x_2y,
        msft-content-card span.title_1x_3y {
            font-size: 20px;
        }
        msft-content-card.narrowTitleGap::part(body) {
            row-gap: 7px;
        }
        msft-content-card.narrowTitleGap::part(footer) {
            padding: 0 16px 18px;
            margin-bottom: 0;
            height: 14px;
        }
        
        ${(0,a.z)(t=>t.contentType===Gt.pL.Video,n.qy`
            msft-content-card[id="contentcard_${t=>t.id}"] msft-content-indicator {
                color: transparent;
                left: 286px;
                top: 100px;
            }
            msft-content-card[id="contentcard_${t=>t.id}"] msft-content-indicator::after{
                background: transparent;
            }
        `)}

        /* 
         * Here and elsewhere about 'from the web' attribution style
         */
        msft-content-card[id="contentcard_${t=>t.id}"]::part(start-actions) {
            flex:1;
            padding-inline-end: 6px;
        }
        msft-content-card[id="contentcard_${t=>t.id}"] msft-attribution::part(image){
            white-space: nowrap;
        }
        msft-content-card[id="contentcard_${t=>t.id}"] msft-attribution {
            display: flex;
        }
        msft-content-card[id="contentcard_${t=>t.id}"] msft-attribution, msft-content-card[id="contentcard_${t=>t.id}"] msft-attribution::part(content){
            width: calc(100%);
        }
        msft-content-card[id="contentcard_${t=>t.id}"] .attribution_container_${t=>t.id} {
            width: calc(100%);
            min-height: var(--type-ramp-minus-1-line-height);
            position: relative;
            overflow: hidden;
            white-space: nowrap;
        }
        msft-content-card[id="contentcard_${t=>t.id}"] .attribution_Content_${t=>t.id} {
            position:absolute;
            transition: all 0.5s ease-out;
        }
    </style>
    <msn-info-pane-panel id="tab_panel_${t=>t.id}">
        <msft-info-pane-slide>
            <msft-content-card
                id="contentcard_${t=>t.id}"
                class="${t=>xe(t)}"
                href=${t=>t.destinationUrl}
                target=${t=>t.openLinksInNewTab||t.openArticleInNewTab?"_blank":"_self"}
                :handleContentCardClickOverride=${t=>t.handleContentCardClickOverride}
                title=${t=>t.disableCardTitleTooltip?"":t.id.includes("BuyDirectCard")?t.abstract:t.title}
                aria-label=${t=>t.ariaLabel}
                layout=${t=>t.cardLayout}
                data-t="${t=>t.telemetryContext&&t.telemetryContext.contentCard&&t.telemetryContext.contentCard.getMetadataTag()}"
                :anchorTelemetryTag=${t=>t.telemetryContext&&t.telemetryContext.destination&&t.telemetryContext.destination.getMetadataTag()}
                @mouseenter="${(t,e)=>t.setDisplacementHandler&&t.setDisplacementHandler(e,t.dir)}"
                @mouseleave="${(t,e)=>t.removeDisplacementHandler&&t.removeDisplacementHandler(e,t.dir)}"
            >
            ${c}
            ${(0,a.z)(t=>t.contentIndicator,t=>(0,s.Z)(t.contentIndicator))}
            ${(0,a.z)(t=>t.imageData,n.qy`
                <img
                    slot="background-image"
                    alt="${t=>t.imageData.altText}"
                    src="${t=>t.imageData.source}"
                    @load="${t=>t.imageData.visualReadinessCallback&&t.imageData.visualReadinessCallback()}"
                    @error="${t=>{return e=t.imageData.source,void(0,o.vV)(l.zfe,"Error fetching source","Source: "+e);var e}}"
                />
            `)}
            ${(0,a.z)(t=>t.abstract&&!t.isMsnHpExternalLinkCard,n.qy`
                <p slot="abstract" style="display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden;">
                    ${t=>t.abstract}
                </p>
            `)}
            ${(0,a.z)(t=>t.badge,t=>(0,b.w)(t.badge))}
            ${(0,a.z)(t=>!t.isMsnHpExternalLinkCard,t=>(0,u.fn)(t.providerAboveHeader?"attribution":"start-actions"))}
            ${(0,a.z)(t=>t.isMsnHpExternalLinkCard,n.qy`
                <msft-attribution slot="attribution" style="--design-unit: 1.5; position: absolute; bottom: 10px;">
                    <span style="unicode-bidi:embed">${t=>t.abstract}</span>
                </msft-attribution>
            `)}
            ${(0,a.z)(t=>t.cardActionStatus&L.J.enabled,m.K)}
            ${(0,a.z)(t=>!t.isAnaheimDesign,n.qy`
                <div slot="start-actions" style="gap:0">
                    ${(0,a.z)(t=>t.cardActionStatus&L.J.enabled&&!t.enableRichSocialReaction,n.qy`
                        ${g.LW}
                        ${g.tB}
                    `)}
                </div>
            `)}
            <div slot="${t=>t.providerAboveHeader?"start-actions":"end-actions"}" style="gap:0">
                ${(0,a.z)(t=>t.enableRichSocialReaction,()=>(0,g.nj)({}))}
                ${(0,a.z)(t=>t.cardActionStatus&L.J.enabled,n.qy`
                    ${(0,a.z)(t=>t.enableRichSocialReaction&&t.enableWCSaveButton,n.qy`
                        ${(0,a.z)(t=>!t.optedOutOfReactions&&t.cardActionStatus&L.J.showMore,g.LW)}
                        ${(0,a.z)(t=>!t.optedOutOfReactions&&t.cardActionStatus&L.J.showFewer,g.tB)}
                    `)}
                    ${(0,a.z)(t=>t.enableWCCardAction,h.L)}
                `)}
            </div>
            ${(0,a.z)(t=>t.enableHoverCardAction&&!t.optedOutOfReactions,v.p)}
            </msft-content-card>
        </msft-info-pane-slide>
    </msn-info-pane-panel>
`,ie=n.qy`
        <div class="info-pane-slide-title" part="info-pane-slide-title" style="display: flex; align-items: end;">
            <h3 class="info-pane-slide-title" style="pointer-events: none; flex: 1;" part="info-pane-slide-title">
                ${t=>t.title}
            </h3>
            <div class="cta-button" style="margin-inline-start: 4px; z-index: 2; height: 34px;">
                <msn-native-ad-call-to-action 
                    text=${t=>t.localizedStrings.nativeAdLearnMoreText||"learn more"}
                    default-background-color="#C6C0BA"
                    background-color="${t=>t.layoutColor}"
                    color="#000000"
                    is-hovered=${t=>t.hoverState&&t.hoverState.isHovered}
                    cta-mode="default"
                    destination-url=${t=>t.destinationUrl}
                    tel-metadata=${t=>{var e;return null==t||null===(e=t.adTelemetryContext)||void 0===e||null===(e=e.destination)||void 0===e?void 0:e.getMetadataTag()}}
                    ${(0,Wt.Ib)(!0,!1)}
                >
                </msn-native-ad-call-to-action>
            </div>
        </div>
    `,ne=t=>t?ae(t):c,ae=t=>n.qy`
    <div class="info-pane-slide-title" part="info-pane-slide-title" style="display: flex; align-items: end;">
        <h3 class="info-pane-slide-title" style="pointer-events: none; flex: 1;" part="info-pane-slide-title">
            ${t=>t.title}
        </h3>
        <msn-native-ad-call-to-action
            text=${()=>t}
            title=${()=>t}
            aria-label=${()=>t}
            :layoutConfig=${()=>({marginBottom:"6px",zIndex:2,marginInlineStart:"10px"})}
            background-color="${t=>t.layoutColor}"
            destination-url=${t=>t.destinationUrl}
            tel-metadata=${t=>{var e;return null===(e=t.adTelemetryContext)||void 0===e||null===(e=e.destination)||void 0===e?void 0:e.getMetadataTag()}}
            ${(0,Wt.Ib)(!0,!1)}
        >
        </msn-native-ad-call-to-action>
    </div>   
`,re=n.qy`
    <style>
        msft-info-pane-slide {
            width: 100%;
        }
        msft-content-card.native-ad-infopane-content-card::part(body) {
            grid-template-rows: 1fr 40px;
        }
        msft-content-card.native-ad-infopane-content-card::part(footer) {
            position: absolute;
            bottom: 0px;
            width: calc(100% - 32px);
        }
        msft-content-card.native-ad-infopane-content-card msft-attribution.info-pane-card-deco {
            top: -55px;
        }
        msft-content-card.native-ad-infopane-content-card.hasInlineDecoration msft-attribution[slot="start-actions"] {
            margin-top: 0px;
        }
        msft-content-card.native-ad-infopane-content-card msft-attribution[slot="start-actions"] .provider-name{
            vertical-align: middle;
        }
        msft-content-card.native-ad-infopane-content-card.hasInlineDecoration div[slot="end-actions"] {
            margin-top: 0px;
        }
        msft-content-card.hasInlineDecoration msft-attribution[slot="call-to-action"] {
            bottom: 50px;
            z-index: unset;
        }
        msft-content-card.native-ad-infopane-content-card .info-pane-card-deco msn-inline-group::part(group-container) {
            height: fit-content;
            transition: height  0.5s;
        }
        msft-info-pane-slide msft-ad-label {
            margin-right: 0;
        }
        msft-content-card a.ad-choice-icon {
            display: inline-flex;
            justify-content: center;
            min-width: calc((var(--base-height-multiplier) + var(--density)) * var(--design-unit) * 1px);
        }

        msft-content-card a.ad-choice-hidden {
            max-width: 0px;
            min-width: 0px;
            visibility: hidden;
            width: 0;
            padding: 0;
            margin: 0;
            border: 0;
        }

        msft-content-card.native-ad h3.info-pane-slide-title, msft-content-card.${(0,d.nP)("native-ad")} h3.info-pane-slide-title {
            -webkit-line-clamp: 2;
        }

        ${t=>(t=>{if(!t||!t.template)return"";const e=[];switch(z(t)&&e.push('\nmsft-content-card.native-ad-infopane-horizontal::part(body) {\n    display: block;\n    background: var(--fill-color);\n}\nmsft-content-card.native-ad-infopane-horizontal::part(footer) {\n    position: absolute;\n    bottom: 0px;\n    width: calc(100% - 32px);\n}\nmsft-content-card.native-ad-infopane-horizontal.hasInlineDecoration msft-attribution[slot="start-actions"]{\n    margin-top: 0;\n}\nmsft-content-card.native-ad-infopane-horizontal.hasInlineDecoration msft-attribution[slot="end-actions"]{\n    margin-top: 0;\n}\nmsft-content-card.native-ad-infopane-horizontal::part(heading-container) {\n    width: 258px;\n    margin-top: 24px;\n    margin-left: 16px;\n}\nmsft-content-card.native-ad-infopane-horizontal .info-pane-slide-title {\n    font-size: 20px;\n    line-height: 30px;\n}\nmsft-content-card.native-ad-infopane-horizontal msft-attribution.info-pane-card-deco {\n    width: 258px;\n    margin-left: 32px;\n    margin-top: 68px;\n}\nmsft-content-card.native-ad-infopane-horizontal msft-attribution .shop-now {\n    background: red;\n    margin-top:20px;\n    height: 32px;\n    line-height: 32px;\n    width: 102px;\n    border-radius: 20px;\n    text-align: center;\n    background: rgba(255, 255, 255, 0.14);\n    color: rgba(255, 255, 255, 0.8);\n}\n\nmsft-content-card.native-ad-infopane-horizontal msn-inline-group::part(inline-item) {\n    line-height: 25px;\n}\n'),t.template.templateType){case"msn-info-pane-horizontal-1-by-1":e.push("\nmsft-content-card.native-ad-infopane-horizontal.native-ad-infopane-horizontal-1-by-1::part(media-wrapper) {\n    background: var(--fill-color);\n    border: 10px solid #fff;\n    position: absolute;\n    width: 180px;\n    height: 180px;\n    right: 46px;\n    top: 40px;\n}\nmsft-content-card.rtl.native-ad-infopane-horizontal.native-ad-infopane-horizontal-1-by-1::part(media-wrapper) {\n    left: 46px;\n    right: unset;\n}");break;case"msn-info-pane-horizontal-3-by-4":e.push("\nmsft-content-card.native-ad-infopane-horizontal.native-ad-infopane-horizontal-3-by-4::part(media-wrapper) {\n    background: var(--fill-color);\n    border: 10px solid #fff;\n    position: absolute;\n    width: 150px;\n    height: 200px;\n    right: 68px;\n    top: 30px;\n}\nmsft-content-card.rtl.native-ad-infopane-horizontal.native-ad-infopane-horizontal-3-by-4::part(media-wrapper) {\n    left: 68px;\n    right: unset;\n}");break;case"msn-info-pane-horizontal-4-by-3":e.push("\nmsft-content-card.native-ad-infopane-horizontal.native-ad-infopane-horizontal-4-by-3::part(media-wrapper) {\n    background: var(--fill-color);\n    border: 10px solid #fff;\n    position: absolute;\n    width: 208px;\n    height: 156px;\n    right: 38px;\n    top: 50px;\n}\nmsft-content-card.rtl.native-ad-infopane-horizontal.native-ad-infopane-horizontal-4-by-3::part(media-wrapper) {\n    left: 38px;\n    right: unset;\n}");break;case"msn-info-pane-horizontal-9-by-16":e.push("\nmsft-content-card.native-ad-infopane-horizontal.native-ad-infopane-horizontal-9-by-16::part(media-wrapper) {\n    background: var(--fill-color);\n    border: 10px solid #fff;\n    position: absolute;\n    width: 123px;\n    height: 220px;\n    right: 38px;\n    top: 20px;\n}\nmsft-content-card.rtl.native-ad-infopane-horizontal.native-ad-infopane-horizontal-9-by-16::part(media-wrapper) {\n    left: 38px;\n    right: unset;\n}");break;case"msn-info-pane-pattern-overlay-1-by-1":e.push(A),e.push("\nmsft-content-card.native-ad-infopane-pattern-overlay.native-ad-infopane-pattern-overlay-1-by-1::part(heading-container) {\n    width: 248px;\n}\nmsft-content-card.native-ad-infopane-pattern-overlay.native-ad-infopane-pattern-overlay-1-by-1 msft-attribution.info-pane-card-deco {\n    width: 248px;\n}\nmsft-content-card.native-ad-infopane-pattern-overlay.native-ad-infopane-pattern-overlay-1-by-1::part(media-wrapper) {\n    background: #fff;\n    position: absolute;\n    width: 304px;\n    height: 100%;\n    right: 8px;\n    top: 0px;\n}\nmsft-content-card.rtl.native-ad-infopane-pattern-overlay.native-ad-infopane-pattern-overlay-1-by-1::part(media-wrapper) {\n    left: 8px;\n    right: unset;\n}\n");break;case"msn-info-pane-pattern-overlay-4-by-3":e.push(A),e.push("\nmsft-content-card.native-ad-infopane-pattern-overlay.native-ad-infopane-pattern-overlay-4-by-3::part(heading-container) {\n    width: 144px;\n}\nmsft-content-card.native-ad-infopane-pattern-overlay.native-ad-infopane-pattern-overlay-4-by-3 msft-attribution.info-pane-card-deco {\n    width: 144px;\n}\nmsft-content-card.native-ad-infopane-pattern-overlay.native-ad-infopane-pattern-overlay-4-by-3::part(media-wrapper) {\n    background: #fff;\n    position: absolute;\n    width: 384px;\n    height: 100%;\n    right: 8px;\n    top: 0px;\n}\nmsft-content-card.rtl.native-ad-infopane-pattern-overlay.native-ad-infopane-pattern-overlay-4-by-3::part(media-wrapper) {\n    left: 8px;\n    right: unset;\n}\n")}return e.join(" ")})(t)}
    </style>
    
    <msft-content-card
        id="${t=>(0,d.s4)(t.enableSafeAds,`native_ad_${t.id}_${t.index}`)}"
        class="${t=>xe(t)} ${t=>(t=>{const e=[(0,d.s4)(t.enableSafeAds,"native-ad")];if(t.template&&t.template.progressiveDisplay&&e.push("native-ad-infopane-content-card"),document.dir===D.O.rtl&&e.push("rtl"),t.template&&t.template.templateType)switch(t.template.templateType){case"msn-info-pane-horizontal-1-by-1":e.push("native-ad-infopane-horizontal native-ad-infopane-horizontal-1-by-1");break;case"msn-info-pane-horizontal-3-by-4":e.push("native-ad-infopane-horizontal native-ad-infopane-horizontal-3-by-4");break;case"msn-info-pane-horizontal-4-by-3":e.push("native-ad-infopane-horizontal native-ad-infopane-horizontal-4-by-3");break;case"msn-info-pane-horizontal-9-by-16":e.push("native-ad-infopane-horizontal native-ad-infopane-horizontal-9-by-16");break;case"msn-info-pane-pattern-overlay-1-by-1":e.push("native-ad-infopane-horizontal native-ad-infopane-pattern-overlay native-ad-infopane-pattern-overlay-1-by-1");break;case"msn-info-pane-pattern-overlay-4-by-3":e.push("native-ad-infopane-horizontal native-ad-infopane-pattern-overlay native-ad-infopane-pattern-overlay-4-by-3")}return e.join(" ")})(t)}"
        href=${t=>t.destinationUrl}
        target="_blank"
        title=${t=>t.disableCardTitleTooltip?"":t.title}
        layout=${t=>t.cardLayout}
        data-t="${t=>t.id&&t.adTelemetryContext&&t.adTelemetryContext.nativeAdCard&&t.adTelemetryContext.nativeAdCard.getMetadataTag()}"
        :anchorTelemetryTag=${t=>t.adTelemetryContext&&t.adTelemetryContext.destination&&t.adTelemetryContext.destination.getMetadataTag()}
        ${(0,Wt.Ib)()}
        @mouseenter=${t=>ke(t,!0)}
        @mouseleave=${t=>ke(t,!1)}
    >
        ${(t,e)=>{var i;return _e(t.template,t.localizedStrings,null===(i=e.parent)||void 0===i?void 0:i.nativeAds)}}
        ${(0,a.z)(t=>t.hasAnyInlineDecoration,n.qy`
            ${t=>(0,jt.zN)(t,!0)}               
        `)}
        ${(0,a.z)(t=>t.videoProps,n.qy`
            <native-ad-video-controls
                region="infopane"
                :destinationUrl=${t=>t.destinationUrl}
                :localizedStrings=${t=>t.localizedStrings}
            ></native-ad-video-controls>
            <div slot="${t=>z(t)?"media":"background-image"}" style="height: 100%; width: 100%">
                <native-ad-video-player
                    :videoProps=${t=>t.videoProps}
                    :backgroundImg=${t=>t.imageData}
                    region="infopane"
                ></native-ad-video-player>
            </div>
        `)}
        ${(0,a.z)(t=>t.imageData&&!t.videoProps,n.qy`         
            <div slot="${t=>z(t)?"media":"background-image"}" style="height: 100%; width: 100%">
                <img
                    style="height: 100%; width: 100%; object-fit: cover;"
                    slot="anim-content"
                    id="${t=>t.id}-img"
                    alt="${t=>t.imageData.altText}"
                    src="${t=>t.imageData.source}"
                    @load="${(t,e)=>(0,x.mQ)(t,e,"InfopaneCardTemplate")}"
                    @error="${(t,e)=>{(0,x.mQ)(t,e,"InfopaneCardTemplate"),(0,k.T)({id:`native_ad_${t.id}_${t.index}`,rLink:t.destinationUrl,imgLink:t.imageData.source})}}"
                />
            </div>
        `)}
        ${(0,a.z)(t=>t.providerData,n.qy`
            <msft-attribution slot="start-actions" id="start-actions" style="color: var(--neutral-foreground-rest);--design-unit: 0;">
                ${S.pK}
                ${t=>(0,S.Bq)(t.destinationUrl)}
                ${(0,a.z)(t=>t.assets&&t.assets.localInventory,n.qy`
                    &bull;<span id="in-store">${t=>t.localizedStrings.nativeAdInStoreText}</span>
                `)}
            </msft-attribution>
        `)}
        <div 
            slot="end-actions" 
            style="max-height: 32px;
            gap: 0; 
            position: relative"
        >
            ${(0,Vt.UN)()}
            ${(0,a.z)(t=>t.adChoiceIconUrl,n.qy`
            <a href="${t=>t.adChoiceIconUrl}" target="_blank"
                    class="${t=>le(t)} ad-choice-icon"
                    id="${t=>t.id}-ad-choice"
                    data-t="${t=>{var e;return null===(e=t.adTelemetryContext)||void 0===e||null===(e=e.adChoice)||void 0===e?void 0:e.getMetadataTag()}}"
                >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter:invert(71%) sepia(0%) saturate(0%) hue-rotate(332deg) brightness(95%) contrast(97%);">
                        <path d="M4.52344 5.69531C4.70573 5.69531 4.86198 5.63542 4.99219 5.51562C5.1224 5.39062 5.1875 5.24219 5.1875 5.07031C5.1875 4.89844 5.1224 4.7526 4.99219 4.63281C4.86198 4.50781 4.70573 4.44531 4.52344 4.44531C4.33594 4.44531 4.17708 4.50781 4.04688 4.63281C3.91667 4.7526 3.85156 4.89844 3.85156 5.07031C3.85156 5.24219 3.91667 5.39062 4.04688 5.51562C4.17708 5.63542 4.33594 5.69531 4.52344 5.69531ZM1.44531 0.921875V0.929688C1.33594 0.861979 1.21875 0.828125 1.09375 0.828125C0.90625 0.828125 0.747396 0.890625 0.617188 1.01562C0.486979 1.13542 0.421875 1.28125 0.421875 1.45312V11.375C0.421875 11.5469 0.486979 11.6953 0.617188 11.8203C0.747396 11.9401 0.90625 12 1.09375 12C1.19271 12 1.28906 11.9792 1.38281 11.9375H1.39062L1.40625 11.9219L3.20312 11.0625C3.48958 10.9635 3.63281 10.7708 3.63281 10.4844C3.63281 10.3073 3.56771 10.1589 3.4375 10.0391C3.30729 9.91406 3.15104 9.85156 2.96875 9.85156C2.85417 9.85156 2.74479 9.8776 2.64062 9.92969C2.63542 9.9401 2.61979 9.95052 2.59375 9.96094C2.51042 10.0026 2.42188 10.0234 2.32812 10.0234C2.17188 10.0234 2.03906 9.97396 1.92969 9.875C1.82031 9.77083 1.76302 9.64844 1.75781 9.50781V3.375C1.76302 3.22917 1.82031 3.10677 1.92969 3.00781C2.03906 2.90365 2.17188 2.85156 2.32812 2.85156C2.41667 2.85156 2.5 2.8724 2.57812 2.91406C2.58333 2.91406 2.58854 2.91667 2.59375 2.92188C2.59896 2.92188 2.60417 2.92448 2.60938 2.92969L8.53906 5.92188L8.64844 5.97656C8.8099 6.08594 8.89062 6.23177 8.89062 6.41406C8.89062 6.60677 8.80469 6.75521 8.63281 6.85938L8.5625 6.89844L5.1875 8.60938V6.67969C5.1875 6.5026 5.1224 6.35417 4.99219 6.23438C4.86198 6.11458 4.70573 6.05469 4.52344 6.05469C4.33594 6.05469 4.17708 6.11458 4.04688 6.23438C3.91667 6.35417 3.85156 6.5026 3.85156 6.67969V9.65625C3.85156 9.83333 3.91667 9.98177 4.04688 10.1016C4.17708 10.2214 4.33594 10.2812 4.52344 10.2812C4.65885 10.2812 4.78385 10.2448 4.89844 10.1719L11.125 7.00781C11.4271 6.90885 11.5781 6.71094 11.5781 6.41406C11.5781 6.14844 11.4453 5.95833 11.1797 5.84375L1.44531 0.921875ZM2.59375 9.96094C2.61979 9.95052 2.63542 9.9401 2.64062 9.92969L2.59375 9.96094ZM2.57812 2.91406C2.58333 2.91406 2.58854 2.91667 2.59375 2.92188C2.59896 2.92188 2.60417 2.92448 2.60938 2.92969L2.57812 2.91406Z" fill="#00aecd"/>
                    </svg>
                </a>
            `)}
            ${(0,a.z)(t=>t.isAdFeedbackV1Enabled&&!!t.feedbackUrl,n.qy`
                <div class="see-more-telemetry-wrapper"
                    data-t="${t=>{var e;return null===(e=t.adTelemetryContext)||void 0===e||null===(e=e.seeMore)||void 0===e?void 0:e.getMetadataTag()}}"
                >
                    ${h.L}
                </div>
            `)}
        </div>
    </msft-content-card>
`,oe=n.qy`
    <msn-native-ad-wc
        id="${t=>(0,d.s4)(t.enableSafeAds,`native_ad_${t.id}_${t.index}`)}"
        style="z-index:0; position:relative"
        data-t="${t=>{var e;return t.id&&(null===(e=t.adTelemetryContext)||void 0===e||null===(e=e.nativeAdCard)||void 0===e?void 0:e.getMetadataTag())}}"
        ${(0,Wt.Ib)(!1,!0)}
        :configRef=${t=>{var e;return null===(e=t.nativeAdWC)||void 0===e?void 0:e.configRef}}
        :localizedStrings=${t=>t.localizedStrings}
        :adData=${t=>t}
        :isInfopane=${()=>!0}
    ></msn-native-ad-wc>
`,le=t=>t.hideAdLabelAndAdChoice?"ad-choice-hidden":"",se=n.qy`
    <style>
        msft-content-card fluent-button::part(control) {
            padding: 0;
        }
        msft-content-card::part(footer) {
            padding: 0 16px 4px;
            margin-bottom: 0;
            height: 40px;
        }
        msft-content-card.nativeAdVideo-infopane::part(footer) {
            padding: 0 16px 4px;
            margin-bottom: 50px;
            height: auto;
        }
        msft-content-card.nativeAdVideo-infopane::part(mask) {
            visibility: hidden;
        }
        msft-content-card.nativeAdVideo-infopane::part(heading)::after {
            top: unset;
            bottom: 50px;
            right: 60px;
            width: 545px;
            height: 247px;
        }
        msft-content-card.nativeAdVideo-infopane::part(heading-container) {            
            width: 530px;
        }
        msft-attribution {
            position: relative;
            overflow: hidden;
        }
        msft-content-card span.title_1x_2y,
        msft-content-card span.title_1x_3y {
            font-size: 20px;
        }
        msft-content-card.narrowTitleGap::part(body) {
            row-gap: 7px;
        }
        msft-content-card.narrowTitleGap::part(footer) {
            padding: 0 16px 18px;
            margin-bottom: 0;
            height: 14px;
        }
        msft-attribution.info-pane-card-deco {
            z-index: unset;
            top: -65px;
            margin-bottom: -10px;
        }
        msft-attribution[slot="start-actions"] #in-store {
            margin-left: 3px;
        }
    </style>
    <msn-info-pane-panel id="tab_panel_${t=>(0,d.s4)(t.enableSafeAds,t.id)}">
        <style>
            msft-info-pane-slide {
                gap: 2px;
                background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 100%);
            }
            .no-gap {
                gap: 0px;
            }
        </style>
        <msft-info-pane-slide
            layout="${t=>["single","double","triple"][Math.min(2,t.nativeAds.length-1)]}" 
            class="${t=>(0,d.s4)(t.enableSafeAds,`title-ad-${["single","double","triple"][Math.min(2,t.nativeAds.length-1)]}`)}"
        >
            ${(0,r.ux)(t=>t.nativeAds.slice(0,3),n.qy`${t=>t.nativeAdWC?oe:re}`)}
        </msft-info-pane-slide>
    </msn-info-pane-panel>
`,de=n.qy`
 <msn-info-pane-panel id="tab_panel_${t=>t.id}">
     <style>
         msft-info-pane-slide msn-hide-story-card.hide-story-card {
             padding-top: 20px;
         }
         msft-info-pane-slide msn-hide-story-card.hide-story-card fluent-button {
             width: 48%;
             margin: 0 0 8px 0;
             display: flex;
         }
         msn-hide-story-card.hide-story-card::part(content-region) {
             display: inline-flex;
             align-items: center;
             padding: 16px 16px 0px;
             cursor: default;
         }
         msn-hide-story-card.hide-story-card::part(action-region) {
             display: flex;
             position: absolute;
             padding: 0px 16px 16px;
             justify-content: space-around;
             bottom: 0px;
             width: 100%;
             box-sizing: border-box;
             align-items: center;
             margin: 0;
         }
     </style>
     <msft-info-pane-slide>
         ${C.u}
     </msft-info-pane-slide>
 </msn-info-pane-panel>
`,ce=n.qy`
<msn-info-pane-panel id="tab_panel_${t=>t.id}">
    <msft-info-pane-slide>
        ${w.F}
    </msft-info-pane-slide>
</msn-info-pane-panel>
`,pe=n.qy`
<msn-info-pane-panel id="tab_panel_${t=>t.id}">
    <msft-info-pane-slide>
        ${_.X}
    </msft-info-pane-slide>
</msn-info-pane-panel>
`,ue=n.qy`
    <msn-info-pane-panel id="tab_panel_${t=>t.id}">
        <style>
            @media (prefers-color-scheme: light) {
                msft-info-pane-slide msn-hide-story-card.report-ad {
                    --neutral-foreground-rest: #2B2B2B;
                    --neutral-fill-input-rest: #FFFFFF;
                    --neutral-fill-rest: #EDEDED;
                    --neutral-fill-hover: #E5E5E5;
                    padding-top: 0px;
                    background: #FFFFFF;
                }
            }

            @media (prefers-color-scheme: dark) {
                msft-info-pane-slide msn-hide-story-card.report-ad {
                    --neutral-foreground-rest: #FFFFFF;
                    --neutral-fill-input-rest: #2B2B2B;
                    --neutral-fill-rest: #3D3D3D;
                    --neutral-fill-hover: #454545;
                    padding-top: 0px;
                    background: #2B2B2B;
                }
            }
            msft-info-pane-slide msn-hide-story-card.report-ad::part(content-region) {
                flex-direction: row;
                margin: 0;
                text-align: left;
                padding: 16px 16px 0px 24px;
            }
            msft-info-pane-slide msn-hide-story-card.report-ad::part(action-region) {
                display: block;
                position: static;
                margin: 26px 0px 0px 0px;
                padding: 0px 16px 16px 24px;
            }
            msft-info-pane-slide msn-hide-story-card.report-ad fluent-button {
                width: 45%;
                display: inline-block;
                margin: 34px 5px 8px;
                text-align: center;
            }
            msft-info-pane-slide msn-hide-story-card.report-ad fluent-radio {
                padding: 8px 0px 8px 0px;
                margin: 0;
                display: flex;
            }
            msft-info-pane-slide msn-hide-story-card.report-ad fluent-button::part(content) {
                text-overflow: ellipsis;
                overflow: hidden;
            }
            msft-info-pane-slide msn-hide-story-card.report-ad fluent-button::part(control) {
                width: 100%;
            }
        </style>
        <msft-info-pane-slide>
            ${T.j}
        </msft-info-pane-slide>
    </msn-info-pane-panel>
`,ge=n.qy`
    <msn-info-pane-panel id="tab_panel_${t=>t.id}">
        <style>
            @media (prefers-color-scheme: light) {
                msft-info-pane-slide msn-hide-story-card.ad-feedback-confirmation {
                    padding-top: 20px;
                    --neutral-foreground-rest: #2B2B2B;
                    --neutral-fill-input-rest: #FFFFFF;
                    --neutral-fill-rest: #EDEDED;
                    --neutral-fill-hover: #E5E5E5;
                    background: #FFFFFF;
                }
            }

            @media (prefers-color-scheme: dark) {
                msft-info-pane-slide msn-hide-story-card.ad-feedback-confirmation {
                    padding-top: 20px;
                    --neutral-foreground-rest: #FFFFFF;
                    --neutral-fill-input-rest: #2B2B2B;
                    --neutral-fill-rest: #3D3D3D;
                    --neutral-fill-hover: #454545;
                    background: #2B2B2B;
                }
            }
            msft-info-pane-slide msn-hide-story-card.ad-feedback-confirmation fluent-button {
                width: 150px;
                text-align: center;
                display: block;
                margin: 54px auto 8px;
            }
            msft-info-pane-slide msn-hide-story-card.ad-feedback-confirmation fluent-button:hover {
                background: var(--button-hover-color);
            }
            msft-info-pane-slide msn-hide-story-card.ad-feedback-confirmation::part(content-region) {
                margin: 0 auto;
                text-align: center;
                padding: 110px 16px 0px 16px;
            }
            msft-info-pane-slide msn-hide-story-card.ad-feedback-confirmation::part(action-region) {
                display: block;
                position: static;
                margin: 0;
                padding: 0px 16px 16px;
            }
            msft-info-pane-slide msn-hide-story-card.ad-feedback-confirmation fluent-button::part(control) {
                width: 100%;
            }
        </style>
        <msft-info-pane-slide>
            ${F.L}
        </msft-info-pane-slide>
    </msn-info-pane-panel>
`,he=n.qy`
    <msn-info-pane-panel id="tab_panel_${t=>(0,d.s4)(t.enableSafeAds,t.id)}">
        <msft-info-pane-slide>
            ${t=>(0,N.yN)(t.denseConfigInfo,{properties:{denseData:t.denseData,telemetryObject:t.telemetryObject},memoize:!1})}
        </msft-info-pane-slide>
    </msn-info-pane-panel>
`,fe=n.qy`
    <msn-info-pane-panel id="tab_panel_${t=>t.id}">
        <msft-info-pane-slide>
            ${Xt.M}
        </msft-info-pane-slide>
    </msn-info-pane-panel>
`,be=n.qy`
 <msn-info-pane-panel id="tab_panel_${t=>(0,d.s4)(t.enableSafeAds,t.id)}">
     <msft-info-pane-slide class="no-gap">
         ${Qt.z}
     </msft-info-pane-slide>
 </msn-info-pane-panel>
`,me=n.qy`
 <msn-info-pane-panel id="tab_panel_${t=>t.id}">
     <msft-info-pane-slide class="no-gap">
         ${Zt.Q}
     </msft-info-pane-slide>
 </msn-info-pane-panel>
`,ve=n.qy`
<style>
    :host fluent-card {
        content-visibility: auto;
    }
</style>
<fluent-card style="grid-area:${t=>t.gridArea}; ${t=>t.autoRowHeights?"height: 304px;":""}"  class="${t=>t.cardSize}">
    <fluent-design-system-provider 
        fill-color="#333"
        style="height: 100%;"
    >
        <style>
            msft-content-card fluent-button::part(control) {
                padding: 0;
            }
            msn-info-pane.dense-slide msft-info-pane-slide {
                background: #fff;
            }
            msn-info-pane.dense-slide msn-info-pane-tab[id^="tab_denseCard-"][aria-selected="true"] ~ msn-info-pane-tab {
                background: #767676;
            }
            msn-info-pane.dense-slide[activeid^="tab_denseCard-"] msn-info-pane-tab {
                background: #767676;
            }
            msn-info-pane.dense-slide msn-info-pane-tab[id^="tab_denseCard-"][aria-selected="true"] {
                background: #2B2B2B;
            }
            msn-info-pane msn-info-pane-tab#tab_topStories[aria-selected="true"] ~ msn-info-pane-tab {
                background: #767676;
            }
            msn-info-pane msn-info-pane-tab#tab_topStories[aria-selected="true"] {
                background: #2B2B2B;
            }
            msn-info-pane[activeid^="tab_FreFeed"] msn-info-pane-tab {
                display: none;
            }
            @media (prefers-color-scheme: dark) {
                msn-info-pane.dense-slide.adapt-dark-mode msft-info-pane-slide {
                    background: #2b2b2b;
                }
                msn-info-pane.dense-slide.adapt-dark-mode msn-info-pane-tab[id^="tab_denseCard-"][aria-selected="true"] {
                    background: #fff;
                }
                msn-info-pane.dense-slide.adapt-dark-mode msn-info-pane-tab[id^="tab_denseCard-"][aria-selected="true"] ~ msn-info-pane-tab {
                    background: #fff;
                }
            }
        </style>
        ${p}
        <msn-info-pane id="infopane" layout="${t=>t.layout}" ?activeindicator="${t=>void 0===t.activeIndicator||t.activeIndicator}"
            data-t="${t=>{var e;return null===(e=t.telemetryContext)||void 0===e||null===(e=e.infopane)||void 0===e?void 0:e.getMetadataTag()}}"
            :nextFlipperTelemetryTag=${t=>t.telemetryContext&&t.telemetryContext.infopane&&t.telemetryContext.nextSlideArrow.getMetadataTag()}
            :previousFlipperTelemetryTag=${t=>t.telemetryContext&&t.telemetryContext.infopane&&t.telemetryContext.previousSlideArrow.getMetadataTag()}
            :previousFlipperTitle=${t=>t.infoPanePreviousFlipperTitle}
            :nextFlipperTitle=${t=>t.infoPaneNextFlipperTitle}
            style="${t=>ye(t)}"
            ?auto-scroll="${t=>t.autoRotate}"
            :autoScrollIntervalMs=${t=>t.autoRotateIntervalMs}
            ?disable-auto-scroll="${t=>t.disableAutoRotate}"
            ?enable-rotate-after-click=${t=>t.enableRotateAfterClick}
            :rotateAfterClickIntervalMs=${t=>t.rotateAfterClickIntervalMs}
            ?allow-blur-scroll="${t=>t.allowBlurScroll}"
            class="${t=>we(t)}"
            :firstAutoScrollIntervalMs=${t=>t.firstAutoRotateIntervalMs}
            ?enable-rotate-only-once=${t=>t.enableRotateOnlyOnce}
            ?rotate-prev-after-click-prev-button=${t=>t.rotateBackAfterClickPrevButton}
            ?rotate-stop-after-click-prev-button=${t=>t.rotateStopAfterClickPrevButton}
            ?enable-infopane-refactoring=${t=>t.enableInfopaneRefactoring}
            ?enable-infopane-swipe=${t=>t.enableInfopaneSwipe}
            :adTimerMap=${t=>t.adTimerMap}
            ?infopane-prominent-flipper=${t=>t.infoPaneProminentFlipper}
            ?infopane-narrow-flipper=${t=>t.infoPaneNarrowFlipper}
            ?infopane-light-flipper=${t=>t.infoPaneLightFlipper}
            :infoPaneFlipperStyle=${t=>t.infoPaneFlipperStyle}
            @mouseenter=${(t,e)=>e.event&&Ce.onMouseEnter(e.event.target,t.slideContentData&&t.slideContentData[0]&&t.slideContentData[0].enableHover)}
            @mouseleave=${(t,e)=>e.event&&Ce.onMouseLeave(e.event.target,t.slideContentData&&t.slideContentData[0]&&t.slideContentData[0].enableHover)}
        >
            ${(0,r.ux)(t=>t.slideContentData,Yt)}
            ${(0,r.ux)(t=>t.slideContentData,n.qy`${t=>$e(t)}`,{positioning:!0})}
        </msn-info-pane>
    </fluent-design-system-provider>
</fluent-card>
`,ye=t=>t.cardSize===y.uE._2x_2y||t.cardSize===y.uE._2x_3y?" --heading-font-size: 20px; --heading-line-height: 28px;":"",$e=t=>{const e=0!==(t.cardActionStatus&L.J.hide)||!!t.enableHideStoryFeedback&&(0!==(t.cardActionStatus&L.J.showFewer)||0!==(t.cardActionStatus&L.J.hidden));return"top-stories-card"===t.childTemplateType?be:"article-fre-card"===t.childTemplateType?me:"dense-card"===t.childTemplateType?he:t.isNativeAd?se:t.showAdFeedback?t.cardActionStatus&L.J.hidden?pe:t.cardActionStatus&L.J.adFeedbackSubmitted?ge:ue:"tabbed-infopane-card"===t.childTemplateType?fe:e?t.enableHideStoryFeedback&&t.cardSize!==y.uE._2x_3y?t.cardActionStatus&L.J.hidden?pe:ce:de:t.useArticleCardTemplate&&t.cardSize!==y.uE._2x_3y?t.isAnaheimDesign?Kt:te:ee},xe=t=>{const e=[];return t.isNarrowTitleFooterGap&&e.push("narrowTitleGap"),t.hasAnyInlineDecoration&&e.push("hasInlineDecoration"),t.videoProps&&e.push("nativeAdVideo-infopane"),e.join(" ")},ke=(t,e)=>{t.template&&t.template.progressiveDisplay&&t.hoverState&&t.hoverState.isHovered!==e&&(t.hoverState.isHovered=e)},Ce=new $.w,we=t=>{let e="";return t.enableDenseSlide&&(e+="dense-slide"),t.enableAdaptDarkMode&&(e+=" adapt-dark-mode"),[qt.o.LightStyle2,qt.o.LightDefault,qt.o.LightNarrow,qt.o.LightLarge,qt.o.LightWide].includes(t.infoPaneFlipperStyle)&&(e+=" light"),e},_e=(t,e,i)=>{const{enableNativeAdCTALearnMoreInfopane:n,enableNativeAdCTAOpenInfopane:a,templateType:r}=t||{};return["msn-call-to-action-v3","msn-call-to-action-v3-pa"].includes(r)?ie:n&&1===(null==i?void 0:i.length)?ne(null==e?void 0:e.nativeAdLearnMoreText):a&&1===(null==i?void 0:i.length)?ne(null==e?void 0:e.nativeAdOpenText):c}},96016:function(t,e){"use strict";e.A='<svg width="20" height="20" viewBox="0 0 20 20"><path d="M12.35 15.85a.5.5 0 0 1-.7 0L6.16 10.4a.55.55 0 0 1 0-.78l5.49-5.46a.5.5 0 0 1 .7.7L7.2 10l5.16 5.15c.2.2.2.5 0 .7Z"/></svg>'},96260:function(t,e,i){"use strict";i.d(e,{Ed:function(){return h},h3:function(){return g},Gs:function(){return f},aK:function(){return b},dR:function(){return y}});var n=i(68136),a=i(5291),r=i(37302),o=i(31023),l=i(64003),s=i(356),d=i(47691),c=i(95239),p=i(24256);const{create:u}=n.G,g=u("gradient-white-fill").withDefault(t=>(0,p.u)(.8,1,a.q.create(1,1,1),t(r.F7))),h=u("gradient-background-fill").withDefault(t=>(0,p.u)(0,1,null,t(r.F7))),f=u("neutral-fill-bubble-on-rest").withDefault(t=>function(t,e){const i=t.closestIndexOf(e);return t.get(i-5)}(t(o.r),t(r.F7))),b=u("neutral-foreground-hint-on-bubble-on-rest").withDefault(t=>t(l.g).evaluate(t,t(f)));function m(t,e,i){return t.get(t.closestIndexOf(function(t){return a.q.create(t,t,t)}(e))-i)}const v=u({name:"neutral-layer-card-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>m(t(o.r),t(s.l),t(d.E))}),y=u("neutral-layer-card").withDefault(t=>t(v).evaluate(t)),$=u("neutral-fill-bubble-rest-delta",6),x=u("neutral-fill-bubble-hover-delta",9);u("neutral-fill-bubble-rest",t=>{const e=t(o.r),i=e.closestIndexOf(t(c.p)),n=i>=10?-1:1;return e.get(i+n*t($))}),u("neutral-fill-bubble-hover",t=>{const e=t(o.r),i=e.closestIndexOf(t(c.p)),n=i>=10?-1:1;return e.get(i+n*t(x))})},97091:function(t,e,i){"use strict";i.d(e,{L9:function(){return s},M:function(){return l}});var n=i(96950),a=i(39957),r=i(11622);const o=n.qy`
<fluent-tab id="tab_panel_${t=>t.id}" data-t=${t=>{var e;return null===(e=t.tabTelemetry)||void 0===e?void 0:e.getMetadataTag()}} aria-label=${t=>t.tabLabel}>${t=>t.tabLabel}</fluent-tab>
<fluent-tab-panel data-t=${t=>{var e;return null===(e=t.tabTelemetry)||void 0===e?void 0:e.getMetadataTag()}}>
${t=>(0,r.yN)(t.denseConfigInfo,{properties:{denseData:t.denseData,telemetryObject:t.telemetryObject},memoize:!1})}
</fluent-tab-panel>
`,l=n.qy`
<style>
    .tabbed-infopane {
        background: #fff;
        height: 304px;
    }
    .tabbed-infopane fluent-tabs {
        background: #E5E5E5;
    }
    .tabbed-infopane fluent-tab-panel {
        padding: 0px;
    }
    .tabbed-infopane fluent-tab {
        color: #222222;
        font-size: 14px;
        font-family: "Segoe UI", Arial, Sans-Serif;
        font-weight: 400;
        align-items: center;
        line-height: 20px;
        background: #E5E5E5;
        text-align: center;
        padding: 8.2px;
        border-radius: 0px 0px 0px 0px;
    }
    /* Change selected tab's design */
    .tabbed-infopane fluent-tab[aria-selected="true"] {
        background-color: #fff;
        color: rgba(0, 0, 0, 0.83);
        font-weight: 700;
        border-radius: 6px 6px 0px 0px;
        box-shadow: 0px -2.02314px 4.0462px rgba(0, 0, 0, 0.05);
    }
    /* Show underline when hovering unselected tabs */
    .tabbed-infopane fluent-tab[aria-selected="false"]:hover {
        text-decoration: underline;
    }
    /* Change dense-card's design for tabbed-infopane */
    .tabbed-infopane dense-card::part(dense-card-part) {
        margin-top: 0px;
        background: #fff;
    }
    /* Disable fluent-tabs' active-indicator */
    .tabbed-infopane fluent-tabs::part(active-indicator) {
        display: none;
    }

    @media (prefers-color-scheme: dark) {
        .tabbed-infopane.adapt-dark-mode {
            background: #424242;
        }
        .tabbed-infopane.adapt-dark-mode fluent-tabs {
            background: #757575;
        }
        .tabbed-infopane.adapt-dark-mode fluent-tab {
            color: #FFFFFF;
            background: #757575;
        }
        .tabbed-infopane.adapt-dark-mode fluent-tab[aria-selected="true"] {
            background-color: #424242;
            color: #FFFFFF;
        }
        .tabbed-infopane.adapt-dark-mode dense-card::part(dense-card-part) {
            background: #424242;
        }
    }
</style>
<div class="${t=>d(t)}"
     data-t="${t=>{var e;return null===(e=t.telemetryContext)||void 0===e||null===(e=e.tabbedInfopane)||void 0===e?void 0:e.getMetadataTag()}}">
    <fluent-tabs orientation="horizontal">
        ${(0,a.ux)(t=>t.slideContentData,o,{positioning:!0})}
    </fluent-tabs>
</div>
`,s=n.qy`
<style>
    :host fluent-card {
        content-visibility: auto;
    }
</style>
<fluent-card style="grid-area:${t=>t.gridArea}; ${t=>t.autoRowHeights?"height: 304px;":""}"  class="${t=>t.cardSize}">
    <fluent-design-system-provider 
        fill-color="#333"
        style="height: 100%;"
    >
    ${l}
    </fluent-design-system-provider>
</fluent-card>
`,d=t=>{let e="tabbed-infopane";return t.enableAdaptDarkMode&&(e+=" adapt-dark-mode"),e}},97366:function(t,e,i){"use strict";i.d(e,{p:function(){return s}});var n=i(77246),a=i(96950),r=i(69685),o=i(11622);const l=a.qy`
    ${(t,e)=>{const i=function(t){if("{}"===t.cardMetadata)return t.cardLayout;return"_1x_1y"===t.cardSize?"half":"_1x_2y"===t.cardSize?"full":"_1x_3y"===t.cardSize?"large":t.cardLayout}(t),a={cardSize:i,openLinksInNewTab:t.openLinksInNewTab,cardMetadata:t.cardMetadata,wpoMetadata:t.wpoMetadata,parentTelemetry:t.parentTelemetryObject,sdCardActionClickHandler:t.sdCardActionClickHandler,hideWeatherCardCallback:t.hideWeatherCardCallback,goToPersonalizeSettingsCallback:t.goToPersonalizeSettingsCallback,dismissActionMenu:t.dismissSDCardMenuCallback,refreshSDCardSection:t.refreshSDCardSection,supportedSdCardActionMenuItems:t.supportedSdCardActionMenuItems,refreshFeed:t.refreshFeed,visualReadinessCallback:t.visualReadinessCallback,hasLoadedCallback:t.hasLoadedCallback,isDynamicFeed:t.isDynamicFeed,isSpotlightUX:t.isSpotlightUX,cardLayout:t.activeBoard,previewType:t.previewType,isProngReclaim:t.isProngReclaim,isWidgetRegion:t.isWidgetRegion,onSDCardClick:t.onSDCardClick},l={cardSize:i,style:`grid-area:${t.gridArea};contain:unset;content-visibility:visible`};return t.weatherCardConfigInfo?(0,o.yN)(t.weatherCardConfigInfo,{properties:a,attributes:l,memoize:(0,r.QC)()&&!(0,n.S)()}):void 0}}
`,s=a.qy`
    ${l}
`},99751:function(t,e,i){"use strict";i.d(e,{s:function(){return s}});var n=i(56911),a=i(92011),r=i(38493),o=i(35106),l=i(88458);class s extends a.L{}(0,n.Cg)([(0,r.CF)({mode:"boolean"}),(0,n.Sn)("design:type",Boolean)],s.prototype,"disabled",void 0),(0,l.X)(s,o.qw)},99758:function(t,e,i){"use strict";i.d(e,{Q:function(){return M}});var n=i(56911),a=i(92011);const r=i(74849).A` msft-article-card.mobile,msft-article-card.mobile *{-webkit-tap-highlight-color:transparent;outline:none;-ms-touch-action:manipulation;touch-action:manipulation}.card-button{border-radius:100%}msft-article.vertical-gradient::part(text){margin-bottom:0px;height:148px;padding:12px calc(var(--msft-article-padding) * 1px) 16px}@media (forced-colors:active){.card-button{background:none}msn-social-bar::part(button-bg),msn-social-bar::part(reactions-count-button),msn-social-bar::part(comments-count-button){color:buttontext;background-color:buttonface}msn-social-bar::part(button-bg):hover,msn-social-bar::part(button-bg):focus-visible,msn-social-bar::part(reactions-count-button):hover,msn-social-bar::part(reactions-count-button):focus-visible,msn-social-bar::part(comments-count-button):hover,msn-social-bar::part(comments-count-button):focus-visible{color:buttonface;background-color:highlight}}msft-article span.title_1x_2y,msft-article span.title_2x_2y{font-size:20px}msft-article.no-image::part(heading){font-size:var(--msft-article-heading-font-size,20px);line-height:var(--msft-article-heading-line-height,28px)}msft-article-card[size="_1x_2y"] msft-article.no-image msft-attribution{margin-bottom:18px}msft-article.long-gradient::part(gradient){top:-55px}msft-article-card[size="_1x_2y"] .video-card-embed{position:relative}msft-article-card[size="_2x_2y"] .video-card-embed{position:relative}msft-article-card[size="_1x_2y"] msft-article.videocard .video-card-embed .hover-mask{display:none;width:100%;height:79px;background:var(--fill-color);position:absolute;bottom:0px;z-index:10}msft-article-card[size="_1x_2y"] msft-article.videocard.videocard-hover .video-card-embed .hover-mask{display:block}msft-article-card msft-article.hide-non-image::part(text),msft-article-card msft-article.hide-non-image::part(hide-story-wrapper){display:none}msft-article-card[size="_2x_2y"].contentCard msft-article.vertical-gradient::part(heading){line-height:var(--heading-line-height,28px)}msft-article-card[size="_2x_2y"].contentCard msft-article.vertical-gradient:not(.no-image)::part(heading){margin-bottom:40px}msft-article-card[size="_2x_2y"].contentCard msft-article.vertical-gradient:not(.no-image)::part(gradient){background:linear-gradient( 180deg,transparent 0%,var(--gradient-mid-color) 62.5%,var(--gradient-color) 100% );width:100%}msft-article-card[size="_2x_2y"].contentCard msft-article.vertical-gradient:not(.no-image)::part(text){height:auto;width:100%}msft-article-card[size="_2x_2y"].contentCard msft-article.vertical-gradient:not(.no-image)::part(attribution){display:flex;align-self:end}msft-article-card[size="_2x_2y"].contentCard msft-attribution{margin-bottom:8px}msft-article div.infopane-like-end-actions{display:flex}.video-play-button-container{border-radius:50%;display:block;height:40px;left:50%;opacity:1;padding:0;position:absolute;top:50%;transform:translate(-50%,-50%);transition:all 0.4s ease 0s;width:40px}.video-play-button{align-items:center;display:flex;height:100%;justify-content:center;width:100%}.video-experience-placeholder{background:0px 0px rgba(0,0,0,0.6);display:block;left:0;position:relative;top:0;z-index:1}msft-article-card[size="_2x_2y"].no-gradient .video-experience-placeholder{height:304px}.video-experience-placeholder.hidden{z-index:0;opacity:0}.video-experience-container{position:absolute;right:0px;top:0px;z-index:0}msft-article-card.mobile msft-article::part(image){width:100%;opacity:1}msft-article-card.mobile msft-article::part(text){margin-bottom:-6px;padding-top:0}msft-article-card.mobile .infopane-like-end-actions{border-radius:50%;border:none;background-color:transparent;fill:var(--neutral-foreground-rest);margin-top:0px;margin-inline:4px -5px}msft-article-card.mobile .infopane-like-start-actions{height:32px;margin-inline-start:-8px}msft-article-card.mobile msft-article::part(heading){fill:currentcolor;display:-webkit-box;outline:0px;overflow:hidden;text-decoration:none;-webkit-line-clamp:3;-webkit-box-orient:vertical;font-weight:600;height:72px;margin-bottom:10px}msft-article-card.mobile msft-article .heading-title-content{font-size:18px !important;line-height:24px !important}msft-article-card.mobile msft-article .video-experience-placeholder{height:170px;overflow:hidden}msft-article-card.mobile msft-article msft-attribution{margin-bottom:8px}`;var o=i(79765),l=i(81109),s=i(930),d=i(51675),c=i(26863),p=i(43156),u=i(17967),g=i(96950),h=i(91640),f=i(39957),b=i(18750),m=i(30216),v=i(11622);const y=(t,e)=>{if(globalThis.videoCards||(globalThis.videoCards={}),globalThis.videoCards[t.id])return globalThis.videoCards[t.id];{const i=`${t.cardSize} vertical_gradient`,n=(0,v.yN)(t.videoCardConfigInfo,{memoize:!1,properties:{id:t.id,context:{cardData:t,customStyleClass:i,eventsCallback:e.parent.eventsCallback,previewEndCallback:e.parent.previewEndCallback}}});return globalThis.videoCards[t.id]=n,n}},$=t=>{let e;if(t.disableColorSampling)e=(0,b.ud)()?"#333":"#FFF";else if(t.enableFeedSuperCardsSingleColor)e=(0,b.ud)()||(0,b.r0)(t)?"#292929":"#FFFFFF";else{var i;e=null===(i=t.articleCardBackgroundColor)||void 0===i||null===(i=i.find(e=>e.isDarkMode===((0,b.ud)()||(0,b.r0)(t))))||void 0===i?void 0:i.hexColor}return e},x=g.qy`<div><span class="video-play-button-container"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" slot="icon"><g filter="url(#filter0_b_1234_35012)"><circle cx="20" cy="19.9991" r="19" fill="url(#paint0_linear_1234_35012)" /><circle cx="20" cy="19.9991" r="19.5" stroke="url(#paint1_linear_1234_35012)" /></g><path d="M27.2221 18.6837C28.2586 19.2535 28.2586 20.7429 27.2221 21.3127L17.2226 26.8096C16.2229 27.3591 15 26.6359 15 25.4951L15 14.5013C15 13.3605 16.2229 12.6373 17.2226 13.1868L27.2221 18.6837Z" fill="white" /><defs><filter id="filter0_b_1234_35012" x="-10" y="-10.0009" width="60" height="60" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix" /><feGaussianBlur in="BackgroundImage" stdDeviation="5" /><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1234_35012" /><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1234_35012" result="shape" /></filter><linearGradient id="paint0_linear_1234_35012" x1="1" y1="0.999146" x2="39" y2="38.9991" gradientUnits="userSpaceOnUse"><stop stop-opacity="0.5" /><stop offset="1" stop-opacity="0.7" /></linearGradient><linearGradient id="paint1_linear_1234_35012" x1="20" y1="0.999146" x2="20" y2="38.9991" gradientUnits="userSpaceOnUse"><stop stop-color="white" stop-opacity="0.4" /><stop offset="1" stop-color="white" stop-opacity="0.2" /></linearGradient></defs></svg></span><img alt="${t=>t.imageData&&t.imageData.altText}" src="${t=>t.imageData&&t.imageData.source}" height="${t=>t.imageData&&k(t)}" width="${t=>t.imageData&&t.imageData.imageWidth}" @load="${(t,e)=>{t.imageData&&t.imageData.visualReadinessCallback&&t.imageData.visualReadinessCallback(3,o.j.image),e.parent.setPlaceholderRendered()}}" @error="${(t,e)=>{t.imageData&&t.imageData.source&&e.parent.error(t.imageData.source)}}" /></div>`,k=t=>{if(t.useMobile){const{imageHeight:e}=t.displaySettings;return document.body.style.setProperty("--displaySettingsImageHeight",`${e}px`),e}return t.imageData.imageHeight},C=g.qy`<div slot="image" class="video-card-embed" style="height: ${t=>t.imageData.imageHeight}px; position: relative; z-index: 0; overflow: hidden;"><div class="hover-mask"></div><div class="video-experience-placeholder ${(t,e)=>e.parent.playerPlaying?"hidden":""}" style="${t=>`height: ${k(t)}px`}">${x}</div><div class="video-experience-container">${(0,h.z)((t,e)=>e.parent.placeholderRendered,y)}</div></div>`,w=g.qy`<fluent-card class="${t=>t.cardSize}">${(t,e)=>y(t,e)}</fluent-card>`,_=g.qy`<style>msft-article-card[size$="x_2y"] msft-article::part(heading):after { top: calc(100% - ${t=>t.fixedCardHeight?304:292+(t.layoutGap||12)}px - 8px) !important;
} msft-article::part(text) { margin-bottom: -8px;
} msft-article-card[size="_1x_2y"] msft-article:not(.no-image)::part(gradient) { top: -29px; bottom: ${t=>t.fixedCardHeight?78:66+(t.layoutGap||12)}px;
} msft-article.no-image::part(actions) { bottom: calc(var(--msft-article-padding) * 1px - 8px);
}</style><msft-article-card size="${t=>t.cardSize}" card-fill-color="${t=>$(t)}" class="contentCard no-gradient ${t=>t.useMobile?"mobile":""}" data-badge-type="${t=>t.badge&&t.badge.type}" style="${t=>(t=>t.useMobile?`--card-height:${t.displaySettings.cardHeight}px;--card-width:${t.displaySettings.cardWidth}px`:"")(t)}"><msft-article id="contentcard_${t=>t.id}" href=${t=>t.destinationUrl} target="_blank" title=${t=>t.disableCardTitleTooltip?"":t.title} style="--heading-max-lines: 2;" class="vertical-gradient ${(t,e)=>e.parent.useVideoTemplate?"videocard":""} ${(t,e)=>e.parent.isHoverVideo?"videocard-hover":""} ${(t,e)=>e.parent.useVideoTemplate&&!e.parent.isHoverVideo?"hide-non-image":""}" data-t="${t=>t.telemetryContext&&t.telemetryContext.contentCard&&t.telemetryContext.contentCard.getMetadataTag()}" :anchorTelemetryTag=${t=>t.telemetryContext&&t.telemetryContext.destination&&t.telemetryContext.destination.getMetadataTag()} @mouseover="${(t,e)=>e.parent.mouseenterHandler&&e.parent.mouseenterHandler(e.event)}" @mouseleave="${(t,e)=>e.parent.mouseleaveHandler&&e.parent.mouseleaveHandler(e.event)}" @click="${(t,e)=>e.parent.clickHandler(t,e)}">${(0,h.z)(t=>t.providerData,g.qy`<msft-attribution slot="${t=>t.isProviderInFooter?"start-actions":"attribution"}" style="${t=>t.isProviderInFooter?"gap:0":""}">${(0,l.mt)()}<div class="attribution_container_${t=>t.id}" id="attribution_container"><div class="attribution_Content_${t=>t.id}" style="${t=>"rtl"===t.dir?"right":"left"}:0px;">${(0,h.z)(t=>t.providerData&&t.providerData.name&&!t.isProviderIconClickable,g.qy`<span style="unicode-bidi: embed;">${t=>t.providerData.name}</span>`)} ${(0,h.z)(t=>t.providerData&&t.providerData.name&&t.publishedDateTime,g.qy` · `)} ${(0,h.z)(t=>t.publishedDateTime,g.qy`<span style="unicode-bidi: embed;">${t=>t.publishedDateTime}</span>`)} ${(0,h.z)(t=>t.isWebContent&&t.crawledContentLabel,g.qy` · `)} ${(0,h.z)(t=>t.isWebContent&&t.crawledContentLabel,g.qy`${t=>t.crawledContentLabel}`)}</div></div></msft-attribution>`)} ${(0,h.z)((t,e)=>!e.parent.isPreviewable(t.metadata),g.qy`<div slot="image" class="video-card-embed" style="height: ${t=>t.imageData&&t.imageData.imageHeight}px; position: relative; z-index: 0; overflow: hidden;">${x}</div>`)} ${(0,h.z)((t,e)=>e.parent.isPreviewable(t.metadata),C)} ${(0,h.z)(t=>t.feedFontSize,g.qy` ${(0,h.z)(t=>(t.cardSize===s.uE._1x_2y||t.cardSize===s.uE._1x_1y)&&t.imageData,g.qy`<span class="heading-title-content" style="font-size: ${t=>t.feedFontSize}px; ${t=>t.headingLineHeight?`line-height: ${t.headingLineHeight}px`:""}">${t=>t.title}</span>`)} ${(0,h.z)(t=>t.cardSize===s.uE._2x_2y,g.qy`<span style="font-size: ${t=>t.twoColumnFeedFontSize||t.largeFeedFontSize||t.feedFontSize}px; ${t=>t.twoColumnHeadingLineHeight?`line-height: ${t.twoColumnHeadingLineHeight}px`:""}">${t=>t.title}</span>`)} ${(0,h.z)(t=>(t.cardSize===s.uE._1x_2y||t.cardSize===s.uE._1x_1y)&&!t.imageData,g.qy`<span style="font-size: ${t=>t.noImageFeedFontSize||t.feedFontSize}px;">${t=>t.title}</span>`)} `)} ${(0,h.z)(t=>!t.feedFontSize,g.qy` ${(0,h.z)(t=>!t.useLargeFontSize,g.qy`${t=>t.title}`)} ${(0,h.z)(t=>t.useLargeFontSize,g.qy`<span class="title${t=>t.cardSize}">${t=>t.title}</span>`)} `)} ${(0,h.z)(t=>t.badge&&t.cardSize!==s.uE._1x_1y,t=>(0,d.w)(t.badge,!0,!1))}<div slot="start-action" class="infopane-like-start-actions">${(0,h.z)(t=>t.providerData&&t.enableInfopaneLike2cCard&&t.cardSize===s.uE._2x_2y,l.QQ)} ${(0,h.z)(t=>(!t.enableInfopaneLike2cCard||t.cardSize!==s.uE._2x_2y)&&(!t.isAnaheimDesign||t.enableRichSocialReaction),g.qy` ${(0,h.z)(t=>t.enableRichSocialReaction&&!t.isLauncher,t=>(0,c.nj)({theme:t.useMobile&&!t.isMsnMobile&&"superappDefaultNewFeed",hideComments:t.useMobile&&!t.isMsnMobile}))} ${(0,h.z)(t=>t.cardActionStatus&m.J.enabled&&!t.enableRichSocialReaction,g.qy` ${c.LW} ${(0,h.z)(t=>!(t.cardActionStatus&m.J.showMore),c.tB)} `)} `)}</div><div slot="end-action" class="infopane-like-end-actions">${(0,h.z)(t=>t.enableRichSocialReaction&&t.enableInfopaneLike2cCard&&t.cardSize===s.uE._2x_2y,(0,c.nj)({}))} ${(0,h.z)(t=>t.cardActionStatus&m.J.enabled,g.qy` ${(0,h.z)(t=>t.enableRichSocialReaction,g.qy` ${(0,h.z)(t=>!t.optedOutOfReactions&&t.cardActionStatus&m.J.showMore,c.LW)} ${(0,h.z)(t=>!t.optedOutOfReactions&&t.cardActionStatus&m.J.showFewer,c.tB)} `)} ${(0,h.z)(t=>!1!==t.enableWCCardAction&&!t.isMsnMobile,p.L)} `)}</div>${(0,h.z)(t=>!t.disableHideOnHover&&t.cardActionStatus&m.J.enabled,u.C)}</msft-article></msft-article-card>`,T=g.qy`${(t,e)=>e.parent.selectTemplate()}`,F=g.qy` ${(0,f.ux)(t=>[t.cardData],T)}
`;var S=i(38493),D=i(60815),A=i(83003),z=i(1732),I=i(93468),E=i(65022);class B extends a.L{constructor(){super(...arguments),this.placeholderRendered=!1,this.shouldRenderVideo=!0,this.playerPlaying=!1,this.playingCallbackRegistered=!1,this.mouseenterHandler=t=>{this.showCardInfoWhenHover&&this.useVideoTemplate&&(this.isHoverVideo=!0)},this.mouseleaveHandler=t=>{this.showCardInfoWhenHover&&(this.isHoverVideo=!1)},this.previewEndCallback=t=>{this.useVideoTemplate=!t},this.setPlaceholderRendered=()=>{this.shouldRenderVideo&&(this.placeholderRendered=!0)},this.eventsCallback=(t,e)=>{this.playerPlaying||this.playingCallbackRegistered||"play"!==e||(this.playingCallbackRegistered=!0,t.one("playing",()=>{this.playerPlaying=!0}))}}connectedCallback(){super.connectedCallback(),(0,z.h_)()&&(this.shouldRenderVideo=!1)}selectTemplate(){return void 0===this.previewVideo?w:_}isPreviewable(t){return!!this.previewVideo&&(t&&t.videoFiles&&0!==t.videoFiles.length)}clickHandler(t,e){return!(t.useMobile&&!t.isMsnMobile)||(t.mobileCardClickCallback(e.event,A.pL.Video,t,"video card"),!1)}error(t){(0,I.vV)(E.FPh,"Error fetching source","Source: "+t)}}(0,n.Cg)([(0,S.CF)({attribute:"preview-video",mode:"boolean"})],B.prototype,"previewVideo",void 0),(0,n.Cg)([D.sH],B.prototype,"cardData",void 0),(0,n.Cg)([D.sH],B.prototype,"isHoverVideo",void 0),(0,n.Cg)([D.sH],B.prototype,"useVideoTemplate",void 0),(0,n.Cg)([D.sH],B.prototype,"placeholderRendered",void 0),(0,n.Cg)([D.sH],B.prototype,"playerPlaying",void 0),(0,n.Cg)([D.sH],B.prototype,"showCardInfoWhenHover",void 0);let L=class extends B{};L=(0,n.Cg)([(0,a.E)({name:"msn-video-card",template:F,styles:r})],L);const M=g.qy`
    <msn-video-card
        class="${t=>t.cardSize}"
        style="grid-area:${t=>t.gridArea}"
        :cardData=${t=>t}
        :showCardInfoWhenHover=${t=>t.showCardInfoWhenHover}
        preview-video=${t=>t.useVideoPreviewTemplate}
    >
    </msn-video-card>
`}}]);