import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/images/moutain_logo.jpg';
import './styles.css';

const Logo = () => {
  let navigate = useNavigate();

  return (
    <React.Fragment>
      <div className="company_logo" onClick={() => navigate('/')}>
        <img src={logo} alt="Logo" />
      </div>
    </React.Fragment>
  );
};

export default Logo;
