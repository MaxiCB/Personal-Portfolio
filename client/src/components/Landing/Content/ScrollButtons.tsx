import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleDown,
  faChevronCircleUp,
} from "@fortawesome/free-solid-svg-icons";

const ScrollButtons = () => {
  return (
    <div className="main-buttons">
      <FontAwesomeIcon icon={faChevronCircleUp} size="3x" />
      <FontAwesomeIcon icon={faChevronCircleDown} size="3x" />
    </div>
  );
};

export default ScrollButtons;
