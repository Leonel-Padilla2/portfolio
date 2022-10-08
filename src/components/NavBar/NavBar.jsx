import React from 'react'
import { useState } from 'react'
import menuLogo from  '../../images/menu-logo.png'
import { Link, useNavigate } from 'react-router-dom'
import './NavBar.css'

const navBarRoutes = [
  {
    route : '/',
    title :'Home'
  },
  {
    route : '/projects',
    title :'Projects'
  },
  {
    route : '/contact',
    title :'Contact Me'
  }
  
]

const NavBar = () => {
  const [activated, setActivated] = useState(false)
  const navigate = useNavigate()

  const toggleActive = () => {
    if (window.innerWidth <= 600){
      setActivated(curreent => !curreent)
    }
  }

  return (
    <header className={`navbar-container ${activated && 'active'}`}>
      <h2 onClick={()=> navigate('/')}>
        Axcel P.
      </h2>

      <button 
        className='navbar-displayer'
        onClick={toggleActive} 
      >
        <img src={menuLogo} alt="menu logo" />
      </button>

      <nav className='list-container'>
        <ul className='items-list'>
          {
            navBarRoutes.map(({title, route}) =>
            <Link 
              key={route}
              onClick={toggleActive}
              className='navbar-link' 
              to={route}
            >
              <li className='navbar-item'>{title}</li>
            </Link>
            )
          }
        </ul>
      </nav>

    </header>
  )
}

export default NavBar