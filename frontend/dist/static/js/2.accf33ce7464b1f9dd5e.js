webpackJsonp([2],{"6s7v":function(e,t){},GZEg:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("mvHQ"),r=a.n(o),l=a("P9l9"),s={data:function(){return{filters:{name:""},project:[],total:0,page:1,listLoading:!1,sels:[],addFormVisible:!1,addLoading:!1,addFormRules:{CompanyName:[{required:!0,message:"请输入公司名称",trigger:"blur"},{min:1,max:128,message:"长度在 1 到 128 个字符",trigger:"blur"}],CompanyAddress:[{required:!0,message:"请输入公司地址",trigger:"blur"},{min:1,max:1024,message:"长度在 1 到 1024 个字符",trigger:"blur"}],ComplainData:[{required:!0,message:"请输入投诉内容",trigger:"blur"}]},addForm:{CompanyName:"",CompanyAddress:"",ComplainData:""}}},methods:{getCompanyBlackList:function(){this.listLoading=!0;var e=this,t={page:e.page,name:e.filters.name};Object(l.d)({},t).then(function(t){e.listLoading=!1;var a=t.msg,o=t.code,r=t.data;"999999"===o?(e.total=r.total,e.project=r.data):e.$message.error({message:a,center:!0})})},handleCurrentChange:function(e){this.page=e,this.getCompanyBlackList()},handleAdd:function(){this.addFormVisible=!0},addSubmit:function(){var e=this;this.$refs.addForm.validate(function(t){if(t){var a=e;e.$confirm("确认提交吗？","提示",{}).then(function(){a.addLoading=!0;var e=r()(a.addForm);Object(l.a)(e).then(function(e){var t=e.msg,o=e.code;e.data;a.addLoading=!1,"999999"===o?(a.$message({message:"添加成功，待管理员审核",center:!0,type:"success"}),a.$refs.addForm.resetFields(),a.addFormVisible=!1,a.getCompanyBlackList()):"999997"===o?a.$message.error({message:t,center:!0}):(a.$message.error({message:t,center:!0}),a.$refs.addForm.resetFields(),a.addFormVisible=!1,a.getCompanyBlackList())})})}})}},mounted:function(){this.getCompanyBlackList()}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[a("el-form",{attrs:{inline:!0,model:e.filters}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"名称"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.getCompanyBlackList(t):null}},model:{value:e.filters.name,callback:function(t){e.$set(e.filters,"name",t)},expression:"filters.name"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.getCompanyBlackList}},[e._v("查询")])],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.handleAdd}},[e._v("新增")])],1)],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.project,"highlight-current-row":""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left"}},[a("el-form-item",{attrs:{label:"公司名称: "}},[a("span",[e._v(e._s(t.row.CompanyName))])]),e._v(" "),a("el-form-item",{attrs:{label:"公司地址： "}},[a("span",[e._v(e._s(t.row.CompanyAddress))])]),e._v(" "),a("el-form-item",{attrs:{label:"添加时间： "}},[a("span",[e._v(e._s(t.row.createTime))])]),e._v(" "),a("el-form-item",{attrs:{label:"投诉内容： "}},[a("span",[e._v(e._s(t.row.ComplainData))])])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"CompanyName",label:"公司名称","min-width":"20%",sortable:"","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"CompanyAddress",label:"公司地址","min-width":"27%",sortable:"","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"ComplainData",label:"投诉内容","min-width":"47%",sortable:"","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"添加时间","min-width":"16%",sortable:"","show-overflow-tooltip":""}})],1),e._v(" "),a("el-col",{staticClass:"toolbar",attrs:{span:24}},[a("el-pagination",{staticStyle:{float:"right"},attrs:{layout:"prev, pager, next","page-size":20,"page-count":e.total},on:{"current-change":e.handleCurrentChange}})],1),e._v(" "),a("el-dialog",{staticStyle:{width:"75%",left:"12.5%"},attrs:{title:"新增",visible:e.addFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.addFormVisible=t}}},[a("el-form",{ref:"addForm",attrs:{model:e.addForm,"label-width":"80px",rules:e.addFormRules}},[a("el-form-item",{attrs:{label:"公司名称",prop:"CompanyName"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.addForm.CompanyName,callback:function(t){e.$set(e.addForm,"CompanyName","string"==typeof t?t.trim():t)},expression:"addForm.CompanyName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"公司地址",prop:"CompanyAddress"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.addForm.CompanyAddress,callback:function(t){e.$set(e.addForm,"CompanyAddress","string"==typeof t?t.trim():t)},expression:"addForm.CompanyAddress"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"投诉内容",prop:"ComplainData"}},[a("el-input",{attrs:{type:"textarea",rows:6},model:{value:e.addForm.ComplainData,callback:function(t){e.$set(e.addForm,"ComplainData",t)},expression:"addForm.ComplainData"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{nativeOn:{click:function(t){e.addFormVisible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.addLoading},nativeOn:{click:function(t){return e.addSubmit(t)}}},[e._v("提交")])],1)],1)],1)},staticRenderFns:[]};var i=a("VU/8")(s,n,!1,function(e){a("6s7v")},"data-v-4bd90b50",null);t.default=i.exports},mvHQ:function(e,t,a){e.exports={default:a("qkKv"),__esModule:!0}},qkKv:function(e,t,a){var o=a("FeBl"),r=o.JSON||(o.JSON={stringify:JSON.stringify});e.exports=function(e){return r.stringify.apply(r,arguments)}}});