const ENABLE_SW=!1;const throttle=(e,t)=>{let l=null;return(...o)=>{null===l&&(e.apply(this,o),l=setTimeout(()=>{l=null},t))}};document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("main"),t=Array.from(document.querySelectorAll(".headerlink")),l=Array.from(document.querySelectorAll(".toc li"));if(l.length>0){const o=throttle(()=>{let o=t.map(t=>t.offsetTop-e.scrollTop).findLastIndex(e=>e<=20);-1===o&&(o=0),l.forEach((e,l)=>{l===o?e.classList.add("active"):l==t.length-1&&-1==o||e.classList.remove("active")})},100);o(),e.addEventListener("scroll",()=>{o()})}});