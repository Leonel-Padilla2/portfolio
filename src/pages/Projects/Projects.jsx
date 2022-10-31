import ProjectCard from '../../components/ProjectCard/ProjectCard'
import PortFolioImage from '../../images/portfolio-image.png'
import PomodoroImage from '../../images/pomodoro-image.png'
import RestaurantImage from '../../images/New-Project.jpg'
import './Projects.css'

const projects = [
  {
    img: PortFolioImage,
    title : 'Personal Portfolio',
    gitHubURL: 'https://github.com/Leonel-Padilla2/portfolio',
    deployedURL: '/',
    sumary: 'This is my personal portfolio which I have developed to show my personal projects, you can contact me and read a bit more about me as well. Developed with React.'
  },
  {
    img: PomodoroImage,
    title : 'Pomodoro Application',
    gitHubURL: 'https://github.com/Leonel-Padilla/fpomodoro',
    sumary: 'Web Pomodoro application which allows users to create a tasks list and check them when he finishes them, also, allows the user to set up his work and rest time. Developed with React.'
  },
  {
    img: RestaurantImage,
    title : 'Restaurant Application',
    gitHubURL: 'https://github.com/Leonel-Padilla/react-restaurante',
    sumary: 'This is a web restaurant application for inventory, user permissions, clients, billing, purchasing, and employees management. Developed with React, Bootstrap and component libraries.'
  }
]

const Projects = () => {
  return (
    <div className='projects-container'>
      <h2>These are the projects I have worked on</h2>        
      <p>
        Every project here helped me to improve my development skills, every single project is totally different from each other, 
        that's why all of them compelled me to investigate, understand and learn new skills and subjects necessary for its development.
      </p>

      <div className='projects-grid'>
        {
          projects.map( project => <ProjectCard key={project.title} project={project}/>)
        }
      </div>
    </div>
  )

}

export default Projects