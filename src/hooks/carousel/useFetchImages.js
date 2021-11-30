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
    thumbnail: item.image.map((item) => item.formats.thumbnail.url),
    original: item.image.map((image) => image.url),
    alt: 'images'
  }));

  const carouselImages = images[0].original;
  const thumbnails = images[0].thumbnail;

  return { carouselImages, thumbnails };
};
