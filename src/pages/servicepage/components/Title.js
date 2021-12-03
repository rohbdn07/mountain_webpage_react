import { Box, Grid } from '@mui/material';
import PropTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';
import PostTitle from '../../../components/post/title/PostTitle';

const Title = ({ title }) => {
  const matches = useMediaQuery('(max-width:600px)');
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          item
          container
          xs={12}
          md={11}
          sx={{ padding: matches ? '0' : '0rem', marginTop: matches ? '1rem' : '1rem' }}>
          <PostTitle title={title} />
        </Grid>
      </Box>
    </>
  );
};

Title.propTypes = {
  title: PropTypes.string
};

export default Title;
