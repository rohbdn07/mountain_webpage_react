import * as React from 'react';
import './styles.css';

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
