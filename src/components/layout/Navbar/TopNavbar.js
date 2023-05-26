import { Link } from "react-router-dom";
import React, { useState } from 'react';
import "./TopNavbar.css";
import { Navbar, Nav, Button, Container} from 'react-bootstrap';
import Login from "../../../pages/Login/Login";
import Registration from "../../../pages/Registration/Registration";

import MobileMenuView from "../MobileMenu/MobileMenuView";
function TopNavbar() {

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleShowLoginModal = () => {setShowLoginModal(true);
    setShowRegisterModal(false)}
  const handleCloseLoginModal = () => setShowLoginModal(false);
  const handleShowRegisterModal = () => {setShowLoginModal(false);
    setShowRegisterModal(true);}
  const handleCloseRegisterModal = () => setShowRegisterModal(false);



    return (
    <div>

<Navbar bg="light" expand="sm">
      <div className="container-fluid">
        <Navbar.Brand href="#">Super Book</Navbar.Brand>

        <div className="d-none d-sm-block">
          <Nav className="me-auto">
            <Nav.Link href="#">Option 1</Nav.Link>
            <Nav.Link href="#">Option 2</Nav.Link>
            <Nav.Link href="#">Option 3</Nav.Link>
          </Nav>
        </div>

        <Nav className="ml-auto d-flex flex-row">
          <Nav.Item className="me-2">
              <Button variant="primary" onClick={handleShowLoginModal}>
        Login
      </Button>
          </Nav.Item>
          <Nav.Item>
          <Button variant="primary" onClick={handleShowRegisterModal}>
        Register
      </Button>
          </Nav.Item>
        </Nav>
      </div>
    </Navbar>
    <Login show={showLoginModal} onClose={handleCloseLoginModal} onRegisterClick={handleShowRegisterModal} />
      <Registration show={showRegisterModal} onClose={handleCloseRegisterModal} onLoginClick={handleShowLoginModal} />
    {/* <div className={`container-fluid d-sm-none  ${styles["custom-container"]}`} >
        <div className="d-flex justify-content-center align-items-center ">
          <div className="row">
            <div className="col">
              <a className="nav-link d-block" aria-current="page" href="#">
                Option 1
              </a>
            </div>
            <div className="col">
              <a className="nav-link d-block" href="#">
                Option 2
              </a>
            </div>
            <div className="col">
              <a className="nav-link d-block" href="#">
                Option 3
              </a>
            </div>
          </div>
        </div>
      </div>  */}

<div className="d-sm-none custom-container" >
<MobileMenuView activeOption="home" />
    
  </div>

       

    </div>
  


    



  );
}

export default TopNavbar;
