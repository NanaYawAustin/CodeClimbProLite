import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card shadow">
        <h3 className="text-center mb-2">Welcome to CodeClimb Pro Lite</h3>
        <h5 className="text-center mb-4">Login</h5>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
        </form>
        <div className="text-center mt-3">
          <small>
            Don’t have an account? <Link to="/signup" style={{ color: '#add8e6' }}>Sign up</Link>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Login;
