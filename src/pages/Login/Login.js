import React, { useState } from 'react';
import SharedModal from '../../components/common/Modal/SharedModal';
import Input from '../../components/common/Input/Input';
import {  Container, Row, Col, Form, Button } from 'react-bootstrap';
import CustomButton from '../../components/common/CustomButton/CustomButon';
import axios from 'axios';



function Login({show ,onClose, onRegisterClick }) {
  // const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  // const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [showRegistrationModal, setRegistrationShowModal] = useState(false);
  // function handleShowModal() {
  //   console.log("hi")
  //   setShowModal(true);
  // }

  // function handleCloseModal() {
  //   setShowModal(false);
  // }

  function handleUserNameChange(event) {
    setUserName(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  // function handRegistrationClick (){
  //   setShowRegistrationModal(true);
  // };
  function handleRegistrationShowModal() {
    console.log("he")
    setRegistrationShowModal(true);
  }

  function handleRegistratiionCloseModal() {
    setRegistrationShowModal(false);
  }

  async function handleLogin(e) {
    // TODO: Implement login logic
    console.log("login")
    e.preventDefault();

   
    let body={
      username:userName,
      password:password
    }
    const response = await axios.post('http://localhost:3000/login',body);
    onClose();
    if(response.data.statusCode){
      localStorage.setItem("isUserLoggedIn",true)
      localStorage.setItem("loggedInUser",userName)
    }
    console.log(body,response.data)
  }




  return (
    <>
  

      <SharedModal show={show} onClose={onClose}>
      <Container>
      <Row>
      <Col md={6} className="mb-5"> 
        <h1>Login</h1>
        <Form onSubmit={handleLogin}>
        <Input type="text" value={userName} placeholder = "Enter your Username" onChange={handleUserNameChange} />
        <Input  type="password" value={password} placeholder = "Enter your Password" onChange={handlePasswordChange} />
        <CustomButton type="submit" variant="primary" className="custom-primary-button">Login</CustomButton>
      </Form>
      <div className='member mt-2'>  Already have an account?
      <CustomButton variant="link" className="custom-link-button" onClick={onRegisterClick}> 
      Register   
        </CustomButton>
        </div>
        </Col>
      
        <Col md={6} className="d-none d-md-block">This is box 2</Col>
      </Row>
      </Container>
      </SharedModal>

    </>
  );
}

export default Login;








// import React, { useState } from 'react';
// import SharedModal from '../../components/common/Modal/SharedModal';
// import Input from '../../components/common/Input/Input';
// import { Form, Button } from 'react-bootstrap';
// import Registration from '../Registration/Registration';
// import styles from '../../pages/Login/Login.module.css';

// function Login(props) {
//   const [showModal, setShowModal] = useState(false);
//   const [userName, setUserName] = useState('');
//   const [password, setPassword] = useState('');

//   function handleShowModal() {
//     console.log("hi")
//     setShowModal(true);
//   }

//   function handleCloseModal() {
//     setShowModal(false);
//   }

//   function handleUserNameChange(event) {
//     setUserName(event.target.value);
//   }

//   function handlePasswordChange(event) {
//     setPassword(event.target.value);
//   }

//   function handleLogin() {
//     // TODO: Implement login logic
//   }

//   return (
//     <div>
//       {/* <Button variant="primary" onClick={handleShowModal}>Login</Button> */}
//       <SharedModal isOpen={showModal} onClose={handleCloseModal}>
//       <div className="d-flex">
//         <div className="w-50 mb-5"> 
//         <h1>Login</h1>
//         <Form onSubmit={handleLogin}>
//         <Input type="text" value={userName} placeholder = "Enter your Username" onChange={handleUserNameChange} />
//         <Input  type="password" value={password} placeholder = "Enter your Password" onChange={handlePasswordChange} />
//         <Button type="submit" variant="primary">Login</Button>
//       </Form>
//       Don't have an account?<span className={styles["custom-Register-link"]}><Registration /></span>
//       </div>
//         <div className="w-50">This is box 2</div>
//       </div>
//       </SharedModal>
//     </div>
//   );
// }

// export default Login;
