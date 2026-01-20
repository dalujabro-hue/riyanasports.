import React from 'react';
import { Trophy, Users, Package, Star } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      id: 1,
      icon: Trophy,
      value: "6+",
      label: "Sport Categories",
      color: "#D3FF62"
    },
    {
      id: 2,
      icon: Users,
      value: "1000+",
      label: "Happy Customers",
      color: "#D3FF62"
    },
    {
      id: 3,
      icon: Package,
      value: "500+",
      label: "Products in Stock",
      color: "#D3FF62"
    },
    {
      id: 4,
      icon: Star,
      value: "5.0",
      label: "Customer Rating",
      color: "#D3FF62"
    }
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div key={stat.id} className="stat-card">
                <div className="stat-icon-wrapper">
                  <IconComponent className="stat-icon" size={32} />
                </div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
