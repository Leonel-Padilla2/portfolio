import React from 'react'
import TechCard from '../../components/TechCard/TechCard'
import githubLogo from '../../images/github-logo.png'
import linkedinLogo from '../../images/linkedin-logo.png'
import gmailLogo from '../../images/gmail-logo.png'
import './Contact.css'
import ContactForm from '../../components/Form/ContactForm'

/*Array which contains social media info in order to map it and show them.*/ 
const socialMedia = [
  {
    title: 'GitHub',
    image: githubLogo,
    url  : 'https://github.com/Leonel-Padilla2'
  },
  {
    title: 'Linkedin',
    image: linkedinLogo,
    url  : 'https://linkedin.com/in/axcel-leonel-sánchez-padilla-444833243'
  },
  {
    title: 'Email',
    image: gmailLogo,
    url  : 'mailto:axcelpadilla17@gmail.com'
  }
]

const Contact = () => {
  return (
    <div className='contact-container'>
      
      <div className='social-media-container'>
        <h2>Contact me Here</h2>
        <div className='list'>
          {
            socialMedia.map( ({title, image, url}) => 
              <TechCard key={title} title={title} image={image} url={url}/>
            )
          }
        </div>
      </div>
      
      <ContactForm/>

    </div>
  )
}

export default Contact