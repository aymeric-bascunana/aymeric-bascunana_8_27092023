import React from "react";
import "./star.scss";

function Star({ filled }) {
  const starClassName = filled ? "star-filled" : "star-empty";

  return <span className={`star ${starClassName}`}>★</span>;
}

export default Star;
