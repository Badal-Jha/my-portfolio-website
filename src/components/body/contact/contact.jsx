import React from "react";
import SocialContact from "../../comman/contact/contact";
import SectionSeperator from "../../comman/sectionSeperator/sectionSeperator";
const Contact = () => {
  return (
    <div className="contact-section">
      <div className="section-title">Contacts</div>
      <SectionSeperator />
      <SocialContact />
    </div>
  );
};

export default Contact;
