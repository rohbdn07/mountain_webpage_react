import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const LargeCard = () => {
  return (
    <Card sx={{ maxWidth: 450, boxShadow: '0px 0px 2px 0px rgba(0,0,0,0.75)' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image="https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4328ae53a316c822/version/1510667937/luxurious-ski-resorts-courchevel-copyright-nikolpetr-european-best-destinations.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="left">
            Apartments
          </Typography>
          <Typography variant="body2" color="text.secondary" align="left">
            Whether you’re getting yourself ramped-up for your next ski and snowboard holiday or
            you’re just trying to escape the doldrums of your work day with a bit of ski-escapism,
            we make are sure to get you in the mood for snow!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default LargeCard;
