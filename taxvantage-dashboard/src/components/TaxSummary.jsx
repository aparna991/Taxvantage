import React from 'react';

const TaxSummary = () => {
  return (
    <div className="tax-summary-container">
      <div className="summary-card income">
        <div className="summary-title">TOTAL INCOME</div>
        <div className="summary-amount">₹1,36,380.00</div>
      </div>
      <div className="summary-card expenses">
        <div className="summary-title">TOTAL EXPENSES</div>
        <div className="summary-amount">₹15,12,979.00</div>
      </div>
      <div className="summary-card tax">
        <div className="summary-title">ESTIMATED TAX</div>
        <div className="summary-amount">₹5,07,530.00</div>
      </div>
      <div className="summary-card exempted">
        <div className="summary-title">EXEMPTED TAX</div>
        <div className="summary-amount">₹1,50,000.00</div>
      </div>
    </div>
  );
};

export default TaxSummary;