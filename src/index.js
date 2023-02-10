import React from 'react';
import './index.css';
import App from './App';
import {createRoot} from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// 👇️ wrap App in Router

root.render(
  <Router>
    <App />
  </Router>
);

