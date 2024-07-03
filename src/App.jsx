import { useState } from 'react'
import './App.css'
import Navbar from './include/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
    </>
  )
}

export default App
