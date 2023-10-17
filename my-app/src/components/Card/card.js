import "./card.scss";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, imageURL }) => {
  return (
    <section className="Card">
      <div className="ContainerCard">
        {/* <img className="imgcard" src={imageURL} /> */}
        <Link className="pagelogement" to={`/logement`}>
          {title}
        </Link>
      </div>
    </section>
  );
};

export default Card;
