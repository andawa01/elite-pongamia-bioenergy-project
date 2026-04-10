import React from "react";
import "./Hero.css";
import { heroData, heroSectionData } from "../../assets/dummydata.js";
import image from "../../assets/image.webp";

const Hero = () => {
  return (
    <>
      {/* TOP HERO */}
      <div className="hero-container">
        <div className="hero-image-overlay">
          <img src={heroData.imageUrl} alt="Green energy" />
        </div>

        <div className="hero-accent-bottom-left"></div>
        <div className="hero-accent-green-blob"></div>

        <div className="hero-content">
          <div className="hero-text-wrapper">
            <h1 className="hero-title">
              Nature's energy for a greener tomorrow
              <span>
                secure a space for products and services somewhere in the space
              </span>
            </h1>
            <button className="btn btn-primary">{heroData.primaryBtn}</button>
          </div>
        </div>
      </div>

      {/* 👇 SECOND SECTION WITH DIAGONAL CUT */}
      <div className="hero-bottom-section">
        <div className="hero-content-wrapper">
          <div className="hero-image-section">
            <img src={heroSectionData.imageURL} className="hero-image" />
          </div>

          <div className="hero-text-section">
            <h2 className="hero-title-secondary">
              The Importance of Biodigesters in Institutional Cooking
            </h2>
            <p className="hero-description">
              Institutions like schools and hospitals play a vital role in
              adopting sustainable waste-to-energy solutions. Discover how
              biodigesters help convert organic waste into clean cooking energy
              while improving sanitation and reducing environmental impact.
            </p>
          </div>
        </div>
      </div>

      {/* 👇 NEW THIRD SECTION - CLEAN COOKING SAVES LIVES */}
      <div className="clean-cooking-section">
        <div className="clean-cooking-blue-accent"></div>

        <div className="clean-cooking-container">
          {/* Header */}
          <div className="clean-cooking-header">
            <h2 className="clean-cooking-title">
              Bio energy <span>powering a circular future</span>
            </h2>
            <p className="clean-cooking-intro">
              Worldwide, nearly one in four people depend on polluting open
              fires or inefficient stoves to cook their food, harming health,
              the climate, and the environment. The Clean Cooking Alliance (CCA)
              works with a global network of partners to build an inclusive
              industry that can make clean cooking accessible to all.
              Established in 2010, CCA is driving consumer demand, mobilizing
              investment, and supporting policies that allow the clean cooking
              sector to thrive
            </p>
          </div>

          {/* Content Grid */}
          <div className="clean-cooking-grid">
            {/* Left: Stats Cards */}
            <div className="clean-cooking-stats">
              <div className="stat-card stat-card-green">
                <div className="stat-number">$25M</div>
                <div className="stat-label">in support</div>
                <div className="stat-arrow">→</div>
              </div>
              <div className="stat-card stat-card-navy">
                <div className="stat-number">5,000+</div>
                <div className="stat-label">trained</div>
                <div className="stat-arrow">→</div>
              </div>
              <div className="stat-card stat-card-navy">
                <div className="stat-number">$17.8M</div>
                <div className="stat-label">invested</div>
                <div className="stat-arrow">→</div>
              </div>
            </div>

            {/* Center: Image */}
            <div className="clean-cooking-image">
              <img src={image} alt="Clean cooking impact" />
            </div>

            {/* Right: Content Box */}
            <div className="clean-cooking-content-box">
              <h3 className="content-box-title">
                US$25 million in support to clean cooking companies
              </h3>
              <p className="content-box-description">
                CCA provides a broad range of specialized support to enterprises
                around the world.
              </p>
              <button className="btn btn-secondary">EXPLORE OUR WORK</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
