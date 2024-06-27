import "./Footer.css";

function Footer() {
  
    return (
      <footer className="footer">
        <div className="container">
          <div className="wrapper">
            <nav className="nav">
              <FooterMenu />
            </nav>
          </div>
        </div>
      </footer>
    );
  }

  export { Footer };



  
  function FooterMenu() {

    const items = [
        { label: 'Privacy Policy', href: '/privacy',
          children: [
            {label: 'Lorem', href: '/lorem'},
            {label: 'Lorem', href: '/lorem'},
            {label: 'Lorem', href: '/lorem'},

          ]
        },
        { label: 'Terms of Service', href: '/terms',
          children: [
            {label: 'Lorem', href: '/lorem'},
            {label: 'Lorem', href: '/lorem'},
            {label: 'Lorem', href: '/lorem'},

          ]
        },
        { label: 'Contact', href: '/contact',
          children: [
            {label: 'Lorem', href: '/lorem'},
            {label: 'Lorem', href: '/lorem'},
            {label: 'Lorem', href: '/lorem'},

          ]
        },

        { label: 'About Us', href: '/about',
          children: [
            {label: 'Lorem', href: '/lorem'},
            {label: 'Lorem', href: '/lorem'},
            {label: 'Lorem', href: '/lorem'},

          ]
        },
        { label: 'FAQ', href: '/faq',
          children: [
            {label: 'Lorem', href: '/lorem'},
            {label: 'Lorem', href: '/lorem'},
            {label: 'Lorem', href: '/lorem'},

          ]
        },
      ];

    return (
      
        <ul className="menu">

          {items.map((item) => (
            <FooterMenuItem key={item.label} label={item.label} href={item.href} children={item.children.label}/>
          ))}
          
        </ul>
    );
  }


  
  function FooterMenuItem(props) {
    const { label, children, href = '#' } = props;
  
    return (
      <li className="item">
        <a href={href}>{label}</a>
        </li>
      );


      
  {Boolean(children.length) && <ul>
          {children.map((item, index => (
            <li className="item subitem">
              <a href='#'>{children.label}</a>
            </li>
          )))}
        
        </ul> }
  }