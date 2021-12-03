import React from 'react';
import PropTypes from 'prop-types';

import PostImage from '../../../components/post/banner/PostImage';

const PostBanner = ({ image }) => {
  return (
    <>
      <PostImage postImage={image} />
    </>
  );
};

PostBanner.propTypes = {
  image: PropTypes.string
};

export default PostBanner;
