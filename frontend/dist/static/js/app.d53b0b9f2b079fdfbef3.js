webpackJsonp([6],{"782C":function(n,e){},NHnr:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={};t.d(o,"increment",function(){return l}),t.d(o,"decrement",function(){return f});var u={};t.d(u,"getCount",function(){return h});var c={render:function(){var n=this.$createElement,e=this._self._c||n;return e("div",{attrs:{id:"app"}},[e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("router-view")],1)],1)},staticRenderFns:[]};var i=t("VU/8")({name:"app",components:{}},c,!1,function(n){t("782C")},null,null).exports,r=t("/ocq"),a=t("lRwf"),s=t.n(a),p=t("NYxO"),l=function(n){(0,n.commit)("INCREMENT")},f=function(n){(0,n.commit)("DECREMENT")},h=function(n){return n.count};s.a.use(p.a);var d=new p.a.Store({actions:o,getters:u,state:{count:10},mutations:{INCREMENT:function(n){n.count++},DECREMENT:function(n){n.count--}}}),m=[{path:"/404",component:function(n){return t.e(3).then(function(){var e=[t("7FDS")];n.apply(null,e)}.bind(this)).catch(t.oe)},name:"",hidden:!0,projectHidden:!0},{path:"/",component:function(n){return t.e(4).then(function(){var e=[t("j7e0")];n.apply(null,e)}.bind(this)).catch(t.oe)},name:"",projectHidden:!0,children:[{path:"/FeedView",component:function(n){return t.e(0).then(function(){var e=[t("7Djs")];n.apply(null,e)}.bind(this)).catch(t.oe)},iconCls:"el-icon-message",name:"金玉良言"},{path:"/Resource",component:function(n){return t.e(1).then(function(){var e=[t("SiQE")];n.apply(null,e)}.bind(this)).catch(t.oe)},iconCls:"el-icon-share",name:"无私奉献"},{path:"/About",component:function(n){return t.e(2).then(function(){var e=[t("FBzZ")];n.apply(null,e)}.bind(this)).catch(t.oe)},iconCls:"el-icon-info",name:"关于我们"}]}];t("j1ja");Vue.config.productionTip=!1,Vue.use(ELEMENT),Vue.use(MINT),Vue.use(r.a),Vue.use(p.a);var E=new r.a({routes:m});E.beforeEach(function(n,e,t){"/"===n.path?(console.log(n.path),t({path:"/FeedView"})):t()}),new Vue({router:E,store:d,render:function(n){return n(i)}}).$mount("#app")},lRwf:function(n,e){n.exports=Vue}},["NHnr"]);