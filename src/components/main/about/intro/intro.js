import React from "react";
import "./intro.css";

const Intro = () => {
  return (
    <div className="intro">
      <p>
        Frontend Developer with over 2 years of experience in the software
        development lifecycle (SDLC) and Web Development, specializing in
        developing and designing user experiences for Internet/Intranet
        applications. Proficient in Node.js, HTML (HTML5), CSS (CSS3),
        Bootstrap, JavaScript, SASS, React.js, React Native, Redux.js, Next.js,
        and Git, with a strong adherence to W3C standards. Possesses excellent
        analytical and logical programming skills with a solid conceptual
        understanding. Demonstrates leadership, communication, teamwork, and
        problem-solving abilities, creating a collaborative environment that
        drives projects to success.
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
