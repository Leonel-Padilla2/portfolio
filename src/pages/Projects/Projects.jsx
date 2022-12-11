import ProjectCard from '../../components/ProjectCard/ProjectCard'
import PortFolioImage from '../../images/portfolio-image.png'
import PomodoroImage from '../../images/pomodoro-image.png'
import RestaurantImage from '../../images/restaurant-image.jpg'
import EcommerceImage from '../../images/ecommerce-image.png'
import './Projects.css'

/*Array which contains Projects info in order to map it and show them.*/ 
const projects = [
  {
    title : 'E-commerce Application',
    img: EcommerceImage,
    gitHubURL: 'https://github.com/Leonel-Padilla2/E-commerce',
    deployedURL: 'https://leonel-padilla2.github.io/E-commerce',
    sumary: 'E-commerce application where the user can see a list of products from FakeShop API and see more detailed information about every product, the user can add and remove products from the cart, increase and decrese its quantity as well.',
    technologies: ['React', 'Axios', 'Redux', 'React-Redux', 'React-Router', 'Fake Shop API']
  },
  {
    title : 'Personal Portfolio',
    img: PortFolioImage,
    gitHubURL: 'https://github.com/Leonel-Padilla2/portfolio',
    deployedURL: 'https://leonel-padilla2.github.io/portfolio/',
    sumary: 'This is my personal portfolio which I have developed to show my personal projects, you can contact me and read a bit more about me as well.',
    technologies: ['React','React-Router', 'EmailJS Service']
  },
  {
    title : 'Pomodoro Application',
    img: PomodoroImage,
    gitHubURL: 'https://github.com/Leonel-Padilla/fpomodoro',
    sumary: 'Web Pomodoro application which allows users to create a tasks list and check them when he finishes them, also, allows the user to set up his work and rest time.',
    technologies: ['React', 'React-Router']
  },
  {
    title : 'Restaurant Application',
    img: RestaurantImage,
    gitHubURL: 'https://github.com/Leonel-Padilla/react-restaurante',
    sumary: 'This is a web restaurant application for inventory, user permissions, clients, billing, purchasing, and employees management.',
    technologies: ['React', 'Axios', 'React-Router', 'Bootstrap', 'NextUI library']
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