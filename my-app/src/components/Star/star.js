import React from "react";
import "./star.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Star({ filled }) {
  const starClassName = filled ? "star-filled" : "star-empty";

  return <FontAwesomeIcon icon={faStar} className={`star ${starClassName}`} />;
}

export default Star;
