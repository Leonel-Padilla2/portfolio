import React from 'react'
import { useState } from 'react'
import menuLogo from  '../../images/menu-logo.png'
import './NavBar.css'

const NavBar = () => {
  const [activated, setActivated] = useState(false)
  return (
    <header className={`navbar-container ${activated ? 'active' : ''}`}>

      <h2>LOGO</h2>

      <button onClick={()=> setActivated(curreent => !curreent)} className='navbar-displayer'>
        <img src={menuLogo} alt="menu logo" />
      </button>

      <nav className='list-container'>
        <ul className='items-list'>
          <li className='navbar-item'>Home</li>
          <li className='navbar-item'>Projects</li>
          <li className='navbar-item'>About Me</li>
        </ul>
      </nav>

    </header>
  )
}

export default NavBar