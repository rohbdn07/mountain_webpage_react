import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const SEO = ({ title, description, url }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="mountain ski resort" />
      <meta
        name="keywords"
        content="ski, resort, north, country, ski loges, ski apartment, ski holiday,finland"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="@seo" />
      <meta name="twitter:creator" content="@seo" />
      <meta name="description" content="holiday package for ski in finland" />
    </Helmet>
  );
};

export default SEO;

SEO.propsTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  url: PropTypes.string
};
