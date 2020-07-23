import React from "react";
// Style
import "../../../styles/navigation.css";
// Components
import Logo from "./Logo";
import Links from "./Links";
import Social from "./Social";
// Iconst
import { Menu } from "react-feather";

const Nav = () => {
  return (
    <>
      <div className="nav-bar">
        <Menu className="menu" />
        <Logo />
        <Links />
        <Social />
      </div>
      <div className="block-social">
        <Social />
      </div>
    </>
  );
};

export default Nav;
