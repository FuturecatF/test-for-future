(this["webpackJsonptest-for-future"]=this["webpackJsonptest-for-future"]||[]).push([[0],{38:function(e,t,a){},39:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),n=a(24),s=a.n(n),o=(a(38),a(11)),i=(a(39),"GET/REQUEST_SEARCH"),l="GET/FETCH_BOOKS",u="GET/FETCH_BOOKS_SUCCESS",d="PAGINATION_BOOKS/ADD_BOOKS",b="PAGINATION_BOOKS/ADD_MOREBOOKS",j="SEARCHING/ADD_SEARCCONFIG",f="SEARCHING/SEARCCONFIG_UPDATE",O="FULLBOOK/GET_FULLBOOK",h="FULLBOOK/WRITE_FULLBOOK";var p=a(13),m=(a(43),a(8)),x=(a(44),a(32)),g=a(2),_=function(e){var t=e.onSearch,a=Object(x.a)({mode:"onChange"}),c=a.reset,r=a.register,n=a.handleSubmit,s=a.formState.isValid;return Object(g.jsxs)("form",{className:"searchform",onSubmit:n((function(e){t(e),c()})),noValidate:!0,children:[Object(g.jsxs)("fieldset",{className:"searchform__fieldset",children:[Object(g.jsx)("input",Object(m.a)({className:"searchform__input",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043d\u0438\u0433\u0438",type:"text"},r("search",{required:!0}))),Object(g.jsx)("button",{className:"searchform__btn",type:"submit",disabled:!s,children:"\u041f\u043e\u0438\u0441\u043a"})]}),Object(g.jsxs)("fieldset",{className:"searchform__fieldset searchform__fieldset_select-resize",children:[Object(g.jsxs)("label",{className:"searchform__label-select",htmlFor:"sorting",children:["Sorting by:"," "]}),Object(g.jsxs)("select",Object(m.a)(Object(m.a)({className:"searchform__select",id:"sorting"},r("sorting")),{},{children:[Object(g.jsx)("option",{value:"relevance",children:"relevance"}),Object(g.jsx)("option",{value:"newest",children:"newest"})]})),Object(g.jsxs)("label",{className:"searchform__label-select",htmlFor:"category",children:["Category:"," "]}),Object(g.jsxs)("select",Object(m.a)(Object(m.a)({className:"searchform__select",id:"category"},r("category")),{},{children:[Object(g.jsx)("option",{value:"",children:"all"}),Object(g.jsx)("option",{value:"art",children:"art"}),Object(g.jsx)("option",{value:"biography",children:"biography"}),Object(g.jsx)("option",{value:"computers",children:"computers"}),Object(g.jsx)("option",{value:"history",children:"history"}),Object(g.jsx)("option",{value:"medical",children:"medical"}),Object(g.jsx)("option",{value:"poetry",children:"poetry"})]}))]})]})};var v=function(e){var t=e.onSearch;return Object(g.jsx)("header",{className:"header",children:Object(g.jsx)(_,{onSearch:t})})},y=(a(47),a(48),a(7)),k="https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",S=function(e){var t=e.item,a=Object(y.g)(),c=Object(p.b)(),n=t.volumeInfo,s=n.categories,i=n.title,l=n.authors,u=(t.volumeInfo.imageLinks||k).thumbnail,d=r.a.useState(""),b=Object(o.a)(d,2),j=b[0],f=b[1],h=r.a.useState(""),m=Object(o.a)(h,2),x=m[0],_=m[1];return r.a.useEffect((function(){if(s){var e=s.join(", ");f(e)}if(l){var t=l.join(", ");_(t)}}),[s,l]),Object(g.jsxs)("li",{className:"bookscard",onClick:function(){var e;c((e=t.selfLink,{type:O,selfLink:e})),a.push("/book")},children:[Object(g.jsx)("img",{className:"bookscard__img",src:u||k,alt:"#"}),Object(g.jsxs)("div",{className:"bookscard__footer",children:[j&&Object(g.jsxs)("p",{className:"bookscard__text",children:["\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f: ",j]}),Object(g.jsxs)("p",{className:"bookscard__text",children:["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: ",i]}),x&&Object(g.jsxs)("p",{className:"bookscard__text",children:["\u0410\u0432\u0442\u043e\u0440: ",x]})]})]})},N=(a(51),function(){return Object(g.jsx)("div",{className:"preloader",children:Object(g.jsx)("div",{className:"preloader__container",children:Object(g.jsx)("span",{className:"preloader__round"})})})}),C=function(e){var t=e.books,a=e.onClickMore,c=e.isLoading,r=Object(p.c)((function(e){return e.cards.isLoadMore}));return Object(g.jsxs)("section",{className:"books",children:[c?Object(g.jsx)(N,{}):Object(g.jsx)("ul",{className:"books-items",children:t&&t.map((function(e){return Object(g.jsx)(S,{item:e},e.id)}))}),r&&t.length&&Object(g.jsx)("button",{type:"button",className:"books__btn",onClick:function(){a()},disabled:!r,children:"more"})]})},E=(a(52),a(53),function(e){var t=e.item.volumeInfo,a=t.title,c=t.authors,n=t.categories,s=t.imageLinks,i=t.description,l=r.a.useState(""),u=Object(o.a)(l,2),d=u[0],b=u[1],j=r.a.useState(""),f=Object(o.a)(j,2),O=f[0],h=f[1];r.a.useEffect((function(){if(n){var e=n.join(" / ");b(e)}if(c){var t=c.join(", ");h(t)}}),[n,c]);var p=s.small,m=s.large;return Object(g.jsxs)("li",{className:"fullbook",children:[Object(g.jsx)("div",{className:"fullbook__container-img",children:Object(g.jsx)("img",{className:"fullbook__img",src:m||p,alt:a})}),Object(g.jsxs)("div",{className:"fullbook__container",children:[d&&Object(g.jsx)("p",{className:"fullbook__category",children:d}),Object(g.jsx)("h3",{className:"fullbook__title",children:a}),O&&Object(g.jsx)("p",{className:"fullbook__author",children:O}),Object(g.jsx)("p",{className:"fullbook__description",children:i})]})]})}),w=function(e){var t=e.fullbook;return Object(g.jsx)("section",{className:"bookpage",children:Object(g.jsx)("ul",{className:"bookpage__list",children:t&&t.map((function(e){return Object(g.jsx)(E,{item:e},e.id)}))})})};var I=function(){var e=Object(p.b)(),t=Object(y.g)(),a=r.a.useState([]),c=Object(o.a)(a,2),n=c[0],s=c[1],l=Object(p.c)((function(e){return e.search})),u=l.searchWord,b=l.sorting,O=l.category,h=Object(p.c)((function(e){return e.search.startIndex})),m=Object(p.c)((function(e){return e.cards.fetchedCards.items})),x=Object(p.c)((function(e){return e.cards.isLoading})),_=Object(p.c)((function(e){return e.fullbook})),k=_.fullbook,S=_.showFullBook;return r.a.useEffect((function(){if(m){var e=m.filter((function(e){return e.volumeInfo.categories&&O?"object"===typeof e:null})).filter((function(e){return e.volumeInfo.categories.includes((t=O)?t[0].toUpperCase()+t.slice(1):t);var t}));s(""!==O?e:m)}}),[m,O]),Object(g.jsx)("div",{className:"page",children:Object(g.jsxs)("div",{className:"page__container",children:[Object(g.jsx)(v,{onSearch:function(a){var c={searchWord:a.search,startIndex:0,sorting:a.sorting,category:a.category};e(function(e){return{type:i,searchConfig:e}}(c)),e(function(e){return{type:j,payload:e}}(c)),s([]),t.push("/")}}),Object(g.jsxs)(y.d,{children:[Object(g.jsx)(y.b,{exact:!0,path:"/",children:Object(g.jsx)(C,{books:n,onClickMore:function(){if(console.log("searchWord",u),m.length){var t={search:u,startIndex:h+10,sorting:b,category:O};e(function(e){return{type:d,searchConfig:e}}(t)),e(function(e){return{type:f,payload:e}}(t))}},isLoading:x})}),Object(g.jsx)(y.b,{exact:!0,path:"/book",children:Object(g.jsx)(w,{fullbook:k})})]}),Object(g.jsx)(y.b,{path:"/",children:S?Object(g.jsx)(y.a,{to:"/book"}):Object(g.jsx)(y.a,{to:"/"})})]})})},L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,55)).then((function(t){var a=t.getCLS,c=t.getFID,r=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),c(e),r(e),n(e),s(e)}))},T=a(18),B=a(33),F=a(9),A={fetchedCards:[],isLoadMore:!0,isLoading:!1,error:[]},K={searchWord:"",startIndex:0,sorting:"",category:""},D={fullbook:[],showFullBook:!1},M=Object(T.b)({cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return console.log("FETCH_BOOKS",t.payload),Object(m.a)(Object(m.a)({},e),{},{fetchedCards:[],isLoadMore:!0,isLoading:!0,error:[]});case u:console.log("FETCH_BOOKS_SUCCESS",t.payload),t.payload.items.length<10&&(e.isLoadMore=!1);var a=Object(F.a)(new Map(t.payload.items.map((function(e){return[e.id,e]}))).values());return Object(m.a)(Object(m.a)({},e),{},{fetchedCards:{items:a,kind:t.payload.kind,totalItems:t.payload.totalItems},isLoading:!1,error:t.payload.error});case b:t.payload.items.length<10&&(e.isLoadMore=!1);var c=e.fetchedCards.items.concat(t.payload.items),r=Object(F.a)(new Map(c.map((function(e){return[e.id,e]}))).values());return Object(m.a)(Object(m.a)({},e),{},{fetchedCards:{items:r,kind:t.payload.kind,totalItems:t.payload.totalItems}});default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(m.a)(Object(m.a)({},e),{},{searchWord:t.payload.searchWord,startIndex:t.payload.startIndex,sorting:t.payload.sorting,category:t.payload.category});case f:return Object(m.a)(Object(m.a)({},e),{},{searchWord:t.payload.search,startIndex:e.startIndex+=10,sorting:t.payload.sorting,category:t.payload.category});default:return e}},fullbook:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:var a=[];return a.push(t.payload),Object(m.a)(Object(m.a)({},e),{},{fullbook:a,showFullBook:!0});default:return e}}}),H=a(4),G=a.n(H),R=a(17),W=a(12),U=Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).GAPI_KEY;function P(e){return V.apply(this,arguments)}function V(){return(V=Object(W.a)(G.a.mark((function e(t){var a,c,r,n,s,o,i;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.searchConfig,c=a.searchWord,r=void 0===c?t.searchConfig.search:c,n=a.startIndex,s=a.sorting,o=a.category,e.next=3,fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(r,"&subject:").concat(o,"&orderBy=").concat(s,"&startIndex=").concat(n,"&key=").concat(U));case 3:return i=e.sent,e.next=6,i.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(e){return J.apply(this,arguments)}function J(){return(J=Object(W.a)(G.a.mark((function e(t){var a,c;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.selfLink,e.next=3,fetch(a);case 3:return c=e.sent,e.next=6,c.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var X=G.a.mark(Z),Y=G.a.mark($),z=G.a.mark(ee),Q=G.a.mark(te);function Z(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.c)(i,$);case 2:return e.next=4,Object(R.c)(d,ee);case 4:return e.next=6,Object(R.c)(O,te);case 6:case"end":return e.stop()}}),X)}function $(e){var t;return G.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(R.b)({type:l});case 3:return a.next=5,Object(R.a)(P,e);case 5:return t=a.sent,a.next=8,Object(R.b)({type:u,payload:t});case 8:a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),console.log("FETCH_BOOKS",a.t0.message);case 13:case"end":return a.stop()}}),Y,null,[[0,10]])}function ee(e){var t;return G.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(R.a)(P,e);case 3:return t=a.sent,a.next=6,Object(R.b)({type:b,payload:t});case 6:a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log({message:a.t0.message});case 11:case"end":return a.stop()}}),z,null,[[0,8]])}function te(e){var t;return G.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(R.a)(q,e);case 3:return t=a.sent,a.next=6,Object(R.b)({type:h,payload:t});case 6:a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log({message:a.t0.message});case 11:case"end":return a.stop()}}),Q,null,[[0,8]])}var ae=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||T.c,ce=Object(B.a)(),re=Object(T.d)(M,Object(T.c)(Object(T.a)(ce),ae()));ce.run(Z);var ne=a(27);s.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(ne.a,{children:Object(g.jsx)(p.a,{store:re,children:Object(g.jsx)(I,{})})})}),document.getElementById("root")),L()}},[[54,1,2]]]);
//# sourceMappingURL=main.9d77c75e.chunk.js.map