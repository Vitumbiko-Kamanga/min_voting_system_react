import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import LoginScreen from './components/loginScreen'
import Landing from './components/landing.jsx'
import Success from './components/SuccessScreen.jsx'
import Auth from './components/Auth.jsx'

function App() {
  const [count, setCount] = useState(0)
  const fname = "vitumbiko";
  return (
    <>
      {/* <LoginScreen /> */}
      {/* <Landing /> */}
      {/* <Success /> */}
      <Auth />


    </>
  )
}

export default App
