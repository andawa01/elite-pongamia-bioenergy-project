import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Menu, X, ChevronRightIcon } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const menuItems = [
    { label: "WHAT IS BIOENERGY?", id: "/biodigester" },
    { label: "WHAT WE DO", id: "/what-we-do" },
    { label: "PRODUCTS", id: "/sector-resources" },
    { label: "ABOUT US", id: "/about-us" },
    { label: "CONTACT US", id: "/contact-us" },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo">
            <Link
              to="/"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                closeMenu();
              }}
              className="logo-link"
            >
              <img src={logo} alt="Logo" />

              <div>
                <div className="logo-text">
                  <div className="logo-main">ELITE PONGAMIA</div>
                  <div className="logo-main">BIOENERGY</div>
                  <div className="logo-main">PROJECT LTD</div>
                </div>

                <div className="logo-tagline">
                  Nature's energy for a greener tomorrow
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="navbar-menu-desktop">
            <NavLink to="/biodigester" className="nav-link">
              WHAT IS BIOENERGY?
            </NavLink>
            <NavLink to="/what-we-do" className="nav-link">
              WHAT WE DO
            </NavLink>
            <NavLink to="/sector-resources" className="nav-link">
              PRODUCTS
            </NavLink>
            <NavLink to="/about-us" className="nav-link">
              ABOUT US
            </NavLink>
            <NavLink to="/contact-us" className="nav-link">
              CONTACT US
            </NavLink>
          </div>

          {/* Right Section */}
          <div className="navbar-right">
            <button
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`navbar-menu-mobile ${isMenuOpen ? "active" : ""}`}>
            <div className="mobile-menu-header">
              <div className="mobile-menu-logo-section">
                <img src={logo} alt="Logo" />
                <div>
                  <div className="mobile-menu-logo-main">ELITE PONGAMIA</div>
                  <div className="mobile-menu-logo-main">BIOENERGY PROJECT</div>
                  <div className="mobile-menu-logo-main">LTD</div>
                </div>
              </div>

              <button onClick={closeMenu}>
                <X size={28} />
              </button>
            </div>

            <div className="mobile-menu-items">
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  className="menu-item-button"
                  onClick={() => {
                    closeMenu();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <span>{item.label}</span>
                  <ChevronRightIcon size={20} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMenu}></div>
      )}
    </>
  );
};

export default Navbar;
