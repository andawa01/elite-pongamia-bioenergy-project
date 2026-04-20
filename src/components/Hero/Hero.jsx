import React from "react";
import "./Hero.css";
import { heroData } from "../../assets/dummydata.js";

const Hero = () => {
  return (
    <>
      {/* TOP HERO */}
      <div className="hero-container">
        <div className="hero-image-overlay">
          <img src={heroData.imageUrl} alt="Green energy" />
        </div>

        <div className="hero-accent-bottom-left"></div>

        <div className="hero-content">
          <div className="hero-text-wrapper">
            <h1 className="hero-title">
              Driving sustainable energy solutions
              <span>
                Sustainable bioenergy powered by pongamia trees-driving carbon
                capture and climate resilience.
              </span>
            </h1>
            <button className="btn btn-primary">{heroData.primaryBtn}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
