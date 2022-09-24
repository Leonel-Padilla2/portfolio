import React from 'react'
import { useState } from 'react'
import menuLogo from  '../../images/menu-logo.png'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  const [activated, setActivated] = useState(false)
  
  const toggleActive = () => {
    setActivated(curreent => !curreent)
  }


  return (
    <header className={`navbar-container ${activated ? 'active' : ''}`}>

      <h2>LOGO</h2>

      <button 
        className='navbar-displayer'
        onClick={toggleActive} 
      >
        <img src={menuLogo} alt="menu logo" />
      </button>

      <nav className='list-container'>
        <ul className='items-list'>
          <Link 
            className='navbar-link'
            to='/'
          >
            <li className='navbar-item'>Home</li>
          </Link>

          <Link 
            className='navbar-link' 
            to='/projects'
          >
            <li className='navbar-item'>Projects</li>
          </Link>
          
          <Link 
            className='navbar-link'
            to='/contact'
          >
            <li className='navbar-item'>Contact Me</li>
          </Link>
        </ul>
      </nav>

    </header>
  )
}

export default NavBar