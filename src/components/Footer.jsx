import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo"></div>
        <div className="footer-links mt-3 mb-4">
          <a
            href="https://github.com/TauseefFSWD"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="social-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/tauseef-akbar-a332521b1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="social-icon" />
          </a>
          <a
            href="https://www.instagram.com/shaikh_tauseef832/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="social-icon" />
          </a>
        </div>
        <div className="footer-text">
          <p>
            &copy; {new Date().getFullYear()} TAUSEEF AKBAR ALI SHAIKH. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
