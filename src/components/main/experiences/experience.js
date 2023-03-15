import React from "react";

const Experience = ({ company, title, date, desc, location }) => {
  return (
    <div className="top-item resume-item">
      <h2>{company}</h2>
      <span>
        {title} | {date} | {location}
      </span>
      <p>{desc}</p>
    </div>
  );
};

export default Experience;
