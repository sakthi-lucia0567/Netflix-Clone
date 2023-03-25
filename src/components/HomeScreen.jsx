import React from "react";
import Banner from "./Banner";
import "./css/HomeScreen.css";
import Nav from "./header/Nav";

function HomeScreen() {
  return (
    <div className="homeScreen">
      {/* Nav Bar */}
      <Nav />
      {/* Banner */}
      <Banner />
      {/* Rows */}
    </div>
  );
}

export default HomeScreen;
