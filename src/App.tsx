import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AssessmentPage from './pages/AssessmentPage';
import SecurityPage from './pages/SecurityPage'; // The missing import

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/assessment" element={<AssessmentPage />} />
      <Route path="/security" element={<SecurityPage />} /> {/* The new route */}
    </Routes>
  );
}

export default App;