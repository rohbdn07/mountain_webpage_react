import { Box, Grid } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import PostTitle from '../../../components/post/title/PostTitle';

const Title = () => {
  const matches = useMediaQuery('(max-width:600px)');
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          xs={12}
          md={11}
          sx={{ padding: matches ? '0' : '0rem', marginTop: matches ? '1rem' : '1rem' }}>
          <PostTitle />
        </Grid>
      </Box>
    </>
  );
};

export default Title;
