import "./carousel.scss";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import logementData from "../../data/logements.json";

const Carousel = ({ Logement }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { id } = useParams();
  const logement = logementData.find((item) => item.id === id);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  if (!logement.pictures) {
    return <div>Aucune image disponible pour ce logement</div>;
  }

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % logement.pictures.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0
        ? logement.pictures.length - 1
        : currentImageIndex - 1
    );
  };

  return (
    <>
      <div className="cards">
        <Carousel
          pictures={logement.pictures}
          currentIndex={currentImageIndex}
        />
      </div>
      <button onClick={prevImage} className="arrow arrow_left">
        &lt;
      </button>
      <button onClick={nextImage} className="arrow arrow_right">
        &gt;
      </button>
    </>
  );
};

export default Carousel;
