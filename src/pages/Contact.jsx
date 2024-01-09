import { useState } from 'react';

export default function Contact(){

  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Message, setMessage] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'Name') {
      setName(value);
      setNameError(value ? '' : 'Enter your name');
    } else if (name === 'Email') {
      setEmail(value);
      setEmailError(value ? '' : 'Enter your email address');
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
  
    if (Name && Email && Message) {
      setName('');
      setEmail('');
      setMessage('');
    }
  }

  return (
    <div>
      <h1>Contact</h1>
      
      <form onSubmit={submitForm}>
        <h2>Name:</h2>
        <input
          name='Name'
          value={Name}
          onChange={handleInputChange}
          type="text"
        />
        {nameError && <p className="error">{nameError}</p>}

        <h2>Email address:</h2>
        <input
          name='Email'
          value={Email}
          onChange={handleInputChange}
          type="text"
        />
        {emailError && <p className="error">{emailError}</p>}

        <h2>Message:</h2>
        <input
          name='Message'
          value={Message}
          onChange={handleInputChange}
          type="text"
        />
        {messageError && <p className="error">{messageError}</p>}

        <button type="submit" className="btn btn-dark">
          Submit
        </button>
      </form>

    </div>
  );
};