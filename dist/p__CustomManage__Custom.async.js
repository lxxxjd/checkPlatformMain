(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{LR31:function(e,t,a){"use strict";a.r(t);var l,o,s,n,r=a("jehZ"),c=a.n(r),i=a("p0pE"),m=a.n(i),d=a("2Taf"),u=a.n(d),p=a("vZ4D"),b=a.n(p),h=a("l4Ni"),f=a.n(h),y=a("ujKo"),g=a.n(y),C=a("MhPg"),E=a.n(C),v=a("q1tI"),S=a.n(v),T=a("MuoO"),V=(a("Y2fQ"),a("bmkC")),k=a("zHco"),F=a("wd/R"),M=a.n(F),w=a("glGN"),I=a.n(w),N=V["Form"].Item,O=V["Select"].Option,D=V["Form"].create()(function(e){var t=e.modalVisible,a=e.form,l=e.handleEdit,o=e.handleModalVisible,s=e.modalInfo,n=e.customType,r=e.onSelectCustomType,c=e.belongCustomsOptions,i=function(){a.validateFields(function(e,t){e||(a.resetFields(),l(t,s))})};return S.a.createElement(V["Modal"],{destroyOnClose:!0,title:"\u6d77\u5173\u4fee\u6539",style:{top:100},visible:t,onOk:i,onCancel:function(){return o()}},S.a.createElement(N,{labelCol:{span:5},wrapperCol:{span:15},label:"\u6d77\u5173\u540d\u79f0"},a.getFieldDecorator("customsName",{initialValue:s.customsName,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6d77\u5173\u540d\u79f0"}]})(S.a.createElement(V["Input"],{placeholder:"\u8bf7\u8f93\u5165\u6d77\u5173\u540d\u79f0"}))),S.a.createElement(N,{labelCol:{span:5},wrapperCol:{span:15},label:"\u6d77\u5173\u7c7b\u578b"},a.getFieldDecorator("customsType",{initialValue:s.customsType,rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u6d77\u5173\u7c7b\u578b"}]})(S.a.createElement(V["Select"],{placeholder:"\u8bf7\u9009\u62e9\u6d77\u5173\u7c7b\u578b",style:{width:"100%"},onChange:r},S.a.createElement(O,{value:"\u96b6\u5c5e\u5173"},"\u96b6\u5c5e\u5173"),S.a.createElement(O,{value:"\u76f4\u5c5e\u5173"},"\u76f4\u5c5e\u5173"),S.a.createElement(O,{value:"\u603b\u7f72\u5173"},"\u603b\u7f72\u5173")))),"\u96b6\u5c5e\u5173"===n?[S.a.createElement(N,{labelCol:{span:5},wrapperCol:{span:15},label:"\u6d77\u5173\u96b6\u5c5e"},a.getFieldDecorator("belongto",{initialValue:"\u96b6\u5c5e\u5173"===s.customsType?s.belongto:null,rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u6d77\u5173\u96b6\u5c5e"}]})(S.a.createElement(V["Select"],{placeholder:"\u8bf7\u9009\u62e9\u6d77\u5173\u96b6\u5c5e",style:{width:"100%"}},c)))]:[])}),L=V["Form"].create()(function(e){var t=e.addModalVisible,a=e.form,l=e.handleAdd,o=e.addHandleModalVisible,s=e.customType,n=e.onSelectCustomType,r=e.belongCustomsOptions,c=function(){a.validateFields(function(e,t){e||(a.resetFields(),l(t))})};return S.a.createElement(V["Modal"],{destroyOnClose:!0,title:"\u6d77\u5173\u65b0\u589e",style:{top:100},visible:t,onOk:c,onCancel:function(){return o()}},S.a.createElement(N,{labelCol:{span:5},wrapperCol:{span:15},label:"\u6d77\u5173\u540d\u79f0"},a.getFieldDecorator("customsName",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6d77\u5173\u540d\u79f0"}]})(S.a.createElement(V["Input"],{placeholder:"\u8bf7\u8f93\u5165\u6d77\u5173\u540d\u79f0"}))),S.a.createElement(N,{labelCol:{span:5},wrapperCol:{span:15},label:"\u6d77\u5173\u7c7b\u578b"},a.getFieldDecorator("customsType",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u6d77\u5173\u7c7b\u578b"}]})(S.a.createElement(V["Select"],{placeholder:"\u8bf7\u9009\u62e9\u6d77\u5173\u7c7b\u578b",style:{width:"100%"},onChange:n},S.a.createElement(O,{value:"\u96b6\u5c5e\u5173"},"\u96b6\u5c5e\u5173"),S.a.createElement(O,{value:"\u76f4\u5c5e\u5173"},"\u76f4\u5c5e\u5173"),S.a.createElement(O,{value:"\u603b\u7f72\u5173"},"\u603b\u7f72\u5173")))),"\u96b6\u5c5e\u5173"===s?[S.a.createElement(N,{labelCol:{span:5},wrapperCol:{span:15},label:"\u6d77\u5173\u96b6\u5c5e"},a.getFieldDecorator("belongto",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u6d77\u5173\u96b6\u5c5e"}]})(S.a.createElement(V["Select"],{placeholder:"\u8bf7\u9009\u62e9\u6d77\u5173\u96b6\u5c5e",style:{width:"100%"}},r)))]:[])}),q=(l=Object(T["connect"])(function(e){var t=e.custom,a=e.loading;return{custom:t,loading:a.models.custom}}),o=V["Form"].create(),l(s=o((n=function(e){function t(){var e,a;u()(this,t);for(var l=arguments.length,o=new Array(l),s=0;s<l;s++)o[s]=arguments[s];return a=f()(this,(e=g()(t)).call.apply(e,[this].concat(o))),a.state={modalVisible:!1,addModalVisible:!1,modalInfo:{},dataSource:[],customType:void 0,belongCustoms:[]},a.columns=[{title:"\u6d77\u5173\u540d\u79f0",dataIndex:"customsName"},{title:"\u6d77\u5173\u7c7b\u578b",dataIndex:"customsType"},{title:"\u6d77\u5173\u96b6\u5c5e",dataIndex:"belongto"},{title:"\u64cd\u4f5c",render:function(e,t){return S.a.createElement(v["Fragment"],null,S.a.createElement("a",{onClick:function(){return a.modifyItem(e,t)}},"\u4fee\u6539"),"\xa0\xa0",S.a.createElement("a",{onClick:function(){return a.deleteItem(e,t)}},"\u5220\u9664"))}}],a.init=function(){var e=a.props.dispatch,t={};e({type:"custom/getCustomsList",payload:t,callback:function(e){e&&(a.state.dataSource=e.data)}})},a.handleFormReset=function(){var e=a.props.form;e.resetFields(),a.init()},a.onSelectCustomType=function(e){a.setState({customType:e})},a.handleSearch=function(e){e.preventDefault();var t=a.props,l=t.dispatch,o=t.form;o.validateFields(function(e,t){if(!e){var o=JSON.parse(localStorage.getItem("userinfo")),s={kind:t.kind.trim(),value:t.value.trim(),certCode:o.certCode};l({type:"custom/getCustomsList",payload:s,callback:function(e){e&&(a.state.dataSource=e.data)}})}})},a.isValidDate=function(e){return void 0!==e&&null!==e?S.a.createElement("span",null,M()(e).format("YYYY-MM-DD")):[]},a.modifyItem=function(e){a.setState({modalInfo:e}),a.setState({customType:e.customsType});var t=a.props.dispatch;t({type:"custom/getCustomsListByType",payload:{},callback:function(e){200===e.code&&(a.state.belongCustoms=e.data)}}),a.handleModalVisible(!0)},a.deleteItem=function(e){V["Modal"].confirm({title:"\u786e\u5b9a\u5220\u9664\u6b64\u6761\u8bb0\u5f55\u5417\uff1f",okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){var t=a.props.dispatch,l=m()({},e);t({type:"custom/deleteCustoms",payload:l,callback:function(e){"success"===e?(a.init(),V["message"].success("\u5220\u9664\u6210\u529f")):V["message"].success("\u5220\u9664\u5931\u8d25")}})}})},a.addItem=function(){a.setState({customType:""});var e=a.props.dispatch;e({type:"custom/getCustomsListByType",payload:{},callback:function(e){200===e.code&&(a.state.belongCustoms=e.data)}}),a.addHandleModalVisible(!0)},a.handleModalVisible=function(e){a.setState({modalVisible:!!e})},a.addHandleModalVisible=function(e){a.setState({addModalVisible:!!e})},a.handleEdit=function(e,t){var l=a.props.dispatch,o=t;o.customsName=e.customsName,o.customsType=e.customsType,o.belongto=e.belongto;var s=m()({},o);l({type:"custom/updateCustoms",payload:s,callback:function(e){"success"===e?(V["message"].success("\u4fdd\u5b58\u6210\u529f"),a.init()):V["message"].error("\u4fdd\u5b58\u5931\u8d25")}}),a.setState({modalVisible:!1})},a.handleAdd=function(e){var t=a.props.dispatch,l=(JSON.parse(localStorage.getItem("userinfo")),m()({},e));a.setState({addModalVisible:!1}),a.state.dataSource.find(function(t){return t.customsName===e.customsName})?V["message"].error("\u6dfb\u52a0\u7684\u6d77\u5173\u540d\u79f0\u5df2\u5b58\u5728"):t({type:"custom/addCustoms",payload:l,callback:function(e){"success"===e?(V["message"].success("\u4fdd\u5b58\u6210\u529f"),a.init()):V["message"].error("\u4fdd\u5b58\u5931\u8d25")}})},a}return E()(t,e),b()(t,[{key:"componentDidMount",value:function(){this.init()}},{key:"renderSimpleForm",value:function(){var e=this.props.form.getFieldDecorator;return S.a.createElement(V["Form"],{onSubmit:this.handleSearch,layout:"inline"},S.a.createElement(V["Row"],{gutter:{md:8,lg:24,xl:48}},S.a.createElement(V["Col"],{md:3,sm:20},S.a.createElement(V["Form"].Item,{labelCol:{span:5},wrapperCol:{span:6},colon:!1},e("kind",{initialValue:"customsName",rules:[{message:"\u641c\u7d22\u7c7b\u578b"}]})(S.a.createElement(V["Select"],{placeholder:"\u641c\u7d22\u7c7b\u578b"},S.a.createElement(O,{value:"customsName"},"\u6d77\u5173\u540d\u79f0"),S.a.createElement(O,{value:"customsType"},"\u6d77\u5173\u7c7b\u578b"),S.a.createElement(O,{value:"belongto"},"\u6d77\u5173\u96b6\u5c5e"))))),S.a.createElement(V["Col"],{md:6,sm:20},S.a.createElement(N,null,e("value",{rules:[{message:"\u641c\u7d22\u6570\u636e"}]})(S.a.createElement(V["Input"],{placeholder:"\u8bf7\u8f93\u5165"})))),S.a.createElement(V["Col"],{md:8,sm:20},S.a.createElement("span",{className:I.a.submitButtons},S.a.createElement(V["Button"],{type:"primary",htmlType:"submit"},"\u67e5\u8be2"),S.a.createElement(V["Button"],{style:{marginLeft:8},onClick:this.handleFormReset},"\u91cd\u7f6e"),S.a.createElement(V["Button"],{type:"primary",style:{marginLeft:8},onClick:this.addItem},"\u65b0\u589e")))))}},{key:"render",value:function(){var e=this.props,t=e.loading,a=e.dispatch,l=this.state,o=l.modalVisible,s=l.modalInfo,n=l.addModalVisible,r=l.dataSource,i=l.customType,m=l.belongCustoms,d=m.map(function(e){return S.a.createElement(O,{key:e.customsName,value:e.customsName},e.customsName)}),u={handleEdit:this.handleEdit,handleAdd:this.handleAdd,handleModalVisible:this.handleModalVisible,addHandleModalVisible:this.addHandleModalVisible,onSelectCustomType:this.onSelectCustomType};return S.a.createElement(k["a"],null,S.a.createElement(V["Card"],{bordered:!1,size:"small"},S.a.createElement("div",{className:I.a.tableList},S.a.createElement(D,c()({},u,{modalVisible:o,modalInfo:s,customType:i,dispatch:a,belongCustomsOptions:d})),S.a.createElement(L,c()({},u,{addModalVisible:n,dispatch:a,customType:i,belongCustomsOptions:d})),S.a.createElement("div",{className:I.a.tableListForm},this.renderSimpleForm()),S.a.createElement(V["Table"],{size:"middle",loading:t,dataSource:r,columns:this.columns,rowKey:"itemno",pagination:{showQuickJumper:!0,showSizeChanger:!0}}))))}}]),t}(v["PureComponent"]),s=n))||s)||s);t["default"]=q}}]);