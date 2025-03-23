import React from 'react';
import { Bar } from 'react-chartjs-2';

const IncomeChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Income',
        data: [180, 150, 160, 140, 130, 150, 120, 140, 110, 130, 120, 90],
        backgroundColor: 'rgba(124, 93, 250, 0.2)',
        borderColor: '#7c5dfa',
        borderWidth: 3,
      },
      {
        label: 'Tax Due',
        data: [190, 180, 185, 175, 170, 180, 165, 175, 160, 170, 165, 150],
        backgroundColor: 'rgba(51, 214, 159, 0.2)',
        borderColor: '#33d69f',
        borderWidth: 3,
      },
    ],
  };

  return (
    <div className="graph-container">
      <Bar data={data} />
    </div>
  );
};

export default IncomeChart;