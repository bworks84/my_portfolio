import React, { useEffect } from "react";
import "./Intro.css";
import selfie from "../../assets/GCpic.png";
import Footer from "../Footer/Footer";
import "../Footer/Footer.css";

const Intro = () => {
  return (
    <section id="intro" className="intro-container">
      <div className="introContent">
        <div className="intro-content-container">
          <span id="hello">Hey</span>
          <span className="introText">
            I'm <span className="introName">Rob,</span> <br />a Cloud Engineer
          </span>
          <p className="introPara">
            I enjoy learning and utilizing tech to solve problems. <br />
            Welcome to my portfolio site!
          </p>
        </div>
      </div>
      <img src={selfie} alt="Profile" className="bg" />
      <Footer />
    </section>
  );
};

export default Intro;
