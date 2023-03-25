import React, { useEffect, useState } from "react";
import "../css/Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionBar);
    return () => {
      window.removeEventListener("scroll", transitionBar);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
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
