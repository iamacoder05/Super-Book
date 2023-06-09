import { Link } from "react-router-dom";
import React, { useState } from 'react';
import "./TopNavbar.css";
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';
import Login from "../../../pages/Login/Login";
import Registration from "../../../pages/Registration/Registration";

import MobileMenuView from "../MobileMenu/MobileMenuView";

import ExchangeSvg from "../../common/Icons/ExchangeSvg";
import SportsSvg from '../../common/Icons/SportsSvg';
import ProfileSvg from '../../common/Icons/ProfileSvg';
import CasinoSvg from '../../common/Icons/CasinoSvg';
import PromotionSvg from '../../common/Icons/PromotionSvg';
import logo from '../../../assets/logo/SUPERBOOK.png';
import LogoSvg from "../../common/Logo/LogoSvg";
import CustomButton from "../../common/CustomButton/CustomButon";
import { useNavigate } from "react-router-dom";

function TopNavbar() {

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  // const [userIsLoggedIn,setShowUserIsLoggedIn] = useState(false);

  const handleShowLoginModal = () => {setShowLoginModal(true);
    setShowRegisterModal(false)};
  const handleCloseLoginModal = () => setShowLoginModal(false);
  const handleShowRegisterModal = () => {setShowLoginModal(false);
    setShowRegisterModal(true);};
  const handleCloseRegisterModal = () => setShowRegisterModal(false);
  let userIsLoggedIn=localStorage.getItem("isUserLoggedIn")
  let loggedInUser=localStorage.getItem("loggedInUser")
  let navigate =useNavigate();
  console.log(userIsLoggedIn);

  const [activeLink, setActiveLink] = useState('');

  const handleNavItemClick = (link) => {
    setActiveLink(link);
  };
  // const handleUserIsLoggedIn = () => {
  //   setShowUserIsLoggedIn(true);
  // }

  const signOut =() => {
    localStorage.clear()
    navigate('/')
    
  }



    return (
    <div>

<Navbar expand="sm" className="custom-navbar">
      <div className="container-fluid">
        <Navbar.Brand href="#">
        <img className="logo" src={logo} alt="logo" />
        {/* <LogoSvg /> */}
          </Navbar.Brand>

        <div className="d-none d-md-block">
          <Nav className="me-auto">
            <Nav.Link className={`nav-element-text me-2 ${activeLink === 'exchange' ? 'active' : ''}`} as={Link} to="/exchange" onClick={() => handleNavItemClick('exchange')}>
            {activeLink === 'exchange' && (
          <ExchangeSvg className="nav-icons" />
    )}
    Exchange</Nav.Link>
            {/* </div> */}
            
 
            
            <Nav.Link className={`nav-element-text me-2 ${activeLink === 'sports' ? 'active' : ''}`} as={Link} to="/sports" onClick={() => handleNavItemClick('sports')}>
            {activeLink === 'sports' && (
         <SportsSvg className="nav-icons"/>
    )}Sports</Nav.Link>

   
            {/* <Nav.Link className={`nav-element-text me-2 ${activeLink === 'profile' ? 'active' : ''}`} onClick={() => handleNavItemClick('profile')}>
            {activeLink === 'profile' && (
      <ProfileSvg className="nav-icons" />
    )}Profile</Nav.Link> */}

    
           
            <Nav.Link className= {`nav-element-text me-2 ${activeLink === 'casino' ? 'active' : ''}`} as={Link} to="/casino" onClick={() => handleNavItemClick('casino')}>
            {activeLink === 'casino' && (
       <CasinoSvg className="nav-icons animated-casino"  />
    )}Casino</Nav.Link>
      
            <Nav.Link className={`nav-element-text me-2 ${activeLink === 'promotion' ? 'active' : ''}`} as={Link} to="/promotion" onClick={() => handleNavItemClick('promotion')}>
            {activeLink === 'promotion' && (
      <PromotionSvg className="nav-icons" />
    )}
           Promotion
           </Nav.Link>
          </Nav>
        </div>
            
      
        {userIsLoggedIn?( <Nav className="ml-auto d-flex flex-row" >
          <Nav.Item className="me-2">
          <Button variant="primary" >
          Wallet
      </Button>
          </Nav.Item>
          <Nav.Item className="me-2">
          <Button variant="primary">
          Deposit
      </Button>
          </Nav.Item>

          <NavDropdown title="Profile" id="basic-nav-dropdown" className="d-none d-md-block" >
          <NavDropdown.Item >Hello, {loggedInUser}</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/user-profile">User Profile</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/account-statement">Account Statement             
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/withdraw" >Withdraw</NavDropdown.Item>
              <NavDropdown.Item as={Link} to= "/transaction-history">Transaction History</NavDropdown.Item>
              <NavDropdown.Item as={Link} to= "/open-bets">Open Bets</NavDropdown.Item>
              <NavDropdown.Item onClick={signOut} >Sign Out</NavDropdown.Item> 
            
          </NavDropdown>
        </Nav>):( <Nav className="ml-auto d-flex flex-row" >
          <Nav.Item className="me-2">
              <CustomButton variant="primary" className='custom-secondary-button' onClick={handleShowLoginModal}>
        Login
      </CustomButton>
          </Nav.Item>
          <Nav.Item>
          <CustomButton variant="primary" className='custom-secondary-button' onClick={handleShowRegisterModal}>
        Register
      </CustomButton>
          </Nav.Item>
        </Nav>)}


      
      </div>
    </Navbar>
    {showLoginModal && <Login show={showLoginModal} onClose={handleCloseLoginModal} onRegisterClick={handleShowRegisterModal} />}
      {showRegisterModal && <Registration show={showRegisterModal} onClose={handleCloseRegisterModal} onLoginClick={handleShowLoginModal} />}
   

<div className="d-md-none custom-container" >
<MobileMenuView activeOption="home" />
    
  </div>

    </div>

  );
}

export default TopNavbar;
