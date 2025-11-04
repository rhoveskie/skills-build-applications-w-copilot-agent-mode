import './App.css';
import { NavLink, Routes, Route } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import OctofitLogo from './components/OctofitLogo';



function App() {
  return (
    <div className="container mt-4">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded mb-4">
        <span className="d-flex align-items-center">
          <OctofitLogo height={48} />
          <NavLink className="navbar-brand fw-bold text-white" to="/">Octofit Tracker</NavLink>
        </span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/activities">Activities</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/leaderboard">Leaderboard</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/teams">Teams</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/users">Users</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/workouts">Workouts</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className="card shadow-sm p-4 mb-4 bg-light rounded">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={<div className="text-center"><h1 className="display-4">Welcome to Octofit Tracker!</h1><p className="lead">Track your fitness, join teams, and compete on the leaderboard.</p></div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
