
function Header() {
    
    return 
    <header>
        <div className="container">
            <div className="wrapper">
                <div className="logo">Logo</div>
                <Menu />
            </div>
        </div>
    </header>
    ;
}

function Menu() {

    return 
    <nav className="nav">
        <ul className="list">
            <Menu />
        </ul>
    </nav>
    ;
}

function menuItem() {

    return 
    <li className="item">
        <MenuItem label={'About us'}></MenuItem>
        <MenuItem label={'Blog'}></MenuItem>
    </li>
    ;
}


export {Header};