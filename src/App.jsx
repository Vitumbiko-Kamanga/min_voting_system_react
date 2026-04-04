import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import LoginScreen from './components/loginScreen'
import Landing from './components/landing.jsx'
import Success from './components/SuccessScreen.jsx'
import Auth from './components/Auth.jsx'
import Btn from './components/Btn.jsx'
import SuccessScreen from './components/SuccessScreen.jsx'

function App() {
  const [count, setCount] = useState(0)
  const fname = "vitumbiko";
  return (
    <div className="bg-gray-900 h-screen text-white">
      <nav className=" flex flex-rol gap-10 px-10 py-5">
        <Link to="/" className='text-lg'>Home</Link>
        <Link to="/Auth" className='text-lg'>Sign In</Link>
        <Link to="/SuccessScreen" className='text-lg'>Success screen</Link>
      </nav>
      <Routes>
        <Route path='/' element= {<Landing />} />
        <Route path='/Auth' element= {<Auth />} />
        <Route path='/SuccessScreen' element={<SuccessScreen />} />
      </Routes>

    </div>
  )
}

export default App
