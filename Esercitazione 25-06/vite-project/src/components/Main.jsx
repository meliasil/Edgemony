
function Main() {
    
    return (
    <main>
        <div className="container">
            <div className="wrapper">
                <div className="logo">Logo</div>
                <Menu />
            </div>
        </div>
    </main>
    );
}

function Menu() {

    return (
    <nav className="nav">
        <ul className="list">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, non.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, non.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, non.</li>
        </ul>
    </nav>
    );
}

function menuItem() {

    return (
    <li className="item">
        <menuItem />
        <menuItem />
    </li>
    );
}


export {Main};