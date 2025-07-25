import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h2>Welcome back, Austin 👋</h2>
      <div style={{ marginTop: '30px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <div style={cardStyle}>
          <h3>GitHub Commits</h3>
          <p>123 this week</p>
        </div>
        <div style={cardStyle}>
          <h3>WakaTime Hours</h3>
          <p>17.5 hrs</p>
        </div>
        <div style={cardStyle}>
          <h3>Projects</h3>
          <p>5 active</p>
        </div>
      </div>
    </div>
  );
};

const cardStyle = {
  background: '#fff',
  borderRadius: '10px',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  padding: '20px',
  minWidth: '200px',
  flex: '1',
};

export default Dashboard;
