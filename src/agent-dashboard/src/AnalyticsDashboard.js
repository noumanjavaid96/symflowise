import React from 'react';
import './AnalyticsDashboard.css';

function AnalyticsDashboard({ tickets }) {
  const totalTickets = tickets.length;
  const openTickets = tickets.filter(t => t.status === 'Open').length;
  const inProgressTickets = tickets.filter(t => t.status === 'In Progress').length;

  // Mock resolution time for simplicity
  const averageResolutionTime = '2.5 hours';

  return (
    <div className="analytics-dashboard">
      <h2>Analytics Overview</h2>
      <div className="metrics-container">
        <div className="metric-card">
          <h3>Total Tickets</h3>
          <p>{totalTickets}</p>
        </div>
        <div className="metric-card">
          <h3>Open Tickets</h3>
          <p>{openTickets}</p>
        </div>
        <div className="metric-card">
          <h3>In Progress</h3>
          <p>{inProgressTickets}</p>
        </div>
        <div className="metric-card">
          <h3>Avg. Resolution Time</h3>
          <p>{averageResolutionTime}</p>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsDashboard;