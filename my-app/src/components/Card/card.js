import "./card.scss";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, imageURL, id }) => {
  return (
    <article className="Card">
      {/* <div className="ContainerCard"> */}
      <img className="imgcard" src={imageURL} />
      <Link className="pagelogement" to={`/logement/${id}`}>
        {title}
      </Link>
      {/* </div> */}
    </article>
  );
};

export default Card;
