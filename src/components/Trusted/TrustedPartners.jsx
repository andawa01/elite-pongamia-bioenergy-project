import React from "react";
import "./TrustedPartners.css";
import CCA from "../../assets/cata.png";
import bio from "../../assets/feion.png";

const partners = [CCA, bio];

const TrustedPartners = () => {
  return (
    <section className="trusted-partners">
      <h2 className="trusted-title">Trusted Partners</h2>

      <div className="partners-container">
        {partners.map((logo, index) => (
          <div className="partner-card" key={index}>
            <img src={logo} alt={`partner-${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedPartners;
