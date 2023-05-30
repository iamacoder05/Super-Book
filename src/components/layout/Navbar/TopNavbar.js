import { Link } from "react-router-dom";
import React, { useState } from 'react';
import "./TopNavbar.css";
import { Navbar, Nav, Button, Container} from 'react-bootstrap';
import Login from "../../../pages/Login/Login";
import Registration from "../../../pages/Registration/Registration";

import MobileMenuView from "../MobileMenu/MobileMenuView";

import ExchangeSvg from "../../common/Icons/ExchangeSvg";
import SportsSvg from '../../common/Icons/SportsSvg';
import ProfileSvg from '../../common/Icons/ProfileSvg';
import CasinoSvg from '../../common/Icons/CasinoSvg';
import PromotionSvg from '../../common/Icons/PromotionSvg';
function TopNavbar() {

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleShowLoginModal = () => {setShowLoginModal(true);
    setShowRegisterModal(false)}
  const handleCloseLoginModal = () => setShowLoginModal(false);
  const handleShowRegisterModal = () => {setShowLoginModal(false);
    setShowRegisterModal(true);}
  const handleCloseRegisterModal = () => setShowRegisterModal(false);

  const [activeLink, setActiveLink] = useState('');

  const handleNavItemClick = (link) => {
    setActiveLink(link);
  };



    return (
    <div>

<Navbar expand="sm" className="custom-navbar">
      <div className="container-fluid">
        <Navbar.Brand href="#">Super Book</Navbar.Brand>

        <div className="d-none d-md-block">
          <Nav className="me-auto">
            <Nav.Link className={`nav-element-text me-2 ${activeLink === 'exchange' ? 'active' : ''}`} as={Link} to="/casino" onClick={() => handleNavItemClick('exchange')}>
            {activeLink === 'exchange' && (
          <ExchangeSvg className="nav-icons" />
    )}
    Exchange</Nav.Link>
            {/* </div> */}
            
 
            
            <Nav.Link className={`nav-element-text me-2 ${activeLink === 'sports' ? 'active' : ''}`}  onClick={() => handleNavItemClick('sports')}>
            {activeLink === 'sports' && (
         <SportsSvg className="nav-icons"/>
    )}Sports</Nav.Link>

   
            <Nav.Link className={`nav-element-text me-2 ${activeLink === 'profile' ? 'active' : ''}`} onClick={() => handleNavItemClick('profile')}>
            {activeLink === 'profile' && (
      <ProfileSvg className="nav-icons" />
    )}Profile</Nav.Link>

    
           
            <Nav.Link className= {`nav-element-text me-2 ${activeLink === 'casino' ? 'active' : ''}`} onClick={() => handleNavItemClick('casino')}>
            {activeLink === 'casino' && (
       <CasinoSvg className="nav-icons animated-casino"  />
    )}Casino</Nav.Link>
      
            <Nav.Link className={`nav-element-text me-2 ${activeLink === 'promotion' ? 'active' : ''}`} onClick={() => handleNavItemClick('promotion')}>
            {activeLink === 'promotion' && (
      <PromotionSvg className="nav-icons" />
    )}
           Promotion
           </Nav.Link>
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

<div className="d-md-none custom-container" >
<MobileMenuView activeOption="home" />
    
  </div>

    </div>

  );
}

export default TopNavbar;
