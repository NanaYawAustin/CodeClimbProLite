// src/pages/Analytics.jsx
import React, { useState } from 'react';
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar, 
  PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Analytics.css';

const Analytics = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('7d');

  // Sample data - replace with real data
  const productivityData = [
    { date: '2024-01-01', commits: 5, hours: 8, linesAdded: 245, linesDeleted: 67 },
    { date: '2024-01-02', commits: 3, hours: 6, linesAdded: 178, linesDeleted: 23 },
    { date: '2024-01-03', commits: 8, hours: 9, linesAdded: 423, linesDeleted: 156 },
    { date: '2024-01-04', commits: 2, hours: 4, linesAdded: 89, linesDeleted: 12 },
    { date: '2024-01-05', commits: 6, hours: 7, linesAdded: 312, linesDeleted: 78 },
    { date: '2024-01-06', commits: 4, hours: 5, linesAdded: 198, linesDeleted: 45 },
    { date: '2024-01-07', commits: 7, hours: 8, linesAdded: 356, linesDeleted: 89 }
  ];

  const languageData = [
    { name: 'JavaScript', value: 45, color: '#f7df1e' },
    { name: 'Python', value: 25, color: '#3776ab' },
    { name: 'PHP', value: 15, color: '#777bb4' },
    { name: 'C++', value: 10, color: '#00599c' },
    { name: 'Dart', value: 5, color: '#0175c2' }
  ];

  const projectData = [
    { name: 'CodeClimb Pro', progress: 85, commits: 127, hours: 45 },
    { name: 'E-commerce App', progress: 62, commits: 89, hours: 32 },
    { name: 'Blog Platform', progress: 40, commits: 45, hours: 18 },
    { name: 'Mobile Game', progress: 78, commits: 156, hours: 67 }
  ];

  const weeklyStats = [
    { week: 'Week 1', productivity: 82, focus: 78, efficiency: 85 },
    { week: 'Week 2', productivity: 75, focus: 88, efficiency: 79 },
    { week: 'Week 3', productivity: 91, focus: 82, efficiency: 94 },
    { week: 'Week 4', productivity: 88, focus: 90, efficiency: 87 }
  ];

  const timeDistribution = [
    { activity: 'Coding', hours: 35, color: '#28a745' },
    { activity: 'Debugging', hours: 12, color: '#dc3545' },
    { activity: 'Planning', hours: 8, color: '#007bff' },
    { activity: 'Meetings', hours: 6, color: '#ffc107' },
    { activity: 'Learning', hours: 4, color: '#6f42c1' }
  ];

  return (
    <div className="main-content">
      {/* Page Header */}
      <div className="analytics-header mb-4">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h2 className="fw-bold mb-1">📊 Analytics Dashboard</h2>
            <p className="text-muted mb-0">Track your coding productivity and progress</p>
          </div>
          <div className="d-flex gap-2">
            {['7d', '30d', '90d', '1y'].map(period => (
              <button
                key={period}
                className={`btn ${selectedPeriod === period ? 'btn-primary' : 'btn-outline-secondary'} btn-sm`}
                onClick={() => setSelectedPeriod(period)}
              >
                {period === '7d' ? '7 Days' : period === '30d' ? '30 Days' : period === '90d' ? '3 Months' : '1 Year'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Key Metrics Cards */}
      <div className="row g-4 mb-4">
        <div className="col-md-3">
          <div className="dashboard-card text-center">
            <div className="metric-icon mb-3">
              <i className="bi bi-graph-up text-success fs-1"></i>
            </div>
            <h3 className="fw-bold text-success">127</h3>
            <p className="text-muted mb-0">Total Commits</p>
            <small className="text-success">+12% this week</small>
          </div>
        </div>
        <div className="col-md-3">
          <div className="dashboard-card text-center">
            <div className="metric-icon mb-3">
              <i className="bi bi-clock text-primary fs-1"></i>
            </div>
            <h3 className="fw-bold text-primary">48.5h</h3>
            <p className="text-muted mb-0">Coding Hours</p>
            <small className="text-primary">+5.2h from last week</small>
          </div>
        </div>
        <div className="col-md-3">
          <div className="dashboard-card text-center">
            <div className="metric-icon mb-3">
              <i className="bi bi-code-slash text-warning fs-1"></i>
            </div>
            <h3 className="fw-bold text-warning">1,847</h3>
            <p className="text-muted mb-0">Lines of Code</p>
            <small className="text-warning">+234 lines today</small>
          </div>
        </div>
        <div className="col-md-3">
          <div className="dashboard-card text-center">
            <div className="metric-icon mb-3">
              <i className="bi bi-trophy text-danger fs-1"></i>
            </div>
            <h3 className="fw-bold text-danger">94%</h3>
            <p className="text-muted mb-0">Efficiency Score</p>
            <small className="text-danger">All time high!</small>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {/* Productivity Trend */}
        <div className="col-12">
          <div className="dashboard-card">
            <h5 className="mb-4">📈 Productivity Trends</h5>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={productivityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="commits" stackId="1" stroke="#007bff" fill="#007bff" fillOpacity={0.6} />
                <Area type="monotone" dataKey="hours" stackId="2" stroke="#28a745" fill="#28a745" fillOpacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Language Distribution */}
        <div className="col-md-6">
          <div className="dashboard-card">
            <h5 className="mb-4">🗂️ Language Distribution</h5>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={languageData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {languageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Time Distribution */}
        <div className="col-md-6">
          <div className="dashboard-card">
            <h5 className="mb-4">⏰ Time Distribution</h5>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={timeDistribution} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="activity" type="category" width={80} />
                <Tooltip />
                <Bar dataKey="hours" fill="#007bff" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Project Progress */}
        <div className="col-md-8">
          <div className="dashboard-card">
            <h5 className="mb-4">🚀 Project Progress</h5>
            <div className="space-y-4">
              {projectData.map((project, index) => (
                <div key={index} className="mb-4">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h6 className="mb-0">{project.name}</h6>
                    <span className="badge bg-primary">{project.progress}%</span>
                  </div>
                  <div className="progress mb-2" style={{ height: '8px' }}>
                    <div 
                      className="progress-bar bg-gradient" 
                      style={{ 
                        width: `${project.progress}%`,
                        background: `linear-gradient(90deg, #007bff ${project.progress}%, #e9ecef 0%)`
                      }}
                    ></div>
                  </div>
                  <div className="d-flex justify-content-between text-muted small">
                    <span>{project.commits} commits</span>
                    <span>{project.hours}h spent</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Weekly Performance */}
        <div className="col-md-4">
          <div className="dashboard-card">
            <h5 className="mb-4">📊 Weekly Performance</h5>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={weeklyStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="productivity" stroke="#007bff" strokeWidth={2} />
                <Line type="monotone" dataKey="focus" stroke="#28a745" strokeWidth={2} />
                <Line type="monotone" dataKey="efficiency" stroke="#dc3545" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Code Quality Metrics */}
        <div className="col-12">
          <div className="dashboard-card">
            <h5 className="mb-4">🔍 Code Quality Insights</h5>
            <div className="row">
              <div className="col-md-3 text-center">
                <div className="quality-metric">
                  <div className="quality-score mb-2">
                    <span className="display-4 fw-bold text-success">A+</span>
                  </div>
                  <p className="text-muted">Code Quality</p>
                </div>
              </div>
              <div className="col-md-3 text-center">
                <div className="quality-metric">
                  <div className="quality-score mb-2">
                    <span className="display-4 fw-bold text-primary">2.3%</span>
                  </div>
                  <p className="text-muted">Bug Rate</p>
                </div>
              </div>
              <div className="col-md-3 text-center">
                <div className="quality-metric">
                  <div className="quality-score mb-2">
                    <span className="display-4 fw-bold text-warning">87%</span>
                  </div>
                  <p className="text-muted">Test Coverage</p>
                </div>
              </div>
              <div className="col-md-3 text-center">
                <div className="quality-metric">
                  <div className="quality-score mb-2">
                    <span className="display-4 fw-bold text-info">15ms</span>
                  </div>
                  <p className="text-muted">Avg Response</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;