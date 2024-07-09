import { useState } from 'react'
import './App.css'
import Navbar from './include/navbar'
import Home from './components/Home'
import Azadì from './components/Azadì'
import Freelancer from './components/Freelancer'
import Viaggi from './components/Viaggi'
import Contatti from './components/Contatti'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Footer from './include/footer'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch(currentPage) {
      case 'azadì':
        return <Azadì />
      case 'freelancer':
        return <Freelancer />
      case 'viaggi':
        return <Viaggi />
      case 'contatti':
        return <Contatti />
      case 'login':
        return <Login setCurrentPage={setCurrentPage}/>
      case 'signup':
        return <SignUp />
      default:
        return <Home setCurrentPage={setCurrentPage} />
    }
  }

  return (
    <>
      <Navbar setCurrentPage={setCurrentPage}></Navbar>
      {renderPage()}
      <Footer></Footer>
    </>
  )
}

export default App
