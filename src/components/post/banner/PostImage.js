import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const PostImage = ({ postImage }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  //   const matches = useMediaQuery('(max-width:600px)');

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box
        component="img"
        sx={{
          height: matches ? '400px' : '200px',
          display: 'block',
          Width: '100%',
          overflow: 'hidden',
          width: '100%',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
        src={postImage && `${postImage}`}
        alt="post-image"
      />
    </Box>
  );
};

PostImage.propTypes = {
  postImage: PropTypes.string
};

export default PostImage;
