import React from 'react';
import { Trophy, Activity, Zap, Dumbbell, Backpack, Footprints } from 'lucide-react';
import { categories } from '../data/mock';

const iconMap = {
  Trophy,
  Activity,
  Zap,
  Dumbbell,
  Backpack,
  Footprints
};

const Products = () => {
  return (
    <section id="products" className="products-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Product Categories</h2>
          <p className="section-subtitle">
            Explore our wide range of sports equipment and athletic gear
          </p>
        </div>

        <div className="network-grid">
          {categories.map((category) => {
            const IconComponent = iconMap[category.icon];
            return (
              <div key={category.id} className="network-card product-card">
                <div className="product-icon-wrapper">
                  {IconComponent && <IconComponent className="product-icon" size={32} />}
                </div>
                <h3 className="network-card-title">{category.name}</h3>
                <p className="network-card-content">{category.description}</p>
                <ul className="product-list">
                  {category.products.map((product, index) => (
                    <li key={index} className="product-list-item">{product}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
