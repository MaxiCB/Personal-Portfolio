import React from "react";
import Person from "../../../assets/person.svg";
import Phone from "../../../assets/phone.svg";
import Webapp from "../../../assets/webapp.svg";
import Server from "../../../assets/server.svg";

const Illustrations = () => {
  return (
    <div className="main-illustrations">
      <img className="person-image" src={Person} alt="person illustration" />
      <div className="secondary-images">
        <img src={Webapp} alt="webapp illustration" className="app-image" />
        <img src={Server} alt="server illustration" className="server-image" />
      </div>
      <img src={Phone} alt="phone illustration" className="phone-image" />
    </div>
  );
};

export default Illustrations;
