(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{322:function(t,e,r){"use strict";r.r(e);r(33),r(25),r(32),r(44),r(29),r(45);var n=r(18),o=r(46);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={data:function(){return{gainings:""}},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({addToBoard:"board/add",removeFromBoard:"board/remove",recordAmount:"board/recordAmount",fixInitPrice:"board/fixInitPrice",calcProfit:"board/calcProfit"})),computed:{selectedCoins:function(){return this.$store.getters["board/items"]}}},d=r(38),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"board"},[r("h2",{staticClass:"wallet-title"},[t._v("мои монеточки")]),t._v(" "),r("table",{staticClass:"uk-table uk-table"},[t._m(0),t._v(" "),r("tbody",t._l(t.selectedCoins,(function(e,n){return r("tr",[r("td",{staticClass:"uk-width-1-5"},[t._v(t._s(e.symbol))]),t._v(" "),r("td",{ref:"inWallet",refInFor:!0,staticClass:"uk-width-1-5"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.inWallet,expression:"coin.inWallet"}],staticClass:"uk-input",attrs:{type:"text"},domProps:{value:e.inWallet},on:{change:function(r){return t.recordAmount(n,e.inWallet)},input:function(r){r.target.composing||t.$set(e,"inWallet",r.target.value)}}})]),t._v(" "),r("td",{ref:"initPrice",refInFor:!0,staticClass:"uk-width-1-5"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.initPrice,expression:"coin.initPrice"}],staticClass:"uk-input",attrs:{type:"text"},domProps:{value:e.initPrice},on:{change:function(r){return t.fixInitPrice(n,e.initPrice)},input:function(r){r.target.composing||t.$set(e,"initPrice",r.target.value)}}})]),t._v(" "),r("td",{staticClass:"uk-width-1-5"},[t._v(t._s(e.price))]),t._v(" "),r("td",{ref:"gainings",refInFor:!0,staticClass:"uk-width-1-5",on:{click:function(e){return t.calcProfit(n)}}},[e.profit?t._e():r("p",[t._v("посчитать")]),e.profit?r("p",[t._v(t._s(e.profit))]):t._e()]),t._v(" "),r("td",[r("p",{ref:"stonks",refInFor:!0})]),t._v(" "),r("td",{staticClass:"uk-width-1-5"},[r("a",[r("span",{staticClass:"uk-badge",staticStyle:{background:"rgba(255,255,255,.2)"},on:{click:function(e){return t.removeFromBoard(n)}}},[t._v("-")])])])])})),0)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("td",[t._v("валюта")]),t._v(" "),r("td",[t._v("баланс")]),t._v(" "),r("td",[t._v("купив за")]),t._v(" "),r("td",[t._v("цена")]),t._v(" "),r("td",[t._v("навар")]),t._v(" "),r("td",[t._v("stonks, %")]),t._v(" "),r("td",[t._v("x")])])])}],!1,null,null,null);e.default=component.exports}}]);