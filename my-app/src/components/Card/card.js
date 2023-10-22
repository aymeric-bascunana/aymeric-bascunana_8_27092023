import "./card.scss";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, imageURL, id }) => {
  const cardStyle = {
    backgroundImage: `url(${imageURL})`,
  };
  return (
    <article className="Card">
      {/* <div className="ContainerCard"> */}
      <Link className="pagelogement" to={`/logement/${id}`}>
        <div className="CardImage" style={cardStyle}></div>
        <span className="CardTitle">{title}</span>
      </Link>
      {/* </div> */}
    </article>
  );
};

export default Card;
