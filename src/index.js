import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthProvider from './providers/AuthProvider';
import './index.css';

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>
  , document.getElementById('root'));
