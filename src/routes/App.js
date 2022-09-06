import NavBar from '../components/NavBar/NavBar'
import { Routes, Route } from 'react-router-dom';
import './App.css'

const App = () => {
  return (
    <div className="app-container">
      <div className="content-container">
        <NavBar/>
          
        <Routes>
          <Route path='/' element={<h1>Home Page</h1>}/>
          <Route path='/projects' element={<h1>Projects Page</h1>}/>
          <Route path='/contact' element={<h1>Get in touch Page</h1>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
