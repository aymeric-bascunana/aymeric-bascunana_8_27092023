import "./logement.scss";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Carrousel from "../../assets/Carrousel.png";
import { Collapse } from "react-collapse";

function Logement() {
  return (
    <>
      <Header />
      <div className="container-carrousel">
        <img className="carrousel" src={Carrousel}></img>
      </div>
      <div className="container-info">
        <h2 className="name-logement"> Cozy loft on the Canal Saint-Martin </h2>
        <p className="position">Paris, île-de-France </p>
        <div className="container-btn">
          <button className="btn"> Cozy</button>
          <button className="btn"> Canal</button>
          <button className="btn"> Paris 10</button>
        </div>

        <Collapse isOpened={true || false}>
          <div className="btninfo">Description</div>
          <div className="btninfo">Equipements</div>
        </Collapse>
      </div>
      <Footer />
    </>
  );
}

export default Logement;
