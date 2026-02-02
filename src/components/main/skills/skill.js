import React from "react";

const Skill = ({ name1, name2, primarySkills, backendKnowledge }) => {
  return (
    <>
      <div className="skill-info clearfix">
        <b className="pull-left">{name1}</b>
      </div>
      <div className="skill-info clearfix">
        <div className="pull-left">{primarySkills}</div>
      </div>
      <div className="skill-info clearfix">
        <b className="pull-left">{name2}</b>
      </div>
      <div className="skill-info clearfix">
        <div className="pull-left">{backendKnowledge}</div>
      </div>
    </>
  );
};

export default Skill;
