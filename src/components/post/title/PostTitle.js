import { Box } from '@mui/material';
import PropTypes from 'prop-types';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const PostTitle = ({ title }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <>
      <Box
        sx={{
          fontSize: matches ? '1rem' : '0.5rem',
          fontWeight: 'bold',
          padding: '0.5rem',
          letterSpacing: '0.1rem'
        }}>
        <h1>{title}</h1>
      </Box>
    </>
  );
};

PostTitle.propTypes = {
  title: PropTypes.string
};

export default PostTitle;
