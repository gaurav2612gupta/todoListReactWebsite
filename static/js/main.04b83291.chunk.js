(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(6),s=n.n(i),r=(n(12),n(7)),a=n(5),o=n(0),j=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"todo",children:[Object(o.jsx)("i",{className:"fa fa-times","aria-hidden":"true",onClick:function(){e.onSelect(e.id)}}),Object(o.jsxs)("li",{children:[" ",e.text," "]})]})})},u=function(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)([]),u=Object(a.a)(s,2),d=u[0],l=u[1],b=function(e){l((function(t){return t.filter((function(t,n){return n!==e}))}))};return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"modal",children:[Object(o.jsx)("h1",{children:"ToDo List"}),Object(o.jsxs)("div",{className:"inner",children:[Object(o.jsx)("input",{type:"text",placeholder:"Add Items",onChange:function(e){i(e.target.value)},value:n}),Object(o.jsx)("button",{onClick:function(){l((function(e){return[].concat(Object(r.a)(e),[n])})),i("")},children:" + "})]}),Object(o.jsx)("ul",{children:d.map((function(e,t){return Object(o.jsx)(j,{text:e,id:t,onSelect:b},t)}))})]})})})};s.a.render(Object(o.jsx)(u,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.04b83291.chunk.js.map