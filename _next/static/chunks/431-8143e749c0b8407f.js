"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[431],{9431:function(e,n,t){t.d(n,{UQ:function(){return te},KF:function(){return z},XE:function(){return Z},Qd:function(){return ee},Hk:function(){return ne}});var i=t(7294),a=t(9632),o=t(8387),s=t(6734);function r(e){return e.sort(((e,n)=>{const t=e.compareDocumentPosition(n);if(t&Node.DOCUMENT_POSITION_FOLLOWING||t&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(t&Node.DOCUMENT_POSITION_PRECEDING||t&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0}))}function l(e,n,t){let i=e+1;return t&&i>=n&&(i=0),i}function d(e,n,t){let i=e-1;return t&&i<0&&(i=n),i}var c="undefined"!==typeof window?i.useLayoutEffect:i.useEffect;function u(){const e=(0,i.useRef)(new class{descendants=new Map;register=e=>{var n;if(null!=e)return"object"==typeof(n=e)&&"nodeType"in n&&n.nodeType===Node.ELEMENT_NODE?this.registerNode(e):n=>{this.registerNode(n,e)}};unregister=e=>{this.descendants.delete(e);const n=r(Array.from(this.descendants.keys()));this.assignIndex(n)};destroy=()=>{this.descendants.clear()};assignIndex=e=>{this.descendants.forEach((n=>{const t=e.indexOf(n.node);n.index=t,n.node.dataset.index=n.index.toString()}))};count=()=>this.descendants.size;enabledCount=()=>this.enabledValues().length;values=()=>Array.from(this.descendants.values()).sort(((e,n)=>e.index-n.index));enabledValues=()=>this.values().filter((e=>!e.disabled));item=e=>{if(0!==this.count())return this.values()[e]};enabledItem=e=>{if(0!==this.enabledCount())return this.enabledValues()[e]};first=()=>this.item(0);firstEnabled=()=>this.enabledItem(0);last=()=>this.item(this.descendants.size-1);lastEnabled=()=>{const e=this.enabledValues().length-1;return this.enabledItem(e)};indexOf=e=>{var n;return e?(null==(n=this.descendants.get(e))?void 0:n.index)??-1:-1};enabledIndexOf=e=>null==e?-1:this.enabledValues().findIndex((n=>n.node.isSameNode(e)));next=(e,n=!0)=>{const t=l(e,this.count(),n);return this.item(t)};nextEnabled=(e,n=!0)=>{const t=this.item(e);if(!t)return;const i=l(this.enabledIndexOf(t.node),this.enabledCount(),n);return this.enabledItem(i)};prev=(e,n=!0)=>{const t=d(e,this.count()-1,n);return this.item(t)};prevEnabled=(e,n=!0)=>{const t=this.item(e);if(!t)return;const i=d(this.enabledIndexOf(t.node),this.enabledCount()-1,n);return this.enabledItem(i)};registerNode=(e,n)=>{if(!e||this.descendants.has(e))return;const t=r(Array.from(this.descendants.keys()).concat(e));(null==n?void 0:n.disabled)&&(n.disabled=!!n.disabled);const i={node:e,index:-1,...n};this.descendants.set(e,i),this.assignIndex(t)}});return c((()=>()=>e.current.destroy())),e.current}var[m,f]=(0,o.k)({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"});var x=t(2494),h=t(9251);var p=t(1190),v=t(3747),E=(...e)=>e.filter(Boolean).join(" ");var y={ease:[.25,.1,.25,1],easeIn:[.4,0,1,1],easeOut:[0,0,.2,1],easeInOut:[.4,0,.2,1]},g={position:{left:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"-100%",y:0}},b={position:{right:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"100%",y:0}},N={position:{top:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"-100%"}},I={position:{bottom:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"100%"}};function O(e){switch((null==e?void 0:e.direction)??"right"){case"right":default:return b;case"left":return g;case"bottom":return I;case"top":return N}}var C={enter:{duration:.2,ease:y.easeOut},exit:{duration:.1,ease:y.easeIn}},w=(e,n)=>({...e,delay:"number"===typeof n?n:null==n?void 0:n.enter}),_=(e,n)=>({...e,delay:"number"===typeof n?n:null==n?void 0:n.exit}),k={exit:{height:{duration:.2,ease:y.ease},opacity:{duration:.3,ease:y.ease}},enter:{height:{duration:.3,ease:y.ease},opacity:{duration:.4,ease:y.ease}}},A={exit:({animateOpacity:e,startingHeight:n,transition:t,transitionEnd:i,delay:a})=>{return{...e&&{opacity:(o=n,null!=o&&parseInt(o.toString(),10)>0?1:0)},height:n,transitionEnd:null==i?void 0:i.exit,transition:(null==t?void 0:t.exit)??_(k.exit,a)};var o},enter:({animateOpacity:e,endingHeight:n,transition:t,transitionEnd:i,delay:a})=>({...e&&{opacity:1},height:n,transitionEnd:null==i?void 0:i.enter,transition:(null==t?void 0:t.enter)??w(k.enter,a)})},D=(0,i.forwardRef)(((e,n)=>{const{in:t,unmountOnExit:a,animateOpacity:o=!0,startingHeight:s=0,endingHeight:r="auto",style:l,className:d,transition:c,transitionEnd:u,...m}=e,[f,x]=(0,i.useState)(!1);(0,i.useEffect)((()=>{const e=setTimeout((()=>{x(!0)}));return()=>clearTimeout(e)}),[]),(e=>{const{condition:n,message:t}=e})({condition:Boolean(s>0&&a),message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"});const h=parseFloat(s.toString())>0,y={startingHeight:s,endingHeight:r,animateOpacity:o,transition:f?c:{enter:{duration:0}},transitionEnd:{enter:null==u?void 0:u.enter,exit:a?null==u?void 0:u.exit:{...null==u?void 0:u.exit,display:h?"block":"none"}}},g=!a||t,b=t||a?"enter":"exit";return i.createElement(p.M,{initial:!1,custom:y},g&&i.createElement(v.E.div,{ref:n,...m,className:E("chakra-collapse",d),style:{overflow:"hidden",display:"block",...l},custom:y,variants:A,initial:!!a&&"exit",animate:b,exit:"exit"}))}));D.displayName="Collapse";var M={initial:"exit",animate:"enter",exit:"exit",variants:{enter:({transition:e,transitionEnd:n,delay:t}={})=>({opacity:1,transition:(null==e?void 0:e.enter)??w(C.enter,t),transitionEnd:null==n?void 0:n.enter}),exit:({transition:e,transitionEnd:n,delay:t}={})=>({opacity:0,transition:(null==e?void 0:e.exit)??_(C.exit,t),transitionEnd:null==n?void 0:n.exit})}};(0,i.forwardRef)((function(e,n){const{unmountOnExit:t,in:a,className:o,transition:s,transitionEnd:r,delay:l,...d}=e,c=a||t?"enter":"exit",u=!t||a&&t,m={transition:s,transitionEnd:r,delay:l};return i.createElement(p.M,{custom:m},u&&i.createElement(v.E.div,{ref:n,className:E("chakra-fade",o),custom:m,...M,animate:c,...d}))})).displayName="Fade";var P={initial:"exit",animate:"enter",exit:"exit",variants:{exit:({reverse:e,initialScale:n,transition:t,transitionEnd:i,delay:a})=>({opacity:0,...e?{scale:n,transitionEnd:null==i?void 0:i.exit}:{transitionEnd:{scale:n,...null==i?void 0:i.exit}},transition:(null==t?void 0:t.exit)??_(C.exit,a)}),enter:({transitionEnd:e,transition:n,delay:t})=>({opacity:1,scale:1,transition:(null==n?void 0:n.enter)??w(C.enter,t),transitionEnd:null==e?void 0:e.enter})}};(0,i.forwardRef)((function(e,n){const{unmountOnExit:t,in:a,reverse:o=!0,initialScale:s=.95,className:r,transition:l,transitionEnd:d,delay:c,...u}=e,m=!t||a&&t,f=a||t?"enter":"exit",x={initialScale:s,reverse:o,transition:l,transitionEnd:d,delay:c};return i.createElement(p.M,{custom:x},m&&i.createElement(v.E.div,{ref:n,className:E("chakra-offset-slide",r),...P,animate:f,custom:x,...u}))})).displayName="ScaleFade";var T={exit:{duration:.15,ease:y.easeInOut},enter:{type:"spring",damping:25,stiffness:180}},S={exit:({direction:e,transition:n,transitionEnd:t,delay:i})=>{const{exit:a}=O({direction:e});return{...a,transition:(null==n?void 0:n.exit)??_(T.exit,i),transitionEnd:null==t?void 0:t.exit}},enter:({direction:e,transitionEnd:n,transition:t,delay:i})=>{const{enter:a}=O({direction:e});return{...a,transition:(null==t?void 0:t.enter)??w(T.enter,i),transitionEnd:null==n?void 0:n.enter}}};(0,i.forwardRef)((function(e,n){const{direction:t="right",style:a,unmountOnExit:o,in:s,className:r,transition:l,transitionEnd:d,delay:c,...u}=e,m=O({direction:t}),f=Object.assign({position:"fixed"},m.position,a),x=!o||s&&o,h=s||o?"enter":"exit",y={transitionEnd:d,transition:l,direction:t,delay:c};return i.createElement(p.M,{custom:y},x&&i.createElement(v.E.div,{...u,ref:n,initial:"exit",className:E("chakra-slide",r),animate:h,exit:"exit",custom:y,variants:S,style:f}))})).displayName="Slide";var F={initial:"initial",animate:"enter",exit:"exit",variants:{initial:({offsetX:e,offsetY:n,transition:t,transitionEnd:i,delay:a})=>({opacity:0,x:e,y:n,transition:(null==t?void 0:t.exit)??_(C.exit,a),transitionEnd:null==i?void 0:i.exit}),enter:({transition:e,transitionEnd:n,delay:t})=>({opacity:1,x:0,y:0,transition:(null==e?void 0:e.enter)??w(C.enter,t),transitionEnd:null==n?void 0:n.enter}),exit:({offsetY:e,offsetX:n,transition:t,transitionEnd:i,reverse:a,delay:o})=>{const s={x:n,y:e};return{opacity:0,transition:(null==t?void 0:t.exit)??_(C.exit,o),...a?{...s,transitionEnd:null==i?void 0:i.exit}:{transitionEnd:{...s,...null==i?void 0:i.exit}}}}}};(0,i.forwardRef)((function(e,n){const{unmountOnExit:t,in:a,reverse:o=!0,className:s,offsetX:r=0,offsetY:l=8,transition:d,transitionEnd:c,delay:u,...m}=e,f=!t||a&&t,x=a||t?"enter":"exit",h={offsetX:r,offsetY:l,reverse:o,transition:d,transitionEnd:c,delay:u};return i.createElement(p.M,{custom:h},f&&i.createElement(v.E.div,{ref:n,className:E("chakra-offset-slide",s),custom:h,...F,animate:x,...m}))})).displayName="SlideFade";var U=t(4520),H=(...e)=>e.filter(Boolean).join(" ");var R=e=>{const{condition:n,message:t}=e};function B(...e){return function(n){e.some((e=>(null==e||e(n),null==n?void 0:n.defaultPrevented)))}}var[L,V]=(0,o.k)({name:"AccordionStylesContext",hookName:"useAccordionStyles",providerName:"<Accordion />"}),[Y,$]=(0,o.k)({name:"AccordionItemContext",hookName:"useAccordionItemContext",providerName:"<AccordionItem />"}),[G,j,W,X]=[m,()=>f(),()=>u(),e=>function(e){const n=f(),[t,a]=(0,i.useState)(-1),o=(0,i.useRef)(null);c((()=>()=>{o.current&&n.unregister(o.current)}),[]),c((()=>{if(!o.current)return;const e=Number(o.current.dataset.index);t==e||Number.isNaN(e)||a(e)}));const r=e?n.register(e):n.register;return{descendants:n,index:t,enabledIndex:n.enabledIndexOf(o.current),register:(0,s.lq)(r,o)}}(e)],z=(0,a.Gp)((function(e,n){const{getButtonProps:t}=$(),o=t(e,n),s={display:"flex",alignItems:"center",width:"100%",outline:0,...V().button};return i.createElement(a.m$.button,{...o,className:H("chakra-accordion__button",e.className),__css:s})}));function K(e){const{onChange:n,defaultIndex:t,index:a,allowMultiple:o,allowToggle:s,...r}=e;!function(e){const n=e.index||e.defaultIndex,t=null==n&&!Array.isArray(n)&&e.allowMultiple;R({condition:!!t,message:`If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof n},`})}(e),function(e){R({condition:!(!e.allowMultiple||!e.allowToggle),message:"If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"})}(e);const l=W(),[d,c]=(0,i.useState)(-1);(0,i.useEffect)((()=>()=>{c(-1)}),[]);const[u,m]=function(e){const{value:n,defaultValue:t,onChange:a,shouldUpdate:o=((e,n)=>e!==n)}=e,s=(0,h.W)(a),r=(0,h.W)(o),[l,d]=(0,i.useState)(t),c=void 0!==n,u=c?n:l,m=(0,i.useCallback)((e=>{const n="function"===typeof e?e(u):e;r(u,n)&&(c||d(n),s(n))}),[c,s,u,r]);return[u,m]}({value:a,defaultValue:()=>o?t??[]:t??-1,onChange:n});return{index:u,setIndex:m,htmlProps:r,getAccordionItemProps:e=>{let n=!1;null!==e&&(n=Array.isArray(u)?u.includes(e):u===e);return{isOpen:n,onChange:n=>{if(null!==e)if(o&&Array.isArray(u)){const t=n?u.concat(e):u.filter((n=>n!==e));m(t)}else n?m(e):s&&m(-1)}}},focusedIndex:d,setFocusedIndex:c,descendants:l}}z.displayName="AccordionButton";var[q,Q]=(0,o.k)({name:"AccordionContext",hookName:"useAccordionContext",providerName:"Accordion"});function J(e){const{isDisabled:n,isFocusable:t,id:a,...o}=e,{getAccordionItemProps:r,setFocusedIndex:l}=Q(),d=(0,i.useRef)(null),c=(0,i.useId)(),u=a??c,m=`accordion-button-${u}`,f=`accordion-panel-${u}`;!function(e){R({condition:!(!e.isFocusable||e.isDisabled),message:"Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.\n    "})}(e);const{register:x,index:h,descendants:p}=X({disabled:n&&!t}),{isOpen:v,onChange:E}=r(-1===h?null:h);!function(e){R({condition:e.isOpen&&!!e.isDisabled,message:"Cannot open a disabled accordion item"})}({isOpen:v,isDisabled:n});const y=(0,i.useCallback)((()=>{null==E||E(!v),l(h)}),[h,l,v,E]),g=(0,i.useCallback)((e=>{const n={ArrowDown:()=>{const e=p.nextEnabled(h);null==e||e.node.focus()},ArrowUp:()=>{const e=p.prevEnabled(h);null==e||e.node.focus()},Home:()=>{const e=p.firstEnabled();null==e||e.node.focus()},End:()=>{const e=p.lastEnabled();null==e||e.node.focus()}}[e.key];n&&(e.preventDefault(),n(e))}),[p,h]),b=(0,i.useCallback)((()=>{l(h)}),[l,h]),N=(0,i.useCallback)((function(e={},t=null){return{...e,type:"button",ref:(0,s.lq)(x,d,t),id:m,disabled:!!n,"aria-expanded":!!v,"aria-controls":f,onClick:B(e.onClick,y),onFocus:B(e.onFocus,b),onKeyDown:B(e.onKeyDown,g)}}),[m,n,v,y,b,g,f,x]),I=(0,i.useCallback)((function(e={},n=null){return{...e,ref:n,role:"region",id:f,"aria-labelledby":m,hidden:!v}}),[m,v,f]);return{isOpen:v,isDisabled:n,isFocusable:t,onOpen:()=>{null==E||E(!0)},onClose:()=>{null==E||E(!1)},getButtonProps:N,getPanelProps:I,htmlProps:o}}function Z(e){const{isOpen:n,isDisabled:t}=$(),{reduceMotion:a}=Q(),o=H("chakra-accordion__icon",e.className),s={opacity:t?.4:1,transform:n?"rotate(-180deg)":void 0,transition:a?void 0:"transform 0.2s",transformOrigin:"center",...V().icon};return i.createElement(x.JO,{viewBox:"0 0 24 24","aria-hidden":!0,className:o,__css:s,...e},i.createElement("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}))}Z.displayName="AccordionIcon";var ee=(0,a.Gp)((function(e,n){const{children:t,className:o}=e,{htmlProps:s,...r}=J(e),l={...V().container,overflowAnchor:"none"},d=(0,i.useMemo)((()=>r),[r]);return i.createElement(Y,{value:d},i.createElement(a.m$.div,{ref:n,...s,className:H("chakra-accordion__item",o),__css:l},"function"===typeof t?t({isExpanded:!!r.isOpen,isDisabled:!!r.isDisabled}):t))}));ee.displayName="AccordionItem";var ne=(0,a.Gp)((function(e,n){const{reduceMotion:t}=Q(),{getPanelProps:o,isOpen:s}=$(),r=o(e,n),l=H("chakra-accordion__panel",e.className),d=V();t||delete r.hidden;const c=i.createElement(a.m$.div,{...r,__css:d.panel,className:l});return t?c:i.createElement(D,{in:s},c)}));ne.displayName="AccordionPanel";var te=(0,a.Gp)((function({children:e,reduceMotion:n,...t},o){const s=(0,a.jC)("Accordion",t),r=(0,U.Lr)(t),{htmlProps:l,descendants:d,...c}=K(r),u=(0,i.useMemo)((()=>({...c,reduceMotion:!!n})),[c,n]);return i.createElement(G,{value:d},i.createElement(q,{value:u},i.createElement(L,{value:s},i.createElement(a.m$.div,{ref:o,...l,className:H("chakra-accordion",t.className),__css:s.root},e))))}));te.displayName="Accordion"}}]);