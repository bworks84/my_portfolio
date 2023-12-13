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
        description="Terraform project for provisioning AWS infrastructure."
        githubLink="https://github.com/bworks84/terraform-proj"
      />
      <Project
        title="Cloud Resume Challenge"
        description="First attempt at Cloud Resume Challenge."
        githubLink="https://github.com/bworks84/cloud-resume-challenge"
      />
      <Project
        title="Todo List with AWS Amplify"
        description="I built a quick todo list app using AWS Amplify and React."
        githubLink="https://github.com/bworks84/Amplify_app"
      />
      <Project
        title="More Terraform"
        description="Building full-stack app with Terraform"
        githubLink="https://github.com/bworks84/Terraform-project"
      />
    </div>
  );
};

export default ProjectsContainer;
