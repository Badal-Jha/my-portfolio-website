import React, { useState } from "react";
import Mobile from "./mobile/index";
import Web from "./web/index";
import "./header.css";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false); //useState is same as setState in class based it return array of two value value,function;

  return (
    <div className="header">
      <div className="logo">Badal Jha</div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div onClick={() => setIsOpen(!isOpen)}>
            <i class="fas fa-bars menu-icon"></i>
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
};
export default Header;
