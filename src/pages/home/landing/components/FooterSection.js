// import { Box } from '@mui/material';
import Address from '../../../../components/address/card/Address';
import GoogleMap from '../../../../components/address/card/GoogleMap';
import BasicTextFields from '../../../../components/form/card/Form';
import './styles.css';

/**
 * @returns {React.Component} FooterSection component with GoogleMap and Address
 *  components inside it.
 */
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
