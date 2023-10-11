import "../Logement/logement.scss";
import Header from "../header/header";
import Footer from "../footer/footer";
import Carrousel from "../../assets/Carrousel.png";

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

        <div className="btn-info">
          <button className="btninfo">Description</button>
          <button className="btninfo">Equipements</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Logement;
