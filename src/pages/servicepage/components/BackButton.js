import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  let navigate = useNavigate();
  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          //   justifyContent: 'center',
          cursor: 'pointer',
          color: '#6c757d',
          padding: '0rem',
          fontSize: '0.8rem',
          width: 'fit-content'
        }}
        onClick={() => navigate('/')}>
        <ArrowBackIosIcon fontSize="small" />
        <p>Back</p>
      </div>
    </>
  );
};

export default BackButton;
