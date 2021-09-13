import React from "react";
import SectionSeperator from "../../comman/sectionSeperator/sectionSeperator";
import skillsData from "../../data/skills";
import "./skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <div className="section-title">Skills</div>
      <SectionSeperator />
      <div className="skills-container">
        {skillsData.map((item) => {
          return (
            <div className="skills-section">
              <div className="skills-type">{item.type}</div>
              <div className="skills-icons">
                {item.skills.map((skill) => {
                  return (
                    <div className="skill-box">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="skill-icon"
                      />
                      <label>{skill.name}</label>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
