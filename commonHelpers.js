import{i as u,S as m}from"./assets/vendor-5b791d57.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(r){if(r.ep)return;r.ep=!0;const t=s(r);fetch(r.href,t)}})();function p(o){return fetch(`https://pixabay.com/api/?key=42494540-1ca0643de0a334de28e64a581&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>(e.hits.length===0&&u.error({timeout:1e3,position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),e)).catch(e=>{console.error("Error",e)})}function f(o){return o.hits.map(e=>`<li class="image-search">
        <a class="gallery-link" href="${e.largeImageURL}">
        <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}"/>
        </a>
        <ul class="gallery-image-info">
          <li class="image-items">
            <p class="image-info"><span class="text">Likes</span>${e.likes}</p>
            <p class="image-info"><span class="text">Views</span>${e.views}</p>
            <p class="image-info"><span class="text">Comments</span>${e.comments}</p>
            <p class="image-info"><span class="text">Downloads</span>${e.downloads}</p>
          </li>
        </ul>
      </li>`).join("")}const a=document.querySelector(".searchForm"),c=document.querySelector(".gallery");document.querySelector("search");document.querySelector(".searchInput");const h=new m(".gallery a",{nav:!0,captions:!0,captionsData:"alt",captionDelay:150}),l=document.querySelector(".loader");a.addEventListener("submit",o=>{o.preventDefault(),console.log(a.elements.search.value);const e=a.elements.search.value;if(c.innerHTML="",l.style.display="block",e===""){u.error({title:"Error",message:"Please enter a search query."});return}p(e).then(s=>{console.log(s),c.innerHTML=f(s),h.refresh()}).then(s=>{l.style.display="none"}).catch(s=>{console.error("Error fetching data!",s)}),a.reset()});
//# sourceMappingURL=commonHelpers.js.map
