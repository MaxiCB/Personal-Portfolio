import React from "react";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { Linkedin, GitHub, Twitter, Instagram } from "react-feather";
const Social = () => {
  return (
    <div className="social">
      <Linkedin />
      <Instagram />
      <GitHub />
      <Twitter />
    </div>
  );
};

export default Social;
