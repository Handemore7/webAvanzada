(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{31:function(e,t,n){},33:function(e,t,n){},41:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),i=n(25),r=n.n(i),s=n(6),o=n(19),l=n(5),d=Object(a.createContext)({list:[{id:-1,listName:"Default"}],listCards:[],handleFilterList:function(e){},handleListAdd:function(e,t,n){console.log("wtf amigo, como llegaste aqui?")},handleListRemove:function(e){console.log("wtf amigo, como llegaste aqui?")},draggableItemActive:0}),u=(n(31),n(1)),j=function(e){var t=e.id,n=e.title,c=e.image,i=e.category,r=e.onClickItem,s=e.onDropItem,o=a.useContext(d),l=o.handleListAdd,j=(o.handleListRemove,o.draggableItemActive),m=i.split(", "),b=function(e){e.preventDefault()},f=function(e,t,n){l(e,t,n)};return Object(u.jsxs)("div",{className:"CardItem",draggable:!0,onDragStart:function(e){s(t)},onDrag:function(e){},onClick:r,onDragOver:b,onDragEnter:b,onDragEnd:function(e){},onDrop:function(e){e.preventDefault()},children:[Object(u.jsx)("div",{className:"CardItem__zone CardItem__zone--up",onDragOver:b,onDragEnter:b,onDrop:function(e){e.preventDefault(),console.log("dropUp: "+t+" drag: "+j),f(t,j,!0)}}),Object(u.jsx)("div",{className:"CardItem__zone CardItem__zone--down",onDragOver:b,onDragEnter:b,onDrop:function(e){e.preventDefault(),console.log("dropDown: "+t+" drag: "+j),f(t,j,!1)}}),Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{src:c,alt:""}),Object(u.jsx)("h1",{className:"CardItem__title",children:n}),Object(u.jsx)("div",{className:"CardItem__categories",children:m.map((function(e){return Object(u.jsx)("div",{className:"CardItem__categories--item",children:Object(u.jsx)("span",{children:e})},e)}))})]})]})},m=(n(33),function(e){var t=e.id,n=e.name,a=e.content,c=e.draggableItem,i=Object(l.f)(),r=function(e){c(e)};return Object(u.jsxs)("div",{className:"List List".concat(t),children:[Object(u.jsxs)("div",{className:"List__title",children:[Object(u.jsx)("p",{children:n})," ",Object(u.jsx)("span",{children:a.length})]}),Object(u.jsx)("div",{className:"List__content",children:a.map((function(e){return Object(u.jsx)(j,{id:e.id,title:e.title,type:e.type,rating:e.rating,image:e.image,category:e.category,dateAdded:e.dateAdded,dateCompleted:e.dateCompleted,comments:e.comments,onClickItem:function(){i.push("card/".concat(e.id))},onDropItem:r},"c".concat(e.id))}))})]})}),b=(n(41),function(e){var t=e.contentList,n=Object(l.g)().cardID,a=Object(l.f)(),c=t.find((function(e){return e.id===parseInt(n)}));if(void 0===c)return Object(u.jsx)(l.a,{to:"/"});var i=c.image;return Object(u.jsxs)("div",{className:"MainItem",children:[Object(u.jsx)("div",{onClick:function(){a.push("/")},className:"MainItem--background"}),Object(u.jsxs)("div",{className:"MainItem--content",children:[Object(u.jsx)("img",{src:i,alt:""}),Object(u.jsxs)("div",{className:"MainItem--content--info",children:[Object(u.jsx)("h1",{children:c.title}),Object(u.jsxs)("h2",{children:["tipo: ",c.type]}),Object(u.jsxs)("h3",{children:["id: ",n]}),Object(u.jsx)("p",{children:c.comments}),Object(u.jsx)("p",{children:Object(u.jsxs)("strong",{children:[" Order: ",c.order]})})]})]})]})}),f=n(18),h=(n(42),n(54),(0===f.a.apps.length?f.a.initializeApp({apiKey:"AIzaSyA6UYiZ2tKTGYG3pUoYh4BdBcKbjwSkhvw",authDomain:"animelist-c931d.firebaseapp.com",projectId:"animelist-c931d",storageBucket:"animelist-c931d.appspot.com",messagingSenderId:"526822790946",appId:"1:526822790946:web:2d5196f3fbcf12d680377b"}):f.a.apps[0]).firestore().collection("yoPuesQuienMas")),g=(n(45),n(46),function(e){var t=e.title,n=e.state,a=e.imgURL,c=e.interValueChange,i=function(e){c(e.target.checked)};switch(e.type){case"checkbox":return Object(u.jsxs)("div",{className:"toggleElemOption",children:[Object(u.jsx)("input",{className:"toggleElemOption__input",checked:n,onChange:i,type:"checkbox",name:t,id:t}),Object(u.jsx)("label",{className:"toggleElemOption__label",htmlFor:t,children:t})]});case"checkImg":return Object(u.jsxs)("div",{className:"toggleImgOption",children:[Object(u.jsx)("input",{className:"toggleImgOption__input",checked:n,onChange:i,type:"checkbox",name:t,id:t}),Object(u.jsx)("label",{className:"toggleImgOption__label",htmlFor:t,children:Object(u.jsx)("img",{className:"imgCheck",src:a,alt:""})})]})}return Object(u.jsx)("div",{children:"Algo sali\xf3 mal e.e"})}),p=(n(47),function(e){var t=e.infoCardReceived,n=e.setInfoCard,c=t,i=a.useState(c.title),r=Object(s.a)(i,2),o=r[0],l=r[1],d=!1,j=!1,m=!1;!function(e){switch(e){case"ova":d=!0;break;case"anime":m=!0;break;case"pelicula":j=!0}}(c.type);var b=a.useState(d),f=Object(s.a)(b,2),h=f[0],p=f[1],O=a.useState(m),v=Object(s.a)(O,2),x=v[0],C=v[1],I=a.useState(j),_=Object(s.a)(I,2),N=_[0],y=_[1],k=function(){y(!1),C(!1),p(!1)},S=function(e,t,n){return e?"ova":t?"anime":n?"pelicula":void 0};return Object(u.jsxs)("div",{className:"formStep1",children:[Object(u.jsx)("h1",{children:"Qu\xe9 quieres agregar?"}),Object(u.jsxs)("div",{className:"formStep1__inputElems",children:[Object(u.jsx)(g,{type:"checkbox",title:"Pelicula",state:N,interValueChange:function(e){k(),y(e),c.type=S(!1,!1,e),n(c)}}),Object(u.jsx)(g,{type:"checkbox",title:"Anime",state:x,interValueChange:function(e){k(),C(e),c.type=S(!1,e,!1),n(c)}}),Object(u.jsx)(g,{type:"checkbox",title:"Ova",state:h,interValueChange:function(e){k(),p(e),c.type=S(e,!1,!1),n(c)}})]}),Object(u.jsxs)("div",{className:"formStep1__inputInfoCard",children:["Nombre ","".concat(h?"del Ova":x?"del Anime":"de la pelicula"),Object(u.jsx)("input",{value:o,onChange:function(e){l(e.target.value),c.title=e.target.value,c.type=S(h,x,N),n(c)},type:"text"})," "]})]})}),O=(n(48),function(e,t){return e.popularity<t.popularity?-1:e.popularity>t.popularity?1:0}),v=[],x=function(e){var t=e.infoCardReceived,n=e.setInfoCard,c=e.searchImages,i=t;!function(e){e.sort(O);for(var t=[],n=1;n<4;n++)t.push(e[e.length-n]);t=t.filter((function(e){return void 0!==e})),v=[],t.forEach((function(e){v.push("https://image.tmdb.org/t/p/w500/".concat(e.poster_path))}))}(c);var r=v[0],o=v[1],l=v[2],d=a.useState(!1),j=Object(s.a)(d,2),m=j[0],b=j[1],f=a.useState(!1),h=Object(s.a)(f,2),p=h[0],x=h[1],C=a.useState(!1),I=Object(s.a)(C,2),_=I[0],N=I[1],y=function(){b(!1),x(!1),N(!1)};return Object(u.jsxs)("div",{className:"formStep2",children:[Object(u.jsx)("h1",{children:"Selecciona una imagen"}),Object(u.jsxs)("div",{className:"formStep2__optionsImg",children:[Object(u.jsx)("div",{className:"formStep2__optionsImg__item",children:Object(u.jsx)(g,{type:"checkImg",title:"Img2",state:p,imgURL:v[1],interValueChange:function(e){y(),x(e),i.image=o,n(i)}})}),Object(u.jsx)("div",{className:"formStep2__optionsImg__item",children:Object(u.jsx)(g,{type:"checkImg",title:"Img1",state:m,imgURL:v[0],interValueChange:function(e){y(),b(e),i.image=r,n(i)}})}),Object(u.jsx)("div",{className:"formStep2__optionsImg__item",children:Object(u.jsx)(g,{type:"checkImg",title:"Img3",state:_,imgURL:v[2],interValueChange:function(e){y(),N(e),i.image=l,n(i)}})})]}),Object(u.jsx)("button",{children:"Subir imagen"})]})},C=(n(49),function(e){var t=e.infoCardReceived,n=e.setInfoCard,c=t,i=a.useState(""),r=Object(s.a)(i,2),o=r[0],l=r[1],d=!1,j=!1,m=!1,b=!1,f=!1;!function(e){switch(e){case 1:d=!0;break;case 2:j=!0;break;case 3:m=!0;break;case 4:b=!0;break;case 5:f=!0}}(c.list);var h=a.useState(d),p=Object(s.a)(h,2),O=p[0],v=p[1],x=a.useState(j),C=Object(s.a)(x,2),I=C[0],_=C[1],N=a.useState(m),y=Object(s.a)(N,2),k=y[0],S=y[1],D=a.useState(b),E=Object(s.a)(D,2),A=E[0],L=E[1],w=a.useState(f),V=Object(s.a)(w,2),R=V[0],B=V[1],z=a.useState(c.comments),M=Object(s.a)(z,2),U=M[0],F=M[1],P=function(){v(!1),_(!1),S(!1),L(!1),B(!1)};return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"inputInfoCard",children:["Categorias: ",Object(u.jsx)("input",{value:o,onChange:function(e){l(e.target.value),c.category=e.target.value,n(c)},type:"text"})," "]}),Object(u.jsxs)("div",{className:"inputInfoCard",children:["Lista:",Object(u.jsxs)("div",{children:[Object(u.jsx)(g,{type:"checkbox",title:"En espera",state:O,interValueChange:function(e){P(),v(e),c.list=1,n(c)}}),Object(u.jsx)(g,{type:"checkbox",title:"Planeado",state:I,interValueChange:function(e){P(),_(e),c.list=2,n(c)}}),Object(u.jsx)(g,{type:"checkbox",title:"En proceso",state:k,interValueChange:function(e){P(),S(e),c.list=3,n(c)}}),Object(u.jsx)(g,{type:"checkbox",title:"Abandonado",state:A,interValueChange:function(e){P(),L(e),c.list=4,n(c)}}),Object(u.jsx)(g,{type:"checkbox",title:"Completado",state:R,interValueChange:function(e){P(),B(e),c.list=5,n(c)}})]})]}),Object(u.jsxs)("div",{className:"inputInfoCard",children:["Comentarios: ",Object(u.jsx)("input",{value:U,onChange:function(e){F(e.target.value),c.comments=e.target.value,n(c)},type:"text"})," "]})]})}),I=function(e){var t=e.handleCreateCard,n=(e.listContent,Object(l.f)()),c=a.useState(1),i=Object(s.a)(c,2),r=i[0],o=i[1],d=a.useState([{poster_path:"",popularity:0,id:0,backdrop_path:"",vote_average:0,overview:"",first_air_date:"",origin_country:[""],genre_ids:[0],original_language:"",vote_count:0,name:"",original_name:""}]),j=Object(s.a)(d,2),m=j[0],b=j[1],f=a.useState({title:"",type:"",category:"",list:2,comments:"",image:"empty"}),h=Object(s.a)(f,2),g=h[0],O=h[1],v=function(e){if(e){var a=r+1;o(a),4===a&&(t((c=g).title,c.type,c.category,c.list,c.comments,c.image),n.push("/"))}else{if(r>1)o(r-1)}var c};a.useEffect((function(){var e;e=""===g.title?"Nichijou":g.title,console.log(e),fetch("https://api.themoviedb.org/3/search/tv?api_key=ad7151c6dd6ce04898723178f00ce514&query=".concat(e),{method:"GET"}).then((function(e){return e.json()})).then((function(e){return t=e.results,console.log(t),void b(t);var t})).catch((function(e){}))}),[r,g.title]);return Object(u.jsxs)("div",{className:"CreateElement",children:[Object(u.jsx)("div",{onClick:function(){n.push("/")},className:"CreateElement--background"}),Object(u.jsx)("div",{className:"CreateElement--content",children:function(e){switch(e){case 1:return Object(u.jsx)(p,{infoCardReceived:g,setInfoCard:O});case 2:return Object(u.jsx)(x,{infoCardReceived:g,setInfoCard:O,searchImages:m});case 3:return Object(u.jsx)(C,{infoCardReceived:g,setInfoCard:O})}}(r)}),Object(u.jsxs)("div",{className:"navButtons",children:[Object(u.jsx)("button",{onClick:function(){v(!1)},className:"NavButton NavButton--back",children:"Atras"}),Object(u.jsx)("button",{onClick:function(){v(!0)},className:"NavButton NavButton--next",children:"Siguiente"})]})]})},_=(n(50),function(e){var t=e.onListClickedID,n=a.useContext(d).list,c=function(e){t(parseInt(e.target.id))};return Object(u.jsx)("div",{className:"LateralBar",children:n.map((function(e){var t=e.listName,n=e.id,a="".concat(n);return Object(u.jsx)("div",{onClick:c,className:"LateralBar__item",id:a,children:Object(u.jsx)("span",{children:t})})}))})}),N=(n(51),function(){var e=a.useContext(d),t=e.listCards,n=e.handleFilterList,c=a.useState(t),i=Object(s.a)(c,2),r=i[0],o=i[1],l=function(e){switch(e){case 1:return n(e);case 2:return n(e);case 3:return n(e);case 4:return n(e);case 5:return n(e);default:return t}},m=function(e){console.log(e)};return Object(u.jsxs)("div",{className:"filtersView",children:[Object(u.jsx)(_,{onListClickedID:function(e){o(l(e))}}),Object(u.jsx)("div",{className:"filterView__container",children:r.map((function(e){var t=e.id,n=e.title,a=e.type,c=e.rating,i=e.image,r=e.category,s=e.dateAdded,o=e.dateCompleted,l=e.comments;return Object(u.jsx)("div",{className:"filterView__card",children:Object(u.jsx)(j,{id:t,title:n,type:a,rating:c,image:i,category:r,dateAdded:s,dateCompleted:o,comments:l,onDropItem:m},t)})}))})]})}),y=(n(52),[{id:-1,title:"default",type:"default",list:-1,rating:-1,image:"default",category:"default",dateAdded:"default",dateCompleted:"default",comments:"default",order:-1}]),k=[{id:1,listName:"En espera"},{id:2,listName:"Planeado"},{id:3,listName:"En proceso"},{id:4,listName:"Abandonado"},{id:5,listName:"Completado"}],S=function(){var e=c.a.useState(k),t=Object(s.a)(e,2),n=t[0],a=(t[1],c.a.useState(y)),i=Object(s.a)(a,2),r=i[0],j=i[1];c.a.useEffect((function(){h.onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(e.data())})),j(t)}))}),[]);var f=function(e,t,n,a,c,i){var s=r.slice(),o={id:s.length,title:e,type:t,list:a,rating:5,image:i,category:n,dateAdded:"50000000000",dateCompleted:"50000005000",comments:c,order:s.length+1};h.doc(String(o.id)).set(o),s.push(o),j(s)},g=function(e){var t=[],n=0;r.forEach((function(n){n.list===e&&t.push(n)})),t.sort((function(e,t){return e.order<t.order?-1:e.order>t.order?1:0}));for(var a=0;a<t.length;a++)n++,t[a].order=n;return console.log(t),t},p=c.a.useState(0),O=Object(s.a)(p,2),v=O[0],x=O[1],C=function(e){x(e)};return Object(u.jsx)("main",{className:"AppMain",children:Object(u.jsx)(o.a,{basename:"/webAvanzada",children:Object(u.jsxs)(d.Provider,{value:{list:n,listCards:r,handleFilterList:g,handleListAdd:function(e,t,n){console.log("drop: "+e),console.log("drag: "+t);var a=r.findIndex((function(t){return t.id===e})),c=r[a].list,i=r.findIndex((function(e){return e.id===t})),s=r.slice();if(n){for(var o=[],l=0;l<s.length;l++)s[l].list==s[a].list&&o.push(s[l]);console.log(s);for(var d=s[a].order-1;d<o.length;d++)o[d].order=o[d].order+1;s[i].list=c;for(var u=0;u<s.length;u++);s[i].order=s[a].order-1}else{o=[];for(var j=0;j<s.length;j++)s[j].list==s[a].list&&o.push(s[j]);console.log(s);for(var m=s[a].order;m<o.length;m++)o[m].order=o[m].order+1;s[i].list=c;for(var b=0;b<s.length;b++);s[i].order=s[a].order+1}for(var f=0;f<s.length;f++)h.doc(String(s[f].id)).set(s[f]);console.log(s)},handleListRemove:function(e){var t=r.findIndex((function(t){return t.id===e})),n=r.slice();n[t].list*=-1,j(n)},draggableItemActive:v},children:[Object(u.jsx)(l.b,{path:["/","/card/:cardID","/createElement"],exact:!0,children:n.map((function(e){var t=e.listName,n=e.id;return Object(u.jsx)(m,{id:n,name:t,content:g(n),draggableItem:C},"l".concat(n))}))}),Object(u.jsx)(l.b,{path:"/card/:cardID",render:function(){return Object(u.jsx)(b,{contentList:r})}}),Object(u.jsx)(l.b,{path:"/createElement",render:function(){return Object(u.jsx)(I,{handleCreateCard:f,listContent:n})}}),Object(u.jsx)(l.b,{path:"/filters",render:function(){return Object(u.jsx)(N,{})}}),Object(u.jsx)(o.b,{to:"/createElement",children:Object(u.jsx)("button",{className:"btn btnAddCard",children:"+"})}),Object(u.jsx)(o.b,{to:"/filters",children:Object(u.jsx)("button",{className:"btn btnChangeView",children:"C"})})]})})})};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(S,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.c63fdc80.chunk.js.map