import React from 'react';
import { MapPin, Instagram, Mail, Phone } from 'lucide-react';
import { businessInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-brand">Riyana Sports Hub</h3>
            <p className="footer-tagline">
              Your Game, Our Gear – Unleash the Athlete Within
            </p>
            <div className="footer-social">
              <a 
                href={businessInfo.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#products" className="footer-link">Products</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Product Categories</h4>
            <ul className="footer-links">
              <li className="footer-link">Cricket Equipment</li>
              <li className="footer-link">Football Gear</li>
              <li className="footer-link">Badminton</li>
              <li className="footer-link">Gym Equipment</li>
              <li className="footer-link">School Sports Kits</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact Info</h4>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <MapPin size={18} className="footer-icon" />
                <span>{businessInfo.address.line1}, {businessInfo.address.line2}</span>
              </div>
              <div className="footer-contact-item">
                <Phone size={18} className="footer-icon" />
                <span>{businessInfo.phone}</span>
              </div>
              <div className="footer-contact-item">
                <Mail size={18} className="footer-icon" />
                <span>{businessInfo.email}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Riyana Sports Hub. All rights reserved.
          </p>
          <p className="footer-location">
            Proudly serving Agra since {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
