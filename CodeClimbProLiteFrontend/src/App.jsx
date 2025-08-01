import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import DashboardLayout from './components/DashboardLayout';
import Dashboard from './Pages/Dashboard';
import Analytics from './Pages/Analytics';
import Goals from './Pages/Goals';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme; // Add class to <body>
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Dashboard route with layout */}
        <Route
          path="/dashboard"
          element={
            <DashboardLayout toggleTheme={toggleTheme} currentTheme={theme} />
          }
        >
          <Route path="/dashboard/analytics" element={<Analytics />} />
          <Route path="/dashboard/goals" element={<Goals />} />
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
