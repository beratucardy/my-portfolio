import React from "react";
import SectionHeader from "../section-header/section-header";
import Testimonial from "./testimonial";
import testimonials from "./testimonials.json";
import "./testimonials.css";

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <SectionHeader title="References" isButtonVisible={false} />
      <div className="testimonial-carousel">
        {testimonials.map((test, index) => (
          <Testimonial
            job={test.job}
            name={test.name}
            org={test.org}
            tel={test.tel}
            mail={test.mail}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
