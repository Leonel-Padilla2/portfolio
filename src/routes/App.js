import NavBar from '../components/NavBar/NavBar'
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home'
import Projects from '../pages/Projects/Projects';
import Contact from '../pages/Contact/Contact'
import './App.css'

const App = () => {
  return (
    <div className="app-container">
      <div className="content-container">
        <NavBar/>
          
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
