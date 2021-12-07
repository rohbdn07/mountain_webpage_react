import React from 'react';
// import { Facebook } from '@mui/icons-material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
// import { FaCcVisa, FaCcPaypal, FaCcMastercard } from "react-icons/fa";
import './styles.css';

export default function FooterEnd() {
  return (
    <>
      <div className="footer_end">
        <div className="fotend_wrapper">
          <div className="fotend_left">
            <p>@mountain ski resort</p>
          </div>
          <div className="fotend_right">
            <p>
              <FacebookIcon fontSize="small" />
              <InstagramIcon fontSize="small" />
              <TwitterIcon fontSize="small" />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
