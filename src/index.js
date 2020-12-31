import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthProvider from './providers/AuthProvider';
import './index.css';

console.log(process.env);

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>
  , document.getElementById('root'));
