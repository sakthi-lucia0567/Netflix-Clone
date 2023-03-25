import React from "react";
import "../css/Nav.css";

function Nav() {
  return (
    <div className="nav nav_black">
      <div className="nav_contents">
        <img
          className="nav_logo"
          src="src\assets\images\Netflix_Logo_RGB.png"
          alt="netflix logo"
        />
        <img
          className="nav_avatar"
          src="src\assets\images\avatar-icon.jpg"
          alt="netflix logo"
        />
      </div>
    </div>
  );
}

export default Nav;
