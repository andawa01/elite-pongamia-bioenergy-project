import React from "react";
import "./About.css";
import photo3 from "../../assets/photo 3.jpeg";
import photo5 from "../../assets/photo 5.jpeg";
import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";
import { Link } from "react-router-dom";
import ImpactFlow from "../ImpactFlow/ImpactFlow";

const About = () => {
  return (
    <div className="about-premium-wrapper">
      {/* --- ELITE HERO --- */}
      <section className="about-hero-minimal">
        <div className="container">
          <span className="brand-badge">
            Elite Pongamia Bioenergy Project Ltd
          </span>
          <h1>
            Transforming Landscapes, <br />
            <span>Restoring Ecosystems</span>
          </h1>
          <p>
            We are a forward-thinking renewable energy company dedicated to
            nature-based solutions through the cultivation of Pongamia trees and
            sustainable bioenergy production.
          </p>
        </div>
      </section>

      {/* --- VIDEO FEATURE (Innovation & Mandate) --- */}
      <section className="video-section">
        <div className="container">
          <div className="video-layout-grid">
            <div className="video-card">
              <video controls poster={photo3} className="about-vid-element">
                <source src={video1} type="video/mp4" />
              </video>
              <div className="video-caption">
                <h3>Innovation in Motion</h3>
                <p>
                  Advancing renewable solutions through continuous research and
                  technology.
                </p>
              </div>
            </div>
            <div className="video-card">
              <video controls poster={photo5} className="about-vid-element">
                <source src={video2} type="video/mp4" />
              </video>
              <div className="video-caption">
                <h3>Community & Climate</h3>
                <p>
                  Creating green jobs and measurable carbon reduction in
                  underserved regions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MISSION & VISION (Side-by-Side Narrative) --- */}
      <section className="narrative-section">
        <div className="container">
          <div className="narrative-grid">
            <div className="narrative-image">
              <img src={photo3} alt="Clean Cooking Mission" />
            </div>
            <div className="narrative-content">
              <span className="section-label">Our Mission</span>
              <h2>Impactful Change</h2>
              <p>
                Nearly one in four people depend on polluting open fires. Our
                mission is to accelerate the transition to clean, affordable
                energy while addressing climate change and deforestation through
                bioenergy and carbon finance.
              </p>
            </div>
          </div>

          <div className="narrative-grid reverse">
            <div className="narrative-image">
              <img src={photo5} alt="Renewable Future" />
            </div>
            <div className="narrative-content">
              <span className="section-label">Our Vision</span>
              <h2>Global Resilience</h2>
              <p>
                We champion renewable cooking energy solutions that protect our
                planet. By integrating sustainable land use with community-based
                initiatives, we drive a future where ecosystems are restored and
                communities thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE MANDATE (Values Grid) --- */}
      <section className="mandate-grid-dark">
        <div className="container">
          <div className="centered-header">
            <h2>Our Core Mandate</h2>
            <p>
              Committed to socio-economic development and environmental
              conservation.
            </p>
          </div>
          <div className="mandate-boxes">
            {[
              {
                title: "Climate Action",
                desc: "Carbon sequestration and reduced emissions.",
              },
              {
                title: "Green Jobs",
                desc: "Empowering smallholders with inclusive growth.",
              },
              {
                title: "Innovation",
                desc: "Scalable models for long-term sustainability.",
              },
              {
                title: "Restoration",
                desc: "Rejuvenating degraded lands via Pongamia trees.",
              },
            ].map((item, i) => (
              <div className="mandate-box" key={i}>
                <div className="box-check">✓</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ImpactFlow />

      {/* --- FINAL ACTION --- */}
      <section className="about-impact-footer">
        <div className="container">
          <h2>Together for a Greener Future</h2>
          <p>
            Join Elite Pongamia in building a healthier world through
            innovation.
          </p>
          <Link to="/contact-us">
            <button className="cta-btn-white">Contact Our Team</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
