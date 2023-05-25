import React, { useState } from 'react';

// import 'react-flag-select/css/react-flag-select.css';
import indiaFlag from '../../assets/flags/in.png';
import sriLankaFlag  from '../../assets/flags/lk.png';
import bangladeshFlag  from '../../assets/flags/bd.png';
import './PhoneNumberInput.css';
function PhoneNumberInput() {
  const [countryCode, setCountryCode] = useState('in');
  const [dropdownOpen, setDropdownOpen] = useState(false);


  const countriesData = [
    {
      code: 'in',
      name: 'United States',
      dialCode: '91',
    },
    {
      code: 'lk',
      name: 'Sri Lanka',
      dialCode: '94',
    },
    {
      code: 'bd',
      name: 'Bangladesh',
      dialCode: '880',
    },
    // Add more country objects as needed
  ];

  const handleFlagClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleCountrySelect = (code) => {
    setCountryCode(code);
    setDropdownOpen(false);
  };

 
  const getFlagImage = (code) => {
    switch (code) {
      case 'in':
        return indiaFlag;
      case 'lk':
        return sriLankaFlag;
        case 'bd':
          return bangladeshFlag;
      // Add more cases for other country codes if needed
      default:
        return null;
    }
  };

  return (
    <div>
      <input
        type="text"
        value={countryCode}
        onChange={(e) => setCountryCode(e.target.value)}
        placeholder="Enter phone number"
      />
      <div className="flag-dropdown">
        <div className="selected-flag" onClick={handleFlagClick}>
          {/* Display the selected country flag */}
          <img src={getFlagImage(countryCode)} alt={countryCode} />
          {/* Display the dropdown icon */}
          <span className={`dropdown-icon ${dropdownOpen ? 'open' : ''}`}>&#9662;</span>
        </div>
        {dropdownOpen && (
          <div className="country-options">
            {countriesData.map((country) => (
              <div
                key={country.code}
                onClick={() => handleCountrySelect(country.code)}
              >
                <img src={getFlagImage(country.code)} alt={country.code} />
                {`${country.name} (+${country.dialCode})`}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>



    
    );
  }
  
  export default PhoneNumberInput;