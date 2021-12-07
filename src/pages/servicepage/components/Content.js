import PropTypes from 'prop-types';
import { Box, Grid, useMediaQuery } from '@mui/material';
import React from 'react';
import PostContent from '../../../components/post/content/PostContent';

const Content = ({ content }) => {
  const matches = useMediaQuery('(max-width:600px)');
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          item
          container
          xs={12}
          md={12}
          sx={{
            padding: matches ? '0rem' : '1rem',
            textAlign: 'justify',
            lineHeight: matches ? '1.5' : '1.5'
          }}>
          <PostContent content={content} />
        </Grid>
      </Box>
    </>
  );
};

Content.propTypes = {
  content: PropTypes.string
};

export default Content;
