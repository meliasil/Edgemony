
function Footer() {
    
    return (
    <footer className="footer">
        <div className="container">
            <div className="wrapper">
                <div className="logo">Logo</div>
                <nav className="nav">
                    <Menu />
                </nav>
            </div>
        </div>
    </footer>
    );
}

function Menu() {

    return (
    <ul className="menu">
        <li><a href="#">Lorem ipsum</a></li>
        <li><a href="#">Lorem ipsum</a></li>
        <li><a href="#">Lorem ipsum</a></li>
    </ul>

    );
}

function menuItem() {

    return (
    <li className="item">
        <menuItem />
    </li>
);
}


export {Footer};