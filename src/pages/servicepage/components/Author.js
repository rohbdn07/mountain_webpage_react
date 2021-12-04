import { Box, Grid } from '@mui/material';
import PropTypes from 'prop-types';

// import useMediaQuery from '@mui/material/useMediaQuery';

import PostAuthor from '../../../components/post/author/PostAuthor';

const Author = ({ author, created }) => {
  //   const matches = useMediaQuery('(max-width:600px)');
  return (
    <>
      <Box sx={{ flexGrow: 1, borderBottom: '1px solid #adb5bd', marginBottom: '10px' }}>
        <Grid item container xs={12} md={7}>
          <PostAuthor author={author} created={created} />
        </Grid>
      </Box>
    </>
  );
};

Author.propTypes = {
  author: PropTypes.string,
  created: PropTypes.string
};

export default Author;
