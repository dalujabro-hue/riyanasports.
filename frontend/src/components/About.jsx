import React from 'react';
import { Grid3x3, Award, Users, Package } from 'lucide-react';
import { businessInfo, features } from '../data/mock';

const iconMap = {
  Grid3x3,
  Award,
  Users,
  Package
};

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Riyana Sports Hub</h2>
            <p className="about-description">
              {businessInfo.description}
            </p>
            <p className="about-description">
              Located conveniently near Balaji Inter College in Rambagh, we serve the local community of athletes, students, fitness enthusiasts, and sports academies throughout Agra. Whether you're a beginner taking your first steps in sports or a seasoned professional, we have the right equipment for you.
            </p>
            <p className="about-mission">
              <strong>Our Mission:</strong> To empower every athlete in Agra with access to quality sports equipment at competitive prices, backed by expert guidance and reliable service.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature) => {
              const IconComponent = iconMap[feature.icon];
              return (
                <div key={feature.id} className="feature-card">
                  <div className="feature-icon-wrapper">
                    {IconComponent && <IconComponent className="feature-icon" size={28} />}
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
