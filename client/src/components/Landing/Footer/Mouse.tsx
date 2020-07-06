import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMouse } from "@fortawesome/free-solid-svg-icons";

const Mouse = () => {
  return (
    <div className="mouse">
      {/* <FontAwesomeIcon icon={faMouse} size="2x" /> */}
      <div className="mouse-icon">
        <div className="mouse-wheel"></div>
      </div>
      <h3>Scroll Down</h3>
    </div>
  );
};

export default Mouse;
