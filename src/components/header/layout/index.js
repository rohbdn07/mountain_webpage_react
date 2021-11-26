import React from 'react';
import Container from '@mui/material/Container';
import CompanyName from '../title/CompanyName';
import Logo from '../logo/Logo';
import './styles.css';

const HeaderLayout = () => {
  return (
    <React.Fragment>
      <Container maxWidth="xl">
        <div className="headerlayout_container">
          <div className="headerlayout_banner">
            <div className="banner_left">
              <Logo />
              <CompanyName />
            </div>
            <div className="banner_right">
              <Logo />
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default HeaderLayout;
