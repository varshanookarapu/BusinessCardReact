import React from "react";
import woman from "../images/woman.png";

export default function Info() {
  return (
    <div className="infoCard">
      <img src={woman} className="woman-image" alt="Woman" />
      <h2>Laura Smith</h2>
      <h3>Frontend Developer</h3>
      <h4>laurasmith.website</h4>
      <button>
        <i class="fa-solid fa-envelope"></i>Email
      </button>
    </div>
  );
}
