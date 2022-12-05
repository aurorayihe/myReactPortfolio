import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Check to see if the email is not valid or if the userName is empty. If so, set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }

    // Check to see if the name or message is empty. If so, set an error message to be displayed on the page.
    if (!message || !name) {
      setErrorMessage('Please enter your message!');
      return;
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <h1>Contact Page</h1>
      <form className='form'>
        <p>Name:</p>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <p>Email:</p>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <p>Message:</p>
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
          placeholder="message"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {setErrorMessage && (
        <div>
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
