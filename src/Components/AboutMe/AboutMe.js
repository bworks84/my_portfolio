import React from "react";
import "./AboutMe.css";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hey,</span>
        <span className="introText">
          I'm <span className="introName">Rob</span> <br />a Cloud Engineer
        </span>
        <p className="introPara">
          I am learning web design
          <br />
          for cloud projects!
        </p>
        <Link>
          <button className="btn">
            <img /> Hire Me
          </button>
        </Link>
      </div>
      <img />
    </section>
  );
};

export default Intro;
