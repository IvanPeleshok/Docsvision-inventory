(this["webpackJsonpany-project"]=this["webpackJsonpany-project"]||[]).push([[0],{104:function(e,n,t){e.exports={loader:"Loader_loader__3ByGs",progress:"Loader_progress__1Ftb1",indeterminate:"Loader_indeterminate__19Jpf","indeterminate-short":"Loader_indeterminate-short__rIWjb"}},141:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r={getHierarchy:function(e){return e.database.hierarchy},getInventory:function(e){return e.database.inventory},getCurrentInventory:function(e){return e.database.currentInventory},getCurrentNode:function(e){return e.database.currenNode},getCurrentName:function(e){return e.database.currenName},getCurrentLevel:function(e){return e.database.currenLevel},getLoader:function(e){return e.database.loading}}},211:function(e,n,t){e.exports=t(416)},408:function(e,n,t){},416:function(e,n,t){"use strict";t.r(n);t(212),t(221);var r=t(3),a=t.n(r),o=t(102),c=t.n(o),i=t(16);t(408);var u=t(71),s=t(70),d=t(104),l=t.n(d),f=function(){return a.a.createElement("div",{className:l.a.loader},a.a.createElement("div",{className:l.a.progress},a.a.createElement("div",{className:l.a.indeterminate})))},p=t(141),v=a.a.lazy((function(){return Promise.all([t.e(3),t.e(4)]).then(t.bind(null,477))})),b=Object(r.memo)((function(){var e,n=Object(i.f)(),t=Object(s.b)(),o=Object(s.c)(p.a.getLoader);return Object(r.useLayoutEffect)((function(){n.push("/database")}),[]),Object(r.useEffect)((function(){t(Object(u.d)()),t(Object(u.e)())}),[]),a.a.createElement(a.a.Fragment,null,o&&a.a.createElement(f,null),a.a.createElement("div",{className:"app-content"},a.a.createElement(i.c,null,a.a.createElement(i.a,{path:"/database",render:(e=v,function(n){return a.a.createElement(a.a.Suspense,{fallback:""},a.a.createElement(e,n))})}))))})),m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(415);var E=t(63),y=t(209),A=Object(E.combineReducers)({database:u.c}),O=Object(E.applyMiddleware)(y.a),g=Object(E.createStore)(A,O),j=t(210);c.a.render(a.a.createElement(j.a,null,a.a.createElement(s.a,{store:g},a.a.createElement(b,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/docsvision-db-task",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/docsvision-db-task","/service-worker.js");m?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):h(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):h(n,e)}))}}()},47:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"e",(function(){return o})),t.d(n,"a",(function(){return c})),t.d(n,"c",(function(){return i})),t.d(n,"d",(function(){return u}));var r,a=t(105);!function(e){e.room="room",e.above="above"}(r||(r={}));var o=function(e,n){var t=[];return n.map((function(n){e.keys[0].map((function(e){e===n.placeId&&t.push(n)}))})),{currentInventory:t,level:e.level}},c=function(e,n){console.log(n);var t=r.above,o=[];n.map((function(n){if(n.id===e){var t,r=null===(t=n.parts)||void 0===t?void 0:t.map((function(e){var n;return null===(n=e.parts)||void 0===n?void 0:n.map((function(e){return e.id}))}));o.push([null===r||void 0===r?void 0:r.flat()].concat(Object(a.a)(n.parts.map((function(e){return e.id}))),[n.id]).flat())}}));var c=Object.keys(o).length;return c||n.forEach((function(n){var t;null===(t=n.parts)||void 0===t||t.forEach((function(n){if(n.id===e){var t,r,c,i=null===(t=n.parts)||void 0===t?void 0:t.map((function(e){var n;return null===(n=e.parts)||void 0===n?void 0:n.map((function(e){return e.id}))}));o.push([null===i||void 0===i?void 0:i.flat()].concat(Object(a.a)(null!==(r=null===(c=n.parts)||void 0===c?void 0:c.map((function(e){return e.id})))&&void 0!==r?r:[]),[n.id]).flat())}}))})),c=Object.keys(o).length,(c=Object.keys(o).length)||n.forEach((function(n){var t;null===(t=n.parts)||void 0===t||t.forEach((function(n){var t;null===(t=n.parts)||void 0===t||t.forEach((function(n){if(n.id===e){var t,r,c,i=null===(t=n.parts)||void 0===t?void 0:t.map((function(e){var n;return null===(n=e.parts)||void 0===n?void 0:n.map((function(e){return e.id}))}));o.push([null===i||void 0===i?void 0:i.flat()].concat(Object(a.a)(null!==(r=null===(c=n.parts)||void 0===c?void 0:c.map((function(e){return e.id})))&&void 0!==r?r:[]),[n.id]).flat())}}))}))})),(c=Object.keys(o).length)||(o.push([e]),t=r.room),{keys:o,level:t}},i=function(e,n){return e.find((function(e){return e.id===n}))},u=function(e,n){var t;return null===e||void 0===e||null===(t=e.parts)||void 0===t?void 0:t.map((function(e){return n.find((function(n){return n.id===e}))}))}},71:function(e,n,t){"use strict";t.d(n,"c",(function(){return y})),t.d(n,"a",(function(){return A})),t.d(n,"d",(function(){return O})),t.d(n,"e",(function(){return g})),t.d(n,"b",(function(){return T})),t.d(n,"g",(function(){return N})),t.d(n,"f",(function(){return _}));var r=t(35),a=t.n(r),o=t(62),c=t(23),i=t(139);i.a.initializeApp({apiKey:"AIzaSyD6DnGbVfdJlDJ_pEOUfDfTDJrA8j3lIs8",authDomain:"dv-inventory.firebaseapp.com",databaseURL:"https://dv-inventory.firebaseio.com",projectId:"dv-inventory",storageBucket:"dv-inventory.appspot.com",messagingSenderId:"130062240176",appId:"1:130062240176:web:ecbca5d29b37d25c6cee75"});var u,s=i.a;!function(e){e.success="success",e.warn="warn",e.error="error"}(u||(u={}));var d=t(135),l=t.n(d);l.a.set("notifier","position","bottom-right");var f=function(e,n){l.a[e](n)},p=function(){return s.firestore().collection("places").get().then((function(e){return e.docs.map((function(e){return{id:e.id,data:e.data(),parts:e.data().parts&&e.data().parts.map((function(e){return e.id}))}}))})).catch((function(){return f(u.error,"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u043c\u0435\u0441\u0442")}))},v=function(){return s.firestore().collection("inventory").get().then((function(e){return e.docs.map((function(e){var n;return{id:e.id,data:e.data(),placeId:e.data().place?null===(n=e.data().place)||void 0===n?void 0:n.id:"Accidentally created in the database x.data().place === undefined"}}))})).catch((function(){return f(u.error,"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f")}))},b=function(e,n,t){var r=s.firestore();return r.collection("inventory").doc().set({name:e,count:n,place:r.collection("place").doc(t)}).then((function(){})).catch((function(){return f(u.error,"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c")}))},m=function(e){return s.firestore().collection("inventory").doc(e).delete().then((function(){})).catch((function(){return f(u.error,"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0443\u0434\u0430\u043b\u0438\u0442\u044c")}))},h=t(47),E={hierarchy:[],inventory:[],currentInventory:[],currenNode:"",currenName:"",currenLevel:h.b.above,loading:!1},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"DATABASE/SET_HEIRARCHY":return Object(c.a)(Object(c.a)({},e),{},{hierarchy:n.payload});case"DATABASE/SET_INVENTORY":return Object(c.a)(Object(c.a)({},e),{},{inventory:n.payload});case"DATABASE/SET_CURRENT_NODE":return Object(c.a)(Object(c.a)({},e),{},{currenNode:n.payload});case"DATABASE/SET_CURRENT_MANE_NODE":return Object(c.a)(Object(c.a)({},e),{},{currenName:n.payload});case"DATABASE/SET_CURRENT_INVENORY":return Object(c.a)(Object(c.a)({},e),{},{currentInventory:n.payload});case"DATABASE/SET_LOADING_TRUE":return Object(c.a)(Object(c.a)({},e),{},{loading:!0});case"DATABASE/SET_LOADING_FALSE":return Object(c.a)(Object(c.a)({},e),{},{loading:!1});case"DATABASE/SET_LEVEL_NODE":return Object(c.a)(Object(c.a)({},e),{},{currenLevel:n.payload});default:return e}},A={setHierarchy:function(e){return{type:"DATABASE/SET_HEIRARCHY",payload:e}},setInventory:function(e){return{type:"DATABASE/SET_INVENTORY",payload:e}},setCurrentNode:function(e){return{type:"DATABASE/SET_CURRENT_NODE",payload:e}},setCurrentNameNode:function(e){return{type:"DATABASE/SET_CURRENT_MANE_NODE",payload:e}},setCurrentInvenory:function(e){return{type:"DATABASE/SET_CURRENT_INVENORY",payload:e}},setLoadingTrue:function(){return{type:"DATABASE/SET_LOADING_TRUE"}},setLoadingFalse:function(){return{type:"DATABASE/SET_LOADING_FALSE"}},setLevelNode:function(e){return{type:"DATABASE/SET_LEVEL_NODE",payload:e}}},O=function(){return function(){var e=Object(o.a)(a.a.mark((function e(n){var t,r,o,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(A.setLoadingTrue()),e.next=4,p();case 4:t=e.sent,r=t.map((function(e){return{name:e.data.name,id:e.id,parts:void 0===e.parts?[]:e.parts}})),o=[],r.forEach((function(e){-1===e.id.indexOf("-")&&o.push({id:e.id,parts:e.parts,name:e.name})})),c=o.map((function(e){var n,t=null===e||void 0===e||null===(n=e.parts)||void 0===n?void 0:n.map((function(e){var n,t=Object(h.c)(r,e),a=null===t||void 0===t||null===(n=t.parts)||void 0===n?void 0:n.map((function(e){var n,t=Object(h.c)(r,e),a=null===t||void 0===t||null===(n=t.parts)||void 0===n?void 0:n.map((function(e){var n,t=Object(h.c)(r,e),a=null===t||void 0===t||null===(n=t.parts)||void 0===n?void 0:n.map((function(e){var n,t=Object(h.c)(r,e),a=null===t||void 0===t||null===(n=t.parts)||void 0===n?void 0:n.map((function(e){var n=Object(h.c)(r,e),t=Object(h.d)(n,r);return{name:n.name,id:n.id,parts:t}}));return{name:t.name,id:t.id,parts:a}}));return{name:t.name,id:t.id,parts:a}}));return{name:t.name,id:t.id,parts:a}}));return{name:t.name,id:t.id,parts:a}}));return{name:e.name,id:e.id,parts:t}})),n(A.setHierarchy(c)),n(A.setLoadingFalse()),e.next=15;break;case 13:e.prev=13,e.t0=e.catch(0);case 15:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(n){return e.apply(this,arguments)}}()},g=function(){return function(){var e=Object(o.a)(a.a.mark((function e(n){var t,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(A.setLoadingTrue()),e.next=4,v();case 4:t=e.sent,r=null===t||void 0===t?void 0:t.map((function(e){return{name:e.data.name,count:+e.data.count,id:e.id,placeId:e.placeId}})),n(A.setInventory(r)),n(A.setLoadingFalse()),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}()},j=function(){return function(){var e=Object(o.a)(a.a.mark((function e(n,t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(g());case 2:return e.next=4,Object(h.e)(Object(h.a)(t().database.currenNode,t().database.hierarchy),t().database.inventory);case 4:r=e.sent,n(A.setLevelNode(r.level)),n(A.setCurrentInvenory(r.currentInventory));case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},T=function(e,n,t){return function(){var r=Object(o.a)(a.a.mark((function r(o){return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,o(A.setLoadingTrue()),r.next=4,b(e,n,t);case 4:o(j()),o(A.setLoadingFalse()),f(u.success,"\u041e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e"),r.next=11;break;case 9:r.prev=9,r.t0=r.catch(0);case 11:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(e){return r.apply(this,arguments)}}()},N=function(e){return function(){var n=Object(o.a)(a.a.mark((function n(t){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t(A.setLoadingTrue()),n.next=4,m(e.id);case 4:return n.next=6,b(e.name,e.count,e.placeId);case 6:t(j()),t(A.setLoadingFalse()),f(u.success,"\u041e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u043e"),n.next=13;break;case 11:n.prev=11,n.t0=n.catch(0);case 13:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}()},_=function(e){return function(){var n=Object(o.a)(a.a.mark((function n(t){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t(A.setLoadingTrue()),n.next=4,m(e);case 4:t(j()),t(A.setLoadingFalse()),f(u.success,"\u041e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u0443\u0434\u0430\u043b\u0435\u043d\u043e"),n.next=11;break;case 9:n.prev=9,n.t0=n.catch(0);case 11:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}}},[[211,1,2]]]);
//# sourceMappingURL=main.bdead7c4.chunk.js.map