import React from "react";
import About from "./about/about";
import Educations from "./educations/educations";
import Experiences from "./experiences/experiences";
import Contacts from "./contacts/contacts";
import "./main.css";
import Skills from "./skills/skills";
import Projects from "./projects/projects";

const Main = () => {
  return (
    <div className="main-content pull-right">
      <About />
      <Experiences />
      <Educations />
      <Skills />
      <Projects />
      <Contacts />
    </div>
  );
};

export default Main;
