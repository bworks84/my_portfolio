// Resume.js
import React, { useEffect } from "react";
import "./Resume.css";
import GitHubLink from "../GitHubLink/GitHubLink";
import LinkedInLink from "../LinkedIn/LinkedIn";
import architecture from "../../assets/crc-arch.png";

const Resume = () => {
  useEffect(() => {}, []);

  return (
    <div className="center">
      <div className="page-title">
        <h1>Cloud Resume Challenge part 2</h1>
      </div>
      <div className="resume">
        <div className="resume-title">
          <h1>Rob Works</h1>
          <div className="social-icons">
            <GitHubLink />
            <LinkedInLink />
          </div>
        </div>
        <div className="resume_right">
          <div className="resume-about">
            <h2 className="about-title">About me</h2>
            <p>
              Self-driven veteran and cloud engineer with a year and a half
              experience in cloud engineering, coding, and cybersecurity. I am
              result-oriented professional with a diverse background. I enjoy
              learning new skills and tackling problems. Seeking remote
              opportunities.
            </p>
          </div>
          <div className="sections-container">
            <div className="left-sections">
              <div className="section projects">
                <h2 className="section-title">Projects</h2>
                <ul className="projects-list">
                  <li>
                    <em>Cloud Resume Challenge</em>
                  </li>
                  <ul>
                    <li className="list-item-description">
                      Built modern resume with HTML and CSS, deployed to AWS S3,
                      hosted on R53, included API to track visitor count, and
                      implemented CI/CD
                    </li>
                  </ul>
                </ul>
              </div>
              <div className="section certifications">
                <h2 className="section-title">Certifications</h2>
                <ul className="certifications-list">
                  <li>AWS Certified Cloud Practitioner</li>
                  <li>AWS Solutions Architect Associate</li>
                  <li>CompTIA Security+</li>
                  <li>CompTIA Network+</li>
                  <li>CompTIA CySA+</li>
                </ul>
              </div>
              <div className="section education">
                <h2 className="section-title">Education</h2>
                <ul className="education-list">
                  <li>
                    <em>Purdue Northwest University</em>
                  </li>
                  <ul>
                    <li className="list-item-description">
                      8 course Cloud Administration Track
                    </li>
                  </ul>
                  <li>
                    <em>Code Platoon</em>
                  </li>
                  <ul>
                    <li className="list-item-description">
                      15 week full stack software engineering bootcamp
                    </li>
                  </ul>

                  <li>
                    <em>University of North Carolina at Chapel Hill</em>
                  </li>
                  <ul>
                    <li className="list-item-description">
                      Bachelor's Degree 2012
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
            <div className="section right-section">
              <h2 className="section-title">Experience</h2>
              <ul className="experience-list">
                <li>Student</li>
                <ul>
                  <li className="list-item-description">
                    2 years practicing cybersecurity, cloud tech, and Python
                  </li>
                </ul>
                <li>
                  <em>Career Break</em>
                </li>
                <ul>
                  <li className="list-item-description">
                    Traveled western United States for 1.5 years in self-built
                    campervan
                  </li>
                </ul>
                <li>
                  <em>Medical Device Rep</em>
                  <ul>
                    <li className="list-item-description">
                      5 years’ experience developing business relationships by
                      recognizing customer needs and presenting clinical
                      benefits of orthopedic treatment to diverse audiences.
                    </li>
                  </ul>
                </li>
                <li>
                  <em>SaaS Sales Rep</em>
                  <ul>
                    <li className="list-item-description">
                      Sold customized SaaS solutions for 2 years, utilizing
                      data-driven process to filter customers by priority,
                      research potential needs for product, and present
                      solutions to executive audiences.
                    </li>
                    <li className="list-item-description">
                      Delivered over $144k in new annual recurring revenue in 12
                      months, 120% YTD quota attainment.
                    </li>
                  </ul>
                </li>
                <li>
                  <em>US Marine</em>
                  <ul>
                    <li className="list-item-description">
                      Served 6 years, deploying to Iraq and Afghanistan in
                      support of counterinsurgency operations as Reconnaissance
                      Marine
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="center-bottom">
        <div className="architecture-container">
          <img src={architecture} alt="architecture" id="architecture" />
        </div>
        <div className="architecture-summary">
          <h1 id="crc-title">Under the hood</h1>
          <p>
            (This site is an extension of the{" "}
            <a href="https://cloudresumechallenge.dev/">
              Cloud Resume Challenge
            </a>{" "}
            by Forrest Brazeal.)
          </p>
          <br />
          <p>
            If you are interested to know, this site is built with React and
            hosted on AWS. I have setup my own CI/CD pipeline using AWS CLI and
            React scripts. The site is deployed to an S3 bucket and served via
            CloudFront. I have also setup a Lambda function with Python to track
            visitors to the site and store the data in a DynamoDB table. The
            Lambda function is triggered by an API each time a new visitor views
            the site. The website is hosted on a custom domain name that is
            managed through Route53. I have also setup a CloudWatch alarm to
            notify me if the site goes down and a CloudWatch dashboard to
            monitor the health of the site. The use of IAM Roles are part of the
            challenge that ensure permissions are set for each service to
            interact with one another.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
