import { Button } from "../Button/Button";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="wrapper">
          <nav className="nav">
            <Button />
          </nav>
        </div>
      </div>
    </footer>
  );
}

function FooterBtn() {

    const footerBtn = ({ value, onClick }) => {
      return (
      <button className="footerButton" onClick={() => onClick(value)}>
          {value}
      </button>
      );
  };
  
}


export { Footer };
