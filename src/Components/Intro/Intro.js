import React from "react";
import "./Intro.css";
import { Link } from "react-scroll";
import selfie from "../../assets/GCpic.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hey,</span>
        <span className="introText">
          I'm <span className="introName">Rob</span> <br />a Cloud Engineer
        </span>
        <p className="introPara">
          I am practicing web design
          <br />
          to demonstrate my skills <br />
          and interests in the cloud
        </p>
        <Link>
          <button className="btn">Hire Me</button>
        </Link>
      </div>
      <img src={selfie} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
