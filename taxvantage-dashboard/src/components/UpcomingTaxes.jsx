import React from 'react';

const UpcomingTaxes = () => {
  return (
    <div className="card">
      <div className="card-title">
        Upcoming Tax Installments
        <span style={{ fontSize: '14px', color: 'var(--text)', cursor: 'pointer' }}>View All ▼</span>
      </div>
      <table className="installments-table">
        <thead>
          <tr>
            <th className="date-column">Due Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="date-box">
                <div className="month">Dec</div>
                <div className="day">15</div>
              </div>
            </td>
            <td>
              <div className="description">Q4 Estimated Tax Payments</div>
              <div className="installment-info">Federal - 4/4 installments</div>
            </td>
            <td className="amount">₹97,144.00</td>
            <td>
              <button className="pay-now-btn">Pay now</button>
            </td>
          </tr>
          <tr>
            <td>
              <div className="date-box">
                <div className="month">Jan</div>
                <div className="day">15</div>
              </div>
            </td>
            <td>
              <div className="description">Self-Employment Tax</div>
              <div className="installment-info">Social Security & Medicare</div>
            </td>
            <td className="amount">₹69,823.00</td>
            <td>
              <button className="pay-now-btn">Pay now</button>
            </td>
          </tr>
          <tr>
            <td>
              <div className="date-box">
                <div className="month">Jan</div>
                <div className="day">31</div>
              </div>
            </td>
            <td>
              <div className="description">State Income Tax</div>
              <div className="installment-info">Q4 Payment</div>
            </td>
            <td className="amount">₹35,126.00</td>
            <td>
              <button className="pay-now-btn">Pay now</button>
            </td>
          </tr>
          <tr>
            <td>
              <div className="date-box">
                <div className="month">Apr</div>
                <div className="day">15</div>
              </div>
            </td>
            <td>
              <div className="description">Annual Tax Filings</div>
              <div className="installment-info">Federal Form 1040</div>
            </td>
            <td className="amount">₹1,36,380.00</td>
            <td>
              <button className="pay-now-btn">Pay now</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UpcomingTaxes;