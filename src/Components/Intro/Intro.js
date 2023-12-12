import React from "react";
import "./Intro.css";
import selfie from "../../assets/GCpic.png";
import Footer from "../Footer/Footer";
import "../Footer/Footer.css";

const Intro = () => {
  return (
    <section id="intro" className="intro-container">
      <div className="introContent">
        <div className="intro-content-container">
          <span className="hello">
            Hey
            <br />
          </span>
          <span>
            I'm <span className="introName">Rob, </span>
          </span>
          a Cloud Engineer
        </div>
      </div>
      <img src={selfie} alt="Profile" className="bg" />
      <Footer />
    </section>
  );
};

export default Intro;
