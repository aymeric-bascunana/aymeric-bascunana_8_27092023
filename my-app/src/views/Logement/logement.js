import "./logement.scss";
import React from "react";
import Tag from "../../components/Tag/tag";
import Star from "../../components/Star/star";
import logo from "../../assets/Host.png";
import { useParams } from "react-router-dom";
import logementData from "../../data/logements.json";
import Carousel from "../../components/Carousel/carousel";

function Logement() {
  const { id } = useParams();
  const logement = logementData.find((item) => item.id === id);

  const pictureList = logement.pictures.map((picture, index) => (
    <Carousel key={index} pictures={logement.pictures} />
  ));

  return (
    <>
      <div className="cards">{pictureList}</div>
      <div className="container-info">
        <div className="container-nameID">
          <h2 className="name-logement">
            {" "}
            Cozy loft on the Canal Saint-Martin{" "}
          </h2>
          <div className="nameID">
            <p className="surname">Alexandre Dumas</p>
            <img className="profil" src={logo}></img>
          </div>
        </div>
        <p className="position">Paris, île-de-France </p>
        <div className="container-note">
          <div className="container-btn">
            {/* <Tag label="Cozy" />
            <Tag label="Canal" />
            <Tag label="Paris 10" /> */}
          </div>

          <div className="container-stars">
            {/* <Star filled={true} />
            <Star filled={true} />
            <Star filled={true} />
            <Star filled={false} />
            <Star filled={false} /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Logement;
