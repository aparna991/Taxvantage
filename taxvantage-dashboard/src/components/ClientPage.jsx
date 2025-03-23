import React from 'react';
import { useNavigate } from 'react-router-dom';

const ClientPage = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <h1>Client Page</h1>
      <p>This is the Client page. You can manage client-related information here.</p>
      <button onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
    </div>
  );
};

export default ClientPage;