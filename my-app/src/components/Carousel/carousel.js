import "./carousel.scss";
import React, { useState } from "react";

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
      <button onClick={prevImage} className="arrow arrow_left">
        &lt;
      </button>
      <img
        src={pictures[currentImageIndex]}
        alt={`Image ${currentImageIndex}`}
      />
      <button onClick={nextImage} className="arrow arrow_right">
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
