// src/components/Footer.jsx
import React from 'react';
import './Footer.css'; // Make sure to create this CSS file too

const Footer = () => {
  return (
    <footer className="dashboard-footer">
      <div className="footer-content">
        <span>© {new Date().getFullYear()} CodeClimb Pro Lite. All rights reserved.</span>
        <span>Built with 💻 by Austin</span>
      </div>
    </footer>
  );
};

export default Footer;
