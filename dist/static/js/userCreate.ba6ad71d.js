(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{DNGh:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return v});var n,r=a("mXGw"),l=a("mBK0"),o=a("qgEq"),c=a("fkL1"),u=a("GCqQ"),p=a("2//r"),s=a("XkWK"),i=a("H4M2");function m(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=o.a.Item,v=Object(l.b)("userCreateStore")(n=Object(l.c)(n=function(e){function t(){var e,a;!function(e,a){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=function(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,(e=f(t)).call.apply(e,[this].concat(r)))).userTypeList=[{name:"超级用户",value:0},{name:"普通用户",value:1},{name:"测试用户",value:9}],a.sexList=[{name:"女",value:0},{name:"男",value:1}],a.back=function(){a.props.history.go(-1)},a.goDetail=function(e){a.props.history.push("/home/blog-user/".concat(e))},a}var a,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,r.Component),a=t,(n=[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props.userCreateStore,a=t.mainData,n=t.inputChange,l=t.save,m=t.password,f=t.pwdChange;return r.createElement(r.Fragment,null,r.createElement(o.a,{className:"search-form",layout:"horizontal"},r.createElement("h3",null,"新增用户"),r.createElement(c.a,{gutter:24},r.createElement(u.a,{span:18},r.createElement(b,{label:"用户名",labelCol:{sm:{span:4}},wrapperCol:{sm:{span:20}}},r.createElement(p.a,{placeholder:"用户名",value:a.username,onChange:function(e){return n(e.target.value,"username")}}))),r.createElement(u.a,{span:18},r.createElement(b,{label:"用户昵称",labelCol:{sm:{span:4}},wrapperCol:{sm:{span:20}}},r.createElement(p.a,{placeholder:"用户昵称",value:a.nickName,onChange:function(e){return n(e.target.value,"nickName")}}))),r.createElement(u.a,{span:18},r.createElement(b,{label:"用户密码",labelCol:{sm:{span:4}},wrapperCol:{sm:{span:20}}},r.createElement(p.a,{placeholder:"用户密码",type:"password",value:m.pwd,onChange:function(e){return f(e.target.value,"pwd")}}))),r.createElement(u.a,{span:18},r.createElement(b,{label:"确认密码",labelCol:{sm:{span:4}},wrapperCol:{sm:{span:20}}},r.createElement(p.a,{placeholder:"确认密码",type:"password",value:m.confirmPwd,onChange:function(e){return f(e.target.value,"confirmPwd")}}))),r.createElement(u.a,{span:18},r.createElement(b,{label:"用户类型",labelCol:{sm:{span:4}},wrapperCol:{sm:{span:20}}},r.createElement(s.a,{placeholder:"用户类型",onChange:function(e){return n(e,"userType")},value:a.userType},this.userTypeList.map(function(e,t){return r.createElement(s.a.Option,{key:e.name,value:e.value},e.name)})))),r.createElement(u.a,{span:18},r.createElement(b,{label:"性别",labelCol:{sm:{span:4}},wrapperCol:{sm:{span:20}}},r.createElement(s.a,{placeholder:"性别",onChange:function(e){return n(e,"sex")},value:a.sex},this.sexList.map(function(e,t){return r.createElement(s.a.Option,{key:e.name,value:e.value},e.name)})))),r.createElement(u.a,{span:18},r.createElement(b,{label:"备注",labelCol:{sm:{span:4}},wrapperCol:{sm:{span:20}}},r.createElement(p.a.TextArea,{rows:4,placeholder:"备注",value:a.remark,onChange:function(e){return n(e.target.value,"remark")}})))),r.createElement(c.a,null,r.createElement(u.a,{span:24,offset:3},r.createElement(i.a,{onClick:function(t){return l(e.goDetail)},type:"primary"},"保存"),r.createElement(i.a,{onClick:this.back},"取消")))))}}])&&m(a.prototype,n),t}())||n)||n}}]);