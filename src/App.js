import React from 'react';
import './App.css';
import AppRoutes from './routes';
import SEO from './seo/landingPage';

const App = () => {
  return (
    <React.Fragment>
      <SEO title="Mountain ski resort" description="Ski resort in the north of the Finland " />
      <AppRoutes />
    </React.Fragment>
  );
};

export default App;
