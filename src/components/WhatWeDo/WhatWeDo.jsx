import React from "react";
import "./WhatWeDo.css";
import biodigester from "../../assets/bio-digester.webp";
import photo5 from "../../assets/photo 5.jpeg";
import photo3 from "../../assets/photo 3.jpeg";
import video3 from "../../assets/video3.mp4";
import video4 from "../../assets/video4.mp4";

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
            <img src={photo5} alt="Sustainability" />
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

      <section className="wwd-video-section">
        <div className="container">
          <div className="video-layout-grid">
            <div className="video-card">
              <video controls poster={photo3} className="wwd-vid-element">
                <source src={video3} type="video/mp4" />
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
              <video controls poster={photo5} className="wwd-vid-element">
                <source src={video4} type="video/mp4" />
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

      {/* --- STRATEGIC ENGAGEMENTS & AFFILIATIONS --- */}
      <section className="affiliations-section">
        <div className="container">
          <div className="portal-header-block">
            <span className="portal-badge">Our Influence</span>
            <h2 className="portal-main-title">
              Strategic Engagements & Affiliations
            </h2>
            <div className="title-underline"></div>
          </div>

          <div className="affiliations-wrapper">
            {/* Category 1: Summits & Conferences */}
            <div className="affiliation-group">
              <h3>
                <span className="group-icon">🌍</span> Summits & Conferences
              </h3>
              <ul>
                <li>Kakamega Cooking Hub (2023)</li>
                <li>Clean Cooking Week</li>
                <li>Devolution Conference</li>
                <li>Africa-Europe Summit (Keptan, Italy)</li>
                <li>
                  Conference of Energy Ministers of Africa (CEMA) —{" "}
                  <small>MD as Kenyan Representative</small>
                </li>
              </ul>
            </div>

            {/* Category 2: National Strategy & Appointments */}
            <div className="affiliation-group">
              <h3>
                <span className="group-icon">🇰🇪</span> National Strategy &
                Appointments
              </h3>
              <ul>
                <li>Kenya National Clean Transition Strategy</li>
                <li>Kenyan National E-cooking Transition Strategy</li>
                <li>Country Integrated Strategy</li>
                <li>
                  <strong>Elite Pongamia:</strong> Appointed as a Private Sector
                  Cooking Representative
                </li>
                <li>World Bank FLOCCA</li>
              </ul>
            </div>

            {/* Category 3: Professional Memberships */}
            <div className="affiliation-group">
              <h3>
                <span className="group-icon">🛡️</span> Professional Memberships
              </h3>
              <ul>
                <li>
                  Founders of Cleaning Cooking Association of Kenya (CCAK)
                </li>
                <li>Members of Climate Change Working Group</li>
                <li>Members of KEREA (Kenya Renewable Energy Association)</li>
                <li>Association of Energy Professionals of East Africa</li>
              </ul>
            </div>
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
