import React from 'react'
import './Button.css'
import dowloadLogo from '../../images/download-logo.png'

const Button = ({children, dowload}) => {
  return (
    <button 
      className='custom-button'
    >
      <h4>
        {children}
      </h4>

      {
        dowload ? 
          <img src={dowloadLogo} alt='dowload icon'>
          </img>
        :
          ''
      }
      
    </button>
  )
}

export default Button