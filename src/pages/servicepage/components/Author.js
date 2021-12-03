import { Box, Grid } from '@mui/material';
// import useMediaQuery from '@mui/material/useMediaQuery';

import PostAuthor from '../../../components/post/author/PostAuthor';

const Author = () => {
  //   const matches = useMediaQuery('(max-width:600px)');
  return (
    <>
      <Box sx={{ flexGrow: 1, borderBottom: '1px solid #adb5bd', marginBottom: '10px' }}>
        <Grid item container xs={12} md={7}>
          <PostAuthor />
        </Grid>
      </Box>
    </>
  );
};

export default Author;
