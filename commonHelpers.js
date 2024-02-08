import{i as c,S as g}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEZSURBVHgBrZVRDoMgDIar0fi6m2xH2Y3Ek2w3cFfZXXwBljFQCai0xemfoCaU/xNpKwAirXWrlDY5w8ViPhVmbgwIO14A3zeQKq/2IuwaqOu6A07+zaVUT8iUi+V28rd5NuSIOQs5wxyFUOZKqRtnmIpZQCZz3acWcgcXUjkF0b2bmwFSpAxskMAgYecaWSsFC8AgnHkMqIBR09TCGrnHsZic5iLs3By3ngWsITMgy9yphEyVJZjUM6esHUS9yfea7N7DAmJz/1niM2EhVBZR2UKl8DS/SFO80OhUnCBkoYWgz2MdNAx8q0jFOK/Fy1GQvdqYe50BQc3PgLDmRyCU+aYOfFsoCtPa+yXvp2/ue9rHqLATflCf5QflVUcNIrzeSwAAAABJRU5ErkJggg==",f=document.querySelector(".form-search"),m=document.querySelector(".gallery"),l=document.querySelector(".loader");l.style.display="none";f.addEventListener("submit",A);function A(o){if(o.preventDefault(),o.target.elements.search.value===""){c.error({message:"The search query cannot be empty",timeout:5e3,close:!1,position:"topLeft",backgroundColor:"#ef4040",messageSize:16,messageColor:"#fff",title:"Error",titleSize:16,titleColor:"#fff",iconUrl:n});return}l.style.display="flex";const r=o.target.elements.search.value.trim();h(r).then(s=>{l.style.display="none",s.hits.length||c.show({title:"Sorry,",message:" there are no images matching your search query. Please try again!",position:"topLeft",backgroundColor:"#ef4040",messageSize:16,messageColor:"#fff",titleSize:16,titleColor:"#fff",iconUrl:n}),console.log(s.hits),console.log(s.hits.length),m.insertAdjacentHTML("afterbegin",d(s.hits)),new g(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh(),f.reset()}).catch(s=>{l.style.display="none",console.log(s)})}function h(o){const r="https://pixabay.com/api/",s="42245088-70138ac1b5442bea0784205eb",i=new URLSearchParams({key:s,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${r}?${i}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function d(o){return o.map(({webformatURL:r,largeImageURL:s,tags:i,likes:e,views:t,comments:a,downloads:u})=>`<li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img
              class="gallery-image"
              src="${r}"
              alt="${i}"
              width="360"
            />
          </a>
          <div class="thumb-block">
            <div class="block">
              <h2 class="tittle">Likes</h2>
              <p class="amount">${e}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Views</h2>
              <p class="amount">${t}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Comments</h2>
              <p class="amount">${a}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Downloads</h2>
              <p class="amount">${u}</p>
            </div>
          </div>
        </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
