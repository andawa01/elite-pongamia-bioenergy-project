import React from "react";
import "./SectorResource.css";

const resourcesData = [
  {
    title:
      "Bioenergy sector is rapidly evolving, driven by innovation, increased investment, and global efforts to improve access to sustainable energy",
    cta: "Read the latest report",
  },
  {
    title:
      "Cookstove carbon credits are an important part of the bioenergy and clean cooking sector, helping finance projects that replace traditional biomass",
    cta: "Find out more",
  },
  {
    title:
      "The User Insights Lab in the bioenergy focuses on how households, communities, and institutions interact with clean cooking and renewable energy solutions",
    cta: "Explore the data",
  },
];

const SectorResource = () => {
  return (
    <section className="sector-resource-section">
      <div className="sector-resource-container">
        {/* Header */}
        <div className="sector-resource-header">
          <h2 className="sector-resource-title">
            Sector <span>Resources</span>
          </h2>
          <p className="sector-resource-description">
            Learn about the latest innovations, research, investment trends, and
            strategies driving global access to clean cooking and sustainable
            bioenergy solutions.
          </p>
        </div>

        {/* Grid */}
        <div className="sector-resource-grid">
          {resourcesData.map((item, index) => (
            <div className="sector-resource-card" key={index}>
              <h3 className="resource-title">{item.title}</h3>

              <div className="resource-divider" />

              <a href="#" className="resource-link">
                <span>{item.cta}</span>
                <span className="arrow">→</span>
              </a>
            </div>
          ))}
        </div>

        {/* CTA BUTTON */}
        <button className="resource-btn">VIEW ALL RESOURCES</button>
      </div>
    </section>
  );
};

export default SectorResource;
