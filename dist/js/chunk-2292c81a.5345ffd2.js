(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2292c81a"],{"0789":function(t,e,i){"use strict";i.d(e,"a",(function(){return u})),i.d(e,"b",(function(){return d}));i("99af");var n=i("d9f7");function r(){for(var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments.length,n=new Array(i>1?i-1:0),r=1;r<i;r++)n[r-1]=arguments[r];return(t=Array()).concat.apply(t,[e].concat(n))}function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top center 0",i=arguments.length>2?arguments[2]:void 0;return{name:t,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:i},origin:{type:String,default:e}},render:function(e,i){var s="transition".concat(i.props.group?"-group":""),o={props:{name:t,mode:i.props.mode},on:{beforeEnter:function(t){t.style.transformOrigin=i.props.origin,t.style.webkitTransformOrigin=i.props.origin}}};return i.props.leaveAbsolute&&(o.on.leave=r(o.on.leave,(function(t){var e=t.offsetTop,i=t.offsetLeft,n=t.offsetWidth,r=t.offsetHeight;t._transitionInitialStyles={position:t.style.position,top:t.style.top,left:t.style.left,width:t.style.width,height:t.style.height},t.style.position="absolute",t.style.top=e+"px",t.style.left=i+"px",t.style.width=n+"px",t.style.height=r+"px"})),o.on.afterLeave=r(o.on.afterLeave,(function(t){if(t&&t._transitionInitialStyles){var e=t._transitionInitialStyles,i=e.position,n=e.top,r=e.left,s=e.width,o=e.height;delete t._transitionInitialStyles,t.style.position=i||"",t.style.top=n||"",t.style.left=r||"",t.style.width=s||"",t.style.height=o||""}}))),i.props.hideOnLeave&&(o.on.leave=r(o.on.leave,(function(t){t.style.setProperty("display","none","important")}))),e(s,Object(n["a"])(i.data,o),i.children)}}}function o(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out";return{name:t,functional:!0,props:{mode:{type:String,default:i}},render:function(i,r){return i("transition",Object(n["a"])(r.data,{props:{name:t},on:e}),r.children)}}}var a=i("ade3"),l=i("80d2"),c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=e?"width":"height",n="offset".concat(Object(l["o"])(i));return{beforeEnter:function(t){t._parent=t.parentNode,t._initialStyle=Object(a["a"])({transition:t.style.transition,overflow:t.style.overflow},i,t.style[i])},enter:function(e){var r=e._initialStyle;e.style.setProperty("transition","none","important"),e.style.overflow="hidden";var s="".concat(e[n],"px");e.style[i]="0",e.offsetHeight,e.style.transition=r.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame((function(){e.style[i]=s}))},afterEnter:s,enterCancelled:s,leave:function(t){t._initialStyle=Object(a["a"])({transition:"",overflow:t.style.overflow},i,t.style[i]),t.style.overflow="hidden",t.style[i]="".concat(t[n],"px"),t.offsetHeight,requestAnimationFrame((function(){return t.style[i]="0"}))},afterLeave:r,leaveCancelled:r};function r(e){t&&e._parent&&e._parent.classList.remove(t),s(e)}function s(t){var e=t._initialStyle[i];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[i]=e),delete t._initialStyle}},u=(s("carousel-transition"),s("carousel-reverse-transition"),s("tab-transition"),s("tab-reverse-transition"),s("menu-transition"),s("fab-transition","center center","out-in"),s("dialog-transition"),s("dialog-bottom-transition"),s("dialog-top-transition"),s("fade-transition")),d=(s("scale-transition"),s("scroll-x-transition"),s("scroll-x-reverse-transition"),s("scroll-y-transition"),s("scroll-y-reverse-transition"),s("slide-x-transition"));s("slide-x-reverse-transition"),s("slide-y-transition"),s("slide-y-reverse-transition"),o("expand-transition",c()),o("expand-x-transition",c("",!0))},"0c18":function(t,e,i){},1101:function(t,e,i){"use strict";i("8809")},2561:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"overflow-hidden",attrs:{id:"about"}},[i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{staticClass:"align-content-space-between",attrs:{cols:"12",md:"6"}},[i("base-bubble-2",{staticStyle:{transform:"translate(-15%, -5%)"}}),i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-col",{class:{"pa-8":t.$vuetify.breakpoint.smAndDown},attrs:{cols:"12",md:"8"}},[i("base-heading",{staticClass:"accent--text"},[t._v("Обо мне")]),i("base-text",{staticClass:"mb-5"},[t._v("Профессиональная разработка бизнес-систем на базе популярных фреймворков")]),i("base-text",{staticClass:"mb-5 subtitle-1"},[t._v(" Основной стек технологий: "),i("strong",[t._v("Vue JS, Vuex, Vue Router")])]),i("base-subheading",{staticClass:"accent--text"},[t._v("Навыки")]),i("base-text",{staticClass:"mb-5"},[i("ul",{staticClass:"secondary--text"},[i("li",[t._v("Умение расставлять приоритеты")]),i("li",[t._v("Умение работать в команде")]),i("li",[t._v("Организационная осведомленность")])])]),i("v-alert",{staticClass:"px-10 pb-8",attrs:{outlined:"",color:"info"}},t._l(t.skills,(function(e,n){return i("v-row",{key:n},[i("v-col",{style:{color:e.color},attrs:{cols:"6"},domProps:{textContent:t._s(e.name)}}),i("v-col",{staticClass:"text-right",style:{color:e.color},attrs:{cols:"6"},domProps:{textContent:t._s(e.value+"%")}}),i("v-progress-linear",{attrs:{value:e.value,color:e.color,height:"8"}})],1)})),1)],1)],1)],1),i("v-col",{staticClass:"hidden-sm-and-down",attrs:{md:"6"}},[i("v-img",{staticClass:"img",attrs:{src:"img/aboutme.jpg",height:"100vh"}})],1)],1)],1)},r=[],s={name:"AboutMe",data:function(){return{skills:[{name:"JavaScript",color:"#e3b520",value:88},{name:"CSS",color:"#6dbd2b",value:91},{name:"HTML",color:"#eb6834",value:95}]}}},o=s,a=(i("1101"),i("2877")),l=i("6544"),c=i.n(l),u=i("5530"),d=i("ade3"),h=(i("caad"),i("0c18"),i("10d2")),f=i("afdd"),v=i("9d26"),p=i("f2e7"),g=i("7560"),m=i("2b0e"),b=m["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),y=i("58df"),_=i("d9bd"),C=Object(y["a"])(h["a"],p["a"],b).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var t={staticClass:"v-alert__border",class:Object(d["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(f["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(v["a"],{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(v["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=Object(u["a"])(Object(u["a"])({},h["a"].options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||g["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(_["a"])("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}}),B=i("62ad"),x=i("adda"),w=(i("a9e3"),i("c7cd"),i("6ece"),i("0789")),S=i("90a2"),O=i("a9ad"),$=i("fe6c");function k(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return m["a"].extend({name:"proxyable",model:{prop:t,event:e},props:Object(d["a"])({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:Object(d["a"])({},t,(function(t){this.internalLazyValue=t}))})}var j=k(),V=j,z=i("80d2"),L=Object(y["a"])(O["a"],Object($["b"])(["absolute","fixed","top","bottom"]),V,g["a"]),E=L.extend({name:"v-progress-linear",directives:{intersect:S["a"]},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(z["d"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(z["d"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t,e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return t={opacity:e},Object(d["a"])(t,this.isReversed?"right":"left",Object(z["d"])(this.normalizedValue,"%")),Object(d["a"])(t,"width",Object(z["d"])(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")),t},classes:function(){return Object(u["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible},this.themeClasses)},computedTransition:function(){return this.indeterminate?w["a"]:w["b"]},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(z["d"])(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var t=Object(z["i"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(d["a"])({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect(),i=e.width;this.internalValue=t.offsetX/i*100}},onObserve:function(t,e,i){this.isVisible=i},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){var e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?Object(z["d"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),I=i("0fd9"),A=Object(a["a"])(o,n,r,!1,null,"2fdd1be8",null);e["default"]=A.exports;c()(A,{VAlert:C,VCol:B["a"],VImg:x["a"],VProgressLinear:E,VRow:I["a"]})},"6ece":function(t,e,i){},8809:function(t,e,i){},"9d26":function(t,e,i){"use strict";var n=i("132d");e["a"]=n["a"]},afdd:function(t,e,i){"use strict";var n=i("8336");e["a"]=n["a"]}}]);
//# sourceMappingURL=chunk-2292c81a.5345ffd2.js.map