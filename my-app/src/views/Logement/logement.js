import "./logement.scss";
import React from "react";
import Tag from "../../components/Tag/tag";
import Star from "../../components/Star/star";
import logo from "../../assets/Host.png";
import { useParams } from "react-router-dom";
import logementData from "../../data/logements.json";
import Carousel from "../../components/Carousel/carousel";
import Collapse from "../../components/Collapse/collapse";
import Error from "../Error/error";

function Logement() {
  const { id } = useParams();
  const logement = logementData.find((item) => item.id === id);

  if (!logement) {
    return <Error />;
  }

  const filledStarsCount = Math.min(5, Math.round(logement.rating));

  return (
    <div className="logement">
      <Carousel pictures={logement.pictures} />
      <div className="profil">
        <div className="Name">
          <h2>{logement.title}</h2>
          <p>{logement.location}</p>
        </div>

        <div className="host">
          <span>{logement.host.name}</span>
          <img
            src={logement.host.picture}
            alt={logement.host.name}
            className="imgProfil"
          />
        </div>
      </div>
      <div className="evaluation">
        <div className="tags">
          {logement.tags.map((tag, index) => (
            <Tag key={index} tag={tag} />
          ))}
        </div>

        <div className="rating">
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <Star key={index} filled={index < filledStarsCount} />
            ))}
        </div>
      </div>
      <div className="info">
        <Collapse title="Description" content={logement.description} />

        <Collapse
          title="Equipments"
          content={
            <ul>
              {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
}

export default Logement;
