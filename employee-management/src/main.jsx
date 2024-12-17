import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthProvider from './context/AuthProvider';
import { setLocalStorage } from './utils/localStorage';
import './index.css'

// Initialize localStorage
setLocalStorage();

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root')
);
