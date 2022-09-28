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
    },
    {
      img: '',
      title : 'Personal Portfolio',
      gitHubURL: '',
      deployedURL: '',
      sumary: 'This is my personal portfolio which I have developed in order to show my personal projects.'
    },
    {
      img: '',
      title : 'Personal Portfolio',
      gitHubURL: '',
      deployedURL: '',
      sumary: 'This is my personal portfolio which I have developed in order to show my personal projects.'
    },
    {
      img: '',
      title : 'Personal Portfolio',
      gitHubURL: '',
      deployedURL: '',
      sumary: 'This is my personal portfolio which I have developed in order to show my personal projects.'
    },
    {
      img: '',
      title : 'Personal Portfolio',
      gitHubURL: '',
      deployedURL: '',
      sumary: 'This is my personal portfolio which I have developed in order to show my personal projects.'
    },
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
      <p>
        All projects here helped me to improve my development skills, every single project is totaly different with each other, 
        that's why all of them compelled me to investigate, understand and learn new skills and subjects necesary for development.
      </p>

      <div className='projects-grid'>

        {projects.map((project, index) => {
          return <ProjectCard key={index} project={project}/>
        })}
        
      </div>
      
    </div>
  )
}

export default Projects