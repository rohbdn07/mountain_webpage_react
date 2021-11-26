import { Container } from '@mui/material';
import React from 'react';
import HeaderLayout from '../../../components/header/layout';
import NavbarLayout from '../../../components/navbar/layout';
import './styles.css';

const LandingPage = () => {
  return (
    <React.Fragment>
      <Container>
        <div className="landing_page">
          <div className="landing_page_header">
            <HeaderLayout />
          </div>
          <div>
            <NavbarLayout />
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default LandingPage;
