import React from "react";
import woman from "../images/Vimage.png";

export default function Info() {
  return (
    <div className="infoCard">
      <img src={woman} className="woman-image" alt="Woman" />
      <h2>Varsha Nookarapu</h2>
      <h3>Frontend Developer</h3>
      <h4>lakshmivarsha.n@gmail.com</h4>
      <button>
        <i class="fa-solid fa-envelope"></i>Email
      </button>
    </div>
  );
}
