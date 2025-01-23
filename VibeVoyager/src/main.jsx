import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Login from './login.jsx'
import Register from './register.jsx'
import Dashboard from './dashboard.jsx'
import Protected from './protected.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<Protected />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
)
