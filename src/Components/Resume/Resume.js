// Resume.js
import React from "react";
import "./Resume.css";
import GitHubLink from "../GitHubLink/GitHubLink";
import LinkedInLink from "../LinkedIn/LinkedIn";

const Resume = () => {
  return (
    <div className="center">
      <div className="resume">
        <div className="title">
          <h1>Rob Works</h1>
          <div className="social-icons">
            <GitHubLink />
            <LinkedInLink />
          </div>
        </div>
        <div className="resume_left">
          <div className="resume_profile"></div>
          <div className="resume_content">{/* ... other sections ... */}</div>
        </div>
        <div className="resume_right">
          <div className="resume_item resume_about">
            <div className="title">
              <h3 className="bold">About me</h3>
              <p>
                Self-driven cloud engineer and military veteran seeking
                opportunity
              </p>
            </div>
          </div>
          <div className="sections-container">
            <div className="left-sections">
              <div className="section projects">
                <h2>Projects</h2>
                {/* ... Your projects content */}
              </div>
              <div className="section certifications">
                <h2>Certifications</h2>
                {/* ... Your certifications content */}
              </div>
              <div className="section education">
                <h2>Education</h2>
                {/* ... Your education content */}
              </div>
            </div>
            <div className="section right-section">
              <h2>Experience</h2>
              {/* ... Your experience content */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
