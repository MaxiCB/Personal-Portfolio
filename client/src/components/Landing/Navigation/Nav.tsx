import React from "react";
// Style
import "../index.css";
// Components
import Logo from "./Logo";
import Links from "./Links";
import Social from "./Social";

const Nav = () => {
  return (
    <div className="nav-bar">
      <Logo />
      <Links />
      <Social />
    </div>
  );
};

export default Nav;
