import React from 'react';
import ReactDOM from 'react-dom/client';
// По умолчанию обращение к index.js в папке
import App from '@containers/App';

import '@styles/index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);