import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { businessInfo } from '../data/mock';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
    toast({
      title: "Enquiry Sent!",
      description: "We'll get back to you soon. Thank you for contacting Riyana Sports Hub!",
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Visit Us or Get in Touch</h2>
          <p className="section-subtitle">
            We're here to help you find the perfect sports equipment
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info">
            <h3 className="contact-info-title">Store Information</h3>
            
            <div className="contact-info-item">
              <MapPin className="contact-icon" size={24} />
              <div>
                <p className="contact-label">Address</p>
                <p className="contact-value">{businessInfo.address.line1}</p>
                <p className="contact-value">{businessInfo.address.line2}</p>
                <p className="contact-value">{businessInfo.address.city}, {businessInfo.address.state} {businessInfo.address.pincode}</p>
              </div>
            </div>

            <div className="contact-info-item">
              <Clock className="contact-icon" size={24} />
              <div>
                <p className="contact-label">Opening Hours</p>
                <p className="contact-value">{businessInfo.hours}</p>
              </div>
            </div>

            <div className="contact-info-item">
              <Phone className="contact-icon" size={24} />
              <div>
                <p className="contact-label">Phone</p>
                <p className="contact-value">{businessInfo.phone}</p>
              </div>
            </div>

            <div className="contact-info-item">
              <Mail className="contact-icon" size={24} />
              <div>
                <p className="contact-label">Email</p>
                <p className="contact-value">{businessInfo.email}</p>
              </div>
            </div>

            <a 
              href={businessInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ marginTop: '24px' }}
            >
              <MapPin className="btn-icon" size={20} />
              Get Directions on Google Maps
            </a>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <h3 className="contact-form-title">Send Us an Enquiry</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Your contact number"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="form-textarea"
                  placeholder="Tell us about the products you're interested in or any questions you have..."
                />
              </div>

              <button type="submit" className="btn-primary btn-full">
                <Send className="btn-icon" size={20} />
                Send Enquiry
              </button>
            </form>
          </div>
        </div>

        {/* Map Embed */}
        <div className="map-container">
          <iframe
            title="Riyana Sports Hub Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.123456789!2d78.0!3d27.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDEwJzQ4LjAiTiA3OMKwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: '24px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
