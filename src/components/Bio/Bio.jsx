import React from "react";
import "./Bio.css";

const Bio = () => {
  return (
    <div className="bio-page">
      {/* HERO SECTION */}
      <section className="bio-hero">
        <h1>BioDigesters</h1>
        <p>
          Turning organic waste into clean energy and organic fertilizer for a
          sustainable future.
        </p>
      </section>

      {/* INTRO SECTION */}
      <section className="bio-section">
        <div className="bio-text">
          <h2>What is a BioDigester?</h2>
          <p>
            A biodigester is a system that breaks down organic waste such as
            food scraps, animal manure, and plant materials in an oxygen-free
            environment. This process produces biogas (mainly methane) and
            organic fertilizer.
          </p>
        </div>

        <div className="bio-image">
          <img
            src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0"
            alt="BioDigester system"
          />
        </div>
      </section>

      {/* IMPORTANCE */}
      <section className="bio-section reverse">
        <div className="bio-image">
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276"
            alt="Clean cooking energy"
          />
        </div>

        <div className="bio-text">
          <h2>Why is it Important?</h2>
          <ul>
            <li>Produces clean, renewable energy (biogas)</li>
            <li>Reduces reliance on firewood and charcoal</li>
            <li>Helps reduce deforestation and air pollution</li>
            <li>Converts waste into useful organic fertilizer</li>
            <li>Improves sanitation in rural and urban areas</li>
          </ul>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bio-section">
        <div className="bio-text">
          <h2>Key Benefits</h2>
          <p>
            Biodigesters support a circular economy by turning waste into
            valuable resources. They are widely used in farms, institutions, and
            households to improve energy access and sustainability.
          </p>
        </div>

        <div className="bio-image">
          <img
            src="https://images.unsplash.com/photo-1605600659908-0ef719419d41"
            alt="Farming and organic fertilizer use"
          />
        </div>
      </section>

      {/* CONCLUSION */}
      <section className="bio-footer">
        <h2>Building a Cleaner Future</h2>
        <p>
          BioDigesters are a key solution in the transition to clean energy,
          especially in rural communities where access to modern energy is
          limited.
        </p>
      </section>
    </div>
  );
};

export default Bio;
