import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import contactImg from '../assets/images/email.png';
import { Typography } from '@mui/material';

export default function Contact(){

  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Message, setMessage] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'Name') {
      setName(value);
      setNameError(value ? '' : 'Enter your name');
    } else if (name === 'Email') {
      setEmail(value);
      setEmailError(emailRegex.test(value) ? '' : 'Enter a valid email address');
    } else if (name === 'Message') {
      setMessage(value);
      setMessageError(value ? '' : 'Enter your message');
    }
  }

  const submitForm =(e) =>{
    e.preventDefault();

    if (!Name) {
      setNameError('Enter your name');
    }
    if (!Email) {
      setEmailError('Enter your email address');
    }
    if (!Message) {
      setMessageError('Enter your message');
    }
  
    if (!emailError && Name && Email && Message) {
      setName('');
      setEmail('');
      setMessage('');
    }
  }

  return (
    <section className='contactContainer'>
      <h2>Contact</h2>
      <div className='row'>
        <form className="col" onSubmit={submitForm}>
          <TextField
            label="Name"
            name="Name"
            value={Name}
            onChange={handleInputChange}
            error={Boolean(nameError)}
            helperText={nameError}
            InputProps={{
              style: {
                color: 'white',
              },
            }}
          />

          <TextField
            label="Email address"
            name="Email"
            value={Email}
            onChange={handleInputChange}
            error={Boolean(emailError)}
            helperText={emailError}
            InputProps={{
              style: {
                color: 'white',
              },
            }}
          />

          <TextField
            label="Message"
            name="Message"
            multiline
            rows={8}
            value={Message}
            onChange={handleInputChange}
            error={Boolean(messageError)}
            helperText={messageError}
            InputProps={{
              style: {
                color: 'white',
              },
            }}
          />

          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
        <div className="imageColumn">
          <img src={contactImg} alt="contact image"/>
        </div>
      </div>
    </section>
  );
};