(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-165981ce"],{"0c6d":function(e,t,a){"use strict";a("d3b7");var o=a("bc3a"),n=a.n(o),r=a("5c96"),s=a("4360"),l=a("2f4d"),i=void 0,c=n.a.create({baseURL:"http://leju.bufan.cloud",timeout:5e3});c.interceptors.request.use((function(e){return Object(l["a"])()&&(e.headers["token"]=Object(l["a"])()),e}),(function(e){return console.log(e),Promise.reject(e)})),c.interceptors.response.use((function(e){var t=e.data;return 2e4!==t.code?(Object(r["Message"])({message:t.message||"Error",type:"error",duration:5e3}),20002===t.code&&(Object(l["c"])(),Object(l["d"])(),i.$router.push("/login")),50008!==t.code&&50012!==t.code&&50014!==t.code||r["MessageBox"].confirm("You have been logged out, you can cancel to stay on this page, or log in again","Confirm logout",{confirmButtonText:"Re-Login",cancelButtonText:"Cancel",type:"warning"}).then((function(){s["a"].dispatch("user/resetToken").then((function(){location.reload()}))})),Promise.reject(new Error(t.message||"Error"))):t}),(function(e){return console.log("err"+e),Object(r["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)})),t["a"]=c},"1b62":function(e,t,a){"use strict";var o=a("2f4d");t["a"]={data:function(){return{uploadFileOss:"/lejuAdmin/material/uploadFileOssSave",uploadUrl1:"/lejuAdmin/material/uploadFileOss",uploadUrl:"/lejuAdmin/material/uploadFileOssSave",uploadHeaders:{token:Object(o["a"])()},pagniationParams:{start:1,limit:10,totalNum:0,pageSizes:[10,20,30,40]},loadingOption:{background:"rgba(255,255,255,.9)",text:"loading.....",spinner:"el-icon-loading"}}},computed:{token:function(){return{token:Object(o["a"])()}}}}},"782b":function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"f",(function(){return i})),a.d(t,"g",(function(){return c})),a.d(t,"d",(function(){return l})),a.d(t,"c",(function(){return s})),a.d(t,"e",(function(){return n})),a.d(t,"b",(function(){return u}));a("99af");var o=a("0c6d");function n(){return Object(o["a"])({url:"/lejuAdmin/brand/findAllBrand",method:"get"})}function r(e){return Object(o["a"])({url:"/lejuAdmin/brand/addBrand",method:"post",data:e})}function s(e,t){return Object(o["a"])({url:"/lejuAdmin/brand/findBrandByPage/".concat(e,"/").concat(t),method:"get"})}function l(e){return Object(o["a"])({url:"/lejuAdmin/brand/delBrand/".concat(e),method:"delete"})}function i(e){return Object(o["a"])({url:"/lejuAdmin/brand/switchShowStatus",method:"post",data:e})}function c(e){return Object(o["a"])({url:"/lejuAdmin/brand/updateBrand",method:"post",data:e})}function u(){return Object(o["a"])({url:"/lejuAdmin/brand/findAllBrand",method:"get"})}},"9c43":function(e,t,a){},a434:function(e,t,a){"use strict";var o=a("23e7"),n=a("23cb"),r=a("a691"),s=a("50c4"),l=a("7b0b"),i=a("65f0"),c=a("8418"),u=a("1dde"),d=a("ae40"),p=u("splice"),f=d("splice",{ACCESSORS:!0,0:0,1:2}),m=Math.max,b=Math.min,h=9007199254740991,g="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!p||!f},{splice:function(e,t){var a,o,u,d,p,f,v=l(this),w=s(v.length),y=n(e,w),k=arguments.length;if(0===k?a=o=0:1===k?(a=0,o=w-y):(a=k-2,o=b(m(r(t),0),w-y)),w+a-o>h)throw TypeError(g);for(u=i(v,o),d=0;d<o;d++)p=y+d,p in v&&c(u,d,v[p]);if(u.length=o,a<o){for(d=y;d<w-o;d++)p=d+o,f=d+a,p in v?v[f]=v[p]:delete v[f];for(d=w;d>w-o+a;d--)delete v[d-1]}else if(a>o)for(d=w-o;d>y;d--)p=d+o-1,f=d+a-1,p in v?v[f]=v[p]:delete v[f];for(d=0;d<a;d++)v[d+y]=arguments[d+2];return v.length=w-o+a,u}})},adf1:function(e,t,a){"use strict";a("9c43")},b191:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return r}));a("99af");var o=a("0c6d");function n(e,t,a){return Object(o["a"])({url:"/lejuAdmin/product/productsByPage/".concat(e,"/").concat(t),method:"post",data:a})}function r(e){return Object(o["a"])({url:"/lejuAdmin/product/addProductAndSkus",method:"post",data:e})}},cd9d:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"goods-list-main"},[a("el-collapse",{staticClass:"margin-30"},[a("el-collapse-item",{attrs:{title:"条件查询"}},[a("el-form",{ref:"form",attrs:{model:e.searchGoods,"label-width":"120px",size:"mini"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:6,offset:0}},[a("el-form-item",{attrs:{label:"商品名称"}},[a("el-input",{attrs:{placeholder:"商品名称/模糊查询"},model:{value:e.searchGoods.keywords,callback:function(t){e.$set(e.searchGoods,"keywords",t)},expression:"searchGoods.keywords"}})],1)],1),a("el-col",{attrs:{span:5,offset:0}},[a("el-form-item",{attrs:{label:"商品货号"}},[a("el-input",{attrs:{placeholder:"商品货号"},model:{value:e.searchGoods.categoryId,callback:function(t){e.$set(e.searchGoods,"categoryId",t)},expression:"searchGoods.categoryId"}})],1)],1),a("el-col",{attrs:{span:5,offset:0}},[a("el-form-item",{attrs:{label:"品牌"}},[a("el-select",{attrs:{placeholder:"品牌",clearable:"",filterable:""},model:{value:e.searchGoods.brandId,callback:function(t){e.$set(e.searchGoods,"brandId",t)},expression:"searchGoods.brandId"}},e._l(e.brandList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1),a("el-col",{attrs:{span:6,offset:0}},[a("el-form-item",{attrs:{label:"上架状态"}},[a("el-select",{attrs:{placeholder:"上架状态",clearable:"",filterable:""},model:{value:e.searchGoods.isDesc,callback:function(t){e.$set(e.searchGoods,"isDesc",t)},expression:"searchGoods.isDesc"}},[a("el-option",{attrs:{label:"下架",value:0}}),a("el-option",{attrs:{label:"上架",value:1}})],1)],1)],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:6,offset:0}},[a("el-form-item",{attrs:{label:"审核状态"}},[a("el-select",{attrs:{placeholder:"审核状态",clearable:"",filterable:""},model:{value:e.searchGoods.sortBy,callback:function(t){e.$set(e.searchGoods,"sortBy",t)},expression:"searchGoods.sortBy"}},[a("el-option",{attrs:{label:"未审核",value:0}}),a("el-option",{attrs:{label:"审核通过",value:1}})],1)],1)],1),a("el-col",{attrs:{span:6,offset:12}},[a("el-form-item",[a("el-button",[e._v("重置")]),a("el-button",{attrs:{type:"primary"},on:{click:e.doSearchGoods}},[e._v("搜索")])],1)],1)],1)],1)],1)],1),a("el-card",{staticClass:"margin-30",attrs:{shadow:"always"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.goAddGoods}},[e._v("新增")]),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.exportExcel}},[e._v("导出商品Excel")])],1),a("el-table",{attrs:{data:e.goodsList,border:"",stripe:""}},[a("el-table-column",{attrs:{label:"序号",type:"index",width:"50",align:"center"}}),a("el-table-column",{attrs:{label:"商品图片",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{attrs:{width:"180",src:e.row.pic,alt:""}})]}}])}),a("el-table-column",{attrs:{label:"商品名称",prop:"name",align:"center"}}),a("el-table-column",{attrs:{label:"商品价格",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[e._v("原价:"+e._s(t.row.price)+" ")]),!t.row.promotionPrice?e._e():a("div",[e._v("现价:"+e._s(t.row.promotionPrice)+" ")])]}}])}),a("el-table-column",{attrs:{label:"商品类别",prop:"productCategoryName",align:"center"}}),a("el-table-column",{attrs:{label:"标签1",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[e._v(" 最新: "),a("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(e){}},model:{value:t.row.newStatus,callback:function(a){e.$set(t.row,"newStatus",a)},expression:"scope.row.newStatus"}})],1),a("div",[e._v(" 推荐: "),a("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(e){}},model:{value:t.row.recommendStatus,callback:function(a){e.$set(t.row,"recommendStatus",a)},expression:"scope.row.recommendStatus"}})],1)]}}])}),a("el-table-column",{attrs:{label:"标签2",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[e._v(" 发布: "),a("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(e){}},model:{value:t.row.publishStatus,callback:function(a){e.$set(t.row,"publishStatus",a)},expression:"scope.row.publishStatus"}})],1),a("div",[e._v(" 审核: "),a("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(e){}},model:{value:t.row.verifyStatus,callback:function(a){e.$set(t.row,"verifyStatus",a)},expression:"scope.row.verifyStatus"}})],1)]}}])}),a("el-table-column",{attrs:{label:"sku",prop:"sort",align:"center"}},[a("el-link",{attrs:{type:"primary",underline:!1}},[e._v("编辑sku")])],1),a("el-table-column",{attrs:{label:"重量",prop:"weight",align:"center"}}),a("el-table-column",{attrs:{label:"排序",prop:"sort",align:"center"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:e.editGoods}},[e._v("编辑")]),a("el-button",{staticStyle:{color:"red"},attrs:{type:"text",size:"small"},nativeOn:{click:function(a){return a.preventDefault(),e.deleteRow(t.$index,e.goodsList)}}},[e._v("删除")])]}}])})],1),a("el-pagination",{staticStyle:{"margin-top":"10px","text-align":"right"},attrs:{"page-size":e.pagniationParams.limit,total:e.pagniationParams.totalNum,layout:"total, sizes, prev, pager, next, jumper","page-sizes":e.pagniationParams.pageSizes,"current-page":e.pagniationParams.start},on:{"update:currentPage":function(t){return e.$set(e.pagniationParams,"start",t)},"update:current-page":function(t){return e.$set(e.pagniationParams,"start",t)},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},n=[],r=(a("a434"),a("d3b7"),a("3ca3"),a("ddb0"),a("d81d"),a("782b")),s=a("b191"),l=a("1b62"),i={name:"goodslist",mixins:[l["a"]],data:function(){return{searchGoods:{},brandList:[],goodsList:[]}},components:{},computed:{},created:function(){this.getBrandList(),this.getGoodsList(),console.log(this.getGoodsList())},methods:{editGoods:function(){this.$router.push({path:"/product/addGoods"})},deleteRow:function(e,t){t.splice(e,1)},exportExcel:function(){var e=this;Promise.all([a.e("chunk-e2403282"),a.e("chunk-5cbb5a04"),a.e("chunk-2d0cc0b6")]).then(a.bind(null,"4bf8")).then((function(t){var a=["品牌名称","商品名称","价格","重量","添加时间"],o=["brandName","name","price","weight","createTime"],n=e.goodsList,r=e.formatJson(o,n);t.export_json_to_excel({header:a,data:r,filename:"测试",autoWidth:!0,bookType:"xlsx"}),e.downloadLoading=!1}))},formatJson:function(e,t){return t.map((function(t){return e.map((function(e){return"timestamp"===e?parseTime(t[e]):t[e]}))}))},goAddGoods:function(){this.$router.push({name:"AddGoods"})},getBrandList:function(){var e=this;Object(r["e"])().then((function(t){var a=t.success,o=t.data,n=t.message;a?e.brandList=o.items:e.$messege.error(n)}))},doSearchGoods:function(){this.getGoodsList()},getGoodsList:function(){var e=this;Object(s["c"])(this.pagniationParams.start,this.pagniationParams.limit,this.searchGoods).then((function(t){var a=t.success,o=t.data,n=t.message;console.log(t),a?(e.goodsList=o.rows,e.pagniationParams.totalNum=o.total):e.$messege.error(n)}))},handleSizeChange:function(e){this.limit=e,this.start=1,this.getGoodsList()},handleCurrentChange:function(e){this.start=e,this.getGoodsList()}}},c=i,u=(a("adf1"),a("2877")),d=Object(u["a"])(c,o,n,!1,null,"03e5cdc6",null);t["default"]=d.exports}}]);