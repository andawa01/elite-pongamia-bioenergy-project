import React from "react";
import "./Impact.css";
import { impactData } from "../../assets/dummydata.js";
import photo4 from "../../assets/photo 4.jpeg";

const Impact = () => {
  return (
    <>
      {/* ===== IMPACT HEADER SECTION ===== */}
      <section className="impact-header-section">
        <div className="impact-container">
          <h2 className="impact-title">
            Our <span>Impact</span>
          </h2>
          <p className="impact-description">
            With partners around the world, the Clean Cooking Alliance (CCA)
            mobilizes investment, innovation, and political will to accelerate
            access to clean cooking.
          </p>
        </div>
      </section>

      {/* ===== IMPACT QUOTE SECTION ===== */}
      <section className="impact-quote-section">
        <div className="impact-quote-container">
          {/* LEFT IMAGE */}
          <div className="impact-quote-image">
            <img src={photo4} alt="Impact testimonial" />
          </div>

          {/* RIGHT CARD */}
          <div className="impact-quote-box">
            <p className="impact-quote-text">
              "Modern bioenergy is the largest source of renewable energy
              globally today. Its sustainable expansion is critical to a
              net-zero future, providing a versatile solution for sectors that
              are otherwise hard to decarbonize."
            </p>

            <div className="impact-quote-author">
              <h4 className="author-name">{impactData.authorName}</h4>
              <p className="author-title">{impactData.authorTitle}</p>
            </div>

            {/* CTA BAR */}
            <div className="impact-cta-wrapper">
              <button className="btn-impact-cta">SEE THE IMPACT →</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Impact;
