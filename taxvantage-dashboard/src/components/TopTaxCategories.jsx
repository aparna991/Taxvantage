import React from 'react';

const TopTaxCategories = () => {
  return (
    <div className="card">
      <div className="card-title">Top Tax Categories</div>
      <div className="suppliers-list">
        <div className="supplier-item">
          <div className="supplier-info">
            <div className="supplier-icon" style={{ backgroundColor: '#7c5dfa' }}>
              F
            </div>
            <div className="supplier-name">Federal Income Tax</div>
          </div>
          <div className="supplier-amount">¥6,15,888</div>
        </div>
        <div className="supplier-item">
          <div className="supplier-info">
            <div className="supplier-icon" style={{ backgroundColor: '#ff8f00' }}>
              S
            </div>
            <div className="supplier-name">Self-Employment Tax</div>
          </div>
          <div className="supplier-amount">¥2,71,208</div>
        </div>
        <div className="supplier-item">
          <div className="supplier-info">
            <div className="supplier-icon" style={{ backgroundColor: '#33d69f' }}>
              ST
            </div>
            <div className="supplier-name">State Income Tax</div>
          </div>
          <div className="supplier-amount">¥1,51,248</div>
        </div>
      </div>
    </div>
  );
};

export default TopTaxCategories;