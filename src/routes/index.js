import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
// import LandingPage from '../pages/home/landing/LandingPage';
// import PostPage from '../pages/services/PostPage';

const HomePage = React.lazy(() => import('../pages/home/landing/LandingPage'));
const ServicePage = React.lazy(() => import('../pages/servicepage/PostPage'));

// Create a client
const queryClient = new QueryClient();

const AppRoutes = () => {
  return (
    <>
      <React.Suspense fallback={<>Loading...</>}>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="services/:id" element={<ServicePage />} />
          </Routes>
        </QueryClientProvider>
      </React.Suspense>
    </>
  );
};

export default AppRoutes;
