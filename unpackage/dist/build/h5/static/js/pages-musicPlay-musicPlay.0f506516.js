(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-musicPlay-musicPlay"],{"00c0":function(t,e,n){var i=n("24e7");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("00c5b7e6",i,!0,{sourceMap:!1,shadowMode:!1})},"1da1":function(t,e,n){"use strict";function i(t,e,n,i,r,o,a){try{var s=t[o](a),c=s.value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(i,r)}function r(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function s(t){i(a,r,o,s,c,"next",t)}function c(t){i(a,r,o,s,c,"throw",t)}s(void 0)}))}}n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},"24e7":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 主题色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.container[data-v-261c0eb8]{position:absolute;width:100vw;top:0;bottom:0}.bg[data-v-261c0eb8]{position:absolute;left:0;top:0;right:0;bottom:0;background-repeat:no-repeat;background-position:50%;-webkit-filter:blur(%?80?%);filter:blur(%?80?%);z-index:1}.mask[data-v-261c0eb8]{position:absolute;left:0;top:0;right:0;bottom:0;z-index:10;opacity:.25;background:#000}.wrap[data-v-261c0eb8]{position:absolute;top:0;z-index:100;width:100%;bottom:%?200?%}.wrap .swiper[data-v-261c0eb8]{height:100%}.wrap .song[data-v-261c0eb8]{width:%?600?%;height:%?600?%;margin:0 auto;margin-top:10%}.wrap .song .song_turn[data-v-261c0eb8]{width:100%;height:100%;background-image:url(https://wen.cwjbjy.online/images/music/player-it666-disc.png);background-repeat:no-repeat;background-size:contain;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-animation:mymove-data-v-261c0eb8 10s linear infinite;animation:mymove-data-v-261c0eb8 10s linear infinite;-webkit-animation-play-state:paused;animation-play-state:paused}.wrap .song .song_turn .song_pic[data-v-261c0eb8]{width:%?372?%;height:%?372?%}.wrap .song .song_turn .song_pic uni-image[data-v-261c0eb8]{width:100%;height:100%;-webkit-border-radius:50%;border-radius:50%}.wrap .song .active[data-v-261c0eb8]{-webkit-animation-play-state:running;animation-play-state:running}@-webkit-keyframes mymove-data-v-261c0eb8{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes mymove-data-v-261c0eb8{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.bottom[data-v-261c0eb8]{height:%?200?%;position:absolute;bottom:0;width:100%;z-index:100}.bottom .control[data-v-261c0eb8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?80?%}.bottom .barIcon[data-v-261c0eb8]{font-size:%?60?%}.bottom .playIcon[data-v-261c0eb8]{font-size:%?80?%}.progress[data-v-261c0eb8]{display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?24?%;color:#fff;padding:0 %?40?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.progress .timing[data-v-261c0eb8]{width:%?80?%}.progress .audio-slider[data-v-261c0eb8]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.progress .time[data-v-261c0eb8]{text-align:right;color:#ccc;width:%?80?%}.scroll-Y[data-v-261c0eb8]{height:100%;text-align:center;display:block;font-size:16px;line-height:4;position:relative;color:#fff}',""]),t.exports=e},"581c":function(t,e,n){"use strict";n("d81d"),n("e25e"),n("ac1f"),n("466d"),n("5319"),n("1276"),n("498a"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={disposeLyric:function(t){var e=t.split("\n"),n=/\[\d*:\d*\.\d*]/g,i=/\[\d*]/i,r=/\:\d*/i,o={};return e.map((function(t){var e=t.match(n);if(console.log("timeStr",e),e){e.map((function(t,n){0==n&&(e=t)}));var a=e.match(i);a.map((function(t,e){0==e&&(a=t.substr(1))}));var s=e.match(r);s.map((function(t,e){0==e&&(s=t.substr(1))}));var c=60*parseInt(a)+parseInt(s),u=t.replace(n,"").trim();o[c]=u}})),o}};e.default=i},"659b":function(t,e,n){"use strict";var i=n("00c0"),r=n.n(i);r.a},7942:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.songs.length>0&&0!==t.duration?n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"bg",style:{"background-image":"url("+t.song.al.picUrl+")"}}),n("v-uni-view",{staticClass:"mask"}),n("v-uni-view",{staticClass:"wrap"},[n("v-uni-swiper",{staticClass:"swiper"},[n("v-uni-swiper-item",[n("v-uni-view",{staticClass:"song"},[n("v-uni-view",{class:["song_turn",!0!==t.paused?"active":""]},[n("v-uni-view",{staticClass:"song_pic"},[n("v-uni-image",{attrs:{src:t.song.al.picUrl}})],1)],1)],1)],1),n("v-uni-swiper-item",[t.nolyric?t._e():n("v-uni-scroll-view",{staticClass:"scroll-Y",attrs:{"scroll-top":t.scrollTop,"scroll-y":"true"}},t._l(t.lyricObj,(function(e,i){return n("v-uni-view",{key:i,style:{color:i==t.line?"#a6e22d":"#fff"},attrs:{id:"line"+i,"data-top":t.lineHeight*i}},[t._v(t._s(e.text))])})),1),t.nolyric?n("v-uni-scroll-view",{staticStyle:{color:"#FFFFFF","text-align":"center"}},[t._v("无歌词，请欣赏音乐")]):t._e()],1)],1)],1),n("v-uni-view",{staticClass:"bottom"},[n("v-uni-view",{staticClass:"progress"},[n("v-uni-view",{staticClass:"timing"},[t._v(t._s(t._f("palyTime")(t.current)))]),n("v-uni-slider",{staticClass:"audio-slider",attrs:{activeColor:t.color,"block-size":"16",value:t.current,max:t.duration},on:{changing:function(e){arguments[0]=e=t.$handleEvent(e),t.seek=!0,t.current=e.detail.value},change:function(e){arguments[0]=e=t.$handleEvent(e),t.audio.seek(e.detail.value)}}}),n("v-uni-view",{staticClass:"time"},[t._v(t._s(t._f("palyTime")(t.duration)))])],1),n("v-uni-view",{staticClass:"control"},[n("v-uni-view",{staticClass:"select"},[t.playOrder?t._e():n("v-uni-view",{staticClass:"iconfont icon-xunhuan barIcon",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.continuePlay.apply(void 0,arguments)}}}),t.playOrder?n("v-uni-view",{staticClass:"iconfont icon-danquxunhuan barIcon",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.continuePlay.apply(void 0,arguments)}}}):t._e()],1),n("v-uni-view",{staticClass:"iconfont icon-48shangyishou barIcon",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.next(-1)}}}),n("v-uni-view",{staticClass:"play",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.audio.paused?t.audio.play():t.audio.pause()}}},[t.paused?n("v-uni-view",{staticClass:"iconfont icon-plus-start playIcon"}):t._e(),t.paused?t._e():n("v-uni-view",{staticClass:"iconfont icon-plus-pause playIcon"})],1),n("v-uni-view",{staticClass:"iconfont icon-048caozuo_xiayishou barIcon",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.next(1)}}}),n("v-uni-view",{staticClass:"iconfont icon-shoucang barIcon"})],1)],1)],1):t._e()},o=[]},"96cf":function(t,e){!function(e){"use strict";var n,i=Object.prototype,r=i.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",u="object"===typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{l=e.regeneratorRuntime=u?t.exports:{},l.wrap=w;var d="suspendedStart",f="suspendedYield",h="executing",p="completed",v={},g={};g[a]=function(){return this};var y=Object.getPrototypeOf,m=y&&y(y(S([])));m&&m!==i&&r.call(m,a)&&(g=m);var b=L.prototype=k.prototype=Object.create(g);_.prototype=b.constructor=L,L.constructor=_,L[c]=_.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(b),t},l.awrap=function(t){return{__await:t}},E(j.prototype),j.prototype[s]=function(){return this},l.AsyncIterator=j,l.async=function(t,e,n,i){var r=new j(w(t,e,n,i));return l.isGeneratorFunction(e)?r:r.next().then((function(t){return t.done?t.value:r.next()}))},E(b),b[c]="Generator",b[a]=function(){return this},b.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var i=e.pop();if(i in t)return n.value=i,n.done=!1,n}return n.done=!0,n}},l.values=S,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(I),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function i(i,r){return s.type="throw",s.arg=t,e.next=i,r&&(e.method="next",e.arg=n),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),I(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var r=i.arg;I(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,i){return this.delegate={iterator:S(t),resultName:e,nextLoc:i},"next"===this.method&&(this.arg=n),v}}}function w(t,e,n,i){var r=e&&e.prototype instanceof k?e:k,o=Object.create(r.prototype),a=new T(i||[]);return o._invoke=O(t,n,a),o}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(i){return{type:"throw",arg:i}}}function k(){}function _(){}function L(){}function E(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function j(t){function e(n,i,o,a){var s=x(t[n],t,i);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"===typeof u&&r.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,o,a)}),(function(t){e("throw",t,o,a)})):Promise.resolve(u).then((function(t){c.value=t,o(c)}),(function(t){return e("throw",t,o,a)}))}a(s.arg)}var n;function i(t,i){function r(){return new Promise((function(n,r){e(t,i,n,r)}))}return n=n?n.then(r,r):r()}this._invoke=i}function O(t,e,n){var i=d;return function(r,o){if(i===h)throw new Error("Generator is already running");if(i===p){if("throw"===r)throw o;return F()}n.method=r,n.arg=o;while(1){var a=n.delegate;if(a){var s=C(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===d)throw i=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=h;var c=x(t,e,n);if("normal"===c.type){if(i=n.done?p:f,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i=p,n.method="throw",n.arg=c.arg)}}}function C(t,e){var i=t.iterator[e.method];if(i===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,C(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var r=x(i,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,v;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function S(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function e(){while(++i<t.length)if(r.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:F}}function F(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},cd9a:function(t,e,n){"use strict";var i=n("4ea4");n("4160"),n("d81d"),n("b680"),n("d3b7"),n("e25e"),n("ac1f"),n("466d"),n("5319"),n("1276"),n("498a"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var r=i(n("1da1")),o=(i(n("581c")),{data:function(){return{id:null,song:{},songs:[],tracks:[],playlist:"",srcs:[],url:"",line:0,lineHeight:64,scrollTop:0,c_pos:4,lyricObj:[],nolyric:!1,color:"#169af3",audio:null,playOrder:!1,duration:0,current:0,paused:!0,loading:!1,seek:!1}},filters:{palyTime:function(t){var e=Math.floor(t/60),n=parseInt(t%60);return e+="",n+="",e=1==e.length?"0"+e:e,n=1==n.length?"0"+n:n,e+":"+n}},watch:{current:function(t){var e=this;if(!this.nolyric)for(var n=0,i=this.lyricObj.length;n<i;n++)if(this.lyricObj[n+1]&&+this.lyricObj[n].time<=t&&t<+this.lyricObj[n+1].time){this.line=n,this.line>this.c_pos&&uni.createSelectorQuery().select("#line".concat(this.line-this.c_pos)).scrollOffset((function(t){e.scrollTop=t.dataset.top})).exec();break}}},onLoad:function(t){var e=this;return(0,r.default)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.id=t.id,e.playlist=t.playlist,e.tracks=e.playlist.split(","),e.getSongDetail(),e.initData();case 5:case"end":return n.stop()}}),n)})))()},onUnload:function(){this.audio.destroy()},methods:{initData:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getSongsUrl();case 2:return e.next=4,t.getLyric();case 4:t.playSong();case 5:case"end":return e.stop()}}),e)})))()},getSongsUrl:function(){var t=this;return new Promise((function(e,n){t.$API({url:"/song/url?id=".concat(t.playlist)}).then((function(n){var i=n.data.data;t.tracks.map((function(e,n){i.map((function(i){e==i.id&&i.url&&t.srcs.push({id:i.id,url:i.url,index:n})}))})),e()}))}))},getSongDetail:function(){var t=this;this.$API({url:"/song/detail?ids=".concat(this.id)}).then((function(e){t.songs=e.data.songs,t.song=t.songs[0];var n=t;uni.setNavigationBarTitle({title:n.song.name})}))},getLyric:function(){var t=this;return new Promise((function(e,n){t.$API({url:"/lyric?id=".concat(t.id)}).then((function(n){if(n.data.lrc){t.nolyric=!1;var i=n.data.lrc.lyric.split("\n"),r=/\[\d*:\d*\.\d*\]/g,o=/\[\d*/i,a=/\:\d*/i,s=/\.\d*/i,c=[];i.forEach((function(t){var e=t.match(r);if(e){e=e[0];var n=e.match(o)[0].substr(1),i=e.match(a)[0].substr(1),u=e.match(s)[0].substr(1),l=60*parseInt(n)+parseInt(i)+"."+u,d=t.replace(r,"").trim();c.push({time:l,text:d})}})),t.lyricObj=c}else t.nolyric=!0;e()}))}))},playSong:function(){var t=this;this.srcs.map((function(e){e.id==t.id&&(t.url=e.url)})),this.audio=uni.createInnerAudioContext(),this.audio.src=this.url,this.audio.autoplay=!0,this.line=0,this.scrollTop=0,this.audio.onCanplay((function(){t.duration=t.audio.duration})),this.audio.onPlay((function(){t.paused=!1})),this.audio.onPause((function(){t.paused=!0})),this.audio.onTimeUpdate((function(){t.seek||(t.current=t.audio.currentTime),t.duration||(t.duration=t.audio.duration),t.duration.toFixed(0)===t.current.toFixed(0)&&(t.line=0,t.scrollTop=0)})),this.audio.onEnded((function(){t.playOrder?(t.paused=!0,t.current=0):t.next(1)})),this.audio.onSeeked((function(){t.seek=!1}))},next:function(t){for(var e=t,n=0,i=this.srcs.length;n<i;n++)if(this.srcs[n].id==this.id){this.id=1==e?n==i-1?this.srcs[0].id:this.srcs[n+e].id:0==n?this.srcs[i-1].id:this.srcs[n+e].id;break}this.current=0,this.getSongDetail(),this.getLyric(),this.audio.destroy(),this.playSong()},continuePlay:function(){this.playOrder=!this.playOrder,this.playOrder?(uni.showToast({icon:"none",title:"单曲循环",position:"bottom"}),this.audio.loop=!0):(uni.showToast({icon:"none",title:"列表循环",position:"bottom"}),this.audio.loop=!1)}}});e.default=o},e874:function(t,e,n){"use strict";n.r(e);var i=n("7942"),r=n("f6d5");for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("659b");var a,s=n("f0c5"),c=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"261c0eb8",null,!1,i["a"],a);e["default"]=c.exports},f6d5:function(t,e,n){"use strict";n.r(e);var i=n("cd9a"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a}}]);