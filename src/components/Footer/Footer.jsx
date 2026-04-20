import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { footerData } from "../../assets/dummydata.js";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa"; // Optional: npm install react-icons

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer-container">
      <div className="footer-main">
        {/* Left Section: Brand & Bio */}
        <div className="footer-section brand-column">
          <Link to="/" onClick={scrollToTop} className="footer-logo-wrapper">
            {/*<img
              className="rounded-2xl"
              src={footerData.logoUrl}
              alt="Elite Pongamia"
            /> */}
            {/* BRAND NAME */}
            <h3 className="footer-brand-title">
              ELITE PONGAMIA <br />
              BIOENERGY PROJECT LTD
            </h3>

            {/* TAGLINE */}
            <p className="footer-tagline">
              Nature's energy for a greener tomorrow
            </p>
          </Link>
          <p className="footer-description">
            Leading the charge in sustainable bio-energy solutions. Empowering
            communities through nature's inherent power for a cleaner, greener
            tomorrow.
          </p>
          <div className="social-links">
            <a href="#link" className="social-icon">
              <FaLinkedinIn />
            </a>
            <a href="#link" className="social-icon">
              <FaTwitter />
            </a>
            <a href="#link" className="social-icon">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Center Section: Navigation */}
        <div className="footer-section links-column">
          <h4 className="column-title">Quick Links</h4>
          <ul className="footer-links">
            <li>
              <Link to="/about-us" onClick={scrollToTop}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/sector-resources" onClick={scrollToTop}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/what-we-do" onClick={scrollToTop}>
                What We Do
              </Link>
            </li>
            <li>
              <Link to="/contact-us" onClick={scrollToTop}>
                Contact US
              </Link>
            </li>
            <li>
              <Link to="/tenders" onClick={scrollToTop}>
                Tenders
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section: Contact Info */}
        <div className="footer-section contact-column">
          <h4 className="column-title">Contact Us</h4>
          <p>Kakamega, Kenya</p>
          <p>Email: info@elitepongamia.com</p>
          <p>Phone: +254 (7) 422 22985</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="bottom-content">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} {footerData.companyName}. All
            rights reserved.
          </p>
          <div className="legal-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
