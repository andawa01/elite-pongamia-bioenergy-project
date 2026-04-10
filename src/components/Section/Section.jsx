import React, { useState } from "react";
import "./Section.css";
import { sectionData } from "../../assets/dummydata.js";

const Section = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);

  const donationAmounts = ["$50", "$100", "$250", "$1,000", "$2,500", "Other"];

  return (
    <section className="section-container">
      {/* Left: Content */}
      <div className="section-content">
        <h2 className="section-title">
          Help us ensure no one's life is
          <span> limited by how they use Bio Energy</span>
        </h2>

        {/* Donation Amount Options */}
        <div className="donation-grid">
          {donationAmounts.map((amount, index) => (
            <button
              key={index}
              className={`donation-btn ${
                selectedAmount === amount ? "active" : ""
              } ${amount === "$50" ? "btn-highlight" : ""}`}
              onClick={() => setSelectedAmount(amount)}
            >
              {amount}
            </button>
          ))}
        </div>

        {/* Donate Button */}
        <button className="btn btn-donate">DONATE</button>
      </div>

      {/* Right: Image with Diagonal Cut */}
      <div className="section-image">
        <img
          src={sectionData.heroImageUrl}
          alt="Help us ensure clean cooking"
        />
      </div>
    </section>
  );
};

export default Section;
