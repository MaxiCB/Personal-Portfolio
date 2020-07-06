import React from "react";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
const Social = () => {
  return (
    <div className="social">
      <FontAwesomeIcon icon={faLinkedin} size="2x" />
      <FontAwesomeIcon icon={faGithubSquare} size="2x" />
      <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
    </div>
  );
};

export default Social;
