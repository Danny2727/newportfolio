import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helper';

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const[message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleOnBlur = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    // setUserName('');
    // setEmail('');
    // setMessage('');
  };

  return (
    // <div>
    //   <form className="form">
    //     <input
    //       value={email}
    //       name="email"
    //       onChange={handleInputChange}
    //       type="email"
    //       placeholder="email"
    //     />
    //     <input
    //       value={userName}
    //       name="userName"
    //       onChange={handleInputChange}
    //       type="text"
    //       placeholder="username"
    //     />
    //     <input
    //       value={message}
    //       name="message"
    //       onChange={handleInputChange}
    //       type="text"
    //       placeholder="Insert Message Here"
    //     />
    //     <button type="button" onClick={handleFormSubmit}>Submit</button>
    //   </form>
    //   {errorMessage && (
    //     <div>
    //       <p className="error-text">{errorMessage}</p>
    //     </div>
    //   )}
    // </div>

    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={handleOnBlur}
          type="email"
          placeholder="email"/>

      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control  value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="username"/>
          
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3}  value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Insert Message Here" />
      </Form.Group>
    <Button variant="primary" type="submit">
    Submit
  </Button>
  {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </Form>

  );
}

export default Contact;