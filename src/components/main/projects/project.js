import React from "react";

const Project = ({ url, name, desc, github, desc2 }) => {
  return (
    <>
      <div className="project-info clearfix">
        <h2>
          <a href={url} target={"_blank"}>
            {name}
          </a>
        </h2>
        <div>{desc}</div>
        <a href={github} target={"_blank"}>
          {github}
        </a>
        <div>{desc2}</div>
      </div>
    </>
  );
};

export default Project;
