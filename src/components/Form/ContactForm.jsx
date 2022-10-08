import './ContactForm.css'
import Input from '../Input/Input'
import Button from '../Button/Button'

const ContactForm = () => {
  
  return (
    <form className='message-form'>
        <h2>Or leave a message</h2>

        <Input
          className='form-input'
          label='Name'
          placeholder='Name'
          type='text'
          errorMessage='This field is required and must contain a valid name: "First and last name" 3-20 characters'
          required
          pattern='^[A-za-z ]{3,20}'
        />
        <Input 
          className='form-input'
          label='Company'
          placeholder='Company Name (Optional)'
          type='text'
        />

        <Input
          className='form-textarea'
          textarea
          label='Message'
          placeholder='Message Here'
          required
          errorMessage='This field is required.'
        />

        <Button 
         className='form-button'
        >
          Send Message
        </Button>
      </form>
  )
}

export default ContactForm