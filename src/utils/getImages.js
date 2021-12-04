export const getImagesUrlFromStripe = (arrayOfImages) => {
  const url = 'http://localhost:1337';
  return arrayOfImages?.map((imageUrl) => {
    // console.log(imageUrl.join('').startsWith('/uploads'));
    if (imageUrl.join('').startsWith('/uploads')) {
      return {
        imgPath: `${url}${imageUrl}`
      };
    } else {
      return {
        imgPath: `https://picsum.photos/200`
      };
    }
  });
};
