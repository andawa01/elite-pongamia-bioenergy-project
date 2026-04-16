import React from "react";
import "./About.css";
import photo2 from "../../assets/photo 2.jpeg";
import photo1 from "../../assets/photo 1.jpeg";
import photo3 from "../../assets/photo 3.jpeg";

const About = () => {
  return (
    <div className="about-page">
      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Us</h1>
          <p>
            We are committed to promoting sustainable energy solutions through
            innovative bioenergy systems and community-driven impact.
          </p>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="about-section">
        <div className="about-image-card">
          <img src={photo2} alt="Clean energy mission" />
          <div className="about-image-overlay">
            <div className="about-badge">Mission</div>
            <h2>Our Mission</h2>
            <p>
              Worldwide, nearly one in four people depend on polluting open
              fires or inefficient stoves to cook their food, harming health,
              the climate, and the environment. The Clean Cooking Alliance (CCA)
              works with a global network of partners to build an inclusive
              industry that can make clean cooking accessible to all.
            </p>
          </div>
        </div>
      </section>

      {/* VISION SECTION */}
      <section className="about-section">
        <div className="about-image-card">
          <img src={photo1} alt="Sustainable future" />
          <div className="about-image-overlay">
            <div className="about-badge">Vision</div>
            <h2>Our Vision</h2>
            <p>
              Champion clean, affordable, environment-friendly, pollution-free,
              sustainable, renewable cooking energy solutions that transform
              lives and protect our planet for future generations.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="about-section">
        <div className="about-image-card">
          <img src={photo3} alt="Community values" />
          <div className="about-image-overlay">
            <div className="about-badge">Values</div>
            <h2>Our Core Values</h2>
            <ul className="overlay-values-list">
              <li>✓ Sustainability</li>
              <li>✓ Innovation</li>
              <li>✓ Community Empowerment</li>
              <li>✓ Environmental Protection</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section className="about-footer">
        <div className="about-footer-content">
          <h2>Together for a Greener Future</h2>
          <p>
            Join us in building a cleaner, healthier, and more sustainable world
            through bioenergy innovation.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
