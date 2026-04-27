import React from "react";
import "./About.css";
import photo3 from "../../assets/photo 3.jpeg";
import photo5 from "../../assets/photo 5.jpeg";
import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";
import { Link } from "react-router-dom";
import ImpactFlow from "../ImpactFlow/ImpactFlow";
import { Download } from "lucide-react";
import companyProfile from "../../assets/EPBP-Company-Profile.pdf";

const About = () => {
  return (
    <div className="about-premium-wrapper">
      {/* --- ELITE HERO --- */}
      <section className="about-hero-minimal">
        <div className="container">
          <a
            href={companyProfile}
            download="EPBP_Company_Profile.pdf"
            className="brand-badge-link"
          >
            <span className="brand-badge">
              Elite Pongamia Bioenergy Project Ltd
              <Download size={14} strokeWidth={3} className="badge-icon" />
            </span>
          </a>
          <h1>
            Advancing Bioenergy, <br />
            <span>Powering Sustainable Growth</span>
          </h1>
          <p>
            Headquartered in Kakamega, Elite Pongamia Bioenergy Project Ltd is a
            premier Kenyan renewable energy firm. Led by CEO Danson Ligare, we
            specialize in high-impact biomass fuels, biofuels, and solar
            solutions designed to drive the adoption of clean energy across
            Africa.
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
              <h2>Mission Statement</h2>
              <p>
                To develop and deliver sustainable and innovative clean energy
                solutions that empower communities, protect the environment, and
                drive socio-economic development across Kenya and the wider
                region.
              </p>
            </div>
          </div>

          <div className="narrative-grid reverse">
            <div className="narrative-image">
              <img src={photo5} alt="Renewable Future" />
            </div>
            <div className="narrative-content">
              <span className="section-label">Our Vision</span>
              <h2>Vision Statement</h2>
              <p>
                To be a leading producer and supplier of renewable energy
                technologies, pioneering Africa's transition to clean energy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- NOTABLE PROJECTS SECTION --- */}
      <section className="projects-section">
        <div className="container">
          <div className="centered-header">
            <span className="section-label">Proven Impact</span>
            <h2>Notable Projects</h2>
            <p className="section-intro">
              EPBP has successfully implemented several impactful projects
              driving the energy transition across the region.
            </p>
          </div>

          <div className="projects-grid">
            <div className="project-card">
              <div className="project-icon">🔥</div>
              <h3>Alternative Clean Fuels</h3>
              <p>
                Successful production and distribution of high-efficiency
                briquettes and black pellets, providing a sustainable
                alternative to traditional charcoal.
              </p>
            </div>

            <div className="project-card">
              <div className="project-icon">🍳</div>
              <h3>Clean Cooking Solutions</h3>
              <p>
                Promotion and deployment of modern cookstoves to improve
                household air quality and reduce reliance on depleting biomass
                resources.
              </p>
            </div>

            <div className="project-card">
              <div className="project-icon">☀️</div>
              <h3>Renewable Electrification</h3>
              <p>
                Deployment of solar home systems and photovoltaic (PV) projects,
                bringing reliable electricity to off-grid and rural communities.
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

      <section className="ambitions-section">
        <div className="container">
          <div className="ambitions-card">
            <div className="ambitions-content">
              <span className="section-label">The Road Ahead</span>
              <h2>Future Ambitions</h2>
              <p className="ambitions-intro">
                EPBP is committed to becoming a leading clean energy provider in
                Kenya and beyond. Our roadmap focuses on scaling impact and
                operational excellence:
              </p>
              <ul className="ambitions-list">
                <li>
                  <strong>Financial Capacity:</strong> Strengthening through
                  strategic investment and funding.
                </li>
                <li>
                  <strong>Technical Expertise:</strong> Expanding collaboration
                  with international partners.
                </li>
                <li>
                  <strong>Systems Development:</strong> Building efficient
                  administrative, storage, and distribution systems.
                </li>
                <li>
                  <strong>Stakeholder Engagement:</strong> Enhancing networking
                  and policy advocacy.
                </li>
                <li>
                  <strong>Community Transition:</strong> Deepening local
                  involvement to drive energy adoption.
                </li>
                <li>
                  <strong>Scaling Impact:</strong> Consolidating and scaling
                  existing projects for a greener future.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

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
