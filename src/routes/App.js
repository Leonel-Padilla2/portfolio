import NavBar from '../components/NavBar/NavBar'
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home'
import Projects from '../pages/Projects/Projects';
import Contact from '../pages/Contact/Contact'
import './App.css'
import { useContext } from 'react';
import { ModalContext } from '../contexts/ModalContext';
import Modal from '../components/Modal/Modal'

const App = () => {
  const {modalData, onClose} = useContext(ModalContext)
  const {visible, title, message} = modalData

  return (
    <div className="app-container">
      <Modal 
        title={title}
        visible={visible}
        onClose={onClose}
      >
        {message}
      </Modal>

      <div className="content-container">
        <NavBar/>
          
        <Routes>
          <Route path='/portfolio' element={<Home/>}/>
          <Route path='/portfolio/projects' element={<Projects/>}/>
          <Route path='/portfolio/contact' element={<Contact/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
