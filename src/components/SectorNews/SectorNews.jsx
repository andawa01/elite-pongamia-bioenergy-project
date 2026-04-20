import React from "react";
import "./SectorNews.css";

const services = [
  {
    icon: "💧",
    title: "Hydro Energy",
    description:
      "Sustainable hydroelectric solutions focused on efficient water resource management.",
  },
  {
    icon: "⚡",
    title: "Smart Grids",
    description:
      "Intelligent grid systems that improve efficiency and reduce carbon emissions.",
  },
  {
    icon: "☀️",
    title: "Solar Energy",
    description:
      "High-efficiency solar solutions for commercial and residential use, from planning to execution.",
  },
  {
    icon: "🌬️",
    title: "Wind Energy",
    description:
      "Development and management of wind farms using modern turbine technology.",
  },
];

const SectorNews = () => {
  return (
    <section className="energy-section">
      <div className="energy-container">
        <p className="energy-subtitle">WHAT WE DO</p>

        <h2 className="energy-title">Advancing Renewable Energy Solutions</h2>

        <div className="energy-grid">
          {services.map((item, index) => (
            <div className="energy-card" key={index}>
              <div className="energy-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorNews;
