import { Box, Container } from '@mui/material';
import React from 'react';
import LargeCard from '../../../components/card/largecard/LargeCard';
import SmallCard from '../../../components/card/smallcard/SmallCard';
import Header from '../../../components/common/header/Header';
import HeaderLayout from '../../../components/header/layout';
import HeroBannerLayout from '../../../components/hero/layout';
import NavbarLayout from '../../../components/navbar/layout';
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
            justifyContent: 'center',
            gridGap: '2rem',
            alignItems: 'center',
            width: '100%',
            height: 350,
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
            gridGap: '2rem',
            alignItems: 'center',
            width: '100%',
            marginTop: '1rem',
            marginBottom: '2rem'
          }}>
          <SmallCard />
          <SmallCard />
          <SmallCard />
        </Box>
      </>
    );
  };
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
        </div>
      </Container>
    </React.Fragment>
  );
};

export default LandingPage;
