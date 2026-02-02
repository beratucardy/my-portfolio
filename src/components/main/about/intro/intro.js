import React from "react";
import "./intro.css";

const Intro = () => {
  return (
    <div className="intro">
      <p>
        Frontend Developer with 3+ years of professional experience in building
        scalable and maintainable web applications. Specialized in modern
        JavaScript and TypeScript-based frameworks, particularly Vue.js and
        Nuxt.js, with hands-on experience in React.js and Next.js projects.
        Experienced in developing enterprise-level admin panels, data-driven
        interfaces, and complex user workflows. Familiar with Node.js,
        Express.js, MongoDB, and MySQL, supporting effective collaboration with
        backend teams and API-driven development. Strong focus on clean code,
        performance, and maintainable architecture. Effective team player with
        solid problem-solving skills and a strong understanding of frontend best
        practices.
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
