
function Main() {
    
    return `
    <main>
        <div className="container">
            <div className="wrapper">
                <div className="logo">Logo</div>
                <Menu />
            </div>
        </div>
    </main>
    `;
}

function Menu() {

    return `
    <nav className="nav">
        <ul className="list">
            <Menu />
        </ul>
    </nav>
    `;
}

function menuItem() {

    return `
    <li className="item">
        <MenuItem />
        <MenuItem />
    </li>
    `;
}


export {Main};