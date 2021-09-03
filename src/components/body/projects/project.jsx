import React from "react";
import "./projects.css";
import projectsData from "../../data/projects";
import ProjectCard from "./project-card";
const Projects = () => {
  const data = projectsData;
  return (
    <div className="projects">
      <div className="section-title">Projects</div>
      <div>
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
