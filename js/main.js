"use strict"

/* Dia 1*/

/* 1- Prueba mostrar formulario nuevo bookmark */
const section = document.querySelector(".js-data-actions");
section.classList.remove("hidden");

/* 2- Prueba mostrar menu */
const sectionMenu = document.querySelector(".js-menudropdown");
sectionMenu.classList.remove("collapsed");

/* 3- Añadir informacion de los enlaces desde JS
    3.1 Traer el elemento html
    3.2 Variable que contenga toda la información del li por cada uno de los enlaces
    3.3 Añadir esa info con el innerHTML por cada uno de los enlaces
*/
const listLinks = document.querySelector(".js_datalist");


/*Dia 2*/

const bkm_1_url ="https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion";
const bkm_1_desc= "JS en los materiales de Adalab";
const bkm_1_seen = "checked";
const bkm_1_tags_1 = "javascript";
const bkm_1_tags_2 = "html";


let html = `<li class="data__listitem"> 
<article class="data__item">
  <p class="item__url">
    <a href=${bkm_1_url} target="_blank" rel="noopener noreferrer">
      books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion
    </a>
  </p>
  <p class="item__seen">
    <input type="checkbox" ${bkm_1_seen}checked name="item_imp_2" id="item_imp_2">
  </p>
  <p class="item__desc">${bkm_1_desc}</p>
  <ul class="item__tags">
    <li class="item__tag">${bkm_1_tags_1.toLowerCase()}</li><li class="item__tag">${bkm_1_tags_2.toLowerCase()}</li>
  </ul>
</article>
</li>`;

const bkm_2_url = "https://thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/";
const bkm_2_desc= "Ideas de proyecto JS";
const bkm_2_tags_1 = "javascript";
const bkm_2_tags_2 = "portfolio";


html += ` <li class="data__listitem">
<article class="data__item">
  <p class="item__url">
    <a href=${bkm_2_url}target="_blank">thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/</a></a></p>
  <p class="item__seen">
    <input type="checkbox" ${bkm_2_seen}checked name="item_imp_1" id="item_imp_1">
  </p>
  <p class="item__desc">${bkm_2_desc}</p>
  <ul class="item__tags">
    <li class="item__tag">${bkm_2_tags_1.toLowerCase()}</li><li class="item__tag">${bkm_2_tags_2.toLowerCase()}</li>
  </ul>
</article>
</li>`;

const bkm_3_url = "https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-1-html-y-css/1_1_intro_a_la_web";
const bkm_3_desc= "HTML en los materiales de Adalab";
const bkm_2_seen = "checked";
const bkm_3_seen = "";
const bkm_3_tags_1 = "html";
const bkm_3_tags_2 = "css";

html += `   <li class="data__listitem">
<article class="data__item">
  <p class="item__url">
    <a
      href=${bmk_3_url}
      target="_blank"
      rel="noopener noreferrer"
      >${bmk_3_url.slice(8)}</a
    >
  </p>
  <p class="item__seen">
    <input type="checkbox" ${bmk_3_seen} name="item_imp_2" id="item_imp_2" />
  </p>
  <p class="item__desc">${bmk_3_desc}</p>
  <ul class="item__tags">
    <li class="item__tag">${bmk_3_tags_1.toLowerCase()}</li>
    <li class="item__tag">${bmk_3_tags_2.toLowerCase()}</li>
  </ul>
</article>
</li>`;

listLinks.innerHTML=html;