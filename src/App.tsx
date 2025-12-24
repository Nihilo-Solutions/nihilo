import React from 'react';
// Added BrowserRouter to the import list below
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AssessmentPage from './pages/AssessmentPage';
import SecurityPage from './pages/SecurityPage';

function App() {
  return (
    /* This wrapper is what was missing and causing the error */
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assessment" element={<AssessmentPage />} />
        <Route path="/security" element={<SecurityPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;