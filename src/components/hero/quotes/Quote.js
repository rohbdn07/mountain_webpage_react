import { Box, Typography } from '@mui/material';
import React from 'react';

const Quote = () => {
  return (
    <React.Fragment>
      <Box>
        <Typography variant="h6" color="black">
          A pair of skis are the ultimate transportation to freedom.
        </Typography>
        <Typography variant="h7" color="black">
          - Warren Miller
        </Typography>
      </Box>
    </React.Fragment>
  );
};

export default Quote;
