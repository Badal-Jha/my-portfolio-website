import React from "react";
import photo from "../../../assets/photo.png";
import "./about.css";
import Typical from "react-typical";
const About = () => {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          <p>
            I Build
            <Typical
              className="moving-text"
              loop={Infinity}
              wrapper="b"
              steps={[
                " React Applications.",
                1000,
                " Blockchain Applicatons.",
                1000,
              ]}
            />
          </p>
          Hello, This is Badal Jha.
          <br />I am Learning reactjs and blockchain appplication development.
        </div>
        <div className="about-photo">
          <img src={photo} alt="Badal" className="photo" />
        </div>
      </div>
    </div>
  );
};
export default About;
