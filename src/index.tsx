import React from 'react';
import ReactDOM from 'react-dom/client';
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
    <App />
    {/* Debug mode will log events to your browser console */}
    <Analytics debug={true} /> 
  </React.StrictMode>
);