import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaInstagram } from "react-icons/fa";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section className="contact-section">
      <div className="container">
        {/* Heading */}
        <div className="row mb-5">
          <div className="col-md-12 text-center">
            <h2 className="section-title">Contact Us</h2>
            <p className="section-subtitle">We’d love to hear from you</p>
          </div>
        </div>

        {/* Info cards */}
        <div className="row contact-info-row">
          <div className="col-md-4 mb-4">
            <div className="info-card">
              <FaMapMarkerAlt className="info-icon" />
              <h4>Address</h4>
              <p>Sankalp Yatri Nivas, Near Railway Station, Gwalior, Madhya Pradesh</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="info-card">
              <FaPhoneAlt className="info-icon" />
              <h4>Phone</h4>
              <a href="tel:+918982596209" className="contact-link">
                +91 89825 96209
              </a>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="info-card">
              <FaEnvelope className="info-icon" />
              <h4>Email</h4>
              <a href="mailto:sankalpyatrinivas@gmail.com" className="contact-link">
                sankalpyatrinivas@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Social + Map */}
        <div className="row mt-5 align-items-center">
          <div className="col-md-12 d-flex justify-content-center mb-4">
            <div className="social-icons">
              <a
                href="https://wa.me/918982596209"
                target="_blank"
                rel="noreferrer"
                className="social-link whatsapp"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.instagram.com/sankalpyatrinivas"
                target="_blank"
                rel="noreferrer"
                className="social-link instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="mailto:sankalpyatrinivas@gmail.com"
                className="social-link email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="col-md-12">
            <div className="map-container">
              <iframe
                title="Sankalp Yatri Nivas Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7354.522792957388!2d78.164!3d26.204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c42169b45b3b%3A0xabcdef123456789!2sSankalp%20Yatri%20Nivas%2C%20Gwalior!5e0!3m2!1sen!2sin!4v1691103012345"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: "12px" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
