import "./footer.scss";
import logo from "../../assets/Logo-Footer.png";
import text from "../../assets/Text.png";

function Footer() {
  return (
    <div className="footer">
      <img className="logo-footer" src={logo}></img>
      <p className="text-footer">© 2020 Kasa. All rights reserved </p>
    </div>
  );
}

export default Footer;
