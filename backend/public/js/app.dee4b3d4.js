(function(e){function t(t){for(var r,s,c=t[0],i=t[1],u=t[2],l=0,d=[];l<c.length;l++)s=c[l],a[s]&&d.push(a[s][0]),a[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var i=n[s];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d0c8bc4":"8232aa9f"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=a[e]=[t,r]});t.push(n[2]=r);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=s(e),o=function(t){i.onerror=i.onload=null,clearTimeout(u);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");s.type=r,s.request=o,n[1](s)}a[e]=void 0}};var u=setTimeout(function(){o({type:"timeout",target:i})},12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var p=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0b21":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container h-100"},[n("div",{staticClass:"row h-100 align-items-center"},[n("div",{staticClass:"col-lg-12"},[n("nav",{staticClass:"navbar navbar-expand-md px-0",attrs:{id:"nav"}},[n("div",{staticClass:"navbar-nav mr-auto"},[n("router-link",{attrs:{to:"/"}},[n("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:["fas","smog"],size:"lg"}}),n("span",{staticClass:"page-title text-uppercase"},[n("span",{staticClass:"mr-0"},[e._v("CO")]),n("span",{staticClass:"sub"},[e._v("2")]),n("span",{staticClass:"mx-2"},[e._v("emissions")])])],1)],1),n("div",{staticClass:"navbar-nav ml-auto"},[n("router-link",{attrs:{to:"/lifetime"}},[n("font-awesome-icon",{attrs:{icon:["fas","user-astronaut"],size:"lg"}})],1)],1)]),n("router-view")],1)])])])},o=[],s=(n("5c0b"),n("2877")),c={},i=Object(s["a"])(c,a,o,!1,null,null,null),u=i.exports,l=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",[n("search",{staticClass:"pb-3",attrs:{multiple:!0},on:{select:e.add,remove:e.remove}}),n("div",{staticClass:"form-check"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.perCapita,expression:"perCapita"}],staticClass:"form-check-input",attrs:{id:"perCapitaCheckbox",type:"checkbox"},domProps:{checked:Array.isArray(e.perCapita)?e._i(e.perCapita,null)>-1:e.perCapita},on:{change:function(t){var n=e.perCapita,r=t.target,a=!!r.checked;if(Array.isArray(n)){var o=null,s=e._i(n,o);r.checked?s<0&&(e.perCapita=n.concat([o])):s>-1&&(e.perCapita=n.slice(0,s).concat(n.slice(s+1)))}else e.perCapita=a}}}),n("label",{staticClass:"form-check-label",attrs:{for:"perCapitaCheckbox"}},[e._v("Per capita")])])],1)])},d=[],f=(n("96cf"),n("3b8d")),m=n("c106"),v=n("bc3a"),h=n.n(v),b=n("2ef0"),g=n.n(b),C={name:"home",data:function(){return{countries:[],perCapita:!1}},methods:{add:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("/countries",{responseType:"json",params:{compact:"false",codes:t.code}});case 3:n=e.sent,n.data.length&&(this.countries.push(n.data[0]),console.log(this.countries)),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.error(e.t0);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}(),remove:function(e){g.a.remove(this.countries,{code:e.code}),console.log(this.countries)}},components:{Search:m["a"]}},y=C,w=Object(s["a"])(y,p,d,!1,null,null,null),k=w.exports;r["a"].use(l["a"]);var x=new l["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:k},{path:"/lifetime",name:"lifetime",component:function(){return n.e("chunk-2d0c8bc4").then(n.bind(null,"55c1"))}}]}),_=n("ecee"),j=n("c074"),O=n("ad3d");_["c"].add(j["b"]),_["c"].add(j["c"]),_["c"].add(j["a"]),r["a"].component("font-awesome-icon",O["a"]),r["a"].config.productionTip=!1,new r["a"]({router:x,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),a=n.n(r);a.a},"5e27":function(e,t,n){},"9b1e":function(e,t,n){"use strict";var r=n("0b21"),a=n.n(r);a.a},c106:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("multiselect",{attrs:{options:e.countries,multiple:e.multiple,searchable:!0,limit:5,"max-height":600,openDirection:"below",placeholder:e.multiple?"Countries":"Country",label:"name","track-by":"code"},on:{select:e.select,remove:e.remove},scopedSlots:e._u([{key:"tag",fn:function(t){var r=t.option,a=t.remove;return[n("span",{staticClass:"badge badge-pill badge-primary badge-country p-1"},[n("span",{staticClass:"mr-1"},[e._v(e._s(r.name))]),n("span",{staticClass:"badge-country-remove",on:{click:function(e){return a(r)}}},[n("font-awesome-icon",{attrs:{icon:["fas","times-circle"]}})],1)])]}}]),model:{value:e.selectedCountries,callback:function(t){e.selectedCountries=t},expression:"selectedCountries"}},[n("span",{attrs:{slot:"noResult"},slot:"noResult"},[e._v("Oops! No countries found.")])])],1)},a=[],o=(n("96cf"),n("3b8d")),s=n("8e5f"),c=n.n(s),i=n("bc3a"),u=n.n(i),l={name:"Search",data:function(){return{selectedCountries:[],countries:[]}},props:{multiple:Boolean},mounted:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.countries||!this.countries.length){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,u.a.get("/countries?compact=true",{responseType:"json"});case 5:t=e.sent,this.countries=t.data,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](2),console.error(e.t0);case 12:case"end":return e.stop()}},e,this,[[2,9]])}));function t(){return e.apply(this,arguments)}return t}(),methods:{select:function(e){this.$emit("select",e)},remove:function(e){this.$emit("remove",e)}},components:{Multiselect:c.a}},p=l,d=(n("9b1e"),n("2877")),f=Object(d["a"])(p,r,a,!1,null,"b89823e6",null);t["a"]=f.exports}});
//# sourceMappingURL=app.dee4b3d4.js.map