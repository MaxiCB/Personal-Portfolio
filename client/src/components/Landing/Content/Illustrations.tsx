import React from "react";
import Person from "../../../assets/person.svg";
import Phone from "../../../assets/phone.svg";
import Webapp from "../../../assets/webapp.svg";
import Server from "../../../assets/server.svg";

const Illustrations = () => {
  return (
    <div className="main-illustrations">
      <img
        src={Person}
        alt="person illustration"
        style={{ paddingRight: "100px", paddingLeft: "100px" }}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <img src={Webapp} alt="webapp illustration" />
        <img src={Server} alt="server illustration" />
      </div>
      <img src={Phone} alt="phone illustration" />
    </div>
  );
};

export default Illustrations;
