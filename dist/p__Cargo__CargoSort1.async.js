(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"9Y0k":function(e,a,t){"use strict";t.r(a);t("IzEo");var l,n,o,r,i=t("bx4M"),s=(t("g9YV"),t("wCAj")),d=t("jehZ"),c=t.n(d),u=(t("14J3"),t("BMrR")),m=(t("+L6B"),t("2/Rp")),p=(t("jCWc"),t("kPKH")),f=t("p0pE"),h=t.n(f),g=(t("miYZ"),t("tsqr")),b=t("2Taf"),E=t.n(b),v=t("vZ4D"),y=t.n(v),V=t("l4Ni"),C=t.n(V),M=t("ujKo"),k=t.n(M),S=t("MhPg"),I=t.n(S),w=(t("2qtc"),t("kLXV")),F=(t("5NDa"),t("5rEg")),D=(t("OaEy"),t("2fM7")),Y=(t("y8nQ"),t("Vl3Y")),L=t("q1tI"),O=t.n(L),H=t("MuoO"),A=t("usdK"),N=(t("Y2fQ"),t("zHco")),j=t("wd/R"),q=t.n(j),z=t("glGN"),R=t.n(z),J=Y["a"].Item,K=D["a"].Option,T=Y["a"].create()(function(e){var a=e.modalVisible,t=e.form,l=e.handleEdit,n=e.handleModalVisible,o=e.modalInfo,r=function(){t.validateFields(function(e,a){e||(t.resetFields(),l(a,o))})};return O.a.createElement(w["a"],{destroyOnClose:!0,title:"\u8d27\u7269\u7c7b\u522b\u4fee\u6539",style:{top:100},visible:a,onOk:r,onCancel:function(){return n()}},O.a.createElement(J,{labelCol:{span:5},wrapperCol:{span:15},label:"\u8d27\u7269\u7c7b\u522b\u540d\u79f0"},t.getFieldDecorator("sort1",{initialValue:o.sort1,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u8d27\u7269\u7c7b\u522b\u540d\u79f0"}]})(O.a.createElement(F["a"],{placeholder:"\u8bf7\u8f93\u5165\u8d27\u7269\u7c7b\u522b\u540d\u79f0"}))))}),x=Y["a"].create()(function(e){var a=e.addModalVisible,t=e.form,l=e.handleAdd,n=e.addHandleModalVisible,o=function(){t.validateFields(function(e,a){e||(t.resetFields(),l(a))})};return O.a.createElement(w["a"],{destroyOnClose:!0,title:"\u8d27\u7269\u7c7b\u522b\u65b0\u589e",style:{top:100},visible:a,onOk:o,onCancel:function(){return n()}},O.a.createElement(J,{labelCol:{span:5},wrapperCol:{span:15},label:"\u8d27\u7269\u7c7b\u522b\u540d\u79f0"},t.getFieldDecorator("sort1",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u8d27\u7269\u7c7b\u522b\u540d\u79f0"}]})(O.a.createElement(F["a"],{placeholder:"\u8bf7\u8f93\u5165\u8d27\u7269\u7c7b\u522b\u540d\u79f0"}))))}),B=(l=Object(H["connect"])(function(e){var a=e.cargo,t=e.loading;return{cargo:a,loading:t.models.cargo}}),n=Y["a"].create(),l(o=n((r=function(e){function a(){var e,t;E()(this,a);for(var l=arguments.length,n=new Array(l),o=0;o<l;o++)n[o]=arguments[o];return t=C()(this,(e=k()(a)).call.apply(e,[this].concat(n))),t.state={modalVisible:!1,addModalVisible:!1,modalInfo:{},dataSource:[]},t.columns=[{title:"\u8d27\u7269\u4e00\u7ea7\u5206\u7c7b",dataIndex:"sort1"},{title:"\u64cd\u4f5c",render:function(e,a){return O.a.createElement(L["Fragment"],null,O.a.createElement("a",{onClick:function(){return t.deleteItem(e,a)}},"\u5220\u9664"),"\xa0\xa0",O.a.createElement("a",{onClick:function(){return t.goToCargoSort2(e,a)}},"\u7f16\u8f91"))}}],t.goToCargoSort2=function(e){sessionStorage.setItem("platform_sort1",e.sort1),A["a"].push({pathname:"/Cargo/CargoSort2"})},t.init=function(){var e=t.props.dispatch;e({type:"cargo/getCargosort1List",callback:function(e){e&&(t.state.dataSource=e.data)}})},t.handleFormReset=function(){var e=t.props.form;e.resetFields(),t.init()},t.handleSearch=function(e){e.preventDefault();var a=t.props,l=a.dispatch,n=a.form;n.validateFields(function(e,a){if(!e){var n={kind:a.kind.trim(),value:a.value.trim()};console.log(n),l({type:"cargo/getCargosort1List",payload:n,callback:function(e){e&&(t.state.dataSource=e.data)}})}})},t.isValidDate=function(e){return void 0!==e&&null!==e?O.a.createElement("span",null,q()(e).format("YYYY-MM-DD")):[]},t.modifyItem=function(e){t.setState({modalInfo:e}),t.handleModalVisible(!0)},t.deleteItem=function(e){var a=t.props.dispatch,l={sort1:e.sort1};a({type:"cargo/deleteCargosort1",payload:l,callback:function(e){"success"===e?(g["a"].success("\u5220\u9664\u6210\u529f"),t.init()):g["a"].success("\u5220\u9664\u5931\u8d25")}})},t.addItem=function(){t.addHandleModalVisible(!0)},t.handleModalVisible=function(e){t.setState({modalVisible:!!e})},t.addHandleModalVisible=function(e){t.setState({addModalVisible:!!e})},t.handleEdit=function(e,a){var l=t.props.dispatch,n=a;n.sort1=e.sort1;var o=h()({},n);l({type:"cargo/updateCargoSort1",payload:o,callback:function(e){"success"===e?(g["a"].success("\u4fee\u6539\u6210\u529f"),t.init()):g["a"].success("\u4fee\u6539\u5931\u8d25")}}),t.setState({modalVisible:!1})},t.handleAdd=function(e){var a=t.props.dispatch,l=h()({},e);a({type:"cargo/addCargoSort1",payload:l,callback:function(e){"success"===e?(g["a"].success("\u4fdd\u5b58\u6210\u529f"),t.init()):g["a"].success("\u4fdd\u5b58\u5931\u8d25")}}),t.setState({addModalVisible:!1})},t}return I()(a,e),y()(a,[{key:"componentDidMount",value:function(){this.init()}},{key:"renderSimpleForm",value:function(){var e=this.props.form.getFieldDecorator;return O.a.createElement(Y["a"],{onSubmit:this.handleSearch,layout:"inline"},O.a.createElement(u["a"],{gutter:{md:8,lg:24,xl:48}},O.a.createElement(p["a"],{md:3,sm:20},O.a.createElement(Y["a"].Item,{labelCol:{span:5},wrapperCol:{span:6},colon:!1},e("kind",{initialValue:"sort1",rules:[{message:"\u641c\u7d22\u7c7b\u578b"}]})(O.a.createElement(D["a"],{placeholder:"\u641c\u7d22\u7c7b\u578b"},O.a.createElement(K,{value:"sort1"},"\u7c7b\u522b\u540d\u79f0"))))),O.a.createElement(p["a"],{md:6,sm:20},O.a.createElement(J,null,e("value",{rules:[{message:"\u641c\u7d22\u6570\u636e"}]})(O.a.createElement(F["a"],{placeholder:"\u8bf7\u8f93\u5165"})))),O.a.createElement(p["a"],{md:8,sm:20},O.a.createElement("span",{className:R.a.submitButtons},O.a.createElement(m["a"],{type:"primary",htmlType:"submit"},"\u67e5\u8be2"),O.a.createElement(m["a"],{style:{marginLeft:8},onClick:this.handleFormReset},"\u91cd\u7f6e"),O.a.createElement(m["a"],{type:"primary",style:{marginLeft:8},onClick:this.addItem},"\u65b0\u589e")))))}},{key:"render",value:function(){var e=this.props,a=e.loading,t=e.dispatch,l=this.state,n=l.modalVisible,o=l.modalInfo,r=l.addModalVisible,d=l.dataSource,u={handleEdit:this.handleEdit,handleAdd:this.handleAdd,handleModalVisible:this.handleModalVisible,addHandleModalVisible:this.addHandleModalVisible};return O.a.createElement(N["a"],null,O.a.createElement(i["a"],{bordered:!1,size:"small"},O.a.createElement("div",{className:R.a.tableList},O.a.createElement(T,c()({},u,{modalVisible:n,modalInfo:o,dispatch:t})),O.a.createElement(x,c()({},u,{addModalVisible:r,dispatch:t})),O.a.createElement("div",{className:R.a.tableListForm},this.renderSimpleForm()),O.a.createElement(s["a"],{size:"middle",loading:a,dataSource:d,columns:this.columns,rowKey:"sort1",pagination:{showQuickJumper:!0,showSizeChanger:!0}}))))}}]),a}(L["PureComponent"]),o=r))||o)||o);a["default"]=B}}]);