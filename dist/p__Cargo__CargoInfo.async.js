(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{glgc:function(e,a,t){"use strict";t.r(a);t("2qtc");var n,o,r,c,l,s,i,d=t("kLXV"),m=(t("6UJt"),t("DFOY")),p=(t("5NDa"),t("5rEg")),u=(t("IzEo"),t("bx4M")),g=(t("g9YV"),t("wCAj")),h=(t("/xke"),t("TeRw")),f=t("2Taf"),v=t.n(f),y=t("vZ4D"),C=t.n(y),k=t("l4Ni"),E=t.n(k),b=t("ujKo"),I=t.n(b),S=t("MhPg"),w=t.n(S),D=(t("OaEy"),t("2fM7")),O=(t("y8nQ"),t("Vl3Y")),F=t("q1tI"),M=t.n(F),A=t("MuoO"),N=t("usdK"),L=t("zHco"),q=t("wd/R"),x=t.n(q),J=t("glGN"),R=t.n(J),Y=(t("14J3"),t("BMrR")),j=(t("+L6B"),t("2/Rp")),V=(t("jCWc"),t("kPKH")),z=t("p0pE"),K=t.n(z),P=t("rvFD"),T=t.n(P),B=O["a"].Item,H=(D["a"].Option,n=Object(A["connect"])(function(e){var a=e.dict,t=e.loading;return{dict:a,loading:t.models.dict}}),n((r=function(e){function a(){var e,t;v()(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return t=E()(this,(e=I()(a)).call.apply(e,[this].concat(o))),t.handleFormReset=function(){var e=t.props,a=e.form,n=e.dispatch;a.resetFields();var o=JSON.parse(localStorage.getItem("main_userinfo")),r={certCode:o.certCode};n({type:"dict/getCargos",payload:r})},t.handleSearch=function(e){e.preventDefault();var a=t.props,n=a.dispatch,o=a.form;o.validateFields(function(e,a){if(!e){var t=JSON.parse(localStorage.getItem("main_userinfo")),o=K()({},a,{certCode:t.certCode});n({type:"dict/searchCargos",payload:o})}})},t}return w()(a,e),C()(a,[{key:"render",value:function(){var e=this.props,a=e.form.getFieldDecorator,t=e.showAdd;return M.a.createElement(O["a"],{onSubmit:this.handleSearch,layout:"inline",hideRequiredMark:!0,labelAlign:"left"},M.a.createElement(Y["a"],{gutter:{md:8,lg:24,xl:48}},M.a.createElement(V["a"],{span:6},M.a.createElement(B,{label:"\u68c0\u67e5\u54c1\u540d",labelCol:{span:8},wrapperCol:{span:16},colon:!1},a("value",{rules:[{message:"\u641c\u7d22\u6570\u636e"}]})(M.a.createElement(p["a"],{placeholder:"\u8bf7\u8f93\u5165"})))),M.a.createElement(V["a"],{md:8,sm:20},M.a.createElement("span",{className:T.a.submitButtons},M.a.createElement(j["a"],{type:"primary",htmlType:"submit"},"\u67e5\u8be2"),M.a.createElement(j["a"],{style:{marginLeft:8},onClick:this.handleFormReset},"\u91cd\u7f6e"),M.a.createElement(j["a"],{type:"primary",style:{marginLeft:8},onClick:t},"\u65b0\u589e")))))}}]),a}(F["PureComponent"]),o=r))||o),Q=H,_=(O["a"].Item,D["a"].Option,O["a"].create()(Q)),G=(c=Object(A["connect"])(function(e){var a=e.dict,t=e.loading;return{dict:a,loading:t.models.dict}}),l=O["a"].create(),c(s=l((i=function(e){function a(){var e,t;v()(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return t=E()(this,(e=I()(a)).call.apply(e,[this].concat(o))),t.state={visible:!1,modalInfo:{},keyno:null,cnsOptions:[],cargosort:[]},t.columns=[{title:"\u68c0\u67e5\u54c1\u540d",dataIndex:"cargonamec"},{title:"\u82f1\u6587\u540d",dataIndex:"cargonamee"},{title:"\u8d27\u7269\u5206\u7c7b",dataIndex:"cargosort"},{title:"CNS\u7f16\u7801",dataIndex:"checkCode"},{title:"\u64cd\u4f5c",render:function(e,a){return M.a.createElement(F["Fragment"],null,M.a.createElement("a",{onClick:function(){return t.previewItem(e,a)}},"\u67e5\u770b\u6307\u6807"),"\xa0\xa0",M.a.createElement("a",{onClick:function(){return t.modifyItem(e,a)}},"\u4fee\u6539"),"\xa0\xa0",M.a.createElement("a",{onClick:function(){return t.deleteItem(e,a)}},"\u5220\u9664"))}}],t.deleteItem=function(e){var a=t.props.dispatch;a({type:"dict/deleteCargo",payload:{keyno:e.keyno},callback:function(e){200===e.code?(h["a"].open({message:"\u5220\u9664\u6210\u529f"}),t.componentDidMount()):h["a"].open({message:"\u5220\u9664\u5931\u8d25",description:e.message})}})},t.isValidDate=function(e){return void 0!==e&&null!==e?M.a.createElement("span",null,x()(e).format("YYYY-MM-DD")):[]},t.previewItem=function(e){sessionStorage.setItem("cargoname",e.cargonamec),N["a"].push({pathname:"/Cargo/ItemList"})},t.modifyItem=function(e){var a=t.props.form;t.setState({visible:!0}),t.setState({keyno:e.keyno});var n=[];if(n.push(e.checkCode.substring(0,2)),n.push(e.checkCode.substring(0,4)),n.push(e.checkCode),void 0!==e.cargosort){var o=e.cargosort.split(" ");a.setFieldsValue({cargosort:o})}a.setFieldsValue({cargonamec:e.cargonamec,cargonamee:e.cargonamee,checkCode:n})},t.handleOk=function(){var e=t.props,a=e.form.validateFieldsAndScroll,n=e.dispatch,o=t.state.keyno;a(function(e,a){a.checkCode=a.checkCode[2];var r={cargonamec:a.cargonamec,cargonamee:a.cargonamee,checkCode:a.checkCode,cargosort:a.cargosort.join(" "),keyno:o};e||n(null!==o?{type:"dict/updateCargo",payload:r,callback:function(e){200===e.code?(h["a"].open({message:"\u4fee\u6539\u6210\u529f"}),t.componentDidMount(),t.setState({visible:!1})):h["a"].open({message:"\u4fee\u6539\u5931\u8d25",description:e.message})}}:{type:"dict/addCargo",payload:r,callback:function(e){200===e.code?(h["a"].open({message:"\u6dfb\u52a0\u6210\u529f"}),t.componentDidMount(),t.setState({visible:!1})):h["a"].open({message:"\u6dfb\u52a0\u5931\u8d25",description:e.message})}})})},t.showAdd=function(){var e=t.props.form;e.resetFields(),t.setState({keyno:null}),t.setState({visible:!0})},t.handleCancel=function(){t.setState({visible:!1})},t}return w()(a,e),C()(a,[{key:"componentDidMount",value:function(){var e=this,a=this.props.dispatch,t={};a({type:"dict/getCargos",payload:t}),a({type:"cnas/getCnasLevelInfo",payload:{},callback:function(a){a&&(e.state.cnsOptions=a)}}),a({type:"dict/getCargoInfo",payload:{},callback:function(a){200===a.code&&(e.state.cargosort=a.data)}})}},{key:"render",value:function(){var e=this.props,a=e.dict.cargos,t=e.loading,n=(e.dispatch,e.form.getFieldDecorator),o=this.state.visible,r={showAdd:this.showAdd,componentDidMount:this.componentDidMount};return M.a.createElement(L["a"],null,M.a.createElement(u["a"],{bordered:!1,size:"small"},M.a.createElement("div",{className:R.a.tableListForm},M.a.createElement(_,r)),M.a.createElement("div",{className:R.a.tableList},M.a.createElement(g["a"],{style:{marginTop:10},size:"middle",loading:t,dataSource:a,columns:this.columns,rowKey:"cargonamec",pagination:{showQuickJumper:!0,showSizeChanger:!0}}))),M.a.createElement(d["a"],{title:"\u8d27\u7269\u4fe1\u606f",visible:o,onOk:this.handleOk,onCancel:this.handleCancel},M.a.createElement(O["a"],null,M.a.createElement(O["a"].Item,{label:"\u68c0\u67e5\u54c1\u540d"},n("cargonamec",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u5206\u5305\u5b9e\u9a8c\u5ba4"}]})(M.a.createElement(p["a"],null))),M.a.createElement(O["a"].Item,{label:"\u82f1\u6587\u540d"},n("cargonamee",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u603b\u8ba1\u8d39\u7528"}]})(M.a.createElement(p["a"],null))),M.a.createElement(O["a"].Item,{label:"\u9009\u62e9CNAS\u5206\u7c7b"},n("checkCode",{rules:[{required:!0,message:"\u9009\u62e9CNAS\u5206\u7c7b"}]})(M.a.createElement(m["a"],{options:this.state.cnsOptions,placeholder:"\u9009\u62e9CNAS\u5206\u7c7b"}))),M.a.createElement(O["a"].Item,{label:"\u8d27\u7269\u5206\u7c7b"},n("cargosort",{rules:[{required:!0,message:"\u9009\u62e9\u8d27\u7269\u5206\u7c7b"}]})(M.a.createElement(m["a"],{options:this.state.cargosort,placeholder:"\u9009\u62e9\u8d27\u7269\u5206\u7c7b"}))))))}}]),a}(F["PureComponent"]),s=i))||s)||s);a["default"]=G}}]);