import React, { useState } from 'react';
import casinoImage from '../../../assets/icons/casiono.svg'
import './MobileMenuView.css';
import ExchangeSvg from '../../common/Icons/ExchangeSvg';
import SportsSvg from '../../common/Icons/SportsSvg';
import ProfileSvg from '../../common/Icons/ProfileSvg';
import CasinoSvg from '../../common/Icons/CasinoSvg';
import PromotionSvg from '../../common/Icons/PromotionSvg';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
function MobileMenuView() {
  // const [activeOption, setActiveOption] = useState(null);

  // const handleOptionClick = (option) => {
  //   setActiveOption(option);
  // };

  const [activeTab, setActiveTab] = useState('home');
  const [dropdownVisible, setDropdownVisible] = useState(false);
  let userIsLoggedIn=localStorage.getItem("isUserLoggedIn")
  let loggedInUser=localStorage.getItem("loggedInUser")
  let navigate = useNavigate();

  const handleTabClick = (tab) => {
    if (tab === activeTab) {
      return;
    }
    setActiveTab(tab);
  };

  const handleProfileClick = () => {
    setDropdownVisible(!dropdownVisible);
    // navigate('/login')
  };
  
  const signOut =() => {
    localStorage.clear()
    navigate('/')
  }


  

  return (
    // <div className="fixed-footer">
    //   <div className="options">
    //     <div
    //       className={`option ${activeOption === 'option1' ? 'active' : ''}`}
    //       onClick={() => handleOptionClick('option1')}
    //     >
    //       Option 1
    //     </div>
    //     <div
    //       className={`option ${activeOption === 'option2' ? 'active' : ''}`}
    //       onClick={() => handleOptionClick('option2')}
    //     >
    //       Option 2
    //     </div>
    //     <div
    //       className={`option ${activeOption === 'option3' ? 'active' : ''}`}
    //       onClick={() => handleOptionClick('option3')}
    //     >
    //       Option 3
    //     </div>
    //   </div>
    // </div>

    <>
    <div className="tabbar tab-style1">
      <ul className="flex-center">
        <li
          className={`home ${activeTab === 'home' ? 'active' : ''}`}
          data-where="home"
          data-index="0"
          onClick={() => handleTabClick('home')}
        >

  <ExchangeSvg className="icons" />
          
          <span className='element-text'>Exchange</span>
          
        </li>
        <li
          className={`products ${activeTab === 'products' ? 'active' : ''}`}
       
          onClick={() => handleTabClick('products')}
        >
<SportsSvg className="icons"/>
          <span className='element-text'>Sports</span>
        </li>
       
        <li
          className={`services ${activeTab === 'services' ? 'active' : ''}`}
      
          onClick={() => {handleProfileClick();}}
        >
      
<ProfileSvg className="icons" />
           <span className='element-text'>Profile</span>
           
        </li>

        <li 
          className={`about ${activeTab === 'about' ? 'active' : ''}`}
         
          onClick={() => handleTabClick('about')}
        >
           <CasinoSvg className="icons animated-casino" />
       <span className='element-text'> Casino</span>
        </li>
        <li
          className={`help ${activeTab === 'help' ? 'active' : ''}`}
        
          onClick={() => handleTabClick('help')}
        >
         
<PromotionSvg className="icons" />
           <span className='element-text'>Promotion</span>
        </li>
        {/* <li className="follow"></li> */}
        
      </ul>
      {userIsLoggedIn &&dropdownVisible && (
            <div className="custom-dropdown-menu">
               <span className= "close" onClick={handleProfileClick}>close</span>
               <div className='user'>
               Hello, {loggedInUser}
                <Link to="/user-profile">User Profile</Link>
                <Link to="/account-statement">Account Statement</Link>
              <Link to="/withdraw">Withdraw</Link>
              <Link to="/transaction-history">Transaction History</Link>
              <Link to="/open-bets">Open Bets</Link>
              <Link onClick={signOut}>Sign Out</Link>
             </div>
            </div>
           )}

    </div>
    {/* {showLoginModal && <Login show={showLoginModal} onClose={handleCloseLoginModal} onRegisterClick={handleShowRegisterModal} />} */}
    </>
  
  );
}

export default MobileMenuView;
