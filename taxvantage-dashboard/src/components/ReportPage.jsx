import React from 'react';
import { useNavigate } from 'react-router-dom';

const ReportPage = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <h1>Report Page</h1>
      <p>This is the Report page. You can view and manage reports here.</p>
      <button onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
    </div>
  );
};

export default ReportPage;