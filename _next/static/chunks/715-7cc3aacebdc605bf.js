(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[715],{2353:function(){},1970:function(n){n.exports={style:{fontFamily:"'__Poppins_84a7a3', '__Poppins_Fallback_84a7a3'",fontStyle:"normal"},className:"__className_84a7a3"}},1207:function(n,l,o){"use strict";o.d(l,{r:function(){return p}});var a=o(2265);let u=n=>{let l;let o=new Set,a=(n,a)=>{let u="function"==typeof n?n(l):n;if(u!==l){let n=l;l=a?u:Object.assign({},l,u),o.forEach(o=>o(l,n))}},u=()=>l,s={setState:a,getState:u,subscribe:n=>(o.add(n),()=>o.delete(n)),destroy:()=>o.clear()};return l=n(a,u,s),s},s=n=>n?u(n):u;var i=o(5401);let{useSyncExternalStoreWithSelector:c}=i,d=n=>{let l="function"==typeof n?s(n):n,o=(n,o)=>(function(n,l=n.getState,o){let u=c(n.subscribe,n.getState,n.getServerState||n.getState,l,o);return(0,a.useDebugValue)(u),u})(l,n,o);return Object.assign(o,l),o};var f=n=>n?d(n):d;let p=n=>{let l=f(()=>n),o=(Object.keys(n),(n,o)=>{l.setState(l=>{var a;return{[n]:(a=l[n],"function"==typeof o?o(a):o)}})});return{useGlobalState:n=>{let u=(0,a.useCallback)(l=>l[n],[n]);return[l(u),(0,a.useCallback)(l=>o(n,l),[n])]},getGlobalState:n=>l.getState()[n],setGlobalState:o,subscribe:(n,o)=>{l.subscribe((l,a)=>{l[n]!==a[n]&&o(l[n])})}}},v=(n,l=n(void 0,{type:void 0}),o)=>{if(o)return o(v)(n,l);let a=e(r(n,l)),u=(Object.keys(l),n=>{let l=t(l=>l[n],[n]);return a(l)});return{useStoreState:u,useGlobalState:n=>[u(n),t(l=>{a.setState(o=>{var a;return{[n]:(a=o[n],"function"==typeof l?l(a):l)}})},[n])],getState:a.getState,dispatch:a.dispatch}}},1853:function(n,l,o){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=o(2265),u="function"==typeof Object.is?Object.is:function(n,l){return n===l&&(0!==n||1/n==1/l)||n!=n&&l!=l},s=a.useState,i=a.useEffect,c=a.useLayoutEffect,d=a.useDebugValue;function f(n){var l=n.getSnapshot;n=n.value;try{var o=l();return!u(n,o)}catch(n){return!0}}var p="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(n,l){return l()}:function(n,l){var o=l(),a=s({inst:{value:o,getSnapshot:l}}),u=a[0].inst,p=a[1];return c(function(){u.value=o,u.getSnapshot=l,f(u)&&p({inst:u})},[n,o,l]),i(function(){return f(u)&&p({inst:u}),n(function(){f(u)&&p({inst:u})})},[n]),d(o),o};l.useSyncExternalStore=void 0!==a.useSyncExternalStore?a.useSyncExternalStore:p},8704:function(n,l,o){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=o(2265),u=o(6272),s="function"==typeof Object.is?Object.is:function(n,l){return n===l&&(0!==n||1/n==1/l)||n!=n&&l!=l},i=u.useSyncExternalStore,c=a.useRef,d=a.useEffect,f=a.useMemo,p=a.useDebugValue;l.useSyncExternalStoreWithSelector=function(n,l,o,a,u){var v=c(null);if(null===v.current){var b={hasValue:!1,value:null};v.current=b}else b=v.current;var m=i(n,(v=f(function(){function n(n){if(!d){if(d=!0,i=n,n=a(n),void 0!==u&&b.hasValue){var l=b.value;if(u(l,n))return c=l}return c=n}if(l=c,s(i,n))return l;var o=a(n);return void 0!==u&&u(l,o)?l:(i=n,c=o)}var i,c,d=!1,f=void 0===o?null:o;return[function(){return n(l())},null===f?void 0:function(){return n(f())}]},[l,o,a,u]))[0],v[1]);return d(function(){b.hasValue=!0,b.value=m},[m]),p(m),m}},6272:function(n,l,o){"use strict";n.exports=o(1853)},5401:function(n,l,o){"use strict";n.exports=o(8704)},3999:function(n,l,o){"use strict";o.d(l,{J:function(){return V}});var a,u,s=o(2265),i=o(597),c=o(1931),d=o(6618),f=o(5606),p=o(3850),v=o(5863),b=o(5410),m=o(5306),g=o(8076),h=o(583),E=o(4851),y=o(9888),S=o(6890),P=o(8227),w=o(2950),x=o(9376),T=o(1858),k=o(2600),O=o(9985),I=o(7250),M=((a=M||{})[a.Open=0]="Open",a[a.Closed=1]="Closed",a),R=((u=R||{})[u.TogglePopover=0]="TogglePopover",u[u.ClosePopover=1]="ClosePopover",u[u.SetButton=2]="SetButton",u[u.SetButtonId=3]="SetButtonId",u[u.SetPanel=4]="SetPanel",u[u.SetPanelId=5]="SetPanelId",u);let C={0:n=>{let l={...n,popoverState:(0,i.E)(n.popoverState,{0:1,1:0})};return 0===l.popoverState&&(l.__demoMode=!1),l},1:n=>1===n.popoverState?n:{...n,popoverState:1},2:(n,l)=>n.button===l.button?n:{...n,button:l.button},3:(n,l)=>n.buttonId===l.buttonId?n:{...n,buttonId:l.buttonId},4:(n,l)=>n.panel===l.panel?n:{...n,panel:l.panel},5:(n,l)=>n.panelId===l.panelId?n:{...n,panelId:l.panelId}},A=(0,s.createContext)(null);function N(n){let l=(0,s.useContext)(A);if(null===l){let l=Error(`<${n} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,N),l}return l}A.displayName="PopoverContext";let j=(0,s.createContext)(null);function z(n){let l=(0,s.useContext)(j);if(null===l){let l=Error(`<${n} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,z),l}return l}j.displayName="PopoverAPIContext";let L=(0,s.createContext)(null);function _(){return(0,s.useContext)(L)}L.displayName="PopoverGroupContext";let F=(0,s.createContext)(null);function D(n,l){return(0,i.E)(l.type,C,n,l)}F.displayName="PopoverPanelContext";let B=c.AN.RenderStrategy|c.AN.Static,G=c.AN.RenderStrategy|c.AN.Static,V=Object.assign((0,c.yV)(function(n,l){var o;let{__demoMode:a=!1,...u}=n,f=(0,s.useRef)(null),p=(0,d.T)(l,(0,d.h)(n=>{f.current=n})),v=(0,s.useRef)([]),g=(0,s.useReducer)(D,{__demoMode:a,popoverState:a?0:1,buttons:v,button:null,buttonId:null,panel:null,panelId:null,beforePanelSentinel:(0,s.createRef)(),afterPanelSentinel:(0,s.createRef)()}),[{popoverState:E,button:P,buttonId:x,panel:k,panelId:M,beforePanelSentinel:R,afterPanelSentinel:C},N]=g,z=(0,y.i)(null!=(o=f.current)?o:P),L=(0,s.useMemo)(()=>{if(!P||!k)return!1;for(let n of document.querySelectorAll("body > *"))if(Number(null==n?void 0:n.contains(P))^Number(null==n?void 0:n.contains(k)))return!0;let n=(0,b.GO)(),l=n.indexOf(P),o=(l+n.length-1)%n.length,a=(l+1)%n.length,u=n[o],s=n[a];return!k.contains(u)&&!k.contains(s)},[P,k]),B=(0,T.E)(x),G=(0,T.E)(M),V=(0,s.useMemo)(()=>({buttonId:B,panelId:G,close:()=>N({type:1})}),[B,G,N]),Y=_(),$=null==Y?void 0:Y.registerPopover,W=(0,w.z)(()=>{var n;return null!=(n=null==Y?void 0:Y.isFocusWithinPopoverGroup())?n:(null==z?void 0:z.activeElement)&&((null==P?void 0:P.contains(z.activeElement))||(null==k?void 0:k.contains(z.activeElement)))});(0,s.useEffect)(()=>null==$?void 0:$(V),[$,V]);let[Z,U]=(0,I.k)(),H=(0,O.v)({mainTreeNodeRef:null==Y?void 0:Y.mainTreeNodeRef,portals:Z,defaultContainers:[P,k]});(0,S.O)(null==z?void 0:z.defaultView,"focus",n=>{var l,o,a,u;n.target!==window&&n.target instanceof HTMLElement&&0===E&&(W()||P&&k&&(H.contains(n.target)||null!=(o=null==(l=R.current)?void 0:l.contains)&&o.call(l,n.target)||null!=(u=null==(a=C.current)?void 0:a.contains)&&u.call(a,n.target)||N({type:1})))},!0),(0,h.O)(H.resolveContainers,(n,l)=>{N({type:1}),(0,b.sP)(l,b.tJ.Loose)||(n.preventDefault(),null==P||P.focus())},0===E);let q=(0,w.z)(n=>{N({type:1});let l=n?n instanceof HTMLElement?n:"current"in n&&n.current instanceof HTMLElement?n.current:P:P;null==l||l.focus()}),K=(0,s.useMemo)(()=>({close:q,isPortalled:L}),[q,L]),J=(0,s.useMemo)(()=>({open:0===E,close:q}),[E,q]);return s.createElement(F.Provider,{value:null},s.createElement(A.Provider,{value:g},s.createElement(j.Provider,{value:K},s.createElement(m.up,{value:(0,i.E)(E,{0:m.ZM.Open,1:m.ZM.Closed})},s.createElement(U,null,(0,c.sY)({ourProps:{ref:p},theirProps:u,slot:J,defaultTag:"div",name:"Popover"}),s.createElement(H.MainTreeNode,null))))))}),{Button:(0,c.yV)(function(n,l){let o=(0,f.M)(),{id:a=`headlessui-popover-button-${o}`,...u}=n,[m,h]=N("Popover.Button"),{isPortalled:E}=z("Popover.Button"),S=(0,s.useRef)(null),T=`headlessui-focus-sentinel-${(0,f.M)()}`,k=_(),O=null==k?void 0:k.closeOthers,I=null!==(0,s.useContext)(F);(0,s.useEffect)(()=>{if(!I)return h({type:3,buttonId:a}),()=>{h({type:3,buttonId:null})}},[I,a,h]);let[M]=(0,s.useState)(()=>Symbol()),R=(0,d.T)(S,l,I?null:n=>{if(n)m.buttons.current.push(M);else{let n=m.buttons.current.indexOf(M);-1!==n&&m.buttons.current.splice(n,1)}m.buttons.current.length>1&&console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."),n&&h({type:2,button:n})}),C=(0,d.T)(S,l),A=(0,y.i)(S),j=(0,w.z)(n=>{var l,o,a;if(I){if(1===m.popoverState)return;switch(n.key){case p.R.Space:case p.R.Enter:n.preventDefault(),null==(o=(l=n.target).click)||o.call(l),h({type:1}),null==(a=m.button)||a.focus()}}else switch(n.key){case p.R.Space:case p.R.Enter:n.preventDefault(),n.stopPropagation(),1===m.popoverState&&(null==O||O(m.buttonId)),h({type:0});break;case p.R.Escape:if(0!==m.popoverState)return null==O?void 0:O(m.buttonId);if(!S.current||null!=A&&A.activeElement&&!S.current.contains(A.activeElement))return;n.preventDefault(),n.stopPropagation(),h({type:1})}}),L=(0,w.z)(n=>{I||n.key===p.R.Space&&n.preventDefault()}),D=(0,w.z)(l=>{var o,a;(0,v.P)(l.currentTarget)||n.disabled||(I?(h({type:1}),null==(o=m.button)||o.focus()):(l.preventDefault(),l.stopPropagation(),1===m.popoverState&&(null==O||O(m.buttonId)),h({type:0}),null==(a=m.button)||a.focus()))}),B=(0,w.z)(n=>{n.preventDefault(),n.stopPropagation()}),G=0===m.popoverState,V=(0,s.useMemo)(()=>({open:G}),[G]),Y=(0,g.f)(n,S),$=I?{ref:C,type:Y,onKeyDown:j,onClick:D}:{ref:R,id:m.buttonId,type:Y,"aria-expanded":0===m.popoverState,"aria-controls":m.panel?m.panelId:void 0,onKeyDown:j,onKeyUp:L,onClick:D,onMouseDown:B},W=(0,x.l)(),Z=(0,w.z)(()=>{let n=m.panel;n&&(0,i.E)(W.current,{[x.N.Forwards]:()=>(0,b.jA)(n,b.TO.First),[x.N.Backwards]:()=>(0,b.jA)(n,b.TO.Last)})===b.fE.Error&&(0,b.jA)((0,b.GO)().filter(n=>"true"!==n.dataset.headlessuiFocusGuard),(0,i.E)(W.current,{[x.N.Forwards]:b.TO.Next,[x.N.Backwards]:b.TO.Previous}),{relativeTo:m.button})});return s.createElement(s.Fragment,null,(0,c.sY)({ourProps:$,theirProps:u,slot:V,defaultTag:"button",name:"Popover.Button"}),G&&!I&&E&&s.createElement(P._,{id:T,features:P.A.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:Z}))}),Overlay:(0,c.yV)(function(n,l){let o=(0,f.M)(),{id:a=`headlessui-popover-overlay-${o}`,...u}=n,[{popoverState:i},p]=N("Popover.Overlay"),b=(0,d.T)(l),g=(0,m.oJ)(),h=null!==g?(g&m.ZM.Open)===m.ZM.Open:0===i,E=(0,w.z)(n=>{if((0,v.P)(n.currentTarget))return n.preventDefault();p({type:1})}),y=(0,s.useMemo)(()=>({open:0===i}),[i]);return(0,c.sY)({ourProps:{ref:b,id:a,"aria-hidden":!0,onClick:E},theirProps:u,slot:y,defaultTag:"div",features:B,visible:h,name:"Popover.Overlay"})}),Panel:(0,c.yV)(function(n,l){let o=(0,f.M)(),{id:a=`headlessui-popover-panel-${o}`,focus:u=!1,...v}=n,[g,h]=N("Popover.Panel"),{close:E,isPortalled:S}=z("Popover.Panel"),T=`headlessui-focus-sentinel-before-${(0,f.M)()}`,O=`headlessui-focus-sentinel-after-${(0,f.M)()}`,I=(0,s.useRef)(null),M=(0,d.T)(I,l,n=>{h({type:4,panel:n})}),R=(0,y.i)(I);(0,k.e)(()=>(h({type:5,panelId:a}),()=>{h({type:5,panelId:null})}),[a,h]);let C=(0,m.oJ)(),A=null!==C?(C&m.ZM.Open)===m.ZM.Open:0===g.popoverState,j=(0,w.z)(n=>{var l;if(n.key===p.R.Escape){if(0!==g.popoverState||!I.current||null!=R&&R.activeElement&&!I.current.contains(R.activeElement))return;n.preventDefault(),n.stopPropagation(),h({type:1}),null==(l=g.button)||l.focus()}});(0,s.useEffect)(()=>{var l;n.static||1===g.popoverState&&(null==(l=n.unmount)||l)&&h({type:4,panel:null})},[g.popoverState,n.unmount,n.static,h]),(0,s.useEffect)(()=>{if(g.__demoMode||!u||0!==g.popoverState||!I.current)return;let n=null==R?void 0:R.activeElement;I.current.contains(n)||(0,b.jA)(I.current,b.TO.First)},[g.__demoMode,u,I,g.popoverState]);let L=(0,s.useMemo)(()=>({open:0===g.popoverState,close:E}),[g,E]),_={ref:M,id:a,onKeyDown:j,onBlur:u&&0===g.popoverState?n=>{var l,o,a,u,s;let i=n.relatedTarget;i&&I.current&&(null!=(l=I.current)&&l.contains(i)||(h({type:1}),(null!=(a=null==(o=g.beforePanelSentinel.current)?void 0:o.contains)&&a.call(o,i)||null!=(s=null==(u=g.afterPanelSentinel.current)?void 0:u.contains)&&s.call(u,i))&&i.focus({preventScroll:!0})))}:void 0,tabIndex:-1},D=(0,x.l)(),B=(0,w.z)(()=>{let n=I.current;n&&(0,i.E)(D.current,{[x.N.Forwards]:()=>{var l;(0,b.jA)(n,b.TO.First)===b.fE.Error&&(null==(l=g.afterPanelSentinel.current)||l.focus())},[x.N.Backwards]:()=>{var n;null==(n=g.button)||n.focus({preventScroll:!0})}})}),V=(0,w.z)(()=>{let n=I.current;n&&(0,i.E)(D.current,{[x.N.Forwards]:()=>{var n;if(!g.button)return;let l=(0,b.GO)(),o=l.indexOf(g.button),a=l.slice(0,o+1),u=[...l.slice(o+1),...a];for(let l of u.slice())if("true"===l.dataset.headlessuiFocusGuard||null!=(n=g.panel)&&n.contains(l)){let n=u.indexOf(l);-1!==n&&u.splice(n,1)}(0,b.jA)(u,b.TO.First,{sorted:!1})},[x.N.Backwards]:()=>{var l;(0,b.jA)(n,b.TO.Previous)===b.fE.Error&&(null==(l=g.button)||l.focus())}})});return s.createElement(F.Provider,{value:a},A&&S&&s.createElement(P._,{id:T,ref:g.beforePanelSentinel,features:P.A.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:B}),(0,c.sY)({ourProps:_,theirProps:v,slot:L,defaultTag:"div",features:G,visible:A,name:"Popover.Panel"}),A&&S&&s.createElement(P._,{id:O,ref:g.afterPanelSentinel,features:P.A.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:V}))}),Group:(0,c.yV)(function(n,l){let o=(0,s.useRef)(null),a=(0,d.T)(o,l),[u,i]=(0,s.useState)([]),f=(0,O.H)(),p=(0,w.z)(n=>{i(l=>{let o=l.indexOf(n);if(-1!==o){let n=l.slice();return n.splice(o,1),n}return l})}),v=(0,w.z)(n=>(i(l=>[...l,n]),()=>p(n))),b=(0,w.z)(()=>{var n;let l=(0,E.r)(o);if(!l)return!1;let a=l.activeElement;return!!(null!=(n=o.current)&&n.contains(a))||u.some(n=>{var o,u;return(null==(o=l.getElementById(n.buttonId.current))?void 0:o.contains(a))||(null==(u=l.getElementById(n.panelId.current))?void 0:u.contains(a))})}),m=(0,w.z)(n=>{for(let l of u)l.buttonId.current!==n&&l.close()}),g=(0,s.useMemo)(()=>({registerPopover:v,unregisterPopover:p,isFocusWithinPopoverGroup:b,closeOthers:m,mainTreeNodeRef:f.mainTreeNodeRef}),[v,p,b,m,f.mainTreeNodeRef]),h=(0,s.useMemo)(()=>({}),[]);return s.createElement(L.Provider,{value:g},(0,c.sY)({ourProps:{ref:a},theirProps:n,slot:h,defaultTag:"div",name:"Popover.Group"}),s.createElement(f.MainTreeNode,null))})})},3068:function(n,l,o){"use strict";o.d(l,{r:function(){return x}});var a=o(2265),u=o(1931),s=o(5606),i=o(3850),c=o(5863),d=o(2600),f=o(6618),p=o(2950);let v=(0,a.createContext)(null),b=Object.assign((0,u.yV)(function(n,l){let o=(0,s.M)(),{id:i=`headlessui-label-${o}`,passive:c=!1,...p}=n,b=function n(){let l=(0,a.useContext)(v);if(null===l){let l=Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(l,n),l}return l}(),m=(0,f.T)(l);(0,d.e)(()=>b.register(i),[i,b.register]);let g={ref:m,...b.props,id:i};return c&&("onClick"in g&&(delete g.htmlFor,delete g.onClick),"onClick"in p&&delete p.onClick),(0,u.sY)({ourProps:g,theirProps:p,slot:b.slot||{},defaultTag:"label",name:b.name||"Label"})}),{});var m=o(4523),g=o(8076),h=o(8227),E=o(8871),y=o(841),S=o(2769);let P=(0,a.createContext)(null);P.displayName="GroupContext";let w=a.Fragment,x=Object.assign((0,u.yV)(function(n,l){let o=(0,s.M)(),{id:d=`headlessui-switch-${o}`,checked:v,defaultChecked:b=!1,onChange:m,name:w,value:x,form:T,...k}=n,O=(0,a.useContext)(P),I=(0,a.useRef)(null),M=(0,f.T)(I,l,null===O?null:O.setSwitch),[R,C]=(0,y.q)(v,m,b),A=(0,p.z)(()=>null==C?void 0:C(!R)),N=(0,p.z)(n=>{if((0,c.P)(n.currentTarget))return n.preventDefault();n.preventDefault(),A()}),j=(0,p.z)(n=>{n.key===i.R.Space?(n.preventDefault(),A()):n.key===i.R.Enter&&(0,E.g)(n.currentTarget)}),z=(0,p.z)(n=>n.preventDefault()),L=(0,a.useMemo)(()=>({checked:R}),[R]),_={id:d,ref:M,role:"switch",type:(0,g.f)(n,I),tabIndex:0,"aria-checked":R,"aria-labelledby":null==O?void 0:O.labelledby,"aria-describedby":null==O?void 0:O.describedby,onClick:N,onKeyUp:j,onKeyPress:z},F=(0,S.G)();return(0,a.useEffect)(()=>{var n;let l=null==(n=I.current)?void 0:n.closest("form");l&&void 0!==b&&F.addEventListener(l,"reset",()=>{C(b)})},[I,C]),a.createElement(a.Fragment,null,null!=w&&R&&a.createElement(h._,{features:h.A.Hidden,...(0,u.oA)({as:"input",type:"checkbox",hidden:!0,readOnly:!0,form:T,checked:R,name:w,value:x})}),(0,u.sY)({ourProps:_,theirProps:k,slot:L,defaultTag:"button",name:"Switch"}))}),{Group:function(n){var l;let[o,s]=(0,a.useState)(null),[i,c]=function(){let[n,l]=(0,a.useState)([]);return[n.length>0?n.join(" "):void 0,(0,a.useMemo)(()=>function(n){let o=(0,p.z)(n=>(l(l=>[...l,n]),()=>l(l=>{let o=l.slice(),a=o.indexOf(n);return -1!==a&&o.splice(a,1),o}))),u=(0,a.useMemo)(()=>({register:o,slot:n.slot,name:n.name,props:n.props}),[o,n.slot,n.name,n.props]);return a.createElement(v.Provider,{value:u},n.children)},[l])]}(),[d,f]=(0,m.f)(),b=(0,a.useMemo)(()=>({switch:o,setSwitch:s,labelledby:i,describedby:d}),[o,s,i,d]);return a.createElement(f,{name:"Switch.Description"},a.createElement(c,{name:"Switch.Label",props:{htmlFor:null==(l=b.switch)?void 0:l.id,onClick(n){o&&("LABEL"===n.currentTarget.tagName&&n.preventDefault(),o.click(),o.focus({preventScroll:!0}))}}},a.createElement(P.Provider,{value:b},(0,u.sY)({ourProps:{},theirProps:n,defaultTag:w,name:"Switch.Group"}))))},Label:b,Description:m.d})},2817:function(n,l,o){"use strict";o.d(l,{O:function(){return D}});var a,u,s,i=o(2265),c=o(1931),d=o(5606),f=o(597),p=o(3850),v=o(5410),b=o(2600),m=o(6618),g=o(8076),h=o(1858),E=o(634),y=o(8227);function S({onFocus:n}){let[l,o]=(0,i.useState)(!0),a=(0,E.t)();return l?i.createElement(y._,{as:"button",type:"button",features:y.A.Focusable,onFocus:l=>{l.preventDefault();let u,s=50;u=requestAnimationFrame(function l(){if(s--<=0){u&&cancelAnimationFrame(u);return}if(n()){if(cancelAnimationFrame(u),!a.current)return;o(!1);return}u=requestAnimationFrame(l)})}}):null}var P=o(2950),w=o(5195),x=o(4851);let T=i.createContext(null);function k({children:n}){let l=i.useRef({groups:new Map,get(n,l){var o;let a=this.groups.get(n);a||(a=new Map,this.groups.set(n,a));let u=null!=(o=a.get(l))?o:0;return a.set(l,u+1),[Array.from(a.keys()).indexOf(l),function(){let n=a.get(l);n>1?a.set(l,n-1):a.delete(l)}]}});return i.createElement(T.Provider,{value:l},n)}function O(n){let l=i.useContext(T);if(!l)throw Error("You must wrap your component in a <StableCollection>");let o=function(){var n,l,o;let a=null!=(o=null==(l=null==(n=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)?void 0:n.ReactCurrentOwner)?void 0:l.current)?o:null;if(!a)return Symbol();let u=[],s=a;for(;s;)u.push(s.index),s=s.return;return"$."+u.join(".")}(),[a,u]=l.current.get(n,o);return i.useEffect(()=>u,[]),a}var I=((a=I||{})[a.Forwards=0]="Forwards",a[a.Backwards=1]="Backwards",a),M=((u=M||{})[u.Less=-1]="Less",u[u.Equal=0]="Equal",u[u.Greater=1]="Greater",u),R=((s=R||{})[s.SetSelectedIndex=0]="SetSelectedIndex",s[s.RegisterTab=1]="RegisterTab",s[s.UnregisterTab=2]="UnregisterTab",s[s.RegisterPanel=3]="RegisterPanel",s[s.UnregisterPanel=4]="UnregisterPanel",s);let C={0(n,l){var o;let a=(0,v.z2)(n.tabs,n=>n.current),u=(0,v.z2)(n.panels,n=>n.current),s=a.filter(n=>{var l;return!(null!=(l=n.current)&&l.hasAttribute("disabled"))}),i={...n,tabs:a,panels:u};if(l.index<0||l.index>a.length-1){let o=(0,f.E)(Math.sign(l.index-n.selectedIndex),{[-1]:()=>1,0:()=>(0,f.E)(Math.sign(l.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});if(0===s.length)return i;let u=(0,f.E)(o,{0:()=>a.indexOf(s[0]),1:()=>a.indexOf(s[s.length-1])});return{...i,selectedIndex:-1===u?n.selectedIndex:u}}let c=a.slice(0,l.index),d=[...a.slice(l.index),...c].find(n=>s.includes(n));if(!d)return i;let p=null!=(o=a.indexOf(d))?o:n.selectedIndex;return -1===p&&(p=n.selectedIndex),{...i,selectedIndex:p}},1(n,l){var o;if(n.tabs.includes(l.tab))return n;let a=n.tabs[n.selectedIndex],u=(0,v.z2)([...n.tabs,l.tab],n=>n.current),s=null!=(o=u.indexOf(a))?o:n.selectedIndex;return -1===s&&(s=n.selectedIndex),{...n,tabs:u,selectedIndex:s}},2:(n,l)=>({...n,tabs:n.tabs.filter(n=>n!==l.tab)}),3:(n,l)=>n.panels.includes(l.panel)?n:{...n,panels:(0,v.z2)([...n.panels,l.panel],n=>n.current)},4:(n,l)=>({...n,panels:n.panels.filter(n=>n!==l.panel)})},A=(0,i.createContext)(null);function N(n){let l=(0,i.useContext)(A);if(null===l){let l=Error(`<${n} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,N),l}return l}A.displayName="TabsDataContext";let j=(0,i.createContext)(null);function z(n){let l=(0,i.useContext)(j);if(null===l){let l=Error(`<${n} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,z),l}return l}function L(n,l){return(0,f.E)(l.type,C,n,l)}j.displayName="TabsActionsContext";let _=i.Fragment,F=c.AN.RenderStrategy|c.AN.Static,D=Object.assign((0,c.yV)(function(n,l){var o,a;let u=(0,d.M)(),{id:s=`headlessui-tabs-tab-${u}`,...h}=n,{orientation:E,activation:y,selectedIndex:S,tabs:T,panels:k}=N("Tab"),I=z("Tab"),M=N("Tab"),R=(0,i.useRef)(null),C=(0,m.T)(R,l);(0,b.e)(()=>I.registerTab(R),[I,R]);let A=O("tabs"),j=T.indexOf(R);-1===j&&(j=A);let L=j===S,_=(0,P.z)(n=>{var l;let o=n();if(o===v.fE.Success&&"auto"===y){let n=null==(l=(0,x.r)(R))?void 0:l.activeElement,o=M.tabs.findIndex(l=>l.current===n);-1!==o&&I.change(o)}return o}),F=(0,P.z)(n=>{let l=T.map(n=>n.current).filter(Boolean);if(n.key===p.R.Space||n.key===p.R.Enter){n.preventDefault(),n.stopPropagation(),I.change(j);return}switch(n.key){case p.R.Home:case p.R.PageUp:return n.preventDefault(),n.stopPropagation(),_(()=>(0,v.jA)(l,v.TO.First));case p.R.End:case p.R.PageDown:return n.preventDefault(),n.stopPropagation(),_(()=>(0,v.jA)(l,v.TO.Last))}if(_(()=>(0,f.E)(E,{vertical:()=>n.key===p.R.ArrowUp?(0,v.jA)(l,v.TO.Previous|v.TO.WrapAround):n.key===p.R.ArrowDown?(0,v.jA)(l,v.TO.Next|v.TO.WrapAround):v.fE.Error,horizontal:()=>n.key===p.R.ArrowLeft?(0,v.jA)(l,v.TO.Previous|v.TO.WrapAround):n.key===p.R.ArrowRight?(0,v.jA)(l,v.TO.Next|v.TO.WrapAround):v.fE.Error}))===v.fE.Success)return n.preventDefault()}),D=(0,i.useRef)(!1),B=(0,P.z)(()=>{var n;D.current||(D.current=!0,null==(n=R.current)||n.focus({preventScroll:!0}),I.change(j),(0,w.Y)(()=>{D.current=!1}))}),G=(0,P.z)(n=>{n.preventDefault()}),V=(0,i.useMemo)(()=>({selected:L}),[L]),Y={ref:C,onKeyDown:F,onMouseDown:G,onClick:B,id:s,role:"tab",type:(0,g.f)(n,R),"aria-controls":null==(a=null==(o=k[j])?void 0:o.current)?void 0:a.id,"aria-selected":L,tabIndex:L?0:-1};return(0,c.sY)({ourProps:Y,theirProps:h,slot:V,defaultTag:"button",name:"Tabs.Tab"})}),{Group:(0,c.yV)(function(n,l){let{defaultIndex:o=0,vertical:a=!1,manual:u=!1,onChange:s,selectedIndex:d=null,...f}=n,p=a?"vertical":"horizontal",g=u?"manual":"auto",E=null!==d,y=(0,m.T)(l),[w,x]=(0,i.useReducer)(L,{selectedIndex:null!=d?d:o,tabs:[],panels:[]}),T=(0,i.useMemo)(()=>({selectedIndex:w.selectedIndex}),[w.selectedIndex]),O=(0,h.E)(s||(()=>{})),I=(0,h.E)(w.tabs),M=(0,i.useMemo)(()=>({orientation:p,activation:g,...w}),[p,g,w]),R=(0,P.z)(n=>(x({type:1,tab:n}),()=>x({type:2,tab:n}))),C=(0,P.z)(n=>(x({type:3,panel:n}),()=>x({type:4,panel:n}))),N=(0,P.z)(n=>{z.current!==n&&O.current(n),E||x({type:0,index:n})}),z=(0,h.E)(E?n.selectedIndex:w.selectedIndex),F=(0,i.useMemo)(()=>({registerTab:R,registerPanel:C,change:N}),[]);return(0,b.e)(()=>{x({type:0,index:null!=d?d:o})},[d]),(0,b.e)(()=>{if(void 0===z.current||w.tabs.length<=0)return;let n=(0,v.z2)(w.tabs,n=>n.current);n.some((n,l)=>w.tabs[l]!==n)&&N(n.indexOf(w.tabs[z.current]))}),i.createElement(k,null,i.createElement(j.Provider,{value:F},i.createElement(A.Provider,{value:M},M.tabs.length<=0&&i.createElement(S,{onFocus:()=>{var n,l;for(let o of I.current)if((null==(n=o.current)?void 0:n.tabIndex)===0)return null==(l=o.current)||l.focus(),!0;return!1}}),(0,c.sY)({ourProps:{ref:y},theirProps:f,slot:T,defaultTag:_,name:"Tabs"}))))}),List:(0,c.yV)(function(n,l){let{orientation:o,selectedIndex:a}=N("Tab.List"),u=(0,m.T)(l);return(0,c.sY)({ourProps:{ref:u,role:"tablist","aria-orientation":o},theirProps:n,slot:{selectedIndex:a},defaultTag:"div",name:"Tabs.List"})}),Panels:(0,c.yV)(function(n,l){let{selectedIndex:o}=N("Tab.Panels"),a=(0,m.T)(l),u=(0,i.useMemo)(()=>({selectedIndex:o}),[o]);return(0,c.sY)({ourProps:{ref:a},theirProps:n,slot:u,defaultTag:"div",name:"Tabs.Panels"})}),Panel:(0,c.yV)(function(n,l){var o,a,u,s;let f=(0,d.M)(),{id:p=`headlessui-tabs-panel-${f}`,tabIndex:v=0,...g}=n,{selectedIndex:h,tabs:E,panels:S}=N("Tab.Panel"),P=z("Tab.Panel"),w=(0,i.useRef)(null),x=(0,m.T)(w,l);(0,b.e)(()=>P.registerPanel(w),[P,w]);let T=O("panels"),k=S.indexOf(w);-1===k&&(k=T);let I=k===h,M=(0,i.useMemo)(()=>({selected:I}),[I]),R={ref:x,id:p,role:"tabpanel","aria-labelledby":null==(a=null==(o=E[k])?void 0:o.current)?void 0:a.id,tabIndex:I?v:-1};return I||null!=(u=g.unmount)&&!u||null!=(s=g.static)&&s?(0,c.sY)({ourProps:R,theirProps:g,slot:M,defaultTag:"div",features:F,visible:I,name:"Tabs.Panel"}):i.createElement(y._,{as:"span",...R})})})},841:function(n,l,o){"use strict";o.d(l,{q:function(){return s}});var a=o(2265),u=o(2950);function s(n,l,o){let[s,i]=(0,a.useState)(o),c=void 0!==n,d=(0,a.useRef)(c),f=(0,a.useRef)(!1),p=(0,a.useRef)(!1);return!c||d.current||f.current?c||!d.current||p.current||(p.current=!0,d.current=c,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(f.current=!0,d.current=c,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[c?n:s,(0,u.z)(n=>(c||i(n),null==l?void 0:l(n)))]}},8871:function(n,l,o){"use strict";function a(n,l){return n?n+"["+l+"]":l}function u(n){var l,o;let a=null!=(l=null==n?void 0:n.form)?l:n.closest("form");if(a){for(let l of a.elements)if(l!==n&&("INPUT"===l.tagName&&"submit"===l.type||"BUTTON"===l.tagName&&"submit"===l.type||"INPUT"===l.nodeName&&"image"===l.type)){l.click();return}null==(o=a.requestSubmit)||o.call(a)}}o.d(l,{g:function(){return u},t:function(){return function n(l={},o=null,u=[]){for(let[s,i]of Object.entries(l))!function l(o,u,s){if(Array.isArray(s))for(let[n,i]of s.entries())l(o,a(u,n.toString()),i);else s instanceof Date?o.push([u,s.toISOString()]):"boolean"==typeof s?o.push([u,s?"1":"0"]):"string"==typeof s?o.push([u,s]):"number"==typeof s?o.push([u,`${s}`]):null==s?o.push([u,""]):n(s,u,o)}(u,a(o,s),i);return u}}})},952:function(n,l,o){"use strict";var a=o(2265);let u=a.forwardRef(function({title:n,titleId:l,...o},u){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:u,"aria-labelledby":l},o),n?a.createElement("title",{id:l},n):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 7.5l.415-.207a.75.75 0 011.085.67V10.5m0 0h6m-6 0h-1.5m1.5 0v5.438c0 .354.161.697.473.865a3.751 3.751 0 005.452-2.553c.083-.409-.263-.75-.68-.75h-.745M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}))});l.Z=u},1095:function(n,l,o){"use strict";var a=o(2265);let u=a.forwardRef(function({title:n,titleId:l,...o},u){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:u,"aria-labelledby":l},o),n?a.createElement("title",{id:l},n):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}))});l.Z=u},2638:function(n,l,o){"use strict";var a=o(2265);let u=a.forwardRef(function({title:n,titleId:l,...o},u){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:u,"aria-labelledby":l},o),n?a.createElement("title",{id:l},n):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}))});l.Z=u},3918:function(n,l,o){"use strict";var a=o(2265);let u=a.forwardRef(function({title:n,titleId:l,...o},u){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:u,"aria-labelledby":l},o),n?a.createElement("title",{id:l},n):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.121 7.629A3 3 0 009.017 9.43c-.023.212-.002.425.028.636l.506 3.541a4.5 4.5 0 01-.43 2.65L9 16.5l1.539-.513a2.25 2.25 0 011.422 0l.655.218a2.25 2.25 0 001.718-.122L15 15.75M8.25 12H12m9 0a9 9 0 11-18 0 9 9 0 0118 0z"}))});l.Z=u},6783:function(n,l,o){"use strict";var a=o(2265);let u=a.forwardRef(function({title:n,titleId:l,...o},u){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:u,"aria-labelledby":l},o),n?a.createElement("title",{id:l},n):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}))});l.Z=u},787:function(n,l,o){"use strict";var a=o(2265);let u=a.forwardRef(function({title:n,titleId:l,...o},u){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:u,"aria-labelledby":l},o),n?a.createElement("title",{id:l},n):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"}))});l.Z=u},6689:function(n,l,o){"use strict";var a=o(2265);let u=a.forwardRef(function({title:n,titleId:l,...o},u){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:u,"aria-labelledby":l},o),n?a.createElement("title",{id:l},n):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))});l.Z=u},9175:function(n,l,o){"use strict";var a=o(2265);let u=a.forwardRef(function({title:n,titleId:l,...o},u){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:u,"aria-labelledby":l},o),n?a.createElement("title",{id:l},n):null,a.createElement("path",{fillRule:"evenodd",d:"M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z",clipRule:"evenodd"}))});l.Z=u}}]);