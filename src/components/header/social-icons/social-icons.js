import React from "react";
import { TfiLinkedin, TfiGithub } from "react-icons/tfi";
import { SiMedium } from "react-icons/si";
import "./social-icons.css";

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/beratucar/" target={"_blank"}>
            <TfiLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/beratucardy" target={"_blank"}>
            <TfiGithub />
          </a>
        </li>
        <li>
          <a href="https://medium.com/@dev.beratucar" target={"_blank"}>
            <SiMedium />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
