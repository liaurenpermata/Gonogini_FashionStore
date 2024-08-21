import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Router from '../router/router'
// import App from './App.jsx'
// import './index.css'

import GuessLayout from '../src/pages/GuessLayout'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='*' element={<Router/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
