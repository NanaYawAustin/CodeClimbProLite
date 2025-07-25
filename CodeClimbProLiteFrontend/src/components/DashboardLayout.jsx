// src/components/DashboardLayout.jsx
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = ({ toggleTheme, currentTheme }) => {
  return (
    <div className={`d-flex dashboard-layout ${currentTheme}`} style={{ minHeight: '100vh' }}>
      <Sidebar currentTheme={currentTheme} />
      <div className="flex-grow-1 d-flex flex-column">
        <Topbar toggleTheme={toggleTheme} currentTheme={currentTheme} />
        <main className={`p-3 flex-grow-1 overflow-auto theme-${currentTheme}`}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
