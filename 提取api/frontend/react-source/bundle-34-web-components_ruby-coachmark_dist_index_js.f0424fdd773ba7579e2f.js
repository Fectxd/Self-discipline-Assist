"use strict";(self.homePageWebpackChunks=self.homePageWebpackChunks||[]).push([["web-components_ruby-coachmark_dist_index_js"],{7014:function(e,t,i){i.d(t,{m:function(){return j}});var r=i(56911),o=i(38493),c=i(60815),a=i(55230),s=i(92011),n=i(56863);class l extends s.L{}class d extends((0,n.dx)(l)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class h extends d{constructor(){super(),this.initialValue="on",this.keypressHandler=e=>{if(!this.readOnly)switch(e.key){case a.Mm:case a.gG:this.checked=!this.checked}},this.clickHandler=e=>{this.disabled||this.readOnly||(this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly),this.readOnly?this.classList.add("readonly"):this.classList.remove("readonly")}checkedChanged(e,t){super.checkedChanged(e,t),this.checked?this.classList.add("checked"):this.classList.remove("checked")}}(0,r.Cg)([(0,o.CF)({attribute:"readonly",mode:"boolean"}),(0,r.Sn)("design:type",Boolean)],h.prototype,"readOnly",void 0),(0,r.Cg)([c.sH,(0,r.Sn)("design:type",Array)],h.prototype,"defaultSlottedNodes",void 0);var u=i(37180),b=i(74849),p=i(64187),g=i(60993),k=i(73477),w=i(22131),v=i(50882),$=i(48196),y=i(86856),x=i(7896),f=i(74838),m=i(79288),F=i(46203),T=i(26920),C=i(43774),_=i(95239),E=i(14996),A=i(48751),z=i(41123),N=i(74089),P=i(4283);const R=b.A`
    :host([hidden]) {
        display: none;
    }

    ${(0,p.V)("inline-flex")} :host {
        align-items: center;
        outline: none;
        font-family: ${x.O};
        margin: calc(${f.vR} * 1px) 0;
        ${""} user-select: none;
    }

    :host([disabled]) {
        opacity: ${m.q};
    }

    :host([disabled]) .label,
    :host([readonly]) .label,
    :host([readonly]) .switch,
    :host([disabled]) .switch {
        cursor: ${g.Z};
    }

    .switch {
        position: relative;
        outline: none;
        box-sizing: border-box;
        width: calc(((${$.D} / 2) + ${f.vR}) * 2px);
        height: calc(((${$.D} / 2) + ${f.vR}) * 1px);
        background: ${F.le};
        border-radius: calc(${$.D} * 1px);
        border: calc(${T.XA} * 1px) solid ${C.nF};
    }

    :host(:enabled) .switch:hover {
        background: ${F.jM};
        border-color: ${C.vA};
        cursor: pointer;
    }

    :host(:enabled) .switch:active {
        background: ${F.RS};
        border-color: ${C.p4};
    }

    :host(:${k.N}) .switch {
        box-shadow: 0 0 0 2px ${_.p}, 0 0 0 4px ${E.WN};
        border-color: ${E.WN};
    }

    .checked-indicator {
        position: absolute;
        height: calc((${$.D} - (${f.vR} * 5.5)) * 1px);
        width: calc((${$.D} - (${f.vR} * 5.5)) * 1px);
        top: calc(${f.vR} * 1px);
        background: ${A.l};
        border-radius: 50%;
        transition: all 0.2s ease-in-out;
    }

    .status-message {
        color: ${A.l};
        cursor: pointer;
        font-size: ${z.K};
        line-height: ${z.Z};
    }

    .label__hidden {
        display: none;
        visibility: hidden;
    }

    .label {
        color: ${A.l};
        font-size: ${z.K};
        line-height: ${z.Z};
        margin-inline-end: calc(${f.vR} * 2px + 2px);
        cursor: pointer;
    }

    ::slotted(*) {
        ${""} margin-inline-start: calc(${f.vR} * 2px + 2px);
    }

    :host([aria-checked="true"]) .checked-indicator {
        background: ${N.l_};
    }

    :host([aria-checked="true"]) .switch {
        background: ${P.IR};
    }

    :host([aria-checked="true"]:enabled) .switch:hover {
        background: ${P.OS};
    }

    :host([aria-checked="true"]:enabled) .switch:hover .checked-indicator {
        background: ${N.XK};
    }

    :host([aria-checked="true"]:enabled) .switch:active {
        background: ${P.am};
    }

    :host([aria-checked="true"]:enabled) .switch:active .checked-indicator {
        background: ${N.J_};
    }

    :host([aria-checked="true"]:${k.N}:enabled) .switch {
        box-shadow: 0 0 0 2px ${_.p}, 0 0 0 4px ${E.WN};
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
`.withBehaviors(new y.t(b.A`
            .checked-indicator {
                left: calc(${f.vR} * 1px);
            }

            :host([aria-checked="true"]) .checked-indicator {
                left: calc(
                    (((${$.D} / 2) + ${f.vR}) + ${f.vR}) * 1px
                );
            }
        `,b.A`
            .checked-indicator {
                right: calc(${f.vR} * 1px);
            }

            :host([aria-checked="true"]) .checked-indicator {
                right: calc(
                    (((${$.D} / 2) + ${f.vR}) + ${f.vR}) * 1px
                );
            }
        `),(0,w.mr)(b.A`
            .checked-indicator,
            :host(:enabled) .switch:active .checked-indicator {
                forced-color-adjust: none;
                background: ${v.A.FieldText};
            }
            .switch {
                forced-color-adjust: none;
                background: ${v.A.Field};
                border-color: ${v.A.FieldText};
            }
            :host(:enabled) .switch:hover {
                background: ${v.A.HighlightText};
                border-color: ${v.A.Highlight};
            }
            :host([aria-checked="true"]) .switch {
                background: ${v.A.Highlight};
                border-color: ${v.A.Highlight};
            }
            :host([aria-checked="true"]:enabled) .switch:hover,
            :host(:enabled) .switch:active {
                background: ${v.A.HighlightText};
                border-color: ${v.A.Highlight};
            }
            :host([aria-checked="true"]) .checked-indicator {
                background: ${v.A.HighlightText};
            }
            :host([aria-checked="true"]:enabled) .switch:hover .checked-indicator {
                background: ${v.A.Highlight};
            }
            :host(:${k.N}) .switch {
                border-color: ${v.A.Highlight};
                box-shadow: 0 0 0 2px ${v.A.Field},
                    0 0 0 4px ${v.A.FieldText};
            }
            :host([aria-checked="true"]:${k.N}:enabled) .switch {
                box-shadow: 0 0 0 2px ${v.A.Field},
                    0 0 0 4px ${v.A.FieldText};
            }
            :host([disabled]) {
                opacity: 1;
            }
            :host([disabled]) .checked-indicator {
                background: ${v.A.GrayText};
            }
            :host([disabled]) .switch {
                background: ${v.A.Field};
                border-color: ${v.A.GrayText};
            }
            .status-message,
            .label {
                color: ${v.A.FieldText};
            }
        `));var S=i(96950),B=i(82774),D=i(18893);const I=function(e={}){return S.qy`
        <template
            role="switch"
            aria-checked="${e=>e.checked}"
            aria-disabled="${e=>e.disabled}"
            aria-readonly="${e=>e.readOnly}"
            tabindex="${e=>e.disabled?null:0}"
            @keypress="${(e,t)=>e.keypressHandler(t.event)}"
            @click="${(e,t)=>e.clickHandler(t.event)}"
        >
            <label
                part="label"
                class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
            >
                <slot ${(0,B.e)("defaultSlottedNodes")}></slot>
            </label>
            <div part="switch" class="switch">
                <slot name="switch">${(0,D.R)(e.switch)}</slot>
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
    `}({switch:S.qy`
        <span class="checked-indicator" part="checked-indicator"></span>
    `});const j=class extends h{}.compose({name:`${u.c.prefix}-switch`,template:I,styles:R})},24439:function(e,t,i){i.d(t,{RubyCoachmarkWC:function(){return ee}});var r=i(56911),o=i(92011),c=i(23429),a=i(60815),s=i(38493),n=i(89980),l=i(55593),d=i(11367),h=i(29736),u=i(93468),b=i(65022);const p="ruby_opt_out_action",g=e=>{const t=(null==e?void 0:e.replaceAll("{entityName}","Copilot Discover"))||"";return(null==t?void 0:t.replaceAll("{entitySuffix}","(Preview)"))||""};var k=i(87518),w=i(11372);function v(){return(0,k.g)("CopilotDiscover_toggle",{type:w.b5.Settings},w.MS.Customize,w.EG.Click,{}).getMetadataTag()??""}var $=i(46534),y=i(16813),x=i(69583),f=i(87405),m=i(70487);function F(e){c.L.enqueue(()=>{!async function(e){const t=await(0,f.TW)(m.u.rubyToggle),i={id:"rubyToggle",group:"Functional",placementSource:"Internal",surfaceModel:{surfaceType:"Coachmark",size:$.fB.Medium,position:{coachmarkAnchor:t||m.u.rubyToggle,anchoringPosition:$.M7.Below,hasPointer:!0,pointerPosition:$.X1.Opposite,elementObserveResize:m.u.settingsButton}},contentModel:{title:g(null==e?void 0:e.classicCoachmarkTitle)||"",description:g(null==e?void 0:e.classicCoachmarkDescription)||"",contentType:y.r.CallToAction}};await(0,x.sn)().then(e=>{e.sendInternalPlacement(i)})}(e)})}var T=i(77246);class C extends o.L{constructor(){super(...arguments),this.renderSwitch=!1,this.renderTooltip=!1,this.rubyToggleSwitchTelemetryTag="",this.rubyCoachmarkTelemetryTag="",this.closeButtonTelemetryTag="",this.marketingPage="https://aka.ms/copilot-discover",this.rubyToggleRef=null,this.signInAvailable=!1,this.classicNTPToggle=!1,this.classicCoachmark=!1,this.superNavToggle=!1,this.enableCopilotToggleColorTrmt=!1,this.isTranslucentBackground=!1,this.__updateObjects=()=>{try{const e=(0,n.Lg)().getObject(p);e&&"true"!==e&&(0,n.Lg)().removeObject(p),(0,n.Lg)().setObject(p,"true")}catch(e){(0,u.vV)(b.T62,`Error setting opt out action: ${e}`)}},this.onRubySwitchChange=()=>{try{this.classicNTPToggle||this.superNavToggle?(d.gR.updateUserSelection(!0),this.classicCoachmark&&(0,h.zK)()):(this.__updateObjects(),d.gR.updateUserSelection(!1))}catch(e){(0,u.vV)(b.T62,`Error updating user selection from ruby switch: ${e}`)}},this.onCloseTooltipClick=()=>{this.renderTooltip=!1},this.i=e=>{const t=e||h.oF;window.setTimeout(()=>{this.renderTooltip=!0,c.L.enqueue(()=>this.renderTooltip)},100),window.setTimeout(()=>{this.renderTooltip=!1,c.L.enqueue(()=>this.renderTooltip)},t)}}rubyToggleRefChanged(){this.rubyToggleRef&&(0,T.S)()&&(0,f.KO)(m.u.rubyToggle,this.rubyToggleRef)}connectedCallback(){super.connectedCallback(),(0,T.S)()&&this.h()}h(){var e;if(this.rubyToggleSwitchTelemetryTag=v(),this.rubyCoachmarkTelemetryTag=(e=this.marketingPage,(0,k.g)("CopilotDiscover_nav",{type:w.b5.ExternalLink},w.MS.Navigate,w.EG.Click,{destinationUrl:e}).getMetadataTag()??""),this.classicCoachmark&&this.classicNTPToggle){this.closeButtonTelemetryTag=(0,k.g)("CopilotDiscover_close",{type:w.b5.Coachmark},w.MS.Close,w.EG.Click,{}).getMetadataTag()??"";const e=(0,n.Lg)().getObject("showClassicCoachmark");return void(e&&"false"===e&&"1"!==(0,l.a)().get("fcruby")||((0,f.KO)(m.u.rubyToggle,this.rubyToggleRef),F(this.classicCoachmarkStrings),(0,n.Lg)().setObject("showClassicCoachmark","false")))}if(this.classicNTPToggle||this.superNavToggle)return;"true"!==(0,n.Lg)().getObject("showRubyCoachmark")&&"1"!==(0,l.a)().get("fcruby")||((0,n.Lg)().setObject("showRubyCoachmark","false"),this.i())}}(0,r.Cg)([a.sH],C.prototype,"rubyCoachmarkStrings",void 0),(0,r.Cg)([a.sH],C.prototype,"classicCoachmarkStrings",void 0),(0,r.Cg)([a.sH],C.prototype,"renderSwitch",void 0),(0,r.Cg)([a.sH],C.prototype,"renderTooltip",void 0),(0,r.Cg)([a.sH],C.prototype,"rubyToggleSwitchTelemetryTag",void 0),(0,r.Cg)([a.sH],C.prototype,"rubyCoachmarkTelemetryTag",void 0),(0,r.Cg)([a.sH],C.prototype,"closeButtonTelemetryTag",void 0),(0,r.Cg)([a.sH],C.prototype,"marketingPage",void 0),(0,r.Cg)([a.sH],C.prototype,"rubyToggleRef",void 0),(0,r.Cg)([(0,s.CF)({attribute:"signin-available",mode:"boolean"})],C.prototype,"signInAvailable",void 0),(0,r.Cg)([(0,s.CF)({attribute:"classic-ntp-toggle",mode:"boolean"})],C.prototype,"classicNTPToggle",void 0),(0,r.Cg)([(0,s.CF)({attribute:"classic-coachmark",mode:"boolean"})],C.prototype,"classicCoachmark",void 0),(0,r.Cg)([(0,s.CF)({attribute:"super-nav-toggle",mode:"boolean"})],C.prototype,"superNavToggle",void 0),(0,r.Cg)([(0,s.CF)({attribute:"copilot-toggle-ct1",mode:"boolean"})],C.prototype,"enableCopilotToggleColorTrmt",void 0),(0,r.Cg)([(0,s.CF)({attribute:"translucent-bg",mode:"boolean"})],C.prototype,"isTranslucentBackground",void 0);var _=i(39677),E=i(32257),A=i(74849),z=i(22131),N=i(4126),P=i(59721);const R=A.A`
fluent-switch.ruby-switch[current-checked=false]::part(checked-indicator){background:#FFFFFF}fluent-switch.ruby-switch[current-checked=false]::part(switch){border-color:#6E6E6E}.ruby-switch-label .preview-text{color:#FFFFFF}`,S=A.A`
fluent-switch.ruby-switch[current-checked=true]::part(checked-indicator){background:#FFFFFF}fluent-switch.ruby-switch[current-checked=true]::part(switch){background:#4BA849FF}`.withBehaviors((0,z.G2)(R)),B=A.A`
fluent-switch.ruby-switch[current-checked=true]::part(switch){background:#F6FAFEFF}fluent-switch.ruby-switch[current-checked=true]::part(checked-indicator){background:#1E2024}`,D=A.A`
fluent-switch.ruby-switch[current-checked=true]::part(switch){background:#24282FFF}fluent-switch.ruby-switch[current-checked=true]::part(checked-indicator){background:#FFF}`.withBehaviors((0,z.G2)(B)),I=A.A`
.tooltip-arrow{border-left:1px solid #FFF;border-top:1px solid #FFF}`,j=A.A`
.tooltip-text,.tooltip-link,.ruby-switch-label{color:#FFF}.ruby-switch-label .preview-text{color:#8D9198}fluent-switch.ruby-switch::part(switch){border:1px solid rgba(0,0,0,0)}.discover-tooltip,.tooltip-arrow{background:#1C2024}`,M=A.A`
.ruby-switch-label .preview-text,.ruby-switch-label .normal-text{color:#1E2024}`,O=A.A`
.ruby-switch-label .preview-text,.ruby-switch-label .normal-text{color:#FFFFFF}fluent-switch.ruby-switch::part(switch){border-color:#4A4A4A}`,H=A.A`
.ruby-switch-label{font-size:16px;padding-block:3px;padding-inline-end:8px}.ruby-switch-label .normal-text,.ruby-switch-label .preview-text{color:#FFFFFF}fluent-switch.ruby-switch[current-checked=true]::part(checked-indicator){background:#FFFFFF}fluent-switch.ruby-switch[current-checked=true]::part(switch){background:#4BA849FF}`.withBehaviors(new N.o("isTranslucentBackground",!0,M),(0,z.G2)(O)),L=A.A`
.ruby-switch-label{padding-inline-end:8px;padding-block:5px}fluent-switch.ruby-switch[current-checked=false]::part(checked-indicator){background:rgba(0,0,0,0.61);border-color:rgba(0,0,0,0.61)}fluent-switch.ruby-switch[current-checked=true]::part(checked-indicator){background:${_.gCv}}fluent-switch.ruby-switch[current-checked=true]::part(switch){border:1px solid rgba(255,255,255,0);background:${_.yCo};
}
`,U=A.A`
.ruby-toggle{margin-inline-end:8px;width:max-content;display:flex}.ruby-switch-label{color:#1E2024;font-size:14px;font-weight:400;line-height:20px;gap:4px;margin:0;display:flex;align-items:flex-start;cursor:pointer}.ruby-switch-label .preview-text{color:${E.Adh}}.discover-tooltip{z-index:${P.P.Below.toString()};display:flex;width:248px;height:auto;flex-direction:column;border-radius:20px;background:rgb(255,255,255);padding:16px;align-items:flex-start;color:#1E2024;font-size:14px;font-weight:400;line-height:20px;text-wrap:wrap;overflow-wrap:break-word;position:absolute;top:38px;inset-inline-end:4px;border:1px solid transparent;visibility:hidden;opacity:0;--elevation:11;box-shadow:0 0 calc((var(--elevation) * 0.225px) + 2px) rgba(0,0,0,calc(.11 * (2 - var(--background-luminance,1)))),0 calc(var(--elevation) * 0.4px) calc((var(--elevation) * 0.9px)) rgba(0,0,0,calc(.13 * (2 - var(--background-luminance,1))))}:host([signin-available]) .discover-tooltip{inset-inline-end:62px}.tooltip-arrow{inset-inline-start:77%;background:rgb(255,255,255);border-radius:3px;position:absolute;height:16px;width:16px;top:34px;transform:rotateZ(45deg);visibility:hidden;opacity:0}:host([signin-available]) .tooltip-arrow{inset-inline-start:64%}.discover-tooltip.visible,.tooltip-arrow.visible{opacity:1;transition:opacity 0.2s ease-in-out;visibility:visible}.tooltip-link{color:#1E2024;text-decoration:underline;cursor:pointer;pointer-events:all;margin-inline-end:4px}`.withBehaviors((0,z.G2)(j),(0,z.mr)(I),new N.o("classicNTPToggle",!1,L),new N.o("classicNTPToggle",!0,H),new N.o("superNavToggle",!0,S),new N.o("enableCopilotToggleColorTrmt",!0,D));var W=i(96950),Z=i(66591),q=i(91640),G=i(60402);const J=W.qy`<div class=${e=>(0,Z.x)("discover-tooltip",["visible",e.renderTooltip])}><span class="tooltip-text"><a href=${e=>e.marketingPage} class="tooltip-link" target="_blank" data-t=${e=>e.rubyCoachmarkTelemetryTag}>${e=>{var t;return g(null===(t=e.rubyCoachmarkStrings)||void 0===t?void 0:t.copilotDiscover)}}</a>${e=>{var t;return null===(t=e.rubyCoachmarkStrings)||void 0===t?void 0:t.copilotDiscoverTooltip}}</span></div><div class=${e=>(0,Z.x)("tooltip-arrow",["visible",e.renderTooltip])}></div>`,K=W.qy`
${(0,q.z)(e=>{var t;return null===(t=e.rubyCoachmarkStrings)||void 0===t?void 0:t.copilotDiscoverTooltip},J)}<div class="ruby-toggle" id="ruby-toggle"><label class="ruby-switch-label" for="ruby-switch"><span class="normal-text">${e=>{var t;return g(null===(t=e.rubyCoachmarkStrings)||void 0===t?void 0:t.copilotDiscover)}}</span><span class="preview-text">${e=>{var t;return g(null===(t=e.rubyCoachmarkStrings)||void 0===t?void 0:t.copilotDiscoverPreview)}}</span></label><fluent-switch id="ruby-switch" @change=${e=>e.onRubySwitchChange()} aria-checked=${e=>!e.classicNTPToggle&&!e.superNavToggle} current-checked=${e=>!e.classicNTPToggle&&!e.superNavToggle} class="ruby-switch" role="switch" title="${e=>{var t;return g(null===(t=e.rubyCoachmarkStrings)||void 0===t?void 0:t.copilotDiscover)}}" data-t=${e=>e.rubyToggleSwitchTelemetryTag} ${(0,G.K)("rubyToggleRef")}></fluent-switch></div>`;var Q=i(2958),V=i(37180),X=i(4731),Y=i(7014);Q.m.define(V.c.registry),X.m.define(V.c.registry),Y.m.define(V.c.registry);let ee=class extends C{};ee=(0,r.Cg)([(0,o.E)({name:"ruby-coachmark",template:K,styles:U})],ee)},43774:function(e,t,i){i.d(t,{p4:function(){return g},ls:function(){return k},vA:function(){return p},nF:function(){return b}});var r=i(68136),o=i(68009);var c=i(95239);const{create:a}=r.G,s=a("neutral-stroke-strong-hover-delta",40),n=a("neutral-stroke-strong-active-delta",16),l=a("neutral-stroke-strong-focus-delta",25);var d=i(31023);const{create:h}=r.G,u=h({name:"neutral-stroke-strong-recipe"},{evaluate:e=>function(e,t,i,r,c,a){const s=(0,o.F)(t),n=e.colorContrast(t,i),l=e.closestIndexOf(n);return{rest:n,hover:e.get(l+s*r),active:e.get(l+s*c),focus:e.get(l+s*a)}}(e(d.r),e(c.p),3,e(s),e(n),e(l))}),b=h("neutral-stroke-strong-rest",e=>e(u).evaluate(e).rest),p=h("neutral-stroke-strong-hover",e=>e(u).evaluate(e).hover),g=h("neutral-stroke-strong-active",e=>e(u).evaluate(e).active),k=h("neutral-stroke-strong-focus",e=>e(u).evaluate(e).focus)}}]);