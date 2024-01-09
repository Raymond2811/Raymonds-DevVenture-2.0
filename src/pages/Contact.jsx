import { useState } from 'react';

export default function Contact(){

  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Message, setMessage] = useState('');
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'Name') {
      setName(value);
    } else if (name === 'Email') {
      setEmail(value);
    } else if (name === 'Message') {
      setMessage(value);
    }
  }

  const submitForm =(e) =>{
    e.preventDefault();
  
      setName('');
      setEmail('');
      setMessage('');
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

        <h2>Email address:</h2>
        <input
          name='Email'
          value={Email}
          onChange={handleInputChange}
          type="text"
        />

        <h2>Message:</h2>
        <input
          name='Message'
          value={Message}
          onChange={handleInputChange}
          type="text"
        />

        <button type="submit" className="btn btn-dark">
          Submit
        </button>
      </form>

    </div>
  );
};