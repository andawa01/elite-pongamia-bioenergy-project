import React from "react";
import "./Impact.css";
import { impactData } from "../../assets/dummydata.js";
import photo from "../../assets/photo 4.jpeg";
import photo6 from "../../assets/photo 6.jpeg";
import { BookOpen, Soup, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Impact = () => {
  const navigate = useNavigate();
  const pillars = [
    {
      title: "Better Education",
      icon: <BookOpen size={24} />,
      color: "#A85328", // Brownish-orange
    },
    {
      title: "Healthy Cooking",
      icon: <Soup size={24} />,
      color: "#D96C26", // Bright orange
    },
    {
      title: "Economic Empowerment",
      icon: <Settings size={24} />,
      color: "#3D632D", // Dark green
    },
  ];

  return (
    <>
      {/* ===== IMPACT HEADER SECTION ===== */}
      <section className="impact-header-section">
        <div className="impact-container">
          <h2 className="impact-title">
            Our <span>Impact</span>
          </h2>

          <p className="impact-description">
            Together, we develop, promote, and scale sustainable bioenergy
            solutions that contribute to clean energy access, environmental
            conservation, and socio-economic development.
          </p>

          {/* Pillars */}
          <div className="impact-pillars">
            {pillars.map((pillar, index) => (
              <React.Fragment key={index}>
                <div
                  className="impact-pill"
                  style={{ backgroundColor: pillar.color }}
                >
                  {pillar.icon}
                  <span>{pillar.title}</span>
                </div>

                {index < pillars.length - 1 && (
                  <div className="impact-arrow">→</div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* CTA BUTTON */}
          <div className="impact-header-cta">
            <button
              className="btn-impact-header"
              onClick={() => navigate("/about-us")}
            >
              Learn More About Us →
            </button>
          </div>
        </div>
      </section>

      {/* ===== SECTION 1: IMAGE LEFT, CARD RIGHT ===== */}
      <section className="impact-quote-section">
        <div className="impact-quote-container">
          <div className="impact-quote-image">
            <img src={photo} alt="managing director" />
          </div>

          <div className="impact-quote-box">
            <p className="impact-quote-text">
              "Modern bioenergy is the largest source of renewable energy
              globally today. Its sustainable expansion is critical to a
              net-zero future."
            </p>
            <div className="impact-quote-author">
              <h4 className="author-name">{impactData.authorName}</h4>
              <p className="author-title">{impactData.authorTitle}</p>
            </div>
            <div className="impact-cta-wrapper">
              <button className="btn-impact-cta">SEE THE IMPACT →</button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: IMAGE RIGHT, CARD LEFT (REVERSED) ===== */}
      <section className="impact-quote-section" style={{ paddingTop: 0 }}>
        <div className="impact-quote-container reverse">
          <div className="impact-quote-image">
            <img src={photo6} alt="Impact testimonial 2" />
          </div>

          <div className="impact-quote-box">
            <p className="impact-quote-text">
              "Bioenergy solutions provide a versatile solution for sectors that
              are otherwise hard to decarbonize, ensuring a greener tomorrow for
              all communities."
            </p>
            <div className="impact-quote-author">
              <h4 className="author-name">KHASOHA K VALARY</h4>
              <p className="author-title">PROJECT MANAGER</p>
            </div>
            <div className="impact-cta-wrapper">
              <button className="btn-impact-cta">LEARN MORE →</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Impact;
