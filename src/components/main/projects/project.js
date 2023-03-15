import React from "react";

const Project = ({ name, desc, github, desc2 }) => {
  return (
    <>
      <div className="project-info clearfix">
        <h2>{name}</h2>
        <div>{desc}</div>
        <a href="https://github.com/beratucardy/spa-project">{github}</a>
        <div>{desc2}</div>
      </div>
    </>
  );
};

export default Project;
