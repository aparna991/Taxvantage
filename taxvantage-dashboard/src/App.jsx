import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import TaxSummary from './components/TaxSummary';
import IncomeChart from './components/IncomeChart';
import TaxReserve from './components/TaxReserve';
import UpcomingTaxes from './components/UpcomingTaxes';
import TopTaxCategories from './components/TopTaxCategories';
import './App.css';

const App = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Header />
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

export default App;