import React from 'react';
import { MapPin, Clock, Instagram } from 'lucide-react';
import { businessInfo } from '../data/mock';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            {businessInfo.tagline}
          </h1>
          <p className="hero-subtitle">
            Agra's Premier Sports Equipment Destination
          </p>
          <p className="hero-description">
            From cricket bats to gym equipment, we provide high-quality sports gear for athletes of all levels. Visit our store near Balaji Inter College, Rambagh.
          </p>
          
          <div className="hero-buttons">
            <a 
              href={businessInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MapPin className="btn-icon" size={20} />
              Get Directions
            </a>
            <a 
              href="#contact"
              className="btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Send Enquiry
            </a>
          </div>

          <div className="hero-info-cards">
            <div className="info-card">
              <MapPin className="info-icon" size={24} />
              <div>
                <p className="info-label">Location</p>
                <p className="info-value">Rambagh, Agra</p>
              </div>
            </div>
            <div className="info-card">
              <Clock className="info-icon" size={24} />
              <div>
                <p className="info-label">Opens Daily</p>
                <p className="info-value">10:30 AM</p>
              </div>
            </div>
            <div className="info-card">
              <Instagram className="info-icon" size={24} />
              <div>
                <p className="info-label">Follow Us</p>
                <a href={businessInfo.instagram} target="_blank" rel="noopener noreferrer" className="info-value info-link">
                  {businessInfo.instagramHandle}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
