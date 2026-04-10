import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      {/* HERO SECTION */}
      <section className="about-hero">
        <h1>About Us</h1>
        <p>
          We are committed to promoting sustainable energy solutions through
          innovative bioenergy systems and community-driven impact.
        </p>
      </section>

      {/* MISSION SECTION */}
      <section className="about-section">
        <div className="about-text">
          <h2>Our Mission</h2>
          <p>
            Our Mission Worldwide, nearly one in four people depend on polluting
            open fires or inefficient stoves to cook their food, harming health,
            the climate, and the environment. The Clean Cooking Alliance (CCA)
            works with a global network of partners to build an inclusive
            industry that can make clean cooking accessible to all. Established
            in 2010, CCA is driving consumer demand, mobilizing investment, and
            supporting policies that allow the clean cooking sector to thrive
          </p>
        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758"
            alt="Clean energy mission"
          />
        </div>
      </section>

      {/* VISION SECTION */}
      <section className="about-section reverse">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276"
            alt="Sustainable future"
          />
        </div>

        <div className="about-text">
          <h2>Our Vision</h2>
          <p>
            Champion clean ,affordable environment friendly pollution free
            sustainable reneweable, cooking energy solution
          </p>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="about-section">
        <div className="about-text">
          <h2>Our Values</h2>
          <ul>
            <li>Sustainability</li>
            <li>Innovation</li>
            <li>Community Empowerment</li>
            <li>Environmental Protection</li>
          </ul>
        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a"
            alt="Community values"
          />
        </div>
      </section>

      {/* FOOTER */}
      <section className="about-footer">
        <h2>Together for a Greener Future</h2>
        <p>
          Join us in building a cleaner, healthier, and more sustainable world
          through bioenergy innovation.
        </p>
      </section>
    </div>
  );
};

export default About;
