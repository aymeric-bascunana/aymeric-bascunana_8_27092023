import React, { useState } from "react";
import "./carousel.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Carousel = ({ pictures }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % pictures.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? pictures.length - 1 : currentImageIndex - 1
    );
  };

  return (
    <div className="carousel">
      <img
        src={pictures[currentImageIndex]}
        alt="Carousel"
        className="carouselimage"
      />
      <button onClick={prevImage} className="arrow arrow_left">
        <FontAwesomeIcon icon="faArrowLeft" />
      </button>
      <button onClick={nextImage} className="arrow arrow_right">
        <FontAwesomeIcon icon="faArrowRight" />
      </button>
    </div>
  );
};

export default Carousel;
