import React from "react";
import photo from "../../../assets/photo.png";
import "./about.css";
import SocialContact from "../../comman/contact/contact";
import Typical from "react-typical";
const About = () => {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          <p>
            I am a
            <Typical
              className="moving-text"
              loop={Infinity}
              wrapper="b"
              steps={[
                " ReactJS developer.",
                1000,
                " Blockchain Enthusiast.",
                1000,
              ]}
            />
          </p>
        </div>
        <div className="about-photo">
          <img src={photo} alt="Badal" className="photo" />
        </div>
      </div>
      <SocialContact />
    </div>
  );
};
export default About;
