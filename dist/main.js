(()=>{"use strict";function t(t){const e=document.createElement("p");return e.textContent=t,e}const e=function(){const e=document.querySelector(".mainDiv");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("homePage");const n=document.createElement("img");return n.src="../assets/mainpage.jpg",n.alt="background-picture",e.appendChild(t("Welcome to the best restaurant!")),e.appendChild(t("Browse through our menu")),e.appendChild(n),e}())};function n(t){document.querySelectorAll(".nav-btn").forEach((t=>{t!==this&&t.classList.remove("active")}))}!function(){const t=document.querySelector("#content");t.appendChild(function(){const t=document.createElement("div");t.classList.add("headerDiv"),t.setAttribute("id","headerDiv");const e=document.createElement("h1");return e.classList.add("resName"),e.textContent="Bawario",t.appendChild(e),t}()),t.appendChild(function(){const t=document.createElement("div"),c=document.createElement("button");c.classList.add("nav-btn"),c.setAttribute("id","homeTab"),c.textContent="Home",c.addEventListener("click",(t=>{t.target.classList.contains("active")||(n(),e())}));const a=document.createElement("button");a.classList.add("nav-btn"),a.setAttribute("id","menuTab"),a.textContent="Menu",a.addEventListener("click",(t=>{t.target.classList.contains("active")||n()}));const i=document.createElement("button");return i.classList.add("nav-btn"),i.setAttribute("id","contactsTab"),i.textContent="Contacts",i.addEventListener("click",(t=>{t.target.classList.contains("active")||n()})),t.appendChild(c),t.appendChild(a),t.appendChild(i),t}()),t.appendChild(function(){const t=document.createElement("div");return t.classList.add("mainDiv"),t.setAttribute("id","mainDiv"),t}()),n(),e()}()})();