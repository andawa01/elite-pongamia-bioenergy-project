import React from "react";
import biodigester from "../../assets/bio-digester.webp";
import "./Bio.css";

const Bio = () => {
  return (
    <div className="bio-page-wrapper">
      {/* --- PREMIUM HERO SECTION --- */}
      <header className="bio-hero-modern">
        <div className="bio-hero-overlay"></div>
        <div className="bio-container">
          <div className="bio-hero-inner">
            <span className="bio-tag">Nature-Based Tech</span>
            <h1>
              Innovative <span>BioDigester</span> Systems
            </h1>
            <p>
              Elite Pongamia Bioenergy Project Ltd is committed to innovation
              and sustainability—driving a future where organic waste is
              transformed into scalable energy and restoration.
            </p>
          </div>
        </div>
      </header>

      {/* --- WHAT IS IT SECTION --- */}
      <section className="bio-content-row">
        <div className="bio-container split-grid">
          <div className="bio-media-box">
            <img
              src={biodigester}
              alt="Advanced BioDigester"
              className="main-bio-img"
            />
            <div className="bio-floating-card">
              <h4>100% Green</h4>
              <p>Carbon Neutral Process</p>
            </div>
          </div>
          <div className="bio-text-box">
            <h2 className="section-title">What is a BioDigester?</h2>
            <p className="description">
              A biodigester is an advanced system that breaks down organic
              waste—such as food scraps, animal manure, and plant materials—in
              an oxygen-free environment.
            </p>
            <p className="description">
              This anaerobic digestion process produces{" "}
              <strong>renewable biogas</strong> (primarily methane) and
              high-quality <strong>organic fertilizer</strong>, supporting the
              circular economy model.
            </p>
          </div>
        </div>
      </section>

      {/* --- IMPORTANCE (GRID CARDS) --- */}
      <section className="bio-importance-bg">
        <div className="bio-container">
          <div className="centered-title">
            <h2 className="section-title light">Why it Matters</h2>
            <p>
              Our mandate is to expand access to clean cooking and decentralized
              energy.
            </p>
          </div>

          <div className="importance-grid">
            {[
              {
                t: "Renewable Energy",
                d: "Consistent supply of clean biogas for cooking and heating.",
              },
              {
                t: "Deforestation",
                d: "Reduces critical reliance on firewood and charcoal.",
              },
              {
                t: "Climate Action",
                d: "Actively mitigates change through reduced methane emissions.",
              },
              {
                t: "Bio-Fertilizer",
                d: "Converts waste into nutrient-rich soil enhancement.",
              },
            ].map((item, i) => (
              <div className="imp-card" key={i}>
                <div className="imp-icon">✓</div>
                <h3>{item.t}</h3>
                <p>{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- IMPACT / CONCLUSION --- */}
      <section className="bio-final-cta">
        <div className="bio-container">
          <div className="cta-card-premium">
            <h2>Building a Greener Tomorrow</h2>
            <p>
              By integrating bioenergy production with community-based
              initiatives, we create a holistic model that delivers both
              environmental and socio-economic impact.
            </p>
            <button className="bio-btn-primary">Inquire About Systems</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bio;
