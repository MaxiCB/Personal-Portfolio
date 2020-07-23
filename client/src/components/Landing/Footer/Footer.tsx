import React from "react";
// Style
import "../../../styles/footer.css";
import Mouse from "./Mouse";
import Accolade from "./Accolade";
// Icons
import { ChevronsDown } from "react-feather";

const Footer = () => {
  return (
    <div className="footer">
      <div className="mobile-footer">
        <h1>Scroll Down</h1>
        <ChevronsDown className="chevrons" />
      </div>
      <Mouse />
      <Accolade />
    </div>
  );
};

export default Footer;
