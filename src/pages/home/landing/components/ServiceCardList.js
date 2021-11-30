import { Box } from '@mui/material';
import LargeCard from '../../../../components/card/largecard/LargeCard';
import Header from '../../../../components/common/header/Header';

export const ServiceCardList = () => {
  return (
    <>
      <Header title={'Lodges And Apartments'} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          // gridGap: '2rem',
          alignItems: 'flex-start',
          width: '100%',
          height: 'auto',
          marginTop: '1rem',
          marginBottom: '2rem',
          padding: '0.5rem'
        }}>
        <LargeCard />
      </Box>
    </>
  );
};
