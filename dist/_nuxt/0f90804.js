(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{268:function(e,t,r){"use strict";var n=r(270),o=new(r.n(n).a)("https://stonxs.herokuapp.com");t.a=o},271:function(e,t){},320:function(e,t,r){"use strict";r.r(t);r(33),r(25),r(32),r(44),r(29),r(45);var n=r(11),o=r(18),c=(r(51),r(46)),l=r(268);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var d={data:function(){return{email:"",password:"",username:"",loading:!1}},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({handleSubmit:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.loading=!0,t.next=4,l.a.register(e.username,e.email,e.password);case 4:r=t.sent,e.loading=!1,e.setUser(r.user),e.$router.go(-1),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),e.loading=!1,alert(t.t0.message||"An error occurred.");case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))()}},Object(c.b)({setUser:"auth/setUser"}))},v=r(38),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page-wrapper"},[r("div",{staticClass:"form-wrapper"},[r("form",{on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit(t)}}},[r("fieldset",{staticClass:"uk-fieldset"},[r("legend",{staticClass:"uk-legend"},[e._v("Регистрация")]),e._v(" "),r("div",{staticClass:"uk-margin"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"uk-input",attrs:{type:"text",placeholder:"Имя"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"uk-margin"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"uk-input",attrs:{type:"email",placeholder:"E-mail"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"uk-margin"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"uk-input",attrs:{type:"password",placeholder:"Пароль"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"uk-margin"},[r("button",{staticClass:"uk-button uk-width-1-1",attrs:{disabled:e.loading,type:"submit"}},[e._v("Зарегистрироваться")])])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);