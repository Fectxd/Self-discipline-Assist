(self.homePageWebpackChunks=self.homePageWebpackChunks||[]).push([["web-components_super-container_dist_register_CsFeedInfopane28Module_js"],{759:function(e,t,a){"use strict";a.d(t,{W:function(){return s}});var i=a(96950),n=a(60402),r=a(30216),o=a(91278);const l={_1x_2y:"1u",_2x_2y:"_2x_2y",_1x_1y:"0.5u"},s=i.qy`
<cs-responsive-card
    ad=true
    ${(0,o.Ib)(!1,!0)}
    ?ad-va="${e=>e.adVA}"
    ?ad-va2="${e=>e.adVA2}"
    ?ruby-va="${e=>e.enableRubyVerticalAds&&e.adVA2}"
    :adAttributes=${e=>e.adAttributes}
    :abstract=${e=>e.abstract}
    ad-dts-template-name="${e=>e.adDtsTemplateName}"
    ad-dts-style-key="${e=>e.adDTSStyleKey}"
    :adDTSTemplateConfig=${e=>e.adDTSTemplateConfig}
    :adDTSComponentDataMap=${e=>e.adDTSComponentDataMap}
    ?use-ad-dts-template=${e=>e.shouldUseAdDTSTemplate}
    :attributionData=${e=>e.attributionData}
    :adSelectionCriteria=${e=>e.adSelectionCriteria}
    :badgeProps="${e=>e.badgeProps}"
    :callToAction="${e=>e.callToAction}"
    :data="${e=>e}"
    data-t="${e=>{var t;return e.id?null===(t=e.adTelemetryContext)||void 0===t||null===(t=t.nativeAdCard)||void 0===t?void 0:t.getMetadataTag():""}}"
    :heading="${e=>e.title}"
    ?hide-card-actions="${e=>e.hideCardActions||!e.feedbackUrl}"
    :href="${e=>e.destinationUrl}"
    :href_adButton="${e=>e.privacyUrl}"
    :href_adChoiceButton="${e=>e.adChoiceIconUrl}"
    id="${e=>e.id}"
    ?immersive="${e=>!(!("_2x_2y"==e.cardSize||"_1x_2y"==e.cardSize&&e.immersiveCard)||e.isIntraNativeAd)||void 0}"
    :intraArticle=${e=>e.isIntraNativeAd}
    :mediaData=${e=>e.mediaData}
    media-type="${e=>{var t;return null!==(t=e.imageData)&&void 0!==t&&t.source?"image":""}}"
    @mouseenter="${(e,t)=>e.mouseEnterCallback(t.event.currentTarget)}"
    @mouseleave="${(e,t)=>e.mouseLeaveCallback(t.event.currentTarget)}"
    :onClickLink="${e=>e.onClickLink}"
    :onClickCardActions="${e=>e.toggleCardActionMenu}"
    :onRightClick="${e=>e.toggleCardActionMenu}"
    :onClickHideCard="${(e,t)=>()=>e.cardActionClickHandler&&e.cardActionClickHandler(e.id,e.cardActionStatus^r.J.hide^r.J.hidden,"Hide",!0,null,null,null,t.event,null,"hidestory-button")}"
    :popoverData="${e=>e.popoverData}"
    size="${e=>l[e.cardSize]||e.cardSize}"
    style="grid-area:${e=>e.gridArea}; ${e=>e.isIntraNativeAd?"max-width:740px;margin-inline:auto;":""}"
    target="${e=>e.openLinksInCurrentTab?"_self":"_blank"}"
    :telemetryObject_card="${e=>{var t;return null===(t=e.adTelemetryContext)||void 0===t?void 0:t.nativeAdCard}}"
    :telemetryTag_adButton="${e=>{var t;return null===(t=e.adTelemetryContext)||void 0===t||null===(t=t.adLabel)||void 0===t?void 0:t.getMetadataTag()}}"
    :telemetryTag_adChoiceButton="${e=>{var t;return null===(t=e.adTelemetryContext)||void 0===t||null===(t=t.adChoice)||void 0===t?void 0:t.getMetadataTag()}}"
    :telemetryTag_anchor="${e=>{var t;return null===(t=e.adTelemetryContext)||void 0===t||null===(t=t.destination)||void 0===t?void 0:t.getMetadataTag()}}"
    :telemetryTag_moreActions="${e=>{var t;return null===(t=e.adTelemetryContext)||void 0===t||null===(t=t.seeMore)||void 0===t?void 0:t.getMetadataTag()}}"
    :telemetryTag_adDisclaimerButton="${e=>{var t;return null===(t=e.adTelemetryContext)||void 0===t||null===(t=t.adDisclaimer)||void 0===t?void 0:t.getMetadataTag()}}"
    :telemetryTag_callToAction="${e=>{var t;return null===(t=e.adTelemetryContext)||void 0===t||null===(t=t.callToAction)||void 0===t?void 0:t.getMetadataTag()}}"
    :telemetryTag_undoHide="${e=>{var t;return null===(t=e.adTelemetryContext)||void 0===t||null===(t=t.cancelButton)||void 0===t?void 0:t.getMetadataTag()}}"
    title="${e=>e.title}"
    :visualReadinessCallback="${e=>e.visualReadinessCallback}"
    ?wide="${e=>"_2x_2y"==e.cardSize||void 0}"
    ?ruby="${e=>e.ruby}"
    ?loading="${e=>e.loading}"
    ${(0,n.K)("cardElement")}
></cs-responsive-card>`},1150:function(e,t,a){"use strict";a.d(t,{cv:function(){return g},gF:function(){return k},q2:function(){return S}});var i=a(35594),n=a(57290),r=a(759),o=a(4670),l=a(98216),s=a(11372),d=a(96950),c=a(60402),$=a(91640),p=a(39957),u=a(59646),v=a(30216);const h=d.qy` ${(0,$.z)(e=>e.enableImmersiveInfopane,d.qy`${i.L}${n.B}`)} ${(0,$.z)(e=>!e.enableImmersiveInfopane,d.qy`${i.s}${n.W}`)} `,f=new WeakMap,g=d.qy`${(0,$.z)(e=>e.data,d.qy`${(0,p.ux)(e=>[e.data],d.qy`<cs-card class="infopaneCardWrapper ${(e,t)=>t.parent.config.isFeeds3||t.parent.config.responsiveWidth?"feeds3-new-height":""}" size="${e=>e.cardSize}" card-fill-color="${e=>e.cardFillColor}" gradient-angle="${e=>e.gradientAngle}" ?dwf-height="${(e,t)=>t.parent.config.use324HeightIfp&&t.parent.config.enableDynamicWaterfall}" ${(0,c.K)("outerCSCard")}><cs-responsive-infopane class="infopane mid-button ${e=>e.disableNavAnimation?"no-nav-anim":""} ${e=>e.enableImmersiveInfopane?"immersive-infopane":""} ${e=>e.enableFlippersOnRest?"show-flippers":""} ${e=>e.enableTransparentFlippersOnRest?"tsp-flippers":""}" duration="${e=>e.rotationDuration}" media-controls="${e=>e.enablePlayPauseButton}" navigation-position="${e=>e.navPosition}" :enableSingleRotation="${e=>e.enableSingleRotation}" :hasSlideShow="${e=>e.enableSlideShow}" :parentContentId="${e=>e.cardData.parentContentId}" size="${e=>e.cardSize}" tab-count=${e=>e.tabCount} transition-strategy=${e=>e.enableIpTransform?"transform":"position"} :restartRotationTimer="${e=>e.restartRotationTimer}" :wpoRotationDuration="${e=>e.wpoRotationDuration}" data-t="${e=>{var t;return null===(t=e.telemetryContext)||void 0===t||null===(t=t.infopane)||void 0===t?void 0:t.getMetadataTag()}}" play-telemetry="${e=>{var t;return null===(t=e.telemetryContext)||void 0===t||null===(t=t.playTransitionButton)||void 0===t?void 0:t.getMetadataTag()}}" pause-telemetry="${e=>{var t;return null===(t=e.telemetryContext)||void 0===t||null===(t=t.pauseTransitionButton)||void 0===t?void 0:t.getMetadataTag()}}" tab-telemetry="${(e,t)=>{var a;return t.parent.config.enableInfopaneTabTelemetry&&(null===(a=e.telemetryContext)||void 0===a||null===(a=a.tabTelemetry)||void 0===a?void 0:a.getMetadataTag())}}" @mouseenter=${(e,t)=>{t.event&&T(t.event.currentTarget)}} @mouseleave=${(e,t)=>{t.event&&A(t.event.currentTarget)}} preload-panels=${e=>e.lazyInfopanePreloadCount} :enableVariableSpeed=${e=>e.cardData.enableVariableSpeed} :variableTransitionMap=${e=>e.cardData.enableVariableSpeed&&e.slideContentData.map(e=>({id:e.id,slideDuration:e.customTransitionSpeed}))} :lazyPanels=${e=>e.enableLazyInfopane?e.slideContentData.map(e=>({id:e.id,data:e})):void 0} :lazyPanelTemplate=${(e,t)=>(f.has(t.parent)||f.set(t.parent,d.qy`${e=>m(e,t.parent)}`),f.get(t.parent))} ${(0,c.K)("cardElement")}>${(0,$.z)(e=>!e.disableInfopaneFlippers,h)} ${(0,p.ux)(e=>e.enableLazyInfopane?[]:e.slideContentData,d.qy`${(e,t)=>m(e,t.parentContext.parent)}`)}</cs-responsive-infopane></cs-card>`)} `)}`,m=(e,t)=>{const a=0!==(e.cardActionStatus&v.J.hide)||!!e.enableHideStoryFeedback&&(0!==(e.cardActionStatus&v.J.showFewer)||0!==(e.cardActionStatus&v.J.hidden)),i=t.data;return e.isNativeAd?i.enableResponsiveInfopaneMap?t.config.useResponsiveAdInfopane?r.W:w:!i.disableInfopaneComplexAds&&e.nativeAds&&e.nativeAds.length>1?C:d.qy` ${(0,$.z)(e=>{var a;return t.config.enableInfopAdPlaceholder&&!(null!==(a=e.nativeAds)&&void 0!==a&&a.length)},w)} ${(0,p.ux)(e=>e.nativeAds&&e.nativeAds.slice(0,3),w)} `:e.showAdFeedback?k(e,t.cardActionTemplates):a?S(e,t.cardActionTemplates):e.isShoppingArticleCard?_:t.data.enableAutoPlayInfopaneVideos||t.data.enableResponsiveCards?o.t:y},y=d.qy`<cs-article-card-24 class="no-transition infopane-slide" :data=${e=>e}></cs-article-card-24>`,x=d.qy`<cs-native-ad-card-24-va-phase2 class="no-transition infopane-slide" inside-infopane :data=${e=>e}></cs-native-ad-card-24-va-phase2>`,b=d.qy`<cs-native-ad-card-24-default class="no-transition infopane-slide" inside-infopane :data=${e=>e}></cs-native-ad-card-24-default>`,w=d.qy` ${e=>e.enableVAPhase2?e.enableVAPhase2WithShimmer?b:x:d.qy`<cs-native-ad-card-24 class="no-transition infopane-slide" inside-infopane :data=${e=>e}></cs-native-ad-card-24>`}
`,C=d.qy`<cs-card class="adWrapper no-transition ${e=>2===e.nativeAds.length?"double":"triptych"}" size=${e=>e.cardSize} style="box-sizing: border-box; display: grid; ${e=>2===e.nativeAds.length?"grid-template-columns: 1fr 1fr;":"grid-template-columns: 1fr 1fr 1fr;"}">${(0,p.ux)(e=>e.nativeAds.slice(0,3),w)}</cs-card>`,_=d.qy`<cs-article-card-shopping class="no-transition infopane-slide" :data=${e=>e}></cs-article-card-shopping>`,z=d.qy.partial("style='height: 100%; width: 100%;'"),k=(e,t)=>e.cardActionStatus&v.J.hidden?d.qy`<div class="infopane-hide-story" ${z}>${t.hideStoryConfirmationCardTemplate}<div>`:e.cardActionStatus&v.J.adFeedbackSubmitted?d.qy`<div class="infopane-report-ad" ${z}>${t.hideStoryAdFeedbackConfirmationCardTemplate}</div>`:d.qy`<div class="infopane-report-ad" ${z}>${t.hideStoryReportAdCardTemplate}</div>`,S=(e,t)=>e.cardActionStatus&v.J.hidden?d.qy`<div class="infopane-hide-story" ${z}>${t.hideStoryConfirmationCardTemplate}<div>`:d.qy`<div class="infopane-hide-story" ${z}>${t.hideStoryFeedbackCardTemplate}</div>`,T=e=>{(0,u.kM)("SuperInfopaneCard",()=>l.YT.sendActionEvent(e,s.EG.Hover,s.MS.Open))},A=e=>{(0,u.pS)("SuperInfopaneCard",()=>l.YT.sendActionEvent(e,s.EG.MouseLeave,s.MS.Open))}},4670:function(e,t,a){"use strict";a.d(t,{t:function(){return v}});var i=a(26863),n=a(930),r=a(96950),o=a(60402),l=a(91640),s=a(30216),d=a(17254),c=a(52201),$=a(11622);const p=r.qy`
    ${e=>(0,$.yN)(e.publisherFollowButtonConfigInfo,{attributes:{slot:"following-button"},properties:{contentId:e.id,publisherName:e.providerData.name,publisherProfileId:e.providerData.profileId,profileId:e.providerData.id,getReplacementCardsCallback:e.getReplacementCardsCallback,enableFollowToast:!0,cardActionStatus:e.cardActionStatus,usingResponsiveCard:!0}})}
`,u=r.qy`
    <span slot="action-row-start">
    ${(0,l.z)(e=>e.useStatSocialTemplate,r.qy`
        <social-bar-wc
            config-instance-src=${e=>e.socialBarWCConfigInfo&&(0,c.v)(e.socialBarWCConfigInfo)}
            instance-id=${e=>e.socialBarWCConfigInfo&&e.socialBarWCConfigInfo.instanceId}
            config-shared-ns=${e=>e.socialBarWCConfigInfo&&e.socialBarWCConfigInfo.configRef&&e.socialBarWCConfigInfo.configRef.sharedNs}
            :contentId=${e=>e.id}
            :hideComments=${e=>e.hideComments||!1}
            :canShowOneLineComments=${e=>!e.isInfopane&&e.cardSize===n.uE._2x_2y}
            :destinationUrl=${e=>e.destinationUrl}
            :title=${e=>e.title}
            :imageData=${e=>e.imageData}
            :abstract=${e=>e.abstract||e.metadata&&e.metadata.abstract}
            :locale=${e=>d.T3.CurrentMarket||e.locale}
            :theme=${e=>e.socialBarTheme||"default"}
            :rootTelemetryObject=${e=>e.telemetryContext&&(e.telemetryContext.contentCardTelemetryObject||e.telemetryContext.contentCard)}
            :getReplacementCardsCallback=${e=>e.getReplacementCardsCallback}
            :reactionCallback=${e=>e.reactionCallback}
            :shareActionHandler=${e=>e.shareActionHandler}
            :cardActionHideHandler=${e=>e.cardActionClickHandler&&function(){for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return e.cardActionClickHandler(e.id,e.cardActionStatus^s.J.hide,...a)}}
            :isInfoPane=${e=>e.isInfopane}
            :socialMetadata=${e=>({...e.metadata,imageData:e.imageData,providerData:e.providerData,title:e.title})}
        ></social-bar-wc>
        `,r.qy`${e=>(0,i.nj)({theme:e.socialBarTheme,hideComments:e.hideComments})}`)}
    </span>
`,v=r.qy`
<cs-responsive-card
    :abstract=${e=>e.abstract}
    :attributionData=${e=>e.attributionData}
    :badgeProps="${e=>e.badgeProps}"
    :contentIndicator="${e=>e.renderContentIndicator}"
    :data="${e=>e}"
    :heightReadyCallback="${e=>e.heightReadyCallback}"
    :heading="${e=>e.title}"
    :href="${e=>e.destinationUrl}"
    id="${e=>e.id}"
    ?immersive="${e=>!("_2x_2y"!=e.cardSize&&("_1x_2y"!=e.cardSize&&"_1x_1y"!=e.cardSize&&"shorts"!==e.responsiveCardSize||!e.immersiveCard))||void 0}"
    :mediaData=${e=>e.mediaData}    
    media-type="${e=>e.mediaType}"
    :preventDefaultClick="${e=>e.preventDefaultClick}"
    :onClickCardActions="${e=>e.toggleCardActionMenu}"
    :onRightClick="${e=>e.toggleCardActionMenu}"
    :onClickHideCard="${(e,t)=>()=>e.cardActionClickHandler&&e.cardActionClickHandler(e.id,e.cardActionStatus^s.J.hide^s.J.hidden,"Hide",!0,null,null,null,t.event,null,"hidestory-button")}"
    :onClickLink=${(e,t)=>e.onClickLink}
    :onClickCompanionButton=${(e,t)=>e.onClickCompanionButton}
    size="${e=>e.responsiveCardSize}"
    style="${e=>e.ruby?void 0:(e=>{const t=`grid-area:${e.gridArea};`;return e.predictedHeight?`${t} --placeholder-intrinsic-height: ${e.predictedHeight-32}px;`:t})(e)}"
    :rubySocialBarData="${e=>e.rubySocialBarData}"
    target="${e=>e.openLinksInCurrentTab?"_self":"_blank"}"
    :telemetryObject_card="${e=>{var t;return null===(t=e.telemetryContext)||void 0===t?void 0:t.contentCard}}"
    :telemetryTag_anchor="${e=>{var t;return null===(t=e.telemetryContext)||void 0===t||null===(t=t.destination)||void 0===t?void 0:t.getMetadataTag()}}"
    :telemetryTag_hideCard="${e=>{var t;return null===(t=e.telemetryContext)||void 0===t||null===(t=t.showFewer)||void 0===t?void 0:t.getMetadataTag()}}"
    :telemetryTag_undoHide="${e=>{var t;return null===(t=e.telemetryContext)||void 0===t||null===(t=t.undoShowFewer)||void 0===t?void 0:t.getMetadataTag()}}"
    :telemetryTag_moreActions="${e=>{var t;return null===(t=e.telemetryContext)||void 0===t||null===(t=t.seeMore)||void 0===t?void 0:t.getMetadataTag()}}"
    :telemetryTag_showMore="${e=>{var t;return null===(t=e.telemetryContext)||void 0===t||null===(t=t.upvote)||void 0===t?void 0:t.getMetadataTag()}}"
    :telemetryTag_undoShowMore="${e=>{var t;return null===(t=e.telemetryContext)||void 0===t||null===(t=t.undoUpvote)||void 0===t?void 0:t.getMetadataTag()}}"
    :telemetryTag_companion="${e=>{var t;return null===(t=e.telemetryContext)||void 0===t||null===(t=t.companion)||void 0===t?void 0:t.getMetadataTag()}}"
    :telemetryTag_commentButton="${e=>{var t;return null===(t=e.telemetryContext)||void 0===t||null===(t=t.commentsButton)||void 0===t?void 0:t.getMetadataTag()}}"
    title="${e=>e.title}"
    :headingPrefix="${e=>e.titlePrefix}"
    :visualReadinessCallback="${e=>e.visualReadinessCallback}"
    ?wide="${e=>"_2x_2y"==e.cardSize||void 0}"
    ?ruby="${e=>e.ruby}"
    ?segment="${e=>e.segment}"
    ?companion="${e=>e.companion}"
    :companionButtonText="${e=>e.companionButtonText}"
    ${(0,o.K)("cardElement")}
>
    ${(0,l.z)(e=>e.publisherFollowButtonConfigInfo,p)}
    ${(0,l.z)(e=>e.enableRichSocialReaction,u)}
</cs-responsive-card>
`},15297:function(e,t,a){"use strict";a.d(t,{c:function(){return g}});var i=a(65614),n=a(12936),r=a(82588),o=a(92743),l=a(66932),s=a(40838),d=a(96950),c=a(65615),$=a(74849),p=a(56923);const u=$.A`
    ${c.X}
    ${p.S} .complex-ad .card-title{font-size:24px;line-height:28px}`;var v=a(67599);const h=s.$.compose({name:"cs-native-ad-card-28-light-ad-slug",styles:u,template:(0,v.qn)({provider:d.qy`${n.N}`,footerEnd:d.qy`${r.$n}`,hideStory:d.qy`${o.Z}`,title:d.qy`${l.B2}`})});var f=a(1590);const g=()=>{(0,f.J)(),h.define(i.G.registry)}},26863:function(e,t,a){"use strict";a.d(t,{tB:function(){return m},LW:function(){return g},nj:function(){return f}});var i=a(80004),n=a(96950),r=a(91640),o=a(88985),l=a(30216),s=a(930),d=a(64900),c=a.n(d),$=a(45016),p=a.n($),u=a(17254),v=a(75416),h=a(52201);const f=e=>{let{theme:t="default",hideComments:a=!1}=e;return n.qy`
<div style="display: flex; gap: 4px;">
    ${(0,r.z)(e=>e.optedOutOfReactions&&!e.disableOptedOutButton,n.qy`
        ${g}
        ${m}
    `)}
    <social-bar-wc
        config-instance-src=${e=>e.socialBarWCConfigInfo&&(0,h.v)(e.socialBarWCConfigInfo)}
        instance-id=${e=>e.socialBarWCConfigInfo&&e.socialBarWCConfigInfo.instanceId}
        config-shared-ns=${e=>{var t;return null===(t=e.socialBarWCConfigInfo)||void 0===t||null===(t=t.configRef)||void 0===t?void 0:t.sharedNs}}
        :additionalHeaders=${e=>e.additionalHeaders}
        :hideComments=${e=>a}
        :canShowOneLineComments=${e=>!(e.isInfopane||e.cardSize!==s.uE._2x_2y||"flex-article-card"===e.childTemplateType&&e.articleTopCommentConfigInfo&&e.articleTopCommentId)}
        :contentId=${e=>e.id}
        :destinationUrl=${e=>e.destinationUrl}
        :title=${e=>e.title}
        :locale=${e=>u.T3.CurrentMarket||e.locale}
        :rootTelemetryObject=${e=>e.telemetryContext&&(e.telemetryContext.contentCardTelemetryObject||e.telemetryContext.contentCard)}
        :getReplacementCardsCallback=${e=>e.getReplacementCardsCallback}
        :reactionCallback=${e=>e.reactionCallback}
        :cardActionHideHandler=${e=>e.cardActionClickHandler&&function(){for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return e.cardActionClickHandler(e.id,e.cardActionStatus^l.J.hide,...a)}}
        :shareActionHandler=${e=>e.shareActionHandler}
        :isInfoPane=${e=>e.isInfopane}
        :isRightPos=${e=>e.socialBarInRight}
        :socialMetadata=${e=>({...e.metadata,imageData:e.imageData,providerData:e.providerData,title:e.title})}
        :theme=${e=>t}
    ></social-bar-wc>
</div>
`},g=n.qy`
<msn-card-button
    class="card-button"
    data-icon=${l.J.showMore}
    style="${e=>e.isInfopane||e.optedOutOfReactions||!e.enableFilledIconOnHover?"":"display: flex;"} ${e=>e.enableAnimatedShowMoreBtn||e.optedOutOfReactions||!e.enableFilledIconOnHover?"":"margin-inline-end: 8px;"}"
    select-title=${e=>e.cardActionsTooltips&&e.cardActionsTooltips.showMore}
    unselect-title=${e=>e.cardActionsTooltips&&e.cardActionsTooltips.undoShowMore}
    animation-text=${e=>e.showMoreAnimationTitle}
    select-icon=${e=>e.useArrowIcons&&!e.optedOutOfReactions?c():'<svg width="16" height="18" viewBox="0 0 16 18"><path d="M10.48.7c-.8-.83-2.09-.38-2.43.6-.28.8-.64 1.77-1 2.48C6 5.9 5.37 7.1 3.67 8.63c-.23.2-.52.36-.84.49-1.13.44-2.2 1.61-1.92 3l.36 1.77a2.5 2.5 0 0 0 1.8 1.92l5.6 1.52a4.5 4.5 0 0 0 5.6-3.53l.69-3.76A3 3 0 0 0 12 6.5h-.88l.01-.05c.08-.41.18-.97.24-1.59.07-.6.1-1.28.05-1.9a3.68 3.68 0 0 0-.5-1.74 4.16 4.16 0 0 0-.44-.52Z"/></svg>'}
    unselect-icon=${e=>e.useArrowIcons&&!e.optedOutOfReactions?p():'<svg width="16" height="18" viewBox="0 0 16 18"><path d="M8.05 1.3C8.4.31 9.68-.14 10.48.7c.16.17.33.36.44.52.32.48.45 1.12.5 1.73.05.63.02 1.3-.05 1.91-.06.62-.16 1.18-.24 1.59v.05H12a3 3 0 0 1 2.96 3.54l-.69 3.76a4.5 4.5 0 0 1-5.6 3.53l-5.6-1.52a2.5 2.5 0 0 1-1.8-1.92L.9 12.12c-.27-1.39.79-2.56 1.92-3 .32-.13.61-.3.84-.5 1.7-1.5 2.32-2.72 3.38-4.84.36-.71.72-1.68 1-2.49Zm1.96 5.58v-.01l.01-.03a9.08 9.08 0 0 0 .13-.58c.08-.4.17-.92.23-1.5s.09-1.18.04-1.73a2.73 2.73 0 0 0-.34-1.25 3.26 3.26 0 0 0-.32-.39c-.2-.2-.63-.16-.76.23-.29.82-.67 1.83-1.05 2.6-1.07 2.14-1.76 3.5-3.62 5.15-.34.3-.74.52-1.13.68-.89.34-1.45 1.14-1.3 1.87l.35 1.77c.1.56.53 1 1.07 1.15l5.6 1.53c1.98.54 4-.73 4.37-2.75l.68-3.76A2 2 0 0 0 12 7.5h-1.5a.5.5 0 0 1-.48-.62Z"/></svg>'}
    filled-icon-path=${e=>e.useArrowIcons&&!e.optedOutOfReactions?o.qb:o.vz}
    fill-color-selected=${e=>!e.enableNeutralFilledShowMoreIcon&&v.P}
    layout=${e=>(0,i.V1)(e)}
    selected=${e=>!!(e.cardActionStatus&l.J.showMore)}
    @selected-state-changed=${(e,t)=>e.cardActionClickHandler&&e.cardActionClickHandler(e.id,e.cardActionStatus&l.J.showFewer?e.cardActionStatus^l.J.showMore^l.J.showFewer:e.cardActionStatus^l.J.showMore,"ShowMore",!0,e.cardActionClickHandler,null,!e.enableAnimatedShowMoreBtn,t.event)}
    select-telemetry-tag=${e=>e.telemetryContext&&e.telemetryContext.showMore&&e.telemetryContext.showMore.getMetadataTag()}
    unselect-telemetry-tag=${e=>e.telemetryContext&&e.telemetryContext.undoShowMore&&e.telemetryContext.undoShowMore.getMetadataTag()}
>
</msn-card-button>
`,m=n.qy`
<msn-card-button
    class="card-button"
    data-icon=${l.J.showFewer}
    style="${e=>!e.enableAnimatedShowMoreBtn&&e.enableFilledIconOnHover?"margin-inline-start: 8px;":""}"
    select-title=${e=>e.cardActionsTooltips&&e.cardActionsTooltips.showFewer}
    unselect-title=${e=>e.cardActionsTooltips&&e.cardActionsTooltips.undoShowFewer}
    select-icon=${e=>'<svg width="16" height="18" viewBox="0 0 16 18"><path d="M10.48 17.3c-.8.83-2.09.38-2.43-.6-.28-.8-.64-1.77-1-2.48C6 12.1 5.37 10.9 3.67 9.37c-.23-.2-.52-.36-.84-.49C1.7 8.44.63 7.27.9 5.88l.36-1.77a2.5 2.5 0 0 1 1.8-1.92L8.66.66a4.5 4.5 0 0 1 5.6 3.54l.69 3.76A3 3 0 0 1 12 11.5h-.88l.01.05c.08.41.18.97.24 1.58.07.62.1 1.29.05 1.92a3.68 3.68 0 0 1-.5 1.73c-.11.16-.28.35-.44.52Z"/></svg>'}
    unselect-icon=${e=>'<svg width="16" height="18" viewBox="0 0 16 18"><path d="M8.05 16.7c.34.98 1.63 1.43 2.43.6.16-.17.33-.36.44-.52.32-.48.45-1.12.5-1.73.05-.63.02-1.3-.05-1.91-.06-.62-.16-1.18-.24-1.59v-.05H12a3 3 0 0 0 2.96-3.54l-.69-3.76A4.5 4.5 0 0 0 8.67.67l-5.6 1.52c-.92.25-1.62 1-1.8 1.92L.9 5.88c-.27 1.39.79 2.56 1.92 3 .32.13.61.3.84.5 1.7 1.5 2.32 2.72 3.38 4.84.36.71.72 1.68 1 2.49Zm1.96-5.58v.01l.01.03a8.94 8.94 0 0 1 .13.58c.08.4.17.92.23 1.5s.09 1.18.04 1.73c-.04.55-.16.98-.34 1.25-.05.1-.17.22-.32.39-.2.2-.63.16-.76-.23-.29-.82-.67-1.83-1.05-2.6-1.07-2.14-1.76-3.5-3.62-5.15-.34-.3-.74-.52-1.13-.68-.89-.34-1.45-1.14-1.3-1.87l.35-1.77c.1-.56.53-1 1.07-1.15l5.6-1.53a3.5 3.5 0 0 1 4.37 2.75l.68 3.76A2 2 0 0 1 12 10.5h-1.5a.5.5 0 0 0-.48.62Z"/></svg>'}
    filled-icon-path=${e=>o.M3}
    fill-color-selected=${e=>!e.enableNeutralFilledShowMoreIcon&&v.P}
    layout=${e=>(0,i.V1)(e)}
    selected=${e=>!!(e.cardActionStatus&l.J.showFewer)}
    @selected-state-changed=${(e,t)=>e.cardActionClickHandler&&e.cardActionClickHandler(e.id,e.cardActionStatus&l.J.showMore?e.cardActionStatus^l.J.showMore^l.J.showFewer:e.cardActionStatus^l.J.showFewer,"ShowFewer",!0,e.cardActionClickHandler,null,!e.contentType,t.event)}
    select-telemetry-tag=${e=>e.telemetryContext&&e.telemetryContext.showMore&&e.telemetryContext.showFewer.getMetadataTag()}
    unselect-telemetry-tag=${e=>e.telemetryContext&&e.telemetryContext.undoShowFewer&&e.telemetryContext.undoShowFewer.getMetadataTag()}
>
</msn-card-button>
`},30212:function(e,t,a){"use strict";var i=a(72694),n=a(68604),r=a(81078),o=a(65614),l=a(1590),s=a(96950),d=a(82588),c=a(92743),$=a(12936),p=a(66932),u=a(40838),v=a(67599),h=a(74849),f=a(37549);const g=h.A`
    ${f.p} .card-outer:hover .card-title,.card-outer:active .card-title,.card-outer:focus-visible .card-title{text-decoration:underline}`;var m=a(87889);const y=u.$.compose({name:"cs-native-ad-card-28-underline",styles:g,template:(0,v.qn)({footerEnd:s.qy`${d.$n}`,footerStart:s.qy`${m.b}`,hideStory:s.qy`${c.Z}`,provider:s.qy`${$.N}`,title:s.qy`${p.B2}`})});var x=a(56923),b=a(65615);const w=h.A`
    ${b.X}
    ${x.S} .card-outer:hover .card-title,.card-outer:active .card-title,.card-outer:focus-visible .card-title{text-decoration:underline}.complex-ad .card-title{font-size:24px;line-height:28px}`;var C=a(91640),_=a(14475),z=a(91278),k=a(50130);const S=s.qy`<div class="${e=>(0,k.s4)(e.enableSafeAds,"ad-slug")}" slot="footer-start">${(0,C.z)(e=>e.showAdLabel,s.qy`<div class="${e=>(0,k.s4)(e.enableSafeAds,"ad-label")}"><a class="${e=>(0,k.s4)(e.enableSafeAds,"ad-label-text")}" href="${e=>e.privacyUrl}" @click="${(e,t)=>!e.enableAdCardClickCbInAdSlug||!e.adCardClickCallback||e.adCardClickCallback(t.event,e.privacyUrl)}" target="${_.z._blank}" title="${e=>e.localizedStrings&&e.localizedStrings.nativeAdAdLabelText}" data-t="${e=>{var t;return null===(t=e.adTelemetryContext)||void 0===t||null===(t=t.adLabel)||void 0===t?void 0:t.getMetadataTag()}}">${e=>e.adLabelText}</a></div>`)} ${(0,C.z)(e=>e.providerName,s.qy`<div class="${e=>(0,k.s4)(e.enableSafeAds,"ad-provider")}"><a class="${e=>(0,k.s4)(e.enableSafeAds,"ad-provider-text")}" href="${e=>e.destinationUrl}" target="${_.z._blank}" title="${e=>e.providerName}" ${(0,z.Ib)(!0,!1)} data-t="${e=>{var t;return null===(t=e.adTelemetryContext)||void 0===t||null===(t=t.destination)||void 0===t?void 0:t.getMetadataTag()}}">${e=>e.providerName}</a></div>`)}</div>`,T=u.$.compose({name:"cs-native-ad-card-feeds1-like",styles:w,template:(0,v.qn)({footerEnd:s.qy`${d.$n}`,footerStart:s.qy`${S}`,hideStory:s.qy`${c.Z}`,title:s.qy`${p.B2}`})});var A=a(15297),M=a(63319),D=a(17301),H=a(8453),B=a(46460),R=a(85083);(0,i.g)(),(0,n.c)(),(0,r.G)(),(0,l.J)(),y.define(o.G.registry),(0,l.J)(),T.define(o.G.registry),(0,A.c)(),(0,M.L)(),(0,D.m)(),(0,H.m)(),(0,B.A)(),(0,R.O)()},37549:function(e,t,a){"use strict";a.d(t,{p:function(){return o}});var i=a(65615),n=a(74849),r=a(56923);const o=n.A`
    ${i.X}
    ${r.S} .complex-ad .card-title{font-size:24px;line-height:28px}`},45016:function(e){e.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.86 2.53c.6-.7 1.68-.7 2.28 0l6.62 7.8a1 1 0 01-.76 1.65h-3V17a1 1 0 01-1 1H7a1 1 0 01-1-1v-5.02H3a1 1 0 01-.76-1.65l6.62-7.8zm1.52.65a.5.5 0 00-.76 0L3 10.98h3.5c.28 0 .5.23.5.5V17h6v-5.52c0-.27.22-.5.5-.5H17l-6.62-7.8z"></path></svg>'},56923:function(e,t,a){"use strict";a.d(t,{S:function(){return r},j:function(){return o}});var i=a(39236),n=a(74849);const r=n.A` [size="_2x_2y"] ::part(heading){--content-card-heading-font-size:28px;--content-card-heading-line-height:36px}[size="_2x_2y"].article-card cs-attribution{margin-top:0}`,o=n.A`
    ${i.l}
    ${r}
`},60724:function(e,t,a){"use strict";a.d(t,{o:function(){return l}});var i=a(74849),n=a(57416),r=a(22131),o=a(50882);const l=i.A` :host{position:relative}:host(:focus-visible){outline:auto 2px}:host,cs-card{border-radius:calc(${n.JU} * 1px)}cs-card[dwf-height]{height:calc((156 * 2px) + (var(--card-base-gap) * 1px))}.feeds3-new-height{height:100%;width:100%}:host::part(tablist){height:14px}.image-overlay{width:300px;height:172px;position:absolute;left:0;bottom:0;background:linear-gradient(180deg,rgba(0,0,0,0),#000 28%)}.infopane{position:static}.infopane-slide[hidden]{margin-inline-start:calc(var(--stroke-width) * 4px)}:host .navigation{left:0}.hide{height:14px;width:8px}.hide::before,.small::before,.smaller::before{height:4px;width:4px}:host .infopane-hide-story,:host .infopane-report-ad{height:100%;width:100%}.no-transition{--slide-transition-duration:0}.no-nav-anim::part(dot){animation:none}.show-flippers::part(previous-flipper),.show-flippers::part(next-flipper){opacity:1}.tsp-flippers::part(previous-flipper),.tsp-flippers::part(next-flipper){opacity:0.5}:host(:hover)::part(previous-flipper),:host(:hover)::part(next-flipper){opacity:1}.adWrapper{display:grid;box-sizing:border-box}cs-native-ad-card-24::part(flex){width:auto;border-radius:0}.double{grid-template-columns:1fr 1fr}.triptych{grid-template-columns:1fr 1fr 1fr}card-flipper[size="regular"] svg{height:16px;width:16px}card-flipper[size="tall"] svg{height:20px;width:20px}card-flipper[size="extra-large"] svg{height:30px;width:30px}card-flipper[size="extra-large-2"] svg{height:34px;width:34px}:host([amplify-on-hover]){-webkit-user-select:none;-ms-user-select:none;user-select:none}`.withBehaviors((0,r.mr)(i.A` :host { outline: 1px solid ${o.A.CanvasText}; }`))},63319:function(e,t,a){"use strict";a.d(t,{L:function(){return f}});var i=a(65614),n=a(12936),r=a(92743),o=a(66932),l=a(40838),s=a(96950),d=a(65615),c=a(74849),$=a(56923);const p=c.A`
    ${d.X}
    ${$.S} .complex-ad .card-title{font-size:24px;line-height:28px}`;var u=a(67599);const v=l.$.compose({name:"cs-native-ad-card-28-without-footer",styles:p,template:(0,u.qn)({provider:s.qy`${n.N}`,hideStory:s.qy`${r.Z}`,title:s.qy`${o.B2}`})});var h=a(1590);const f=()=>{(0,h.J)(),v.define(i.G.registry)}},64900:function(e){e.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.14 2.53a1.5 1.5 0 00-2.28 0l-6.62 7.8A1 1 0 003 11.98h3V17a1 1 0 001 1h6a1 1 0 001-1v-5.02h3a1 1 0 00.76-1.65l-6.62-7.8z"></path></svg>'},68604:function(e,t,a){"use strict";a.d(t,{c:function(){return f}});var i=a(65145),n=a(65614),r=a(20690),o=a(74077),l=a(7756),s=a(79559),d=a(92743),c=a(66932),$=a(11705),p=a(96950),u=a(56923),v=a(82337);const h=$.d.compose({name:"cs-article-card-28",styles:u.j,template:(0,v._)({attribution:p.qy`${r.Au}`,footerStart:p.qy`${o.xZ}`,footerEnd:p.qy`${l.IL}`,hideStory:p.qy`${s.Y}${d.Z}`,title:p.qy`${c.B2}`})}),f=()=>{(0,i.J)(),h.define(n.G.registry)}},72694:function(e,t,a){"use strict";a.d(t,{g:function(){return R}});var i=a(90368),n=a(49149),r=a(35594),o=a(57290),l=a(759),s=a(4670),d=a(1150),c=a(96950),$=a(91640),p=a(39957),u=a(60402),v=a(30216),h=a(930),f=a(11622);const g=c.qy` ${(0,$.z)(e=>e.enableImmersiveInfopane,c.qy`${r.L}${o.B}`)} ${(0,$.z)(e=>!e.enableImmersiveInfopane,c.qy`${r.s}${o.W}`)} `,m="dense-card",y=new WeakMap,x=c.qy`${(0,$.z)(e=>e.data,c.qy`${(0,p.ux)(e=>[e.data],c.qy`<cs-card class="infopaneCardWrapper ${(e,t)=>t.parent.config.responsiveWidth?"feeds3-new-height":""} ${e=>e.enableInfopaneDenseCardInteraction?"dense-int":""}" size="${e=>e.cardSize}" card-fill-color="${e=>e.cardFillColor}" gradient-angle="${e=>e.gradientAngle}" ?dwf-height="${(e,t)=>t.parent.config.use324HeightIfp&&t.parent.config.enableDynamicWaterfall}" ${(0,u.K)("outerCSCard")}><cs-responsive-infopane class="infopane mid-button ${e=>e.disableNavAnimation?"no-nav-anim":""} ${e=>e.enableImmersiveInfopane?"immersive-infopane":""} ${e=>e.enableFlippersOnRest?"show-flippers":""} ${e=>e.enableTransparentFlippersOnRest?"tsp-flippers":""} ${e=>e.shiftIpNavToRight?"shift-nav-pos":""}" duration="${e=>e.rotationDuration}" media-controls="${e=>e.enablePlayPauseButton}" navigation-position="${e=>e.navPosition}" :hasSlideShow="${e=>e.enableSlideShow}" :wpoRotationDuration="${e=>e.wpoRotationDuration}" size="${e=>e.cardSize}" tab-count=${e=>e.tabCount} transition-strategy=${e=>e.enableIpTransform?"transform":"position"} data-t="${e=>{var t;return null===(t=e.telemetryContext)||void 0===t||null===(t=t.infopane)||void 0===t?void 0:t.getMetadataTag()}}" play-telemetry="${e=>{var t;return null===(t=e.telemetryContext)||void 0===t||null===(t=t.playTransitionButton)||void 0===t?void 0:t.getMetadataTag()}}" pause-telemetry="${e=>{var t;return null===(t=e.telemetryContext)||void 0===t||null===(t=t.pauseTransitionButton)||void 0===t?void 0:t.getMetadataTag()}}" preload-panels=${e=>e.lazyInfopanePreloadCount} :lazyPanels=${e=>e.enableLazyInfopane?e.slideContentData.map(e=>({id:e.id,data:e})):void 0} :lazyPanelTemplate=${(e,t)=>(y.has(t.parent)||y.set(t.parent,c.qy`${e=>b(e,t.parent)}`),y.get(t.parent))} ${(0,u.K)("cardElement")}>${(0,$.z)(e=>!e.disableInfopaneFlippers,g)} ${(0,p.ux)(e=>e.enableLazyInfopane?[]:e.slideContentData,c.qy`${(e,t)=>b(e,t.parentContext.parent)}`)}</cs-responsive-infopane></cs-card>`)} `)}`,b=(e,t)=>{const a=0!==(e.cardActionStatus&v.J.hide)||!!e.enableHideStoryFeedback&&(0!==(e.cardActionStatus&v.J.showFewer)||0!==(e.cardActionStatus&v.J.hidden)),i=t.data;var n,r,o,$;return e.isNativeAd?i.enableResponsiveInfopaneMap?t.config.useResponsiveAdInfopane?l.W:_:!i.disableInfopaneComplexAds&&e.nativeAds&&e.nativeAds.length>1?S:null!==(n=t.config)&&void 0!==n&&n.enableIpAdCardTitleUL||null!==(r=i.config)&&void 0!==r&&r.enableIpAdCardTitleUL?c.qy` ${(0,p.ux)(e=>e.nativeAds&&e.nativeAds.slice(0,3),z)} `:null!==(o=t.config)&&void 0!==o&&o.enableFeeds1LikeIpAdCard||null!==($=i.config)&&void 0!==$&&$.enableFeeds1LikeIpAdCard?c.qy` ${(0,p.ux)(e=>e.nativeAds&&e.nativeAds.slice(0,3),k)} `:c.qy` ${(0,p.ux)(e=>e.nativeAds&&e.nativeAds.slice(0,3),c.qy`${e=>(e.enableBuyDirectAd&&t.updateBuyDirectAdsTelemetry(e),_)}`)} `:e.showAdFeedback?(0,d.gF)(e,t.cardActionTemplates):a?(0,d.q2)(e,t.cardActionTemplates):e.card_template_type===m||e.childTemplateType===m?C:t.data.enableAutoPlayInfopaneVideos||t.data.enableResponsiveCards?s.t:w},w=c.qy`<cs-article-card-28 class="no-transition infopane-slide" :data=${e=>e}></cs-article-card-28>`,C=c.qy`<cs-infopane-dense-card class="no-transition infopane-slide" size=${e=>{var t;return null===(t=e.denseData)||void 0===t?void 0:t.cardSize}} style=${e=>{var t,a;return(null===(t=e.denseData)||void 0===t?void 0:t.cardSize)===h.uE._2x_2y||(null===(a=e.denseData)||void 0===a?void 0:a.cardSize)===h.uE._2x_3y?"--heading-font-size: 20px; --heading-line-height: 28px;":""}} :data=${e=>e} id=${e=>null==e?void 0:e.id}>${e=>(0,f.yN)(e.denseConfigInfo,{properties:{denseData:e.denseData,telemetryObject:e.telemetryObject},memoize:!0})}</cs-infopane-dense-card>`,_=c.qy` ${(0,$.z)(e=>!e.enableBlendInAdSlugStyle||1===e.enableBlendInAdSlugStyle,c.qy`<cs-native-ad-card-28 class="no-transition infopane-slide" :data=${e=>e}></cs-native-ad-card-28>`)} ${(0,$.z)(e=>2===e.enableBlendInAdSlugStyle||3===e.enableBlendInAdSlugStyle,c.qy`<cs-native-ad-card-28-light-ad-slug class="no-transition infopane-slide" :data=${e=>e}></cs-native-ad-card-28-light-ad-slug>`)} ${(0,$.z)(e=>4===e.enableBlendInAdSlugStyle,c.qy`<cs-native-ad-card-28-without-footer class="no-transition infopane-slide" :data=${e=>e}></cs-native-ad-card-28-without-footer>`)}
`,z=c.qy`<cs-native-ad-card-28-underline class="no-transition infopane-slide" :data=${e=>e}></cs-native-ad-card-28-underline>`,k=c.qy`<cs-native-ad-card-feeds1-like class="no-transition infopane-slide" :data=${e=>e}></cs-native-ad-card-feeds1-like>`,S=c.qy`<cs-card class="adWrapper no-transition ${e=>2===e.nativeAds.length?"double":"triptych"}" size=${e=>e.cardSize} style="box-sizing: border-box; display: grid; ${e=>2===e.nativeAds.length?"grid-template-columns: 1fr 1fr;":"grid-template-columns: 1fr 1fr 1fr;"}">${(0,p.ux)(e=>e.nativeAds.slice(0,3),_)}</cs-card>`;var T=a(74849),A=a(22131),M=a(60724);const D=T.A`
    ${M.o} :host{display:flex}card-flipper[size="xlarge"]{height:calc(var(--design-unit) * 14px);width:calc(var(--design-unit) * 7.5px)}.infopaneCardWrapper.feeds3-new-height{flex-grow:2;width:612px}.infopaneCardWrapper.feeds3-new-height cs-infopane-dense-card{--dense-card-hero-width:39.2%;--dense-card-news-list-width:50%;--dense-list-item-height:11.3%;display:flex;height:100%;width:100%}.infopaneCardWrapper.feeds3-new-height dense-card{width:100%}.infopaneCardWrapper.feeds3-new-height dense-card::part(dense-card-part){height:90%}.show-flippers::part(previous-flipper),.show-flippers::part(next-flipper){opacity:1}.tsp-flippers::part(previous-flipper),.tsp-flippers::part(next-flipper){opacity:0.5}.shift-nav-pos::part(navigation){transform:translateX(106px)}`.withBehaviors((0,A.G2)(T.A` cs-card.dense-int{--dense-card-color-rest:#2b2b2b;background:var(--dense-card-color-rest)}`)),H=n.y.compose({name:"cs-infopane-card-28",template:x,styles:D});var B=a(65614);const R=()=>{(0,i.J)(),H.define(B.G.registry)}},75416:function(e,t,a){"use strict";a.d(t,{P:function(){return i}});const i="#0078D4"},81078:function(e,t,a){"use strict";a.d(t,{G:function(){return h}});var i=a(65614),n=a(12936),r=a(82588),o=a(92743),l=a(66932),s=a(40838),d=a(96950),c=a(37549),$=a(67599),p=a(87889);const u=s.$.compose({name:"cs-native-ad-card-28",styles:c.p,template:(0,$.qn)({provider:d.qy`${n.N}`,footerEnd:d.qy`${r.$n}`,footerStart:d.qy`${p.b}`,hideStory:d.qy`${o.Z}`,title:d.qy`${l.B2}`})});var v=a(1590);const h=()=>{(0,v.J)(),u.define(i.G.registry)}},88985:function(e,t,a){"use strict";a.d(t,{C2:function(){return n},M3:function(){return r},i_:function(){return i},qb:function(){return l},vz:function(){return o}});const i="M6.75 10a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0m5 0a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0M15 11.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5",n="M6.25 10a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m5 0a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M15 11.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5",r="M10.481 17.296c-.798.837-2.091.387-2.43-.59-.28-.807-.644-1.772-.998-2.483-1.06-2.126-1.679-3.336-3.385-4.85a2.8 2.8 0 0 0-.84-.49C1.698 8.438.637 7.269.914 5.88l.353-1.765a2.5 2.5 0 0 1 1.794-1.922l5.6-1.527A4.5 4.5 0 0 1 14.272 4.2l.684 3.762a3 3 0 0 1-2.951 3.537h-.884l.01.052c.08.408.177.97.241 1.583.065.61.099 1.284.048 1.912-.049.617-.184 1.25-.504 1.73a4 4 0 0 1-.435.519",o="M10.481.704c-.798-.837-2.091-.387-2.43.59-.28.806-.644 1.772-.998 2.483-1.06 2.126-1.679 3.335-3.385 4.849-.226.2-.518.363-.84.49-1.13.446-2.191 1.616-1.914 3.005l.353 1.765a2.5 2.5 0 0 0 1.794 1.922l5.6 1.527a4.5 4.5 0 0 0 5.611-3.537l.684-3.761A3 3 0 0 0 12.005 6.5h-.884l.01-.052c.08-.409.177-.97.241-1.583.065-.61.099-1.285.048-1.913-.049-.616-.184-1.249-.504-1.73a4 4 0 0 0-.435-.518",l="M11.14 2.53a1.5 1.5 0 0 0-2.28 0l-6.62 7.8A1 1 0 0 0 3 11.98h3V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-5.02h3a1 1 0 0 0 .76-1.65z"}}]);