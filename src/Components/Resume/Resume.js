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
        <div className="resume_right">
          <div className="resume_item resume_about">
            <div className="title">
              <h3 className="bold">About me</h3>
              <p>
                Self-driven veteran and cloud engineer with a year and a half
                experience in cloud engineering, coding, and cybersecurity. I am
                result-oriented professional with a diverse background working
                in a fast-paced environment.
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
                <ul className="certifications-list">
                  <li>AWS Certified Cloud Practitioner</li>
                  <li>AWS Solutions Architect Associate</li>
                  <li>CompTIA Security+</li>
                  <li>CompTIA Network+</li>
                  <li>CompTIA Cybersecurity Analyst+</li>
                </ul>
              </div>
              <div className="section education">
                <h2>Education</h2>
                <ul className="education-list">
                  <li>Purdue Northwest University</li>
                  <li>Code Platoon</li>
                  <li>University of North Carolina at Chapel Hill</li>
                </ul>
              </div>
            </div>
            <div className="section right-section">
              <h2>Experience</h2>
              <ul className="experience-list">
                <li>
                  7 years experience in sales, including medical device and SaaS
                </li>
                <li>
                  6 years of service as a US Marine, including 4 and half as a
                  Recon Marine
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
