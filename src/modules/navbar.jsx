import { useState } from 'react'
import './navbar.css'

function Navbar() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='title'>Benvenuta Alessia Piperno</h1>
    </>
  )
}

export default Navbar