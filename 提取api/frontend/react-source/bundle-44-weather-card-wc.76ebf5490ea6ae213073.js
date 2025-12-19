(self.homePageWebpackChunks=self.homePageWebpackChunks||[]).push([["weather-card-wc"],{4218:function(t,e,i){"use strict";i.d(e,{pH:function(){return it},oG:function(){return Z},OW:function(){return et},fF:function(){return K},Pz:function(){return tt},uE:function(){return X},Jg:function(){return Y}});var o=i(57164),n=i(44662),r=i(98216),a=i(11372),s=i(21799),c=i(91593),l=i(81001),d=i(32122),h=i(4079),u=i(37198),p=i(54539),v=i(14939),f=i(38131),m=i(14591),g=i(12426),b=i(42588),w=i(71160),y=i(77246),$=i(13038),k=i(72535),x=i(5878),C=i(88917),T=i(2651),L=i(46261),S=i(8002),M=i(34457),P=i(56584),I=i(35605),D=i(89980),O=i(5044),W=i(59196),_=i(48566),N=i(2151);var F=i(86373),z=i(58325),A=i(71200),R=i(56590),E=i(1033),U=i(27950),V=i(15410),B=i(65682);const H="24px";let j="";const q="46px",J="44px",Q="DetectLocationToast",G="DisableLocationPopup";function Y(t){j=t}function X(){j=""}function Z(){return j}function K(t,e){let i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e)return;t.dataTransformer||(t.dataTransformer=new s.C);if(!t.dataTransformer.setCardMetadata(e,it()))return;!function(t){const{bgMapper:e,backupMapper:i}=t.dataTransformer.getBgMapper();t.bgMapper=e,t.backupMapper=i;const{homeLocation:o,detectedLocation:n,followedLocations:r}=t.dataTransformer.getUserProfileData();t.homeLocation=o,t.detectedLocation=n,t.followedLocations=t.config.isDynamicFeed&&t.followedLocations||r}(t),function(t){const{resIdx:e}=t.dataTransformer.getRawParsedResponse(),{userProfile:i,weatherLocation:n,locationSettingMode:a}=t.dataTransformer.getUserProfileData();if(i&&function(t,e){const i=t=>t&&t.toString();if(e.sig){const o=e.sig;t.feature=i(o.ft),t.userId=i(o.uid),t.viewedIds=i(o.vids),t.clickedIds=i(o.cids),t.userType=i(o.ut)}e.eplant&&(t.eplantJoin=i(e.eplant.st))}(t.tmpl,i),n&&n.latitude&&n.longitude){var s,c;t.tmpl.latlon=`${null===(s=Number(n.latitude))||void 0===s?void 0:s.toFixed(2)},${null===(c=Number(n.longitude))||void 0===c?void 0:c.toFixed(2)}`,t.tmpl.resIdx=e}a&&r.YT.addOrUpdateTmplProperty("locDetSet",`${a||1}`);let l="0";if((0,y.S)())try{const e=(0,D.Lg)();t.declinedLocations=JSON.parse(e.getItem(o.qO)||"[]"),l=e.getItem(o.Z5)||"0"}catch{t.declinedLocations=[]}(0,v.Rt)(n);const d=Date.now()-parseInt(l)>36e5,h=t.config,u=h.disableLocationPopup,p=!(0,g.nS)(t.detectedLocation,n,{enforceOnlySmallLocal:!0});(d&&t.detectedLocation&&p&&(0,g.ES)(t.detectedLocation)&&t.detectedLocation.accuracy<=o.XE&&t.detectedLocation.accuracy>0&&0===(t.declinedLocations||[]).filter(e=>(0,g.nS)(e,t.detectedLocation,{enforceOnlySmallLocal:!0})).length||t.config.forceLocationNotice)&&(u?(0,x.Mc)(G,"true"):(0,x.Mc)(Q,"true"))}(t);const n=t.dataTransformer.getWeatherOverviewFormat(i);if(!n||!n.unit)return;(0,v.Aj)(n.unit);const{weatherLocation:a,locationSettingMode:c}=t.dataTransformer.getUserProfileData();et(t,{...n,pollenForecast:n.pollen,currentLocation:a,locationDetectionSetting:c||1})}function tt(t,e){if(!e||!e.profile)return;const{profile:i}=e,o=i.followedLocations;t.followedLocations=o}function et(t,e){var i,o,s;if(!e||!e.currentCondition)return;const{unit:v,currentLocation:g,profile:y,contentData:D}=e;t.contentDataList=D;const{isSpotlight:Q,displayContent:G,contentType:Y,constentId:X}=(0,c.OW)(e,j);t.isRotationalPreview=Q,t.displayContent=G,t.contentId=X,t.contentType=Y,t.isProngReclaim&&t.displayContent&&(t.displayContent.contenttype="NormalWeather",t.contentType="NormalWeather");const Z=(0,O.En)()||"",K=r.YT.getRequestId(),tt=t.strings,et=t.config;let it=f.Od.NONE;t.userSetUnit&&v&&v!=t.userSetUnit&&(it=t.userSetUnit===T.B.Fahrenheit?f.Od.CTOF:f.Od.FTOC),e=function(t,e){if(e==f.Od.NONE)return t;t.currentCondition.currentTemperature=""+(0,f.p5)(t.currentCondition.currentTemperature,e);for(let n=0;n<(null===(i=t.forecast)||void 0===i?void 0:i.length);n++){var i,o;const r=t.forecast[n];r.highTemp=r.highTemp&&(0,f.p5)(r.highTemp.toString(),e),r.lowTemp=r.lowTemp&&(0,f.p5)(r.lowTemp.toString(),e),null===(o=r.hourly)||void 0===o||o.map(t=>{t.temperature=(0,f.p5)(t.temperature.toString(),e)})}return t}(e,it);const ot=t.userSetUnit||v,nt=ot===T.B.Fahrenheit?"°F":"°C",rt=_.Qf.Format(l.TD,{contentType:t.contentType||"",contentId:t.contentId||""});let at=!1;Object.keys($.I).every(e=>t.contentType!=$.I[e]||(at=!0,!1));const st={excludeOcid:!0,ocid:Z,cvid:K,content:rt,contentType:t.contentType,enablePunchoutHero:at&&et.enablePunchoutHero},ct=e=>{var i;return null===(i=t.bgMapper)||void 0===i?void 0:i.getLocStr(e)},lt=(0,n.fS)(g,ot,ct,st),dt={excludeOcid:!0,ocid:Z,cvid:K,linkType:7,content:rt},ht=(0,n.fS)(g,ot,ct,dt),ut=et.enableSuperfeedUx?J:q,pt=(t,i)=>W.E.getWeatherGlyphBySymbolOrSkyCode(t,i,et.skycodeIconPath?et.skycodeIconPath:"",e.iconMap),{skycodeIconImgUrl:vt,skycode:ft,aqi:mt,precipitation:gt,temperature:bt}=(0,f.TA)(e,pt);y&&(y.home&&(t.homeLocation=y.home),y.detectedLocation&&(t.detectedLocation=y.detectedLocation),1==y.locationMode&&(t.homeLocation=null));const wt=(t.contentId||"")+"|"+(null===(i=t.displayContent)||void 0===i?void 0:i.cid);e.alertsInfo=(0,k.Lu)(e,t.displayContent),function(t,e){var i,o,n;if(t.displayContent){var r,a;t.tmpl.contentId=t.contentId,t.tmpl.contentRank=null===(r=t.displayContent.ranking)||void 0===r?void 0:r.toString(),t.tmpl.controlFlight=t.displayContent.cf,t.tmpl.cardId=null===(a=t.displayContent.cid)||void 0===a?void 0:a.toString();const e=t.displayContent.content&&t.displayContent.content[0];e&&(t.tmpl.contentCapIcon=e.capIcon,t.tmpl.contentTitle=e.title)}else t.tmpl.controlFlight=null,t.tmpl.cardId=null;if(t.tmpl.swIds=(e.contentData||[]).filter(t=>t&&"SevereWeather"==t.contenttype).map(t=>t.cid).toString(),t.tmpl.curCondition=(0,I.OS)(e.currentCondition.currentRaw,e.unit),t.tmpl.lastUpdate=null===(i=e.currentCondition.currentRaw)||void 0===i||null===(i=i.created)||void 0===i?void 0:i.toString(),t.tmpl.aqLvl=null===(o=e.currentCondition.currentRaw)||void 0===o||null===(o=o.aqLevel)||void 0===o?void 0:o.toString(),e.pollenForecast&&e.pollenForecast.forecast.length>1){var s,c;t.tmpl.plTdLvl=null===(s=e.pollenForecast)||void 0===s?void 0:s.forecast[0].level,t.tmpl.plTmrLvl=null===(c=e.pollenForecast)||void 0===c?void 0:c.forecast[1].level}t.tmpl.normalizedSkyCode=null===(n=e.currentCondition)||void 0===n?void 0:n.normalizedSkyCode,e.alertsInfo&&(t.tmpl.swDetail=`${e.alertsInfo.class}_${e.alertsInfo.significance}_${e.alertsInfo.id}`);e.nowcasting&&(t.tmpl.nowcastTemplate=e.nowcasting.templateType)}(t,e);const yt=(0,d.cw)(t.cardSize)&&"WildFirePointFullCard"===t.contentType?"WildFirePointCard":t.contentType;t.baseWeaLink=lt;const $t={strings:tt,iconFunc:pt,iconSize:H},kt=(0,f.NF)(e,{...$t,baseLink:ht});let xt=5;if(t.isOnRotationalPreview()){var Ct;const e=(null==t||null===(Ct=t.teaserProps)||void 0===Ct||null===(Ct=Ct.summaryData)||void 0===Ct?void 0:Ct.summaryLink)||"";xt=(0,b.kl)(e)}const Tt=(0,f.Yg)(e,{...$t,baseLink:lt,endIndex:xt,forcastDayWithDate:et.dayOfWeekWithDate}),Lt=function(t,e,i,o,n){var r,a,s;const c=i.config,l=c.showMapOnly1u?"normalmap":null,d=B.D6.get((0,B.OC)(t,i)),h=(0,B.TW)(i);(0,E.e3)()||(e.currentCondition.deepLink=(0,R.GF)(e.currentCondition.deepLink,"content",h));const u=(0,U.E)(i,e,o,n),p={type:l,content:{...(0,B.ZP)(e,i),...u&&{uxFormat:"miniL1",customData:{...u}}}};if(!d)return p;let v=(0,B.Kr)(d,e,i);"object"==typeof v&&(v={...p.content,...v,...u&&{customData:{...v.customData,...u},...v.summaryData&&{summaryData:{...v.summaryData,boldUx:!1}}}}),!v&&null!==(r=p.content.customData)&&void 0!==r&&r.tabs&&(p.content.customData.tabs=p.content.customData.tabs.slice(0,2),p.content.customData.tabIdx=0);const f=v?{type:d.type||l,content:v}:p;if(c.enableNew1uCard&&"boolean"!=typeof f.content&&"miniL1"==(null===(a=f.content)||void 0===a?void 0:a.uxFormat)&&2==(null===(s=f.content)||void 0===s||null===(s=s.customData)||void 0===s||null===(s=s.tabs)||void 0===s?void 0:s.length)){var m,g;(0,V.Mc)(z.B4,"1");const t=e.forecast,i=(null==t?void 0:t.length)>1&&((null===(m=t[0].hourly)||void 0===m?void 0:m.length)||(null===(g=t[1].hourly)||void 0===g?void 0:g.length))>0&&t[0].hourly.concat(t[1].hourly).length>=24;f.content.uxFormat=i&&!(0,A.R)("prg-ntp-wxo1ucard")?"listWithChart":f.content.uxFormat}else(0,V.hh)(z.B4);return v?{type:d.type||l,content:v}:p}(yt,{...e,unit:ot},t,Tt,kt);t.primaryCarousel=Lt.type,t.teaserProps="object"==typeof Lt.content?Lt.content:null,(0,w.Lt)(Tt,kt,t.contentType);const St=t.teaserProps||{};!function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;t.miniL1TabIdx=e,(0,x.Mc)(b.Zb,e+"")}(t,St&&St.customData&&St.customData.tabIdx);const{tabs:Mt=[],tabIdx:Pt=0}=St.customData||{};!function(t,e,i,o){const n=(0,h.u)(t.config,t.cardSize,t.primaryCarousel);if(!n||!e.mapsMetaData||!t.config.slots)return t.defaultMapPageUrl="",void(t.minimap=void 0);let r=t.config.disableAnimateMinimap;i&&i.type!==b.hs.map&&t.config.disableAnimateMinimap&&(r=!1);const a=i=>(0,N.Zh)(e,t)(i,{...o,zoom:8});t.defaultMapPageUrl=(0,h.x)(n,e,t.displayContent,a),t.minimap={mapType:n,weatherData:e,strings:t.strings,cardConfig:{...t.config,disableAnimateMinimap:r},isSmallCard:(0,d.cw)(t.cardSize),displayContent:t.displayContent,teaserProps:t.teaserProps,iconImageTemplate:p.h7,buildMapUrl:a,loadAfterTTVR:t.config.disableMinimapPreload,cardLayout:t.cardLayout}}(t,e,Mt[Pt],st);const It=g&&g.displayName,Dt=(0,L.Ls)(g,t.getExperienceType()),Ot=et.isDynamicFeed&&t.isOnRotationalPreview()?(0,M.Yi)(t.displayContent,!!t.minimap||!(0,h.u)(t.config,t.cardSize,t.primaryCarousel),kt,Tt):null,Wt=t.isWidgetRegion;t.weatherData={link:lt,ctaContent:tt.seeFullForecast,locationInfo:g,locationName:It,shortLocationName:Dt,locationMode:2===e.locationDetectionSetting?u.H.SpecifyLoc:u.H.AutoDetectLoc,skycodeIcon:(0,p.h7)([vt],ut,ft),skycode:ft,iconMap:e.iconMap,weatherUnit:ot,unitSetting:nt,temperature:bt,precipitation:gt,precipitationLabel:tt.precipitationMapTooltip,aqi:mt,aqiLabel:tt.aqiLabel,forecastData:Tt,hourlyForecast:kt,nowcasting:e.nowcasting,insights:e.insights,backgroundData:Wt?void 0:St.backgroundData,summaryData:St.summaryData,teaserCustomData:St.customData,displayContent:t.displayContent,rotationDisplayContentType:Ot,defaultMapPageUrl:t.defaultMapPageUrl,uxFormat:St.uxFormat||"default",showOnlyList:!(et.dailyForecastContent&&et.dailyForecastContent.includes(t.contentType))&&kt.length>0,signature:wt||(et.isDynamicFeed?"prong2_weather":""),weatherState:e,lifeActivityData:e.lifeActivityData,activityLabel:tt.activityCard},t.addZoneToTelemetry(),(0,x.YS)(t.tmpl,t);const _t=null===(o=(t.parentTelemetry||t.telemetryObject).contract)||void 0===o?void 0:o.ext,Nt=(0,x.gh)(_t,wt);t.telemetryContext=(0,S.i)(t.telemetryObject,t.weatherData,t.strings,Nt),null===(s=t.telemetryObject)||void 0===s||s.updateContract({...t.telemetryObject.contract,content:{type:a.b5.StructuredData,vertical:C.TB,category:C.RN},ext:Nt}),!et.enableSuperfeedUx&&t.cardFirstViewReady(),(0,m.ac)(g,null,m.fC.Feed),t.superSDCardProps&&t.superSDCardProps.refreshUx&&t.superSDCardProps.getSuperCardData(),(0,F.J)(t),(0,P.UM)(e,et.enableIpForecast)}function it(){return(0,c.Ei)(j)}},5878:function(t,e,i){"use strict";i.d(e,{Mc:function(){return c},SL:function(){return r},YS:function(){return a},gh:function(){return s},hh:function(){return l}});var o=i(58325),n=i(98216);function r(t,e){e.cardSize&&c(o.KW,e.cardSize),e.config.isDynamicFeed?c(o.eN,e.isRotationalPreview?"1":"0"):l(o.eN),t.contentId?c(o.Vn,t.contentId):l(o.Vn),t.contentRank?c(o.rj,t.contentRank):l(o.rj),t.controlFlight?c(o.rE,t.controlFlight):l(o.rE),t.userId?c(o.Vv,t.userId):l(o.Vv),t.userType?c(o.ut,t.userType):l(o.ut),t.feature?c(o.Xj,t.feature):l(o.Xj),t.eplantJoin?c(o.T9,t.eplantJoin):l(o.T9),t.viewedIds?c(o.xG,t.viewedIds):l(o.xG),t.clickedIds?c(o.O8,t.clickedIds):l(o.O8),t.cardId?c(o.cM,t.cardId):l(o.cM),t.swIds?c(o.XE,t.swIds):l(o.XE),t.curCondition?c(o.Lm,t.curCondition):l(o.Lm),t.latlon?c(o.Rt,t.latlon):l(o.Rt),t.lastUpdate?c(o.uM,t.lastUpdate):l(o.uM),t.aqLvl?c(o.x1,t.aqLvl):l(o.x1),t.plTdLvl?c(o.CU,t.plTdLvl):l(o.CU),t.plTmrLvl?c(o.UW,t.plTmrLvl):l(o.UW),t.swDetail?c(o.y9,t.swDetail):l(o.y9),t.resIdx?c(o.aH,t.resIdx):l(o.aH),t.normalizedSkyCode&&n.YT&&n.YT.addOrUpdateTmplProperty("normalizedSkyCode",`${t.normalizedSkyCode}`),t.nowcastTemplate&&n.YT&&n.YT.addOrUpdateTmplProperty("nowcastTemplate",`${t.nowcastTemplate}`),a(t,e)}function a(t,e){if(e.contentType)if("LifeHolidayPromotion"===e.contentType){const i=t.contentTitle||t.contentCapIcon||"";c(o.Dh,e.contentType+i)}else c(o.Dh,e.contentType);e.minimap&&e.minimap.mapType?c(o.K4,e.minimap.mapType):l(o.K4),e.telemetryObject&&e.telemetryObject.contract&&e.telemetryObject.contract.ext&&e.telemetryObject.contract.ext.row?c(o.Lj,e.telemetryObject.contract.ext.row.toString()):l(o.Lj),t.contentCapIcon?l("NoContentIcon"):c("NoContentIcon","true"),e.followedLocations&&c(o.r1,`${e.followedLocations.length}`),c(o.Dw,e.minimap?"true":"false"),c(o.L5,e.isPinned?"1":"0"),e.isProngReclaim&&c(o.sC,"1")}function s(t,e){return(t=t||{}).signature=e,t}function c(t,e){n.YT&&n.YT.addOrUpdateTmplProperty(t,e)}function l(t){n.YT&&n.YT.removeTmplProperty(t)}},7014:function(t,e,i){"use strict";i.d(e,{m:function(){return A}});var o=i(56911),n=i(38493),r=i(60815),a=i(55230),s=i(92011),c=i(56863);class l extends s.L{}class d extends((0,c.dx)(l)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class h extends d{constructor(){super(),this.initialValue="on",this.keypressHandler=t=>{if(!this.readOnly)switch(t.key){case a.Mm:case a.gG:this.checked=!this.checked}},this.clickHandler=t=>{this.disabled||this.readOnly||(this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly),this.readOnly?this.classList.add("readonly"):this.classList.remove("readonly")}checkedChanged(t,e){super.checkedChanged(t,e),this.checked?this.classList.add("checked"):this.classList.remove("checked")}}(0,o.Cg)([(0,n.CF)({attribute:"readonly",mode:"boolean"}),(0,o.Sn)("design:type",Boolean)],h.prototype,"readOnly",void 0),(0,o.Cg)([r.sH,(0,o.Sn)("design:type",Array)],h.prototype,"defaultSlottedNodes",void 0);var u=i(37180),p=i(74849),v=i(64187),f=i(60993),m=i(73477),g=i(22131),b=i(50882),w=i(48196),y=i(86856),$=i(7896),k=i(74838),x=i(79288),C=i(46203),T=i(26920),L=i(43774),S=i(95239),M=i(14996),P=i(48751),I=i(41123),D=i(74089),O=i(4283);const W=p.A`
    :host([hidden]) {
        display: none;
    }

    ${(0,v.V)("inline-flex")} :host {
        align-items: center;
        outline: none;
        font-family: ${$.O};
        margin: calc(${k.vR} * 1px) 0;
        ${""} user-select: none;
    }

    :host([disabled]) {
        opacity: ${x.q};
    }

    :host([disabled]) .label,
    :host([readonly]) .label,
    :host([readonly]) .switch,
    :host([disabled]) .switch {
        cursor: ${f.Z};
    }

    .switch {
        position: relative;
        outline: none;
        box-sizing: border-box;
        width: calc(((${w.D} / 2) + ${k.vR}) * 2px);
        height: calc(((${w.D} / 2) + ${k.vR}) * 1px);
        background: ${C.le};
        border-radius: calc(${w.D} * 1px);
        border: calc(${T.XA} * 1px) solid ${L.nF};
    }

    :host(:enabled) .switch:hover {
        background: ${C.jM};
        border-color: ${L.vA};
        cursor: pointer;
    }

    :host(:enabled) .switch:active {
        background: ${C.RS};
        border-color: ${L.p4};
    }

    :host(:${m.N}) .switch {
        box-shadow: 0 0 0 2px ${S.p}, 0 0 0 4px ${M.WN};
        border-color: ${M.WN};
    }

    .checked-indicator {
        position: absolute;
        height: calc((${w.D} - (${k.vR} * 5.5)) * 1px);
        width: calc((${w.D} - (${k.vR} * 5.5)) * 1px);
        top: calc(${k.vR} * 1px);
        background: ${P.l};
        border-radius: 50%;
        transition: all 0.2s ease-in-out;
    }

    .status-message {
        color: ${P.l};
        cursor: pointer;
        font-size: ${I.K};
        line-height: ${I.Z};
    }

    .label__hidden {
        display: none;
        visibility: hidden;
    }

    .label {
        color: ${P.l};
        font-size: ${I.K};
        line-height: ${I.Z};
        margin-inline-end: calc(${k.vR} * 2px + 2px);
        cursor: pointer;
    }

    ::slotted(*) {
        ${""} margin-inline-start: calc(${k.vR} * 2px + 2px);
    }

    :host([aria-checked="true"]) .checked-indicator {
        background: ${D.l_};
    }

    :host([aria-checked="true"]) .switch {
        background: ${O.IR};
    }

    :host([aria-checked="true"]:enabled) .switch:hover {
        background: ${O.OS};
    }

    :host([aria-checked="true"]:enabled) .switch:hover .checked-indicator {
        background: ${D.XK};
    }

    :host([aria-checked="true"]:enabled) .switch:active {
        background: ${O.am};
    }

    :host([aria-checked="true"]:enabled) .switch:active .checked-indicator {
        background: ${D.J_};
    }

    :host([aria-checked="true"]:${m.N}:enabled) .switch {
        box-shadow: 0 0 0 2px ${S.p}, 0 0 0 4px ${M.WN};
        border-color: transparent;
    }

    .unchecked-message {
        display: block;
    }

    .checked-message {
        display: none;
    }

    :host([aria-checked="true"]) .unchecked-message {
        display: none;
    }

    :host([aria-checked="true"]) .checked-message {
        display: block;
    }
`.withBehaviors(new y.t(p.A`
            .checked-indicator {
                left: calc(${k.vR} * 1px);
            }

            :host([aria-checked="true"]) .checked-indicator {
                left: calc(
                    (((${w.D} / 2) + ${k.vR}) + ${k.vR}) * 1px
                );
            }
        `,p.A`
            .checked-indicator {
                right: calc(${k.vR} * 1px);
            }

            :host([aria-checked="true"]) .checked-indicator {
                right: calc(
                    (((${w.D} / 2) + ${k.vR}) + ${k.vR}) * 1px
                );
            }
        `),(0,g.mr)(p.A`
            .checked-indicator,
            :host(:enabled) .switch:active .checked-indicator {
                forced-color-adjust: none;
                background: ${b.A.FieldText};
            }
            .switch {
                forced-color-adjust: none;
                background: ${b.A.Field};
                border-color: ${b.A.FieldText};
            }
            :host(:enabled) .switch:hover {
                background: ${b.A.HighlightText};
                border-color: ${b.A.Highlight};
            }
            :host([aria-checked="true"]) .switch {
                background: ${b.A.Highlight};
                border-color: ${b.A.Highlight};
            }
            :host([aria-checked="true"]:enabled) .switch:hover,
            :host(:enabled) .switch:active {
                background: ${b.A.HighlightText};
                border-color: ${b.A.Highlight};
            }
            :host([aria-checked="true"]) .checked-indicator {
                background: ${b.A.HighlightText};
            }
            :host([aria-checked="true"]:enabled) .switch:hover .checked-indicator {
                background: ${b.A.Highlight};
            }
            :host(:${m.N}) .switch {
                border-color: ${b.A.Highlight};
                box-shadow: 0 0 0 2px ${b.A.Field},
                    0 0 0 4px ${b.A.FieldText};
            }
            :host([aria-checked="true"]:${m.N}:enabled) .switch {
                box-shadow: 0 0 0 2px ${b.A.Field},
                    0 0 0 4px ${b.A.FieldText};
            }
            :host([disabled]) {
                opacity: 1;
            }
            :host([disabled]) .checked-indicator {
                background: ${b.A.GrayText};
            }
            :host([disabled]) .switch {
                background: ${b.A.Field};
                border-color: ${b.A.GrayText};
            }
            .status-message,
            .label {
                color: ${b.A.FieldText};
            }
        `));var _=i(96950),N=i(82774),F=i(18893);const z=function(t={}){return _.qy`
        <template
            role="switch"
            aria-checked="${t=>t.checked}"
            aria-disabled="${t=>t.disabled}"
            aria-readonly="${t=>t.readOnly}"
            tabindex="${t=>t.disabled?null:0}"
            @keypress="${(t,e)=>t.keypressHandler(e.event)}"
            @click="${(t,e)=>t.clickHandler(e.event)}"
        >
            <label
                part="label"
                class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
            >
                <slot ${(0,N.e)("defaultSlottedNodes")}></slot>
            </label>
            <div part="switch" class="switch">
                <slot name="switch">${(0,F.R)(t.switch)}</slot>
            </div>
            <span class="status-message" part="status-message">
                <span class="checked-message" part="checked-message">
                    <slot name="checked-message"></slot>
                </span>
                <span class="unchecked-message" part="unchecked-message">
                    <slot name="unchecked-message"></slot>
                </span>
            </span>
        </template>
    `}({switch:_.qy`
        <span class="checked-indicator" part="checked-indicator"></span>
    `});const A=class extends h{}.compose({name:`${u.c.prefix}-switch`,template:z,styles:W})},7332:function(t,e,i){"use strict";i.d(e,{P:function(){return Y}});var o=i(56911),n=i(57164),r=i(84855),a=i(28006),s=i(42588),c=i(65343),l=i(47903),d=i(38029),h=i(21799),u=i(93818),p=i(14939),v=i(32122),f=i(48114),m=i(25752),g=i(92337),b=i(77246),w=i(27261),y=i(17720),$=i(32849),k=i(58325),x=i(98216);class C{setPerfMarker(){}}var T=i(65022),L=i(5878),S=i(60815),M=i(38493),P=i(4218),I=i(34457),D=i(930),O=i(59196),W=i(12426),_=i(59537),N=i(89980),F=i(69271),z=i(33425),A=i(91118),R=i.n(A);class E{constructor(t){this.updateSearchLocations=async t=>{const{searchResTooltip:e,searchTooltip:i}=this.card.strings.superSdCard,o=await this.getSearchedInterestOptions(t),n=t&&t.length>0?e:i;this.card.superSDCardData&&this.card.superSDCardData.interestManagerData&&(this.card.superSDCardData.interestManagerData.interestsSuggestionTitle=n),this.card.superSDCardData=(0,v.LF)(this.card.superSDCardData,o)},this.getMyLocations=t=>{const{homeLocation:e,detectedLocation:i,followedLocations:o}=this.card,{handlers:n,strings:r}=this.card,a=(0,F.uU)(e,i,o,t),s=this.card.telemetryContext;return(0,F.zh)(a,{setPrimaryLocationWithToast:null==n?void 0:n.setPrimaryLocationWithToast,removeFollowedLocation:null==n?void 0:n.removeFollowedLocation},r,s)},this.getSearchResultInterestOptions=t=>{const{handlers:e,homeLocation:i,followedLocations:o,telemetryContext:n,strings:r}=this.card,a=t||i;return(0,F.$E)(this.searchResult,{home:a,followedLocations:o},{setPrimaryLocationWithToast:null==e?void 0:e.setPrimaryLocationWithToast,followLocationWithToast:null==e?void 0:e.followLocationWithToast},{...r,intestListFollowNew:r.superSdCard.intestListFollowNew},n)},this.switchToForecastCard=()=>{this.refreshUx=!0,this.card.cardViewMode=n.Dr.Forecast;const{shouldCardOverflow:t,parentElement:e}=this.card;var i;t&&((0,g.m7)(e,void 0,"WeatherSummary",t),null===(i=this.card.handlers)||void 0===i||i.adjustToNewWidgetSize("small"));this.getSuperCardData()},this.card=t,this.getSuperCardData(),this.refreshUx=!0}getSuperCardData(){const{telemetryObject:t,weatherData:e,cardSize:i,wpoMetadata:o,config:n,isPinned:r,isRotationalPreview:a,actionMenuData:s,miniL1TabIdx:c,handlers:l,strings:d,isRubyCard:h}=this.card;if(!e||!t)return;this.card.isWidgetRegion;const u=!(h&&!(0,v.cw)(i));this.card.superSDCardData={id:"",gridArea:"",childTemplateType:"sd-card",immersiveCard:!1,cardSize:(0,I.id)(i),headerData:{isEventCard:!0,isWidget:n.isDynamicFeed,isPinned:r&&!f.F_.get(21),strings:{pinIconToolTip:d.pinnedWidgetText},onActionMenuButtonClick:n.isDynamicFeed?t=>{var e;null===(e=this.card.handlers)||void 0===e||e.toggleWeatherCardActions(t)}:void 0,headerLogo:this.getHeadIcon(),title:e.shortLocationName,titleTooltip:{isTitleTooltip:!0,tooltipText:e.locationName},titleNavigationLink:e.link,isActionMenuAvailable:n.enableCardAction,isWidgetRegion:this.card.isWidgetRegion,actionMenuData:n.isDynamicFeed?void 0:(null==l?void 0:l.getActionMenu())||s,isHideCardAvailable:null==s?void 0:s.isHideCardAvailable,isMoreSettingAvailable:null==s?void 0:s.isMoreSettingAvailable,interestMenuData:n.disableInterestMenu?void 0:this.getInterestMenuData()},footerData:u?{...(0,v.Z6)(t,e,t=>l.handleTabClick(t),c,this.card.isWidgetRegion),isWidgetRegion:this.card.isWidgetRegion}:{},isSpotlightCard:a,contextualFeedbackData:o&&o.isGA&&{cFId:o.cfId,cFMetadataType:o.cFMetadataType},enableHoverTelemetry:n.enableHover,parentTelemetryObject:t,onSDCardClick:this.card.onSDCardClick},this.card.cardFirstViewReady()}getHeadIcon(){const{weatherData:t,config:e,homeLocation:i,followedLocations:o,detectedLocation:n,isThemeDarkMode:r}=this.card;if(!t||!o)return"";const{backgroundData:a,locationInfo:s}=t;let c=r;null!=a&&a.textColor&&(c="#FFFFFF"===a.textColor);const l=c?(0,z.wr)():(0,z.Su)(),d=c?(0,z.cn)():(0,z.w$)();let h="";return h=s?0==o.length||(0,F.gf)(n,s)&&$.isSameLocationPoint(n,s)&&!(0,F.gf)(i,n)?l:d:"",h}getInterestMenuData(){var t;const{weatherData:e,toast:i,homeLocation:o,detectedLocation:r,followedLocations:a,isThemeDarkMode:s}=this.card,c=(0,F.uU)(o,r,a);(0,L.hh)(k._b),(0,L.Mc)(k._b,(null==c||null===(t=c.length)||void 0===t?void 0:t.toString())||"0");const{handlers:l,strings:d}=this.card,h=c.map(t=>{let[i,o,n]=t;return{id:(0,W.Bh)(i),onClick:o?()=>null==l?void 0:l.forceRefreshFeed():async()=>{await(null==l?void 0:l.setPrimaryLocation(i))},imageUrl:"",isFollowed:n,title:$.getDisplayName(i,{skipCountry:!0,skipOldName:!0}),isActive:(0,F.gf)(i,null==e?void 0:e.locationInfo)}}),{manageLocations:u,myLocation:p,superSdCard:v}=d;return{followedInterestsTitle:v.interestListDetect,recommendedInterestsTitle:p,interestMenuItems:h,footerMenuItem:{text:u,onClick:()=>this.switchToRecommendPage()},customizedMenuItems:this.card.config.mobileUpsellAtInterest>0?[{title:this.card.strings.menuMobileUpsell1,onClick:()=>l.setMobileUpsellPopup(!0),id:"mobileupsell",glyph:R(),suffixGlyph:(0,N.Lg)().getItem(n.QP)?void 0:(0,z.px)()}]:void 0,interestMenuToolTip:p}}getInterestManagerDataV2(){const{myLocation:t,superSdCard:e}=this.card.strings;return{illustrationImage:`<img src="${(0,_.VG)("background/weatherSuperFeed/SearchIllustration.png")}" />`,interestOptions:this.getMyLocations(),useCustomInterestOptionTemplate:!0,interestsSuggestionTitle:t,strings:{searchPlaceholder:e.searchPlaceHolder},onInterestOptionClick:async t=>{t.metadata||(this.card.superSDCardData=(0,v.LF)(this.card.superSDCardData,this.card.superSDCardData.interestManagerData.interestOptions));const e=await(null==t?void 0:t.metadata());e&&(this.card.superSDCardData=(0,v.LF)(this.card.superSDCardData,this.card.superSDCardData.interestManagerData.interestOptions,e))},onHandleSearch:async t=>{t?await this.updateSearchLocations(t):this.card.superSDCardData=(0,v.LF)(this.card.superSDCardData,this.getMyLocations())},onDismissInterestManager:()=>{this.switchToForecastCard()}}}async getSearchedInterestOptions(t){var e;const i=await(null===(e=this.card.handlers)||void 0===e?void 0:e.getLocationSuggestList(t));return i?(this.searchResult=i.filter(t=>!!t),this.getSearchResultInterestOptions()):(this.searchResult=null,null)}switchToRecommendPage(){const t=this.getInterestManagerDataV2();this.card.superSDCardData={...this.card.superSDCardData,toggleInterestManager:!0,interestManagerData:t},this.card.cardViewMode=n.Dr.Setting,this.refreshUx=!1}switchToMobileUpsellPage(){this.card.cardViewMode=n.Dr.Upsell,this.refreshUx=!1}}var U=i(21481),V=i(88768),B=i(56589),H=i(66600),j=i(86373),q=i(27597),J=i(35849),Q=i(59545),G=i(18750);class Y extends U.U{weatherDataChanged(t,e){if(e){var i,o;const t=O.E.getWeatherGlyphBySymbolOrSkyCode(null==e||null===(i=e.weatherState)||void 0===i||null===(i=i.currentCondition)||void 0===i?void 0:i.symbol,null==e||null===(o=e.weatherState)||void 0===o||null===(o=o.currentCondition)||void 0===o?void 0:o.pvdrIcon,"",e.iconMap),n=e.locationName+""+(this.strings.miniMapSeeMore?"\n"+this.strings.miniMapSeeMore:""),r=new CustomEvent("bing-hp-msg",{detail:{weatherData:e,iconUrl:t,tooltipInfo:n}});document.dispatchEvent(r)}window&&(window._weatherNotRendered=!1)}minimapChanged(t){!t&&this.minimap&&(0,j.J)(this)}async previewTypeChanged(t,e){if(this.isDynamicFeed||t===e)return;const i={experienceType:this.getExperienceType(),instanceSrc:"default"};if(!this.config){const t=(await B.L.getConfig(i)).properties;if(!t)return;this.config=t,this.strings=this.config.localizedStrings}this.updateUxByPreviewType(e)}constructor(){super(),this.ensureObservableBeforeConnect=!0,this.loadedExps={},this.isActionMenuOpen=!1,this.isHideCardDialogShow=!1,this.isReportIssuDialogShow=!1,this.isAnimationsEnabled=!0,this.isRubyCard=!1,this.ePlantMuted=!0,this.delayComponentLoaded=!1,this.isVisualReady=!1,this.mouseEntered=!1,this.userType=void 0,this.showToast=!1,this.miniL1TabIdx=0,this.ttvrFired=!1,this.isOnRotationalPreview=()=>this.isRotationalPreview||this.config.mockTkRt||this.isProngReclaim,this.extractFeedData=()=>{this.mapperArgs&&(this.openLinksInNewTab=this.mapperArgs.openLinksInNewTab,this.hideWeatherCardCallback=this.mapperArgs.hideCardCallback,this.goToPersonalizeSettingsCallback=this.mapperArgs.goToPersonalizeSettingsCallback,this.turnOffWidgetsRegionCallback=this.mapperArgs.turnOffWidgetsRegionCallback,this.manageWidgetsRegionCallback=this.mapperArgs.manageWidgetsRegionCallback,this.dismissActionMenu=this.mapperArgs.dismissSDCardMenuCallback,this.refreshSDCardSection=this.mapperArgs.refreshSDCardSection,this.isRubyCard&&(this.refreshSDCardSection=this.mapperArgs.refreshFeedCallback),this.sdCardActionClickHandler=this.mapperArgs.sdCardActionClickHandler,this.visualReadinessCallback=this.mapperArgs.visualReadinessCallback,this.supportedSdCardActionMenuItems=this.mapperArgs.supportedSdCardActionMenuItems,this.cardSize=this.feedLayoutCardSize===D.uE._1x_1y||this.feedLayoutCardSize===D.uE._05u?"half":"full",this.isRubyCard&&"full"===this.cardSize&&(this.cardSize="large"),this.isWidgetRegion=this.mapperArgs.isWidgetRegion,this.onSDCardClick=this.mapperArgs.onSDCardClick,this.parentTelemetry=null,this.wpoMetadata=this.mapperArgs.cardMetadata&&this.mapperArgs.cardMetadata.wpoMetadata)},this.handleKeyDown=t=>{this.delayComponentLoaded||"Tab"===t.key&&this.delayLoadComponent().catch(()=>{})},this.onMouseEnter=()=>{this.mouseEntered=!0,this.delayComponentLoaded||this.delayLoadComponent().catch(()=>{})},this.onMouseLeave=()=>{this.mouseEntered=!1},this.closeLocationNotice=()=>{(0,L.Mc)("ClosePopupLocationNotice","2"),this.declinedLocations.push(this.detectedLocation),(0,N.Lg)().setItem(n.qO,JSON.stringify(this.declinedLocations))},this.presentLocationNotice=()=>{var t,e;const i={toastTitle:this.strings.locationNotice.replace("{n}",$.getDisplayName(this.detectedLocation)),toastButton:this.strings.setPrimaryLocation,toastClickAction:()=>{var t;null===(t=this.handlers)||void 0===t||t.saveLocation(this.detectedLocation)},clickToastLabel:this.strings.setPrimaryLocation,clickToastTelemetry:null===(t=this.telemetryContext)||void 0===t||null===(t=t.switchLocation)||void 0===t?void 0:t.getMetadataTag(),toastCloseAction:this.closeLocationNotice.bind(this),closeToastLabel:this.strings.close,closeToastTelemetry:null===(e=this.telemetryContext)||void 0===e||null===(e=e.closeLocationNotice)||void 0===e?void 0:e.getMetadataTag()};this.toastTemplate||this.delayComponentLoaded||this.delayLoadComponent().catch(()=>{}),this.toast(i)},this.taskbarRotateHandler=t=>{const e=(null==t?void 0:t.detail)||{};this.updateUxByPreviewType(e.previewType)},this.updateUxByPreviewType=t=>{this.setPreviewValue(t),(0,P.fF)(this,this.cardMetadata,!0),this.isRotationalPreview&&(0,s.IJ)(this.displayContent,(0,P.oG)(),this.contentDataList)},this.setPreviewValue=t=>{t&&t.startsWith("Weather")?(0,P.Jg)(t.split("|")[0]):(0,P.uE)()},this.propertyChangeHandler=t=>{"animationsEnabled"===t&&(this.isAnimationsEnabled=0!==this.widgetProperties.getProperty("animationsEnabled"))},this.prong2ThemeChangeHandler=t=>{this.isThemeDarkMode=t},this.ThemeChangeHandler=()=>{this.isThemeDarkMode=(0,G.ud)(),this.superSDCardProps&&this.superSDCardProps.getSuperCardData()},this.sleep=t=>new Promise(e=>window.setTimeout(e,t)),this.toast=t=>{window.clearTimeout(this.toastTimer),this.toastAttr=t,this.toastAttr.onToastClick=()=>this.onToastActionClick(t.toastClickAction),this.toastAttr.onToastClose=()=>this.clearToast(t.toastCloseAction),t.autoClose&&(this.toastTimer=window.setTimeout(()=>this.clearToast(),3e3)),this.showToast=(0,b.S)()&&!0},this.updateSuperCardHeaderData=()=>{this.superSDCardData&&(this.superSDCardData={...this.superSDCardData,headerData:{...this.superSDCardData.headerData,isPinned:this.isPinned&&!f.F_.get(21)}})},this.fireTtvr=()=>{this.ttvrFired||(this.ttvrFired=!0,(0,d.c)("WeatherCardWC.Ready",this.config.isDynamicFeed),(0,f.jA)(r._1i),this.markVisuallyReadyRaf(),this.setIntersectionObserver(),window&&(window._weatherNotRendered=!1))},(0,V.J)(),this.tmpl={}}async cardMetadataChanged(t,e){var i;if(this.settingUpdatedRefreshState&&(this.settingUpdatedRefreshState=!1,this.cardViewMode=n.Dr.Forecast),(0,H.A)(t,e)||!this.cardMetadata||!t)return;const o=null===(i=this.config)||void 0===i?void 0:i.cardMode,r=f.F_.get(13)||!1;o===n._g.FeedOnly?(0,P.fF)(this,this.cardMetadata,r):o===n._g.FeedFirst&&((0,P.fF)(this,this.cardMetadata,!0),this.weatherDataConnector&&this.weatherDataConnector.updateWeatherDataState(this.cardMetadata,r)),window&&(window._weatherNotRendered=!1)}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),e!==i&&e&&i&&"cardsize"===t&&this.handlers&&this.handlers.adjustToNewWidgetSize(i)}telemetryContextChanged(t,e){!(0,H.A)(t,e)&&this.telemetryContext&&window&&(window._weatherNotRendered=!1)}async experienceConnected(){this.hasLoadedCallback&&this.hasLoadedCallback();try{const t=(0,w.iA)();t&&t.includes("reqsrc=vp")&&this.delayLoadComponent().catch(()=>{}),(0,b.S)()||await this.preLoadComponentOnSSR().catch(()=>{}),this.weatherStrategy=new C,this.extractFeedData(),this.config.mockData&&(this.cardMetadata=this.config.mockData),this.config.isDynamicFeed?(this.isPinned=this.supportedSdCardActionMenuItems&&this.supportedSdCardActionMenuItems.includes("unpin"),document.addEventListener("TaskbarPreviewType",this.taskbarRotateHandler),this.cardSize=(0,I.SV)(this.cardSize)):(this.isThemeDarkMode=(0,G.ud)(),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",this.ThemeChangeHandler)),document.addEventListener("keydown",this.handleKeyDown),(0,d.c)("WeatherCardWC.Start",this.config.isDynamicFeed),this.cardSize=this.cardSize||this.config.cardSize||"full",this.cardViewMode=(0,b.S)()?this.cardViewMode||n.Dr.Preload:n.Dr.Forecast,this.initServiceRequestOptions(),this.dataTransformer=new h.C;const e=f.F_.get(13)||!1;if(this.config.cardMode==n._g.FeedOnly)await this.dataTransformer.initialize(this.cardMetadata),(0,P.fF)(this,this.cardMetadata,e),this.config.isDynamicFeed&&this.loadWidgetInstance();else if(this.config.cardMode==n._g.FeedFirst)await this.dataTransformer.initialize(this.cardMetadata),(0,P.fF)(this,this.cardMetadata,!0),!(0,b.S)()&&await y.vv.get("__WeatherDataConnectorPromise__"),this.autoRetryGetDataConnector().catch(()=>{});else if(this.weatherStrategy.setPerfMarker(),this.config.enableCardDataConnector||await this.loadBackupMapper(),0==this.initDataConnector())return void x.YT.sendAppErrorEvent({...T.Gv7,message:"Fail to get weather data connector"});await this.deferLoadHandlerByCanvas(),this.weatherCardLegacyComponent=!this.config.enableSuperfeedUx&&await this.loadLegacyCard(),await(0,j.J)(this),this.config.enableSuperfeedUx&&(this.superSDCardProps=new E(this)),this.addZoneToTelemetry(),this.config.hostPlace&&i.e("weather-card-wc-init-account-type").then(i.bind(i,16040)).then(t=>{const{initAccountType:e}=t;e(this)}),this.isVisualReady||(0,Q.Qc)().then(()=>{this.isVisualReady=!0},()=>{}),this.createSVG||(this.createSVG=await(0,c.YQ)())}catch(t){x.YT.sendAppErrorEvent({...T.gB,message:"error in experience [weather-card-wc],Weather: Exception to initialize WeatherCardWC",pb:{...T.gB.pb,customMessage:`Failed with exception : ${t}`,isPinned:this.isPinned}})}}disconnectedCallback(){var t,e;super.disconnectedCallback(),this.unsetIntersectionObserver(),null!==(t=this.config)&&void 0!==t&&t.isDynamicFeed&&(document.removeEventListener("TaskbarPreviewType",this.taskbarRotateHandler),document.removeEventListener("keydown",this.handleKeyDown),this.unloadWidgetInstance()),this.clearToast(),(0,L.hh)(k.sC),f.F_.unsubscribe(21,this.updateSuperCardHeaderData),null!==(e=this.config)&&void 0!==e&&e.isDynamicFeed||window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change",this.ThemeChangeHandler)}getExperienceType(){return r._1i}shadowDomPopulated(){this.weatherData&&this.fireTtvr(),(0,I.S0)(this),f.F_.subscribe(21,this.updateSuperCardHeaderData)}initDataConnector(){var t;if(this.weatherDataConnector)return;const e=null!==(t=this.config)&&void 0!==t&&t.enableCardDataConnector?a.BS:a.ni,i=(0,J.zP)(e);return!!i&&(this.weatherDataConnector=i,(this.config.cardMode==n._g.Card||this.config.cardMode==n._g.FeedFirst&&!this.cardMetadata)&&this.config.enableSuperfeedUx&&this.weatherDataConnector.fetchActiveStateforWeather(null,null,this.serviceRequestOptions).then(async t=>{t&&((0,P.Pz)(this,this.weatherDataConnector.getCurrentState()),(0,P.OW)(this,this.weatherDataConnector.getCurrentState()))},()=>{}),(0,q.vQ)(e,t=>{this.bgMapper=(0,u.d)(this,t,(0,P.pH)()),t.settingUpdateStatus==l.QZ.WCComplete&&(0,p.Aj)(t.unit),(0,P.OW)(this,t),!this.weatherData||this.config.cardMode!=n._g.Card&&this.config.cardMode!=n._g.FeedFirst||this.fireTtvr()}),!0)}async autoRetryGetDataConnector(){let t=50;for(;t>0&&!this.initDataConnector();)await this.sleep(500),t--;if(!this.weatherDataConnector)return void x.YT.sendAppErrorEvent({...T.Gv7,message:"Fail to get feed mode weather data connector"});if(!this.cardMetadata)return;const e=f.F_.get(13)||!1;this.weatherDataConnector.updateWeatherDataState(this.cardMetadata,e)}async delayLoadComponent(){const{delayLoadComponent:t}=await i.e("weather-card-wc-deferred").then(i.bind(i,41141));await t(this),this.delayComponentLoaded=!0}async preLoadComponentOnSSR(){const{preLoadComponentOnSSR:t}=await i.e("weather-minimap-wc").then(i.bind(i,67616));await t()}setIntersectionObserver(){if(this.intersectionObserver||!(0,b.S)())return;this.intersectionObserver=new IntersectionObserver(t=>{if(t){var e;(null===(e=t[0])||void 0===e?void 0:e.intersectionRatio)>0&&(0,L.SL)(this.tmpl,this)}},{threshold:[0]}),this.intersectionObserver.observe(this)}unsetIntersectionObserver(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0)}initServiceRequestOptions(){this.serviceRequestOptions={},this.serviceRequestOptions.requestInfo={experience:"wcardwc"},this.serviceRequestOptions.partialHourly=!0,this.serviceRequestOptions.weatherDataCachePrefix=this.config.weatherDataCachePrefix,this.serviceRequestOptions.weatherDataCacheDuration=this.config.weatherDataCacheDuration}loadWidgetInstance(){this.widgetInstance=(0,m.OQ)(),f.F_.subscribe(1,this.prong2ThemeChangeHandler),this.widgetInstance&&(this.widgetProperties=this.widgetInstance.tryGetApi("properties",m.XF,m.XF),this.widgetProperties&&(this.isAnimationsEnabled=0!==this.widgetProperties.getProperty("animationsEnabled"),this.widgetProperties.addPropertyChangeListener(this.propertyChangeHandler)))}unloadWidgetInstance(){f.F_.unsubscribe(1,this.prong2ThemeChangeHandler),this.widgetProperties&&this.widgetProperties.removePropertyChangeListener(this.propertyChangeHandler)}addZoneToTelemetry(){this.config.isDynamicFeed&&(this.telemetryObject.contract.zone=(0,g.Yd)(this.isPinned,"WeatherSummary",this.isRotationalPreview))}onMapRenderError(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Failed to build mini map props in weather card";(0,v.cw)(this.cardSize)||x.YT.sendAppErrorEvent({...T.QxS,message:e,pb:{...T.QxS.pb,customMessage:JSON.stringify(t)}}),this.minimap=null,this.defaultMapPageUrl=null}handleTabClick(t){this.handlers.handleTabClick(t.detail)}setMobileUpsellPopup(t){this.handlers.setMobileUpsellPopup(t.detail)}async loadLegacyCard(){const{delayLoadLegacyCard:t}=await i.e("weather-legacy-card").then(i.bind(i,71944));return await t(this),this.legacyCardTemplate}getEPlantEnabled(){return!(!this.config.enableEPlant||this.ePlantMuted||!this.isVisualReady)&&(!this.primaryCarousel||"nowcast"!==this.primaryCarousel&&"nowcastalert"!==this.primaryCarousel||this.config.enableEPlantNowcast)}cardFirstViewReady(){this.cardViewMode!==n.Dr.Preload&&this.cardViewMode!==n.Dr.Error||(this.cardViewMode=n.Dr.Forecast)}clearToast(t){t&&t(),this.showToast=!1,window.clearTimeout(this.toastTimer),this.toastAttr=null,this.toastTimer=null}onToastActionClick(t){t&&t(),this.clearToast()}async loadBackupMapper(){const{legacyMapperLoader:t}=await i.e("weather-card-backup-mapper").then(i.bind(i,72331));this.backupMapper=t()}async deferLoadHandlerByCanvas(){this.config.hostPlace!==n.mn.NTP&&this.config.hostPlace!==n.mn.WINHP||await i.e("getFeedManager").then(i.bind(i,87283)).then(t=>t.delayLoadHandler(this))}}(0,o.Cg)([S.sH],Y.prototype,"actionMenuData",void 0),(0,o.Cg)([S.sH],Y.prototype,"isActionMenuOpen",void 0),(0,o.Cg)([(0,M.CF)({mode:"boolean"})],Y.prototype,"isHideCardDialogShow",void 0),(0,o.Cg)([(0,M.CF)({mode:"boolean"})],Y.prototype,"isReportIssuDialogShow",void 0),(0,o.Cg)([M.CF],Y.prototype,"cardSize",void 0),(0,o.Cg)([(0,M.CF)({mode:"boolean"})],Y.prototype,"isThemeDarkMode",void 0),(0,o.Cg)([(0,M.CF)({mode:"boolean"})],Y.prototype,"isAnimationsEnabled",void 0),(0,o.Cg)([S.sH],Y.prototype,"cardViewMode",void 0),(0,o.Cg)([S.sH],Y.prototype,"cardLayout",void 0),(0,o.Cg)([(0,M.CF)({mode:"boolean"})],Y.prototype,"focusToCard",void 0),(0,o.Cg)([S.sH],Y.prototype,"isWidgetRegion",void 0),(0,o.Cg)([S.sH],Y.prototype,"weatherData",void 0),(0,o.Cg)([S.sH],Y.prototype,"isRubyCard",void 0),(0,o.Cg)([S.sH],Y.prototype,"primaryCarousel",void 0),(0,o.Cg)([S.sH],Y.prototype,"minimap",void 0),(0,o.Cg)([S.sH],Y.prototype,"isDynamicFeed",void 0),(0,o.Cg)([S.sH],Y.prototype,"previewType",void 0),(0,o.Cg)([S.sH],Y.prototype,"defaultMapPageUrl",void 0),(0,o.Cg)([S.sH],Y.prototype,"telemetryContext",void 0),(0,o.Cg)([S.sH],Y.prototype,"settingData",void 0),(0,o.Cg)([S.sH],Y.prototype,"ePlantMuted",void 0),(0,o.Cg)([S.sH],Y.prototype,"cardMetadata",void 0),(0,o.Cg)([S.sH],Y.prototype,"delayComponentLoaded",void 0),(0,o.Cg)([S.sH],Y.prototype,"handlers",void 0),(0,o.Cg)([S.sH],Y.prototype,"dataTransformer",void 0),(0,o.Cg)([S.sH],Y.prototype,"refreshFeed",void 0),(0,o.Cg)([S.sH],Y.prototype,"hideDialogComponent",void 0),(0,o.Cg)([S.sH],Y.prototype,"hideRemindComponent",void 0),(0,o.Cg)([S.sH],Y.prototype,"reportIssueComponent",void 0),(0,o.Cg)([S.sH],Y.prototype,"toastTemplate",void 0),(0,o.Cg)([S.sH],Y.prototype,"legacyCardTemplate",void 0),(0,o.Cg)([S.sH],Y.prototype,"mobileUpsellComponent",void 0),(0,o.Cg)([S.sH],Y.prototype,"isRotationalPreview",void 0),(0,o.Cg)([S.sH],Y.prototype,"isVisualReady",void 0),(0,o.Cg)([S.sH],Y.prototype,"superSDCardProps",void 0),(0,o.Cg)([S.sH],Y.prototype,"superSDCardData",void 0),(0,o.Cg)([S.sH],Y.prototype,"mouseEntered",void 0),(0,o.Cg)([S.sH],Y.prototype,"userType",void 0),(0,o.Cg)([S.sH],Y.prototype,"followedLocations",void 0),(0,o.Cg)([S.sH],Y.prototype,"weatherCardLegacyComponent",void 0),(0,o.Cg)([S.sH],Y.prototype,"showToast",void 0),(0,o.Cg)([S.sH],Y.prototype,"toastAttr",void 0),(0,o.Cg)([S.sH],Y.prototype,"miniL1TabIdx",void 0),(0,o.Cg)([(0,M.CF)({mode:"boolean"})],Y.prototype,"isProngReclaim",void 0)},9299:function(t,e,i){"use strict";i.d(e,{m:function(){return F}});var o=i(56911),n=i(38493),r=i(60815),a=i(55230),s=i(92011),c=i(56863);class l extends s.L{}class d extends((0,c.dx)(l)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class h extends d{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=t=>{if(!this.readOnly&&t.key===a.gG)this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked},this.clickHandler=t=>{this.disabled||this.readOnly||(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}(0,o.Cg)([(0,n.CF)({attribute:"readonly",mode:"boolean"}),(0,o.Sn)("design:type",Boolean)],h.prototype,"readOnly",void 0),(0,o.Cg)([r.sH,(0,o.Sn)("design:type",Array)],h.prototype,"defaultSlottedNodes",void 0),(0,o.Cg)([r.sH,(0,o.Sn)("design:type",Boolean)],h.prototype,"indeterminate",void 0);var u=i(37180),p=i(74849),v=i(64187),f=i(73477),m=i(60993),g=i(22131),b=i(50882),w=i(74838),y=i(57416),$=i(26920),k=i(43774),x=i(46203),C=i(7896),T=i(48751),L=i(41123),S=i(95239),M=i(14996),P=i(79288),I=i(48196);const D=p.A`
    ${(0,v.V)("inline-flex")} :host {
        align-items: center;
        outline: none;
        margin: calc(${w.vR} * 1px) 0;
        ${""} user-select: none;
    }

    .control {
        position: relative;
        width: calc((${I.D} / 2 + ${w.vR}) * 1px);
        height: calc((${I.D} / 2 + ${w.vR}) * 1px);
        box-sizing: border-box;
        border-radius: calc(${y.Pb} * 1px);
        border: calc(${$.XA} * 1px) solid ${k.nF};
        background: ${x.le};
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
        ${""} padding-inline-start: calc(${w.vR} * 2px + 2px);
        margin-inline-end: calc(${w.vR} * 2px + 2px);
        cursor: pointer;
        font-size: ${L.K};
        line-height: ${L.Z};
    }

    .checked-indicator {
        width: 100%;
        height: 100%;
        display: block;
        fill: ${T.l};
        opacity: 0;
        pointer-events: none;
    }

    .indeterminate-indicator {
        border-radius: calc((${y.Pb} / 2) * 1px);
        background: ${T.l};
        position: absolute;
        top: 50%;
        left: 50%;
        width: 50%;
        height: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
    }

    :host(:enabled) .control:hover {
        background: ${x.jM};
        border-color: ${k.vA};
    }

    :host(:enabled) .control:active {
        background: ${x.RS};
        border-color: ${k.p4};
    }

    :host(:${f.N}) .control {
        box-shadow: 0 0 0 2px ${S.p}, 0 0 0 4px ${M.WN};
        border-color: ${M.WN};
    }

    :host([disabled]) .label,
    :host([readonly]) .label,
    :host([readonly]) .control,
    :host([disabled]) .control {
        cursor: ${m.Z};
    }

    :host([aria-checked="true"]:not([aria-checked="mixed"])) .checked-indicator,
    :host([aria-checked="mixed"]) .indeterminate-indicator {
        opacity: 1;
    }

    :host([disabled]) {
        opacity: ${P.q};
    }
`.withBehaviors((0,g.mr)(p.A`
            .control {
                forced-color-adjust: none;
                border-color: ${b.A.FieldText};
                background: ${b.A.Field};
            }
            :host(:enabled) .control:hover,
            .control:active {
                border-color: ${b.A.Highlight};
                background: ${b.A.Field};
            }
            .checked-indicator {
                fill: ${b.A.FieldText};
            }
            .indeterminate-indicator {
                background: ${b.A.FieldText};
            }
            :host(:${f.N}) .control {
                border-color: ${b.A.Highlight};
                box-shadow: 0 0 0 2px ${b.A.Field},
                    0 0 0 4px ${b.A.FieldText};
            }
            :host([aria-checked="true"]:${f.N}:enabled) .control {
                box-shadow: 0 0 0 2px ${b.A.Field},
                    0 0 0 4px ${b.A.FieldText};
            }
            :host([aria-checked="true"]) .control {
                background: ${b.A.Highlight};
                border-color: ${b.A.Highlight};
            }
            :host([aria-checked="true"]) .control:hover,
            .control:active {
                background: ${b.A.HighlightText};
            }
            :host([aria-checked="true"]) .checked-indicator {
                fill: ${b.A.HighlightText};
            }
            :host([aria-checked="true"]) .control:hover .checked-indicator {
                fill: ${b.A.Highlight};
            }
            :host([aria-checked="true"]) .indeterminate-indicator {
                background: ${b.A.HighlightText};
            }
            :host([aria-checked="true"]) .control:hover .indeterminate-indicator {
                background: ${b.A.Highlight};
            }
            :host([disabled]) {
                opacity: 1;
            }
            :host([disabled]) .control {
                forced-color-adjust: none;
                border-color: ${b.A.GrayText};
                background: ${b.A.Field};
            }
            :host([disabled]) .indeterminate-indicator,
            :host([aria-checked="true"][disabled])
                .control:hover
                .indeterminate-indicator {
                forced-color-adjust: none;
                background: ${b.A.GrayText};
            }
            :host([disabled]) .checked-indicator,
            :host([aria-checked="true"][disabled]) .control:hover .checked-indicator {
                forced-color-adjust: none;
                fill: ${b.A.GrayText};
            }
        `));var O=i(96950),W=i(82774),_=i(18893);const N=function(t={}){return O.qy`
        <template
            role="checkbox"
            aria-checked="${t=>t.indeterminate?"mixed":t.checked}"
            aria-required="${t=>t.required}"
            aria-disabled="${t=>t.disabled}"
            aria-readonly="${t=>t.readOnly}"
            tabindex="${t=>t.disabled?null:0}"
            @keypress="${(t,e)=>t.keypressHandler(e.event)}"
            @click="${(t,e)=>t.clickHandler(e.event)}"
        >
            <div part="control" class="control">
                <slot name="checked-indicator">
                    ${(0,_.R)(t.checkedIndicator)}
                </slot>
                <slot name="indeterminate-indicator">
                    ${(0,_.R)(t.indeterminateIndicator)}
                </slot>
            </div>
            <label
                part="label"
                class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
            >
                <slot ${(0,W.e)("defaultSlottedNodes")}></slot>
            </label>
        </template>
    `}({checkedIndicator:O.qy`
        <svg
            aria-hidden="true"
            part="checked-indicator"
            class="checked-indicator"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.143 12.6697L15.235 4.5L16.8 5.90363L8.23812 15.7667L3.80005 11.2556L5.27591 9.7555L8.143 12.6697Z"
            />
        </svg>
    `,indeterminateIndicator:O.qy`
        <div part="indeterminate-indicator" class="indeterminate-indicator"></div>
    `}),F=h.compose({name:`${u.c.prefix}-checkbox`,template:N,styles:D})},13038:function(t,e,i){"use strict";i.d(e,{I:function(){return o}});const o={normalWeather:"NormalWeather",nowcast:"Nowcast",severeWeather:"SevereWeather",severeWeather2nd:"SevereWeather2nd",severeWeatherHashSpotlight:"SevereWeather#Spotlight",alertNowcast:"AlertNowcast",hurricane:"Hurricane",hurricaneAround:"HurricaneAround",aqiCard:"AQICard",wildFirePointFullCard:"WildFirePointFullCard",wildFirePointCard:"WildFirePointCard",jwaPollen:"JwaPollen",usPollen:"USPollen",euPollen:"EUPollen",teaserDayCard:"TeaserDayCard",teaserHourlyCard:"TeaserHourlyCard",teaserUV:"TeaserUV",teaserHumidity:"TeaserHumidity",teaserWind:"TeaserWind",teaserTemp:"TeaserTemp",teaserRain:"TeaserRain",teaserCard:"TeaserCard",storm:"Storm"}},21799:function(t,e,i){"use strict";i.d(e,{C:function(){return s}});var o=i(48983),n=i(12426),r=i(93818),a=i(58022);class s{constructor(){this.locIdx=0,this.resIdx="",this.weatherMetaData=""}async initialize(t){if(!t)return;const e=JSON.parse(t);if(!(this.backupMapper||e.cards&&e.cards.length)){const{legacyMapperLoader:t}=await i.e("weather-card-backup-mapper").then(i.bind(i,8826));this.backupMapper=t()}}setCardMetadata(t,e){if(!t)return!1;this.weatherMetaData=t,this.locIdx=e;const i=this.parseWeatherMetaDataStr();return!!i&&(this.parseUserProfile(i.userProfile),!0)}parseWeatherMetaDataStr(){const t=JSON.parse(this.weatherMetaData);if(!(t&&t.responses&&t.responses.length&&t.userProfile))return;this.bgMapper=(0,r.L)({backupMapper:this.backupMapper},t.cards,this.locIdx);const{responses:e,userProfile:i}=t,{location:o,followedLocations:n}=i;o&&n&&n.length&&(t.userProfile.home=o);const a=e.length;return this.locIdx>0&&e[this.locIdx]&&n&&n[this.locIdx]&&(t.responses[0]=e[this.locIdx],t.userProfile.location=n[this.locIdx]),this.weatherResponse=t,this.resIdx=`${this.locIdx}-${a}`,t}isSameLocation(t,e){return!(!t||!e)&&(0,n.nS)(t,e)}getLocationList(t,e,i,o){const n=[],r=o||t;if(r&&n.push([r,!0,!1]),e&&!this.isSameLocation(r,e)&&n.push([e,!1,!0]),i)for(const t of i)this.isSameLocation(r,t)||this.isSameLocation(e,t)||n.push([t,!1,!1]);return n}parseUserProfile(t){if(!t)return;this.userProfile=t;const{location:e,locationSettingMode:i,home:n,detectedLocation:r,followedLocations:s}=t;i&&(this.locationSettingMode=Number(i)),this.ePlantMuted=!!t&&t.eplant&&2===t.eplant.st||!1,this.weatherLocation=(0,a.dB)(e),this.homeLocation=1==i?void 0:(0,a.dB)(n),this.detectedLocation=(0,a.dB)(r),this.followedLocations=(0,o.LT)(s&&s.map(t=>(0,a.dB)(t))),this.locationList=this.getLocationList(this.homeLocation,this.detectedLocation,this.followedLocations)}getRawParsedResponse(){return{weatherResponse:this.weatherResponse,resIdx:this.resIdx,locIdx:this.locIdx}}getBgMapper(){return{bgMapper:this.bgMapper,backupMapper:this.backupMapper}}getUserProfileData(){return{userProfile:this.userProfile,ePlantMuted:this.ePlantMuted,locationSettingMode:this.locationSettingMode,weatherLocation:this.weatherLocation,homeLocation:this.homeLocation,detectedLocation:this.detectedLocation,followedLocations:this.followedLocations}}getWeatherOverviewFormat(t,e){if(!this.weatherResponse||!this.weatherLocation||!this.bgMapper)return;const i=JSON.parse(JSON.stringify(this.weatherResponse)),o=i.responses[0].weather[0];t&&o&&(o.disableFreshCheck=!0);const n={response:i,location:this.weatherLocation,locStrResolver:t=>{var e;return(null===(e=this.bgMapper)||void 0===e?void 0:e.getLocStr(t))||""}};return{...(0,a.OW)(n,{dailyAsOption:!0,...e}),currentLocation:this.weatherLocation}}}},26237:function(t,e,i){"use strict";i.r(e),i.d(e,{ToolingInfo:function(){return b},WeatherCardWC:function(){return n.P},WeatherCardWCStyles:function(){return g},WeatherCardWCTemplate:function(){return m}});var o=i(88768),n=i(7332),r=i(96950),a=i(91640),s=i(57164),c=i(66830),l=i(14939),d=i(25671),h=i(54539),u=i(34457);const p=r.qy`<msft-weather-super-sd-card id="WeatherCard" layout="${t=>t.cardSize}" isRubyCard="${t=>t.isRubyCard}" target=${t=>0==t.openLinksInNewTab?"_self":"_blank"} focusToCard="${t=>t.focusToCard}" :enableEPlant="${t=>t.getEPlantEnabled()&&void 0!==t.userType&&t.userType!==s.ut.AAD&&t.weatherData&&"miniL1"!==t.weatherData.uxFormat}" ePlantLabel="${t=>t.strings.ePlantButtonLabel}" ePlantIcon="${t=>t.config.ePlantIcon}" :weatherData="${t=>t.weatherData||{}}" :createSVG="${t=>t.createSVG}" :tabIdx="${t=>t.miniL1TabIdx}" :animationSource="${t=>t.weatherData&&t.weatherData.backgroundData&&t.weatherData.backgroundData.animationSource}" :primaryCarousel="${t=>t.primaryCarousel}" :telemetry="${t=>t.telemetryContext}" data-t="${t=>{var e;return null===(e=t.telemetryContext)||void 0===e||null===(e=e.weatherCard)||void 0===e?void 0:e.getMetadataTag()}}" @imageFailed=${(t,e)=>{var i;return(0,l.Pn)(e.event,null===(i=t.minimap)||void 0===i?void 0:i.mapType,"weather-card-wc")}} style="position: static" data-clarity-mask="true" :minimapWce=${t=>{var e;return null===(e=t.config.slots)||void 0===e?void 0:e.weatherMinimapWC}} :videoEntryWce=${t=>{var e;return null===(e=t.config.slots)||void 0===e?void 0:e.weatherVideoEntryWC}} :minimap=${t=>t.minimap} :mobileUpsellImg=${t=>(0,u.xL)(t.config.mobileUpsellAtMiniL1,!1,t.config.mobileUpsellAtMiniL1>0)} :mobileUpsellDesc=${t=>{var e;return null===(e=t.strings.mobileUpsellLocalization)||void 0===e?void 0:e.upsellDesc1}} :mouseEnter="${t=>t.mouseEntered}" @handleTabClick="${(t,e)=>t.handleTabClick(e.event)}" @setMobileUpsellPopup="${(t,e)=>t.setMobileUpsellPopup(e.event)}" @miniMapError="${(t,e)=>t.onMapRenderError(e.event)}"></msft-weather-super-sd-card>`,v=r.qy`<responsive-sd-card :data="${t=>t.superSDCardData}" :toggleInterestManager="${t=>{var e;return null===(e=t.superSDCardData)||void 0===e?void 0:e.toggleInterestManager}}" use-custom-background="true" style="${t=>{var e,i;return(0,d.g)(null===(e=t.weatherData)||void 0===e?void 0:e.backgroundData,t.cardSize,{...t.config,isThemeDarkMode:t.isThemeDarkMode,isRubyCard:t.isRubyCard},null===(i=t.weatherData)||void 0===i?void 0:i.uxFormat)}}" size="${t=>{var e;return(null===(e=t.superSDCardData)||void 0===e?void 0:e.cardSize)||""}}"><div slot="card-content">${p}</div></responsive-sd-card>`,f=r.qy` ${(0,a.z)(t=>t.cardViewMode!=s.Dr.Remind&&t.cardViewMode!=s.Dr.Upsell,v)} ${t=>{var e;return(0,h.n9)(null===(e=t.weatherData)||void 0===e?void 0:e.backgroundData)}} ${c.g}
`,m=r.qy`<div @mouseenter="${(t,e)=>{t.onMouseEnter()}}" @mouseleave="${(t,e)=>{t.onMouseLeave()}}" style="padding: 0; margin: 0; width: 100%; height: 100%;">${(0,a.z)(t=>t.weatherCardLegacyComponent,t=>t.weatherCardLegacyComponent)} ${(0,a.z)(t=>1==t.config.enableSuperfeedUx,f)}</div>`;const g=i(74849).A` :host{--control-corner-radius:8;--content-padding:0 0 16px;--title-padding:12px 16px;--cs-menu-item-icon-height:14px;position:relative}responsive-sd-card::part(cs-sd-card){background:var(--bgImg);background-size:cover}responsive-sd-card::part(footer-button){background:var(--sd-card-footer-bg);color:var(--sd-card-footer-color)}responsive-sd-card::part(footer-button):hover{background:var(--sd-card-footer-hoverBg);color:var(--sd-card-footer-color)}msft-weather-super-sd-card::part(super-sd-nowcast-animation-bg){top:0px;left:0px;right:0px}fluent-button.neutral::part(control):focus-visible,fluent-anchor.neutral::part(control):focus-visible{outline:2px solid var(--textStyle) !important}`;(0,o.J)();const b={experienceConfigSchema:undefined}},34457:function(t,e,i){"use strict";i.d(e,{S0:function(){return b},SV:function(){return m},Yi:function(){return v},id:function(){return p},xL:function(){return g},zQ:function(){return f}});var o=i(46534),n=i(58242),r=i(22272),a=i(16813),s=i(71160),c=i(32122),l=i(69583),d=i(42588),h=i(93468),u=i(65022);function p(t){return(0,c.cw)(t)?"_1x_1y":(0,c.Cy)(t)?"_1x_2y":(0,c.ck)(t)?"_1x_3y":""}function v(t,e,i,o){const n=t&&t.contenttype;return"AQICard"!=n&&"TeaserAQForecastToday"!=n||!(0,s._N)(i,24)?"TeaserAQForecastWeek"==n&&(0,s._N)(o,4)?["minimap","aqiWeek"]:Array.isArray(d.KQ)&&d.KQ.includes(n)&&o&&o.length?["daily","minimap"]:Array.isArray(d.ad)&&d.ad.includes(n)&&e?["minimap","hourly"]:i&&i.length?["hourly","minimap"]:null:["minimap","aqiToday"]}function f(t){var e,i;if(t.config.enableSuperfeedUx)return;const o="msft-weather-card";(null===(e=t.shadowRoot)||void 0===e||null===(i=e.querySelector)||void 0===i?void 0:i.call(e,o))||(0,h.vV)(u.ooP,`error in experience weather-legacy-card," + "Output empty template ${o}`)}function m(t){return"half"===t?"small":"full"===t?"medium":t}function g(t,e,i){if(i)return"qr-pwa3";if(e)switch(t){case 1:return"qr-m";case 2:return"qr-l3";case 3:return"qr-pwa4"}return"qr-m"}function b(t){var e,i,s,c,d,h;if(!t.isProngReclaim)return;const u=null===(e=t.shadowRoot)||void 0===e||null===(i=e.querySelector)||void 0===i?void 0:i.call(e,"responsive-sd-card"),p=null==u||null===(s=u.shadowRoot)||void 0===s||null===(c=s.querySelector)||void 0===c?void 0:c.call(s,"responsive-header"),v=null==p||null===(d=p.shadowRoot)||void 0===d||null===(h=d.querySelectorAll)||void 0===h?void 0:h.call(d,"button"),f=Array.from(v??[]).find(t=>"more-actions"===t.className),m=null==f?void 0:f.querySelector("img");if(!m)return;const g=t.strings.prong2CoachmarkTitle??"Weather widget",b=t.strings.prong2CoachmarkDes??"Click ∙∙∙ to pin the weather widget and set it to large size for more details. ",w={id:"prong2WeatherNurturing",group:"Default",placementSource:"Internal",surfaceModel:{surfaceType:"Coachmark",size:o.fB.Medium,position:{coachmarkAnchor:m,anchoringPosition:o.M7.Above,hasPointer:!0,pointerPosition:o.X1.Opposite}},contentModel:{title:g,description:b,contentType:a.r.CallToAction}},y=[(0,r.A)("Viewed",12096e5,{relatedPlacementIds:["prong2WeatherNurturing"]}),(0,n.n)("Viewed",3)];(0,l.sn)().then(t=>{t.sendInternalPlacement(w,y)})}},38029:function(t,e,i){"use strict";i.d(e,{c:function(){return s}});var o=i(12870),n=i(30817),r=i(53685),a=i(89151);function s(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:performance.now();const s=!0===o.Rb.IsPrerender?i-(0,a.W4)(r.xF):i;if((0,a.tD)(t,s),e){const e=(0,a.yE)(t);(0,n.ZF)()[t]=e}}},38131:function(t,e,i){"use strict";i.d(e,{NF:function(){return d},Od:function(){return f},TA:function(){return p},Yg:function(){return h},p5:function(){return m},yD:function(){return v},ys:function(){return u}});var o=i(25447),n=i(42588),r=i(71160),a=i(1033),s=i(54539),c=i(12870),l=i(58022);function d(t,e){var i,o;const l=[],d=u(t);if(null==t||!t.forecast)return l;const{strings:h,iconFunc:p,baseLink:v,iconSize:f}=e;if(t.forecast.length>1&&(null!==(i=t.forecast[0].hourly)&&void 0!==i&&i.length||null!==(o=t.forecast[1].hourly)&&void 0!==o&&o.length)){var m;const e=null===(m=t.forecast[0].hourly)||void 0===m?void 0:m.concat(t.forecast[1].hourly||[]),i=t=>t&&(t.pvdrIcon||t.icon),o=t=>t&&t.timeStr;if(!e||!e.every(i)||!e.every(o))return l;const u=e.length,w=(0,a.e3)();for(let i=0;i<u;i++){var g,b;const o=e[i],a=new Date(o.timeStr||""),u=o.pvdrIcon?o.pvdrIcon:o.icon+"",m=(0,s.h7)([p(o.symbol,u)],f,o.cap||""),y=w?v:(0,n.jX)((null===(g=t.forecast[0].hourly)||void 0===g?void 0:g.length)||(null===(b=t.forecast[1].hourly)||void 0===b?void 0:b.length)||0,i,v),$=isNaN(Number(o.aqi))?0:Number(o.aqi),k=c.Rb.Locale,x=(0,r.mA)($,k),C={itemAriaLabel:h.forecastListAriaLabel||"",temperature:o.temperature+"",skyCodeIcon:m,time:d.formatHour(a),aqi:Math.floor($)+"",aqiLevel:x+"",aqiLevelText:(0,r.JF)(x,k,null==h?void 0:h.airQuality),aqiIconUrl:(0,r.mM)(x,"icon"),oriTime:o.timeStr,forecastLink:y||v,precipitation:o.precipitation+"%",feels:o.feels+"",uv:o.uv+"",windSpd:o.windSpeed+""+o.windSpeedUnit};l.push(C)}}return l}function h(t,e){const i=[],{strings:o,iconFunc:l,iconSize:d,baseLink:h,startIndex:p,endIndex:v,forcastDayWithDate:f}=e;if(!(t.forecast&&t.forecast.every(t=>t&&t.day)&&o.dayOfWeekName&&o.dayOfWeek))return i;const m=u(t),g=o.dayOfWeekName,b=[g.sunday,g.monday,g.tuesday,g.wednesday,g.thursday,g.friday,g.saturday],w=o.dayOfWeek,y=[w.sun,w.mon,w.tue,w.wed,w.thu,w.fri,w.sat];let $=5;var k;v&&($=Math.min(Math.max(v,5),null===(k=t.forecast)||void 0===k?void 0:k.length));const x=null!=p?p:Math.max($-5,0),C=(0,a.e3)();for(let e=x;e<$&&e<(null===(T=t.forecast)||void 0===T?void 0:T.length);e++){var T;const a=t.forecast[e];if(!a.day||!a.validTime)continue;if("string"==typeof a.validTime){const t=new Date(a.validTime);if(isNaN(t.getTime()))continue;a.validTime=t}else if(!(a.validTime instanceof Date))continue;const u=C?h:`${h}&day=${e+1}`;let p=y[a.day.getDay()];f&&(p=c.Rb.Locale&&c.Rb.Locale.toLocaleLowerCase().startsWith("en-")?y[a.day.getDay()]+" "+a.day.getDate():(0,n.qj)(a.day,m));const v=isNaN(Number(a.aqi))?0:Number(a.aqi),g=c.Rb.Locale,w=(0,r.mA)(v,g),$={aqi:Math.floor(v)+"",aqiLevel:w+"",aqiLevelText:(0,r.JF)(w,g,null==o?void 0:o.airQuality),aqiIconUrl:(0,r.mM)(w,"icon"),itemAriaLabel:o.forecastListAriaLabel||"",highTempLabel:o.highTempLabel||"",lowTempLabel:o.lowTempLabel||"",highTemp:a.highTemp,lowTemp:a.lowTemp,skyCodeIcon:(0,s.h7)([l(a.symbol,a.pvdrIcon)],d,a.cap||""),time:0==e?o.dayOfWeek.today:p,dayOfWeekName:0==e?o.dayOfWeekName.today:b[a.day.getDay()||0],forecastLink:u};i.push($)}return i}const u=t=>{var e;return new o.i(c.Rb.Locale,null===(e=t.source)||void 0===e||null===(e=e.location)||void 0===e?void 0:e.TimezoneName)};function p(t,e){var i,o,n;if(!t||!t.currentCondition)return;const r=t.currentCondition,a=null===(i=r.skycode)||void 0===i||null===(i=i.children)||void 0===i?void 0:i.toString(),s=a&&a.length<=18?a:r.shortCap??a,c=e(r.symbol,r.pvdrIcon),d=u(t),h=null!==(o=r.currentRaw)&&void 0!==o&&o.created?new Date(r.currentRaw.created):new Date;return{background:r.background,skycode:s,skycodeIconImgUrl:c,normalizedSkyCode:r.normalizedSkyCode,temperature:r.currentTemperature,precipitation:null===(n=r.precipitation)||void 0===n||null===(n=n.children)||void 0===n?void 0:n.toString(),aqi:(0,l.UA)(r.aqi)&&r.aqi||"",shortCap:r.shortCap,createdTime:d.formatHourMinute(h)}}function v(t){if(!t||!t.forecast||0===t.forecast.length)return;const e=t.forecast[0];return{highTemp:e.highTemp,lowTemp:e.lowTemp}}var f;function m(t,e){let i=parseFloat(t);return e===f.NONE||(i=e===f.CTOF?1.8*i+32:(i-32)/1.8),Math.round(i)}!function(t){t[t.NONE=0]="NONE",t[t.FTOC=1]="FTOC",t[t.CTOF=2]="CTOF"}(f||(f={}))},48983:function(t,e,i){"use strict";i.d(e,{FF:function(){return n},LT:function(){return a},q$:function(){return r}});var o=i(46261);function n(t,e){if(!e)return t;t=t||[];const i=[{...e},...t],n={},r=[];for(let t=0;t<i.length;++t){const e=(0,o.Mn)(i[t]),a=`${i[t].latitude},${i[t].longitude}`;n[e]||n[a]||(r.push(i[t]),n[e]=t+1,n[a]=t+1)}return r}function r(t,e){if(!t||!e)return t;for(let i=0;i<t.length;++i)if((0,o.Mn)(t[i])===(0,o.Mn)(e)||t[i].latitude===e.latitude&&t[i].longitude===e.longitude){t.splice(i,1);break}return t}function a(t){if(!t)return[];const e=new Set,i=[];for(const n of t){const t=(0,o.Mn)(n);e.has(t)||(e.add(t),i.push(n))}return i}},49704:function(t){t.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 13h11a.5.5 0 00.42-.78L13.1 8l2.82-4.22A.5.5 0 0015.5 3H4a.5.5 0 00-.5.5v14a.5.5 0 001 0V13zm0-1V4h10.07l-2.49 3.72a.5.5 0 000 .56L14.57 12H4.5z"></path></svg>'},57164:function(t,e,i){"use strict";var o,n,r;i.d(e,{Dr:function(){return r},MJ:function(){return u},O$:function(){return c},QP:function(){return v},XE:function(){return h},Z5:function(){return d},_g:function(){return n},mn:function(){return a},qO:function(){return l},ut:function(){return s},xY:function(){return p}}),function(t){t.Small="_1x_2y",t.Medium="_1x_3y",t.Large="_1x_4y"}(o||(o={})),function(t){t[t.FeedOnly=0]="FeedOnly",t[t.FeedFirst=1]="FeedFirst",t[t.Card=2]="Card",t[t.Widget=3]="Widget"}(n||(n={})),function(t){t[t.Preload=0]="Preload",t[t.Forecast=1]="Forecast",t[t.Setting=2]="Setting",t[t.Remind=3]="Remind",t[t.Upsell=4]="Upsell",t[t.Error=5]="Error"}(r||(r={}));const a=Object.freeze({NTP:1,WINHP:2,PRONG2:3,PRONG1:4}),s=Object.freeze({UNKNOWN:0,AAD:1,MSA:2,MUID:3}),c=1500,l="DeclinedLocations",d="LocationChangeTime",h=1142,u=5e3;var p;!function(t){t.MSA="consumers",t.AAD="organizations"}(p||(p={}));const v="MobileUpsellVisited"},58661:function(t,e,i){"use strict";i.d(e,{m:function(){return V}});var o=i(37180),n=i(56911),r=i(38493),a=i(60815),s=i(76881),c=i(88458),l=i(92011),d=i(56863);class h extends l.L{}class u extends((0,d.rf)(h)){constructor(){super(...arguments),this.proxy=document.createElement("textarea")}}const p="none";class v extends u{constructor(){super(...arguments),this.resize=p,this.cols=20,this.handleTextInput=()=>{this.value=this.control.value}}readOnlyChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.readOnly=this.readOnly)}autofocusChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.autofocus=this.autofocus)}listChanged(){this.proxy instanceof HTMLTextAreaElement&&this.proxy.setAttribute("list",this.list)}maxlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.minLength=this.minlength)}spellcheckChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.spellcheck=this.spellcheck)}select(){this.control.select(),this.$emit("select")}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}(0,n.Cg)([(0,r.CF)({mode:"boolean"}),(0,n.Sn)("design:type",Boolean)],v.prototype,"readOnly",void 0),(0,n.Cg)([r.CF,(0,n.Sn)("design:type",String)],v.prototype,"resize",void 0),(0,n.Cg)([(0,r.CF)({mode:"boolean"}),(0,n.Sn)("design:type",Boolean)],v.prototype,"autofocus",void 0),(0,n.Cg)([(0,r.CF)({attribute:"form"}),(0,n.Sn)("design:type",String)],v.prototype,"formId",void 0),(0,n.Cg)([r.CF,(0,n.Sn)("design:type",String)],v.prototype,"list",void 0),(0,n.Cg)([(0,r.CF)({converter:r.R$}),(0,n.Sn)("design:type",Number)],v.prototype,"maxlength",void 0),(0,n.Cg)([(0,r.CF)({converter:r.R$}),(0,n.Sn)("design:type",Number)],v.prototype,"minlength",void 0),(0,n.Cg)([r.CF,(0,n.Sn)("design:type",String)],v.prototype,"name",void 0),(0,n.Cg)([r.CF,(0,n.Sn)("design:type",String)],v.prototype,"placeholder",void 0),(0,n.Cg)([(0,r.CF)({converter:r.R$,mode:"fromView"}),(0,n.Sn)("design:type",Number)],v.prototype,"cols",void 0),(0,n.Cg)([(0,r.CF)({converter:r.R$,mode:"fromView"}),(0,n.Sn)("design:type",Number)],v.prototype,"rows",void 0),(0,n.Cg)([(0,r.CF)({mode:"boolean"}),(0,n.Sn)("design:type",Boolean)],v.prototype,"spellcheck",void 0),(0,n.Cg)([a.sH,(0,n.Sn)("design:type",Array)],v.prototype,"defaultSlottedNodes",void 0),(0,c.X)(v,s.gs);class f extends v{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}(0,n.Cg)([r.CF,(0,n.Sn)("design:type",String)],f.prototype,"appearance",void 0);var m=i(74849),g=i(22131),b=i(50882),w=i(64187),y=i(73477),$=i(60993),k=i(61484),x=i(48196),C=i(17767),T=i(37302),L=i(7896),S=i(48751),M=i(46203),P=i(57416),I=i(26920),D=i(36452),O=i(41123),W=i(74838),_=i(14996),N=i(79288);const F=m.A`
    :host([appearance="filled"]) .control {
        background: ${T.F7};
        border-color: transparent;
    }

    :host([appearance="filled"]:hover:not([disabled])) .control {
        background: ${T.Xt};
        border-color: transparent;
    }

    :host([appearance="filled"]:focus-within:not([disabled])) .control {
        border-color: transparent;
        box-shadow: none;
    }
    ${k.p}
`.withBehaviors((0,g.mr)(m.A`
            :host([appearance="filled"]:hover:not([disabled])) .control,
            :host([appearance="filled"]:focus-within:not([disabled])) .control {
                background: ${b.A.Field};
                border-color: ${b.A.FieldText};
            }
            :host([appearance="filled"]:not([disabled]):active)::after,
            :host(
                    [appearance="filled"]:not([disabled]):focus-within:not(:active)
                )::after {
                border-bottom-color: ${b.A.Highlight};
            }
        `)),z=m.A`
    ${(0,w.V)("inline-flex")} :host {
        font-family: ${L.O};
        outline: none;
        user-select: none;
        position: relative;
        flex-direction: column;
        vertical-align: bottom;
    }

    .control {
        box-sizing: border-box;
        position: relative;
        color: ${S.l};
        background: ${M.le};
        border-radius: calc(${P.Pb} * 1px);
        border: calc(${I.XA} * 1px) solid ${D.I2};
        height: calc(${x.D} * 2px);
        font: inherit;
        font-size: ${O.K};
        line-height: ${O.Z};
        padding: calc(${W.vR} * 1.5px) calc(${W.vR} * 2px + 1px);
        width: 100%;
        resize: none;
    }

    .control:hover:enabled {
        background: ${M.jM};
        border-color: ${D.mb};
    }

    .control:hover,
    .control:${y.N},
    .control:disabled,
    .control:active {
        outline: none;
    }

    :host(:focus-within) .control {
        border-color: ${_.WN};
        box-shadow: 0 0 0 1px ${_.WN} inset;
    }

    :host(.resize-both) .control {
        resize: both;
    }

    :host(.resize-horizontal) .control {
        resize: horizontal;
    }

    :host(.resize-vertical) .control {
        resize: vertical;
    }

    .label__hidden {
        display: none;
        visibility: hidden;
    }

    .label {
        display: block;
        color: ${S.l};
        cursor: pointer;
        $font-size: ${O.K};
        line-height: ${O.Z};
        margin-bottom: 4px;
    }

    :host([disabled]) .label,
    :host([readonly]) .label,
    :host([readonly]) .control,
    :host([disabled]) .control {
        cursor: ${$.Z};
    }
    :host([disabled]) {
        opacity: ${N.q};
    }
`.withBehaviors((0,C.f)("filled",F),(0,g.mr)(m.A`
            :host([disabled]) {
                opacity: 1;
            }
            ::placeholder,
            ::-webkit-input-placeholder {
                color: ${b.A.FieldText};
            }
            :host([disabled]) ::placeholder,
            :host([disabled]) ::-webkit-input-placeholder,
            :host([disabled]) .label {
                color: ${b.A.GrayText};
            }
        `));var A=i(96950),R=i(82774),E=i(60402);const U=A.qy`
        <label
            part="label"
            for="control"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${(0,R.e)("defaultSlottedNodes")}></slot>
        </label>
        <textarea
            part="control"
            class="control"
            id="control"
            ?autofocus="${t=>t.autofocus}"
            cols="${t=>t.cols}"
            ?disabled="${t=>t.disabled}"
            form="${t=>t.form}"
            list="${t=>t.list}"
            maxlength="${t=>t.maxlength}"
            minlength="${t=>t.minlength}"
            name="${t=>t.name}"
            placeholder="${t=>t.placeholder}"
            ?readonly="${t=>t.readOnly}"
            ?required="${t=>t.required}"
            rows="${t=>t.rows}"
            ?spellcheck="${t=>t.spellcheck}"
            :value="${t=>t.value}"
            aria-atomic="${t=>t.ariaAtomic}"
            aria-busy="${t=>t.ariaBusy}"
            aria-controls="${t=>t.ariaControls}"
            aria-current="${t=>t.ariaCurrent}"
            aria-describedby="${t=>t.ariaDescribedby}"
            aria-details="${t=>t.ariaDetails}"
            aria-disabled="${t=>t.ariaDisabled}"
            aria-errormessage="${t=>t.ariaErrormessage}"
            aria-flowto="${t=>t.ariaFlowto}"
            aria-haspopup="${t=>t.ariaHaspopup}"
            aria-hidden="${t=>t.ariaHidden}"
            aria-invalid="${t=>t.ariaInvalid}"
            aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
            aria-label="${t=>t.ariaLabel}"
            aria-labelledby="${t=>t.ariaLabelledby}"
            aria-live="${t=>t.ariaLive}"
            aria-owns="${t=>t.ariaOwns}"
            aria-relevant="${t=>t.ariaRelevant}"
            aria-roledescription="${t=>t.ariaRoledescription}"
            @input="${(t,e)=>t.handleTextInput()}"
            @change="${t=>t.handleChange()}"
            ${(0,E.K)("control")}
        ></textarea>
    `,V=f.compose({name:`${o.c.prefix}-text-area`,template:U,styles:z,shadowOptions:{delegatesFocus:!0}})},65196:function(t,e,i){"use strict";i.d(e,{FJ:function(){return a},NQ:function(){return s},Sr:function(){return l},aU:function(){return r},br:function(){return c},cg:function(){return d},gd:function(){return n}});var o=i(55593);const n="__rubyOptOut",r="__rubyOptOutCoachmark",a="__rubyOptInCoachmark",s=()=>{const t=(0,o.a)(),e="vp"===(null==t?void 0:t.get("reqsrc"));return{isVPT:e,enableCoachmarkVPT:e&&"1"===(null==t?void 0:t.get("enableRubyCoachmark")),disableCoachmarkVPT:e&&"1"!==(null==t?void 0:t.get("enableRubyCoachmark")),disableRubyVPT:e&&"1"===(null==t?void 0:t.get("disableRuby"))}},c="__rubyReloadTimes",l=2,d=2e4},65343:function(t,e,i){"use strict";i.d(e,{Op:function(){return d},YQ:function(){return c},YW:function(){return s}});var o=i(77246),n=i(16091),r=i(17720);class a{static getInstance(){return r.vv.get("__CustomSVGBuilder__",()=>new a)}ele(t){if((0,o.S)()&&this.svgDocNode){const e=document.createElementNS("http://www.w3.org/2000/svg",t);this.svgDocNode.appendChild(e);const i=new a;return i.svgDocNode=e,i}if(!(0,o.S)()&&this.xmlDocNode){const e=this.xmlDocNode.ele(t),i=new a;return i.xmlDocNode=e,i.xmlCreate=this.xmlCreate,i}return this}att(t,e){if((0,o.S)()&&this.svgDocNode){if("string"==typeof t&&"string"==typeof e)this.svgDocNode.setAttribute(t,e);else if("object"==typeof t)for(const e in t)this.svgDocNode.setAttribute(e,t[e])}else!(0,o.S)()&&this.xmlDocNode&&("string"==typeof t&&"string"==typeof e?this.xmlDocNode.att(t,e):"object"==typeof t&&this.xmlDocNode.att(t))}txt(t){if((0,o.S)()&&this.svgDocNode){const e=document.createTextNode(t);this.svgDocNode.appendChild(e)}else!(0,o.S)()&&this.xmlDocNode&&this.xmlDocNode.txt(t)}end(){return(0,o.S)()&&this.svgDocNode?this.svgDocNode.outerHTML:!(0,o.S)()&&this.xmlDocNode?this.xmlDocNode.end({headless:!0}):""}}function s(){if(!(0,o.S)()){const{create:t}=r.vv.get("__XmlBuilder2Import__");(0,n.G)(a).xmlCreate=t}return l}async function c(){if(!(0,o.S)()){let t=r.vv.get("__XmlBuilder2Import__");if(!t){const e=await i.e("node_modules_xmlbuilder2_lib_xmlbuilder2_min_js").then(i.t.bind(i,37991,23));t=r.vv.get("__XmlBuilder2Import__",()=>e)}const{create:e}=t;(0,n.G)(a).xmlCreate=e}return l}function l(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"svg";const i=(0,n.G)(a);if((0,o.S)())i.svgDocNode=document.createElementNS("http://www.w3.org/2000/svg",e),i.att(t);else if(!(0,o.S)()&&i.xmlCreate){const o=i.xmlCreate({version:"1.0",encoding:"UTF-8"});i.xmlDocNode=o.ele(e),i.att(t)}return i}function d(t,e,i,o){const n=t.ele(e);return n.att(i),o&&n.att("class",o),n}},66830:function(t,e,i){"use strict";i.d(e,{g:function(){return a}});var o=i(96950),n=i(91640),r=i(57164);const a=o.qy` ${(0,n.z)(t=>t.cardViewMode===r.Dr.Forecast&&t.isHideCardDialogShow&&t.hideDialogComponent,t=>t.hideDialogComponent)} ${(0,n.z)(t=>t.cardViewMode===r.Dr.Forecast&&t.isReportIssuDialogShow&&t.reportIssueComponent,t=>t.reportIssueComponent)} ${(0,n.z)(t=>t.cardViewMode===r.Dr.Remind&&t.hideRemindComponent,t=>t.hideRemindComponent)} ${(0,n.z)(t=>t.cardViewMode===r.Dr.Upsell&&t.mobileUpsellComponent,t=>t.mobileUpsellComponent)} ${(0,n.z)(t=>t.showToast&&t.toastTemplate,t=>t.toastTemplate)}
`},86373:function(t,e,i){"use strict";i.d(e,{J:function(){return a}});var o=i(59545),n=i(55602),r=i(38029);async function a(t){var e;t.config.slots&&(t.minimap&&!t.loadedExps.WeatherMinimapWC&&!t.config.disableMinimapPreload&&t.config.slots.weatherMinimapWC&&await async function(t){const e=await s(t.config.slots.weatherMinimapWC);if(!e)return;(0,r.c)("WeatherMinimapWC.Loaded",t.config.isDynamicFeed),t.loadedExps.WeatherMinimapWC=!0}(t),!t.loadedExps.WeatherVideoEntryWC&&"video"==t.primaryCarousel&&null!==(e=t.weatherData.teaserCustomData)&&void 0!==e&&e.source&&t.config.slots.weatherVideoEntryWC&&await async function(t){const e=await s(t.config.slots.weatherVideoEntryWC);if(!e)return;(0,r.c)("WeatherVideoEntryWC.Loaded",t.config.isDynamicFeed),t.loadedExps.WeatherVideoEntryWC=!0}(t))}async function s(t){try{const t=(0,o.Kl)();t&&t.getCurrentState()}catch(t){return!1}return await(0,n.uC)(t),!0}},88768:function(t,e,i){"use strict";i.d(e,{J:function(){return m}});var o=i(37180),n=i(7927),r=i(7014),a=i(88817),s=i(121),c=i(9299),l=i(4731),d=i(75003),h=i(45899),u=i(58661),p=i(17469),v=i(64958),f=i(31753);function m(){l.m.define(o.c.registry),d.m.define(o.c.registry),h.m.define(o.c.registry),n.m.define(o.c.registry),r.m.define(o.c.registry),a.m.define(o.c.registry),s.m.define(o.c.registry),c.m.define(o.c.registry),u.m.define(o.c.registry),v.vV.define(p.i.registry),(0,f.o)()}},91118:function(t){t.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4 3.5C4 2.67 4.67 2 5.5 2h7c.83 0 1.5.67 1.5 1.5v5.52c-.34.03-.68.1-1 .19V3.5a.5.5 0 00-.5-.5h-7a.5.5 0 00-.5.5v13c0 .28.22.5.5.5h4.1c.18.36.4.7.66 1H5.5A1.5 1.5 0 014 16.5v-13zM9.02 14a5.57 5.57 0 000 1H7.5a.5.5 0 010-1h1.52zm9.98.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V14h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H15v-1.5z"></path></svg>'},91593:function(t,e,i){"use strict";i.d(e,{Ei:function(){return a},OW:function(){return r}});var o=i(65022),n=i(93468);function r(t,e){var i,r;let a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const s=function(t){if(!t)return 0;let e=parseInt(t.split("_").pop()||"0");e||(e=parseInt(t.split("-").pop()||"0"));return Math.max(e||0,0)}(e);let c=t.contentData&&t.contentData[s];return!c&&a&&((0,n.vV)(o.am7,`Fallback to Index 0 contentdata, previewType: ${e}, contentData: ${JSON.stringify(t.contentData)}`),c=t.contentData&&t.contentData[0]),{isSpotlight:e&&e.includes("_TkRt")||!1,displayContent:c,contentType:(null===(i=c)||void 0===i?void 0:i.contenttype)||null,constentId:(null===(r=c)||void 0===r?void 0:r.id)||null}}function a(t){if(!t)return 0;const e=t.split("-");if(e.length<2)return 0;const i=e[e.length-2];if(i.startsWith("loc")){const t=parseInt(i.substring(3));return t||0}return 0}},92337:function(t,e,i){"use strict";i.d(e,{gx:function(){return _},tb:function(){return R},Qm:function(){return V},Ds:function(){return A},Yd:function(){return U},Gf:function(){return W},nc:function(){return J},mN:function(){return H},EM:function(){return j},m7:function(){return E}});var o=i(90429),n=i(93468),r=i(65022),a=i(30817),s=i(75874),c=i(11372),l=i(98216),d=i(48114),h=i(17254),u=i(59721),p=i(55593),v=i(89980),f=i(5419),m=i(72317),g=i(36903);const b={small:.5,medium:1,large:1.5};var w=i(49704),y=i.n(w),$=i(47149),k=i(25752);const x="thirdPartyBackingAppUninstallBanner";const C=new class{constructor(){var t,e;this.widgetModelApi=window.__com_microsoft_dsh_widgetModelApiFactory,this.is1PBackingAppInstalled=!0,this.isUninstallFeatureEnabled=!1;const i=null===(t=this.widgetModelApi)||void 0===t?void 0:t.tryGetApi("velocity",k.XF,k.XF);this.packageStateApi=null===(e=this.widgetModelApi)||void 0===e?void 0:e.tryGetApi("packagestate",k.XF,k.XF),this.isUninstallFeatureEnabled=i&&i.isFeatureEnabled("Feature_DMAEdgeUninstall")}addListenerToPackageState(t){var e;try{null===(e=this.packageStateApi)||void 0===e||e.addEventListener(t)}catch(t){l.YT.sendAppErrorEvent(Object.assign(Object.assign({},r.rs0),{message:"Error using windows package API to add event listener for package state changes",pb:Object.assign(Object.assign({},r.rs0.pb),{customMessage:t,addListener:!0})}))}}removeListenerToPackageState(t){var e;try{null===(e=this.packageStateApi)||void 0===e||e.removeEventListener(t)}catch(t){l.YT.sendAppErrorEvent(Object.assign(Object.assign({},r.rs0),{message:"Error using windows package API to remove event listener for package state changes",pb:Object.assign(Object.assign({},r.rs0.pb),{customMessage:t,addListener:!1})}))}}async isBackingAppInstalled(t){if(this.packageStateApi&&this.isUninstallFeatureEnabled)try{return await this.packageStateApi.isPackageInstalled(t)}catch(t){l.YT.sendAppErrorEvent(Object.assign(Object.assign({},r.rs0),{message:"Error Calling Windows API to get Package Install State for Edge",pb:Object.assign(Object.assign({},r.rs0.pb),{customMessage:t,addListener:!1})}))}return!0}isBackingAppInstalledFor1P(){return this.is1PBackingAppInstalled}getThirdPartyBannerStatus(){return"1"===(0,v.Lg)().getItem(x)}setThirdPartyBannerStatus(t){return(0,v.Lg)().setItem(x,t)}async fetch1PBackingAppStatus(){this.is1PBackingAppInstalled=await this.isBackingAppInstalled("Microsoft.MicrosoftEdge.Stable_8wekyb3d8bbwe")}};var T=i(88296);var L=i(87514),S=i(65196);let M,P,I;const D=`${h.T3.StaticsUrl}latest/icons-wc/icons`,O={Bullet:{lightMode:`${D}/Bullet.svg`,darkMode:`${D}/dark-mode/Bullet.svg`},Edit:{lightMode:`${D}/Edit.svg`,darkMode:`${D}/dark-mode/Edit.svg`},HideV2:{lightMode:`${D}/HideV2.svg`,darkMode:`${D}/dark-mode/HideV2.svg`},PinnedSV2:{lightMode:`${D}/PinnedSV2.svg`,darkMode:`${D}/dark-mode/PinnedSV2.svg`},UnpinSV2:{lightMode:`${D}/UnpinSV2.svg`,darkMode:`${D}/dark-mode/UnpinSV2.svg`},RemoveWBWidget:{lightMode:`${D}/RemoveWBWidget.svg`,darkMode:`${D}/dark-mode/RemoveWBWidget.svg`},ReportIssue:y(),Switch:{lightMode:`${D}/Switch.svg`,darkMode:`${D}/dark-mode/Switch.svg`},AlertOff:{lightMode:`${D}/AlertOff.svg`,darkMode:`${D}/dark-mode/AlertOff.svg`},Settings:{lightMode:`${D}/SettingIcon.svg`,darkMode:`${D}/dark-mode/SettingIcon.svg`}};function W(t,e,i,o,n,r,a,l,u){const p=[];let v=0,f=!1;if(!t||!t.length)return;const b=d.F_.get(3),w=t.includes("unpin");I=w?"pinned":"feed",M=i||{},P=o;const y=(0,s.ad)();let $;const k=(0,g.Wu)(),x=(0,m.by)(k)&&m.EV.isWidgetHeaderUpdatesEnabled()?b.removeWidget||"Remove widget":b.unpinCard||"Unpin widget",C=(0,m.by)(k)&&m.EV.isWidgetHeaderUpdatesEnabled()?O.RemoveWBWidget:O.UnpinSV2;if(t.forEach(t=>{switch(t){case"small":v++,M.height=146,p.push({id:"small",glyphUrls:n===t?O.Bullet:void 0,title:b.small||"Small",ariaLabel:b.small||"Small",telemetryTag:z("size_small",b.small,c.MS.Customize),checked:n===t,role:"menuitemradio"});break;case"medium":v++,M.height=304,p.push({id:"medium",glyphUrls:n===t?O.Bullet:void 0,title:b.medium||"Medium",ariaLabel:b.medium||"Medium",telemetryTag:z("size_medium",b.medium,c.MS.Customize),checked:n===t,role:"menuitemradio"});break;case"large":v++,M.height=462,p.push({id:"large",glyphUrls:n===t?O.Bullet:void 0,title:b.large||"Large",ariaLabel:b.large||"Large",telemetryTag:z("size_large",b.large,c.MS.Customize),checked:n===t,role:"menuitemradio"});break;case"switchTaskBarView":v++,p.push({id:"switchTaskBarView",glyphUrls:O.Switch,title:b.switchBackToWeather||"Switch back to weather",ariaLabel:b.switchBackToWeather||"Switch back to weather",telemetryTag:z("moneycardcustomizationswitchback",b.switchBackToWeather,c.MS.Hide),onClick:u?()=>u():void 0});break;case"pin":p.push({id:"pinCard",glyphUrls:O.PinnedSV2,title:b.pinCard||"Pin widget",ariaLabel:b.pinCard||"Pin widget",telemetryTag:z("pinwidget",b.pinCard,c.MS.Pin)});break;case"customize":f=!0,v>1&&(null==p?void 0:p.length)>0&&p.push({isDivider:!0}),p.push({id:"customize",glyphUrls:O.Edit,title:b.customize||"Customize widget",ariaLabel:b.customize||"Customize widget",onClick:()=>r("onShowSettingsEnd"),telemetryTag:z("editwidget",b.customize,c.MS.Customize)});break;case"unpin":!f&&v>1&&(null==p?void 0:p.length)>0&&p.push({isDivider:!0}),p.push({id:"unpinCard",glyphUrls:C,title:x,ariaLabel:x,telemetryTag:z("unpinwidget",b.unpinCard,c.MS.Unpin)});break;case"poweredBy":(0,L.Cr)().then(t=>{const i=h.T3&&h.T3.CurrentRequestTargetScope&&h.T3.CurrentRequestTargetScope.pageExperiments||[];$=i.includes("prg-pr2-newbrand")?t?e:b.signedInByMSN||"Signed in by MSN":t?e:b.signedInByMicrosoftStart||"Signed in by MSN",(null==p?void 0:p.length)>0&&p.push({isDivider:!0}),p.push({id:"poweredBy",isText:!0,title:$,ariaLabel:$})});break;case"removeWidget":p.push({id:"removeWidget",glyphUrls:O.HideV2,title:b.hideWidget,ariaLabel:b.hideWidget,telemetryTag:z("removewidget",b.hideWidget,c.MS.Hide)});break;case"reportIssue":p.push({id:"reportIssue",glyph:O.ReportIssue,title:b.reportIssue,ariaLabel:b.reportIssue,telemetryTag:z("reportIssue",b.reportIssue,c.MS.Report)});break;case"muteNotification":p.push({id:"muteNotification",glyphUrls:O.AlertOff,title:b.muteNotification,ariaLabel:b.muteNotification,telemetryTag:z("mutenotification",b.muteNotification,c.MS.Mute)});break;case"notificationSettings":p.push({id:"notificationSettings",glyphUrls:O.Settings,title:b.notificationSettings,ariaLabel:b.notificationSettings,telemetryTag:z("notificationsettings",b.notificationSettings,c.MS.Customize)})}}),y){if(a&&a.length){a.push({isDivider:!0});const t=p.findIndex(t=>t.id===(w?"customize":"removeWidget"));p.splice(t,0,...a)}if(l&&l.length&&w){const t=p.findIndex(t=>"customize"===t.id);p.splice(t,1,...l)}}return p}var _,N,F;function z(t,e,i){if(s.ZU.getPolicyCompliance(3)&&"editwidget"!==t&&!(0,g.lb)())return;return new $.$({name:`${P}>customization_${t}`,type:c.MJ.ActionButton,action:c.EG.Click,behavior:i,zone:I,content:{headline:e,type:c.b5.StructuredData,vertical:P,category:P},destinationUrl:location.href,ext:M}).getMetadataTag()}function A(t){switch(t){case"_1x_1y":case"half":return"small";case"_1x_3y":case"tall":return"large";default:return"medium"}}function R(t,e,i){t&&(e&&i&&e(new CustomEvent("CardResized",{detail:{cardType:i,size:"medium"}})),t.style.zIndex=u.P.Above.toString(),t.style.height="304px")}function E(t,e,i,o){t&&(e&&i&&e(new CustomEvent("CardResized",{detail:{cardType:i,size:"small"}})),t.style.zIndex="",t.style.height="")}!function(t){t.Customize="customize",t.Large="large",t.Medium="medium",t.MuteNotification="muteNotification",t.NotificationSettings="notificationSettings",t.Pin="pin",t.PoweredBy="poweredBy",t.RemoveWidget="removeWidget",t.ReportIssue="reportIssue",t.Small="small",t.SwitchTaskBarView="switchTaskBarView",t.Unpin="unpin"}(_||(_={})),function(t){t.HOME="home",t.CONSUMPTION="consumption"}(N||(N={})),function(t){t.OnIdentityChanged="onIdentityChanged",t.SyncMuid="syncMUID",t.PcsReload="pcsReload",t.FlightChange="flightChange",t.BuildVersionChanged="buildVersionChanged",t.StalePage="stalePage",t.Undefined="undefinedReason"}(F||(F={}));function U(t,e,i){if(i)return"spotlight";if(t)return"pinned";if("startfeed"!==(null===(o=h.T3.CurrentRequestTargetScope)||void 0===o?void 0:o.pageType)&&"1.0"!==d.F_.get(12))return"feed";var o;return(d.F_.get(6)||[]).find(t=>t===e||t.startsWith("3pwidget")&&t.substring(9)===e)?"pinned":"feed"}async function V(t,e,i,a,c,l,h,u,v,f,b){let w;i||(i={ocid:"winp2",pageScenario:"dashboard4",duotone:!0,flightData:"prg-bngimg-t,1s-brcolors,prg-rctns_v1,prg-1sw-diswgt",muidFallback:!0,isXfeed:!0});const y=[],$={},x=d.F_.get(22),L=d.F_.get(12),S="3.0"===L||"2.0"===L;if(x&&!S&&x.forEach(t=>y.push(t)),t){const e=t.tryGetApi("geolocation",k.XF,k.XF);e&&await e.initialize();const i=t.tryGetApi("model",k.XF,k.XF),a=t.tryGetApi("widgetpinning",k.XF,k.XF),s=[];s.push(e?e.getLocation():Promise.resolve(void 0)),s.push(!i||x||S?Promise.resolve(void 0):i.getWidgetRegistrations());const c=a&&"function"==typeof a.isMigrationCompleteAsync;s.push(c?a.isMigrationCompleteAsync("pinned"):Promise.resolve(void 0)),s.push(c?a.isMigrationCompleteAsync("Muted"):Promise.resolve(void 0));const l=a&&"function"==typeof a.getUserSettingsAsync;let d,h,u,p,v;s.push(l?a.getUserSettingsAsync("pinned"):Promise.resolve(void 0)),s.push(l?a.getUserSettingsAsync("Muted"):Promise.resolve(void 0));const f=await Promise.allSettled(s);if([w,d,h,p,u,v]=f.map(t=>"fulfilled"===(null==t?void 0:t.status)?t.value:void 0),d){const t=Object.keys(o.Ml);d.forEach(e=>{const i=t.find(t=>o.Ml[t]&&o.Ml[t].widgetId===e.id);y.push(i||e.id)})}if(h)if(u&&u.length){const t=new Set(y),e=[];for(const i of u.split("|")){const o=i.split(",")[0];t.has(o)&&(e.push(i),t.delete(o))}$.Widgets=[...e,...t].join("|")}else $.Widgets=`${y.join("|")}`;if((p||(null==v?void 0:v.length)>=0)&&($.Muted=v),u&&u.length>0&&0===h){const t=new URLSearchParams(window.location.href),e=t&&t.get("aver")||void 0;(0,n.vV)(r.IKI,"API returning incorrect pin migration state.",void 0,Object.assign(Object.assign({},r.IKI.pb),{isPinMigrationComplete:h,pinnedPreferences:u,muteMigrationUpercaseMuteKey:p,mutePreferences:v,appVersion:e}))}const m=t.tryGetApi("velocity",k.XF,k.XF);(null==m?void 0:m.isFeatureEnabled("Feature_AEPEvolvedNotifications"))&&($.Velocity="48064775")}const M=d.F_.get(1)?"dark":"light";let P;const I=(0,T.TU)().currentColumnArrangement.toUpperCase();P="2.0"===L||"1.0"===L||"3.0"===L?function(t){switch(t.toLowerCase()){case"c4":return"C3";case"c3":return"C2";case"c2":case"c1":return"C1";default:return(0,n.vV)(r.yrQ,"Error in updating layout for rail model",`current layout: ${t}`),t}}(I):d.F_.get(14)?I:void 0;const D=window?`${window.innerWidth}x${window.innerHeight}`:void 0,O=!C.isBackingAppInstalledFor1P(),W=m.EV.getFeedRegistrations(),_=W&&0==W.length,N=!m.EV.containsStartFeed()&&!(0,g.J9)(),F=!(0,s.J_)(),z=!(0,s.$5)(),A="1"===(0,p.a)().get("disable3P"),R="1"===(0,p.a)().get("defaultWidgets"),E=i.sendFRESeenCount?i.sendFRESeenCount:u,U=i.enableFREOverlayMyFeed?i.enableFREOverlayMyFeed:v;return Object.assign(Object.assign({},i),{installedWidgets:y,geolocation:w,layout:P,theme:M,clientLayoutVersion:L,nextPageUrl:a,refreshType:e,refreshCnt:c,timeoutMs:l,viewportSize:D,additionalHeaders:$,doNotTriggerFREInSession:h,isEdgeUninstalled:O,allFeedsDisabled:_,firstPartyFeedDisabled:N,rotationDisabled:F,badgingDisabled:z,disable3P:A,defaultWidgets:R,sendFRESeenCount:E,enableFREOverlayMyFeed:U,enableRuby:!!f,msnup:b})}class B{constructor(){this.ttvrRowCount=3,this.getWaterfallCardRow=t=>{const e=o.yS[null==t?void 0:t.height];return b[e]||1},this.getTemplateCardRow=t=>{const e=o.WA[null==t?void 0:t.layoutTemplate];return b[e]||1};const t=(0,a.ZF)();this.ttvrRowCount=B.getTtvrRowCountByHeight(),t.ttvrRowCount=this.ttvrRowCount}}function H(t){var e,i;let o=!0;const n=function(){var t,e;if("undefined"!=typeof URLSearchParams){const i=(0,g.J9)()?"hver":"aver",o=null===(e=new URLSearchParams(null===(t=window.location)||void 0===t?void 0:t.search))||void 0===e?void 0:e.get(i);if(o)return{version:o,versionArr:o.split(".").map(t=>t.trim())}}return}();if((null===(e=null==n?void 0:n.versionArr)||void 0===e?void 0:e.length)>=3){const t=n.versionArr[0];o=!(3===t.length&&(t.startsWith("52")||t.startsWith("62"))&&"0"===n.versionArr[2])}return t?t("widgetsIsRetail",o?"1":"0"):null===(i=null===l.YT||void 0===l.YT?void 0:l.YT.addOrUpdateTmplProperty)||void 0===i||i.call(l.YT,"widgetsIsRetail",o?"1":"0"),o}function j(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];var i,o,n;const r=["feedback-hub://?contextid=1214&tabid=2"],a=null===(i=null===l.YT||void 0===l.YT?void 0:l.YT.getPageMetadata)||void 0===i?void 0:i.call(l.YT),s=null===(n=null===(o=null==a?void 0:a.contract)||void 0===o?void 0:o.page)||void 0===n?void 0:n.name;for(const t of["muid","rid","debugId","flights","pageName"]){if("pageName"===t&&s)continue;const e=(0,v.Lg)().getItem(`mee-${t}`);e&&r.push(`&${t}=${e}`)}if(s&&r.push(`&pageName=${s}`),t&&(r.push("&WidgetBoard=true"),e)){const t="1"===(0,v.Lg)().getItem(S.gd);r.push("&rubyOptOut="+(t?"1":"0"))}window.dispatchEvent(new CustomEvent("FeedbackClicked")),window.location.href=r.join("")}B.getTtvrRowCountByHeight=()=>{const t=window.outerHeight||document.documentElement.clientHeight;return t<=596?1:t<=912?2:3};const q="widgets-internal-user-state";function J(){try{const t=(0,f.t)();t&&(0,v.Lg)().setItem(q,"1");const e="1"===(0,v.Lg)().getItem(q);return t||e}catch(t){return!1}}}}]);