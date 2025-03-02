import './index.css'
import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Login from './auth/login.jsx';
import Dashboard from './dashboard/dashboard.jsx';
import Protected from './utility/protected.jsx';
import Home from './home/home.jsx';
import Callback from './utility/callback.jsx';

function App() {
  const [accessToken, setAccessToken] = useState(localStorage.getItem("SpotifyToken"));

  const handleAuthSuccess = (token) => {
    console.log("Access Token Received:", token);
    localStorage.setItem("SpotifyToken", token); 
    setAccessToken(token); // Update state
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/callback" element={<Callback onAuthSuccess={handleAuthSuccess} />} />
        <Route path="/dashboard" element={accessToken ? <Dashboard /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
