import React from "react";
// Social Icons
import linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.svg";
import github from "../../assets/github.svg";
import twitter from "../../assets/twitter.svg";
const Social = () => {
  return (
    <div className="social">
      <img src={linkedin} alt="LinkedIn" />
      <img src={instagram} alt="Instagram" />
      <img src={github} alt="Github" />
      <img src={twitter} alt="Twitter" />
    </div>
  );
};

export default Social;
