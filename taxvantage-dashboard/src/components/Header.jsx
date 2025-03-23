import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication status
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);

    // Redirect to login page
    navigate('/login');
  };

  return (
    <div className="header">
      <h1 className="page-title">Dashboard</h1>
      <div className="date-range">
        1 Jan 2024 - 31 Dec 2024
        <span style={{ marginLeft: '10px' }}>▼</span>
      </div>
      {isAuthenticated && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
};

export default Header;