import { useState } from 'react'
import './App.css'
import Navbar from './include/navbar'
import Footer from './include/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Footer></Footer>
    </>
  )
}

export default App
