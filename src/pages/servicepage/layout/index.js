import React from 'react';
import { Container } from '@mui/material';
import PropTypes from 'prop-types';
import FooterEnd from '../../../components/footer/FooterEnd';
import HeaderLayout from '../../../components/header/layout';

export const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Container maxWidth="md">
        <div className="landing_page">
          <HeaderLayout />
          <main>{children}</main>
          <FooterEnd />
        </div>
      </Container>
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
