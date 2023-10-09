import "./footer.scss";
import logo from "../../assets/Logo-Footer.png";
import text from "../../assets/Text.png";

function Footer() {
  return (
    <div className="footer">
      <img className="logo-footer" src={logo}></img>
      <img className="text-footer" src={text}></img>
    </div>
  );
}

export default Footer;
