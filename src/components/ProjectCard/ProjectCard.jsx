import './ProjectCard.css'
import TechCard from '../TechCard/TechCard'
import githubLogo from '../../images/whitebg-github-logo.png'
import webLogo from '../../images/web-logo.png'

const ProjectCard = ({project}) => {
  const {img, title, gitHubURL, deployedURL, sumary} = project
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
        

        <p className='sumary'>
          {sumary}
        </p>
      </div>
    </div>
  )
}

export default ProjectCard