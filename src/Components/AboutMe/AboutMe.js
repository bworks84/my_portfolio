import React from "react";
import "./AboutMe.css";
import afghanSelfie from "../../assets/AfghanMarineSelfie.JPG";

const AboutMe = () => {
  return (
    <div className="container">
      <div className="left-section-about">
        <img src={afghanSelfie} alt="afghan-selfie" className="stock-photo" />
      </div>
      <div className="right-section-container">
        <div className="right-section-about">
          <h1>About Me</h1>
          <p>
            I'm a US Marine and currently working on cloud projects. I am using
            this website as a way to present some of tasks I'm working on while
            I study for the Linux+ and RedHat Certified System Administrator
            exams.
            <br />
            <br />
            I began working with computers as a kid, learning a lot about PCs by
            breaking and rebuilding them, so that I could play video games. In
            the military, I worked with a lot of different radios and technical
            gear that enabled me and my team to be successful operating in
            austere environments.
            <br />
            <br />
            Now, I'm interested in building and securing cloud infrastructure
            and cybersecurity. In my free time I enjoy learning and or building
            new projects, exercising, mountain biking, and hiking.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
