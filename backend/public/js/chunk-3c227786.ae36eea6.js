(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c227786"],{"55c1":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"lifetime"},[t._m(0),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-12 col-lg-6"},[a("label",{class:{"text-danger":!t.code},attrs:{for:"countrySearch"}},[t._v("Country*")]),a("search",{attrs:{id:"countrySearch",multiple:!1},on:{select:function(e){return t.code=e.code},remove:function(e){return t.code=null}}})],1),a("div",{staticClass:"form-group col-12 col-lg-6"},[a("label",{class:{"text-danger":!t.age},attrs:{for:"ageInput"}},[t._v("Age*")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.age,expression:"age"}],staticClass:"form-control",attrs:{id:"ageInput",type:"number",min:"0",placeholder:"Age"},domProps:{value:t.age},on:{input:function(e){e.target.composing||(t.age=e.target.value)}}})])]),t.visible?a("v-chart",{attrs:{options:t.options}}):t._e()],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{staticClass:"text-primary font-weight-bold pb-3"},[t._v("\n    How the situation has changed\n    "),a("br"),t._v("during your lifetime?\n  ")])}],r=a("59ad"),s=a.n(r),o=(a("96cf"),a("3b8d")),c=a("c106"),l=a("93fc"),u=["#246A73","#6E4555"],h="Raleway, sans-serif",f={options:{color:u,tooltip:{trigger:"axis"},legend:{data:["Total","Per Capita"],textStyle:{fontFamily:h}},xAxis:{type:"category",data:[],axisTick:{alignWithLabel:!0},textStyle:{fontFamily:h}},yAxis:{type:"value",axisLabel:{formatter:function(t){return screen.width<=768?"":"".concat(t," kt")}},textStyle:{fontFamily:h}},series:[{name:"Total",data:[],type:"line",smooth:!0},{name:"Per Capita",data:[],type:"line",smooth:!0}]}},p=a("2ef0"),d=a.n(p),m={name:"lifetime",data:function(){return{code:null,country:null,age:null,options:f.options}},computed:{visible:function(){return this.country&&this.age}},watch:{code:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!e){t.next=6;break}return t.next=3,l["a"].get(e);case 3:t.t0=t.sent,t.next=7;break;case 6:t.t0=null;case 7:this.country=t.t0,this.refreshChart();case 9:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),age:function(){this.refreshChart()}},methods:{getData:function(t){return d.a.map(d.a.takeRight(this.country.emissions,this.age),t)},refreshChart:function(){this.visible&&(this.options.xAxis.data=this.getData("year"),this.options.series[0].data=this.getData("value"),this.options.series[1].data=d.a.map(this.getData("valuePerCapita"),function(t){return t?s()(t.toFixed(5)):null}))}},components:{Search:c["a"]}},g=m,v=(a("a5e0"),a("2877")),y=Object(v["a"])(g,n,i,!1,null,"07583f20",null);e["default"]=y.exports},a5e0:function(t,e,a){"use strict";var n=a("ca3c"),i=a.n(n);i.a},ca3c:function(t,e,a){}}]);
//# sourceMappingURL=chunk-3c227786.ae36eea6.js.map