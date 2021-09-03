import React from "react";
import "./project-card.css";
const ProjectCard = ({ project }) => {
  console.log(project.image);
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
          {project.demo && (
            <a href={project.demo} className="project-link">
              <div className="project-link-button">
                <i class="fas fa-globe"></i>live
              </div>
            </a>
          )}
          {project.github && (
            <a href={project.github} className="github-link">
              <div className="project-link-button">
                <i class="fab fa-github"></i>github
              </div>
            </a>
          )}
        </div>
        <p>{project.about}</p>
        <div className="project-tags">
          {project.tags.map((tag) => {
            return <label className="tag">{tag}</label>;
          })}
        </div>
      </div>

      <img src={project.image} alt="image" className="project-photo" />
    </div>
  );
};

export default ProjectCard;
