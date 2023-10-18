import "./logement.scss";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import { Collapse } from "react-collapse";
import React from "react";
import Tag from "../../components/Tag/tag";
import Star from "../../components/Star/star";
import { Carousel } from "react-responsive-carousel";

function Logement() {
  return (
    <>
      <Header />
      const pictureList = logements.map((logement, index) = (
      <Carousel key={index} pictures={logement.pictures} />
      ));
      {/* let slideIndex = 0;
const slideNbr = slides.length;

      <a class="prev">
          <img
            class="arrow arrow_left"
            src="./assets/images/arrow_left.png"
            alt="arrow_left"
          />
        </a>

        <a class="next">
          <img
            class="arrow arrow_right"
            src="./assets/images/arrow_right.png"
            alt="arrow_right"
          />

      / Flèche gauche du carrousel
      const arrowPrev = document.querySelector(".arrow_left");
      arrowPrev.addEventListener("click", () => {
         if (slideIndex === 0) {
         slideIndex = slideNbr - 1;
        } else {
         slideIndex = slideIndex - 1;
          }
              showSlides(slideIndex);
            });

// Flèche droite du carrousel
const arrowNext = document.querySelector(".arrow_right");
arrowNext.addEventListener("click", () => {
  if (slideIndex === slideNbr - 1) {
    slideIndex = 0;
  } else {
    slideIndex = slideIndex + 1;
  }
  showSlides(slideIndex);
}); */}
      <div className="cards">{pictureList}</div>
      <div className="container-info">
        <h2 className="name-logement"> Cozy loft on the Canal Saint-Martin </h2>
        <p className="position">Paris, île-de-France </p>
        <div className="container-note">
          <div className="container-btn">
            <Tag label="Cozy" />
            <Tag label="Canal" />
            <Tag label="Paris 10" />
          </div>

          <div className="container-stars">
            <Star filled={true} />
            <Star filled={true} />
            <Star filled={true} />
            <Star filled={false} />
            <Star filled={false} />
          </div>
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
