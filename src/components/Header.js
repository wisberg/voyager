import React from "react";
import Voyager_Logo_Red from "../assets/Voyager_Logo_White.png";
import "../style/header.css";

const Header = () => {
  return (
    <div className="header">
      <img className="headerLogo" src={Voyager_Logo_Red} />
    </div>
  );
};

export default Header;
