import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import TaxSummary from './TaxSummary';
import IncomeChart from './IncomeChart';
import TaxReserve from './TaxReserve';
import UpcomingTaxes from './UpcomingTaxes';
import TopTaxCategories from './TopTaxCategories';
import PowerBIIframe from './PowerBIIframe'; // Import the Power BI Component

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
                {/* Add Power BI Iframe Component */}
                <div className="card">
                    <div className="card-title">Power BI Report</div>
                    <PowerBIIframe />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
