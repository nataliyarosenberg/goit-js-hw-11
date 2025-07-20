import{a as f,S as c,i as s}from"./assets/vendor-C5ifScYp.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const p="https://pixabay.com/api/",g="51380954-6619e500596c0682c7775fe9d";function h(o){return f(p,{params:{key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data).catch(r=>{console.log(r.message)})}const l=document.querySelector(".gallery"),u=document.querySelector("#loader");let y=new c(".gallery a",{captionsData:"alt",captionDelay:250});function b(o){const r=o.map(({webformatURL:n,largeImageURL:a,tags:e,likes:t,views:i,comments:d,downloads:m})=>`
        <li class="gallery-item">
          <a href="${a}">
            <img src="${n}" alt="${e}" loading="lazy" />
          </a>
          <div class="info">
            <p><b>Likes</b> ${t}</p>
            <p><b>Views</b> ${i}</p>
            <p><b>Comments</b> ${d}</p>
            <p><b>Downloads</b> ${m}</p>
          </div>
        </li>
      `).join("");l.insertAdjacentHTML("beforeend",r),y.refresh()}function L(){l.innerHTML=""}function S(){u.classList.remove("hidden")}function w(){u.classList.add("hidden")}document.addEventListener("DOMContentLoaded",function(){new c(".gallery a",{captions:!0,captionSelector:"img",captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()});const $=document.querySelector(".form"),q=document.querySelector(".gallery");$.addEventListener("submit",v);function v(o){o.preventDefault();const r=o.currentTarget.elements["search-text"].value.trim().toLowerCase();if(!r){s.error({message:"Please enter the search",position:"bottomCenter"});return}L(),S(),h(r).then(n=>{if(q.innerHTML="",!n.hits.length){s.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomCenter"});return}b(n.hits)}).catch(n=>{s.error({message:`Something went wrong: ${n.message}`,position:"bottomCenter"})}).finally(()=>{w()})}
//# sourceMappingURL=index.js.map
