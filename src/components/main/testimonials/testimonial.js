import React from "react";

const Testimonial = ({ job, org, name, tel, mail }) => {
  return (
    <div className="item" style={{ marginBottom: "20px" }}>
      <div className="row">
        <div className="text col-md-10 col-sm-10 col-xs-12">
          <p style={{ fontWeight: "600" }}>{name}</p>
          <p>{job}</p>
          <p>{org}</p>
          <span>
            <a href={`tel:${tel}`}>{tel}</a> -{" "}
            <a href={`mailto:${mail}`}>{mail}</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
