import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated'); // Clear authentication status
    navigate('/login'); // Redirect to the login page
  };

  return (
    <div className="header">
      <h1 className="page-title">Dashboard</h1>
      <div className="date-range">
        1 Jan 2024 - 31 Dec 2024
        <span style={{ marginLeft: '10px' }}>▼</span>
      </div>
      <button
        onClick={handleLogout}
        style={{
          marginLeft: '20px',
          padding: '8px 16px',
          backgroundColor: '#ff5252',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Header;