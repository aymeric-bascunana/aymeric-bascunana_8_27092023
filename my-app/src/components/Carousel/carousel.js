import React, { useState } from "react";
import "./carousel.scss";
import "./ResponsiveCarousel.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

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

  const shouldShowArrowsAndDots = pictures.length > 1;

  return (
    <div className="carousel">
      <img
        src={pictures[currentImageIndex]}
        alt="Carousel"
        className="carouselimage"
      />
      {shouldShowArrowsAndDots && (
        <React.Fragment>
          <button onClick={prevImage} className="arrow arrow_left">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button onClick={nextImage} className="arrow arrow_right">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <div className="carousel-dots">
            {pictures.map((picture, index) => (
              <span
                key={index}
                className={`dot ${currentImageIndex === index ? "active" : ""}`}
                onClick={() => setCurrentImageIndex(index)}
              ></span>
            ))}
          </div>
        </React.Fragment>
      )}
      {shouldShowArrowsAndDots && (
        <div className="carousel-number">
          {currentImageIndex + 1}/{pictures.length}
        </div>
      )}
    </div>
  );
};

export default Carousel;
