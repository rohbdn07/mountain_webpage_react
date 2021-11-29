import React from 'react';
import HeroBannerLayout from '../../../components/hero/layout';
import { FooterSection } from './components/FooterSection';
import { PassionCardList } from './components/PassionCardList';
import { ServiceCardList } from './components/ServiceCardList';
import { Video } from './components/Video';
import { Layout } from './layout';
import './styles.css';

/**
 *
 * @returns {JSX} LandingPage
 */
const LandingPage = () => {
  return (
    <React.Fragment>
      <Layout>
        <HeroBannerLayout />
        <ServiceCardList />
        <PassionCardList />
        <Video />
        <FooterSection />
      </Layout>
    </React.Fragment>
  );
};

export default LandingPage;
