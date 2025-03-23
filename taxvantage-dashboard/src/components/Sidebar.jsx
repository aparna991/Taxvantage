import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/dashboard" className="nav-item">
          <span className="nav-icon"></span>
          Home
        </Link>
        <Link to="/clients" className="nav-item">
          <span className="nav-icon"></span>
          Clients
        </Link>
        <Link to="/reports" className="nav-item">
          <span className="nav-icon"></span>
          Reports
        </Link>

        <Link to="/invoices" className="nav-item">
          <span className="nav-icon"></span>
          Invoices
        </Link>
        <Link to="/support" className="nav-item">
          <span className="nav-icon"></span>
          Support
        </Link>
        <Link to="/notifications" className="nav-item">
          <span className="nav-icon"></span>
          Notifications
          <span className="notification-badge">3</span>
        </Link>
      </div>
      <div className="user-profile">
        <div className="avatar">TV</div>
        <div>Sarah Johnson</div>
      </div>
    </div>
  );
};

export default Sidebar;