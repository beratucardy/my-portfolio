import React from "react";

const Project = ({ name, desc, github, desc2 }) => {
  return (
    <>
      <div className="project-info clearfix">
        <h2>
          <a href="https://beratucar6.netlify.app/">{name}</a>
        </h2>
        <div>{desc}</div>
        <a href={github}>{github}</a>
        <div>{desc2}</div>
      </div>
    </>
  );
};

export default Project;
