import React from "react";
import reactLogo from "../images/Groupreactlogo.png";

export default function NavBar() {
  return (
    <nav>
      <img src={reactLogo} className="logo react" alt="React logo" />
      <h3>ReactFacts</h3>
      <h4>React Course - Project 1</h4>
    </nav>
  );
}
