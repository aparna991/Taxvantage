import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import TaxSummary from './components/TaxSummary';
import IncomeChart from './components/IncomeChart';
import TaxReserve from './components/TaxReserve';
import UpcomingTaxes from './components/UpcomingTaxes';
import TopTaxCategories from './components/TopTaxCategories';
import Login from './components/Login';
import Signup from './components/Signup';
import ClientPage from './components/ClientPage';
import ReportPage from './components/ReportPage';
import './App.css';

// Dashboard Component
const Dashboard = ({ isAuthenticated, setIsAuthenticated }) => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        <TaxSummary />
        <div className="dashboard-cards">
          <div className="card">
            <div className="card-title">Income & Tax Overview</div>
            <IncomeChart />
          </div>
          <TaxReserve />
        </div>
        <UpcomingTaxes />
        <TopTaxCategories />
      </div>
    </div>
  );
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );

  // Update authentication status when localStorage changes
  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(localStorage.getItem('isAuthenticated') === 'true');
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? (
              <Dashboard
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/clients"
          element={
            isAuthenticated ? (
              <div className="dashboard">
                <Sidebar />
                <div className="main-content">
                  <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
                  <ClientPage />
                </div>
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/reports"
          element={
            isAuthenticated ? (
              <div className="dashboard">
                <Sidebar />
                <div className="main-content">
                  <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
                  <ReportPage />
                </div>
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* Default Route */}
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;