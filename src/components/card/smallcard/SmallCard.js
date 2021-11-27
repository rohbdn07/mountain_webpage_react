import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { Button, CardActionArea, CardActions, CardContent } from '@mui/material';
import './styles.css';

// const SmallCard = () => {
//   return (
//     <Card
//       sx={{
//         maxWidth: 450,
//         boxShadow: '0px 0px 2px 0px rgba(0,0,0,0.75)',
//         width: '100%',
//         height: '100%',
//         position: 'relative',
//         overflow: 'hidden',
//         textAlign: 'center',
//         '&:hover': {
//           boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
//           opacity: '0',
//           transition: 'opacity 2s ease-in-out'
//         }
//       }}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="100%"
//           width="100%"
//           position="absolute"
//           image="https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4328ae53a316c822/version/1510667937/luxurious-ski-resorts-courchevel-copyright-nikolpetr-european-best-destinations.jpg"
//           alt="green iguana"
//         />
//         <CardContent>
//           <CardActions>
//             <Button size="small" color="primary">
//               Readmore
//             </Button>
//           </CardActions>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// };

// export default SmallCard;

const SmallCard = () => {
  return (
    <div className="img__wrap">
      <img
        className="img__img"
        src="https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4328ae53a316c822/version/1510667937/luxurious-ski-resorts-courchevel-copyright-nikolpetr-european-best-destinations.jpg"
      />
      <p className="img__button">Readmore</p>
    </div>
  );
};

export default SmallCard;
