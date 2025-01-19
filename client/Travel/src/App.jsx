import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Hero from "./components/Hero"
import Reviews from './components/Reviews';

function App() {

  return (
    <>
      <Hero />
      <Reviews />
    </>
  )
}

export default App
