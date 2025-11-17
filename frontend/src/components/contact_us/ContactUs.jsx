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
              <FaPhoneAlt className="info-icon" />
              <h4>Phone</h4>
              <a href="tel:+918982596209" className="contact-link">
                +91 89825 96209
              </a>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="info-card">
              <FaMapMarkerAlt className="info-icon" />
              <h4>Address</h4>
              <p>Shinde Ki Chhawani, LMB Road, Behind Petrol Pump, Near Congress Bhawan, Gwalior – 474009, Madhya Pradesh, India.</p>
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
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d114549.34642874253!2d78.08321580257868!3d26.20750622208869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3976c55521caf71f%3A0x1162ceb538778935!2z4KS44KSC4KSV4KSy4KWN4KSqIOCkr-CkvuCkpOCljeCksOClgCDgpKjgpL_gpLXgpL7gpLgg4KSPLuCkuOClgC4g4KSh4KWJ4KSw4KSu4KWH4KSf4KWN4KSw4KWALCBNTEIgUmQsIGJlaGluZCBwZXRyb2wgcHVtcCwgUGhvb2wgQmFnaCwgU2hpbmRlIEtpIENoaGF3YW5pLCBHd2FsaW9yLCBNYWRoeWEgUHJhZGVzaCA0NzQwMDEsIEluZGlh!3m2!1d26.2075297!2d78.1656173!5e0!3m2!1sen!2sin!4v1762957031750!5m2!1sen!2sin"
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
