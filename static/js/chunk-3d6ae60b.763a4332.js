(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d6ae60b"],{"0c6d":function(e,t,r){"use strict";r("d3b7");var s=r("bc3a"),a=r.n(s),o=r("5c96"),n=r("4360"),l=r("2f4d"),i=void 0,c=a.a.create({baseURL:"http://leju.bufan.cloud",timeout:5e3});c.interceptors.request.use((function(e){return Object(l["a"])()&&(e.headers["token"]=Object(l["a"])()),e}),(function(e){return console.log(e),Promise.reject(e)})),c.interceptors.response.use((function(e){var t=e.data;return 2e4!==t.code?(Object(o["Message"])({message:t.message||"Error",type:"error",duration:5e3}),20002===t.code&&(Object(l["c"])(),Object(l["d"])(),i.$router.push("/login")),50008!==t.code&&50012!==t.code&&50014!==t.code||o["MessageBox"].confirm("You have been logged out, you can cancel to stay on this page, or log in again","Confirm logout",{confirmButtonText:"Re-Login",cancelButtonText:"Cancel",type:"warning"}).then((function(){n["a"].dispatch("user/resetToken").then((function(){location.reload()}))})),Promise.reject(new Error(t.message||"Error"))):t}),(function(e){return console.log("err"+e),Object(o["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)})),t["a"]=c},4267:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"order-detail-main"},[r("el-card",{staticClass:"margin-30",attrs:{shadow:"never"}},[r("el-steps",{staticClass:"order-steps",attrs:{active:e.orderBase.status}},[r("el-step",{attrs:{title:"待付款",description:e.orderBase.createTime}}),r("el-step",{attrs:{title:"待发货",description:e.orderBase.paymentTime}}),r("el-step",{attrs:{title:"已发货",description:e.orderBase.deliveryTime}}),4!==e.orderBase.status?r("el-step",{attrs:{title:"已完成",description:e.orderBase.receiveTime}}):e._e(),3!==e.orderBase.status?r("el-step",{attrs:{title:"退货",description:"退货时间"}}):e._e(),3!==e.orderBase.status&&4!==e.orderBase.status?r("el-step",{attrs:{title:"无效订单",description:"订单无效"}}):e._e()],1),r("div",[r("h4",{staticStyle:{display:"inline-block"}},[e._v("订单信息:")]),0==e.orderBase.status?r("el-tag",{attrs:{type:"success",size:"mini",effect:"dark"}},[e._v("微信")]):e._e(),1==e.orderBase.status?r("el-tag",{attrs:{type:"primary",size:"mini",effect:"dark"}},[e._v("支付宝")]):e._e(),2==e.orderBase.status?r("el-tag",{attrs:{type:"info",size:"mini",effect:"dark"}},[e._v("未支付")]):e._e(),3==e.orderBase.status?r("el-tag",{attrs:{type:"success",size:"mini",effect:"dark"}},[e._v("微信")]):e._e(),4==e.orderBase.status?r("el-tag",{attrs:{type:"primary",size:"mini",effect:"dark"}},[e._v("支付宝")]):e._e(),5==e.orderBase.status?r("el-tag",{attrs:{type:"primary",size:"mini",effect:"dark"}},[e._v("支付宝")]):e._e(),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:6,offset:0}},[r("p",[e._v("订单金额: "),r("span",{staticStyle:{color:"red"}},[e._v(e._s(e.orderBase.totalAmount))])])]),r("el-col",{attrs:{span:6,offset:0}},[r("p",[e._v("订单编号:"),r("span",[e._v(e._s(e.orderBase.orderSn))])])]),r("el-col",{attrs:{span:6,offset:0}},[r("p",[e._v("用户账号:"),r("span",[e._v(e._s(e.orderBase.memberUsername))])])]),r("el-col",{attrs:{span:6,offset:0}},[r("p",[e._v("备注:"),r("span",[e._v(e._s(e.orderBase.note))])])])],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:6,offset:0}},[r("p",[e._v("下单时间: "),r("span",{staticStyle:{color:"red"}},[e._v(e._s(e.orderBase.createTime))])])]),r("el-col",{attrs:{span:6,offset:0}},[r("p",[e._v("付款时间:"),r("span",[e._v(e._s(e.orderBase.paymentTime))])])]),r("el-col",{attrs:{span:6,offset:0}},[r("p",[e._v("发货时间:"),r("span",[e._v(e._s(e.orderBase.deliveryTime))])])]),r("el-col",{attrs:{span:6,offset:0}},[r("p",[e._v("收货时间:"),r("span",[e._v(e._s(e.orderBase.receiveTime))])])])],1)],1),r("div",[r("h4",[e._v("收货人信息")]),r("div",[r("el-table",{attrs:{data:e.orderItems,border:"",stripe:""}},[r("el-table-column",{attrs:{prop:"productName",label:"商品名称",width:200},scopedSlots:e._u([{key:"default",fn:function(e){return[r("img",{attrs:{align:"center",width:"180",src:e.row.productPic,alt:""}})]}}])}),r("el-table-column",{attrs:{label:"是否退货",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[0==t.row.isReturn?r("span",[e._v("否")]):e._e(),1==t.row.isReturn?r("span",{staticStyle:{color:"red"}},[e._v("是")]):e._e()]}}])}),r("el-table-column",{attrs:{label:"品牌",prop:"productBrand",align:"center"}}),r("el-table-column",{attrs:{label:"价格",prop:"productPrice",align:"center"}}),r("el-table-column",{attrs:{label:"数量",prop:"productQuantity",align:"center"}}),r("el-table-column",{attrs:{label:"小计",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(t.row.productQuantity*t.row.productPrice))])]}}])})],1)],1),r("div",[r("h4",[e._v("费用信息")]),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:6,offset:0}},[r("p",[e._v("运费金额:"),r("span",{staticStyle:{color:"red"}},[e._v("0")])])]),r("el-col",{attrs:{span:6,offset:0}},[r("p",[e._v("订单总金额:"),r("span",{staticStyle:{color:"red"}},[e._v(e._s(e.orderBase.totalAmount))])])]),r("el-col",{attrs:{span:6,offset:0}},[r("p",[e._v("实际金额:"),r("span",{staticStyle:{color:"red"}},[e._v(e._s(e.orderBase.payAmount))])])]),r("el-col",{attrs:{span:6,offset:0}},[r("p",[e._v("促销优惠金额:"),r("span",{staticStyle:{color:"red"}},[e._v("0")])])])],1)],1)]),1==e.orderBase.status?r("div",[e._v(" 发货表单 "),r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px",size:"normal"}},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:6,offset:0}},[r("el-form-item",{attrs:{label:"物流公司",prop:"deliveryCompany"}},[1==e.orderBase.status?r("el-select",{attrs:{placeholder:"请选择物流公司"},model:{value:e.form.deliveryCompany,callback:function(t){e.$set(e.form,"deliveryCompany",t)},expression:"form.deliveryCompany"}},e._l(e.expressList,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.label}})})),1):e._e()],1)],1),r("el-col",{attrs:{span:6,offset:0}},[r("el-form-item",{attrs:{label:"物流单号",prop:"deliverySn"}},[r("el-input",{attrs:{placeholder:"请填写物流单号"},model:{value:e.form.deliverySn,callback:function(t){e.$set(e.form,"deliverySn",t)},expression:"form.deliverySn"}})],1)],1)],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:20,offset:0}},[r("el-form-item",{attrs:{align:"center"}},[r("el-button",{attrs:{type:"primary"},on:{click:e.sendDone}},[e._v("确认发货")])],1)],1)],1)],1)],1):e._e(),2==e.orderBase.status||3==e.orderBase.status?r("div",[e._v(" 物流信息")]):e._e()],1)],1)},a=[],o=r("dea0"),n={name:"OrderDetail",data:function(){return{orderBase:{},orderItems:[],orderId:"",expressList:[{value:"选项1",label:"顺丰快递"},{value:"选项2",label:"韵达快递"},{value:"选项3",label:"中国邮政"},{value:"选项4",label:"申通快递"},{value:"选项5",label:"中通快递"}],form:{deliverySn:"",deliveryCompany:""},rules:{deliveryCompany:[{required:!0,message:"请填写物流公司",trigger:"change"}],deliverySn:[{required:!0,message:"请填写物流单号",trigger:"blur"}]}}},components:{},computed:{},created:function(){this.orderId=this.$route.params.orderId,this.getOrderDetail()},methods:{sendDone:function(){var e=this;Object(o["c"])({orderId:this.orderId,deliverySn:this.form.deliverySn,deliveryCompany:this.form.deliveryCompany}).then((function(t){var r=t.success;r?(e.$message.success("确定发货成功"),e.getOrderDetail()):e.$message.error("确定发货失败")})).catch((function(t){e.$message.error("确认发货失败")}))},getOrderDetail:function(){var e=this;Object(o["b"])(this.orderId).then((function(t){var r=t.success,s=t.data,a=t.message;console.log(t),r?(e.orderBase=s.orderDetail.orderBase,e.orderItems=s.orderDetail.orderItems):e.$message.error(a)}))}}},l=n,i=(r("6dca"),r("2877")),c=Object(i["a"])(l,s,a,!1,null,"33aafc06",null);t["default"]=c.exports},"64cc":function(e,t,r){},"6dca":function(e,t,r){"use strict";r("64cc")},dea0:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return n}));r("99af");var s=r("0c6d");function a(e,t,r){return Object(s["a"])({url:"/lejuAdmin/order/findOrdersByPage/".concat(e,"/").concat(t),method:"post",data:r})}function o(e){return Object(s["a"])({url:"/lejuAdmin/order/orderDetail/".concat(e),method:"get"})}function n(e){return Object(s["a"])({url:"/lejuAdmin/order/sendDone",method:"post",data:e})}}}]);