import React, { useState } from 'react';
import SharedModal from '../../components/common/Modal/SharedModal';
import Input from '../../components/common/Input/Input';
import { Form, Button } from 'react-bootstrap';
import Registration from '../Registration/Registration';
import styles from '../../pages/Login/Login.module.css';
import { Link } from 'react-router-dom';

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

  function handleLogin() {
    // TODO: Implement login logic
  }




  return (
    <div>
      {/* <Button variant="primary" onClick={handleShowModal}>Login</Button> */}
      {/* <SharedModal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="d-flex">
        <div className="w-50 mb-5"> 
        <h1>Login</h1>
        <Form onSubmit={handleLogin}>
        <Input type="text" value={userName} placeholder = "Enter your Username" onChange={handleUserNameChange} />
        <Input  type="password" value={password} placeholder = "Enter your Password" onChange={handlePasswordChange} />
        <Button type="submit" variant="primary">Login</Button>
      </Form>
      <p>Don't have an account?
      <Button variant="primary" onClick={handleRegistrationShowModal}>Register</Button>
      <Registration isOpen={showRegistrationModal} onClose={handleRegistratiionCloseModal} />
        <button variant="link" onClick={handRegistrationClick}>Register here</button>
        </p>
      </div>
        <div className="w-50">This is box 2</div>
      </div>
      </SharedModal> */}


      <SharedModal show={show} onClose={onClose}>
      <div className="d-flex">
        <div className="w-50 mb-5"> 
        <h1>Login</h1>
        <Form onSubmit={handleLogin}>
        <Input type="text" value={userName} placeholder = "Enter your Username" onChange={handleUserNameChange} />
        <Input  type="password" value={password} placeholder = "Enter your Password" onChange={handlePasswordChange} />
        <Button type="submit" variant="primary">Login</Button>
      </Form>
      
      <Button variant="link" onClick={onRegisterClick}> 
      Don't have an account? Register   
        </Button>
      {/* <Button variant="primary" onClick={handleRegistrationShowModal}>Register</Button>
      <Registration isOpen={showRegistrationModal} onClose={handleRegistratiionCloseModal} /> */}
        {/* <button variant="link" onClick={handRegistrationClick}>Register here</button> */}
        
      </div>
        <div className="w-50">This is box 2</div>
      </div>
      </SharedModal>

    </div>
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
