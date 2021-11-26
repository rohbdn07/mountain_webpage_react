import React from 'react';
import HeaderLayout from '../../../components/header/layout';

const LandingPage = () => {
  return (
    <React.Fragment>
      <div className="landing_page">
        <div className="landing_page_header">
          <HeaderLayout />
        </div>
        <div className="landing_page_body">
          <div className="landing_page_body_content">
            <div className="landing_page_body_content_title">
              <h1>Mountain Ski Resort</h1>
              <p>A simple web application for the mountain climbing community</p>
            </div>
            <div className="landing_page_body_content_links">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
