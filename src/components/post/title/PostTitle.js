import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const PostTitle = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <>
      <Box
        sx={{
          fontSize: matches ? '1rem' : '0.5rem',
          fontWeight: 'bold',
          mb: 3,
          letterSpacing: '0.1rem'
        }}>
        <h1>Enjoy ski from the Mountain Ski Resort. We like to welcome you</h1>
      </Box>
    </>
  );
};

export default PostTitle;
