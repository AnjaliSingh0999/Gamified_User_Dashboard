// components/MoodChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from 'chart.js';

// Register required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export const MoodChart = ({ xpHistory }) => {
  const data = {
    labels: xpHistory.map((_, index) => `Day ${index + 1}`),
    datasets: [
      {
        label: 'XP Gained',
        data: xpHistory,
        backgroundColor: 'rgba(75,192,192,0.6)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto' }}>
      <h3>XP Progress Chart</h3>
      <Bar data={data} />
    </div>
  );
};
