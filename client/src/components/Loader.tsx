import React from "react";
import "../styles/loader.scss";

interface LoaderProps {
  opacity: number;
}

const Loader: React.FC<LoaderProps> = ({ opacity }) => {
  return (
    <div className="loader" style={{ opacity: opacity }}>
      <div className="bar1" />
      <div className="bar2" />
      <div className="bar3" />
      <div className="bar4" />
      <div className="bar5" />
      <div className="bar6" />
    </div>
  );
};

export default Loader;
