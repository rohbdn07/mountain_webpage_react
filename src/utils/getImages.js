export const getImagesUrlFromStripe = (images) => {
  const url = 'http://localhost:1337';

  return images?.map((image) => {
    return {
      imgPath: `${url}${image}`
    };
  });
};
