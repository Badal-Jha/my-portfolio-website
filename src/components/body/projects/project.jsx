import React from "react";
import "./projects.css";
import projectsData from "../../data/projects";
import ProjectCard from "./project-card";
import SectionSeperator from "../../comman/sectionSeperator/sectionSeperator";
const Projects = () => {
  const data = projectsData;
  return (
    <div className="projects">
      <div className="section-title">Projects</div>
      <SectionSeperator />
      <div>
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
