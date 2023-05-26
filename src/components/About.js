import React from "react";
import "../style/about.css";
import { SiGithub } from "react-icons/si";
import Voyager_Logo_White from "../assets/Voyager_Logo_White.png";
import Voyager_Logo_Black from "../assets/Voyager_Logo_Black.png";
import Voyager_Logo_Red from "../assets/Voyager_Logo_Red.png";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import BankNote from "../assets/BankNote_Mock.png";

const About = () => {
  return (
    <div className="aboutContainer">
      <div className="logosContainer">
        <img src={Voyager_Logo_White} className="logos" />
        <img src={Voyager_Logo_Black} className="logos" />
        <img src={Voyager_Logo_Red} className="logos" />
      </div>
      <div className="descriptionContainer">
        <p className="aboutDescription">
          Voyager is a project by{" "}
          <span style={{ fontSize: 30, fontWeight: 900 }}>Duff Isberg</span>, a
          Front-End Software Engineer & UX Designer. It is built with React, and
          uses the Usearch API for it's search engine.
        </p>
        <div className="buttonContainer">
          <a href="https://github.com/wisberg/voyager" className="aboutButton">
            <SiGithub className="aboutIcon" />
            View the Code
          </a>
          <a href="https://duffisberg.com" className="aboutButton">
            <HiOutlineDesktopComputer className="aboutIcon" />
            View Portfolio Site
          </a>
        </div>
        <p className="aboutDescription">
          View BankNote, another project by Duff Isberg.
        </p>
        <img src={BankNote} className="BankNote" />
        <a
          href="http://precious-duckanoo-bbc976.netlify.app"
          className="aboutButton"
        >
          <HiOutlineDesktopComputer className="aboutIcon" />
          BankNote
        </a>
      </div>
    </div>
  );
};

export default About;
