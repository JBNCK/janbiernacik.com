import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import Privacy from './Privacy.jsx';
import BackgroundElements from './BackgroundElements/BackgroundElements';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/privacy' element={<Privacy />} />
    </Routes>
  </BrowserRouter>,
)
