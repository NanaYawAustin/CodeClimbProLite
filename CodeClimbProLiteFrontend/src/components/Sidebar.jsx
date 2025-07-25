// src/components/Sidebar.jsx
import { NavLink, useLocation } from 'react-router-dom';
import './Sidebar.css';
import { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const menuItems = [
    {
      path: '/dashboard',
      icon: 'bi-speedometer2',
      label: 'Dashboard',
      exact: true
    },
    {
      path: '/dashboard/analytics',
      icon: 'bi-graph-up-arrow',
      label: 'Analytics'
    },
    {
      path: '/dashboard/goals',
      icon: 'bi-bullseye',
      label: 'Goals'
    },
    {
      path: '/dashboard/settings',
      icon: 'bi-gear',
      label: 'Settings'
    }
  ];

  const isActiveRoute = (path, exact = false) => {
    if (exact) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className={`sidebar bg-dark text-white d-flex flex-column ${isOpen ? 'expanded' : 'collapsed'}`}>
      {/* Header */}
      <div className="sidebar-header d-flex justify-content-between align-items-center border-bottom border-secondary position-relative">
        <div className={`d-flex align-items-center ${isOpen ? 'flex-grow-1 me-3' : 'justify-content-center w-100'}`}>
          <div className="logo-icon me-3">
            <i className="bi bi-bar-chart-line text-white fs-4"></i>
          </div>
          {isOpen && (
            <div className="flex-grow-1">
              <h5 className="mb-0 fw-bold">CodeClimb Pro</h5>
              <small className="text-muted">Developer Dashboard</small>
            </div>
          )}
        </div>
        {isOpen && (
          <div className="flex-shrink-0">
            <button 
              className="btn btn-outline-secondary" 
              onClick={() => setIsOpen(!isOpen)}
              title="Collapse sidebar"
            >
              <i className="bi bi-chevron-left"></i>
            </button>
          </div>
        )}
        {!isOpen && (
          <button 
            className="btn btn-outline-secondary position-absolute" 
            onClick={() => setIsOpen(!isOpen)}
            title="Expand sidebar"
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-grow-1 p-3">
        <ul className="nav nav-pills flex-column">
          {menuItems.map((item) => (
            <li key={item.path} className="nav-item mb-2">
              <NavLink
                to={item.path}
                className={({ isActive }) => 
                  `nav-link text-white d-flex align-items-center position-relative ${
                    isActiveRoute(item.path, item.exact) ? 'active-custom' : ''
                  }`
                }
                title={!isOpen ? item.label : ''}
              >
                <i className={`bi ${item.icon} ${isOpen ? 'me-3' : 'me-0'} fs-5`}></i>
                {isOpen && <span>{item.label}</span>}
                {isActiveRoute(item.path, item.exact) && (
                  <div className="active-indicator"></div>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="sidebar-footer p-3 border-top border-secondary">
        <div className="d-flex align-items-center">
          <div className="avatar me-2">
            <i className="bi bi-person-circle fs-4 text-primary"></i>
          </div>
          {isOpen && (
            <div className="flex-grow-1">
              <div className="fw-semibold">Developer</div>
              <small className="status-text">
  <span className="dot"></span> Online
</small>

            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;