(this["webpackJsonpkozodoi-club-hack"]=this["webpackJsonpkozodoi-club-hack"]||[]).push([[0],{169:function(e,a,t){},174:function(e,a,t){},175:function(e,a,t){},176:function(e,a,t){},177:function(e,a,t){"use strict";t.r(a);t(93),t(119),t(121),t(122),t(124),t(125),t(126),t(127),t(128),t(129),t(130),t(131),t(133),t(134),t(135),t(136),t(137),t(138),t(139),t(140),t(141),t(142),t(144),t(145),t(146),t(147),t(148),t(149),t(150),t(151),t(152),t(153),t(154),t(155),t(156),t(157),t(158),t(159),t(160),t(161);var c=t(0),r=t.n(c),n=t(83),o=t.n(n),s=t(84),l=t.n(s),i=t(24),m=t(23),d=t(6),u=t(7),f=t(22),_=t.n(f),p=(t(169),function(e){var a=e.foodAreas,t=e.order;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"Home"},a.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("div",{className:"Home__fixed-content"},r.a.createElement("header",{className:"Home__header"},r.a.createElement("h1",{className:"Home__head"},r.a.createElement(d.b,{to:"/",className:"Home__logo"},e.name)),r.a.createElement(d.b,{to:"/",className:"Home__change-tz"},r.a.createElement("img",{className:"Home__edit",alt:"change-profile",src:_.a}))),r.a.createElement("ul",{className:"Home__tabs"},r.a.createElement("li",{className:"Home__tab Home__tab_active"},"\u0415\u0434\u0430"))),r.a.createElement("ul",{className:"Home__items"},e.items.map((function(e){return r.a.createElement("li",{className:"Home__item",key:e.id},r.a.createElement(d.b,{className:"Home__food-link",to:e.link},r.a.createElement("img",{alt:e.name,className:"Home__image",src:e.image}),r.a.createElement("h3",{className:"Home__food-name"},e.name),r.a.createElement("p",{className:"Home__food-type"},e.description)))}))))}))),0!==Object.keys(t).length&&r.a.createElement("footer",{className:"Footer"},r.a.createElement(d.b,{to:"/orders",className:"Footer__orders"},"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b")))});p.defaultProps={foodAreas:[]};var E=p,g=t(35),N=t.n(g);t(51);var h=function(e){var a=e.item,t=e.order,n=e.onIncrementPosition,o=e.onDecrementPosition,s=e.area,l=Object(c.useMemo)((function(){var e=new Set((a.foods||[]).map((function(e){return e.id}))),c=Object.values(t).filter((function(a){var t=a.item.id;return e.has(t)})).reduce((function(e,a){var t=a.count,c=a.item.price;return e+parseInt(c)*parseInt(t)}),0);return N.a.formatNumber(c,0," ")}),[t,a]);return r.a.createElement("div",{className:"Place"},r.a.createElement("header",{className:"Place__header"},r.a.createElement("aside",{className:"Place__trz"},r.a.createElement("h1",{className:"Place__head"},r.a.createElement(d.b,{to:"/",className:"Place__logo"},s.name)),r.a.createElement(d.b,{to:"/edit",className:"Place__change-tz"},r.a.createElement("img",{alt:"change-profile",src:_.a})))),r.a.createElement("aside",{className:"Place__restoraunt"},r.a.createElement("img",{className:"Place__restoraunt-logo",alt:"Fastfood logo",src:a.image}),r.a.createElement("h2",{className:"Place__restoraunt-name"},a.name),r.a.createElement("p",{className:"Place__restoraunt-type"},a.description)),r.a.createElement("ul",{className:"Place__foods"},a.foods.map((function(e){return r.a.createElement("li",{className:"Place__food",key:e.id},r.a.createElement("div",{className:"Place__food-logo-wrapper"},r.a.createElement("img",{alt:"food logo",className:"Place__food-logo",src:e.image})),r.a.createElement("h3",{className:"Place__food-name"},e.name),r.a.createElement("p",{className:"Place__food-composition"},e.composition),r.a.createElement("div",{className:"Place__food-price"},r.a.createElement("span",{className:".Place__food-price-price"},"\u0426\u0435\u043d\u0430: ",e.price,"\xa0\xa0"),r.a.createElement("button",{className:"Place__food-button",onClick:function(){o({id:e.id,itemId:a.id,areaId:s.id})}},"-"),r.a.createElement("span",null,"\xa0",e.id in t?t[e.id].count:0,"\xa0"),r.a.createElement("button",{className:"Place__food-button",onClick:function(){n({id:e.id,itemId:a.id,areaId:s.id})}},"+")))}))),function(e,a,t){return 0==e?r.a.createElement("footer",{className:"Place__footer",style:{display:"none"}},r.a.createElement(d.b,{to:"/basket/".concat(a.id,"/").concat(t.id),className:"Place__order"},"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437 (",e,")")):r.a.createElement("footer",{className:"Place__footer"},r.a.createElement(d.b,{to:"/basket/".concat(a.id,"/").concat(t.id),className:"Place__order"},"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437 (",e,")"))}(l,s,a))};h.defaultProps={item:{},onIncrementPosition:function(){},onDecrementPosition:function(){}};var b=h,v=(t(174),t(86)),O=t.n(v),P=function(e){var a=e.checked,t=e.onToggle;return r.a.createElement("div",{className:"Checkbox"},r.a.createElement("input",{checked:a,onChange:t,type:"checkbox"}),r.a.createElement("img",{alt:"custom checkbox logo",src:O.a}))};P.defaultProps={onToggle:function(){}};var k=P,I=Object(u.f)((function(e){var a=e.match.params,t=a.areaId,n=a.itemId,o=e.foodAreas,s=e.order,l=Object(c.useState)(!0),i=Object(m.a)(l,2),u=i[0],f=i[1],p=Object(c.useState)(""),E=Object(m.a)(p,2),g=E[0],h=E[1],b=Object(c.useState)(!1),v=Object(m.a)(b,2),O=v[0],P=v[1],I=o.filter((function(e){return e.id===t}))[0],y=I.items.filter((function(e){return e.id===n}))[0];console.log("Basket"),console.log("faster",u),console.log("time",g),console.log("selfService",O),console.log("area",I),console.log("item",y);var S=Object(c.useMemo)((function(){var e=new Set((y.foods||[]).map((function(e){return e.id}))),a=Object.values(s).filter((function(a){var t=a.item.id;return e.has(t)})),t=a.reduce((function(e,a){var t=a.count,c=a.item;return e+parseInt(c.price)*parseInt(t)}),0);return[N.a.formatNumber(t,0," "),a]}),[s,y]),j=Object(m.a)(S,2),A=j[0],x=j[1];return r.a.createElement("div",{className:"Place"},r.a.createElement("header",{className:"Place__header"},r.a.createElement("aside",{className:"Place__trz"},r.a.createElement("h1",{className:"Place__head"},r.a.createElement(d.b,{to:"/",className:"Place__logo"},I.name)),r.a.createElement(d.b,{to:"/edit",className:"Place__change-tz"},r.a.createElement("img",{alt:"change-profile",src:_.a})))),r.a.createElement("aside",{className:"Place__restoraunt"},r.a.createElement("img",{className:"Place__restoraunt-logo",alt:"Fastfood logo",src:y.image}),r.a.createElement("h2",{className:"Place__restoraunt-name"},y.name),r.a.createElement("p",{className:"Place__restoraunt-type"},y.description)),r.a.createElement("div",{className:"Place__products-wrapper"},r.a.createElement("ul",{className:"Place__products"},x.map((function(e){var a=e.item,t=e.count;return r.a.createElement("li",{className:"Place__product",key:a.id},r.a.createElement("img",{className:"Place__product-logo",alt:"Ordered product logo",src:a.image}),r.a.createElement("h3",{className:"Place__product-name"},a.name),r.a.createElement("p",{className:"Place__product-price"},"\u0426\u0435\u043d\u0430: ",a.price),r.a.createElement("p",{className:"Place__product-count"},"x",t))}))),r.a.createElement(d.b,{className:"Place__change-product",to:"/place/".concat(t,"/").concat(n)},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c")),r.a.createElement("div",{className:"Place__choice"},r.a.createElement("h3",null,"\u0412\u0440\u0435\u043c\u044f:"),r.a.createElement("div",{className:"Place__choice-item"},r.a.createElement("span",null,"\u041a\u0430\u043a \u043c\u043e\u0436\u043d\u043e \u0431\u044b\u0441\u0442\u0440\u0435\u0435"),r.a.createElement(k,{checked:u,onToggle:function(){u?f(!1):(h(""),f(!0))}})),r.a.createElement("div",{className:"Place__choice-item"},r.a.createElement("span",null,"\u041d\u0430\u0437\u043d\u0430\u0447\u0438\u0442\u044c"),r.a.createElement("input",{type:"time",value:g,onFocus:function(){f(!1)},onChange:function(e){f(!1),h(e.target.value)},onBlur:function(){g&&f(!1)}})),r.a.createElement("div",{className:"Place__choice-item"},r.a.createElement("h3",null,"\u0421 \u0441\u043e\u0431\u043e\u0439"),r.a.createElement(k,{checked:O,onToggle:function(){return P(!O)}})),r.a.createElement("div",{className:"Place__choice-item"},r.a.createElement("h3",null,"\u041d\u0430 \u043c\u0435\u0441\u0442\u0435"),r.a.createElement(k,{checked:!O,onToggle:function(){return P(!P)}}))),r.a.createElement("footer",{className:"Place__footer"},r.a.createElement(d.b,{to:"/order/".concat(I.id,"/").concat(y.id),className:"Place__order"},"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c ",A)))})),y=t(87),S=t.n(y),j=(t(175),function(e){var a=e.order,t=e.orderStatuses,n=e.foodAreas,o=e.setFinishedOrder,s=e.setActiveOrder;console.log("Orders"),console.log("order",a),console.log("orderStatues",t),console.log("foodAreas",n),console.log("setFinishedOrder",o),console.log("setActiveOrder",s);var l=Object(c.useMemo)((function(){var e=Object.keys(t).filter((function(e){return"ACTIVE"===t[e]})).map((function(e){return e})),c=[],r=new Set(e);return n.forEach((function(e){e.items.forEach((function(t){if(r.has(t.id)){var n={placeId:e.id,placeName:e.name,shopId:t.id,shopName:t.name,price:t.foods.reduce((function(e,t){if(t.id in a){var c=a[t.id],r=c.item.price,n=c.count;return e+parseInt(r)*parseInt(n)}return e}),0),link:"/order/".concat(e.id,"/").concat(t.id)};c.push(n)}}))})),c}),[a,t,n]),i=Object(c.useMemo)((function(){var e=Object.keys(t).filter((function(e){return"ACTIVE"!==t[e]})).map((function(e){return e})),c=[],r=new Set(e);return n.forEach((function(e){e.items.forEach((function(t){if(r.has(t.id)){var n={placeName:e.name,shopName:t.name,shopId:t.id,price:t.foods.reduce((function(e,t){if(t.id in a){var c=a[t.id],r=c.item.price,n=c.count;return e+parseInt(r)*parseInt(n)}return e}),0),link:"/order/".concat(e.id,"/").concat(t.id)};c.push(n)}}))})),c}),[a,t,n]);return r.a.createElement("div",{className:"Orders"},r.a.createElement("ul",{className:"Orders__active-orders"},l.map((function(e){return r.a.createElement("li",{className:"Orders__active-order",key:e.link},r.a.createElement("div",{className:"Orders__left"},r.a.createElement("h3",{className:"Orders__header"},e.placeName),r.a.createElement("p",{className:"Orders__shop-name"},e.shopName),r.a.createElement("p",{className:"Orders__price"},"\u0421\u0443\u043c\u043c\u0430 ",e.price," - \u041e\u043f\u043b\u0430\u0447\u0435\u043d\u043e")),r.a.createElement("div",{className:"Orders__time"},"~ 15 \u041c"),r.a.createElement(d.b,{className:"Orders__change",to:"/place/".concat(e.placeId,"/").concat(e.shopId)},"\u0418\u0437\u043c"),r.a.createElement("button",{className:"Orders__cancel",onClick:function(){o({itemId:e.shopId})}},"\u041e\u0442\u043c."))}))),r.a.createElement("ul",{className:"Orders__finished-orders"},i.map((function(e){return r.a.createElement("li",{className:"Orders__finished-order",key:e.link},r.a.createElement("div",{className:"Orders__left"},r.a.createElement("h3",{className:"Orders__header Orders__dark"},e.placeName),r.a.createElement("p",{className:"Orders__shop-name Orders__pink"},e.shopName),r.a.createElement("p",{className:"Orders__price Orders__pink"},"\u0421\u0443\u043c\u043c\u0430 ",e.price," - \u041e\u043f\u043b\u0430\u0447\u0435\u043d\u043e")),r.a.createElement("button",{className:"Orders__repeat",onClick:function(){s({itemId:e.shopId})}},r.a.createElement("img",{className:"Orders__refresh",alt:"repeat order",src:S.a})))}))))});j.defaultProps={setFinishedOrder:function(){},setActiveOrder:function(){}};var A=j,x=function(e){var a=e.match.params,t=a.areaId,c=a.itemId,n=e.history,o=e.foodAreas,s=e.setActiveOrder;console.log("Order"),console.log("areaId",t),console.log("itemId",c),console.log("history",n),console.log("foodAreas",o),console.log("setActiveOrder",s);var l=o.filter((function(e){return e.id===t}))[0],i=l.items.filter((function(e){return e.id===c}))[0];return r.a.createElement("div",{className:"Place Place_order"},r.a.createElement("header",{className:"Place__header"},r.a.createElement("aside",{className:"Place__trz"},r.a.createElement("h1",{className:"Place__head"},r.a.createElement(d.b,{to:"/",className:"Place__logo"},l.name)),r.a.createElement(d.b,{to:"/edit",className:"Place__change-tz"},r.a.createElement("img",{alt:"change-profile",src:_.a})))),r.a.createElement("aside",{className:"Place__restoraunt"},r.a.createElement("img",{className:"Place__restoraunt-logo",alt:"Fastfood logo",src:i.image}),r.a.createElement("h2",{className:"Place__restoraunt-name"},i.name),r.a.createElement("p",{className:"Place__restoraunt-type"},i.description)),r.a.createElement("div",{className:"Place__order-body"},r.a.createElement("h3",{className:"Place__order-number-header"},"\u041d\u043e\u043c\u0435\u0440 \u0432\u0430\u0448\u0435\u0433\u043e \u0437\u0430\u043a\u0430\u0437\u0430"),r.a.createElement("main",{className:"Place__order-number"},"7"),r.a.createElement("p",{className:"Place__order-number-header"},"\u0417\u0430\u043a\u0430\u0437 \u0431\u0443\u0434\u0435\u0442 \u0433\u043e\u0442\u043e\u0432 \u0447\u0435\u0440\u0435\u0437"),r.a.createElement("h3",{className:"Place__order-time"},"~ 15 \u043c\u0438\u043d\u0443\u0442")),r.a.createElement("footer",{className:"Place__footer"},r.a.createElement("div",{to:"/orders",className:"Place__order",onClick:function(){s({itemId:c}),setTimeout((function(){n.push("/orders")}),0)}},"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b")))};x.defaultProps={setActiveOrder:function(){}};var T=Object(u.f)(x),C=(t(176),t(88)),H=t.n(C),w=t(89),z=t.n(w),F=t(90),J=t.n(F),D=t(91),V=t.n(D),M=t(36),B=t.n(M),K=t(54),W=t.n(K),L=t(37),q=t.n(L),G=t(55),Q=t.n(G),R=[{id:"pizikiva-gallery",name:'\u0422\u0420\u0426 "\u0418\u043c.\u041f\u044b\u0436\u0438\u043a\u043e\u0432\u0430"',items:[{id:"kfc",name:"KFC",link:"/place/pizikiva-gallery/kfc",description:"\u0421\u0435\u0442\u044c \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u043e\u0432 \u0431\u044b\u0441\u0442\u0440\u043e\u0433\u043e \u043f\u0438\u0442\u0430\u043d\u0438\u044f",image:H.a,foods:[{id:"classic",image:Q.a,name:"\u041a\u043b\u0430\u0441\u0441\u0438\u043a",price:150},{id:"potato",image:B.a,name:"\u041a\u0430\u0440\u0442\u043e\u0444\u0435\u043b\u044c \u0444\u0440\u0438",price:50}]},{id:"burger-king",name:"Burger King",link:"/place/pizikiva-gallery/burger-king",description:"\u0421\u0435\u0442\u044c \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u043e\u0432 \u0431\u044b\u0441\u0442\u0440\u043e\u0433\u043e \u043f\u0438\u0442\u0430\u043d\u0438\u044f",image:z.a,foods:[{id:"OneTowar",name:"\u0422\u043e\u0432\u0430\u0440 \u2116 1",composition:"\u0421\u043e\u0441\u0442\u0430\u0432: \u043f\u043e \u0413\u041e\u0421\u0422\u0443",price:630,image:B.a},{id:"TwoTowar",name:"\u0422\u043e\u0432\u0430\u0440 \u2116 2",composition:"\u0421\u043e\u0441\u0442\u0430\u0432: \u043f\u043e \u0413\u041e\u0421\u0422\u0443",price:450,image:W.a},{id:"ThreeTowar",name:"\u0422\u043e\u0432\u0430\u0440 \u2116 3",composition:"\u0421\u043e\u0441\u0442\u0430\u0432: \u043f\u043e \u0413\u041e\u0421\u0422\u0443",price:800,image:q.a},{id:"FourthTowar",name:"\u0422\u043e\u0432\u0430\u0440 \u2116 4",composition:"\u0421\u043e\u0441\u0442\u0430\u0432 \u043f\u043e \u0413\u041e\u0421\u0422\u0443",price:600,image:Q.a}]},{id:"macdac",name:"McDonal's",link:"/place/pizikiva-gallery/macdac",description:"\u0421\u0435\u0442\u044c \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u043e\u0432 \u0431\u044b\u0441\u0442\u0440\u043e\u0433\u043e \u043f\u0438\u0442\u0430\u043d\u0438\u044f",image:J.a,foods:[{id:"hamburger",image:W.a,name:"\u0413\u0430\u043c\u0431\u0443\u0440\u0433\u0435\u0440",price:50},{id:"bigmac",image:q.a,name:"\u0411\u0438\u0433 \u043c\u0430\u043a",price:200}]},{id:"subway",name:"SubWay",link:"/place/pizikiva-gallery/subway",image:V.a,description:"\u0421\u0435\u0442\u044c \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u043e\u0432 \u0431\u044b\u0441\u0442\u0440\u043e\u0433\u043e \u043f\u0438\u0442\u0430\u043d\u0438\u044f",foods:[{id:"melt-sub",image:q.a,name:"\u0421\u0430\u0431\u0432\u0435\u0439 \u043c\u0435\u043b\u0442",price:300},{id:"day-sub",image:B.a,name:"\u0421\u0430\u0431 \u0434\u043d\u044f",price:200}]}]}],U=R.reduce((function(e,a){return a.items.forEach((function(a){e[a.link]=a})),e}),{}),X=R.reduce((function(e,a){return a.items.forEach((function(a){a.foods.forEach((function(a){e[a.id]=a}))})),e}),{}),Y=function(){var e=Object(c.useState)(JSON.parse(localStorage.getItem("orderStatuses")||"null")||{}),a=Object(m.a)(e,2),t=a[0],n=a[1],o=Object(c.useState)(JSON.parse(localStorage.getItem("orders")||"null")||{}),s=Object(m.a)(o,2),l=s[0],f=s[1];return r.a.createElement(d.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",exact:!0},r.a.createElement(E,{foodAreas:R,order:l})),r.a.createElement(u.a,{path:"/order/:areaId/:itemId",exact:!0},r.a.createElement(T,{foodAreas:R,order:l,setActiveOrder:function(e){var a=e.itemId,c=Object(i.a)({},t);c[a]="ACTIVE",n(c),localStorage.setItem("orderStatuses",JSON.stringify(c))}})),r.a.createElement(u.a,{path:"/basket/:areaId/:itemId",exact:!0},r.a.createElement(I,{foodAreas:R,order:l})),r.a.createElement(u.a,{path:"/orders",exact:!0},r.a.createElement(A,{order:l,orderStatuses:t,foodAreas:R,setFinishedOrder:function(e){var a=e.itemId,c=Object(i.a)({},t);c[a]="CANCELED",n(c),localStorage.setItem("orderStatuses",JSON.stringify(c))},setActiveOrder:function(e){var a=e.itemId,c=Object(i.a)({},t);c[a]="ACTIVE",n(c),localStorage.setItem("orderStatuses",JSON.stringify(c))}})),r.a.createElement(u.a,{path:"/place/:area/:place",render:function(e){return r.a.createElement(b,Object.assign({},e,{item:U[e.location.pathname],area:R[0],order:l,onIncrementPosition:function(e){var a=e.id,c=e.itemId,r=(e.areaId,Object(i.a)({},l));a in r?r[a].count++:r[a]={item:X[a],count:1};var o=Object(i.a)({},t);0===Object.keys(o).length&&R.forEach((function(e){e.items.forEach((function(e){e.foods.forEach((function(a){if(a.id in l){var t=e.id===c?"ACTIVE":"DONE";o[e.id]=t}}))}))}));var s=JSON.stringify(r);localStorage.setItem("orders",s),localStorage.setItem("orderStatuses",JSON.stringify(o)),f(r),n(o)},onDecrementPosition:function(e){var a=e.id,c=e.itemId,r=(e.areaId,Object(i.a)({},l));a in r&&(1===r[a].count?delete r[a]:r[a].count--);var o=Object(i.a)({},t);0===Object.keys(o).length&&R.forEach((function(e){e.items.forEach((function(e){e.foods.forEach((function(a){if(a.id in l){var t=e.id===c?"ACTIVE":"DONE";o[e.id]=t}}))}))}));var s=JSON.stringify(r);localStorage.setItem("orders",s),localStorage.setItem("orderStatuses",JSON.stringify(o)),f(r),n(o)}}))}})))};l.a.send("VKWebAppInit"),o.a.render(r.a.createElement(Y,null),document.getElementById("root"))},22:function(e,a,t){e.exports=t.p+"static/media/edit.751f84c2.svg"},36:function(e,a,t){e.exports=t.p+"static/media/1.dfc54362.png"},37:function(e,a,t){e.exports=t.p+"static/media/3.dbf82c38.png"},51:function(e,a,t){},54:function(e,a,t){e.exports=t.p+"static/media/2.20489759.png"},55:function(e,a,t){e.exports=t.p+"static/media/4.e671d539.png"},86:function(e,a,t){e.exports=t.p+"static/media/check-symbol.06277842.svg"},87:function(e,a,t){e.exports=t.p+"static/media/refresh-button.1198ed41.svg"},88:function(e,a,t){e.exports=t.p+"static/media/kfc.4fd2ba47.png"},89:function(e,a,t){e.exports=t.p+"static/media/burger.35bcd067.png"},90:function(e,a,t){e.exports=t.p+"static/media/mcdac.60464810.png"},91:function(e,a,t){e.exports=t.p+"static/media/sub.4eb05fdd.png"},92:function(e,a,t){e.exports=t(177)}},[[92,1,2]]]);
//# sourceMappingURL=main.d83a050c.chunk.js.map