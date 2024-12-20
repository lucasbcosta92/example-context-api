import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Contexts
import { AuthProvider } from './context/auth'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
