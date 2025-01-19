import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from "./components/Hero"
import Land from './components/Land';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/land" element={<Land />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
