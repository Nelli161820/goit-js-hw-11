import{S as i,i as c}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function u(o){return fetch(`https://pixabay.com/api/?key=42494540-1ca0643de0a334de28e64a581&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function m(o){return o.hits.map(s=>`<li class="image-search">
        <a href="${s.largeImageURL}">
        <img class="gallery-image" src="${s.webformatURL}" alt="${s.tags}"/>
        </a>
        <ul class="gallery-image">
          <li class="image-items">
            <p class="image-info"><span class="text">Likes</span>${s.likes}</p>
            <p class="image-info"><span class="text">Views</span>${s.views}</p>
            <p class="image-info"><span class="text">Comments</span>${s.comments}</p>
            <p class="image-info"><span class="text">Downloads</span>${s.downloads}</p>
          </li>
        </ul>
      </li>`).join("")}const n=document.querySelector(".searchForm"),f=document.querySelector(".gallery");document.querySelector("search");document.querySelector(".searchInput");new i(".gallery a");document.querySelector(".loader");n.addEventListener("submit",o=>{o.preventDefault(),console.log(n.elements.search.value);const r=n.elements.search.value;if(f.innerHTML="",r===""){c.error({title:"Error",message:"Please enter a search query."});return}u(r).then(m),n.reset()});
//# sourceMappingURL=commonHelpers.js.map
