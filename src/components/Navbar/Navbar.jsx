import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Search, Menu, X, Plus, ChevronRight } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const closeMenu = () => setIsMenuOpen(false);

  const menuItems = [
    { label: "WHAT IS BIOENERGY?", id: "/biodigester" },
    { label: "WHAT WE DO", id: "/what-we-do" },
    { label: "SECTOR RESOURCES", id: "/sector-resources" },
    { label: "ABOUT US", id: "/about-us" },
  ];

  return (
    <nav className="navbar">
      {/* Top Bar with Newsletter and Social Icons */}
      <div className="navbar-top">
        <div className="navbar-top-container">
          <a href="#newsletter" className="newsletter-link">
            NEWSLETTER SIGN-UP
          </a>

          {/* Social Media Icons */}
          <div className="social-icons">
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="social-icon"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="social-icon"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="social-icon"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="social-icon"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              closeMenu();
            }}
          >
            <img src={logo} alt="Logo" />
          </Link>
          <div className="logo-text">
            <div className="logo-main">ELITE PONGAMIA</div>
            <div className="logo-main">BIOENERGY</div>
            <div className="logo-main">PROJECT LTD</div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="navbar-menu-desktop">
          <Link to="/biodigester" className="nav-link">
            WHAT IS BIOENERGY?
          </Link>
          <Link to="/what-we-do" className="nav-link">
            WHAT WE DO
          </Link>
          <Link to="/sector-resources" className="nav-link">
            SECTOR RESOURCES
          </Link>
          <Link to="/about-us" className="nav-link">
            ABOUT US
          </Link>
        </div>

        {/* Right Section */}
        <div className="navbar-right">
          {/* Search Icon - Desktop Only */}
          <button className="search-btn" aria-label="Search">
            <Search size={24} />
          </button>

          {/* Donate Button - Desktop */}
          <a href="#donate" className="donate-btn">
            DONATE
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`navbar-menu-mobile ${isMenuOpen ? "active" : ""}`}>
          {/* Mobile Menu Header */}
          <div className="mobile-menu-header">
            <div className="mobile-menu-logo-section">
              <img src={logo} alt="Logo" className="mobile-menu-logo-img" />
              <div className="mobile-menu-logo-text">
                <div className="mobile-menu-logo-main">ELITE PONGAMIA</div>
                <div className="mobile-menu-logo-main">BIOENERGY PROJECT</div>
                <div className="mobile-menu-logo-main">LTD</div>
              </div>
            </div>
            <button
              className="mobile-menu-close"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>

          {/* Search Bar in Mobile Menu */}
          <div className="mobile-search-bar">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              placeholder="Type to search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <ChevronRight size={20} className="search-arrow" />
          </div>

          {/* Menu Items */}
          <div className="mobile-menu-items">
            {menuItems.map((item) => (
              <div key={item.id} className="menu-item-wrapper">
                <Link
                  to={item.id}
                  className="menu-item-button"
                  onClick={() => {
                    closeMenu(); // close menu on click
                    setExpandedItem(null);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <span className="menu-item-label">{item.label}</span>
                  <Plus size={24} />
                </Link>
              </div>
            ))}
          </div>

          {/* Donate Button in Mobile Menu */}
          <a href="#donate" className="donate-btn-mobile" onClick={closeMenu}>
            DONATE
          </a>

          {/* Newsletter and Social Icons in Mobile Menu */}
          <div className="mobile-footer">
            <p className="mobile-newsletter-link">NEWSLETTER SIGN-UP</p>
            <div className="mobile-social-icons">
              <a href="https://twitter.com" aria-label="Twitter">
                <FaTwitter size={20} />
              </a>
              <a href="https://facebook.com" aria-label="Facebook">
                <FaFacebookF size={20} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMenu}></div>
      )}
    </nav>
  );
};

export default Navbar;
