// import "./banner.css";
import logo from "../../assets/LOGO.png";

function Header() {
  return (
    <header className="header">
      <img className="img-header" src={logo}></img>
      <nav>
        <a className="lien"> Accueil </a>
        <a className="lien"> A Propos</a>
      </nav>
    </header>
  );
}

export default Header;
