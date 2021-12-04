import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/moutain_logo.jpg';
import './styles.css';

const Logo = () => {
  return (
    <React.Fragment>
      <Link to="/">
        <div className="company_logo">
          <img src={logo} alt="Logo" />
        </div>
      </Link>
    </React.Fragment>
  );
};

export default Logo;
