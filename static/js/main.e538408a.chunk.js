(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(e,a,t){},24:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){"use strict";t.r(a);var n,i,o,c,s,r,d=t(1),l=t.n(d),u=t(16),m=t.n(u),j=t(3),p=t(2),g=t(14),b="".concat("/webAvanzada","/images/"),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"".concat(b).concat(e)},f=(t(22),t(0)),v=function(e){e.id;var a=e.title,t=(e.type,e.rating,e.image),n=e.category,i=(e.dateAdded,e.dateCompleted,e.comments,e.onDeleteItem),o=e.onDragItem,c=e.onAddItem,s=e.onClickItem,r=h(t),d=n.split(", ");return Object(f.jsxs)("div",{draggable:!0,onDragStart:i,onDrag:o,onDragEnd:c,onClick:s,className:"CardItem",children:[Object(f.jsx)("h1",{children:a}),Object(f.jsx)("img",{src:r,alt:""}),Object(f.jsx)("div",{className:"CardItem__categories",children:d.map((function(e){return Object(f.jsx)("div",{className:"CardItem__categories--item",children:Object(f.jsx)("span",{children:e})})}))})]})},O=(t(24),function(e){var a=e.id,t=e.name,o=e.content,c=e.handleDeleteItem,s=e.handleListAdd,r=(e.handleDragItem,Object(p.f)()),d=function(e){e.preventDefault()};return Object(f.jsxs)("div",{className:"List List".concat(a),onDragOver:d,onDragEnter:d,onDrop:function(e){e.preventDefault(),i=a},children:[Object(f.jsxs)("div",{className:"List__title",children:[Object(f.jsx)("p",{children:t})," ",Object(f.jsx)("span",{children:o.length})]}),Object(f.jsx)("div",{className:"List__content",children:o.map((function(e){return Object(f.jsx)(v,{id:e.id,title:e.title,type:e.type,rating:e.rating,image:e.image,category:e.category,dateAdded:e.dateAdded,dateCompleted:e.dateCompleted,comments:e.comments,onDeleteItem:function(){console.log("Elimine el item")},onDragItem:function(){},onAddItem:function(){c(e.id),n=e.id,s(i,n)},onClickItem:function(){r.push("card/".concat(e.id))}})}))})]})}),x=(t(30),function(e){var a=e.contentList,t=Object(p.g)().cardID,n=Object(p.f)(),i=a.find((function(e){return e.id===parseInt(t)}));if(void 0==i)return Object(f.jsx)(p.a,{to:"/"});var o=h(i.image);return Object(f.jsxs)("div",{className:"MainItem",children:[Object(f.jsx)("div",{onClick:function(){n.push("/")},className:"MainItem--background"}),Object(f.jsxs)("div",{className:"MainItem--content",children:[Object(f.jsx)("img",{src:o,alt:""}),Object(f.jsxs)("div",{className:"MainItem--content--info",children:[Object(f.jsx)("h1",{children:i.title}),Object(f.jsxs)("h2",{children:["tipo: ",i.type]}),Object(f.jsxs)("h3",{children:["id: ",t]}),Object(f.jsx)("p",{children:i.comments})]})]})]})}),C=(t(31),t(32),function(e){var a=e.title,t=e.state,n=e.interValueChange,i=function(e){n(e.target.checked)};switch(e.type){case"checkbox":return Object(f.jsxs)("div",{className:"toggleElemOption",children:[Object(f.jsx)("input",{className:"toggleElemOption__input",checked:t,onChange:i,type:"checkbox",name:a,id:a}),Object(f.jsx)("label",{className:"toggleElemOption__label",htmlFor:a,children:a})]});case"checkImg":return Object(f.jsxs)("div",{className:"toggleImgOption",children:[Object(f.jsx)("input",{className:"toggleImgOption__input",checked:t,onChange:i,type:"checkbox",name:a,id:a}),Object(f.jsx)("label",{className:"toggleImgOption__label",htmlFor:a,children:Object(f.jsx)("img",{className:"imgCheck",src:h("Shingeki.jpg"),alt:""})})]})}return Object(f.jsx)("div",{children:"Algo sali\xf3 mal e.e"})}),y=(t(33),function(e){var a=e.infoCardReceived,t=e.setInfoCard,n=a,i=d.useState(n.title),o=Object(j.a)(i,2),c=o[0],s=o[1],r=d.useState(!1),l=Object(j.a)(r,2),u=l[0],m=l[1],p=d.useState(!1),g=Object(j.a)(p,2),b=g[0],h=g[1],v=d.useState(!1),O=Object(j.a)(v,2),x=O[0],y=O[1],N=function(e,a,t){return e?"ova":a?"anime":t?"pelicula":void 0};return Object(f.jsxs)("div",{className:"formStep1",children:[Object(f.jsx)("h1",{children:"Formulario?"}),Object(f.jsxs)("div",{className:"formStep1__inputElems",children:[Object(f.jsx)(C,{type:"checkbox",title:"Pelicula",state:x,interValueChange:function(e){y(e),m(!1),h(!1),n.type=N(!1,!1,e),t(n)}}),Object(f.jsx)(C,{type:"checkbox",title:"Anime",state:b,interValueChange:function(e){h(e),y(!1),m(!1),n.type=N(!1,e,!1),t(n)}}),Object(f.jsx)(C,{type:"checkbox",title:"Ova",state:u,interValueChange:function(e){m(e),y(!1),h(!1),n.type=N(e,!1,!1),t(n)}})]}),Object(f.jsxs)("div",{className:"inputInfoCard",children:["Nombre ","".concat(u?"del Ova":b?"del Anime":"de la pelicula"),Object(f.jsx)("input",{value:c,onChange:function(e){s(e.target.value),n.title=e.target.value,n.type=N(u,b,x),t(n)},type:"text"})," "]})]})}),N=(t(34),function(e){var a=e.infoCardReceived,t=(e.setInfoCard,a),n=d.useState(t.image),i=Object(j.a)(n,2),o=(i[0],i[1],d.useState(!1)),c=Object(j.a)(o,2),s=c[0],r=c[1],l=d.useState(!1),u=Object(j.a)(l,2),m=u[0],p=u[1],g=d.useState(!1),b=Object(j.a)(g,2),v=b[0],O=b[1];h("Shingeki.jpg");return Object(f.jsxs)("div",{className:"formStep2",children:[Object(f.jsxs)("div",{className:"formStep2__optionsImg",children:[Object(f.jsx)("div",{className:"formStep2__optionsImg__item",children:Object(f.jsx)(C,{type:"checkImg",title:"Img1",state:s,interValueChange:function(e){r(e),p(!1),O(!1)}})}),Object(f.jsx)("div",{className:"formStep2__optionsImg__item",children:Object(f.jsx)(C,{type:"checkImg",title:"Img2",state:m,interValueChange:function(e){r(!1),p(e),O(!1)}})}),Object(f.jsx)("div",{className:"formStep2__optionsImg__item",children:Object(f.jsx)(C,{type:"checkImg",title:"Img3",state:v,interValueChange:function(e){r(!1),p(!1),O(e)}})})]}),Object(f.jsx)("button",{children:"Buscar img"})]})}),I=(t(35),function(e){e.infoCardReceived,e.setInfoCard,e.listContent;var a=d.useState(""),t=Object(j.a)(a,2),n=t[0],i=t[1],o=d.useState(""),c=Object(j.a)(o,2),s=(c[0],c[1],d.useState("")),r=Object(j.a)(s,2),l=r[0],u=r[1],m=d.useState(!1),p=Object(j.a)(m,2);p[0],p[1];return Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{className:"inputInfoCard",children:["Categorias: ",Object(f.jsx)("input",{value:n,onChange:function(e){i(e.target.value)},type:"text"})," "]}),Object(f.jsxs)("div",{className:"inputInfoCard",children:["Lista:",Object(f.jsx)("label",{htmlFor:"List1",children:"List1"})," "]}),Object(f.jsxs)("div",{className:"inputInfoCard",children:["Comentarios: ",Object(f.jsx)("input",{value:l,onChange:function(e){u(e.target.value)},type:"text"})," "]})]})}),A=function(e){var a=e.handleCreateCard,t=e.listContent,n=Object(p.f)(),i=d.useState(1),o=Object(j.a)(i,2),c=o[0],l=o[1],u=d.useState({title:"",type:"",categories:"",list:2,image:""}),m=Object(j.a)(u,2),g=m[0],b=m[1],h=function(e){var t,i;e?(l(t=c+1),console.log(t),4==t&&(console.log("crear elemento lets gooooo"+s+r),i=g,console.log("interCreateadd"+i),a(i.title,i.type,i.img,i.list,i.comments),n.push("/"))):c>1&&(l(t=c-1),console.log(t))};return Object(f.jsxs)("div",{className:"CreateElement",children:[Object(f.jsx)("div",{onClick:function(){n.push("/")},className:"CreateElement--background"}),Object(f.jsx)("div",{className:"CreateElement--content",children:function(e){switch(e){case 1:return Object(f.jsx)(y,{infoCardReceived:g,setInfoCard:b});case 2:return Object(f.jsx)(N,{infoCardReceived:g,setInfoCard:b});case 3:return Object(f.jsx)(I,{infoCardReceived:g,setInfoCard:b,listContent:t})}}(c)}),Object(f.jsxs)("div",{className:"navButtons",children:[Object(f.jsx)("button",{onClick:function(){console.log("cliqueao Back"),h(!1)},className:"NavButton NavButton--back",children:"Atras"}),Object(f.jsx)("button",{onClick:function(){console.log("cliqueao Next"),h(!0)},className:"NavButton NavButton--next",children:"Siguiente"})]})]})},k=(t(36),[{id:0,title:"Adachi To Shimamura",type:"Anime",list:1,rating:5,image:"AdachiToShimamura.jpg",category:"Acci\xf3n, Comedia",dateAdded:"50000000000",dateCompleted:"50000005000",comments:"Adachi y Shimamura, dos chicas que asisten a la misma preparatoria y que son amigas inseparables. Ya sea jugando tenis, platicar sobre sus programas de televisi\xf3n favoritos, o solo relaj\xe1ndose, siempre est\xe1n juntas. Cuando Adachi se da cuenta de que siente una atracci\xf3n f\xedsica por Shimamura, toda su relaci\xf3n comenzar\xe1 a cambiar, \xbfser\xe1 para bien o para mal?"},{id:1,title:"Horimiya",type:"Anime",list:3,rating:4,image:"Horimiya.jpg",category:"Escolares, Recuentos de la vida, Romance, Shounen, Comedia",dateAdded:"500000000000",dateCompleted:"500000050000",comments:"Aunque admirada en la escuela por su amabilidad y destreza acad\xe9mica, la estudiante de preparatoria Kyouko Hori ha estado escondiendo otro lado de ella. Con sus padres a menudo fuera de casa debido al trabajo, Hori tiene que cuidar de su hermano menor y hacer las tareas del hogar, sin tener tiempo para socializar fuera de la escuela. Mientras tanto, Izumi Miyamura es visto como un inquietante otaku que usa anteojos. Sin embargo, en realidad es una persona amable e inepta para estudiar. Adem\xe1s, tiene nueve piercings escondidos detr\xe1s de su largo cabello, y un tatuaje a lo largo de su espalda y hombro izquierdo. Por pura casualidad, Hori y Miyamura se cruzan fuera de la escuela, ninguno luciendo como el otro lo esperar\xeda. Estos polos aparentemente opuestos se convierten en amigos, compartiendo un lado que nunca le han mostrado a nadie."},{id:2,title:"Kaifuku Jutsushi no Yarinaoshi",type:"Anime",list:5,rating:4,image:"Wtf.jpg",category:"Ecchi, Fantasia",dateAdded:"5000000000000",dateCompleted:"5000000500000",comments:"Wtf .-."},{id:3,title:"Wonder Egg priority",type:"Anime",list:4,rating:4,image:"WonderEggPriority.jpg",category:"Recuentos de la vida",dateAdded:"500000000000",dateCompleted:"500000050000",comments:"La historia de este anime original comienza cuando la protagonista, una chica de 14 a\xf1os llamada Ohto Ai, escucha una misteriosa voz mientras camina por la noche en su pueblo natal. Esa voz le otorga un huevo y le indica: \u201cSi deseas cambiar el futuro, solo tienes que elegir ahora. Ahora, cree en ti misma y rompe el huevo\u201d. Lo que le espera a Ai despu\xe9s de romper el huevo..."},{id:4,title:"Yakusoku no Neverland 2nd Season",type:"Anime",list:2,rating:4,image:"Neverland.jpg",category:"Ciencia ficcion, Misterio, Psicologico, Shounen, Suspenso",dateAdded:"500000000000",dateCompleted:"500000050000",comments:"Segunda temporada de Yakusoku no Neverland"},{id:5,title:"Higurashi no Naku Koro ni",type:"OVA",list:1,rating:4,image:"HigurashiNoNakuKoroNi.webp",category:"Suspenso, Comediademencia, Misterio, Psicologico, Sobrenatural, Terror",dateAdded:"500000000000",dateCompleted:"500000050000",comments:"Un c\xe1lido d\xeda de verano en 1983, el estudiante transferido Maebara Keiichi llega a un pac\xedfico pueblo rural en Hinamizawa. All\xed, se hace amigo de sus compa\xf1eras de clase Rena, Mion, Rika y Satoko. Aceptado como un miembro oficial del \u201cclub\u201d, Keiichi y la pandilla realizan diversas actividades como juegos de cartas y de mesa, as\xed como a las escondidas. Pero justo cuando Keiichi comenzaba a acostumbrarse a la vida en el campo, se encuentra con la oscura historia detr\xe1s de Hinamizawa. Mientras Keiichi va desentra\xf1ando este oscuro misterio, descubrir\xe1 que sus nuevos amigos podr\xedan no ser lo que aparentan."},{id:6,title:"Yesterday wo Utatte",type:"Anime",list:3,rating:4,image:"YesterdayWoUtatte.webp",category:"Drama, Recuentos de la vida, Romance, Seinen",dateAdded:"500000000000",dateCompleted:"500000050000",comments:"Despu\xe9s de la universidad, Rikuo Uozumi, un ni\xf1o sin mucha ambici\xf3n en la vida, toma un trabajo en una tienda de conveniencia. Los d\xedas pasan sin incidentes para Rikuo hasta que conoce a su ex novia y compa\xf1era de clase, pero especialmente gracias a la inusual Haru Nonaka y su mascota cuervo ..."},{id:7,title:"Listeners",type:"Anime",list:4,rating:4,image:"Listeners.jpg",category:"Ciencia Ficcion, Musica",dateAdded:"500000000000",dateCompleted:"500000050000",comments:"La \u201cgran sinfon\xeda adolescente\u201d se desarrolla en un mundo donde no existe nada llamado \u201cm\xfasica\u201d. Un chico se encuentra con Mu, una chica misteriosa con un conector de entrada de audio en su cuerpo. Cuando ella est\xe1 enchufada a un amplificador, algo que cambiar\xe1 el mundo se pone en marcha\u2026 \u201cAs\xed comienza un viaje de sonido que nunca ser\xe1 olvidado\u201d."},{id:8,title:"Oda Cinnamon Nobunaga",type:"Anime",list:4,rating:4,image:"OdaCinnamonNobunaga.jpg",category:"Comedia, Historico, Recuentos de la vida, Seinen",dateAdded:"500000000000",dateCompleted:"500000050000",comments:"Una chica adopta a un perro y lo lleva a casa, \xa1pero resulta que en su vida anterior, ese perro era Oda Nobunaga! Esta obra nos cuenta la historia del famoso personaje, ahora renacido como un perro akita."}]),S=[{id:1,listName:"En espera"},{id:2,listName:"Planeado"},{id:3,listName:"En proceso"},{id:4,listName:"Abandonado"},{id:5,listName:"Completado"}],_=function(){Object(p.f)();var e=l.a.useState(S),a=Object(j.a)(e,2),t=a[0],n=(a[1],l.a.useState(k)),i=Object(j.a)(n,2),s=i[0],r=i[1],d=function(e){var a=s.findIndex((function(a){return a.id===e})),t=s.slice();t[a].list*=-1,r(t)},u=function(e,a){console.log(e,a);var t=s.findIndex((function(e){return e.id===a})),n=s.slice();n[t].list=e,r(n)},m=function(e){document.addEventListener("mousemove",(function(e){o=e.clientX,c=e.clientY})),"".concat(o,", ").concat(c)},b=function(e,a,t,n,i){var o=s.slice();o.length,parseInt(n);r(o)},h=function(e){var a=[];return s.forEach((function(t){t.list===e&&a.push(t)})),a};return Object(f.jsx)("main",{className:"AppMain",children:Object(f.jsxs)(g.a,{basename:"/webAvanzada",children:[Object(f.jsx)(p.b,{path:"/",children:t.map((function(e){var a=e.listName,t=e.id;return Object(f.jsx)(O,{id:t,name:a,content:h(t),handleDeleteItem:d,handleListAdd:u,handleDragItem:m})}))}),Object(f.jsx)(p.b,{path:"/card/:cardID",render:function(){return Object(f.jsx)(x,{contentList:s})}}),Object(f.jsx)(p.b,{path:"/createElement",render:function(){return Object(f.jsx)(A,{handleCreateCard:b,listContent:t})}}),Object(f.jsx)(g.b,{to:"/createElement",children:Object(f.jsx)("button",{className:"buttonAddCard",children:"+"})})]})})};m.a.render(Object(f.jsx)(l.a.StrictMode,{children:Object(f.jsx)(_,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.e538408a.chunk.js.map