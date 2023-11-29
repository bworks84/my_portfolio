import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./GitHubLink.css";

const GitHubLink = () => {
  return (
    <a
      href="https://github.com/bworks84"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faGithub} size="2x" />
    </a>
  );
};

export default GitHubLink;
