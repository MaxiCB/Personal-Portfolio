import React from "react";
import ScrollButtons from "./ScrollButtons";
import Information from "./Information";
import Illustrations from "./Illustrations";
import "../../../styles/content.css";

const Content = () => {
  return (
    <div className="main-content">
      <ScrollButtons />
      <Information />
      <Illustrations />
    </div>
  );
};

export default Content;
