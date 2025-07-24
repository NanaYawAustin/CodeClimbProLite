import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="login-container">
      <div className="login-card shadow">
        <h3 className="text-center mb-2">Join CodeClimb Pro Lite</h3>
        <h5 className="text-center mb-4">Create an Account</h5>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter full name"
              required
            />
          </div>
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
              placeholder="Create password"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm password"
              required
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-success">Sign Up</button>
          </div>
        </form>
        <div className="text-center mt-3">
          <small>
            Already have an account? <Link to="/" style={{ color: '#add8e6' }}>Login</Link>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Signup;
