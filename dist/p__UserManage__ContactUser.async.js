(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{ZsCy:function(e,a,t){"use strict";t.r(a);var l,n,r,o,s=t("jehZ"),i=t.n(s),c=t("p0pE"),d=t.n(c),m=t("2Taf"),u=t.n(m),p=t("vZ4D"),b=t.n(p),h=t("l4Ni"),E=t.n(h),f=t("ujKo"),g=t.n(f),C=t("MhPg"),v=t.n(C),y=t("q1tI"),w=t.n(y),F=t("MuoO"),I=t("Y2fQ"),V=t("bmkC"),M=t("zHco"),k=t("wd/R"),S=t.n(k),N=t("glGN"),D=t.n(N),q=V["Form"].Item,O=V["Select"].Option,x=V["Form"].create()(function(e){var a=e.modalVisible,t=e.form,l=e.handleEdit,n=e.handleModalVisible,r=e.modalInfo,o=function(){t.validateFields(function(e,a){e||(t.resetFields(),l(a,r))})};return w.a.createElement(V["Modal"],{destroyOnClose:!0,title:"\u7528\u6237\u4fe1\u606f\u4fee\u6539",style:{top:10},visible:a,onOk:o,onCancel:function(){return n()}},w.a.createElement(q,{labelCol:{span:5},wrapperCol:{span:15},label:"\u7528\u6237\u540d"},t.getFieldDecorator("username",{initialValue:r.username,rules:[{required:!0,message:Object(I["formatMessage"])({id:"validation.username.required"})}]})(w.a.createElement(V["Input"],{placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d",disabled:!0}))),w.a.createElement(q,{labelCol:{span:5},wrapperCol:{span:15},label:"\u5bc6\u7801"},t.getFieldDecorator("password",{initialValue:r.password,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"}]})(w.a.createElement(V["Input"],{placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801"}))),w.a.createElement(q,{labelCol:{span:5},wrapperCol:{span:15},label:"\u59d3\u540d"},t.getFieldDecorator("contactName",{initialValue:r.contactName,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u59d3\u540d"}]})(w.a.createElement(V["Input"],{placeholder:"\u8bf7\u8f93\u5165\u59d3\u540d"}))),w.a.createElement(q,{labelCol:{span:5},wrapperCol:{span:15},label:"\u516c\u53f8"},t.getFieldDecorator("companyName",{initialValue:r.companyName,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u516c\u53f8"}]})(w.a.createElement(V["Input"],{placeholder:"\u8bf7\u8f93\u5165\u516c\u53f8"}))),w.a.createElement(q,{labelCol:{span:5},wrapperCol:{span:15},label:"\u624b\u673a"},t.getFieldDecorator("contactPhone",{initialValue:r.contactPhone,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u624b\u673a"}]})(w.a.createElement(V["Input"],{placeholder:"\u8bf7\u8f93\u5165\u624b\u673a"}))),w.a.createElement(q,{labelCol:{span:5},wrapperCol:{span:15},label:"\u53ef\u89c1\u6027"},t.getFieldDecorator("isvisible",{initialValue:r.isvisible,rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u624b\u673a\u53ef\u89c1\u6027"}]})(w.a.createElement(V["Select"],{placeholder:"\u8bf7\u9009\u62e9\u53ef\u89c1\u6027",style:{width:"100%"}},w.a.createElement(O,{value:"\u53ef\u89c1"},"\u53ef\u89c1"),w.a.createElement(O,{value:"\u4e0d\u53ef\u89c1"},"\u4e0d\u53ef\u89c1")))))}),P=V["Form"].create()(function(e){var a=e.addModalVisible,t=e.form,l=e.handleAdd,n=e.addHandleModalVisible,r=e.dispatch,o=function(){t.validateFields(function(e,a){e||(t.resetFields(),l(a))})},s=function(e,a,t){r({type:"Contact/getRepeatUsername",payload:{username:a},callback:function(e){void 0===e||"error"===e?t(Object(I["formatMessage"])({id:"validation.userExist.error"})):"repeat"===e?t(Object(I["formatMessage"])({id:"validation.userExist.repeated"})):t()}})};return w.a.createElement(V["Modal"],{destroyOnClose:!0,title:"\u7528\u6237\u4fe1\u606f\u65b0\u589e",style:{top:10},visible:a,onOk:o,onCancel:function(){return n()}},w.a.createElement(q,{labelCol:{span:5},wrapperCol:{span:15},label:"\u7528\u6237\u540d"},t.getFieldDecorator("username",{rules:[{required:!0,message:Object(I["formatMessage"])({id:"validation.username.required"})},{validator:s}]})(w.a.createElement(V["Input"],{size:"large",placeholder:Object(I["formatMessage"])({id:"form.username.placeholder"})}))),w.a.createElement(q,{labelCol:{span:5},wrapperCol:{span:15},label:"\u5bc6\u7801"},t.getFieldDecorator("password",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"}]})(w.a.createElement(V["Input"],{placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801"}))),w.a.createElement(q,{labelCol:{span:5},wrapperCol:{span:15},label:"\u59d3\u540d"},t.getFieldDecorator("contactName",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u59d3\u540d"}]})(w.a.createElement(V["Input"],{placeholder:"\u8bf7\u8f93\u5165\u59d3\u540d"}))),w.a.createElement(q,{labelCol:{span:5},wrapperCol:{span:15},label:"\u516c\u53f8"},t.getFieldDecorator("companyName",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u516c\u53f8"}]})(w.a.createElement(V["Input"],{placeholder:"\u8bf7\u8f93\u5165\u516c\u53f8"}))),w.a.createElement(q,{labelCol:{span:5},wrapperCol:{span:15},label:"\u624b\u673a"},t.getFieldDecorator("contactPhone",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u624b\u673a"}]})(w.a.createElement(V["Input"],{placeholder:"\u8bf7\u8f93\u5165\u624b\u673a"}))),w.a.createElement(q,{labelCol:{span:5},wrapperCol:{span:15},label:"\u53ef\u89c1\u6027"},t.getFieldDecorator("isvisible",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u624b\u673a\u53ef\u89c1\u6027"}]})(w.a.createElement(V["Select"],{placeholder:"\u8bf7\u9009\u62e9\u53ef\u89c1\u6027",style:{width:"100%"}},w.a.createElement(O,{value:"\u53ef\u89c1"},"\u53ef\u89c1"),w.a.createElement(O,{value:"\u4e0d\u53ef\u89c1"},"\u4e0d\u53ef\u89c1")))))}),j=(l=Object(F["connect"])(function(e){var a=e.Contact,t=e.loading;return{Contact:a,loading:t.models.Contact}}),n=V["Form"].create(),l(r=n((o=function(e){function a(){var e,t;u()(this,a);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return t=E()(this,(e=g()(a)).call.apply(e,[this].concat(n))),t.state={modalVisible:!1,addModalVisible:!1,modalInfo:{},dataSource:[]},t.columns=[{title:"\u7528\u6237\u540d",dataIndex:"userName"},{title:"\u5bc6\u7801",dataIndex:"password"},{title:"\u59d3\u540d",dataIndex:"contactName"},{title:"\u516c\u53f8",dataIndex:"companyName"},{title:"\u624b\u673a",dataIndex:"contactPhone"},{title:"\u624b\u673a\u53ef\u89c1\u6027",dataIndex:"isvisible"},{title:"\u64cd\u4f5c",render:function(e,a){return w.a.createElement(y["Fragment"],null,w.a.createElement("a",{onClick:function(){return t.modifyItem(e,a)}},"\u4fee\u6539"),"\xa0\xa0",w.a.createElement("a",{onClick:function(){return t.deleteItem(e,a)}},"\u5220\u9664"))}}],t.init=function(){var e=t.props.dispatch,a={};e({type:"Contact/getContactList",payload:a,callback:function(e){e&&(t.state.dataSource=e.data)}})},t.handleFormReset=function(){var e=t.props.form;e.resetFields(),t.init()},t.handleSearch=function(e){e.preventDefault();var a=t.props,l=a.dispatch,n=a.form;n.validateFields(function(e,a){if(!e){var n={kind:a.kind.trim(),value:a.value.trim()};l({type:"Contact/getContactList",payload:n,callback:function(e){e&&(t.state.dataSource=e.data)}})}})},t.isValidDate=function(e){return void 0!==e&&null!==e?w.a.createElement("span",null,S()(e).format("YYYY-MM-DD")):[]},t.modifyItem=function(e){t.setState({modalInfo:e}),t.handleModalVisible(!0)},t.deleteItem=function(e){var a=t.props.dispatch,l=d()({},e);a({type:"Contact/deleteContact",payload:l,callback:function(e){"success"===e?(t.init(),V["message"].success("\u5220\u9664\u6210\u529f")):V["message"].success("\u5220\u9664\u5931\u8d25")}})},t.addItem=function(){t.addHandleModalVisible(!0)},t.handleModalVisible=function(e){t.setState({modalVisible:!!e})},t.addHandleModalVisible=function(e){t.setState({addModalVisible:!!e})},t.handleEdit=function(e,a){var l=t.props.dispatch,n=a;n.username=e.username,n.password=e.password,n.isvisible=e.isvisible,n.contactName=e.contactName,n.contactPhone=e.contactPhone,n.companyName=e.companyName;var r=d()({},n);l({type:"Contact/updateContact",payload:r,callback:function(e){"success"===e?(V["message"].success("\u4fdd\u5b58\u6210\u529f"),t.init()):V["message"].success("\u4fdd\u5b58\u5931\u8d25")}}),t.setState({modalVisible:!1})},t.handleAdd=function(e){var a=t.props.dispatch,l=d()({},e);t.setState({addModalVisible:!1}),t.state.dataSource.find(function(a){return a.username===e.username})?V["message"].success("\u6dfb\u52a0\u9879\u76ee\u5df2\u5b58\u5728"):a({type:"Contact/addContact",payload:l,callback:function(e){"success"===e?(V["message"].success("\u4fdd\u5b58\u6210\u529f"),t.init()):V["message"].success("\u4fdd\u5b58\u5931\u8d25")}})},t}return v()(a,e),b()(a,[{key:"componentDidMount",value:function(){this.init()}},{key:"renderSimpleForm",value:function(){var e=this.props.form.getFieldDecorator;return w.a.createElement(V["Form"],{onSubmit:this.handleSearch,layout:"inline"},w.a.createElement(V["Row"],{gutter:{md:8,lg:24,xl:48}},w.a.createElement(V["Col"],{md:3,sm:20},w.a.createElement(V["Form"].Item,{labelCol:{span:5},wrapperCol:{span:6},colon:!1},e("kind",{initialValue:"username",rules:[{message:"\u641c\u7d22\u7c7b\u578b"}]})(w.a.createElement(V["Select"],{placeholder:"\u641c\u7d22\u7c7b\u578b"},w.a.createElement(O,{value:"username"},"\u7528\u6237\u540d"),w.a.createElement(O,{value:"password"},"\u5bc6\u7801"),w.a.createElement(O,{value:"contactName"},"\u59d3\u540d"),w.a.createElement(O,{value:"companyName"},"\u516c\u53f8"),w.a.createElement(O,{value:"contactPhone"},"\u624b\u673a"),w.a.createElement(O,{value:"isvisible"},"\u624b\u673a\u53ef\u89c1\u6027"))))),w.a.createElement(V["Col"],{md:6,sm:20},w.a.createElement(q,null,e("value",{rules:[{message:"\u641c\u7d22\u6570\u636e"}]})(w.a.createElement(V["Input"],{placeholder:"\u8bf7\u8f93\u5165"})))),w.a.createElement(V["Col"],{md:8,sm:20},w.a.createElement("span",{className:D.a.submitButtons},w.a.createElement(V["Button"],{type:"primary",htmlType:"submit"},"\u67e5\u8be2"),w.a.createElement(V["Button"],{style:{marginLeft:8},onClick:this.handleFormReset},"\u91cd\u7f6e"),w.a.createElement(V["Button"],{type:"primary",style:{marginLeft:8},onClick:this.addItem},"\u65b0\u589e")))))}},{key:"render",value:function(){var e=this.props,a=e.loading,t=e.dispatch,l=this.state,n=l.modalVisible,r=l.modalInfo,o=l.addModalVisible,s=l.dataSource,c={handleEdit:this.handleEdit,handleAdd:this.handleAdd,handleModalVisible:this.handleModalVisible,addHandleModalVisible:this.addHandleModalVisible};return w.a.createElement(M["a"],null,w.a.createElement(V["Card"],{bordered:!1,size:"small"},w.a.createElement("div",{className:D.a.tableList},w.a.createElement(x,i()({},c,{modalVisible:n,modalInfo:r,dispatch:t})),w.a.createElement(P,i()({},c,{addModalVisible:o,dispatch:t})),w.a.createElement("div",{className:D.a.tableListForm},this.renderSimpleForm()),w.a.createElement(V["Table"],{size:"middle",loading:a,dataSource:s,columns:this.columns,rowKey:"itemno",pagination:{showQuickJumper:!0,showSizeChanger:!0}}))))}}]),a}(y["PureComponent"]),r=o))||r)||r);a["default"]=j}}]);