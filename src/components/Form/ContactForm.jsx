import './ContactForm.css'
import Input from '../Input/Input'

const ContactForm = () => {
  
  return (
    <form className='message-form'>
        <h2>Or leave a message</h2>

        <Input
          label='Name'
          placeholder='Name'
          type='text'
          errorMessage='This field is required and must contain a valid name: "First and last name" 3-20 characters'
          required
          pattern='^[A-za-z ]{3,20}'
        />
        <Input 
          label='Company'
          placeholder='Company Name (Optional)'
          type='text'
        />

        <Input
          textarea
          label='Message'
          placeholder='Message Here'
          required
          errorMessage='This field is required.'
        />

        <button className='button'>Send</button>
      </form>
  )
}

export default ContactForm