import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <p>
          © {new Date().getFullYear()} Sankalp Yatri Nivas. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
