import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/home/landing/LandingPage';

const AppRoutes = () => {
  console.log('AppRoutes');
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
};

export default AppRoutes;