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
          I'm a Front-End developer, I have learned programming basics at the university, since then I've been learning and developing projects.
          Sort of 1 year ago I started learning HTML, CSS, JavaScript and React and I decided I wanted to learn as much as I could about it,
          so I have been developing pojects by myself, also, I had the oportunity to participate on international events where I 
          worked on teams with people all arround the world.

          I'm a Front-End developer, I am currently working with HTML, CSS, JavaScript and React, 
          I am currently studying infotecnology engeneering at the Universidad Jose Cecilio del Valle.
        </p>

      </div>

      <div className='technologies-container'>
        <h1>Technologies</h1>

        <div className='technologies-list'>
          {
            technologies.map(({title, image, url}) => 
              <TechCard key={title} title={title} image={image} url={url}/>
            )
          }

        </div>
      </div>
      
    </div>
  )
}

export default Home