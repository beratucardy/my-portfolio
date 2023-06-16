import React from "react";
import { FaDownload } from "react-icons/fa";
import "./section-header.css";

const SectionHeader = ({ title, isButtonVisible }) => {
  return (
    <div className="section-header">
      <h2>{title}</h2>
      {isButtonVisible && (
        <a
          href="assets/Berat_Ucar_Resume.pdf"
          className="resume-download"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Download"
          target={"_blank"}
        >
          <i className="fa fa-download" aria-hidden="true">
            {" "}
          </i>{" "}
          <FaDownload /> Download Resume
        </a>
      )}
    </div>
  );
};

export default SectionHeader;
