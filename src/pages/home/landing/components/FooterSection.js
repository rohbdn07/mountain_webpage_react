import { Box } from '@mui/material';
import Address from '../../../../components/address/card/Address';
import GoogleMap from '../../../../components/address/card/GoogleMap';
import BasicTextFields from '../../../../components/form/card/Form';

export const FooterSection = () => {
  return (
    <>
      <Box
        sx={{
          // display: 'grid',
          // gridTemplateColumns: 'repeat(3, 1fr)',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'flex-start',
          // columnGap: '2rem',
          flexWrap: 'wrap',
          // width: '100%',
          maxHeight: '350px',
          height: '300px',
          position: 'relative',
          marginTop: '2rem',
          marginBottom: '2rem',
          backgroundColor: '#f5f5f5',
          // border: '1px solid red',
          padding: '0.5rem'
        }}>
        <BasicTextFields />
        <Address />
        <GoogleMap />
      </Box>
    </>
  );
};
