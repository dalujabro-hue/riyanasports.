import React, { useState } from 'react';
import { Menu, X, MapPin, Instagram } from 'lucide-react';
import { businessInfo } from '../data/mock';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="network-header">
      <nav className="nav-wrapper">
        <a href="#home" className="network-logo" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
          Riyana Sports Hub
        </a>
        
        {/* Desktop Navigation */}
        <div className="network-nav">
          <a href="#home" className="network-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
          <a href="#about" className="network-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
          <a href="#products" className="network-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('products'); }}>Products</a>
          <a href="#contact" className="network-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
          <a href={businessInfo.instagram} target="_blank" rel="noopener noreferrer" className="network-nav-link" aria-label="Instagram">
            <Instagram size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <a href="#home" className="mobile-menu-link" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
          <a href="#about" className="mobile-menu-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
          <a href="#products" className="mobile-menu-link" onClick={(e) => { e.preventDefault(); scrollToSection('products'); }}>Products</a>
          <a href="#contact" className="mobile-menu-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
          <a href={businessInfo.instagram} target="_blank" rel="noopener noreferrer" className="mobile-menu-link">
            <Instagram size={20} className="inline mr-2" /> Instagram
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
