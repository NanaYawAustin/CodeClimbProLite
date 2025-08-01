// src/pages/Goals.jsx
import React, { useState } from 'react';
import {
  CircularProgressbar,
  buildStyles
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Goals.css';

const Goals = () => {
  const [activeTab, setActiveTab] = useState('current');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newGoal, setNewGoal] = useState({
    title: '',
    category: 'coding',
    deadline: '',
    description: ''
  });

  // Sample goals data
  const currentGoals = [
    {
      id: 1,
      title: 'Complete React Advanced Course',
      category: 'learning',
      progress: 75,
      deadline: '2024-02-15',
      description: 'Finish all modules and build the final project',
      priority: 'high',
      tasks: [
        { text: 'Complete Redux section', completed: true },
        { text: 'Build shopping cart project', completed: true },
        { text: 'Learn testing with Jest', completed: false },
        { text: 'Final project deployment', completed: false }
      ]
    },
    {
      id: 2,
      title: 'Contribute to 5 Open Source Projects',
      category: 'coding',
      progress: 40,
      deadline: '2024-03-01',
      description: 'Make meaningful contributions to open source community',
      priority: 'medium',
      tasks: [
        { text: 'Find suitable projects', completed: true },
        { text: 'Submit first PR', completed: true },
        { text: 'Submit second PR', completed: false },
        { text: 'Get PRs approved', completed: false }
      ]
    },
    {
      id: 3,
      title: 'Build Personal Portfolio Website',
      category: 'project',
      progress: 90,
      deadline: '2024-01-30',
      description: 'Create a stunning portfolio with all my projects',
      priority: 'high',
      tasks: [
        { text: 'Design mockups', completed: true },
        { text: 'Develop frontend', completed: true },
        { text: 'Add contact form', completed: true },
        { text: 'Deploy to production', completed: false }
      ]
    },
    {
      id: 4,
      title: 'Learn TypeScript',
      category: 'learning',
      progress: 30,
      deadline: '2024-02-28',
      description: 'Master TypeScript for better code quality',
      priority: 'medium',
      tasks: [
        { text: 'Complete basic syntax', completed: true },
        { text: 'Learn interfaces and types', completed: false },
        { text: 'Build project with TS', completed: false },
        { text: 'Migrate existing project', completed: false }
      ]
    }
  ];

  const completedGoals = [
    {
      id: 5,
      title: 'Master CSS Grid & Flexbox',
      category: 'learning',
      progress: 100,
      completedDate: '2024-01-10',
      description: 'Become proficient in modern CSS layout techniques'
    },
    {
      id: 6,
      title: 'Build Todo App with CRUD',
      category: 'project',
      progress: 100,
      completedDate: '2024-01-05',
      description: 'Full-stack todo application with authentication'
    }
  ];

  const weeklyGoals = [
    { id: 1, text: 'Code for 40 hours this week', progress: 85, target: 40, current: 34 },
    { id: 2, text: 'Make 10 commits', progress: 70, target: 10, current: 7 },
    { id: 3, text: 'Learn 3 new concepts', progress: 100, target: 3, current: 3 },
    { id: 4, text: 'Complete 2 LeetCode problems', progress: 50, target: 2, current: 1 }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return '#dc3545';
      case 'medium': return '#ffc107';
      case 'low': return '#28a745';
      default: return '#007bff';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'coding': return 'bi-code-slash';
      case 'learning': return 'bi-book';
      case 'project': return 'bi-folder';
      case 'career': return 'bi-briefcase';
      default: return 'bi-target';
    }
  };

  const getDaysLeft = (deadline) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const handleAddGoal = (e) => {
    e.preventDefault();
    // Add new goal logic here
    console.log('New goal:', newGoal);
    setShowAddModal(false);
    setNewGoal({ title: '', category: 'coding', deadline: '', description: '' });
  };

  return (
    <div className="main-content">
      {/* Page Header */}
      <div className="goals-header mb-4">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h2 className="fw-bold mb-1">🎯 Goals Dashboard</h2>
            <p className="text-muted mb-0">Track your progress and achieve your coding dreams</p>
          </div>
          <button 
            className="btn btn-light btn-lg"
            onClick={() => setShowAddModal(true)}
          >
            <i className="bi bi-plus-circle me-2"></i>
            Add New Goal
          </button>
        </div>
      </div>

      {/* Weekly Goals Summary */}
      <div className="row g-4 mb-4">
        <div className="col-12">
          <div className="dashboard-card">
            <h5 className="mb-4">📅 This Week's Goals</h5>
            <div className="row">
              {weeklyGoals.map(goal => (
                <div key={goal.id} className="col-md-3 mb-3">
                  <div className="weekly-goal-card">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <small className="text-muted">{goal.text}</small>
                      <small className="fw-bold">{goal.current}/{goal.target}</small>
                    </div>
                    <div className="progress mb-2" style={{ height: '6px' }}>
                      <div 
                        className="progress-bar bg-primary" 
                        style={{ width: `${goal.progress}%` }}
                      ></div>
                    </div>
                    <div className="text-center">
                      <small className="text-primary fw-bold">{goal.progress}%</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="goals-tabs mb-4">
        <ul className="nav nav-pills justify-content-center">
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'current' ? 'active' : ''}`}
              onClick={() => setActiveTab('current')}
            >
              <i className="bi bi-play-circle me-2"></i>
              Current Goals ({currentGoals.length})
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'completed' ? 'active' : ''}`}
              onClick={() => setActiveTab('completed')}
            >
              <i className="bi bi-check-circle me-2"></i>
              Completed ({completedGoals.length})
            </button>
          </li>
        </ul>
      </div>

      {/* Goals Content */}
      {activeTab === 'current' && (
        <div className="row g-4">
          {currentGoals.map(goal => (
            <div key={goal.id} className="col-md-6">
              <div className="dashboard-card goal-card">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div className="d-flex align-items-center">
                    <i className={`bi ${getCategoryIcon(goal.category)} fs-4 me-3 text-primary`}></i>
                    <div>
                      <h6 className="mb-1">{goal.title}</h6>
                      <small className="text-muted">{goal.description}</small>
                    </div>
                  </div>
                  <span 
                    className="badge rounded-pill px-3"
                    style={{ backgroundColor: getPriorityColor(goal.priority), color: 'white' }}
                  >
                    {goal.priority}
                  </span>
                </div>

                <div className="row align-items-center mb-3">
                  <div className="col-4">
                    <div style={{ width: '80px', height: '80px' }}>
                      <CircularProgressbar
                        value={goal.progress}
                        text={`${goal.progress}%`}
                        styles={buildStyles({
                          pathColor: getPriorityColor(goal.priority),
                          textColor: getPriorityColor(goal.priority),
                          trailColor: '#e9ecef'
                        })}
                      />
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="goal-info">
                      <div className="d-flex justify-content-between mb-2">
                        <span className="text-muted">Deadline:</span>
                        <span className="fw-bold">{new Date(goal.deadline).toLocaleDateString()}</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span className="text-muted">Days left:</span>
                        <span className={`fw-bold ${getDaysLeft(goal.deadline) < 7 ? 'text-danger' : 'text-success'}`}>
                          {getDaysLeft(goal.deadline)} days
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="goal-tasks">
                  <h6 className="mb-2">Tasks:</h6>
                  {goal.tasks.map((task, index) => (
                    <div key={index} className="form-check mb-1">
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        checked={task.completed}
                        onChange={() => {}}
                      />
                      <label className={`form-check-label ${task.completed ? 'text-decoration-line-through text-muted' : ''}`}>
                        {task.text}
                      </label>
                    </div>
                  ))}
                </div>

                <div className="goal-actions mt-3">
                  <button className="btn btn-sm btn-outline-primary me-2">
                    <i className="bi bi-pencil"></i> Edit
                  </button>
                  <button className="btn btn-sm btn-outline-success me-2">
                    <i className="bi bi-check"></i> Complete
                  </button>
                  <button className="btn btn-sm btn-outline-danger">
                    <i className="bi bi-trash"></i> Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'completed' && (
        <div className="row g-4">
          {completedGoals.map(goal => (
            <div key={goal.id} className="col-md-6">
              <div className="dashboard-card completed-goal-card">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-check-circle-fill fs-3 me-3 text-success"></i>
                  <div>
                    <h6 className="mb-1">{goal.title}</h6>
                    <small className="text-muted">{goal.description}</small>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="badge bg-success">Completed</span>
                  <small className="text-muted">
                    Completed on {new Date(goal.completedDate).toLocaleDateString()}
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add Goal Modal */}
      {showAddModal && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Goal</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setShowAddModal(false)}
                ></button>
              </div>
              <form onSubmit={handleAddGoal}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">Goal Title</label>
                    <input 
                      type="text" 
                      className="form-control"
                      value={newGoal.title}
                      onChange={(e) => setNewGoal({...newGoal, title: e.target.value})}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Category</label>
                    <select 
                      className="form-select"
                      value={newGoal.category}
                      onChange={(e) => setNewGoal({...newGoal, category: e.target.value})}
                    >
                      <option value="coding">Coding</option>
                      <option value="learning">Learning</option>
                      <option value="project">Project</option>
                      <option value="career">Career</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Deadline</label>
                    <input 
                      type="date" 
                      className="form-control"
                      value={newGoal.deadline}
                      onChange={(e) => setNewGoal({...newGoal, deadline: e.target.value})}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea 
                      className="form-control" 
                      rows="3"
                      value={newGoal.description}
                      onChange={(e) => setNewGoal({...newGoal, description: e.target.value})}
                    ></textarea>
                  </div>
                </div>
                <div className="modal-footer">
                  <button 
                    type="button" 
                    className="btn btn-secondary" 
                    onClick={() => setShowAddModal(false)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Add Goal
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {showAddModal && <div className="modal-backdrop show"></div>}
    </div>
  );
};

export default Goals;