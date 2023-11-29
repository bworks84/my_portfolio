import React from "react";
import "./Intro.css";
import { Link } from "react-scroll";
import selfie from "../../assets/GCpic.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hey</span>
        <span className="introText">
          I'm <span className="introName">Rob,</span> <br />a Cloud Engineer
        </span>
        <p className="introPara">
          I enjoy learning and utilizing tech to solve problems. This new site
          will be home to my portfolio and blog. Check back soon for updates!
        </p>
      </div>
      <img src={selfie} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
