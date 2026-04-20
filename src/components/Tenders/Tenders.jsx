import React from "react";
import "./Tenders.css";
import { Link } from "react-router-dom";

const Tenders = () => {
  return (
    <section className="tenders-section">
      <div className="tenders-container">
        {/* HEADER */}
        <div className="tenders-header">
          <h2>
            Tenders & <span>Opportunities</span>
          </h2>
          <p>
            We are committed to transparency and collaboration. Explore open
            opportunities to partner with us in the bioenergy sector.
          </p>
        </div>

        {/* EMPTY STATE CARD */}
        <div className="no-tenders-card">
          <div className="no-tenders-icon">📋</div>
          <h3>No Active Tenders</h3>
          <p>
            There are currently no open tenders at this time. Please check back
            later or subscribe to our newsletter to be notified of new
            procurement opportunities.
          </p>
          <div className="tenders-cta">
            <Link to="/contact-us">
              <button className="btn-tenders-secondary">CONTACT US</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tenders;
