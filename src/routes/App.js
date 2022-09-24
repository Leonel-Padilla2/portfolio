import NavBar from '../components/NavBar/NavBar'
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home'
import Contact from '../pages/Contact/Contact'
import './App.css'

const App = () => {
  return (
    <div className="app-container">
      <div className="content-container">
        <NavBar/>
          
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<h1>Projects Page</h1>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
