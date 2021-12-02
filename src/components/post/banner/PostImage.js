import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const PostImage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  //   const matches = useMediaQuery('(max-width:600px)');
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box
        component="img"
        sx={{
          height: matches ? '400px' : '200px',
          display: 'block',
          Width: '100%',
          overflow: 'hidden',
          width: '100%',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
        src="https://images.unsplash.com/photo-1551524559-8af4e6624178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1326&q=80"
        alt="post-image"
      />
    </Box>
  );
};

export default PostImage;
