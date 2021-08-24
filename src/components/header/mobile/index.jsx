import React from "react";
import "./index.css";
const Mobile = ({ isOpen, setIsOpen }) => {
  return (
    <div className="mobile-container">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <i class="fas fa-times-circle"></i>
      </div>
      <div className="nav-elements">
        <div className="nav-element">
          <a href="#projects">
            <i class="fas fa-tasks nav-logo"></i>Projects
          </a>
        </div>
        <div className="nav-element">
          <a href="#skills">
            <i class="fas fa-laptop-code nav-logo"></i>Skills
          </a>
        </div>
        <div className="nav-element">
          <a href="#works">
            <i class="fas fa-briefcase nav-logo"></i>Works
          </a>
        </div>
        <div className="nav-element">
          <a href="#contact">
            <i class="fas fa-user nav-logo"></i>Contact
          </a>
        </div>
      </div>
    </div>
  );
};
export default Mobile;
