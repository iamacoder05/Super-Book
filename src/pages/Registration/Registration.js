import React, { useState,useEffect } from 'react';
import SharedModal from '../../components/common/Modal/SharedModal';
import Input from '../../components/common/Input/Input';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import OtpInput from 'react-otp-input';
import axios from 'axios';
import CustomButton from '../../components/common/CustomButton/CustomButon';

import './Registration.css';
function Registration({show, onClose, onLoginClick }) {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] =useState('');
  const [isTouched, setIsTouched] = useState({
    userName: false,
    password: false,
    phoneNumber: false,
  });
  const [registrationCompleted, setRegistrationCompleted] = useState(false);
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(0);
  const [retryCount, setRetryCount] = useState(0);
  const [selectedCountryCode,setSelectedCountryCode] = useState()

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleCountryCode =(selectedCountryCode)=>{
    setSelectedCountryCode(selectedCountryCode)

  }

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
 
  // function handleUserNameChange(event) {
  //   setUserName(event.target.value);
  // }

  // function handlePasswordChange(event) {
  //   setPassword(event.target.value);
  // }

  // function handleNumberChange(event) {
  //   setPhoneNumber(event.target.value);
  // }

  async function handleRegistration(e) {
    e.preventDefault();
    setIsTouched({
      userName: true,
      password: true,
      phoneNumber: true,
    });
  
    // validateForm();
    if (validateForm()) {
      // Register the user
      // ...
      // Close the modal
      let body={
        userName: userName,
        countryCode: selectedCountryCode?selectedCountryCode:"+91",
        phoneNumber : phoneNumber,
        password: password
    }
    console.log("hi",body)

try{
  const response = await axios.post('http://localhost:3000/sendOTPUser',body)
  console.log(response.data)

}
catch(error){
  console.log("error")
}
    
      setRegistrationCompleted(true);
    
    }
    // TODO: Implement login logic
  }


  const handleVerify = async() => {
    let body={
      countryCode: selectedCountryCode?selectedCountryCode:"+91",
      phoneNumber : phoneNumber,
      otp:otp
  }
  try{
    const response = await axios.post('http://localhost:3000/register',body)
    console.log('OTP:', response.data); 
  }
  catch(error){
    console.log(error)
  }

    onClose();
  };

  const handleResendCode = () => {
    if (retryCount < 3) {
      // Resend the verification code
      setTimer(60);
      setRetryCount((prevCount) => prevCount + 1);
      setOtp('');
      console.log('Resend Verification Code');
    } else {
      console.log('Maximum retry count reached');
    }
  };


  const handleCloseModal = () => {
    setUserName('');
    setPassword('');
    setPhoneNumber('');
    setIsTouched({
      userName: false,
      password: false,
      phoneNumber: false,
    });
    setRegistrationCompleted(false);
    setOtp('');
    onClose();
    setTimer(0);
    setRetryCount(0);
  };

  const isVerifyButtonDisabled = otp.length !== 6;


  return (
    <>
   

<SharedModal show={show} onClose={handleCloseModal}>
      {/* <div className="d-flex">
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
        <div className="w-50 d-none d-md-block">This is box 2</div>
      </div> */}
      {registrationCompleted ? (
          <Container>
            <Row>
              <Col md={6} className="mb-5">
                <h3>Verify Phone Number</h3>
                <span >An OTP has been sent to your entered number {phoneNumber}</span><br></br>
                <span className='center-item'>Enter your code here</span> 
               
                <Form>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  renderSeparator={<span>-</span>}
                  renderInput={(props) => <input {...props} />}
                  containerStyle="otp-container" // Add the className prop
                  inputStyle="otp-input" // Add the inputClassName prop
    />
                  <CustomButton type="button" className="custom-primary-button" variant="primary" onClick={handleVerify} disabled={isVerifyButtonDisabled}>
                    Verify
                  </CustomButton>
                  {timer > 0 ? (
                    <p>
                      Resend code available in <strong>{timer} seconds</strong>
                    </p>
                  ) : (
                    <div className='resend-button'>
                    <CustomButton type="button" className='custom-link-button ' variant="link" onClick={handleResendCode}>
                      Resend code
                    </CustomButton>
                    </div>
                  )}
                </Form>




                {/* OTP input form */}
              </Col>
              <Col md={6} className="d-none d-md-block">
        This is box 2
      </Col>
            </Row>
          </Container>
        ) : (

 <Container>
    <Row>
      <Col md={6} className="mb-5"> 
        {/* <h1 className='h1'>Register</h1> */}
        <Form onSubmit={handleRegistration}>
        <Input type="text" value={userName} placeholder = "Enter your Username"  onChange={(e) => handleInputChange(e, 'userName')} isInvalid={isInvalid('userName')} errorMessage={isInvalid('userName') ? 'Please enter your name.' : ''}  onBlur={() => handleInputBlur('userName')}/>
        <Input  type="password" value={password} placeholder = "Enter your Password" onChange={(e) => handleInputChange(e, 'password')} isInvalid={isInvalid('password')}   errorMessage={isInvalid('password') ? 'Please enter a password.' : ''} passwordRequirements={getPasswordRequirements()} onBlur={() => handleInputBlur('password')}/>
        <Input  type="tel" value={phoneNumber} placeholder = "Enter your Phone Number" onChange={(e) => handleInputChange(e, 'phoneNumber')} isInvalid={isInvalid('phoneNumber')} errorMessage={isInvalid('phoneNumber') ? 'Please enter valid number.' : ''}  onBlur={() => handleInputBlur('phoneNumber')} handleCountryCode={handleCountryCode}/>
        <CustomButton type ="submit" variant="primary" className="custom-primary-button">Register</CustomButton>
          {/* <Button type="submit" variant="primary">Register</Button> */}
        </Form>
        <div className='member mt-2'>  Already have an account?
        <CustomButton variant="link" className="custom-link-button" onClick={onLoginClick}>
           Login
          </CustomButton>
          </div>
      </Col>
      <Col md={6} className="d-none d-md-block">
        This is box 2
      </Col>
    </Row>
  </Container>
        )}
      </SharedModal>


    </>
  );
}

export default Registration;
