// import { Box } from '@mui/material';
import Address from '../../../../components/address/card/Address';
import GoogleMap from '../../../../components/address/card/GoogleMap';
import BasicTextFields from '../../../../components/form/card/Form';
import './styles.css';

// export const FooterSection = () => {
//   return (
//     <>
//       <Box
//         sx={{
//           // display: 'grid',
//           // gridTemplateColumns: 'repeat(3, 1fr)',
//           display: 'flex',
//           justifyContent: 'space-around',
//           alignItems: 'flex-start',
//           // columnGap: '2rem',
//           flexWrap: 'wrap',
//           width: '100%',
//           maxHeight: '350px',
//           height: '300px',
//           position: 'relative',
//           marginTop: '2rem',
//           marginBottom: '2rem',
//           backgroundColor: '#f5f5f5',
//           // border: '1px solid red',
//           padding: '0.5rem'
//         }}>
//         <BasicTextFields />
//         <Address />
//         <GoogleMap />
//       </Box>
//     </>
//   );
// };

export const FooterSection = () => {
  return (
    <>
      <div className="footer_section">
        <div className="footer_section_wrapper">
          <BasicTextFields />
          <Address />
          <GoogleMap />
        </div>
      </div>
    </>
  );
};
