!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports["video/player/legacy-auto-play"]=o():e["video/player/legacy-auto-play"]=o()}(globalThis,(()=>(()=>{"use strict";var e={d:(o,t)=>{for(var i in t)e.o(t,i)&&!e.o(o,i)&&Object.defineProperty(o,i,{enumerable:!0,get:t[i]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o)},o={};e.d(o,{component:()=>r});const t=coreApis.componentApis.define,i=coreApis.componentApis.video.playerAgent,n=coreApis.observer,a=coreApis.spinQuery,s=coreApis.utils,l=coreApis.utils.log,c=coreApis.utils.urls,r=(0,t.defineComponentMetadata)({name:"legacyAutoPlay",displayName:"传统连播模式",description:"模拟传统的多 P 连播策略: 仅连播视频的分 P, 最后 1P 放完禁止连播其他推荐视频.",tags:[componentsTags.video],urlInclude:c.videoUrls,entry:async()=>{const e=(0,l.useScopedConsole)("传统连播模式"),o={enable:[":is(.base-video-sections, .base-video-sections-v1) .next-button",":is(.multi-page, .multi-page-v1) .next-button",".player-auxiliary-autoplay-switch input"],disable:[":is(.recommend-list, .recommend-list-v1) .next-button"]},t=[()=>Boolean(dq(":is(.multi-page, .multi-page-v1) .list-box li.on:last-child")),()=>Boolean(dq(".video-sections-item:last-child .video-episode-card:last-child .video-episode-card__info-playing")),()=>Boolean(dq(".video-sections-item:last-child .video-episode-card:last-child .video-episode-card__info-title-playing"))];await(0,s.playerReady)();const c=async()=>{const e=await(0,a.select)([...o.disable,...o.enable].join(","));if(!e)return;var i;(o.enable.some((o=>e.matches(o)))&&t.every((e=>!e())))!==(i=e,Boolean(i.querySelector(".switch-button.on")||i.matches(":checked")))&&e.click()};(0,n.videoChange)((async()=>{c();(await i.playerAgent.query.video.element())?.addEventListener("play",c,{once:!0})}));const r=await(0,a.select)(".right-container-inner");r?(0,n.childListSubtree)(r,(()=>c())):e.warn("未找到 rightPanelContainer")},commitHash:"a262fd8beeaf2b76d3b3c769b012558d689f8f81",coreVersion:"2.7.6"});return o=o.component})()));