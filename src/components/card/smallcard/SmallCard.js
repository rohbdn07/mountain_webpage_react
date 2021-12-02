import * as React from 'react';
import { Link } from 'react-router-dom';
import { useFetchImages } from '../../../hooks/carousel/useFetchImages';
import { getImagesUrlFromStripe } from '../../../utils/getImages';
import './styles.css';

const SmallCard = () => {
  const { thumbnail } = useFetchImages();

  const imageUrlPath = getImagesUrlFromStripe(thumbnail);

  return thumbnail.map((post, index) => {
    return (
      <div className="img__wrap" key={post[index]}>
        <img className="img__img" src={imageUrlPath.length > 0 && imageUrlPath[index].imgPath} />
        <Link to={`/post/${post[index]}`}>
          <p className="img__button">Readmore</p>
        </Link>
      </div>
    );
  });
};

export default SmallCard;
