import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ title }) => {
  return (
    <>
      <Box>
        <Typography
          variant="p"
          component="h4"
          align="left"
          sx={{ fontWeight: '1rem', padding: '0.5rem' }}>
          {title}
        </Typography>
      </Box>
    </>
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired
};
