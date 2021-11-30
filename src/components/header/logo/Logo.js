import React from 'react';
import logo from '../../../assets/images/moutain_logo.jpg';
import './styles.css';

const Logo = () => {
  return (
    <React.Fragment>
      <div className="company_logo">
        <img src={logo} alt="Logo" />
      </div>
    </React.Fragment>
  );
};

export default Logo;
