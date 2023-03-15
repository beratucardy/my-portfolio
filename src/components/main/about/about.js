import React from "react";
import SectionHeader from "../section-header/section-header";
import Intro from "./intro/intro";
import "./about.css";

const About = () => {
  return (
    <section id="about" className="about">
      <SectionHeader title="About Me" isButtonVisible={true} />
      <Intro />
    </section>
  );
};

export default About;
