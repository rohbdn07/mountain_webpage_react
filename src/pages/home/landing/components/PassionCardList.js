import { Box } from '@mui/material';
import SmallCard from '../../../../components/card/smallcard/SmallCard';
import Header from '../../../../components/common/header/Header';

/**
 *
 * @returns {React.Component}  A passion card list component.
 */
export const PassionCardList = () => {
  return (
    <>
      <Header title={'Our Passion'} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gridGap: '1rem',
          alignItems: 'start',
          width: '100%',
          marginTop: '1rem',
          marginBottom: '3rem'
        }}>
        <SmallCard />
      </Box>
    </>
  );
};
