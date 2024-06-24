
//header + sidebar + lista articoli + footer
// Single Page Application - JS


import { getHeaderHTML } from "./components/header.js";
import { getMainHTML } from "./components/main.js";
import { getFooterHTML} from "./components/footer.js";



window.addEventListener('DOMContentLoaded', () => {
    console.log('ciao mondo, la pagina si è caricata');

    const appEl = document.querySelector('#app');
    /* console.log({appEl}); */ //messo tra le parentesi graffe indica ciave-valore con lo stesso nome => {appEl: appEl}

    renderPage(appEl);
})


function renderPage(appEl){
    appEl.innerHTML ='Ciao Mondo!';

    //voglio creare una function per ogni elemento della pagina;
    //ogni function torna dell'HTML e una volta messi insieme li stampo.

    const header = getHeaderHTML();
    const main = getMainHTML();
    const footer = getFooterHTML();

    const html = header + main + footer;

    appEl.innerHTML = html
}

//Come la scriverebbe lui:
/* const asideEl = document.querySelector('aside')
createElement('div', {className: 'prova-class', innerHTML: 'ciao mondo'}) */


//function per creare elementi (evitando di ripetere il createElement ripetuto)
function createElement (element, attrs = {}, parent = document.body) {//elemento, proprietà e parent => ultimo parametro perchè magari non serve tutte le volte
    const el = document.createElement(element);//crea elemento su document

    //gli attributi sono un object quindi posso iterarlo:
    
    for(let prop of attrs){

//se la proprietà esiste (es.className) la imposto:
        if(prop in el){
            el[prop] = attrs[prop];

            //se l'ho impostata vado avanti nel for e non eseguo questo elemento
            continue;
        }

        el.setAttribute(prop,attrs[prop])
    }

    parent.append(el)
}

