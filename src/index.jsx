import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import './styles/index.css'
import App from './pages/App.jsx'
import Privacy from './pages/Privacy.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/privacy' element={<Privacy />} />
      <Route path='*' element={<Navigate replace to="/" />} />
    </Routes>
  </BrowserRouter>,
)
