function scrollNav(){document.querySelectorAll(".nav-main a").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();document.querySelector(e.target.attributes.href.value).scrollIntoView({behavior:"smooth"})}))}))}function homeButton(){const e=document.createElement("P"),t=document.querySelector("body");e.textContent="↑",e.classList.add("btn-home"),e.onclick=function(e){e.preventDefault();document.querySelector(".header").scrollIntoView({behavior:"smooth"})},t.appendChild(e)}function crearGaleria(){const e=document.querySelector(".gallery-img");for(let t=1;t<=12;t++){const n=document.createElement("IMG");n.src=`build/img/thumb/${t}.webp`,n.dataset.imagenId=t,n.onclick=mostrarImagen;const o=document.createElement("LI");o.appendChild(n),e.appendChild(o)}}function mostrarImagen(e){const t=document.querySelector("body"),n=parseInt(e.target.dataset.imagenId),o=document.createElement("IMG");o.src=`build/img/grande/${n}.webp`;const c=document.createElement("DIV");c.appendChild(o),c.classList.add("overlay"),c.onclick=function(){c.remove(),t.classList.remove("fixed")};const a=document.createElement("P");a.textContent="X",a.classList.add("btn-close"),a.onclick=function(){c.remove(),t.classList.remove("fixed")},c.appendChild(a),t.appendChild(c),t.classList.add("fixed")}document.addEventListener("DOMContentLoaded",(function(){scrollNav(),homeButton()})),document.addEventListener("DOMContentLoaded",()=>{crearGaleria()});
//# sourceMappingURL=bundle.js.map
