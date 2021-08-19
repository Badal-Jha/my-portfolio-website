import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "./index.css";
const Web = () => {
  return (
    <div className="container">
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
  );
};
export default Web;
