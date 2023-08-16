import React from "react";
import "./intro.css";

const Intro = () => {
  return (
    <div className="intro">
      <p>
        Front-End Developer with 2+ year experience in the software development
        lifecycle (SDLC) in developing and designing user experiences of
        Internet/Intranet applications using HTML, CSS, Bootstrap, JavaScript,
        SASS, React.js, Redux.js MeetingW3C standards. Excellent analytical and
        logical programming skills with a good understanding at the conceptual
        level.
      </p>

      <ul className="info">
        <li>
          <strong>Birthday:</strong> December 10, 1998
        </li>
        <li>
          <strong>Location:</strong> Ankara, Turkey
        </li>
        <li>
          <strong>Email:</strong> dev.beratucar@gmail.com
        </li>
        <li>
          <strong>Phone:</strong> +90 553 745 70 33
        </li>
      </ul>
    </div>
  );
};

export default Intro;
