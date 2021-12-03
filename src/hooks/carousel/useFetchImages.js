import React from 'react';
import CarouselService from '../../services/carousel/CarouselService';

/**
 *
 * @returns {object} isLoading, images and error).
 */
export const useFetchImages = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [thumbnail, setThumbnail] = React.useState([]);
  const [original, setOriginal] = React.useState([]);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    getCarouselImages();
  }, []);

  const getCarouselImages = async () => {
    setIsLoading(true);
    try {
      const { data } = await CarouselService.getAll();
      const getImages = await getImagesFromStrapi(data);
      // console.log(getImages);

      setOriginal(getImages.carouselImages);
      setThumbnail(getImages.thumbnails);

      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  return { isLoading, original, thumbnail, error };
};

/**
 *
 * @param {*} data  data(carousel images) from strapi.
 * @returns  images array.
 */
const getImagesFromStrapi = async (data) => {
  const images = data?.map((item) => ({
    thumbnail: item.coverImage.map((item) => item.formats.thumbnail.url),
    original: item.coverImage.map((image) => image.url),
    alt: 'images'
  }));
  // console.log('the images', images);
  const carouselImages = images.map((item) => item.original);
  // console.log('the carousel images', carouselImages);
  // const thumbnails = images.thumbnail;
  const thumbnails = images.map((item) => item.thumbnail);

  return { carouselImages, thumbnails };
};
