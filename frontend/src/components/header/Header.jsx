import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking a link
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className={`main-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">

        {/* LOGO */}
        <div className="logo">
          <Link to="/" onClick={handleLinkClick}>
            <img
              src="/assets/images/logo.png"
              alt="Sankalp Yatri Nivas Logo"
              className="logo-img"
            />
            <span className="logo-text">
              SANKALP <span>YATRI NIVAS</span>
            </span>
          </Link>
        </div>

        {/* HAMBURGER BUTTON */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* NAV LINKS */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
          <li><a href="#book-now" onClick={handleLinkClick}>Book Now</a></li>
          <li><a href="#amenities" onClick={handleLinkClick}>Amenities</a></li>
          <li><a href="#about" onClick={handleLinkClick}>About Us</a></li>
          <li><a href="#price" onClick={handleLinkClick}>Price</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
