import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='about-me-container'>

        <div className='name-container'>
          <h2 className='about-me-name'>Axcel Sánchez P.</h2>
          <span>Front-End Developer</span>
        </div>

        <h2>Are you in a hurry?</h2>

        <button>Curriculum Here</button>

        <p>
          I'm a Front-End developer, I have learned programming basics at the university, since then I've been learning and developing projects.
          Sort of 1 year ago I started learning HTML, CSS, JavaScript and React and I decided I wanted to learn as much as I could about it,
          so I have been developing pojects by myself, also, I had the oportunity to participate on international events where I 
          worked on teams with people all arround the world.

          I'm a Front-End developer, I am currently working with HTML, CSS, JavaScript and React, 
          I am currently studying infotecnology engeneering at the Universidad Jose Cecilio del Valle.
        </p>

        <div className='technologies-container'>
          <h1>Technologies</h1>

          <div className='technologies-list'>
            <div>First Technology</div>
            <div>Second Technology</div>
            <div>Third Technology</div>
            <div>Fourth Technology</div>
            <div>Fifth Technology</div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Home