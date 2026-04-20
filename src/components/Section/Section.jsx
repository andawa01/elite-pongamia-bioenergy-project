import React from "react";
import "./Section.css";
import { NavLink } from "react-router-dom";

const Section = () => {
  return (
    <section className="invest-banner">
      <div className="invest-container">
        <h2 className="invest-title">
          Investing in a Sustainable Bioenergy Future for Africa
        </h2>

        <p className="invest-subtitle">
          Elite Pongamia Bioenergy Project Ltd develops scalable bioenergy
          solutions using pongamia cultivation to deliver clean energy, carbon
          reduction, and climate resilience.
        </p>

        <p className="invest-subtitle">
          Our mandate is to advance renewable energy, restore degraded lands,
          create green jobs, and expand access to clean energy through strategic
          partnerships and community-driven impact.
        </p>
        <NavLink to="/contact-us" className="invest-button">
          Get in Touch
          <span className="arrow-icon">→</span>
        </NavLink>
      </div>
    </section>
  );
};

export default Section;
