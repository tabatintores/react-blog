(this["webpackJsonpreact-blog"]=this["webpackJsonpreact-blog"]||[]).push([[0],{41:function(e,t,a){e.exports=a(71)},46:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(7),c=a.n(r),m=(a(46),a(15)),o=a(14),i=a(13),s=function(){return localStorage.getItem("articlesStorage")||localStorage.setItem("articlesStorage",JSON.stringify([])),JSON.parse(localStorage.getItem("articlesStorage"))},u=s(),E=function(e){localStorage.setItem("articlesStorage",JSON.stringify(e))},h=function(){return u.length>0?u[u.length-1].id+1:0},g=a(4),d=function(e){var t=e.id,a=e.title,n=e.author,r=e.text,c=e.date,m=e.category,o=e.comments,i="https://picsum.photos/500/300?random=".concat(t);return l.a.createElement(g.y,{className:"mt-5 text-left"},l.a.createElement(g.f,{md:"5"},l.a.createElement(g.A,{className:"rounded z-depth-2",hover:!0,waves:!0},l.a.createElement("img",{className:"img-fluid",src:i,alt:""}))),l.a.createElement(g.f,{md:"7",className:"d-flex flex-column justify-content-between position-relative"},l.a.createElement("a",{href:"#!",className:"light-blue-text"},l.a.createElement("h6",{className:"font-weight-bold mb-3"},m)),l.a.createElement("h3",{className:"font-weight-bold mb-3 p-0"},l.a.createElement("strong",null,a)),l.a.createElement("p",null,r),l.a.createElement("p",null,l.a.createElement("a",{href:"#!"},l.a.createElement("strong",null,n)),", ",c,", ",l.a.createElement(g.m,{icon:"comment-alt"})," ",o.length),l.a.createElement(g.r,{className:"w-100",to:"/article/"+t},l.a.createElement(g.c,{color:"blue",size:"md",className:"mb-lg-0 mb-4 waves-light"},"\u0427\u0438\u0442\u0430\u0442\u044c \u0434\u0430\u043b\u0435\u0435\xa0",l.a.createElement(g.m,{icon:"long-arrow-alt-right"}))),l.a.createElement(g.m,{icon:"times",className:"deleteArticle",onClick:function(){e.onDelete(t),console.log("clicked",t)}})))},f=function(){var e=Object(n.useState)(u),t=Object(i.a)(e,2),a=t[0],r=t[1],c=function(e){!function(e){var t=u.filter((function(t){return t.id!==e}));E(t)}(e),r(s()),console.log("\u0423\u0434\u0430\u043b\u0435\u043d\u0430 \u0441\u0442\u0430\u0442\u044c\u044f \u0441 id ".concat(e))};return a.length?a.map((function(e){var t=e.id,n=e.title,r=e.author,m=e.text,o=e.date,i=e.category,s=e.comments;return l.a.createElement(l.a.Fragment,{key:t},l.a.createElement(d,{id:t,key:t,title:n,author:r,text:m,date:o,category:i,comments:s,onDelete:c}),a[t+1]?l.a.createElement("hr",{className:"my-5"}):null)})):l.a.createElement("h2",null,"\u0421\u0442\u0430\u0442\u0435\u0439 \u043d\u0435\u0442!")},p=function(){return l.a.createElement(g.h,{className:"mt-5 text-center ArticlesMainPageListItem"},l.a.createElement("h1",null,"\u0421\u043f\u0438\u0441\u043e\u043a \u0441\u0442\u0430\u0442\u0435\u0439:"),l.a.createElement(f,null))},b=a(40),v=a(39),N=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),m=Object(i.a)(c,2),s=m[0],d=m[1],f=Object(n.useState)(),p=Object(i.a)(f,2),N=p[0],y=p[1],w=Object(o.f)();return l.a.createElement(g.h,null,l.a.createElement(g.y,{className:"justify-content-center align-items-center"},l.a.createElement(g.f,{md:"7"},l.a.createElement(g.d,null,l.a.createElement(g.e,null,l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(e,t,a){var n={id:h(),title:e,author:"user",text:t,date:(new Date).toLocaleDateString(),category:a,comments:[]};u.push(n),E(u)}(a,s,N),w.push("/")}},l.a.createElement("p",{className:"h4 text-center py-4"},"\u041d\u043e\u0432\u0430\u044f \u0441\u0442\u0430\u0442\u044c\u044f"),l.a.createElement("div",{className:"grey-text"},l.a.createElement(g.o,{label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u0442\u0430\u0442\u044c\u0438",group:!0,type:"text",validate:!0,error:"wrong",success:"right",onChange:function(e){return r(e.target.value)}}),l.a.createElement(b.a,{initialValue:"",init:{height:250,menubar:!1,plugins:["advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount"],toolbar:"undo redo | formatselect | bold italic backcolor |                                                 alignleft aligncenter alignright alignjustify |                                                 bullist numlist outdent indent | removeformat | help"},onChange:function(e){return d(e.target.getContent())}}),l.a.createElement(v.a,{onChange:function(e){return y(e.value)},options:[{label:"\u041f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044f",value:"\u041f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044f"},{label:"\u041f\u0440\u0438\u0440\u043e\u0434\u0430",value:"\u041f\u0440\u0438\u0440\u043e\u0434\u0430"},{label:"IT",value:"IT"},{label:"\u0411\u0438\u0437\u043d\u0435\u0441",value:"\u0411\u0438\u0437\u043d\u0435\u0441"},{label:"\u041e\u0442\u0434\u044b\u0445",value:"\u041e\u0442\u0434\u044b\u0445"}],className:"mt-5",placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e",isSearchable:"true"})),l.a.createElement("div",{className:"text-center py-4 mt-3"},l.a.createElement(g.c,{color:"cyan",type:"submit"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"))))))))},y=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],r=t[1];return l.a.createElement(g.s,{color:"blue-gradient",dark:!0,expand:"md"},l.a.createElement(g.t,null,l.a.createElement("strong",{className:"white-text"},"BLOG")),l.a.createElement(g.v,{onClick:function(){return r(!a)}}),l.a.createElement(g.g,{id:"navbarCollapse3",isOpen:a,navbar:!0},l.a.createElement(g.u,{left:!0},l.a.createElement(g.q,null,l.a.createElement(g.r,{to:"/"},l.a.createElement(g.m,{icon:"home"})," \u0414\u043e\u043c\u043e\u0439")),l.a.createElement(g.q,null,l.a.createElement(g.r,{to:"/create"},l.a.createElement(g.m,{icon:"plus"})," \u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u044c\u044e")),l.a.createElement(g.q,null,l.a.createElement(g.i,null,l.a.createElement(g.l,{nav:!0,caret:!0},l.a.createElement(g.m,{fab:!0,icon:"github"})),l.a.createElement(g.k,{right:!0,basic:!0,className:"dropdown-default"},l.a.createElement(g.j,{href:"#!"},"Action"),l.a.createElement(g.j,{href:"#!"},"Another Action"),l.a.createElement(g.j,{href:"#!"},"Something else here"),l.a.createElement(g.j,{href:"#!"},"Something else here")))))))},w=function(e){var t=Object(n.useState)((function(){var t=!0,a=!1,n=void 0;try{for(var l,r=u[Symbol.iterator]();!(t=(l=r.next()).done);t=!0){var c=l.value;if(c.id===+e.match.params.id)return c}}catch(m){a=!0,n=m}finally{try{t||null==r.return||r.return()}finally{if(a)throw n}}})),a=Object(i.a)(t,2),r=a[0];a[1];return l.a.createElement(g.d,{className:"my-5 px-5 pb-5"},l.a.createElement(g.e,null,l.a.createElement(g.y,null,l.a.createElement(g.f,{md:"12"},l.a.createElement(g.d,{reverse:!0},l.a.createElement(g.A,{hover:!0,cascade:!0,waves:!0},l.a.createElement("img",{src:"https://picsum.photos/1000/500",alt:"",className:"img-fluid"}),l.a.createElement(g.p,{overlay:"white-slight",className:"waves-light"})),l.a.createElement(g.e,{cascade:!0,className:"text-center"},l.a.createElement("h2",{className:"font-weight-bold"},r.title),l.a.createElement("p",null,l.a.createElement("a",{href:"#!"},l.a.createElement("strong",null,r.author)),", ",r.date),l.a.createElement(g.c,{color:"warning",className:"waves-light"},l.a.createElement(g.m,{icon:"pen",className:"pr-2"}),"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"),l.a.createElement(g.c,{color:"red",className:"waves-light"},l.a.createElement(g.m,{icon:"times",className:"pr-2"}),"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))),l.a.createElement(g.h,{className:"mt-5"},r.text)))))},S=function(){return l.a.createElement(m.a,null,l.a.createElement("div",{className:"container-fluid pl-0 pr-0"},l.a.createElement(y,null),l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:"/",component:p}),l.a.createElement(o.a,{path:"/create",component:N}),l.a.createElement(o.a,{path:"/article/:id",component:w}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(68),a(69),a(70);c.a.render(l.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[41,1,2]]]);
//# sourceMappingURL=main.3462f97a.chunk.js.map