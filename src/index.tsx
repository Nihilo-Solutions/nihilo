import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async'; // 1. Import Helmet
import './styles.css'; 
import App from './App';
import { Analytics } from '@vercel/analytics/react';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    {/* 2. Wrap your entire App in the SEO Provider */}
    <HelmetProvider>
      <App />
      
      {/* 3. Only log Analytics events when you are developing locally */}
      <Analytics debug={process.env.NODE_ENV === 'development'} /> 
    </HelmetProvider>
  </React.StrictMode>
);