(this["webpackJsonpmoney-exchange"]=this["webpackJsonpmoney-exchange"]||[]).push([[9],{133:function(n,e,t){"use strict";var r=t(131),a=t(46),c=t(47),i=t(49),o=t(48),u=t(50),l=t(0),s=t.n(l),p=t(137),d=t.n(p),f=function(n){function e(){var n,t;Object(a.a)(this,e);for(var r=arguments.length,c=new Array(r),u=0;u<r;u++)c[u]=arguments[u];return(t=Object(i.a)(this,(n=Object(o.a)(e)).call.apply(n,[this].concat(c)))).elementRef=null,t.targetRef=null,t.handleClick=function(n){t.targetRef&&t.targetRef.current&&t.targetRef.current.contains(n.target)||t.elementRef&&t.elementRef.current&&t.elementRef.current.contains(n.target)||t.props.onClickOutside&&t.props.onClickOutside()},t.renderElement=function(n){return t.props.isOpened?(t.elementRef=n,t.props.content(n)):null},t.renderTarget=function(n){return t.targetRef=n,t.props.children(n)},t}return Object(u.a)(e,n),Object(c.a)(e,[{key:"componentDidUpdate",value:function(){this.props.isOpened?document.addEventListener("click",this.handleClick):document.removeEventListener("click",this.handleClick)}},{key:"render",value:function(){var n=this.props.attachment,e=void 0===n?"top center":n;return s.a.createElement(d.a,{attachment:e,renderTarget:this.renderTarget,renderElement:this.renderElement})}}]),e}(s.a.Component),h=t(44),b=t(45);function m(){var n=Object(h.a)(["\n  margin-top: 8px;\n  width: ","px;\n  background-color: #fff;\n  box-shadow: 0 0 10px -2px rgba(0, 0, 0, 0.3);\n  animation: "," 0.2s ease;\n  border-radius: 6px;\n  overflow: hidden;\n"]);return m=function(){return n},n}function v(){var n=Object(h.a)(["\n  0% {\n    opacity: 0;\n    transform: translateY(25%);\n  }\n  \n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n"]);return v=function(){return n},n}var O=Object(b.c)(v()),k=b.b.div(m(),(function(n){return n.width}),O);function g(){var n=Object(h.a)(["\n  padding: 20px 10px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  background-color: #fff;\n\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.05);\n  }\n"]);return g=function(){return n},n}var j=b.b.div(g()),C=function(n){function e(){var n,t;Object(a.a)(this,e);for(var r=arguments.length,c=new Array(r),u=0;u<r;u++)c[u]=arguments[u];return(t=Object(i.a)(this,(n=Object(o.a)(e)).call.apply(n,[this].concat(c)))).onClick=function(){t.props.onClick(t.props.item)},t}return Object(u.a)(e,n),Object(c.a)(e,[{key:"render",value:function(){var n=this.props,e=n.item,t=n.renderContent;return s.a.createElement(j,{onClick:this.onClick},t(e))}}]),e}(s.a.PureComponent);function y(){var n=Object(h.a)(["\n  font-size: 14px;\n  color: #000;\n"]);return y=function(){return n},n}var x=b.b.div(y()),w=function(n){var e=n.text,t=n.onClick;return s.a.createElement(C,{item:e,onClick:t,renderContent:function(n){return s.a.createElement(x,null,n)}})},E=function(n){function e(){var n,t;Object(a.a)(this,e);for(var r=arguments.length,c=new Array(r),u=0;u<r;u++)c[u]=arguments[u];return(t=Object(i.a)(this,(n=Object(o.a)(e)).call.apply(n,[this].concat(c)))).renderContent=function(n){var e=t.props,r=e.content,a=e.width,c=void 0===a?100:a;return s.a.createElement(k,{ref:n,width:c},r())},t}return Object(u.a)(e,n),Object(c.a)(e,[{key:"render",value:function(){var n=this.props,e=n.isOpened,t=n.children,a=n.onClickOutside,c=Object(r.a)(n,["isOpened","children","onClickOutside"]);return s.a.createElement(f,Object.assign({},c,{isOpened:e,content:this.renderContent,onClickOutside:a}),(function(n){return t(n)}))}}]),e}(s.a.Component);E.TextItem=w;var R=E;t.d(e,"a",(function(){return R}))}}]);
//# sourceMappingURL=9.6d2c53a0.chunk.js.map