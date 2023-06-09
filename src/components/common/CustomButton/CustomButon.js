import React from 'react';
import Button from 'react-bootstrap/Button';
import './CustomButton.css'
const CustomButton = ({ onClick, variant, children, className, type, disabled}) => {
    console.log(className);
  return (
    
    <Button variant={variant} onClick={onClick} className={className} type={type} disabled={disabled} >
      {children}
    </Button>
  );
};

export default CustomButton;
