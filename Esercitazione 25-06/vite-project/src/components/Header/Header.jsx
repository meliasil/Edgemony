import './Header.css';


function Header() {
    
    return (
    <header>
        <div className="container">
            <div className="wrapper">
                <div className="logo">Logo</div>
                <Menu />
            </div>
        </div>
    </header>
    );
}

function Menu() {

    return (
    <nav className="nav">
        <ul className="list">
            <li><a href='#'>About us</a></li>
            <li><a href='#'>Blog</a></li>
        </ul>
    </nav>
    );
}

function menuItem() {

    return (
    <li className="item">
        <menuItem label={'About us'}></menuItem>
        <menuItem label={'Blog'}></menuItem>
    </li>
    );
}


export {Header};