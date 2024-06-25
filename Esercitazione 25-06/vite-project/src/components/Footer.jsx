function Footer() {
    
    return `
    <footer className="footer">
        <div className="container">
            <div className="wrapper">
                <div className="logo">Logo</div>
                <nav className="nav">
                    <Menu />
                </nav>
            </div>
        </div>
    </footer>`;
    
}

function Menu() {

    return `
    <ul className="menu">
        <Menu />
    </ul>
    `;
}

function menuItem() {

    return `
<li className="item">
    <Menu />
</li>
`;
}


export {Footer};