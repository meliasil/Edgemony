function getFooterHTML() {

    const menuHTML = getMenuHTML();

    return `
    <footer class='footer'>
        <div class='container'>
            <div class='wrapper'>
                <div class= 'logo'>
                    <nav class='nav'>
                    ${menuHTML}  
                    </nav>
                </div>
            </div>
        </div>
    </footer>`;

}

function getMenuHTML(){

    const menuItems = [
        {
            label: 'About us',
        children: [
            {label: 'Company info'},
            {label: 'Careers'},
            {label: 'Altre cose'},
        ],
    },
];


const firstMenuItem = menuItems[0];
    const itemsHTML = getMenuItemHTML(firstMenuItem);


    return `
    <ul class='menu'>
        ${itemsHTML}
    </ul>`
}


function getMenuItemHTML(options){

    const { label, href = '#', children = [] }= options;

    const subItems = children.map(item => getMenuItemHTML(item)).join('');

    return `
    <li class='item'>footer item</li>
        <a href='${href}'>${label}</a>
        ${children.length > 0 ? '<ul>' + subItems + '</ul>' : ''}
    `;
}


export{getFooterHTML};