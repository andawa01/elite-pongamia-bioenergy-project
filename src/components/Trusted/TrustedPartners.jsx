import React from "react";
import "./TrustedPartners.css";
import CCA from "../../assets/cata.png";
import bio from "../../assets/feion.png";
import kakamega from "../../assets/kakamega.jpg";
import shamberere from "../../assets/s.png";
import lites from "../../assets/lites.png";
import wereach from "../../assets/wereach.webp";
import invest from "../../assets/invest.jpg";
import auda from "../../assets/AUDA-logo.jpg";
import accelerate from "../../assets/accelerate.jpg";

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
  {
    logo: kakamega,
    link: "https://kakamega.go.ke/",
    name: "Bio Partner",
  },
  {
    logo: shamberere,
    link: "https://shambererenationalpoly.ac.ke/",
    name: "Bio Partner",
  },
  {
    logo: lites,
    link: "https://lites.co.ke/",
    name: "Bio Partner",
  },
  {
    logo: wereach,
    link: "https://www.wreach.org/",
    name: "Bio Partner",
  },
  {
    logo: invest,
    link: "https://investingreen.energy/",
    name: "Bio Partner",
  },
  {
    logo: auda,
    link: "https://www.nepad.org/",
    name: "Bio Partner",
  },
  {
    logo: accelerate,
    link: "https://www.accelerate-africa.net/",
    name: "Bio Partner",
  },
];

const TrustedPartners = () => {
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="trusted-partners">
      <h2 className="trusted-title">Trusted Partners</h2>

      <div className="partners-slider">
        <div className="partners-track">
          {duplicatedPartners.map((partner, index) => (
            <a
              href={partner.link}
              key={index}
              className="partner-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={partner.logo} alt={partner.name || "Partner"} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
