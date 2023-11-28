import React from "react";
import "./Skills.css";
import terraform from "../../assets/terraform.svg";
import systems from "../../assets/diagram-project-solid.svg";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">Check out what I'm working on</span>
      <span className="skillDesc">
        {" "}
        I'm a former US Marine and current student studying Cybersecurity and
        Cloud Computing. I'm interested in securing cloud infrastructure and
        protecting user data. In my free time I enjoy learning more about
        ethical hacking and data forensics.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={systems} alt="Skill" className="skillBarImg"></img>
          <div className="skillBarText">
            <h2 className="skillBarTitle">
              <a href="https://www.pnw.edu/cybersecurity/cwct/training-paths/cybersecurity-system-administration-certificate-program/">
                Cybersecurity Systems Administration
              </a>
            </h2>
            <p>
              Check out this great cybersecurity program I completed that
              includes courses for CompTIA A+, Linux, RHCSA, CEH, Python, and
              more!
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={terraform} alt="Skill" className="skillBarImg"></img>
          <div className="skillBarText">
            <h2 className="skillBarTitle">
              <a href="https://www.exampro.co/ter-cpb-001">
                ExamPro Terraform Cloud Project
              </a>
            </h2>
            <p>Learning Infrastructure as Code by building a web app on AWS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
