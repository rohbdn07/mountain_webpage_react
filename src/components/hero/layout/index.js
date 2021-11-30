import React from 'react';
import HeroBannerSwipeable from '../banner/HeroBanner';
import Quote from '../quotes/Quote';

const HeroBannerLayout = () => {
  return (
    <React.Fragment>
      <HeroBannerSwipeable />
      <Quote />
    </React.Fragment>
  );
};

export default HeroBannerLayout;
