import React, { useState } from 'react';
import './MobileMenuView.css';
function MobileMenuView() {
  // const [activeOption, setActiveOption] = useState(null);

  // const handleOptionClick = (option) => {
  //   setActiveOption(option);
  // };

  const [activeTab, setActiveTab] = useState('home');
  

  const handleTabClick = (tab) => {
    if (tab === activeTab) {
      return;
    }
    setActiveTab(tab);
  };
  

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

    <div className="container">
    <div className="tabbar tab-style1">
      <ul className="flex-center">
        <li
          className={`home ${activeTab === 'home' ? 'active' : ''}`}
          data-where="home"
          data-index="0"
          onClick={() => handleTabClick('home')}
        >
          Home
        </li>
        <li
          className={`products ${activeTab === 'products' ? 'active' : ''}`}
       
          onClick={() => handleTabClick('products')}
        >
          Products
        </li>
        <li
          className={`services ${activeTab === 'services' ? 'active' : ''}`}
      
          onClick={() => handleTabClick('services')}
        >
          Services
        </li>
        <li
          className={`about ${activeTab === 'about' ? 'active' : ''}`}
         
          onClick={() => handleTabClick('about')}
        >
          About
        </li>
        <li
          className={`help ${activeTab === 'help' ? 'active' : ''}`}
        
          onClick={() => handleTabClick('help')}
        >
          Help
        </li>
        {/* <li className="follow"></li> */}
        <li></li>
      </ul>
    </div>
  </div>
  );
}

export default MobileMenuView;
