import { Avatar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const PostAuthor = () => {
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
          <span>Rohit bhandari</span>
          <span>2021-11-12</span>
        </Typography>
      </Box>
    </>
  );
};

export default PostAuthor;
