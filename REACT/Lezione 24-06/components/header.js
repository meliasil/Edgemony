function getHeaderHTML() {
const menuHTML = getMenuHTML();

return `
    <header>
    <div class='container'>
        <div class='wrapper'>
            <div class='logo'>Logo</div>
            ${menuHTML}
        </div>
    </div>
</header>
`;
}

//creare una function getMenu
//creare una nuova function getMenuItem

function getMenuHTML() {

    const menuItems = [
        {label: 'About us'},
        {label: 'Blog'},
        {label: 'Contacts'},
    ];


/* const itemHTML = getMenuItemHTML({
    label: "About us",
    href: "#",
});
 */

let menuItemsHTML = menuItems.map(item=>getMenuItemHTML(item)).join("");


return `
    <nav class='nav>
        <ul class="list">
            ${menuItemsHTML}
        </ul>
    </nav>
    `;
}

function getMenuItemHTML(options) {

  //destructoring, serve a tirare fuori 2 variabili (label e href) da options.
  //queste variabili hanno come valore rispettivamente:
  //label = options.label
  //href = options.href --> se href non è definito e sotto ho {href='#'} = options, allora href avrà come valore di default '#'
const { label, href = "#" } = options;

return `
    <li class="item">
        <a href="${href}">${label}</a>
    </li>
    `;
}

export { getHeaderHTML };
