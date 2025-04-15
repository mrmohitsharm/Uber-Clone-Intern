import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // ✅ this should point to App.jsx
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
