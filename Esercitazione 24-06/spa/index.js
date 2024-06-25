import { getHeaderHTML } from "./components/header.js";
import { getFooterHTML } from "./components/footer.js";
import { getMainHTML } from "./components/main.js";


window.addEventListener("DOMContentLoaded", () => {
  
    const appEl = document.querySelector("#app");
  
    if (appEl) {

      renderPage(appEl);
    }
  });


async function renderPage(appEl) {

    const header = getHeaderHTML();
    const main = await getMainHTML();
    const footer = getFooterHTML();



    const html = header + main + footer;

    appEl.innerHTML = html;
}