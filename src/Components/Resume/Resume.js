// Resume.js

import React from "react";
import "./Resume.css"; // Import the CSS file

const Resume = () => {
  return (
    <div className="resume-container">
      <header>
        <h1>Rob Works</h1>
        <p>Winston-Salem, NC | 336-413-9633 | bworks84@gmail.com</p>
        <p>github.com/bworks84 | linkedin.com/in/rob-works-coding/</p>
      </header>

      <section>
        <h2>About Me</h2>
        <p>
          A self-taught information technology specialist and military veteran,
          eager to transition from a successful sales career to the cloud. A
          versatile professional with 1.5 years experience in programming,
          cybersecurity, and cloud technology, driven to address information
          security vulnerabilities by utilizing technology.
        </p>
      </section>

      <section>
        <h2>Certifications</h2>
        <ul>
          <li>AWS Certified Cloud Practitioner NH1YWBLBNJQE1T55</li>
          <li>AWS Solutions Architect Associate (CO2) V3N73QC1SME1QK94</li>
          <li>CompTIA Network+ 5RTB06ZYGMF11FCS</li>
          <li>CompTIA Security+ X2TJ6FCQHB41QB3G</li>
          <li>CompTIA CySA+ (003) YBPY7GRT2NEQQRC8</li>
        </ul>
      </section>

      <section>
        <h2>Software and Cloud Portfolio</h2>
        <ul>
          <li>
            <strong>Cloud Resume Challenge:</strong> Hosted HTML-styled resume
            on a personal domain through AWS S3 and Route53. Secured domain with
            HTTPS Certificate and CloudFormation. Built Lambda API that
            incremented site count held in DynamoDB table.
          </li>
          <li>
            <strong>Recipe Finder App:</strong> Built full-stack (CRUD) recipe
            recommendation application utilizing React, JavaScript, Django,
            Python, APIs, and PostgreSQL. Utilized Authentication tokens for
            security and identifying personal session data.
          </li>
          <li>
            <strong>AWS Serverless API:</strong> Built API utilizing JavaScript,
            AWS Lambda and CloudFormation to analyze user input text.
          </li>
        </ul>
      </section>

      <section className="experience">
        <h2>Experience</h2>
        <ul>{/* ... Experience details go here ... */}</ul>
      </section>

      <section className="education">
        <h2>Education</h2>
        <p>{/* ... Education details go here ... */}</p>
      </section>

      {/* ... Add more sections as needed ... */}
    </div>
  );
};

export default Resume;
