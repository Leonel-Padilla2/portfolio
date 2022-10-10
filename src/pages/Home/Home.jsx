import React from 'react'
import Button from '../../components/Button/Button'
import TechCard from '../../components/TechCard/TechCard'
import htmlLogo from '../../images/html-logo.png'
import cssLogo from '../../images/css-logo.png'
import jsLogo from '../../images/js-logo.png'
import reactLogo from '../../images/react-logo.png'
import githubLogo from '../../images/github-logo.png'
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
  return (
    <div className='home-container'>

      <div className='about-me-container'>
        <div className='name-container'>
          <h2 className='about-me-name'>Axcel Sánchez P.</h2>
          <span>Front-End Developer</span>
        </div>

        <h2>Are you in a hurry?</h2>
        <Button dowload>CURRICULUM HERE</Button>

        <p>
          I'm a Front-end Web developer, I'm always looking for new things to learn, I consider myself an autodidact, I like to learn new things 
          and I'm good at it whether by myself or being helped by a teammate.

          I have had the opportunity to develop projects with people all around the world, using Agile Methodologies such as Scrum and Kanban, 
          communicating in both English and Spanish.
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