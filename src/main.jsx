import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import './index.css'
import App from './App.jsx'
import Privacy from './Privacy.jsx';
import BackgroundElements from './BackgroundElements/BackgroundElements.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <BackgroundElements />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/privacy' element={<Privacy />} />
      <Route path='*' element={<Navigate replace to="/" />} />
    </Routes>
  </BrowserRouter>,
)
