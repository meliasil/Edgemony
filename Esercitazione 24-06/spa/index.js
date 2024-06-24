import { getHeaderHTML } from "./components/header.js";
import { getFooterHTML } from "./components/footer.js";
import { getMainHTML, renderPosts } from "./components/main.js";


window.addEventListener("DOMContentLoaded", () => {
  
    const appEl = document.querySelector("#app");
  
    if (appEl) {
      // dentro la function sono sicuro che appEl sia un elemento caricato nel dom
      renderPage(appEl);
    }
  });


function renderPage(appEl) {

    const header = getHeaderHTML();
    const main = getMainHTML();
    const footer = getFooterHTML();



    const html = header + main + footer;

    appEl.innerHTML = html;
}