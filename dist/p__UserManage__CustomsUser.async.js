(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[29],{mimW:function(e,a,t){"use strict";t.r(a);var l,r,s,n,o=t("jehZ"),i=t.n(o),c=t("p0pE"),d=t.n(c),m=t("2Taf"),u=t.n(m),p=t("vZ4D"),E=t.n(p),b=t("l4Ni"),v=t.n(b),h=t("ujKo"),C=t.n(h),f=t("MhPg"),g=t.n(f),y=t("q1tI"),w=t.n(y),F=t("MuoO"),V=t("Y2fQ"),k=t("bmkC"),I=t("zHco"),S=t("wd/R"),M=t.n(S),D=t("glGN"),q=t.n(D),O=k["Form"].Item,U=k["Select"].Option,x=k["Form"].create()(function(e){var a=e.modalVisible,t=e.form,l=e.handleEdit,r=e.handleModalVisible,s=e.modalInfo,n=e.customsOptions,o=function(){t.validateFields(function(e,a){e||(t.resetFields(),l(a,s))})};return w.a.createElement(k["Modal"],{destroyOnClose:!0,title:"\u7528\u6237\u4fe1\u606f\u4fee\u6539",style:{top:10},visible:a,onOk:o,onCancel:function(){return r()}},w.a.createElement(O,{labelCol:{span:5},wrapperCol:{span:15},label:"\u7528\u6237\u540d"},t.getFieldDecorator("username",{initialValue:s.username,rules:[{required:!0,message:Object(V["formatMessage"])({id:"validation.username.required"})}]})(w.a.createElement(k["Input"],{placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d",disabled:!0}))),w.a.createElement(O,{labelCol:{span:5},wrapperCol:{span:15},label:"\u5bc6\u7801"},t.getFieldDecorator("password",{initialValue:s.password,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"}]})(w.a.createElement(k["Input"],{placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801"}))),w.a.createElement(O,{labelCol:{span:5},wrapperCol:{span:15},label:"\u624b\u673a"},t.getFieldDecorator("tel",{initialValue:s.tel,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u624b\u673a"}]})(w.a.createElement(k["Input"],{placeholder:"\u8bf7\u8f93\u5165\u624b\u673a"}))),w.a.createElement(O,{labelCol:{span:5},wrapperCol:{span:15},label:"\u53ef\u89c1\u6027"},t.getFieldDecorator("isvisible",{initialValue:s.isvisible,rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u624b\u673a\u53ef\u89c1\u6027"}]})(w.a.createElement(k["Select"],{placeholder:"\u8bf7\u9009\u62e9\u53ef\u89c1\u6027",style:{width:"100%"}},w.a.createElement(U,{value:"\u53ef\u89c1"},"\u53ef\u89c1"),w.a.createElement(U,{value:"\u4e0d\u53ef\u89c1"},"\u4e0d\u53ef\u89c1")))),w.a.createElement(O,{labelCol:{span:5},wrapperCol:{span:15},label:"\u6240\u5728\u5355\u4f4d"},t.getFieldDecorator("company",{initialValue:s.company,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6240\u5728\u5355\u4f4d"}]})(w.a.createElement(k["Select"],{style:{width:"100%"},placeholder:"\u8bf7\u8f93\u5165\u6240\u5728\u5355\u4f4d"},n))),w.a.createElement(O,{labelCol:{span:5},wrapperCol:{span:15},label:"\u804c\u52a1"},t.getFieldDecorator("workduty",{initialValue:s.workduty,rules:[{required:!0,message:"\u804c\u52a1"}]})(w.a.createElement(k["Select"],{style:{width:"100%"},placeholder:"\u8bf7\u9009\u62e9\u516c\u53f8\u804c\u52a1"},w.a.createElement(U,{value:"\u5173\u957f"},"\u5173\u957f"),w.a.createElement(U,{value:"\u526f\u5173\u957f"},"\u526f\u5173\u957f"),w.a.createElement(U,{value:"\u5904\u957f"},"\u5904\u957f"),w.a.createElement(U,{value:"\u526f\u5904\u957f"},"\u526f\u5904\u957f"),w.a.createElement(U,{value:"\u79d1\u957f"},"\u79d1\u957f"),w.a.createElement(U,{value:"\u526f\u79d1\u957f"},"\u526f\u79d1\u957f"),w.a.createElement(U,{value:"\u79d1\u5458"},"\u79d1\u5458"),w.a.createElement(U,{value:"\u529e\u4e8b\u5458"},"\u529e\u4e8b\u5458")))),w.a.createElement(O,{labelCol:{span:5},wrapperCol:{span:15},label:"\u89d2\u8272"},t.getFieldDecorator("role",{initialValue:s.role,rules:[{required:!0,message:"\u89d2\u8272"}]})(w.a.createElement(k["Select"],{style:{width:"100%"},placeholder:"\u8bf7\u9009\u62e9\u89d2\u8272\uff0c\u53ef\u4ee5\u9009\u62e9\u4e00\u9879\u6216\u591a\u9879",mode:"tags"},w.a.createElement(U,{value:"\u7ba1\u7406\u5458"},"\u7ba1\u7406\u5458"),w.a.createElement(U,{value:"\u5ba1\u67e5\u5458"},"\u5ba1\u67e5\u5458")))),w.a.createElement(O,{labelCol:{span:5},wrapperCol:{span:15},label:"\u5ba1\u6838\u72b6\u6001"},t.getFieldDecorator("ispass",{initialValue:s.ispass,rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u5ba1\u6838\u72b6\u6001"}]})(w.a.createElement(k["Select"],{placeholder:"\u8bf7\u9009\u62e9\u5ba1\u6838\u72b6\u6001",style:{width:"100%"}},w.a.createElement(U,{value:"\u901a\u8fc7"},"\u901a\u8fc7"),w.a.createElement(U,{value:"\u4e0d\u901a\u8fc7"},"\u4e0d\u901a\u8fc7")))))}),j=k["Form"].create()(function(e){var a=e.addModalVisible,t=e.form,l=e.handleAdd,r=e.addHandleModalVisible,s=e.dispatch,n=e.customsOptions,o=function(){t.validateFields(function(e,a){e||(t.resetFields(),l(a))})},i=function(e,a,t){s({type:"CustomsUser/getRepeatUsername",payload:{username:a},callback:function(e){void 0===e||"error"===e?t(Object(V["formatMessage"])({id:"validation.userExist.error"})):"repeat"===e?t(Object(V["formatMessage"])({id:"validation.userExist.repeated"})):t()}})};return w.a.createElement(k["Modal"],{destroyOnClose:!0,title:"\u7528\u6237\u4fe1\u606f\u65b0\u589e",style:{top:10},visible:a,onOk:o,onCancel:function(){return r()}},w.a.createElement(O,{labelCol:{span:5},wrapperCol:{span:15},label:"\u7528\u6237\u540d"},t.getFieldDecorator("username",{rules:[{required:!0,message:Object(V["formatMessage"])({id:"validation.username.required"})},{validator:i}]})(w.a.createElement(k["Input"],{placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"}))),w.a.createElement(O,{labelCol:{span:5},wrapperCol:{span:15},label:"\u5bc6\u7801"},t.getFieldDecorator("password",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"}]})(w.a.createElement(k["Input"],{placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801"}))),w.a.createElement(O,{labelCol:{span:5},wrapperCol:{span:15},label:"\u59d3\u540d"},t.getFieldDecorator("nameC",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u59d3\u540d"}]})(w.a.createElement(k["Input"],{placeholder:"\u8bf7\u8f93\u5165\u59d3\u540d"}))),w.a.createElement(O,{labelCol:{span:5},wrapperCol:{span:15},label:"\u624b\u673a"},t.getFieldDecorator("tel",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u624b\u673a"}]})(w.a.createElement(k["Input"],{placeholder:"\u8bf7\u8f93\u5165\u624b\u673a"}))),w.a.createElement(O,{labelCol:{span:5},wrapperCol:{span:15},label:"\u53ef\u89c1\u6027"},t.getFieldDecorator("isvisible",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u624b\u673a\u53ef\u89c1\u6027"}]})(w.a.createElement(k["Select"],{placeholder:"\u8bf7\u9009\u62e9\u53ef\u89c1\u6027",style:{width:"100%"}},w.a.createElement(U,{value:"\u53ef\u89c1"},"\u53ef\u89c1"),w.a.createElement(U,{value:"\u4e0d\u53ef\u89c1"},"\u4e0d\u53ef\u89c1")))),w.a.createElement(O,{labelCol:{span:5},wrapperCol:{span:15},label:"\u6240\u5728\u5355\u4f4d"},t.getFieldDecorator("company",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6240\u5728\u5355\u4f4d"}]})(w.a.createElement(k["Select"],{style:{width:"100%"},placeholder:"\u8bf7\u8f93\u5165\u6240\u5728\u5355\u4f4d"},n))),w.a.createElement(O,{labelCol:{span:5},wrapperCol:{span:15},label:"\u804c\u52a1"},t.getFieldDecorator("workduty",{rules:[{required:!0,message:"\u804c\u52a1"}]})(w.a.createElement(k["Select"],{style:{width:"100%"},placeholder:"\u8bf7\u9009\u62e9\u516c\u53f8\u804c\u52a1"},w.a.createElement(U,{value:"\u5173\u957f"},"\u5173\u957f"),w.a.createElement(U,{value:"\u526f\u5173\u957f"},"\u526f\u5173\u957f"),w.a.createElement(U,{value:"\u5904\u957f"},"\u5904\u957f"),w.a.createElement(U,{value:"\u526f\u5904\u957f"},"\u526f\u5904\u957f"),w.a.createElement(U,{value:"\u79d1\u957f"},"\u79d1\u957f"),w.a.createElement(U,{value:"\u526f\u79d1\u957f"},"\u526f\u79d1\u957f"),w.a.createElement(U,{value:"\u79d1\u5458"},"\u79d1\u5458"),w.a.createElement(U,{value:"\u529e\u4e8b\u5458"},"\u529e\u4e8b\u5458")))),w.a.createElement(O,{labelCol:{span:5},wrapperCol:{span:15},label:"\u89d2\u8272"},t.getFieldDecorator("role",{rules:[{required:!0,message:"\u89d2\u8272"}]})(w.a.createElement(k["Select"],{style:{width:"100%"},placeholder:"\u8bf7\u9009\u62e9\u89d2\u8272\uff0c\u53ef\u4ee5\u9009\u62e9\u4e00\u9879\u6216\u591a\u9879",mode:"tags"},w.a.createElement(U,{value:"\u7ba1\u7406\u5458"},"\u7ba1\u7406\u5458"),w.a.createElement(U,{value:"\u5ba1\u67e5\u5458"},"\u5ba1\u67e5\u5458")))),w.a.createElement(O,{labelCol:{span:5},wrapperCol:{span:15},label:"\u5ba1\u6838\u72b6\u6001"},t.getFieldDecorator("ispass",{initialValue:"\u901a\u8fc7",rules:[{required:!0,message:"\u8bf7\u5ba1\u6838"}]})(w.a.createElement(k["Select"],{placeholder:"\u8bf7\u5ba1\u6838",style:{width:"100%"}},w.a.createElement(U,{value:"\u901a\u8fc7"},"\u901a\u8fc7"),w.a.createElement(U,{value:"\u4e0d\u901a\u8fc7"},"\u4e0d\u901a\u8fc7")))))}),N=(l=Object(F["connect"])(function(e){var a=e.CustomsUser,t=e.loading;return{CustomsUser:a,loading:t.models.CustomsUser}}),r=k["Form"].create(),l(s=r((n=function(e){function a(){var e,t;u()(this,a);for(var l=arguments.length,r=new Array(l),s=0;s<l;s++)r[s]=arguments[s];return t=v()(this,(e=C()(a)).call.apply(e,[this].concat(r))),t.state={modalVisible:!1,addModalVisible:!1,modalInfo:{},dataSource:[],customs:[]},t.columns=[{title:"\u7528\u6237\u540d",dataIndex:"username"},{title:"\u5bc6\u7801",dataIndex:"password"},{title:"\u59d3\u540d",dataIndex:"nameC"},{title:"\u624b\u673a\u53ef\u89c1\u6027",dataIndex:"isvisible"},{title:"\u7535\u8bdd",dataIndex:"tel"},{title:"\u6240\u5728\u5355\u4f4d",dataIndex:"company"},{title:"\u804c\u52a1",dataIndex:"workduty"},{title:"\u89d2\u8272",dataIndex:"role"},{title:"\u5ba1\u6838\u72b6\u6001",dataIndex:"ispass"},{title:"\u64cd\u4f5c",render:function(e,a){return w.a.createElement(y["Fragment"],null,w.a.createElement("a",{onClick:function(){return t.modifyItem(e,a)}},"\u4fee\u6539"),"\xa0\xa0",w.a.createElement("a",{onClick:function(){return t.deleteItem(e,a)}},"\u5220\u9664"))}}],t.init=function(){var e=t.props.dispatch,a={};e({type:"CustomsUser/getCustomsUserList",payload:a,callback:function(e){200===e.code&&(t.state.dataSource=e.data)}}),e({type:"CustomsUser/getCustomsList",payload:a,callback:function(e){200===e.code&&(t.state.customs=e.data)}})},t.handleFormReset=function(){var e=t.props.form;e.resetFields(),t.init()},t.handleSearch=function(e){e.preventDefault();var a=t.props,l=a.dispatch,r=a.form;r.validateFields(function(e,a){if(!e){var r={kind:a.kind.trim(),value:a.value.trim()};l({type:"CustomsUser/getCustomsUserList",payload:r,callback:function(e){e&&(t.state.dataSource=e.data)}})}})},t.isValidDate=function(e){return void 0!==e&&null!==e?w.a.createElement("span",null,M()(e).format("YYYY-MM-DD")):[]},t.modifyItem=function(e){var a=Object.assign({},e);if(void 0!==a.role&&null!==a.role){var l=a.role.split(" ");a.role=l}else a.role=[];t.setState({modalInfo:a}),t.handleModalVisible(!0)},t.deleteItem=function(e){k["Modal"].confirm({title:"\u786e\u5b9a\u5220\u9664\u5417\uff1f",okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){var a=t.props.dispatch,l=d()({},e);a({type:"CustomsUser/deleteCustomsUser",payload:l,callback:function(e){"success"===e?(t.init(),k["message"].success("\u5220\u9664\u6210\u529f")):k["message"].success("\u5220\u9664\u5931\u8d25")}})}})},t.addItem=function(){t.addHandleModalVisible(!0)},t.handleModalVisible=function(e){t.setState({modalVisible:!!e})},t.addHandleModalVisible=function(e){t.setState({addModalVisible:!!e})},t.handleEdit=function(e,a){var l=t.props.dispatch,r=a;r.username=e.username,r.password=e.password,r.isvisible=e.isvisible,r.tel=e.tel,r.company=e.company,r.nameC=e.nameC,r.ispass=e.ispass,r.workduty=e.workduty,r.role=e.role;var s=d()({},r);l({type:"CustomsUser/updateCustomsUser",payload:s,callback:function(e){"success"===e?(k["message"].success("\u4fdd\u5b58\u6210\u529f"),t.init()):k["message"].success("\u4fdd\u5b58\u5931\u8d25")}}),t.setState({modalVisible:!1})},t.handleAdd=function(e){var a=t.props.dispatch,l=d()({},e);t.setState({addModalVisible:!1}),t.state.dataSource.find(function(a){return a.username===e.username})?k["message"].success("\u6dfb\u52a0\u7528\u6237\u5df2\u5b58\u5728"):a({type:"CustomsUser/addCustomsUser",payload:l,callback:function(e){"success"===e?(k["message"].success("\u4fdd\u5b58\u6210\u529f"),t.init()):k["message"].success("\u4fdd\u5b58\u5931\u8d25")}})},t}return g()(a,e),E()(a,[{key:"componentDidMount",value:function(){this.init()}},{key:"renderSimpleForm",value:function(){var e=this.props.form.getFieldDecorator;return w.a.createElement(k["Form"],{onSubmit:this.handleSearch,layout:"inline"},w.a.createElement(k["Row"],{gutter:{md:8,lg:24,xl:48}},w.a.createElement(k["Col"],{md:3,sm:20},w.a.createElement(k["Form"].Item,{labelCol:{span:5},wrapperCol:{span:6},colon:!1},e("kind",{initialValue:"username",rules:[{message:"\u641c\u7d22\u7c7b\u578b"}]})(w.a.createElement(k["Select"],{placeholder:"\u641c\u7d22\u7c7b\u578b"},w.a.createElement(U,{value:"username"},"\u7528\u6237\u540d"),w.a.createElement(U,{value:"nameC"},"\u59d3\u540d"),w.a.createElement(U,{value:"password"},"\u5bc6\u7801"),w.a.createElement(U,{value:"isvisible"},"\u7535\u8bdd\u53ef\u89c1\u6027"),w.a.createElement(U,{value:"tel"},"\u7535\u8bdd"),w.a.createElement(U,{value:"company"},"\u6240\u5728\u5355\u4f4d\u540d\u79f0"))))),w.a.createElement(k["Col"],{md:6,sm:20},w.a.createElement(O,null,e("value",{rules:[{message:"\u641c\u7d22\u6570\u636e"}]})(w.a.createElement(k["Input"],{placeholder:"\u8bf7\u8f93\u5165"})))),w.a.createElement(k["Col"],{md:8,sm:20},w.a.createElement("span",{className:q.a.submitButtons},w.a.createElement(k["Button"],{type:"primary",htmlType:"submit"},"\u67e5\u8be2"),w.a.createElement(k["Button"],{style:{marginLeft:8},onClick:this.handleFormReset},"\u91cd\u7f6e"),w.a.createElement(k["Button"],{type:"primary",style:{marginLeft:8},onClick:this.addItem},"\u65b0\u589e")))))}},{key:"render",value:function(){var e=this.props,a=e.loading,t=e.dispatch,l=this.state,r=l.modalVisible,s=l.modalInfo,n=l.addModalVisible,o=l.dataSource,c=l.customs,d=c.map(function(e){return w.a.createElement(U,{key:e.customsName,value:e.customsName},e.customsName)}),m={handleEdit:this.handleEdit,handleAdd:this.handleAdd,handleModalVisible:this.handleModalVisible,addHandleModalVisible:this.addHandleModalVisible};return w.a.createElement(I["a"],null,w.a.createElement(k["Card"],{bordered:!1,size:"small"},w.a.createElement("div",{className:q.a.tableList},w.a.createElement(x,i()({},m,{modalVisible:r,modalInfo:s,dispatch:t,customsOptions:d})),w.a.createElement(j,i()({},m,{addModalVisible:n,dispatch:t,customsOptions:d})),w.a.createElement("div",{className:q.a.tableListForm},this.renderSimpleForm()),w.a.createElement(k["Table"],{size:"middle",loading:a,dataSource:o,columns:this.columns,rowKey:"itemno",pagination:{showQuickJumper:!0,showSizeChanger:!0}}))))}}]),a}(y["PureComponent"]),s=n))||s)||s);a["default"]=N}}]);