import React from "react";
import "./Skills.css";
import terraform from "../../assets/terraform.svg";
import BadgeBar from "../BadgeBar/BadgeBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <section id="skills">
      <div className="divider"></div>
      <div className="about-me-container">
        <span className="skillTitle">About me</span>
        <span className="skillDesc">
          I'm a former US Marine and current student studying Cybersecurity and
          Cloud Computing. In the military, I enjoyed learning and utilizing
          technology to enable my team to be more successful. Now, I'm
          interested in securing cloud infrastructure and protecting user data.
          In my free time I enjoy learning more about cloud tech, backpacking,
          and mountain biking.
        </span>
      </div>
      <h2 id="current-studies">
        Below are a few courses and studies that I'm currently working on!
      </h2>
      <div className="skillBars">
        <div className="skillBar">
          <FontAwesomeIcon
            icon={faCloud}
            style={{ color: "#0097f5" }}
            size="2x"
            className="skillBarImg"
          />
          <div className="skillBarText">
            <h2 className="skillBarTitle">
              <a href="https://www.pnw.edu/cybersecurity/cwct/training-paths/cybersecurity-system-administration-certificate-program/">
                Cybersecurity Systems Administration
              </a>
            </h2>
            <p>
              Check out this great cybersecurity program from Purdue Northwest
              University that includes courses for CompTIA A+, Linux, RHCSA,
              CEH, Python, and more!
            </p>
          </div>
        </div>
        <div className="skillBar">
          <FontAwesomeIcon
            icon={faTerminal}
            style={{ color: "#127871" }}
            size="2x"
            className="skillBarImg"
          />
          <div className="skillBarText">
            <h2 className="skillBarTitle">
              <a className="fa-title">CompTIA Linux+</a>
            </h2>
            <p id="linux-text">
              I'm very interested in becoming proficient with Linux and studying
              to obtain the Linux+ certification by mid-January 2024
            </p>
          </div>
        </div>
      </div>
      <div>
        <BadgeBar />
      </div>
      <div className="divider"></div>
    </section>
  );
};

export default Skills;
