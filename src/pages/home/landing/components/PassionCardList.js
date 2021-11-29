import { Box } from '@mui/material';
import SmallCard from '../../../../components/card/smallcard/SmallCard';
import Header from '../../../../components/common/header/Header';

export const PassionCardList = () => {
  return (
    <>
      <Header title={'Our Passion'} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gridGap: '2rem',
          alignItems: 'center',
          width: '100%',
          marginTop: '1rem',
          marginBottom: '3rem'
          // border: '1px solid #e0e0e0'
        }}>
        <SmallCard />
        <SmallCard />
        <SmallCard />
      </Box>
    </>
  );
};
