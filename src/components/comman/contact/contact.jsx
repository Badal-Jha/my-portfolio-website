import React from "react";
import { SocialData } from "../../data/social";
import "./contact.css";
const SocialContact = () => {
  const data = SocialData;

  return (
    <div className="contact">
      {data.map((item) => {
        return (
          <a key={item.platform} href={item.link} target="_blank">
            <div className="contact-icon-div">
              <img src={item.icon} className="contact-icon" alt="contact" />
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default SocialContact;
