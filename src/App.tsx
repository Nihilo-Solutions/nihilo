import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AssessmentPage from './pages/AssessmentPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative min-h-screen bg-zinc-950">
        <Navbar /> {/* Navbar stays at top across all pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/assessment" element={<AssessmentPage />} />
          <Route path="/security" element={<SecurityPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;