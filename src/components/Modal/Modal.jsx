import './Modal.css'

const Modal = ({ title, children, visible, onClose }) => { 
  return (
    <div className={`modal-overlay ${visible && 'active'}`}>
      <div className='modal-container'>
        <div className='header'>
          <h2>{title}</h2>
          <button 
          className='close-button'
          onClick={onClose}>
            X
          </button>
        </div>
        
        <div className='modal-body'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal