import React from 'react'
import './Button.css'
import dowloadLogo from '../../images/download-logo.png'
import sendLogo from '../../images/send-logo.png'

const Button = ({children, dowload, className}) => {
  return (
    <button 
      className={`custom-button ${className}`}
    >
      <h4>{children}</h4>
      {
        dowload ? 
          <img src={dowloadLogo} alt='dowload icon'/>
        :
          <img src={sendLogo} alt='dowload icon'/>
      }
    </button>
  )
}

export default Button