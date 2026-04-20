import React from "react";
import "./WhatWeDo.css";
import biodigester from "../../assets/bio-digester.webp";
import photo1 from "../../assets/photo 1.jpeg";

const WhatWeDo = () => {
  return (
    <div className="wwd-wrapper">
      {/* --- HERO SECTION --- */}
      <header className="wwd-hero">
        <div className="container">
          <span className="brand-badge">
            Elite Pongamia Bioenergy Project Ltd
          </span>
          <h1>
            Empowering the Future Through <br />
            <span>Nature-Based Solutions</span>
          </h1>
          <p>
            We specialize in the cultivation and utilization of pongamia trees
            as a sustainable feedstock for bioenergy production, carbon
            sequestration, and climate resilience.
          </p>
        </div>
      </header>

      {/* --- WHO WE ARE (Alternating Layout) --- */}
      <section className="wwd-info-section">
        <div className="container wwd-grid">
          <div className="wwd-text">
            <h2 className="section-heading">Who We Are</h2>
            <p>
              Elite Pongamia Bioenergy Project Ltd is a forward-thinking
              renewable energy and environmental sustainability company. We
              accelerate the transition to clean, affordable, and scalable
              energy solutions while addressing global challenges like climate
              change and energy poverty.
            </p>
            <p>
              By integrating bioenergy production with carbon finance, we create
              a holistic model that delivers both environmental and
              socio-economic impact.
            </p>
          </div>
          <div className="wwd-image">
            <img src={photo1} alt="Sustainability" />
          </div>
        </div>
      </section>

      {/* --- OUR MANDATE (Iconic Grid) --- */}
      <section className="mandate-section">
        <div className="container">
          <div className="centered-header">
            <h2 className="section-heading">Our Mandate</h2>
            <p>Our commitment to scaling impact-driven energy solutions.</p>
          </div>

          <div className="mandate-grid">
            {[
              {
                title: "Renewable Energy",
                desc: "Producing clean, reliable bioenergy from pongamia sources.",
              },
              {
                title: "Climate Action",
                desc: "Mitigating change through carbon sequestration and finance.",
              },
              {
                title: "Sustainable Land Use",
                desc: "Restoring degraded lands while enhancing biodiversity.",
              },
              {
                title: "Community Growth",
                desc: "Creating green jobs and supporting smallholder farmers.",
              },
              {
                title: "Clean Cooking",
                desc: "Expanding energy access in underserved and rural areas.",
              },
              {
                title: "Strategic Innovation",
                desc: "Investing in research and technology for long-term scalability.",
              },
            ].map((item, index) => (
              <div className="mandate-card" key={index}>
                <div className="card-number">0{index + 1}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- THE BIODIGESTER FOCUS --- */}
      <section className="wwd-info-section reverse">
        <div className="container wwd-grid">
          <div className="wwd-image">
            <img src={biodigester} alt="Bio-digester technology" />
          </div>
          <div className="wwd-text">
            <h2 className="section-heading">Clean Energy Solutions</h2>
            <p>
              Beyond Pongamia, we support high-efficiency biodigester systems.
              These systems convert organic waste into renewable biogas,
              drastically reducing dependence on firewood and fossil fuels.
            </p>
            <button className="cta-outline">Explore Technology</button>
          </div>
        </div>
      </section>

      {/* --- IMPACT FOOTER --- */}
      <section className="wwd-impact-banner">
        <div className="container">
          <h2>Driving a Sustainable Future</h2>
          <p>
            We work closely with local communities and governments to ensure
            ecosystems are restored and livelihoods thrive.
          </p>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;
