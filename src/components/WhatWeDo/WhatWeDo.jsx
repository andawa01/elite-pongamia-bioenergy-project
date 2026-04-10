import React from "react";
import "./WhatWeDo.css";

const WhatWeDo = () => {
  return (
    <div className="whatwedo-page">
      {/* HERO SECTION */}
      <section className="whatwedo-hero">
        <h1>What We Do</h1>
        <p>
          We promote clean energy solutions through biodigesters, sustainable
          bioenergy systems, and community empowerment.
        </p>
      </section>

      {/* SECTION 1 */}
      <section className="whatwedo-section">
        <div className="whatwedo-text">
          <h2>Clean Energy Solutions</h2>
          <p>
            We design and support biodigester systems that convert organic waste
            into renewable biogas, reducing dependence on firewood and fossil
            fuels.
          </p>
        </div>

        <div className="whatwedo-image">
          <img
            src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc"
            alt="Clean energy systems"
          />
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="whatwedo-section reverse">
        <div className="whatwedo-image">
          <img
            src="https://images.unsplash.com/photo-1605600659908-0ef719419d41"
            alt="Sustainable agriculture"
          />
        </div>

        <div className="whatwedo-text">
          <h2>Sustainable Agriculture</h2>
          <p>
            Our systems produce organic fertilizer as a byproduct, helping
            farmers improve soil fertility and crop yields naturally.
          </p>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="whatwedo-section">
        <div className="whatwedo-text">
          <h2>Community Empowerment</h2>
          <p>
            We work with communities to increase access to affordable clean
            energy, reduce pollution, and improve living standards.
          </p>
        </div>

        <div className="whatwedo-image">
          <img
            src="https://images.unsplash.com/photo-1509099836639-18ba1795216d"
            alt="Community empowerment"
          />
        </div>
      </section>

      {/* FOOTER MESSAGE */}
      <section className="whatwedo-footer">
        <h2>Driving a Sustainable Future</h2>
        <p>
          Through innovation and collaboration, we are building a cleaner,
          healthier, and more sustainable world.
        </p>
      </section>
    </div>
  );
};

export default WhatWeDo;
