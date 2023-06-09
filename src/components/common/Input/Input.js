import React, { useState } from 'react';
// import styles from './Input.module.css';
import { Form } from 'react-bootstrap';
import indiaFlag from '../../../assets/flags/in.png';
import sriLankaFlag  from '../../../assets/flags/lk.png';
import bangladeshFlag  from '../../../assets/flags/bd.png';
import dropDownIcon from '../../../assets/flags/down-arrow.png';
import './Input.css';

function Input(props) {
  const { label, type, value, onChange, placeholder, isInvalid, errorMessage, onBlur, passwordRequirements,handleCountryCode} = props;


  const [countryCode, setCountryCode] = useState('in');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);



  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    console.log(showPassword)
  };

  const getToggleIcon = () => {
    if (showPassword) {
      console.log("show")
      return (
        <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
          &#128065; {/* Unicode for "Eye" symbol (open) */}
        </span>
      );
    } else {
      console.log("noshow")
      return (
        <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
          &#128064; {/* Unicode for "Eye" symbol (closed) */}
        </span>
      );
    }
  };



  const countriesData = [
    {
      code: 'in',
      name: 'India',
      dialCode: '+91',
    },
    {
      code: 'lk',
      name: 'Sri Lanka',
      dialCode: '+94',
    },
    {
      code: 'bd',
      name: 'Bangladesh',
      dialCode: '+880',
    },
    // Add more country objects as needed
  ];

  const handleFlagClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleCountrySelect = (code,dialCode) => {
    setCountryCode(code);
    handleCountryCode(dialCode);
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

  const getInputType = () => {
    if (type === 'password') {
      return showPassword ? 'text' : 'password';
    } else {
      return 'text';
    }
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{6,}$/;
    return regex.test(password);
  };

  const renderInputField = () => {
    if (type === 'tel') {
      return (
        <div>
        <div className="input-field mb-3">
          <div className='icon-image'  onClick={handleFlagClick} >
          <img src={getFlagImage(countryCode)} alt={countryCode} className='active-icon' />
          <img src={dropDownIcon} className='drop-down-icon' alt="hi"/>
          </div>
          <Form.Control
            type="tel"
            value={value}
            onChange={onChange}
            className='custom-form-control'
            // isInvalid={isInvalid}
            onBlur={onBlur}
          />
          <Form.Label className="label">{placeholder}</Form.Label>
         
          {dropdownOpen && (
            <div className="country-options">
              {countriesData.map((country) => (
                <div key={country.code} onClick={() => handleCountrySelect(country.code,country.dialCode)}>
                  <img src={getFlagImage(country.code)} alt={country.code} />
                  {`${country.name} (${country.dialCode})`}
                </div>
              ))}
            </div>
          )}
        </div>
        {isInvalid && <div className="error-message">{errorMessage}</div>}
        </div>
      );
    } else {
      return (
        <div>
        <div className="input-field mb-3 ">
          <Form.Label className="label">{placeholder}</Form.Label>
        <Form.Control
          type={getInputType()}
          
          onChange={onChange}
          // className='custom-form-control'
          className={`custom-form-control ${isInvalid ? 'custom-invalid-input' : ''}`}
        
          onBlur={onBlur}
          
        />
        {type === 'password' && (
          <div className="password-toggle" onClick={togglePasswordVisibility}>
            {getToggleIcon()}
          </div>
        )}
       
        </div>
        {/* {isInvalid && (
          <Form.Control.Feedback type="invalid">{errorMessage}</Form.Control.Feedback>
        )}
       */}
        {isInvalid && <div className="error-message">{errorMessage}</div>}
        {type === 'password' && value.length > 0 && !validatePassword(value) && (
          <Form.Text className="text-muted">{passwordRequirements}</Form.Text>
        )}
        
        </div>
      );
    }
  };

  return <Form.Group>{renderInputField()}</Form.Group>;

    
//     <Form.Group className="mb-3">
//     {type === 'tel' ? (
        
//         <div className="phone-number-input">
//       <div className="input-group">
//         <div className="input-group-prepend" onClick={handleFlagClick}>
//           {/* Display the selected country flag */}
//           <img className="flag-icon" src={getFlagImage(countryCode)} alt={countryCode} />
//           {/* Display the dropdown icon */}
//           <span className={`dropdown-icon ${dropdownOpen ? 'open' : ''}`}>&#9662;</span>
//         </div>
//         <Form.Control
//           type={type}
//           value={value}
//           onChange={onChange}
//           placeholder={placeholder}
//           className="form-control-rounded "
//         />
//       </div>
//       {dropdownOpen && (
//         <div className="country-options">
//           {countriesData.map((country) => (
//             <div
//               key={country.code}
//               onClick={() => handleCountrySelect(country.code)}
//             >
//               <img src={getFlagImage(country.code)} alt={country.code} />
//               {`${country.name} (+${country.dialCode})`}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//       ) : (
  
//   <Form.Control type={type} value={value} onChange={onChange} placeholder={placeholder} size="lg" className='form-control-rounded'/>
//   )}
// </Form.Group>


}

export default Input;
