import PropTypes from 'prop-types';
import { Box, useMediaQuery } from '@mui/material';
import React from 'react';

const PostContent = ({ content }) => {
  const matches = useMediaQuery('(max-width:600px)');
  return (
    <>
      <Box
        sx={{
          fontSize: matches ? '12px' : '0.8rem'
        }}>
        <p>{content ? content : 'Post is deleted'}</p>
      </Box>
    </>
  );
};

PostContent.propTypes = {
  content: PropTypes.string
};

export default PostContent;
