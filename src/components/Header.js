import React from "react";
import Voyager_Logo_Red from "../assets/Voyager_Logo_White.png";
import { Link } from "react-router-dom";
import "../style/header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img className="headerLogo" src={Voyager_Logo_Red} />
      </Link>
    </div>
  );
};

export default Header;
