import { useState } from 'react'
import './Input.css'

const Input = (props) => {
  const [focused, setFocused] = useState(false)
  const {label, errorMessage, textarea, className, ...remainingProps} = props

  const handleOnBlur = () => {
    setFocused(true)
  }

  return (
    <div className={`input-container ${className}`}>
      <label className='input-label'>{label}</label>
      
      <input 
        className={`${textarea ? 'textarea' : 'input'}`}
        {...remainingProps}
        focused={focused.toString()}
        onBlur={handleOnBlur}
      />
      
      {
        focused && <span className='input-error-message'>{errorMessage}</span>
      }
    
    </div>
    
  )
}

export default Input