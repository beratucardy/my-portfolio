import React from "react";

const Skill = ({ name }) => {
  return (
    <>
      <div className="skill-info clearfix">
        <div className="pull-left">{name}</div>
      </div>
    </>
  );
};

export default Skill;
