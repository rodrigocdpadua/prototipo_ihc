import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes';
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='body'>
    <AppRoutes />
  </div>
);