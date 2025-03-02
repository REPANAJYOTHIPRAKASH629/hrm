// src/App.js
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TrainingSchedule from './components/TrainingSchedule';
import PayslipRequestForm from './components/PayslipRequestForm';

const App = () => {
  const [showSchedule, setShowSchedule] = useState(false);

  const toggleSchedule = () => {
    setShowSchedule((prev) => !prev);
  };

  return (
    <Router>
      <div className="App">
        <header>
          <h1>Training Portal</h1>
        </header>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/training-schedule">Training Schedule</Link>
            </li>
            <li>
              <Link to="/payslip-request">Payslip Request</Link>
            </li>
          </ul>
        </nav>

        <main>
          {/* Conditionally render based on the route */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/training-schedule" element={<TrainingSchedule />} />
            <Route path="/payslip-request" element={<PayslipRequestForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

// A simple Home component
const Home = () => (
  <div>
    <h2>Welcome to the Training Portal</h2>
    <p>Select a section from the menu above to view details.</p>
  </div>
);

export default App;
