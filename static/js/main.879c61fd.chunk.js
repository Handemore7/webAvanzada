(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{23:function(e,t,n){},25:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a,i,d,c,o=n(0),r=n.n(o),s=n(16),l=n.n(s),m=n(14),u=n(2),j=n(13),p="/images/",g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"".concat(p).concat(e)},b=(n(23),n(1)),f=function(e){var t=e.id,n=e.title,a=(e.type,e.rating,e.image),i=e.category,d=(e.dateAdded,e.dateCompleted,e.comments),c=e.onDeleteItem,o=e.onDragItem,r=e.onAddItem,s=e.onClickItem,l=g(a);return Object(b.jsxs)("div",{draggable:!0,onDragStart:c,onDrag:o,onDragEnd:r,onClick:s,className:"CardItem",children:[Object(b.jsx)("h1",{children:n}),Object(b.jsx)("img",{src:l,alt:""}),Object(b.jsxs)("p",{children:["id: ",t]}),Object(b.jsx)("p",{children:d}),Object(b.jsx)("p",{children:i})]})},h=(n(25),function(e){var t=e.id,n=e.name,d=e.content,c=e.handleDeleteItem,o=e.handleListAdd,r=(e.handleDragItem,Object(u.f)()),s=function(e){e.preventDefault()};return Object(b.jsxs)("div",{className:"List",onDragOver:s,onDragEnter:s,onDrop:function(e){e.preventDefault(),i=t},children:[Object(b.jsxs)("div",{className:"List__title",children:[Object(b.jsx)("p",{children:n})," ",Object(b.jsx)("span",{children:d.length})]}),d.map((function(e){return Object(b.jsx)(f,{id:e.id,title:e.title,type:e.type,rating:e.rating,image:e.image,category:e.category,dateAdded:e.dateAdded,dateCompleted:e.dateCompleted,comments:e.comments,onDeleteItem:function(){console.log("Elimine el item")},onDragItem:function(){},onAddItem:function(){c(e.id),a=e.id,console.log("list: "+i+"  cardId:"+a),o(i,a)},onClickItem:function(){r.push("".concat(e.id))}})}))]})}),O=(n(31),function(e){var t=e.contentList,n=Object(u.g)().cardID,a=Object(u.f)(),i=t.find((function(e){return e.id===parseInt(n)}));if(void 0==i)return Object(b.jsx)(u.a,{to:"/"});var d=g(i.image);return Object(b.jsxs)("div",{className:"MainItem",children:[Object(b.jsx)("div",{onClick:function(){a.push("/")},className:"MainItem--background"}),Object(b.jsxs)("div",{className:"MainItem--content",children:[Object(b.jsx)("img",{src:d,alt:""}),Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("h1",{children:i.title}),Object(b.jsxs)("h2",{children:["id: ",n]}),Object(b.jsx)("p",{children:i.comments})]})]})]})}),x=n(18),v=(n(32),function(e){return Object(x.a)(e),Object(b.jsxs)("div",{className:"CreateElement",children:[Object(b.jsx)("div",{className:"CreateElement--background"}),Object(b.jsx)("div",{className:"CreateElement--content"})]})}),C=(n(33),[{id:0,title:"Braindead",type:"serie",list:1,rating:5,image:"defaultCardImg.png",category:"Acci\xf3n, Comedia",dateAdded:"50000000000",dateCompleted:"50000005000",comments:"hola"},{id:1,title:"The Good Doctor",type:"serie",list:3,rating:4,image:"defaultCardImg.png",category:"Suspenso, Comedia",dateAdded:"500000000000",dateCompleted:"500000050000",comments:"maso"},{id:2,title:"La pelicula",type:"pelicula",list:5,rating:4,image:"defaultCardImg.png",category:"Terror, Thriller",dateAdded:"5000000000000",dateCompleted:"5000000500000",comments:"Nooooo alta movie "},{id:3,title:"pelicula4",type:"serie",list:4,rating:4,image:"defaultCardImg.png",category:"Suspenso, Comedia",dateAdded:"500000000000",dateCompleted:"500000050000",comments:"Alta movie man"},{id:4,title:"pelicula5",type:"serie",list:2,rating:4,image:"defaultCardImg.png",category:"Suspenso, Comedia",dateAdded:"500000000000",dateCompleted:"500000050000",comments:"Alta movie man"},{id:5,title:"pelicula6",type:"serie",list:1,rating:4,image:"defaultCardImg.png",category:"Suspenso, Comedia",dateAdded:"500000000000",dateCompleted:"500000050000",comments:"Alta movie man"},{id:6,title:"pelicula7",type:"serie",list:3,rating:4,image:"defaultCardImg.png",category:"Suspenso, Comedia",dateAdded:"500000000000",dateCompleted:"500000050000",comments:"Alta movie man"},{id:7,title:"pelicula8",type:"serie",list:4,rating:4,image:"defaultCardImg.png",category:"Suspenso, Comedia",dateAdded:"500000000000",dateCompleted:"500000050000",comments:"Alta movie man"}]),I=[{id:1,listName:"En espera"},{id:2,listName:"Planeado"},{id:3,listName:"En proceso"},{id:4,listName:"Abandonado"},{id:5,listName:"Completado"}],y=function(e){var t=[];return C.forEach((function(n){n.list===e&&t.push(n)})),t},A=function(){var e=Object(u.f)();console.log(e);var t,n=r.a.useState(I),a=Object(m.a)(n,2),i=a[0],o=(a[1],r.a.useState(C)),s=Object(m.a)(o,2),l=s[0],p=s[1],g=function(e){var t=l.findIndex((function(t){return t.id===e})),n=l.slice();n[t].list*=-1,p(n)},f=function(e,t){var n=l.findIndex((function(e){return e.id===t})),a=l.slice();a[n].list=e,p(a)},x=function(e){document.addEventListener("mousemove",(function(e){d=e.clientX,c=e.clientY})),t="".concat(d,", ").concat(c),console.log(t)};return Object(b.jsx)("main",{className:"appMain",children:Object(b.jsxs)(j.a,{basename:"/webAvanzada",children:[Object(b.jsx)(u.b,{path:"/",children:i.map((function(e){var t=e.listName,n=e.id;return Object(b.jsx)(h,{id:n,name:t,content:y(n),handleDeleteItem:g,handleListAdd:f,handleDragItem:x})}))}),Object(b.jsx)(u.b,{path:"/:cardID",render:function(){return Object(b.jsx)(O,{contentList:l})}}),Object(b.jsx)(j.b,{to:"/createElement",children:Object(b.jsx)("button",{className:"buttonAddCard",children:"+"})}),Object(b.jsx)(u.b,{path:"/createElement",render:function(){return Object(b.jsx)(v,{})}})]})})};l.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(A,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.879c61fd.chunk.js.map