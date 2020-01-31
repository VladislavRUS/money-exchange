(this["webpackJsonpmoney-exchange"]=this["webpackJsonpmoney-exchange"]||[]).push([[7,9],{133:function(n,e,t){"use strict";var r=t(131),a=t(46),c=t(47),o=t(49),i=t(48),u=t(50),l=t(0),f=t.n(l),s=t(137),p=t.n(s),d=function(n){function e(){var n,t;Object(a.a)(this,e);for(var r=arguments.length,c=new Array(r),u=0;u<r;u++)c[u]=arguments[u];return(t=Object(o.a)(this,(n=Object(i.a)(e)).call.apply(n,[this].concat(c)))).elementRef=null,t.targetRef=null,t.handleClick=function(n){t.targetRef&&t.targetRef.current&&t.targetRef.current.contains(n.target)||t.elementRef&&t.elementRef.current&&t.elementRef.current.contains(n.target)||t.props.onClickOutside&&t.props.onClickOutside()},t.renderElement=function(n){return t.props.isOpened?(t.elementRef=n,t.props.content(n)):null},t.renderTarget=function(n){return t.targetRef=n,t.props.children(n)},t}return Object(u.a)(e,n),Object(c.a)(e,[{key:"componentDidUpdate",value:function(){this.props.isOpened?document.addEventListener("click",this.handleClick):document.removeEventListener("click",this.handleClick)}},{key:"render",value:function(){var n=this.props.attachment,e=void 0===n?"top center":n;return f.a.createElement(p.a,{attachment:e,renderTarget:this.renderTarget,renderElement:this.renderElement})}}]),e}(f.a.Component),b=t(44),m=t(45);function h(){var n=Object(b.a)(["\n  margin-top: 8px;\n  width: ","px;\n  background-color: #fff;\n  box-shadow: 0 0 10px -2px rgba(0, 0, 0, 0.3);\n  animation: "," 0.2s ease;\n  border-radius: 6px;\n  overflow: hidden;\n"]);return h=function(){return n},n}function g(){var n=Object(b.a)(["\n  0% {\n    opacity: 0;\n    transform: translateY(25%);\n  }\n  \n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n"]);return g=function(){return n},n}var v=Object(m.c)(g()),O=m.b.div(h(),(function(n){return n.width}),v);function x(){var n=Object(b.a)(["\n  padding: 20px 10px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  background-color: #fff;\n\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.05);\n  }\n"]);return x=function(){return n},n}var j=m.b.div(x()),k=function(n){function e(){var n,t;Object(a.a)(this,e);for(var r=arguments.length,c=new Array(r),u=0;u<r;u++)c[u]=arguments[u];return(t=Object(o.a)(this,(n=Object(i.a)(e)).call.apply(n,[this].concat(c)))).onClick=function(){t.props.onClick(t.props.item)},t}return Object(u.a)(e,n),Object(c.a)(e,[{key:"render",value:function(){var n=this.props,e=n.item,t=n.renderContent;return f.a.createElement(j,{onClick:this.onClick},t(e))}}]),e}(f.a.PureComponent);function E(){var n=Object(b.a)(["\n  font-size: 14px;\n  color: #000;\n"]);return E=function(){return n},n}var C=m.b.div(E()),y=function(n){var e=n.text,t=n.onClick;return f.a.createElement(k,{item:e,onClick:t,renderContent:function(n){return f.a.createElement(C,null,n)}})},w=function(n){function e(){var n,t;Object(a.a)(this,e);for(var r=arguments.length,c=new Array(r),u=0;u<r;u++)c[u]=arguments[u];return(t=Object(o.a)(this,(n=Object(i.a)(e)).call.apply(n,[this].concat(c)))).renderContent=function(n){var e=t.props,r=e.content,a=e.width,c=void 0===a?100:a;return f.a.createElement(O,{ref:n,width:c},r())},t}return Object(u.a)(e,n),Object(c.a)(e,[{key:"render",value:function(){var n=this.props,e=n.isOpened,t=n.children,a=n.onClickOutside,c=Object(r.a)(n,["isOpened","children","onClickOutside"]);return f.a.createElement(d,Object.assign({},c,{isOpened:e,content:this.renderContent,onClickOutside:a}),(function(n){return t(n)}))}}]),e}(f.a.Component);w.TextItem=y;var S=w;t.d(e,"a",(function(){return S}))},146:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(44),o=t(45);function i(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 256px;\n  height: 100%;\n  background-color: #fafafa;\n"]);return i=function(){return n},n}var u=o.b.div(i());function l(){var n=Object(c.a)(["\n  display: inline-block;\n  font-size: 10px;\n  margin-top: 8px;\n  background-color: rgb(206, 213, 219);\n  font-weight: 500;\n  text-transform: uppercase;\n  color: #fff;\n  border-radius: 24px;\n  padding: 4px 12px;\n  line-height: 16px;\n  letter-spacing: 1px;\n"]);return l=function(){return n},n}function f(){var n=Object(c.a)(["\n  font-size: 16px;\n  color: rgb(139, 149, 158);\n  line-height: 1.5;\n"]);return f=function(){return n},n}function s(){var n=Object(c.a)(["\n  font-size: 16px;\n  color: #000;\n  line-height: 1.5;\n"]);return s=function(){return n},n}function p(){var n=Object(c.a)(["\n  margin-bottom: 16px;\n  width: 64px;\n  height: 64px;\n  background-image: url(",");\n  background-size: cover;\n  border-radius: 50%;\n"]);return p=function(){return n},n}function d(){var n=Object(c.a)(["\n  padding: 32px;\n"]);return d=function(){return n},n}var b=o.b.div(d()),m=o.b.div(p(),(function(n){return n.avatarUrl})),h=o.b.div(s()),g=o.b.div(f()),v=o.b.div(l()),O=t(24),x=t(51),j=Object(x.b)()(Object(O.c)((function(n){return{user:n.user.current,isDemo:n.user.isDemo}}))((function(n){var e=n.user,t=n.isDemo,r=n.t;return a.a.createElement(b,null,a.a.createElement(m,{avatarUrl:e.avatarUrl}),a.a.createElement(h,null,e.firstName+" "+e.lastName),a.a.createElement(g,null,e.company),t&&a.a.createElement(v,null,r("app.demoAccount")))}))),k=t(129);function E(){var n=Object(c.a)(["\n  text-decoration: none;\n\n  &.active {\n    "," {\n      border-left: 2px solid #eb008d;\n      color: #191c1e;\n      font-weight: 500;\n    }\n  }\n"]);return E=function(){return n},n}function C(){var n=Object(c.a)(["\n  height: 56px;\n  line-height: 56px;\n  padding-left: 32px;\n  text-decoration: none;\n  font-size: 16px;\n  color: #8b959e;\n  border-left: 2px solid transparent;\n"]);return C=function(){return n},n}function y(){var n=Object(c.a)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding-top: 100px;\n"]);return y=function(){return n},n}var w=o.b.div(y()),S=o.b.div(C()),R=Object(o.b)(k.a)(E(),S),T=t(35),z=[{to:T.a.ACCOUNTS,nameTranslationKey:"app.links.accounts"},{to:T.a.CARDS,nameTranslationKey:"app.links.cards"}],A=Object(x.b)()((function(n){var e=n.t;return a.a.createElement(w,null,z.map((function(n){return a.a.createElement(R,{to:n.to,key:n.to},a.a.createElement(S,null,e(n.nameTranslationKey)))})))})),U=t(46),D=t(47),L=t(49),N=t(48),I=t(50);function K(){var n=Object(c.a)(["\n  display: inline-block;\n  cursor: pointer;\n  background-size: cover;\n  width: 30px;\n  height: 30px;\n\n  background-image: url(",");\n"]);return K=function(){return n},n}function J(){var n=Object(c.a)(["\n  padding: 20px;\n"]);return J=function(){return n},n}var Y={ru:"russia",en:"united-kingdom"},F=o.b.div(J()),G=o.b.div(K(),(function(n){return"https://cdn.countryflags.com/thumbs/".concat(Y[n.language],"/flag-round-250.png")})),H=t(133),P=t(89),X=function(n){function e(n){var t;return Object(U.a)(this,e),(t=Object(L.a)(this,Object(N.a)(e).call(this,n))).onOpenSelect=function(){t.setState({isOpened:!0})},t.onCloseSelect=function(){t.setState({isOpened:!1})},t.onLanguageSelect=function(n){P.a.changeLanguage(n),t.onCloseSelect()},t.renderContent=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(H.a.TextItem,{text:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439",onClick:function(){return t.onLanguageSelect("ru")}}),a.a.createElement(H.a.TextItem,{text:"English",onClick:function(){return t.onLanguageSelect("en")}}))},t.state={isOpened:!1},t}return Object(I.a)(e,n),Object(D.a)(e,[{key:"render",value:function(){var n=this;return a.a.createElement(F,null,a.a.createElement(H.a,{content:this.renderContent,isOpened:this.state.isOpened,onClickOutside:this.onCloseSelect,attachment:"bottom left"},(function(e){return a.a.createElement(G,{ref:e,onClick:n.onOpenSelect,language:P.a.language})})))}}]),e}(a.a.Component),q=function(){return a.a.createElement(u,null,a.a.createElement(j,null),a.a.createElement(A,null),a.a.createElement(X,null))};function B(){var n=Object(c.a)(["\n  max-width: 960px;\n  margin: 0 auto;\n"]);return B=function(){return n},n}function M(){var n=Object(c.a)(["\n  flex-grow: 1;\n  height: 100%;\n  overflow-y: scroll;\n  padding-top: 32px;\n"]);return M=function(){return n},n}function Q(){var n=Object(c.a)(["\n  display: flex;\n  height: 100%;\n"]);return Q=function(){return n},n}var V=o.b.div(Q()),W=o.b.div(M()),Z=o.b.div(B()),$=t(31),_=t(53),nn=Object(r.lazy)((function(){return t.e(5).then(t.bind(null,145))})),en=Object(r.lazy)((function(){return t.e(6).then(t.bind(null,148))})),tn=Object(r.lazy)((function(){return t.e(0).then(t.bind(null,143))})),rn=function(){return a.a.createElement(V,null,a.a.createElement(q,null),a.a.createElement(W,null,a.a.createElement(Z,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement(_.a,null)},a.a.createElement($.d,null,a.a.createElement($.b,{path:T.a.CARDS,component:en}),a.a.createElement($.b,{path:T.a.EXCHANGE,component:tn}),a.a.createElement($.b,{path:T.a.ACCOUNTS,component:nn}),a.a.createElement($.a,{to:T.a.ACCOUNTS}))))))};e.default=rn}}]);
//# sourceMappingURL=7.1949cbb3.chunk.js.map