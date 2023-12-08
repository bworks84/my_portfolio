import React from "react";
import "./AboutMe.css";
import birdseye from "../../assets/birdseye.JPG";

const AboutMe = () => {
  return (
    <div className="container">
      <div className="left-section-about">
        <img src={birdseye} alt="birdseye-view" className="stock-photo" />
      </div>
      <div className="right-section-container">
        <div className="right-section-about">
          <h1>About Me</h1>
          <p>
            I'm a US Marine and currently studying cybersecurity and cloud tech,
            mostly AWS. I am using this website as a way to present some of my
            projects and continue coding while I study for the Linux+ and RedHat
            Certified System Administrator exams.
            <br />
            <br />
            I began working with computers as a child, learning a lot about
            rebuilding PCs so that I could play video games. In the military, I
            worked with a lot of different radios and technical gear that
            enabled me and my team to be successful operating in dangerous
            environments.
            <br />
            <br />
            Now, I'm interested in securing cloud infrastructure and protecting
            user data. In my free time I enjoy learning and or building new
            projects, exercising, mountain biking, and hiking.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
