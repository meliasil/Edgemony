import "./Header.css";

function Header(props) {

  const { brand, children } = props;


  return (
    <header className={props.className}>
      <div className="container">
        <div className="wrapper">
          <div className="logo">LOGO - {brand.name}</div>
          <Menu />
          {children}
        </div>
      </div>
    </header>
  );
}



function Menu(props) {

  const items = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' }
  ];

  
  return (
    <nav className="nav">
      <ul className="list">

        {items.map((item) => (
          <MenuItem key={item.label} label={item.label} href={item.href} />
      ))}

      </ul>
    </nav>
  );
}



function MenuItem(props) {
  const {label, href = '#'} = props;

  return (
    <li className="item">
      <a href={href}>{label}</a>
    </li>
  );
}


export { Header };
