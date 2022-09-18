import React from 'react'
import TechCard from '../../components/TechCard/TechCard'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact-container'>
      
      <div className='social-media-container'>
        <h2>Contact me Here</h2>
        <div className='list'>
          <TechCard title='Title' />
          <TechCard title='Title' />
          <TechCard title='Title' />
        </div>
      </div>
      
      <form className='message-form'>
        <h2>Or leave a message</h2>

        <label className='label'>Name</label>
        <input className='input' type="text" placeholder='Your Name'/>

        <label className='label'>Company</label>
        <input className='input' type="text" placeholder='Company Name (Optional)'/>

        <label className='label'>Message</label>
        <textarea placeholder='Message Here.'/>

        <button className='button'>Send</button>
      </form>

    </div>
  )
}

export default Contact