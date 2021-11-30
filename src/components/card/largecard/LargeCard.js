import * as React from 'react';
import PropTypes from 'prop-types';
// import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import { useFetchAllPost } from '../../../hooks/post/useGetPost';

const LargeCard = () => {
  const { isLoading, posts, error } = useFetchAllPost();

  const url = 'http://localhost:1337';

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isLoading && error ? (
        <p>Error in Fetching data...</p>
      ) : (
        posts &&
        posts.map((post) => {
          return (
            <Box key={post.id} sx={{ maxWidth: 400, cursor: 'none' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={post.title}
                  height="220"
                  image={url + post.cover[0].formats.thumbnail.url}
                  title={post.title}
                />
                <CardContent sx={{ padding: '0px', paddingTop: '1rem', paddingBottom: '1rem' }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{ textAlign: 'start' }}>
                    {post.content}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Box>
          );
        })
      )}
    </>
  );
};

useFetchAllPost.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  error: PropTypes.string
};

export default LargeCard;
