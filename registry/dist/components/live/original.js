!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["live/original"]=t():e["live/original"]=t()}(globalThis,(()=>(()=>{"use strict";var e={479:(e,t,o)=>{o.r(t),o.d(t,{default:()=>s});var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("a",{attrs:{href:e.href,tabindex:"-1"}},[o("DefaultWidget",{attrs:{name:"返回原版直播间",icon:"mdi-arrow-left-circle-outline"}})],1)};n._withStripped=!0;const i=coreApis.ui;var r=function(e,t,o,n,i,r,s,a){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=o,c._compiled=!0),n&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),s?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=l):i&&(l=a?function(){i.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(e,t){return l.call(t),d(e,t)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,l):[l]}return{exports:e,options:c}}(Vue.extend({components:{DefaultWidget:i.DefaultWidget},data(){const e=document.URL.match(/^https:\/\/live\.bilibili\.com\/([\d]+)/);return e?{href:`https://live.bilibili.com/blanc/${e[1]}`}:{href:document.URL}}}),n,[],!1,null,null,null);r.options.__file="registry/lib/components/live/original/Widget.vue";const s=r.exports}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{o.d(n,{component:()=>i});const e=coreApis.componentApis.define,t=coreApis.utils,i=(0,e.defineComponentMetadata)({name:"originalLiveroom",displayName:"返回原版直播间",description:"在直播间中提供返回原版直播间的按钮, 原版直播间将无视活动皮肤, 强制使用标准的直播页面.",tags:[componentsTags.live],entry:none,urlInclude:[/^https:\/\/live\.bilibili\.com\/[\d]+/],widget:{component:()=>Promise.resolve().then(o.bind(o,479)).then((e=>e.default)),condition:()=>(0,t.matchUrlPattern)(/^https:\/\/live\.bilibili\.com\/([\d]+)/)},commitHash:"a262fd8beeaf2b76d3b3c769b012558d689f8f81",coreVersion:"2.7.6"})})(),n=n.component})()));