(function(e){function t(t){for(var n,a,o=t[0],c=t[1],u=t[2],l=0,p=[];l<o.length;l++)a=o[l],i[a]&&p.push(i[a][0]),i[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);f&&f(t);while(p.length)p.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,a=1;a<r.length;a++){var o=r[a];0!==i[o]&&(n=!1)}n&&(s.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},i={app:0},s=[];function o(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-3c227786":"7f90645b"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={"chunk-3c227786":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise(function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-3c227786":"2106bbad"}[e]+".css",i=c.p+n,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var u=s[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===i))return t()}var p=document.getElementsByTagName("style");for(o=0;o<p.length;o++){u=p[o],l=u.getAttribute("data-href");if(l===n||l===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||i,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.request=n,delete a[e],f.parentNode.removeChild(f),r(s)},f.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(f)}).then(function(){a[e]=0}));var n=i[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise(function(t,r){n=i[e]=[t,r]});t.push(n[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(e),u=function(t){l.onerror=l.onload=null,clearTimeout(p);var r=i[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+n+": "+a+")");s.type=n,s.request=a,r[1](s)}i[e]=void 0}};var p=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var f=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"16db":function(e,t,r){},"4ef0":function(e,t,r){"use strict";var n=r("fe5c"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"container h-100"},[r("div",{staticClass:"row h-100 align-items-center"},[r("div",{staticClass:"col-lg-12"},[r("nav",{staticClass:"navbar navbar-expand-md px-0",attrs:{id:"nav"}},[r("div",{staticClass:"navbar-nav mr-auto"},[r("router-link",{attrs:{to:"/"}},[r("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:["fas","smog"],size:"lg"}}),r("span",{staticClass:"page-title text-uppercase"},[r("span",{staticClass:"mr-0"},[e._v("CO")]),r("span",{staticClass:"sub"},[e._v("2")]),r("span",{staticClass:"mx-2"},[e._v("emissions")])])],1)],1),r("div",{staticClass:"navbar-nav ml-auto"},[r("router-link",{attrs:{to:"/lifetime"}},[r("font-awesome-icon",{attrs:{icon:["fas","user-astronaut"],size:"lg"}})],1)],1)]),r("router-view")],1)])])])},i=[],s=(r("5c0b"),r("2877")),o={},c=Object(s["a"])(o,a,i,!1,null,null,null),u=c.exports,l=r("8c4f"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("div",[r("search",{staticClass:"pb-3",attrs:{multiple:!0},on:{select:function(t){return e.push(t.code)},remove:function(t){return e.remove(t.code)}}}),r("div",{staticClass:"form-check mb-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.perCapita,expression:"perCapita"}],staticClass:"form-check-input",attrs:{id:"perCapitaCheckbox",type:"checkbox"},domProps:{checked:Array.isArray(e.perCapita)?e._i(e.perCapita,null)>-1:e.perCapita},on:{change:function(t){var r=e.perCapita,n=t.target,a=!!n.checked;if(Array.isArray(r)){var i=null,s=e._i(r,i);n.checked?s<0&&(e.perCapita=r.concat([i])):s>-1&&(e.perCapita=r.slice(0,s).concat(r.slice(s+1)))}else e.perCapita=a}}}),r("label",{staticClass:"form-check-label",attrs:{for:"perCapitaCheckbox"}},[e._v("Per capita")])]),e.visible?[e._m(0),r("v-chart",{attrs:{options:e.options}}),r("vue-slider",{attrs:{data:e.years,marks:!0,interval:10,tooltip:"always"},scopedSlots:e._u([{key:"label",fn:function(t){var n=t.active,a=t.value;return[r("div",{class:["vue-slider-mark-label","custom-label",{active:n}]},[e._v(e._s(a%5===0?a:""))])]}},{key:"tooltip",fn:function(t){var n=t.value;return[r("div",{staticClass:"custom-tooltip"},[e._v(e._s(n))])]}}],null,!1,1838764307),model:{value:e.year,callback:function(t){e.year=t},expression:"year"}})]:e._e()],2)])},f=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row justify-content-md-center"},[r("div",[e._v("Low Income")]),r("div",{staticClass:"legend-income__gradient col-6 mx-3"}),r("div",[e._v("High Income")])])}],d=(r("7514"),r("96cf"),r("3b8d")),m=r("2ef0"),h=r.n(m),v=r("59ad"),y=r.n(v),b=(r("7f7f"),{"High income":"#246A73","Upper middle income":"#1F8A84","Lower middle income":"#3DA989","Low income":"#71C784"}),g="#CCCCCC",C="#2A272A",w="Raleway, sans-serif",x="path://M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48 0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8 0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8 26.5 0 48-21.5 48-48s-21.5-48-48-48z",k={options:{tooltip:{trigger:"axis",axisPointer:{type:"none"},textStyle:{fontFamily:w},formatter:function(e){return e[0].name+": "+(e[0].value?y()(e[0].value.toFixed(5)):"NA")}},yAxis:{data:[],axisTick:{show:!1},axisLine:{show:!1},axisLabel:{textStyle:{color:C,fontFamily:w},formatter:function(e){var t=12;return e.length>t?e.substr(0,t-1)+"…":e}},inverse:!0},xAxis:{axisTick:{show:!1},axisLine:{show:!1}},color:[C],series:[{name:"bar",type:"bar",itemStyle:{color:function(e){return b[e.data.income]||g}},data:[]},{name:"glyph",type:"pictorialBar",symbolPosition:"end",symbolSize:16,symbolOffset:[24,0],symbol:x,itemStyle:{color:function(){return"#DDDC4C"}},data:[]}]}},_=r("93fc"),j=r("c106"),A=r("4971"),O=r.n(A),S=(r("24df"),{name:"home",data:function(){return{years:null,year:null,countries:[],perCapita:!1,options:k.options}},watch:{perCapita:function(){this.refreshChart()},year:function(){this.refreshChart()}},computed:{property:function(){return this.perCapita?"valuePerCapita":"value"},visible:function(){return this.countries.length}},methods:{push:function(){var e=Object(d["a"])(regeneratorRuntime.mark(function e(t){var r,n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,_["a"].get(t);case 2:r=e.sent,r&&(this.countries.splice(h.a.sortedIndexBy(this.countries,r,"name"),0,r),this.years=this.years||h.a.map(r.emissions,"year"),n=h.a.takeRight(h.a.dropRightWhile(r.emissions,[this.property,null]))[0],a=n?n.year:this.year||h.a.takeRight(r.emissions)[0].year,this.year===a?this.refreshChart():this.year=a);case 4:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),remove:function(e){h.a.remove(this.countries,{code:e}),this.refreshChart()},refreshChart:function(){this.options.yAxis.data=h.a.map(this.countries,"name");var e=this;this.options.series[0].data=h.a.map(this.countries,function(t){return{value:h.a.find(t.emissions,function(t){return t.year===e.year})[e.property],income:t.income}}),this.options.series[1].data=h.a.map(this.countries,function(t){return{value:t.superpower?h.a.find(t.emissions,function(t){return t.year===e.year})[e.property]:null}})}},components:{Search:j["a"],VueSlider:O.a}}),P=S,R=(r("ef9b"),Object(s["a"])(P,p,f,!1,null,"2af25ec0",null)),T=R.exports;n["default"].use(l["a"]);var E=new l["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:T},{path:"/lifetime",name:"lifetime",component:function(){return r.e("chunk-3c227786").then(r.bind(null,"55c1"))}}]}),L=r("ecee"),N=r("c074"),$=r("ad3d"),B=r("9ca8");r("ef97"),r("94b1"),r("aadf"),r("c037"),r("007d"),r("d28f"),r("5450"),r("db0e"),r("95a8");L["c"].add(N["b"]),L["c"].add(N["c"]),L["c"].add(N["a"]),n["default"].component("font-awesome-icon",$["a"]),n["default"].component("v-chart",B["a"]),n["default"].config.productionTip=!1,new n["default"]({router:E,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("5e27"),a=r.n(n);a.a},"5e27":function(e,t,r){},"93fc":function(e,t,r){"use strict";r("96cf");var n=r("3b8d"),a=r("bc3a"),i=r.n(a);t["a"]={get:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("/countries/"+t,{responseType:"json",params:{fields:"code name income superpower emissions"}});case 3:return r=e.sent,console.log(r),e.abrupt("return",r.data);case 8:e.prev=8,e.t0=e["catch"](0),console.error(e.t0);case 11:case"end":return e.stop()}},e,null,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}(),getAll:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("/countries",{responseType:"json",params:{fields:"code name"}});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e["catch"](0),console.error(e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));function t(){return e.apply(this,arguments)}return t}()}},c106:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("multiselect",{attrs:{options:e.countries,multiple:e.multiple,searchable:!0,limit:5,"max-height":600,openDirection:"below",placeholder:e.multiple?"Countries":"Country",label:"name","track-by":"code"},on:{select:e.select,remove:e.remove},scopedSlots:e._u([{key:"tag",fn:function(t){var n=t.option,a=t.remove;return[r("span",{staticClass:"badge badge-pill badge-primary badge-country p-1"},[r("span",{staticClass:"mr-1"},[e._v(e._s(n.name))]),r("span",{staticClass:"badge-country-remove",on:{click:function(e){return a(n)}}},[r("font-awesome-icon",{attrs:{icon:["fas","times-circle"]}})],1)])]}}]),model:{value:e.selectedCountries,callback:function(t){e.selectedCountries=t},expression:"selectedCountries"}},[r("span",{attrs:{slot:"noResult"},slot:"noResult"},[e._v("Oops! No countries found.")])])],1)},a=[],i=(r("96cf"),r("3b8d")),s=r("93fc"),o=r("8e5f"),c=r.n(o),u={name:"Search",data:function(){return{selectedCountries:[],countries:[]}},props:{multiple:Boolean},mounted:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.countries||!this.countries.length){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,s["a"].getAll();case 4:this.countries=e.sent;case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),methods:{select:function(e){this.$emit("select",e)},remove:function(e){this.$emit("remove",e)}},components:{Multiselect:c.a}},l=u,p=(r("4ef0"),r("2877")),f=Object(p["a"])(l,n,a,!1,null,"4595d2a0",null);t["a"]=f.exports},ef9b:function(e,t,r){"use strict";var n=r("16db"),a=r.n(n);a.a},fe5c:function(e,t,r){}});
//# sourceMappingURL=app.86895a3e.js.map