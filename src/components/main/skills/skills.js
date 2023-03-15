import React from "react";
import SectionHeader from "../section-header/section-header";
import Skill from "./skill";
import "./skills.css";
import skills from "./skills.json";

const Skills = () => {
  return (
    <section id="skills" className="resume">
      <SectionHeader title="Skills" isButtonVisible={false} />
      <div className="skills">
        <div className="row">
          {skills.map((skill, index) => (
            <div className="col-md-12 col-sm-12 col-xs-12 item" key={index}>
              <Skill name={skill.tool} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
