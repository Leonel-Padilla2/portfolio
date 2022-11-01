import './ContactForm.css'
import emailjs from '@emailjs/browser';
import Input from '../Input/Input'
import Button from '../Button/Button'
import { useRef } from 'react'
import { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import { useNavigate } from 'react-router-dom';

/*Array which contains inputs info in order to map it and show them.*/ 
const inputs = [
  {
    name : 'user_name',
    label: 'Name',
    placeholder : 'Name',
    type : 'text',
    errorMessage : 'This field is required and must contain a valid name: "First and last name".',
    required : true,
    pattern : "^(([a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð,.'-]{3,20}) ?){1,2}$",
  },
  {
    name : 'user_email',
    label : 'Email',
    placeholder : 'Email',
    type : 'email',
    errorMessage : 'You must provide a valid Email.',
    required : true,
  },
  {
    name : 'message',
    label : 'Message',
    placeholder : 'Message Here',
    textarea: true,
    required : true,
    errorMessage : 'This field is required and must contain a valid message.',
    pattern : "^(([a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð,.'-¿?¡!]{1,}) ?){1,}$",
  }
]

const ContactForm = () => {
  /*Form Ref, using uncontrolled form because the emailJS documentation recommends it.*/
  const form = useRef();
  const {setModalData, setOnClose} = useContext(ModalContext)
  const navigate = useNavigate()

  const modalOnClose = () => {
    setModalData(current => ({current, visible: false}))
    navigate('/')
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_28gxw4a', 'template_zu8pyxo', form.current, 'cYn8PguqtTvgvwUmo')
    .then(() => {
      setOnClose(()=>modalOnClose)
      setModalData({
        visible: true, 
        title: 'Thanks for writting', 
        message: 'Message sent successfully, I will get in touch with you as soon as posible.'
      })
    }, () => {
      setModalData({visible: true, title: 'Error', message: 'Sorry, there was an error, try again'})
    });
  };
  
  return (
    <form 
      className='message-form'
      onSubmit={handleSubmit} 
      ref={form}
    >
        <h2>Or leave a message</h2>
        {
          inputs.map( input => <Input className='form-input' key={input.name} {...input} />)
        }
        <Button 
         className='form-button'
        >
          Send Message
        </Button>
      </form>
  )
}

export default ContactForm