import ProjectCard from '../../components/ProjectCard/ProjectCard'
import PortFolioImage from '../../images/portfolio-image.png'
import PomodoroImgae from '../../images/pomodoro-image.png'
import './Projects.css'

const projects = [
  {
    img: PortFolioImage,
    title : 'Personal Portfolio',
    gitHubURL: 'https://github.com/Leonel-Padilla2/portfolio',
    deployedURL: '/',
    sumary: 'This is my personal portfolio which I have developed in order to show my personal projects, also you can contact me and read a bit more about me.'
  },
  {
    img: PomodoroImgae,
    title : 'Pomodoro Application',
    gitHubURL: 'https://github.com/Leonel-Padilla/fpomodoro',
    deployedURL: '/',
    sumary: 'This application were developed as part of an event, this project was made with a team from people all over America, using Agile Methodologies.'
  },
  {
    img: '',
    title : 'Restaurant Application',
    gitHubURL: '/',
    deployedURL: '/',
    sumary: 'This web application was developed as a class project which name was "Software Engineering" this is a restaurant application for inventory, clients, employees, purchasing and billing management.'
  }
]

const Projects = () => {


  return (
    <div className='projects-container'>
      <h2>These are the projects I have worked on</h2>        
      <p>
        Every projects here helped me to improve my development skills, every single project is totaly different with each other, 
        that's why all of them compelled me to investigate, understand and learn new skills and subjects necesary for its development.
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