import React from "react";
import reactBgLogo from "../images/Groupbackgroundlogo.png";
export default function MainContent() {
  return (
    <main className="mainContent">
      <h1>Fun facts about React</h1>
      <div className="container">
        <ul className="main--facts">
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
        {/* <img src={reactBgLogo} className="bg-logo" alt="React logo" /> */}
      </div>
    </main>
  );
}
