(this["webpackJsonpmoney-exchange"]=this["webpackJsonpmoney-exchange"]||[]).push([[8],{132:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r=function(n,t){return t[n.currency].symbol}},149:function(n,t,e){"use strict";e.r(t);var r=e(0),c=e.n(r),a=e(45),u=e(46);function i(){var n=Object(a.a)([""]);return i=function(){return n},n}function o(){var n=Object(a.a)(["\n  margin-bottom: 8px;\n"]);return o=function(){return n},n}function l(){var n=Object(a.a)(["\n  height: 80%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  margin-left: auto;\n"]);return l=function(){return n},n}function f(){var n=Object(a.a)([""]);return f=function(){return n},n}function s(){var n=Object(a.a)(["\n  font-size: 13px;\n"]);return s=function(){return n},n}function b(){var n=Object(a.a)(["\n  margin-bottom: 8px;\n"]);return b=function(){return n},n}function d(){var n=Object(a.a)(["\n  color: rgb(139, 149, 158);\n"]);return d=function(){return n},n}function m(){var n=Object(a.a)(["\n  color: rgb(25, 28, 31);\n"]);return m=function(){return n},n}function g(){var n=Object(a.a)(["\n  height: 80%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-between;\n"]);return g=function(){return n},n}function j(){var n=Object(a.a)(["\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background-color: #eceff1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 24px;\n"]);return j=function(){return n},n}function p(){var n=Object(a.a)(["\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border-radius: 3px;\n  transition: box-shadow 0.2s ease;\n\n  &:hover {\n    box-shadow: 0 0 10px -2px rgba(0, 0, 0, 0.2);\n  }\n\n  & + & {\n    margin-top: 10px;\n  }\n"]);return p=function(){return n},n}var v=u.b.div(p()),x=u.b.div(j()),O=u.b.div(g()),h=u.b.div(m()),y=u.b.div(d()),E=Object(u.b)(h)(b()),w=u.b.div(s()),A=Object(u.b)(y)(f()),k=u.b.div(l()),T=Object(u.b)(h)(o()),z=Object(u.b)(y)(i()),H=e(53),I=e(132),J=e(130),M=e(35),V=e(24),D=e(52),F=e(144),q=Object(D.b)()(Object(V.c)((function(n){return{accounts:n.accounts.list,currencies:n.currencies.data}}))((function(n){var t=n.transaction,e=n.accounts,r=n.currencies,a=n.t,u=e.find((function(n){return n.id===t.fromAccountId})),i=e.find((function(n){return n.id===t.toAccountId}));if(!u||!i)return null;var o=Object(I.a)(u,r),l=Object(I.a)(i,r),f="".concat(a("transactions.item.exchangedTo")," ").concat(i.title);return c.a.createElement(v,null,c.a.createElement(x,null,c.a.createElement(H.f,{size:20,color:"#8995A2"})),c.a.createElement(O,null,c.a.createElement(E,null,f),c.a.createElement(w,null,c.a.createElement(A,null,Object(F.a)(new Date(t.dateTime),"yyyy-MM-dd, HH:mm")))),c.a.createElement(k,null,c.a.createElement(T,null,"-",o,Object(J.a)(M.a.language,t.fromAccountValue)),c.a.createElement(z,null,"-",l,Object(J.a)(M.a.language,t.toAccountValue))))}))),B=Object(V.c)((function(n){return{transactions:n.transactions.list}}))((function(n){var t=n.transactions;return c.a.createElement(c.a.Fragment,null,t.sort((function(n,t){return n.dateTime-t.dateTime})).map((function(n){return c.a.createElement(q,{key:n.id,transaction:n})})))}));t.default=B}}]);