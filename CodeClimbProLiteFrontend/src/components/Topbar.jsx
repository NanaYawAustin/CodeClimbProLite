// src/components/Topbar.jsx
const Topbar = () => {
  const handleSignOut = () => {
    alert('Signing out...');
  };

  const handleChangePassword = () => {
    alert('Change password clicked');
  };

  const user = {
    name: 'Austin',
    avatar: null, // replace with '/path/to/profile.jpg' when ready
  };

  return (
    <nav className="navbar navbar-light bg-white shadow-sm px-4 py-2 border-bottom">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* App Name or Logo */}
        <div className="navbar-brand fw-bold">
          <i className="bi bi-bar-chart-line-fill me-2"></i>
          CodeClimb Pro
        </div>

        {/* Right side - Welcome text and Avatar dropdown */}
        <div className="d-flex align-items-center gap-3">
          <span className="fw-semibold text-dark">Welcome, {user.name}</span>

          <div className="dropdown">
            {
              user.avatar ? (
                <img
                  src={user.avatar}
                  alt="Profile"
                  className="rounded-circle"
                  style={{
                    width: '32px',
                    height: '32px',
                    objectFit: 'cover',
                    cursor: 'pointer',
                  }}
                  id="avatarDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                />
              ) : (
                <div
                  className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center"
                  style={{
                    width: '32px',
                    height: '32px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                  }}
                  id="avatarDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {user.name.charAt(0)}
                </div>
              )
            }

            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="avatarDropdown">
              <li>
                <button className="dropdown-item" onClick={handleChangePassword}>
                  Change Password
                </button>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li>
                <button className="dropdown-item text-danger" onClick={handleSignOut}>
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
