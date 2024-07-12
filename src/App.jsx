import { useState } from 'react'
import './App.css'
import './i18n';
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
  const [language, setLanguage] = useState('it');

  const renderPage = () => {
    switch(currentPage) {
      case 'azadì':
        return <Azadì setLanguage={setLanguage}/>
      case 'freelancer':
        return <Freelancer setLanguage={setLanguage}/>
      case 'viaggi':
        return <Viaggi setLanguage={setLanguage}/>
      case 'contatti':
        return <Contatti setLanguage={setLanguage}/>
      case 'login':
        return <Login setCurrentPage={setCurrentPage} setLanguage={setLanguage}/>
      case 'signup':
        return <SignUp />
      default:
        return <Home setCurrentPage={setCurrentPage} setLanguage={setLanguage} />
    }
  }

  return (
    <>
      <Navbar setCurrentPage={setCurrentPage} setLanguage={setLanguage}></Navbar>
      {renderPage()}
      <Footer></Footer>
    </>
  )
}

export default App
