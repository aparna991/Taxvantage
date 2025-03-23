import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <h1 className="page-title">Dashboard</h1>
      <div className="date-range">
        1 Jan 2024 - 31 Dec 2024
        <span style={{ marginLeft: '10px' }}>▼</span>
      </div>
    </div>
  );
};

export default Header;