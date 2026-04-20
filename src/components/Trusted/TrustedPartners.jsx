import React from "react";
import "./TrustedPartners.css";
import CCA from "../../assets/cata.png";
import bio from "../../assets/feion.png";

const partners = [
  {
    logo: CCA,
    link: "https://cata-energy.com/",
  },
  {
    logo: bio,
    link: "https://feionventures.com/",
    name: "Bio Partner",
  },
];

const TrustedPartners = () => {
  return (
    <section className="trusted-partners">
      <h2 className="trusted-title">Trusted Partners</h2>

      <div className="partners-container">
        {partners.map((partner, index) => (
          <a
            href={partner.link}
            key={index}
            className="partner-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={partner.logo} alt={partner.name} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default TrustedPartners;
