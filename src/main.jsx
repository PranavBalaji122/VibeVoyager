import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Login from './auth/login.jsx'
import Register from './auth/register.jsx'
import Dashboard from './dashboard/dashboard.jsx'
import Protected from './utility/protected.jsx'
import Home from './home/home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<Protected />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
)
