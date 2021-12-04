import { Box } from '@mui/material';
import React from 'react';
import SubscribeForm from '../../../../components/subcription/newsletter/SubscribeForm';

const NewsLetterForm = () => {
  return (
    <>
      <Box sx={{ marginTop: '3rem', marginBottom: '1rem', padding: '1rem' }}>
        <SubscribeForm />
      </Box>
    </>
  );
};

export default NewsLetterForm;
