!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var o=(()=>{const e=document.querySelector(".burgerNav"),t=document.querySelector(".projectContainer"),r=document.querySelector("#close"),o=document.querySelector("#addProjectTitle"),n=document.querySelector(".addProject");let c=document.querySelector(".projectList");return{burgerToggle:()=>{e.addEventListener("click",()=>{t.classList.toggle("expanded")}),r.addEventListener("click",()=>{t.classList.toggle("expanded")})},showProjectForm:()=>{n.addEventListener("click",()=>{n.style.display="none",o.style.display="block"})},createProjectElem:e=>{let t=document.createElement("p");t.textContent=e,c.appendChild(t)},hideProjectForm:()=>{n.style.display="block",o.style.display="none"}}})();var n=(()=>{let e=[];const t=document.querySelector("#addProjectTitle"),r=document.querySelector(".projectList");return{addProject:()=>{t.addEventListener("keydown",n=>{var c;"Enter"==n.key&&(n.preventDefault(),""!==t.value&&(e.push({projectName:t.value,tasks:c}),(e=>{r.innerHTML="";let t=e.map(e=>e.projectName);for(let e=0;e<t.length;e++)o.createProjectElem(t[e])})(e)),t.value="",o.hideProjectForm()),n.stopPropagation()})}}})();o.burgerToggle(),o.showProjectForm(),n.addProject()}]);