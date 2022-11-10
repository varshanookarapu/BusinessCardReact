import React from "react";
import instagram from "../images/ig.png";
import facebook from "../images/fb.png";
import linkedin from "../images/ln.png";
import github from "../images/gh.png";
import twitter from "../images/tw.png";
export default function Footer() {
  return (
    <footer>
      <img src={instagram} alt="ig" />
      <img src={facebook} alt="fb" />
      <img src={linkedin} alt="ln" />
      <img src={github} alt="gh" />
      <img src={twitter} alt="tw" />
    </footer>
  );
}
