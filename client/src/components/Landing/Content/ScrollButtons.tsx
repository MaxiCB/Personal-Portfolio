import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleDown,
  faChevronCircleUp,
} from "@fortawesome/free-solid-svg-icons";

const ScrollButtons = () => {
  return (
    <div className="main-buttons">
      <FontAwesomeIcon
        icon={faChevronCircleUp}
        size="2x"
        color="rgba(0, 0, 0, 0.4)"
      />
      <FontAwesomeIcon icon={faChevronCircleDown} size="2x" />
    </div>
  );
};

export default ScrollButtons;
