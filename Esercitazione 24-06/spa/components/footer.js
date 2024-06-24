
function getFooterHTML() {
    const menuHTML = getMenuHTML();
  
    return `<footer class="footer">
          <div class="container">
              <div class="wrapper">
                  <div class="logo">Logo</div>
                  <nav class="nav">
                      ${menuHTML}
                  </nav>
              </div>
          </div>
      </footer>`;
  }


function getMenuHTML() {
    const menuItems = [
        {label: 'Lorem',
            children: [
                {label: 'Company info'},
                {label: 'Careers'},
                {label: 'Lorem ipsum'},
            ],
        },
        {
            label: 'Lorem',
            children: [
                {label: 'Company info'},
                {label: 'Careers'},
                {label: 'Lorem ipsum'},
            ],
        },
    ];

    return `
        <ul class="menu">
            ${menuItems.map((item) => getMenuItemHTML(item)).join("")}
        </ul>
    `;
    
}

function getMenuItemHTML(options) {
    const { label, href = '#', children = [] } = options;

    const subItemsHTML = children
    .map((item) => `<li class="item subitem">${item.label}</li>`)
    .join("");

    const subMenuHTML = "<ul>" + subItemsHTML + "</ul>";



return `
    <li class="item">
        <a href="${href}">${label}</a>
        ${children.length > 0 ? subMenuHTML : ""}
    </li>
    `;
}


export {getFooterHTML};