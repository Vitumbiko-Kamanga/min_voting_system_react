import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import LoginScreen from './components/loginScreen'
import Landing from './components/landing.jsx'

function App() {
  const [count, setCount] = useState(0)
  const fname = "vitumbiko";
  return (
    <>
      {/* <LoginScreen /> */}
      <Landing />
    </>
  )
}

export default App
