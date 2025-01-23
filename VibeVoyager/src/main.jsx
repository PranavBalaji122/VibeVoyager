import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './login.jsx'
import Register from './register.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  </StrictMode>,
)
