import React, { useState } from "react";
import "./Contact.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add your email logic or API call here
  };

  return (
    <div className="contact-page">
      {/* Header Section */}
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>Have questions about our bioenergy projects? We're here to help.</p>
      </div>

      <div className="contact-container">
        {/* Left Side: Info */}
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p className="info-subtext">
            Fill out the form and our team will get back to you within 24 hours.
          </p>

          <div className="info-details">
            <div className="info-item">
              <FaPhoneAlt className="icon" />
              <span>+254 (7) 422 22985</span>
            </div>
            <div className="info-item">
              <FaEnvelope className="icon" />
              <span>pongamia2018@gmail.com</span>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="icon" />
              <span>Kakamega, Kenya</span>
            </div>
          </div>

          <div className="social-circles">
            <a href="#" className="s-circle">
              <FaLinkedinIn />
            </a>
            <a href="#" className="s-circle">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Right Side: Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Investment Inquiry"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
