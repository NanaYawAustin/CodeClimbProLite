// src/components/Sidebar.jsx
import { NavLink } from 'react-router-dom';
import './Sidebar.css'; // Make sure you have styles
import { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`sidebar bg-dark text-white d-flex flex-column ${isOpen ? 'expanded' : 'collapsed'}`}>
      <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
        <h5 className="mb-0">
          <i className="bi bi-bar-chart-line me-2"></i>
          {isOpen && 'CodeClimb Pro'}
        </h5>
        <button className="btn btn-sm btn-outline-light" onClick={() => setIsOpen(!isOpen)}>
          <i className={`bi ${isOpen ? 'bi-chevron-left' : 'bi-chevron-right'}`}></i>
        </button>
      </div>

      <ul className="nav nav-pills flex-column p-3">
        <li className="nav-item mb-2">
          <NavLink to="/dashboard" className="nav-link text-white" activeClassName="active">
            <i className="bi bi-speedometer2 me-2"></i>
            {isOpen && 'Dashboard'}
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink to="/dashboard/analytics" className="nav-link text-white" activeClassName="active">
            <i className="bi bi-graph-up-arrow me-2"></i>
            {isOpen && 'Analytics'}
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink to="/dashboard/goals" className="nav-link text-white" activeClassName="active">
            <i className="bi bi-bullseye me-2"></i>
            {isOpen && 'Goals'}
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink to="/dashboard/settings" className="nav-link text-white" activeClassName="active">
            <i className="bi bi-gear me-2"></i>
            {isOpen && 'Settings'}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
