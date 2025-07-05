import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Navbar from './components/Navbar'
import Reserve from './components/Reserve'

import './App.css'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/reserve" element={<Reserve />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App


