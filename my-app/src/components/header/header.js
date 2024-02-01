import logo from "../../assets/LOGO.png";
import { NavLink } from "react-router-dom";
import "./header.scss";

function Header() {
  return (
    <header className="header">
      <img className="img-header" src={logo}></img>
      <nav>
        <NavLink className="lien" activeClassName="active" exact to="/">
          Accueil
        </NavLink>
        <NavLink className="lien" activeClassName="active" to="/About">
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
