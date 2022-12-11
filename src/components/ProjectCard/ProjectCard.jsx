import './ProjectCard.css'
import TechCard from '../TechCard/TechCard'
import githubLogo from '../../images/whitebg-github-logo.png'
import webLogo from '../../images/web-logo.png'

const ProjectCard = ({project}) => {
  const {img, title, gitHubURL, deployedURL, sumary, technologies} = project
  return (
    <div className='card'>
      <img src={img} alt="project-illustation"/>
      <h2>{title}</h2>

      <div className='card-overlay'>
        <div className='access'>
          <TechCard
            className='overlay-link'
            image={githubLogo}
            title='Repository'
            url={gitHubURL}
          />
          {
            deployedURL &&
            <TechCard
              className='overlay-link'
              image={webLogo}
              title='Visit'
              url={deployedURL}
            />
          }
        </div>
        
        <div className='sumary'>
          <p>{sumary}</p>
          Developed with:
          <ul className='project-technologies-list'>
            {technologies.map(technology => <li>- {technology}</li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard