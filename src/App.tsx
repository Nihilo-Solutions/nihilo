import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Adjust path if it's in /components
import Home from './pages/Home';
import AssessmentPage from './pages/AssessmentPage';
import SecurityPage from './pages/SecurityPage';
import NotFound from './pages/NotFound'; // 1. Import your new page

function App() {
  return (
    <BrowserRouter>
      {/* 1. Placing Navbar here makes it global across all pages */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assessment" element={<AssessmentPage />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;