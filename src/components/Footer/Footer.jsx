import React, { useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { footerData } from "../../assets/dummydata.js";

const Footer = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Logo Section */}
        <div className="footer-logo-section">
          <div className="footer-logo">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img src={footerData.logoUrl} alt="Clean Cooking Alliance" />
            </Link>
          </div>
          <h3 className="footer-logo-text">{footerData.companyName}</h3>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Links Section */}
        <div className="footer-links-section">
          <h4 className="footer-section-title">Quick Links</h4>
          <nav className="footer-nav">
            {footerData.links.map((link, index) => (
              <a key={index} href={link.url} className="footer-link">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Contact Section */}
        <div className="footer-contact-section">
          <h4 className="footer-section-title">Mailing Address:</h4>
          <p className="footer-contact-text">{footerData.address.street}</p>
          <p className="footer-contact-text">{footerData.address.suite}</p>
          <p className="footer-contact-text">{footerData.address.cityState}</p>
          <p className="footer-contact-text">{footerData.address.phone}</p>
          <h4 className="footer-section-title" style={{ marginTop: "20px" }}>
            Email:
          </h4>
          <a href={`mailto:${footerData.email}`} className="footer-email">
            {footerData.email}
          </a>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Newsletter Section */}
        <div className="footer-newsletter-section">
          <h4 className="footer-section-title">Newsletter Sign-Up</h4>
          <p className="footer-required-text">
            "*" <span>indicates required fields</span>
          </p>

          <form className="footer-form" onSubmit={handleSubmit}>
            {/* First Name & Last Name */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName" className="form-label">
                  First Name <span className="required-asterisk">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
            </div>

            {/* Email & Country */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email <span className="required-asterisk">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="country" className="form-label">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="">Select one</option>
                  {footerData.countries.map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="footer-submit-btn">
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} ELITE PONGAMIA BIOENERGY PROJECT
          LTD. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
