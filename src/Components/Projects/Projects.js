import React from "react";
import "./Projects.css";

const Project = ({ title, description, githubLink }) => (
  <div className="project-box">
    <div className="project">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
  </div>
);

const ProjectsContainer = () => {
  return (
    <div className="projects-container">
      <Project
        title="Terraform project"
        description="A project showcasing the use of Terraform for infrastructure provisioning."
        githubLink="https://github.com/bworks84/terraform-proj"
      />
      <Project
        title="Cloud Resume Challenge"
        description="Implemented a cloud-based resume following the Cloud Resume Challenge guidelines."
        githubLink="https://github.com/bworks84/cloud-resume-challenge"
      />
      <Project
        title="Example project"
        description="Here's another project"
        githubLink="https://github.com/bworks84/cloud-resume-challenge"
      />
      <Project
        title="Example project"
        description="Here's another project"
        githubLink="https://github.com/bworks84/cloud-resume-challenge"
      />
    </div>
  );
};

export default ProjectsContainer;
