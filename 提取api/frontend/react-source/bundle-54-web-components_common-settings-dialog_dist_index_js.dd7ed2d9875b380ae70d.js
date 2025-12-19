"use strict";(self.homePageWebpackChunks=self.homePageWebpackChunks||[]).push([["web-components_common-settings-dialog_dist_index_js"],{7014:function(e,t,c){c.d(t,{m:function(){return N}});var o=c(56911),s=c(38493),a=c(60815),r=c(55230),n=c(92011),i=c(56863);class d extends n.L{}class l extends((0,i.dx)(d)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class h extends l{constructor(){super(),this.initialValue="on",this.keypressHandler=e=>{if(!this.readOnly)switch(e.key){case r.Mm:case r.gG:this.checked=!this.checked}},this.clickHandler=e=>{this.disabled||this.readOnly||(this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly),this.readOnly?this.classList.add("readonly"):this.classList.remove("readonly")}checkedChanged(e,t){super.checkedChanged(e,t),this.checked?this.classList.add("checked"):this.classList.remove("checked")}}(0,o.Cg)([(0,s.CF)({attribute:"readonly",mode:"boolean"}),(0,o.Sn)("design:type",Boolean)],h.prototype,"readOnly",void 0),(0,o.Cg)([a.sH,(0,o.Sn)("design:type",Array)],h.prototype,"defaultSlottedNodes",void 0);var u=c(37180),g=c(74849),p=c(64187),b=c(60993),$=c(73477),k=c(22131),w=c(50882),f=c(48196),v=c(86856),m=c(7896),x=c(74838),y=c(79288),F=c(46203),T=c(26920),C=c(43774),O=c(95239),_=c(14996),z=c(48751),E=c(41123),j=c(74089),S=c(4283);const A=g.A`
    :host([hidden]) {
        display: none;
    }

    ${(0,p.V)("inline-flex")} :host {
        align-items: center;
        outline: none;
        font-family: ${m.O};
        margin: calc(${x.vR} * 1px) 0;
        ${""} user-select: none;
    }

    :host([disabled]) {
        opacity: ${y.q};
    }

    :host([disabled]) .label,
    :host([readonly]) .label,
    :host([readonly]) .switch,
    :host([disabled]) .switch {
        cursor: ${b.Z};
    }

    .switch {
        position: relative;
        outline: none;
        box-sizing: border-box;
        width: calc(((${f.D} / 2) + ${x.vR}) * 2px);
        height: calc(((${f.D} / 2) + ${x.vR}) * 1px);
        background: ${F.le};
        border-radius: calc(${f.D} * 1px);
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

    :host(:${$.N}) .switch {
        box-shadow: 0 0 0 2px ${O.p}, 0 0 0 4px ${_.WN};
        border-color: ${_.WN};
    }

    .checked-indicator {
        position: absolute;
        height: calc((${f.D} - (${x.vR} * 5.5)) * 1px);
        width: calc((${f.D} - (${x.vR} * 5.5)) * 1px);
        top: calc(${x.vR} * 1px);
        background: ${z.l};
        border-radius: 50%;
        transition: all 0.2s ease-in-out;
    }

    .status-message {
        color: ${z.l};
        cursor: pointer;
        font-size: ${E.K};
        line-height: ${E.Z};
    }

    .label__hidden {
        display: none;
        visibility: hidden;
    }

    .label {
        color: ${z.l};
        font-size: ${E.K};
        line-height: ${E.Z};
        margin-inline-end: calc(${x.vR} * 2px + 2px);
        cursor: pointer;
    }

    ::slotted(*) {
        ${""} margin-inline-start: calc(${x.vR} * 2px + 2px);
    }

    :host([aria-checked="true"]) .checked-indicator {
        background: ${j.l_};
    }

    :host([aria-checked="true"]) .switch {
        background: ${S.IR};
    }

    :host([aria-checked="true"]:enabled) .switch:hover {
        background: ${S.OS};
    }

    :host([aria-checked="true"]:enabled) .switch:hover .checked-indicator {
        background: ${j.XK};
    }

    :host([aria-checked="true"]:enabled) .switch:active {
        background: ${S.am};
    }

    :host([aria-checked="true"]:enabled) .switch:active .checked-indicator {
        background: ${j.J_};
    }

    :host([aria-checked="true"]:${$.N}:enabled) .switch {
        box-shadow: 0 0 0 2px ${O.p}, 0 0 0 4px ${_.WN};
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
`.withBehaviors(new v.t(g.A`
            .checked-indicator {
                left: calc(${x.vR} * 1px);
            }

            :host([aria-checked="true"]) .checked-indicator {
                left: calc(
                    (((${f.D} / 2) + ${x.vR}) + ${x.vR}) * 1px
                );
            }
        `,g.A`
            .checked-indicator {
                right: calc(${x.vR} * 1px);
            }

            :host([aria-checked="true"]) .checked-indicator {
                right: calc(
                    (((${f.D} / 2) + ${x.vR}) + ${x.vR}) * 1px
                );
            }
        `),(0,k.mr)(g.A`
            .checked-indicator,
            :host(:enabled) .switch:active .checked-indicator {
                forced-color-adjust: none;
                background: ${w.A.FieldText};
            }
            .switch {
                forced-color-adjust: none;
                background: ${w.A.Field};
                border-color: ${w.A.FieldText};
            }
            :host(:enabled) .switch:hover {
                background: ${w.A.HighlightText};
                border-color: ${w.A.Highlight};
            }
            :host([aria-checked="true"]) .switch {
                background: ${w.A.Highlight};
                border-color: ${w.A.Highlight};
            }
            :host([aria-checked="true"]:enabled) .switch:hover,
            :host(:enabled) .switch:active {
                background: ${w.A.HighlightText};
                border-color: ${w.A.Highlight};
            }
            :host([aria-checked="true"]) .checked-indicator {
                background: ${w.A.HighlightText};
            }
            :host([aria-checked="true"]:enabled) .switch:hover .checked-indicator {
                background: ${w.A.Highlight};
            }
            :host(:${$.N}) .switch {
                border-color: ${w.A.Highlight};
                box-shadow: 0 0 0 2px ${w.A.Field},
                    0 0 0 4px ${w.A.FieldText};
            }
            :host([aria-checked="true"]:${$.N}:enabled) .switch {
                box-shadow: 0 0 0 2px ${w.A.Field},
                    0 0 0 4px ${w.A.FieldText};
            }
            :host([disabled]) {
                opacity: 1;
            }
            :host([disabled]) .checked-indicator {
                background: ${w.A.GrayText};
            }
            :host([disabled]) .switch {
                background: ${w.A.Field};
                border-color: ${w.A.GrayText};
            }
            .status-message,
            .label {
                color: ${w.A.FieldText};
            }
        `));var H=c(96950),M=c(82774),V=c(18893);const D=function(e={}){return H.qy`
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
                <slot ${(0,M.e)("defaultSlottedNodes")}></slot>
            </label>
            <div part="switch" class="switch">
                <slot name="switch">${(0,V.R)(e.switch)}</slot>
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
    `}({switch:H.qy`
        <span class="checked-indicator" part="checked-indicator"></span>
    `});const N=class extends h{}.compose({name:`${u.c.prefix}-switch`,template:D,styles:A})},19937:function(e,t,c){c.d(t,{d:function(){return E}});var o=c(7014),s=c(37180);var a=c(65614),r=c(96950),n=c(91640);const i=r.qy`<div class="toggle-setting" part="main"><fluent-switch checked=${e=>e.checked} aria-checked="${e=>e.checked}" current-checked="${e=>e.checked}" ?disabled=${e=>e.disabled} class="toggle-fluent-switch ${e=>e.checked?"toggle-fluent-switch-check":""}" @change=${(e,t)=>e.onToggleChange(t.event)} data-t="${e=>e.telemetryMetatag}" data-customhandled="true"><label class="toggle-setting-title" part="title"><slot name="title">${e=>e.title}</slot></label>${(0,n.z)(e=>!e.isRuby,r.qy`<span class="toggle-setting-label">${e=>e.checked?e.toggleOnText:e.toggleOffText}</span>`)}</fluent-switch></div>`;var d=c(74838),l=c(41123),h=c(48751),u=c(86856),g=c(74849),p=c(22131),b=c(4126),$=c(19199),k=c(32257),w=c(39677);const f=g.A`
    .toggle-setting-label{
        float: right;
    }
`,v=g.A`
    .toggle-setting-label{
        float: left;
    }
`,m=g.A` fluent-switch::part(switch){border:1px solid rgba(0,0,0,0)}fluent-switch[current-checked=false]::part(checked-indicator){background:#6E7278}fluent-switch[current-checked=false]::part(switch){border:1px solid #8D9197;background:transparent}`,x=g.A` fluent-switch[current-checked=true]::part(switch){background:#F6FAFEFF}fluent-switch[current-checked=true]::part(checked-indicator){background:#1E2024}`,y=g.A` fluent-switch[current-checked=true]::part(switch){background:#24282fff}fluent-switch[current-checked=true]::part(checked-indicator){background:#FFF}`.withBehaviors((0,p.G2)(x)),F=g.A`
    ${$.JA} .toggle-setting{padding:0px;width:100%;cursor:pointer}fluent-switch{padding-inline-end:${k._gs};
        padding-block: ${w.Gkw};
        border-radius: ${k.lb8};width:auto;margin:0px}fluent-switch:focus-visible{outline:-webkit-focus-ring-color auto ${k.KUh};
        background: ${k.NYB};outline-offset:-2px}fluent-switch::part(switch){box-shadow:none}fluent-switch[current-checked=false]::part(checked-indicator){background:#8D9197}fluent-switch[current-checked=false]::part(switch){border:1px solid #6E7278;background:#FFF}fluent-switch[current-checked=true]::part(checked-indicator){background:${w.gCv}}fluent-switch[current-checked=true]::part(switch){border:1px solid rgba(255,255,255,0);background:${w.yCo};
    }
    .toggle-fluent-switch-check::part(checked-indicator){
        top: calc(${d.vR} * 1px);
    }
`.withBehaviors((0,p.G2)(m),new b.o("enableCopilotToggleColorTrmt",!0,y)),T=g.A` .toggle-setting{width:100%;padding-top:6px;padding-bottom:6px}.toggle-setting-title{margin-top:0;margin-bottom:0;margin-inline-start:0;font-size:${l.K};
        line-height: ${l.Z};
        color: ${h.l};
        cursor: pointer !important;
        font-weight: 600;
    }
    .toggle-setting-label{
        font-size: 14px;
        line-height: 20px;
        user-select: none;
        margin-top: 0px;
    }
    .toggle-fluent-switch-check::part(switch){
        border: none;
    }
    .toggle-fluent-switch-check::part(checked-indicator){
        top: calc(${d.vR} * 1px + 1px)}fluent-switch{width:100%;display:grid;grid-template-columns:auto max-content max-content}fluent-switch::part(label){grid-column-start:1;grid-column-end:2;display:flex;justify-content:space-between;align-items:center}fluent-switch::part(switch){grid-column :3}`.withBehaviors(new u.t(f,v),new b.o("isRuby",!0,F));var C=c(56911),O=c(92011),_=c(60815);class z extends O.L{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.isRuby=!1,this.title="",this.toggleOnText="On",this.toggleOffText="Off"}onToggleChange(e){e.preventDefault(),e.stopPropagation();const t=e&&e.target;if(!t)return;const c=t.checked;this.$emit("change",{checked:c})}}(0,C.Cg)([_.sH],z.prototype,"checked",void 0),(0,C.Cg)([_.sH],z.prototype,"disabled",void 0),(0,C.Cg)([_.sH],z.prototype,"isRuby",void 0),(0,C.Cg)([_.sH],z.prototype,"title",void 0),(0,C.Cg)([_.sH],z.prototype,"toggleOnText",void 0),(0,C.Cg)([_.sH],z.prototype,"toggleOffText",void 0),(0,C.Cg)([_.sH],z.prototype,"telemetryMetatag",void 0),(0,C.Cg)([_.sH],z.prototype,"enableCopilotToggleColorTrmt",void 0);const E=z.compose({name:`${a.G.prefix}-toggle-setting`,template:i,styles:T});o.m.define(s.c.registry)},43774:function(e,t,c){c.d(t,{p4:function(){return b},ls:function(){return $},vA:function(){return p},nF:function(){return g}});var o=c(68136),s=c(68009);var a=c(95239);const{create:r}=o.G,n=r("neutral-stroke-strong-hover-delta",40),i=r("neutral-stroke-strong-active-delta",16),d=r("neutral-stroke-strong-focus-delta",25);var l=c(31023);const{create:h}=o.G,u=h({name:"neutral-stroke-strong-recipe"},{evaluate:e=>function(e,t,c,o,a,r){const n=(0,s.F)(t),i=e.colorContrast(t,c),d=e.closestIndexOf(i);return{rest:i,hover:e.get(d+n*o),active:e.get(d+n*a),focus:e.get(d+n*r)}}(e(l.r),e(a.p),3,e(n),e(i),e(d))}),g=h("neutral-stroke-strong-rest",e=>e(u).evaluate(e).rest),p=h("neutral-stroke-strong-hover",e=>e(u).evaluate(e).hover),b=h("neutral-stroke-strong-active",e=>e(u).evaluate(e).active),$=h("neutral-stroke-strong-focus",e=>e(u).evaluate(e).focus)},69120:function(e,t,c){c.d(t,{registerCsHomepageViewSettings:function(){return k}});var o=c(65614),s=c(7847),a=c(96950),r=c(91640);const n=a.qy` ${(0,r.z)(e=>e.data,a.qy`<cs-toggle-setting class="new-feed-toggle" :checked=${e=>!e.isClassicView} :title=${e=>{var t;return null===(t=e.data)||void 0===t?void 0:t.strings.title}} :toggleOnText=${e=>{var t;return null===(t=e.data)||void 0===t?void 0:t.strings.toggleOn}} :toggleOffText=${e=>{var t;return null===(t=e.data)||void 0===t?void 0:t.strings.toggleOff}} data-t="${(e,t)=>e.FeedPreferenceToggleMetaTag}" data-customhandled="true" @change=${(e,t)=>{var c;e.isClassicView=!e.isClassicView,null===(c=e.data)||void 0===c||c.onHomepageViewSettingsChange()}}></cs-toggle-setting>`)}
`;var i=c(56911),d=c(32259),l=c(11372),h=c(54030),u=c(60815);class g extends d.N{constructor(){super(...arguments),this.isClassicView=!1}dataChanged(){var e;this.isClassicView=(null===(e=this.data)||void 0===e?void 0:e.isClassicView)??!1}get FeedPreferenceToggleMetaTag(){var e;return(0,h.N)("HomepageViewSwitch",null!==(e=this.data)&&void 0!==e&&e.isClassicView?l.MS.Navigate:l.MS.Close).getMetadataTag()}}(0,i.Cg)([u.sH],g.prototype,"data",void 0),(0,i.Cg)([u.sH],g.prototype,"isClassicView",void 0);var p=c(19199);const b=g.compose({name:`${o.G.prefix}-homepage-view-settings`,template:(0,s.j)({content:n}),styles:p.tT});var $=c(19937);const k=()=>{$.d.define(o.G.registry),b.define(o.G.registry)}}}]);