(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>p});var r=n(81),a=n.n(r),o=n(645),c=n.n(o),i=n(667),s=n.n(i),d=new URL(n(942),n.b),u=c()(a()),l=s()(d);u.push([t.id,"\r\nbody {\r\n  height: 100%;\r\n  margin: 0;\r\n  background-image: url("+l+");\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  height: 100vh;\r\n  \r\n  \r\n}\r\n\r\n.headerDiv {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.header-btn {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-attachment: fixed;\r\n}\r\n\r\n/* .background > img {\r\n  height: 80vh;\r\n  width: 100vw;\r\n} */",""]);const p=u},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<t.length;d++){var u=[].concat(t[d]);r&&c[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),e.push(u))}},e}},667:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},c=[],i=0;i<t.length;i++){var s=t[i],d=r.base?s[0]+r.base:s[0],u=o[d]||0,l="".concat(d," ").concat(u);o[d]=u+1;var p=n(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=a(m,r);r.byIndex=i,e.splice(i,0,{identifier:l,updater:f,references:1})}c.push(l)}return c}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var c=0;c<o.length;c++){var i=n(o[c]);e[i].references--}for(var s=r(t,a),d=0;d<o.length;d++){var u=n(o[d]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}o=s}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},942:(t,e,n)=>{t.exports=n.p+"bf18810488750d379822.jpg"}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{function t(t){const e=document.createElement("p");return e.textContent=t,e}const e=function(){const e=document.querySelector(".mainDiv");e.textContent="",e.appendChild(function(){const e=document.createElement("div");return e.classList.add("homePage"),e.appendChild(t("Welcome to the best restaurant!")),e.appendChild(t("Browse through our menu")),e}())};function r(t,e){const n=document.createElement("div");n.classList.add("menuItem");const r=document.createElement("h1");r.textContent=t;const a=document.createElement("h4");return a.textContent=e,n.appendChild(r),n.appendChild(a),n}function a(t){document.querySelectorAll(".nav-btn").forEach((t=>{t!==this&&t.classList.remove("active")})),t.classList.add("active")}var o=n(379),c=n.n(o),i=n(795),s=n.n(i),d=n(569),u=n.n(d),l=n(565),p=n.n(l),m=n(216),f=n.n(m),h=n(589),v=n.n(h),b=n(426),g={};g.styleTagTransform=v(),g.setAttributes=p(),g.insert=u().bind(null,"head"),g.domAPI=s(),g.insertStyleElement=f(),c()(b.Z,g),b.Z&&b.Z.locals&&b.Z.locals,function(){const t=document.getElementById("content");t.appendChild(function(){const t=document.createElement("div");t.classList.add("headerDiv"),t.setAttribute("id","headerDiv");const e=document.createElement("h1");return e.classList.add("resName"),e.textContent="Bawario",t.appendChild(e),t}()),t.appendChild(function(){const t=document.createElement("div");t.classList.add("header-btn");const n=document.createElement("button");n.classList.add("nav-btn"),n.setAttribute("id","homeTab"),n.textContent="Home",n.addEventListener("click",(t=>{t.target.classList.contains("active")||(a(n),e())}));const o=document.createElement("button");o.classList.add("nav-btn"),o.setAttribute("id","menuTab"),o.textContent="Menu",o.addEventListener("click",(t=>{t.target.classList.contains("active")||(a(o),function(){const t=document.querySelector(".mainDiv");t.textContent="",t.appendChild(function(){const t=document.createElement("div");return t.classList.add("menu-container"),mainDiv.appendChild(t),r(),[r("kasza manna","ugotuj kasze"),r("jajko na twardo","ugotuj jajka")].forEach((e=>{t.appendChild(e)})),t}())}())}));const c=document.createElement("button");return c.classList.add("nav-btn"),c.setAttribute("id","contactsTab"),c.textContent="Contacts",c.addEventListener("click",(t=>{t.target.classList.contains("active")||(a(c),function(){const t=document.querySelector(".mainDiv");t.textContent="",t.appendChild(function(){const t=document.createElement("div");t.classList.add("contacts-div");const e=document.createElement("p");e.textContent="020 17823541";const n=document.createElement("p");return n.textContent="somerandom@gmail.com",t.appendChild(e),t.appendChild(n),t}())}())})),t.appendChild(n),t.appendChild(o),t.appendChild(c),t}()),t.appendChild(function(){const t=document.createElement("div");return t.classList.add("mainDiv"),t.setAttribute("id","mainDiv"),t}()),a(homeTab),e()}()})()})();