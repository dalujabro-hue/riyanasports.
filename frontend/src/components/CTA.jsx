import React from 'react';
import { MapPin, MessageCircle } from 'lucide-react';
import { businessInfo } from '../data/mock';

const CTA = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hi! I would like to know more about your sports equipment.');
    window.open(`https://wa.me/${businessInfo.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Gear Up for Your Next Match?</h2>
          <p className="cta-subtitle">
            Visit us today at Rambagh or get in touch for bulk orders and special pricing
          </p>
          <div className="cta-buttons">
            <a 
              href={businessInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-cta"
            >
              <MapPin className="btn-icon" size={20} />
              Visit Our Store
            </a>
            <button 
              onClick={handleWhatsAppClick}
              className="btn-secondary btn-cta"
            >
              <MessageCircle className="btn-icon" size={20} />
              WhatsApp Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
