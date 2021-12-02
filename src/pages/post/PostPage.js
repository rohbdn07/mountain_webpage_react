import React from 'react';
import Content from './components/Content';
import PostBanner from './components/PostBanner';
import Title from './components/Title';
import { Layout } from './layout';

/**
 *
 * @returns {JSX} LandingPage
 */
const PostPage = () => {
  return (
    <React.Fragment>
      <Layout>
        <PostBanner />
        <Title />
        <Content />
      </Layout>
    </React.Fragment>
  );
};

export default PostPage;
