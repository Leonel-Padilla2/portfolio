import './ContactForm.css'
import emailjs from '@emailjs/browser';
import Input from '../Input/Input'
import Button from '../Button/Button'
import { useRef } from 'react'

/*Array which contains inputs info in order to map it and show them.*/ 
const inputs = [
  {
    name : 'user_name',
    label: 'Name',
    placeholder : 'Name',
    type : 'text',
    errorMessage : 'This field is required and must contain a valid name: "First and last name" 3-20 characters',
    required : true,
    pattern : '^[A-za-z ]{3,20}',
  },
  {
    name : 'user_email',
    label : 'Email',
    placeholder : 'Email',
    type : 'email',
    errorMessage : 'You must provide a valid Email',
    required : true,
  },
  {
    name : 'message',
    label : 'Message',
    placeholder : 'Message Here',
    textarea: true,
    required : true,
    errorMessage : 'This field is required.',
  }
]

const ContactForm = () => {
  /*Form Ref, using uncontrolled form because the emailJS documentation recommends it.*/
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_28gxw4a', 'template_zu8pyxo', form.current, 'cYn8PguqtTvgvwUmo')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
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
          inputs.map( input => <Input key={input.name} {...input} />)
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