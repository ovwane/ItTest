webpackJsonp([7],{j7e0:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={data:function(){return{sysName:"成都软件测试",collapsed:!1,sysUserName:"",form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}},methods:{onSubmit:function(){console.log("submit!")},handleselect:function(e,t){},collapse:function(){this.collapsed=!this.collapsed},showMenu:function(e,t){this.$refs.menuCollapsed.getElementsByClassName("submenu-hook-"+e)[0].style.display=t?"block":"none"}},mounted:function(){var e=sessionStorage.getItem("username");e&&(name=JSON.parse(e),this.sysUserName=name||"")}},n={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-row",{staticClass:"container"},[s("el-col",{staticClass:"header",attrs:{span:24}},[s("el-col",{staticClass:"logo",class:e.collapsed?"logo-collapse-width":"logo-width",attrs:{span:10}},[e._v("\n            "+e._s(e.collapsed?"":e.sysName)+"\n        ")]),e._v(" "),s("el-col",{attrs:{span:10}},[s("div",{staticClass:"tools",on:{click:function(t){return t.preventDefault(),e.collapse(t)}}},[s("i",{staticClass:"fa fa-align-justify"})])]),e._v(" "),s("el-col",{staticClass:"userinfo",attrs:{span:4}},[s("div",{staticStyle:{float:"left"}},[s("div",{staticClass:"userinfo-inner",staticStyle:{height:"23px",float:"left"}},[e._v("\n                    QQ群：599733338\n                ")]),e._v(" "),s("div",{staticStyle:{color:"#fff","font-size":"60%",float:"left"}},[e._v("\n                    愿所有在群的朋友，能够发挥本群的价值\n                ")])])])],1),e._v(" "),s("el-col",{staticClass:"main",attrs:{span:24}},[s("aside",{class:e.collapsed?"menu-collapsed":"menu-expanded"},[e.collapsed?e._e():s("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":e.$route.path,"unique-opened":"",router:""},on:{select:e.handleselect}},[e._l(e.$router.options.routes,function(t){return t.M?e._e():e._l(t.children,function(t){return t.hidden?e._e():s("el-menu-item",{key:t.path,attrs:{index:t.path}},[s("i",{class:t.iconCls}),e._v(e._s(t.name))])})})],2)],1),e._v(" "),s("section",{staticClass:"content-container"},[s("div",{staticClass:"grid-content bg-purple-light"},[s("el-col",{staticClass:"breadcrumb-container",attrs:{span:24}},[s("strong",{staticClass:"title"},[e._v(e._s(e.$route.name))]),e._v(" "),s("el-breadcrumb",{staticClass:"breadcrumb-inner",attrs:{separator:"/"}},e._l(e.$route.matched,function(t){return s("el-breadcrumb-item",{key:t.path},[e._v("\n                            "+e._s(t.name)+"\n                        ")])}))],1),e._v(" "),s("el-col",{staticClass:"content-wrapper",attrs:{span:24}},[s("transition",{attrs:{name:"fade",mode:"out-in"}},[s("router-view")],1)],1)],1),e._v(" "),s("div",{staticClass:"foot"},[e._v("\n              站点很脆弱，请不要恶意攻击。\n            ")])])])],1)},staticRenderFns:[]};var l=s("VU/8")(a,n,!1,function(e){s("xiVT")},"data-v-2e3b3e2c",null);t.default=l.exports},xiVT:function(e,t){}});