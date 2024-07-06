import { useState } from 'react'
import './App.css'
import Navbar from './include/navbar'
import Home from './components/Home'
import Azadì from './components/Azadì'
import Freelancer from './components/Freelancer'
import Viaggi from './components/Viaggi'
import Contatti from './components/Contatti'
import Footer from './include/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Azadì></Azadì>
      <Freelancer></Freelancer>
      <Viaggi></Viaggi>
      <Contatti></Contatti>
      <Footer></Footer>
    </>
  )
}

export default App
