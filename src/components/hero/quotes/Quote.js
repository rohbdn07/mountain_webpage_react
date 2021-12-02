import { Box, Typography } from '@mui/material';
import React from 'react';

const Quote = () => {
  return (
    <React.Fragment>
      <Box sx={{ margin: '3rem', textAlign: 'center' }}>
        <Typography
          variant="h5"
          color="black"
          style={{ fontFamily: ['Dancing Script', 'cursive'].join(',') }}>
          A pair of skis are the ultimate transportation to freedom.
        </Typography>
        <Typography
          variant="h7"
          color="black"
          style={{ fontFamily: ['Dancing Script', 'cursive'].join(',') }}>
          - Warren Miller
        </Typography>
      </Box>
    </React.Fragment>
  );
};

export default Quote;
