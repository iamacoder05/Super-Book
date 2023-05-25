import React, { useState } from 'react';
import SharedModal from '../../components/common/Modal/SharedModal';
import Input from '../../components/common/Input/Input';
import { Form, Button } from 'react-bootstrap';
function Registration({show, onClose, onLoginClick }) {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] =useState('');
  const [isTouched, setIsTouched] = useState({
    userName: false,
    password: false,
    phoneNumber: false,
  });

  const handleInputChange = (e, fieldName) => {
    const value = e.target.value;
    setIsTouched((prevTouched) => ({ ...prevTouched, [fieldName]: true }));

    switch (fieldName) {
      case 'userName':
        setUserName(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'phoneNumber':
        setPhoneNumber(value);
        break;
      default:
        break;
    }
  };


  const handleInputBlur = (fieldName) => {
    setIsTouched((prevTouched) => ({ ...prevTouched, [fieldName]: true }));
  };

  const validateForm = () => {
    // Perform validation logic here
    let isValid = true;

    if (!userName.trim()) {
      isValid = false;
    }

    if (!password.trim()) {
      isValid = false;
    }

    if (!phoneNumber.trim()) {
      isValid = false;
    }

    return isValid;
  };

  const isInvalid = (fieldName) => isTouched[fieldName] && !eval(fieldName).trim();
console.log(isTouched["userName"],isInvalid(userName))
  const getPasswordRequirements = () => {
    return (
      <div>
        <p>Password must meet the following requirements:</p>
        <ul>
          {/* <li>At least 8 characters long</li>
          <li>Contains at least one uppercase letter</li>
          <li>Contains at least one lowercase letter</li>
          <li>Contains at least one digit</li>
          <li>Contains at least one special character</li> */}
        </ul>
      </div>
    );
  }
 
  function handleUserNameChange(event) {
    setUserName(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleNumberChange(event) {
    setPhoneNumber(event.target.value);
  }

  function handleRegistration(e) {
    e.preventDefault();
    setIsTouched({
      userName: true,
      password: true,
      phoneNumber: true,
    });
  
    validateForm();
    if (validateForm()) {
      // Register the user
      // ...
      // Close the modal
     console.log("hi")
    }
    // TODO: Implement login logic
  }


  const handleCloseModal = () => {
    setUserName('');
    setPassword('');
    setPhoneNumber('');
    setIsTouched({
      userName: false,
      password: false,
      phoneNumber: false,
    });
    onClose();
  };


  return (
    <div>
   

<SharedModal show={show} onClose={handleCloseModal}>
      <div className="d-flex">
        <div className="w-50 mb-5"> 
        <h1>Register</h1>
        <Form onSubmit={handleRegistration}>
        <Input type="text" value={userName} placeholder = "Enter your Username"  onChange={(e) => handleInputChange(e, 'userName')} isInvalid={isInvalid('userName')} errorMessage={isInvalid('userName') ? 'Please enter your name.' : ''}  onBlur={() => handleInputBlur('userName')}/>
        <Input  type="password" value={password} placeholder = "Enter your Password" onChange={(e) => handleInputChange(e, 'password')} isInvalid={isInvalid('password')}   errorMessage={isInvalid('password') ? 'Please enter a password.' : ''} passwordRequirements={getPasswordRequirements()} onBlur={() => handleInputBlur('password')}/>
        <Input  type="tel" value={phoneNumber} placeholder = "Enter your Phone Number" onChange={(e) => handleInputChange(e, 'phoneNumber')} isInvalid={isInvalid('phoneNumber')} errorMessage={isInvalid('phoneNumber') ? 'Please enter valid number.' : ''}  onBlur={() => handleInputBlur('phoneNumber')}/>
        <Button type="submit" variant="primary">Register</Button>
        <Button variant="link" onClick={onLoginClick}>
          Already have an account? Login
        </Button>
      </Form></div>
        <div className="w-50">This is box 2</div>
      </div>
      </SharedModal>


    </div>
  );
}

export default Registration;
