import { useState } from 'react'
import './Input.css'

const Input = (props) => {
  const [focused, setFocused] = useState(false)
  const {label, errorMessage, textarea, ...remainingProps} = props

  const handleOnBlur = () => {
    setFocused(true)
  }

  return (
    <>
    <label className='input-label'>{label}</label>
    {
      textarea ?
        <textarea
          className='textarea'
          {...remainingProps}
          focused={focused.toString()}
          onBlur={handleOnBlur}
        />
      :
        <input 
          className='input'
          {...remainingProps}
          focused={focused.toString()}
          onBlur={handleOnBlur}
        />
    }
    {
      focused && <span className='input-error-message'>{errorMessage}</span>
    }
    
    </>
    
  )
}

export default Input