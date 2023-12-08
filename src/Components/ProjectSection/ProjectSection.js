import React from "react";
import ProjectsContainer from "../Projects/Projects";
import BadgeBar from "../BadgeBar/BadgeBar";
import "./ProjectSection.css";
import "../BadgeBar/BadgeBar.css";

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <div className="projects-main">
        <h1 id="current-studies">
          Check out some of my recent projects and certifications!
        </h1>
        <div>
          <ProjectsContainer />
        </div>
        <div>
          <BadgeBar />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
