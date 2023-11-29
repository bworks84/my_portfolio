import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./LinkedIn.css";

const LinkedInLink = () => {
  return (
    <a
      href="https://www.linkedin.com/in/rob-works-coding/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
  );
};

export default LinkedInLink;
