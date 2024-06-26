import "./Footer.css";

function Footer(props) {

    const { className } = props;
  
    return (
      <footer className={props.className}>
        <div className="container">
          <div className="wrapper">
            <FooterMenu />
          </div>
        </div>
      </footer>
    );
  }


  
  function FooterMenu({ props }) {

    const items = [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Contact', href: '/contact' },
        { label: 'About Us', href: '/about' },
        { label: 'FAQ', href: '/faq' }
      ];

    return (
      <nav className="nav">
        <ul className="list">

          {items.map((item) => (
            <FooterMenuItem key={item.label} label={item.label} href={item.href} />
          ))}
          
        </ul>
      </nav>
    );
  }
  
  function FooterMenuItem(props) {
    const { label, href = '#' } = props;
  
    return (
      <li className="item">
        <a href={href}>{label}</a>
      </li>
    );
  }
  
  export { Footer };