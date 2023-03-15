import React from "react";
import SectionHeader from "../section-header/section-header";
import Project from "./project";
import "./projects.css";
import projects from "./projects.json";

const Projects = () => {
  return (
    <section id="projects" className="resume">
      <SectionHeader title="Projects" isButtonVisible={false} />
      <div className="projects">
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-12 col-sm-12 col-xs-12 item" key={index}>
              <Project
                name={project.tool}
                desc={project.desc}
                github={project.github}
                desc2={project.desc2}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
