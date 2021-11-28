import { Box, Container } from '@mui/material';
import React from 'react';
import Address from '../../../components/address/card/Address';
import GoogleMap from '../../../components/address/card/GoogleMap';
import LargeCard from '../../../components/card/largecard/LargeCard';
import SmallCard from '../../../components/card/smallcard/SmallCard';
import Header from '../../../components/common/header/Header';
import BasicTextFields from '../../../components/form/card/Form';
import HeaderLayout from '../../../components/header/layout';
import HeroBannerLayout from '../../../components/hero/layout';
import NavbarLayout from '../../../components/navbar/layout';
import ResortVideo from '../../../components/videos/video/ResortVideo';
import './styles.css';

/**
 *
 * @returns {JSX} LandingPage
 */
const LandingPage = () => {
  //service card list
  const ServiceCardList = () => {
    return (
      <>
        <Header title={'Lodges And Apartments'} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            // gridGap: '2rem',
            alignItems: 'center',
            width: '100%',
            height: 'auto',
            marginTop: '2rem',
            marginBottom: '2rem',
            padding: '0.5rem'
          }}>
          <LargeCard />
          <LargeCard />
        </Box>
      </>
    );
  };

  //passion card list
  const PassionCardList = () => {
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

  const Videos = () => {
    return (
      <>
        <Header title={'Our Resort'} />
        <ResortVideo />
      </>
    );
  };

  const FooterSection = () => {
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

  // const Form = () => <BasicTextFields />;
  return (
    <React.Fragment>
      <Container maxWidth="md">
        <div className="landing_page">
          <div className="landing_page_header">
            <HeaderLayout />
          </div>
          <div>
            <NavbarLayout />
          </div>
          <div>
            <HeroBannerLayout />
          </div>
          <ServiceCardList />
          <PassionCardList />
          <Videos />
          <FooterSection />
        </div>
      </Container>
    </React.Fragment>
  );
};

export default LandingPage;
