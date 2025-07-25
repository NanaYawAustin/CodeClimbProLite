import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  LineChart, Line
} from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css'; // Ensure this is added!

const Dashboard = () => {
  const commitsData = [
    { day: 'Mon', commits: 5 },
    { day: 'Tue', commits: 8 },
    { day: 'Wed', commits: 4 },
    { day: 'Thu', commits: 7 },
    { day: 'Fri', commits: 6 },
    { day: 'Sat', commits: 10 },
    { day: 'Sun', commits: 3 },
  ];

  const wakatimeData = [
    { day: 'Mon', hours: 2 },
    { day: 'Tue', hours: 3.5 },
    { day: 'Wed', hours: 1.5 },
    { day: 'Thu', hours: 4 },
    { day: 'Fri', hours: 3 },
    { day: 'Sat', hours: 2.5 },
    { day: 'Sun', hours: 1 },
  ];

  const tasks = [
    { title: 'Fix layout bug', status: 'In Progress' },
    { title: 'Implement login API', status: 'Completed' },
    { title: 'Style dashboard', status: 'Pending' },
  ];

  const flashcards = [
    { title: 'useEffect in React', snippet: 'useEffect(() => { ... }, [deps]);' },
    { title: 'Flexbox Centering', snippet: 'display: flex; justify-content: center; align-items: center;' },
  ];

  const languages = [
    { name: 'JavaScript', percentage: 45 },
    { name: 'Dart', percentage: 25 },
    { name: 'PHP', percentage: 15 },
    { name: 'C++', percentage: 10 },
    { name: 'Python', percentage: 5 },
  ];

  const contributionLevels = ['#dfe6e9', '#a29bfe', '#6c5ce7', '#0984e3', '#2ecc71'];

  return (
    <div className="main-content">
      {/* 🌟 Daily Motivation */}
      <div className="motivation-banner mb-4">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h4 className="mb-1 fw-bold">🔥 Daily Motivation</h4>
            <p className="mb-0">“Discipline is the bridge between goals and accomplishment.”</p>
          </div>
          <div className="fs-2">🚀</div>
        </div>
      </div>

      <div className="row g-4">
        {/* GitHub Commits */}
        <div className="col-md-6">
          <div className="dashboard-card">
            <h5>📊 GitHub Commits</h5>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={commitsData}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="commits" fill="#007bff" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* WakaTime Hours */}
        <div className="col-md-6">
          <div className="dashboard-card">
            <h5>⏱️ WakaTime Hours</h5>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={wakatimeData}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="hours" stroke="#28a745" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Programming Languages */}
        <div className="col-md-6">
          <div className="dashboard-card">
            <h5>🗂️ Top Languages</h5>
            <ul className="list-group">
              {languages.map((lang, i) => (
                <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
                  {lang.name}
                  <span className="badge bg-primary">{lang.percentage}%</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Task Tracker */}
        <div className="col-md-6">
          <div className="dashboard-card">
            <h5>✅ Task Tracker</h5>
            <ul className="list-group">
              {tasks.map((task, i) => (
                <li
                  key={i}
                  className={`list-group-item d-flex justify-content-between align-items-center ${
                    task.status === 'Completed'
                      ? 'list-group-item-success'
                      : task.status === 'In Progress'
                      ? 'list-group-item-warning'
                      : ''
                  }`}
                >
                  {task.title}
                  <span className="badge bg-secondary">{task.status}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Flashcards */}
        <div className="col-md-6">
          <div className="dashboard-card">
            <h5>🧠 Code Snippet Flashcards</h5>
            {flashcards.map((card, i) => (
              <div key={i} className="mb-3">
                <strong>{card.title}</strong>
                <pre className="bg-light p-2 rounded">{card.snippet}</pre>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Goals Meter */}
        <div className="col-md-6">
          <div className="dashboard-card">
            <h5>🏆 Weekly Goal Progress</h5>
            <div className="progress mb-2">
              <div className="progress-bar bg-success" style={{ width: '70%' }}>70%</div>
            </div>
            <small>3 of 5 weekly goals completed</small>
          </div>
        </div>

        {/* GitHub-style Contributions */}
        <div className="col-12">
          <div className="dashboard-card">
            <h5>🔗 Contribution Calendar</h5>
            <div className="contribution-calendar">
              {[...Array(35 * 5)].map((_, i) => {
                const level = contributionLevels[i % contributionLevels.length];
                return (
                  <div
                    key={i}
                    className="contribution-cell"
                    style={{ backgroundColor: level }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
