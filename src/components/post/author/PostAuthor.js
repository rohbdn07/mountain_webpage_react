import PropTypes from 'prop-types';
import { Avatar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const PostAuthor = ({ author, created }) => {
  const getDateOfPost = new Date(created).toLocaleDateString();
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
          padding: '0.5rem',
          width: 'fit-content'
        }}>
        <Avatar
          sx={{
            width: '2rem',
            height: '2rem',
            mr: '0.2rem',
            borderRadius: '50%'
          }}
          src={'https://picsum.photos/200'}
        />
        <Typography
          variant="span"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            fontSize: '0.7rem',
            fontWeight: 'bold',
            color: '#adb5bd',
            padding: '0.5rem ',
            width: 'fit-content',
            '& > span': {
              paddingRight: '0.5rem'
            }
          }}>
          <span>{author}</span>
          <span>{getDateOfPost}</span>
        </Typography>
      </Box>
    </>
  );
};

PostAuthor.propTypes = {
  author: PropTypes.string,
  created: PropTypes.string
};
export default PostAuthor;
