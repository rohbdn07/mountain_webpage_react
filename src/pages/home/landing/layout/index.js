import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@mui/material';
import HeaderLayout from '../../../../components/header/layout';
import NavbarLayout from '../../../../components/navbar/layout';

export const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Container maxWidth="md">
        <div className="landing_page">
          <div className="landing_page_header">
            <HeaderLayout />
          </div>
          <div>
            <NavbarLayout />
          </div>
          <main>{children}</main>
        </div>
      </Container>
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
