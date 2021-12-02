import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/home/landing/LandingPage';
import PostPage from '../pages/post/PostPage';

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="post/:id" element={<PostPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
