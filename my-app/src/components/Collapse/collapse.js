import React, { useState } from "react";
import "./collapse.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}>
        {title}
        <span className={`icon ${isOpen ? "open" : "closed"}`}>
          {isOpen ? "▼" : "►"}
        </span>
      </div>
      {isOpen && <div className="collapse-content">{content}</div>}
    </div>
  );
};

export default Collapse;
