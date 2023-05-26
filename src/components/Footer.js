import React from "react";
import Voyager_Logo_White from "../assets/Voyager_Logo_White.png";
import { useNavigate } from "react-router-dom";
import "../style/footer.css";
import { BsLinkedin } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import { HiOutlineDesktopComputer } from "react-icons/hi";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="footerContainer">
        <div className="footerLogo">
          <img
            src={Voyager_Logo_White}
            className="footerImg"
            alt="Voyager Logo"
          />
          <div className="socialContainer">
            <a
              href="https://linkedin.com/in/duffisberg"
              rel="noreferrer"
              target="_blank"
            >
              <BsLinkedin className="socialIcon"></BsLinkedin>
            </a>
            <a
              href="https://github.com/wisberg"
              rel="noreferrer"
              target="_blank"
            >
              <SiGithub className="socialIcon" />
            </a>
            <a href="https://duffisberg.com" rel="noreferrer" target="_blank">
              <HiOutlineDesktopComputer className="socialIcon" />
            </a>
          </div>
        </div>
        <div className="footerLinks">
          <ul>
            <button
              className="footerButton"
              onClick={() => {
                navigate("/");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Search with Voyager{" "}
            </button>
            <button
              className="footerButton"
              onClick={() => {
                navigate("/about");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              About Voyager
            </button>
          </ul>
        </div>
      </div>
      <div className="credits">
        Voyager is a project by Front-End Engineer & UX Designer,&nbsp;
        <a
          id="duffLink"
          href="https://duffisberg.com"
          rel="nofollower"
          target="_blank"
        >
          Duff Isberg
        </a>
      </div>
    </>
  );
};

export default Footer;
