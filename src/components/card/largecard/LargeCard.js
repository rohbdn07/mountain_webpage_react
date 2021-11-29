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
  console.log(isLoading);
  console.log(error);
  console.log(posts);
  return (
    <Box sx={{ maxWidth: 400, cursor: 'none' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image="https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4328ae53a316c822/version/1510667937/luxurious-ski-resorts-courchevel-copyright-nikolpetr-european-best-destinations.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="h5" component="div" align="left">
            Apartments
          </Typography>
          <Typography variant="body2" color="text.secondary" align="left">
            Whether you’re getting yourself ramped-up for your next ski and snowboard holiday or
            you’re just trying to escape the doldrums of your work day with a bit of ski-escapism,
            we make are sure to get you in the mood for snow!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Box>
  );
};

useFetchAllPost.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  error: PropTypes.string
};

export default LargeCard;
