import React from 'react';
import logo from '../assets/logo.jpg';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <div className="logo">
          <img src={logo} alt="TaxVantage Logo" />
        </div>
        <div className="company-name">TaxVantage</div>
      </div>
      <div className="search-container">
        <input type="text" className="search-box" placeholder="Search..." />
      </div>
      <div className="nav-links">
        <a href="#" className="nav-item active">
          <span className="nav-icon"></span>
          Home
        </a>
        <a href="#" className="nav-item">
          <span className="nav-icon"></span>
          Pay Taxes
        </a>
        <a href="#" className="nav-item">
          <span className="nav-icon"></span>
          Invoices
        </a>
        <a href="#" className="nav-item">
          <span className="nav-icon"></span>
          Reports
        </a>
        <a href="#" className="nav-item">
          <span className="nav-icon"></span>
          Clients
        </a>
        <a href="#" className="nav-item">
          <span className="nav-icon"></span>
          Support
        </a>
        <a href="#" className="nav-item">
          <span className="nav-icon"></span>
          Notifications
          <span className="notification-badge">3</span>
        </a>
      </div>
      <div className="user-profile">
        <div className="avatar">TV</div>
        <div>Sarah Johnson</div>
      </div>
    </div>
  );
};

export default Sidebar;