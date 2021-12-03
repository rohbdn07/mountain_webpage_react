import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import LandingPage from '../pages/home/landing/LandingPage';
// import PostPage from '../pages/services/PostPage';

const HomePage = React.lazy(() => import('../pages/home/landing/LandingPage'));
const ServicePage = React.lazy(() => import('../pages/servicepage/PostPage'));

const AppRoutes = () => {
  return (
    <>
      <React.Suspense fallback={<>Loading...</>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="services/:id" element={<ServicePage />} />
        </Routes>
      </React.Suspense>
    </>
  );
};

export default AppRoutes;
