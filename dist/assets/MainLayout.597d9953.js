import{c as S,h as M,a as te,b as D,g as ne,d as oe}from"./dom.1c0a938f.js";import{c as f,h as v,r as y,i as K,o as Q,a as V,n as X,b as A,g as $,l as N,d as Y,e as C,w as x,f as W,p as Z,j as ie,k as H,m as le,q as G,s as re,t as J,u as ae,v as se,x as k,y as ue,z as _,A as ce,B as de,C as fe}from"./index.66bef36e.js";var he=S({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:a}){const t=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>v("div",{class:t.value},M(a.default))}}),ve=S({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:a}){const t=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>v("div",{class:t.value,role:"toolbar"},M(a.default))}});function me(){const e=y(!K.value);return e.value===!1&&Q(()=>{e.value=!0}),e}const ee=typeof ResizeObserver!="undefined",U=ee===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var F=S({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:a}){let t=null,n,o={width:-1,height:-1};function u(s){s===!0||e.debounce===0||e.debounce==="0"?c():t===null&&(t=setTimeout(c,e.debounce))}function c(){if(t!==null&&(clearTimeout(t),t=null),n){const{offsetWidth:s,offsetHeight:l}=n;(s!==o.width||l!==o.height)&&(o={width:s,height:l},a("resize",o))}}const{proxy:m}=$();if(ee===!0){let s;const l=g=>{n=m.$el.parentNode,n?(s=new ResizeObserver(u),s.observe(n),c()):g!==!0&&A(()=>{l(!0)})};return Q(()=>{l()}),V(()=>{t!==null&&clearTimeout(t),s!==void 0&&(s.disconnect!==void 0?s.disconnect():n&&s.unobserve(n))}),X}else{let g=function(){t!==null&&(clearTimeout(t),t=null),l!==void 0&&(l.removeEventListener!==void 0&&l.removeEventListener("resize",u,N.passive),l=void 0)},p=function(){g(),n&&n.contentDocument&&(l=n.contentDocument.defaultView,l.addEventListener("resize",u,N.passive),c())};const s=me();let l;return Q(()=>{A(()=>{n=m.$el,n&&p()})}),V(g),m.trigger=u,()=>{if(s.value===!0)return v("object",{style:U.style,tabindex:-1,type:"text/html",data:U.url,"aria-hidden":"true",onLoad:p})}}}}),ge=S({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:a,emit:t}){const{proxy:{$q:n}}=$(),o=Y(W,C);if(o===C)return console.error("QHeader needs to be child of QLayout"),C;const u=y(parseInt(e.heightHint,10)),c=y(!0),m=f(()=>e.reveal===!0||o.view.value.indexOf("H")>-1||n.platform.is.ios&&o.isContainer.value===!0),s=f(()=>{if(e.modelValue!==!0)return 0;if(m.value===!0)return c.value===!0?u.value:0;const i=u.value-o.scroll.value.position;return i>0?i:0}),l=f(()=>e.modelValue!==!0||m.value===!0&&c.value!==!0),g=f(()=>e.modelValue===!0&&l.value===!0&&e.reveal===!0),p=f(()=>"q-header q-layout__section--marginal "+(m.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(l.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),z=f(()=>{const i=o.rows.value.top,w={};return i[0]==="l"&&o.left.space===!0&&(w[n.lang.rtl===!0?"right":"left"]=`${o.left.size}px`),i[2]==="r"&&o.right.space===!0&&(w[n.lang.rtl===!0?"left":"right"]=`${o.right.size}px`),w});function d(i,w){o.update("header",i,w)}function b(i,w){i.value!==w&&(i.value=w)}function E({height:i}){b(u,i),d("size",i)}function P(i){g.value===!0&&b(c,!0),t("focusin",i)}x(()=>e.modelValue,i=>{d("space",i),b(c,!0),o.animate()}),x(s,i=>{d("offset",i)}),x(()=>e.reveal,i=>{i===!1&&b(c,e.modelValue)}),x(c,i=>{o.animate(),t("reveal",i)}),x(o.scroll,i=>{e.reveal===!0&&b(c,i.direction==="up"||i.position<=e.revealOffset||i.position-i.inflectionPoint<100)});const L={};return o.instances.header=L,e.modelValue===!0&&d("size",u.value),d("space",e.modelValue),d("offset",s.value),V(()=>{o.instances.header===L&&(o.instances.header=void 0,d("size",0),d("offset",0),d("space",!1))}),()=>{const i=te(a.default,[]);return e.elevated===!0&&i.push(v("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),i.push(v(F,{debounce:0,onResize:E})),v("header",{class:p.value,style:z.value,onFocusin:P},i)}}}),pe=S({name:"QPageContainer",setup(e,{slots:a}){const{proxy:{$q:t}}=$(),n=Y(W,C);if(n===C)return console.error("QPageContainer needs to be child of QLayout"),C;Z(ie,!0);const o=f(()=>{const u={};return n.header.space===!0&&(u.paddingTop=`${n.header.size}px`),n.right.space===!0&&(u[`padding${t.lang.rtl===!0?"Left":"Right"}`]=`${n.right.size}px`),n.footer.space===!0&&(u.paddingBottom=`${n.footer.size}px`),n.left.space===!0&&(u[`padding${t.lang.rtl===!0?"Right":"Left"}`]=`${n.left.size}px`),u});return()=>v("div",{class:"q-page-container",style:o.value},M(a.default))}});const we=[null,document,document.body,document.scrollingElement,document.documentElement];function be(e,a){let t=ne(a);if(t===void 0){if(e==null)return window;t=e.closest(".scroll,.scroll-y,.overflow-auto")}return we.includes(t)?window:t}function ye(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function ze(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let R;function B(){if(R!==void 0)return R;const e=document.createElement("p"),a=document.createElement("div");D(e,{width:"100%",height:"200px"}),D(a,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),a.appendChild(e),document.body.appendChild(a);const t=e.offsetWidth;a.style.overflow="scroll";let n=e.offsetWidth;return t===n&&(n=a.clientWidth),a.remove(),R=t-n,R}const{passive:I}=N,xe=["both","horizontal","vertical"];var Te=S({name:"QScrollObserver",props:{axis:{type:String,validator:e=>xe.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:a}){const t={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let n=null,o,u;x(()=>e.scrollTarget,()=>{s(),m()});function c(){n!==null&&n();const p=Math.max(0,ye(o)),z=ze(o),d={top:p-t.position.top,left:z-t.position.left};if(e.axis==="vertical"&&d.top===0||e.axis==="horizontal"&&d.left===0)return;const b=Math.abs(d.top)>=Math.abs(d.left)?d.top<0?"up":"down":d.left<0?"left":"right";t.position={top:p,left:z},t.directionChanged=t.direction!==b,t.delta=d,t.directionChanged===!0&&(t.direction=b,t.inflectionPoint=t.position),a("scroll",{...t})}function m(){o=be(u,e.scrollTarget),o.addEventListener("scroll",l,I),l(!0)}function s(){o!==void 0&&(o.removeEventListener("scroll",l,I),o=void 0)}function l(p){if(p===!0||e.debounce===0||e.debounce==="0")c();else if(n===null){const[z,d]=e.debounce?[setTimeout(c,e.debounce),clearTimeout]:[requestAnimationFrame(c),cancelAnimationFrame];n=()=>{d(z),n=null}}}const{proxy:g}=$();return x(()=>g.$q.lang.rtl,c),Q(()=>{u=g.$el.parentNode,m()}),V(()=>{n!==null&&n(),s()}),Object.assign(g,{trigger:l,getPosition:()=>t}),X}}),Se=S({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:a,emit:t}){const{proxy:{$q:n}}=$(),o=y(null),u=y(n.screen.height),c=y(e.container===!0?0:n.screen.width),m=y({position:0,direction:"down",inflectionPoint:0}),s=y(0),l=y(K.value===!0?0:B()),g=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),p=f(()=>e.container===!1?{minHeight:n.screen.height+"px"}:null),z=f(()=>l.value!==0?{[n.lang.rtl===!0?"left":"right"]:`${l.value}px`}:null),d=f(()=>l.value!==0?{[n.lang.rtl===!0?"right":"left"]:0,[n.lang.rtl===!0?"left":"right"]:`-${l.value}px`,width:`calc(100% + ${l.value}px)`}:null);function b(r){if(e.container===!0||document.qScrollPrevented!==!0){const h={position:r.position.top,direction:r.direction,directionChanged:r.directionChanged,inflectionPoint:r.inflectionPoint.top,delta:r.delta.top};m.value=h,e.onScroll!==void 0&&t("scroll",h)}}function E(r){const{height:h,width:T}=r;let q=!1;u.value!==h&&(q=!0,u.value=h,e.onScrollHeight!==void 0&&t("scrollHeight",h),L()),c.value!==T&&(q=!0,c.value=T),q===!0&&e.onResize!==void 0&&t("resize",r)}function P({height:r}){s.value!==r&&(s.value=r,L())}function L(){if(e.container===!0){const r=u.value>s.value?B():0;l.value!==r&&(l.value=r)}}let i=null;const w={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:o,height:u,containerHeight:s,scrollbarWidth:l,totalWidth:f(()=>c.value+l.value),rows:f(()=>{const r=e.view.toLowerCase().split(" ");return{top:r[0].split(""),middle:r[1].split(""),bottom:r[2].split("")}}),header:H({size:0,offset:0,space:!1}),right:H({size:300,offset:0,space:!1}),footer:H({size:0,offset:0,space:!1}),left:H({size:300,offset:0,space:!1}),scroll:m,animate(){i!==null?clearTimeout(i):document.body.classList.add("q-body--layout-animate"),i=setTimeout(()=>{i=null,document.body.classList.remove("q-body--layout-animate")},155)},update(r,h,T){w[r][h]=T}};if(Z(W,w),B()>0){let T=function(){r=null,h.classList.remove("hide-scrollbar")},q=function(){if(r===null){if(h.scrollHeight>n.screen.height)return;h.classList.add("hide-scrollbar")}else clearTimeout(r);r=setTimeout(T,300)},O=function(j){r!==null&&j==="remove"&&(clearTimeout(r),T()),window[`${j}EventListener`]("resize",q)},r=null;const h=document.body;x(()=>e.container!==!0?"add":"remove",O),e.container!==!0&&O("add"),le(()=>{O("remove")})}return()=>{const r=oe(a.default,[v(Te,{onScroll:b}),v(F,{onResize:E})]),h=v("div",{class:g.value,style:p.value,ref:e.container===!0?void 0:o,tabindex:-1},r);return e.container===!0?v("div",{class:"q-layout-container overflow-hidden",ref:o},[v(F,{onResize:P}),v("div",{class:"absolute-full",style:z.value},[v("div",{class:"scroll",style:d.value},[h])])]):h}}});const _e=["width","height"],Ce=ae('<path d="M 2.8825,1.3333 C 1.8945372,1.3355878 0.8145418,2.4170017 0.8201,3.5208 v 16.8028 c 0.0912633,3.043154 2.728331,4.551096 5.1492,4.6347 h 29.0079 c 1.0245,-0.164 1.5771,-0.793 1.6715,-1.8867 v -2.5977 c 0,-1.0937 -0.6336,-1.6406 -1.9006,-1.6406 H 12.9786 12.9112 c -1.2266,0 -1.8332,-0.7793 -1.8332,-2.3379 V 3.8079 C 11.081207,2.5911 10.13191,1.3515436 9.184586,1.3243797 Z" style="stroke:none;"></path><path d="m 123.5916,20.8841 c 0,1.3398 -0.2965,2.3516 -0.8896,3.0352 -0.5932,0.6972 -1.4828,1.039 -2.6825,1.039 H 86.8734 c -0.674,-0.0547 -1.011,-0.2324 -1.011,-0.5332 0,-0.1914 0.1618,-0.4512 0.4988,-0.7656 l 4.0977,-3.7871 c 0.7953,-0.6836 1.7793,-1.0391 2.9386,-1.0391 h 20.5967 c 0.8492,-0.1504 1.2805,-0.6699 1.2805,-1.5449 v -6.959 c 0,-0.9433 0.12889,-2.0319174 -0.2022,-1.914 -0.28026,-0.039276 -1.01847,0.7066963 -1.2131,0.8886 l -7.0094,6.8223 c -0.44771,0.403791 -1.294,0.3691 -1.8062,0.3691 h -9.7053 c -0.6874,0 -1.0244,-0.1093 -1.0244,-0.3281 0,-0.082 0.0809,-0.2051 0.2426,-0.3691 L 106.0278,5.5169 c 2.9655,-2.789 5.8771,-4.1836 8.7482,-4.1836 h 5.2435 c 2.3724,0 3.5721,1.0801 3.5721,3.2129 z" style="stroke:none;"></path><path d="m 154.0688,0.4583 h -3.7338 l -2.642,6.166 -2.6555,-6.166 h -3.9091 v 11.375 h 2.5881 V 1.7708 h 0.364 l 2.952,7.4239 h 1.2266 l 2.9386,-7.3145 h 0.283 v 9.9531 h 2.5881 z m -15.5284,0 h -9.4896 v 1.75 h 3.4508 v 9.625 h 2.588 v -9.625 h 3.4508 z" style="stroke:none;"></path><g><animateTransform attributeName="transform" type="rotate" from="40 61.5 14.8" to="400 61.5 14.8" dur="6s" repeatCount="indefinite"></animateTransform><path style="fill:#ffffff;stroke:none;stroke-width:0;" d="m 54.924043,13.043311 h -3.890625 c -3e-6,0 0,0.62934 0,1.410156 0,0.780816 -3e-6,1.410157 0,1.410157 h 3.890625 z m 12.773438,2.820313 h 3.818359 c 3e-6,0 0,-0.629341 0,-1.410157 0,-0.780816 3e-6,-1.410156 0,-1.410156 H 67.697481 Z M 59.86545,4.2132324 v 4.28125 c 0.503046,-1e-6 0.6927,0 1.552734,0 0.701507,0 0.781086,-1e-6 1.265625,0 v -4.28125 c 0,-3e-6 -0.627387,0 -1.408203,0 -0.780816,0 -1.410156,-3e-6 -1.410156,0 z m 2.818359,16.1269536 c -0.484539,1e-6 -0.564118,0 -1.265625,0 -0.860034,0 -1.049688,1e-6 -1.552734,0 v 4.353516 c -1e-6,2e-6 0.62934,0 1.410156,0 0.780816,0 1.408203,2e-6 1.408203,0 z M 61.274851,7.0316274 a 7.421731,7.421731 0 0 0 -7.421875,7.4218766 7.421731,7.421731 0 0 0 7.421875,7.421874 7.421731,7.421731 0 0 0 7.421875,-7.421874 7.421731,7.421731 0 0 0 -7.421875,-7.4218766 z m 0,2.855469 a 4.6029005,4.6029005 0 0 1 4.603516,4.6035166 4.6029005,4.6029005 0 0 1 -4.603516,4.601562 4.6029005,4.6029005 0 0 1 -4.603516,-4.601562 4.6029005,4.6029005 0 0 1 4.603516,-4.6035166 z"></path></g><g><animateTransform attributeName="transform" type="translate" values="0; 0; 1; 2; 2; 1; 0" dur="1.5s" repeatCount="indefinite"></animateTransform><rect style="fill:#ffffff;stroke:none;" width="10.104839" height="2.8132074" x="70.370468" y="13.046864"></rect></g><g><animateTransform attributeName="transform" type="translate" values="2; 2; 1; 0; 0; 1; 2" dur="1.5s" repeatCount="indefinite"></animateTransform><rect style="fill:#ffffff;stroke:none;" width="10.104839" height="2.8132074" x="40.6" y="13.046864"></rect></g>',6),Le=[Ce],qe=G({__name:"AppLogo",props:{width:{default:155},height:{default:26}},setup(e){return(a,t)=>(J(),re("svg",{width:e.width,height:e.height,viewBox:"0 0 155 26",fill:"#fff",stroke:"#fff","stroke-width":"0",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:svg":"http://www.w3.org/2000/svg"},Le,8,_e))}}),ke=G({__name:"MainLayout",setup(e){const a="\u0414\u0435\u043C\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u044B";return(t,n)=>{const o=ue("router-view");return J(),se(Se,{view:"lHh Lpr lFf"},{default:k(()=>[_(ge,{elevated:""},{default:k(()=>[_(ve,null,{default:k(()=>[_(qe,{class:"q-mx-md"}),_(he),ce("div",null,de(fe(a))+" ",1)]),_:1})]),_:1}),_(pe,null,{default:k(()=>[_(o)]),_:1})]),_:1})}}});export{ke as default};