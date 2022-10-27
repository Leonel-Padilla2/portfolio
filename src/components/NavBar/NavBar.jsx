import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import menuLogo from  '../../images/menu-logo.png'
import personalLogo from '../../images/personal-logo.png'
import './NavBar.css'

/*Array which contains routes info in order to map it and show them.*/
const navBarRoutes = [
  {
    route : '/portfolio',
    title :'Home'
  },
  {
    route : 'portfolio/projects',
    title :'Projects'
  },
  {
    route : 'portfolio/contact',
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
      <img 
        className='logo'
        src={personalLogo}
        alt='personal-logo'
        onClick={()=> navigate('/')}
      />

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