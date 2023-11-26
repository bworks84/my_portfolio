import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">Check out what I'm working on</span>
      <span className="skillDesc">
        I am a cloud engineer learning more front-end applications like React to
        practice and demonstrate my interests in the cloud and cybersecurity.
        <br />
        Check out some of my recent projects and courses below!
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img />
          <div className="skillBarText">
            <h2 className="skillBarTitle">
              <a href="https://www.pnw.edu/cybersecurity/cwct/training-paths/cybersecurity-system-administration-certificate-program/">
                Cybersecurity Systems Administration
              </a>
            </h2>
            <p>
              Check out this great cybersecurity program that includes courses
              in CompTIA A+, Linux, RHCSA, CEH, and more!
            </p>
          </div>
        </div>
        <div>
          <img />
        </div>
      </div>
    </section>
  );
};

export default Skills;
