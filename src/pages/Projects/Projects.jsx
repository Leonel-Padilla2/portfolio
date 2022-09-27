import ProjectCard from '../../components/ProjectCard/ProjectCard'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      img: '',
      title : 'Personal Portfolio',
      gitHubURL: '',
      deployedURL: '',
      sumary: 'This is my personal portfolio which I have developed in order to show my personal projects.'
    }
  ]
  return (
    <div className='projects-container'>
      <h2>These are the projects I have worked on</h2>        

      <div className='projects-grid'>

        {projects.map(project => {
          return <ProjectCard project={project}/>
        })}
        
      </div>
      
    </div>
  )
}

export default Projects