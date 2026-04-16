import React from "react";
import "./SectorNews.css";

const sectorNewsData = [
  {
    date: "April 8, 2026",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    title: "Kenya Makes the Business Case for Institutional Clean Cooking",
    cta: "Find out more",
  },
  {
    date: "March 29, 2026",
    image:
      "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1200&q=80",
    title: "New Guide Helps Policymakers Safely Test Carbon Market Innovations",
    cta: "Read the Guide",
  },
  {
    date: "April 3, 2026",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    title: "Scaling Clean Cooking Means Backing Every Viable Solution",
    cta: "Read more",
  },
];

const SectorNews = () => {
  return (
    <section className="sector-news-section">
      <div className="sector-news-container">
        <div className="sector-news-header">
          <h2 className="sector-news-title">
            Sector <span>News</span>
          </h2>
          <p className="sector-news-description">
            Explore the latest stories and events from across the bioenergy
            sector.
          </p>
        </div>

        <div className="sector-news-grid">
          {sectorNewsData.map((item, index) => (
            <article className="sector-news-card" key={index}>
              <div className="sector-news-image-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className="sector-news-image"
                />
                <div className="sector-news-date">{item.date}</div>
                <h3 className="sector-news-image-title">{item.title}</h3>
              </div>

              <div className="sector-news-content">
                <div className="sector-news-divider" />

                <a href="#" className="sector-news-link">
                  <span>{item.cta}</span>
                  <span className="sector-news-arrow">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorNews;
