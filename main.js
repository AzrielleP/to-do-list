!function(e){var t={};function o(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);var a=(()=>{const e=document.querySelector(".burgerNav"),t=document.querySelector(".projectContainer"),o=document.querySelector("#close"),a=document.querySelector("#addProjectTitle"),r=document.querySelector(".addProject");let n=document.querySelector(".projectName");const s=document.querySelector(".projectTitleContainer"),c=document.querySelector(".projectCategory"),l=document.querySelector(".addTask"),d=document.querySelector(".formContainer"),u=document.querySelector(".popupContainer"),i=document.querySelector(".no"),p=document.querySelector("#projectTrash");let m=document.querySelector(".projectList"),k=document.querySelector(".tasksList");const y=()=>{r.style.display="block",a.style.display="none"},v=()=>{d.style.display="flex"},f=()=>{u.style.display="none"};return{burgerToggle:()=>{e.addEventListener("click",()=>{t.classList.toggle("expanded")}),o.addEventListener("click",()=>{t.classList.toggle("expanded"),y()})},showProjectForm:()=>{r.addEventListener("click",()=>{r.style.display="none",a.style.display="block"})},createProjectElem:e=>{let t=document.createElement("p");t.textContent=e,m.appendChild(t)},createProjectTitle:e=>{n.textContent=e,s.style.display="flex",l.style.display="block"},deleteProjectTitle:()=>{n.textContent="",s.style.display="none",l.style.display="none"},deleteTasksList:()=>{k.innerHTML=""},addProjectOption:e=>{let t=document.createElement("option");t.className=e,t.textContent=e,c.appendChild(t)},hideProjectForm:y,showTaskByAdd:()=>{l.addEventListener("click",()=>{v()})},showTaskForm:v,hideTaskForm:()=>{d.style.display="none"},createTaskElement:(e,t)=>{const o=document.createElement("div");o.className="task",o.id=t;const a=document.createElement("input");a.type="checkbox",a.className="taskStatus";let r=document.createElement("p");r.className="taskName",r.textContent=e.taskName;let n=document.createElement("p");n.className="dueDate",n.textContent="Due "+e.dueDate;const s=document.createElement("i");s.className="far fa-trash-alt fa-2x",s.id="taskToTrash",o.append(a,r,n,s),k.append(o)},hideDeletePopUp:f,pressNo:()=>{i.addEventListener("click",()=>{f()})},showDeletePopUp:()=>{p.addEventListener("click",()=>{u.style.display="flex"})},statusComplete:e=>{e.checked=!0,e.parentNode.style.backgroundColor="#E5E5E5"},statusIncomplete:e=>{e.style.backgroundColor="#5C9EAD"}}})();var r=(()=>{let e=[];const t=document.querySelector("#addProjectTitle"),o=document.querySelector(".projectList"),r=document.querySelector(".tasksList"),n=document.querySelector("#taskTitle"),s=document.querySelector("#dateDue"),c=document.querySelector(".projectCategory");let l=document.querySelector(".projectName");const d=document.querySelector("#notes"),u=document.querySelector(".cancelButton"),i=document.querySelector(".save"),p=document.querySelector(".yes"),m=e=>{o.innerHTML="",c.innerHTML="";let t=e.map(e=>e.projectName);for(let e=0;e<t.length;e++)a.createProjectElem(t[e]),a.addProjectOption(t[e])},k=e=>{r.innerHTML="";for(let t=0;t<e.length;t++)a.createTaskElement(e[t],t)},y=()=>{n.value="",s.value="",d.value=""};return{addProject:()=>{t.addEventListener("keydown",o=>{"Enter"==o.key&&(o.preventDefault(),""!==t.value&&(e.push({projectName:t.value,tasks:[]}),m(e)),t.value="",a.hideProjectForm()),o.stopPropagation()})},viewProjectTasks:()=>{o.addEventListener("click",t=>{if(t.target!==t.currentTarget){let o=e.findIndex(e=>e.projectName==t.target.textContent);a.createProjectTitle(t.target.textContent),k(e[o].tasks)}})},cancelAddTask:()=>{u.addEventListener("click",()=>{y(),a.hideTaskForm()})},deleteProject:()=>{p.addEventListener("click",()=>{let t=e.findIndex(e=>e.projectName==l.textContent);e.splice(t,1),a.hideDeletePopUp(),a.deleteProjectTitle(),a.deleteTasksList(),m(e)})},deleteTask:()=>{document.addEventListener("click",t=>{if("taskToTrash"==t.target.id){let o=t.target.parentNode.id,a=e.findIndex(e=>e.projectName==l.textContent);e[a].tasks.splice(o,1),k(e[a].tasks)}})},editTask:()=>{document.addEventListener("click",t=>{if("task"==t.target.className){a.showTaskForm();let c=Number(t.target.parentNode.id),u=e.findIndex(e=>e.projectName==l.textContent);n.value=e[u].tasks[c].taskName,s.value=e[u].tasks[c].dueDate,d.value=e[u].tasks[c].notes,e[u].tasks.splice(c,1),i.addEventListener("click",(r=c,e[o=u].tasks[r].taskName=n.value,e[o].tasks[r].dueDate=s.value,void(e[o].tasks[r].notes=d.value))),k(e[u].tasks)}var o,r})},changeTaskStatus:()=>{document.addEventListener("click",t=>{if("taskStatus"==t.target.className){let o=Number(t.target.parentNode.id),a=e.findIndex(e=>e.projectName==l.textContent),r=e[a].tasks[o];t.target.checked?(r.status="Complete",e[a].tasks.push(e[a].tasks.splice(o,1)),console.log(r)):t.target.checked||r.status,k(e[a].tasks)}})},addTask:()=>{i.addEventListener("click",()=>{let t=e.findIndex(e=>e.projectName==l.textContent),o=e.findIndex(e=>e.projectName==c.value);e[o].tasks.push(((e,t,o,a)=>({taskName:e,dueDate:t,status:o,notes:a}))(n.value,s.value,"Incomplete",d.value)),k(e[t].tasks),y(),a.hideTaskForm()})}}})();a.burgerToggle(),a.showProjectForm(),a.showTaskByAdd(),a.pressNo(),a.showDeletePopUp(),r.addProject(),r.viewProjectTasks(),r.cancelAddTask(),r.deleteProject(),r.deleteTask(),r.addTask(),r.editTask(),r.changeTaskStatus()}]);