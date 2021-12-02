import { Box, Grid, useMediaQuery } from '@mui/material';
import React from 'react';
import PostContent from '../../../components/post/content/PostContent';

const Content = () => {
  const matches = useMediaQuery('(max-width:600px)');
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          xs={12}
          md={12}
          sx={{
            padding: matches ? '0 15px' : '1rem',
            textAlign: 'justify',
            lineHeight: matches ? '1.5' : '1.5'
          }}>
          <PostContent />
        </Grid>
      </Box>
    </>
  );
};

export default Content;
