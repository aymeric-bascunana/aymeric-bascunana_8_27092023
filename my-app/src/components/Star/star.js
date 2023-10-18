import React from "react";

function Star(props) {
  // Determine whether the star should be filled or empty based on the 'filled' prop
  const starClassName = props.filled ? "star-filled" : "star-empty";

  return <span className={`star ${starClassName}`}>★</span>;
}

export default Star;
