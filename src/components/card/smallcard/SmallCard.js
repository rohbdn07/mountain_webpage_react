import * as React from 'react';
import { Link } from 'react-router-dom';
import { useFetchAllServicePost } from '../../../hooks/post/useFetchServicePost';
import { getImagesUrlFromStripe } from '../../../utils/getImages';
import './styles.css';

const SmallCard = () => {
  //fetching all service's posts.
  const { isLoading, data, isError, isSuccess } = useFetchAllServicePost();

  if (isError || !data) return <div>No Content Avaliable! We will back soon!!</div>;

  const postData = data?.data; //actual data is in data.data

  const thumbnailUrl = postData?.map((post) => {
    return post.coverImage.map((item) => item.formats.thumbnail.url);
  });

  const imageUrlPath = getImagesUrlFromStripe(thumbnailUrl);

  // console.log('the image url is', imageUrlPath);

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error!</div>;

  return (
    isSuccess &&
    postData?.map((post, index) => {
      return (
        <div className="img__wrap" key={post.id}>
          <img className="img__img" src={imageUrlPath.length > 0 && imageUrlPath[index].imgPath} />
          <Link to={`/services/${post.id}`}>
            <p className="img__button">Readmore</p>
          </Link>
        </div>
      );
    })
  );
};

export default SmallCard;
