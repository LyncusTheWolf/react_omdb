(this.webpackJsonpreact_omdb=this.webpackJsonpreact_omdb||[]).push([[0],{11:function(t,e,n){},12:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),r=n(6),u=n.n(r),i=(n(11),n(3)),a=(n(12),n(2)),s=n.n(a),l=n(5),b="http://www.omdbapi.com/?apikey=".concat("ffe01f6a"),f=function(){var t=Object(l.a)(s.a.mark((function t(e){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(b,"&s=").concat(e)).then((function(t){return t.json()})).then((function(t){return t})).catch((function(t){return t}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=n(0),h=function(t){var e=t.show,n=t.onClose,c=t.children;return console.log(c),e?Object(j.jsxs)("div",{className:"modal_container",children:[Object(j.jsx)("button",{onClick:n,children:"x"}),c]}):null};var d=function(){var t=Object(c.useState)("Batman"),e=Object(i.a)(t,2),n=e[0],o=e[1],r=Object(c.useState)(!1),u=Object(i.a)(r,2),a=(u[0],u[1]),s=Object(c.useState)([]),l=Object(i.a)(s,2),b=(l[0],l[1]),d=Object(c.useState)(null),O=Object(i.a)(d,2),m=(O[0],O[1]),p=Object(c.useRef)(null);return Object(c.useEffect)((function(){a(!0),f(n).then((function(t){console.log(null),b((function(e){return t.Search}))})).catch((function(t){console.log(t),b([]),m(t)})).finally((function(){a(!1)}))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"movie_site_title",children:"Welcome to big movie search engine"}),Object(j.jsx)("button",{onClick:function(){f("Batman").then((function(t){b((function(e){return t.Search}))}))},children:"Update Movie List"}),Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),console.log("submitted",t),console.log(p.current.value),o(p.current.value)},children:[Object(j.jsx)("input",{type:"text",placeholder:"",ref:p}),Object(j.jsx)("button",{children:"Submit"})]}),Object(j.jsx)(h,{show:!0,onClose:function(){console.log("closing modal")},children:Object(j.jsx)("p",{children:"Test Params"})})]})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,r=e.getLCP,u=e.getTTFB;n(t),c(t),o(t),r(t),u(t)}))};u.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(d,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.812a66be.chunk.js.map