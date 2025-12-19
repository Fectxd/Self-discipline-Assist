"use strict";(self.homePageWebpackChunks=self.homePageWebpackChunks||[]).push([["sports-match-list"],{2408:function(t,e,i){i.r(e),i.d(e,{SportsMatchTransformer:function(){return l}});var o=i(15221),n=i(67751),r=i(31157),a=i(17254),s=i(3589);class l extends o.Bc{constructor(){super(...arguments),this.isCopilotTheme=!1,this.getPreGameNotificationMessage=t=>this.isCopilotTheme?null:this.transformerProvider.config.enableInCardNotifications&&null!==t&&t.gameStateCatetory===o.Xp.preGame?t.preGameNotificationMessage:null,this.getPostGameNotificationMessage=t=>this.isCopilotTheme?null:this.transformerProvider.config.enableInCardNotifications&&null!==t&&t.gameStateCatetory===o.Xp.postGame?t.postGameNotificationMessage:null,this.getMatchupContentNotificationStyleIfNecessary=t=>this.isNotificationEnabledAndAvailable(t)?"side-by-side-matchup-content-notification":"",this.isNotificationEnabledAndAvailable=t=>null!=this.getPreGameNotificationMessage(t)||null!=this.getPostGameNotificationMessage(t),this.getTeamColor=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return null!=t&&t.primaryColor?(0,n.gS)(t.primaryColor):null!=t&&t.primaryColorHex?(0,n.gS)(t.primaryColorHex):e},this.getTeamImageUrl=t=>{if(null!=t&&t.imageUrl)return(0,n.Hv)(null==t?void 0:t.imageUrl);const e=(0,n.iK)(null==t?void 0:t.imageId,!(null!=t&&t.imageId),this.transformerProvider.config.teamImageInfoEnhanced);return(0,n.Hv)(e)},this.getBackgroundGradient=t=>{if(!t)return"";const e=this.getTeamColor(t.participantOne),i=this.getTeamColor(t.participantTwo);if(!e||!i||e===i&&"#ffffff"===e.toLowerCase())return"";const o=this.hexToRgba(e,1),n=this.hexToRgba(e,.35),r=this.hexToRgba(i,1),a=this.hexToRgba(i,.35);return`linear-gradient(\n                        ${this.isRTLDirection()?"-120deg":"120deg"},\n                        ${o} 0%,\n                        ${o} 10.75%,\n                        ${n} 11%,\n                        ${n} 14.75%,\n                        transparent 15%,\n                        transparent 85%,\n                        ${a} 85.25%,\n                        ${a} 89%,\n                        ${r} 89.25%,\n                        ${r} 100%)`},this.isRTLDirection=()=>document.dir===r.O.rtl,this.getGameDate=t=>{const{gameStartDateTime:e,gameStateCatetory:i}=t||{};if(this.isCopilotTheme){const t=(0,n.yn)(e),r=i===o.Xp.postGame?{month:"short",day:"numeric"}:{weekday:"short",day:"numeric",month:"long"};return t.toLocaleDateString(a.T3.CurrentMarket,r)}{const t=(0,n.yn)(e);return(0,n.AL)(t,a.T3.CurrentMarket)}}}async transform(t){return{viewModel:await this.getViewModel(t)}}updateAdditionalInfo(t){const{sportsMatchData:e}=t;if(e&&e.additionalInfo){if(!e.additionalInfo.round&&e.additionalInfo.roundLocKey){var i;let t=this.transformerProvider.strings[e.additionalInfo.roundLocKey];null===(i=e.additionalInfo.roundParams)||void 0===i||i.forEach((e,i)=>{var o;t=null===(o=t)||void 0===o?void 0:o.replace(`{${i}}`,e)}),e.additionalInfo.round=t}if(!e.additionalInfo.roundSummary&&e.additionalInfo.roundLocKey){var o;let t=this.transformerProvider.strings[e.additionalInfo.roundSummaryLocKey];null===(o=e.additionalInfo.roundSummaryParams)||void 0===o||o.forEach((e,i)=>{var o;t=null===(o=t)||void 0===o?void 0:o.replace(`{${i}}`,e)}),e.additionalInfo.roundSummary=t}}}getGroupInfo(t){const e=t.matchData.sportsMatchData;var i;if(e.groupInfo)return null===(i=this.transformerProvider.strings.groupText)||void 0===i?void 0:i.replace("${0}",e.groupInfo)}hexToRgba(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;const i=t.match(/\w\w/g);if(!i)return"";const[o,n,r]=i.map(t=>parseInt(t,16));return`rgba(${o},${n},${r},${e})`}hasLongScore(t){var e,i;const o=(null===(e=t.participantOne)||void 0===e?void 0:e.score)||"",n=(null===(i=t.participantTwo)||void 0===i?void 0:i.score)||"";return o.length+n.length>6}getHeaderText(t){var e,i,n,r;if(!t||0===Object.keys(t).length)return{header:"",topScoreText:"",bottomScoreText:"",leftHeaderText:"",rightHeaderText:""};const{gameStartDateTime:a,gameDate:s,gamePeriodAndClock:l,gameStateCatetory:c}=t,p=null===(e=t.participantOne)||void 0===e?void 0:e.score,d=null===(i=t.participantTwo)||void 0===i?void 0:i.score,u=null===(n=t.participantOne)||void 0===n?void 0:n.standings,h=null===(r=t.participantTwo)||void 0===r?void 0:r.standings,g=new Date(a).getFullYear(),v=t.gameStartTime?t.gameStartTime.toLocaleLowerCase():"";let m,f,S,x,w;switch(c){case o.Xp.preGame:m=v,f=this.isCopilotTheme?s:`${s}, ${g}`,S=u,x=h;break;case o.Xp.inprogressGame:m=this.transformerProvider.strings.sportsLive.toLocaleUpperCase(),f=l,S=p,x=d;break;case o.Xp.postGame:m=this.transformerProvider.strings.sportsStateFinal,f=`${s}, ${g}`,S=p,x=d;break;default:m=v,f=s,S=u,x=h}switch(!0){case!!m&&!!f:w=`${m} • ${f}`;break;case!!m:w=m;break;case!!f:w=f;break;default:w=""}return{header:w,topScoreText:S,bottomScoreText:x,leftHeaderText:m,rightHeaderText:f}}async getViewModel(t){const{matchData:e,isVertical:i,telemetryConstants:r,showMatchUXV2:l,noBackgrounds:c,participantOneFollowed:p,participantTwoFollowed:d,reason:u,isContainLiveMatch:h,parentTelemetryObject:g,topDetailText:v,useLargeTeamIcon:m,hasVerticalLine:f,isSpotlight2Card:S,isSpotlightCard:x}=t||{},w=e.sportsMatchData;this.isCopilotTheme=t.isCopilotTheme||!1,this.updateAdditionalInfo(e),"string"!=typeof w.gameState&&(w.gameStateCatetory=(0,n.m5)(w.gameState.state));const b=(0,n.yn)(w.gameStartDateTime);w.gameDate=this.getGameDate(w),w.gameStartTime=(w.gameStartDateTimeIsToBeAnnounced?null:(0,n.ry)(b,a.T3.CurrentMarket))||this.transformerProvider.strings.sportsTBA,"string"!=typeof w.gameState&&(w.gamePeriodAndClock=(0,n.PH)(w.gameState)),"string"!=typeof w.gameState&&(w.gamePeriod=w.gameState.gamePeriod),w.participantOne&&(w.participantOne.scheduleUrl=(0,n.Ot)(w.participantOne.gameCenterUrl)),w.participantTwo&&(w.participantTwo.scheduleUrl=(0,n.Ot)(w.participantTwo.gameCenterUrl)),w.gameCenterUrl&&(w.matchClickthroughUrl=(0,n.Ot)(w.gameCenterUrl)),w.participantOne.imageUrl=(0,n.iK)(w.participantOne.imageId,!1,this.transformerProvider.config.teamImageInfoEnhanced),w.participantTwo.imageUrl=(0,n.iK)(w.participantTwo.imageId,!1,this.transformerProvider.config.teamImageInfoEnhanced),w.gameState=w.gameStateCatetory===o.Xp.postGame?this.transformerProvider.strings.sportsStateFinal:w.gameStateCatetory;const y={...r,name:o.BP.Game},$=i||t.isCopilotTheme,k=this.transformerProvider.config.enableLiveScores,T=l&&!c&&!k,C=(0,n.jJ)()?`${a.T3.StaticsUrl}/pr-5772998/icons-wc/icons/sports/LiveIconDark.svg`:`${a.T3.StaticsUrl}/latest/icons-wc/icons/sports/LiveIcon.svg`;return{backgroundGradient:k||l?"":this.getBackgroundGradient(w),followClickHandler:this.transformerProvider.followClickEntityHandler,followTelemetryTag:this.transformerProvider.telemetryBuilder.createFollowTelemetryTag(g,{...y,name:o.BP.FollowTeam},!0),hasLongScore:this.hasLongScore(w),gameNumber:"number",linkTarget:"_blank",matchData:e,matchupContentNotificationStyleIfNecessary:this.getMatchupContentNotificationStyleIfNecessary(w),overrideStyleForMatch:"",participantOneColor:T?this.getTeamColor(w.participantOne):"",participantOneFollowed:p,participantOneImgIcon:this.getTeamImageUrl(w.participantOne),participantTwoColor:T?this.getTeamColor(w.participantTwo):"",participantTwoFollowed:d,participantTwoImgIcon:this.getTeamImageUrl(w.participantTwo),postGameNotificationMessage:this.getPostGameNotificationMessage(w),preGameNotificationMessage:this.getPreGameNotificationMessage(w),reason:u,shouldDisplayT4:!h,shouldShowChampionPostGame:!1,shouldShowFollowIcon:!1,shouldUnderlineNotificationMessage:!1,showLiveDetail:!1,strings:{...this.transformerProvider.strings,championsFormatted:this.transformerProvider.strings.champions&&this.transformerProvider.strings.champions.toUpperCase()||o.kt},tabIndex:0,telemetryTag:this.transformerProvider.telemetryBuilder.createNavClickTelemetryTag(g,y),cardSize:t.cardSize,topDetailText:this.getGroupInfo(t)||v||"",useLargeTeamIcon:k||m,enableLiveScores:k||l,showMatchUXV2:k||l,noBackgrounds:c,isVertical:i,headerText:$?this.getHeaderText(w):void 0,needsVerticalLine:f,liveIconUrl:C,isSpotlight2Card:S,isSpotlightCard:x,isCopilotTheme:this.isCopilotTheme,isWindows:a.T3.AppType===s.u.WindowsNewsWidgets}}}},3589:function(t,e,i){var o,n;i.d(e,{u:function(){return o}}),function(t){t.BingHomepage="bingHomepage",t.ChannelMobile="channelmobile",t.Community="community",t.ContentTools="contentTools",t.EdgeChromium="edgeChromium",t.EdgeMobile="edgeMobile",t.Finance="finance",t.Gaming="gaming",t.CGHomePage="cgHomePage",t.CGSideBar="cgSideBar",t.HomePage="homePage",t.Hub="hub",t.Health="health",t.KnowledgeAgents="knowledgeAgents",t.Office="office",t.Personalize="personalize",t.qna="qna",t.msn="msn",t.MSNStudio="msnStudio",t.SharedWidgets="sharedWidgets",t.SuperApp="superApp",t.Shopping="shopping",t.Sports="sports",t.Distribution="distribution",t.Traffic="traffic",t.Travel="travel",t.UGC="ugc",t.Views="views",t.Weather="weather",t.WeatherWidgets="weatherWidgets",t.WeatherLocal="weatherLocal",t.Windows="windows",t.WindowsNewsPlus="windowsNewsPlus",t.WindowsNewsWidgets="winWidgets",t.WindowsShell="windowsShell",t.WindowsShellV2="windowsShellV2",t.WebWidgets="webWidgets"}(o||(o={})),function(t){t.Default="Default",t.WinDashboard="WinDashboard",t.Edge="Edge"}(n||(n={}))},4968:function(t,e,i){i.d(e,{f:function(){return l}});var o=i(64187),n=i(74849),r=i(42792),a=i(99657),s=i(36452);const l=n.A.partial`position: relative; z-index: ${a.D};`;n.A`
    ${r.e}
    ${r.nH}

    ${(0,o.V)("grid")} :host {
        grid-template-rows: auto 1fr minMax(16px, auto);
        grid-template-columns: 100%;
        ${l}
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
`.withBehaviors(r.kc)},10500:function(t,e){e.A='<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect width="20" height="20" rx="10"/><path d="M13.77 7.2c.3.29.31.76.03 1.06l-4.25 4.5a.75.75 0 0 1-1.08.02l-2.25-2.25a.75.75 0 1 1 1.06-1.06l1.7 1.7 3.72-3.93a.75.75 0 0 1 1.07-.04Z"/></svg>'},11854:function(t,e,i){i.r(e),i.d(e,{SportsMatchListTransformer:function(){return o.SportsMatchListTransformer},SportsMatchTransformer:function(){return n.SportsMatchTransformer}});var o=i(26780),n=i(2408);Promise.resolve().then(i.bind(i,77395)),Promise.resolve().then(i.bind(i,76160))},15221:function(t,e,i){var o,n,r,a,s;i.d(e,{X2:function(){return S},qz:function(){return $},pA:function(){return k},S_:function(){return C},VO:function(){return a},oL:function(){return s},GC:function(){return b},IG:function(){return w},D7:function(){return l},bo:function(){return c},ci:function(){return A},Bc:function(){return _},hi:function(){return H},XR:function(){return f},rq:function(){return m},Xp:function(){return u},kA:function(){return R},JC:function(){return D},tX:function(){return I},mx:function(){return L},aB:function(){return x},jx:function(){return g},t9:function(){return M},sQ:function(){return v},T0:function(){return h},Z5:function(){return d},pC:function(){return V},JH:function(){return N},v1:function(){return o},BP:function(){return B},kt:function(){return p},Qy:function(){return F}}),function(t){t.Standings="Standings",t.Articles="Articles",t.TeamVsTeam="TeamVsTeam",t.TeamVsTeamWithBracket="TeamVsTeamWithBracket",t.Tennis="Tennis",t.MotorSportsSingleRace="MotorSportsSingleRace",t.MotorSportsRaceList="MotorSportsRaceList",t.GolfSchedule="GolfSchedule",t.GolfLeaderBoard="GolfLeaderBoard",t.Cricket="Cricket",t.TeamVsTeamExploration="TeamVsTeamExploration",t.LeagueEventResultOneVsOne="OneVsOneEventResult",t.LeagueEventResultOneVsMany="OneVsManyEventResult",t.LeagueEventResultTeamVsTeam="TeamVsTeamEventResult",t.CricketExploration="CricketExploration",t.TennisExploration="TennisExploration",t.EventBrief="EventBrief",t.SeasonStatistics="SeasonStatistics",t.Video="Video",t.Countdown="Countdown",t.Fre="FRE",t.Spotlight="Spotlight",t.SpotlightRace="SpotlightRace",t.SpotlightTennis="SpotlightTennis",t.SpotlightGolf="SpotlightGolf",t.SpotlightFRE="SpotlightFRE",t.StandingsRankings="StandingsRankings",t.SportsMedal="TeamStandings",t.LeagueEvents="LeagueTodaysEvents",t.TeamStandingWithMedals="TeamStandingWithMedals",t.TeamStandingWithEvents="TeamStandingWithEvents",t.SpotlightCricket="SpotlightCricket",t.TournamentsList="TournamentsList",t.Spotlight2c="Spotlight2c",t.AgentSpotlight="AgentSpotlight"}(o||(o={})),function(t){t.SportsInfo="SportsInfo",t.SportsInfoSpan="SportsInfoSpan",t.SportsMatchList="SportsMatchList",t.SportsMatch="SportsMatch",t.SportsSpanMatch="SportsSpanMatch",t.SportsArticle="SportsArticle",t.SportsTeamExploration="SportsTeamExploration",t.SportsTeamExplorationMatch="SportsTeamExplorationMatch",t.SportsCricketExploration="SportsCricketExploration",t.SportsTennisExploration="SportsTennisExploration",t.SportsExplorationHead="SportsExplorationHead",t.SportsLeaderboard="SportsLeaderboard",t.SportsCricket="SportsCricket",t.SportsCricketV2="SportsCricketV2",t.SportsTennis="SportsTennis",t.SportsMarchmadness="SportsMarchmadness",t.SportsEventBrief="SportsEventBrief",t.SportsEventCountry="SportsEventCountry",t.SportsEventResults="SportsEventResults",t.FeedsNotificationToast="FeedsNotificationToast",t.SportsHidePopup="SportsHidePopup",t.SportsFre="SportsFre",t.SportsSpotlight="SportsSpotlight",t.AgentSpotlight="AgentSpotlight",t.SportsSpotlight2c="SportsSpotlight2c",t.SportsGameStats="SportsGameStats",t.SportsCountdown="SportsCountdown",t.SportsAugmentCard="SportsAugmentCard",t.SportsSpotlightRace="SportsSpotlightRace",t.SportsSpotlightTennis="SportsSpotlightTennis",t.SportsTennisMatch="SportsTennisMatch",t.SportsSpotlightGolf="SportsSpotlightGolf",t.SharedHeroNewsCard="SharedHeroNewsCard",t.SportsSimpleMatch="SportsSimpleMatch",t.SportsStandingsRankings="SportsStandingsRankings",t.SportsEventSchedule="SportsEventSchedule",t.SportsMedal="SportsMedal",t.SportsInfoList="SportsInfoList",t.SportsRecentMedal="SportsRecentMedal",t.SportsRubyPill="SportsRubyPill",t.SportsSpotlightCricket="SportsSpotlightCricket",t.SportsSpotlightCricketV2="SportsSpotlightCricketV2",t.SportsTournamentsList="SportsTournamentsList",t.SportsTournamentStatusRow="SportsTournamentStatusRow"}(n||(n={})),function(t){t.Initial="initial",t.Default="default",t.Settings="settings",t.ColdStart="coldstart"}(r||(r={})),function(t){t.scheduledTournaments="GolfSchedule",t.leaderboard="GolfLeaderBoard"}(a||(a={})),function(t){t.singleRace="MotorSportsSingleRace",t.raceList="MotorSportsRaceList"}(s||(s={}));const l=Object.freeze({unknown:"Unknown",football:"Football",baseball:"Baseball",basketball:"Basketball",basketball3x3:"Basketball3x3",cricket:"Cricket",icehockey:"IceHockey",fieldhockey:"FieldHockey","auto racing":"Racing",racing:"Racing",tennis:"Tennis",soccer:"Soccer",golf:"Golf",australianrules:"AustralianRules",rugbyunion:"RugbyUnion",rugbyleague:"RugbyLeague",archery:"Archery",athletics:"Athletics",badminton:"Badminton",cycling:"Cycling",boxing:"Boxing",canoeing:"Canoeing",climbing:"Climbing",equestrianism:"Equestrianism",fencing:"Fencing",gymnasticsartistic:"GymnasticsArtistic",gymnasticsrhytmic:"GymnasticsRhytmic",gymnasticstrampoline:"GymnasticsTrampoline",handball:"Handball",judo:"Judo",karate:"Karate",summerolympics:"SummerOlympics",paralympics:"Paralympics",pentathlon:"Pentathlon",swimmingartistic:"SwimmingArtistic",swimming:"Swimming",diving:"Diving",waterpolo:"WaterPolo",rowing:"Rowing",sailing:"Sailing",shooting:"Shooting",skateboarding:"Skateboarding",surfing:"Surfing",taekwondo:"Taekwondo",triathlon:"Triathlon",tabletennis:"TableTennis",volleyballteam:"VolleyballTeam",volleyballbeach:"VolleyballBeach",weightlifting:"Weightlifting",wrestling:"Wrestling",softball:"Softball",trackandfield:"TrackAndField",mma:"MMA",netball:"Netball",boccia:"Boccia"});var c;!function(t){t.Mentioned="Mentioned",t.Related="Related"}(c||(c={}));const p="CHAMPIONS",d=" - ";var u,h;!function(t){t.preGame="pre-game",t.inprogressGame="inprogress-game",t.postGame="post-game",t.nonlive="non-live",t.toss="Toss",t.dinner="Dinner",t.drinks="Drinks",t.fog="Fog",t.innings="Innings",t.lunch="Lunch",t.stumps="Stumps",t.tea="Tea",t.break="Break",t.superover="SuperOver",t.abandoned="Abandoned",t.postponed="Postponed",t.BadWeatherCondition="BadWeatherCondition",t.delayed="Delayed"}(u||(u={})),function(t){t.PreGame="PreGame",t.InProgressGame="InProgressGame",t.InProgress="InProgress",t.Final="Final",t.PostGame="PostGame",t.Live="Live",t.Unknown="Unknown"}(h||(h={}));const g={Badge:"Badge",Preview:"PreviewCard"},v="Sports",m="SportsFre",f={League:"League",Team:"Team"},S={Dislike:"Dislike",Follow:"Follow"};var x;!function(t){t.Leaderboard="Leaderboard",t.FRE="Fre",t.Tennis="Tennis",t.Cricket="Cricket",t.SportsSpotlight="SportsSpotlight",t.SideBySide="SideBySide",t.Countdown="Countdown"}(x||(x={}));const w={0:"recommendationNone",1:"recommendationExplicit",2:"recommendationImplicit",3:"recommendationPopular",4:"recommendationLive",5:"recommendationMIT",6:"recommendationLocalPopular",7:"recommendationRecentSelect"},b="EntityId~";var y,$,k,T,C,M;!function(t){t.Gold="Gold",t.Silver="Silver",t.Bronze="Bronze",t.Total="Total"}(y||(y={})),function(t){t.Won="Won",t.Lost="Lost",t.Tied="Tied"}($||($={}));!function(t){t.none="None",t.unknown="Unknown",t.captain="Captain",t.batter="Batter",t.bowler="Bowler",t.wicketKeeper="WicketKeeper",t.allRounder="AllRounder"}(k||(k={})),function(t){t.one="1",t.two="2"}(T||(T={})),function(t){t.test="Test",t.odi="Odi",t.t20="T20"}(C||(C={})),function(t){t.PickTheWinner="PickTheWinner",t.PickWinner="PickWinner",t.PlayerOfMatch="PlayerOfMatch"}(M||(M={}));var E=i(16091),z=i(17720);const D="sportsInfoAppState";var R;!function(t){t[t.sportsInfoApiData=1]="sportsInfoApiData",t[t.sportsData=2]="sportsData",t[t.sportsSDCardView=3]="sportsSDCardView",t[t.sportsViewMode=4]="sportsViewMode",t[t.tabCurrentPageIndex=5]="tabCurrentPageIndex",t[t.currentTabEntityId=6]="currentTabEntityId",t[t.cardSize=7]="cardSize",t[t.cardType=8]="cardType",t[t.experienceName=9]="experienceName",t[t.entityDataMap=10]="entityDataMap",t[t.entityViewMap=11]="entityViewMap",t[t.sportsSuggestIDMap=12]="sportsSuggestIDMap",t[t.interestOptions=13]="interestOptions",t[t.allRecommendations=14]="allRecommendations",t[t.dislikedEntities=15]="dislikedEntities",t[t.followedSports=16]="followedSports",t[t.sportsConfig=17]="sportsConfig",t[t.sportsStrings=18]="sportsStrings",t[t.rootTelemetryObject=19]="rootTelemetryObject",t[t.telemetryExt=20]="telemetryExt",t[t.isPinned=21]="isPinned",t[t.isExplorationCard=22]="isExplorationCard",t[t.isHidePopupOpen=23]="isHidePopupOpen",t[t.widgetDimension=24]="widgetDimension",t[t.searchSuggestions=25]="searchSuggestions",t[t.toggleInterestManager=26]="toggleInterestManager",t[t.sportsFeedDataParsed=27]="sportsFeedDataParsed",t[t.feedDataTimestamp=28]="feedDataTimestamp",t[t.wpoMetadata=29]="wpoMetadata",t[t.currentSpotlightEntityId=30]="currentSpotlightEntityId",t[t.previewTypeInfo=31]="previewTypeInfo",t[t.isInit=32]="isInit",t[t.isV2Data=33]="isV2Data",t[t.skinnyDataConsumed=34]="skinnyDataConsumed",t[t.isCopilotTheme=35]="isCopilotTheme",t[t.IsRubyPill=36]="IsRubyPill",t[t.pollOptionId=37]="pollOptionId"}(R||(R={}));(0,E.G)({getInstance:()=>z.vv.get("sportsStates",()=>new Map)});const H={SportsInfo:"sports-sd-container",SportsInfoSpan:"sports-info-span",SportsMatchList:"sports-match-list",SportsMatch:"sports-match",Articles:"sports-articles",TeamExploration:"sports-team-exploration",TeamExplorationMatch:"sports-team-exploration-match",CricketExploration:"sports-cricket-exploration",TennisExploration:"sports-tennis-exploration",ExplorationHead:"sports-exploration-head",Standings:"sports-standings",Leaderboard:"sports-leaderboard",SportsCricket:"sports-cricket",SportsCricketV2:"sports-cricket-v2",SportsTennis:"sports-tennis",SportsMarchmadness:"sports-marchmadness",FeedsNotificationToast:"feeds-notification-toast",SportsHidePopup:"sports-hidepopup",SportsFre:"sports-fre",SportsEventBrief:"sports-event-brief",SportsEventCountry:"sports-event-country",SportsEventResults:"sports-event-results",SportsSpanMatch:"sports-span-match",SportsSpotlight:"sports-spotlight",AgentSpotlight:"agent-spotlight",SportsGameStats:"sports-game-stats",SportsGameLeaders:"sports-game-leaders",SportsCountdown:"sports-countdown",SportsAugmentCard:"sports-augment-card",SportsSpotlightRace:"sports-spotlight-race",SportsSpotlightTennis:"sports-spotlight-tennis",SportsTennisMatch:"sports-tennis-match",SportsSpotlightGolf:"sports-spotlight-golf",SharedHeroNewsCard:"shared-hero-news-card",SportsSimpleMatch:"sports-simple-match",SportsStandingsRankings:"sports-standings-rankings",SportsMedal:"sports-medal",SportsEventSchedule:"sports-event-schedule",SportsRecentMedal:"sports-recent-medal",SportsRubyPill:"sports-ruby-pill",SportsInfoList:"sports-info-list",SportsSpotlightCricket:"sports-spotlight-cricket",SportsSpotlightCricketV2:"sports-spotlight-cricket-v2",SportsPickWinner:"sports-pick-winner-wc",SportsMatchWithScores:"sports-match-with-scores",SportsSpotlight2c:"sports-spotlight-2c",SportsUpcomingMatches:"sports-upcoming-matches",SportsTournamentsList:"sports-tournaments-list",SportsTournamentStatusRow:"tournament-status-row"},F={TeamVsTeam:H.SportsMatchList,TeamVsTeamWithBracket:H.SportsMarchmadness,Standings:H.Standings,Articles:H.Articles,TeamVsTeamExploration:H.TeamExploration,EventBrief:H.SportsEventBrief,OneVsOneEventResult:H.SportsEventResults,OneVsManyEventResult:H.SportsEventResults,TeamVsTeamEventResult:H.SportsEventResults,TeamStandingWithEvents:H.SportsEventCountry,TeamStandingWithMedals:H.SportsEventCountry,CricketExploration:H.CricketExploration,TennisExploration:H.TennisExploration,Spotlight:H.SportsSpotlight,SpotlightFRE:H.SportsSpotlight,SpotlightRace:H.SportsSpotlightRace,SpotlightTennis:H.SportsSpotlightTennis,SpotlightGolf:H.SportsSpotlightGolf,StandingsRankings:H.SportsStandingsRankings,LeagueTodaysEvents:H.SportsEventSchedule,TeamStandings:H.SportsMedal,SpotlightCricket:H.SportsSpotlightCricket,TournamentsList:H.SportsTournamentsList,Spotlight2c:H.SportsSpotlight2c,AgentSpotlight:"AgentSpotlight"},I={SportsMatch:"SportsMatch",SportsTournamentStatusRow:"SportsTournamentStatusRow",EventSDCardSportsMIT1:"EventSDCardSportsMIT1",EventSDCardSportsMIT2:"EventSDCardSportsMIT2",EventSDCardSportsMIT3:"EventSDCardSportsMIT3",SportsSpans:"SportsSpans",SportsAugment:"SportsAugment",SportsHeroFre:"SportsHeroFre",SportsHeroLeagueTodaysEvents:"SportsHeroLeagueTodaysEvents",SportsHeroMatch1SeasonStats:"SportsHeroMatch1SeasonStats",SportsHeroMatch1Stats:"SportsHeroMatch1Stats",SportsHeroMatch2SeasonStats:"SportsHeroMatch2SeasonStats",SportsHeroMatch2Stats:"SportsHeroMatch2Stats",SportsHeroMatch3SeasonStats:"SportsHeroMatch3SeasonStats",SportsHeroMatch3Stats:"SportsHeroMatch3Stats",SportsHeroMatchStatistics:"SportsHeroMatchStatistics",SportsSpotlight2Match1:"SportsSpotlight2Match1",SportsSpotlight2Match2:"SportsSpotlight2Match2",SportsHeroNews:"SportsHeroNews",SportsHeroOneVsManyEventResult:"SportsHeroOneVsManyEventResult",SportsHeroOneVsOneEventResult:"SportsHeroOneVsOneEventResult",SportsMatchMiniWidget:"SportsMatchMiniWidget",SportsHeroSeasonStatistics:"SportsHeroSeasonStatistics",SportsHeroStandingsRankings:"SportsHeroStandingsRankings",SportsHeroTeamStandings:"SportsHeroTeamStandings",SportsHeroTeamStandingWithEvents:"SportsHeroTeamStandingWithEvents",SportsHeroTeamStandingWithMedals:"SportsHeroTeamStandingWithMedals",SportsHeroTeamVsTeam:"SportsHeroTeamVsTeam",SportsHeroTeamVsTeamEventResult:"SportsHeroTeamVsTeamEventResult",SportsHeroVideo:"SportsHeroVideo",SportsHeroMatchCard:"SportsHeroMatchCard"};I.SportsMatch,I.EventSDCardSportsMIT1,I.EventSDCardSportsMIT2,I.EventSDCardSportsMIT3,I.SportsSpans,I.SportsAugment;var L;!function(t){t[t.entityViewMap=0]="entityViewMap",t[t.sportsConfig=1]="sportsConfig",t[t.sportsStrings=2]="sportsStrings",t[t.rootTelemetryObject=3]="rootTelemetryObject",t[t.sportsFeedDataParsed=4]="sportsFeedDataParsed"}(L||(L={}));(0,E.G)({getInstance:()=>z.vv.get("sportsSpanStates",()=>new Map)});var P=i(38346);class _ extends P.GH{}class V extends P.GH{}class A extends P.GH{}const B=Object.freeze({SportsCard:"SportsCard",Game:"sports_game",Team:"sports_team",Vertical:"sports",DislikeSports:"HideSport",SportsSuggest:"suggestresult",SportsSuggestUrl:"suggesturl",FollowSports:"Follow",SportsFRE:"freexperience",FollowTeam:"follow_team",HeroGem:"HeroGem",SportsInfoSpotlight:"SportsInfoSpotlight",SportsDiscoverMore:"SportsDiscoverMore",ChangeLeagueTeam:"ChangeLeagueTeam",Feedback:"Feedback",PopupHideSport:"PopupHideSport",PopupHide:"popup_hide",PopupCancel:"popup_cancel",PopupClose:"popup_close",EventBriefClick:"event_brief",EventBriefContentClick:"EventBriefContent",MarchMadnessCard:"MarchMadnessCard",SportsArticle:"sports_article",SportsCarousel:"SportsCarousel",TeamVsTeam:"TeamVsTeam",ExplorationDislike:"ExplorationDislike",SportsTopSpan:"SportsTopSpan",SportsStickySpan:"SportsStickySpan",SportsTopSpanOverlay:"SportsTopSpanOverlay",SportsStickySpanOverlay:"SportsStickySpanOverlay",SeeDetails:"seedetails",SportsNotificationToast:"SportsNotificationToast",SportsNotificationToastLink:"SportsNotificationToastLink",SportsNotificationToastDismiss:"SportsNotificationToastDismiss",SportsNotificationToastYes:"SportsNotificationToastYes",SportsNotificationToastNo:"SportsNotificationToastNo",SportsAfterFollowDismiss:"SportsAfterFollowDismiss",SportsSpotlightVideo:"SpotlightVideo",Countdown:"Countdown",PinToDesk:"PinToDesk",Destination:"destination",Augment:"augment",SportsRubyClick:"SportsRubyClick",SportsSpotlightTennisCard:"SportsSpotlightTennisCard",SportsSpotlightRaceCard:"SportsSpotlightRaceCard",SportsSpotlightGolfCard:"SportsSpotlightGolfCard",SportsStandingsRankingsCard:"SportsStandingsRankingsCard",SportsStandingsRankingsTable:"SportsStandingsRankingsTable",SportsMedalCard:"SportsMedalCard",SportsAgentSpotlight:"SportsAgentSpotlight",SportsEventResults:"SportsEventResults",SportsEventScheduleCard:"SportsEventScheduleCard",SportsEventCountryCard:"SportsEventCountryCard",SportsSpotlightCricketCard:"SportsSpotlightCricketCard",SportsPickWinner:"SportsPickWinner",SportsSpotlightMatchCard2c:"SportsSpotlightMatchCard2c",SportsSpotlightScores2c:"SportsSpotlightScores2c",SportsUpcomingMatches2c:"SportsUpcomingMatches2c",SportsTournamentsListCard:"SportsTournamentsListCard",SportsInfoMiniWidget:"SportsInfoMiniWidget",SportsTournamentStatusRow:"SportsTournamentStatusRow"}),N=Object.freeze({ChannelStoreLaunched:"ChannelStoreLaunched",Badge:"SportsBadge",TaskbarRotation:"SportsTBR",SportsFrePresent:"SportsFrePresent",SportsTabType:"SportsTabType",SportsLeagueName:"SportsLeagueName",SportsDefaultLeagueShown:"SportsDefaultLeagueShown",SportsUserFollowsDefaultLeague:"SportsUserFollowsDefaultLeague",SportsUserFollowsOtherteams:"SportsUserFollowsOtherteams",SportsDropdownChangedLeague:"SportsDropdownChangedLeague",SportsUserFollowsDropdownChangedLeague:"SportsUserFollowsDropdownChangedLeague",SportsUserGroup:"SportsUserGroup",SportsExplorationReason:"SportsExplorationReason",SportsDropdownChangedViewShown:"SportsDropdownChangedViewShown",SportsCardeSize:"SportsCardeSize",SportsReasonShown:"SportsReasonShown",SportsRecommendationPopupShown:"SportsRecommendationPopupShown",SportsDfltRecoPopupShown:"SportsDefaultRecommendationPopupShown",SportsExplorationPopupShown:"SportsExplorationPopupShown",SportsUsabilityPopupShown:"SportsUsabilityPopupShown",SportsExplorationCardShown:"SportsExplorationCardShown",SportsEventBriefShown:"SportsEventBriefShown",SpotlightCardPreviewType:"SpotlightCardPreviewType",SpotlightCardEntityId:"SpotlightCardEntityId",SportsNewSpotlightCard:"SportsNewSpotlightCard",SportsCardType:"SportsCardType",SportsVideoSpotlightShown:"SportsVideoSpotlightShown",SportsNewSpotlightCountdown:"SportsNewSpotlightCountdown",SportsPinToDeskShown:"SportsPinToDeskShown",SportsDataV2:"SportsDataV2",SportsPinToDeskEdgeFeatureEnabled:"SportsPinToDeskEdgeFeatureEnabled",SportsNewSpotlightExploration:"SportsNewSpotlightExploration",SportsNewSpotlightTennis:"SportsNewSpotlightTennis",SportsNewSpotlightRace:"SportsNewSpotlightRace",SportsNewSpotlightGolf:"SportsNewSpotlightGolf",SportsCardCurrentTabId:"SportsCardCurrentTabId",SportsCardCopilotCurrentTabId:"SportsCardCopilotCurrentTabId",SportsStandingsRankings:"SportsStandingsRankings",SportsCardIsInViewPort:"SportsCardIsInViewPort",SportsNewSpotlightCricket:"SportsSpotlightCricket",SportsCardFirstTagName:"SportsCardFirstTagName",SportsRubyPillShown:"SportsRubyPillShown",SportsTournamentsList:"SportsTournamentsList"})},26780:function(t,e,i){i.r(e),i.d(e,{SportsMatchListTransformer:function(){return a}});var o=i(15221),n=i(96950),r=i(67751);class a extends o.Bc{async transform(t){const e=await this.getCurrentViewModel(t);return{viewTemplate:n.qy`
                <sports-match-list
                    :viewModel="${e}"
                ></sports-match-list>`}}async getCurrentViewModel(t){const e=await this.getMatches(t,t.reason);return{matches:e,isIncomplete:t.isCopilotTheme&&e.length<t.numberOfMatches,cardSize:t.cardSize,paginationStyle:"",reason:t.reason,showParticipantAddIcon:!1,tabIndex:0,telemetryTag:"",isCopilotTheme:t.isCopilotTheme}}async getMatches(t,e){if(!t.sportsMatchOverallData)return[];const i=t.followedSports||new Map,n=(0,r.Yo)(t.sportsMatchOverallData),a=t.sportsMatchOverallData.slice(0,t.numberOfMatches).map(async a=>{const s=a.sportsMatchData,l=(0,r.gK)(s.participantOne,i),c=(0,r.gK)(s.participantTwo,i),p={matchData:a,parentTelemetryObject:t.telemetryObject,telemetryConstants:t.telemetryConstants,participantOneFollowed:l,participantTwoFollowed:c,topDetailText:t.matchTopDetailText,isContainLiveMatch:n,reason:e,enableLiveScores:this.transformerProvider.config.enableLiveScores,cardSize:t.cardSize,showMatchUXV2:t.showMatchUXV2,isCopilotTheme:t.isCopilotTheme};return this.transformerProvider.generateView(p,o.hi.SportsMatch)});return(await Promise.all(a)).filter(r.z2)}}},36516:function(t,e){e.A='<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><g opacity=".75"><rect x=".24" y=".71" width="19.05" height="19.05" rx="9.52" fill="#fff"/><path d="M10.74 6.46a.75.75 0 1 0-1.5 0v3.25H5.99a.75.75 0 1 0 0 1.5h3.25v3.25a.75.75 0 0 0 1.5 0v-3.25h3.25a.75.75 0 1 0 0-1.5h-3.25V6.46Z" fill="#212121"/></g></svg>'},38346:function(t,e,i){var o;i.d(e,{GH:function(){return s},uE:function(){return o},_n:function(){return n},iD:function(){return r},CE:function(){return a}}),function(t){t._1x_1y="_1x_1y",t._1x_2y="_1x_2y",t._1x_3y="_1x_3y",t._1x_4y="_1x_4y",t._1x_5y="_1x_5y",t._2x_1y="_2x_1y",t._2x_2y="_2x_2y",t._2x_3y="_2x_3y",t._2x_4y="_2x_4y",t._2x_6y="_2x_6y",t._3x_1y="_3x_1y",t._3x_2y="_3x_2y",t._4x_1y="_4x_1y",t._4x_2y="_4x_2y",t._5x_1y="_5x_1y",t._5x_2y="_5x_2y",t._125u="1.25u",t._15u="1.5u",t._05u="0.5u",t.pill="pill"}(o||(o={}));const n={DropdownRecommendation:"dropdown-recommendation",DefaultRecommendation:"default-recommendation",DefaultNotification:"default-notification",ExplorationTab:"exploration-tab",ExplorationReco:"exploration-recommendation",UsabilityFeedbackToast:"usability-feedback-toast"},r={dropdownHistory:"dropdownHistory",dismissHistory:"dismissHistory",suppressHistory:"suppressHistory",usefulTipHistoryYes:"usefulTipHistoryYes",usefulTipHistoryNo:"usefulTipHistoryNo",usefulTipHistoryDismiss:"usefulTipHistoryDismiss"};function a(t,e){return 0!==t&&["_1x_3y","_1x_1y"].includes(e)&&304===t}class s{constructor(t){this.transformerProvider=t}}},42792:function(t,e,i){i.d(e,{R7:function(){return v},e:function(){return h},kc:function(){return g},nH:function(){return u}});var o=i(57416),n=i(55153),r=i(95239),a=i(26920),s=i(48751),l=i(64187),c=i(22131),p=i(74849),d=i(50882);const u=p.A`
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
`,h=p.A`
    ${(0,l.V)("flex")} :host {
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
`,g=(0,c.mr)(p.A`
            :host {
                background: ${d.A.Canvas};
                color: ${d.A.CanvasText};
            }
        `),v=p.A`
    ${h}
    ${u}

        :host([card-secondary-color]) {
        background: linear-gradient(
            var(--gradient-angle),
            var(--gradient-start-color) 35.59%,
            var(--gradient-end-color) 100%
        );
        background-clip: padding-box;
    }
`.withBehaviors(g)},65003:function(t,e,i){i.d(e,{z:function(){return a}});var o=i(56911),n=i(60815),r=i(92011);class a extends r.L{}(0,o.Cg)([n.sH],a.prototype,"viewModel",void 0)},67751:function(t,e,i){i.d(e,{AL:function(){return st},B5:function(){return dt},CP:function(){return X},EZ:function(){return rt},F_:function(){return N},HX:function(){return b},Hn:function(){return q},Hv:function(){return D},IR:function(){return Z},K4:function(){return K},Lw:function(){return G},Ot:function(){return nt},PH:function(){return ut},UU:function(){return f},VQ:function(){return A},VY:function(){return Y},Yf:function(){return T},Yo:function(){return J},ZL:function(){return x},Zi:function(){return S},_K:function(){return R},_S:function(){return mt},bm:function(){return L},bw:function(){return V},d:function(){return vt},d$:function(){return w},gK:function(){return ft},gS:function(){return at},iK:function(){return ot},jJ:function(){return Q},ju:function(){return I},lb:function(){return B},m5:function(){return pt},nD:function(){return ht},or:function(){return O},p6:function(){return P},qM:function(){return F},ry:function(){return lt},s$:function(){return tt},sP:function(){return W},wB:function(){return H},ww:function(){return U},yl:function(){return _},yn:function(){return ct},z2:function(){return E},zy:function(){return gt}});var o=i(15221),n=i(51600),r=i(65022),a=i(93468),s=i(48114),l=i(94425),c=i(63150),p=i(5044),d=i(84665),u=i(38346),h=i(83065),g=i(50180),v=i(18750),m=i(27261);const f="OSC.LBUDD745586EC750353FBC1F3971212F2F92540502D2A29306D4081FAD3D5858B79B",S="#A71930",x="#036779",w="#B10E1C",b="#DC626D",y="sportshero",$="sportsspotlight2",k=[o.v1.TeamVsTeamExploration,o.v1.CricketExploration,o.v1.TennisExploration],T=t=>{if(t){return C(t)}return""},C=t=>t?(M(t)?t+="&h=50&w=50&m=6&q=100&u=t&o=t&l=f&f=png":t.indexOf("//www.bing.com/th?")>=0&&t.indexOf("&w=")>0&&(t=t.split("&w=")[0]+"&w=100&h=100&qlt=100&c=0&rs=1"),t):t,M=t=>["//img-s-msn-com.akamaized.net/tenant/amp/entityid","//img-s.msn.cn/tenant/amp/entityid"].some(e=>t.indexOf(e)>=0);function E(t){return null!=t}const z=t=>!t||!t.trim(),D=t=>R(t,80,80,!0),R=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:40,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:40,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return t?t.replace(/w=([\d]*)?&h=([\d]*)?/,`w=${o?i+20:i}&h=${o?e+20:e}`):null},H=t=>t.get(o.kA.sportsData),F=t=>{var e;const i=V(t);return d.aC.safeExecute(()=>{var t;return(null===(t=i.tabContent)||void 0===t||null===(t=t.league)||void 0===t||null===(t=t.sportsMatches)||void 0===t?void 0:t.map(t=>({sportsMatchData:t})))||[]},void 0,r.ONV,`Sports V2 sportsMatches is not valid. sportsMatches=${JSON.stringify(null===(e=i.tabContent)||void 0===e||null===(e=e.league)||void 0===e?void 0:e.sportsMatches)}; tabType=${i.tabType};`)},I=t=>{var e;return null===(e=V(t).tabContent)||void 0===e||null===(e=e.freTeams)||void 0===e?void 0:e.map(t=>({...t,id:t.id||t.satoriId}))},L=t=>V(t).reason||"-1",P=t=>{var e;return null===(e=V(t).tabContent)||void 0===e?void 0:e.sportsSpotLightData},_=t=>t.get(o.kA.pollOptionId),V=t=>{var e;const i=H(t),o=W(t)-1;return null===(e=i.Model)||void 0===e?void 0:e.Tabs[o]},A=t=>Boolean(t)&&k.includes(t),B=t=>t===o.v1.Fre,N=t=>t===o.v1.SpotlightFRE,O=t=>t===o.v1.StandingsRankings,G=(t,e)=>{const i=t.get(o.kA.dislikedEntities);return null==i?void 0:i.has(e)},W=t=>t.get(o.kA.tabCurrentPageIndex)||1,U=t=>{const e=V(t);return e?j(e.tabType):o.v1.TeamVsTeam},j=t=>{switch(t){case o.v1.TeamVsTeamExploration:case o.v1.CricketExploration:case o.v1.TennisExploration:case o.v1.EventBrief:case o.v1.TeamVsTeamWithBracket:case o.v1.SpotlightTennis:case o.v1.SpotlightRace:case o.v1.SpotlightGolf:case o.v1.SpotlightFRE:case o.v1.StandingsRankings:case o.v1.SportsMedal:case o.v1.LeagueEventResultOneVsOne:case o.v1.LeagueEventResultOneVsMany:case o.v1.LeagueEventResultTeamVsTeam:case o.v1.LeagueEvents:case o.v1.TeamStandingWithEvents:case o.v1.TeamStandingWithMedals:case o.v1.SpotlightCricket:case o.v1.TournamentsList:case o.v1.Spotlight2c:return t;case o.v1.SeasonStatistics:case o.v1.Video:case o.v1.Countdown:case o.v1.Spotlight:return o.v1.Spotlight;default:return o.v1.TeamVsTeam}};function q(t){return"boolean"==typeof t?t:!!t&&("1"===t||"true"===t.toLowerCase())}function X(t){switch(t){case u.uE._1x_1y:return"small";case u.uE._1x_3y:return"large";default:return"medium"}}const Y=(t,e)=>void 0!==t&&void 0!==e&&(e.get(t)||!1),Z=(t,e,i)=>{switch(t){case u.uE._15u:case u.uE._1x_2y:return 3;case u.uE._1x_3y:return e===o.aB.Cricket?4:i;default:return 1}},J=t=>t.some(t=>t&&t.sportsMatchData&&t.sportsMatchData.gameStateCatetory===o.Xp.inprogressGame),K=(t,e,i,o)=>{const n=o;return n&&n[i]&&n[i][e.toString()]?(0,g.GP)((t=>{let e=146;return t===u.uE._1x_2y?e=304:t===u.uE._1x_3y&&(e=462),`https://img-s-msn-com.akamaized.net/tenant/amp/entityid/{0}.img?w=300&h=${e}&q=90&m=6&f=jpg&u=t`})(i),n[i][e.toString()]):null},Q=()=>(null===s.F_||void 0===s.F_?void 0:s.F_.get(s.nz.IsDarkMode))??(0,v.ud)(),tt=(t,e,i,n)=>{const r=+t;if(!n||Number.isNaN(r)||r<0)return"";if(1===r)return i===o.XR.League?e.followedReasonLeague:e.followedReasonTeam;const a=o.IG[t];return a&&e[a]||""},et="BB1dV8FG",it="MSports";function ot(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2?arguments[2]:void 0;const o={format:n.f5.PNG,enableDpiScaling:!1,crop:0,...i};return z(t)?e?(0,n.XP)(et,o):null:t.indexOf(".")>0?(0,n.oQ)(`${n.Ro}?id=${t}&pid=${it}`,o):(0,n.XP)(t,o)}function nt(t){if(null!=t&&t.startsWith("http"))return t;if(!t)return"";const e=(0,p.g2)((0,l.t7)(t));return(0,c.oh)()?function(t){if(!t)return t;try{const e=new URL((0,m.$N)()),i=new URL(t),o=e.searchParams.getAll("item").find(t=>t.startsWith("flights:"));return o&&i.searchParams.append("item",o),i.href}catch{return t}}(e):e}function rt(t,e){if(!t||!e)return t;try{const i=new URL(t),o=i.searchParams;return Object.keys(e).forEach(t=>{t&&e[t]&&o.set(t,e[t])}),i.toString()}catch{return t}}function at(t){return t&&!t.startsWith("#")?`#${t}`:t}function st(t,e){const i=new h.e;try{return i.localizedMonthDate(t,e)}catch(i){(0,a.vV)(r.Guj,"Sports card localizedMonthDate exception.",`date=${t} market=${e} error=${i&&i.message}`);let o=t.toLocaleDateString("en-us",{month:"short",day:"numeric"});return o||(o=t.toDateString()),o?o.replace(/\u200E/g,"").replace(/\u200F/g,""):o}}function lt(t,e){const i=new h.e;try{return i.formatTimeFromDate(t,e)}catch(i){return(0,a.vV)(r.Guj,"Sports card formatTimeFromDate exception.",`date=${t} market=${e} error=${i&&i.message}`),t.toTimeString()}}function ct(t){const e=60*(new Date).getTimezoneOffset()*1e3,i=new Date(t).valueOf();return new Date(i-e)}function pt(t){switch(t){case"PreGame":default:return o.Xp.preGame;case"InProgressGame":case"InProgress":return o.Xp.inprogressGame;case"Final":case"PostGame":return o.Xp.postGame}}function dt(t){var e;return"string"!=typeof t.gameState?pt(null===(e=t.gameState)||void 0===e?void 0:e.state):t.gameStateCatetory}function ut(t){if(!t||"string"==typeof t)return"";const{gamePeriod:e,gameClock:i}=t;return e&&i?`${e} ${i}`:e||i||""}function ht(t){return!t||"object"==typeof t&&0===Object.keys(t).length}function gt(t){var e;return(null===(e=t.get(o.kA.cardType))||void 0===e?void 0:e.toLowerCase().startsWith(y))||!1}function vt(t){var e;return(null===(e=t.get(o.kA.cardType))||void 0===e?void 0:e.toLowerCase().startsWith($))||!1}function mt(t,e){if(t.id&&e){const i=new URL(e);i.searchParams.append("videoId",t.id),e=i.toString()}return e}function ft(t,e){return!t.hasExplicitInterest||null!=e&&e.has(t.satoriId)||null!=e&&e.has(t.yId)?!0===(null==e?void 0:e.get(t.satoriId||""))||!0===(null==e?void 0:e.get(t.yId||"")):(null==e||e.set(t.satoriId,!0),!0)}},76160:function(t,e,i){i.r(e),i.d(e,{SportsMatch:function(){return at}});var o=i(56911),n=i(84665),r=i(65003);class a extends r.z{constructor(){super(...arguments),this.getMatchData=()=>this.viewModel.matchData.sportsMatchData,this.isVertical=()=>null!=this.viewModel&&this.viewModel.isVertical,this.isCopilotTheme=()=>null!=this.viewModel&&this.viewModel.isCopilotTheme}get isWindowsCopilot(){return null!=this.viewModel&&this.viewModel.isWindows&&this.viewModel.isCopilotTheme}handleClickFollowIcon(t,e,i,o){if(t&&t.currentTarget){t.preventDefault(),t.stopPropagation();const r="keydown"===t.type||"keypress"===t.type||"keyup"===t.type;(0,n.LE)(t.currentTarget,r,e),this.viewModel.followClickHandler&&this.viewModel.followClickHandler(i,e,o)}}}var s=i(92011),l=i(48751),c=i(62047),p=i(61138),d=i(41123),u=i(71157),h=i(62198),g=i(4283),v=i(4968),m=i(43103),f=i(50882),S=i(74849),x=i(4126),w=i(22131);const b="#D83B01",y="#E98F6D",$=S.A` .date,.nodate{width:auto}`,k=S.A` :host{--line-color:rgba(61,61,61,1);--header-color-live:rgba(255,153,164,1);--ruby-live-text-bg:rgba(9,102,32,0.2);--ruby-live-text-color:rgba(108,197,123,1)}.winner-tag path{fill:#FFFFFF}.detail-live-animation{background:${y}}.game-in-progress-text{color:${y}}.side-by-side-hover-canvas:hover{background:rgba(0,0,0,0.6)}.icon-add > svg > g > path,.icon-selected > svg > path{fill:#1A1A1A}.icon-add > svg > g > rect,.icon-selected > svg > rect{fill:#FFFFFF}.live-line{border-top:1px solid ${y};
        background-color: ${y}}.standings-style{color:${l.l}}:host-context([is-ruby-feed-card]) .matchup-neutral-background{border:1px solid #5A5E63}.kcntr .post-game .kscr:not(.winner-team){color:var(--smtc-foreground-ctrl-neutral-primary-pressed,#A4ADC8)}`,T=S.A` :host{--header-color-live:#C42B1C;--standings-color:#707070;--line-color:#F2F2F2;--kumo-live-bg:rgba(171,47,64,1);--kumo-live-text:rgba(255,255,255,1);--ruby-live-text-bg:#94DC7F33;--ruby-live-text-color:rgba(0,127,48,1)}.sports-match{padding:4px 0;text-decoration:none;display:grid;row-gap:14px;border-radius:6px;height:58px;${v.f}}.sports-match.reason{padding:1px 0}.sports-match.superbowl-half-u{padding:6px 16px;height:auto}.sports-match:focus-visible{outline:${l.l} solid 2px;outline-offset:-2px}.side-by-side-matchup-content{display:flex;flex-direction:row;justify-content:space-between;align-items:center;position:relative;border-radius:6px}.superbowl-half-u .side-by-side-matchup-content{padding:0}.matchup-neutral-background{border-radius:6px;background:var(--sports-item-background)}.matchup-neutral-background.no-bg{background:rgba(0,0,0,0)}.matchup-neutral-background:hover,.matchup-neutral-background:focus-visible{background:var(--sports-item-hover-background)}.matchup-neutral-background:active{background:var(--sports-item-active-background)}.side-by-side-gradient-container{height:45px;width:100%;border-radius:6px 6px 0px 0px;position:absolute}.reason .side-by-side-gradient-container{height:40px}.side-by-side-hover-canvas{display:flex;justify-content:center;align-items:center;position:absolute;width:100%;height:100%;z-index:3;font-size:14px;font-weight:bolder;background:rgba(255,255,255,0);color:rgba(0,0,0,0);overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.side-by-side-hover-canvas:hover{border-radius:6px;border:1.6px solid #6581CA;background:rgba(255,255,255,0.85);color:${l.l}}.video-indicator{display:none}.middle-game-detail{display:flex;flex-direction:row;justify-content:space-around;color:${l.l};font-size:28px;line-height:var(--type-ramp-plus-1-line-height);font-weight:600;white-space:nowrap;text-align:center;align-items:center}.middle-notification-game-detail{align-items:center}.bottom-game-detail{color:${l.l};
        font-size: ${c.t};line-height:14px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;max-width:100px}.bottom-notification-container{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;max-height:28px;text-align:center;max-width:108px}.bottom-notification-container.pregame{white-space:normal}.notification-message{display:block;max-width:108px;font-weight:400;color:${l.l}}.underline-text{text-decoration:underline}.superbowl-1-u .bottom-game-detail,.superbowl-half-u .bottom-game-detail{color:${l.l}}.foreground-rest-text-color{color:${l.l}}.top-game-detail{color:${l.l};
        font-size: ${c.t};line-height:14px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;max-width:140px}.finals-match .top-game-detail,.finals-match .bottom-game-detail{color:${l.l}}.super-bowl{font-weight:700;text-transform:uppercase;color:${l.l}}.game-details{display:flex;flex-direction:column;align-items:center;width:100px;overflow:hidden}.side-by-side-matchup-content:hover .game-details-wrapper .game-details{display:none}.side-by-side-matchup-content:hover .game-details-wrapper .game-details-additional-info{display:flex}.game-details-additional-info{display:none;flex-direction:column;align-items:center;justify-content:center;width:100px}.game-details-additional-info .round-info,.game-details-additional-info .round-scores-info{font-size:${p.k};
        line-height: ${p.F};
        color: ${l.l};max-width:100px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.game-details-additional-info .round-summary-info{font-size:${d.K};
        line-height: ${d.Z};
        font-weight: 600;
        color: ${l.l};max-width:110px;white-space:nowrap;overflow:hidden}.participant-container{display:flex;align-items:center;flex-direction:column;width:84px;color:${l.l};z-index:0}.spotlight-two .participant-container{width:64px}.participant-container img{width:36px;height:36px}.participant-icon{display:flex;border:none;cursor:pointer;width:36px;height:36px;border-radius:8px;align-items:center;justify-content:center;background:transparent}.participant-icon.participant-icon-large{width:70px;height:50px}.participant-container .logo-backplate.participant-icon-large img{width:40px;height:40px}.participant-icon.logo-backplate{border-radius:8px;width:40px;height:40px;img{width:28px;height:28px}}.side-by-side-matchup-content .follow-icon{opacity:0;pointer-events:none;margin-right:-20px;margin-top:-16px}.side-by-side-matchup-content:hover .follow-icon{opacity:1;pointer-events:all}.follow-icon:focus-visible,.sports-match:focus-visible .follow-icon{opacity:1;pointer-events:all}.spotlight-two .right-participant .follow-icon{position:relative;left:-18px}.icon-selected,.icon-add{z-index:2}.icon-add > svg > g{opacity:1}.icon-add > svg > g > path,.icon-selected > svg > path{fill:#FFFFFF}.icon-add > svg > g > rect,.icon-selected > svg > rect{fill:#0078d4}.game-in-progress-text{color:${b};
        font-size: ${p.k};
        line-height: ${p.F};font-weight:400}.live-scores-detail .game-in-progress-text{border-top:1px solid ${b};
        font-size: ${c.t}}.participant-name-style{font-size:${p.k};
        line-height: ${p.F};max-width:64px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;font-weight:600}.game-time-text-style{font-size:${u.T};
        line-height: ${u.O};max-width:100px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.game-time-notification-text-style{font-size:${p.k};
        line-height: ${p.F};max-width:100px}.game-score-notification-text-style{font-size:${u.T};
        line-height: ${u.O}}.game-score-text-style{color:${l.l};
        line-height: ${u.O};
        font-size: ${h.a};margin:0px 4px;display:flex;flex-direction:row;align-items:center;column-gap:4px;font-weight:600}.long-score{font-size:var(--type-ramp-minus-1-font-size,12px)}.long-score .game-score-text-style{font-size:var(--type-ramp-minus-1-font-size,12px);margin:0px 2px}.detail-live-animation{height:2px;background:${b};transform:translateZ(0);animation:liveAnimation 1.6s ease-out infinite 1.0s alternate}@keyframes liveAnimation{0%{width:50px}100%{width:2px}}.video-detail,.top-detail{display:flex;align-items:center;height:14px;margin-bottom:-4px}.top-detail{max-height:40px}.video-detail > span{height:14px;color:${l.l};
        font-size: ${c.t};line-height:14px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;max-width:64px}.top-detail > span{font-size:${c.t};
        line-height: ${c.e};
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        color: ${l.l}}.game-winner-team,.game-winner-description{text-align:center;font-size:${d.K};
        line-height: ${d.Z};
        font-weight: 900;
        color: ${l.l};white-space:nowrap;text-overflow:ellipsis;overflow:hidden;font-family:Arial,Segoe,sans-serif}.game-winner-description{margin-top:-4px}.click-for-detail{display:inline-block;background:rgb(196 43 28);color:rgb(255,255,255);font-size:var(--type-ramp-base-font-size);line-height:var(--type-ramp-base-font-size);height:15px;padding:2px 5px;margin:3px;border-radius:4px;font-weight:600;animation:3s ease 0s infinite normal none running gradbg;-webkit-animation:3s ease 0s infinite normal none running gradbg;max-width:80px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}@keyframes gradbg{0%{background-position:10% 0%}50%{background-position:91% 100%}100%{background-position:10% 0%}}.detail-live-score{font-size:${p.k};
        line-height: ${p.F};
        font-weight: 600;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        color: ${g.IR};text-decoration:none}.detail-live-score:hover,.detail-live-score:focus-visible{text-decoration:underline;cursor:pointer}.winner-tag > svg{fill:currentColor;display:block;margin:0 auto}.rtl.winner-tag > svg{transform:scaleX(-1)}.winner-tag.scale-x{transform:scaleX(-1)}.game-time-dot-seperator{margin:0 4px}.live-line{border:none;border-top:1px solid ${b};
        width: 16px;
        height: 0;
        left: 126px;
        top: 20px;
        position: absolute;
        background-color: ${b}}.vert-header,.line-part div:nth-of-type(2),.in-prog-vert,.game-date{font-size:var(--type-ramp-minus-1-font-size,12px);line-height:var(--type-ramp-minus-1-line-height,16px);font-style:normal}.vert-noline,.matchup-vert{display:flex;flex-direction:column;align-items:flex-start}.vert-noline{gap:8px;align-self:stretch;border-radius:8px}.vert-header{font-weight:600;color:${l.l}}.matchup-vert{gap:12px;align-self:stretch}.part-vert,.part-info{display:flex;align-items:center}.part-vert{justify-content:space-between;align-self:stretch}.part-info{width:90%;gap:10px}.icon-vert{width:32px;height:32px;flex-shrink:0}.icon-vert img{max-width:100%;max-height:100%;width:auto;height:auto}.name,.score,.line-part div:nth-of-type(2),.game-date > div{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.name,.score{font-size:var(--type-ramp-plus-2-font-size,20px);font-style:normal;font-weight:600;line-height:var(--type-ramp-plus-2-line-height,28px);color:${l.l}}.in-prog-vert{color:var(--header-color-live);font-weight:600}.standings-style{color:var(--standings-color);text-align:right;font-size:var(--type-ramp-base-font-size,14px);font-style:normal;font-weight:400;line-height:var(--type-ramp-base-line-height,20px)}.line-match{display:flex;flex-direction:row;align-items:center;padding:0px;gap:12px;width:100%;height:auto}.line-match > div:first-child{display:flex;flex-direction:row;align-items:flex-start;padding:0px;gap:4px;width:168px}.line-wrap{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;padding:0px;gap:8px;width:168px;height:auto}.line-part{display:flex;flex-direction:row;align-items:center;padding:0px;gap:6px;width:100%}.line-part div:nth-of-type(2){font-weight:400}.line-icon{width:24px;height:24px;flex-shrink:0}.line-icon img{max-width:100%;max-height:100%;width:auto;height:auto}.game-date{font-weight:400;text-align:center;width:68px}.vert-line{width:0px;height:50px;border:1px solid var(--line-color)}.kpart{width:48px;height:74px;gap:4px;align-items:center}.kmtch,.kscr-cntr,.kscr{display:flex;flex-direction:row}.nodate,.date,.kpart{display:flex;flex-direction:column}.kmtch{width:260px;height:74px;gap:0;justify-content:space-between;align-items:center;color:${l.l}}.kicon{width:40px;height:40px;img{width:40px;height:40px}}.kname,.pghdr,.prehdr{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.kname{max-height:24px;max-width:65px;font-weight:600;line-height:24px;font-size:var(--type-ramp-plus-1-font-size,16px);text-align:left}.long-name{max-width:72px;font-size:var(--type-ramp-base-font-size,14px)}.kscr-cntr{justify-content:space-around;font-size:28px;line-height:var(--type-ramp-plus-1-line-height);font-weight:600;white-space:nowrap;text-align:center;align-items:center;gap:6px;margin-bottom:8px}.kscr{font-weight:600;text-align:center;line-height:var(--type-ramp-plus-4-line-height);font-size:var(--type-ramp-plus-5-font-size);margin:0px 4px;align-items:center;column-gap:4px;gap:6px;font-variant-ligatures:none}.ktime{font-weight:600;text-align:center;font-size:var(--smtc-text-global-title1-font-size,28px);line-height:var(--smtc-text-global-title1-line-height,32px);margin:0px 4px;display:flex;flex-direction:row;align-items:center;column-gap:4px;margin-bottom:8px}.nodate{align-items:center;gap:4px;width:148px}.date{align-items:center;gap:4px;width:148px}.pghdr{font-size:var(--smtc-text-global-caption1-font-size,12px);line-height:var(--smtc-text-global-caption1-line-height,16px);font-weight:400;text-align:center;width:100%}.prehdr{font-size:var(--smtc-text-global-caption1-font-size,12px);line-height:var(--smtc-text-global-caption1-line-height,16px);font-weight:400;text-align:center;width:100%}.kcntr{text-decoration:none;${v.f}}.kcntr:focus-visible{outline-offset:-1px}.kmtch{padding:12px 0}:host(:first-of-type) :not(.kcntr) .kmtch{padding-top:0}:host(:last-of-type) :not(.kcntr) .kmtch{padding-bottom:0}.g-dtl{display:flex;flex-direction:column;gap:2px;align-items:center}:host-context(.sports-match-list) .kscr{font-size:var(--type-ramp-plus-3-font-size)}:host-context(.sports-match-list) .kcntr .kscr{font-size:var(--smtc-text-global-title1-font-size,28px);line-height:var(--smtc-text-global-title1-line-height,32px)}._05u .nodate,._05u .date,._05u .kpart{gap:8px}._05u.kcntr .kmtch{height:98px}.kmtch{padding:7px 0px;width:100%;height:78px;box-sizing:border-box;color:var(--smtc-foreground-ctrl-neutral-primary-rest,#282523)}.kname{font-size:var(--smtc-text-global-body2-font-size,15px);line-height:var(--smtc-text-global-body2-line-height,20px)}.r-live-text{font-weight:400;font-size:var(--smtc-text-global-caption1-font-size,12px);line-height:var(--smtc-text-global-caption1-line-height,16px);color:var(--ruby-live-text-color,rgba(0,127,48,1));font-weight:600;text-transform:uppercase}.post-game .kscr:not(.winner-team){color:var(--smtc-theme-color-foreground-secondary-650,#4c4642)}.kscr-cntr{display:grid;grid-template-columns:1fr min-content 1fr}.kscr-cntr .part-left{justify-content:end}.kpart{height:auto}.r-live-tag{background:var(--ruby-live-text-bg,rgba(237,246,232,1));border-radius:8px;padding:6px;display:grid;grid-template-columns:auto auto;gap:4px}.r-live-icon{width:20px;height:20px;margin:-2px}.kcntr .winner-tag > svg{width:10px;height:10px}.kcntr .winner-tag svg path{fill:currentColor}`.withBehaviors(new m.N(null,k),(0,w.mr)(S.A` :host{forced-color-adjust:auto}@media screen and (-ms-high-contrast:active){.super-bowl,.participant-container,.top-game-detail,.middle-game-detail,.bottom-game-detail,.top-detail > span,.game-score-text-style,.game-in-progress-text,.video-detail,.game-winner-description{color:${f.A.CanvasText}}.icon-add > svg > g > path,.icon-selected > svg > path{fill:${f.A.LinkText}}.icon-add > svg > g > rect,.icon-selected > svg > rect{fill:#000000;stroke:${f.A.LinkText}}.click-for-detail{border:1px solid;background-color:${f.A.LinkText}}.detail-live-animation{background-color:${f.A.LinkText}}.scores-line{overflow:hidden}}`),new x.o("isWindowsCopilot",!0,$));var C=i(15221),M=i(50180),E=i(96950),z=i(91640),D=i(36516),R=i(10500),H='<svg width="6" height="7" viewBox="0 0 6 7" fill="none"><path d="M.38 2.82a.8.8 0 0 0 0 1.36l4.5 2.71c.5.3 1.12-.07 1.12-.67V.78c0-.6-.63-.98-1.13-.67L.38 2.82Z" fill="#1A1A1A"/></svg>';const F=(t,e)=>E.qy`
    <div class="follow-icon"
        role="button"
        tabindex="0"
        title="${i=>(0,M.GP)(e?i.viewModel.strings.followSports||"":i.viewModel.strings.haveFollowed||"",t.name||"")}"
        @click="${(i,o)=>i.handleClickFollowIcon(o.event,e,{id:t.satoriId||"",name:t.name,yId:t.yId||"",type:C.XR.Team,imageUrl:t.imageUrl},t.scheduleUrl||"")}"
        @keyup="${(i,o)=>o&&o.event&&"Enter"===o.event.key?i.handleClickFollowIcon(o.event,e,{id:t.satoriId||"",name:t.name,yId:t.yId||"",type:C.XR.Team,imageUrl:t.imageUrl},t.scheduleUrl||""):null}"
        data-t="${t=>{var e;return null===(e=t.viewModel)||void 0===e?void 0:e.followTelemetryTag}}"
    >
        <div class="${t=>e?"icon-add":"icon-selected"}"> ${E.qy.partial(e?D.A:R.A)}</div>
    </div>
`,I=E.qy`
    <div class="game-details">
        ${E.qy`<div class="top-game-detail">${t=>t.viewModel.topDetailText}</div>`}
        ${t=>function(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;switch(t.getMatchData().gameStateCatetory){case C.Xp.preGame:return null==i?J():K(i);case C.Xp.inprogressGame:return ot();case C.Xp.postGame:return e?it():(0,M.oT)(t.viewModel.topDetailText)?tt(o||""):et();default:return J()}}(t,t.viewModel.shouldShowChampionPostGame,t.viewModel.preGameNotificationMessage,t.viewModel.postGameNotificationMessage)}
    </div>
`,L=E.qy`
    <div class="${t=>t.getMatchData().additionalInfo?"game-details-wrapper":""}">
        ${I}
        ${t=>V(t.getMatchData().additionalInfo)}
    </div>
`,P=()=>E.qy`
    <div class="g-dtl ${t=>t.getMatchData().gameStateCatetory}">
        <div class="nodate">
            ${t=>t.getMatchData().gameStateCatetory===C.Xp.inprogressGame?N:""}
            ${t=>t.getMatchData().gameStateCatetory===C.Xp.postGame?O:""}
            <div class="kscr-cntr">
                <span class="kscr ${t=>{var e;return null!==(e=t.getMatchData().participantOne)&&void 0!==e&&e.isWinner?"winner-team":""}} part-left">
                    ${(0,z.z)(t=>{var e;return null===(e=t.getMatchData().participantOne)||void 0===e?void 0:e.isWinner},E.qy`<span class="${"rtl"===document.dir?"rtl":""} winner-tag text-align-end">${E.qy.partial(H)}</span>`)}
                    ${t=>{var e;return(null===(e=t.getMatchData().participantOne)||void 0===e?void 0:e.score)??""}}
                </span>
                ${t=>{var e,i;return(0,M.oT)((null===(e=t.getMatchData().participantOne)||void 0===e?void 0:e.score)||"")||(0,M.oT)((null===(i=t.getMatchData().participantTwo)||void 0===i?void 0:i.score)||"")?"":A}}
                <span class="kscr ${t=>{var e;return null!==(e=t.getMatchData().participantTwo)&&void 0!==e&&e.isWinner?"winner-team":""}}">
                    ${t=>{var e;return(null===(e=t.getMatchData().participantTwo)||void 0===e?void 0:e.score)??""}}
                    ${(0,z.z)(t=>{var e;return null===(e=t.getMatchData().participantTwo)||void 0===e?void 0:e.isWinner},E.qy`<span class="${"rtl"===document.dir?"rtl":""} winner-tag scale-x">${E.qy.partial(H)}</span>`)}
                </span>
            </div>
        </div>
    </div>
`,_=()=>E.qy`
    <div class="date">
        <div class="prehdr">${t=>{var e;return null===(e=t.viewModel.headerText)||void 0===e?void 0:e.rightHeaderText}}</div>
        <div class="ktime">${t=>t.getMatchData().gameStartTime}</div>
    </div>
`,V=t=>t?E.qy`
            <div class="game-details-additional-info">
                <div class="round-info">
                    ${t.round||""}
                </div>
                <div class="round-summary-info">
                    ${t.roundSummary||""}
                </div>
                <div class="round-scores-info">
                    ${t.scores}
                </div>
            </div>
        `:null,A=E.qy`
    <span class="scores-line">${E.qy.partial(C.Z5)}</span>
`,B=E.qy`
    <span>${E.qy.partial("·")}</span>
`,N=E.qy`
    <div class="r-live-tag">
        <img class= "r-live-icon" src="${t=>t.viewModel.liveIconUrl}" />
        <span class="r-live-text">${C.T0.Live}</span>
    </div>
`,O=E.qy`
    <div class="pghdr">
        <span>${C.T0.Final}</span>
        ${t=>t.getMatchData().gameDate?B:""}
        <span>${t=>t.getMatchData().gameDate}</span>
    </div>
`,G=E.qy`
    <div class="vert-noline">
        <div class="vert-header ${t=>t.getMatchData().gameStateCatetory===C.Xp.inprogressGame?"in-prog-vert":""}">
            ${t=>{var e;return null===(e=t.viewModel.headerText)||void 0===e?void 0:e.header}}
        </div>
        <div class="matchup-vert">
            <div class="part-vert">
                <div class="part-info">
                    <div class="icon-vert">
                        <img
                            role="presentation"
                            src="${t=>t.viewModel.participantOneImgIcon}"
                            onerror="this.style.display='none';this.alt=''"
                        />
                    </div>
                    <div class="name" title="${t=>{var e;return null===(e=t.getMatchData().participantOne)||void 0===e?void 0:e.name}}">
                        ${t=>{var e;return(null===(e=t.getMatchData().participantOne)||void 0===e?void 0:e.name)||""}}
                    </div>
                </div>
                <div class="score ${t=>t.getMatchData().gameStateCatetory===C.Xp.preGame?"standings-style":""}">${t=>{var e;return null===(e=t.viewModel.headerText)||void 0===e?void 0:e.topScoreText}}</div>
            </div>
            <div class="part-vert">
                <div class="part-info">
                    <div class="icon-vert">
                        <img
                            role="presentation"
                            src="${t=>t.viewModel.participantTwoImgIcon}"
                            onerror="this.style.display='none';this.alt=''"
                        />
                    </div>
                    <div class="name" title="${t=>{var e;return null===(e=t.getMatchData().participantTwo)||void 0===e?void 0:e.name}}">
                        ${t=>{var e;return(null===(e=t.getMatchData().participantTwo)||void 0===e?void 0:e.name)||""}}
                    </div>
                </div>
                <div class="score ${t=>t.getMatchData().gameStateCatetory===C.Xp.preGame?"standings-style":""}">${t=>{var e;return null===(e=t.viewModel.headerText)||void 0===e?void 0:e.bottomScoreText}}</div>
            </div>
        </div>
    </div>
`,W=E.qy`
    <div class="line-match">
        <div>
            <div class="line-wrap">
                <div class="line-part">
                    <div class="line-icon">
                        <img
                            role="presentation"
                            src="${t=>t.viewModel.participantOneImgIcon}"
                            onerror="this.style.display='none';this.alt=''"
                        />
                    </div>
                    <div>
                        ${t=>{var e;return(null===(e=t.getMatchData().participantOne)||void 0===e?void 0:e.name)||""}}
                    </div>
                </div>
                <div class="line-part">
                    <div class="line-icon">
                        <img
                            role="presentation"
                            src="${t=>t.viewModel.participantTwoImgIcon}"
                            onerror="this.style.display='none';this.alt=''"
                        />
                    </div>
                    <div>
                        ${t=>{var e;return(null===(e=t.getMatchData().participantTwo)||void 0===e?void 0:e.name)||""}}
                    </div>
                </div>
            </div>
            <div class="vert-line"></div>
        </div>
        <div class="game-date">
            <div>${t=>{var e;return null===(e=t.viewModel.headerText)||void 0===e?void 0:e.leftHeaderText}}</div>
            <div>${t=>{var e;return null===(e=t.viewModel.headerText)||void 0===e?void 0:e.rightHeaderText}}</div>
        </div>
    </div>
`,U=E.qy`
    ${t=>t.viewModel.isSpotlightCard?X:q}
`,j=E.qy`
    <div class="kmtch">
        <div class="kpart">
            <div class="kicon">
                <img
                    role="presentation"
                    src="${t=>t.viewModel.participantOneImgIcon}"
                    onerror="this.style.display='none';this.alt=''"
                    title="${t=>{var e;return(null===(e=t.getMatchData().participantOne)||void 0===e?void 0:e.name)||""}}"
                />
            </div>
            <div class="kname ${t=>{var e,i;return null!==(e=t.getMatchData().participantOne)&&void 0!==e&&e.shortName||null===(i=t.getMatchData().participantOne)||void 0===i||!i.name?"":"long-name"}}" title="${t=>{var e;return(null===(e=t.getMatchData().participantOne)||void 0===e?void 0:e.name)||""}}">
                ${t=>{var e,i;return(null===(e=t.getMatchData().participantOne)||void 0===e?void 0:e.shortName)||(null===(i=t.getMatchData().participantOne)||void 0===i?void 0:i.name)||""}}
            </div>
        </div>
        ${t=>(t=>t.getMatchData().gameStateCatetory===C.Xp.inprogressGame||t.getMatchData().gameStateCatetory===C.Xp.postGame?P():_())(t)}
        <div class="kpart">
            <div class="kicon">
                <img
                    role="presentation"
                    src="${t=>t.viewModel.participantTwoImgIcon}"
                    onerror="this.style.display='none';this.alt=''"
                    title="${t=>{var e;return(null===(e=t.getMatchData().participantTwo)||void 0===e?void 0:e.name)||""}}"
                />
            </div>
            <div class="kname ${t=>{var e,i;return null!==(e=t.getMatchData().participantTwo)&&void 0!==e&&e.shortName||null===(i=t.getMatchData().participantTwo)||void 0===i||!i.name?"":"long-name"}}" title="${t=>{var e;return(null===(e=t.getMatchData().participantTwo)||void 0===e?void 0:e.name)||""}}">
                ${t=>{var e,i;return(null===(e=t.getMatchData().participantTwo)||void 0===e?void 0:e.shortName)||(null===(i=t.getMatchData().participantTwo)||void 0===i?void 0:i.name)||""}}
            </div>
        </div>
    </div>
`,q=E.qy`
    <a class="kcntr ${t=>"0.5u"===t.viewModel.cardSize?"_05u":""}"
        tabindex="${t=>t.viewModel.tabIndex}"
        href="${t=>t.getMatchData().matchClickthroughUrl?t.getMatchData().matchClickthroughUrl:void 0}"
        target="${t=>t.viewModel.linkTarget}"
        data-t="${t=>t.viewModel.telemetryTag}"
    >
        ${j}
    </a>
`,X=E.qy`
    <div class="kcntr ${t=>"0.5u"===t.viewModel.cardSize?"_05u":""}">
        ${j}
    </div>
`,Y=E.qy`
    ${t=>t.viewModel.needsVerticalLine?W:G}
`,Z=E.qy`
    <a class="
        sports-match matchup-neutral-background
        ${t=>t.viewModel.noBackgrounds?"no-bg":""}
        ${t=>t.viewModel.reason.length>0?"reason":""}
        ${t=>t.viewModel.isSpotlight2Card?"spotlight-two":""}
    "
        tabindex="${t=>t.viewModel.tabIndex}"
        href="${t=>t.getMatchData().matchClickthroughUrl?t.getMatchData().matchClickthroughUrl:void 0}"
        target="${t=>t.viewModel.linkTarget}"
        data-t="${t=>t.viewModel.telemetryTag}"
    >
        <div role="presentation" class="side-by-side-gradient-container" style="${t=>`background-image: ${t.viewModel.backgroundGradient};`}"></div>
        <div class="side-by-side-matchup-content" style="${t=>t.viewModel.overrideStyleForMatch} ${t=>t.viewModel.matchupContentNotificationStyleIfNecessary}">
            <div class="participant-container ${t=>t.viewModel.shouldDisplayT4?"":" participant-one-alignment"}">
                <div class="participant-icon ${t=>t.viewModel.useLargeTeamIcon?"participant-icon-large":""} ${t=>t.viewModel.showMatchUXV2?"logo-backplate":""}" style="${t=>`background-color: ${t.viewModel.participantOneColor};`}">
                    <img
                        role="presentation"
                        src="${t=>t.viewModel.participantOneImgIcon}"
                        onerror="this.style.display='none';this.alt=''"
                    />
                    ${t=>F(t.getMatchData().participantOne||{},!t.viewModel.participantOneFollowed)}
                </div>
                <div class="participant-name-style" title="${t=>{var e;return null===(e=t.getMatchData().participantOne)||void 0===e?void 0:e.name}}">
                    ${t=>{var e;return(null===(e=t.getMatchData().participantOne)||void 0===e?void 0:e.name)||""}}
                </div>
            </div>
            ${L}
            <div class="participant-container right-participant ${t=>t.viewModel.shouldDisplayT4?"":" participant-two-alignment"}">
                <div class="participant-icon ${t=>t.viewModel.useLargeTeamIcon?"participant-icon-large":""} ${t=>t.viewModel.showMatchUXV2?"logo-backplate":""}" style="${t=>`background-color: ${t.viewModel.participantTwoColor};`}">
                    ${(0,z.z)(t=>t.viewModel.isSpotlight2Card,E.qy`${t=>F(t.getMatchData().participantTwo||{},!t.viewModel.participantTwoFollowed)}`)}
                    <img
                        role="presentation"
                        src="${t=>t.viewModel.participantTwoImgIcon}"
                        onerror="this.style.display='none';this.alt=''"
                    />
                    ${(0,z.z)(t=>!t.viewModel.isSpotlight2Card,E.qy`${t=>F(t.getMatchData().participantTwo||{},!t.viewModel.participantTwoFollowed)}`)}
                </div>
                <div class="participant-name-style" title="${t=>{var e;return null===(e=t.getMatchData().participantTwo)||void 0===e?void 0:e.name}}">
                    ${t=>{var e;return(null===(e=t.getMatchData().participantTwo)||void 0===e?void 0:e.name)||""}}
                </div>
            </div>
        </div>
    </a>
`,J=()=>E.qy`
    <div class="middle-game-detail" title="${t=>t.getMatchData().gameStartTime}">
        <span class="game-time-text-style" >
            ${t=>t.getMatchData().gameStartTime||""}
        </span>
    </div>
    <div class="bottom-game-detail ${t=>t.viewModel.shouldDisplayT4?"":"foreground-rest-text-color"}" title="${t=>t.getMatchData().tvChannel?`${t.getMatchData().gameDate} - ${t.getMatchData().tvChannel}`:t.getMatchData().gameDate}">
        <span>${t=>t.getMatchData().gameDate||""}</span>
            ${t=>t.getMatchData().tvChannel&&t.getMatchData().gameDate?A:""}
        <span>${t=>t.getMatchData().tvChannel||""}</span>
    </div>
`,K=t=>E.qy`
    <div class="middle-game-detail" title="${t=>t.getMatchData().gameStartTime+"-"+t.getMatchData().gameDate}">
        <span class="game-time-text-style game-time-notification-text-style">
            ${t=>`${t.getMatchData().gameStartTime||""}`}
        </span>
        <span class="game-time-text-style game-time-notification-text-style game-time-dot-seperator">
            ${t=>""+(t.getMatchData().gameStartTime?"·":"")}
        </span>
        <span class="game-time-text-style game-time-notification-text-style">
            ${t=>`${t.getMatchData().gameDate}`}
        </span>
    </div>
    <div class="${"bottom-game-detail bottom-notification-container pregame"}" title="${t}">
        <span class=${t=>t.viewModel.shouldUnderlineNotificationMessage?"notification-message underline-text":"notification-message"}>
            ${t}
        </span>
    </div>
`,Q=()=>E.qy`
    <div class="middle-game-detail ${t=>t.viewModel.hasLongScore?"long-score":""}">
        <span class="game-score-text-style">
            ${(0,z.z)(t=>{var e;return null===(e=t.getMatchData().participantOne)||void 0===e?void 0:e.isWinner},E.qy`<span class="${"rtl"===document.dir?"rtl":""} winner-tag text-align-end">${E.qy.partial(H)}</span>`)}
            ${t=>{var e;return(null===(e=t.getMatchData().participantOne)||void 0===e?void 0:e.score)??""}}
        </span>
        ${t=>{var e,i;return(0,M.oT)((null===(e=t.getMatchData().participantOne)||void 0===e?void 0:e.score)||"")||(0,M.oT)((null===(i=t.getMatchData().participantTwo)||void 0===i?void 0:i.score)||"")?"":A}}
        <span class="game-score-text-style">
            ${t=>{var e;return(null===(e=t.getMatchData().participantTwo)||void 0===e?void 0:e.score)??""}}
            ${(0,z.z)(t=>{var e;return null===(e=t.getMatchData().participantTwo)||void 0===e?void 0:e.isWinner},E.qy`<span class="${"rtl"===document.dir?"rtl":""} winner-tag scale-x">${E.qy.partial(H)}</span>`)}
        </span>
    </div>
`,tt=t=>E.qy`
    <div class="top-game-detail"
        title="${t=>t.getMatchData().gameState?`${t.getMatchData().gameDate} - ${t.getMatchData().gameState}`:t.getMatchData().gameDate}">
        <span>${t=>t.getMatchData().gameState||""}</span>
        ${t=>t.getMatchData().gameDate&&t.getMatchData().gameState?B:""}
        <span>${t=>t.getMatchData().gameDate||""}</span>
    </div>
    ${Q()}
    ${(0,z.z)(!(0,M.oT)(t),E.qy`
        <div class="${"bottom-game-detail bottom-notification-container"}" title="${t}">
            <span class=${t=>t.viewModel.shouldUnderlineNotificationMessage?"notification-message underline-text":"notification-message"}>
                ${t}
            </span>
        </div>
    `)}
`,et=()=>E.qy`
    ${Q()}
    <div class="bottom-game-detail"
        title="${t=>t.getMatchData().gameState?`${t.getMatchData().gameDate} - ${t.getMatchData().gameState}`:t.getMatchData().gameDate}">
        <span>${t=>t.getMatchData().gameState||""}</span>
        ${t=>t.getMatchData().gameDate&&t.getMatchData().gameState?B:""}
        <span>${t=>t.getMatchData().gameDate||""}</span>
    </div>
`,it=()=>E.qy`
    <div class="top-game-detail superbowl-top">
        <div class="game-winner-team">
            ${t=>nt(t)}
        </div>
        <div class="game-winner-description" title="${t=>t.viewModel.strings.champions||""}">
            ${t=>t.viewModel.strings.championsFormatted}
        </div>
    </div>
    <div class="middle-game-detail">
        <span class="game-score-text-style">
            ${t=>{var e;return(null===(e=t.getMatchData().participantOne)||void 0===e?void 0:e.score)??""}}
        </span>
        ${t=>{var e,i;return(0,M.oT)((null===(e=t.getMatchData().participantOne)||void 0===e?void 0:e.score)||"")||(0,M.oT)((null===(i=t.getMatchData().participantTwo)||void 0===i?void 0:i.score)||"")?"":A}}
        <span class="game-score-text-style">
            ${t=>{var e;return(null===(e=t.getMatchData().participantTwo)||void 0===e?void 0:e.score)??""}}
        </span>
    </div>
`,ot=()=>E.qy`
    <div class="middle-game-detail">
        ${t=>t.viewModel.enableLiveScores?E.qy`
    <span class="game-score-text-style">
        ${t=>{var e;return(null===(e=t.getMatchData().participantOne)||void 0===e?void 0:e.score)??""}}
    </span>
    ${t=>{var e,i;return(0,M.oT)((null===(e=t.getMatchData().participantOne)||void 0===e?void 0:e.score)||"")||(0,M.oT)((null===(i=t.getMatchData().participantTwo)||void 0===i?void 0:i.score)||"")?"":A}}
    <span class="game-score-text-style">
        ${t=>{var e;return(null===(e=t.getMatchData().participantTwo)||void 0===e?void 0:e.score)??""}}
    </span>
`:E.qy`
    <span class="click-for-detail" title="click to see score and details">
        ${t=>(t.viewModel.strings.sportsLive||"LIVE").toLocaleUpperCase()}
    </span>
`}
    </div>
    <div class="bottom-game-detail ${t=>t.viewModel.enableLiveScores?"live-scores-detail":""}" title="${t=>t.getMatchData().tvChannel?`${t.getMatchData().gamePeriodAndClock} - ${t.getMatchData().tvChannel}`:t.getMatchData().gamePeriodAndClock}">
        <span class="game-in-progress-text" title="${t=>t.getMatchData().gamePeriodAndClock}">
            ${t=>t.getMatchData().gamePeriodAndClock||""}
        </span>
        ${t=>t.getMatchData().gamePeriodAndClock&&t.getMatchData().tvChannel?A:""}
        <span title="${t=>t.getMatchData().tvChannel}">${t=>t.getMatchData().tvChannel||""}</span>
    </div>
`,nt=t=>{const e=t.getMatchData();if(e&&e.gameStateCatetory==C.Xp.postGame){var i,o;let t=null!==(i=e.participantOne)&&void 0!==i&&i.isWinner?null===(o=e.participantOne)||void 0===o||null===(o=o.name)||void 0===o?void 0:o.toUpperCase():null;var n,r;if(!t)t=null!==(n=e.participantTwo)&&void 0!==n&&n.isWinner?null===(r=e.participantTwo)||void 0===r||null===(r=r.name)||void 0===r?void 0:r.toUpperCase():null;return t||""}return""},rt=E.qy`
    ${t=>t.isVertical()?E.qy` ${Y} `:t.isCopilotTheme()?E.qy` ${U} `:t.viewModel?E.qy` ${Z} `:void 0}
`;let at=class extends a{};at=(0,o.Cg)([(0,s.E)({name:"sports-match",template:rt,styles:T,shadowOptions:{delegatesFocus:!0}})],at)},77395:function(t,e,i){i.r(e),i.d(e,{SportsMatchList:function(){return f}});var o=i(56911),n=i(96574);class r extends n.a{}var a=i(92011),s=i(74849),l=i(61138),c=i(43103);const p=s.A`
`,d=s.A` .sports-match-list{row-gap:12px;display:grid}.reason.sports-match-list{row-gap:8px}.reason-text{font-size:${l.k};
        line-height: ${l.F};font-weight:600;padding-bottom:4px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;position:relative}.sports-match-list._15u{row-gap:0;height:272px}.sports-match-list._15u.incomplete{height:252px;padding-top:20px}.sports-match-list._15u.copilot-theme{row-gap:10px;align-items:center}`.withBehaviors(new c.N(null,p));var u=i(96950),h=i(91640),g=i(39957);const v=u.qy`
    <div class="sports-match-list ${t=>t.viewModel.paginationStyle} ${t=>t.viewModel.reason.length>0?"reason":""}
        ${t=>"1.5u"===t.viewModel.cardSize?"_15u":""} ${t=>t.viewModel.isIncomplete?"incomplete":""} ${t=>t.viewModel.isCopilotTheme?"copilot-theme":""}"
    >
        ${(0,h.z)(t=>!t.viewModel.isCopilotTheme&&t.viewModel.reason,u.qy`<div class="reason-text">
            ${t=>t.viewModel.reason}
        </div>`)}
        ${(0,g.ux)(t=>t.viewModel.matches,u.qy`<sports-match
            :viewModel="${t=>t.viewModel}"
        ></sports-match>
        `,{positioning:!0})}
    </div>
`,m=u.qy`
    ${(0,h.z)(t=>null!=t.viewModel,v)}
`;let f=class extends r{};f=(0,o.Cg)([(0,a.E)({name:"sports-match-list",template:m,styles:d,shadowOptions:{delegatesFocus:!0}})],f)},84665:function(t,e,i){i.d(e,{aC:function(){return f},YJ:function(){return r},x1:function(){return a},iJ:function(){return v},h9:function(){return m},LE:function(){return u},Eh:function(){return p},Ai:function(){return c},dI:function(){return d},j8:function(){return h},ao:function(){return g}});var o=i(11372),n=i(87518);const r={Customize:o.MS.Customize,Paginate:o.MS.Paginate,Hide:o.MS.Hide,Cancel:o.MS.Cancel,Close:o.MS.Close,Dislike:o.MS.Dislike,Show:o.MS.Show,Click:o.MS.Click};class a{createTelemetryObjectTag(t){return t?t.getMetadataTag():""}createTelemetryObject(t,e,i,r){if(!t||!e)return;const{name:a,content:s,...l}=e,c={...s,type:(null==s?void 0:s.type)||o.b5.StructuredData,vertical:this.verticalName,category:this.categoryName,subcategory:this.subCategoryName},p={...this.ext,signature:i};r&&(p.previewType=r);const d={...l,ext:p,zone:this.zone};return(0,n.g)(a,c,d)}createViewTelemetryObject(t,e){return this.createTelemetryObject(t,{name:e.name,action:o.EG.View,behavior:o.MS.Show,content:{headline:e.headline,id:e.id,brandId:e.brandId}},e.signature,e.previewType)}createViewTelemetryTag(t,e){const i=this.createTelemetryObject(t,{name:e.name,behavior:o.MS.View,content:{headline:e.headline,id:e.id,brandId:e.brandId}},e.signature,e.previewType);return this.createTelemetryObjectTag(i)}createNavClickTelemetryTag(t,e){const i=this.createTelemetryObject(t,{name:e.name,action:o.EG.Click,behavior:o.MS.Navigate,content:{headline:e.headline,id:e.id,brandId:e.brandId}},e.signature,e.previewType);return this.createTelemetryObjectTag(i)}createAddClickTelemetryTag(t,e){const i=this.createTelemetryObject(t,{name:e.name,action:o.EG.Click,behavior:o.MS.Add,type:o.MJ.ActionButton,content:{headline:e.headline}},e.signature,e.previewType);return this.createTelemetryObjectTag(i)}createHoverShowTelemetryTag(t,e){const i=this.createTelemetryObject(t,{name:e.name,action:o.EG.Hover,behavior:o.MS.Show,content:{headline:e.headline,id:e.id,brandId:e.brandId}},e.signature,e.previewType);return this.createTelemetryObjectTag(i)}createMouseLeaveCloseTelemetryTag(t,e){const i=this.createTelemetryObject(t,{name:e.name,action:o.EG.MouseLeave,behavior:o.MS.Close,content:{headline:e.headline,id:e.id,brandId:e.brandId}},e.signature,e.previewType);return this.createTelemetryObjectTag(i)}createDislikeActionTelemetryTag(t,e){const i=this.createTelemetryObject(t,{name:e.name,behavior:o.MS.Dislike,content:{headline:e.headline,id:e.id,brandId:e.brandId}},e.signature,e.previewType);return this.createTelemetryObjectTag(i)}createFollowTelemetryTag(t,e,i){const n=this.createTelemetryObject(t,{name:e.name,action:o.EG.Click,behavior:i?o.MS.Follow:o.MS.Unfollow,type:o.MJ.ActionButton,content:{headline:e.headline}},e.signature,e.previewType);return this.createTelemetryObjectTag(n)}createMenuDataProviderTelemetryTag(t,e,i){const n=this.createTelemetryObject(t,{name:e.name,action:o.EG.Click,behavior:o.MS.Undefined,type:o.MJ.ActionButton,content:{headline:e.headline},zone:i},e.signature,e.previewType);return this.createTelemetryObjectTag(n)}createNavClickWithTypeTelemetryTag(t,e,i){const n=this.createTelemetryObject(t,{name:e.name,action:o.EG.Click,behavior:o.MS.Navigate,type:i,content:{headline:e.headline,id:e.id,brandId:e.brandId,type:e.type||o.b5.StructuredData}},e.signature,e.previewType);return this.createTelemetryObjectTag(n)}createBehaviorTelemetryTag(t,e,i){const n=this.createTelemetryObject(t,{name:e.name,action:o.EG.Click,behavior:i,content:{headline:e.headline,id:e.id,brandId:e.brandId}},e.signature,e.previewType);return this.createTelemetryObjectTag(n)}createBaseContentCardTelemetryContext(t,e){const i=this.createTelemetryObject(t,{name:e.name,type:o.MJ.ContentCard,content:{headline:e.headline,id:e.id,brandId:e.brandId}},e.signature,e.previewType),n=this.createTelemetryObject(i,{name:e.name,type:o.MJ.Headline,behavior:o.MS.Navigate,content:{headline:e.headline,id:e.id,brandId:e.brandId}},e.signature,e.previewType);if(i&&n)return{contentCard:i,destination:n}}initTelemetryBuilder(t,e,i,o,n){this.verticalName=t,this.categoryName=e,this.ext=i,this.zone=o,this.subCategoryName=n}updateExt(t){this.ext=t}}var s=i(98216),l=i(29231);function c(t){try{s.YT.sendActionEvent(t,o.EG.MouseLeave,o.MS.Close)}catch(t){return}}function p(t){try{s.YT.sendActionEvent(t,o.EG.Hover,o.MS.Show)}catch(t){return}}function d(t,e){try{s.YT.sendActionEvent(t,o.EG.Click,o.MS.Navigate,e)}catch(t){return}}function u(t,e,i){try{s.YT.sendActionEvent(t,e?o.EG.KeyPress:o.EG.Click,i?o.MS.Follow:o.MS.Unfollow)}catch(t){return}}function h(t){try{if(!t)throw new Error("Current target is undefined, cannot send content view telemetry.");s.YT.sendContentViewEvent(t,l.ym.View)}catch(t){return}}function g(t,e){const i=e?`${e}`:"";s.YT.addOrUpdateTmplProperty(t,i)}function v(t){s.YT.removeTmplProperty(t)}function m(t){for(const e of t)v(e)}var f,S=i(93468);!function(t){t.safeExecute=function(t,e,i,o,n){let r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};try{return t()}catch(t){return i&&(0,S.vV)(i,`${o}: ${null==t?void 0:t.message}`,n,r),e}},t.safeExecuteAsync=async function(t,e,i,o,n){let r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};try{return await t()}catch(t){return i&&(0,S.vV)(i,`${o}: ${null==t?void 0:t.message}`,n,r),Promise.resolve(e)}},t.logExceptionWithFormat=function(t,e,i,o,n){let r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};(0,S.c_)(t,e,`${o}${o?": ":""}${i}`,n,r)},t.logErrorWithFormat=function(t,e,i,o){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};(0,S.vV)(t,`${i}${i?": ":""}${e}`,o,n)}}(f||(f={}))},96574:function(t,e,i){i.d(e,{a:function(){return a}});var o=i(56911),n=i(92011),r=i(37918);let a=class extends n.L{connected(){this.initHandlers(),this.addSubscriptions()}disconnected(){this.removeSubscriptions()}removeSubscriptions(){}addSubscriptions(){}initHandlers(){}};a=(0,o.Cg)([r.x],a)},99657:function(t,e,i){i.d(e,{D:function(){return a},I:function(){return r}});var o=i(68136);const{create:n}=o.G,r=n("sloppy-click-z-index",1),a=n("click-z-index",1)}}]);