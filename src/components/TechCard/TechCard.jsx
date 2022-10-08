import React from 'react'
import './TechCard.css'

const TechCard = ({title, image, url, className}) => {
  return (
    <a 
      href={url}
      target='_blank'
      rel="noreferrer"
      className={`tech-card-container ${className}`}
    >
      <img src={image} alt={`${title}-logo`}/>
      <h4>{title}</h4>
    </a>
  )
}

export default TechCard