import React from 'react';

const TaxReserve = () => {
  return (
    <div className="card float-balance">
      <div className="card-title">Tax Reserve Balance</div>
      <div className="balance-amount">¥4,75,375</div>
      <div className="balance-limit">₹8,30,000 target</div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: '57%' }}></div>
      </div>

      <div style={{ marginTop: '30px' }} className="card-title">
        2023 Tax Payment Status
      </div>
      <div className="payout-amount">¥4,10,525</div>
      <div className="payout-comparison">of ₹7,15,375 estimated annual tax</div>

      <div className="graph-container" style={{ height: '80px', marginTop: '10px' }}>
        <svg className="chart-svg" viewBox="0 0 1000 80">
          {/* Bar chart representing monthly tax payments */}
          <rect x="0" y="60" width="30" height="20" fill="#336699"></rect>
          <rect x="90" y="50" width="30" height="30" fill="#33d69f"></rect>
          <rect x="180" y="60" width="30" height="20" fill="#33d69f"></rect>
          <rect x="270" y="40" width="30" height="40" fill="#33d69f"></rect>
          <rect x="360" y="55" width="30" height="25" fill="#33d69f"></rect>
          <rect x="450" y="45" width="30" height="35" fill="#33d69f"></rect>
          <rect x="540" y="60" width="30" height="20" fill="#33d69f"></rect>
          <rect x="630" y="50" width="30" height="30" fill="#33d69f"></rect>
          <rect x="720" y="65" width="30" height="15" fill="#33d69f"></rect>
          <rect x="810" y="55" width="30" height="25" fill="#33d69f"></rect>
          <rect x="900" y="60" width="30" height="20" fill="#33d69f"></rect>
          {/* Target line */}
          <line x1="0" y1="20" x2="1000" y2="20" stroke="#dfe3fa" strokeWidth="1" strokeDasharray="5,5"></line>
        </svg>
      </div>

      <div className="performance-text">
        You've paid <span className="performance-highlight">57.5%</span> of your estimated annual tax obligation
      </div>
    </div>
  );
};

export default TaxReserve;