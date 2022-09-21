import React from 'react'
import TechCard from '../../components/TechCard/TechCard'
import githubLogo from '../../images/github-logo.png'
import linkedinLogo from '../../images/linkedin-logo.png'
import gmailLogo from '../../images/gmail-logo.png'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact-container'>
      
      <div className='social-media-container'>
        <h2>Contact me Here</h2>
        <div className='list'>
          <TechCard title='GitHub' image={githubLogo}
            url='https://github.com/Leonel-Padilla2'
          />
          <TechCard title='Linkedin' image={linkedinLogo}
            url='https://linkedin.com/in/axcel-leonel-sánchez-padilla-444833243'
          />
          <TechCard title='Email' image={gmailLogo}
            url='mailto:axcelpadilla17@gmail.com'
          />
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