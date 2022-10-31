import React from 'react'
import Button from '../../components/Button/Button'
import TechCard from '../../components/TechCard/TechCard'
import htmlLogo from '../../images/html-logo.png'
import cssLogo from '../../images/css-logo.png'
import jsLogo from '../../images/js-logo.png'
import reactLogo from '../../images/react-logo.png'
import githubLogo from '../../images/github-logo.png'
import resume from '../../files/Axcel Leonel Sanchez Padilla Resume.pdf'
import './Home.css'

/*Array which contains Technologies info in order to map it and show them.*/ 
const technologies = [
  {
    title: 'HTML',
    image: htmlLogo,
    url  : 'https://developer.mozilla.org/en-US/docs/Web/HTML'
  },
  {
    title: 'CSS',
    image: cssLogo,
    url  : 'https://developer.mozilla.org/en-US/docs/Web/CSS'
  },
  {
    title: 'JavaScript',
    image: jsLogo,
    url  : 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
  },
  {
    title: 'React',
    image: reactLogo,
    url  : 'https://reactjs.org/'
  },
  {
    title: 'GitHub',
    image: githubLogo,
    url  : 'https://github.com/Leonel-Padilla2'
  }
]

const Home = () => {
  /*Function which gets called when the Button for download Resume gets clicked*/
  const onClickHandler = () => {
    window.open(resume)
  }

  return (
    <div className='home-container'>

      <div className='about-me-container'>
        <div className='name-container'>
          <h2 className='about-me-name'>Axcel Sánchez P.</h2>
          <span>Front-End Developer</span>
        </div>

        <h2>Are you in a hurry?</h2>
        <Button dowload onClick={onClickHandler}>
          DOWNLOAD RESUME
        </Button>

        <p>
        I am a Front-end Web developer, I have been developing applications for the past two years, I enjoy learning new technologies, 
        working with a developer's team that I can new things from. I have worked as part of a team using agile methodologies contributing 
        at the work and advances of my teamwork.
        </p>
      </div>

      <div className='technologies-container'>
        <h1>Technologies</h1>
        <div className='technologies-list'>
          {
            technologies.map( technology => <TechCard key={technology.title} {...technology}/>)
          }
        </div>
      </div>
      
    </div>
  )
}

export default Home